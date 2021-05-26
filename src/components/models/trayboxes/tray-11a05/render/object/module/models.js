import * as THREE from 'three';

export const getLRLidShape = (A, C) => {
  const lrLidShape = new THREE.Shape();
  lrLidShape.moveTo(0, 0);
  lrLidShape.lineTo(0, C);
  lrLidShape.lineTo((A * 0.25) | 0, C);
  lrLidShape.lineTo((A * 0.25) | 0, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape);

  return lrLid;
};

export const getLockFlapShape = (B, C) => {
  const lockFlapShape = new THREE.Shape();
  lockFlapShape.moveTo(0, 0);
  lockFlapShape.lineTo(0, (C * 0.3) | 0);
  lockFlapShape.lineTo(B, (C * 0.3) | 0);
  lockFlapShape.lineTo(B, 0);

  const lockFlap = new THREE.ShapeGeometry(lockFlapShape);

  return lockFlap;
};

export const getGlueFlapShape = (A, P) => {
  var glueFlapShape = new THREE.Shape();
  glueFlapShape.moveTo(0, 0);
  glueFlapShape.lineTo(A, 0);
  glueFlapShape.moveTo(0, 0);
  glueFlapShape.lineTo(A, 0);
  glueFlapShape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  glueFlapShape.lineTo(A / 10, -P);
  glueFlapShape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var glueFlap = new THREE.ShapeGeometry(glueFlapShape); // ฝากาว

  return glueFlap;
};

export const getPlaneASideShape = (A, B) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, B);
  planeASideShape.lineTo(A, B);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

/* #endregion */
/* #region  planeBSide */

export const getPlaneBSideShape = (C, B) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, B);
  planeBSideShape.lineTo(C, B);
  planeBSideShape.lineTo(C, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneCSideShape = (A, C) => {
  const planeCSideShape = new THREE.Shape();
  planeCSideShape.moveTo(0, 0);
  planeCSideShape.lineTo(0, C);
  planeCSideShape.lineTo(A, C);
  planeCSideShape.lineTo(A, 0);

  const planeCSide = new THREE.ShapeGeometry(planeCSideShape);

  return planeCSide;
};
