import * as THREE from 'three';

export const getPlaneAShape = (A, C) => {
  const planeAShape = new THREE.Shape();
  planeAShape.moveTo(0, 0);
  planeAShape.lineTo(0, (C * 0.667) | 0); // 0, 20
  planeAShape.bezierCurveTo(
    0,
    (C * 0.667) | 0, // 20
    0,
    C, // 30
    (A * 0.046) | 0, // 10
    C // 30
  );
  planeAShape.lineTo((A * 0.955) | 0, C); // 210, 30
  planeAShape.bezierCurveTo(
    (A * 0.955) | 0, // 210
    C, // 30
    A, // 220
    C, // 30
    A, //220
    (C * 0.667) | 0 // 20
  );
  planeAShape.lineTo(A, 0); // 220

  const holePlaneAShape = new THREE.Path();
  holePlaneAShape.moveTo((A * 0.464) | 0, 0); // 92, 0
  holePlaneAShape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    0, // 0
    (A * 0.464) | 0, // 102
    (C * 0.267) | 0, // 8
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0 // 8
  );
  holePlaneAShape.bezierCurveTo(
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    0 // 0
  );
  planeAShape.holes.push(holePlaneAShape);

  const planeA = new THREE.ShapeGeometry(planeAShape); // ฝาบน

  return planeA;
};

export const getPlaneATopShape = (A, C) => {
  const planeATopShape = new THREE.Shape();
  planeATopShape.moveTo(0, 0);
  planeATopShape.lineTo(0, C);
  planeATopShape.lineTo(A, C);
  planeATopShape.lineTo(A, 0);

  const holePlaneATopShape = new THREE.Path();
  holePlaneATopShape.moveTo(72, 15); // 72, 15
  holePlaneATopShape.bezierCurveTo(
    72, // 72
    15, // 26
    72, // 72
    24, // 24
    80, // 80
    24 // 24
  );
  holePlaneATopShape.bezierCurveTo(
    80, // 80
    24, // 24
    88, // 88
    24, // 24
    88, // 88
    15 // 15
  );
  holePlaneATopShape.bezierCurveTo(
    88, // 88
    15, // 15
    88, // 88
    6, // 6
    80, // 80
    6 // 6
  );
  holePlaneATopShape.bezierCurveTo(
    80, // 80
    6, // 6
    72, // 72
    6, // 6
    72, // 72
    15 // 15
  );
  planeATopShape.holes.push(holePlaneATopShape);

  const holesPlaneATopShape = new THREE.Path();
  holesPlaneATopShape.moveTo(132, 15); // 132, 15
  holesPlaneATopShape.bezierCurveTo(
    132, // 132
    15, // 26
    132, // 132
    24, // 24
    140, // 140
    24 // 24
  );
  holesPlaneATopShape.bezierCurveTo(
    140, // 140
    24, // 24
    148, // 148
    24, // 24
    148, // 148
    15 // 15
  );
  holesPlaneATopShape.bezierCurveTo(
    148, // 148
    15, // 15
    148, // 148
    6, // 6
    140, // 140
    6 // 6
  );
  holesPlaneATopShape.bezierCurveTo(
    140, // 140
    6, // 6
    132, // 132
    6, // 6
    132, // 132
    15 // 15
  );
  planeATopShape.holes.push(holesPlaneATopShape);

  const planeATop = new THREE.ShapeGeometry(planeATopShape);

  return planeATop;
};

export const getPlaneBShape = (C, B) => {
  const planeBShape = new THREE.Shape();
  planeBShape.moveTo(0, 0);
  planeBShape.lineTo(0, B); // 220
  planeBShape.lineTo((C * 0.667) | 0, B); // 20, 220
  planeBShape.bezierCurveTo(
    (C * 0.667) | 0, // 20
    B, // 220
    C, // 30
    B, // 220
    C, // 30
    (B * 0.955) | 0 // 210
  );
  planeBShape.lineTo(C, 0);

  const planeB = new THREE.ShapeGeometry(planeBShape); // ฝาข้าง

  return planeB;
};

export const getLidBottomShape = (A, C) => {
  const lidBottomShape = new THREE.Shape();
  lidBottomShape.moveTo(0, 0);
  lidBottomShape.lineTo(0, C); // 0, 30
  lidBottomShape.lineTo(A, C); // 220, 30
  lidBottomShape.lineTo(A, 0); // 220, 0

  const holeLidBottomShape = new THREE.Path();
  holeLidBottomShape.moveTo((A * 0.464) | 0, C); // 102, 30
  holeLidBottomShape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  holeLidBottomShape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lidBottomShape.holes.push(holeLidBottomShape);

  const lidBottom = new THREE.ShapeGeometry(lidBottomShape); // ฝาล่าง (ถ่อนบน)

  return lidBottom;
};

export const getLidBottomDShape = (A, C) => {
  const lidBottomDShape = new THREE.Shape();
  lidBottomDShape.moveTo(0, 0);
  lidBottomDShape.lineTo(0, C); // 0, 30
  lidBottomDShape.lineTo(A, C); // 220, 30
  lidBottomDShape.lineTo(A, 0); // 220, 0

  const holeLidBottomDShape = new THREE.Path();
  holeLidBottomDShape.moveTo((A * 0.464) | 0, C); // 102, 30
  holeLidBottomDShape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  holeLidBottomDShape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lidBottomDShape.holes.push(holeLidBottomDShape);

  const lidBottomD = new THREE.ShapeGeometry(lidBottomDShape); // ฝาล่าง (ถ่อนล่าง)

  return lidBottomD;
};

export const getLRLidBottom = (A, C) => {
  const lrLidBottomShape = new THREE.Shape();
  lrLidBottomShape.moveTo(0, 0);
  lrLidBottomShape.lineTo(0, (C * 0.167) | 0);
  lrLidBottomShape.lineTo((A * 0.182) | 0, (C * 0.167) | 0);
  lrLidBottomShape.lineTo((A * 0.182) | 0, 0);

  const lrLidBottom = new THREE.ShapeGeometry(lrLidBottomShape); // ลิ้นฝาล่าง

  return lrLidBottom;
};

export const getLRLidShape = (C, lengLRLib) => {
  const lrLidShape = new THREE.Shape(); // ลิ้นฝาเสียบล่าง
  lrLidShape.moveTo(0, 0);
  lrLidShape.lineTo(0, (lengLRLib * 0.455) | 0); // 0, 30
  lrLidShape.lineTo((C * 0.834) | 0, (lengLRLib * 0.455) | 0); // 25, 30
  lrLidShape.lineTo(C, 15); // 30, 15
  lrLidShape.lineTo(C, 0); // 30, 0

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นฝาเสียบบน

  return lrLid;
};

export const getLRLidDShape = (C, lengLRLib) => {
  const lrLidDShape = new THREE.Shape(); // ลิ้นฝาเสียบบน
  lrLidDShape.moveTo(0, 0); // 0, 0
  lrLidDShape.lineTo(0, (lengLRLib * 0.54) | 0); // 0, 35
  lrLidDShape.lineTo((C * 0.067) | 0, (lengLRLib * 0.788) | 0); // 2, 52
  lrLidDShape.lineTo((C * 0.834) | 0, (lengLRLib * 0.788) | 0); // 25, 52
  lrLidDShape.lineTo(C, (lengLRLib * 0.455) | 0); // 30, 30
  lrLidDShape.lineTo(C, 0); // 30, 0

  const lrLidD = new THREE.ShapeGeometry(lrLidDShape); // ลิ้นฝาเสียบล่าง

  return lrLidD;
};
