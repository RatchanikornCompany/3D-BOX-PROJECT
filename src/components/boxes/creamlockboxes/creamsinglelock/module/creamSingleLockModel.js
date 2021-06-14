import * as THREE from 'three';

export const getLockTopShape = (A, B) => {
  const lockTopShape = new THREE.Shape();

  lockTopShape.moveTo(A - 1, 0);
  // Front ....................................................
  lockTopShape.lineTo(A - 1, (B / 2) | 0);
  // Center ...................................................
  lockTopShape.lineTo(A - (A - 1), (B / 2) | 0);
  // Rear .....................................................
  lockTopShape.lineTo(A - (A - 1), 0);

  const lockTop = new THREE.ShapeGeometry(lockTopShape); // ลิ้นฝาล็อค

  return lockTop;
};

export const getLockBottomShape = (A, B) => {
  const lockBottomShape = new THREE.Shape();

  lockBottomShape.moveTo(A - 1, 0);
  // Front ....................................................
  lockBottomShape.lineTo(A - 1, -(B / 2) | 0);
  // Center ...................................................
  lockBottomShape.lineTo(A - (A - 1), -(B / 2) | 0);
  // Rear .....................................................
  lockBottomShape.lineTo(A - (A - 1), 0);

  const lockBottom = new THREE.ShapeGeometry(lockBottomShape); // ลิ้นฝาล็อค

  return lockBottom;
};

export const getLidLockTopShape = (A, LockHeight, lockSlope) => {
  const lidLockTopShape = new THREE.Shape();

  lidLockTopShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  lidLockTopShape.lineTo(A - (A - 1) + lockSlope, -LockHeight);
  // Center ...................................................
  lidLockTopShape.lineTo(A - 1 - lockSlope, -LockHeight);
  // Rear .....................................................
  lidLockTopShape.lineTo(A - 1, 0);

  const lidLockTop = new THREE.ShapeGeometry(lidLockTopShape); // ตัวเสียบฝาล็อคบน

  return lidLockTop;
};

export const getLidLockBottomShape = (A, LockHeight, lockSlope) => {
  const lidLockBottomShape = new THREE.Shape();

  lidLockBottomShape.moveTo(A - (A - 1), 0);
  // Front ....................................................
  lidLockBottomShape.lineTo(A - (A - 1) + lockSlope, LockHeight);
  // Center ...................................................
  lidLockBottomShape.lineTo(A - 1 - lockSlope, LockHeight);
  // Rear .....................................................
  lidLockBottomShape.lineTo(A - 1, 0);

  const lidLockBottom = new THREE.ShapeGeometry(lidLockBottomShape); // ตัวเสียบฝาล็อคบน

  return lidLockBottom;
};

export const getPlaneLockTopShape = (A, B, R) => {
  const planeLockTopShape = new THREE.Shape();

  planeLockTopShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  planeLockTopShape.lineTo((A - 1) | 0, -B + 2);
  // Center ...................................................
  planeLockTopShape.lineTo((A - (A - 1)) | 0, -B + 2);
  // Rear .....................................................
  planeLockTopShape.lineTo((A - (A - 1)) | 0, 0);

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
  planeLockTopShape.holes.push(holeLockShape);

  const planeLockTop = new THREE.ShapeGeometry(planeLockTopShape); // ฝาล็อค

  return planeLockTop;
};

export const getPlaneLockBottomShape = (A, B, R) => {
  const planeLockBottomShape = new THREE.Shape();

  planeLockBottomShape.moveTo((A - 1) | 0, 0);
  // Front ....................................................
  planeLockBottomShape.lineTo((A - 1) | 0, B + 2);
  // Center ...................................................
  planeLockBottomShape.lineTo((A - (A - 1)) | 0, B + 2);
  // Rear .....................................................
  planeLockBottomShape.lineTo((A - (A - 1)) | 0, 0);

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
  planeLockBottomShape.holes.push(holeLockShape);

  const planeLockBottom = new THREE.ShapeGeometry(planeLockBottomShape); // ฝาล็อค

  return planeLockBottom;
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
