import { gsap } from 'gsap';

export const foldBox = (
  A,
  C,
  pivotATopFront,
  pivotABottomFront,
  pivotATopBack,
  pivotABottomBack,
  pivotGlueLid,
  pivotABack,
  pivotTopBLeft,
  pivotBottomBLeft,
  pivotBLeft,
  pivotTopBRight,
  pivotBottomBRight,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotATopFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATopFront.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopFront.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotATopFront.y = C - 2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomFront.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomFront.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABottomFront.y = 2.5),
    z: (pivotABottomFront.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotATopBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATopBack.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATopBack.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotATopBack.y = C - 2.5),
    z: (pivotATopBack.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomBack.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomBack.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABottomBack.y = 2.5),
    z: (pivotABottomBack.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueLid.x = -A + 2.5),
    z: (pivotGlueLid.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBLeft.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotTopBLeft.x = ((Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBLeft.position, {
    duration: 10,
    ease: 'power4.in',
    y: (pivotTopBLeft.y = C - 2.5),
    z: (pivotTopBLeft.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBLeft.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBLeft.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBottomBLeft.y = 2.5),
    z: (pivotBottomBLeft.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBRight.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotTopBRight.x = (-(Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBRight.position, {
    duration: 10,
    ease: 'power4.in',
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBRight.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRight.x = A - 2.5),
    z: (pivotBRight.z = 0),
  });
};

export const expandBox = (
  A,
  C,
  pivotATopFront,
  pivotABottomFront,
  pivotATopBack,
  pivotABottomBack,
  pivotGlueLid,
  pivotABack,
  pivotTopBLeft,
  pivotBottomBLeft,
  pivotBLeft,
  pivotTopBRight,
  pivotBottomBRight,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotATopFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATopFront.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomFront.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomFront.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABottomFront.y = 0),
    z: (pivotABottomFront.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotATopBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATopBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomBack.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomBack.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABottomBack.y = 0),
    z: (pivotABottomBack.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.position, {
    duration: 5,
    ease: 'power4.in',
    z: (pivotGlueLid.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopBLeft.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBLeft.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBLeft.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBottomBLeft.y = 0),
    z: (pivotBottomBLeft.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopBRight.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBRight.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotTopBRight.y = C),
    z: (pivotTopBRight.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBRight.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRight.x = A),
    z: (pivotBRight.z = -2.5),
  });
};
