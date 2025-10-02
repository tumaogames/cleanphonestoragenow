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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i486 = root || new pc.UnityMaterial()
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'shader')
  i486.renderQueue = i487[3]
  i486.enableInstancing = !!i487[4]
  var i489 = i487[5]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i489[i + 0]) );
  }
  i486.floatParameters = i488
  var i491 = i487[6]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i491[i + 0]) );
  }
  i486.colorParameters = i490
  var i493 = i487[7]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i493[i + 0]) );
  }
  i486.vectorParameters = i492
  var i495 = i487[8]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i495[i + 0]) );
  }
  i486.textureParameters = i494
  var i497 = i487[9]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i497[i + 0]) );
  }
  i486.materialFlags = i496
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Color(i505[1], i505[2], i505[3], i505[4])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Vec4( i509[1], i509[2], i509[3], i509[4] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'value')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i517 = data
  i516.name = i517[0]
  i516.enabled = !!i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i519 = data
  i518.name = i519[0]
  i518.index = i519[1]
  i518.startup = !!i519[2]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i521 = data
  i520.position = new pc.Vec3( i521[0], i521[1], i521[2] )
  i520.scale = new pc.Vec3( i521[3], i521[4], i521[5] )
  i520.rotation = new pc.Quat(i521[6], i521[7], i521[8], i521[9])
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i523 = data
  i522.aspect = i523[0]
  i522.orthographic = !!i523[1]
  i522.orthographicSize = i523[2]
  i522.backgroundColor = new pc.Color(i523[3], i523[4], i523[5], i523[6])
  i522.nearClipPlane = i523[7]
  i522.farClipPlane = i523[8]
  i522.fieldOfView = i523[9]
  i522.depth = i523[10]
  i522.clearFlags = i523[11]
  i522.cullingMask = i523[12]
  i522.rect = i523[13]
  request.r(i523[14], i523[15], 0, i522, 'targetTexture')
  i522.usePhysicalProperties = !!i523[16]
  i522.focalLength = i523[17]
  i522.sensorSize = new pc.Vec2( i523[18], i523[19] )
  i522.lensShift = new pc.Vec2( i523[20], i523[21] )
  i522.gateFit = i523[22]
  i522.commandBufferCount = i523[23]
  i522.cameraType = i523[24]
  i522.enabled = !!i523[25]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i525 = data
  i524.name = i525[0]
  i524.tagId = i525[1]
  i524.enabled = !!i525[2]
  i524.isStatic = !!i525[3]
  i524.layer = i525[4]
  return i524
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i526 = root || request.c( 'AudioManager' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'library')
  i526.sfxPoolSize = i527[2]
  return i526
}

