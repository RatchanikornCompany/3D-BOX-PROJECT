import gsap from 'gsap';

export const foldBox = (
  pivotFront,
  pivotGlueLid,
  pivotLeft,
  pivotLeftLid,
  pivotLeftLidD,
  pivotRight,
  pivotRightLid,
  pivotRightLidD,
  pivotTop,
  pivotLidTop,
  pivotBottom,
  pivotLidBottom,
  pivotBottomLock,
  pivotLock,
  pivotLRLidLockLeft,
  pivotLRLidLockRight,
  pivotLRBottomLock
) => {
  let tween = gsap.timeline();
  tween.to(pivotFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotFront.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLidD.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidD.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLock.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivotLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLock.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRBottomLock.x = -(Math.PI / 180) * 90),
  });
};
