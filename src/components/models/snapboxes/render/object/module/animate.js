import gsap from 'gsap';

export const foldBox = (
  pivotTop,
  pivotTopLid,
  pivotGroupAFront,
  pivotBottomLid,
  pivotGroupABack,
  pivotGroupBottom,
  pivotGlueLid,
  pivotLidBLeft,
  pivotBLeft,
  pivotGroupBLeftD,
  pivotLRLidBLeftD,
  pivotLidBRight,
  pivotBRight,
  pivotGroupBRightD,
  pivotLRLidBRightD
) => {
  let tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupAFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupAFront.x = Math.PI / 1.9),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = Math.PI / 2.7),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupABack.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBLeftD.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBLeftD.y = Math.PI / 2.7),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBRightD.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBRightD.y = -Math.PI / 2.7),
  });
};

export const expandBox = (
  pivotTop,
  pivotTopLid,
  pivotGroupAFront,
  pivotBottomLid,
  pivotGroupABack,
  pivotGroupBottom,
  pivotGlueLid,
  pivotLidBLeft,
  pivotBLeft,
  pivotGroupBLeftD,
  pivotLRLidBLeftD,
  pivotLidBRight,
  pivotBRight,
  pivotGroupBRightD,
  pivotLRLidBRightD
) => {
  let tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupAFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupAFront.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBLeftD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBLeftD.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBRightD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBRightD.y = 0),
  });
};
