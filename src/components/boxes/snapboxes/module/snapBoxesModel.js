import * as THREE from 'three';

export const getLidShape = (A, P) => {
  const llidShape = new THREE.Shape();
  llidShape.moveTo(0, 0);
  llidShape.lineTo(A, 0);
  llidShape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  llidShape.lineTo(A / 10, -P);
  llidShape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const lidCover = new THREE.ShapeGeometry(llidShape); // ฝาเสียบ

  return lidCover;
};

export const getGludLidShape = (C, P) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(C, 0);
  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(C, 0);
  glueLidShape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glueLidShape.lineTo(C / 10, -P);
  glueLidShape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};

export const getLRLidShape = (B, lengLRLib) => {
  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  // Front ....................................................
  lrLidShape.lineTo(0, (lengLRLib * 0.1) | 0);
  lrLidShape.lineTo(B * 0.05, (lengLRLib * 0.15) | 0);
  lrLidShape.lineTo(B * 0.15, (lengLRLib * 0.9) | 0);
  // Center ...................................................
  lrLidShape.lineTo(B * 0.2, lengLRLib);
  lrLidShape.lineTo(B, lengLRLib);
  // Rear......................................................
  lrLidShape.lineTo(B, 0);
  lrLidShape.lineTo(0, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
};

export const getLidShapeD = (A, B) => {
  const lidShapeD = new THREE.Shape();

  lidShapeD.moveTo(0, 0);
  lidShapeD.lineTo(0, (A * 0.47) | 0);
  lidShapeD.lineTo((B * 0.47) | 0, (A * 0.47) | 0);
  lidShapeD.lineTo((B * 0.47) | 0, (A * 0.29) | 0);
  lidShapeD.lineTo(B, 0);
  lidShapeD.lineTo(0, 0);

  const lidD = new THREE.ShapeGeometry(lidShapeD); // ลิ้นด้านล่าง

  return lidD;
};

export const getLRLidShapeD = (A, B) => {
  const lrLidShapeD = new THREE.Shape();

  lrLidShapeD.moveTo(0, 0);
  lrLidShapeD.lineTo(0, (A * 0.19) | 0);
  lrLidShapeD.lineTo((B * 0.06) | 0, (A * 0.19) | 0);

  const lrlidD = new THREE.ShapeGeometry(lrLidShapeD);

  return lrlidD;
};

export const getLidBottomShape = (A, B) => {
  const lidBottomShape = new THREE.Shape();

  lidBottomShape.moveTo(0, 0);
  lidBottomShape.lineTo(0, (B * 0.47) | 0);
  lidBottomShape.lineTo(A, (B * 0.47) | 0);
  lidBottomShape.lineTo(A);

  const lidBottom = new THREE.ShapeGeometry(lidBottomShape); // ฝาเสียบล่าง

  return lidBottom;
};

export const getLidBottomDShape = (A, B) => {
  const lidBottomDShape = new THREE.Shape();

  lidBottomDShape.moveTo(0, 0);
  lidBottomDShape.lineTo(0, (B * 0.19) | 0);
  lidBottomDShape.lineTo((A * 0.3) | 0, (B * 0.19) | 0);
  lidBottomDShape.lineTo((A * 0.3) | 0, 0);

  const lidBottomD = new THREE.ShapeGeometry(lidBottomDShape);

  return lidBottomD;
};

export const getLRLidBottomShape = (A, B) => {
  const lrlidBottomShape = new THREE.Shape();

  lrlidBottomShape.moveTo(0, 0);
  lrlidBottomShape.lineTo((A * 0.3) | 0, (B * 0.5) | 0);
  lrlidBottomShape.lineTo((A * 0.7) | 0, (B * 0.5) | 0);
  lrlidBottomShape.lineTo(A, 0);

  const lrlidBottom = new THREE.ShapeGeometry(lrlidBottomShape); // ตัวเสียบล่าง

  return lrlidBottom;
};

export const getLidBottomCoverShape = (B, A) => {
  let lidBottomCoverShape = new THREE.Shape();

  // lidBottomCoverShape.moveTo(0, 0);
  // lidBottomCoverShape.lineTo(0, (A * 0.42) | 0);
  // lidBottomCoverShape.lineTo((B * 0.2) | 0, (A * 0.42) | 0);
  // lidBottomCoverShape.lineTo((B * 0.2) | 0, 0);
  // lidBottomCoverShape.lineTo(0, 0);

  let lidBottomCover = new THREE.ShapeGeometry(lidBottomCoverShape); // ลิ้นเสียบล่าง

  return lidBottomCover;
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
