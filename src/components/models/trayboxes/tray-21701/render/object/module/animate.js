import { gsap } from 'gsap';

export const foldBox = (
  A,
  B,
  C,
  pivotABack,
  pivotBTopLeft,
  pivotBTopRight,
  pivotBBottomLeft,
  pivotBBottomRight,
  pivotBTop,
  pivotBBottom,
  pivotBLeft,
  pivotBRight,
  pivotBLeftLid,
  pivotBRightLid,
  pivotATopLeft,
  pivotATopRight,
  pivotATop,
  pivotATopLidL,
  pivotATopLidR,
  pivotATopLid
) => {
  let tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 4 / 10,
    ease: 'power4.in',
    x: (pivotABack.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.position, {
    duration: 4 / 10,
    ease: 'power4.in',
    y: (pivotABack.y = 2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBTopLeft.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivotBTopLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBTopLeft.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivotBTopLeft.x = 0.1),
  });

  tween = gsap.timeline();
  tween.to(pivotBTopRight.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivotBTopRight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBTopRight.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivotBTopRight.x = A - 2.6),
    z: (pivotBTopRight.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLeft.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivotBBottomLeft.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLeft.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivotBBottomLeft.x = 2.6),
    z: (pivotBBottomLeft.z = -3.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomRight.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivotBBottomRight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomRight.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivotBBottomRight.x = A - 0.1),
    z: (pivotBBottomRight.z = -3.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBTop.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivotBTop.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBTop.position, {
    duration: 8 / 10,
    ease: 'power4.in',
    y: (pivotBTop.y = B - 2.5),
    z: (pivotBTop.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottom.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivotBBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivotBLeft.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivotBRight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivotBRight.x = A - 2.5),
    z: (pivotBRight.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivotBLeftLid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivotBLeftLid.z = 2.61),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivotBRightLid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivotBRightLid.z = -2.39),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLeft.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivotATopLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLeft.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivotATopLeft.x = 0.1),
  });

  tween = gsap.timeline();
  tween.to(pivotATopRight.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivotATopRight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopRight.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivotATopRight.x = A - 2.5 - 0.1),
    z: (pivotATopRight.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivotATop.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.position, {
    duration: 32 / 10,
    ease: 'power4.in',
    y: (pivotATop.y = C - 2.5),
    z: (pivotATop.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLidL.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivotATopLidL.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLidL.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivotATopLidL.x = 0.1),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLidR.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivotATopLidR.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLidR.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivotATopLidR.x = A - 2.5 - 0.1),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLid.rotation, {
    duration: 92 / 12,
    ease: 'power4.in',
    x: (pivotATopLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopLid.position, {
    duration: 92 / 12,
    ease: 'power4.in',
    y: (pivotATopLid.y = B - 2.6),
    z: (pivotATopLid.z = -2.5),
  });
};
