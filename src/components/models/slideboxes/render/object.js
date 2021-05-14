import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getInnerFlapTopBottomShape,
  getInnerFlapLeftRightShape,
  getDustFlapHalfTopShape,
  getDustFlapHalfBottomShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './module/models';
import { lidBoxes } from './module/lidBoxes';
import { foldBox, expandBox } from './module/animate';

let getPivotBLidBack;
let getPivotALidBack;
let getPivotBLidFront;
let getPivotGludLid;
let getPivotALidFront;

export const slideBoxesModel = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  valueGSlope,
  animate
) => {
  const sideABack = new THREE.Mesh(
    getPlaneASideShape(valueA, valueB),
    material(valueO)
  );

  const sideInnerFlapLeft = new THREE.Mesh(
    getInnerFlapLeftRightShape(valueB, valueC),
    material(valueO)
  );
  sideInnerFlapLeft.rotation.z = Math.PI / 2;

  const sideLidBLeft = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );
  sideLidBLeft.position.x = -valueC;

  const sideDustFlapLeftTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapLeftTop.rotation.y = Math.PI;

  const sideDustFlapLeftBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );
  sideBLeft.position.x = -valueC;

  const sideInnerFlapRight = new THREE.Mesh(
    getInnerFlapLeftRightShape(valueB, valueC),
    material(valueO)
  );
  sideInnerFlapRight.rotation.set(Math.PI, 0, -Math.PI / 2);

  const sideLidBRight = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );

  const sideDustFlapRightTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );

  const sideDustFlapRightBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapRightBottom.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );

  const sideInnerFlapTop = new THREE.Mesh(
    getInnerFlapTopBottomShape(valueA, valueC),
    material(valueO)
  );

  const sideLidCTop = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapTopLeft.rotation.y = Math.PI;

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );

  const sideATop = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );

  const sideInnerFlapBottom = new THREE.Mesh(
    getInnerFlapTopBottomShape(valueA, valueC),
    material(valueO)
  );
  sideInnerFlapBottom.rotation.x = Math.PI;

  const sideLidCBottom = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );
  sideLidCBottom.position.y = -valueC;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapBottomRight.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );
  sideABottom.position.y = -valueC;

  /* #endregion */

  /* #region  //! pivotLeft */

  pivotInnerFlapLeft = new THREE.Object3D();
  pivotInnerFlapLeft.add(sideInnerFlapLeft);
  pivotInnerFlapLeft.position.x = -valueC;

  pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, pivotInnerFlapLeft);
  pivotLidBLeft.position.x = -valueC;

  pivotDustFlapLeftTop = new THREE.Object3D();
  pivotDustFlapLeftTop.add(sideDustFlapLeftTop);
  pivotDustFlapLeftTop.position.y = valueB;

  pivotDustFlapLeftBottom = new THREE.Object3D();
  pivotDustFlapLeftBottom.add(sideDustFlapLeftBottom);

  pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    pivotLidBLeft,
    pivotDustFlapLeftTop,
    pivotDustFlapLeftBottom
  );

  pivotInnerFlapRight = new THREE.Object3D();
  pivotInnerFlapRight.add(sideInnerFlapRight);
  pivotInnerFlapRight.position.x = valueC;

  pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, pivotInnerFlapRight);
  pivotLidBRight.position.x = valueC;

  pivotDustFlapRightTop = new THREE.Object3D();
  pivotDustFlapRightTop.add(sideDustFlapRightTop);
  pivotDustFlapRightTop.position.y = valueB;

  pivotDustFlapRightBottom = new THREE.Object3D();
  pivotDustFlapRightBottom.add(sideDustFlapRightBottom);

  pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    pivotLidBRight,
    pivotDustFlapRightTop,
    pivotDustFlapRightBottom
  );
  pivotRight.position.x = valueA;

  pivotInnerFlapTop = new THREE.Object3D();
  pivotInnerFlapTop.add(sideInnerFlapTop);
  pivotInnerFlapTop.position.y = valueC;

  pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideLidCTop, pivotInnerFlapTop);
  pivotLidATop.position.y = valueC;

  pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft);

  pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight);
  pivotDustFlapTopRight.position.x = valueA;

  pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.y = valueB;

  pivotInnerFlapBottom = new THREE.Object3D();
  pivotInnerFlapBottom.add(sideInnerFlapBottom);
  pivotInnerFlapBottom.position.y = -valueC;

  pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(sideLidCBottom, pivotInnerFlapBottom);
  pivotLidABottom.position.y = -valueC;

  pivotDustFlapBottomLeft = new THREE.Object3D();
  pivotDustFlapBottomLeft.add(sideDustFlapBottomLeft);

  pivotDustFlapBottomRight = new THREE.Object3D();
  pivotDustFlapBottomRight.add(sideDustFlapBottomRight);
  pivotDustFlapBottomRight.position.x = valueA;

  pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    pivotLidABottom,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, pivotLeft, pivotRight, pivotTop, pivotBottom);

  /* #endregion */

  const pivotAll = new THREE.Object3D();
  pivotAll.add(
    pivotBack,
    lidBoxes(valueA, valueB, valueC, valueO, valueG, valueGSlope)
  );

  const lid = (
    pivotBLidBack,
    pivotALidBack,
    pivotBLidFront,
    pivotGludLid,
    pivotALidFront
  ) => {
    getPivotBLidBack = pivotBLidBack;
    getPivotALidBack = pivotALidBack;
    getPivotBLidFront = pivotBLidFront;
    getPivotGludLid = pivotGludLid;
    getPivotALidFront = pivotALidFront;
  };

  animate
    ? foldBox(
        pivotBack,
        pivotLeft,
        pivotLidBLeft,
        pivotDustFlapLeftTop,
        pivotDustFlapLeftBottom,
        pivotInnerFlapLeft,
        pivotRight,
        pivotLidBRight,
        pivotDustFlapRightTop,
        pivotDustFlapRightBottom,
        pivotInnerFlapRight,
        pivotTop,
        pivotLidATop,
        pivotDustFlapTopLeft,
        pivotDustFlapTopRight,
        pivotInnerFlapTop,
        pivotBottom,
        pivotLidABottom,
        pivotDustFlapBottomLeft,
        pivotDustFlapBottomRight,
        pivotInnerFlapBottom,
        getPivotBLidBack,
        getPivotALidBack,
        getPivotBLidFront,
        getPivotGludLid,
        getPivotALidFront
      )
    : expandBox(
        A,
        pivotBack,
        pivotLeft,
        pivotLidBLeft,
        pivotDustFlapLeftTop,
        pivotDustFlapLeftBottom,
        pivotInnerFlapLeft,
        pivotRight,
        pivotLidBRight,
        pivotDustFlapRightTop,
        pivotDustFlapRightBottom,
        pivotInnerFlapRight,
        pivotTop,
        pivotLidATop,
        pivotDustFlapTopLeft,
        pivotDustFlapTopRight,
        pivotInnerFlapTop,
        pivotBottom,
        pivotLidABottom,
        pivotDustFlapBottomLeft,
        pivotDustFlapBottomRight,
        pivotInnerFlapBottom,
        getPivotBLidBack,
        getPivotALidBack,
        getPivotBLidFront,
        getPivotGludLid,
        getPivotALidFront
      );

  return pivotAll;
};
