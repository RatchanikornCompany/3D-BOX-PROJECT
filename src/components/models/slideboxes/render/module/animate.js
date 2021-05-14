import gsap from 'gsap';

let tween;

export const foldBox = (
  pivotBack,
  pivotLeft,
  pivotLidBLeft,
  pivotDustFlapLeftTop,
  pivotDustFlapLeftBottom,
  pivotInnerFlapLeft,
  pivotRight,
  pivotLidBRight,
  pivotDustFlapRightTop,
  pivotDustFlapRightBottom,
  pivotInnerFlapRight,
  pivotTop,
  pivotLidATop,
  pivotDustFlapTopLeft,
  pivotDustFlapTopRight,
  pivotInnerFlapTop,
  pivotBottom,
  pivotLidABottom,
  pivotDustFlapBottomLeft,
  pivotDustFlapBottomRight,
  pivotInnerFlapBottom,
  getPivotBack,
  getPivotLeft,
  getPivotLidBLeft,
  getPivotDustFlapLeftTop,
  getPivotDustFlapLeftBottom,
  getPivotInnerFlapLeft,
  getPivotRight,
  getPivotLidBRight,
  getPivotDustFlapRightTop,
  getPivotDustFlapRightBottom,
  getPivotInnerFlapRight,
  getPivotTop,
  getPivotLidATop,
  getPivotDustFlapTopLeft,
  getPivotDustFlapTopRight,
  getPivotInnerFlapTop,
  getPivotBottom,
  getPivotLidABottom,
  getPivotDustFlapBottomLeft,
  getPivotDustFlapBottomRight,
  getPivotInnerFlapBottom,
  getPivotBLidBackEdges,
  getPivotALidBackEdges,
  getPivotBLidFrontEdges,
  getPivotGludLidEdges,
  getPivotALidFrontEdges,
  getPivotBLidBack,
  getPivotALidBack,
  getPivotBLidFront,
  getPivotGludLid,
  getPivotALidFront
) => {
  tween = gsap.timeline();
  tween.to(pivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBack.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapLeftTop.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapLeftBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInnerFlapLeft.y = (Math.PI / 180) * 90.5),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapRightTop.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapRightBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInnerFlapRight.y = -(Math.PI / 180) * 90.5),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerFlapTop.x = (Math.PI / 180) * 91.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidABottom.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerFlapBottom.x = -(Math.PI / 180) * 91.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidBackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidBackEdges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidBackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidBackEdges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidFrontEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidFrontEdges.x = Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotGludLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGludLidEdges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFrontEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFrontEdges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFrontEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFrontEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidBack.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidBack.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidFront.x = Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotGludLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGludLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFront.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFront.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFront.x = 0),
  });

  //TODO

  tween = gsap.timeline();
  tween.to(getPivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBack.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLidBLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapLeftTop.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapLeftBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotInnerFlapLeft.y = (Math.PI / 180) * 90.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotRight.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLidBRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapRightTop.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapRightBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotInnerFlapRight.y = -(Math.PI / 180) * 90.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidATop.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapTopLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapTopRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotInnerFlapTop.x = (Math.PI / 180) * 91.5),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidABottom.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapBottomLeft.y = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapBottomRight.y = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotInnerFlapBottom.x = -(Math.PI / 180) * 91.5),
  });
};

export const expandBox = (
  A,
  pivotBack,
  pivotLeft,
  pivotLidBLeft,
  pivotDustFlapLeftTop,
  pivotDustFlapLeftBottom,
  pivotInnerFlapLeft,
  pivotRight,
  pivotLidBRight,
  pivotDustFlapRightTop,
  pivotDustFlapRightBottom,
  pivotInnerFlapRight,
  pivotTop,
  pivotLidATop,
  pivotDustFlapTopLeft,
  pivotDustFlapTopRight,
  pivotInnerFlapTop,
  pivotBottom,
  pivotLidABottom,
  pivotDustFlapBottomLeft,
  pivotDustFlapBottomRight,
  pivotInnerFlapBottom,
  getPivotBack,
  getPivotLeft,
  getPivotLidBLeft,
  getPivotDustFlapLeftTop,
  getPivotDustFlapLeftBottom,
  getPivotInnerFlapLeft,
  getPivotRight,
  getPivotLidBRight,
  getPivotDustFlapRightTop,
  getPivotDustFlapRightBottom,
  getPivotInnerFlapRight,
  getPivotTop,
  getPivotLidATop,
  getPivotDustFlapTopLeft,
  getPivotDustFlapTopRight,
  getPivotInnerFlapTop,
  getPivotBottom,
  getPivotLidABottom,
  getPivotDustFlapBottomLeft,
  getPivotDustFlapBottomRight,
  getPivotInnerFlapBottom,
  getPivotBLidBackEdges,
  getPivotALidBackEdges,
  getPivotBLidFrontEdges,
  getPivotGludLidEdges,
  getPivotALidFrontEdges,
  getPivotBLidBack,
  getPivotALidBack,
  getPivotBLidFront,
  getPivotGludLid,
  getPivotALidFront
) => {
  tween = gsap.timeline();
  tween.to(pivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapLeftTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapLeftBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInnerFlapLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapRightTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotDustFlapRightBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInnerFlapRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerFlapTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotInnerFlapBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotInnerFlapBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidBackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidBackEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidBackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidBackEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidFrontEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidFrontEdges.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotGludLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGludLidEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFrontEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFrontEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFrontEdges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFrontEdges.x = A * 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLidFront.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotGludLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGludLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFront.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotALidFront.position, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotALidFront.x = A * 2),
  });

  //TODO

  tween = gsap.timeline();
  tween.to(getPivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLidBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapLeftTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapLeftBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotInnerFlapLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLidBRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapRightTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotDustFlapRightBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotInnerFlapRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapTopLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapTopRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotInnerFlapTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapBottomLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotDustFlapBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotDustFlapBottomRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotInnerFlapBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotInnerFlapBottom.x = 0),
  });
};
