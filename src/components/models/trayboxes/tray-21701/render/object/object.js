import * as THREE from 'three';

import rotateObject from '../../../../../function/rotateObject';

import {
  getPlaneASide,
  getPlaneACorrugated,
  getPlaneATopLeftRightShape,
  getPlaneATopLeftRightCorrugated,
  getPlaneATopLidLeftRightShape,
  getPlaneATopLidLeftRightCorrugated,
  getPlaneABackShape,
  getPlaneABackCorrugated,
  getPlaneBTopBottomShape,
  getPlaneBTopBottomCorrugated,
  getPlaneBTopLidShape,
  getPlaneBTopLidShapeCorrugated,
  getPlaneBBottomLidShape,
  getPlaneBBottomLidShapeCorrugated,
  getPlaneBLeftRightShape,
  getPlaneBLeftRightCorrugated,
  getPlaneBLeftRightLidShape,
  getPlaneBLeftRightLidCorrugated,
} from './module/model';
import { foldBox, expandBox } from './module/animate';

export const trayModel = (A, B, C, O, animate) => {
  const sideATop = new THREE.Group();
  sideATop.add(getPlaneASide(A, B, O), getPlaneACorrugated(A, B, O));

  const sideATopLeft = new THREE.Group();
  sideATopLeft.add(
    getPlaneATopLeftRightShape(B, O),
    getPlaneATopLeftRightCorrugated(A, C, O)
  );

  const sideABack = new THREE.Group();
  sideABack.add(getPlaneABackShape(O), ...getPlaneABackCorrugated(A, B, C, O));

  const sideBLeft = new THREE.Group();
  sideBLeft.add(
    getPlaneBLeftRightShape(C, B, O),
    getPlaneBLeftRightCorrugated(A, C, O)
  );
  rotateObject(sideBLeft, 0, 180);

  const sideBRight = new THREE.Group();
  sideBRight.add(sideBLeft.clone());
  rotateObject(sideBRight, 0, -180);

  const sideBTopLeft = new THREE.Group();
  sideBTopLeft.add(
    getPlaneBTopLidShape(C, O),
    ...getPlaneBTopLidShapeCorrugated(C, O)
  );

  const sideBTopRight = new THREE.Group();
  sideBTopRight.add(sideBTopLeft.clone());

  const sideBTop = new THREE.Group();
  sideBTop.add(
    getPlaneBTopBottomShape(A, C, O),
    getPlaneBTopBottomCorrugated(A, C, O)
  );

  const sideBBottomRight = new THREE.Group();
  sideBBottomRight.add(
    getPlaneBBottomLidShape(C, O),
    ...getPlaneBBottomLidShapeCorrugated(C, O)
  );

  const sideBBottom = new THREE.Group();
  sideBBottom.add(sideBTop.clone());
  sideBBottom.position.set(A, 0, -2.5);
  rotateObject(sideBBottom, 0, -180);

  const sideATopLid = new THREE.Group();
  sideATopLid.add(sideBTop.clone());

  const sideATopLidL = new THREE.Group();
  sideATopLidL.add(
    getPlaneATopLidLeftRightShape(C, O),
    ...getPlaneATopLidLeftRightCorrugated(C, O)
  );

  const sideBLeftLid = new THREE.Group();
  sideBLeftLid.add(
    getPlaneBLeftRightLidShape(B, C, O),
    getPlaneBLeftRightLidCorrugated(A, C, O)
  );

  const pivotBLeftLid = new THREE.Object3D();
  pivotBLeftLid.add(sideBLeftLid);
  rotateObject(pivotBLeftLid, 0, 180);
  pivotBLeftLid.position.x = -B / 2;

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(sideBLeft, pivotBLeftLid);
  pivotBLeft.position.z = -2.5;

  const pivotBRightLid = new THREE.Object3D();
  pivotBRightLid.add(sideBLeftLid.clone());
  pivotBRightLid.position.x = B / 2;

  const pivotBRight = new THREE.Object3D();
  pivotBRight.add(sideBRight, pivotBRightLid);
  pivotBRight.position.x = A;

  const pivotATopLidL = new THREE.Object3D();
  pivotATopLidL.add(sideATopLidL);
  rotateObject(pivotATopLidL, 0, 180);
  pivotATopLidL.position.set(1, 0, -2.5);

  const pivotATopLidR = new THREE.Object3D();
  pivotATopLidR.add(sideATopLidL.clone());
  pivotATopLidR.position.x = A - 1;

  const pivotATopLid = new THREE.Object3D();
  pivotATopLid.add(sideATopLid, pivotATopLidL, pivotATopLidR);
  pivotATopLid.position.y = B;

  const pivotATopLeft = new THREE.Object3D();
  pivotATopLeft.add(sideATopLeft);
  rotateObject(pivotATopLeft, 0, 180);
  pivotATopLeft.position.set(2, 0, -2.5);

  const pivotATopRight = new THREE.Object3D();
  pivotATopRight.add(sideATopLeft.clone());
  pivotATopRight.position.x = A - 2;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop, pivotATopLid, pivotATopLeft, pivotATopRight);
  pivotATop.position.y = C;

  const pivotBTopLeft = new THREE.Object3D();
  pivotBTopLeft.add(sideBTopLeft);
  pivotBTopLeft.position.set(1, 0, -2.5);
  rotateObject(pivotBTopLeft, 0, 180);

  const pivotBTopRight = new THREE.Object3D();
  pivotBTopRight.add(sideBTopRight);
  pivotBTopRight.position.x = A - 1;

  const pivotBTop = new THREE.Object3D();
  pivotBTop.add(sideBTop, pivotATop, pivotBTopLeft, pivotBTopRight);
  pivotBTop.position.y = B;

  const pivotBBottomRight = new THREE.Object3D();
  pivotBBottomRight.add(sideBBottomRight);
  pivotBBottomRight.position.x = A - 1;

  const pivotBBottomLeft = new THREE.Object3D();
  pivotBBottomLeft.add(sideBBottomRight.clone());
  rotateObject(pivotBBottomLeft, 0, 180);
  pivotBBottomLeft.position.set(1, 0, -2.5);

  const pivotBBottom = new THREE.Object3D();
  pivotBBottom.add(sideBBottom, pivotBBottomRight, pivotBBottomLeft);
  pivotBBottom.position.z = -2.5;
  rotateObject(pivotBBottom, 180);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, pivotBLeft, pivotBRight, pivotBTop, pivotBBottom);

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotABack);

  animate
    ? foldBox(
        A,
        B,
        C,
        pivotABack,
        pivotBTopLeft,
        pivotBTopRight,
        pivotBBottomLeft,
        pivotBBottomRight,
        pivotBTop,
        pivotBBottom,
        pivotBLeft,
        pivotBRight,
        pivotBLeftLid,
        pivotBRightLid,
        pivotATopLeft,
        pivotATopRight,
        pivotATop,
        pivotATopLidL,
        pivotATopLidR,
        pivotATopLid
      )
    : expandBox(
        A,
        B,
        C,
        pivotABack,
        pivotBTopLeft,
        pivotBTopRight,
        pivotBBottomLeft,
        pivotBBottomRight,
        pivotBTop,
        pivotBBottom,
        pivotBLeft,
        pivotBRight,
        pivotBLeftLid,
        pivotBRightLid,
        pivotATopLeft,
        pivotATopRight,
        pivotATop,
        pivotATopLidL,
        pivotATopLidR,
        pivotATopLid
      );

  return pivotAll;
};
