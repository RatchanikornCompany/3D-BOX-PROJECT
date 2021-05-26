import * as THREE from 'three';

import { material } from '../../../function/material';

const creamDualModel = (A, B, C, R, O, G, GSlope, animate) => {
  const P = 15, //? ลิ้นเสียบ ค่า Defualt
    L = 0.3, //? เปอร์เซนนต์
    lengLRLib = A * L,
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
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  /* #endregion */
  /* #region  //* ลิ้นกันฝุ่น */

  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  // Front ....................................................
  lrLidShape.lineTo(0, 1);
  lrLidShape.lineTo((B * 0.039) | 0, (LH * 0.1) | 0); // #, 2
  lrLidShape.bezierCurveTo(
    (B * 0.04) | 0,
    (LH * 0.7) | 0,
    0,
    (LH * 1.3) | 0,
    (B * 0.143) | 0,
    (LH * 1.3) | 0
  );
  // Center ...................................................
  lrLidShape.lineTo((B * 0.193) | 0, (LH * 1.3) | 0); // #, 26
  lrLidShape.lineTo((B * 1.653) | 0, (LH * 1.3) | 0); // #, 26
  // Rear .....................................................
  lrLidShape.lineTo((B * 1.653) | 0, (LH * 0.05) | 0); // #, 1
  lrLidShape.lineTo((B * 1.654) | 0, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  /* #endregion */
  /* #region  //* ลิ้นกันฝุ่นล่าง */

  const lrLidDShape = new THREE.Shape();

  lrLidDShape.moveTo(0, 0);
  // // Front ....................................................
  lrLidDShape.lineTo(0, (LH * 0.05) | 0); // #, 1
  lrLidDShape.lineTo((B * 0.039) | 0, (LH * 0.1) | 0); // #, 2
  lrLidDShape.bezierCurveTo(
    (B * 0.135) | 0,
    (lengLRLib * 0.27) | 0,
    0,
    (lengLRLib * 0.496) | 0,
    (B * 0.99) | 0,
    (lengLRLib * 0.496) | 0
  );
  // Center ...................................................
  lrLidDShape.lineTo((B * 0.193) | 0, (LH * 1.3) | 0); // #, 26
  lrLidDShape.lineTo((B * 1.653) | 0, (LH * 1.3) | 0); // #, 26
  // Rear .....................................................
  lrLidDShape.lineTo((B * 1.653) | 0, (LH * 0.05) | 0); // #, 1
  lrLidDShape.lineTo((B * 1.654) | 0, 0);

  const lrLidD = new THREE.ShapeGeometry(lrLidDShape); // ลิ้นกันฝุ่นล่างล่าง

  /* #endregion */
  /* #region  //* ฝาล็อค */

  const lrLockShape = new THREE.Shape();

  lrLockShape.moveTo(0, 0);
  // Front ....................................................
  lrLockShape.lineTo(0, (B * 1.654) | 0); // 0, 86
  // Center ...................................................
  lrLockShape.lineTo((A * 0.989) | 0, (B * 1.654) | 0); // 173, 86
  // Rear .....................................................
  lrLockShape.lineTo((A * 0.989) | 0, 0); // 173, 0

  const holeLockShape = new THREE.Path();
  holeLockShape.moveTo(((A - 2) / 4) | 0, (B / 1.21 + R) | 0); // 43, 81
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21) | 0, // 43
    ((A - 2) / 4 - R) | 0, // 5
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 - R) | 0 // 5
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21) | 0 // 43
  );
  holeLockShape.bezierCurveTo(
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21) | 0, // 43
    ((A - 2) / 4 + R) | 0, // 81
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 4) | 0, // 43
    (B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape);

  const holeLockShape2 = new THREE.Path();
  holeLockShape2.moveTo(((A - 2) / 1.34) | 0, (B / 1.21 + R) | 0); // #, 81
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21) | 0, // 43
    ((A - 2) / 1.34 - R) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 - R) | 0 // 5
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21 - R) | 0, // 5
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21) | 0 // 43
  );
  holeLockShape2.bezierCurveTo(
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21) | 0, // 43
    ((A - 2) / 1.34 + R) | 0, // #
    (B / 1.21 + R) | 0, // 81
    ((A - 2) / 1.34) | 0, // #
    (B / 1.21 + R) | 0 // 81
  );
  lrLockShape.holes.push(holeLockShape2);

  const lrLock = new THREE.ShapeGeometry(lrLockShape); // ฝาล็อค

  /* #endregion */
  /* #region  //* ลิ้นฝาล็อค */

  const lrBottomShape = new THREE.Shape();

  // Front ....................................................
  lrBottomShape.lineTo(0, (B * 0.27) | 0);
  // Center ...................................................
  lrBottomShape.lineTo((A * 0.989) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lrBottomShape.lineTo((A * 0.989) | 0, 0);

  const lrBottom = new THREE.ShapeGeometry(lrBottomShape); // ลิ้นฝาล็อค

  /* #endregion */
  /* #region  //* ลิ้นกันฝุ่นฝาล็อค */

  const lrLidlockShape = new THREE.Shape();

  lrLidlockShape.moveTo(0, 0);
  // Front ....................................................
  lrLidlockShape.lineTo((B * 0.2) | 0, (LH * 0.7) | 0); // 14
  // Center ...................................................
  lrLidlockShape.lineTo((B * 1.616) | 0, (LH * 0.7) | 0); // 14
  // Rear .....................................................
  lrLidlockShape.lineTo((B * 1.654) | 0, 0);

  const lrLidLock = new THREE.ShapeGeometry(lrLidlockShape); // ลิ้นกันฝุ่นฝาล็อค

  /* #endregion */
  /* #region  //* ตัวเสียบฝาล็อคล่าง */

  const lrBottomLockShape = new THREE.Shape();

  lrBottomLockShape.moveTo(0, 0);
  // Front ....................................................
  lrBottomLockShape.lineTo((A * 0.029) | 0, (B * 0.27) | 0);
  // Center ...................................................
  lrBottomLockShape.lineTo((A * 0.96) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lrBottomLockShape.lineTo((A * 0.989) | 0, 0);

  const lrBottomLock = new THREE.ShapeGeometry(lrBottomLockShape); // ตัวเสียบฝาล็อคล่าง

  /* #endregion */
  /* #region  //* planeBSide */

  const planeBSideShape = new THREE.Shape();

  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo((B * 1.654) | 0, C);
  planeBSideShape.lineTo((B * 1.654) | 0, 0);

  /* #endregion */
  /* #region  //* planeTopBottom */

  const planeTopBottomShape = new THREE.Shape();

  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, (B * 1.654) | 0);
  planeTopBottomShape.lineTo(A, (B * 1.654) | 0);
  planeTopBottomShape.lineTo(A, 0);

  /* #endregion */
  /* #region  //* โมเดลมาตราฐาน */

  const planeASide = new THREE.PlaneGeometry(A, C); // ด้าน A | กว้าง x สูง | ความหนา
  const planeBSide = new THREE.ShapeGeometry(planeBSideShape); // planeBSide
  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape); // planeTopBottom

  /* #endregion */

  /* #endregion */
  /* #region  //* วัตถุ */

  /* #region  //* sideABack */
  sideABack = new THREE.Mesh(planeASide, material(O));
  sideABack.position.x = -A / 2;
  sideABack.position.y = C / 2;

  sideALidBottom = new THREE.Mesh(lid, material(O));
  sideALidBottom.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 180,
    0
  );

  sideABottom = new THREE.Mesh(planeTopBottom, material(O));
  sideABottom.position.x = -A;
  sideABottom.position.y = -(B * 1.654) | 0;
  /* #endregion */
  /* #region  //* sideAFront */
  sideAFront = new THREE.Mesh(planeASide, material(O));
  sideAFront.position.x = A / 2;
  sideAFront.position.y = C / 2;

  sideALidTop = new THREE.Mesh(lid, material(O));
  sideALidTop.rotation.set((Math.PI / 180) * 180, 0, 0);

  sideLock = new THREE.Mesh(lrLock, material(O));
  sideLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  sideATop = new THREE.Mesh(planeTopBottom, material(O));

  sideBottomLock = new THREE.Mesh(lrBottom, material(O));
  sideBottomLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  sideLRLidLockLeft = new THREE.Mesh(lrLidLock, material(O));
  sideLRLidLockLeft.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  sideLRLidLockRight = new THREE.Mesh(lrLidLock, material(O));
  sideLRLidLockRight.rotation.set(0, 0, -(Math.PI / 180) * 90);

  sideLRBottomLock = new THREE.Mesh(lrBottomLock, material(O));
  sideLRBottomLock.rotation.set((Math.PI / 180) * 180, 0, 0);

  sideGlueLid = new THREE.Mesh(glueLid, material(O));
  sideGlueLid.rotation.set(0, Math.PI, (Math.PI / 180) * 90);
  /* #endregion */
  /* #region  //* sideBLeft */
  sideBLeft = new THREE.Mesh(planeBSide, material(O));
  sideBLeft.position.x = -(B * 1.654) | 0;

  sideLeftLid = new THREE.Mesh(lrLid, material(O));
  sideLeftLid.rotation.set(0, (Math.PI / 180) * 180, 0);

  sideLeftLidD = new THREE.Mesh(lrLidD, material(O));
  sideLeftLidD.position.x = -(B * 1.654) | 0;
  sideLeftLidD.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */
  /* #region  //* sideBRight */
  sideBRight = new THREE.Mesh(planeBSide, material(O));

  sideRightLid = new THREE.Mesh(lrLid, material(O));

  sideRightLidD = new THREE.Mesh(lrLidD, material(O));
  sideRightLidD.rotation.set((Math.PI / 180) * 180, (Math.PI / 180) * 180, 0);
  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivotTop */
  pivotLidTop = new THREE.Object3D();
  pivotLidTop.add(sideALidTop);
  pivotLidTop.position.set(0, (B * 1.654) | 0, 0);

  pivotTop = new THREE.Object3D();
  pivotTop.add(sideATop, pivotLidTop);
  pivotTop.position.set(0, C, 0);
  /* #endregion */
  /* #region  //* pivotBottom */
  pivotLidBottom = new THREE.Object3D();
  pivotLidBottom.add(sideALidBottom);
  pivotLidBottom.position.set(0, -(B * 1.654) | 0, 0);

  pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideABottom, pivotLidBottom);
  /* #endregion */
  /* #region  //* pivotBack */
  pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, pivotBottom);
  /* #endregion */
  /* #region  //* pivotFront */
  pivotLRLidLockLeft = new THREE.Object3D();
  pivotLRLidLockLeft.add(sideLRLidLockLeft);

  pivotLRLidLockRight = new THREE.Object3D();
  pivotLRLidLockRight.add(sideLRLidLockRight);
  pivotLRLidLockRight.position.set((A * 0.994) | 0, 0, 0);

  pivotLRBottomLock = new THREE.Object3D();
  pivotLRBottomLock.add(sideLRBottomLock);
  pivotLRBottomLock.position.set(0, -(B * 1.654) | 0, 0);

  pivotLock = new THREE.Object3D();
  pivotLock.add(
    sideLock,
    pivotLRLidLockLeft,
    pivotLRLidLockRight,
    pivotLRBottomLock
  );
  pivotLock.position.set(0, -(B * 0.27) | 0, 0);

  pivotBottomLock = new THREE.Object3D();
  pivotBottomLock.add(sideBottomLock, pivotLock);
  pivotBottomLock.position.set((A / 175) | 0, 0, 0);

  pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid);
  pivotGlueLid.position.set(A, 0, 0);

  pivotFront = new THREE.Object3D();
  pivotFront.add(sideAFront, pivotTop, pivotBottomLock, pivotGlueLid);
  pivotFront.position.set((B * 1.654) | 0, 0, 0);
  /* #endregion */
  /* #region  //* pivotLeft */
  pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLeftLid);
  pivotLeftLid.position.set(0, C, 0);

  pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLeftLidD);

  pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, pivotLeftLid, pivotLeftLidD);
  pivotLeft.position.set(-A, 0, 0);
  /* #endregion */
  /* #region  //* pivotRight */
  pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideRightLid);
  pivotRightLid.position.set(0, C, 0);

  pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideRightLidD);
  pivotRightLidD.position.set((B * 1.654) | 0, 0, 0);

  pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, pivotRightLid, pivotRightLidD, pivotFront);
  /* #endregion */
  /* #region  //* pivotAll */
  pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotLeft, pivotRight);
  /* #endregion */

  /* #endregion */
  /* #region  //* วัตถุ - แบบมีเส้น */

  /* #region  //* sideABack */
  edges = new THREE.EdgesGeometry(planeASide);
  sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.position.x = -A / 2;
  sideABackEdges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid);
  sideALidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidBottomEdges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(planeTopBottom);
  sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.x = -A;
  sideABottomEdges.position.y = -(B * 1.654) | 0;
  /* #endregion */
  /* #region  //* sideAFront */
  edges = new THREE.EdgesGeometry(planeASide);
  sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideAFrontEdges.position.x = A / 2;
  sideAFrontEdges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid);
  sideALidTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidTopEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lrLock);
  sideLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(planeTopBottom);
  sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lrBottom);
  sideBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lrLidLock);
  sideLRLidLockLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLockLeftEdges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(lrLidLock);
  sideLRLidLockRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidLockRightEdges.rotation.set(0, 0, -(Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lrBottomLock);
  sideLRBottomLockEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRBottomLockEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(glueLid);
  sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);
  /* #endregion */
  /* #region  //* sideBLeft */
  edges = new THREE.EdgesGeometry(planeBSide);
  sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -(B * 1.654) | 0;

  edges = new THREE.EdgesGeometry(lrLid);
  sideLeftLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidEdges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(lrLidD);
  sideLeftLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidDEdges.position.x = -(B * 1.654) | 0;
  sideLeftLidDEdges.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */
  /* #region  //* sideBRight */
  edges = new THREE.EdgesGeometry(planeBSide);
  sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lrLid);
  sideRightLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lrLidD);
  sideRightLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideRightLidDEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivotTop */
  pivotLidTopEdges = new THREE.Object3D();
  pivotLidTopEdges.add(sideALidTopEdges);
  pivotLidTopEdges.position.set(0, (B * 1.654) | 0, 0);

  pivotTopEdges = new THREE.Object3D();
  pivotTopEdges.add(sideATopEdges, pivotLidTopEdges);
  pivotTopEdges.position.set(0, C, 0);
  /* #endregion */
  /* #region  //* pivotBottom */
  pivotLidBottomEdges = new THREE.Object3D();
  pivotLidBottomEdges.add(sideALidBottomEdges);
  pivotLidBottomEdges.position.set(0, -(B * 1.654) | 0, 0);

  pivotBottomEdges = new THREE.Object3D();
  pivotBottomEdges.add(sideABottomEdges, pivotLidBottomEdges);
  /* #endregion */
  /* #region  //* pivotBack */
  pivotBackEdges = new THREE.Object3D();
  pivotBackEdges.add(sideABackEdges, pivotBottomEdges);
  /* #endregion */
  /* #region  //* pivotFront */
  pivotLRLidLockLeftEdges = new THREE.Object3D();
  pivotLRLidLockLeftEdges.add(sideLRLidLockLeftEdges);

  pivotLRLidLockRightEdges = new THREE.Object3D();
  pivotLRLidLockRightEdges.add(sideLRLidLockRightEdges);
  pivotLRLidLockRightEdges.position.set((A * 0.994) | 0, 0, 0);

  pivotLRBottomLockEdges = new THREE.Object3D();
  pivotLRBottomLockEdges.add(sideLRBottomLockEdges);
  pivotLRBottomLockEdges.position.set(0, -(B * 1.654) | 0, 0);

  pivotLockEdges = new THREE.Object3D();
  pivotLockEdges.add(
    sideLockEdges,
    pivotLRLidLockLeftEdges,
    pivotLRLidLockRightEdges,
    pivotLRBottomLockEdges
  );
  pivotLockEdges.position.set(0, -(B * 0.27) | 0, 0);

  pivotBottomLockEdges = new THREE.Object3D();
  pivotBottomLockEdges.add(sideBottomLockEdges, pivotLockEdges);
  pivotBottomLockEdges.position.set((A / 175) | 0, 0, 0);

  pivotGlueLidEdges = new THREE.Object3D();
  pivotGlueLidEdges.add(sideGlueLidEdges);
  pivotGlueLidEdges.position.set(A, 0, 0);

  pivotFrontEdges = new THREE.Object3D();
  pivotFrontEdges.add(
    sideAFrontEdges,
    pivotTopEdges,
    pivotBottomLockEdges,
    pivotGlueLidEdges
  );
  pivotFrontEdges.position.set((B * 1.654) | 0, 0, 0);
  /* #endregion */
  /* #region  //* pivotLeft */
  pivotLeftLidEdges = new THREE.Object3D();
  pivotLeftLidEdges.add(sideLeftLidEdges);
  pivotLeftLidEdges.position.set(0, C, 0);

  pivotLeftLidDEdges = new THREE.Object3D();
  pivotLeftLidDEdges.add(sideLeftLidDEdges);

  pivotLeftEdges = new THREE.Object3D();
  pivotLeftEdges.add(sideBLeftEdges, pivotLeftLidEdges, pivotLeftLidDEdges);
  pivotLeftEdges.position.set(-A, 0, 0);
  /* #endregion */
  /* #region  //* pivotRight */
  pivotRightLidEdges = new THREE.Object3D();
  pivotRightLidEdges.add(sideRightLidEdges);
  pivotRightLidEdges.position.set(0, C, 0);

  pivotRightLidDEdges = new THREE.Object3D();
  pivotRightLidDEdges.add(sideRightLidDEdges);
  pivotRightLidDEdges.position.set((B * 1.654) | 0, 0, 0);

  pivotRightEdges = new THREE.Object3D();
  pivotRightEdges.add(
    sideBRightEdges,
    pivotRightLidEdges,
    pivotRightLidDEdges,
    pivotFrontEdges
  );
  /* #endregion */
  /* #region  //* pivotAll */
  pivotAllEdges = new THREE.Object3D();
  pivotAllEdges.add(pivotBackEdges, pivotLeftEdges, pivotRightEdges);
  /* #endregion */

  /* #endregion */

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAll, pivotAllEdges);

  if ((a, b, c, o, r)) {
    A = a;
    B = b;
    C = c;
    O = o;
    R = r;

    updateSize(A, B, C, O, R);
  }

  sceneAdd(pivotGroupAll);
};

