import * as THREE from 'three';

import { material } from '../../../../.modules/material';

import {
  getPlaneASideShape,
  getLidCover,
  getGlueLid,
} from '../../../../.modules/models';
import {
  getLockBottomShape,
  getLockBottomDShape,
} from '../../creamsinglelock/module/creamSingleLockModel';
import {
  getPlaneBSideShape,
  getPlaneTopBottomShape,
  getLRLid,
  getLRLidDShape,
  getLRLockShape,
  getLRLidLockShape,
} from './creamDualLockModel';
import { foldBox } from './creamDualLockAnim';

export const creamDualLockModel = (
  A,
  B,
  C,
  R,
  O,
  G,
  GSlope,
  animate,
  materialColor
) => {
  const P = 15, //? ลิ้นเสียบ ค่า Defualt
    lengLRLib = A * 0.3,
    LockHeight = 20, //? ความสูงฐานล็อค
    lockSlope = 5,
    plugLength = 15;

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;
  sideABack.rotation.y = Math.PI;

  const sideALidBottom = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideALidBottom.castShadow = true;
  sideALidBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideABottom = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;
  sideABottom.position.x = -A;
  sideABottom.rotation.x = Math.PI;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideALidTop = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideALidTop.castShadow = true;

  const sideLock = new THREE.Mesh(
    getLRLockShape(A, B, R),
    material(O, materialColor)
  );
  sideLock.castShadow = true;
  sideLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideATop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O, materialColor)
  );
  sideATop.castShadow = true;

  const sideBottomLock = new THREE.Mesh(
    getLockBottomShape(A, B),
    material(O, materialColor)
  );
  sideBottomLock.castShadow = true;
  sideBottomLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideLRLidLockLeft = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRLidLockLeft.castShadow = true;
  sideLRLidLockLeft.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  const sideLRLidLockRight = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRLidLockRight.castShadow = true;
  sideLRLidLockRight.rotation.set(0, 0, -(Math.PI / 180) * 90);

  const sideLRBottomLock = new THREE.Mesh(
    getLockBottomDShape(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideLRBottomLock.castShadow = true;
  sideLRBottomLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.position.x = -(B * 1.654) | 0;

  const sideLeftLid = new THREE.Mesh(
    getLRLid(B, LockHeight),
    material(O, materialColor)
  );
  sideLeftLid.castShadow = true;
  sideLeftLid.rotation.set(0, (Math.PI / 180) * 180, 0);

  const sideLeftLidD = new THREE.Mesh(
    getLRLidDShape(B, LockHeight, lengLRLib),
    material(O, materialColor)
  );
  sideLeftLidD.castShadow = true;
  sideLeftLidD.position.x = -(B * 1.654) | 0;
  sideLeftLidD.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideRightLid = new THREE.Mesh(
    getLRLid(B, LockHeight),
    material(O, materialColor)
  );
  sideRightLid.castShadow = true;

  const sideRightLidD = new THREE.Mesh(
    getLRLidDShape(B, LockHeight, lengLRLib),
    material(O, materialColor)
  );
  sideRightLidD.castShadow = true;
  sideRightLidD.rotation.set((Math.PI / 180) * 180, (Math.PI / 180) * 180, 0);

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideALidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.x = -A;
  sideABottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideALidTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLockShape(A, B, R));
  const sideLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockBottomShape(A, B));
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRLidLockLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLockLeftEdges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRLidLockRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLockRightEdges.rotation.set(0, 0, -(Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(
    getLockBottomDShape(A, LockHeight, lockSlope)
  );
  const sideLRBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRBottomLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -(B * 1.654) | 0;

  edges = new THREE.EdgesGeometry(getLRLid(B, LockHeight));
  const sideLeftLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidEdges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getLRLidDShape(B, LockHeight, lengLRLib));
  const sideLeftLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidDEdges.position.x = -(B * 1.654) | 0;
  sideLeftLidDEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(B, LockHeight));
  const sideRightLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidDShape(B, LockHeight, lengLRLib));
  const sideRightLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideRightLidDEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  const pivotLidTop = new THREE.Object3D();
  pivotLidTop.add(sideALidTop, sideALidTopEdges);
  pivotLidTop.position.y = (B * 1.654) | 0;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideATop, sideATopEdges, pivotLidTop);
  pivotTop.position.set(0, C, 0);

  const pivotLidBottom = new THREE.Object3D();
  pivotLidBottom.add(sideALidBottom, sideALidBottomEdges);
  pivotLidBottom.position.y = -(B * 1.654) | 0;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideABottom, sideABottomEdges, pivotLidBottom);

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges, pivotBottom);

  const pivotLRLidLockLeft = new THREE.Object3D();
  pivotLRLidLockLeft.add(sideLRLidLockLeft, sideLRLidLockLeftEdges);

  const pivotLRLidLockRight = new THREE.Object3D();
  pivotLRLidLockRight.add(sideLRLidLockRight, sideLRLidLockRightEdges);
  pivotLRLidLockRight.position.set((A * 0.994) | 0, 0, 0);

  const pivotLRBottomLock = new THREE.Object3D();
  pivotLRBottomLock.add(sideLRBottomLock, sideLRBottomLockEdges);
  pivotLRBottomLock.position.set(0, -(B * 1.654) | 0, 0);

  const pivotLock = new THREE.Object3D();
  pivotLock.add(
    sideLock,
    sideLockEdges,
    pivotLRLidLockLeft,
    pivotLRLidLockRight,
    pivotLRBottomLock
  );
  pivotLock.position.y = -(B / 2) | 0;

  const pivotBottomLock = new THREE.Object3D();
  pivotBottomLock.add(sideBottomLock, sideBottomLockEdges, pivotLock);
  pivotBottomLock.position.set((A / 175) | 0, 0, 0);

  const pivotFront = new THREE.Object3D();
  pivotFront.add(sideAFront, sideAFrontEdges, pivotTop, pivotBottomLock);
  pivotFront.position.set((B * 1.654) | 0, 0, 0);

  const pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLeftLid, sideLeftLidEdges);
  pivotLeftLid.position.set(0, C, 0);

  const pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLeftLidD, sideLeftLidDEdges);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);
  pivotGlueLid.position.x = -(B * 1.654) | 0;

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    sideBLeftEdges,
    pivotLeftLid,
    pivotLeftLidD,
    pivotGlueLid
  );
  pivotLeft.position.set(-A, 0, 0);

  const pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideRightLid, sideRightLidEdges);
  pivotRightLid.position.set(0, C, 0);

  const pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideRightLidD, sideRightLidDEdges);
  pivotRightLidD.position.set((B * 1.654) | 0, 0, 0);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    sideBRightEdges,
    pivotRightLid,
    pivotRightLidD,
    pivotFront
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotLeft, pivotRight);

  if (animate) {
    foldBox(
      pivotFront,
      pivotGlueLid,
      pivotLeft,
      pivotLeftLid,
      pivotLeftLidD,
      pivotRight,
      pivotRightLid,
      pivotRightLidD,
      pivotTop,
      pivotLidTop,
      pivotBottom,
      pivotLidBottom,
      pivotBottomLock,
      pivotLock,
      pivotLRLidLockLeft,
      pivotLRLidLockRight,
      pivotLRBottomLock
    );
  }

  return pivotAll;
};
