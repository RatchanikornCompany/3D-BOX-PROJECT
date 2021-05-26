import * as THREE from 'three';

import {
  getLRLidShape,
  getLockFlapShape,
  getGlueFlapShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './module/models';
import { foldBox } from './module/animate';

import { material } from '../../../../../function/material';

// var modelObj;
// var boxHelper;

export const tray11A05Model = (A, B, C, O, animate) => {
  const P = 5; //? ความกว้างเฉพาะด้านของฝาเสียบกาว

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideLockLeft = new THREE.Mesh(getLockFlapShape(B, C), material(O));
  sideLockLeft.rotation.set(0, 0, (Math.PI / 180) * 90);

  const sideLidBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideLidBLeft.rotation.y = Math.PI;

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideLockRight = new THREE.Mesh(getLockFlapShape(B, C), material(O));
  sideLockRight.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const sideLidBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideLRLidATopLeft = new THREE.Mesh(getLRLidShape(A, C), material(O));
  sideLRLidATopLeft.rotation.set(0, Math.PI, 0);

  const sideLRLidATopRight = new THREE.Mesh(getLRLidShape(A, C), material(O));

  const sideATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideLRLidABottomLeft = new THREE.Mesh(getLRLidShape(A, C), material(O));
  sideLRLidABottomLeft.rotation.set(Math.PI, Math.PI, 0);

  const sideLRLidABottomRight = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );
  sideLRLidABottomRight.rotation.set(Math.PI, 0, 0);

  const sideABottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideABottom.rotation.x = Math.PI;

  const sideAFrontLid = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideGlueFlap = new THREE.Mesh(getGlueFlapShape(A, P), material(O));
  sideGlueFlap.rotation.x = Math.PI;

  const sideABackFlap = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideBTopLid = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideBBottomLid = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLockFlapShape(B, C));
  const sideLockLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockLeftEdges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLockFlapShape(B, C));
  const sideLockRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLockRightEdges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideLRLidATopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidATopLeftEdges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideLRLidATopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideLRLidABottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidABottomLeftEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideLRLidABottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidABottomRightEdges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideAFrontLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, P));
  const sideGlueFlapEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueFlapEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackFlapEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideBTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideBBottomLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotLRLidATopLeft = new THREE.Object3D();
  pivotLRLidATopLeft.add(sideLRLidATopLeft, sideLRLidATopLeftEdges);

  const pivotLRLidATopRight = new THREE.Object3D();
  pivotLRLidATopRight.add(sideLRLidATopRight, sideLRLidATopRightEdges);
  pivotLRLidATopRight.position.set(A, 0, 0);

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    sideATopEdges,
    pivotLRLidATopLeft,
    pivotLRLidATopRight
  );
  pivotTop.position.set(0, B, 0);

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges, pivotTop);

  const pivotLockLeft = new THREE.Object3D();
  pivotLockLeft.add(sideLockLeft, sideLockLeftEdges);
  pivotLockLeft.position.set(-C, 0, 0);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges, pivotLockLeft);
  pivotLidBLeft.position.set(-C, 0, 0);

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, sideBLeftEdges, pivotLidBLeft);

  const pivotLockRight = new THREE.Object3D();
  pivotLockRight.add(sideLockRight, sideLockRightEdges);
  pivotLockRight.position.set(C, 0, 0);

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges, pivotLockRight);
  pivotLidBRight.position.set(C, 0, 0);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, sideBRightEdges, pivotLidBRight);
  pivotRight.position.set(A, 0, 0);

  const pivotLRLidABottomLeft = new THREE.Object3D();
  pivotLRLidABottomLeft.add(sideLRLidABottomLeft, sideLRLidABottomLeftEdges);

  const pivotLRLidABottomRight = new THREE.Object3D();
  pivotLRLidABottomRight.add(sideLRLidABottomRight, sideLRLidABottomRightEdges);
  pivotLRLidABottomRight.position.set(A, 0, 0);

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    sideABottomEdges,
    pivotLRLidABottomLeft,
    pivotLRLidABottomRight
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotLeft, pivotRight, pivotBottom);

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideBTopLid, sideBTopLidEdges);
  pivotTopLid.position.y = B;

  const pivotGlueFlap = new THREE.Object3D();
  pivotGlueFlap.add(sideGlueFlap, sideGlueFlapEdges);
  pivotGlueFlap.position.y = B;

  const pivotFrontLid = new THREE.Object3D();
  pivotFrontLid.add(sideAFrontLid, sideAFrontLidEdges, pivotGlueFlap);
  pivotFrontLid.position.y = C;

  const pivotBBottomLid = new THREE.Object3D();
  pivotBBottomLid.add(sideBBottomLid, sideBBottomLidEdges, pivotFrontLid);
  pivotBBottomLid.rotation.x = -Math.PI;

  const pivotBackLid = new THREE.Object3D();
  pivotBackLid.add(
    sideABackFlap,
    sideABackFlapEdges,
    pivotTopLid,
    pivotBBottomLid
  );
  pivotBackLid.position.x = A * 2;

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAll, pivotBackLid);

  if (animate) {
    foldBox(
      pivotBack,
      pivotRight,
      pivotLidBRight,
      pivotLockRight,
      pivotLeft,
      pivotLidBLeft,
      pivotLockLeft,
      pivotTop,
      pivotLRLidATopLeft,
      pivotLRLidATopRight,
      pivotBottom,
      pivotLRLidABottomLeft,
      pivotLRLidABottomRight,
      pivotTopLid,
      pivotBackLid,
      pivotBBottomLid,
      pivotFrontLid,
      pivotGlueFlap
    );
  }

  return pivotGroupAll;
};

// const objModel = (value) => {
//   value ? modelCosmeticTube() : delModelCosmeticTube();
// };

// const modelCosmeticTube = () => {
//   var loader = new OBJLoader();
//   var objFile = './models/soap/soap.obj';

//   loader.load(objFile, (object) => {
//     object.scale.set(23.9, 26, 20); // 23.9, 26, 20
//     object.position.set(A / 2, B / 3.1, B / 2);
//     object.rotation.x = Math.PI / 2;

//     scene.add(object);
//     modelObj = object;

//     var box = new THREE.Box3().setFromObject(object);
//     var box3Helper = new THREE.Box3Helper(box);
//     scene.add(box3Helper);
//     boxHelper = box3Helper;
//   });
// };

// const delModelCosmeticTube = () => {
//   scene.remove(modelObj);
//   scene.remove(boxHelper);
// };
