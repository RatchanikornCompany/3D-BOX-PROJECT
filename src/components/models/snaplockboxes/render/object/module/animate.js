import gsap from 'gsap';

let tween;

export const foldBox = (
  pivotBack,
  pivotGlueLid,
  pivotLeftLid,
  pivotLeftLid_d,
  pivotGroupLeft,
  pivotRightLid,
  pivotRightLidD,
  pivotGroupRight,
  pivotGroupTopBack,
  pivotTopBackLid,
  pivotTop,
  pivotTopFrontLid,
  pivotGroupBottomFront,
  pivotBottomFrontLid,
  pivotBottomFrontLidD,
  pivotGroupBottomBack,
  pivotBottomBackLid,
  pivotBottomBackLidD
) => {
  tween = gsap.timeline();
  tween.to(pivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBack.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivotLeftLid.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivotRightLid.x = (Math.PI / 180) * -30),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupRight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupTopBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupTopBack.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBackLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopBackLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFrontLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottomFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottomFront.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomFrontLid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomFrontLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomFrontLidD.x = (Math.PI / 180) * 45),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottomBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottomBack.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBackLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBackLid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBackLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBackLidD.x = (Math.PI / 180) * 45),
  });
};

export const expandBox = (
  pivotBack,
  pivotGlueLid,
  pivotLeftLid,
  pivotLeftLid_d,
  pivotGroupLeft,
  pivotRightLid,
  pivotRightLidD,
  pivotGroupRight,
  pivotGroupTopBack,
  pivotTopBackLid,
  pivotTop,
  pivotTopFrontLid,
  pivotGroupBottomFront,
  pivotBottomFrontLid,
  pivotBottomFrontLidD,
  pivotGroupBottomBack,
  pivotBottomBackLid,
  pivotBottomBackLidD
) => {
  tween = gsap.timeline();
  tween.to(pivotBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivotLeftLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivotRightLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGroupRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupTopBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupTopBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopBackLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopBackLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotTopFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopFrontLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottomFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottomFront.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomFrontLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomFrontLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomFrontLidD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGroupBottomBack.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGroupBottomBack.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBackLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBackLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBottomBackLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomBackLidD.x = 0),
  });
};
