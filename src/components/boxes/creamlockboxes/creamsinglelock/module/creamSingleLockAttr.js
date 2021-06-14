import * as THREE from 'three';

import { material } from '../../../../.modules/material';

import {
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopShape,
  getPlaneBottomShape,
  getLidCover,
  getLidCoverD,
  getLLid,
  getRLid,
  getGlueLid,
} from '../../../../.modules/models';
import {
  getLockBottomShape,
  getLidLockTopShape,
  getPlaneLockTopShape,
  getLLidLock,
  getRLidLock,
} from './creamSingleLockModel';
import { foldBox } from './creamSingleLockAnim';

export const creamSingleLockModel = (
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
  const F = 30, //? ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
    P = 15, //? ลิ้นเสียบ ค่า Defualt
    LockHeight = 15, //? ความสูงฐานล็อค
    lockSlope = 5,
    plugLength = 5;

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideTop = new THREE.Mesh(
    getPlaneTopShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideBottom = new THREE.Mesh(
    getLockBottomShape(A, B),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;

  const sideLockLid = new THREE.Mesh(
    getPlaneLockTopShape(A, B, R),
    material(O, materialColor)
  );
  sideLockLid.castShadow = true;

  const sideLLeftLock = new THREE.Mesh(
    getLLidLock(B, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideLLeftLock.castShadow = true;
  sideLLeftLock.rotation.set(Math.PI, Math.PI, 0);

  const sideRightLock = new THREE.Mesh(
    getRLidLock(B, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideRightLock.castShadow = true;
  sideRightLock.rotation.z = Math.PI;

  const sideBottomLock = new THREE.Mesh(
    getLidLockTopShape(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideBottomLock.castShadow = true;

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLRLidLeft = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidLeft.castShadow = true;

  const sideLRLidLeftD = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidLeftD.castShadow = true;
  sideLRLidLeftD.rotation.set(Math.PI, Math.PI, 0);
  sideLRLidLeftD.position.x = B;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLRLidRight = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidRight.castShadow = true;

  const sideLRLidRightD = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidRightD.castShadow = true;
  sideLRLidRightD.rotation.z = Math.PI;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideLidFrontD = new THREE.Mesh(
    getPlaneBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideLidFrontD.castShadow = true;

  const sideLid = new THREE.Mesh(
    getLidCoverD(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideLid.castShadow = true;
  sideLid.rotation.x = Math.PI;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopShape(A, B, plugLength));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockBottomShape(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneLockTopShape(A, B, R));
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLidLock(B, LockHeight, lockSlope));
  const sideLLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLLeftLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getRLidLock(B, LockHeight, lockSlope));
  const sideRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideRightLockEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(
    getLidLockTopShape(A, LockHeight, lockSlope)
  );
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLRLidLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLRLidLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLeftDEdges.rotation.set(Math.PI, Math.PI, 0);
  sideLRLidLeftDEdges.position.x = B;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLRLidRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLLid(A, B, F));
  const sideLRLidRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBottomShape(A, B, plugLength));
  const sideLidFrontDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCoverD(A, B, P, plugLength));
  const sideLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidEdges.rotation.x = Math.PI;

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideTopLid, sideTopLidEdges);
  pivotTopLid.position.y = B;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideTop, sideTopEdges, pivotTopLid);
  pivotTop.position.y = C;

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges, pivotTop, pivotGlueLid);

  const pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLRLidLeft, sideLRLidLeftEdges);
  pivotLeftLid.position.y = C;

  const pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLRLidLeftD, sideLRLidLeftDEdges);

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, sideBLeftEdges, pivotLeftLid, pivotLeftLidD);
  pivotLeft.position.x = A;

  const pivotFrontLid = new THREE.Object3D();
  pivotFrontLid.add(sideLid, sideLidEdges);
  pivotFrontLid.rotation.set(0, Math.PI, Math.PI);
  pivotFrontLid.position.y = -B;

  const pivotFrontLidD = new THREE.Object3D();
  pivotFrontLidD.add(sideLidFrontD, sideLidFrontDEdges, pivotFrontLid);

  const pivotFront = new THREE.Object3D();
  pivotFront.add(sideAFront, sideAFrontEdges, pivotFrontLidD, pivotLeft);
  pivotFront.position.x = B;

  const pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideLRLidRight, sideLRLidRightEdges);
  pivotRightLid.position.set(B, C, 0);

  const pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideLRLidRightD, sideLRLidRightDEdges);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    sideBRightEdges,
    pivotFront,
    pivotRightLid,
    pivotRightLidD
  );
  pivotRight.position.x = A;

  const pivotBottomLeft = new THREE.Object3D();
  pivotBottomLeft.add(sideLLeftLock, sideLLeftLockEdges);
  pivotBottomLeft.position.x = 1;

  const pivotBottomRight = new THREE.Object3D();
  pivotBottomRight.add(sideRightLock, sideRightLockEdges);
  pivotBottomRight.position.x = A - 1;

  const pivotBottomLock = new THREE.Object3D();
  pivotBottomLock.add(sideBottomLock, sideBottomLockEdges);
  pivotBottomLock.position.y = -B + 2;

  const pivotLockBottomLid = new THREE.Object3D();
  pivotLockBottomLid.add(
    sideLockLid,
    sideLockLidEdges,
    pivotBottomLeft,
    pivotBottomRight,
    pivotBottomLock
  );
  pivotLockBottomLid.position.y = -(B / 2) | 0;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges, pivotLockBottomLid);

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotRight, pivotBottom);

  if (animate) {
    foldBox(
      pivotRight,
      pivotRightLid,
      pivotRightLidD,
      pivotLeft,
      pivotLeftLid,
      pivotLeftLidD,
      pivotFront,
      pivotFrontLidD,
      pivotFrontLid,
      pivotGlueLid,
      pivotTop,
      pivotTopLid,
      pivotBottom,
      pivotBottomLeft,
      pivotBottomRight,
      pivotBottomLock,
      pivotLockBottomLid
    );
  }

  return pivotAll;
};
