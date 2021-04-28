import * as THREE from 'three';

import { material } from '../../material';

import {
  getPlaneALidBoxesShape,
  getPlaneBLidBoxesShape,
  getGludLidShape,
} from './models';
import SLIDEBOXES from '../slideboxes';

export const lidBoxes = (A, B, C, O, G, gSlope) => {
  const sideALidFront = new THREE.Mesh(
    getPlaneALidBoxesShape(A, B),
    material(O)
  );

  const sideBLidFront = new THREE.Mesh(
    getPlaneBLidBoxesShape(A, C),
    material(O)
  );

  const sideGludLid = new THREE.Mesh(
    getGludLidShape(A, G, gSlope),
    material(O)
  );

  const pivotBLidBack = new THREE.Object3D();
  pivotBLidBack.add(sideBLidFront.clone());
  pivotBLidBack.position.y = B;

  const pivotALidBack = new THREE.Object3D();
  pivotALidBack.add(sideALidFront.clone(), pivotBLidBack);
  pivotALidBack.position.y = C;

  const pivotBLidFront = new THREE.Object3D();
  pivotBLidFront.add(sideBLidFront, pivotALidBack);
  pivotBLidFront.rotation.x = Math.PI;

  const pivotGludLid = new THREE.Object3D();
  pivotGludLid.add(sideGludLid);
  pivotGludLid.position.y = B;

  const pivotALidFront = new THREE.Object3D();
  pivotALidFront.add(sideALidFront, pivotGludLid, pivotBLidFront);
  pivotALidFront.position.x = A * 2;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotALidFront);

  SLIDEBOXES.lid(
    pivotBLidBack,
    pivotALidBack,
    pivotBLidFront,
    pivotGludLid,
    pivotALidFront
  );

  return pivotAll;
};
