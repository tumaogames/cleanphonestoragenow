var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointSpring' )
  var i411 = data
  i410.spring = i411[0]
  i410.damper = i411[1]
  i410.targetPosition = i411[2]
  return i410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointMotor' )
  var i413 = data
  i412.m_TargetVelocity = i413[0]
  i412.m_Force = i413[1]
  i412.m_FreeSpin = i413[2]
  return i412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointLimits' )
  var i415 = data
  i414.m_Min = i415[0]
  i414.m_Max = i415[1]
  i414.m_Bounciness = i415[2]
  i414.m_BounceMinVelocity = i415[3]
  i414.m_ContactDistance = i415[4]
  i414.minBounce = i415[5]
  i414.maxBounce = i415[6]
  return i414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointDrive' )
  var i417 = data
  i416.m_PositionSpring = i417[0]
  i416.m_PositionDamper = i417[1]
  i416.m_MaximumForce = i417[2]
  i416.m_UseAcceleration = i417[3]
  return i416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i419 = data
  i418.m_Spring = i419[0]
  i418.m_Damper = i419[1]
  return i418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i421 = data
  i420.m_Limit = i421[0]
  i420.m_Bounciness = i421[1]
  i420.m_ContactDistance = i421[2]
  return i420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i423 = data
  i422.m_ExtremumSlip = i423[0]
  i422.m_ExtremumValue = i423[1]
  i422.m_AsymptoteSlip = i423[2]
  i422.m_AsymptoteValue = i423[3]
  i422.m_Stiffness = i423[4]
  return i422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i425 = data
  i424.m_LowerAngle = i425[0]
  i424.m_UpperAngle = i425[1]
  return i424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i427 = data
  i426.m_MotorSpeed = i427[0]
  i426.m_MaximumMotorTorque = i427[1]
  return i426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i429 = data
  i428.m_DampingRatio = i429[0]
  i428.m_Frequency = i429[1]
  i428.m_Angle = i429[2]
  return i428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i431 = data
  i430.m_LowerTranslation = i431[0]
  i430.m_UpperTranslation = i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i433 = data
  i432.name = i433[0]
  i432.width = i433[1]
  i432.height = i433[2]
  i432.mipmapCount = i433[3]
  i432.anisoLevel = i433[4]
  i432.filterMode = i433[5]
  i432.hdr = !!i433[6]
  i432.format = i433[7]
  i432.wrapMode = i433[8]
  i432.alphaIsTransparency = !!i433[9]
  i432.alphaSource = i433[10]
  i432.graphicsFormat = i433[11]
  i432.sRGBTexture = !!i433[12]
  i432.desiredColorSpace = i433[13]
  i432.wrapU = i433[14]
  i432.wrapV = i433[15]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i434 = root || new pc.UnityMaterial()
  var i435 = data
  i434.name = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'shader')
  i434.renderQueue = i435[3]
  i434.enableInstancing = !!i435[4]
  var i437 = i435[5]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i437[i + 0]) );
  }
  i434.floatParameters = i436
  var i439 = i435[6]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i439[i + 0]) );
  }
  i434.colorParameters = i438
  var i441 = i435[7]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i441[i + 0]) );
  }
  i434.vectorParameters = i440
  var i443 = i435[8]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i443[i + 0]) );
  }
  i434.textureParameters = i442
  var i445 = i435[9]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i445[i + 0]) );
  }
  i434.materialFlags = i444
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = new pc.Color(i453[1], i453[2], i453[3], i453[4])
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i457 = data
  i456.name = i457[0]
  i456.value = new pc.Vec4( i457[1], i457[2], i457[3], i457[4] )
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i461 = data
  i460.name = i461[0]
  request.r(i461[1], i461[2], 0, i460, 'value')
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i465 = data
  i464.name = i465[0]
  i464.enabled = !!i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i467 = data
  i466.name = i467[0]
  i466.index = i467[1]
  i466.startup = !!i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i469 = data
  i468.position = new pc.Vec3( i469[0], i469[1], i469[2] )
  i468.scale = new pc.Vec3( i469[3], i469[4], i469[5] )
  i468.rotation = new pc.Quat(i469[6], i469[7], i469[8], i469[9])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i471 = data
  i470.aspect = i471[0]
  i470.orthographic = !!i471[1]
  i470.orthographicSize = i471[2]
  i470.backgroundColor = new pc.Color(i471[3], i471[4], i471[5], i471[6])
  i470.nearClipPlane = i471[7]
  i470.farClipPlane = i471[8]
  i470.fieldOfView = i471[9]
  i470.depth = i471[10]
  i470.clearFlags = i471[11]
  i470.cullingMask = i471[12]
  i470.rect = i471[13]
  request.r(i471[14], i471[15], 0, i470, 'targetTexture')
  i470.usePhysicalProperties = !!i471[16]
  i470.focalLength = i471[17]
  i470.sensorSize = new pc.Vec2( i471[18], i471[19] )
  i470.lensShift = new pc.Vec2( i471[20], i471[21] )
  i470.gateFit = i471[22]
  i470.commandBufferCount = i471[23]
  i470.cameraType = i471[24]
  i470.enabled = !!i471[25]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i473 = data
  i472.name = i473[0]
  i472.tagId = i473[1]
  i472.enabled = !!i473[2]
  i472.isStatic = !!i473[3]
  i472.layer = i473[4]
  return i472
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i474 = root || request.c( 'AudioManager' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'library')
  i474.sfxPoolSize = i475[2]
  return i474
}

