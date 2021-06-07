import * as THREE from 'three';

import { material } from '../../../../../function/material';

import {
  getLid,
  getLidD,
  getGlueLid,
  getLRLid,
  getLLid,
  getLRLock,
  getPlaneASideShape,
  getPlaneASideDShape,
  getPlaneBSideShape,
  getPlaneBLeftSideShape,
  getPlaneTopBottomShape,
  getPlaneBottomShape,
} from '../../../creamsinglelock/render/object/module/models';
import {
  getLRLidLockShape,
  getLLidLockShape,
  getTopLock,
  getBottomLock,
  getLRBottom,
  getLockBottom,
  getLRLockD,
} from './module/models';
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
  sideABack.castShadow = true;

  const sideTop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLid(A, P, plugSlope),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideATop = new THREE.Mesh(
    getLRBottom(A, B),
    material(O, materialColor)
  );
  sideATop.castShadow = true;
  sideATop.rotation.z = Math.PI;

  const sideTopLockLid = new THREE.Mesh(
    getLRLock(A, B, R),
    material(O, materialColor)
  );
  sideTopLockLid.castShadow = true;
  sideTopLockLid.rotation.set(Math.PI, Math.PI, 0);

  const sideLRTopLeftLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRTopLeftLock.castShadow = true;
  sideLRTopLeftLock.rotation.z = -(Math.PI / 180) * 270;

  const sideLRTopRightLock = new THREE.Mesh(
    getLLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRTopRightLock.castShadow = true;
  sideLRTopRightLock.rotation.z = (Math.PI / 180) * 90;

  const sideTopLock = new THREE.Mesh(
    getTopLock(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideTopLock.castShadow = true;
  sideTopLock.rotation.z = Math.PI;

  const sideBottom = new THREE.Mesh(
    getPlaneBottomShape(A, B),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;

  const sideBottomLid = new THREE.Mesh(
    getLidD(A, P, plugSlope),
    material(O, materialColor)
  );
  sideBottomLid.castShadow = true;

  const sideABottom = new THREE.Mesh(
    getLockBottom(A, B),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;
  sideABottom.rotation.z = Math.PI;

  const sideLockLid = new THREE.Mesh(
    getLRLockD(A, B, R),
    material(O, materialColor)
  );
  sideLockLid.castShadow = true;
  sideLockLid.rotation.z = Math.PI;

  const sideLRLeftLock = new THREE.Mesh(
    getLLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRLeftLock.castShadow = true;
  sideLRLeftLock.rotation.z = -Math.PI / 2;

  const sideLRRightLock = new THREE.Mesh(
    getLRLidLockShape(B, LockHeight),
    material(O, materialColor)
  );
  sideLRRightLock.castShadow = true;
  sideLRRightLock.rotation.z = -Math.PI / 2;

  const sideBottomLock = new THREE.Mesh(
    getBottomLock(A, LockHeight, lockSlope),
    material(O, materialColor)
  );
  sideBottomLock.castShadow = true;
  sideBottomLock.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBLeftSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLRLidLeft = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );
  sideLRLidLeft.castShadow = true;

  const sideLRLidLeftD = new THREE.Mesh(
    getLLid(A, B),
    material(O, materialColor)
  );
  sideLRLidLeftD.castShadow = true;
  sideLRLidLeftD.rotation.z = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLRLidRight = new THREE.Mesh(
    getLLid(A, B),
    material(O, materialColor)
  );
  sideLRLidRight.castShadow = true;

  const sideLRLidRightD = new THREE.Mesh(
    getLRLid(A, B),
    material(O, materialColor)
  );
  sideLRLidRightD.castShadow = true;
  sideLRLidRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideAFront = new THREE.Mesh(
    getPlaneASideDShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;

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
  sideATopEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLock(A, B, R));
  const sideTopLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockLidEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRTopLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopLeftLockEdges.rotation.z = -(Math.PI / 180) * 270;

  edges = new THREE.EdgesGeometry(getLLidLockShape(B, LockHeight));
  const sideLRTopRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopRightLockEdges.rotation.z = (Math.PI / 180) * 90;

  edges = new THREE.EdgesGeometry(getTopLock(A, LockHeight, lockSlope));
  const sideTopLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBottomShape(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidD(A, P, plugSlope));
  const sideBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockBottom(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLockD(A, B, R));
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLidEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getLLidLockShape(B, LockHeight));
  const sideLRLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLeftLockEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLRLidLockShape(B, LockHeight));
  const sideLRRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRRightLockEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(getBottomLock(A, LockHeight, lockSlope));
  const sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBLeftSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLid(A, B));
  const sideLRLidLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLeftDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLid(A, B));
  const sideLRLidRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const sideLRLidRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneASideDShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

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
  pivotLockTop.position.y = B + 2;

  const pivotLockTopLid = new THREE.Object3D();
  pivotLockTopLid.add(
    sideTopLockLid,
    sideTopLockLidEdges,
    pivotLockTopLeft,
    pivotLockTopRight,
    pivotLockTop
  );
  pivotLockTopLid.position.y = (B / 2) | 0;

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
  pivotLockBottomLid.position.y = -(B / 2) | 0;

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
