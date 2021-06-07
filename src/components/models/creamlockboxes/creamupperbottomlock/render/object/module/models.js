import * as THREE from 'three';

export const getLRLidLockShape = (B, LockHeight) => {
  const lrLidLockShape = new THREE.Shape();

  lrLidLockShape.moveTo(0, -(LockHeight * 0.05) | 0);
  // Front ....................................................
  lrLidLockShape.lineTo((B * 0.2) | 0, (LockHeight * 0.95) | 0); // 10, 20
  // Center ...................................................
  lrLidLockShape.lineTo((B * 0.885) | 0, (LockHeight * 0.95) | 0); // 46, 20
  // Rear .....................................................
  lrLidLockShape.lineTo((B * 0.962) | 0, -(LockHeight * 0.05) | 0); // 50, 0

  const lrLidLock = new THREE.ShapeGeometry(lrLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lrLidLock;
};

export const getLLidLockShape = (B, LockHeight) => {
  const lLidLockShape = new THREE.Shape();

  lLidLockShape.moveTo(0, (LockHeight * 0.05) | 0);
  // Front ....................................................
  lLidLockShape.lineTo((B * 0.2) | 0, -(LockHeight * 0.95) | 0); // 10, 20
  // Center ...................................................
  lLidLockShape.lineTo((B * 0.885) | 0, -(LockHeight * 0.95) | 0); // 46, 20
  // Rear .....................................................
  lLidLockShape.lineTo((B * 0.962) | 0, (LockHeight * 0.05) | 0); // 50, 0

  const lLidLock = new THREE.ShapeGeometry(lLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lLidLock;
};

export const getTopLock = (A, LockHeight, lockSlope) => {
  const topLockShape = new THREE.Shape();

  topLockShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  topLockShape.lineTo(A - (A - 1) + lockSlope, -LockHeight);
  // Center ...................................................
  topLockShape.lineTo(A - 1 - lockSlope, -LockHeight);
  // Rear .....................................................
  topLockShape.lineTo(A - 1, 0);

  const topLock = new THREE.ShapeGeometry(topLockShape); // ตัวเสียบฝาล็อคบน

  return topLock;
};

export const getBottomLock = (A, LockHeight, lockSlope) => {
  const bottomLockShape = new THREE.Shape();

  bottomLockShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  bottomLockShape.lineTo(A - (A - 1) + lockSlope, LockHeight);
  // Center ...................................................
  bottomLockShape.lineTo(A - 1 - lockSlope, LockHeight);
  // Rear .....................................................
  bottomLockShape.lineTo(A - 1, 0);

  const bottomLock = new THREE.ShapeGeometry(bottomLockShape); // ตัวเสียบฝาล็อคบน

  return bottomLock;
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

export const getLockBottom = (A, B) => {
  const lockBottomShape = new THREE.Shape();

  lockBottomShape.moveTo(A - 1, 0);
  // Front ....................................................
  lockBottomShape.lineTo(A - 1, (B / 2) | 0);
  // Center ...................................................
  lockBottomShape.lineTo(A - (A - 1), (B / 2) | 0);
  // Rear .....................................................
  lockBottomShape.lineTo(A - (A - 1), 0);

  const lockBottom = new THREE.ShapeGeometry(lockBottomShape); // ลิ้นฝาล็อค

  return lockBottom;
};

export const getLRLockD = (A, B, R) => {
  const lrLockDShape = new THREE.Shape();

  lrLockDShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  lrLockDShape.lineTo((A - 1) | 0, B - 2);
  // Center ...................................................
  lrLockDShape.lineTo((A - (A - 1)) | 0, B - 2);
  // Rear .....................................................
  lrLockDShape.lineTo((A - (A - 1)) | 0, 0);

  const holeLockShape = new THREE.Path();
  holeLockShape.moveTo(A / 2 - R / 2, (B - 2) / 2); // 6, 25
  holeLockShape.bezierCurveTo(
    A / 2 - R / 2, // 6
    (B - 2) / 2, // 25
    A / 2 - R / 2, // 6
    (B - 2 - R) / 2, // 5
    A / 2, // 26
    (B - 2 - R) / 2 // 5
  );
  holeLockShape.bezierCurveTo(
    A / 2, // 26
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2) / 2 // 25
  );
  holeLockShape.bezierCurveTo(
    (A + R) / 2, // 46
    (B - 2) / 2, // 25
    (A + R) / 2, // 46
    (B - 2 + R) / 2, // 45
    A / 2, // 26
    (B - 2 + R) / 2 // 45
  );
  holeLockShape.bezierCurveTo(
    A / 2, // 26
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2) / 2 // 25
  );
  lrLockDShape.holes.push(holeLockShape);

  const lrLockD = new THREE.ShapeGeometry(lrLockDShape); // ฝาล็อค

  return lrLockD;
};
