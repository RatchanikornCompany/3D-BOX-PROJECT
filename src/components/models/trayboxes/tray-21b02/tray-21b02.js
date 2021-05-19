import * as THREE from 'three';

import {
  getPlaneInnerATopBottomShape,
  getPlaneASideShape,
  getPlaneALeftRightSideShape,
  getPlaneATopBottomShape,
  getPlaneALidShape,
} from './module/models';

import { getFlap } from './module/flap';

import { sceneAdd } from '../../../../function/webgl';
import { updateSize } from '../../../../function/updatesize';
import { material } from '../../../../function/material';
import { foldBox, expandBox } from './module/animate';

let A = 300,
  B = 200,
  C = 200,
  O = 1,
  P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

let edges;

let pivotLidARight,
  pivotLidARightD,
  pivotPlaneARight,
  pivotLidALeft,
  pivotLidALeftD,
  pivotPlaneALeft,
  pivotInnerATop,
  pivotLidATop,
  pivotPlaneATop,
  pivotInnerABottom,
  pivotLidABottom,
  pivotPlaneABottom,
  pivotPlaneA,
  pivotGroupAll;

let pivotPlaneAEdges;

let getPivotTopFlap,
  getPivotGlueFlap,
  getPivotFrontFlap,
  getPivotBBottomLid,
  getPivotBackFlap,
  getPivotTopFlapEdges,
  getPivotGlueFlapEdges,
  getPivotFrontFlapEdges,
  getPivotBBottomLidEdges,
  getPivotBackFlapEdges;

const init = (a, b, c, o) => {
  const sidePlaneA = new THREE.Mesh(getPlaneASideShape(B, A), material(O));

  const sidePlaneALeftRight = new THREE.Mesh(
    getPlaneALeftRightSideShape(C, A),
    material(O)
  );

  const sidePlaneATopBottom = new THREE.Mesh(
    getPlaneATopBottomShape(C, B),
    material(O)
  );

  const sidePlaneALid = new THREE.Mesh(getPlaneALidShape(C), material(O));

  const sideALid = new THREE.Mesh(getPlaneATopBottomShape(C, B), material(O));

  const sideInnerATopBottom = new THREE.Mesh(
    getPlaneInnerATopBottomShape(C, B),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(B, A));
  const sidePlaneAEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneALeftRightSideShape(C, A));
  const sidePlaneALeftRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneATopBottomShape(C, B));
  const sidePlaneATopBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneALidShape(C));
  const sidePlaneALidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneATopBottomShape(C, B));
  const sideALidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneInnerATopBottomShape(C, B));
  const sideInnerATopBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  pivotLidARight = new THREE.Object3D();
  pivotLidARight.add(sidePlaneALid);
  pivotLidARight.position.y = A;

  pivotLidARightD = new THREE.Object3D();
  pivotLidARightD.add(sidePlaneALid.clone());
  pivotLidARightD.rotation.x = -Math.PI;

  pivotPlaneARight = new THREE.Object3D();
  pivotPlaneARight.add(sidePlaneALeftRight, pivotLidARight, pivotLidARightD);
  pivotPlaneARight.position.x = B;

  pivotLidALeft = new THREE.Object3D();
  pivotLidALeft.add(sidePlaneALid.clone());
  pivotLidALeft.position.y = A;

  pivotLidALeftD = new THREE.Object3D();
  pivotLidALeftD.add(sidePlaneALid.clone());
  pivotLidALeftD.rotation.x = -Math.PI;

  pivotPlaneALeft = new THREE.Object3D();
  pivotPlaneALeft.add(
    sidePlaneALeftRight.clone(),
    pivotLidALeft,
    pivotLidALeftD
  );
  pivotPlaneALeft.rotation.y = Math.PI;

  pivotInnerATop = new THREE.Object3D();
  pivotInnerATop.add(sideInnerATopBottom);
  pivotInnerATop.position.y = C;

  pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideALid, pivotInnerATop);
  pivotLidATop.position.y = C;

  pivotPlaneATop = new THREE.Object3D();
  pivotPlaneATop.add(sidePlaneATopBottom, pivotLidATop);
  pivotPlaneATop.position.y = A;

  pivotInnerABottom = new THREE.Object3D();
  pivotInnerABottom.add(sideInnerATopBottom.clone());
  pivotInnerABottom.position.y = C;

  pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(sideALid.clone(), pivotInnerABottom);
  pivotLidABottom.position.y = C;

  pivotPlaneABottom = new THREE.Object3D();
  pivotPlaneABottom.add(sidePlaneATopBottom.clone(), pivotLidABottom);
  pivotPlaneABottom.rotation.x = -Math.PI;

  pivotPlaneA = new THREE.Object3D();
  pivotPlaneA.add(
    sidePlaneA,
    pivotPlaneARight,
    pivotPlaneALeft,
    pivotPlaneATop,
    pivotPlaneABottom
  );

  const pivotLidARightEdges = new THREE.Object3D();
  pivotLidARightEdges.add(sidePlaneALidEdges);
  pivotLidARightEdges.position.y = A;

  const pivotLidARightDEdges = new THREE.Object3D();
  pivotLidARightDEdges.add(sidePlaneALidEdges.clone());
  pivotLidARightDEdges.rotation.x = -Math.PI;

  const pivotPlaneARightEdges = new THREE.Object3D();
  pivotPlaneARightEdges.add(
    sidePlaneALeftRightEdges,
    pivotLidARightEdges,
    pivotLidARightDEdges
  );
  pivotPlaneARightEdges.position.x = B;

  const pivotLidALeftEdges = new THREE.Object3D();
  pivotLidALeftEdges.add(sidePlaneALidEdges.clone());
  pivotLidALeftEdges.position.y = A;

  const pivotLidALeftDEdges = new THREE.Object3D();
  pivotLidALeftDEdges.add(sidePlaneALidEdges.clone());
  pivotLidALeftDEdges.rotation.x = -Math.PI;

  const pivotPlaneALeftEdges = new THREE.Object3D();
  pivotPlaneALeftEdges.add(
    sidePlaneALeftRightEdges.clone(),
    pivotLidALeftEdges,
    pivotLidALeftDEdges
  );
  pivotPlaneALeftEdges.rotation.y = Math.PI;

  const pivotInnerATopEdges = new THREE.Object3D();
  pivotInnerATopEdges.add(sideInnerATopBottomEdges);
  pivotInnerATopEdges.position.y = C;

  const pivotLidATopEdges = new THREE.Object3D();
  pivotLidATopEdges.add(sideALidEdges, pivotInnerATopEdges);
  pivotLidATopEdges.position.y = C;

  const pivotPlaneATopEdges = new THREE.Object3D();
  pivotPlaneATopEdges.add(sidePlaneATopBottomEdges, pivotLidATopEdges);
  pivotPlaneATopEdges.position.y = A;

  const pivotInnerABottomEdges = new THREE.Object3D();
  pivotInnerABottomEdges.add(sideInnerATopBottomEdges.clone());
  pivotInnerABottomEdges.position.y = C;

  const pivotLidABottomEdges = new THREE.Object3D();
  pivotLidABottomEdges.add(sideALidEdges.clone(), pivotInnerABottomEdges);
  pivotLidABottomEdges.position.y = C;

  const pivotPlaneABottomEdges = new THREE.Object3D();
  pivotPlaneABottomEdges.add(
    sidePlaneATopBottomEdges.clone(),
    pivotLidABottomEdges
  );
  pivotPlaneABottomEdges.rotation.x = -Math.PI;

  pivotPlaneAEdges = new THREE.Object3D();
  pivotPlaneAEdges.add(
    sidePlaneAEdges,
    pivotPlaneARightEdges,
    pivotPlaneALeftEdges,
    pivotPlaneATopEdges,
    pivotPlaneABottomEdges
  );

  pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotPlaneA, pivotPlaneAEdges, getFlap(A, B, C, O, P));

  if ((a, b, c, o)) {
    A = a;
    B = b;
    C = c;
    O = o;

    updateSize(A, B, C, O);
  }

  sceneAdd(pivotGroupAll);
};