Deserializers["GameManager"] = function (request, data, root) {
  var i528 = root || request.c( 'GameManager' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'endPanel')
  request.r(i529[2], i529[3], 0, i528, 'endPanel_L')
  i528.end = !!i529[4]
  request.r(i529[5], i529[6], 0, i528, 'hand')
  request.r(i529[7], i529[8], 0, i528, 'arrow')
  request.r(i529[9], i529[10], 0, i528, 'prompt')
  request.r(i529[11], i529[12], 0, i528, 'prompt_L')
  request.r(i529[13], i529[14], 0, i528, 'slideToCleanBtn_P')
  request.r(i529[15], i529[16], 0, i528, 'ContinueCleaningBtn_P')
  request.r(i529[17], i529[18], 0, i528, 'slideToCleanBtn_L')
  request.r(i529[19], i529[20], 0, i528, 'ContinueCleaningBtn_L')
  i528.enableSound = !!i529[21]
  i528.isSIP = !!i529[22]
  request.r(i529[23], i529[24], 0, i528, 'startClickHandler')
  i528.currentScore = i529[25]
  return i528
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i530 = root || request.c( 'TaskManager' )
  var i531 = data
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i533 = data
  i532.pivot = new pc.Vec2( i533[0], i533[1] )
  i532.anchorMin = new pc.Vec2( i533[2], i533[3] )
  i532.anchorMax = new pc.Vec2( i533[4], i533[5] )
  i532.sizeDelta = new pc.Vec2( i533[6], i533[7] )
  i532.anchoredPosition3D = new pc.Vec3( i533[8], i533[9], i533[10] )
  i532.rotation = new pc.Quat(i533[11], i533[12], i533[13], i533[14])
  i532.scale = new pc.Vec3( i533[15], i533[16], i533[17] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i535 = data
  i534.planeDistance = i535[0]
  i534.referencePixelsPerUnit = i535[1]
  i534.isFallbackOverlay = !!i535[2]
  i534.renderMode = i535[3]
  i534.renderOrder = i535[4]
  i534.sortingLayerName = i535[5]
  i534.sortingOrder = i535[6]
  i534.scaleFactor = i535[7]
  request.r(i535[8], i535[9], 0, i534, 'worldCamera')
  i534.overrideSorting = !!i535[10]
  i534.pixelPerfect = !!i535[11]
  i534.targetDisplay = i535[12]
  i534.overridePixelPerfect = !!i535[13]
  i534.enabled = !!i535[14]
  return i534
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i537 = data
  i536.m_UiScaleMode = i537[0]
  i536.m_ReferencePixelsPerUnit = i537[1]
  i536.m_ScaleFactor = i537[2]
  i536.m_ReferenceResolution = new pc.Vec2( i537[3], i537[4] )
  i536.m_ScreenMatchMode = i537[5]
  i536.m_MatchWidthOrHeight = i537[6]
  i536.m_PhysicalUnit = i537[7]
  i536.m_FallbackScreenDPI = i537[8]
  i536.m_DefaultSpriteDPI = i537[9]
  i536.m_DynamicPixelsPerUnit = i537[10]
  i536.m_PresetInfoIsWorld = !!i537[11]
  return i536
}

Deserializers["ResponsiveUIManager"] = function (request, data, root) {
  var i538 = root || request.c( 'ResponsiveUIManager' )
  var i539 = data
  i538.forceOrientation = i539[0]
  i538.portraitReferenceResolution = new pc.Vec2( i539[1], i539[2] )
  i538.landscapeReferenceResolution = new pc.Vec2( i539[3], i539[4] )
  i538.manageCanvasScaler = !!i539[5]
  i538.referenceResolution = new pc.Vec2( i539[6], i539[7] )
  i538.defaultMatchWidthOrHeight = i539[8]
  i538.useOrientationAgnosticAspect = !!i539[9]
  var i541 = i539[10]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('ResponsiveUIManager+AspectProfile', i541[i + 0]) );
  }
  i538.aspectProfiles = i540
  i538.enableDpiClamp = !!i539[11]
  i538.dpiClampThreshold = i539[12]
  i538.dpiClampMax = i539[13]
  var i543 = i539[14]
  var i542 = []
  for(var i = 0; i < i543.length; i += 2) {
  request.r(i543[i + 0], i543[i + 1], 2, i542, '')
  }
  i538.safeAreaPanels = i542
  var i545 = i539[15]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('ResponsiveUIManager+StrictAspectEntry', i545[i + 0]) );
  }
  i538.strictAspectPanels = i544
  i538.disableDecorativeRaycasts = !!i539[16]
  i538.showDebugOverlay = !!i539[17]
  i538.debugTextShadow = new pc.Color(i539[18], i539[19], i539[20], i539[21])
  i538.debugTextSize = i539[22]
  i538.overrideAspectProfile = !!i539[23]
  i538.overrideAspectProfileIndex = i539[24]
  i538.activeAspectProfileIndex = i539[25]
  i538.activeAspectProfileLabel = i539[26]
  return i538
}

Deserializers["ResponsiveUIManager+AspectProfile"] = function (request, data, root) {
  var i548 = root || request.c( 'ResponsiveUIManager+AspectProfile' )
  var i549 = data
  i548.maxAspect = i549[0]
  i548.matchWidthOrHeight = i549[1]
  i548.label = i549[2]
  return i548
}

Deserializers["ResponsiveUIManager+StrictAspectEntry"] = function (request, data, root) {
  var i554 = root || request.c( 'ResponsiveUIManager+StrictAspectEntry' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'panel')
  i554.targetAspect = i555[2]
  request.r(i555[3], i555[4], 0, i554, 'backgroundBars')
  return i554
}

