// HorizontalUIDragClamp_PlayWorksSafe_Fixed.cs
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
public class HorizontalUIDragClamp : MonoBehaviour,
    IPointerDownHandler, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public enum PaddingMode { FixedPixels, PercentOfParentWidth, ParentLayoutGroup }
    public enum ClampReference { Bounds, Center }

    [Header("Options")]
    public bool smooth = false;
    [Range(0.01f, 30f)] public float smoothSpeed = 18f;

    [Header("Clamp Behavior")]
    public ClampReference clampReference = ClampReference.Center;

    [Header("Padding Source (liquid UI)")]
    public PaddingMode paddingMode = PaddingMode.FixedPixels;
    public float leftPadding = 0f;
    public float rightPadding = 0f;
    [Range(-1f, 1f)] public float leftPaddingPercent = 0f;
    [Range(-1f, 1f)] public float rightPaddingPercent = 0f;

    [Tooltip("Require pointer to start on this element (or a child).")]
    public bool requirePointerOverSelf = true;

    // internals
    RectTransform rt;
    RectTransform parent;
    Canvas rootCanvas;
    Camera uiCam;

    Vector2 targetAnchoredPos;
    bool dragging;

    // start-of-gesture data
    float pointerStartLocalX;
    float startAnchoredPosX;
    bool pointerDownValid;      // set on OnPointerDown
    Camera pressCam;            // eventData.pressEventCamera snapshot (safety)

    void Awake() { Cache(); targetAnchoredPos = rt.anchoredPosition; }
    void OnEnable() { dragging = false; }
    void OnDisable() { dragging = false; }

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

    // ---------- NEW: validate & capture on pointer down ----------
    public void OnPointerDown(PointerEventData eventData)
    {
        pointerDownValid = !requirePointerOverSelf || IsPointerOnSelfOrChild(eventData);
        pressCam = eventData.pressEventCamera; // snapshot

        if (!pointerDownValid) return;
        if (rootCanvas == null || rt == null || parent == null) Cache();

        // Use parent canvas camera (uiCam) for consistent space; pressCam is kept for fallback.
        if (!ScreenPointToParentLocalX(eventData.position, uiCam, out pointerStartLocalX))
        {
            // last-resort fallback if canvas/cam reconfigured mid-frame
            ScreenPointToParentLocalX(eventData.position, pressCam, out pointerStartLocalX);
        }

        startAnchoredPosX = rt.anchoredPosition.x;
        targetAnchoredPos = rt.anchoredPosition;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        // your hint hiding�kept as-is, but doesn�t affect raycasts now
        if (GameManager.Instance.hand.activeInHierarchy) GameManager.Instance.hand.SetActive(false);
        if (GameManager.Instance.hand2.activeInHierarchy) GameManager.Instance.hand2.SetActive(false);

        if (!pointerDownValid) return; // <- crucial: don�t rely on pointerEnter
        if (rootCanvas == null || rt == null || parent == null) Cache();
        dragging = true;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!dragging || parent == null) return;

        if (!ScreenPointToParentLocalX(eventData.position, uiCam, out float pointerLocalX))
        {
            // fallback if camera changed between frames
            if (!ScreenPointToParentLocalX(eventData.position, pressCam, out pointerLocalX))
                return;
        }

        float deltaLocalX = pointerLocalX - pointerStartLocalX;
        float proposedX = startAnchoredPosX + deltaLocalX;

        if (smooth) targetAnchoredPos.x = proposedX;
        else { var p = rt.anchoredPosition; p.x = proposedX; rt.anchoredPosition = p; }

        ClampWithinParentHorizontal();
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        dragging = false;
        pointerDownValid = false; // reset gate for the next gesture
        ClampWithinParentHorizontal();
        // snap target to current so next drag starts clean (esp. when smooth=true)
        targetAnchoredPos = rt.anchoredPosition;
    }

    // ---------- helpers ----------
    bool IsPointerOnSelfOrChild(PointerEventData e)
    {
        // Prefer the raycast taken at press time; more reliable than pointerEnter.
        if (e.pointerPressRaycast.isValid)
        {
            var go = e.pointerPressRaycast.gameObject;
            if (go == gameObject || (go && go.transform.IsChildOf(transform))) return true;
        }

        // Fallback rectangle check (handles transparent areas of child graphics)
        return RectTransformUtility.RectangleContainsScreenPoint(rt, e.position, e.pressEventCamera);
    }

    bool ScreenPointToParentLocalX([Bridge.Ref] Vector2 screenPos, Camera cam, out float localX)
    {
        localX = 0f;
        if (parent == null) return false;
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(parent, screenPos, cam, out Vector2 local))
        { localX = local.x; return true; }
        return false;
    }

    void ClampWithinParentHorizontal()
    {
        if (parent == null) return;

        ComputeEffectivePaddingsLocal(parent, out float padLeft, out float padRight);
        Rect pRect = parent.rect;
        float parentLeft = pRect.xMin + padLeft;
        float parentRight = pRect.xMax - padRight;

        Vector2 size = GetWorldSizeInParent(rt, parent);
        float width = size.x;

        float centerX = GetSelfCenterLocalX(width);
        float leftEdge = centerX - (width * 0.5f);
        float rightEdge = centerX + (width * 0.5f);

        float dx = 0f;
        if (clampReference == ClampReference.Bounds)
        {
            if (leftEdge < parentLeft) dx = parentLeft - leftEdge;
            else if (rightEdge > parentRight) dx = parentRight - rightEdge;
        }
        else
        {
            if (centerX < parentLeft) dx = parentLeft - centerX;
            else if (centerX > parentRight) dx = parentRight - centerX;
        }

        if (Mathf.Approximately(dx, 0f)) return;

        if (smooth) targetAnchoredPos.x += dx;
        else { var p = rt.anchoredPosition; p.x += dx; rt.anchoredPosition = p; }
    }

    float GetSelfCenterLocalX(float width)
    {
        return rt.anchoredPosition.x + ((0.5f - rt.pivot.x) * width);
    }

    void ComputeEffectivePaddingsLocal(RectTransform parentRt, out float left, out float right)
    {
        left = right = 0f;
        switch (paddingMode)
        {
            case PaddingMode.FixedPixels:
                left = leftPadding; right = rightPadding; break;
            case PaddingMode.PercentOfParentWidth:
                float w = parentRt.rect.width;
                left = w * leftPaddingPercent; right = w * rightPaddingPercent; break;
            case PaddingMode.ParentLayoutGroup:
                float padL = 0f, padR = 0f;
                var hlg = parentRt.GetComponent<HorizontalLayoutGroup>();
                if (hlg != null) { padL = hlg.padding.left; padR = hlg.padding.right; }
                else
                {
                    var lg = parentRt.GetComponent<LayoutGroup>();
                    if (lg != null) { padL = lg.padding.left; padR = lg.padding.right; }
                }
                left = padL; right = padR; break;
        }
    }

    static Vector2 GetWorldSizeInParent(RectTransform rt, RectTransform parent)
    {
        Vector3[] wc = new Vector3[4];
        rt.GetWorldCorners(wc);
        Vector3 bl = parent.InverseTransformPoint(wc[0]);
        Vector3 tr = parent.InverseTransformPoint(wc[2]);
        return new Vector2(Mathf.Abs(tr.x - bl.x), Mathf.Abs(tr.y - bl.y));
    }
}