Deserializers["GameManager"] = function (request, data, root) {
  var i476 = root || request.c( 'GameManager' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'endPanel')
  i476.end = !!i477[2]
  request.r(i477[3], i477[4], 0, i476, 'hand')
  request.r(i477[5], i477[6], 0, i476, 'arrow')
  i476.enableSound = !!i477[7]
  request.r(i477[8], i477[9], 0, i476, 'startClickHandler')
  i476.currentScore = i477[10]
  return i476
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i478 = root || request.c( 'TaskManager' )
  var i479 = data
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i481 = data
  i480.pivot = new pc.Vec2( i481[0], i481[1] )
  i480.anchorMin = new pc.Vec2( i481[2], i481[3] )
  i480.anchorMax = new pc.Vec2( i481[4], i481[5] )
  i480.sizeDelta = new pc.Vec2( i481[6], i481[7] )
  i480.anchoredPosition3D = new pc.Vec3( i481[8], i481[9], i481[10] )
  i480.rotation = new pc.Quat(i481[11], i481[12], i481[13], i481[14])
  i480.scale = new pc.Vec3( i481[15], i481[16], i481[17] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i483 = data
  i482.planeDistance = i483[0]
  i482.referencePixelsPerUnit = i483[1]
  i482.isFallbackOverlay = !!i483[2]
  i482.renderMode = i483[3]
  i482.renderOrder = i483[4]
  i482.sortingLayerName = i483[5]
  i482.sortingOrder = i483[6]
  i482.scaleFactor = i483[7]
  request.r(i483[8], i483[9], 0, i482, 'worldCamera')
  i482.overrideSorting = !!i483[10]
  i482.pixelPerfect = !!i483[11]
  i482.targetDisplay = i483[12]
  i482.overridePixelPerfect = !!i483[13]
  i482.enabled = !!i483[14]
  return i482
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i485 = data
  i484.m_UiScaleMode = i485[0]
  i484.m_ReferencePixelsPerUnit = i485[1]
  i484.m_ScaleFactor = i485[2]
  i484.m_ReferenceResolution = new pc.Vec2( i485[3], i485[4] )
  i484.m_ScreenMatchMode = i485[5]
  i484.m_MatchWidthOrHeight = i485[6]
  i484.m_PhysicalUnit = i485[7]
  i484.m_FallbackScreenDPI = i485[8]
  i484.m_DefaultSpriteDPI = i485[9]
  i484.m_DynamicPixelsPerUnit = i485[10]
  i484.m_PresetInfoIsWorld = !!i485[11]
  return i484
}

Deserializers["ResponsiveUIManager"] = function (request, data, root) {
  var i486 = root || request.c( 'ResponsiveUIManager' )
  var i487 = data
  i486.forceOrientation = i487[0]
  i486.portraitReferenceResolution = new pc.Vec2( i487[1], i487[2] )
  i486.landscapeReferenceResolution = new pc.Vec2( i487[3], i487[4] )
  i486.manageCanvasScaler = !!i487[5]
  i486.referenceResolution = new pc.Vec2( i487[6], i487[7] )
  i486.defaultMatchWidthOrHeight = i487[8]
  i486.useOrientationAgnosticAspect = !!i487[9]
  var i489 = i487[10]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('ResponsiveUIManager+AspectProfile', i489[i + 0]) );
  }
  i486.aspectProfiles = i488
  i486.enableDpiClamp = !!i487[11]
  i486.dpiClampThreshold = i487[12]
  i486.dpiClampMax = i487[13]
  var i491 = i487[14]
  var i490 = []
  for(var i = 0; i < i491.length; i += 2) {
  request.r(i491[i + 0], i491[i + 1], 2, i490, '')
  }
  i486.safeAreaPanels = i490
  var i493 = i487[15]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('ResponsiveUIManager+StrictAspectEntry', i493[i + 0]) );
  }
  i486.strictAspectPanels = i492
  i486.disableDecorativeRaycasts = !!i487[16]
  i486.showDebugOverlay = !!i487[17]
  i486.debugTextShadow = new pc.Color(i487[18], i487[19], i487[20], i487[21])
  i486.debugTextSize = i487[22]
  i486.overrideAspectProfile = !!i487[23]
  i486.overrideAspectProfileIndex = i487[24]
  i486.activeAspectProfileIndex = i487[25]
  i486.activeAspectProfileLabel = i487[26]
  return i486
}

Deserializers["ResponsiveUIManager+AspectProfile"] = function (request, data, root) {
  var i496 = root || request.c( 'ResponsiveUIManager+AspectProfile' )
  var i497 = data
  i496.maxAspect = i497[0]
  i496.matchWidthOrHeight = i497[1]
  i496.label = i497[2]
  return i496
}

Deserializers["ResponsiveUIManager+StrictAspectEntry"] = function (request, data, root) {
  var i502 = root || request.c( 'ResponsiveUIManager+StrictAspectEntry' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'panel')
  i502.targetAspect = i503[2]
  request.r(i503[3], i503[4], 0, i502, 'backgroundBars')
  return i502
}

