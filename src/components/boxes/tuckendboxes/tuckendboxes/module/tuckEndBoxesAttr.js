import * as THREE from 'three';

import { material, materialBack } from '../../../../.modules/material';

import {
  getPlaneASideShape,
  getPlaneABackShape,
  getPlaneBSideShape,
  getPlaneTopShape,
  getPlaneBottomShape,
  getLidCover,
  getLidCoverD,
  getLLid,
  getRLid,
  getGlueLid,
} from '../../../../.modules/models';
import { foldBox } from './tuckEndBoxesAnim';

export const tuckEndModel = (A, B, C, O, G, GSlope, animate, materialColor) => {
  const F = 30, //? ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
    P = 15, //? ความกว้างเฉพาะด้านของฝาเสียบกาว
    plugLength = 5;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideAFrontClone = new THREE.Mesh(
    getPlaneASideShape(A, C),
    materialBack(O, materialColor)
  );

  const sideAFrontGroup = new THREE.Group();
  sideAFrontGroup.add(sideAFront, sideAFrontClone);

  const sideABack = new THREE.Mesh(
    getPlaneABackShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideABackClone = new THREE.Mesh(
    getPlaneABackShape(A, C),
    materialBack(O, materialColor)
  );

  const sideABackGroup = new THREE.Group();
  sideABackGroup.add(sideABack, sideABackClone);

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideGlueLidClone = new THREE.Mesh(
    getGlueLid(C, G, GSlope),
    materialBack(O, materialColor)
  );
  sideGlueLidClone.rotation.z = Math.PI / 2;

  const sideGlueLidGroup = new THREE.Group();
  sideGlueLidGroup.add(sideGlueLid, sideGlueLidClone);

  const sideBottom = new THREE.Mesh(
    getPlaneBottomShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;

  const sideBottomClone = new THREE.Mesh(
    getPlaneBottomShape(A, B, plugLength),
    materialBack(O, materialColor)
  );
  sideBottomClone.rotation.x = Math.PI;

  const sideBottomGroup = new THREE.Group();
  sideBottomGroup.add(sideBottom, sideBottomClone);

  const sideLidBottom = new THREE.Mesh(
    getLidCoverD(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideLidBottom.castShadow = true;

  const sideLidBottomClone = new THREE.Mesh(
    getLidCoverD(A, B, P, plugLength),
    materialBack(O, materialColor)
  );

  const sideLidBottomGroup = new THREE.Group();
  sideLidBottomGroup.add(sideLidBottom, sideLidBottomClone);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.position.x = -B;

  const sideBLeftClone = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    materialBack(O, materialColor)
  );
  sideBLeftClone.position.x = -B;

  const sideBLeftGroup = new THREE.Group();
  sideBLeftGroup.add(sideBLeft, sideBLeftClone);

  const sideLidBLeft = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;

  const sideLidBLeftClone = new THREE.Mesh(
    getLLid(A, B, F),
    materialBack(O, materialColor)
  );

  const sideLidBLeftGroup = new THREE.Group();
  sideLidBLeftGroup.add(sideLidBLeft, sideLidBLeftClone);

  const sideBLeftD = new THREE.Mesh(
    getLLid(A, B, F),
    material(O, materialColor)
  );
  sideBLeftD.castShadow = true;
  sideBLeftD.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeftDClone = new THREE.Mesh(
    getLLid(A, B, F),
    materialBack(O, materialColor)
  );
  sideBLeftDClone.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeftDGroup = new THREE.Group();
  sideBLeftDGroup.add(sideBLeftD, sideBLeftDClone);

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideBRightClone = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    materialBack(O, materialColor)
  );

  const sideBRightGroup = new THREE.Group();
  sideBRightGroup.add(sideBRight, sideBRightClone);

  const sideLidBRight = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideLidBRightClone = new THREE.Mesh(
    getRLid(A, B, F),
    materialBack(O, materialColor)
  );

  const sideLidBRightGroup = new THREE.Group();
  sideLidBRightGroup.add(sideLidBRight, sideLidBRightClone);

  const sideBRightD = new THREE.Mesh(
    getRLid(A, B, F),
    material(O, materialColor)
  );
  sideBRightD.castShadow = true;
  sideBRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideBRightDClone = new THREE.Mesh(
    getRLid(A, B, F),
    materialBack(O, materialColor)
  );
  sideBRightDClone.rotation.set(Math.PI, Math.PI, 0);

  const sideBRightDGroup = new THREE.Group();
  sideBRightDGroup.add(sideBRightD, sideBRightDClone);

  const sideTop = new THREE.Mesh(
    getPlaneTopShape(A, B, plugLength),
    material(O, materialColor)
  );
  sideTop.castShadow = true;

  const sideTopClone = new THREE.Mesh(
    getPlaneTopShape(A, B, plugLength),
    materialBack(O, materialColor)
  );

  const sideTopGroup = new THREE.Group();
  sideTopGroup.add(sideTop, sideTopClone);

  const sideTopLid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O, materialColor)
  );
  sideTopLid.castShadow = true;

  const sideTopLidClone = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    materialBack(O, materialColor)
  );

  const sideTopLidGroup = new THREE.Group();
  sideTopLidGroup.add(sideTopLid, sideTopLidClone);

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

  edges = new THREE.EdgesGeometry(getPlaneBottomShape(A, B, plugLength));
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
  sideBLeftDEdges.rotation.set(Math.PI, Math.PI, 0);

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

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottomGroup, sideBottomEdges);
  pivotBottom.rotation.x = Math.PI;

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideLidBottomGroup, sideLidBottomEdges);
  pivotBottomLid.position.y = -B;

  const pivotGroupBottom = new THREE.Object3D();
  pivotGroupBottom.add(pivotBottom, pivotBottomLid);

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(sideAFrontGroup, sideAFrontEdges, pivotGroupBottom);

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.position.y = B;
  pivotTopLid.add(sideTopLidGroup, sideTopLidEdges);

  const pivotTop = new THREE.Object3D();
  pivotTop.position.set(-A, C, 0);
  pivotTop.add(sideTopGroup, sideTopEdges, pivotTopLid);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLidGroup, sideGlueLidEdges);
  pivotGlueLid.position.x = -A;

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABackGroup, sideABackEdges, pivotGlueLid, pivotTop);

  const pivotGroupABack = new THREE.Object3D();
  pivotGroupABack.position.x = -B;
  pivotGroupABack.add(pivotABack);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.position.y = C;
  pivotLidBLeft.add(sideLidBLeftGroup, sideLidBLeftEdges);

  const pivotLidBLeftD = new THREE.Object3D();
  pivotLidBLeftD.add(sideBLeftDGroup, sideBLeftDEdges);
  pivotLidBLeftD.position.x = -B;

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(
    sideBLeftGroup,
    sideBLeftEdges,
    pivotLidBLeft,
    pivotLidBLeftD,
    pivotGroupABack
  );

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.position.y = C;
  pivotLidBRight.add(sideLidBRightGroup, sideLidBRightEdges);

  const pivotLidBRightD = new THREE.Object3D();
  pivotLidBRightD.add(sideBRightDGroup, sideBRightDEdges);
  pivotLidBRightD.position.x = B;

  const pivotGroupBRightD = new THREE.Object3D();
  pivotGroupBRightD.add(pivotLidBRightD);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.position.x = A;
  pivotBRight.add(
    pivotLidBRight,
    sideBRightGroup,
    sideBRightEdges,
    pivotGroupBRightD
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.name = 'pivotAll';
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
