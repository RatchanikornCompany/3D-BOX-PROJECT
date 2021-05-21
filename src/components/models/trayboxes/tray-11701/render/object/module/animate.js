import gsap from 'gsap';

export const foldBox = (
  pivotTop,
  pivotGroupATop,
  pivotLRLidATopLeft,
  pivotLRLidATopRight,
  pivotDustFlapTopLeft,
  pivotDustFlapTopRight,
  pivotLRLidATop,
  pivotDustFlapLidALeft,
  pivotDustFlapLidARight,
  pivotLeft,
  pivotLidBLeft,
  pivotRight,
  pivotLidBRight,
  pivotBottom,
  pivotDustFlapBottomLeft,
  pivotDustFlapBottomRight,
  pivotAll
) => {
  let tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupATop.x = (Math.PI / 180) * 90),
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
  tween.to(pivotLRLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRLidATop.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapLidALeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapLidARight.y = -(Math.PI / 180) * 90),
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
    y: (pivotLidBLeft.y = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBRight.y = -(Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = -(Math.PI / 180) * 90),
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
};

export const expandBox = (
  pivotTop,
  pivotGroupATop,
  pivotLRLidATopLeft,
  pivotLRLidATopRight,
  pivotDustFlapTopLeft,
  pivotDustFlapTopRight,
  pivotLRLidATop,
  pivotDustFlapLidALeft,
  pivotDustFlapLidARight,
  pivotLeft,
  pivotLidBLeft,
  pivotRight,
  pivotLidBRight,
  pivotBottom,
  pivotDustFlapBottomLeft,
  pivotDustFlapBottomRight,
  pivotAll
) => {
  let tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidATopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidATopLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidATopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidATopRight.y = 0),
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
  tween.to(pivotLRLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRLidATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapLidALeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotDustFlapLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotDustFlapLidARight.y = 0),
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
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = 0),
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
  tween.to(pivotAll.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotAll.x = 0),
  });
};
