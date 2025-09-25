using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class DragToResizeLeft : MonoBehaviour, IDragHandler, IBeginDragHandler, IEndDragHandler
{
    public RectTransform target;       // Panel to resize
    public float minWidth = 100f;      // Minimum allowed width (in pixels)

    private RectTransform handle1;      // This handle
    private RectTransform container;   // Parent RectTransform (used for coordinate conversion)

    private Vector2 originalAnchorMin;
    private Vector2 originalAnchorMax;
    private Vector2 originalOffsetMin;
    private Vector2 originalOffsetMax;
    private float pointerOffsetX = 0f;

    private void Awake()
    {
        handle1 = GetComponent<RectTransform>();

        if (target == null)
            target = handle1.parent as RectTransform;

        if (target != null)
            container = target.parent as RectTransform;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        Debug.Log("start dragging");
        /*if(GameManager.Instance.arrow.activeInHierarchy)
        GameManager.Instance.arrow.SetActive(false);
        if (target == null || container == null) return;

        // Cache original values
        originalAnchorMin = target.anchorMin;
        originalAnchorMax = target.anchorMax;
        originalOffsetMin = target.offsetMin;
        originalOffsetMax = target.offsetMax;

        if(RectTransformUtility.ScreenPointToLocalPointInRectangle(
            handle1, eventData.position, eventData.pressEventCamera, out var localMousePosInHandle))
        {
            pointerOffsetX = localMousePosInHandle.x;
        }*/
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (target == null || container == null) return;

        // 1. Convert handle's drag position into local space of container
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(
            container, eventData.position, eventData.pressEventCamera, out Vector2 local))
            return;

        local.x += pointerOffsetX - 40f;
        // 2. Convert local X into normalized [0,1] anchor value
        float containerWidth = container.rect.width;
        float leftEdge = -containerWidth * 0.5f;
        float rightEdge = containerWidth * 0.5f;

        float normalizedX = Mathf.InverseLerp(leftEdge, rightEdge, local.x);

        // 3. Clamp to avoid collapse
        // Compute the right anchor position in pixels
        float rightAnchorPos = originalAnchorMax.x * containerWidth + originalOffsetMax.x;
        float newLeftAnchorPos = Mathf.Lerp(leftEdge, rightEdge, normalizedX);
        float width = rightAnchorPos - newLeftAnchorPos;

        if (width < minWidth)
        {
            // Too narrow — clamp normalizedX to maintain minWidth
            float minLeftPos = rightAnchorPos - minWidth;
            normalizedX = Mathf.InverseLerp(leftEdge, rightEdge, minLeftPos);
        }

        // 4. Update anchorMin.x and keep offsetMin unchanged
        Vector2 anchorMin = target.anchorMin;
        anchorMin.x = Mathf.Clamp01(normalizedX);
        target.anchorMin = anchorMin;

        // 5. Keep offsetMax the same (to preserve right edge)
        target.offsetMax = originalOffsetMax;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (this.GetComponent<RectTransform>().localPosition.x <= -261.7079f)
        {
            Debug.Log("right drop");
            GetComponent<RectTransform>().localScale = new Vector3(-1f, 0.675f, 1);
            GetComponent<RectTransform>().anchoredPosition = new Vector2(53f, 99f);
        }
        else
        {
            Debug.Log("left drop");
            GetComponent<RectTransform>().localScale = new Vector3(1f, 0.675f, 1);
            GetComponent<RectTransform>().anchoredPosition = new Vector2(-32.6f, 99f);
        }
    }
}
