// MaskProBuiltIn.cs
// Unity 2020+ | UGUI | PlayWorks/WebGL-safe
// Masking via built-in UI stencil (StencilMaterial). No custom shaders.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Rendering;

[ExecuteAlways]
[DisallowMultipleComponent]
public class MaskProBuiltIn : MonoBehaviour
{
    public enum Role { WriterOnly, ReaderOnly, WriterAndReader }
    public enum TargetDiscovery { ManualList, AutoFindSiblingsInSameCanvas }
    public enum DrawOrderFix { None, MoveWriterBeforeTargets, SeparateCanvasForWriter }

    [Header("Mask Group")]
    public Role role = Role.WriterAndReader;

    [Tooltip("Stencil Ref 1..255 shared by writer/readers. Auto-assigned if enabled.")]
    [Range(1, 255)] public int stencilRef = 7;
    public bool autoAssignRef = true;

    [Header("Targets (Readers)")]
    public TargetDiscovery targetDiscovery = TargetDiscovery.AutoFindSiblingsInSameCanvas;
    [Tooltip("Used when discovery = ManualList")]
    public List<Graphic> explicitTargets = new List<Graphic>();

    [Tooltip("If ON, invert mask (draw where writer did NOT draw).")]
    public bool invert = false;

    [Header("Writer")]
    [Tooltip("If OFF, the writer will not write color (stencil only).")]
    public bool writerVisible = false;

    [Header("Order & Options")]
    public DrawOrderFix drawOrderFix = DrawOrderFix.MoveWriterBeforeTargets;
    [Tooltip("Restore original materials on disable/destroy.")]
    public bool restoreOnDisable = true;
    [Tooltip("Set Maskable=false on readers to avoid interference from RectMask2D/Mask above.")]
    public bool disableMaskableOnReaders = true;

    // Internals
    Graphic _writerGraphic;
    Canvas _writerCanvas;

    // Track originals and instances so we can restore and free StencilMaterials.
    readonly Dictionary<Graphic, Material> _original = new Dictionary<Graphic, Material>();
    readonly Dictionary<Graphic, Material> _applied = new Dictionary<Graphic, Material>();

    static readonly HashSet<int> _usedRefs = new HashSet<int>();

    void OnEnable()
    {
        Cache();
        if (!_writerGraphic)
        {
            Debug.LogWarning($"[{name}] MaskProBuiltIn requires a UI Graphic on the same GameObject (Image/RawImage/TMP UGUI).");
            return;
        }

        if (autoAssignRef) stencilRef = AllocateStencilRef(stencilRef);

        // Apply writer & readers
        ApplyWriter();
        var readers = ResolveTargets();
        ApplyReaders(readers);

        // Draw order so writer renders first
        FixDrawOrder(readers);
    }

    void OnDisable()
    {
        if (restoreOnDisable)
            RestoreAll();

        _usedRefs.Remove(stencilRef);
    }

    void OnDestroy() => OnDisable();

    void OnTransformParentChanged()
    {
        if (!isActiveAndEnabled) return;
        OnDisable(); OnEnable(); // re-apply safely
    }

    void OnCanvasHierarchyChanged()
    {
        if (!isActiveAndEnabled) return;
        OnDisable(); OnEnable();
    }

    void Cache()
    {
        if (_writerGraphic == null) _writerGraphic = GetComponent<Graphic>();
        _writerCanvas = _writerGraphic ? _writerGraphic.canvas : GetComponentInParent<Canvas>();
    }

    int AllocateStencilRef(int desired)
    {
        if (desired >= 1 && desired <= 255 && !_usedRefs.Contains(desired))
        {
            _usedRefs.Add(desired);
            return desired;
        }
        for (int i = 1; i <= 255; i++)
        {
            if (!_usedRefs.Contains(i))
            {
                _usedRefs.Add(i);
                return i;
            }
        }
        Debug.LogWarning("All stencil refs (1..255) seem in use; reusing requested value.");
        return Mathf.Clamp(desired, 1, 255);
    }

    // ---------------- Writer ----------------