Deserializers["OrientationLayoutSwitcher"] = function (request, data, root) {
  var i504 = root || request.c( 'OrientationLayoutSwitcher' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'portraitRoot')
  request.r(i505[2], i505[3], 0, i504, 'landscapeRoot')
  i504.applySafeAreaToRoots = !!i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i507 = data
  i506.cullTransparentMesh = !!i507[0]
  return i506
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Image' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Sprite')
  i508.m_Type = i509[2]
  i508.m_PreserveAspect = !!i509[3]
  i508.m_FillCenter = !!i509[4]
  i508.m_FillMethod = i509[5]
  i508.m_FillAmount = i509[6]
  i508.m_FillClockwise = !!i509[7]
  i508.m_FillOrigin = i509[8]
  i508.m_UseSpriteMesh = !!i509[9]
  i508.m_PixelsPerUnitMultiplier = i509[10]
  i508.m_Maskable = !!i509[11]
  request.r(i509[12], i509[13], 0, i508, 'm_Material')
  i508.m_Color = new pc.Color(i509[14], i509[15], i509[16], i509[17])
  i508.m_RaycastTarget = !!i509[18]
  i508.m_RaycastPadding = new pc.Vec4( i509[19], i509[20], i509[21], i509[22] )
  return i508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i511 = data
  i510.m_IgnoreReversedGraphics = !!i511[0]
  i510.m_BlockingObjects = i511[1]
  i510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i511[2] )
  return i510
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.Button' )
  var i513 = data
  i512.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i513[0], i512.m_OnClick)
  i512.m_Navigation = request.d('UnityEngine.UI.Navigation', i513[1], i512.m_Navigation)
  i512.m_Transition = i513[2]
  i512.m_Colors = request.d('UnityEngine.UI.ColorBlock', i513[3], i512.m_Colors)
  i512.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i513[4], i512.m_SpriteState)
  i512.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i513[5], i512.m_AnimationTriggers)
  i512.m_Interactable = !!i513[6]
  request.r(i513[7], i513[8], 0, i512, 'm_TargetGraphic')
  return i512
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i515 = data
  i514.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i515[0], i514.m_PersistentCalls)
  return i514
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i517 = data
  var i519 = i517[0]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i519.length; i += 1) {
    i518.add(request.d('UnityEngine.Events.PersistentCall', i519[i + 0]));
  }
  i516.m_Calls = i518
  return i516
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'm_Target')
  i522.m_TargetAssemblyTypeName = i523[2]
  i522.m_MethodName = i523[3]
  i522.m_Mode = i523[4]
  i522.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i523[5], i522.m_Arguments)
  i522.m_CallState = i523[6]
  return i522
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i525 = data
  i524.m_Mode = i525[0]
  i524.m_WrapAround = !!i525[1]
  request.r(i525[2], i525[3], 0, i524, 'm_SelectOnUp')
  request.r(i525[4], i525[5], 0, i524, 'm_SelectOnDown')
  request.r(i525[6], i525[7], 0, i524, 'm_SelectOnLeft')
  request.r(i525[8], i525[9], 0, i524, 'm_SelectOnRight')
  return i524
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i527 = data
  i526.m_NormalColor = new pc.Color(i527[0], i527[1], i527[2], i527[3])
  i526.m_HighlightedColor = new pc.Color(i527[4], i527[5], i527[6], i527[7])
  i526.m_PressedColor = new pc.Color(i527[8], i527[9], i527[10], i527[11])
  i526.m_SelectedColor = new pc.Color(i527[12], i527[13], i527[14], i527[15])
  i526.m_DisabledColor = new pc.Color(i527[16], i527[17], i527[18], i527[19])
  i526.m_ColorMultiplier = i527[20]
  i526.m_FadeDuration = i527[21]
  return i526
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'm_HighlightedSprite')
  request.r(i529[2], i529[3], 0, i528, 'm_PressedSprite')
  request.r(i529[4], i529[5], 0, i528, 'm_SelectedSprite')
  request.r(i529[6], i529[7], 0, i528, 'm_DisabledSprite')
  return i528
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i531 = data
  i530.m_NormalTrigger = i531[0]
  i530.m_HighlightedTrigger = i531[1]
  i530.m_PressedTrigger = i531[2]
  i530.m_SelectedTrigger = i531[3]
  i530.m_DisabledTrigger = i531[4]
  return i530
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i532 = root || request.c( 'ButtonPulse' )
  var i533 = data
  i532.scaleMultiplier = i533[0]
  i532.pulseDuration = i533[1]
  return i532
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.Mask' )
  var i535 = data
  i534.m_ShowMaskGraphic = !!i535[0]
  return i534
}

Deserializers["FluidGridLayout"] = function (request, data, root) {
  var i536 = root || request.c( 'FluidGridLayout' )
  var i537 = data
  i536.fitAxis = i537[0]
  i536.overflow = i537[1]
  i536.constraint = i537[2]
  i536.constraintCount = i537[3]
  i536.columnsRange = new pc.Vec2( i537[4], i537[5] )
  i536.evenness = i537[6]
  i536.keepSquare = !!i537[7]
  i536.enforceAspect = !!i537[8]
  i536.aspectWH = i537[9]
  i536.minCell = new pc.Vec2( i537[10], i537[11] )
  i536.maxCell = new pc.Vec2( i537[12], i537[13] )
  i536.spacing = new pc.Vec2( i537[14], i537[15] )
  i536.horizontalAlign = i537[16]
  i536.verticalAlign = i537[17]
  i536.centerX = !!i537[18]
  i536.centerY = !!i537[19]
  i536.order = i537[20]
  i536.horizontalDirection = i537[21]
  i536.verticalDirection = i537[22]
  i536.reverseOrder = !!i537[23]
  i536.overrideChildSize = !!i537[24]
  i536.snapToPixels = !!i537[25]
  i536.autoRebuildOnChildChange = !!i537[26]
  i536.respectMinCellOnScaleDown = !!i537[27]
  i536.preserveAspectOnScaleDown = !!i537[28]
  i536._chosenColumns = i537[29]
  i536._chosenRows = i537[30]
  i536._chosenCell = new pc.Vec2( i537[31], i537[32] )
  i536.m_Padding = UnityEngine.RectOffset.FromPaddings(i537[33], i537[34], i537[35], i537[36])
  i536.m_ChildAlignment = i537[37]
  return i536
}

Deserializers["UIDragger"] = function (request, data, root) {
  var i538 = root || request.c( 'UIDragger' )
  var i539 = data
  return i538
}

