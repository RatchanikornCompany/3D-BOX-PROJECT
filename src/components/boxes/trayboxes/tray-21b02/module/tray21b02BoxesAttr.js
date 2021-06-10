import * as THREE from 'three';

import {
  getPlaneInnerATopBottomShape,
  getPlaneASideShape,
  getPlaneALeftRightSideShape,
  getPlaneATopBottomShape,
  getPlaneALidShape,
  getGlueFlapShape,
  getPlaneASideFlapShape,
  getPlaneBSideFlapShape,
} from './tray21b02BoxesModel';

import { material } from '../../../../_modules/material';
import { foldBox } from './tray21b02BoxesAnim';

export const tray21B02Model = (A, B, C, O, animate, materialColor) => {
  const P = 5; //? ความกว้างเฉพาะด้านของฝาเสียบกาว

  const sidePlaneA = new THREE.Mesh(
    getPlaneASideShape(B, A),
    material(O, materialColor)
  );
  sidePlaneA.castShadow = true;

  const sidePlaneALeftRight = new THREE.Mesh(
    getPlaneALeftRightSideShape(C, A),
    material(O, materialColor)
  );
  sidePlaneALeftRight.castShadow = true;

  const sidePlaneATopBottom = new THREE.Mesh(
    getPlaneATopBottomShape(C, B),
    material(O, materialColor)
  );
  sidePlaneATopBottom.castShadow = true;

  const sidePlaneALid = new THREE.Mesh(
    getPlaneALidShape(C),
    material(O, materialColor)
  );
  sidePlaneALid.castShadow = true;

  const sideALid = new THREE.Mesh(
    getPlaneATopBottomShape(C, B),
    material(O, materialColor)
  );
  sideALid.castShadow = true;

  const sideInnerATopBottom = new THREE.Mesh(
    getPlaneInnerATopBottomShape(C, B),
    material(O, materialColor)
  );
  sideInnerATopBottom.castShadow = true;

  const sideAFrontFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O, materialColor)
  );
  sideAFrontFlap.castShadow = true;

  const sideGlueFlap = new THREE.Mesh(
    getGlueFlapShape(A, P),
    material(O, materialColor)
  );
  sideGlueFlap.castShadow = true;
  sideGlueFlap.rotation.x = Math.PI;

  const sideABackFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O, materialColor)
  );
  sideABackFlap.castShadow = true;

  const sideBTopLid = new THREE.Mesh(
    getPlaneBSideFlapShape(A, C),
    material(O, materialColor)
  );
  sideBTopLid.castShadow = true;

  const sideBBottomLid = new THREE.Mesh(
    getPlaneBSideFlapShape(A, C),
    material(O, materialColor)
  );
  sideBBottomLid.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneALeftRightSideShape(C, A));
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

  const pivotLidARight = new THREE.Object3D();
  pivotLidARight.add(sidePlaneALid, sidePlaneALidEdges);
  pivotLidARight.position.y = A;

  const pivotLidARightD = new THREE.Object3D();
  pivotLidARightD.add(sidePlaneALid.clone(), sidePlaneALidEdges.clone());
  pivotLidARightD.rotation.x = -Math.PI;

  const pivotPlaneARight = new THREE.Object3D();
  pivotPlaneARight.add(
    sidePlaneALeftRight,
    sidePlaneALeftRightEdges,
    pivotLidARight,
    pivotLidARightD
  );
  pivotPlaneARight.position.x = B;

  const pivotLidALeft = new THREE.Object3D();
  pivotLidALeft.add(sidePlaneALid.clone(), sidePlaneALidEdges.clone());
  pivotLidALeft.position.y = A;

  const pivotLidALeftD = new THREE.Object3D();
  pivotLidALeftD.add(sidePlaneALid.clone(), sidePlaneALidEdges.clone());
  pivotLidALeftD.rotation.x = -Math.PI;

  const pivotPlaneALeft = new THREE.Object3D();
  pivotPlaneALeft.add(
    sidePlaneALeftRight.clone(),
    sidePlaneALeftRightEdges.clone(),
    pivotLidALeft,
    pivotLidALeftD
  );
  pivotPlaneALeft.rotation.y = Math.PI;

  const pivotInnerATop = new THREE.Object3D();
  pivotInnerATop.add(sideInnerATopBottom, sideInnerATopBottomEdges);
  pivotInnerATop.position.y = C;

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideALid, sideALidEdges, pivotInnerATop);
  pivotLidATop.position.y = C;

  const pivotPlaneATop = new THREE.Object3D();
  pivotPlaneATop.add(
    sidePlaneATopBottom,
    sidePlaneATopBottomEdges,
    pivotLidATop
  );
  pivotPlaneATop.position.y = A;

  const pivotInnerABottom = new THREE.Object3D();
  pivotInnerABottom.add(
    sideInnerATopBottom.clone(),
    sideInnerATopBottomEdges.clone()
  );
  pivotInnerABottom.position.y = C;

  const pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(
    sideALid.clone(),
    sideALidEdges.clone(),
    pivotInnerABottom
  );
  pivotLidABottom.position.y = C;

  const pivotPlaneABottom = new THREE.Object3D();
  pivotPlaneABottom.add(
    sidePlaneATopBottom.clone(),
    sidePlaneATopBottomEdges.clone(),
    pivotLidABottom
  );
  pivotPlaneABottom.rotation.x = -Math.PI;

  const pivotPlaneA = new THREE.Object3D();
  pivotPlaneA.add(
    sidePlaneA,
    sidePlaneA.clone(),
    pivotPlaneARight,
    pivotPlaneALeft,
    pivotPlaneATop,
    pivotPlaneABottom
  );
  pivotPlaneA.rotation.z = -Math.PI / 2;

  const pivotTopFlap = new THREE.Object3D();
  pivotTopFlap.add(sideBTopLid, sideBTopLidEdges);
  pivotTopFlap.position.y = B;

  const pivotGlueFlap = new THREE.Object3D();
  pivotGlueFlap.add(sideGlueFlap, sideGlueFlapEdges);
  pivotGlueFlap.position.y = B;

  const pivotFrontFlap = new THREE.Object3D();
  pivotFrontFlap.add(sideAFrontFlap, sideAFrontFlapEdges, pivotGlueFlap);
  pivotFrontFlap.position.y = C;

  const pivotBBottomLid = new THREE.Object3D();
  pivotBBottomLid.add(sideBBottomLid, sideBBottomLidEdges, pivotFrontFlap);
  pivotBBottomLid.rotation.x = -Math.PI;

  const pivotBackFlap = new THREE.Object3D();
  pivotBackFlap.add(
    sideABackFlap,
    sideABackFlapEdges,
    pivotTopFlap,
    pivotBBottomLid
  );
  pivotBackFlap.position.x = A * 3;

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotPlaneA, pivotBackFlap);

  if (animate) {
    foldBox(
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
      pivotTopFlap,
      pivotGlueFlap,
      pivotFrontFlap,
      pivotBBottomLid,
      pivotBackFlap
    );
  }

  return pivotGroupAll;
};
