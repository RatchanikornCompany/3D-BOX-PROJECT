import * as THREE from 'three';

import rotateObject from '../../../../function/rotateObject';

import {
  getPlaneASideShape,
  getPlaneASideCorrugated,
  getPlaneABack,
  getPlaneABackCorrugated,
  getPlaneBSideShape,
  getPlaneBSideCorrugated,
  getPlaneATopBottomShape,
  getPlaneATopBottomCorrugated,
  getPlaneATopBottomBackShape,
  getPlaneATopBottomBackCorrugated,
  getPlaneBTopBottomShape,
  getPlaneBTopBottomCorrugated,
  getGlueLidShape,
  getGlueLidCorrugated,
} from './module/model';
import { foldBox, expandBox } from './module/animate';

export const standObject = (A, B, C, O, G, GSlope, animate) => {
  const sideAFront = new THREE.Group();
  sideAFront.name = 'sideAFront';
  sideAFront.add(getPlaneASideShape(A, C, O), getPlaneASideCorrugated(A, C, O));

  const sideATopFront = new THREE.Group();
  sideATopFront.name = 'sideATopFront';
  sideATopFront.add(
    getPlaneATopBottomShape(A, B, O),
    getPlaneATopBottomCorrugated(A, B, O)
  );

  const sideABottomFront = new THREE.Group();
  sideABottomFront.name = 'sideABottomFront';
  sideABottomFront.add(sideATopFront.clone());

  const sideATopBack = new THREE.Group();
  sideATopBack.name = 'sideATopBack';
  sideATopBack.add(
    getPlaneATopBottomBackShape(A, B, O),
    getPlaneATopBottomBackCorrugated(A, B, O)
  );

  const sideABack = new THREE.Group();
  sideABack.name = 'sideABack';
  sideABack.add(getPlaneABack(A, C, O), getPlaneABackCorrugated(A, C, O));
  sideABack.position.x = -A + 2.5;

  const sideGlueLid = new THREE.Group();
  sideGlueLid.name = 'sideGlueLid';
  sideGlueLid.add(
    getGlueLidShape(C, G, GSlope, O),
    getGlueLidCorrugated(C, G, GSlope, O)
  );

  const sideBLeft = new THREE.Group();
  sideBLeft.name = 'sideBLeft';
  sideBLeft.add(getPlaneBSideShape(B, C, O), getPlaneBSideCorrugated(B, C, O));
  sideBLeft.position.x = -B;

  const sideBTopLeft = new THREE.Group();
  sideBTopLeft.name = 'sideBTopLeft';
  sideBTopLeft.add(
    getPlaneBTopBottomShape(B, A, O),
    getPlaneBTopBottomCorrugated(B, A, O)
  );

  const sideBRight = new THREE.Group();
  sideBRight.name = 'sideBRight';
  sideBRight.add(sideBLeft.clone());

  const pivotATopFront = new THREE.Object3D();
  pivotATopFront.name = 'pivotATopFront';
  pivotATopFront.add(sideATopFront);
  pivotATopFront.position.y = C;

  const pivotABottomFront = new THREE.Object3D();
  pivotABottomFront.name = 'pivotABottomFront';
  pivotABottomFront.add(sideABottomFront);
  pivotABottomFront.position.z = -2.5;
  rotateObject(pivotABottomFront, -180);

  const pivotAFront = new THREE.Object3D();
  pivotAFront.name = 'pivotAFront';
  pivotAFront.add(sideAFront, pivotATopFront, pivotABottomFront);

  const pivotATopBack = new THREE.Object3D();
  pivotATopBack.name = 'pivotATopBack';
  pivotATopBack.add(sideATopBack);
  pivotATopBack.position.set(-A, C, 0);

  const pivotABottomBack = new THREE.Object3D();
  pivotABottomBack.name = 'pivotABottomBack';
  pivotABottomBack.add(sideATopBack.clone());
  pivotABottomBack.position.set(-A, 0, -2.5);
  rotateObject(pivotABottomBack, -180);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.name = 'pivotGlueLid';
  pivotGlueLid.add(sideGlueLid);
  pivotGlueLid.position.x = -A + 2.5;

  const pivotABack = new THREE.Object3D();
  pivotABack.name = 'pivotABack';
  pivotABack.add(sideABack, pivotATopBack, pivotABottomBack, pivotGlueLid);
  pivotABack.position.x = -B;

  const pivotTopBLeft = new THREE.Object3D();
  pivotTopBLeft.name = 'pivotTopBLeft';
  pivotTopBLeft.add(sideBTopLeft);
  pivotTopBLeft.position.set(-B, C, 0);

  const pivotBottomBLeft = new THREE.Object3D();
  pivotBottomBLeft.name = 'pivotBottomBLeft';
  pivotBottomBLeft.add(sideBTopLeft.clone());
  pivotBottomBLeft.position.set(-B, 0, -2.5);
  rotateObject(pivotBottomBLeft, -180);

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.name = 'pivotBLeft';
  pivotBLeft.add(sideBLeft, pivotTopBLeft, pivotBottomBLeft, pivotABack);

  const pivotTopBRight = new THREE.Object3D();
  pivotTopBRight.name = 'pivotTopBRight';
  pivotTopBRight.add(sideBTopLeft.clone());
  pivotTopBRight.position.set(-B, C, 0);

  const pivotBottomBRight = new THREE.Object3D();
  pivotBottomBRight.name = 'pivotBottomBRight';
  pivotBottomBRight.add(sideBTopLeft.clone());
  pivotBottomBRight.position.set(-B, 0, -2.5);
  rotateObject(pivotBottomBRight, 180);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.name = 'pivotBRight';
  pivotBRight.add(sideBRight, pivotTopBRight, pivotBottomBRight);
  pivotBRight.position.set(A, 0, -2.5);
  rotateObject(pivotBRight, 0, 180);

  const pivotAll = new THREE.Object3D();
  pivotAll.name = 'pivotAll';
  pivotAll.add(pivotAFront, pivotBLeft, pivotBRight);

  animate
    ? foldBox(
        A,
        C,
        pivotATopFront,
        pivotABottomFront,
        pivotATopBack,
        pivotABottomBack,
        pivotGlueLid,
        pivotABack,
        pivotTopBLeft,
        pivotBottomBLeft,
        pivotBLeft,
        pivotTopBRight,
        pivotBottomBRight,
        pivotBRight
      )
    : expandBox(
        A,
        C,
        pivotATopFront,
        pivotABottomFront,
        pivotATopBack,
        pivotABottomBack,
        pivotGlueLid,
        pivotABack,
        pivotTopBLeft,
        pivotBottomBLeft,
        pivotBLeft,
        pivotTopBRight,
        pivotBottomBRight,
        pivotBRight
      );

  return pivotAll;
};
