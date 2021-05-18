import * as THREE from 'three';

import {
  getGlueFlapShape,
  getPlaneASideFlapShape,
  getPlaneBSideFlapShape,
} from '../../../trayboxes/tray-21b02/module/models';
import FOODBOX12009 from '../food-12009';

import { material } from '../../../../../function/material';

let edges;

export const getFlap = (A, B, C, O, P) => {
  const sideAFrontFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O)
  );

  const sideGlueFlap = new THREE.Mesh(getGlueFlapShape(A, P), material(O));
  sideGlueFlap.rotation.x = Math.PI;

  const sideABackFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O)
  );

  const sideBTopLid = new THREE.Mesh(getPlaneBSideFlapShape(A, C), material(O));

  const sideBBottomLid = new THREE.Mesh(
    getPlaneBSideFlapShape(A, C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneASideFlapShape(A, B));
  const sideAFrontFlapEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, P));
  const sideGlueFlapEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueFlapEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideFlapShape(A, B));
  const sideABackFlapEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideFlapShape(A, C));
  const sideBTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideFlapShape(A, C));
  const sideBBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotTopFlap = new THREE.Object3D();
  pivotTopFlap.add(sideBTopLid);
  pivotTopFlap.position.y = B;

  const pivotGlueFlap = new THREE.Object3D();
  pivotGlueFlap.add(sideGlueFlap);
  pivotGlueFlap.position.y = B;

  const pivotFrontFlap = new THREE.Object3D();
  pivotFrontFlap.add(sideAFrontFlap, pivotGlueFlap);
  pivotFrontFlap.position.y = C;

  const pivotBBottomLid = new THREE.Object3D();
  pivotBBottomLid.add(sideBBottomLid, pivotFrontFlap);
  pivotBBottomLid.rotation.x = -Math.PI;

  const pivotBackFlap = new THREE.Object3D();
  pivotBackFlap.add(sideABackFlap, pivotTopFlap, pivotBBottomLid);
  pivotBackFlap.rotation.z = Math.PI / 2;
  pivotBackFlap.position.y = ((B + C) * 2) | 0;

  const pivotTopFlapEdges = new THREE.Object3D();
  pivotTopFlapEdges.add(sideBTopLidEdges);
  pivotTopFlapEdges.position.y = B;

  const pivotGlueFlapEdges = new THREE.Object3D();
  pivotGlueFlapEdges.add(sideGlueFlapEdges);
  pivotGlueFlapEdges.position.y = B;

  const pivotFrontFlapEdges = new THREE.Object3D();
  pivotFrontFlapEdges.add(sideAFrontFlapEdges, pivotGlueFlapEdges);
  pivotFrontFlapEdges.position.y = C;

  const pivotBBottomLidEdges = new THREE.Object3D();
  pivotBBottomLidEdges.add(sideBBottomLidEdges, pivotFrontFlapEdges);
  pivotBBottomLidEdges.rotation.x = -Math.PI;

  const pivotBackFlapEdges = new THREE.Object3D();
  pivotBackFlapEdges.add(
    sideABackFlapEdges,
    pivotTopFlapEdges,
    pivotBBottomLidEdges
  );
  pivotBackFlapEdges.rotation.z = Math.PI / 2;
  pivotBackFlapEdges.position.y = ((B + C) * 2) | 0;

  const pivotGroupFlapAll = new THREE.Group();
  pivotGroupFlapAll.add(pivotBackFlap, pivotBackFlapEdges);

  FOODBOX12009.flap(
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
  );

  return pivotGroupFlapAll;
};
