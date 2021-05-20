import * as THREE from 'three';

export const getPlaneASideShape = (A, C) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, C);
  planeASideShape.lineTo(A, C);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneBSideShape = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneTopBottomShape = (A, B, plugLength) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(plugLength, B);
  planeTopBottomShape.lineTo(plugLength, B * (49.5 / 50));
  planeTopBottomShape.lineTo(A - plugLength, B * (49.5 / 50));
  planeTopBottomShape.lineTo(A - plugLength, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};

export const getLidCover = (A, B, P, plugLength) => {
  let lid_shape = new THREE.Shape();

  lid_shape.moveTo(0, 0);
  lid_shape.bezierCurveTo(0, 0, 2, P - 2, plugLength + 5, P);
  lid_shape.lineTo(plugLength + 5, P);
  lid_shape.lineTo(A - (plugLength + 5), P);
  lid_shape.bezierCurveTo(A - (plugLength + 5), P, A - 2, P - 2, A, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.lineTo(A - plugLength, 0);
  lid_shape.lineTo(A - plugLength, B * (-0.5 / 50));
  lid_shape.lineTo(plugLength, B * (-0.5 / 50));
  lid_shape.lineTo(plugLength, 0);

  let lid_cover = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  return lid_cover;
};

export const getGlueLid = (C, G, gSlope) => {
  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(gSlope, G);
  glue_Lid_shape.lineTo(C - gSlope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  return glue_Lid;
};

export const getLRLid = (A, B, F) => {
  let lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, ((((A / 100) * F) / 100) * 20) | 0);
  lr_lid_shape.lineTo(((B / 100) * 6) | 0, ((((A / 100) * F) / 100) * 36) | 0);
  lr_lid_shape.bezierCurveTo(
    ((B / 100) * 6) | 0,
    ((((A / 100) * F) / 100) * 72) | 0,
    ((B / 100) * 12) | 0,
    ((((A / 100) * F) / 100) * 100) | 0,
    ((B / 100) * 39) | 0,
    ((((A / 100) * F) / 100) * 100) | 0
  );

  lr_lid_shape.lineTo(((B / 100) * 96) | 0, ((A / 100) * F) | 0);
  lr_lid_shape.lineTo(((B / 100) * 96) | 0, ((((A / 100) * F) / 100) * 7) | 0);
  lr_lid_shape.lineTo(B, 0);

  let lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  return lr_lid;
};
