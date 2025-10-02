var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointSpring' )
  var i463 = data
  i462.spring = i463[0]
  i462.damper = i463[1]
  i462.targetPosition = i463[2]
  return i462
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointMotor' )
  var i465 = data
  i464.m_TargetVelocity = i465[0]
  i464.m_Force = i465[1]
  i464.m_FreeSpin = i465[2]
  return i464
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointLimits' )
  var i467 = data
  i466.m_Min = i467[0]
  i466.m_Max = i467[1]
  i466.m_Bounciness = i467[2]
  i466.m_BounceMinVelocity = i467[3]
  i466.m_ContactDistance = i467[4]
  i466.minBounce = i467[5]
  i466.maxBounce = i467[6]
  return i466
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointDrive' )
  var i469 = data
  i468.m_PositionSpring = i469[0]
  i468.m_PositionDamper = i469[1]
  i468.m_MaximumForce = i469[2]
  i468.m_UseAcceleration = i469[3]
  return i468
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i471 = data
  i470.m_Spring = i471[0]
  i470.m_Damper = i471[1]
  return i470
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i473 = data
  i472.m_Limit = i473[0]
  i472.m_Bounciness = i473[1]
  i472.m_ContactDistance = i473[2]
  return i472
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i475 = data
  i474.m_ExtremumSlip = i475[0]
  i474.m_ExtremumValue = i475[1]
  i474.m_AsymptoteSlip = i475[2]
  i474.m_AsymptoteValue = i475[3]
  i474.m_Stiffness = i475[4]
  return i474
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i477 = data
  i476.m_LowerAngle = i477[0]
  i476.m_UpperAngle = i477[1]
  return i476
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i479 = data
  i478.m_MotorSpeed = i479[0]
  i478.m_MaximumMotorTorque = i479[1]
  return i478
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i481 = data
  i480.m_DampingRatio = i481[0]
  i480.m_Frequency = i481[1]
  i480.m_Angle = i481[2]
  return i480
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i483 = data
  i482.m_LowerTranslation = i483[0]
  i482.m_UpperTranslation = i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i485 = data
  i484.name = i485[0]
  i484.width = i485[1]
  i484.height = i485[2]
  i484.mipmapCount = i485[3]
  i484.anisoLevel = i485[4]
  i484.filterMode = i485[5]
  i484.hdr = !!i485[6]
  i484.format = i485[7]
  i484.wrapMode = i485[8]
  i484.alphaIsTransparency = !!i485[9]
  i484.alphaSource = i485[10]
  i484.graphicsFormat = i485[11]
  i484.sRGBTexture = !!i485[12]
  i484.desiredColorSpace = i485[13]
  i484.wrapU = i485[14]
  i484.wrapV = i485[15]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i487 = data
  i486.name = i487[0]
  i486.index = i487[1]
  i486.startup = !!i487[2]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i489 = data
  i488.position = new pc.Vec3( i489[0], i489[1], i489[2] )
  i488.scale = new pc.Vec3( i489[3], i489[4], i489[5] )
  i488.rotation = new pc.Quat(i489[6], i489[7], i489[8], i489[9])
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i491 = data
  i490.aspect = i491[0]
  i490.orthographic = !!i491[1]
  i490.orthographicSize = i491[2]
  i490.backgroundColor = new pc.Color(i491[3], i491[4], i491[5], i491[6])
  i490.nearClipPlane = i491[7]
  i490.farClipPlane = i491[8]
  i490.fieldOfView = i491[9]
  i490.depth = i491[10]
  i490.clearFlags = i491[11]
  i490.cullingMask = i491[12]
  i490.rect = i491[13]
  request.r(i491[14], i491[15], 0, i490, 'targetTexture')
  i490.usePhysicalProperties = !!i491[16]
  i490.focalLength = i491[17]
  i490.sensorSize = new pc.Vec2( i491[18], i491[19] )
  i490.lensShift = new pc.Vec2( i491[20], i491[21] )
  i490.gateFit = i491[22]
  i490.commandBufferCount = i491[23]
  i490.cameraType = i491[24]
  i490.enabled = !!i491[25]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i493 = data
  i492.name = i493[0]
  i492.tagId = i493[1]
  i492.enabled = !!i493[2]
  i492.isStatic = !!i493[3]
  i492.layer = i493[4]
  return i492
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i494 = root || request.c( 'AudioManager' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'library')
  i494.sfxPoolSize = i495[2]
  return i494
}