const flap = (
  pivotTopFlap,
  pivotGlueFlap,
  pivotFrontFlap,
  pivotBBottomLid,
  pivotBackFlap,
  pivotTopFlapEdges,
  pivotGlueFlapEdges,
  pivotFrontFlapEdges,
  pivotBBottomLidEdges,
  pivotBackFlapEdges
) => {
  getPivotTopFlap = pivotTopFlap;
  getPivotGlueFlap = pivotGlueFlap;
  getPivotFrontFlap = pivotFrontFlap;
  getPivotBBottomLid = pivotBBottomLid;
  getPivotBackFlap = pivotBackFlap;
  getPivotTopFlapEdges = pivotTopFlapEdges;
  getPivotGlueFlapEdges = pivotGlueFlapEdges;
  getPivotFrontFlapEdges = pivotFrontFlapEdges;
  getPivotBBottomLidEdges = pivotBBottomLidEdges;
  getPivotBackFlapEdges = pivotBackFlapEdges;
};

const rotations = (value) => {
  if (value) {
    sceneAdd(pivotPlaneAEdges, pivotPlaneAEdges);
    foldBox(
      B,
      pivotLidARight,
      pivotLidARightD,
      pivotPlaneARight,
      pivotLidALeft,
      pivotLidALeftD,
      pivotPlaneALeft,
      pivotInnerATop,
      pivotLidATop,
      pivotPlaneATop,
      pivotInnerABottom,
      pivotLidABottom,
      pivotPlaneABottom,
      pivotPlaneA,
      getPivotTopFlap,
      getPivotGlueFlap,
      getPivotFrontFlap,
      getPivotBBottomLid,
      getPivotBackFlap,
      getPivotTopFlapEdges,
      getPivotGlueFlapEdges,
      getPivotFrontFlapEdges,
      getPivotBBottomLidEdges,
      getPivotBackFlapEdges
    );
  } else {
    expandBox(
      A,
      pivotLidARight,
      pivotLidARightD,
      pivotPlaneARight,
      pivotLidALeft,
      pivotLidALeftD,
      pivotPlaneALeft,
      pivotInnerATop,
      pivotLidATop,
      pivotPlaneATop,
      pivotInnerABottom,
      pivotLidABottom,
      pivotPlaneABottom,
      pivotPlaneA,
      getPivotTopFlap,
      getPivotGlueFlap,
      getPivotFrontFlap,
      getPivotBBottomLid,
      getPivotBackFlap,
      getPivotTopFlapEdges,
      getPivotGlueFlapEdges,
      getPivotFrontFlapEdges,
      getPivotBBottomLidEdges,
      getPivotBackFlapEdges
    );
  }
};

export default {
  init,
  flap,
  rotations,
};
