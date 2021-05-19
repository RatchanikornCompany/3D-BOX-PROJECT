import * as THREE from 'three';

export const getLRLidALeftRightShape = (B, C) => {
  var lr_lid_A_left_right_shape = new THREE.Shape();
  lr_lid_A_left_right_shape.moveTo(0, 0);
  lr_lid_A_left_right_shape.lineTo((B * 0.067) | 0, C);
  lr_lid_A_left_right_shape.lineTo((B * 0.933) | 0, C);
  lr_lid_A_left_right_shape.lineTo(B, 0);

  var lr_lid_A_left_right = new THREE.ShapeGeometry(lr_lid_A_left_right_shape);

  return lr_lid_A_left_right;
};

export const getLidBLeftRightShape = (B, C) => {
  var lid_B_left_right_shape = new THREE.Shape();
  lid_B_left_right_shape.moveTo(0, 0);
  lid_B_left_right_shape.lineTo(0, C);
  lid_B_left_right_shape.lineTo((B * 0.167) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.167) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.333) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.333) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.667) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.667) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.833) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.833) | 0, C);
  lid_B_left_right_shape.lineTo(B, C);
  lid_B_left_right_shape.lineTo(B, 0);

  var lid_B_left_right = new THREE.ShapeGeometry(lid_B_left_right_shape);

  return lid_B_left_right;
};

export const getDustFlapShape = (B, C) => {
  var dust_flap_shape = new THREE.Shape();
  dust_flap_shape.moveTo(0, 0);
  dust_flap_shape.lineTo(0, C);
  dust_flap_shape.lineTo((B * 0.333) | 0, C);
  dust_flap_shape.lineTo((B * 0.333) | 0, 0);

  var dust_flap = new THREE.ShapeGeometry(dust_flap_shape);

  return dust_flap;
};

export const getDustFlapLidAShape = (B, C) => {
  var dust_flap_lid_A_shape = new THREE.Shape();
  dust_flap_lid_A_shape.moveTo(0, 0);
  dust_flap_lid_A_shape.lineTo(0, C);
  dust_flap_lid_A_shape.bezierCurveTo(
    0, // X1
    C, // Y1
    (B * 0.333) | 0, // X2
    C, // Y2
    (B * 0.333) | 0, // X3
    0 // Y3
  );
  dust_flap_lid_A_shape.lineTo((B * 0.333) | 0, 0);

  var dust_flap_lid = new THREE.ShapeGeometry(dust_flap_lid_A_shape);

  return dust_flap_lid;
};