Deserializers["GameManager"] = function (request, data, root) {
  var i496 = root || request.c( 'GameManager' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'endPanel')
  request.r(i497[2], i497[3], 0, i496, 'endPanel_L')
  i496.end = !!i497[4]
  request.r(i497[5], i497[6], 0, i496, 'hand')
  request.r(i497[7], i497[8], 0, i496, 'hand2')
  request.r(i497[9], i497[10], 0, i496, 'arrow')
  request.r(i497[11], i497[12], 0, i496, 'prompt')
  request.r(i497[13], i497[14], 0, i496, 'prompt_L')
  request.r(i497[15], i497[16], 0, i496, 'slideToCleanBtn_P')
  request.r(i497[17], i497[18], 0, i496, 'ContinueCleaningBtn_P')
  request.r(i497[19], i497[20], 0, i496, 'slideToCleanBtn_L')
  request.r(i497[21], i497[22], 0, i496, 'ContinueCleaningBtn_L')
  i496.enableSound = !!i497[23]
  i496.isSIP = !!i497[24]
  request.r(i497[25], i497[26], 0, i496, 'startClickHandler')
  i496.currentScore = i497[27]
  return i496
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i498 = root || request.c( 'TaskManager' )
  var i499 = data
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i501 = data
  i500.pivot = new pc.Vec2( i501[0], i501[1] )
  i500.anchorMin = new pc.Vec2( i501[2], i501[3] )
  i500.anchorMax = new pc.Vec2( i501[4], i501[5] )
  i500.sizeDelta = new pc.Vec2( i501[6], i501[7] )
  i500.anchoredPosition3D = new pc.Vec3( i501[8], i501[9], i501[10] )
  i500.rotation = new pc.Quat(i501[11], i501[12], i501[13], i501[14])
  i500.scale = new pc.Vec3( i501[15], i501[16], i501[17] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i503 = data
  i502.planeDistance = i503[0]
  i502.referencePixelsPerUnit = i503[1]
  i502.isFallbackOverlay = !!i503[2]
  i502.renderMode = i503[3]
  i502.renderOrder = i503[4]
  i502.sortingLayerName = i503[5]
  i502.sortingOrder = i503[6]
  i502.scaleFactor = i503[7]
  request.r(i503[8], i503[9], 0, i502, 'worldCamera')
  i502.overrideSorting = !!i503[10]
  i502.pixelPerfect = !!i503[11]
  i502.targetDisplay = i503[12]
  i502.overridePixelPerfect = !!i503[13]
  i502.enabled = !!i503[14]
  return i502
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i505 = data
  i504.m_UiScaleMode = i505[0]
  i504.m_ReferencePixelsPerUnit = i505[1]
  i504.m_ScaleFactor = i505[2]
  i504.m_ReferenceResolution = new pc.Vec2( i505[3], i505[4] )
  i504.m_ScreenMatchMode = i505[5]
  i504.m_MatchWidthOrHeight = i505[6]
  i504.m_PhysicalUnit = i505[7]
  i504.m_FallbackScreenDPI = i505[8]
  i504.m_DefaultSpriteDPI = i505[9]
  i504.m_DynamicPixelsPerUnit = i505[10]
  i504.m_PresetInfoIsWorld = !!i505[11]
  return i504
}

Deserializers["ResponsiveUIManager"] = function (request, data, root) {
  var i506 = root || request.c( 'ResponsiveUIManager' )
  var i507 = data
  i506.forceOrientation = i507[0]
  i506.portraitReferenceResolution = new pc.Vec2( i507[1], i507[2] )
  i506.landscapeReferenceResolution = new pc.Vec2( i507[3], i507[4] )
  i506.manageCanvasScaler = !!i507[5]
  i506.referenceResolution = new pc.Vec2( i507[6], i507[7] )
  i506.defaultMatchWidthOrHeight = i507[8]
  i506.useOrientationAgnosticAspect = !!i507[9]
  var i509 = i507[10]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('ResponsiveUIManager+AspectProfile', i509[i + 0]) );
  }
  i506.aspectProfiles = i508
  i506.enableDpiClamp = !!i507[11]
  i506.dpiClampThreshold = i507[12]
  i506.dpiClampMax = i507[13]
  var i511 = i507[14]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i506.safeAreaPanels = i510
  var i513 = i507[15]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('ResponsiveUIManager+StrictAspectEntry', i513[i + 0]) );
  }
  i506.strictAspectPanels = i512
  i506.disableDecorativeRaycasts = !!i507[16]
  i506.showDebugOverlay = !!i507[17]
  i506.debugTextShadow = new pc.Color(i507[18], i507[19], i507[20], i507[21])
  i506.debugTextSize = i507[22]
  i506.overrideAspectProfile = !!i507[23]
  i506.overrideAspectProfileIndex = i507[24]
  i506.activeAspectProfileIndex = i507[25]
  i506.activeAspectProfileLabel = i507[26]
  return i506
}

Deserializers["ResponsiveUIManager+AspectProfile"] = function (request, data, root) {
  var i516 = root || request.c( 'ResponsiveUIManager+AspectProfile' )
  var i517 = data
  i516.maxAspect = i517[0]
  i516.matchWidthOrHeight = i517[1]
  i516.label = i517[2]
  return i516
}

Deserializers["ResponsiveUIManager+StrictAspectEntry"] = function (request, data, root) {
  var i522 = root || request.c( 'ResponsiveUIManager+StrictAspectEntry' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'panel')
  i522.targetAspect = i523[2]
  request.r(i523[3], i523[4], 0, i522, 'backgroundBars')
  return i522
}

Deserializers["OrientationLayoutSwitcher"] = function (request, data, root) {
  var i524 = root || request.c( 'OrientationLayoutSwitcher' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'portraitRoot')
  request.r(i525[2], i525[3], 0, i524, 'landscapeRoot')
  i524.applySafeAreaToRoots = !!i525[4]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i527 = data
  i526.cullTransparentMesh = !!i527[0]
  return i526
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.Image' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'm_Sprite')
  i528.m_Type = i529[2]
  i528.m_PreserveAspect = !!i529[3]
  i528.m_FillCenter = !!i529[4]
  i528.m_FillMethod = i529[5]
  i528.m_FillAmount = i529[6]
  i528.m_FillClockwise = !!i529[7]
  i528.m_FillOrigin = i529[8]
  i528.m_UseSpriteMesh = !!i529[9]
  i528.m_PixelsPerUnitMultiplier = i529[10]
  i528.m_Maskable = !!i529[11]
  request.r(i529[12], i529[13], 0, i528, 'm_Material')
  i528.m_Color = new pc.Color(i529[14], i529[15], i529[16], i529[17])
  i528.m_RaycastTarget = !!i529[18]
  i528.m_RaycastPadding = new pc.Vec4( i529[19], i529[20], i529[21], i529[22] )
  return i528
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i531 = data
  i530.m_IgnoreReversedGraphics = !!i531[0]
  i530.m_BlockingObjects = i531[1]
  i530.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i531[2] )
  return i530
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i532 = root || request.c( 'CanvasGroupAnimator' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'canvasGroup')
  i532.animateFade = !!i533[2]
  i532.triggerOnStart = !!i533[3]
  i532.isLooping = !!i533[4]
  i532.fadeTo = i533[5]
  i532.fadeDuration = i533[6]
  i532.fadeEaseType = i533[7]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i535 = data
  i534.m_Alpha = i535[0]
  i534.m_Interactable = !!i535[1]
  i534.m_BlocksRaycasts = !!i535[2]
  i534.m_IgnoreParentGroups = !!i535[3]
  i534.enabled = !!i535[4]
  return i534
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Button' )
  var i537 = data
  i536.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i537[0], i536.m_OnClick)
  i536.m_Navigation = request.d('UnityEngine.UI.Navigation', i537[1], i536.m_Navigation)
  i536.m_Transition = i537[2]
  i536.m_Colors = request.d('UnityEngine.UI.ColorBlock', i537[3], i536.m_Colors)
  i536.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i537[4], i536.m_SpriteState)
  i536.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i537[5], i536.m_AnimationTriggers)
  i536.m_Interactable = !!i537[6]
  request.r(i537[7], i537[8], 0, i536, 'm_TargetGraphic')
  return i536
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i539 = data
  i538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i539[0], i538.m_PersistentCalls)
  return i538
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i541 = data
  var i543 = i541[0]
  var i542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i543.length; i += 1) {
    i542.add(request.d('UnityEngine.Events.PersistentCall', i543[i + 0]));
  }
  i540.m_Calls = i542
  return i540
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_Target')
  i546.m_TargetAssemblyTypeName = i547[2]
  i546.m_MethodName = i547[3]
  i546.m_Mode = i547[4]
  i546.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i547[5], i546.m_Arguments)
  i546.m_CallState = i547[6]
  return i546
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i549 = data
  i548.m_Mode = i549[0]
  i548.m_WrapAround = !!i549[1]
  request.r(i549[2], i549[3], 0, i548, 'm_SelectOnUp')
  request.r(i549[4], i549[5], 0, i548, 'm_SelectOnDown')
  request.r(i549[6], i549[7], 0, i548, 'm_SelectOnLeft')
  request.r(i549[8], i549[9], 0, i548, 'm_SelectOnRight')
  return i548
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i551 = data
  i550.m_NormalColor = new pc.Color(i551[0], i551[1], i551[2], i551[3])
  i550.m_HighlightedColor = new pc.Color(i551[4], i551[5], i551[6], i551[7])
  i550.m_PressedColor = new pc.Color(i551[8], i551[9], i551[10], i551[11])
  i550.m_SelectedColor = new pc.Color(i551[12], i551[13], i551[14], i551[15])
  i550.m_DisabledColor = new pc.Color(i551[16], i551[17], i551[18], i551[19])
  i550.m_ColorMultiplier = i551[20]
  i550.m_FadeDuration = i551[21]
  return i550
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_HighlightedSprite')
  request.r(i553[2], i553[3], 0, i552, 'm_PressedSprite')
  request.r(i553[4], i553[5], 0, i552, 'm_SelectedSprite')
  request.r(i553[6], i553[7], 0, i552, 'm_DisabledSprite')
  return i552
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i555 = data
  i554.m_NormalTrigger = i555[0]
  i554.m_HighlightedTrigger = i555[1]
  i554.m_PressedTrigger = i555[2]
  i554.m_SelectedTrigger = i555[3]
  i554.m_DisabledTrigger = i555[4]
  return i554
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i556 = root || request.c( 'ButtonPulse' )
  var i557 = data
  i556.scaleMultiplier = i557[0]
  i556.pulseDuration = i557[1]
  return i556
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_ObjectArgument')
  i558.m_ObjectArgumentAssemblyTypeName = i559[2]
  i558.m_IntArgument = i559[3]
  i558.m_FloatArgument = i559[4]
  i558.m_StringArgument = i559[5]
  i558.m_BoolArgument = !!i559[6]
  return i558
}

