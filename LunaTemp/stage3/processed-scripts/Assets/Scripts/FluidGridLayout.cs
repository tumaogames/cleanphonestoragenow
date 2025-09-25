using UnityEngine;
using UnityEngine.UI;

#if UNITY_EDITOR
using UnityEditor;
#endif

/// <summary>
/// Production-grade fluid grid for Unity UI:
/// - Best-fit columns/rows OR fixed constraints
/// - Alignment: Start/Center/End/Justify per axis (+ centerX/centerY toggles)
/// - Order: RowMajor/ColumnMajor, LTR/RTL, TTB/BTB, optional reverse
/// - Cell sizing: keep square, fixed aspect, min/max clamps
/// - Overflow modes: ClampToParent, AllowVerticalScroll, ScaleDownToFit
/// - Pixel snapping, optional child resizing, auto rebuild on child changes
/// - ScrollRect friendly
/// </summary>
[ExecuteAlways]
[RequireComponent(typeof(RectTransform))]
public class FluidGridLayout : LayoutGroup
{
    // ===== Public API =====

    public enum FitAxis { Both, HorizontalOnly, VerticalOnly }
    public enum OverflowMode { ClampToParent, AllowVerticalScroll, ScaleDownToFit }
    public enum Constraint { None, FixedColumns, FixedRows }
    public enum OrderMode { RowMajor, ColumnMajor }
    public enum HorizontalDir { LeftToRight, RightToLeft }
    public enum VerticalDir { TopToBottom, BottomToTop }
    public enum HAlign { Start, Center, End, Justify }
    public enum VAlign { Start, Center, End, Justify }

    [Header("Grid Fit")]
    public FitAxis fitAxis = FitAxis.Both;
    public OverflowMode overflow = OverflowMode.ClampToParent;

    [Tooltip("Choose how columns/rows are determined.")]
    public Constraint constraint = Constraint.None;

    [Tooltip("Used when Constraint = FixedColumns or FixedRows.")]
    [Min(1)] public int constraintCount = 3;

    [Tooltip("When Constraint=None, grid will try from min..max columns and pick best.")]
    public Vector2Int columnsRange = new Vector2Int(1, 12);

    [Tooltip("If > 0, only consider column counts that are multiples of this (symmetry). 0 = ignore.")]
    public int evenness = 0;

    [Header("Cell Sizing")]
    [Tooltip("If true, forces a square cell (W=H).")]
    public bool keepSquare = false;

    [Tooltip("If true (and not keepSquare), enforces given aspect W/H.")]
    public bool enforceAspect = false;

    [Tooltip("Aspect ratio W/H when enforceAspect = true.")]
    [Min(0.01f)] public float aspectWH = 1.0f;

    [Min(0)] public Vector2 minCell = new Vector2(80, 80);
    [Min(0)] public Vector2 maxCell = new Vector2(4096, 4096);

    [Header("Spacing & Alignment")]
    [Min(0)] public Vector2 spacing = new Vector2(8, 8);

    [Tooltip("Horizontal alignment of the laid-out block within the parent's padded area.")]
    public HAlign horizontalAlign = HAlign.Start;

    [Tooltip("Vertical alignment of the laid-out block within the parent's padded area.")]
    public VAlign verticalAlign = VAlign.Start;

    [Tooltip("Convenience toggles to center along an axis (applied after Start alignment).")]
    public bool centerX = false;
    public bool centerY = false;

    [Header("Order & Direction")]
    public OrderMode order = OrderMode.RowMajor;
    public HorizontalDir horizontalDirection = HorizontalDir.LeftToRight;
    public VerticalDir verticalDirection = VerticalDir.TopToBottom;

    [Tooltip("Reverse the final child order after direction/order are applied.")]
    public bool reverseOrder = false;

    [Header("Child Control")]
    [Tooltip("If false, children keep their size; grid only positions them. If true, grid sets their size to cell.")]
    public bool overrideChildSize = true;

    [Header("Quality")]
    [Tooltip("Round positions/sizes to whole pixels to avoid blurriness.")]
    public bool snapToPixels = true;

    [Tooltip("Automatically rebuild layout when children are added/removed/enabled/disabled.")]
    public bool autoRebuildOnChildChange = true;

