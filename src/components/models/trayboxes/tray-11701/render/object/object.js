import * as THREE from 'three';

import {
  getLRLidALeftRightShape,
  getLidBLeftRightShape,
  getDustFlapShape,
  getDustFlapLidAShape,
} from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from '../../../tray-11a05/render/object/module/models';
import { foldBox } from './module/animate';

import { material } from '../../../../../function/material';

export const tray11701Model = (A, B, C, O, animate) => {
  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideLidBLeft = new THREE.Mesh(getLidBLeftRightShape(B, C), material(O));
  sideLidBLeft.rotation.set(0, 0, (Math.PI / 180) * 90);

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideLidBRight = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  sideLidBRight.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideDustFlapLidALeft = new THREE.Mesh(
    getDustFlapLidAShape(B, C),
    material(O)
  );
  sideDustFlapLidALeft.rotation.set(0, (Math.PI / 180) * 180, 0);

  const sideDustFlapLidARight = new THREE.Mesh(
    getDustFlapLidAShape(B, C),
    material(O)
  );

  const sideLRLidATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideLRLidATopLeft = new THREE.Mesh(
    getLRLidALeftRightShape(B, C),
    material(O)
  );
  sideLRLidATopLeft.rotation.set(0, 0, (Math.PI / 180) * 90);

  const sideLRLidATopRight = new THREE.Mesh(
    getLRLidALeftRightShape(B, C),
    material(O)
  );
  sideLRLidATopRight.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  const sideLidATop = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  sideDustFlapTopLeft.rotation.set(0, (Math.PI / 180) * 180, 0);

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );

  const sideATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  sideDustFlapBottomLeft.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  sideDustFlapBottomRight.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideABottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideABottom.rotation.x = Math.PI;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightEdges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapLidAShape(B, C));
  const sideDustFlapLidALeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLidALeftEdges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapLidAShape(B, C));
  const sideDustFlapLidARightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideLRLidATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidALeftRightShape(B, C));
  const sideLRLidATopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidATopLeftEdges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRLidALeftRightShape(B, C));
  const sideLRLidATopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidATopRightEdges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideLidATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const sideDustFlapTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapTopLeftEdges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const sideDustFlapTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const sideDustFlapBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomLeftEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const sideDustFlapBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomRightEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.x = Math.PI;

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges);
  pivotLidBLeft.position.set(-C, 0, 0);

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, sideBLeftEdges, pivotLidBLeft);

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges);
  pivotLidBRight.position.set(C, 0, 0);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, sideBRightEdges, pivotLidBRight);
  pivotRight.position.set(A, 0, 0);

  const pivotDustFlapLidALeft = new THREE.Object3D();
  pivotDustFlapLidALeft.add(sideDustFlapLidALeft, sideDustFlapLidALeftEdges);

  const pivotDustFlapLidARight = new THREE.Object3D();
  pivotDustFlapLidARight.add(sideDustFlapLidARight, sideDustFlapLidARightEdges);
  pivotDustFlapLidARight.position.set(A, 0, 0);

  const pivotLRLidATop = new THREE.Object3D();
  pivotLRLidATop.add(
    sideLRLidATop,
    sideLRLidATopEdges,
    pivotDustFlapLidALeft,
    pivotDustFlapLidARight
  );
  pivotLRLidATop.position.set(0, B, 0);

  const pivotLRLidATopLeft = new THREE.Object3D();
  pivotLRLidATopLeft.add(sideLRLidATopLeft, sideLRLidATopLeftEdges);

  const pivotLRLidATopRight = new THREE.Object3D();
  pivotLRLidATopRight.add(sideLRLidATopRight, sideLRLidATopRightEdges);
  pivotLRLidATopRight.position.set(A, 0, 0);

  const pivotGroupATop = new THREE.Object3D();
  pivotGroupATop.add(
    sideLidATop,
    sideLidATopEdges,
    pivotLRLidATop,
    pivotLRLidATopLeft,
    pivotLRLidATopRight
  );
  pivotGroupATop.position.set(0, C, 0);

  const pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft, sideDustFlapTopLeftEdges);

  const pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight, sideDustFlapTopRightEdges);
  pivotDustFlapTopRight.position.set(A, 0, 0);

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    sideATopEdges,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight,
    pivotGroupATop
  );
  pivotTop.position.set(0, B, 0);

  const pivotDustFlapBottomLeft = new THREE.Object3D();
  pivotDustFlapBottomLeft.add(
    sideDustFlapBottomLeft,
    sideDustFlapBottomLeftEdges
  );

  const pivotDustFlapBottomRight = new THREE.Object3D();
  pivotDustFlapBottomRight.add(
    sideDustFlapBottomRight,
    sideDustFlapBottomRightEdges
  );
  pivotDustFlapBottomRight.position.set(A, 0, 0);

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    sideABottomEdges,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotLeft, pivotRight, pivotTop, pivotBottom);

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAll);

  if (animate) {
    foldBox(
      pivotTop,
      pivotGroupATop,
      pivotLRLidATopLeft,
      pivotLRLidATopRight,
      pivotDustFlapTopLeft,
      pivotDustFlapTopRight,
      pivotLRLidATop,
      pivotDustFlapLidALeft,
      pivotDustFlapLidARight,
      pivotLeft,
      pivotLidBLeft,
      pivotRight,
      pivotLidBRight,
      pivotBottom,
      pivotDustFlapBottomLeft,
      pivotDustFlapBottomRight,
      pivotAll
    );
  }

  return pivotGroupAll;
};