Deserializers["FluidGridLayout"] = function (request, data, root) {
  var i560 = root || request.c( 'FluidGridLayout' )
  var i561 = data
  i560.fitAxis = i561[0]
  i560.overflow = i561[1]
  i560.constraint = i561[2]
  i560.constraintCount = i561[3]
  i560.columnsRange = new pc.Vec2( i561[4], i561[5] )
  i560.evenness = i561[6]
  i560.keepSquare = !!i561[7]
  i560.enforceAspect = !!i561[8]
  i560.aspectWH = i561[9]
  i560.minCell = new pc.Vec2( i561[10], i561[11] )
  i560.maxCell = new pc.Vec2( i561[12], i561[13] )
  i560.spacing = new pc.Vec2( i561[14], i561[15] )
  i560.horizontalAlign = i561[16]
  i560.verticalAlign = i561[17]
  i560.centerX = !!i561[18]
  i560.centerY = !!i561[19]
  i560.order = i561[20]
  i560.horizontalDirection = i561[21]
  i560.verticalDirection = i561[22]
  i560.reverseOrder = !!i561[23]
  i560.overrideChildSize = !!i561[24]
  i560.snapToPixels = !!i561[25]
  i560.autoRebuildOnChildChange = !!i561[26]
  i560.respectMinCellOnScaleDown = !!i561[27]
  i560.preserveAspectOnScaleDown = !!i561[28]
  i560._chosenColumns = i561[29]
  i560._chosenRows = i561[30]
  i560._chosenCell = new pc.Vec2( i561[31], i561[32] )
  i560.m_Padding = UnityEngine.RectOffset.FromPaddings(i561[33], i561[34], i561[35], i561[36])
  i560.m_ChildAlignment = i561[37]
  return i560
}

Deserializers["HorizontalUIDragClamp"] = function (request, data, root) {
  var i562 = root || request.c( 'HorizontalUIDragClamp' )
  var i563 = data
  i562.smooth = !!i563[0]
  i562.smoothSpeed = i563[1]
  i562.clampReference = i563[2]
  i562.paddingMode = i563[3]
  i562.leftPadding = i563[4]
  i562.rightPadding = i563[5]
  i562.leftPaddingPercent = i563[6]
  i562.rightPaddingPercent = i563[7]
  i562.requirePointerOverSelf = !!i563[8]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i565 = data
  i564.bodyType = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'material')
  i564.simulated = !!i565[3]
  i564.useAutoMass = !!i565[4]
  i564.mass = i565[5]
  i564.drag = i565[6]
  i564.angularDrag = i565[7]
  i564.gravityScale = i565[8]
  i564.collisionDetectionMode = i565[9]
  i564.sleepMode = i565[10]
  i564.constraints = i565[11]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i567 = data
  i566.usedByComposite = !!i567[0]
  i566.autoTiling = !!i567[1]
  i566.size = new pc.Vec2( i567[2], i567[3] )
  i566.edgeRadius = i567[4]
  i566.enabled = !!i567[5]
  i566.isTrigger = !!i567[6]
  i566.usedByEffector = !!i567[7]
  i566.density = i567[8]
  i566.offset = new pc.Vec2( i567[9], i567[10] )
  request.r(i567[11], i567[12], 0, i566, 'material')
  return i566
}

Deserializers["UIHorizontalMover"] = function (request, data, root) {
  var i568 = root || request.c( 'UIHorizontalMover' )
  var i569 = data
  i568.duration = i569[0]
  i568.ease = i569[1]
  i568.rightEdgeOffset = i569[2]
  return i568
}