    [Header("No-Overflow (ScaleDownToFit)")]
    [Tooltip("If true, while shrinking to fit, will not go below minCell.")]
    public bool respectMinCellOnScaleDown = false;

    [Tooltip("When shrinking to fit, preserve square/fixed aspect (recommended).")]
    public bool preserveAspectOnScaleDown = true;

    [Header("Debug (read-only)")]
    [SerializeField, ReadOnly] private int _chosenColumns;
    [SerializeField, ReadOnly] private int _chosenRows;
    [SerializeField, ReadOnly] private Vector2 _chosenCell;

    // ===== LayoutGroup overrides =====

    public override void CalculateLayoutInputHorizontal()
    {
        base.CalculateLayoutInputHorizontal();
        ComputeLayout();
        float prefW = padding.horizontal + _chosenColumns * _chosenCell.x + spacing.x * Mathf.Max(0, _chosenColumns - 1);
        SetLayoutInputForAxis(prefW, prefW, -1, 0);
    }

    public override void CalculateLayoutInputVertical()
    {
        float prefH = padding.vertical + _chosenRows * _chosenCell.y + spacing.y * Mathf.Max(0, _chosenRows - 1);
        SetLayoutInputForAxis(prefH, prefH, -1, 1);
    }

    public override void SetLayoutHorizontal() => ApplyChildrenLayout();
    public override void SetLayoutVertical() => ApplyChildrenLayout();

    // ===== Core compute =====

