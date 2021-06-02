import * as THREE from 'three';

import { material } from '../../../../function/material';

import {
  getLidCover,
  getLidCoverD,
  getGlueLid,
  getLLid,
  getRLid,
  getLid,
  getPlaneASideShape,
  getPlaneABackSideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
  getPlaneTopBottomDShape,
} from '../../../tuckendboxes/render/object/module/models';
import { foldBox } from './module/animate';

export const tuckEndCenterModel = (
  A,
  B,
  C,
  O,
  G,
  GSlope,
  animate,
  materialColor
) => {
  const F = 30, //? ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
    P = 15, //? ความกว้างเฉพาะด้านของฝาเสียบกาว
    plugLength = 5;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideABack = new THREE.Mesh(
    getPlaneABackSideShape(A, C),
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
    getPlaneTopBottomDShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;

  const sideLidBottom = new THREE.Mesh(
    getLidCoverD(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideLidBottom.castShadow = true;

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.position.x = -B;

  const sideLidBLeft = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;

  const sideBLeftD = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideBLeftD.castShadow = true;
  sideBLeftD.rotation.z = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLidBRight = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideBRightD = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideBRightD.castShadow = true;
  sideBRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideTop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABackSideShape(A, C));
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

  edges = new THREE.EdgesGeometry(getPlaneTopBottomDShape(A, B, plugLength));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  sideBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCoverD(A, B, P, plugLength));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -B;

  edges = new THREE.EdgesGeometry(getLLid(A, B, F));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLLid(A, B, F));
  const sideBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftDEdges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getRLid(A, B, F));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugLength));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const sideTopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.position.y = B;
  pivotTopLid.add(sideTopLid, sideTopLidEdges);

  const pivotTop = new THREE.Object3D();
  pivotTop.position.y = C;
  pivotTop.add(sideTop, sideTopEdges, pivotTopLid);

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges);
  pivotBottom.rotation.x = Math.PI;

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideLidBottom, sideLidBottomEdges);
  pivotBottomLid.position.y = -B;

  const pivotGroupBottom = new THREE.Object3D();
  pivotGroupBottom.add(pivotBottom, pivotBottomLid);

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(sideAFront, sideAFrontEdges, pivotTop, pivotGroupBottom);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.position.x = -A;
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, sideABackEdges, pivotGlueLid);

  const pivotGroupABack = new THREE.Object3D();
  pivotGroupABack.position.x = -B;
  pivotGroupABack.add(pivotABack);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.position.y = C;
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges);

  const pivotLidBLeftD = new THREE.Object3D();
  pivotLidBLeftD.add(sideBLeftD, sideBLeftDEdges);
  pivotLidBLeftD.position.x = -B;

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(
    sideBLeft,
    sideBLeftEdges,
    pivotLidBLeft,
    pivotLidBLeftD,
    pivotGroupABack
  );

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.position.y = C;
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges);

  const pivotLidBRightD = new THREE.Object3D();
  pivotLidBRightD.add(sideBRightD, sideBRightDEdges);
  pivotLidBRightD.position.x = B;

  const pivotGroupBRightD = new THREE.Object3D();
  pivotGroupBRightD.add(pivotLidBRightD);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.position.x = A;
  pivotBRight.add(
    pivotLidBRight,
    sideBRight,
    sideBRightEdges,
    pivotGroupBRightD
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotAFront, pivotBLeft, pivotBRight);

  if (animate) {
    foldBox(
      pivotBottomLid,
      pivotGroupBottom,
      pivotLidBLeft,
      pivotLidBLeftD,
      pivotBLeft,
      pivotTopLid,
      pivotTop,
      pivotGlueLid,
      pivotABack,
      pivotLidBRight,
      pivotLidBRightD,
      pivotBRight
    );
  }

  return pivotAll;
};
