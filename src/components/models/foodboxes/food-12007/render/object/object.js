import * as THREE from 'three';

import { material } from '../../../../../function/material';

import {
  getPlaneAShape,
  getPlaneATopShape,
  getPlaneBShape,
  getLidBottomShape,
  getLidBottomDShape,
  getLRLidBottom,
  getLRLidShape,
  getLRLidDShape,
} from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
} from '../../../../tuckendboxes/render/object/module/models';
import { foldBox, expandBox } from './module/animate';

export const food12007Model = (A, B, C, O, animate) => {
  const L = 0.3, //? เปอร์เซนนต์
    lengLRLib = A * L;

  const sideAFrontTop = new THREE.Mesh(getPlaneAShape(A, C), material(O));

  const sideAFront = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideBFrontLeft = new THREE.Mesh(getPlaneBShape(C, B), material(O));
  sideBFrontLeft.rotation.y = (Math.PI / 180) * 180;

  const sideBLeftLid = new THREE.Mesh(getLRLidShape(C, lengLRLib), material(O));
  sideBLeftLid.rotation.y = (Math.PI / 180) * 180;

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideBLeftLidD = new THREE.Mesh(
    getLRLidDShape(C, lengLRLib),
    material(O)
  );
  sideBLeftLidD.rotation.set((Math.PI / 180) * 180, (Math.PI / 180) * 180, 0);

  const sideBFrontRight = new THREE.Mesh(getPlaneBShape(C, B), material(O));

  const sideBRightLid = new THREE.Mesh(
    getLRLidShape(C, lengLRLib),
    material(O)
  );

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideBRightLidD = new THREE.Mesh(
    getLRLidDShape(C, lengLRLib),
    material(O)
  );
  sideBRightLidD.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideATop = new THREE.Mesh(getPlaneATopShape(A, C), material(O));

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideLidBottom = new THREE.Mesh(getLidBottomShape(A, C), material(O));
  sideLidBottom.rotation.x = (Math.PI / 180) * 180;

  const sideLidBottomD = new THREE.Mesh(getLidBottomDShape(A, C), material(O));
  sideLidBottomD.position.y = -C;

  const sideLRLidBottomLeft = new THREE.Mesh(getLRLidBottom(A, C), material(O));
  sideLRLidBottomLeft.rotation.x = (Math.PI / 180) * 180;

  const sideLRLidBottomRight = new THREE.Mesh(
    getLRLidBottom(A, C),
    material(O)
  );
  sideLRLidBottomRight.rotation.x = (Math.PI / 180) * 180;

  let edges = new THREE.EdgesGeometry(getPlaneAShape(A, C));
  const sideAFrontTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBShape(C, B));
  const sideBFrontLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBFrontLeftEdges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLRLidShape(C, lengLRLib));
  const sideBLeftLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftLidEdges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidDShape(C, lengLRLib));
  const sideBLeftLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftLidDEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(getPlaneBShape(C, B));
  const sideBFrontRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(C, lengLRLib));
  const sideBRightLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidDShape(C, lengLRLib));
  const sideBRightLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightLidDEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneATopShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomEdges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, C));
  const sideLidBottomDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomDEdges.position.y = -C;

  edges = new THREE.EdgesGeometry(getLRLidBottom(A, C));
  const sideLRLidBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidBottomLeftEdges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLRLidBottom(A, C));
  const sideLRLidBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidBottomRightEdges.rotation.x = (Math.PI / 180) * 180;

  const pivotAFrontTop = new THREE.Object3D();
  pivotAFrontTop.add(sideAFrontTop, sideAFrontTopEdges);
  pivotAFrontTop.position.y = B;

  const pivotBFrontLeft = new THREE.Object3D();
  pivotBFrontLeft.add(sideBFrontLeft, sideBFrontLeftEdges);

  const pivotBFrontRight = new THREE.Object3D();
  pivotBFrontRight.add(sideBFrontRight, sideBFrontRightEdges);
  pivotBFrontRight.position.x = A;

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotAFrontTop,
    pivotBFrontLeft,
    pivotBFrontRight
  );
  pivotAFront.position.y = C;

  const pivotBLeftLid = new THREE.Object3D();
  pivotBLeftLid.add(sideBLeftLid, sideBLeftLidEdges);
  pivotBLeftLid.position.y = B;

  const pivotBLeftLidD = new THREE.Object3D();
  pivotBLeftLidD.add(sideBLeftLidD, sideBLeftLidDEdges);

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(sideBLeft, sideBLeftEdges, pivotBLeftLid, pivotBLeftLidD);

  const pivotBRightLid = new THREE.Object3D();
  pivotBRightLid.add(sideBRightLid, sideBRightLidEdges);
  pivotBRightLid.position.y = B;

  const pivotBRightLidD = new THREE.Object3D();
  pivotBRightLidD.add(sideBRightLidD, sideBRightLidDEdges);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.add(sideBRight, sideBRightEdges, pivotBRightLid, pivotBRightLidD);
  pivotBRight.position.x = A;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop, sideATopEdges, pivotAFront);
  pivotATop.position.y = B;

  const pivotLRLidBottomLeft = new THREE.Object3D();
  pivotLRLidBottomLeft.add(sideLRLidBottomLeft, sideLRLidBottomLeftEdges);
  pivotLRLidBottomLeft.position.set((A * 0.182) | 0, -C, 0);

  const pivotLRLidBottomRight = new THREE.Object3D();
  pivotLRLidBottomRight.add(sideLRLidBottomRight, sideLRLidBottomRightEdges);
  pivotLRLidBottomRight.position.set((A * 0.637) | 0, -C, 0);

  const pivotLidBottomD = new THREE.Object3D();
  pivotLidBottomD.add(
    sideLidBottomD,
    sideLidBottomDEdges,
    pivotLRLidBottomLeft,
    pivotLRLidBottomRight
  );
  pivotLidBottomD.position.y = -C;

  const pivotLidBottom = new THREE.Object3D();
  pivotLidBottom.add(sideLidBottom, sideLidBottomEdges, pivotLidBottomD);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(
    sideABack,
    sideABackEdges,
    pivotATop,
    pivotBLeft,
    pivotBRight,
    pivotLidBottom
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotABack);

  animate
    ? foldBox(
        pivotAFrontTop,
        pivotBFrontLeft,
        pivotBFrontRight,
        pivotAFront,
        pivotBLeftLid,
        pivotBLeftLidD,
        pivotBLeft,
        pivotBRightLid,
        pivotBRightLidD,
        pivotBRight,
        pivotATop,
        pivotLidBottomD,
        pivotLidBottom,
        pivotABack
      )
    : expandBox(
        pivotAFrontTop,
        pivotBFrontLeft,
        pivotBFrontRight,
        pivotAFront,
        pivotBLeftLid,
        pivotBLeftLidD,
        pivotBLeft,
        pivotBRightLid,
        pivotBRightLidD,
        pivotBRight,
        pivotATop,
        pivotLidBottomD,
        pivotLidBottom,
        pivotABack
      );

  return pivotAll;
};