Deserializers["UIDropZoneDetector"] = function (request, data, root) {
  var i570 = root || request.c( 'UIDropZoneDetector' )
  var i571 = data
  return i570
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i572 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i573 = data
  i572.m_hasFontAssetChanged = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'm_baseMaterial')
  i572.m_maskOffset = new pc.Vec4( i573[3], i573[4], i573[5], i573[6] )
  i572.m_text = i573[7]
  i572.m_isRightToLeft = !!i573[8]
  request.r(i573[9], i573[10], 0, i572, 'm_fontAsset')
  request.r(i573[11], i573[12], 0, i572, 'm_sharedMaterial')
  var i575 = i573[13]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.m_fontSharedMaterials = i574
  request.r(i573[14], i573[15], 0, i572, 'm_fontMaterial')
  var i577 = i573[16]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i572.m_fontMaterials = i576
  i572.m_fontColor32 = UnityEngine.Color32.ConstructColor(i573[17], i573[18], i573[19], i573[20])
  i572.m_fontColor = new pc.Color(i573[21], i573[22], i573[23], i573[24])
  i572.m_enableVertexGradient = !!i573[25]
  i572.m_colorMode = i573[26]
  i572.m_fontColorGradient = request.d('TMPro.VertexGradient', i573[27], i572.m_fontColorGradient)
  request.r(i573[28], i573[29], 0, i572, 'm_fontColorGradientPreset')
  request.r(i573[30], i573[31], 0, i572, 'm_spriteAsset')
  i572.m_tintAllSprites = !!i573[32]
  request.r(i573[33], i573[34], 0, i572, 'm_StyleSheet')
  i572.m_TextStyleHashCode = i573[35]
  i572.m_overrideHtmlColors = !!i573[36]
  i572.m_faceColor = UnityEngine.Color32.ConstructColor(i573[37], i573[38], i573[39], i573[40])
  i572.m_fontSize = i573[41]
  i572.m_fontSizeBase = i573[42]
  i572.m_fontWeight = i573[43]
  i572.m_enableAutoSizing = !!i573[44]
  i572.m_fontSizeMin = i573[45]
  i572.m_fontSizeMax = i573[46]
  i572.m_fontStyle = i573[47]
  i572.m_HorizontalAlignment = i573[48]
  i572.m_VerticalAlignment = i573[49]
  i572.m_textAlignment = i573[50]
  i572.m_characterSpacing = i573[51]
  i572.m_wordSpacing = i573[52]
  i572.m_lineSpacing = i573[53]
  i572.m_lineSpacingMax = i573[54]
  i572.m_paragraphSpacing = i573[55]
  i572.m_charWidthMaxAdj = i573[56]
  i572.m_enableWordWrapping = !!i573[57]
  i572.m_wordWrappingRatios = i573[58]
  i572.m_overflowMode = i573[59]
  request.r(i573[60], i573[61], 0, i572, 'm_linkedTextComponent')
  request.r(i573[62], i573[63], 0, i572, 'parentLinkedComponent')
  i572.m_enableKerning = !!i573[64]
  i572.m_enableExtraPadding = !!i573[65]
  i572.checkPaddingRequired = !!i573[66]
  i572.m_isRichText = !!i573[67]
  i572.m_parseCtrlCharacters = !!i573[68]
  i572.m_isOrthographic = !!i573[69]
  i572.m_isCullingEnabled = !!i573[70]
  i572.m_horizontalMapping = i573[71]
  i572.m_verticalMapping = i573[72]
  i572.m_uvLineOffset = i573[73]
  i572.m_geometrySortingOrder = i573[74]
  i572.m_IsTextObjectScaleStatic = !!i573[75]
  i572.m_VertexBufferAutoSizeReduction = !!i573[76]
  i572.m_useMaxVisibleDescender = !!i573[77]
  i572.m_pageToDisplay = i573[78]
  i572.m_margin = new pc.Vec4( i573[79], i573[80], i573[81], i573[82] )
  i572.m_isUsingLegacyAnimationComponent = !!i573[83]
  i572.m_isVolumetricText = !!i573[84]
  i572.m_Maskable = !!i573[85]
  request.r(i573[86], i573[87], 0, i572, 'm_Material')
  i572.m_Color = new pc.Color(i573[88], i573[89], i573[90], i573[91])
  i572.m_RaycastTarget = !!i573[92]
  i572.m_RaycastPadding = new pc.Vec4( i573[93], i573[94], i573[95], i573[96] )
  return i572
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i580 = root || request.c( 'TMPro.VertexGradient' )
  var i581 = data
  i580.topLeft = new pc.Color(i581[0], i581[1], i581[2], i581[3])
  i580.topRight = new pc.Color(i581[4], i581[5], i581[6], i581[7])
  i580.bottomLeft = new pc.Color(i581[8], i581[9], i581[10], i581[11])
  i580.bottomRight = new pc.Color(i581[12], i581[13], i581[14], i581[15])
  return i580
}

Deserializers["MaskProBuiltIn"] = function (request, data, root) {
  var i582 = root || request.c( 'MaskProBuiltIn' )
  var i583 = data
  i582.role = i583[0]
  i582.stencilRef = i583[1]
  i582.autoAssignRef = !!i583[2]
  i582.targetDiscovery = i583[3]
  var i585 = i583[4]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Graphic')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i582.explicitTargets = i584
  i582.invert = !!i583[5]
  i582.writerVisible = !!i583[6]
  i582.writerReceivesRaycasts = !!i583[7]
  i582.drawOrderFix = i583[8]
  i582.restoreOnDisable = !!i583[9]
  i582.disableMaskableOnReaders = !!i583[10]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'animatorController')
  request.r(i589[2], i589[3], 0, i588, 'avatar')
  i588.updateMode = i589[4]
  i588.hasTransformHierarchy = !!i589[5]
  i588.applyRootMotion = !!i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.humanBones = i590
  i588.enabled = !!i589[8]
  return i588
}

Deserializers["ImageHandler"] = function (request, data, root) {
  var i594 = root || request.c( 'ImageHandler' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'childToToggle')
  request.r(i595[2], i595[3], 0, i594, 'targetImage')
  request.r(i595[4], i595[5], 0, i594, 'explicitOriginal')
  return i594
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i596 = root || request.c( 'PromtPopUp' )
  var i597 = data
  i596.DestroyGameObject = !!i597[0]
  return i596
}

Deserializers["SIPChecker_P"] = function (request, data, root) {
  var i598 = root || request.c( 'SIPChecker_P' )
  var i599 = data
  return i598
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Mask' )
  var i601 = data
  i600.m_ShowMaskGraphic = !!i601[0]
  return i600
}