Deserializers["OrientationLayoutSwitcher"] = function (request, data, root) {
  var i556 = root || request.c( 'OrientationLayoutSwitcher' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'portraitRoot')
  request.r(i557[2], i557[3], 0, i556, 'landscapeRoot')
  i556.applySafeAreaToRoots = !!i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i559 = data
  i558.cullTransparentMesh = !!i559[0]
  return i558
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Image' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Sprite')
  i560.m_Type = i561[2]
  i560.m_PreserveAspect = !!i561[3]
  i560.m_FillCenter = !!i561[4]
  i560.m_FillMethod = i561[5]
  i560.m_FillAmount = i561[6]
  i560.m_FillClockwise = !!i561[7]
  i560.m_FillOrigin = i561[8]
  i560.m_UseSpriteMesh = !!i561[9]
  i560.m_PixelsPerUnitMultiplier = i561[10]
  i560.m_Maskable = !!i561[11]
  request.r(i561[12], i561[13], 0, i560, 'm_Material')
  i560.m_Color = new pc.Color(i561[14], i561[15], i561[16], i561[17])
  i560.m_RaycastTarget = !!i561[18]
  i560.m_RaycastPadding = new pc.Vec4( i561[19], i561[20], i561[21], i561[22] )
  return i560
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i563 = data
  i562.m_IgnoreReversedGraphics = !!i563[0]
  i562.m_BlockingObjects = i563[1]
  i562.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i563[2] )
  return i562
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i564 = root || request.c( 'CanvasGroupAnimator' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'canvasGroup')
  i564.animateFade = !!i565[2]
  i564.triggerOnStart = !!i565[3]
  i564.isLooping = !!i565[4]
  i564.fadeTo = i565[5]
  i564.fadeDuration = i565[6]
  i564.fadeEaseType = i565[7]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i567 = data
  i566.m_Alpha = i567[0]
  i566.m_Interactable = !!i567[1]
  i566.m_BlocksRaycasts = !!i567[2]
  i566.m_IgnoreParentGroups = !!i567[3]
  i566.enabled = !!i567[4]
  return i566
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.Button' )
  var i569 = data
  i568.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i569[0], i568.m_OnClick)
  i568.m_Navigation = request.d('UnityEngine.UI.Navigation', i569[1], i568.m_Navigation)
  i568.m_Transition = i569[2]
  i568.m_Colors = request.d('UnityEngine.UI.ColorBlock', i569[3], i568.m_Colors)
  i568.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i569[4], i568.m_SpriteState)
  i568.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i569[5], i568.m_AnimationTriggers)
  i568.m_Interactable = !!i569[6]
  request.r(i569[7], i569[8], 0, i568, 'm_TargetGraphic')
  return i568
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i571 = data
  i570.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i571[0], i570.m_PersistentCalls)
  return i570
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i573 = data
  var i575 = i573[0]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i575.length; i += 1) {
    i574.add(request.d('UnityEngine.Events.PersistentCall', i575[i + 0]));
  }
  i572.m_Calls = i574
  return i572
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'm_Target')
  i578.m_TargetAssemblyTypeName = i579[2]
  i578.m_MethodName = i579[3]
  i578.m_Mode = i579[4]
  i578.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i579[5], i578.m_Arguments)
  i578.m_CallState = i579[6]
  return i578
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i581 = data
  i580.m_Mode = i581[0]
  i580.m_WrapAround = !!i581[1]
  request.r(i581[2], i581[3], 0, i580, 'm_SelectOnUp')
  request.r(i581[4], i581[5], 0, i580, 'm_SelectOnDown')
  request.r(i581[6], i581[7], 0, i580, 'm_SelectOnLeft')
  request.r(i581[8], i581[9], 0, i580, 'm_SelectOnRight')
  return i580
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i583 = data
  i582.m_NormalColor = new pc.Color(i583[0], i583[1], i583[2], i583[3])
  i582.m_HighlightedColor = new pc.Color(i583[4], i583[5], i583[6], i583[7])
  i582.m_PressedColor = new pc.Color(i583[8], i583[9], i583[10], i583[11])
  i582.m_SelectedColor = new pc.Color(i583[12], i583[13], i583[14], i583[15])
  i582.m_DisabledColor = new pc.Color(i583[16], i583[17], i583[18], i583[19])
  i582.m_ColorMultiplier = i583[20]
  i582.m_FadeDuration = i583[21]
  return i582
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_HighlightedSprite')
  request.r(i585[2], i585[3], 0, i584, 'm_PressedSprite')
  request.r(i585[4], i585[5], 0, i584, 'm_SelectedSprite')
  request.r(i585[6], i585[7], 0, i584, 'm_DisabledSprite')
  return i584
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i587 = data
  i586.m_NormalTrigger = i587[0]
  i586.m_HighlightedTrigger = i587[1]
  i586.m_PressedTrigger = i587[2]
  i586.m_SelectedTrigger = i587[3]
  i586.m_DisabledTrigger = i587[4]
  return i586
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i588 = root || request.c( 'ButtonPulse' )
  var i589 = data
  i588.scaleMultiplier = i589[0]
  i588.pulseDuration = i589[1]
  return i588
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_ObjectArgument')
  i590.m_ObjectArgumentAssemblyTypeName = i591[2]
  i590.m_IntArgument = i591[3]
  i590.m_FloatArgument = i591[4]
  i590.m_StringArgument = i591[5]
  i590.m_BoolArgument = !!i591[6]
  return i590
}

