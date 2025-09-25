using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class UIDragger : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    RectTransform rt;
    Canvas canvas;
    Vector2 startPos;

    void Awake()
    {
        rt = GetComponent<RectTransform>();
        canvas = GetComponentInParent<Canvas>();
    }

    public void OnBeginDrag(PointerEventData e) { startPos = rt.anchoredPosition; }
    public void OnDrag(PointerEventData e)
    {
        if (!canvas) return;
        rt.anchoredPosition += e.delta / canvas.scaleFactor;
    }
    public void OnEndDrag(PointerEventData e) { /* optional snap/constraints */ }
}

