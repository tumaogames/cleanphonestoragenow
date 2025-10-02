using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

[DisallowMultipleComponent]
public class ImageHandler : MonoBehaviour, IPointerClickHandler
{
    [Header("Assign the child you want to toggle")]
    public GameObject childToToggle;

    [Header("Optional: Target Image to toggle material")]
    public Image targetImage;

    // Optional manual override if you want to force a specific "original"
    public Material explicitOriginal;

    private Material originalMaterial;  // what we’ll restore to
    private bool hasCapturedOriginal;   // ensures we don’t overwrite original after first capture
    private bool isCleared;             // our toggle state, independent of Image.material being null

    void Awake()
    {
        // Auto-grab the second child if none assigned (index 1)
        if (childToToggle == null && transform.childCount > 1)
            childToToggle = transform.GetChild(1).gameObject;

        if (targetImage == null)
            targetImage = GetComponent<Image>();

        // If you set one explicitly, we’ll use it
        if (explicitOriginal != null)
        {
            originalMaterial = explicitOriginal;
            hasCapturedOriginal = true;
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        AudioManager.Instance.PlaySFX("OnClick");
        ToggleChild();
        ToggleImageMaterial();
    }

    void ToggleChild()
    {
        if (!childToToggle) return;
        bool newState = !childToToggle.activeSelf;
        childToToggle.SetActive(newState);
        Debug.Log($"[{name}] Child '{childToToggle.name}' active = {newState}");
    }

    void ToggleImageMaterial()
    {
        if (!targetImage) return;

        // Capture the true original at the moment of FIRST toggle
        if (!hasCapturedOriginal)
        {
            originalMaterial = targetImage.material; // whatever is currently on the Image
            hasCapturedOriginal = true;
            // Note: if the Image had "None (Material)" initially, originalMaterial will be null (by design).
        }

        if (!isCleared)
        {
            // Clear to None
            targetImage.material = null;
            isCleared = true;
            Debug.Log($"[{name}] Cleared material on '{targetImage.name}'.");
        }
        else
        {
            // Restore to the captured original
            targetImage.material = originalMaterial;
            isCleared = false;
            Debug.Log($"[{name}] Restored material on '{targetImage.name}' to '{(originalMaterial ? originalMaterial.name : "None")}'.");
        }
    }
}



