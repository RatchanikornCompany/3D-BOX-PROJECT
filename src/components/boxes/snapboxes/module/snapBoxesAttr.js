import * as THREE from 'three';

import { material } from '../../../.modules/material';

import {
  getLLidShape,
  getRLidShape,
  getLidLeftDShape,
  getLidRightDShape,
  getLLidShapeD,
  getRLidShapeD,
  getLidBottomShape,
  getLidLeftBottomDShape,
  getLidRightBottomDShape,
  getLidTrapeBottomShape,
  getLidBottomCoverShape,
} from './snapBoxesModel';
import {
  getPlaneASideShape,
  getPlaneABackShape,
  getPlaneBSideShape,
  getPlaneBBackShape,
  getPlaneTopShape,
  getLidCover,
  getGlueLid,
} from '../../../.modules/models';
import { foldBox } from './snapBoxesAnim';

export const snapBoxesModel = (
  A,
  B,
  C,
  O,
  G,
  GSlope,
  animate,
  materialColor
) => {
  const lengLRLib = A * 0.3,
    P = 5, //? ความกว้างเฉพาะด้านของฝาเสียบกาว
    plugLength = 5;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideABack = new THREE.Mesh(
    getPlaneABackShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideBottom = new THREE.Mesh(
    getLidTrapeBottomShape(A, B),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;
  sideBottom.rotation.y = Math.PI;

  const sideLidBottom = new THREE.Mesh(
    getLidBottomCoverShape(B, A),
    material(O, materialColor)
  );
  sideLidBottom.castShadow = true;
  sideLidBottom.rotation.z = Math.PI / 2;

  const sideBLeft = new THREE.Mesh(
    getPlaneBBackShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLidBLeft = new THREE.Mesh(
    getLLidShape(B, lengLRLib),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;

  const sideBLeftD = new THREE.Mesh(
    getLidLeftDShape(A, B),
    material(O, materialColor)
  );
  sideBLeftD.castShadow = true;

  const sideLidBLeftD = new THREE.Mesh(
    getLLidShapeD(A, B),
    material(O, materialColor)
  );
  sideLidBLeftD.castShadow = true;
  sideLidBLeftD.rotation.z = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLidBRight = new THREE.Mesh(
    getRLidShape(B, lengLRLib),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideBRightD = new THREE.Mesh(
    getLidRightDShape(A, B),
    material(O, materialColor)
  );
  sideBRightD.castShadow = true;
  sideBRightD.rotation.x = Math.PI;
  sideBRightD.rotation.y = Math.PI;

  const sideLidBRightD = new THREE.Mesh(
    getRLidShapeD(A, B),
    material(O, materialColor)
  );
  sideLidBRightD.castShadow = true;
  sideLidBRightD.rotation.x = Math.PI;
  sideLidBRightD.rotation.y = Math.PI;

  const sideLidCover = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideLidCover.castShadow = true;
  sideLidCover.rotation.x = Math.PI;

  const sideTop = new THREE.Mesh(
    getPlaneTopShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideABottom = new THREE.Mesh(
    getLidBottomShape(A, B),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;

  const sideALeftBottom = new THREE.Mesh(
    getLidLeftBottomDShape(A, B),
    material(O, materialColor)
  );
  sideALeftBottom.castShadow = true;
  sideALeftBottom.rotation.z = Math.PI;

  const sideARightBottom = new THREE.Mesh(
    getLidRightBottomDShape(A, B),
    material(O, materialColor)
  );
  sideARightBottom.castShadow = true;
  sideARightBottom.rotation.z = Math.PI;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABackShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidTrapeBottomShape(A, B));
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
  sideLidBottomEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBBackShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLidShape(B, lengLRLib));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidLeftDShape(A, B));
  const sideBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLidShapeD(A, B));
  const sideLidBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLidShape(B, lengLRLib));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidRightDShape(A, B));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.x = Math.PI;
  sideBRightDEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getRLidShapeD(A, B));
  const sideLidBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightDEdges.rotation.x = Math.PI;
  sideLidBRightDEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideLidCoverEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCoverEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneTopShape(A, B, plugLength));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidLeftBottomDShape(A, B));
  const sideALeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALeftBottomEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getLidRightBottomDShape(A, B));
  const sideARightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideARightBottomEdges.rotation.z = Math.PI;

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
