import gsap from 'gsap';

let tween;

export const foldBox = (
  pivotGlueLid,
  pivotLRLidALeft,
  pivotLRLidARight,
  pivotLidATop,
  pivotLidBTopLeft,
  pivotLidBTopRight,
  pivotTop,
  pivotLidBBottomLeft,
  pivotLidBBottomRight,
  pivotBottom,
  pivotLeft,
  pivotRight
) => {
  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidALeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidARight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBTopLeft.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBTopRight.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBBottomLeft.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBBottomRight.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = -(Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = (Math.PI / 180) * 92),
  });
};

export const expandBox = (
  pivotGlueLid,
  pivotLRLidALeft,
  pivotLRLidARight,
  pivotLidATop,
  pivotLidBTopLeft,
  pivotLidBTopRight,
  pivotTop,
  pivotLidBBottomLeft,
  pivotLidBBottomRight,
  pivotBottom,
  pivotLeft,
  pivotRight
) => {
  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidALeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidALeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidARight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidARight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBTopLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBTopRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBBottomLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLidBBottomRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = 0),
  });
};
