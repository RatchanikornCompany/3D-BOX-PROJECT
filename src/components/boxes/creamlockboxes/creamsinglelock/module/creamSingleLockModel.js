import * as THREE from 'three';

export const getLockTopShape = (A, B) => {
  const lockTopShape = new THREE.Shape();

  lockTopShape.moveTo(A - 1, 0);
  // Front ....................................................
  lockTopShape.lineTo(A - 1, -(B / 2) | 0);
  // Center ...................................................
  lockTopShape.lineTo(A - (A - 1), -(B / 2) | 0);
  // Rear .....................................................
  lockTopShape.lineTo(A - (A - 1), 0);

  const lockTop = new THREE.ShapeGeometry(lockTopShape); // ลิ้นฝาล็อค

  return lockTop;
};

export const getLockBottomShape = (A, B) => {
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

export const getLockBottomDShape = (A, LockHeight, lockSlope) => {
  const lockBottomDShape = new THREE.Shape();

  lockBottomDShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  lockBottomDShape.lineTo(A - (A - 1) + lockSlope, -LockHeight);
  // Center ...................................................
  lockBottomDShape.lineTo(A - 1 - lockSlope, -LockHeight);
  // Rear .....................................................
  lockBottomDShape.lineTo(A - 1, 0);

  const lockBottomD = new THREE.ShapeGeometry(lockBottomDShape); // ตัวเสียบฝาล็อคบน

  return lockBottomD;
};

export const getPlaneSideLockShape = (A, B, R) => {
  const planeSideLockShape = new THREE.Shape();

  planeSideLockShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  planeSideLockShape.lineTo((A - 1) | 0, -B + 2);
  // Center ...................................................
  planeSideLockShape.lineTo((A - (A - 1)) | 0, -B + 2);
  // Rear .....................................................
  planeSideLockShape.lineTo((A - (A - 1)) | 0, 0);

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
  planeSideLockShape.holes.push(holeLockShape);

  const planeSideLock = new THREE.ShapeGeometry(planeSideLockShape); // ฝาล็อค

  return planeSideLock;
};

export const getLLidLock = (B, LockHeight, lockSlope) => {
  const lLidLockShape = new THREE.Shape();

  lLidLockShape.moveTo(0, 0);
  // Front ....................................................
  lLidLockShape.lineTo(LockHeight, 8);
  // Center ...................................................
  lLidLockShape.lineTo(LockHeight, B - lockSlope - 2);
  // Rear .....................................................
  lLidLockShape.lineTo(0, B - 2);

  const lLidLock = new THREE.ShapeGeometry(lLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return lLidLock;
};

export const getRLidLock = (B, LockHeight, lockSlope) => {
  const rLidLockShape = new THREE.Shape();

  rLidLockShape.moveTo(0, 0);
  // Front ....................................................
  rLidLockShape.lineTo(-LockHeight, 8);
  // Center ...................................................
  rLidLockShape.lineTo(-LockHeight, B - lockSlope - 2);
  // Rear .....................................................
  rLidLockShape.lineTo(0, B - 2);

  const rLidLock = new THREE.ShapeGeometry(rLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  return rLidLock;
};
