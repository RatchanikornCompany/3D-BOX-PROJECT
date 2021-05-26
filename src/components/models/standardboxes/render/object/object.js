import * as THREE from 'three';

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
import { foldBox } from './module/animate';

export const standObject = (A, B, C, O, G, GSlope, animate) => {
  const sideAFront = new THREE.Group();
  sideAFront.add(getPlaneASideShape(A, C, O), getPlaneASideCorrugated(A, C, O));

  const sideATopFront = new THREE.Group();
  sideATopFront.add(
    getPlaneATopBottomShape(A, B, O),
    getPlaneATopBottomCorrugated(A, B, O)
  );

  const sideABottomFront = new THREE.Group();
  sideABottomFront.add(sideATopFront.clone());

  const sideATopBack = new THREE.Group();
  sideATopBack.add(
    getPlaneATopBottomBackShape(A, B, O),
    getPlaneATopBottomBackCorrugated(A, B, O)
  );

  const sideABack = new THREE.Group();
  sideABack.add(getPlaneABack(A, C, O), getPlaneABackCorrugated(A, C, O));
  sideABack.position.x = -A + 2.5;

  const sideGlueLid = new THREE.Group();
  sideGlueLid.add(
    getGlueLidShape(C, G, GSlope, O),
    getGlueLidCorrugated(C, G, GSlope, O)
  );

  const sideBLeft = new THREE.Group();
  sideBLeft.add(getPlaneBSideShape(B, C, O), getPlaneBSideCorrugated(B, C, O));
  sideBLeft.position.x = -B;

  const sideBTopLeft = new THREE.Group();
  sideBTopLeft.add(
    getPlaneBTopBottomShape(B, A, O),
    getPlaneBTopBottomCorrugated(B, A, O)
  );

  const sideBRight = new THREE.Group();
  sideBRight.add(sideBLeft.clone());

  const pivotATopFront = new THREE.Object3D();
  pivotATopFront.add(sideATopFront);
  pivotATopFront.position.y = C;

  const pivotABottomFront = new THREE.Object3D();
  pivotABottomFront.add(sideABottomFront);
  pivotABottomFront.position.z = -2.5;
  pivotABottomFront.rotation.x = -Math.PI;

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(sideAFront, pivotATopFront, pivotABottomFront);

  const pivotATopBack = new THREE.Object3D();
  pivotATopBack.add(sideATopBack);
  pivotATopBack.position.set(-A, C, 0);

  const pivotABottomBack = new THREE.Object3D();
  pivotABottomBack.add(sideATopBack.clone());
  pivotABottomBack.position.set(-A, 0, -2.5);
  pivotABottomBack.rotation.x = -Math.PI;

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid);
  pivotGlueLid.position.x = -A + 2.5;

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, pivotATopBack, pivotABottomBack, pivotGlueLid);
  pivotABack.position.x = -B;

  const pivotTopBLeft = new THREE.Object3D();
  pivotTopBLeft.add(sideBTopLeft);
  pivotTopBLeft.position.set(-B, C, 0);

  const pivotBottomBLeft = new THREE.Object3D();
  pivotBottomBLeft.add(sideBTopLeft.clone());
  pivotBottomBLeft.position.set(-B, 0, -2.5);
  pivotBottomBLeft.rotation.x = -Math.PI;

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(sideBLeft, pivotTopBLeft, pivotBottomBLeft, pivotABack);

  const pivotTopBRight = new THREE.Object3D();
  pivotTopBRight.add(sideBTopLeft.clone());
  pivotTopBRight.position.set(-B, C, 0);

  const pivotBottomBRight = new THREE.Object3D();
  pivotBottomBRight.add(sideBTopLeft.clone());
  pivotBottomBRight.position.set(-B, 0, -2.5);
  pivotBottomBRight.rotation.x = Math.PI;

  const pivotBRight = new THREE.Object3D();
  pivotBRight.add(sideBRight, pivotTopBRight, pivotBottomBRight);
  pivotBRight.position.set(A, 0, -2.5);
  pivotBRight.rotation.y = Math.PI;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotAFront, pivotBLeft, pivotBRight);

  if (animate) {
    foldBox(
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
  }

  return pivotAll;
};
