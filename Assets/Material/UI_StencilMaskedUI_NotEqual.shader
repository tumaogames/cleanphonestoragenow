Shader "UI/StencilMaskedUI_NotEqual"
{
    Properties
    {
        // Unity UI expects the main texture to be PerRendererData so sprites/atlases work.
        [PerRendererData]_MainTex ("Sprite", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)

        // Standard UI props (kept for compatibility with UI pipeline & material inspector)
        [HideInInspector]_StencilComp ("Stencil Comparison", Float) = 3        // Equal (unused here; we hard-set NotEqual in SubShader)
        [HideInInspector]_Stencil ("Stencil ID", Float) = 0                     // Unused here
        [HideInInspector]_StencilOp ("Stencil Operation", Float) = 0            // Keep
        [HideInInspector]_StencilWriteMask ("Stencil Write Mask", Float) = 255
        [HideInInspector]_StencilReadMask ("Stencil Read Mask", Float) = 255
        [HideInInspector]_ColorMask ("Color Mask", Float) = 15

        // Clip-rect & alpha clip toggles for UI masking
        [HideInInspector]_UseUIAlphaClip ("Use UI Alpha Clip", Float) = 0
        [HideInInspector]_ClipRect ("Clip Rect", Vector) = ( -32767, -32767, 32767, 32767 )

        // Your custom stencil reference (areas with NOT EQUAL to this ref will render)
        _StencilRef ("Stencil Ref", Float) = 1
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            "CanUseSpriteAtlas"="True"
            // UI usually disables batching due to per-object params; safe default:
            "DisableBatching"="True"
        }

        // Transparent UI defaults
        ZWrite Off
        ZTest Always
        Cull Off
        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        // Draw ONLY where stencil != ref  -> overlap becomes invisible (inverse mask)
        Stencil
        {
            Ref [_StencilRef]
            Comp NotEqual
            Pass Keep
            Fail Keep
            ZFail Keep
            ReadMask [_StencilReadMask]
            WriteMask [_StencilWriteMask]
        }

        Pass
        {
            Name "UIForward"
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0

            // UI optional features
            #pragma multi_compile_local __ UNITY_UI_ALPHACLIP
            #pragma multi_compile __ UNITY_UI_CLIP_RECT

            #include "UnityCG.cginc"
            #include "UnityUI.cginc"

            sampler2D _MainTex;
            float4 _MainTex_ST;
            fixed4 _Color;

            float4 _ClipRect;
            float _UseUIAlphaClip;

            struct appdata_t
            {
                float4 vertex   : POSITION;
                float4 color    : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex        : SV_POSITION;
                fixed4 color         : COLOR;
                half2 texcoord       : TEXCOORD0;
                float4 worldPosition : TEXCOORD1; // for UI clip-rect
            };

            v2f vert (appdata_t v)
            {
                v2f o;
                o.worldPosition = v.vertex; // local space is fine for 2D clipping
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.texcoord = TRANSFORM_TEX(v.texcoord, _MainTex);
                o.color = v.color * _Color;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 c = tex2D(_MainTex, i.texcoord) * i.color;

                #if defined(UNITY_UI_CLIP_RECT)
                    // Multiply alpha by rectangular clip result (1 inside, 0 outside)
                    c.a *= UnityGet2DClipping(i.worldPosition.xy, _ClipRect);
                #endif

                #if defined(UNITY_UI_ALPHACLIP)
                    if (_UseUIAlphaClip > 0.5)
                        clip(c.a - 0.001);
                #endif

                // Premultiply not required; UI uses SrcAlpha blending above.
                return c;
            }
            ENDCG
        }
    }

    FallBack "UI/Default"
    CustomEditor "UnityEditor.UI.DefaultShaderGUI"
}
