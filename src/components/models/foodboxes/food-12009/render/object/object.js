import * as THREE from 'three';

import {
  getLidCTopBottomShape,
  getLRCTopBottomShape,
  getLRLidCTopBottomShape,
  getLidBLeftRightShape,
  getLRLidBLeftRightShape,
  getLRBLeftRightShape,
  getInsideFlapShape,
  getGlueFlapShape,
  getDustFlapShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './module/models';
import {
  getPlaneASideFlapShape,
  getPlaneBSideFlapShape,
} from '../../../../trayboxes/tray-21b02/render/object/module/models';

import { foldBox, expandBox } from './module/animate';

import { material } from '../../../../../function/material';

export const food12009Model = (A, B, C, O, animate) => {
  const P = 5; //? ความกว้างเฉพาะด้านของฝาเสียบกาว

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const sideInsideFlapLeft = new THREE.Mesh(
    getInsideFlapShape(B, C),
    material(O)
  );
  sideInsideFlapLeft.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  const sideLRLidBLeft = new THREE.Mesh(
    getLRLidBLeftRightShape(B, C),
    material(O)
  );
  sideLRLidBLeft.rotation.set(0, 0, (Math.PI / 180) * 90);

  const sideLidBLeftTop = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  sideLidBLeftTop.rotation.set(0, Math.PI, 0);

  const sideLidBLeftBottom = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  sideLidBLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideLidBLeft = new THREE.Mesh(getLidBLeftRightShape(B, C), material(O));
  sideLidBLeft.rotation.set(0, 0, (Math.PI / 180) * 90);

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideInsideFlapRight = new THREE.Mesh(
    getInsideFlapShape(B, C),
    material(O)
  );
  sideInsideFlapRight.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const sideLRLidBRight = new THREE.Mesh(
    getLRLidBLeftRightShape(B, C),
    material(O)
  );
  sideLRLidBRight.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const sideLidBRightTop = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );

  const sideLidBRightBottom = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  sideLidBRightBottom.rotation.set(Math.PI, 0, 0);

  const sideLidBRight = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  sideLidBRight.rotation.set(0, 0, (Math.PI / 180) * 270);
  sideLidBRight.position.set(0, B, 0);

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideGlueFlapTop = new THREE.Mesh(getGlueFlapShape(A, C), material(O));
  sideGlueFlapTop.rotation.set(Math.PI, 0, 0);

  const sideLRLidCTop = new THREE.Mesh(
    getLRLidCTopBottomShape(A, C),
    material(O)
  );

  const sideLRCTopLeft = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );

  const sideLRCTopRight = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  sideLRCTopRight.rotation.set(0, (Math.PI / 180) * 180, 0);
  sideLRCTopRight.position.set(A, 0, 0);

  const sideLidCTop = new THREE.Mesh(getLidCTopBottomShape(A, C), material(O));

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );
  sideDustFlapTopLeft.rotation.set(0, (Math.PI / 180) * 180, 0);

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );

  const sideATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideGlueFlapBottom = new THREE.Mesh(
    getGlueFlapShape(A, C),
    material(O)
  );

  const sideLRLidCBottom = new THREE.Mesh(
    getLRLidCTopBottomShape(A, C),
    material(O)
  );
  sideLRLidCBottom.rotation.set(Math.PI, 0, 0);

  const sideLRCBottomLeft = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  sideLRCBottomLeft.rotation.set((Math.PI / 180) * 180, 0, 0);

  const sideLRCBottomRight = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  sideLRCBottomRight.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  sideLRCBottomRight.position.set(A, 0, 0);

  const sideLidCBottom = new THREE.Mesh(
    getLidCTopBottomShape(A, C),
    material(O)
  );
  sideLidCBottom.rotation.x = (Math.PI / 180) * 180;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );
  sideDustFlapBottomLeft.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapShape(A, C),
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

  edges = new THREE.EdgesGeometry(getInsideFlapShape(B, C));
  const sideInsideFlapLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInsideFlapLeftEdges.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  edges = new THREE.EdgesGeometry(getLRLidBLeftRightShape(B, C));
  const sideLRLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidBLeftEdges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const sideLidBLeftTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftTopEdges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const sideLidBLeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftBottomEdges.rotation.set(Math.PI, Math.PI, 0);

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

  edges = new THREE.EdgesGeometry(getInsideFlapShape(B, C));
  const sideInsideFlapRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInsideFlapRightEdges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRLidBLeftRightShape(B, C));
  const sideLRLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidBRightEdges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const sideLidBRightTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const sideLidBRightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightBottomEdges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightEdges.rotation.set(0, 0, (Math.PI / 180) * 270);
  sideLidBRightEdges.position.set(0, B, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, C));
  const sideGlueFlapTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueFlapTopEdges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLRLidCTopBottomShape(A, C));
  const sideLRLidCTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const sideLRCTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const sideLRCTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRCTopRightEdges.rotation.set(0, (Math.PI / 180) * 180, 0);
  sideLRCTopRightEdges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(getLidCTopBottomShape(A, C));
  const sideLidCTop_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const sideDustFlapTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapTopLeftEdges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const sideDustFlapTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, C));
  const sideGlueFlapBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidCTopBottomShape(A, C));
  const sideLRLidCBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidCBottomEdges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const sideLRCBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRCBottomLeftEdges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const sideLRCBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRCBottomRightEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  sideLRCBottomRightEdges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(getLidCTopBottomShape(A, C));
  const sideLidCBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCBottomEdges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const sideDustFlapBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomLeftEdges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
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

  const sideAFrontFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O)
  );

  const sideGlueFlap = new THREE.Mesh(getGlueFlapShape(A, P), material(O));
  sideGlueFlap.rotation.x = Math.PI;

  const sideABackFlap = new THREE.Mesh(
    getPlaneASideFlapShape(A, B),
    material(O)
  );

  const sideBTopLid = new THREE.Mesh(getPlaneBSideFlapShape(A, C), material(O));

  const sideBBottomLid = new THREE.Mesh(
    getPlaneBSideFlapShape(A, C),
    material(O)
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

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, sideABackEdges);

  const pivotInsideFlapLeft = new THREE.Object3D();
  pivotInsideFlapLeft.add(sideInsideFlapLeft, sideInsideFlapLeftEdges);
  pivotInsideFlapLeft.position.set(-C, 0, 0);

  const pivotLidBLeftTop = new THREE.Object3D();
  pivotLidBLeftTop.add(sideLidBLeftTop, sideLidBLeftTopEdges);
  pivotLidBLeftTop.position.set(0, (B / 1.428) | 0, 0);

  const pivotLidBLeftBottom = new THREE.Object3D();
  pivotLidBLeftBottom.add(sideLidBLeftBottom, sideLidBLeftBottomEdges);

  const pivotLRLidBLeft = new THREE.Object3D();
  pivotLRLidBLeft.add(
    sideLRLidBLeft,
    sideLRLidBLeftEdges,
    pivotInsideFlapLeft,
    pivotLidBLeftTop,
    pivotLidBLeftBottom
  );
  pivotLRLidBLeft.position.set((-C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges, pivotLRLidBLeft);
  pivotLidBLeft.position.set(-C, 0, 0);

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, sideBLeftEdges, pivotLidBLeft);

  const pivotInsideFlapRight = new THREE.Object3D();
  pivotInsideFlapRight.add(sideInsideFlapRight, sideInsideFlapRightEdges);
  pivotInsideFlapRight.position.set(C, 0, 0);

  const pivotLidBRightTop = new THREE.Object3D();
  pivotLidBRightTop.add(sideLidBRightTop, sideLidBRightTopEdges);
  pivotLidBRightTop.position.set(0, (B / 1.428) | 0, 0);

  const pivotLidBRightBottom = new THREE.Object3D();
  pivotLidBRightBottom.add(sideLidBRightBottom, sideLidBRightBottomEdges);

  const pivotLRLidBRight = new THREE.Object3D();
  pivotLRLidBRight.add(
    sideLRLidBRight,
    sideLRLidBRightEdges,
    pivotInsideFlapRight,
    pivotLidBRightTop,
    pivotLidBRightBottom
  );
  pivotLRLidBRight.position.set((C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges, pivotLRLidBRight);
  pivotLidBRight.position.set(C, 0, 0);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideBRight, sideBRightEdges, pivotLidBRight);
  pivotRight.position.set(A, 0, 0);

  const pivotGlueFlapTop = new THREE.Object3D();
  pivotGlueFlapTop.add(sideGlueFlapTop, sideGlueFlapTopEdges);
  pivotGlueFlapTop.position.set(0, C, 0);

  const pivotLRLidATop = new THREE.Object3D();
  pivotLRLidATop.add(sideLRLidCTop, sideLRLidCTopEdges, pivotGlueFlapTop);
  pivotLRLidATop.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

  const pivotLRATopLeft = new THREE.Object3D();
  pivotLRATopLeft.add(sideLRCTopLeft, sideLRCTopLeftEdges);

  const pivotLRATopRight = new THREE.Object3D();
  pivotLRATopRight.add(sideLRCTopRight, sideLRCTopRightEdges);

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(
    sideLidCTop,
    sideLidCTop_edges,
    pivotLRLidATop,
    pivotLRATopLeft,
    pivotLRATopRight
  );
  pivotLidATop.position.set(0, C, 0);

  const pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft, sideDustFlapTopLeftEdges);

  const pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight, sideDustFlapTopRightEdges);
  pivotDustFlapTopRight.position.set(A, 0, 0);

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    sideATopEdges,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.set(0, B, 0);

  const pivotGlueFlapBottom = new THREE.Object3D();
  pivotGlueFlapBottom.add(sideGlueFlapBottom, sideGlueFlapBottomEdges);
  pivotGlueFlapBottom.position.set(0, -C, 0);

  const pivotLRLidABottom = new THREE.Object3D();
  pivotLRLidABottom.add(
    sideLRLidCBottom,
    sideLRLidCBottomEdges,
    pivotGlueFlapBottom
  );
  pivotLRLidABottom.position.set((A * 0.075) | 0, (-C * 0.375) | 0, 0);

  const pivotLRABottomLeft = new THREE.Object3D();
  pivotLRABottomLeft.add(sideLRCBottomLeft, sideLRCBottomLeftEdges);

  const pivotLRABottomRight = new THREE.Object3D();
  pivotLRABottomRight.add(sideLRCBottomRight, sideLRCBottomRightEdges);

  const pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(
    sideLidCBottom,
    sideLidCBottomEdges,
    pivotLRLidABottom,
    pivotLRABottomLeft,
    pivotLRABottomRight
  );
  pivotLidABottom.position.set(0, -C, 0);

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
    pivotLidABottom,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotLeft, pivotRight, pivotTop, pivotBottom);

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
  pivotBackFlap.position.x = A * 2;
  // pivotBackFlap.rotation.z = Math.PI / 2;
  // pivotBackFlap.position.y = ((B + C) * 2) | 0;

  const pivotGroupFlapAll = new THREE.Group();
  pivotGroupFlapAll.add(pivotBackFlap);

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAll, pivotGroupFlapAll);
  // pivotGroupAll.rotation.set(0, Math.PI, Math.PI / 2);

  if (animate) {
    // setTimeout(() => {
    //   sceneAdd(pivotAll_edges, pivotAll_edges);
    // }, 5000);
    foldBox(
      pivotRight,
      pivotLidBRight,
      pivotLRLidBRight,
      pivotLidBRightTop,
      pivotLidBRightBottom,
      pivotInsideFlapRight,
      pivotLeft,
      pivotLidBLeft,
      pivotLRLidBLeft,
      pivotLidBLeftTop,
      pivotLidBLeftBottom,
      pivotInsideFlapLeft,
      pivotTop,
      pivotLidATop,
      pivotLRATopLeft,
      pivotLRATopRight,
      pivotLRLidATop,
      pivotGlueFlapTop,
      pivotDustFlapTopLeft,
      pivotDustFlapTopRight,
      pivotBottom,
      pivotLidABottom,
      pivotLRABottomLeft,
      pivotLRABottomRight,
      pivotLRLidABottom,
      pivotGlueFlapBottom,
      pivotDustFlapBottomLeft,
      pivotDustFlapBottomRight,
      pivotAll,
      pivotTopFlap,
      pivotGlueFlap,
      pivotFrontFlap,
      pivotBBottomLid,
      pivotBackFlap
    );
  } else {
    expandBox(
      A,
      pivotRight,
      pivotLidBRight,
      pivotLRLidBRight,
      pivotLidBRightTop,
      pivotLidBRightBottom,
      pivotInsideFlapRight,
      pivotLeft,
      pivotLidBLeft,
      pivotLRLidBLeft,
      pivotLidBLeftTop,
      pivotLidBLeftBottom,
      pivotInsideFlapLeft,
      pivotTop,
      pivotLidATop,
      pivotLRATopLeft,
      pivotLRATopRight,
      pivotLRLidATop,
      pivotGlueFlapTop,
      pivotDustFlapTopLeft,
      pivotDustFlapTopRight,
      pivotBottom,
      pivotLidABottom,
      pivotLRABottomLeft,
      pivotLRABottomRight,
      pivotLRLidABottom,
      pivotGlueFlapBottom,
      pivotDustFlapBottomLeft,
      pivotDustFlapBottomRight,
      pivotAll,
      pivotTopFlap,
      pivotGlueFlap,
      pivotFrontFlap,
      pivotBBottomLid,
      pivotBackFlap
    );
  }

  return pivotGroupAll;
};
