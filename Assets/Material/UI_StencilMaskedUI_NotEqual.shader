Shader "UI/StencilMaskedUI_NotEqual"
{
    Properties{
        _MainTex("Sprite", 2D) = "white" {}
        _Color("Tint", Color) = (1,1,1,1)
        _StencilRef("Stencil Ref", Float) = 1
    }
    SubShader{
        Tags{ "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "CanUseSpriteAtlas"="True" }
        ZWrite Off
        ZTest Always
        Cull Off
        Blend One OneMinusSrcAlpha

        // Draw ONLY where stencil != ref  -> overlap becomes invisible
        Stencil{
            Ref [_StencilRef]
            Comp NotEqual
            Pass Keep
            Fail Keep
            ZFail Keep
        }

        Pass{
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            sampler2D _MainTex; float4 _MainTex_ST; fixed4 _Color;

            struct appdata { float4 vertex:POSITION; float2 uv:TEXCOORD0; float4 col:COLOR; };
            struct v2f { float4 pos:SV_POSITION; float2 uv:TEXCOORD0; fixed4 col:COLOR; };

            v2f vert(appdata v){ v2f o; o.pos = UnityObjectToClipPos(v.vertex); o.uv = TRANSFORM_TEX(v.uv,_MainTex); o.col = v.col*_Color; return o; }
            fixed4 frag(v2f i):SV_Target { return tex2D(_MainTex, i.uv) * i.col; }
            ENDCG
        }
    }
    CustomEditor "UnityEditor.UI.DefaultShaderGUI"
}
