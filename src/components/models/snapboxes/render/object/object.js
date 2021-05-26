import * as THREE from 'three';

import { material } from '../../../../function/material';

import {
  getLidShape,
  getGludLidShape,
  getLRLidShape,
  getLidShapeD,
  getLRLidShapeD,
  getLidBottomShape,
  getLidBottomDShape,
  getLRLidBottomShape,
  getLidBottomCoverShape,
  getPlaneTopBottomShape,
} from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
} from '../../../tuckendboxes/render/object/module/models';
import { foldBox } from './module/animate';

export const snapBoxesModel = (A, B, C, O, animate) => {
  const lengLRLib = A * 0.3,
    P = 5; //? ความกว้างเฉพาะด้านของฝาเสียบกาว

  const sideAFront = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, C), material(O));
  sideABack.position.x = -A;

  const sideGlueLid = new THREE.Mesh(getGludLidShape(C, P), material(O));
  sideGlueLid.rotation.y = Math.PI;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideBottom = new THREE.Mesh(getLRLidBottomShape(A, B), material(O));
  sideBottom.rotation.x = Math.PI;
  sideBottom.rotation.y = Math.PI;

  const sideLidBottom = new THREE.Mesh(
    getLidBottomCoverShape(B, A),
    material(O)
  );
  sideLidBottom.rotation.x = Math.PI;
  sideLidBottom.rotation.z = Math.PI / 2;

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideLidBLeft = new THREE.Mesh(getLRLidShape(B, lengLRLib), material(O));

  const sideBLeftD = new THREE.Mesh(getLidShapeD(A, B), material(O));
  sideBLeftD.rotation.x = Math.PI;

  const sideLidBLeftD = new THREE.Mesh(getLRLidShapeD(A, B), material(O));
  sideLidBLeftD.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  const sideLidBRight = new THREE.Mesh(
    getLRLidShape(B, lengLRLib),
    material(O)
  );
  sideLidBRight.rotation.y = Math.PI;

  const sideBRightD = new THREE.Mesh(getLidShapeD(A, B), material(O));
  sideBRightD.rotation.x = Math.PI;
  sideBRightD.rotation.y = Math.PI;

  const sideLidBRightD = new THREE.Mesh(getLRLidShapeD(A, B), material(O));
  sideLidBRightD.rotation.x = Math.PI;
  sideLidBRightD.rotation.y = Math.PI;

  const sideLidCover = new THREE.Mesh(getLidShape(A, P), material(O));
  sideLidCover.rotation.x = Math.PI;

  const sideTop = new THREE.Mesh(getPlaneTopBottomShape(A, B), material(O));

  const sideTopLid = new THREE.Mesh(getLidShape(A, P), material(O));
  sideTopLid.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(getLidBottomShape(A, B), material(O));
  sideABottom.rotation.x = Math.PI;

  const sideALeftBottom = new THREE.Mesh(getLidBottomDShape(A, B), material(O));
  sideALeftBottom.rotation.x = Math.PI;

  const sideARightBottom = new THREE.Mesh(
    getLidBottomDShape(A, B),
    material(O)
  );
  sideARightBottom.rotation.x = Math.PI;
  sideARightBottom.rotation.y = Math.PI;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.position.x = -A;
  edges = new THREE.EdgesGeometry(getGludLidShape(C, P));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.y = Math.PI;
  sideGlueLidEdges.rotation.z = Math.PI / 2;
  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;
  sideBottomEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCoverShape(B, A));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomEdges.rotation.x = Math.PI;
  sideLidBottomEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShape(B, lengLRLib));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidShapeD(A, B));
  const sideBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(A, B));
  const sideLidBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(B, lengLRLib));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShapeD(A, B));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.x = Math.PI;
  sideBRightDEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(A, B));
  const sideLidBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightDEdges.rotation.x = Math.PI;
  sideLidBRightDEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(A, P));
  const sideLidCoverEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCoverEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidShape(A, P));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopLidEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, B));
  const sideALeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALeftBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, B));
  const sideARightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideARightBottomEdges.rotation.x = Math.PI;
  sideARightBottomEdges.rotation.y = Math.PI;

  const pivotALeftBottom = new THREE.Object3D();
  pivotALeftBottom.position.y = -B * 0.47;
  pivotALeftBottom.add(sideALeftBottom, sideALeftBottomEdges);

  const pivotARightBottom = new THREE.Object3D();
  pivotARightBottom.position.set(A, (-B * 0.47) | 0, 0);
  pivotARightBottom.add(sideARightBottom, sideARightBottomEdges);

  const pivotGroupAFront = new THREE.Object3D();
  pivotGroupAFront.add(
    sideABottom,
    sideABottomEdges,
    pivotALeftBottom,
    pivotARightBottom
  );

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(sideAFront, sideAFrontEdges, pivotGroupAFront);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.position.x = -A;
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, sideABackEdges, pivotGlueLid);

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges);

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.position.set((-B * 0.3) | 0, (-A * 0.5) | 0, 0);
  pivotBottomLid.add(sideLidBottom, sideLidBottomEdges);

  const pivotGroupBottom = new THREE.Object3D();
  pivotGroupBottom.add(pivotBottom, pivotBottomLid);

  const pivotGroupABack = new THREE.Object3D();
  pivotGroupABack.position.x = -B;
  pivotGroupABack.add(pivotABack, pivotGroupBottom);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.position.set(-B, C, 0);
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges);

  const pivotLidBLeftD = new THREE.Object3D();
  pivotLidBLeftD.position.x = -B;
  pivotLidBLeftD.add(sideBLeftD, sideBLeftDEdges);

  const pivotLRLidBLeftD = new THREE.Object3D();
  pivotLRLidBLeftD.position.set((-B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivotLRLidBLeftD.add(sideLidBLeftD, sideLidBLeftDEdges);

  const pivotGroupBLeftD = new THREE.Object3D();
  pivotGroupBLeftD.add(pivotLidBLeftD, pivotLRLidBLeftD);

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(
    pivotLidBLeft,
    sideBLeft,
    sideBLeftEdges,
    pivotGroupBLeftD,
    pivotGroupABack
  );

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.position.set(B, C, 0);
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges);

  const pivotLidBRightD = new THREE.Object3D();
  pivotLidBRightD.position.x = B;
  pivotLidBRightD.add(sideBRightD, sideBRightDEdges);

  const pivotLRLidBRightD = new THREE.Object3D();
  pivotLRLidBRightD.position.set((B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivotLRLidBRightD.add(sideLidBRightD, sideLidBRightDEdges);

  const pivotGroupBRightD = new THREE.Object3D();
  pivotGroupBRightD.add(pivotLidBRightD, pivotLRLidBRightD);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.position.x = A;
  pivotBRight.add(
    pivotLidBRight,
    sideBRight,
    sideBRightEdges,
    pivotGroupBRightD
  );

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.position.y = B;
  pivotTopLid.add(sideTopLid, sideTopLidEdges);

  const pivotTop = new THREE.Object3D();
  pivotTop.position.y = C;
  pivotTop.add(sideTop, sideTopEdges, pivotTopLid);

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotAFront, pivotBLeft, pivotBRight, pivotTop);

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAll);

  if (animate) {
    foldBox(
      pivotTop,
      pivotTopLid,
      pivotGroupAFront,
      pivotBottomLid,
      pivotGroupABack,
      pivotGroupBottom,
      pivotGlueLid,
      pivotLidBLeft,
      pivotBLeft,
      pivotGroupBLeftD,
      pivotLRLidBLeftD,
      pivotLidBRight,
      pivotBRight,
      pivotGroupBRightD,
      pivotLRLidBRightD
    );
  }

  return pivotGroupAll;
};
