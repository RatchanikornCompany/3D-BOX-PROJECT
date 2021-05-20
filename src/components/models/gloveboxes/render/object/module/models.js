import * as THREE from 'three';

export const getLidCoverShape = (A, P) => {
  const lid_Cover_shape = new THREE.Shape();

  lid_Cover_shape.moveTo(0, 0);
  lid_Cover_shape.lineTo(A, 0);
  lid_Cover_shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(P - P / 35),
    A - A / 10,
    -P
  );
  lid_Cover_shape.lineTo(A / 10, -P);
  lid_Cover_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const lid_Cover = new THREE.ShapeGeometry(lid_Cover_shape); // ฝาเสียบ

  return lid_Cover;
};

export const getLidShape = (C, P) => {
  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_Lid_shape.lineTo(C / 10, -P);
  glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  const glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  return glue_Lid;
};

export const getFlaps = (A, B, plug, plugSlope) => {
  const flaps = new THREE.Shape();
  flaps.moveTo(0, 0);
  flaps.lineTo(0, 0);
  flaps.lineTo(2, A / 2);
  flaps.bezierCurveTo(2, A / 2, -1, A / 2 + plug - 4, 7, A / 2 + plug);

  flaps.bezierCurveTo(
    B - plugSlope - 2,
    A / 2 + plug,
    B - 4,
    A / 2 + plug + 3,
    B - plugSlope,
    A / 2
  );

  flaps.lineTo(B - plugSlope, A / 2);
  flaps.lineTo(B / 2, A / 2);
  flaps.lineTo(B - plugSlope, A / 2 - 3);
  flaps.lineTo(B - plugSlope, A / 2);
  flaps.lineTo(B, 0);
  flaps.lineTo(0, 0);

  const lr_Lid = new THREE.ShapeGeometry(flaps); // ลิ้นกันฝุ่น

  return lr_Lid;
};

export const getCover = (A, B) => {
  const cover = new THREE.Shape();
  cover.moveTo(0, 0);
  cover.lineTo(5, B - 10);
  cover.bezierCurveTo(5, B - 10, 5, B - 1, 20, B - 2);

  cover.lineTo(20, B - 2);
  cover.lineTo(A / 2 - 10, B);

  cover.lineTo(A / 2 + 10, B);
  cover.lineTo(A - 20, B - 2);

  cover.bezierCurveTo(A - 20, B - 2, A - 5, B - 1, A - 5, B - 10);

  cover.lineTo(A - 5, B - 10);
  cover.lineTo(A, 0);
  cover.lineTo(0, 0);

  const lr_lid_Bottom = new THREE.ShapeGeometry(cover); // ตัวเสียบล่าง

  return lr_lid_Bottom;
};

export const getCoverD = (A, B) => {
  const cover_d = new THREE.Shape();
  cover_d.moveTo((A * 0.42) | 0, 0);
  cover_d.lineTo((A * 0.42) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.34) | 0, (B * 0.084) | 0);

  cover_d.bezierCurveTo(
    (A * 0.34) | 0,
    (B * 0.084) | 0,
    (A * 0.316) | 0,
    (B * 0.3) | 0,
    (A * 0.42) | 0,
    (B * 0.25) | 0
  );

  cover_d.moveTo((A * 0.46) | 0, (B * 0.25) | 0);
  cover_d.moveTo((A * 0.54) | 0, (B * 0.25) | 0);

  cover_d.bezierCurveTo(
    (A * 0.58) | 0,
    (B * 0.25) | 0,
    (A * 0.684) | 0,
    (B * 0.3) | 0,
    (A * 0.66) | 0,
    (B * 0.084) | 0
  );

  cover_d.lineTo((A * 0.66) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.58) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.58) | 0, 0);

  const lid_Bottom_cover = new THREE.ShapeGeometry(cover_d); // ลิ้นเสียบล่าง

  return lid_Bottom_cover;
};
