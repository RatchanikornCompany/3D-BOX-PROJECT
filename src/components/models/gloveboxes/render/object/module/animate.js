import gsap from 'gsap';

export const foldBox = (
  pivotALidTop,
  pivotGroupATop,
  pivotALidBottom,
  pivotGroupABottom,
  pivotGlueLid,
  pivotTopLid,
  pivotGroupTop,
  pivotBottomLid,
  pivotGroupBottom,
  pivotGroupABack,
  pivotLidBLeft,
  pivotLidBLeftD,
  pivotBLeft,
  pivotLidBRight,
  pivotLidBRightD,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotALidTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidTop.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupATop.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotALidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupABottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = (Math.PI / 180) * -95),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupTop.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = (Math.PI / 180) * 95),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupABack.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftD.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightD.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = (Math.PI / 180) * 90),
  });
};

export const expandBox = (
  pivotALidTop,
  pivotGroupATop,
  pivotALidBottom,
  pivotGroupABottom,
  pivotGlueLid,
  pivotTopLid,
  pivotGroupTop,
  pivotBottomLid,
  pivotGroupBottom,
  pivotGroupABack,
  pivotLidBLeft,
  pivotLidBLeftD,
  pivotBLeft,
  pivotLidBRight,
  pivotLidBRightD,
  pivotBRight
) => {
  let tween = gsap.timeline();
  tween.to(pivotALidTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidTop.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGroupATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupATop.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotALidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotALidBottom.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGroupABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupABottom.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGroupTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupTop.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottom.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotGroupABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupABack.y = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeft.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftD.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRight.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightD.x = (Math.PI / 180) * 0),
  });
  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = (Math.PI / 180) * 0),
  });
};
