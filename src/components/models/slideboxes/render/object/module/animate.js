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
  pivotBLidBack,
  pivotALidBack,
  pivotBLidFront,
  pivotGludLid,
  pivotALidFront
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
  tween.to(pivotBLidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLidBack.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotALidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidBack.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLidFront.x = Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(pivotGludLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGludLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotALidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidFront.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotALidFront.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidFront.x = 0),
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
  pivotBLidBack,
  pivotALidBack,
  pivotBLidFront,
  pivotGludLid,
  pivotALidFront
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
  tween.to(pivotBLidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLidBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotALidBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLidFront.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotGludLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGludLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotALidFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidFront.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotALidFront.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidFront.x = A * 2),
  });
};
