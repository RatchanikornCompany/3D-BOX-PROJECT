import * as THREE from 'three';

/* #region  //* ลิ้นบน */

export const getLidShape = (A, C) => {
  let lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(0, (C * 0.707) | 0);
  lid_shape.lineTo(A, (C * 0.707) | 0);
  lid_shape.lineTo(A, 0);

  let lid_onTop = new THREE.ShapeGeometry(lid_shape);

  return lid_onTop;
};

/* #endregion */
/* #region  //* ลิ้นฝาเสียบบน */

export const getLRLidShape = (A, C) => {
  let lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.1143) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.1143) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.143) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.23) | 0, (C * 0.694) | 0);
  lr_lid_shape.lineTo((A * 0.772) | 0, (C * 0.694) | 0);
  lr_lid_shape.lineTo((A * 0.858) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.886) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.886) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, 0);
  lr_lid_shape.lineTo((A * 0.8) | 0, 0);
  lr_lid_shape.lineTo((A * 0.8) | 0, (C * 0.267) | 0);
  lr_lid_shape.lineTo((A * 0.2) | 0, (C * 0.267) | 0);
  lr_lid_shape.lineTo((A * 0.2) | 0, 0);

  let lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);

  return lr_lid_onTop;
};

/* #endregion */
/* #region  //* ลิ้นล่าง */

export const getLidBottomShape = (A, C) => {
  let lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo((A * 0.0286) | 0, C * 0.7);
  lid_Bottom_shape.lineTo((A * 0.76) | 0, C * 0.7);
  lid_Bottom_shape.lineTo(A, 0);

  let lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);

  return lid_Bottom;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่าง */

export const getLRLidBottomShape = (A, C) => {
  let lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, (C * 0.534) | 0);
  lr_lid_Bottom_shape.lineTo(0, (C * 0.534) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.08) | 0, (C * 0.774) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.206) | 0, (C * 0.774) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.206) | 0, (C * 0.107) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.183) | 0, 0);

  let lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape);

  return lr_lid_Bottom;
};

/* #endregion */
/* #region  //* ตัวเสียบล่าง */

export const getLRLidBottomShapeD = (A, C) => {
  let lr_lid_Bottom_shape_d = new THREE.Shape();
  lr_lid_Bottom_shape_d.moveTo(0, 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.012) | 0, (C * 0.256) | 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.41) | 0, (C * 0.256) | 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, (C * 0.1) | 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, 0);

  let lr_lid_Bottom_d = new THREE.ShapeGeometry(lr_lid_Bottom_shape_d);

  return lr_lid_Bottom_d;
};

/* #endregion */
/* #region  //* ลิ้นบนข้าง */

export const getLidCurveShape = (B, C) => {
  let lid_curve_shape = new THREE.Shape();
  lid_curve_shape.moveTo(0, 0);
  lid_curve_shape.lineTo((B * 0.286) | 0, (C * 0.64) | 0);
  lid_curve_shape.bezierCurveTo(
    (B * 0.286) | 0,
    (C * 0.64) | 0,
    (B * 0.496) | 0,
    (C * 0.867) | 0,
    B * 0.715,
    (C * 0.64) | 0
  );
  lid_curve_shape.lineTo((B * -0.1524) | 0, (C * 0.64) | 0);
  lid_curve_shape.lineTo(B, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, (C * 0.64) | 0);
  lid_curve_shape.lineTo((B * 0.477) | 0, (C * 0.64) | 0);
  lid_curve_shape.lineTo((B * 0.477) | 0, 0);

  let lid_curve = new THREE.ShapeGeometry(lid_curve_shape);

  return lid_curve;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่างข้าง */

export const getLidBottomCurveShape = (B, C) => {
  let lid_bottom_curve_shape = new THREE.Shape();
  lid_bottom_curve_shape.moveTo(0, 0);
  lid_bottom_curve_shape.lineTo((B * 0.258) | 0, (C * 0.56) | 0);
  lid_bottom_curve_shape.lineTo((B * 0.496) | 0, (C * 0.56) | 0);
  lid_bottom_curve_shape.lineTo(B, 0);

  let lid_bottom_curve = new THREE.ShapeGeometry(lid_bottom_curve_shape);

  return lid_bottom_curve;
};

/* #endregion */
/* #region  //* ฝาเสียบกาว */

export const getGlueLidShape = (C, G, gSlope) => {
  let glue_lid_shape = new THREE.Shape();
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(gSlope, G);
  glue_lid_shape.lineTo(C - gSlope, G);
  glue_lid_shape.lineTo(C, 0);

  let glue_lid = new THREE.ShapeGeometry(glue_lid_shape); // ฝาเสียบกาว

  return glue_lid;
};
/* #endregion */
/* #region  //* planeASide */

export const getPlaneASide = (A, C) => {
  let plane_A_Side_shape = new THREE.Shape();
  plane_A_Side_shape.moveTo(0, 0);
  plane_A_Side_shape.lineTo(0, C);
  plane_A_Side_shape.lineTo(A, C);
  plane_A_Side_shape.lineTo(A, 0);

  let plane_A_side = new THREE.ShapeGeometry(plane_A_Side_shape);

  return plane_A_side;
};

/* #endregion */
/* #region  //* planeBSide */

export const getPlaneBSide = (B, C) => {
  let plane_B_Side_shape = new THREE.Shape();
  plane_B_Side_shape.moveTo(0, 0);
  plane_B_Side_shape.lineTo(0, C);
  plane_B_Side_shape.lineTo(B, C);
  plane_B_Side_shape.lineTo(B, 0);

  let plane_B_side = new THREE.ShapeGeometry(plane_B_Side_shape);

  return plane_B_side;
};

/* #endregion */
