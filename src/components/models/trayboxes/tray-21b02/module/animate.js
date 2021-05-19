import gsap from 'gsap';

import { sceneAdd } from '../../../../../function/webgl';

let tween;

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
  getPivotTopFlap,
  getPivotGlueFlap,
  getPivotFrontFlap,
  getPivotBBottomLid,
  getPivotBackFlap,
  getPivotTopFlapEdges,
  getPivotGlueFlapEdges,
  getPivotFrontFlapEdges,
  getPivotBBottomLidEdges,
  getPivotBackFlapEdges,
  pivotPlaneAEdges
) => {
  tween = gsap.timeline();
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
  tween.to(getPivotTopFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopFlap.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueFlap.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontFlap.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBBottomLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBackFlap.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlap.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBackFlap.x = B),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopFlapEdges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueFlapEdges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontFlapEdges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBBottomLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBBottomLidEdges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBackFlapEdges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlapEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBackFlapEdges.x = B),
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
  getPivotTopFlap,
  getPivotGlueFlap,
  getPivotFrontFlap,
  getPivotBBottomLid,
  getPivotBackFlap,
  getPivotTopFlapEdges,
  getPivotGlueFlapEdges,
  getPivotFrontFlapEdges,
  getPivotBBottomLidEdges,
  getPivotBackFlapEdges,
  pivotPlaneAEdges
) => {
  tween = gsap.timeline();
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
  tween.to(getPivotTopFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontFlap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBBottomLid.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBackFlap.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlap.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBackFlap.x = A * 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontFlapEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBBottomLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBBottomLidEdges.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlapEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBackFlapEdges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBackFlapEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBackFlapEdges.x = A * 2),
  });
};
