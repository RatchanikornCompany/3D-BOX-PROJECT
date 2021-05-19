import * as THREE from 'three';

export const getPlaneASideShape = (A, B) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, B);
  planeASideShape.lineTo(A, B);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneASideFlapShape = (A, B) => {
  const planeASideFlapShape = new THREE.Shape();
  planeASideFlapShape.moveTo(0, 0);
  planeASideFlapShape.lineTo(0, B);
  planeASideFlapShape.lineTo(A, B);
  planeASideFlapShape.lineTo(A, 0);

  const planeASideFlap = new THREE.ShapeGeometry(planeASideFlapShape);

  return planeASideFlap;
};

export const getPlaneALeftRightSideShape = (C, A) => {
  const planeALeftRightSideShape = new THREE.Shape();
  planeALeftRightSideShape.moveTo(0, 0);
  planeALeftRightSideShape.lineTo(0, A);
  planeALeftRightSideShape.lineTo(C, A);
  planeALeftRightSideShape.lineTo(C, 0);

  const planeALeftRightSide = new THREE.ShapeGeometry(planeALeftRightSideShape);

  return planeALeftRightSide;
};

export const getPlaneATopBottomShape = (C, B) => {
  const planeATopBottomSideShape = new THREE.Shape();
  planeATopBottomSideShape.moveTo(0, 0);
  planeATopBottomSideShape.lineTo(0, C);
  planeATopBottomSideShape.lineTo(B, C);
  planeATopBottomSideShape.lineTo(B, 0);

  const planeATopBottomSide = new THREE.ShapeGeometry(planeATopBottomSideShape);

  return planeATopBottomSide;
};

export const getPlaneALidShape = (C) => {
  const planeALidShape = new THREE.Shape();
  planeALidShape.moveTo(0, 0);
  planeALidShape.lineTo(0, C);
  planeALidShape.lineTo(C, C);
  planeALidShape.lineTo(C, 0);

  const planeALid = new THREE.ShapeGeometry(planeALidShape);

  return planeALid;
};

export const getPlaneBSideFlapShape = (A, C) => {
  const planeCSideFlapShape = new THREE.Shape();
  planeCSideFlapShape.moveTo(0, 0);
  planeCSideFlapShape.lineTo(0, C);
  planeCSideFlapShape.lineTo(A, C);
  planeCSideFlapShape.lineTo(A, 0);

  const planeCSideFlap = new THREE.ShapeGeometry(planeCSideFlapShape);

  return planeCSideFlap;
};

export const getGlueFlapShape = (A, P) => {
  const glueFlapShape = new THREE.Shape();
  glueFlapShape.moveTo(0, 0);
  glueFlapShape.lineTo(A, 0);
  glueFlapShape.moveTo(0, 0);
  glueFlapShape.lineTo(A, 0);
  glueFlapShape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  glueFlapShape.lineTo(A / 10, -P);
  glueFlapShape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const glueFlap = new THREE.ShapeGeometry(glueFlapShape); // ฝากาว

  return glueFlap;
};

export const getPlaneInnerATopBottomShape = (C, B) => {
  const planeInnerATopBottomShape = new THREE.Shape();
  planeInnerATopBottomShape.moveTo(0, 0);
  planeInnerATopBottomShape.lineTo(0, C / (200 / 6));
  planeInnerATopBottomShape.lineTo(B, C / (200 / 6));
  planeInnerATopBottomShape.lineTo(B, 0);

  const planeInnerATopBottom = new THREE.ShapeGeometry(
    planeInnerATopBottomShape
  );

  return planeInnerATopBottom;
};
