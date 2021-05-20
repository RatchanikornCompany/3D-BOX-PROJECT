import * as THREE from 'three';

export const getPlaneAShape = (A, C) => {
  const plane_A_shape = new THREE.Shape();
  plane_A_shape.moveTo(0, 0);
  plane_A_shape.lineTo(0, (C * 0.667) | 0); // 0, 20
  plane_A_shape.bezierCurveTo(
    0,
    (C * 0.667) | 0, // 20
    0,
    C, // 30
    (A * 0.046) | 0, // 10
    C // 30
  );
  plane_A_shape.lineTo((A * 0.955) | 0, C); // 210, 30
  plane_A_shape.bezierCurveTo(
    (A * 0.955) | 0, // 210
    C, // 30
    A, // 220
    C, // 30
    A, //220
    (C * 0.667) | 0 // 20
  );
  plane_A_shape.lineTo(A, 0); // 220

  const hole_plane_A_shape = new THREE.Path();
  hole_plane_A_shape.moveTo((A * 0.464) | 0, 0); // 92, 0
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    0, // 0
    (A * 0.464) | 0, // 102
    (C * 0.267) | 0, // 8
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0 // 8
  );
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    0 // 0
  );
  plane_A_shape.holes.push(hole_plane_A_shape);

  const plane_A = new THREE.ShapeGeometry(plane_A_shape); // ฝาบน

  return plane_A;
};

export const getPlaneATopShape = (A, C) => {
  const plane_A_top_shape = new THREE.Shape();
  plane_A_top_shape.moveTo(0, 0);
  plane_A_top_shape.lineTo(0, C);
  plane_A_top_shape.lineTo(A, C);
  plane_A_top_shape.lineTo(A, 0);

  const hole_plane_A_top_shape = new THREE.Path();
  hole_plane_A_top_shape.moveTo(72, 15); // 72, 15
  hole_plane_A_top_shape.bezierCurveTo(
    72, // 72
    15, // 26
    72, // 72
    24, // 24
    80, // 80
    24 // 24
  );
  hole_plane_A_top_shape.bezierCurveTo(
    80, // 80
    24, // 24
    88, // 88
    24, // 24
    88, // 88
    15 // 15
  );
  hole_plane_A_top_shape.bezierCurveTo(
    88, // 88
    15, // 15
    88, // 88
    6, // 6
    80, // 80
    6 // 6
  );
  hole_plane_A_top_shape.bezierCurveTo(
    80, // 80
    6, // 6
    72, // 72
    6, // 6
    72, // 72
    15 // 15
  );
  plane_A_top_shape.holes.push(hole_plane_A_top_shape);

  const hole_2_plane_A_top_shape = new THREE.Path();
  hole_2_plane_A_top_shape.moveTo(132, 15); // 132, 15
  hole_2_plane_A_top_shape.bezierCurveTo(
    132, // 132
    15, // 26
    132, // 132
    24, // 24
    140, // 140
    24 // 24
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    140, // 140
    24, // 24
    148, // 148
    24, // 24
    148, // 148
    15 // 15
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    148, // 148
    15, // 15
    148, // 148
    6, // 6
    140, // 140
    6 // 6
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    140, // 140
    6, // 6
    132, // 132
    6, // 6
    132, // 132
    15 // 15
  );
  plane_A_top_shape.holes.push(hole_2_plane_A_top_shape);

  const plane_A_top = new THREE.ShapeGeometry(plane_A_top_shape);

  return plane_A_top;
};

export const getPlaneBShape = (C, B) => {
  const plane_B_shape = new THREE.Shape();
  plane_B_shape.moveTo(0, 0);
  plane_B_shape.lineTo(0, B); // 220
  plane_B_shape.lineTo((C * 0.667) | 0, B); // 20, 220
  plane_B_shape.bezierCurveTo(
    (C * 0.667) | 0, // 20
    B, // 220
    C, // 30
    B, // 220
    C, // 30
    (B * 0.955) | 0 // 210
  );
  plane_B_shape.lineTo(C, 0);

  const plane_B = new THREE.ShapeGeometry(plane_B_shape); // ฝาข้าง

  return plane_B;
};

export const getLidBottomShape = (A, C) => {
  const lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, C); // 0, 30
  lid_Bottom_shape.lineTo(A, C); // 220, 30
  lid_Bottom_shape.lineTo(A, 0); // 220, 0

  const hole_lid_Bottom_shape = new THREE.Path();
  hole_lid_Bottom_shape.moveTo((A * 0.464) | 0, C); // 102, 30
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lid_Bottom_shape.holes.push(hole_lid_Bottom_shape);

  const lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape); // ฝาล่าง (ถ่อนบน)

  return lid_Bottom;
};

export const getLidBottomDShape = (A, C) => {
  const lid_Bottom_d_shape = new THREE.Shape();
  lid_Bottom_d_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, C); // 0, 30
  lid_Bottom_d_shape.lineTo(A, C); // 220, 30
  lid_Bottom_d_shape.lineTo(A, 0); // 220, 0

  const hole_lid_Bottom_d_shape = new THREE.Path();
  hole_lid_Bottom_d_shape.moveTo((A * 0.464) | 0, C); // 102, 30
  hole_lid_Bottom_d_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  hole_lid_Bottom_d_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lid_Bottom_d_shape.holes.push(hole_lid_Bottom_d_shape);

  const lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape); // ฝาล่าง (ถ่อนล่าง)

  return lid_Bottom_d;
};

export const getLRLidBottom = (A, C) => {
  const lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo(0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, 0);

  const lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ลิ้นฝาล่าง

  return lr_lid_Bottom;
};

export const getLRLidShape = (C, leng_lr_lib) => {
  const lr_Lid_shape = new THREE.Shape(); // ลิ้นฝาเสียบล่าง
  lr_Lid_shape.moveTo(0, 0);
  lr_Lid_shape.lineTo(0, (leng_lr_lib * 0.455) | 0); // 0, 30
  lr_Lid_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.455) | 0); // 25, 30
  lr_Lid_shape.lineTo(C, 15); // 30, 15
  lr_Lid_shape.lineTo(C, 0); // 30, 0

  const lr_Lid = new THREE.ShapeGeometry(lr_Lid_shape); // ลิ้นฝาเสียบบน

  return lr_Lid;
};

export const getLRLidDShape = (C, leng_lr_lib) => {
  const lr_Lid_d_shape = new THREE.Shape(); // ลิ้นฝาเสียบบน
  lr_Lid_d_shape.moveTo(0, 0); // 0, 0
  lr_Lid_d_shape.lineTo(0, (leng_lr_lib * 0.54) | 0); // 0, 35
  lr_Lid_d_shape.lineTo((C * 0.067) | 0, (leng_lr_lib * 0.788) | 0); // 2, 52
  lr_Lid_d_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.788) | 0); // 25, 52
  lr_Lid_d_shape.lineTo(C, (leng_lr_lib * 0.455) | 0); // 30, 30
  lr_Lid_d_shape.lineTo(C, 0); // 30, 0

  const lr_Lid_d = new THREE.ShapeGeometry(lr_Lid_d_shape); // ลิ้นฝาเสียบล่าง

  return lr_Lid_d;
};
