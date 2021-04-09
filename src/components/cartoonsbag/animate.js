import gsap from 'gsap';

export const foldBox = (
  pivotBRightL,
  pivotATop,
  pivotSideBLeftTop,
  pivotSideBRightTop,
  pivotBLeftBottom,
  pivotBRightBottom,
  pivotABottomLeft,
  pivotABottomRight,
  pivotABottom,
  pivotBLeftR,
  pivotBLeftRTop,
  pivotBLeftRBottom,
  pivotBLeftLTop,
  pivotBLeftLBottom,
  pivotABack,
  pivotABackTop,
  pivotABackBottom,
  pivotABackBottomLeft,
  pivotABackBottomRight,
  pivotGlueTop,
  pivotGlueBottom,
  pivotGlueLid,
  getPivotBRightLEdges,
  getPivotATopEdges,
  getPivotSideBLeftTopEdges,
  getPivotSideBRightTopEdges,
  getPivotBLeftBottomEdges,
  getPivotBRightBottomEdges,
  getPivotABottomLeftEdges,
  getPivotABottomRightEdges,
  getPivotABottomEdges,
  getPivotBLeftREdges,
  getPivotBLeftRTopEdges,
  getPivotBLeftRBottomEdges,
  getPivotBLeftLTopEdges,
  getPivotBLeftLBottomEdges,
  getPivotABackEdges,
  getPivotABackTopEdges,
  getPivotABackBottomEdges,
  getPivotABackBottomLeftEdges,
  getPivotABackBottomRightEdges,
  getPivotGlueTopEdges,
  getPivotGlueBottomEdges,
  getPivotGlueLidEdges
) => {
  let tween = gsap.timeline();
  tween.to(pivotBRightL.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRightL.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBLeftTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBRightTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftBottom.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomLeft.x = (Math.PI / 180) * -179),
    z: (pivotABottomLeft.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomRight.x = (Math.PI / 180) * -179),
    z: (pivotABottomRight.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftR.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeftR.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRBottom.x = (Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLBottom.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottom.x = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomLeft.x = (Math.PI / 180) * 179),
    z: (pivotABackBottomLeft.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomRight.x = (Math.PI / 180) * 179),
    z: (pivotABackBottomRight.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueBottom.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = Math.PI / -2),
  });

  //Todo Edges

  tween = gsap.timeline();
  tween.to(getPivotBRightLEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBRightLEdges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotATopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotATopEdges.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(getPivotSideBLeftTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotSideBLeftTopEdges.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(getPivotSideBRightTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotSideBRightTopEdges.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftBottomEdges.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotBRightBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBRightBottomEdges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomLeftEdges.x = (Math.PI / 180) * -179),
    z: (getPivotABottomLeftEdges.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomRightEdges.x = (Math.PI / 180) * -179),
    z: (getPivotABottomRightEdges.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomEdges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftREdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBLeftREdges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftRTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftRTopEdges.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftRBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftRBottomEdges.x = (Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftLTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftLTopEdges.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftLBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftLBottomEdges.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotABackEdges.y = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackTopEdges.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomEdges.x = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomLeftEdges.x = (Math.PI / 180) * 179),
    z: (getPivotABackBottomLeftEdges.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomRightEdges.x = (Math.PI / 180) * 179),
    z: (getPivotABackBottomRightEdges.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueTopEdges.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueBottomEdges.x = Math.PI + (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLidEdges.y = Math.PI / -2),
  });
};

export const expandBox = (
  pivotBRightL,
  pivotATop,
  pivotSideBLeftTop,
  pivotSideBRightTop,
  pivotBLeftBottom,
  pivotBRightBottom,
  pivotABottomLeft,
  pivotABottomRight,
  pivotABottom,
  pivotBLeftR,
  pivotBLeftRTop,
  pivotBLeftRBottom,
  pivotBLeftLTop,
  pivotBLeftLBottom,
  pivotABack,
  pivotABackTop,
  pivotABackBottom,
  pivotABackBottomLeft,
  pivotABackBottomRight,
  pivotGlueTop,
  pivotGlueBottom,
  pivotGlueLid,
  getPivotBRightLEdges,
  getPivotATopEdges,
  getPivotSideBLeftTopEdges,
  getPivotSideBRightTopEdges,
  getPivotBLeftBottomEdges,
  getPivotBRightBottomEdges,
  getPivotABottomLeftEdges,
  getPivotABottomRightEdges,
  getPivotABottomEdges,
  getPivotBLeftREdges,
  getPivotBLeftRTopEdges,
  getPivotBLeftRBottomEdges,
  getPivotBLeftLTopEdges,
  getPivotBLeftLBottomEdges,
  getPivotABackEdges,
  getPivotABackTopEdges,
  getPivotABackBottomEdges,
  getPivotABackBottomLeftEdges,
  getPivotABackBottomRightEdges,
  getPivotGlueTopEdges,
  getPivotGlueBottomEdges,
  getPivotGlueLidEdges
) => {
  let tween = gsap.timeline();
  tween.to(pivotBRightL.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRightL.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBLeftTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBRightTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomLeft.x = 0),
    z: (pivotABottomLeft.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomRight.x = 0),
    z: (pivotABottomRight.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftR.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeftR.y = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftLBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftLBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomLeft.x = 0),
    z: (pivotABackBottomLeft.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotABackBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABackBottomRight.x = 0),
    z: (pivotABackBottomRight.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotGlueBottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = 0),
  });

  //Todo Edges

  tween = gsap.timeline();
  tween.to(getPivotBRightLEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBRightLEdges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotATopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotATopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotSideBLeftTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotSideBLeftTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotSideBRightTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotSideBRightTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftBottomEdges.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotBRightBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBRightBottomEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomLeftEdges.x = 0),
    z: (getPivotABottomLeftEdges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomRightEdges.x = 0),
    z: (getPivotABottomRightEdges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABottomEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftREdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBLeftREdges.y = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftRTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftRTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftRBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftRBottomEdges.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftLTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftLTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeftLBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBLeftLBottomEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotABackEdges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomLeftEdges.x = 0),
    z: (getPivotABackBottomLeftEdges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABackBottomRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotABackBottomRightEdges.x = 0),
    z: (getPivotABackBottomRightEdges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueTopEdges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGlueBottomEdges.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLidEdges.y = 0),
  });
};
