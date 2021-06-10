import * as THREE from 'three';

import { material } from '../../../three_modules/material';

import { getLidShape, getFlaps, getCover, getCoverD } from './gloveBoxesModel';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
  getLidCover,
} from '../../../three_modules/models';
import { foldBox } from './gloveBoxesAnim';

export const gloveModel = (A, B, C, O, animate, materialColor) => {
  const P = 18, //? ความกว้างเฉพาะด้านของฝาเสียบกาว
    plug = 15,
    plugSlope = 5;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;
  sideABack.rotation.y = Math.PI;

  const sideGlueLid = new THREE.Mesh(
    getLidShape(C, P),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.y = Math.PI;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideTop = new THREE.Mesh(getCover(A, B), material(O, materialColor));
  sideTop.castShadow = true;
  sideTop.rotation.y = Math.PI;

  const sideLidTop = new THREE.Mesh(
    getCoverD(A, B),
    material(O, materialColor)
  );
  sideLidTop.castShadow = true;
  sideLidTop.rotation.y = Math.PI;

  const sideBottom = new THREE.Mesh(getCover(A, B), material(O, materialColor));
  sideBottom.castShadow = true;
  sideBottom.rotation.x = Math.PI;
  sideBottom.rotation.y = Math.PI;

  const sideLidBottom = new THREE.Mesh(
    getCoverD(A, B),
    material(O, materialColor)
  );
  sideLidBottom.castShadow = true;
  sideLidBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.rotation.y = Math.PI;

  const sideLidBLeft = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;
  sideLidBLeft.rotation.y = Math.PI;

  const sideBLeftD = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
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
    getFlaps(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;
  sideLidBRight.rotation.y = Math.PI;

  const sideBRightD = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideBRightD.castShadow = true;
  sideBRightD.rotation.set(Math.PI, Math.PI, 0);

  const sideATop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugSlope),
    material(O, materialColor)
  );
  sideATop.castShadow = true;

  const sideATopLid = new THREE.Mesh(
    getLidCover(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideATopLid.castShadow = true;

  const sideABottom = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugSlope),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;
  sideABottom.rotation.x = Math.PI;

  const sideALidBottom = new THREE.Mesh(
    getLidCover(A, B, plug, plugSlope),
    material(O, materialColor)
  );
  sideALidBottom.castShadow = true;
  sideALidBottom.rotation.x = Math.PI;

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
  sideABackEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(C, P));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.y = Math.PI;
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getCover(A, B));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getCoverD(A, B));
  const sideLidTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidTopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getCover(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;
  sideBottomEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getCoverD(A, B));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
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

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugSlope));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, plug, plugSlope));
  const sideATopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugSlope));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, plug, plugSlope));
  const sideALidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidBottomEdges.rotation.x = Math.PI;

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
