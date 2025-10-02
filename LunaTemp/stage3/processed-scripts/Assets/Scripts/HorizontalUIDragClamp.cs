// HorizontalUIDragClamp_PlayWorksSafe.cs
// Unity 2021+ | UGUI | PlayWorks-safe
// Key change: pointer is mapped to PARENT LOCAL SPACE; no world-corner diffs or eventData.delta.

using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
public class HorizontalUIDragClamp : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public enum PaddingMode
    {
        FixedPixels,             // use leftPadding/rightPadding (px)
        PercentOfParentWidth,    // use leftPaddingPercent/rightPaddingPercent (-1..+1 of parent width)
        ParentLayoutGroup        // read parent LayoutGroup padding.left/right
    }

    public enum ClampReference
    {
        Bounds,  // keep the entire rect inside parent
        Center   // keep only the center within padded edges
    }

    [Header("Options")]
    [Tooltip("If true, movement is smoothed with exponential damping.")]
    public bool smooth = false;
    [Range(0.01f, 30f)] public float smoothSpeed = 18f;

    [Header("Clamp Behavior")]
    public ClampReference clampReference = ClampReference.Center;

    [Header("Padding Source (liquid UI)")]
    public PaddingMode paddingMode = PaddingMode.FixedPixels;

    [Tooltip("Used when PaddingMode = FixedPixels.")]
    public float leftPadding = 0f;
    [Tooltip("Used when PaddingMode = FixedPixels.")]
    public float rightPadding = 0f;

    [Tooltip("Used when PercentOfParentWidth. Negative expands beyond parent; positive shrinks.")]
    [Range(-1f, 1f)] public float leftPaddingPercent = 0f;
    [Range(-1f, 1f)] public float rightPaddingPercent = 0f;

    [Tooltip("Allow dragging only when pointer is over this element or its children.")]
    public bool requirePointerOverSelf = true;

    // --- internals ---
    RectTransform rt;
    RectTransform parent;
    Canvas rootCanvas;
    Camera uiCam;

    Vector2 targetAnchoredPos; // for smoothing
    bool dragging;

    // Pointer-to-parent-local tracking
    float pointerStartLocalX;  // pointer local X at drag start
    float startAnchoredPosX;   // anchoredPosition.x at drag start

    void Awake()
    {
        Cache();
        targetAnchoredPos = rt.anchoredPosition;
    }

    void OnTransformParentChanged() => Cache();

    void Cache()
    {
        rt = GetComponent<RectTransform>();
        parent = rt ? rt.parent as RectTransform : null;
        rootCanvas = GetComponentInParent<Canvas>()?.rootCanvas;
        uiCam = (rootCanvas && rootCanvas.renderMode == RenderMode.ScreenSpaceCamera) ? rootCanvas.worldCamera : null;
    }

    void Update()
    {
        if (smooth && Application.isPlaying)
        {
            var cur = rt.anchoredPosition;
            float t = 1f - Mathf.Exp(-smoothSpeed * Time.unscaledDeltaTime);
            cur.x = Mathf.Lerp(cur.x, targetAnchoredPos.x, t);
            rt.anchoredPosition = cur;
        }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!IsDragValid(eventData)) return;
        if (rootCanvas == null || rt == null || parent == null) Cache();

        if (!ScreenPointToParentLocalX(eventData.position, out pointerStartLocalX))
            return;

        startAnchoredPosX = rt.anchoredPosition.x;
        dragging = true;
        targetAnchoredPos = rt.anchoredPosition;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!dragging || parent == null) return;

        if (!ScreenPointToParentLocalX(eventData.position, out float pointerLocalX))
            return;

        float deltaLocalX = pointerLocalX - pointerStartLocalX;
        float proposedX = startAnchoredPosX + deltaLocalX;

        // Apply immediately or via smoothing target
        if (smooth)
        {
            targetAnchoredPos.x = proposedX;
        }
        else
        {
            var p = rt.anchoredPosition;
            p.x = proposedX;
            rt.anchoredPosition = p;
        }

        ClampWithinParentHorizontal();
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        dragging = false;
        ClampWithinParentHorizontal();
    }

    bool IsDragValid(PointerEventData e)
    {
        if (!requirePointerOverSelf) return true;
        return e.pointerEnter && (e.pointerEnter == gameObject || e.pointerEnter.transform.IsChildOf(transform));
    }

    bool ScreenPointToParentLocalX([Bridge.Ref] Vector2 screenPos, out float localX)
    {
        localX = 0f;
        if (parent == null) return false;
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(parent, screenPos, uiCam, out Vector2 local))
        {
            localX = local.x;
            return true;
        }
        return false;
    }

    void ClampWithinParentHorizontal()
    {
        if (parent == null) return;

        // Compute effective paddings in parent local units (px in parent space)
        ComputeEffectivePaddingsLocal(parent, out float padLeft, out float padRight);

        // Parent rect in local space (centered at parent.pivot)
        Rect pRect = parent.rect;
        float parentLeft = pRect.xMin + padLeft;
        float parentRight = pRect.xMax - padRight;

        // Get this element's rect in parent local space
        // anchoredPosition is relative to parent pivot; the rect offset depends on our pivot and sizeDelta.
        Vector2 size = GetWorldSizeInParent(rt, parent); // robust under scaling; maps to parent local scale
        float width = size.x;

        // Our center X and edges in parent local space:
        float centerX = GetSelfCenterLocalX();
        float leftEdge = centerX - (width * 0.5f);
        float rightEdge = centerX + (width * 0.5f);

        float dx = 0f;

        if (clampReference == ClampReference.Bounds)
        {
            if (leftEdge < parentLeft) dx = parentLeft - leftEdge;
            else if (rightEdge > parentRight) dx = parentRight - rightEdge;
        }
        else // Center
        {
            if (centerX < parentLeft) dx = parentLeft - centerX;
            else if (centerX > parentRight) dx = parentRight - centerX;
        }

        if (Mathf.Approximately(dx, 0f)) return;

        // Move by dx in parent local space => simply add dx to anchoredPosition.x
        if (smooth)
        {
            targetAnchoredPos.x += dx;
        }
        else
        {
            var p = rt.anchoredPosition;
            p.x += dx;
            rt.anchoredPosition = p;
        }
    }

    // --- helpers ---

    // Get the element's center X in parent local space (based on anchoredPosition, pivot, size)
    float GetSelfCenterLocalX()
    {
        // anchoredPosition is measured from parent pivot to this rect pivot.
        // To get center: anchoredPos.x + (0.5 - pivot.x) * width
        Vector2 size = GetWorldSizeInParent(rt, parent);
        float width = size.x;
        return rt.anchoredPosition.x + ((0.5f - rt.pivot.x) * width);
    }

    // Computes effective paddings in parent local coordinates
    void ComputeEffectivePaddingsLocal(RectTransform parentRt, out float left, out float right)
    {
        left = right = 0f;

        switch (paddingMode)
        {
            case PaddingMode.FixedPixels:
                left = leftPadding;
                right = rightPadding;
                break;

            case PaddingMode.PercentOfParentWidth:
                {
                    float w = parentRt.rect.width;
                    left = w * leftPaddingPercent;   // negatives allowed
                    right = w * rightPaddingPercent; // negatives allowed
                    break;
                }

            case PaddingMode.ParentLayoutGroup:
                {
                    float padL = 0f, padR = 0f;
                    var hlg = parentRt.GetComponent<HorizontalLayoutGroup>();
                    if (hlg != null) { padL = hlg.padding.left; padR = hlg.padding.right; }
                    else
                    {
                        var lg = parentRt.GetComponent<LayoutGroup>();
                        if (lg != null) { padL = lg.padding.left; padR = lg.padding.right; }
                    }
                    left = padL;
                    right = padR;
                    break;
                }
        }
    }

    // Returns the visual size of rt mapped into the parent's local space width/height (so scaling in hierarchy is respected)
    static Vector2 GetWorldSizeInParent(RectTransform rt, RectTransform parent)
    {
        // Use world corners and inverse-transform them into parent space to get a robust width/height
        Vector3[] wc = new Vector3[4];
        rt.GetWorldCorners(wc); // BL, TL, TR, BR

        Vector3 bl = parent.InverseTransformPoint(wc[0]);
        Vector3 tr = parent.InverseTransformPoint(wc[2]);
        return new Vector2(Mathf.Abs(tr.x - bl.x), Mathf.Abs(tr.y - bl.y));
    }
}
