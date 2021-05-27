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
