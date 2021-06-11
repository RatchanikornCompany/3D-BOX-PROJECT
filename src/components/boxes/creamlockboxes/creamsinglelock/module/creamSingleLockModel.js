import * as THREE from 'three';

export const getLRBottom = (A, B) => {
  const lrBottomShape = new THREE.Shape();

  lrBottomShape.moveTo(A - 1, 0);
  // Front ....................................................
  lrBottomShape.lineTo(A - 1, (B / 2) | 0);
  // Center ...................................................
  lrBottomShape.lineTo(A - (A - 1), (B / 2) | 0);
  // Rear .....................................................
  lrBottomShape.lineTo(A - (A - 1), 0);

  const lrBottom = new THREE.ShapeGeometry(lrBottomShape); // ลิ้นฝาล็อค

  return lrBottom;
};

export const getLRBottomLock = (A, LockHeight, lockSlope) => {
  const lrBottomLockShape = new THREE.Shape();

  lrBottomLockShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  lrBottomLockShape.lineTo(A - (A - 1) + lockSlope, LockHeight);
  // Center ...................................................
  lrBottomLockShape.lineTo(A - 1 - lockSlope, LockHeight);
  // Rear .....................................................
  lrBottomLockShape.lineTo(A - 1, 0);

  const lrBottomLock = new THREE.ShapeGeometry(lrBottomLockShape); // ตัวเสียบฝาล็อคบน

  return lrBottomLock;
};

export const getLRLock = (A, B, R) => {
  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  lrLockShape.lineTo((A - 1) | 0, B - 2);
  // Center ...................................................
  lrLockShape.lineTo((A - (A - 1)) | 0, B - 2);
  // Rear .....................................................
  lrLockShape.lineTo((A - (A - 1)) | 0, 0);

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
