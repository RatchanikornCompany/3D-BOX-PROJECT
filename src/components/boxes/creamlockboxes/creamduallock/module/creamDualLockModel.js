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

export const getPlaneTopBottomShape = (A, B) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, (B * 1.654) | 0);
  planeTopBottomShape.lineTo(A, (B * 1.654) | 0);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape); // planeTopBottom

  return planeTopBottom;
};

export const getLRLid = (B, LockHeight) => {
  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  // Front ....................................................
  lrLidShape.lineTo(0, 1);
  lrLidShape.lineTo((B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  lrLidShape.bezierCurveTo(
    (B * 0.04) | 0,
    (LockHeight * 0.7) | 0,
    0,
    (LockHeight * 1.3) | 0,
    (B * 0.143) | 0,
    (LockHeight * 1.3) | 0
  );
  // Center ...................................................
  lrLidShape.lineTo((B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  lrLidShape.lineTo((B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  lrLidShape.lineTo((B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  lrLidShape.lineTo((B * 1.654) | 0, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
};

export const getLRLidDShape = (B, LockHeight, lengLRLib) => {
  const lrLidDShape = new THREE.Shape();

  lrLidDShape.moveTo(0, 0);
  // Front ....................................................
  lrLidDShape.lineTo(0, (LockHeight * 0.05) | 0); // #, 1
  lrLidDShape.lineTo((B * 0.039) | 0, (LockHeight * 0.1) | 0); // #, 2
  lrLidDShape.bezierCurveTo(
    (B * 0.135) | 0,
    (lengLRLib * 0.27) | 0,
    0,
    (lengLRLib * 0.496) | 0,
    (B * 0.99) | 0,
    (lengLRLib * 0.496) | 0
  );
  // Center ...................................................
  lrLidDShape.lineTo((B * 0.193) | 0, (LockHeight * 1.3) | 0); // #, 26
  lrLidDShape.lineTo((B * 1.653) | 0, (LockHeight * 1.3) | 0); // #, 26
  // Rear .....................................................
  lrLidDShape.lineTo((B * 1.653) | 0, (LockHeight * 0.05) | 0); // #, 1
  lrLidDShape.lineTo((B * 1.654) | 0, 0);

  const lrLidD = new THREE.ShapeGeometry(lrLidDShape); // ลิ้นกันฝุ่นล่างล่าง

  return lrLidD;
};

export const getLRLockShape = (A, B, R) => {
  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo(0, 0);
  // Front ....................................................
  lrLockShape.lineTo(0, (B * 1.654) | 0); // 0, 86
  // Center ...................................................
  lrLockShape.lineTo((A * 0.989) | 0, (B * 1.654) | 0); // 173, 86
  // Rear .....................................................
  lrLockShape.lineTo((A * 0.989) | 0, 0); // 173, 0

  const holeLockShape = new THREE.Path();
  holeLockShape.moveTo(((A - 2) / 4) | 0, (B / 1.21 + R) | 0); // 43, 81
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21) | 0, // 43
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 - R) | 0 // 5
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21) | 0, // 43
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape);

  const holeLockShape2 = new THREE.Path();
  holeLockShape2.moveTo(((A - 2) / 1.34) | 0, (B / 1.21 + R) | 0); // #, 81
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21) | 0, // 43
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 - R) | 0 // 5
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21) | 0, // 43
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape2);

  const lrLock = new THREE.ShapeGeometry(lrLockShape); // ฝาล็อค

  return lrLock;
};

export const getLRLidLockShape = (B, LockHeight) => {
  const lrLidlockShape = new THREE.Shape();

  lrLidlockShape.moveTo(0, 0);
  // Front ....................................................
  lrLidlockShape.lineTo((B * 0.2) | 0, (LockHeight * 0.7) | 0); // 14
  // Center ...................................................
  lrLidlockShape.lineTo((B * 1.616) | 0, (LockHeight * 0.7) | 0); // 14
  // Rear .....................................................
  lrLidlockShape.lineTo((B * 1.654) | 0, 0);

  const lrLidLock = new THREE.ShapeGeometry(lrLidlockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lrLidLock;
};
