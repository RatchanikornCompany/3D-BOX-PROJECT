import * as THREE from 'three';

/* #region  //* ลิ้นบน */

export const getLidShape = (A, C) => {
  const lidShape = new THREE.Shape();
  lidShape.moveTo(0, 0);
  lidShape.lineTo(0, Math.round(C * (53 / 75)));
  lidShape.lineTo(A, Math.round(C * (53 / 75)));
  lidShape.lineTo(A, 0);

  const lidOnTop = new THREE.ShapeGeometry(lidShape);

  return lidOnTop;
};

/* #endregion */
/* #region  //* ลิ้นฝาเสียบบน */

export const getLRLidShape = (A, C) => {
  const lrLidShape = new THREE.Shape();
  lrLidShape.moveTo(0, 0);
  lrLidShape.lineTo(0, Math.round(C * (48 / 75)));
  lrLidShape.lineTo(Math.round(A * (20 / 175)), Math.round(C * (48 / 75)));
  lrLidShape.lineTo(Math.round(A * (20 / 175)), Math.round(C * (36 / 75)));
  lrLidShape.lineTo(Math.round(A * (25 / 175)), Math.round(C * (36 / 75)));
  lrLidShape.lineTo(Math.round(A * (40 / 175)), Math.round(C * (52 / 75)));
  lrLidShape.lineTo(Math.round(A * (135 / 175)), Math.round(C * (52 / 75)));
  lrLidShape.lineTo(Math.round(A * (150 / 175)), Math.round(C * (36 / 75)));
  lrLidShape.lineTo(Math.round(A * (155 / 175)), Math.round(C * (36 / 75)));
  lrLidShape.lineTo(Math.round(A * (155 / 175)), Math.round(C * (48 / 75)));
  lrLidShape.lineTo(A, Math.round(C * (48 / 75)));
  lrLidShape.lineTo(A, 0);
  lrLidShape.lineTo(Math.round(A * (140 / 175)), 0);
  lrLidShape.lineTo(Math.round(A * (140 / 175)), Math.round(C * (20 / 75)));
  lrLidShape.lineTo(Math.round(A * (35 / 175)), Math.round(C * (20 / 75)));
  lrLidShape.lineTo(Math.round(A * (35 / 175)), 0);

  const lrLidOnTop = new THREE.ShapeGeometry(lrLidShape);

  return lrLidOnTop;
};

/* #endregion */
/* #region  //* ลิ้นล่าง */

export const getLidBottomShape = (A, C) => {
  const lidBottomShape = new THREE.Shape();
  lidBottomShape.moveTo(0, 0);
  lidBottomShape.lineTo(Math.round(A * (5 / 175)), Math.round(C * (52 / 75)));
  lidBottomShape.lineTo(Math.round(A * (133 / 175)), Math.round(C * (52 / 75)));
  lidBottomShape.lineTo(A, 0);

  const lidBottom = new THREE.ShapeGeometry(lidBottomShape);

  return lidBottom;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่าง */

export const getLRLidBottomShape = (A, C) => {
  const lrLidBottomShape = new THREE.Shape();
  lrLidBottomShape.moveTo(0, Math.round(C * (40 / 75)));
  lrLidBottomShape.lineTo(0, Math.round(C * (40 / 75)));
  lrLidBottomShape.lineTo(
    Math.round(A * (14 / 175)),
    Math.round(C * (58 / 75))
  );
  lrLidBottomShape.lineTo(
    Math.round(A * (36 / 175)),
    Math.round(C * (58 / 75))
  );
  lrLidBottomShape.lineTo(Math.round(A * (36 / 175)), Math.round(C * (8 / 75)));
  lrLidBottomShape.lineTo(Math.round(A * (32 / 175)), 0);

  const lrLidBottom = new THREE.ShapeGeometry(lrLidBottomShape);

  return lrLidBottom;
};

/* #endregion */
/* #region  //* ตัวเสียบล่าง */

export const getLRLidBottomShapeD = (A, C) => {
  const lrLidBottomShapeD = new THREE.Shape();
  lrLidBottomShapeD.moveTo(0, 0);
  lrLidBottomShapeD.lineTo(
    Math.round(A * (2 / 175)),
    Math.round(C * (19 / 75))
  );
  lrLidBottomShapeD.lineTo(
    Math.round(A * (71 / 175)),
    Math.round(C * (19 / 75))
  );
  lrLidBottomShapeD.lineTo(
    Math.round(A * (82 / 175)),
    Math.round(C * (7 / 75))
  );
  lrLidBottomShapeD.lineTo(Math.round(A * (82 / 175)), 0);

  const lrLidBottomD = new THREE.ShapeGeometry(lrLidBottomShapeD);

  return lrLidBottomD;
};

/* #endregion */
/* #region  //* ลิ้นบนข้าง */

export const getLidCurveShape = (B, C) => {
  const lidCurveShape = new THREE.Shape();
  lidCurveShape.moveTo(0, 0);
  lidCurveShape.lineTo(Math.round(B * (30 / 105)), Math.round(C * (48 / 75)));
  lidCurveShape.bezierCurveTo(
    Math.round(B * (30 / 105)),
    Math.round(C * (48 / 75)),
    Math.round(B * (52 / 105)),
    Math.round(C * (65 / 75)),
    Math.round(B * (75 / 105)),
    Math.round(C * (48 / 75))
  );
  lidCurveShape.lineTo(Math.round(B * (-16 / 105)), Math.round(C * (48 / 75)));
  lidCurveShape.lineTo(B, 0);
  lidCurveShape.lineTo(Math.round(B * (53 / 105)), 0);
  lidCurveShape.lineTo(Math.round(B * (53 / 105)), Math.round(C * (48 / 75)));
  lidCurveShape.lineTo(Math.round(B * (50 / 105)), Math.round(C * (48 / 75)));
  lidCurveShape.lineTo(Math.round(B * (50 / 105)), 0);

  const lidCurve = new THREE.ShapeGeometry(lidCurveShape);

  return lidCurve;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่างข้าง */

export const getLidBottomCurveShape = (B, C) => {
  const lidBottomCurveShape = new THREE.Shape();
  lidBottomCurveShape.moveTo(0, 0);
  lidBottomCurveShape.lineTo(
    Math.round(B * (27 / 105)),
    Math.round(C * (42 / 75))
  );
  lidBottomCurveShape.lineTo(
    Math.round(B * (52 / 105)),
    Math.round(C * (42 / 75))
  );
  lidBottomCurveShape.lineTo(B, 0);

  const lidBottomCurve = new THREE.ShapeGeometry(lidBottomCurveShape);

  return lidBottomCurve;
};

/* #endregion */
/* #region  //* ฝาเสียบกาว */

export const getGlueLidShape = (C, G, gSlope) => {
  const glueLidShape = new THREE.Shape();
  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};
/* #endregion */
/* #region  //* planeASide */

export const getPlaneASide = (A, C) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, C);
  planeASideShape.lineTo(A, C);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

/* #endregion */
/* #region  //* planeBSide */

export const getPlaneBSide = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

/* #endregion */
