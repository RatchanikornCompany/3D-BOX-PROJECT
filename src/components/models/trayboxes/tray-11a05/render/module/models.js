import * as THREE from 'three';

export const getLRLidShape = (A, C) => {
  const lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, C);
  lr_lid_shape.lineTo((A * 0.25) | 0, C);
  lr_lid_shape.lineTo((A * 0.25) | 0, 0);

  const lr_lid = new THREE.ShapeGeometry(lr_lid_shape);

  return lr_lid;
};

export const getLockFlapShape = (B, C) => {
  const lock_flap_shape = new THREE.Shape();
  lock_flap_shape.moveTo(0, 0);
  lock_flap_shape.lineTo(0, (C * 0.3) | 0);
  lock_flap_shape.lineTo(B, (C * 0.3) | 0);
  lock_flap_shape.lineTo(B, 0);

  const lock_flap = new THREE.ShapeGeometry(lock_flap_shape);

  return lock_flap;
};

export const getGlueFlapShape = (A, P) => {
  var glue_flap_shape = new THREE.Shape();
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(P - P / 35),
    A - A / 10,
    -P
  );
  glue_flap_shape.lineTo(A / 10, -P);
  glue_flap_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var glue_flap = new THREE.ShapeGeometry(glue_flap_shape); // ฝากาว

  return glue_flap;
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
