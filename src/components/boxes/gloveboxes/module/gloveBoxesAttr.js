import * as THREE from 'three';

import { material } from '../../../.modules/material';

import {
  getFlapsTop,
  getFlapsBottom,
  getTopCover,
  getBottomCover,
  getTopCoverLid,
  getBottomCoverLid,
} from './gloveBoxesModel';
import {
  getPlaneASideShape,
  getPlaneABackShape,
  getPlaneBSideShape,
  getPlaneBBackShape,
  getPlaneTopShape,
  getPlaneBottomShape,
  getLidCover,
  getLidCoverD,
  getGlueLid,
} from '../../../.modules/models';
import { foldBox } from './gloveBoxesAnim';

export const gloveModel = (A, B, C, O, G, GSlope, animate, materialColor) => {
  const plug = 15,
    plugSlope = 5;

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

  const sideTop = new THREE.Mesh(getTopCover(A, B), material(O, materialColor));
  sideTop.castShadow = true;

  const sideLidTop = new THREE.Mesh(
    getTopCoverLid(A, B),
    material(O, materialColor)
  );
  sideLidTop.castShadow = true;

  const sideBottom = new THREE.Mesh(
    getBottomCover(A, B),
    material(O, materialColor)
  );
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;
  sideBottom.rotation.y = Math.PI;

  const sideLidBottom = new THREE.Mesh(
    getBottomCoverLid(A, B),
    material(O, materialColor)
  );
  sideLidBottom.castShadow = true;
  sideLidBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBBackShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;

  const sideLidBLeft = new THREE.Mesh(
    getFlapsTop(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;

  const sideBLeftD = new THREE.Mesh(
    getFlapsBottom(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideBLeftD.castShadow = true;
  sideBLeftD.rotation.set(Math.PI, Math.PI, 0);

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLidBRight = new THREE.Mesh(
    getFlapsTop(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideBRightD = new THREE.Mesh(
    getFlapsBottom(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideBRightD.castShadow = true;
  sideBRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideATop = new THREE.Mesh(
    getPlaneTopShape(A, B, plugSlope),
    material(O, materialColor)
  );
  sideATop.castShadow = true;

  const sideATopLid = new THREE.Mesh(
    getLidCover(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideATopLid.castShadow = true;

  const sideABottom = new THREE.Mesh(
    getPlaneBottomShape(A, B, plugSlope),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;

  const sideALidBottom = new THREE.Mesh(
    getLidCoverD(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideALidBottom.castShadow = true;

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

  edges = new THREE.EdgesGeometry(getTopCover(A, B));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getTopCoverLid(A, B));
  const sideLidTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getBottomCover(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;
  sideBottomEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getBottomCoverLid(A, B));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBBackShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getFlapsTop(A, B, plug, plugSlope));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getFlapsBottom(A, B, plug, plugSlope));
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

  edges = new THREE.EdgesGeometry(getFlapsTop(A, B, plug, plugSlope));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getFlapsBottom(A, B, plug, plugSlope));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneTopShape(A, B, plugSlope));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, plug, plugSlope));
  const sideATopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBottomShape(A, B, plugSlope));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCoverD(A, B, plug, plugSlope));
  const sideALidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotALidTop = new THREE.Object3D();
  pivotALidTop.position.y = B;
  pivotALidTop.add(sideATopLid, sideATopLidEdges);

  const pivotGroupATop = new THREE.Object3D();
  pivotGroupATop.add(sideATop, sideATopEdges, pivotALidTop);
  pivotGroupATop.position.y = C;

  const pivotALidBottom = new THREE.Object3D();
  pivotALidBottom.add(sideALidBottom, sideALidBottomEdges);
  pivotALidBottom.position.y = -B;

  const pivotGroupABottom = new THREE.Object3D();
  pivotGroupABottom.add(sideABottom, sideABottomEdges, pivotALidBottom);

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotGroupATop,
    pivotGroupABottom
  );

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.position.x = -A;
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, sideABackEdges, pivotGlueLid);

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideTop, sideTopEdges);

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideLidTop, sideLidTopEdges);
  pivotTopLid.position.y = B;

  const pivotGroupTop = new THREE.Object3D();
  pivotGroupTop.add(pivotTop, pivotTopLid);
  pivotGroupTop.position.y = C;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges);

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideLidBottom, sideLidBottomEdges);
  pivotBottomLid.position.y = -B;

  const pivotGroupBottom = new THREE.Object3D();
  pivotGroupBottom.add(pivotBottom, pivotBottomLid);

  const pivotGroupABack = new THREE.Object3D();
  pivotGroupABack.position.x = -B;
  pivotGroupABack.add(pivotABack, pivotGroupTop, pivotGroupBottom);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.position.y = C;
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges);

  const pivotLidBLeftD = new THREE.Object3D();
  pivotLidBLeftD.add(sideBLeftD, sideBLeftDEdges);

  const pivotGroubBLeftD = new THREE.Object3D();
  pivotGroubBLeftD.add(pivotLidBLeftD);

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(
    pivotLidBLeft,
    sideBLeft,
    sideBLeftEdges,
    pivotGroubBLeftD,
    pivotGroupABack
  );

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.position.set(B, C, 0);
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges);

  const pivotLidBRightD = new THREE.Object3D();
  pivotLidBRightD.position.x = B;
  pivotLidBRightD.add(sideBRightD);

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
      pivotALidTop,
      pivotGroupATop,
      pivotALidBottom,
      pivotGroupABottom,
      pivotGlueLid,
      pivotTopLid,
      pivotGroupTop,
      pivotBottomLid,
      pivotGroupBottom,
      pivotGroupABack,
      pivotLidBLeft,
      pivotLidBLeftD,
      pivotBLeft,
      pivotLidBRight,
      pivotLidBRightD,
      pivotBRight
    );
  }

  return pivotAll;
};
