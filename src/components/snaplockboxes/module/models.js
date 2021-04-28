import * as THREE from 'three';

/* #region  //* ลิ้นบน */

export const getLidShape = (A, C) => {
  let lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(0, Math.round(C * (53 / 75)));
  lid_shape.lineTo(A, Math.round(C * (53 / 75)));
  lid_shape.lineTo(A, 0);

  let lid_onTop = new THREE.ShapeGeometry(lid_shape);

  return lid_onTop;
};

/* #endregion */
/* #region  //* ลิ้นฝาเสียบบน */

export const getLRLidShape = (A, C) => {
  let lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, Math.round(C * (48 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (20 / 175)), Math.round(C * (48 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (20 / 175)), Math.round(C * (36 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (25 / 175)), Math.round(C * (36 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (40 / 175)), Math.round(C * (52 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (135 / 175)), Math.round(C * (52 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (150 / 175)), Math.round(C * (36 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (155 / 175)), Math.round(C * (36 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (155 / 175)), Math.round(C * (48 / 75)));
  lr_lid_shape.lineTo(A, Math.round(C * (48 / 75)));
  lr_lid_shape.lineTo(A, 0);
  lr_lid_shape.lineTo(Math.round(A * (140 / 175)), 0);
  lr_lid_shape.lineTo(Math.round(A * (140 / 175)), Math.round(C * (20 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (35 / 175)), Math.round(C * (20 / 75)));
  lr_lid_shape.lineTo(Math.round(A * (35 / 175)), 0);

  let lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);

  return lr_lid_onTop;
};

/* #endregion */
/* #region  //* ลิ้นล่าง */

export const getLidBottomShape = (A, C) => {
  let lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(Math.round(A * (5 / 175)), Math.round(C * (52 / 75)));
  lid_Bottom_shape.lineTo(
    Math.round(A * (133 / 175)),
    Math.round(C * (52 / 75))
  );
  lid_Bottom_shape.lineTo(A, 0);

  let lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);

  return lid_Bottom;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่าง */

export const getLRLidBottomShape = (A, C) => {
  let lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, Math.round(C * (40 / 75)));
  lr_lid_Bottom_shape.lineTo(0, Math.round(C * (40 / 75)));
  lr_lid_Bottom_shape.lineTo(
    Math.round(A * (14 / 175)),
    Math.round(C * (58 / 75))
  );
  lr_lid_Bottom_shape.lineTo(
    Math.round(A * (36 / 175)),
    Math.round(C * (58 / 75))
  );
  lr_lid_Bottom_shape.lineTo(
    Math.round(A * (36 / 175)),
    Math.round(C * (8 / 75))
  );
  lr_lid_Bottom_shape.lineTo(Math.round(A * (32 / 175)), 0);

  let lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape);

  return lr_lid_Bottom;
};

/* #endregion */
/* #region  //* ตัวเสียบล่าง */

export const getLRLidBottomShapeD = (A, C) => {
  let lr_lid_Bottom_shape_d = new THREE.Shape();
  lr_lid_Bottom_shape_d.moveTo(0, 0);
  lr_lid_Bottom_shape_d.lineTo(
    Math.round(A * (2 / 175)),
    Math.round(C * (19 / 75))
  );
  lr_lid_Bottom_shape_d.lineTo(
    Math.round(A * (71 / 175)),
    Math.round(C * (19 / 75))
  );
  lr_lid_Bottom_shape_d.lineTo(
    Math.round(A * (82 / 175)),
    Math.round(C * (7 / 75))
  );
  lr_lid_Bottom_shape_d.lineTo(Math.round(A * (82 / 175)), 0);

  let lr_lid_Bottom_d = new THREE.ShapeGeometry(lr_lid_Bottom_shape_d);

  return lr_lid_Bottom_d;
};

/* #endregion */
/* #region  //* ลิ้นบนข้าง */

export const getLidCurveShape = (B, C) => {
  let lid_curve_shape = new THREE.Shape();
  lid_curve_shape.moveTo(0, 0);
  lid_curve_shape.lineTo(Math.round(B * (30 / 105)), Math.round(C * (48 / 75)));
  lid_curve_shape.bezierCurveTo(
    Math.round(B * (30 / 105)),
    Math.round(C * (48 / 75)),
    Math.round(B * (52 / 105)),
    Math.round(C * (65 / 75)),
    Math.round(B * (75 / 105)),
    Math.round(C * (48 / 75))
  );
  lid_curve_shape.lineTo(
    Math.round(B * (-16 / 105)),
    Math.round(C * (48 / 75))
  );
  lid_curve_shape.lineTo(B, 0);
  lid_curve_shape.lineTo(Math.round(B * (53 / 105)), 0);
  lid_curve_shape.lineTo(Math.round(B * (53 / 105)), Math.round(C * (48 / 75)));
  lid_curve_shape.lineTo(Math.round(B * (50 / 105)), Math.round(C * (48 / 75)));
  lid_curve_shape.lineTo(Math.round(B * (50 / 105)), 0);

  let lid_curve = new THREE.ShapeGeometry(lid_curve_shape);

  return lid_curve;
};

/* #endregion */
/* #region  //* ลิ้นเสียบล่างข้าง */

export const getLidBottomCurveShape = (B, C) => {
  let lid_bottom_curve_shape = new THREE.Shape();
  lid_bottom_curve_shape.moveTo(0, 0);
  lid_bottom_curve_shape.lineTo(
    Math.round(B * (27 / 105)),
    Math.round(C * (42 / 75))
  );
  lid_bottom_curve_shape.lineTo(
    Math.round(B * (52 / 105)),
    Math.round(C * (42 / 75))
  );
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