Deserializers["MaskProBuiltIn"] = function (request, data, root) {
  var i592 = root || request.c( 'MaskProBuiltIn' )
  var i593 = data
  i592.role = i593[0]
  i592.stencilRef = i593[1]
  i592.autoAssignRef = !!i593[2]
  i592.targetDiscovery = i593[3]
  var i595 = i593[4]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Graphic')))
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 1, i594, '')
  }
  i592.explicitTargets = i594
  i592.invert = !!i593[5]
  i592.writerVisible = !!i593[6]
  i592.drawOrderFix = i593[7]
  i592.restoreOnDisable = !!i593[8]
  i592.disableMaskableOnReaders = !!i593[9]
  return i592
}

Deserializers["FluidGridLayout"] = function (request, data, root) {
  var i598 = root || request.c( 'FluidGridLayout' )
  var i599 = data
  i598.fitAxis = i599[0]
  i598.overflow = i599[1]
  i598.constraint = i599[2]
  i598.constraintCount = i599[3]
  i598.columnsRange = new pc.Vec2( i599[4], i599[5] )
  i598.evenness = i599[6]
  i598.keepSquare = !!i599[7]
  i598.enforceAspect = !!i599[8]
  i598.aspectWH = i599[9]
  i598.minCell = new pc.Vec2( i599[10], i599[11] )
  i598.maxCell = new pc.Vec2( i599[12], i599[13] )
  i598.spacing = new pc.Vec2( i599[14], i599[15] )
  i598.horizontalAlign = i599[16]
  i598.verticalAlign = i599[17]
  i598.centerX = !!i599[18]
  i598.centerY = !!i599[19]
  i598.order = i599[20]
  i598.horizontalDirection = i599[21]
  i598.verticalDirection = i599[22]
  i598.reverseOrder = !!i599[23]
  i598.overrideChildSize = !!i599[24]
  i598.snapToPixels = !!i599[25]
  i598.autoRebuildOnChildChange = !!i599[26]
  i598.respectMinCellOnScaleDown = !!i599[27]
  i598.preserveAspectOnScaleDown = !!i599[28]
  i598._chosenColumns = i599[29]
  i598._chosenRows = i599[30]
  i598._chosenCell = new pc.Vec2( i599[31], i599[32] )
  i598.m_Padding = UnityEngine.RectOffset.FromPaddings(i599[33], i599[34], i599[35], i599[36])
  i598.m_ChildAlignment = i599[37]
  return i598
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Mask' )
  var i601 = data
  i600.m_ShowMaskGraphic = !!i601[0]
  return i600
}

