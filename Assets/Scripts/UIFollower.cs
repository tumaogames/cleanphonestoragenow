// UIFollower.cs
// Unity 2021+
// Attach to the UI element that should follow a target RectTransform.
using UnityEngine;
using UnityEngine.UI;

[DisallowMultipleComponent]
[ExecuteAlways]
public class UIFollower : MonoBehaviour
{
    public enum UpdatePhase { Update, LateUpdate }
    public enum PositionMode { Pivot, RectCenter }
    public enum ScaleMode { None, MatchLocalScale, MatchWorldBounds } // bounds = width/height match

    [Header("Target")]
    public RectTransform target;

    [Header("Follow What")]
    public bool followPosition = true;
    public bool followRotation = false;
    public ScaleMode scaleMode = ScaleMode.None;

    [Header("Position Options")]
    public PositionMode positionMode = PositionMode.Pivot;
    public bool maintainInitialOffset = false;
    public Vector2 anchoredOffset = Vector2.zero; // extra offset in follower-parent space

    [Header("Scale Options")]
    [Tooltip("Extra pixels to add when matching bounds (x=width, y=height).")]
    public Vector2 sizePadding = Vector2.zero;

    [Header("Smoothing")]
    public bool smooth = false;
    [Range(0.01f, 30f)] public float positionLerpSpeed = 12f;
    [Range(0.01f, 30f)] public float scaleLerpSpeed = 12f;

    [Header("Timing")]
    public UpdatePhase updatePhase = UpdatePhase.LateUpdate;

    RectTransform _self;
    RectTransform _parent;
    Canvas _rootCanvas;
    Camera _uiCam; // null for Overlay

    // cached offset (in follower parent space)
    Vector2 _capturedOffset;

    void Reset()
    {
        _self = GetComponent<RectTransform>();
    }

    void OnEnable() { Cache(); CaptureOffsetIfNeeded(); }
    void OnTransformParentChanged() { Cache(); CaptureOffsetIfNeeded(); }
    void OnValidate() { if (isActiveAndEnabled) { Cache(); } }

    void Cache()
    {
        _self = _self ? _self : GetComponent<RectTransform>();
        _parent = _self && _self.parent ? _self.parent as RectTransform : null;
        _rootCanvas = _self ? _self.GetComponentInParent<Canvas>()?.rootCanvas : null;
        _uiCam = (_rootCanvas && _rootCanvas.renderMode == RenderMode.ScreenSpaceCamera) ? _rootCanvas.worldCamera : null;
    }

    void CaptureOffsetIfNeeded()
    {
        if (!maintainInitialOffset || target == null || _parent == null) return;
        Vector2 here = WorldToParentLocalPoint(GetReferenceWorldPoint());
        _capturedOffset = _self.anchoredPosition - here;
    }

    void Update()
    {
        if (updatePhase == UpdatePhase.Update) Tick();
    }

    void LateUpdate()
    {
        if (updatePhase == UpdatePhase.LateUpdate) Tick();
    }

    void Tick()
    {
        if (target == null || _self == null || _parent == null) return;

        // 1) POSITION
        if (followPosition)
        {
            Vector2 targetLocal = WorldToParentLocalPoint(GetReferenceWorldPoint());
            Vector2 offset = anchoredOffset + (maintainInitialOffset ? _capturedOffset : Vector2.zero);
            Vector2 goal = targetLocal + offset;

            if (smooth && Application.isPlaying)
                _self.anchoredPosition = Vector2.Lerp(_self.anchoredPosition, goal, 1f - Mathf.Exp(-positionLerpSpeed * Time.unscaledDeltaTime));
            else
                _self.anchoredPosition = goal;
        }

        // 2) ROTATION (optional)
        if (followRotation)
        {
            var targetRot = target.rotation;
            if (smooth && Application.isPlaying)
                _self.rotation = Quaternion.Slerp(_self.rotation, targetRot, 1f - Mathf.Exp(-positionLerpSpeed * Time.unscaledDeltaTime));
            else
                _self.rotation = targetRot;
        }

        // 3) SCALE
        if (scaleMode == ScaleMode.MatchLocalScale)
        {
            // Convert world scale to follower's local space to preserve visual size equivalence.
            Vector3 tWorld = target.lossyScale;
            Vector3 pWorld = _self.parent ? (_self.parent as RectTransform).lossyScale : Vector3.one;
            Vector3 goal = new Vector3(
                SafeDiv(tWorld.x, pWorld.x),
                SafeDiv(tWorld.y, pWorld.y),
                SafeDiv(tWorld.z, pWorld.z)
            );
            if (smooth && Application.isPlaying)
                _self.localScale = Vector3.Lerp(_self.localScale, goal, 1f - Mathf.Exp(-scaleLerpSpeed * Time.unscaledDeltaTime));
            else
                _self.localScale = goal;
        }
        else if (scaleMode == ScaleMode.MatchWorldBounds)
        {
            // Match width/height in the follower's parent space (ignores anchors).
            Vector2 size = GetSizeInParentSpace(target);
            size += sizePadding;

            // Keep current anchors; set sizeDelta in current anchor configuration.
            _self.SetSizeWithCurrentAnchors(RectTransform.Axis.Horizontal, size.x);
            _self.SetSizeWithCurrentAnchors(RectTransform.Axis.Vertical, size.y);
        }
    }

    // --- Helpers ---

    Vector3 GetReferenceWorldPoint()
    {
        if (positionMode == PositionMode.RectCenter)
        {
            Vector3[] corners = new Vector3[4];
            target.GetWorldCorners(corners);
            return (corners[0] + corners[2]) * 0.5f; // center
        }
        else
        {
            // target.position is already at the pivot in world space
            return target.position;
        }
    }

    Vector2 WorldToParentLocalPoint(Vector3 world)
    {
        if (_rootCanvas && _rootCanvas.renderMode == RenderMode.WorldSpace)
        {
            Vector3 local3 = _parent.InverseTransformPoint(world);
            return new Vector2(local3.x, local3.y);
        }
        else
        {
            // Overlay or ScreenSpaceCamera: go via screen then to local
            Vector2 screen = RectTransformUtility.WorldToScreenPoint(_uiCam, world);
            RectTransformUtility.ScreenPointToLocalPointInRectangle(_parent, screen, _uiCam, out var local);
            return local;
        }
    }

    Vector2 GetSizeInParentSpace(RectTransform rt)
    {
        Vector3[] wc = new Vector3[4];
        rt.GetWorldCorners(wc);

        // Convert each to follower-parent local space
        Vector2 a = WorldToParentLocalPoint(wc[0]); // bottom-left
        Vector2 b = WorldToParentLocalPoint(wc[2]); // top-right
        Vector2 size = new Vector2(Mathf.Abs(b.x - a.x), Mathf.Abs(b.y - a.y));
        return size;
    }

    static float SafeDiv(float a, float b) => Mathf.Approximately(b, 0f) ? 0f : (a / b);
}
