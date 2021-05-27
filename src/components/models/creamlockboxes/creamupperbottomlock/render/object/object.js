import * as THREE from 'three';

import { material } from '../../../../../function/material';

import {
  getLid,
  getGlueLid,
  getLRLid,
  getLRBottom,
  getLRLock,
  getLRBottomLock,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from '../../../creamsinglelock/render/object/module/models';
import { getLRLidLockShape } from './module/models';
import { foldBox } from './module/animate';

export const creamUpperBottomLockModel = (
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
    plugSlope = 5, //? ความเฉียงฝาเสียบ
    LockHeight = 15, //? ความสูงฐานล็อค
    lockSlope = 5;

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );

  const sideTop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O, materialColor)
  );

  const sideTopLid = new THREE.Mesh(
    getLid(A, P, plugSlope),
    material(O, materialColor)
  );

  const sideATop = new THREE.Mesh(
    getLRBottom(A, B),
    material(O, materialColor)
  );
  sideATop.rotation.y = Math.PI;

  const sideTopLockLid = new THREE.Mesh(
    getLRLock(A, B, R),
    material(O, materialColor)
  );
  sideTopLockLid.rotation.y = Math.PI;

  const sideLRTopLeftLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRTopLeftLock.rotation.z = -(Math.PI / 180) * 270;

  const sideLRTopRightLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRTopRightLock.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  const sideTopLock = new THREE.Mesh(
    getLRBottomLock(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideTopLock.rotation.y = Math.PI;

  const sideBottom = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O, materialColor)
  );
  sideBottom.rotation.x = Math.PI;

  const sideBottomLid = new THREE.Mesh(
    getLid(A, P, plugSlope),
    material(O, materialColor)
  );
  sideBottomLid.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(
    getLRBottom(A, B),
    material(O, materialColor)
  );
  sideABottom.rotation.set(Math.PI, Math.PI, 0);

  const sideLockLid = new THREE.Mesh(
    getLRLock(A, B, R),
    material(O, materialColor)
  );
  sideLockLid.rotation.set(Math.PI, Math.PI, 0);

  const sideLRLeftLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRLeftLock.rotation.set(0, Math.PI, -Math.PI / 2);

  const sideLRRightLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRRightLock.rotation.z = -Math.PI / 2;

  const sideBottomLock = new THREE.Mesh(
    getLRBottomLock(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideBottomLock.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.rotation.y = Math.PI;

  const sideLRLidLeft = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );

  const sideLRLidLeftD = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );
  sideLRLidLeftD.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );

  const sideLRLidRight = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );
  sideLRLidRight.rotation.y = Math.PI;

  const sideLRLidRightD = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );
  sideLRLidRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.rotation.y = Math.PI;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLid(A, P, plugSlope));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRBottom(A, B));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideATopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLock(A, B, R));
  const sideTopLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockLidEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRTopLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopLeftLockEdges.rotation.z = -(Math.PI / 180) * 270;

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRTopRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopRightLockEdges.rotation.set(0, Math.PI, Math.PI / 2);

  edges = new THREE.EdgesGeometry(getLRBottomLock(A, LockHeight, lockSlope));
  const sideTopLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLid(A, P, plugSlope));
  const sideBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLidEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRBottom(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLock(A, B, R));
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLidEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLeftLockEdges.rotation.set(0, Math.PI, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRRightLockEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLRBottomLock(A, LockHeight, lockSlope));
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLeftDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideAFrontEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotLockTopLeft = new THREE.Object3D();
  pivotLockTopLeft.add(sideLRTopLeftLock, sideLRTopLeftLockEdges);
  pivotLockTopLeft.position.x = -A;

  const pivotLockTopRight = new THREE.Object3D();
  pivotLockTopRight.add(sideLRTopRightLock, sideLRTopRightLockEdges);

  const pivotLockTop = new THREE.Object3D();
  pivotLockTop.add(sideTopLock, sideTopLockEdges);
  pivotLockTop.position.y = (B * 0.97) | 0;

  const pivotLockTopLid = new THREE.Object3D();
  pivotLockTopLid.add(
    sideTopLockLid,
    sideTopLockLidEdges,
    pivotLockTopLeft,
    pivotLockTopRight,
    pivotLockTop
  );
  pivotLockTopLid.position.y = (B * 0.39) | 0;

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideTopLid, sideTopLidEdges);
  pivotTopLid.position.y = B;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideTop, sideTopEdges, pivotTopLid);
  pivotTop.position.y = C;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop, sideATopEdges, pivotLockTopLid);
  pivotATop.position.y = C;

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideBottomLid, sideBottomLidEdges);
  pivotBottomLid.position.y = -B;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges, pivotBottomLid);

  const pivotBottomLeft = new THREE.Object3D();
  pivotBottomLeft.add(sideLRLeftLock, sideLRLeftLockEdges);
  pivotBottomLeft.position.x = -A;

  const pivotBottomRight = new THREE.Object3D();
  pivotBottomRight.add(sideLRRightLock, sideLRRightLockEdges);

  const pivotBottomLock = new THREE.Object3D();
  pivotBottomLock.add(sideBottomLock, sideBottomLockEdges);
  pivotBottomLock.position.y = (-B * 0.962) | 0;

  const pivotLockBottomLid = new THREE.Object3D();
  pivotLockBottomLid.add(
    sideLockLid,
    sideLockLidEdges,
    pivotBottomLeft,
    pivotBottomRight,
    pivotBottomLock
  );
  pivotLockBottomLid.position.y = -(B * 0.39) | 0;

  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(sideABottom, sideABottomEdges, pivotLockBottomLid);

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges, pivotTop, pivotBottom);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);
  pivotGlueLid.position.x = -A;

  const pivotFront = new THREE.Object3D();
  pivotFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotGlueLid,
    pivotATop,
    pivotABottom
  );
  pivotFront.position.x = -B;

  const pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLRLidLeft, sideLRLidLeftEdges);
  pivotLeftLid.position.set(-B, C, 0);

  const pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLRLidLeftD, sideLRLidLeftDEdges);
  pivotLeftLidD.position.x = -B;

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    sideBLeftEdges,
    pivotLeftLid,
    pivotLeftLidD,
    pivotFront
  );

  const pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideLRLidRight, sideLRLidRightEdges);
  pivotRightLid.position.set(B, C, 0);

  const pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideLRLidRightD, sideLRLidRightDEdges);
  pivotRightLidD.position.x = B;

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, sideBRightEdges, pivotRightLid, pivotRightLidD);
  pivotRight.position.x = A;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotRight, pivotLeft);

  if (animate) {
    foldBox(
      pivotLeft,
      pivotLeftLid,
      pivotLeftLidD,
      pivotRight,
      pivotRightLid,
      pivotRightLidD,
      pivotFront,
      pivotGlueLid,
      pivotATop,
      pivotLockTopLid,
      pivotLockTop,
      pivotLockTopLeft,
      pivotLockTopRight,
      pivotTop,
      pivotTopLid,
      pivotABottom,
      pivotLockBottomLid,
      pivotBottomLock,
      pivotBottomLeft,
      pivotBottomRight,
      pivotBottom,
      pivotBottomLid
    );
  }

  return pivotAll;
};
