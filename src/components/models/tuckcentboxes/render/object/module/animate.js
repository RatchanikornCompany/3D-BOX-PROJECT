import gsap from 'gsap';

export const foldBox = (
  pivotBottomLid,
  pivotGroupBottom,
  pivotLidBLeft,
  pivotLidBLeftD,
  pivotBLeft,
  pivotTopLid,
  pivotTop,
  pivotGlueLid,
  pivotABack,
  pivotLidBRight,
  pivotLidBRightD,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = Math.PI / 2),
  });
};

export const expandBox = (
  pivotBottomLid,
  pivotGroupBottom,
  pivotLidBLeft,
  pivotLidBLeftD,
  pivotBLeft,
  pivotTopLid,
  pivotTop,
  pivotGlueLid,
  pivotABack,
  pivotLidBRight,
  pivotLidBRightD,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = 0),
  });
};
