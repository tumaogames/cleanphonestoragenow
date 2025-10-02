// UIHorizontalMover.cs
// Unity 2021+ | Requires DOTween
using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(RectTransform))]
public class UIHorizontalMover : MonoBehaviour
{
    [Header("Movement Settings")]
    public float duration = 1f;           // animation time
    public Ease ease = Ease.OutQuad;      // easing style
    public float rightEdgeOffset = 0f;    // extra offset beyond parent’s right edge

    private RectTransform rt;
    private RectTransform parentRt;
    private Vector2 originalPos;

    void Awake()
    {
        rt = GetComponent<RectTransform>();
        parentRt = rt.parent as RectTransform;
        originalPos = rt.anchoredPosition;
    }

    [ContextMenu("Move To Right Edge")]
    public void MoveToRightEdge()
    {
        if (GameManager.Instance.hand.activeInHierarchy)
        {
            GameManager.Instance.hand.SetActive(false);
        }
        if (GameManager.Instance.hand2.activeInHierarchy)
        {
            GameManager.Instance.hand2.SetActive(false);
        }
        if (parentRt == null) return;

        // World corners of parent
        Vector3[] parentCorners = new Vector3[4];
        parentRt.GetWorldCorners(parentCorners);

        // World corners of this rect
        Vector3[] myCorners = new Vector3[4];
        rt.GetWorldCorners(myCorners);

        // Parent right boundary (world space)
        float parentRight = parentCorners[2].x; // top-right.x

        // This rect’s width
        float myWidth = myCorners[2].x - myCorners[1].x;

        // Local space target: parent’s right edge - half width
        float targetX = parentRt.InverseTransformPoint(new Vector3(parentRight, 0f, 0f)).x;
        targetX -= myWidth * 0.5f;

        // Apply extra offset (positive value means overshoot to the right)
        targetX += rightEdgeOffset;

        // Animate anchored X directly
        rt.DOAnchorPosX(targetX, duration).SetEase(ease);
    }

    [ContextMenu("Reset Position")]
    public void ResetPosition()
    {
        rt.DOAnchorPos(originalPos, duration).SetEase(ease);
    }
}
