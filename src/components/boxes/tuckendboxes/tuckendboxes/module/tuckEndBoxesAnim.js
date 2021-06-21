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
  pivotBRight,
  pivotAll
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

  // var tween_Light_position = gsap.timeline();
  // tween_Light_position.to(light.position, {
  //   duration: 2,
  //   ease: 'power4.in',
  //   x: (light.x = -100),
  //   y: (light.y = 150),
  //   z: (light.z = 60),
  // });

  // var tween_set_camera = gsap.timeline();
  // tween.to(camera.position, {
  //   duration: 2,
  //   ease: 'power4.in',
  //   x: (camera.x = 100),
  //   y: (camera.y = 200),
  //   z: (camera.z = 300),
  // });

  // tween = gsap.timeline();
  // tween.to(pivotAll.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   y: (pivotAll.y = (Math.PI / 180) * 71.59),
  // });
};
