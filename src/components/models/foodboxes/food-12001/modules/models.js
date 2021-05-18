import * as THREE from 'three';

export const getLidALeftRightShape = (C, B) => {
  const lid_A_left_right_shape = new THREE.Shape();

  lid_A_left_right_shape.moveTo(0, 0);
  lid_A_left_right_shape.lineTo(0, B);
  lid_A_left_right_shape.lineTo(C, B);
  lid_A_left_right_shape.lineTo(C, 0);

  let hole_lid_A_left_shape = new THREE.Path();
  hole_lid_A_left_shape.moveTo(C * (24 / 40), B * (20 / 100));
  hole_lid_A_left_shape.lineTo(C * (25 / 40), B * (20 / 100));
  hole_lid_A_left_shape.lineTo(C * (15 / 40), B * (40 / 100));
  hole_lid_A_left_shape.lineTo(C * (14 / 40), B * (40 / 100));
  lid_A_left_right_shape.holes.push(hole_lid_A_left_shape);

  let hole_lid_A_right_shape = new THREE.Path();
  hole_lid_A_right_shape.moveTo(C * (24 / 40), B * (80 / 100));
  hole_lid_A_right_shape.lineTo(C * (25 / 40), B * (80 / 100));
  hole_lid_A_right_shape.lineTo(C * (15 / 40), B * (60 / 100));
  hole_lid_A_right_shape.lineTo(C * (14 / 40), B * (60 / 100));
  lid_A_left_right_shape.holes.push(hole_lid_A_right_shape);

  const lid_A_left_right = new THREE.ShapeGeometry(lid_A_left_right_shape);

  return lid_A_left_right;
};

export const getLidBTopBottomShape = (C) => {
  const lid_B_top_bottom_shape = new THREE.Shape();

  // lid_B_top_bottom_shape.moveTo(0, 0);
  // lid_B_top_bottom_shape.lineTo(0, C);
  // lid_B_top_bottom_shape.lineTo(Math.round(C / 2), C);
  // lid_B_top_bottom_shape.bezierCurveTo(
  //   Math.round(C * (25 / 40)),
  //   C,
  //   C,
  //   Math.round(C * (27 / 40)),
  //   Math.round(C / 2),
  //   Math.round(C * (17 / 40))
  // );
  // lid_B_top_bottom_shape.lineTo(C, Math.round(C * (10 / 40)));
  // lid_B_top_bottom_shape.lineTo(C, 0);

  lid_B_top_bottom_shape.moveTo(0, C);
  lid_B_top_bottom_shape.lineTo(((C / 100) * 25) | 0, C);
  lid_B_top_bottom_shape.lineTo(((C / 100) * 50) | 0, ((C / 100) * 50) | 0);
  lid_B_top_bottom_shape.bezierCurveTo(
    ((C / 100) * 63) | 0,
    ((C / 100) * 75) | 0,
    ((C / 100) * 88) | 0,
    ((C / 100) * 75) | 0,
    C,
    ((C / 100) * 50) | 0
  );
  lid_B_top_bottom_shape.lineTo(C, 0);
  lid_B_top_bottom_shape.lineTo(0, 0);

  const lid_B_top_bottom = new THREE.ShapeGeometry(lid_B_top_bottom_shape);

  return lid_B_top_bottom;
};

export const getLRLidATopShape = (B, C) => {
  const lr_lid_A_top_shape = new THREE.Shape();

  lr_lid_A_top_shape.moveTo(0, 0);
  lr_lid_A_top_shape.lineTo(C, 0);
  lr_lid_A_top_shape.lineTo(C * (38 / 40), B * (94 / 100));
  lr_lid_A_top_shape.bezierCurveTo(
    C * (37.2 / 40),
    B * (99.5 / 100),
    C * (36.4 / 40),
    B,
    C * (34 / 40),
    B
  );
  lr_lid_A_top_shape.lineTo(0, B);

  const lr_lid_A_top = new THREE.ShapeGeometry(lr_lid_A_top_shape);

  return lr_lid_A_top;
};

export const getGlueLidShape = (A, G, P) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(0, G - P);

  glueLidShape.bezierCurveTo(0, G - P, 0, G, P, G);

  glueLidShape.lineTo(A - P, G);

  glueLidShape.bezierCurveTo(A - P, G, A, G, A, G - P);
  glueLidShape.lineTo(A, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape);

  return glueLid;
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

export const getPlaneBSideShape = (A, C) => {
  const planeBSideShape = new THREE.Shape();

  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(A, C);
  planeBSideShape.lineTo(A, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};