Deserializers["UIDropZoneDetector_L"] = function (request, data, root) {
  var i602 = root || request.c( 'UIDropZoneDetector_L' )
  var i603 = data
  return i602
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_FirstSelected')
  i604.m_sendNavigationEvents = !!i605[2]
  i604.m_DragThreshold = i605[3]
  return i604
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i607 = data
  i606.m_HorizontalAxis = i607[0]
  i606.m_VerticalAxis = i607[1]
  i606.m_SubmitButton = i607[2]
  i606.m_CancelButton = i607[3]
  i606.m_InputActionsPerSecond = i607[4]
  i606.m_RepeatDelay = i607[5]
  i606.m_ForceModuleActive = !!i607[6]
  i606.m_SendPointerHoverToParent = !!i607[7]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i609 = data
  i608.ambientIntensity = i609[0]
  i608.reflectionIntensity = i609[1]
  i608.ambientMode = i609[2]
  i608.ambientLight = new pc.Color(i609[3], i609[4], i609[5], i609[6])
  i608.ambientSkyColor = new pc.Color(i609[7], i609[8], i609[9], i609[10])
  i608.ambientGroundColor = new pc.Color(i609[11], i609[12], i609[13], i609[14])
  i608.ambientEquatorColor = new pc.Color(i609[15], i609[16], i609[17], i609[18])
  i608.fogColor = new pc.Color(i609[19], i609[20], i609[21], i609[22])
  i608.fogEndDistance = i609[23]
  i608.fogStartDistance = i609[24]
  i608.fogDensity = i609[25]
  i608.fog = !!i609[26]
  request.r(i609[27], i609[28], 0, i608, 'skybox')
  i608.fogMode = i609[29]
  var i611 = i609[30]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i611[i + 0]) );
  }
  i608.lightmaps = i610
  i608.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i609[31], i608.lightProbes)
  i608.lightmapsMode = i609[32]
  i608.mixedBakeMode = i609[33]
  i608.environmentLightingMode = i609[34]
  i608.ambientProbe = new pc.SphericalHarmonicsL2(i609[35])
  i608.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i609[36])
  i608.useReferenceAmbientProbe = !!i609[37]
  request.r(i609[38], i609[39], 0, i608, 'customReflection')
  request.r(i609[40], i609[41], 0, i608, 'defaultReflection')
  i608.defaultReflectionMode = i609[42]
  i608.defaultReflectionResolution = i609[43]
  i608.sunLightObjectId = i609[44]
  i608.pixelLightCount = i609[45]
  i608.defaultReflectionHDR = !!i609[46]
  i608.hasLightDataAsset = !!i609[47]
  i608.hasManualGenerate = !!i609[48]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'lightmapColor')
  request.r(i615[2], i615[3], 0, i614, 'lightmapDirection')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i616 = root || new UnityEngine.LightProbes()
  var i617 = data
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i624 = root || new pc.UnityMaterial()
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'shader')
  i624.renderQueue = i625[3]
  i624.enableInstancing = !!i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i627[i + 0]) );
  }
  i624.floatParameters = i626
  var i629 = i625[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i629[i + 0]) );
  }
  i624.colorParameters = i628
  var i631 = i625[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i631[i + 0]) );
  }
  i624.vectorParameters = i630
  var i633 = i625[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i633[i + 0]) );
  }
  i624.textureParameters = i632
  var i635 = i625[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i635[i + 0]) );
  }
  i624.materialFlags = i634
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Color(i643[1], i643[2], i643[3], i643[4])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Vec4( i647[1], i647[2], i647[3], i647[4] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'value')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i655 = data
  i654.name = i655[0]
  i654.enabled = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i657 = data
  var i659 = i657[0]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i659[i + 0]));
  }
  i656.ShaderCompilationErrors = i658
  i656.name = i657[1]
  i656.guid = i657[2]
  var i661 = i657[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.shaderDefinedKeywords = i660
  var i663 = i657[4]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i663[i + 0]) );
  }
  i656.passes = i662
  var i665 = i657[5]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i665[i + 0]) );
  }
  i656.usePasses = i664
  var i667 = i657[6]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i667[i + 0]) );
  }
  i656.defaultParameterValues = i666
  request.r(i657[7], i657[8], 0, i656, 'unityFallbackShader')
  i656.readDepth = !!i657[9]
  i656.isCreatedByShaderGraph = !!i657[10]
  i656.disableBatching = !!i657[11]
  i656.compiled = !!i657[12]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i671 = data
  i670.shaderName = i671[0]
  i670.errorMessage = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i676 = root || new pc.UnityShaderPass()
  var i677 = data
  i676.id = i677[0]
  i676.subShaderIndex = i677[1]
  i676.name = i677[2]
  i676.passType = i677[3]
  i676.grabPassTextureName = i677[4]
  i676.usePass = !!i677[5]
  i676.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[6], i676.zTest)
  i676.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[7], i676.zWrite)
  i676.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[8], i676.culling)
  i676.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[9], i676.blending)
  i676.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[10], i676.alphaBlending)
  i676.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[11], i676.colorWriteMask)
  i676.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[12], i676.offsetUnits)
  i676.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[13], i676.offsetFactor)
  i676.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[14], i676.stencilRef)
  i676.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[15], i676.stencilReadMask)
  i676.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[16], i676.stencilWriteMask)
  i676.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[17], i676.stencilOp)
  i676.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[18], i676.stencilOpFront)
  i676.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[19], i676.stencilOpBack)
  var i679 = i677[20]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i679[i + 0]) );
  }
  i676.tags = i678
  var i681 = i677[21]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.passDefinedKeywords = i680
  var i683 = i677[22]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i683[i + 0]) );
  }
  i676.passDefinedKeywordGroups = i682
  var i685 = i677[23]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i685[i + 0]) );
  }
  i676.variants = i684
  var i687 = i677[24]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i687[i + 0]) );
  }
  i676.excludedVariants = i686
  i676.hasDepthReader = !!i677[25]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i689 = data
  i688.val = i689[0]
  i688.name = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i691 = data
  i690.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[0], i690.src)
  i690.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[1], i690.dst)
  i690.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[2], i690.op)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i693 = data
  i692.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[0], i692.pass)
  i692.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[1], i692.fail)
  i692.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[2], i692.zFail)
  i692.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[3], i692.comp)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i697 = data
  i696.name = i697[0]
  i696.value = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i701 = data
  var i703 = i701[0]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.keywords = i702
  i700.hasDiscard = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i707 = data
  i706.passId = i707[0]
  i706.subShaderIndex = i707[1]
  var i709 = i707[2]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i706.keywords = i708
  i706.vertexProgram = i707[3]
  i706.fragmentProgram = i707[4]
  i706.exportedForWebGl2 = !!i707[5]
  i706.readDepth = !!i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'shader')
  i712.pass = i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i717 = data
  i716.name = i717[0]
  i716.type = i717[1]
  i716.value = new pc.Vec4( i717[2], i717[3], i717[4], i717[5] )
  i716.textureValue = i717[6]
  i716.shaderPropertyFlag = i717[7]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'texture')
  i718.aabb = i719[3]
  i718.vertices = i719[4]
  i718.triangles = i719[5]
  i718.textureRect = UnityEngine.Rect.MinMaxRect(i719[6], i719[7], i719[8], i719[9])
  i718.packedRect = UnityEngine.Rect.MinMaxRect(i719[10], i719[11], i719[12], i719[13])
  i718.border = new pc.Vec4( i719[14], i719[15], i719[16], i719[17] )
  i718.transparency = i719[18]
  i718.bounds = i719[19]
  i718.pixelsPerUnit = i719[20]
  i718.textureWidth = i719[21]
  i718.textureHeight = i719[22]
  i718.nativeSize = new pc.Vec2( i719[23], i719[24] )
  i718.pivot = new pc.Vec2( i719[25], i719[26] )
  i718.textureRectOffset = new pc.Vec2( i719[27], i719[28] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i721 = data
  i720.name = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i723 = data
  i722.name = i723[0]
  i722.wrapMode = i723[1]
  i722.isLooping = !!i723[2]
  i722.length = i723[3]
  var i725 = i723[4]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i725[i + 0]) );
  }
  i722.curves = i724
  var i727 = i723[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i727[i + 0]) );
  }
  i722.events = i726
  i722.halfPrecision = !!i723[6]
  i722._frameRate = i723[7]
  i722.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i723[8], i722.localBounds)
  i722.hasMuscleCurves = !!i723[9]
  var i729 = i723[10]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i722.clipMuscleConstant = i728
  i722.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i723[11], i722.clipBindingConstant)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i733 = data
  i732.path = i733[0]
  i732.hash = i733[1]
  i732.componentType = i733[2]
  i732.property = i733[3]
  i732.keys = i733[4]
  var i735 = i733[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i735[i + 0]) );
  }
  i732.objectReferenceKeys = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i739 = data
  i738.time = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'value')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i743 = data
  i742.functionName = i743[0]
  i742.floatParameter = i743[1]
  i742.intParameter = i743[2]
  i742.stringParameter = i743[3]
  request.r(i743[4], i743[5], 0, i742, 'objectReferenceParameter')
  i742.time = i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i745 = data
  i744.center = new pc.Vec3( i745[0], i745[1], i745[2] )
  i744.extends = new pc.Vec3( i745[3], i745[4], i745[5] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i749 = data
  var i751 = i749[0]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i748.genericBindings = i750
  var i753 = i749[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i748.pptrCurveMapping = i752
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i755 = data
  i754.name = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i757[i + 0]) );
  }
  i754.layers = i756
  var i759 = i755[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i759[i + 0]) );
  }
  i754.parameters = i758
  i754.animationClips = i755[3]
  i754.avatarUnsupported = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i763 = data
  i762.name = i763[0]
  i762.defaultWeight = i763[1]
  i762.blendingMode = i763[2]
  i762.avatarMask = i763[3]
  i762.syncedLayerIndex = i763[4]
  i762.syncedLayerAffectsTiming = !!i763[5]
  i762.syncedLayers = i763[6]
  i762.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i763[7], i762.stateMachine)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i765 = data
  i764.id = i765[0]
  i764.name = i765[1]
  i764.path = i765[2]
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i767[i + 0]) );
  }
  i764.states = i766
  var i769 = i765[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i769[i + 0]) );
  }
  i764.machines = i768
  var i771 = i765[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i771[i + 0]) );
  }
  i764.entryStateTransitions = i770
  var i773 = i765[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i773[i + 0]) );
  }
  i764.exitStateTransitions = i772
  var i775 = i765[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i775[i + 0]) );
  }
  i764.anyStateTransitions = i774
  i764.defaultStateId = i765[8]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i779 = data
  i778.id = i779[0]
  i778.name = i779[1]
  i778.cycleOffset = i779[2]
  i778.cycleOffsetParameter = i779[3]
  i778.cycleOffsetParameterActive = !!i779[4]
  i778.mirror = !!i779[5]
  i778.mirrorParameter = i779[6]
  i778.mirrorParameterActive = !!i779[7]
  i778.motionId = i779[8]
  i778.nameHash = i779[9]
  i778.fullPathHash = i779[10]
  i778.speed = i779[11]
  i778.speedParameter = i779[12]
  i778.speedParameterActive = !!i779[13]
  i778.tag = i779[14]
  i778.tagHash = i779[15]
  i778.writeDefaultValues = !!i779[16]
  var i781 = i779[17]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.behaviours = i780
  var i783 = i779[18]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i783[i + 0]) );
  }
  i778.transitions = i782
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i789 = data
  i788.fullPath = i789[0]
  i788.canTransitionToSelf = !!i789[1]
  i788.duration = i789[2]
  i788.exitTime = i789[3]
  i788.hasExitTime = !!i789[4]
  i788.hasFixedDuration = !!i789[5]
  i788.interruptionSource = i789[6]
  i788.offset = i789[7]
  i788.orderedInterruption = !!i789[8]
  i788.destinationStateId = i789[9]
  i788.isExit = !!i789[10]
  i788.mute = !!i789[11]
  i788.solo = !!i789[12]
  var i791 = i789[13]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i791[i + 0]) );
  }
  i788.conditions = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i797 = data
  i796.destinationStateId = i797[0]
  i796.isExit = !!i797[1]
  i796.mute = !!i797[2]
  i796.solo = !!i797[3]
  var i799 = i797[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i799[i + 0]) );
  }
  i796.conditions = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i803 = data
  i802.defaultBool = !!i803[0]
  i802.defaultFloat = i803[1]
  i802.defaultInt = i803[2]
  i802.name = i803[3]
  i802.nameHash = i803[4]
  i802.type = i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i807 = data
  i806.mode = i807[0]
  i806.parameter = i807[1]
  i806.threshold = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i809 = data
  i808.name = i809[0]
  i808.bytes64 = i809[1]
  i808.data = i809[2]
  return i808
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i810 = root || request.c( 'AudioLibrary' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('AudioLibrary+ClipEntry', i813[i + 0]));
  }
  i810.clips = i812
  return i810
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i816 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i817 = data
  i816.key = i817[0]
  i816.channel = i817[1]
  request.r(i817[2], i817[3], 0, i816, 'clip')
  i816.volume = i817[4]
  i816.loop = !!i817[5]
  return i816
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i819 = data
  i818.useSafeMode = !!i819[0]
  i818.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i819[1], i818.safeModeOptions)
  i818.timeScale = i819[2]
  i818.unscaledTimeScale = i819[3]
  i818.useSmoothDeltaTime = !!i819[4]
  i818.maxSmoothUnscaledTime = i819[5]
  i818.rewindCallbackMode = i819[6]
  i818.showUnityEditorReport = !!i819[7]
  i818.logBehaviour = i819[8]
  i818.drawGizmos = !!i819[9]
  i818.defaultRecyclable = !!i819[10]
  i818.defaultAutoPlay = i819[11]
  i818.defaultUpdateType = i819[12]
  i818.defaultTimeScaleIndependent = !!i819[13]
  i818.defaultEaseType = i819[14]
  i818.defaultEaseOvershootOrAmplitude = i819[15]
  i818.defaultEasePeriod = i819[16]
  i818.defaultAutoKill = !!i819[17]
  i818.defaultLoopType = i819[18]
  i818.debugMode = !!i819[19]
  i818.debugStoreTargetId = !!i819[20]
  i818.showPreviewPanel = !!i819[21]
  i818.storeSettingsLocation = i819[22]
  i818.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i819[23], i818.modules)
  i818.createASMDEF = !!i819[24]
  i818.showPlayingTweens = !!i819[25]
  i818.showPausedTweens = !!i819[26]
  return i818
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i821 = data
  i820.logBehaviour = i821[0]
  i820.nestedTweenFailureBehaviour = i821[1]
  return i820
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i822 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i823 = data
  i822.showPanel = !!i823[0]
  i822.audioEnabled = !!i823[1]
  i822.physicsEnabled = !!i823[2]
  i822.physics2DEnabled = !!i823[3]
  i822.spriteEnabled = !!i823[4]
  i822.uiEnabled = !!i823[5]
  i822.textMeshProEnabled = !!i823[6]
  i822.tk2DEnabled = !!i823[7]
  i822.deAudioEnabled = !!i823[8]
  i822.deUnityExtendedEnabled = !!i823[9]
  i822.epoOutlineEnabled = !!i823[10]
  return i822
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Settings' )
  var i825 = data
  i824.m_enableWordWrapping = !!i825[0]
  i824.m_enableKerning = !!i825[1]
  i824.m_enableExtraPadding = !!i825[2]
  i824.m_enableTintAllSprites = !!i825[3]
  i824.m_enableParseEscapeCharacters = !!i825[4]
  i824.m_EnableRaycastTarget = !!i825[5]
  i824.m_GetFontFeaturesAtRuntime = !!i825[6]
  i824.m_missingGlyphCharacter = i825[7]
  i824.m_warningsDisabled = !!i825[8]
  request.r(i825[9], i825[10], 0, i824, 'm_defaultFontAsset')
  i824.m_defaultFontAssetPath = i825[11]
  i824.m_defaultFontSize = i825[12]
  i824.m_defaultAutoSizeMinRatio = i825[13]
  i824.m_defaultAutoSizeMaxRatio = i825[14]
  i824.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i825[15], i825[16] )
  i824.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i825[17], i825[18] )
  i824.m_autoSizeTextContainer = !!i825[19]
  i824.m_IsTextObjectScaleStatic = !!i825[20]
  var i827 = i825[21]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i824.m_fallbackFontAssets = i826
  i824.m_matchMaterialPreset = !!i825[22]
  request.r(i825[23], i825[24], 0, i824, 'm_defaultSpriteAsset')
  i824.m_defaultSpriteAssetPath = i825[25]
  i824.m_enableEmojiSupport = !!i825[26]
  i824.m_MissingCharacterSpriteUnicode = i825[27]
  i824.m_defaultColorGradientPresetsPath = i825[28]
  request.r(i825[29], i825[30], 0, i824, 'm_defaultStyleSheet')
  i824.m_StyleSheetsResourcePath = i825[31]
  request.r(i825[32], i825[33], 0, i824, 'm_leadingCharacters')
  request.r(i825[34], i825[35], 0, i824, 'm_followingCharacters')
  i824.m_UseModernHangulLineBreakingRules = !!i825[36]
  return i824
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'spriteSheet')
  var i833 = i831[2]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('TMPro.TMP_Sprite', i833[i + 0]));
  }
  i830.spriteInfoList = i832
  var i835 = i831[3]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 1, i834, '')
  }
  i830.fallbackSpriteAssets = i834
  i830.hashCode = i831[4]
  request.r(i831[5], i831[6], 0, i830, 'material')
  i830.materialHashCode = i831[7]
  i830.m_Version = i831[8]
  i830.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i831[9], i830.m_FaceInfo)
  var i837 = i831[10]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('TMPro.TMP_SpriteCharacter', i837[i + 0]));
  }
  i830.m_SpriteCharacterTable = i836
  var i839 = i831[11]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('TMPro.TMP_SpriteGlyph', i839[i + 0]));
  }
  i830.m_SpriteGlyphTable = i838
  return i830
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Sprite' )
  var i843 = data
  i842.name = i843[0]
  i842.hashCode = i843[1]
  i842.unicode = i843[2]
  i842.pivot = new pc.Vec2( i843[3], i843[4] )
  request.r(i843[5], i843[6], 0, i842, 'sprite')
  i842.id = i843[7]
  i842.x = i843[8]
  i842.y = i843[9]
  i842.width = i843[10]
  i842.height = i843[11]
  i842.xOffset = i843[12]
  i842.yOffset = i843[13]
  i842.xAdvance = i843[14]
  i842.scale = i843[15]
  return i842
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i847 = data
  i846.m_FaceIndex = i847[0]
  i846.m_FamilyName = i847[1]
  i846.m_StyleName = i847[2]
  i846.m_PointSize = i847[3]
  i846.m_Scale = i847[4]
  i846.m_UnitsPerEM = i847[5]
  i846.m_LineHeight = i847[6]
  i846.m_AscentLine = i847[7]
  i846.m_CapLine = i847[8]
  i846.m_MeanLine = i847[9]
  i846.m_Baseline = i847[10]
  i846.m_DescentLine = i847[11]
  i846.m_SuperscriptOffset = i847[12]
  i846.m_SuperscriptSize = i847[13]
  i846.m_SubscriptOffset = i847[14]
  i846.m_SubscriptSize = i847[15]
  i846.m_UnderlineOffset = i847[16]
  i846.m_UnderlineThickness = i847[17]
  i846.m_StrikethroughOffset = i847[18]
  i846.m_StrikethroughThickness = i847[19]
  i846.m_TabWidth = i847[20]
  return i846
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i851 = data
  i850.m_Name = i851[0]
  i850.m_HashCode = i851[1]
  i850.m_ElementType = i851[2]
  i850.m_Unicode = i851[3]
  i850.m_GlyphIndex = i851[4]
  i850.m_Scale = i851[5]
  return i850
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'sprite')
  i854.m_Index = i855[2]
  i854.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i855[3], i854.m_Metrics)
  i854.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i855[4], i854.m_GlyphRect)
  i854.m_Scale = i855[5]
  i854.m_AtlasIndex = i855[6]
  i854.m_ClassDefinitionType = i855[7]
  return i854
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i857 = data
  i856.m_Width = i857[0]
  i856.m_Height = i857[1]
  i856.m_HorizontalBearingX = i857[2]
  i856.m_HorizontalBearingY = i857[3]
  i856.m_HorizontalAdvance = i857[4]
  return i856
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i859 = data
  i858.m_X = i859[0]
  i858.m_Y = i859[1]
  i858.m_Width = i859[2]
  i858.m_Height = i859[3]
  return i858
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_Style', i863[i + 0]));
  }
  i860.m_StyleList = i862
  return i860
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Style' )
  var i867 = data
  i866.m_Name = i867[0]
  i866.m_HashCode = i867[1]
  i866.m_OpeningDefinition = i867[2]
  i866.m_ClosingDefinition = i867[3]
  i866.m_OpeningTagArray = i867[4]
  i866.m_ClosingTagArray = i867[5]
  i866.m_OpeningTagUnicodeArray = i867[6]
  i866.m_ClosingTagUnicodeArray = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i871[i + 0]) );
  }
  i868.files = i870
  i868.componentToPrefabIds = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i875 = data
  i874.path = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'unityObject')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i879[i + 0]) );
  }
  i876.scriptsExecutionOrder = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i881[i + 0]) );
  }
  i876.sortingLayers = i880
  var i883 = i877[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i883[i + 0]) );
  }
  i876.cullingLayers = i882
  i876.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i877[3], i876.timeSettings)
  i876.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i877[4], i876.physicsSettings)
  i876.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i877[5], i876.physics2DSettings)
  i876.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i877[6], i876.qualitySettings)
  i876.enableRealtimeShadows = !!i877[7]
  i876.enableAutoInstancing = !!i877[8]
  i876.enableStaticBatching = !!i877[9]
  i876.enableDynamicBatching = !!i877[10]
  i876.lightmapEncodingQuality = i877[11]
  i876.desiredColorSpace = i877[12]
  var i885 = i877[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i876.allTags = i884
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.value = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i897 = data
  i896.id = i897[0]
  i896.name = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i899 = data
  i898.fixedDeltaTime = i899[0]
  i898.maximumDeltaTime = i899[1]
  i898.timeScale = i899[2]
  i898.maximumParticleTimestep = i899[3]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i901 = data
  i900.gravity = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.defaultSolverIterations = i901[3]
  i900.bounceThreshold = i901[4]
  i900.autoSyncTransforms = !!i901[5]
  i900.autoSimulation = !!i901[6]
  var i903 = i901[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i903[i + 0]) );
  }
  i900.collisionMatrix = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.layerId = i907[1]
  i906.otherLayerId = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'material')
  i908.gravity = new pc.Vec2( i909[2], i909[3] )
  i908.positionIterations = i909[4]
  i908.velocityIterations = i909[5]
  i908.velocityThreshold = i909[6]
  i908.maxLinearCorrection = i909[7]
  i908.maxAngularCorrection = i909[8]
  i908.maxTranslationSpeed = i909[9]
  i908.maxRotationSpeed = i909[10]
  i908.baumgarteScale = i909[11]
  i908.baumgarteTOIScale = i909[12]
  i908.timeToSleep = i909[13]
  i908.linearSleepTolerance = i909[14]
  i908.angularSleepTolerance = i909[15]
  i908.defaultContactOffset = i909[16]
  i908.autoSimulation = !!i909[17]
  i908.queriesHitTriggers = !!i909[18]
  i908.queriesStartInColliders = !!i909[19]
  i908.callbacksOnDisable = !!i909[20]
  i908.reuseCollisionCallbacks = !!i909[21]
  i908.autoSyncTransforms = !!i909[22]
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i911[i + 0]) );
  }
  i908.collisionMatrix = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i915 = data
  i914.enabled = !!i915[0]
  i914.layerId = i915[1]
  i914.otherLayerId = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[i + 0]) );
  }
  i916.qualityLevels = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.names = i920
  i916.shadows = i917[2]
  i916.anisotropicFiltering = i917[3]
  i916.antiAliasing = i917[4]
  i916.lodBias = i917[5]
  i916.shadowCascades = i917[6]
  i916.shadowDistance = i917[7]
  i916.shadowmaskMode = i917[8]
  i916.shadowProjection = i917[9]
  i916.shadowResolution = i917[10]
  i916.softParticles = !!i917[11]
  i916.softVegetation = !!i917[12]
  i916.activeColorSpace = i917[13]
  i916.desiredColorSpace = i917[14]
  i916.masterTextureLimit = i917[15]
  i916.maxQueuedFrames = i917[16]
  i916.particleRaycastBudget = i917[17]
  i916.pixelLightCount = i917[18]
  i916.realtimeReflectionProbes = !!i917[19]
  i916.shadowCascade2Split = i917[20]
  i916.shadowCascade4Split = new pc.Vec3( i917[21], i917[22], i917[23] )
  i916.streamingMipmapsActive = !!i917[24]
  i916.vSyncCount = i917[25]
  i916.asyncUploadBufferSize = i917[26]
  i916.asyncUploadTimeSlice = i917[27]
  i916.billboardsFaceCameraPosition = !!i917[28]
  i916.shadowNearPlaneOffset = i917[29]
  i916.streamingMipmapsMemoryBudget = i917[30]
  i916.maximumLODLevel = i917[31]
  i916.streamingMipmapsAddAllCameras = !!i917[32]
  i916.streamingMipmapsMaxLevelReduction = i917[33]
  i916.streamingMipmapsRenderersPerFrame = i917[34]
  i916.resolutionScalingFixedDPIFactor = i917[35]
  i916.streamingMipmapsMaxFileIORequests = i917[36]
  i916.currentQualityLevel = i917[37]
  return i916
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[1],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[25],"69":[25],"70":[25],"71":[25],"72":[25],"73":[25],"74":[25],"75":[25],"76":[25],"77":[25],"78":[25],"79":[25],"80":[25],"81":[1],"82":[83],"84":[85],"86":[85],"10":[9],"22":[9],"87":[1],"88":[9],"23":[9],"24":[9],"89":[61],"13":[10,12],"90":[9],"91":[9],"28":[26],"39":[26],"27":[9],"92":[93],"94":[9],"95":[9],"18":[10],"16":[15,9],"96":[9],"12":[10],"97":[9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"38":[9],"104":[9],"105":[15,9],"106":[9],"107":[9],"108":[9],"109":[9],"110":[15,9],"111":[9],"112":[40],"113":[40],"41":[40],"114":[40],"115":[1],"116":[1],"117":[118],"119":[1],"120":[9],"121":[83,9],"29":[9,15],"122":[9],"123":[15,9],"124":[83],"125":[15,9],"126":[9]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AudioManager","AudioLibrary","GameManager","UnityEngine.GameObject","TaskManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","ResponsiveUIManager","OrientationLayoutSwitcher","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","CanvasGroupAnimator","UnityEngine.CanvasGroup","UnityEngine.UI.Button","ButtonPulse","FluidGridLayout","HorizontalUIDragClamp","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UIHorizontalMover","UIDropZoneDetector","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","MaskProBuiltIn","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","ImageHandler","PromtPopUp","SIPChecker_P","UnityEngine.UI.Mask","UIDropZoneDetector_L","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAspectFitter","DragToResizeLeft","Bullet","UIDragger","UIDropRightEdgeOnPointerUpDetector","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "09/25/2025 07:37:13";

Deserializers.lunaDaysRunning = "7.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Before-and-After_Sip";

Deserializers.lunaAppID = "33357";

Deserializers.projectId = "25cf7bcc16a03234c9bd68200ba66e30";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1743";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4568";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5b25b2a1-33f6-49a1-bb27-285f43846f83";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