const rotations = (value) => {
  value ? foldBox() : '';
};

const foldBox = () => {
  /* #region  //* จุดหมุน - ชิ้นงาน */
  /* #region  //* pivotFront */
  tween = gsap.timeline();
  tween.to(pivotFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotFront.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLid.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  //* pivotLeft */
  tween = gsap.timeline();
  tween.to(pivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeft.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLidD.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotRight */
  tween = gsap.timeline();
  tween.to(pivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRight.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidD.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotTop */
  tween = gsap.timeline();
  tween.to(pivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTop.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidTop.x = -Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotBottom */
  tween = gsap.timeline();
  tween.to(pivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottom.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotLock */
  tween = gsap.timeline();
  tween.to(pivotBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLock.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivotLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLock.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockLeft.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockRight.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRBottomLock.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #endregion */

  /* #region  //* จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  //* pivotFront */
  tween = gsap.timeline();
  tween.to(pivotFrontEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotFrontEdges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotGlueLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotGlueLidEdges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  //* pivotLeft */
  tween = gsap.timeline();
  tween.to(pivotLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLeftEdges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLidEdges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotLeftLidDEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLeftLidDEdges.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotRight */
  tween = gsap.timeline();
  tween.to(pivotRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotRightEdges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidEdges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivotRightLidDEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotRightLidDEdges.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotTop */
  tween = gsap.timeline();
  tween.to(pivotTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotTopEdges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidTopEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidTopEdges.x = -Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotBottom */
  tween = gsap.timeline();
  tween.to(pivotBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomEdges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLidBottomEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLidBottomEdges.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  //* pivotLock */
  tween = gsap.timeline();
  tween.to(pivotBottomLockEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBottomLockEdges.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivotLockEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLockEdges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockLeftEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockLeftEdges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRLidLockRightEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotLRLidLockRightEdges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivotLRBottomLockEdges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotLRBottomLockEdges.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #endregion */
};
