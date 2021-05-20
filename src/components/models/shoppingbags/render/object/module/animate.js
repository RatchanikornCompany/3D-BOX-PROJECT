import gsap from 'gsap';

export const foldBox = (
  pivotBRightL,
  pivotATop,
  pivotSideBLeftTop,
  pivotSideBRightTop,
  pivotBLeftBottom,
  pivotBRightBottom,
  pivotABottomLeft,
  pivotABottomRight,
  pivotABottom,
  pivotBLeftR,
  pivotBLeftRTop,
  pivotBLeftRBottom,
  pivotBLeftLTop,
  pivotBLeftLBottom,
  pivotABack,
  pivotABackTop,
  pivotABackBottom,
  pivotABackBottomLeft,
  pivotABackBottomRight,
  pivotGlueTop,
  pivotGlueBottom,
  pivotGlueLid
) => {
  let tween = gsap.timeline();
  tween.to(pivotBRightL.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRightL.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBLeftTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBRightTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftBottom.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomLeft.x = (Math.PI / 180) * -179),
    z: (pivotABottomLeft.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomRight.x = (Math.PI / 180) * -179),
    z: (pivotABottomRight.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftR.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeftR.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRBottom.x = (Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLBottom.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottom.x = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomLeft.x = (Math.PI / 180) * 179),
    z: (pivotABackBottomLeft.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomRight.x = (Math.PI / 180) * 179),
    z: (pivotABackBottomRight.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueBottom.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * -91),
  });
};

export const expandBox = (
  pivotBRightL,
  pivotATop,
  pivotSideBLeftTop,
  pivotSideBRightTop,
  pivotBLeftBottom,
  pivotBRightBottom,
  pivotABottomLeft,
  pivotABottomRight,
  pivotABottom,
  pivotBLeftR,
  pivotBLeftRTop,
  pivotBLeftRBottom,
  pivotBLeftLTop,
  pivotBLeftLBottom,
  pivotABack,
  pivotABackTop,
  pivotABackBottom,
  pivotABackBottomLeft,
  pivotABackBottomRight,
  pivotGlueTop,
  pivotGlueBottom,
  pivotGlueLid
) => {
  let tween = gsap.timeline();
  tween.to(pivotBRightL.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRightL.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBLeftTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBRightTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomLeft.x = 0),
    z: (pivotABottomLeft.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomRight.x = 0),
    z: (pivotABottomRight.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftR.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeftR.y = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomLeft.x = 0),
    z: (pivotABackBottomLeft.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomRight.x = 0),
    z: (pivotABackBottomRight.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });
};
