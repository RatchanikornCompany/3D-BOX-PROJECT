import gsap from 'gsap';

export const foldBox = (
  pivotRight,
  pivotLidBRight,
  pivotLRLidBRight,
  pivotLidBRightTop,
  pivotLidBRightBottom,
  pivotInsideFlapRight,
  pivotLeft,
  pivotLidBLeft,
  pivotLRLidBLeft,
  pivotLidBLeftTop,
  pivotLidBLeftBottom,
  pivotInsideFlapLeft,
  pivotTop,
  pivotLidATop,
  pivotLRATopLeft,
  pivotLRATopRight,
  pivotLRLidATop,
  pivotGlueFlapTop,
  pivotDustFlapTopLeft,
  pivotDustFlapTopRight,
  pivotBottom,
  pivotLidABottom,
  pivotLRABottomLeft,
  pivotLRABottomRight,
  pivotLRLidABottom,
  pivotGlueFlapBottom,
  pivotDustFlapBottomLeft,
  pivotDustFlapBottomRight,
  pivotAll,
  pivotTopFlap,
  pivotGlueFlap,
  pivotFrontFlap,
  pivotBBottomLid,
  pivotBackFlap
) => {
  let tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBRightBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotInsideFlapRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInsideFlapRight.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidBLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBLeftBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotInsideFlapLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotInsideFlapLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRATopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRATopLeft.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRATopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRATopRight.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRLidATop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlapTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlapTop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapTopRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidABottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRABottomLeft.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRABottomRight.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRLidABottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlapBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlapBottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapBottomRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotAll.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAll.x = -Math.PI / 2),
  });

  // ฝา

  tween = gsap.timeline();
  tween.to(pivotTopFlap.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotTopFlap.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlap.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotGlueFlap.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontFlap.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotFrontFlap.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLid.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotBBottomLid.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLid.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotBBottomLid.x = -Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotBackFlap.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackFlap.position, {
    duration: 10,
    ease: 'power4.in',
    x: (pivotBackFlap.x = 0),
  });
};
