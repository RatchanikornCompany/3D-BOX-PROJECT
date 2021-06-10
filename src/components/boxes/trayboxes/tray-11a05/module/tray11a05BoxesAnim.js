import gsap from 'gsap';

export const foldBox = (
  pivotBack,
  pivotRight,
  pivotLidBRight,
  pivotLockRight,
  pivotLeft,
  pivotLidBLeft,
  pivotLockLeft,
  pivotTop,
  pivotLRLidATopLeft,
  pivotLRLidATopRight,
  pivotBottom,
  pivotLRLidABottomLeft,
  pivotLRLidABottomRight,
  pivotTopLid,
  pivotBackLid,
  pivotBBottomLid,
  pivotFrontLid,
  pivotGlueFlap
) => {
  let tween = gsap.timeline();
  tween.to(pivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBack.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRight.x = -Math.PI / 2),
    y: (pivotRight.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBRight.y = -(Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivotLockRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLockRight.y = (Math.PI / 180) * 88),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeft.x = -Math.PI / 2),
    y: (pivotLeft.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBLeft.y = (Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivotLockLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLockLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidATopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidATopLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidATopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidATopRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidABottomLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidABottomRight.y = -(Math.PI / 180) * 90),
  });

  // ฝากล่อง

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBackLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBackLid.position, {
    duration: 6,
    ease: 'power4.in',
    x: (pivotBackLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBBottomLid.x = -Math.PI * 1.5),
  });

  tween = gsap.timeline();
  tween.to(pivotFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotFrontLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueFlap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueFlap.x = -Math.PI / 2),
  });
};