    private void ComputeLayout()
    {
        var rect = rectTransform.rect;
        float parentW = Mathf.Max(0, rect.width - padding.horizontal);
        float parentH = Mathf.Max(0, rect.height - padding.vertical);

        int childCount = GetActiveChildCount();
        if (childCount == 0 || parentW <= 1 || parentH <= 1)
        {
            _chosenColumns = 0; _chosenRows = 0; _chosenCell = Vector2.zero;
            return;
        }

        int minCols = Mathf.Max(1, columnsRange.x);
        int maxCols = Mathf.Max(minCols, columnsRange.y);

        float bestScore = float.NegativeInfinity;
        int bestCols = 1;
        int bestRows = childCount;
        Vector2 bestCell = Vector2.zero;

        void Consider(int cols)
        {
            if (cols < 1) cols = 1;
            if (evenness > 0 && (cols % evenness) != 0) return;

            int rows = Mathf.CeilToInt(childCount / (float)cols);

            // Candidate cell sizes from width/height fits
            float totalSpacingX = spacing.x * Mathf.Max(0, cols - 1);
            float cw = (parentW - totalSpacingX) / cols;

            float ch;
            if (overflow == OverflowMode.AllowVerticalScroll)
            {
                // Fit width; vertical can scroll or be derived
                if (keepSquare) ch = cw;
                else if (enforceAspect) ch = cw / Mathf.Max(0.01f, aspectWH);
                else
                {
                    float totalSpacingY = spacing.y * Mathf.Max(0, rows - 1);
                    ch = (parentH - totalSpacingY) / Mathf.Max(1, rows);
                }
            }
            else
            {
                float totalSpacingY = spacing.y * Mathf.Max(0, rows - 1);
                ch = (parentH - totalSpacingY) / rows;
                if (keepSquare) ch = cw;
                else if (enforceAspect) ch = cw / Mathf.Max(0.01f, aspectWH);
            }

            float cellW = Mathf.Clamp(cw, minCell.x, maxCell.x);
            float cellH = (keepSquare) ? cellW :
                          (enforceAspect ? Mathf.Clamp(cellW / Mathf.Max(0.01f, aspectWH), minCell.y, maxCell.y)
                                         : Mathf.Clamp(ch, minCell.y, maxCell.y));

            if (fitAxis == FitAxis.HorizontalOnly) cellH = keepSquare ? cellW : cellH;
            if (fitAxis == FitAxis.VerticalOnly) cellW = keepSquare ? cellH : cellW;

            // Compute raw used space
            float usedW = cols * cellW + spacing.x * Mathf.Max(0, cols - 1);
            float usedH = rows * cellH + spacing.y * Mathf.Max(0, rows - 1);

            bool fits = true;
            const float eps = 0.5f;

            if (overflow == OverflowMode.ClampToParent)
            {
                fits = (usedW <= parentW + eps) && (usedH <= parentH + eps);
            }
            else if (overflow == OverflowMode.ScaleDownToFit)
            {
                // Uniformly scale down to fit inside parent if needed
                float scaleX = (cols > 0) ? (parentW - spacing.x * Mathf.Max(0, cols - 1)) / Mathf.Max(1e-5f, cols * cellW) : 1f;
                float scaleY = (rows > 0) ? (parentH - spacing.y * Mathf.Max(0, rows - 1)) / Mathf.Max(1e-5f, rows * cellH) : 1f;
                float scale = Mathf.Min(scaleX, scaleY, 1f); // never scale up

                if (scale < 1f)
                {
                    float newW = cellW * scale;
                    float newH;

                    if (keepSquare || enforceAspect || preserveAspectOnScaleDown)
                    {
                        // Preserve aspect/squareness
                        newH = cellH * scale;
                    }
                    else
                    {
                        // Non-uniform allowed (but still use same scale so both axes fit)
                        newH = cellH * scale;
                    }

                    if (respectMinCellOnScaleDown)
                    {
                        newW = Mathf.Max(minCell.x, newW);
                        newH = Mathf.Max(minCell.y, newH);
                    }

                    newW = Mathf.Min(newW, maxCell.x);
                    newH = Mathf.Min(newH, maxCell.y);

                    cellW = newW;
                    cellH = newH;

                    usedW = cols * cellW + spacing.x * Mathf.Max(0, cols - 1);
                    usedH = rows * cellH + spacing.y * Mathf.Max(0, rows - 1);
                }

                fits = (usedW <= parentW + eps) && (usedH <= parentH + eps);
            }
            // AllowVerticalScroll: no strict fit check (height may exceed)

            if (!fits) return;

            // Score: prefer larger cell area; break ties by fewer rows, then fewer cols
            float score = cellW * cellH * 1000f - rows * 1f - cols * 0.1f;

            if (score > bestScore)
            {
                bestScore = score;
                bestCols = cols;
                bestRows = rows;
                bestCell = new Vector2(cellW, cellH);
            }
        }

        // Search depending on constraint
        switch (constraint)
        {
            case Constraint.FixedColumns:
                Consider(constraintCount);
                break;

            case Constraint.FixedRows:
                {
                    int rows = Mathf.Max(1, constraintCount);
                    int cols = Mathf.CeilToInt(childCount / (float)rows);
                    Consider(cols);
                }
                break;

            default:
                for (int cols = minCols; cols <= maxCols; cols++) Consider(cols);
                if (bestScore == float.NegativeInfinity) Consider(minCols);
                break;
        }

        // Fallback in extreme cases
        if (bestScore == float.NegativeInfinity)
        {
            bestCols = Mathf.Clamp(childCount, 1, Mathf.Max(1, columnsRange.y));
            bestRows = Mathf.CeilToInt(childCount / (float)bestCols);

            float cw = Mathf.Max(minCell.x, (parentW - spacing.x * Mathf.Max(0, bestCols - 1)) / bestCols);
            float ch = keepSquare ? cw
                   : enforceAspect ? cw / Mathf.Max(0.01f, aspectWH)
                   : (overflow == OverflowMode.AllowVerticalScroll
                        ? minCell.y
                        : Mathf.Max(minCell.y, (parentH - spacing.y * Mathf.Max(0, bestRows - 1)) / bestRows));

            bestCell = new Vector2(
                Mathf.Clamp(cw, minCell.x, maxCell.x),
                Mathf.Clamp(ch, minCell.y, maxCell.y)
            );
        }

        _chosenColumns = Mathf.Max(1, bestCols);
        _chosenRows = Mathf.Max(1, bestRows);
        _chosenCell = bestCell;
    }

    // ===== Apply layout =====