Deserializers["HorizontalUIDragClamp"] = function (request, data, root) {
  var i602 = root || request.c( 'HorizontalUIDragClamp' )
  var i603 = data
  i602.smooth = !!i603[0]
  i602.smoothSpeed = i603[1]
  i602.clampReference = i603[2]
  i602.paddingMode = i603[3]
  i602.leftPadding = i603[4]
  i602.rightPadding = i603[5]
  i602.leftPaddingPercent = i603[6]
  i602.rightPaddingPercent = i603[7]
  i602.requirePointerOverSelf = !!i603[8]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i605 = data
  i604.bodyType = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'material')
  i604.simulated = !!i605[3]
  i604.useAutoMass = !!i605[4]
  i604.mass = i605[5]
  i604.drag = i605[6]
  i604.angularDrag = i605[7]
  i604.gravityScale = i605[8]
  i604.collisionDetectionMode = i605[9]
  i604.sleepMode = i605[10]
  i604.constraints = i605[11]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i607 = data
  i606.usedByComposite = !!i607[0]
  i606.autoTiling = !!i607[1]
  i606.size = new pc.Vec2( i607[2], i607[3] )
  i606.edgeRadius = i607[4]
  i606.enabled = !!i607[5]
  i606.isTrigger = !!i607[6]
  i606.usedByEffector = !!i607[7]
  i606.density = i607[8]
  i606.offset = new pc.Vec2( i607[9], i607[10] )
  request.r(i607[11], i607[12], 0, i606, 'material')
  return i606
}

Deserializers["UIHorizontalMover"] = function (request, data, root) {
  var i608 = root || request.c( 'UIHorizontalMover' )
  var i609 = data
  i608.duration = i609[0]
  i608.ease = i609[1]
  i608.rightEdgeOffset = i609[2]
  return i608
}

Deserializers["UIDropZoneDetector"] = function (request, data, root) {
  var i610 = root || request.c( 'UIDropZoneDetector' )
  var i611 = data
  return i610
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i612 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i613 = data
  i612.m_hasFontAssetChanged = !!i613[0]
  request.r(i613[1], i613[2], 0, i612, 'm_baseMaterial')
  i612.m_maskOffset = new pc.Vec4( i613[3], i613[4], i613[5], i613[6] )
  i612.m_text = i613[7]
  i612.m_isRightToLeft = !!i613[8]
  request.r(i613[9], i613[10], 0, i612, 'm_fontAsset')
  request.r(i613[11], i613[12], 0, i612, 'm_sharedMaterial')
  var i615 = i613[13]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.m_fontSharedMaterials = i614
  request.r(i613[14], i613[15], 0, i612, 'm_fontMaterial')
  var i617 = i613[16]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i612.m_fontMaterials = i616
  i612.m_fontColor32 = UnityEngine.Color32.ConstructColor(i613[17], i613[18], i613[19], i613[20])
  i612.m_fontColor = new pc.Color(i613[21], i613[22], i613[23], i613[24])
  i612.m_enableVertexGradient = !!i613[25]
  i612.m_colorMode = i613[26]
  i612.m_fontColorGradient = request.d('TMPro.VertexGradient', i613[27], i612.m_fontColorGradient)
  request.r(i613[28], i613[29], 0, i612, 'm_fontColorGradientPreset')
  request.r(i613[30], i613[31], 0, i612, 'm_spriteAsset')
  i612.m_tintAllSprites = !!i613[32]
  request.r(i613[33], i613[34], 0, i612, 'm_StyleSheet')
  i612.m_TextStyleHashCode = i613[35]
  i612.m_overrideHtmlColors = !!i613[36]
  i612.m_faceColor = UnityEngine.Color32.ConstructColor(i613[37], i613[38], i613[39], i613[40])
  i612.m_fontSize = i613[41]
  i612.m_fontSizeBase = i613[42]
  i612.m_fontWeight = i613[43]
  i612.m_enableAutoSizing = !!i613[44]
  i612.m_fontSizeMin = i613[45]
  i612.m_fontSizeMax = i613[46]
  i612.m_fontStyle = i613[47]
  i612.m_HorizontalAlignment = i613[48]
  i612.m_VerticalAlignment = i613[49]
  i612.m_textAlignment = i613[50]
  i612.m_characterSpacing = i613[51]
  i612.m_wordSpacing = i613[52]
  i612.m_lineSpacing = i613[53]
  i612.m_lineSpacingMax = i613[54]
  i612.m_paragraphSpacing = i613[55]
  i612.m_charWidthMaxAdj = i613[56]
  i612.m_enableWordWrapping = !!i613[57]
  i612.m_wordWrappingRatios = i613[58]
  i612.m_overflowMode = i613[59]
  request.r(i613[60], i613[61], 0, i612, 'm_linkedTextComponent')
  request.r(i613[62], i613[63], 0, i612, 'parentLinkedComponent')
  i612.m_enableKerning = !!i613[64]
  i612.m_enableExtraPadding = !!i613[65]
  i612.checkPaddingRequired = !!i613[66]
  i612.m_isRichText = !!i613[67]
  i612.m_parseCtrlCharacters = !!i613[68]
  i612.m_isOrthographic = !!i613[69]
  i612.m_isCullingEnabled = !!i613[70]
  i612.m_horizontalMapping = i613[71]
  i612.m_verticalMapping = i613[72]
  i612.m_uvLineOffset = i613[73]
  i612.m_geometrySortingOrder = i613[74]
  i612.m_IsTextObjectScaleStatic = !!i613[75]
  i612.m_VertexBufferAutoSizeReduction = !!i613[76]
  i612.m_useMaxVisibleDescender = !!i613[77]
  i612.m_pageToDisplay = i613[78]
  i612.m_margin = new pc.Vec4( i613[79], i613[80], i613[81], i613[82] )
  i612.m_isUsingLegacyAnimationComponent = !!i613[83]
  i612.m_isVolumetricText = !!i613[84]
  i612.m_Maskable = !!i613[85]
  request.r(i613[86], i613[87], 0, i612, 'm_Material')
  i612.m_Color = new pc.Color(i613[88], i613[89], i613[90], i613[91])
  i612.m_RaycastTarget = !!i613[92]
  i612.m_RaycastPadding = new pc.Vec4( i613[93], i613[94], i613[95], i613[96] )
  return i612
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i620 = root || request.c( 'TMPro.VertexGradient' )
  var i621 = data
  i620.topLeft = new pc.Color(i621[0], i621[1], i621[2], i621[3])
  i620.topRight = new pc.Color(i621[4], i621[5], i621[6], i621[7])
  i620.bottomLeft = new pc.Color(i621[8], i621[9], i621[10], i621[11])
  i620.bottomRight = new pc.Color(i621[12], i621[13], i621[14], i621[15])
  return i620
}

