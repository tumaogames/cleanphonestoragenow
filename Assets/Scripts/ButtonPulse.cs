using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(RectTransform))]
public class ButtonPulse : MonoBehaviour
{
    [Header("Pulse Settings")]
    [SerializeField] private float scaleMultiplier;   // How much bigger than original
    [SerializeField] private float pulseDuration;     // Time for one up/down cycle

    private Vector3 _originalScale;
    private Tween _pulseTween;

    private void Awake()
    {
        _originalScale = transform.localScale;
    }

    private void OnEnable()
    {
        StartPulse();
    }

    private void OnDisable()
    {
        StopPulse(resetScale: true);
    }

    public void StartPulse()
    {
        // Kill any running tween before starting
        _pulseTween?.Kill();

        Vector3 targetScale = _originalScale * scaleMultiplier;

        _pulseTween = transform
            .DOScale(targetScale, pulseDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    public void StopPulse(bool resetScale = false)
    {
        if (_pulseTween != null && _pulseTween.IsActive())
            _pulseTween.Kill();

        if (resetScale)
            transform.localScale = _originalScale;
    }
}