    private void ApplyChildrenLayout()
    {
        var rect = rectTransform.rect;
        if (_chosenColumns <= 0 || _chosenRows <= 0) return;

        // Calculate total used space with chosen cell
        float usedW0 = _chosenColumns * _chosenCell.x + spacing.x * Mathf.Max(0, _chosenColumns - 1);
        float usedH0 = _chosenRows * _chosenCell.y + spacing.y * Mathf.Max(0, _chosenRows - 1);

        float parentW = Mathf.Max(0, rect.width - padding.horizontal);
        float parentH = Mathf.Max(0, rect.height - padding.vertical);

        // Copy spacing (may be modified for Justify)
        float spacingX = spacing.x;
        float spacingY = spacing.y;

        // Alignment start positions
        float startX = padding.left;
        float startY = padding.top;

        switch (horizontalAlign)
        {
            case HAlign.Center: startX = padding.left + Mathf.Max(0, (parentW - usedW0) * 0.5f); break;
            case HAlign.End: startX = padding.left + Mathf.Max(0, parentW - usedW0); break;
            case HAlign.Justify:
                // base start left; spacing adjusted below
                break;
        }
        if (centerX) startX = padding.left + Mathf.Max(0, (parentW - usedW0) * 0.5f);

        switch (verticalAlign)
        {
            case VAlign.Center: startY = padding.top + Mathf.Max(0, (parentH - usedH0) * 0.5f); break;
            case VAlign.End: startY = padding.top + Mathf.Max(0, parentH - usedH0); break;
            case VAlign.Justify:
                // base start top; spacing adjusted below
                break;
        }
        if (centerY) startY = padding.top + Mathf.Max(0, (parentH - usedH0) * 0.5f);

        // Adjust spacing for Justify (distribute remaining space)
        if (horizontalAlign == HAlign.Justify && _chosenColumns > 1 && parentW > usedW0)
        {
            float freeW = Mathf.Max(0, parentW - (_chosenColumns * _chosenCell.x));
            spacingX = freeW / Mathf.Max(1, _chosenColumns - 1);
        }
        if (verticalAlign == VAlign.Justify && _chosenRows > 1 && parentH > usedH0)
        {
            float freeH = Mathf.Max(0, parentH - (_chosenRows * _chosenCell.y));
            spacingY = freeH / Mathf.Max(1, _chosenRows - 1);
        }

        // Direction multipliers
        int dx = (horizontalDirection == HorizontalDir.LeftToRight) ? 1 : -1;
        int dy = (verticalDirection == VerticalDir.TopToBottom) ? 1 : -1;

        // Place children
        int activeCount = GetActiveChildCount();
        int placed = 0;

        for (int rawIndex = 0; rawIndex < rectTransform.childCount; rawIndex++)
        {
            var child = rectTransform.GetChild(rawIndex) as RectTransform;
            if (child == null || !child.gameObject.activeInHierarchy) continue;

            int displayIndex = placed++;

            // Map index to row/col
            int col, row;
            if (order == OrderMode.RowMajor)
            {
                col = displayIndex % _chosenColumns;
                row = displayIndex / _chosenColumns;
            }
            else
            {
                row = displayIndex % _chosenRows;
                col = displayIndex / _chosenRows;
            }

            // Reverse mapping if requested
            if (reverseOrder)
            {
                int lastIndex = activeCount - 1 - displayIndex;
                if (order == OrderMode.RowMajor)
                {
                    col = lastIndex % _chosenColumns;
                    row = lastIndex / _chosenColumns;
                }
                else
                {
                    row = lastIndex % _chosenRows;
                    col = lastIndex / _chosenRows;
                }
            }

            // Apply direction flips
            int drawCol = (dx == 1) ? col : (_chosenColumns - 1 - col);
            int drawRow = (dy == 1) ? row : (_chosenRows - 1 - row);

            float x = startX + drawCol * (_chosenCell.x + spacingX);
            float y = startY + drawRow * (_chosenCell.y + spacingY);

            if (snapToPixels) { x = Mathf.Round(x); y = Mathf.Round(y); }

            if (overrideChildSize)
            {
                SetChildAlongAxis(child, 0, x, snapToPixels ? Mathf.Round(_chosenCell.x) : _chosenCell.x);
                SetChildAlongAxis(child, 1, y, snapToPixels ? Mathf.Round(_chosenCell.y) : _chosenCell.y);
            }
            else
            {
                SetChildAlongAxis(child, 0, x);
                SetChildAlongAxis(child, 1, y);
            }
        }

        // ScrollRect support: grow content vertically
        if (overflow == OverflowMode.AllowVerticalScroll && _chosenColumns > 0 && _chosenRows > 0)
        {
            float contentH = padding.vertical + _chosenRows * _chosenCell.y + spacingY * Mathf.Max(0, _chosenRows - 1);
            if (snapToPixels) contentH = Mathf.Round(contentH);
            rectTransform.SetSizeWithCurrentAnchors(RectTransform.Axis.Vertical, contentH);
        }
    }