    void ApplyWriter()
    {
        if (role == Role.ReaderOnly || _writerGraphic == null) return;

        var baseMat = _writerGraphic.materialForRendering; // built-in UI shader w/ stencil props
        RememberOriginal(_writerGraphic, _writerGraphic.material);

        // Writer: Op=Replace, Comp=Always. Color write can be Zero (hidden) or All (visible).
        var writerMat = UnityEngine.UI.StencilMaterial.Add(
            baseMat,
            stencilRef,
            StencilOp.Replace,
            CompareFunction.Always,
            writerVisible ? ColorWriteMask.All : 0, // 0 => no color writes
            readMask: 255,
            writeMask: 255
        );

        ApplyToGraphic(_writerGraphic, writerMat);

        // Ensure the writer does not block raycasts if it's only logical
        if (!writerVisible)
        {
            var cg = GetOrAdd<CanvasGroup>(_writerGraphic.gameObject);
            cg.blocksRaycasts = false;
            cg.interactable = false;
            // IMPORTANT: Do NOT set alpha here (we already suppressed color via ColorWriteMask.Zero).
        }
    }

    // ---------------- Readers ----------------

    List<Graphic> ResolveTargets()
    {
        var list = new List<Graphic>();
        if (role == Role.WriterOnly) return list;

        if (targetDiscovery == TargetDiscovery.ManualList)
        {
            foreach (var g in explicitTargets)
                if (g && g != _writerGraphic) list.Add(g);
        }
        else
        {
            // Auto: all Graphics that share the same parent and same canvas, excluding writer
            if (_writerGraphic && _writerGraphic.transform.parent)
            {
                var parent = _writerGraphic.transform.parent;
                for (int i = 0; i < parent.childCount; i++)
                {
                    var t = parent.GetChild(i);
                    if (t == transform) continue;
                    var g = t.GetComponent<Graphic>();
                    if (g && g.canvas == _writerCanvas) list.Add(g);
                }
            }
        }
        return list;
    }

    void ApplyReaders(List<Graphic> readers)
    {
        foreach (var g in readers)
        {
            if (!g) continue;

            RememberOriginal(g, g.material);

            // Reader: Op=Keep, Comp=Equal (or NotEqual if invert), Color writes on
            var baseMat = g.materialForRendering;
            var comp = invert ? CompareFunction.NotEqual : CompareFunction.Equal;

            var readerMat = UnityEngine.UI.StencilMaterial.Add(
                baseMat,
                stencilRef,
                StencilOp.Keep,
                comp,
                ColorWriteMask.All,
                readMask: 255,
                writeMask: 255
            );

            ApplyToGraphic(g, readerMat);

            if (disableMaskableOnReaders)
            {
                var mg = g as MaskableGraphic;
                if (mg) mg.maskable = false; // avoid unintended parent Mask/RectMask2D influence
            }
        }
    }

    // ---------------- Draw Order ----------------

    void FixDrawOrder(List<Graphic> readers)
    {
        if (drawOrderFix == DrawOrderFix.None || _writerGraphic == null) return;

        if (drawOrderFix == DrawOrderFix.MoveWriterBeforeTargets)
        {
            if (_writerGraphic.transform.parent == null) return;

            int minIndex = int.MaxValue;
            foreach (var g in readers)
            {
                if (!g) continue;
                if (g.transform.parent != _writerGraphic.transform.parent) continue;
                minIndex = Mathf.Min(minIndex, g.transform.GetSiblingIndex());
            }
            if (minIndex != int.MaxValue)
                transform.SetSiblingIndex(Mathf.Max(0, minIndex - 1));
        }
        else if (drawOrderFix == DrawOrderFix.SeparateCanvasForWriter)
        {
            var wc = GetOrAdd<Canvas>(_writerGraphic.gameObject);
            wc.overrideSorting = true;
            wc.sortingOrder = (_writerCanvas ? _writerCanvas.sortingOrder : 0) - 1;

            var cg = GetOrAdd<CanvasGroup>(_writerGraphic.gameObject);
            cg.blocksRaycasts = false;
            cg.interactable = false;
        }
    }

    // ---------------- Material bookkeeping ----------------

    void ApplyToGraphic(Graphic g, Material mat)
    {
        _applied[g] = mat;
        g.material = mat;                 // assigns instance
        g.SetMaterialDirty();
    }

    void RememberOriginal(Graphic g, Material orig)
    {
        if (!_original.ContainsKey(g))
            _original[g] = orig; // may be null; that's okay
    }

    void RestoreAll()
    {
        foreach (var kv in _applied)
        {
            var g = kv.Key;
            var inst = kv.Value;
            if (!g) continue;

            if (_original.TryGetValue(g, out var orig))
            {
                g.material = orig;
                g.SetMaterialDirty();
            }

            // Free the stencil instance properly
            if (inst)
                UnityEngine.UI.StencilMaterial.Remove(inst);
        }

        _applied.Clear();
        _original.Clear();
    }

    static T GetOrAdd<T>(GameObject go) where T : Component
    {
        var c = go.GetComponent<T>();
        if (!c) c = go.AddComponent<T>();
        return c;
    }
}
