import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getPlaneASideShape,
  getPlaneBSide,
  getPlaneATopShape,
  getPlaneBTop,
  getPlaneABottomDShape,
  getPlaneABottomSideShape,
  getPlaneBHalfBottomShape,
  getPlaneBHalfDBottomShape,
  getGlueLid,
  getGlueTop,
  getGlueCenter,
  getGlueCenterLid,
  getGlueBottom,
  getPlaneBBottomShape,
  getPlaneABottomLeftRightSideShape,
  getTube,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

export const shoppingBagsModel = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  animate
) => {
  const D = valueC <= 300 ? 30 : 40;
  const R = 6;

  const sideATop = new THREE.Mesh(
    getPlaneATopShape(valueA, D, R),
    material(valueO)
  );

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(valueA, valueB, valueC, D, R),
    material(valueO)
  );

  const sideABottomD = new THREE.Mesh(
    getPlaneABottomDShape(valueA, valueB),
    material(valueO)
  );

  const sideABottom = new THREE.Mesh(
    getPlaneABottomSideShape(valueA, valueB),
    material(valueO)
  );

  const sideABottomLeftRight = new THREE.Mesh(
    getPlaneABottomLeftRightSideShape(valueB),
    material(valueO)
  );

  const rope = new THREE.Mesh(
    getTube(valueA, valueB, valueC, D, R),
    material(valueO)
  );

  const sideBTop = new THREE.Mesh(getPlaneBTop(valueB, D), material(valueO));

  const sideBRightL = new THREE.Mesh(
    getPlaneBSide(valueB, valueC),
    material(valueO)
  );

  const sideBRightR = new THREE.Mesh(
    getPlaneBSide(valueB, valueC),
    material(valueO)
  );

  const sideBHalfBottom = new THREE.Mesh(
    getPlaneBHalfBottomShape(valueB),
    material(valueO)
  );

  const sideBHalfDBottom = new THREE.Mesh(
    getPlaneBHalfDBottomShape(valueB),
    material(valueO)
  );

  const sideBBottom = new THREE.Mesh(
    getPlaneBBottomShape(valueB),
    material(valueO)
  );

  const sideGlueTop = new THREE.Mesh(getGlueTop(D, valueG), material(valueO));

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(valueB, valueC, valueG),
    material(valueO)
  );

  const sideGlueCenter = new THREE.Mesh(
    getGlueCenter(valueB, valueG),
    material(valueO)
  );

  const sideGlueCenterLid = new THREE.Mesh(
    getGlueCenterLid(valueG),
    material(valueO)
  );

  const sideGlueBottom = new THREE.Mesh(
    getGlueBottom(valueB, valueG),
    material(valueO)
  );

  const pivotGlueTop = new THREE.Object3D();
  pivotGlueTop.add(sideGlueTop);
  pivotGlueTop.position.y = (valueC - valueB / 2) | 0;

  const pivotGlueBottom = new THREE.Object3D();
  pivotGlueBottom.add(sideGlueBottom);
  pivotGlueBottom.rotation.x = Math.PI;

  const pivotGlueCenterLid = new THREE.Object3D();
  pivotGlueCenterLid.add(sideGlueCenterLid, pivotGlueBottom);
  pivotGlueCenterLid.rotation.y = Math.PI;
  pivotGlueCenterLid.position.x = valueG;

  const pivotGlueCenter = new THREE.Object3D();
  pivotGlueCenter.add(sideGlueCenter, pivotGlueCenterLid);
  pivotGlueCenter.position.y = -(valueB / 2) | 0;

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, pivotGlueTop, pivotGlueCenter);
  pivotGlueLid.position.x = valueA;

  const pivotABackTop = new THREE.Object3D();
  pivotABackTop.add(sideATop.clone());
  pivotABackTop.position.y = (valueC - valueB / 2) | 0;

  const pivotABackBottomLeft = new THREE.Object3D();
  pivotABackBottomLeft.add(sideABottomLeftRight.clone());

  const pivotABackBottomRight = new THREE.Object3D();
  pivotABackBottomRight.add(pivotABackBottomLeft.clone());
  pivotABackBottomRight.rotation.y = Math.PI;
  pivotABackBottomRight.position.x =
    (valueA - (valueB / 2 + 15) + valueB / 2 + 15) | 0;

  const pivotABackBottom = new THREE.Object3D();
  pivotABackBottom.add(
    sideABottom.clone(),
    pivotABackBottomLeft,
    pivotABackBottomRight
  );
  pivotABackBottom.position.y = (valueB / 2) | 0;

  const pivotABackBottomD = new THREE.Object3D();
  pivotABackBottomD.add(sideABottomD.clone(), pivotABackBottom);
  pivotABackBottomD.rotation.x = Math.PI;

  const pivotRopeABack = new THREE.Object3D();
  pivotRopeABack.add(rope.clone());
  pivotRopeABack.position.set((valueA / 2) | 0, valueC - valueB / 2 - D / 2, 2);
  pivotRopeABack.rotation.y = Math.PI;

  const pivotABack = new THREE.Object3D();
  pivotABack.add(
    sideAFront.clone(),
    pivotABackTop,
    pivotABackBottomD,
    pivotGlueLid,
    pivotRopeABack
  );
  pivotABack.position.x = (valueB / 2) | 0;

  const pivotBLeftLTop = new THREE.Object3D();
  pivotBLeftLTop.add(sideBTop.clone());
  pivotBLeftLTop.position.y = (valueC - valueB / 2) | 0;

  const pivotBLeftHalfLeftBottom = new THREE.Object3D();
  pivotBLeftHalfLeftBottom.add(sideBHalfBottom.clone());
  pivotBLeftHalfLeftBottom.rotation.x = Math.PI;

  const pivotBLeftLBottom = new THREE.Object3D();
  pivotBLeftLBottom.add(sideBBottom.clone());
  pivotBLeftLBottom.position.y = (valueB / 2) | 0;

  const pivotBLeftHalfLeftDBottom = new THREE.Object3D();
  pivotBLeftHalfLeftDBottom.add(sideBHalfDBottom.clone(), pivotBLeftLBottom);
  pivotBLeftHalfLeftDBottom.rotation.x = Math.PI;

  const pivotBLeftL = new THREE.Object3D();
  pivotBLeftL.add(
    sideBRightR.clone(),
    pivotBLeftLTop,
    pivotBLeftHalfLeftBottom,
    pivotBLeftHalfLeftDBottom,
    pivotABack
  );
  pivotBLeftL.position.x = (valueB / 2) | 0;

  const pivotBLeftRTop = new THREE.Object3D();
  pivotBLeftRTop.add(sideBTop.clone());
  pivotBLeftRTop.position.y = (valueC - valueB / 2) | 0;

  const pivotBLeftHalfRightBottom = new THREE.Object3D();
  pivotBLeftHalfRightBottom.add(sideBHalfBottom.clone());
  pivotBLeftHalfRightBottom.position.y = -(valueB / 2) | 0;

  const pivotBLeftRBottom = new THREE.Object3D();
  pivotBLeftRBottom.add(sideBBottom.clone());
  pivotBLeftRBottom.rotation.x = Math.PI;

  const pivotBLeftHalfRightDBottom = new THREE.Object3D();
  pivotBLeftHalfRightDBottom.add(sideBHalfDBottom.clone(), pivotBLeftRBottom);
  pivotBLeftHalfRightDBottom.position.y = -(valueB / 2) | 0;

  const pivotBLeftR = new THREE.Object3D();
  pivotBLeftR.add(
    sideBRightR.clone(),
    pivotBLeftRTop,
    pivotBLeftHalfRightBottom,
    pivotBLeftHalfRightDBottom,
    pivotBLeftL
  );
  pivotBLeftR.rotation.y = Math.PI;

  const pivotSideBRightTop = new THREE.Object3D();
  pivotSideBRightTop.add(sideBTop.clone());
  pivotSideBRightTop.position.y = (valueC - valueB / 2) | 0;

  const pivotBRightBottom = new THREE.Object3D();
  pivotBRightBottom.add(sideBBottom.clone());
  pivotBRightBottom.position.y = (valueB / 2) | 0;

  const pivotBHalfRightBottom = new THREE.Object3D();
  pivotBHalfRightBottom.add(sideBHalfBottom.clone());
  pivotBHalfRightBottom.rotation.x = Math.PI;

  const pivotBHalfRightDBottom = new THREE.Object3D();
  pivotBHalfRightDBottom.add(sideBHalfDBottom.clone(), pivotBRightBottom);
  pivotBHalfRightDBottom.rotation.x = Math.PI;

  const pivotBRightR = new THREE.Object3D();
  pivotBRightR.add(
    sideBRightR,
    pivotSideBRightTop,
    pivotBHalfRightBottom,
    pivotBHalfRightDBottom
  );
  pivotBRightR.position.x = (valueB / 2) | 0;

  const pivotSideBLeftTop = new THREE.Object3D();
  pivotSideBLeftTop.add(sideBTop);
  pivotSideBLeftTop.position.y = (valueC - valueB / 2) | 0;

  const pivotBHalfLeftBottom = new THREE.Object3D();
  pivotBHalfLeftBottom.add(sideBHalfBottom);
  pivotBHalfLeftBottom.position.y = -(valueB / 2) | 0;

  const pivotBLeftBottom = new THREE.Object3D();
  pivotBLeftBottom.add(sideBBottom);
  pivotBLeftBottom.rotation.x = Math.PI;

  const pivotBHalfLeftDBottom = new THREE.Object3D();
  pivotBHalfLeftDBottom.add(sideBHalfDBottom, pivotBLeftBottom);
  pivotBHalfLeftDBottom.position.y = -(valueB / 2) | 0;

  const pivotBRightL = new THREE.Object3D();
  pivotBRightL.add(
    sideBRightL,
    pivotSideBLeftTop,
    pivotBHalfLeftBottom,
    pivotBHalfLeftDBottom,
    pivotBRightR
  );
  pivotBRightL.position.x = valueA;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop);
  pivotATop.position.y = (valueC - valueB / 2) | 0;

  const pivotABottomLeft = new THREE.Object3D();
  pivotABottomLeft.add(sideABottomLeftRight);

  const pivotABottomRight = new THREE.Object3D();
  pivotABottomRight.add(pivotABottomLeft.clone());
  pivotABottomRight.rotation.y = Math.PI;
  pivotABottomRight.position.x =
    (valueA - (valueB / 2 + 15) + valueB / 2 + 15) | 0;

  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(sideABottom, pivotABottomLeft, pivotABottomRight);
  pivotABottom.position.y = (valueB / 2) | 0;

  const pivotABottomD = new THREE.Object3D();
  pivotABottomD.add(sideABottomD, pivotABottom);
  pivotABottomD.rotation.x = Math.PI;

  const pivotRopeAFront = new THREE.Object3D();
  pivotRopeAFront.add(rope);
  pivotRopeAFront.position.set(
    (valueA / 2) | 0,
    valueC - valueB / 2 - D / 2,
    -2
  );

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    pivotATop,
    pivotABottomD,
    pivotBRightL,
    pivotBLeftR,
    pivotRopeAFront
  );

  animate
    ? foldBox(
        pivotBRightL,
        pivotATop,
        pivotSideBLeftTop,
        pivotSideBRightTop,
        pivotBLeftBottom,
        pivotBRightBottom,
        pivotABottomLeft,
        pivotABottomRight,
        pivotABottom,
        pivotBLeftR,
        pivotBLeftRTop,
        pivotBLeftRBottom,
        pivotBLeftLTop,
        pivotBLeftLBottom,
        pivotABack,
        pivotABackTop,
        pivotABackBottom,
        pivotABackBottomLeft,
        pivotABackBottomRight,
        pivotGlueTop,
        pivotGlueBottom,
        pivotGlueLid
      )
    : expandBox(
        pivotBRightL,
        pivotATop,
        pivotSideBLeftTop,
        pivotSideBRightTop,
        pivotBLeftBottom,
        pivotBRightBottom,
        pivotABottomLeft,
        pivotABottomRight,
        pivotABottom,
        pivotBLeftR,
        pivotBLeftRTop,
        pivotBLeftRBottom,
        pivotBLeftLTop,
        pivotBLeftLBottom,
        pivotABack,
        pivotABackTop,
        pivotABackBottom,
        pivotABackBottomLeft,
        pivotABackBottomRight,
        pivotGlueTop,
        pivotGlueBottom,
        pivotGlueLid
      );

  return pivotAFront;
};
