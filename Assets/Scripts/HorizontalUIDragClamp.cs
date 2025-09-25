// HorizontalUIDragClamp.cs
// Unity 2021+ | UGUI
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class HorizontalUIDragClamp : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [Header("Options")]
    [Tooltip("If true, movement is smoothed with exponential damping.")]
    public bool smooth = false;
    [Range(0.01f, 30f)] public float smoothSpeed = 18f;

    [Tooltip("Extra inside padding (pixels) from the parent's left/right edges.")]
    public float leftPadding = 0f;
    public float rightPadding = 0f;

    [Tooltip("Allow dragging when pointer isn't over this element (useful for child graphics).")]
    public bool requireRaycastTarget = true;

    RectTransform rt;
    RectTransform parent;
    Canvas rootCanvas;
    Camera uiCam;

    Vector2 targetAnchoredPos; // for smoothing
    bool dragging;

    void Awake()
    {
        rt = GetComponent<RectTransform>();
        parent = rt.parent as RectTransform;
        rootCanvas = GetComponentInParent<Canvas>()?.rootCanvas;
        uiCam = (rootCanvas && rootCanvas.renderMode == RenderMode.ScreenSpaceCamera) ? rootCanvas.worldCamera : null;
        targetAnchoredPos = rt.anchoredPosition;
    }

    void Update()
    {
        if (smooth && Application.isPlaying)
        {
            // Exponential smoothing towards targetAnchoredPos (x only)
            var cur = rt.anchoredPosition;
            float t = 1f - Mathf.Exp(-smoothSpeed * Time.unscaledDeltaTime);
            cur.x = Mathf.Lerp(cur.x, targetAnchoredPos.x, t);
            rt.anchoredPosition = cur;
        }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!IsDragValid(eventData)) return;
        dragging = true;
        targetAnchoredPos = rt.anchoredPosition;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!dragging || parent == null || rootCanvas == null) return;

        // Move horizontally in anchored units
        float deltaX = eventData.delta.x / Mathf.Max(0.001f, rootCanvas.scaleFactor);
        Vector2 proposed = rt.anchoredPosition;
        proposed.x += deltaX;

        // Apply, then clamp within parent horizontally
        if (smooth) targetAnchoredPos = proposed; else rt.anchoredPosition = proposed;
        ClampWithinParentHorizontal(); // will adjust anchoredPosition/targetAnchoredPos
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        dragging = false;
        // Final safety clamp
        ClampWithinParentHorizontal();
    }

    bool IsDragValid(PointerEventData e)
    {
        if (!requireRaycastTarget) return true;
        // Ensure this element (or its children) received the raycast
        return e.pointerEnter && (e.pointerEnter == gameObject || e.pointerEnter.transform.IsChildOf(transform));
    }

    void ClampWithinParentHorizontal()
    {
        if (parent == null) return;

        // Get world corners for parent and self
        Vector3[] pc = new Vector3[4];
        Vector3[] sc = new Vector3[4];
        parent.GetWorldCorners(pc);
        rt.GetWorldCorners(sc);

        float parentLeftW = pc[0].x + leftPadding;   // bottom-left.x
        float parentRightW = pc[2].x - rightPadding;  // top-right.x
        float selfLeftW = sc[0].x;
        float selfRightW = sc[2].x;

        float worldDx = 0f;
        if (selfLeftW < parentLeftW) worldDx = parentLeftW - selfLeftW;
        else if (selfRightW > parentRightW) worldDx = parentRightW - selfRightW;

        if (Mathf.Approximately(worldDx, 0f)) return;

        // Convert world delta X to parent local space delta X
        Vector3 localDelta3 = parent.InverseTransformVector(new Vector3(worldDx, 0f, 0f));
        float localDx = localDelta3.x;

        if (smooth)
        {
            var t = targetAnchoredPos;
            t.x += localDx;
            targetAnchoredPos = t;
        }
        else
        {
            var p = rt.anchoredPosition;
            p.x += localDx;
            rt.anchoredPosition = p;
        }

        // Optional: re-check once in case of extreme scales/rotations
        // (usually not necessary, but cheap)
        rt.GetWorldCorners(sc);
        selfLeftW = sc[0].x; selfRightW = sc[2].x;
        if (selfLeftW < parentLeftW || selfRightW > parentRightW)
        {
            Vector3 fix3 = parent.InverseTransformVector(new Vector3(
                Mathf.Clamp(0f, parentLeftW - selfLeftW, parentRightW - selfRightW), 0f, 0f));
            if (smooth) { targetAnchoredPos.x += fix3.x; }
            else { var p2 = rt.anchoredPosition; p2.x += fix3.x; rt.anchoredPosition = p2; }
        }
    }
}

