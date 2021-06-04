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

export const getPlaneTopBottomShape = (A, B) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};

export const getPlaneBottomShape = (A, B) => {
  const planeBottomShape = new THREE.Shape();
  planeBottomShape.moveTo(0, 0);
  planeBottomShape.lineTo(0, -B);
  planeBottomShape.lineTo(A, -B);
  planeBottomShape.lineTo(A, 0);

  const planeBottom = new THREE.ShapeGeometry(planeBottomShape);

  return planeBottom;
};

export const getLid = (A, P, plugSlope) => {
  const lidShape = new THREE.Shape();
  lidShape.moveTo(0, 0);
  lidShape.bezierCurveTo(0, 0, 2, P - 2, plugSlope + 5, P);
  lidShape.lineTo(A - plugSlope - 5, P);
  lidShape.bezierCurveTo(A - plugSlope - 5, P, A - 2, P - 2, A, 0);
  lidShape.lineTo(A, 0);

  const lid = new THREE.ShapeGeometry(lidShape); // ฝาเสียบ

  return lid;
};

export const getLidD = (A, P, plugSlope) => {
  const lidDShape = new THREE.Shape();
  lidDShape.moveTo(0, 0);
  lidDShape.bezierCurveTo(0, 0, 2, -P - 2, plugSlope + 5, -P);
  lidDShape.lineTo(A - plugSlope - 5, -P);
  lidDShape.bezierCurveTo(A - plugSlope - 5, -P, A - 2, -P - 2, A, 0);
  lidDShape.lineTo(A, 0);

  const lidD = new THREE.ShapeGeometry(lidDShape); // ฝาเสียบ

  return lidD;
};

export const getGlueLid = (C, G, gSlope) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(0, C);
  glueLidShape.lineTo(-G, C - gSlope);
  glueLidShape.lineTo(-G, gSlope);
  glueLidShape.lineTo(0, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};

export const getLRLid = (A, B) => {
  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);

  lrLidShape.lineTo(0, ((((A / 100) * 30) / 100) * 15) | 0);
  lrLidShape.lineTo(((B / 100) * 6) | 0, ((((A / 100) * 30) / 100) * 25) | 0);
  lrLidShape.lineTo(((B / 100) * 13) | 0, ((((A / 100) * 30) / 100) * 63) | 0);

  lrLidShape.bezierCurveTo(
    ((B / 100) * 13) | 0,
    ((((A / 100) * 30) / 100) * 63) | 0,
    ((B / 100) * 18) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0,
    ((B / 100) * 33) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0
  );

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 100) | 0);

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 16) | 0);

  lrLidShape.lineTo(B, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
};

export const getLLid = (A, B) => {
  const lLidShape = new THREE.Shape();

  lLidShape.moveTo(0, 0);

  lLidShape.lineTo(0, ((((A / 100) * 30) / 100) * 15) | 0);
  lLidShape.lineTo(-((B / 100) * 6) | 0, ((((A / 100) * 30) / 100) * 25) | 0);
  lLidShape.lineTo(-((B / 100) * 13) | 0, ((((A / 100) * 30) / 100) * 63) | 0);

  lLidShape.bezierCurveTo(
    -((B / 100) * 13) | 0,
    ((((A / 100) * 30) / 100) * 63) | 0,
    -((B / 100) * 18) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0,
    -((B / 100) * 33) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0
  );

  lLidShape.lineTo(-((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 100) | 0);

  lLidShape.lineTo(-((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 16) | 0);

  lLidShape.lineTo(-B, 0);

  const lLid = new THREE.ShapeGeometry(lLidShape); // ลิ้นกันฝุ่น

  return lLid;
};

export const getLRBottom = (A, B) => {
  const lrBottomShape = new THREE.Shape();

  lrBottomShape.moveTo(A - 1, 0);
  // Front ....................................................
  lrBottomShape.lineTo(A - 1, -(B / 2) | 0);
  // Center ...................................................
  lrBottomShape.lineTo(A - (A - 1), -(B / 2) | 0);
  // Rear .....................................................
  lrBottomShape.lineTo(A - (A - 1), 0);

  const lrBottom = new THREE.ShapeGeometry(lrBottomShape); // ลิ้นฝาล็อค

  return lrBottom;
};

export const getLRLock = (A, B, R) => {
  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  lrLockShape.lineTo((A - 1) | 0, -B - 2);
  // Center ...................................................
  lrLockShape.lineTo((A - (A - 1)) | 0, -B - 2);
  // Rear .....................................................
  lrLockShape.lineTo((A - (A - 1)) | 0, 0);

  const holeLockShape = new THREE.Path();
  holeLockShape.moveTo(A / 2 - R / 2, -(B - 2) / 2); // 6, 25
  holeLockShape.bezierCurveTo(
    A / 2 - R / 2, // 6
    -(B - 2) / 2, // 25
    A / 2 - R / 2, // 6
    -(B - 2 - R) / 2, // 5
    A / 2, // 26
    -(B - 2 - R) / 2 // 5
  );
  holeLockShape.bezierCurveTo(
    A / 2, // 26
    -(B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    -(B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    -(B - 2) / 2 // 25
  );
  holeLockShape.bezierCurveTo(
    (A + R) / 2, // 46
    -(B - 2) / 2, // 25
    (A + R) / 2, // 46
    -(B - 2 + R) / 2, // 45
    A / 2, // 26
    -(B - 2 + R) / 2 // 45
  );
  holeLockShape.bezierCurveTo(
    A / 2, // 26
    -(B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    -(B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    -(B - 2) / 2 // 25
  );
  lrLockShape.holes.push(holeLockShape);

  const lrLock = new THREE.ShapeGeometry(lrLockShape); // ฝาล็อค

  return lrLock;
};

export const getLRLidLock = (B, LockHeight, lockSlope) => {
  const lrLidLockShape = new THREE.Shape();

  lrLidLockShape.moveTo(0, 0);
  // Front ....................................................
  lrLidLockShape.lineTo(LockHeight, 8);
  // Center ...................................................
  lrLidLockShape.lineTo(LockHeight, B - lockSlope - 2);
  // Rear .....................................................
  lrLidLockShape.lineTo(0, B - 2);

  const lrLidLock = new THREE.ShapeGeometry(lrLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lrLidLock;
};

export const getRLidLock = (B, LockHeight, lockSlope) => {
  const lrLidLockShape = new THREE.Shape();

  lrLidLockShape.moveTo(0, 0);
  // Front ....................................................
  lrLidLockShape.lineTo(-LockHeight, 8);
  // Center ...................................................
  lrLidLockShape.lineTo(-LockHeight, B - lockSlope - 2);
  // Rear .....................................................
  lrLidLockShape.lineTo(0, B - 2);

  const lrLidLock = new THREE.ShapeGeometry(lrLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lrLidLock;
};

export const getLRBottomLock = (A, LockHeight, lockSlope) => {
  const lrBottomLockShape = new THREE.Shape();

  lrBottomLockShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  lrBottomLockShape.lineTo(A - (A - 1) + lockSlope, -LockHeight);
  // Center ...................................................
  lrBottomLockShape.lineTo(A - 1 - lockSlope, -LockHeight);
  // Rear .....................................................
  lrBottomLockShape.lineTo(A - 1, 0);

  const lrBottomLock = new THREE.ShapeGeometry(lrBottomLockShape); // ตัวเสียบฝาล็อคบน

  return lrBottomLock;
};
