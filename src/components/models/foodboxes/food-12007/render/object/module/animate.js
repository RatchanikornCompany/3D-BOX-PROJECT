import gsap from 'gsap';

export const foldBox = (
  pivotAFrontTop,
  pivotBFrontLeft,
  pivotBFrontRight,
  pivotAFront,
  pivotBLeftLid,
  pivotBLeftLidD,
  pivotBLeft,
  pivotBRightLid,
  pivotBRightLidD,
  pivotBRight,
  pivotATop,
  pivotLidBottomD,
  pivotLidBottom,
  pivotABack
) => {
  let tween = gsap.timeline();
  tween.to(pivotAFrontTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAFrontTop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBFrontLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBFrontLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBFrontRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBFrontRight.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotAFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAFront.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLidD.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightLid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightLidD.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottomD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottomD.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottom.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABack.x = (Math.PI / 180) * -90),
  });
};

export const expandBox = (
  pivotAFrontTop,
  pivotBFrontLeft,
  pivotBFrontRight,
  pivotAFront,
  pivotBLeftLid,
  pivotBLeftLidD,
  pivotBLeft,
  pivotBRightLid,
  pivotBRightLidD,
  pivotBRight,
  pivotATop,
  pivotLidBottomD,
  pivotLidBottom,
  pivotABack
) => {
  let tween = gsap.timeline();
  tween.to(pivotAFrontTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAFrontTop.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBFrontLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBFrontLeft.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBFrontRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBFrontRight.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotAFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAFront.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLidD.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeft.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightLid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightLidD.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRight.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottomD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottomD.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABack.x = (Math.PI / 180) * 0),
  });
};
