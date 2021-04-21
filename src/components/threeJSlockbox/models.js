import * as THREE from 'three';

/* #region  //* ฝาเสียบ */

export const getLid = (A, P, plugSlope) => {
  let lidShape = new THREE.Shape();
  lidShape.moveTo(0, 0);
  lidShape.bezierCurveTo(0, 0, 2, P - 2, plugSlope + 5, P);
  lidShape.lineTo(A - plugSlope - 5, P);
  lidShape.bezierCurveTo(A - plugSlope - 5, P, A - 2, P - 2, A, 0);
  lidShape.lineTo(A, 0);

  let lid = new THREE.ShapeGeometry(lidShape); // ฝาเสียบ

  return lid;
};

/* #endregion */
/* #region  //* ฝาเสียบกาว */

export const getGlueLid = (C, G, gSlope) => {
  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(gSlope, G);
  glue_Lid_shape.lineTo(C - gSlope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  return glue_Lid;
};

/* #endregion */
/* #region  //* ลิ้นกันฝุ่น */

export const getLRLid = (A, B) => {
  let lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);

  lrLidShape.lineTo(0, ((((A / 100) * 30) / 100) * 15) | 0);
  lrLidShape.lineTo(((B / 100) * 6) | 0, ((((A / 100) * 30) / 100) * 25) | 0);
  lrLidShape.lineTo(((B / 100) * 13) | 0, ((((A / 100) * 30) / 100) * 63) | 0);

  lrLidShape.bezierCurveTo(
    ((B / 100) * 13) | 0,
    ((((A / 100) * 30) / 100) * 63) | 0,
    ((B / 100) * 18) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0,
    ((B / 100) * 33) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0
  );

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 100) | 0);

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 16) | 0);

  lrLidShape.lineTo(B, 0);

  let lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
};

/* #endregion */
/* #region  //TODO ลิ้นฝาล็อค */

export const getLRBottom = (A, B) => {
  let lr_Bottom_shape = new THREE.Shape();

  lr_Bottom_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Bottom_shape.lineTo((A * 0.02) | 0, (B * 0.39) | 0); // 0, 20
  // Center ...................................................
  lr_Bottom_shape.lineTo((A * 0.99) | 0, (B * 0.39) | 0); // 50, 20
  // Rear .....................................................
  lr_Bottom_shape.lineTo((A * 0.99) | 0, 0); // 50, 0

  let lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค

  return lr_Bottom;
};

/* #endregion */
/* #region  //TODO ฝาล็อค */

export const getLRLock = (A, B, R) => {
  let lr_Lock_shape = new THREE.Shape();

  lr_Lock_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo((A * 0.02) | 0, (B * 0.962) | 0);
  // Center ...................................................
  lr_Lock_shape.lineTo((A * 0.99) | 0, (B * 0.962) | 0);
  // Rear .....................................................
  lr_Lock_shape.lineTo((A * 0.99) | 0, 0);

  let hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo(A / 2 - R / 2, (B - 2) / 2); // 6, 25
  hole_Lock_shape.bezierCurveTo(
    A / 2 - R / 2, // 6
    (B - 2) / 2, // 25
    A / 2 - R / 2, // 6
    (B - 2 - R) / 2, // 5
    A / 2, // 26
    (B - 2 - R) / 2 // 5
  );
  hole_Lock_shape.bezierCurveTo(
    A / 2, // 26
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2) / 2 // 25
  );
  hole_Lock_shape.bezierCurveTo(
    (A + R) / 2, // 46
    (B - 2) / 2, // 25
    (A + R) / 2, // 46
    (B - 2 + R) / 2, // 45
    A / 2, // 26
    (B - 2 + R) / 2 // 45
  );
  hole_Lock_shape.bezierCurveTo(
    A / 2, // 26
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2) / 2 // 25
  );
  lr_Lock_shape.holes.push(hole_Lock_shape);

  let lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค

  return lr_Lock;
};

/* #endregion */
/* #region  //TODO ลิ้นกันฝุ่นฝาล็อค */

export const getLRLidLock = (B, LH) => {
  let lr_Lid_lock_shape = new THREE.Shape();

  lr_Lid_lock_shape.moveTo(0, -(LH * 0.05) | 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo((B * 0.2) | 0, (LH * 0.95) | 0); // 10, 20
  // Center ...................................................
  lr_Lid_lock_shape.lineTo((B * 0.885) | 0, (LH * 0.95) | 0); // 46, 20
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo((B * 0.962) | 0, -(LH * 0.05) | 0); // 50, 0

  let lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค

  return lr_Lid_lock;
};

/* #endregion */
/* #region  //TODO ตัวเสียบฝาล็อคบน */

export const getLRBottomLock = (A, LH) => {
  let lr_Bottom_lock_shape = new THREE.Shape();

  lr_Bottom_lock_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.116) | 0, LH);
  // Center ...................................................
  lr_Bottom_lock_shape.lineTo((A * 0.885) | 0, LH);
  // Rear .....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.99) | 0, 0);

  let lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคบน

  return lr_Bottom_lock;
};

/* #endregion */
/* #region  //* planeASide */

export const getPlaneASideShape = (A, C) => {
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

export const getPlaneBSideShape = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

/* #endregion */
/* #region  //* planeTopBottom */

export const getPlaneTopBottomShape = (A, B) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};

/* #endregion */