Deserializers["HorizontalUIDragClamp"] = function (request, data, root) {
  var i540 = root || request.c( 'HorizontalUIDragClamp' )
  var i541 = data
  i540.smooth = !!i541[0]
  i540.smoothSpeed = i541[1]
  i540.leftPadding = i541[2]
  i540.rightPadding = i541[3]
  i540.requireRaycastTarget = !!i541[4]
  return i540
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_FirstSelected')
  i542.m_sendNavigationEvents = !!i543[2]
  i542.m_DragThreshold = i543[3]
  return i542
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i545 = data
  i544.m_HorizontalAxis = i545[0]
  i544.m_VerticalAxis = i545[1]
  i544.m_SubmitButton = i545[2]
  i544.m_CancelButton = i545[3]
  i544.m_InputActionsPerSecond = i545[4]
  i544.m_RepeatDelay = i545[5]
  i544.m_ForceModuleActive = !!i545[6]
  i544.m_SendPointerHoverToParent = !!i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i547 = data
  i546.ambientIntensity = i547[0]
  i546.reflectionIntensity = i547[1]
  i546.ambientMode = i547[2]
  i546.ambientLight = new pc.Color(i547[3], i547[4], i547[5], i547[6])
  i546.ambientSkyColor = new pc.Color(i547[7], i547[8], i547[9], i547[10])
  i546.ambientGroundColor = new pc.Color(i547[11], i547[12], i547[13], i547[14])
  i546.ambientEquatorColor = new pc.Color(i547[15], i547[16], i547[17], i547[18])
  i546.fogColor = new pc.Color(i547[19], i547[20], i547[21], i547[22])
  i546.fogEndDistance = i547[23]
  i546.fogStartDistance = i547[24]
  i546.fogDensity = i547[25]
  i546.fog = !!i547[26]
  request.r(i547[27], i547[28], 0, i546, 'skybox')
  i546.fogMode = i547[29]
  var i549 = i547[30]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i549[i + 0]) );
  }
  i546.lightmaps = i548
  i546.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i547[31], i546.lightProbes)
  i546.lightmapsMode = i547[32]
  i546.mixedBakeMode = i547[33]
  i546.environmentLightingMode = i547[34]
  i546.ambientProbe = new pc.SphericalHarmonicsL2(i547[35])
  i546.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i547[36])
  i546.useReferenceAmbientProbe = !!i547[37]
  request.r(i547[38], i547[39], 0, i546, 'customReflection')
  request.r(i547[40], i547[41], 0, i546, 'defaultReflection')
  i546.defaultReflectionMode = i547[42]
  i546.defaultReflectionResolution = i547[43]
  i546.sunLightObjectId = i547[44]
  i546.pixelLightCount = i547[45]
  i546.defaultReflectionHDR = !!i547[46]
  i546.hasLightDataAsset = !!i547[47]
  i546.hasManualGenerate = !!i547[48]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'lightmapColor')
  request.r(i553[2], i553[3], 0, i552, 'lightmapDirection')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i554 = root || new UnityEngine.LightProbes()
  var i555 = data
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i563 = data
  var i565 = i563[0]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i565.length; i += 1) {
    i564.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i565[i + 0]));
  }
  i562.ShaderCompilationErrors = i564
  i562.name = i563[1]
  i562.guid = i563[2]
  var i567 = i563[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i562.shaderDefinedKeywords = i566
  var i569 = i563[4]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i569[i + 0]) );
  }
  i562.passes = i568
  var i571 = i563[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i571[i + 0]) );
  }
  i562.usePasses = i570
  var i573 = i563[6]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i573[i + 0]) );
  }
  i562.defaultParameterValues = i572
  request.r(i563[7], i563[8], 0, i562, 'unityFallbackShader')
  i562.readDepth = !!i563[9]
  i562.isCreatedByShaderGraph = !!i563[10]
  i562.disableBatching = !!i563[11]
  i562.compiled = !!i563[12]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i577 = data
  i576.shaderName = i577[0]
  i576.errorMessage = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i582 = root || new pc.UnityShaderPass()
  var i583 = data
  i582.id = i583[0]
  i582.subShaderIndex = i583[1]
  i582.name = i583[2]
  i582.passType = i583[3]
  i582.grabPassTextureName = i583[4]
  i582.usePass = !!i583[5]
  i582.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[6], i582.zTest)
  i582.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[7], i582.zWrite)
  i582.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[8], i582.culling)
  i582.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i583[9], i582.blending)
  i582.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i583[10], i582.alphaBlending)
  i582.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[11], i582.colorWriteMask)
  i582.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[12], i582.offsetUnits)
  i582.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[13], i582.offsetFactor)
  i582.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[14], i582.stencilRef)
  i582.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[15], i582.stencilReadMask)
  i582.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[16], i582.stencilWriteMask)
  i582.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i583[17], i582.stencilOp)
  i582.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i583[18], i582.stencilOpFront)
  i582.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i583[19], i582.stencilOpBack)
  var i585 = i583[20]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i585[i + 0]) );
  }
  i582.tags = i584
  var i587 = i583[21]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( i587[i + 0] );
  }
  i582.passDefinedKeywords = i586
  var i589 = i583[22]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i589[i + 0]) );
  }
  i582.passDefinedKeywordGroups = i588
  var i591 = i583[23]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i591[i + 0]) );
  }
  i582.variants = i590
  var i593 = i583[24]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i593[i + 0]) );
  }
  i582.excludedVariants = i592
  i582.hasDepthReader = !!i583[25]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i595 = data
  i594.val = i595[0]
  i594.name = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i597 = data
  i596.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[0], i596.src)
  i596.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[1], i596.dst)
  i596.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[2], i596.op)
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i599 = data
  i598.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[0], i598.pass)
  i598.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[1], i598.fail)
  i598.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[2], i598.zFail)
  i598.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[3], i598.comp)
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i603 = data
  i602.name = i603[0]
  i602.value = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i607 = data
  var i609 = i607[0]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i606.keywords = i608
  i606.hasDiscard = !!i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i613 = data
  i612.passId = i613[0]
  i612.subShaderIndex = i613[1]
  var i615 = i613[2]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i612.keywords = i614
  i612.vertexProgram = i613[3]
  i612.fragmentProgram = i613[4]
  i612.exportedForWebGl2 = !!i613[5]
  i612.readDepth = !!i613[6]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'shader')
  i618.pass = i619[2]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i623 = data
  i622.name = i623[0]
  i622.type = i623[1]
  i622.value = new pc.Vec4( i623[2], i623[3], i623[4], i623[5] )
  i622.textureValue = i623[6]
  i622.shaderPropertyFlag = i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'texture')
  i624.aabb = i625[3]
  i624.vertices = i625[4]
  i624.triangles = i625[5]
  i624.textureRect = UnityEngine.Rect.MinMaxRect(i625[6], i625[7], i625[8], i625[9])
  i624.packedRect = UnityEngine.Rect.MinMaxRect(i625[10], i625[11], i625[12], i625[13])
  i624.border = new pc.Vec4( i625[14], i625[15], i625[16], i625[17] )
  i624.transparency = i625[18]
  i624.bounds = i625[19]
  i624.pixelsPerUnit = i625[20]
  i624.textureWidth = i625[21]
  i624.textureHeight = i625[22]
  i624.nativeSize = new pc.Vec2( i625[23], i625[24] )
  i624.pivot = new pc.Vec2( i625[25], i625[26] )
  i624.textureRectOffset = new pc.Vec2( i625[27], i625[28] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i627 = data
  i626.name = i627[0]
  i626.ascent = i627[1]
  i626.originalLineHeight = i627[2]
  i626.fontSize = i627[3]
  var i629 = i627[4]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i629[i + 0]) );
  }
  i626.characterInfo = i628
  request.r(i627[5], i627[6], 0, i626, 'texture')
  i626.originalFontSize = i627[7]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i633 = data
  i632.index = i633[0]
  i632.advance = i633[1]
  i632.bearing = i633[2]
  i632.glyphWidth = i633[3]
  i632.glyphHeight = i633[4]
  i632.minX = i633[5]
  i632.maxX = i633[6]
  i632.minY = i633[7]
  i632.maxY = i633[8]
  i632.uvBottomLeftX = i633[9]
  i632.uvBottomLeftY = i633[10]
  i632.uvBottomRightX = i633[11]
  i632.uvBottomRightY = i633[12]
  i632.uvTopLeftX = i633[13]
  i632.uvTopLeftY = i633[14]
  i632.uvTopRightX = i633[15]
  i632.uvTopRightY = i633[16]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i635 = data
  i634.name = i635[0]
  i634.bytes64 = i635[1]
  i634.data = i635[2]
  return i634
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i636 = root || request.c( 'AudioLibrary' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('AudioLibrary+ClipEntry', i639[i + 0]));
  }
  i636.clips = i638
  return i636
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i642 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i643 = data
  i642.key = i643[0]
  i642.channel = i643[1]
  request.r(i643[2], i643[3], 0, i642, 'clip')
  i642.volume = i643[4]
  i642.loop = !!i643[5]
  return i642
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i645 = data
  i644.useSafeMode = !!i645[0]
  i644.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i645[1], i644.safeModeOptions)
  i644.timeScale = i645[2]
  i644.unscaledTimeScale = i645[3]
  i644.useSmoothDeltaTime = !!i645[4]
  i644.maxSmoothUnscaledTime = i645[5]
  i644.rewindCallbackMode = i645[6]
  i644.showUnityEditorReport = !!i645[7]
  i644.logBehaviour = i645[8]
  i644.drawGizmos = !!i645[9]
  i644.defaultRecyclable = !!i645[10]
  i644.defaultAutoPlay = i645[11]
  i644.defaultUpdateType = i645[12]
  i644.defaultTimeScaleIndependent = !!i645[13]
  i644.defaultEaseType = i645[14]
  i644.defaultEaseOvershootOrAmplitude = i645[15]
  i644.defaultEasePeriod = i645[16]
  i644.defaultAutoKill = !!i645[17]
  i644.defaultLoopType = i645[18]
  i644.debugMode = !!i645[19]
  i644.debugStoreTargetId = !!i645[20]
  i644.showPreviewPanel = !!i645[21]
  i644.storeSettingsLocation = i645[22]
  i644.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i645[23], i644.modules)
  i644.createASMDEF = !!i645[24]
  i644.showPlayingTweens = !!i645[25]
  i644.showPausedTweens = !!i645[26]
  return i644
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i646 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i647 = data
  i646.logBehaviour = i647[0]
  i646.nestedTweenFailureBehaviour = i647[1]
  return i646
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i648 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i649 = data
  i648.showPanel = !!i649[0]
  i648.audioEnabled = !!i649[1]
  i648.physicsEnabled = !!i649[2]
  i648.physics2DEnabled = !!i649[3]
  i648.spriteEnabled = !!i649[4]
  i648.uiEnabled = !!i649[5]
  i648.textMeshProEnabled = !!i649[6]
  i648.tk2DEnabled = !!i649[7]
  i648.deAudioEnabled = !!i649[8]
  i648.deUnityExtendedEnabled = !!i649[9]
  i648.epoOutlineEnabled = !!i649[10]
  return i648
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i650 = root || request.c( 'TMPro.TMP_Settings' )
  var i651 = data
  i650.m_enableWordWrapping = !!i651[0]
  i650.m_enableKerning = !!i651[1]
  i650.m_enableExtraPadding = !!i651[2]
  i650.m_enableTintAllSprites = !!i651[3]
  i650.m_enableParseEscapeCharacters = !!i651[4]
  i650.m_EnableRaycastTarget = !!i651[5]
  i650.m_GetFontFeaturesAtRuntime = !!i651[6]
  i650.m_missingGlyphCharacter = i651[7]
  i650.m_warningsDisabled = !!i651[8]
  request.r(i651[9], i651[10], 0, i650, 'm_defaultFontAsset')
  i650.m_defaultFontAssetPath = i651[11]
  i650.m_defaultFontSize = i651[12]
  i650.m_defaultAutoSizeMinRatio = i651[13]
  i650.m_defaultAutoSizeMaxRatio = i651[14]
  i650.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i651[15], i651[16] )
  i650.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i651[17], i651[18] )
  i650.m_autoSizeTextContainer = !!i651[19]
  i650.m_IsTextObjectScaleStatic = !!i651[20]
  var i653 = i651[21]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.m_fallbackFontAssets = i652
  i650.m_matchMaterialPreset = !!i651[22]
  request.r(i651[23], i651[24], 0, i650, 'm_defaultSpriteAsset')
  i650.m_defaultSpriteAssetPath = i651[25]
  i650.m_enableEmojiSupport = !!i651[26]
  i650.m_MissingCharacterSpriteUnicode = i651[27]
  i650.m_defaultColorGradientPresetsPath = i651[28]
  request.r(i651[29], i651[30], 0, i650, 'm_defaultStyleSheet')
  i650.m_StyleSheetsResourcePath = i651[31]
  request.r(i651[32], i651[33], 0, i650, 'm_leadingCharacters')
  request.r(i651[34], i651[35], 0, i650, 'm_followingCharacters')
  i650.m_UseModernHangulLineBreakingRules = !!i651[36]
  return i650
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'atlas')
  i656.normalStyle = i657[2]
  i656.normalSpacingOffset = i657[3]
  i656.boldStyle = i657[4]
  i656.boldSpacing = i657[5]
  i656.italicStyle = i657[6]
  i656.tabSize = i657[7]
  i656.hashCode = i657[8]
  request.r(i657[9], i657[10], 0, i656, 'material')
  i656.materialHashCode = i657[11]
  i656.m_Version = i657[12]
  i656.m_SourceFontFileGUID = i657[13]
  request.r(i657[14], i657[15], 0, i656, 'm_SourceFontFile_EditorRef')
  request.r(i657[16], i657[17], 0, i656, 'm_SourceFontFile')
  i656.m_AtlasPopulationMode = i657[18]
  i656.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i657[19], i656.m_FaceInfo)
  var i659 = i657[20]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('UnityEngine.TextCore.Glyph', i659[i + 0]));
  }
  i656.m_GlyphTable = i658
  var i661 = i657[21]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('TMPro.TMP_Character', i661[i + 0]));
  }
  i656.m_CharacterTable = i660
  var i663 = i657[22]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i656.m_AtlasTextures = i662
  i656.m_AtlasTextureIndex = i657[23]
  i656.m_IsMultiAtlasTexturesEnabled = !!i657[24]
  i656.m_ClearDynamicDataOnBuild = !!i657[25]
  var i665 = i657[26]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.TextCore.GlyphRect', i665[i + 0]));
  }
  i656.m_UsedGlyphRects = i664
  var i667 = i657[27]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('UnityEngine.TextCore.GlyphRect', i667[i + 0]));
  }
  i656.m_FreeGlyphRects = i666
  i656.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i657[28], i656.m_fontInfo)
  i656.m_AtlasWidth = i657[29]
  i656.m_AtlasHeight = i657[30]
  i656.m_AtlasPadding = i657[31]
  i656.m_AtlasRenderMode = i657[32]
  var i669 = i657[33]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('TMPro.TMP_Glyph', i669[i + 0]));
  }
  i656.m_glyphInfoList = i668
  i656.m_KerningTable = request.d('TMPro.KerningTable', i657[34], i656.m_KerningTable)
  i656.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i657[35], i656.m_FontFeatureTable)
  var i671 = i657[36]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 1, i670, '')
  }
  i656.fallbackFontAssets = i670
  var i673 = i657[37]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 1, i672, '')
  }
  i656.m_FallbackFontAssetTable = i672
  i656.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i657[38], i656.m_CreationSettings)
  var i675 = i657[39]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('TMPro.TMP_FontWeightPair', i675[i + 0]) );
  }
  i656.m_FontWeightTable = i674
  var i677 = i657[40]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('TMPro.TMP_FontWeightPair', i677[i + 0]) );
  }
  i656.fontWeights = i676
  return i656
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i679 = data
  i678.m_FaceIndex = i679[0]
  i678.m_FamilyName = i679[1]
  i678.m_StyleName = i679[2]
  i678.m_PointSize = i679[3]
  i678.m_Scale = i679[4]
  i678.m_UnitsPerEM = i679[5]
  i678.m_LineHeight = i679[6]
  i678.m_AscentLine = i679[7]
  i678.m_CapLine = i679[8]
  i678.m_MeanLine = i679[9]
  i678.m_Baseline = i679[10]
  i678.m_DescentLine = i679[11]
  i678.m_SuperscriptOffset = i679[12]
  i678.m_SuperscriptSize = i679[13]
  i678.m_SubscriptOffset = i679[14]
  i678.m_SubscriptSize = i679[15]
  i678.m_UnderlineOffset = i679[16]
  i678.m_UnderlineThickness = i679[17]
  i678.m_StrikethroughOffset = i679[18]
  i678.m_StrikethroughThickness = i679[19]
  i678.m_TabWidth = i679[20]
  return i678
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i683 = data
  i682.m_Index = i683[0]
  i682.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i683[1], i682.m_Metrics)
  i682.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i683[2], i682.m_GlyphRect)
  i682.m_Scale = i683[3]
  i682.m_AtlasIndex = i683[4]
  i682.m_ClassDefinitionType = i683[5]
  return i682
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i685 = data
  i684.m_Width = i685[0]
  i684.m_Height = i685[1]
  i684.m_HorizontalBearingX = i685[2]
  i684.m_HorizontalBearingY = i685[3]
  i684.m_HorizontalAdvance = i685[4]
  return i684
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i687 = data
  i686.m_X = i687[0]
  i686.m_Y = i687[1]
  i686.m_Width = i687[2]
  i686.m_Height = i687[3]
  return i686
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i690 = root || request.c( 'TMPro.TMP_Character' )
  var i691 = data
  i690.m_ElementType = i691[0]
  i690.m_Unicode = i691[1]
  i690.m_GlyphIndex = i691[2]
  i690.m_Scale = i691[3]
  return i690
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i697 = data
  i696.Name = i697[0]
  i696.PointSize = i697[1]
  i696.Scale = i697[2]
  i696.CharacterCount = i697[3]
  i696.LineHeight = i697[4]
  i696.Baseline = i697[5]
  i696.Ascender = i697[6]
  i696.CapHeight = i697[7]
  i696.Descender = i697[8]
  i696.CenterLine = i697[9]
  i696.SuperscriptOffset = i697[10]
  i696.SubscriptOffset = i697[11]
  i696.SubSize = i697[12]
  i696.Underline = i697[13]
  i696.UnderlineThickness = i697[14]
  i696.strikethrough = i697[15]
  i696.strikethroughThickness = i697[16]
  i696.TabWidth = i697[17]
  i696.Padding = i697[18]
  i696.AtlasWidth = i697[19]
  i696.AtlasHeight = i697[20]
  return i696
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i700 = root || request.c( 'TMPro.TMP_Glyph' )
  var i701 = data
  i700.id = i701[0]
  i700.x = i701[1]
  i700.y = i701[2]
  i700.width = i701[3]
  i700.height = i701[4]
  i700.xOffset = i701[5]
  i700.yOffset = i701[6]
  i700.xAdvance = i701[7]
  i700.scale = i701[8]
  return i700
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.KerningTable' )
  var i703 = data
  var i705 = i703[0]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i705.length; i += 1) {
    i704.add(request.d('TMPro.KerningPair', i705[i + 0]));
  }
  i702.kerningPairs = i704
  return i702
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.KerningPair' )
  var i709 = data
  i708.xOffset = i709[0]
  i708.m_FirstGlyph = i709[1]
  i708.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i709[2], i708.m_FirstGlyphAdjustments)
  i708.m_SecondGlyph = i709[3]
  i708.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i709[4], i708.m_SecondGlyphAdjustments)
  i708.m_IgnoreSpacingAdjustments = !!i709[5]
  return i708
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i713[i + 0]));
  }
  i710.m_GlyphPairAdjustmentRecords = i712
  return i710
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i716 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i717 = data
  i716.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i717[0], i716.m_FirstAdjustmentRecord)
  i716.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i717[1], i716.m_SecondAdjustmentRecord)
  i716.m_FeatureLookupFlags = i717[2]
  return i716
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i719 = data
  i718.m_GlyphIndex = i719[0]
  i718.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i719[1], i718.m_GlyphValueRecord)
  return i718
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i721 = data
  i720.m_XPlacement = i721[0]
  i720.m_YPlacement = i721[1]
  i720.m_XAdvance = i721[2]
  i720.m_YAdvance = i721[3]
  return i720
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i723 = data
  i722.sourceFontFileName = i723[0]
  i722.sourceFontFileGUID = i723[1]
  i722.pointSizeSamplingMode = i723[2]
  i722.pointSize = i723[3]
  i722.padding = i723[4]
  i722.packingMode = i723[5]
  i722.atlasWidth = i723[6]
  i722.atlasHeight = i723[7]
  i722.characterSetSelectionMode = i723[8]
  i722.characterSequence = i723[9]
  i722.referencedFontAssetGUID = i723[10]
  i722.referencedTextAssetGUID = i723[11]
  i722.fontStyle = i723[12]
  i722.fontStyleModifier = i723[13]
  i722.renderMode = i723[14]
  i722.includeFontFeatures = !!i723[15]
  return i722
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'regularTypeface')
  request.r(i727[2], i727[3], 0, i726, 'italicTypeface')
  return i726
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'spriteSheet')
  var i731 = i729[2]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('TMPro.TMP_Sprite', i731[i + 0]));
  }
  i728.spriteInfoList = i730
  var i733 = i729[3]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i728.fallbackSpriteAssets = i732
  i728.hashCode = i729[4]
  request.r(i729[5], i729[6], 0, i728, 'material')
  i728.materialHashCode = i729[7]
  i728.m_Version = i729[8]
  i728.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i729[9], i728.m_FaceInfo)
  var i735 = i729[10]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('TMPro.TMP_SpriteCharacter', i735[i + 0]));
  }
  i728.m_SpriteCharacterTable = i734
  var i737 = i729[11]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('TMPro.TMP_SpriteGlyph', i737[i + 0]));
  }
  i728.m_SpriteGlyphTable = i736
  return i728
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.TMP_Sprite' )
  var i741 = data
  i740.name = i741[0]
  i740.hashCode = i741[1]
  i740.unicode = i741[2]
  i740.pivot = new pc.Vec2( i741[3], i741[4] )
  request.r(i741[5], i741[6], 0, i740, 'sprite')
  i740.id = i741[7]
  i740.x = i741[8]
  i740.y = i741[9]
  i740.width = i741[10]
  i740.height = i741[11]
  i740.xOffset = i741[12]
  i740.yOffset = i741[13]
  i740.xAdvance = i741[14]
  i740.scale = i741[15]
  return i740
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i747 = data
  i746.m_Name = i747[0]
  i746.m_HashCode = i747[1]
  i746.m_ElementType = i747[2]
  i746.m_Unicode = i747[3]
  i746.m_GlyphIndex = i747[4]
  i746.m_Scale = i747[5]
  return i746
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'sprite')
  i750.m_Index = i751[2]
  i750.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i751[3], i750.m_Metrics)
  i750.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i751[4], i750.m_GlyphRect)
  i750.m_Scale = i751[5]
  i750.m_AtlasIndex = i751[6]
  i750.m_ClassDefinitionType = i751[7]
  return i750
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('TMPro.TMP_Style', i755[i + 0]));
  }
  i752.m_StyleList = i754
  return i752
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_Style' )
  var i759 = data
  i758.m_Name = i759[0]
  i758.m_HashCode = i759[1]
  i758.m_OpeningDefinition = i759[2]
  i758.m_ClosingDefinition = i759[3]
  i758.m_OpeningTagArray = i759[4]
  i758.m_ClosingTagArray = i759[5]
  i758.m_OpeningTagUnicodeArray = i759[6]
  i758.m_ClosingTagUnicodeArray = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i763[i + 0]) );
  }
  i760.files = i762
  i760.componentToPrefabIds = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i767 = data
  i766.path = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'unityObject')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i771[i + 0]) );
  }
  i768.scriptsExecutionOrder = i770
  var i773 = i769[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i773[i + 0]) );
  }
  i768.sortingLayers = i772
  var i775 = i769[2]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i775[i + 0]) );
  }
  i768.cullingLayers = i774
  i768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i769[3], i768.timeSettings)
  i768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i769[4], i768.physicsSettings)
  i768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i769[5], i768.physics2DSettings)
  i768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i769[6], i768.qualitySettings)
  i768.enableRealtimeShadows = !!i769[7]
  i768.enableAutoInstancing = !!i769[8]
  i768.enableStaticBatching = !!i769[9]
  i768.enableDynamicBatching = !!i769[10]
  i768.lightmapEncodingQuality = i769[11]
  i768.desiredColorSpace = i769[12]
  var i777 = i769[13]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i768.allTags = i776
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  i784.value = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i791 = data
  i790.fixedDeltaTime = i791[0]
  i790.maximumDeltaTime = i791[1]
  i790.timeScale = i791[2]
  i790.maximumParticleTimestep = i791[3]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i793 = data
  i792.gravity = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.defaultSolverIterations = i793[3]
  i792.bounceThreshold = i793[4]
  i792.autoSyncTransforms = !!i793[5]
  i792.autoSimulation = !!i793[6]
  var i795 = i793[7]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i795[i + 0]) );
  }
  i792.collisionMatrix = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.layerId = i799[1]
  i798.otherLayerId = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'material')
  i800.gravity = new pc.Vec2( i801[2], i801[3] )
  i800.positionIterations = i801[4]
  i800.velocityIterations = i801[5]
  i800.velocityThreshold = i801[6]
  i800.maxLinearCorrection = i801[7]
  i800.maxAngularCorrection = i801[8]
  i800.maxTranslationSpeed = i801[9]
  i800.maxRotationSpeed = i801[10]
  i800.baumgarteScale = i801[11]
  i800.baumgarteTOIScale = i801[12]
  i800.timeToSleep = i801[13]
  i800.linearSleepTolerance = i801[14]
  i800.angularSleepTolerance = i801[15]
  i800.defaultContactOffset = i801[16]
  i800.autoSimulation = !!i801[17]
  i800.queriesHitTriggers = !!i801[18]
  i800.queriesStartInColliders = !!i801[19]
  i800.callbacksOnDisable = !!i801[20]
  i800.reuseCollisionCallbacks = !!i801[21]
  i800.autoSyncTransforms = !!i801[22]
  var i803 = i801[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i803[i + 0]) );
  }
  i800.collisionMatrix = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.layerId = i807[1]
  i806.otherLayerId = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[i + 0]) );
  }
  i808.qualityLevels = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.names = i812
  i808.shadows = i809[2]
  i808.anisotropicFiltering = i809[3]
  i808.antiAliasing = i809[4]
  i808.lodBias = i809[5]
  i808.shadowCascades = i809[6]
  i808.shadowDistance = i809[7]
  i808.shadowmaskMode = i809[8]
  i808.shadowProjection = i809[9]
  i808.shadowResolution = i809[10]
  i808.softParticles = !!i809[11]
  i808.softVegetation = !!i809[12]
  i808.activeColorSpace = i809[13]
  i808.desiredColorSpace = i809[14]
  i808.masterTextureLimit = i809[15]
  i808.maxQueuedFrames = i809[16]
  i808.particleRaycastBudget = i809[17]
  i808.pixelLightCount = i809[18]
  i808.realtimeReflectionProbes = !!i809[19]
  i808.shadowCascade2Split = i809[20]
  i808.shadowCascade4Split = new pc.Vec3( i809[21], i809[22], i809[23] )
  i808.streamingMipmapsActive = !!i809[24]
  i808.vSyncCount = i809[25]
  i808.asyncUploadBufferSize = i809[26]
  i808.asyncUploadTimeSlice = i809[27]
  i808.billboardsFaceCameraPosition = !!i809[28]
  i808.shadowNearPlaneOffset = i809[29]
  i808.streamingMipmapsMemoryBudget = i809[30]
  i808.maximumLODLevel = i809[31]
  i808.streamingMipmapsAddAllCameras = !!i809[32]
  i808.streamingMipmapsMaxLevelReduction = i809[33]
  i808.streamingMipmapsRenderersPerFrame = i809[34]
  i808.resolutionScalingFixedDPIFactor = i809[35]
  i808.streamingMipmapsMaxFileIORequests = i809[36]
  i808.currentQualityLevel = i809[37]
  return i808
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_ObjectArgument')
  i816.m_ObjectArgumentAssemblyTypeName = i817[2]
  i816.m_IntArgument = i817[3]
  i816.m_FloatArgument = i817[4]
  i816.m_StringArgument = i817[5]
  i816.m_BoolArgument = !!i817[6]
  return i816
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i819 = data
  i818.xPlacement = i819[0]
  i818.yPlacement = i819[1]
  i818.xAdvance = i819[2]
  i818.yAdvance = i819[3]
  return i818
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[2],"70":[71],"72":[73],"74":[73],"10":[9],"21":[9],"75":[2],"76":[9],"23":[9],"26":[9],"77":[48],"13":[10,12],"25":[9],"78":[79],"80":[9],"81":[9],"19":[10],"17":[16,9],"82":[9],"12":[10],"83":[9],"84":[9],"85":[9],"86":[9],"87":[9],"88":[9],"89":[9],"22":[9],"90":[9],"91":[16,9],"92":[9],"93":[9],"94":[9],"95":[9],"96":[16,9],"97":[9],"98":[27],"99":[27],"28":[27],"100":[27],"101":[2],"102":[2],"103":[104],"105":[2],"106":[9],"107":[71,9],"108":[9,16],"109":[9],"110":[16,9],"111":[71],"112":[16,9],"113":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AudioManager","AudioLibrary","GameManager","TaskManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","ResponsiveUIManager","OrientationLayoutSwitcher","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","ButtonPulse","UnityEngine.UI.Mask","FluidGridLayout","UnityEngine.Material","UIDragger","HorizontalUIDragClamp","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAspectFitter","DragToResizeLeft","Bullet","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "09/25/2025 07:37:13";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "a0abce84-7726-404c-9ceb-8dc8eef373b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

