import * as THREE from 'three';

import { material } from '../../../../../function/material';

import {
  getLid,
  getGlueLid,
  getLRLid,
  getLRBottom,
  getLRLock,
  getLRLidLock,
  getLRBottomLock,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from '../../../creamsinglelock/render/object/module/models';
import { foldBox } from './module/animate';

export const creamUpperBottomLockModel = (
  A,
  B,
  C,
  R,
  O,
  G,
  GSlope,
  animate
) => {
  const P = 15, //? ลิ้นเสียบ ค่า Defualt
    LH = 20; //? ความสูงฐานล็อค ค่า Defualt

  /* #region  //* โมเดล */

  /* #region  //* ฝาเสียบ */

  const lidShape = new THREE.Shape();
  lidShape.moveTo(0, 0);
  lidShape.lineTo(A, 0);
  lidShape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lidShape.lineTo(A / 10, -P);
  lidShape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const lid = new THREE.ShapeGeometry(lidShape); // ฝาเสียบ

  /* #endregion */
  /* #region  //* ฝาเสียบกาว */

  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(GSlope, G);
  glueLidShape.lineTo(C - GSlope, G);
  glueLidShape.lineTo(C, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  /* #endregion */
  /* #region  //* ลิ้นกันฝุ่น */

  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  // Front ....................................................
  lrLidShape.lineTo(0, (LH * 0.1) | 0); // 0, 2
  lrLidShape.lineTo((B * 0.039) | 0, (LH * 0.15) | 0); // 2, 3
  lrLidShape.lineTo((B * 0.14) | 0, (LH * 0.9) | 0); // 7, 18
  // Center ...................................................
  lrLidShape.lineTo((B * 0.2) | 0, LH); // 10, 20
  lrLidShape.lineTo((B * 0.99) | 0, LH); // 51, 20
  // Rear .....................................................
  lrLidShape.lineTo((B * 0.99) | 0, (LH * 0.1) | 0); // 51, 2
  lrLidShape.lineTo(B, 0); // 52, 0

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  /* #endregion */
  /* #region  //* ลิ้นฝาล็อค */

  const lrBottomShape = new THREE.Shape();

  lrBottomShape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lrBottomShape.lineTo((A * 0.02) | 0, (B * 0.39) | 0); // 0, 20
  // Center ...................................................
  lrBottomShape.lineTo((A * 0.99) | 0, (B * 0.39) | 0); // 50, 20
  // Rear .....................................................
  lrBottomShape.lineTo((A * 0.99) | 0, 0); // 50, 0

  const lrBottom = new THREE.ShapeGeometry(lrBottomShape); // ลิ้นฝาล็อค

  /* #endregion */
  /* #region  //* ฝาล็อค */

  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lrLockShape.lineTo((A * 0.02) | 0, (B * 0.962) | 0);
  // Center ...................................................
  lrLockShape.lineTo((A * 0.99) | 0, (B * 0.962) | 0);
  // Rear .....................................................
  lrLockShape.lineTo((A * 0.99) | 0, 0);

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

  /* #endregion */
  /* #region  //* ลิ้นกันฝุ่นฝาล็อค */

  const lrLidLockShape = new THREE.Shape();

  lrLidLockShape.moveTo(0, -(LH * 0.05) | 0);
  // Front ....................................................
  lrLidLockShape.lineTo((B * 0.2) | 0, (LH * 0.95) | 0); // 10, 20
  // Center ...................................................
  lrLidLockShape.lineTo((B * 0.885) | 0, (LH * 0.95) | 0); // 46, 20
  // Rear .....................................................
  lrLidLockShape.lineTo((B * 0.962) | 0, -(LH * 0.05) | 0); // 50, 0

  const lrLidLock = new THREE.ShapeGeometry(lrLidLockShape); // ลิ้นกันฝุ่นฝาล็อค

  /* #endregion */
  /* #region  //* ตัวเสียบฝาล็อคบน */

  const lrBottomLockShape = new THREE.Shape();

  lrBottomLockShape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lrBottomLockShape.lineTo((A * 0.116) | 0, LH);
  // Center ...................................................
  lrBottomLockShape.lineTo((A * 0.885) | 0, LH);
  // Rear .....................................................
  lrBottomLockShape.lineTo((A * 0.99) | 0, 0);

  const lrBottomLock = new THREE.ShapeGeometry(lrBottomLockShape); // ตัวเสียบฝาล็อคบน

  /* #endregion */

  /* #endregion */

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  const sideTop = new THREE.Mesh(getPlaneTopBottomShape(A, B), material(O));

  const sideTopLid = new THREE.Mesh(lid, material(O));
  sideTopLid.rotation.x = Math.PI;

  const sideATop = new THREE.Mesh(lrBottom, material(O));
  sideATop.rotation.y = Math.PI;

  const sideTopLockLid = new THREE.Mesh(lrLock, material(O));
  sideTopLockLid.rotation.y = Math.PI;

  const sideLRTopLeftLock = new THREE.Mesh(lrLidLock, material(O));
  sideLRTopLeftLock.rotation.z = -(Math.PI / 180) * 270;

  const sideLRTopRightLock = new THREE.Mesh(lrLidLock, material(O));
  sideLRTopRightLock.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  const sideTopLock = new THREE.Mesh(lrBottomLock, material(O));
  sideTopLock.rotation.y = Math.PI;

  const sideBottom = new THREE.Mesh(getPlaneTopBottomShape(A, B), material(O));
  sideBottom.rotation.x = Math.PI;

  const sideBottomLid = new THREE.Mesh(lid, material(O));

  const sideABottom = new THREE.Mesh(lrBottom, material(O));
  sideABottom.rotation.set(Math.PI, Math.PI, 0);

  const sideLockLid = new THREE.Mesh(lrLock, material(O));
  sideLockLid.rotation.set(Math.PI, Math.PI, 0);

  const sideLRLeftLock = new THREE.Mesh(lrLidLock, material(O));
  sideLRLeftLock.rotation.set(0, Math.PI, -Math.PI / 2);

  const sideLRRightLock = new THREE.Mesh(lrLidLock, material(O));
  sideLRRightLock.rotation.z = -Math.PI / 2;

  const sideBottomLock = new THREE.Mesh(lrBottomLock, material(O));
  sideBottomLock.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideLRLidLeft = new THREE.Mesh(lrLid, material(O));

  const sideLRLidLeftD = new THREE.Mesh(lrLid, material(O));
  sideLRLidLeftD.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  const sideLRLidRight = new THREE.Mesh(lrLid, material(O));
  sideLRLidRight.rotation.y = Math.PI;

  const sideLRLidRightD = new THREE.Mesh(lrLid, material(O));
  sideLRLidRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideAFront = new THREE.Mesh(getPlaneASideShape(A, C), material(O));
  sideAFront.rotation.y = Math.PI;

  const sideGlueLid = new THREE.Mesh(glueLid, material(O));
  sideGlueLid.rotation.z = Math.PI / 2;

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

  edges = new THREE.EdgesGeometry(lid);
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLidEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lrBottom);
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideATopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lrLock);
  const sideTopLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLockLidEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lrLidLock);
  const sideLRTopLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopLeftLockEdges.rotation.z = -(Math.PI / 180) * 270;

  edges = new THREE.EdgesGeometry(lrLidLock);
  const sideLRTopRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRTopRightLockEdges.rotation.set(0, Math.PI, Math.PI / 2);

  edges = new THREE.EdgesGeometry(lrBottomLock);
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

  edges = new THREE.EdgesGeometry(lid);
  const sideBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lrBottom);
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lrLock);
  const sideLockLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLidEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lrLidLock);
  const sideLRLeftLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLeftLockEdges.rotation.set(0, Math.PI, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(lrLidLock);
  const sideLRRightLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRRightLockEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(lrBottomLock);
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

  edges = new THREE.EdgesGeometry(lrLid);
  const sideLRLidLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lrLid);
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

  edges = new THREE.EdgesGeometry(lrLid);
  const sideLRLidRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lrLid);
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

  edges = new THREE.EdgesGeometry(glueLid);
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

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