    // ===== Utilities =====

    private int GetActiveChildCount()
    {
        int count = 0;
        for (int i = 0; i < rectTransform.childCount; i++)
        {
            var rt = rectTransform.GetChild(i) as RectTransform;
            if (rt != null && rt.gameObject.activeInHierarchy) count++;
        }
        return count;
    }

    protected override void OnRectTransformDimensionsChange()
    {
        base.OnRectTransformDimensionsChange();
        SetDirty();
    }

    protected override void OnEnable()
    {
        base.OnEnable();
        SetDirty();
    }

    protected override void OnTransformChildrenChanged()
    {
        base.OnTransformChildrenChanged();
        if (autoRebuildOnChildChange) SetDirty();
    }

#if UNITY_EDITOR
    protected override void OnValidate()
    {
        base.OnValidate();
        columnsRange.x = Mathf.Max(1, columnsRange.x);
        columnsRange.y = Mathf.Max(columnsRange.x, columnsRange.y);
        constraintCount = Mathf.Max(1, constraintCount);
        aspectWH = Mathf.Max(0.01f, aspectWH);

        if (overflow == OverflowMode.ScaleDownToFit && !overrideChildSize)
            Debug.LogWarning($"{name}: ScaleDownToFit works best when 'overrideChildSize' is enabled.", this);

        SetDirty();
    }

    [ContextMenu("Rebuild Now")]
    private void ContextRebuild() => SetDirty();

    private void OnDrawGizmosSelected()
    {
        if (!enabled || _chosenColumns <= 0 || _chosenRows <= 0) return;

        var r = rectTransform;
        var rect = r.rect;

        Gizmos.color = new Color(0f, 0.6f, 1f, 0.35f);

        float parentW = Mathf.Max(0, rect.width - padding.horizontal);
        float parentH = Mathf.Max(0, rect.height - padding.vertical);

        float usedW = _chosenColumns * _chosenCell.x + spacing.x * Mathf.Max(0, _chosenColumns - 1);
        float usedH = _chosenRows * _chosenCell.y + spacing.y * Mathf.Max(0, _chosenRows - 1);

        float px = padding.left;
        float py = padding.top;

        // Mirror alignment calc (approx)
        if (horizontalAlign == HAlign.Center || centerX)
            px = padding.left + Mathf.Max(0, (parentW - usedW) * 0.5f);
        else if (horizontalAlign == HAlign.End)
            px = padding.left + Mathf.Max(0, parentW - usedW);

        if (verticalAlign == VAlign.Center || centerY)
            py = padding.top + Mathf.Max(0, (parentH - usedH) * 0.5f);
        else if (verticalAlign == VAlign.End)
            py = padding.top + Mathf.Max(0, parentH - usedH);

        // Draw rough cell previews (local space)
        for (int row = 0; row < _chosenRows; row++)
        {
            for (int col = 0; col < _chosenColumns; col++)
            {
                float x = px + col * (_chosenCell.x + spacing.x);
                float y = py + row * (_chosenCell.y + spacing.y);
                var center = r.TransformPoint(new Vector3(x + _chosenCell.x * 0.5f, -(y + _chosenCell.y * 0.5f), 0f));
                var size = r.TransformVector(new Vector3(_chosenCell.x, _chosenCell.y, 0f));
                Gizmos.DrawWireCube(center, new Vector3(size.x, size.y, 0f));
            }
        }
    }
#endif

    protected void SetDirty()
    {
        if (!IsActive()) return;
        LayoutRebuilder.MarkLayoutForRebuild(rectTransform);
    }
}

// ---------- Utility: ReadOnly attribute for debug fields ----------
public class ReadOnlyAttribute : PropertyAttribute { }

#if UNITY_EDITOR
[CustomPropertyDrawer(typeof(ReadOnlyAttribute))]
public class ReadOnlyDrawer : PropertyDrawer
{
    public override float GetPropertyHeight(SerializedProperty property, GUIContent label) =>
        EditorGUI.GetPropertyHeight(property, label, true);

    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        bool prev = GUI.enabled;
        GUI.enabled = false;
        EditorGUI.PropertyField(position, property, label, true);
        GUI.enabled = prev;
    }
}
#endif
