import * as THREE from 'three';

export const getPlaneBSideShape = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo((B * 1.654) | 0, C);
  planeBSideShape.lineTo((B * 1.654) | 0, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape); // planeBSide

  return planeBSide;
};

export const getPlaneTopShape = (A, B) => {
  const planeTopShape = new THREE.Shape();
  planeTopShape.moveTo(0, 0);
  planeTopShape.lineTo(0, (B * 1.654) | 0);
  planeTopShape.lineTo(A, (B * 1.654) | 0);
  planeTopShape.lineTo(A, 0);

  const planeTop = new THREE.ShapeGeometry(planeTopShape); // planeTopBottom

  return planeTop;
};

export const getPlaneBottomShape = (A, B) => {
  const planeBottomShape = new THREE.Shape();
  planeBottomShape.moveTo(0, 0);
  planeBottomShape.lineTo(0, -(B * 1.654) | 0);
  planeBottomShape.lineTo(A, -(B * 1.654) | 0);
  planeBottomShape.lineTo(A, 0);

  const planeBottom = new THREE.ShapeGeometry(planeBottomShape); // planeTopBottom

  return planeBottom;
};

export const getRLid = (B, LockHeight) => {
  const rLidShape = new THREE.Shape();

  rLidShape.moveTo(0, 0);
  // Front ....................................................
  rLidShape.lineTo(0, 1);
  rLidShape.lineTo((B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  rLidShape.bezierCurveTo(
    (B * 0.04) | 0,
    (LockHeight * 0.7) | 0,
    0,
    (LockHeight * 1.3) | 0,
    (B * 0.143) | 0,
    (LockHeight * 1.3) | 0
  );
  // Center ...................................................
  rLidShape.lineTo((B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  rLidShape.lineTo((B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  rLidShape.lineTo((B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  rLidShape.lineTo((B * 1.654) | 0, 0);

  const rLid = new THREE.ShapeGeometry(rLidShape); // ลิ้นกันฝุ่น

  return rLid;
};

export const getLLid = (B, LockHeight) => {
  const lLidShape = new THREE.Shape();

  lLidShape.moveTo(0, 0);
  // Front ....................................................
  lLidShape.lineTo(0, 1);
  lLidShape.lineTo(-(B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  lLidShape.bezierCurveTo(
    -(B * 0.04) | 0,
    (LockHeight * 0.7) | 0,
    0,
    (LockHeight * 1.3) | 0,
    -(B * 0.143) | 0,
    (LockHeight * 1.3) | 0
  );
  // Center ...................................................
  lLidShape.lineTo(-(B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  lLidShape.lineTo(-(B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  lLidShape.lineTo(-(B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  lLidShape.lineTo(-(B * 1.654) | 0, 0);

  const lLid = new THREE.ShapeGeometry(lLidShape); // ลิ้นกันฝุ่น

  return lLid;
};

export const getRLidDShape = (B, LockHeight, lengLRLib) => {
  const rLidDShape = new THREE.Shape();

  rLidDShape.moveTo(0, 0);
  // Front ....................................................
  rLidDShape.lineTo(0, (LockHeight * 0.05) | 0); // #, 1
  rLidDShape.lineTo((B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  rLidDShape.bezierCurveTo(
    (B * 0.135) | 0,
    (lengLRLib * 0.27) | 0,
    0,
    (lengLRLib * 0.496) | 0,
    (B * 0.99) | 0,
    (lengLRLib * 0.496) | 0
  );
  // Center ...................................................
  rLidDShape.lineTo((B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  rLidDShape.lineTo((B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  rLidDShape.lineTo((B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  rLidDShape.lineTo((B * 1.654) | 0, 0);

  const rLidD = new THREE.ShapeGeometry(rLidDShape); // ลิ้นกันฝุ่นล่างล่าง

  return rLidD;
};

export const getLLidDShape = (B, LockHeight, lengLRLib) => {
  const lLidDShape = new THREE.Shape();

  lLidDShape.moveTo(0, 0);
  // Front ....................................................
  lLidDShape.lineTo(0, (LockHeight * 0.05) | 0); // #, 1
  lLidDShape.lineTo(-(B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  lLidDShape.bezierCurveTo(
    -(B * 0.135) | 0,
    (lengLRLib * 0.27) | 0,
    0,
    (lengLRLib * 0.496) | 0,
    -(B * 0.99) | 0,
    (lengLRLib * 0.496) | 0
  );
  // Center ...................................................
  lLidDShape.lineTo(-(B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  lLidDShape.lineTo(-(B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  lLidDShape.lineTo(-(B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  lLidDShape.lineTo(-(B * 1.654) | 0, 0);

  const lLidD = new THREE.ShapeGeometry(lLidDShape); // ลิ้นกันฝุ่นล่างล่าง

  return lLidD;
};

export const getLRLockShape = (A, B, R) => {
  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo(0, 0);
  // Front ....................................................
  lrLockShape.lineTo(0, -(B * 1.654) | 0); // 0, 86
  // Center ...................................................
  lrLockShape.lineTo((A * 0.989) | 0, -(B * 1.654) | 0); // 173, 86
  // Rear .....................................................
  lrLockShape.lineTo((A * 0.989) | 0, 0); // 173, 0

  const holeLockShape = new THREE.Path();
  holeLockShape.moveTo(((A - 2) / 4) | 0, -(B / 1.21 + R) | 0); // 43, 81
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    -(B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 - R) | 0, // 5
    -(B / 1.21) | 0, // 43
    ((A - 2) / 4 - R) | 0, // 5
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 4) | 0, // 43
    -(B / 1.21 - R) | 0 // 5
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    -(B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 + R) | 0, // 81
    -(B / 1.21) | 0, // 43
    ((A - 2) / 4 + R) | 0, // 81
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 4) | 0, // 43
    -(B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape);

  const holeLockShape2 = new THREE.Path();
  holeLockShape2.moveTo(((A - 2) / 1.34) | 0, -(B / 1.21 + R) | 0); // #, 81
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    -(B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 - R) | 0, // #
    -(B / 1.21) | 0, // 43
    ((A - 2) / 1.34 - R) | 0, // #
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34) | 0, // #
    -(B / 1.21 - R) | 0 // 5
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    -(B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    -(B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 + R) | 0, // #
    -(B / 1.21) | 0, // 43
    ((A - 2) / 1.34 + R) | 0, // #
    -(B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34) | 0, // #
    -(B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape2);

  const lrLock = new THREE.ShapeGeometry(lrLockShape); // ฝาล็อค

  return lrLock;
};

export const getRLidLockShape = (B, LockHeight) => {
  const rLidlockShape = new THREE.Shape();

  rLidlockShape.moveTo(0, 0);
  // Front ....................................................
  rLidlockShape.lineTo((B * 0.2) | 0, (LockHeight * 0.7) | 0); // 14
  // Center ...................................................
  rLidlockShape.lineTo((B * 1.616) | 0, (LockHeight * 0.7) | 0); // 14
  // Rear .....................................................
  rLidlockShape.lineTo((B * 1.654) | 0, 0);

  const rLidlock = new THREE.ShapeGeometry(rLidlockShape); // ลิ้นกันฝุ่นฝาล็อค

  return rLidlock;
};

export const getLLidLockShape = (B, LockHeight) => {
  const lLidlockShape = new THREE.Shape();

  lLidlockShape.moveTo(0, 0);
  // Front ....................................................
  lLidlockShape.lineTo(-(B * 0.2) | 0, (LockHeight * 0.7) | 0); // 14
  // Center ...................................................
  lLidlockShape.lineTo(-(B * 1.616) | 0, (LockHeight * 0.7) | 0); // 14
  // Rear .....................................................
  lLidlockShape.lineTo(-(B * 1.654) | 0, 0);

  const lLidlock = new THREE.ShapeGeometry(lLidlockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lLidlock;
};