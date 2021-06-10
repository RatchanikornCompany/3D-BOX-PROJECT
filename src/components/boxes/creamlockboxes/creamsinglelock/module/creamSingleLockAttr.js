import * as THREE from 'three';

import { material } from '../../../../_modules/material';

import {
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
  getLidCover,
  getLRLid,
} from '../../../../_modules/models';
import {
  getGlueLid,
  getLRBottom,
  getLRLock,
  getLRLidLock,
  getLRBottomLock,
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
    getPlaneTopBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideBottom = new THREE.Mesh(
    getLRBottom(A, B),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;

  const sideLockLid = new THREE.Mesh(
    getLRLock(A, B, R),
    material(O, materialColor)
  );
  sideLockLid.castShadow = true;
  sideLockLid.rotation.x = Math.PI;

  const sideLRLeftLock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideLRLeftLock.castShadow = true;
  sideLRLeftLock.rotation.set(Math.PI, Math.PI, 0);

  const sideLRRightLock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideLRRightLock.castShadow = true;
  sideLRRightLock.rotation.x = Math.PI;

  const sideBottomLock = new THREE.Mesh(
    getLRBottomLock(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideBottomLock.castShadow = true;
  sideBottomLock.rotation.x = Math.PI;

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLRLidLeft = new THREE.Mesh(
    getLRLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidLeft.castShadow = true;

  const sideLRLidLeftD = new THREE.Mesh(
    getLRLid(A, B, F),
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
    getLRLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidRight.castShadow = true;
  sideLRLidRight.rotation.y = Math.PI;

  const sideLRLidRightD = new THREE.Mesh(
    getLRLid(A, B, F),
    material(O, materialColor)
  );
  sideLRLidRightD.castShadow = true;
  sideLRLidRightD.rotation.x = Math.PI;

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

  const sideLidFrontD = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideLidFrontD.castShadow = true;
  sideLidFrontD.rotation.x = Math.PI;

  const sideLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideLid.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugLength));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRBottom(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLock(A, B, R));
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLidEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidLock(B, LockHeight, lockSlope));
  const sideLRLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLeftLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidLock(B, LockHeight, lockSlope));
  const sideLRRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRRightLockEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRBottomLock(A, LockHeight, lockSlope));
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const sideLRLidLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
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

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const sideLRLidRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const sideLRLidRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightDEdges.rotation.x = Math.PI;

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

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugLength));
  const sideLidFrontDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidFrontDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

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
  pivotBottomLeft.add(sideLRLeftLock, sideLRLeftLockEdges);
  pivotBottomLeft.position.x = 1;

  const pivotBottomRight = new THREE.Object3D();
  pivotBottomRight.add(sideLRRightLock, sideLRRightLockEdges);
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
