// UIDropZoneDetector.cs
// Unity 2021+ | UGUI
using UnityEngine;

[RequireComponent(typeof(BoxCollider2D))]
public class UIDropZoneDetector_L : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!GameManager.Instance.end)
        {
            GameManager.Instance.ShowPrompt_L();
            Debug.Log($"Dragg entered");
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        Debug.Log($"Object '{other.name}' EXITED drop zone '{name}'");
    }

    private void OnTriggerStay2D(Collider2D other)
    {
        if (Input.GetMouseButtonUp(0)) // left mouse released
        {
            Debug.Log($"Object '{other.name}' DROPPED inside zone '{name}'");
        }
    }
}
