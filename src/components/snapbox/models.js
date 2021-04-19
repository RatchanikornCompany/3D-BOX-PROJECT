import * as THREE from 'three';

/* #region  ฝาเสียบ */

export const getLidCover = (A, P) => {
  let lid_shape = new THREE.Shape();

  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_shape.lineTo(A / 10, -P);
  lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  let lid_cover = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  return lid_cover;
};

/* #endregion */
/* #region  ฝาเสียบกาว */
export const getGlueLid = (C, G, g_slope) => {
  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_slope, G);
  glue_Lid_shape.lineTo(C - g_slope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  return glue_Lid;
};
/* #endregion */
/* #region  ลิ้นกันฝุ่นบน */

export const getLRLid = (B, F) => {
  let lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (F * 0.0938) | 0); //  0, 3
  lr_lid_shape.lineTo(B * 0.05, (F * 0.125) | 0); //  0, 4
  lr_lid_shape.lineTo(B * 0.15, (F * 0.875) | 0); //  0, 28
  // Center ...................................................
  lr_lid_shape.lineTo((B * 0.2) | 0, F);
  lr_lid_shape.lineTo(B, F);
  // Rear......................................................
  lr_lid_shape.lineTo(B, 0);

  let lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  return lr_lid;
};
/* #endregion */
/* #region  planeASide */

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
/* #region  planeBSide */

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
/* #region  planeBSide */

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
