import gsap from 'gsap';

export const foldBox = (
  B,
  pivotLidARight,
  pivotLidARightD,
  pivotPlaneARight,
  pivotLidALeft,
  pivotLidALeftD,
  pivotPlaneALeft,
  pivotInnerATop,
  pivotLidATop,
  pivotPlaneATop,
  pivotInnerABottom,
  pivotLidABottom,
  pivotPlaneABottom,
  pivotPlaneA,
  pivotTopFlap,
  pivotGlueFlap,
  pivotFrontFlap,
  pivotBBottomLid,
  pivotBackFlap,
  pivotTopFlapEdges,
  pivotGlueFlapEdges,
  pivotFrontFlapEdges,
  pivotBBottomLidEdges,
  pivotBackFlapEdges
) => {
  let tween = gsap.timeline();
  tween.to(pivotLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidARight.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidARightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidARightD.x = -(Math.PI / 180) * 271),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotPlaneARight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidALeft.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidALeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidALeftD.x = (Math.PI / 180) * -89),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotPlaneALeft.y = Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerATop.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = (Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneATop.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerABottom.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidABottom.x = (Math.PI / 180) * -178),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneABottom.x = -Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneA.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneA.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFlap.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlap.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotFrontFlap.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBBottomLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBackFlap.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBackFlap.x = B),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFlapEdges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlapEdges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotFrontFlapEdges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBBottomLidEdges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBackFlapEdges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlapEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBackFlapEdges.x = B),
  });
};

export const expandBox = (
  A,
  pivotLidARight,
  pivotLidARightD,
  pivotPlaneARight,
  pivotLidALeft,
  pivotLidALeftD,
  pivotPlaneALeft,
  pivotInnerATop,
  pivotLidATop,
  pivotPlaneATop,
  pivotInnerABottom,
  pivotLidABottom,
  pivotPlaneABottom,
  pivotPlaneA,
  pivotTopFlap,
  pivotGlueFlap,
  pivotFrontFlap,
  pivotBBottomLid,
  pivotBackFlap,
  pivotTopFlapEdges,
  pivotGlueFlapEdges,
  pivotFrontFlapEdges,
  pivotBBottomLidEdges,
  pivotBackFlapEdges
) => {
  let tween = gsap.timeline();
  tween.to(pivotLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidARight.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidARightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidARightD.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotPlaneARight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidALeft.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidALeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidALeftD.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotPlaneALeft.y = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneABottom.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotPlaneA.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotPlaneA.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotFrontFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBBottomLid.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBackFlap.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBackFlap.x = A * 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotFrontFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBBottomLidEdges.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBackFlapEdges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlapEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBackFlapEdges.x = A * 2),
  });
};
