import * as THREE from 'three';

export const getLidShape = (A, P) => {
  const lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_shape.lineTo(A / 10, -P);
  lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const lid_cover = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  return lid_cover;
};

export const getGludLidShape = (C, P) => {
  const glue_lid_shape = new THREE.Shape();

  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_lid_shape.lineTo(C / 10, -P);
  glue_lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  const glue_lid = new THREE.ShapeGeometry(glue_lid_shape); // ฝาเสียบกาว

  return glue_lid;
};

export const getLRLidShape = (B, leng_lr_lib) => {
  const lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (leng_lr_lib * 0.1) | 0);
  lr_lid_shape.lineTo(B * 0.05, (leng_lr_lib * 0.15) | 0);
  lr_lid_shape.lineTo(B * 0.15, (leng_lr_lib * 0.9) | 0);
  // Center ...................................................
  lr_lid_shape.lineTo(B * 0.2, leng_lr_lib);
  lr_lid_shape.lineTo(B, leng_lr_lib);
  // Rear......................................................
  lr_lid_shape.lineTo(B, 0);
  lr_lid_shape.lineTo(0, 0);

  const lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  return lr_lid;
};

export const getLidShapeD = (A, B) => {
  const lid_shape_d = new THREE.Shape();

  lid_shape_d.moveTo(0, 0);
  lid_shape_d.lineTo(0, (A * 0.47) | 0);
  lid_shape_d.lineTo((B * 0.47) | 0, (A * 0.47) | 0);
  lid_shape_d.lineTo((B * 0.47) | 0, (A * 0.29) | 0);
  lid_shape_d.lineTo(B, 0);
  lid_shape_d.lineTo(0, 0);

  const lid_d = new THREE.ShapeGeometry(lid_shape_d); // ลิ้นด้านล่าง

  return lid_d;
};

export const getLRLidShapeD = (A, B) => {
  const lr_lid_shape_d = new THREE.Shape();

  lr_lid_shape_d.moveTo(0, 0);
  lr_lid_shape_d.lineTo(0, (A * 0.19) | 0);
  lr_lid_shape_d.lineTo((B * 0.06) | 0, (A * 0.19) | 0);

  const lr_lid_d = new THREE.ShapeGeometry(lr_lid_shape_d);

  return lr_lid_d;
};

export const getLidBottomShape = (A, B) => {
  const lid_bottom_shape = new THREE.Shape();

  lid_bottom_shape.moveTo(0, 0);
  lid_bottom_shape.lineTo(0, (B * 0.47) | 0);
  lid_bottom_shape.lineTo(A, (B * 0.47) | 0);
  lid_bottom_shape.lineTo(A);

  const lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape); // ฝาเสียบล่าง

  return lid_bottom;
};

export const getLidBottomDShape = (A, B) => {
  const lid_Bottom_d_shape = new THREE.Shape();

  lid_Bottom_d_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, (B * 0.19) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.3) | 0, (B * 0.19) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.3) | 0, 0);

  const lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape);

  return lid_Bottom_d;
};

export const getLRLidBottomShape = (A, B) => {
  const lr_lid_Bottom_shape = new THREE.Shape();

  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo((A * 0.3) | 0, (B * 0.5) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.7) | 0, (B * 0.5) | 0);
  lr_lid_Bottom_shape.lineTo(A, 0);

  const lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ตัวเสียบล่าง

  return lr_lid_Bottom;
};

export const getLidBottomCoverShape = (B, A) => {
  let lid_bottom_cover_shape = new THREE.Shape();

  // lid_bottom_cover_shape.moveTo(0, 0);
  // lid_bottom_cover_shape.lineTo(0, (A * 0.42) | 0);
  // lid_bottom_cover_shape.lineTo((B * 0.2) | 0, (A * 0.42) | 0);
  // lid_bottom_cover_shape.lineTo((B * 0.2) | 0, 0);
  // lid_bottom_cover_shape.lineTo(0, 0);

  let lid_bottom_cover = new THREE.ShapeGeometry(lid_bottom_cover_shape); // ลิ้นเสียบล่าง

  return lid_bottom_cover;
};

export const getPlaneTopBottomShape = (A, B) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};
