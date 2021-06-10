import gsap from 'gsap';

export const foldBox = (
  pivotLeft,
  pivotLeftLid,
  pivotLeftLidD,
  pivotRight,
  pivotRightLid,
  pivotRightLidD,
  pivotFront,
  pivotGlueLid,
  pivotATop,
  pivotLockTopLid,
  pivotLockTop,
  pivotLockTopLeft,
  pivotLockTopRight,
  pivotTop,
  pivotTopLid,
  pivotABottom,
  pivotLockBottomLid,
  pivotBottomLock,
  pivotBottomLeft,
  pivotBottomRight,
  pivotBottom,
  pivotBottomLid
) => {
  let tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLid.x = -(Math.PI / 2)),
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
    y: (pivotRight.y = Math.PI / 2),
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
  tween.to(pivotFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotFront.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotLockTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLockTopLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLockTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLockTop.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLockTopLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLockTopLeft.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLockTopRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLockTopRight.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopLid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLockBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLockBottomLid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLock.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBottomLeft.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBottomRight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLid.x = Math.PI / 2),
  });
};