Deserializers["ImageHandler"] = function (request, data, root) {
  var i622 = root || request.c( 'ImageHandler' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'childToToggle')
  request.r(i623[2], i623[3], 0, i622, 'targetImage')
  request.r(i623[4], i623[5], 0, i622, 'explicitOriginal')
  return i622
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i624 = root || request.c( 'PromtPopUp' )
  var i625 = data
  i624.DestroyGameObject = !!i625[0]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'animatorController')
  request.r(i627[2], i627[3], 0, i626, 'avatar')
  i626.updateMode = i627[4]
  i626.hasTransformHierarchy = !!i627[5]
  i626.applyRootMotion = !!i627[6]
  var i629 = i627[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.humanBones = i628
  i626.enabled = !!i627[8]
  return i626
}

Deserializers["SIPChecker_P"] = function (request, data, root) {
  var i632 = root || request.c( 'SIPChecker_P' )
  var i633 = data
  return i632
}

Deserializers["UIDropZoneDetector_L"] = function (request, data, root) {
  var i634 = root || request.c( 'UIDropZoneDetector_L' )
  var i635 = data
  return i634
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_FirstSelected')
  i636.m_sendNavigationEvents = !!i637[2]
  i636.m_DragThreshold = i637[3]
  return i636
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i639 = data
  i638.m_HorizontalAxis = i639[0]
  i638.m_VerticalAxis = i639[1]
  i638.m_SubmitButton = i639[2]
  i638.m_CancelButton = i639[3]
  i638.m_InputActionsPerSecond = i639[4]
  i638.m_RepeatDelay = i639[5]
  i638.m_ForceModuleActive = !!i639[6]
  i638.m_SendPointerHoverToParent = !!i639[7]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i641 = data
  i640.ambientIntensity = i641[0]
  i640.reflectionIntensity = i641[1]
  i640.ambientMode = i641[2]
  i640.ambientLight = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.ambientSkyColor = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  i640.ambientGroundColor = new pc.Color(i641[11], i641[12], i641[13], i641[14])
  i640.ambientEquatorColor = new pc.Color(i641[15], i641[16], i641[17], i641[18])
  i640.fogColor = new pc.Color(i641[19], i641[20], i641[21], i641[22])
  i640.fogEndDistance = i641[23]
  i640.fogStartDistance = i641[24]
  i640.fogDensity = i641[25]
  i640.fog = !!i641[26]
  request.r(i641[27], i641[28], 0, i640, 'skybox')
  i640.fogMode = i641[29]
  var i643 = i641[30]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i643[i + 0]) );
  }
  i640.lightmaps = i642
  i640.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i641[31], i640.lightProbes)
  i640.lightmapsMode = i641[32]
  i640.mixedBakeMode = i641[33]
  i640.environmentLightingMode = i641[34]
  i640.ambientProbe = new pc.SphericalHarmonicsL2(i641[35])
  i640.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i641[36])
  i640.useReferenceAmbientProbe = !!i641[37]
  request.r(i641[38], i641[39], 0, i640, 'customReflection')
  request.r(i641[40], i641[41], 0, i640, 'defaultReflection')
  i640.defaultReflectionMode = i641[42]
  i640.defaultReflectionResolution = i641[43]
  i640.sunLightObjectId = i641[44]
  i640.pixelLightCount = i641[45]
  i640.defaultReflectionHDR = !!i641[46]
  i640.hasLightDataAsset = !!i641[47]
  i640.hasManualGenerate = !!i641[48]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'lightmapColor')
  request.r(i647[2], i647[3], 0, i646, 'lightmapDirection')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i648 = root || new UnityEngine.LightProbes()
  var i649 = data
  return i648
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

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i795 = data
  i794.mode = i795[0]
  i794.parameter = i795[1]
  i794.threshold = i795[2]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i801 = data
  i800.destinationStateId = i801[0]
  i800.isExit = !!i801[1]
  i800.mute = !!i801[2]
  i800.solo = !!i801[3]
  var i803 = i801[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i803[i + 0]) );
  }
  i800.conditions = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i807 = data
  i806.defaultBool = !!i807[0]
  i806.defaultFloat = i807[1]
  i806.defaultInt = i807[2]
  i806.name = i807[3]
  i806.nameHash = i807[4]
  i806.type = i807[5]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[2],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[28],"69":[28],"70":[28],"71":[28],"72":[28],"73":[28],"74":[28],"75":[28],"76":[28],"77":[28],"78":[28],"79":[28],"80":[28],"81":[2],"82":[83],"84":[85],"86":[85],"11":[10],"23":[10],"87":[2],"88":[10],"25":[10],"27":[10],"89":[61],"14":[11,13],"90":[10],"91":[10],"31":[29],"40":[29],"30":[10],"92":[93],"94":[10],"95":[10],"19":[11],"17":[16,10],"96":[10],"13":[11],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"103":[10],"26":[10],"104":[10],"105":[16,10],"106":[10],"107":[10],"108":[10],"109":[10],"110":[16,10],"111":[10],"112":[41],"113":[41],"42":[41],"114":[41],"115":[2],"116":[2],"117":[118],"119":[2],"120":[10],"121":[83,10],"32":[10,16],"122":[10],"123":[16,10],"124":[83],"125":[16,10],"126":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AudioManager","AudioLibrary","GameManager","UnityEngine.GameObject","TaskManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","ResponsiveUIManager","OrientationLayoutSwitcher","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","CanvasGroupAnimator","UnityEngine.CanvasGroup","UnityEngine.UI.Button","ButtonPulse","MaskProBuiltIn","FluidGridLayout","UnityEngine.UI.Mask","HorizontalUIDragClamp","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UIHorizontalMover","UIDropZoneDetector","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","ImageHandler","PromtPopUp","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","SIPChecker_P","UIDropZoneDetector_L","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAspectFitter","DragToResizeLeft","Bullet","UIDragger","UIDropRightEdgeOnPointerUpDetector","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "09/25/2025 07:37:13";

Deserializers.lunaDaysRunning = "6.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "30032";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4587";

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

Deserializers.buildID = "1e57cf8c-c816-4f7f-9ed4-096a16c124b2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

