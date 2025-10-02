// UIDropRightEdgeOnPointerUpDetector.cs
// Unity 2021+ | UGUI
using UnityEngine;
using UnityEngine.EventSystems;

[DisallowMultipleComponent]
[RequireComponent(typeof(RectTransform))]
public class UIDropRightEdgeOnPointerUpDetector : MonoBehaviour, IPointerUpHandler
{
    RectTransform rt;
    RectTransform parent;

    const float ToleranceLocal = 1f; // ~1 parent-local pixel

    static readonly Vector3[] kSelfWorld = new Vector3[4];

    void Awake()
    {
        rt = GetComponent<RectTransform>();
        parent = rt ? rt.parent as RectTransform : null;
    }

    void OnTransformParentChanged()
    {
        parent = rt ? rt.parent as RectTransform : null;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (rt == null || parent == null) return;

        // Get this rect's corners in parent local space
        rt.GetWorldCorners(kSelfWorld);
        float selfRightLocal = float.NegativeInfinity;
        for (int i = 0; i < 4; i++)
        {
            Vector3 pLocal = parent.InverseTransformPoint(kSelfWorld[i]);
            if (pLocal.x > selfRightLocal) selfRightLocal = pLocal.x;
        }

        // Parent right edge in its own local space
        float parentRightLocal = parent.rect.xMax;
        float delta = Mathf.Abs(selfRightLocal - parentRightLocal);

        if (delta <= ToleranceLocal)
        {
            Debug.Log($"[RightEdgeDetector] '{name}' released at RIGHT edge of parent '{parent.name}'. Δ={delta:0.###}");
        }
    }
}
