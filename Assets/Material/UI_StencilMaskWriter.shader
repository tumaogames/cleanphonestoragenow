Shader "UI/StencilMaskWriter"
{
    Properties
    {
        // Which stencil "layer" to write (1–255). Other materials must use same ref to read it.
        _StencilRef("Stencil Ref", Float) = 1
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent-1"        // Render before normal UI (which is usually Transparent)
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            "CanUseSpriteAtlas"="True"
        }

        // We want to touch only the stencil, not color or depth
        ColorMask 0
        ZWrite Off
        ZTest Always
        Cull Off
        Blend One OneMinusSrcAlpha

        // Write a value into stencil wherever this UI draws
        Stencil
        {
            Ref [_StencilRef]
            Comp Always
            Pass Replace
            Fail Replace
            ZFail Replace
        }

        Pass
        {
            Name "STENCIL_WRITE"
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata {
                float4 vertex : POSITION;
            };

            struct v2f {
                float4 pos : SV_POSITION;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                return o;
            }

            // No color output; ColorMask 0 ensures nothing shows—only stencil is affected.
            fixed4 frag (v2f i) : SV_Target { return 0; }
            ENDCG
        }
    }
}
