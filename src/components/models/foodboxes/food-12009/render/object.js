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

// import { getFlap } from './module/flap';

import { foldBox, expandBox } from './module/animate';

import { material } from '../../../../function/material';

// let getPivotTopFlap,
//   getPivotGlueFlap,
//   getPivotFrontFlap,
//   getPivotBBottomLid,
//   getPivotBackFlap,
//   getPivotTopFlapEdges,
//   getPivotGlueFlapEdges,
//   getPivotFrontFlapEdges,
//   getPivotBBottomLidEdges,
//   getPivotBackFlapEdges;

export const food12009Model = (A, B, C, O, animate) => {
  // const P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const side_inside_flap_left = new THREE.Mesh(
    getInsideFlapShape(B, C),
    material(O)
  );
  side_inside_flap_left.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  const side_lr_lid_B_left = new THREE.Mesh(
    getLRLidBLeftRightShape(B, C),
    material(O)
  );
  side_lr_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  const side_lid_B_left_top = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_left_top.rotation.set(0, Math.PI, 0);

  const side_lid_B_left_bottom = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_left_bottom.rotation.set(Math.PI, Math.PI, 0);

  const side_lid_B_left = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  side_B_left.rotation.y = Math.PI;

  const side_inside_flap_right = new THREE.Mesh(
    getInsideFlapShape(B, C),
    material(O)
  );
  side_inside_flap_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const side_lr_lid_B_right = new THREE.Mesh(
    getLRLidBLeftRightShape(B, C),
    material(O)
  );
  side_lr_lid_B_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const side_lid_B_right_top = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );

  const side_lid_B_right_bottom = new THREE.Mesh(
    getLRBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_right_bottom.rotation.set(Math.PI, 0, 0);

  const side_lid_B_right = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_right.rotation.set(0, 0, (Math.PI / 180) * 270);
  side_lid_B_right.position.set(0, B, 0);

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const side_glue_flap_top = new THREE.Mesh(
    getGlueFlapShape(A, C),
    material(O)
  );
  side_glue_flap_top.rotation.set(Math.PI, 0, 0);

  const side_lr_lid_C_top = new THREE.Mesh(
    getLRLidCTopBottomShape(A, C),
    material(O)
  );

  const side_lr_C_top_left = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );

  const side_lr_C_top_right = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  side_lr_C_top_right.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_lr_C_top_right.position.set(A, 0, 0);

  const side_lid_C_top = new THREE.Mesh(
    getLidCTopBottomShape(A, C),
    material(O)
  );

  const side_dust_flap_top_left = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );
  side_dust_flap_top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  const side_dust_flap_top_right = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );

  const side_A_top = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const side_glue_flap_bottom = new THREE.Mesh(
    getGlueFlapShape(A, C),
    material(O)
  );

  const side_lr_lid_C_bottom = new THREE.Mesh(
    getLRLidCTopBottomShape(A, C),
    material(O)
  );
  side_lr_lid_C_bottom.rotation.set(Math.PI, 0, 0);

  const side_lr_C_bottom_left = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  side_lr_C_bottom_left.rotation.set((Math.PI / 180) * 180, 0, 0);

  const side_lr_C_bottom_right = new THREE.Mesh(
    getLRCTopBottomShape(A, C),
    material(O)
  );
  side_lr_C_bottom_right.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_lr_C_bottom_right.position.set(A, 0, 0);

  const side_lid_C_bottom = new THREE.Mesh(
    getLidCTopBottomShape(A, C),
    material(O)
  );
  side_lid_C_bottom.rotation.x = (Math.PI / 180) * 180;

  const side_dust_flap_bottom_left = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );
  side_dust_flap_bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  const side_dust_flap_bottom_right = new THREE.Mesh(
    getDustFlapShape(A, C),
    material(O)
  );
  side_dust_flap_bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

  const side_A_bottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  side_A_bottom.rotation.x = Math.PI;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getInsideFlapShape(B, C));
  const side_inside_flap_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_inside_flap_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  edges = new THREE.EdgesGeometry(getLRLidBLeftRightShape(B, C));
  const side_lr_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_B_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const side_lid_B_left_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_top_edges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const side_lid_B_left_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_bottom_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getInsideFlapShape(B, C));
  const side_inside_flap_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_inside_flap_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRLidBLeftRightShape(B, C));
  const side_lr_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_B_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const side_lid_B_right_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRBLeftRightShape(B, C));
  const side_lid_B_right_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_bottom_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.set(0, 0, (Math.PI / 180) * 270);
  side_lid_B_right_edges.position.set(0, B, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, C));
  const side_glue_flap_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_glue_flap_top_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLRLidCTopBottomShape(A, C));
  const side_lr_lid_C_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const side_lr_C_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const side_lr_C_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_C_top_right_edges.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_lr_C_top_right_edges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(getLidCTopBottomShape(A, C));
  const side_lid_C_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const side_dust_flap_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_top_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const side_dust_flap_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, C));
  const side_glue_flap_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidCTopBottomShape(A, C));
  const side_lr_lid_C_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_C_bottom_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const side_lr_C_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_C_bottom_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getLRCTopBottomShape(A, C));
  const side_lr_C_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_C_bottom_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_lr_C_bottom_right_edges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(getLidCTopBottomShape(A, C));
  const side_lid_C_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_C_bottom_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const side_dust_flap_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_bottom_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(A, C));
  const side_dust_flap_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_bottom_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  const pivot_inside_flap_left = new THREE.Object3D();
  pivot_inside_flap_left.add(side_inside_flap_left);
  pivot_inside_flap_left.position.set(-C, 0, 0);

  const pivot_lid_B_left_top = new THREE.Object3D();
  pivot_lid_B_left_top.add(side_lid_B_left_top);
  pivot_lid_B_left_top.position.set(0, (B / 1.428) | 0, 0);

  const pivot_lid_B_left_bottom = new THREE.Object3D();
  pivot_lid_B_left_bottom.add(side_lid_B_left_bottom);

  const pivot_lr_lid_B_left = new THREE.Object3D();
  pivot_lr_lid_B_left.add(
    side_lr_lid_B_left,
    pivot_inside_flap_left,
    pivot_lid_B_left_top,
    pivot_lid_B_left_bottom
  );
  pivot_lr_lid_B_left.position.set((-C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, pivot_lr_lid_B_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  const pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_lid_B_left);

  const pivot_inside_flap_right = new THREE.Object3D();
  pivot_inside_flap_right.add(side_inside_flap_right);
  pivot_inside_flap_right.position.set(C, 0, 0);

  const pivot_lid_B_right_top = new THREE.Object3D();
  pivot_lid_B_right_top.add(side_lid_B_right_top);
  pivot_lid_B_right_top.position.set(0, (B / 1.428) | 0, 0);

  const pivot_lid_B_right_bottom = new THREE.Object3D();
  pivot_lid_B_right_bottom.add(side_lid_B_right_bottom);

  const pivot_lr_lid_B_right = new THREE.Object3D();
  pivot_lr_lid_B_right.add(
    side_lr_lid_B_right,
    pivot_inside_flap_right,
    pivot_lid_B_right_top,
    pivot_lid_B_right_bottom
  );
  pivot_lr_lid_B_right.position.set((C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right, pivot_lr_lid_B_right);
  pivot_lid_B_right.position.set(C, 0, 0);

  const pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);

  const pivot_glue_flap_top = new THREE.Object3D();
  pivot_glue_flap_top.add(side_glue_flap_top);
  pivot_glue_flap_top.position.set(0, C, 0);

  const pivot_lr_lid_A_top = new THREE.Object3D();
  pivot_lr_lid_A_top.add(side_lr_lid_C_top, pivot_glue_flap_top);
  pivot_lr_lid_A_top.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

  const pivot_lr_A_top_left = new THREE.Object3D();
  pivot_lr_A_top_left.add(side_lr_C_top_left);

  const pivot_lr_A_top_right = new THREE.Object3D();
  pivot_lr_A_top_right.add(side_lr_C_top_right);

  const pivot_lid_A_top = new THREE.Object3D();
  pivot_lid_A_top.add(
    side_lid_C_top,
    pivot_lr_lid_A_top,
    pivot_lr_A_top_left,
    pivot_lr_A_top_right
  );
  pivot_lid_A_top.position.set(0, C, 0);

  const pivot_dust_flap_top_left = new THREE.Object3D();
  pivot_dust_flap_top_left.add(side_dust_flap_top_left);

  const pivot_dust_flap_top_right = new THREE.Object3D();
  pivot_dust_flap_top_right.add(side_dust_flap_top_right);
  pivot_dust_flap_top_right.position.set(A, 0, 0);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    pivot_lid_A_top,
    pivot_dust_flap_top_left,
    pivot_dust_flap_top_right
  );
  pivot_Top.position.set(0, B, 0);

  const pivot_glue_flap_bottom = new THREE.Object3D();
  pivot_glue_flap_bottom.add(side_glue_flap_bottom);
  pivot_glue_flap_bottom.position.set(0, -C, 0);

  const pivot_lr_lid_A_bottom = new THREE.Object3D();
  pivot_lr_lid_A_bottom.add(side_lr_lid_C_bottom, pivot_glue_flap_bottom);
  pivot_lr_lid_A_bottom.position.set((A * 0.075) | 0, (-C * 0.375) | 0, 0);

  const pivot_lr_A_bottom_left = new THREE.Object3D();
  pivot_lr_A_bottom_left.add(side_lr_C_bottom_left);

  const pivot_lr_A_bottom_right = new THREE.Object3D();
  pivot_lr_A_bottom_right.add(side_lr_C_bottom_right);

  const pivot_lid_A_bottom = new THREE.Object3D();
  pivot_lid_A_bottom.add(
    side_lid_C_bottom,
    pivot_lr_lid_A_bottom,
    pivot_lr_A_bottom_left,
    pivot_lr_A_bottom_right
  );
  pivot_lid_A_bottom.position.set(0, -C, 0);

  const pivot_dust_flap_bottom_left = new THREE.Object3D();
  pivot_dust_flap_bottom_left.add(side_dust_flap_bottom_left);

  const pivot_dust_flap_bottom_right = new THREE.Object3D();
  pivot_dust_flap_bottom_right.add(side_dust_flap_bottom_right);
  pivot_dust_flap_bottom_right.position.set(A, 0, 0);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    pivot_lid_A_bottom,
    pivot_dust_flap_bottom_left,
    pivot_dust_flap_bottom_right
  );

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Top, pivot_Bottom);

  const pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);

  const pivot_inside_flap_left_edges = new THREE.Object3D();
  pivot_inside_flap_left_edges.add(side_inside_flap_left_edges);
  pivot_inside_flap_left_edges.position.set(-C, 0, 0);

  const pivot_lid_B_left_top_edges = new THREE.Object3D();
  pivot_lid_B_left_top_edges.add(side_lid_B_left_top_edges);
  pivot_lid_B_left_top_edges.position.set(0, (B / 1.428) | 0, 0);

  const pivot_lid_B_left_bottom_edges = new THREE.Object3D();
  pivot_lid_B_left_bottom_edges.add(side_lid_B_left_bottom_edges);

  const pivot_lr_lid_B_left_edges = new THREE.Object3D();
  pivot_lr_lid_B_left_edges.add(
    side_lr_lid_B_left_edges,
    pivot_inside_flap_left_edges,
    pivot_lid_B_left_top_edges,
    pivot_lid_B_left_bottom_edges
  );
  pivot_lr_lid_B_left_edges.position.set((-C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.add(side_lid_B_left_edges, pivot_lr_lid_B_left_edges);
  pivot_lid_B_left_edges.position.set(-C, 0, 0);

  const pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_lid_B_left_edges);

  const pivot_inside_flap_right_edges = new THREE.Object3D();
  pivot_inside_flap_right_edges.add(side_inside_flap_right_edges);
  pivot_inside_flap_right_edges.position.set(C, 0, 0);

  const pivot_lid_B_right_top_edges = new THREE.Object3D();
  pivot_lid_B_right_top_edges.add(side_lid_B_right_top_edges);
  pivot_lid_B_right_top_edges.position.set(0, (B / 1.428) | 0, 0);

  const pivot_lid_B_right_bottom_edges = new THREE.Object3D();
  pivot_lid_B_right_bottom_edges.add(side_lid_B_right_bottom_edges);

  const pivot_lr_lid_B_right_edges = new THREE.Object3D();
  pivot_lr_lid_B_right_edges.add(
    side_lr_lid_B_right_edges,
    pivot_inside_flap_right_edges,
    pivot_lid_B_right_top_edges,
    pivot_lid_B_right_bottom_edges
  );
  pivot_lr_lid_B_right_edges.position.set((C * 0.375) | 0, (B / 6.667) | 0, 0);

  const pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.add(
    side_lid_B_right_edges,
    pivot_lr_lid_B_right_edges
  );
  pivot_lid_B_right_edges.position.set(C, 0, 0);

  const pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges, pivot_lid_B_right_edges);
  pivot_Right_edges.position.set(A, 0, 0);

  const pivot_glue_flap_top_edges = new THREE.Object3D();
  pivot_glue_flap_top_edges.add(side_glue_flap_top_edges);
  pivot_glue_flap_top_edges.position.set(0, C, 0);

  const pivot_lr_lid_A_top_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_edges.add(
    side_lr_lid_C_top_edges,
    pivot_glue_flap_top_edges
  );
  pivot_lr_lid_A_top_edges.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

  const pivot_lr_A_top_left_edges = new THREE.Object3D();
  pivot_lr_A_top_left_edges.add(side_lr_C_top_left_edges);

  const pivot_lr_A_top_right_edges = new THREE.Object3D();
  pivot_lr_A_top_right_edges.add(side_lr_C_top_right_edges);

  const pivot_lid_A_top_edges = new THREE.Object3D();
  pivot_lid_A_top_edges.add(
    side_lid_C_top_edges,
    pivot_lr_lid_A_top_edges,
    pivot_lr_A_top_left_edges,
    pivot_lr_A_top_right_edges
  );
  pivot_lid_A_top_edges.position.set(0, C, 0);

  const pivot_dust_flap_top_left_edges = new THREE.Object3D();
  pivot_dust_flap_top_left_edges.add(side_dust_flap_top_left_edges);

  const pivot_dust_flap_top_right_edges = new THREE.Object3D();
  pivot_dust_flap_top_right_edges.add(side_dust_flap_top_right_edges);
  pivot_dust_flap_top_right_edges.position.set(A, 0, 0);

  const pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_A_top_edges,
    pivot_lid_A_top_edges,
    pivot_dust_flap_top_left_edges,
    pivot_dust_flap_top_right_edges
  );
  pivot_Top_edges.position.set(0, B, 0);

  const pivot_glue_flap_bottom_edges = new THREE.Object3D();
  pivot_glue_flap_bottom_edges.add(side_glue_flap_bottom_edges);
  pivot_glue_flap_bottom_edges.position.set(0, -C, 0);

  const pivot_lr_lid_A_bottom_edges = new THREE.Object3D();
  pivot_lr_lid_A_bottom_edges.add(
    side_lr_lid_C_bottom_edges,
    pivot_glue_flap_bottom_edges
  );
  pivot_lr_lid_A_bottom_edges.position.set(
    (A * 0.075) | 0,
    (-C * 0.375) | 0,
    0
  );

  const pivot_lr_A_bottom_left_edges = new THREE.Object3D();
  pivot_lr_A_bottom_left_edges.add(side_lr_C_bottom_left_edges);

  const pivot_lr_A_bottom_right_edges = new THREE.Object3D();
  pivot_lr_A_bottom_right_edges.add(side_lr_C_bottom_right_edges);

  const pivot_lid_A_bottom_edges = new THREE.Object3D();
  pivot_lid_A_bottom_edges.add(
    side_lid_C_bottom_edges,
    pivot_lr_lid_A_bottom_edges,
    pivot_lr_A_bottom_left_edges,
    pivot_lr_A_bottom_right_edges
  );
  pivot_lid_A_bottom_edges.position.set(0, -C, 0);

  const pivot_dust_flap_bottom_left_edges = new THREE.Object3D();
  pivot_dust_flap_bottom_left_edges.add(side_dust_flap_bottom_left_edges);

  const pivot_dust_flap_bottom_right_edges = new THREE.Object3D();
  pivot_dust_flap_bottom_right_edges.add(side_dust_flap_bottom_right_edges);
  pivot_dust_flap_bottom_right_edges.position.set(A, 0, 0);

  const pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_A_bottom_edges,
    pivot_lid_A_bottom_edges,
    pivot_dust_flap_bottom_left_edges,
    pivot_dust_flap_bottom_right_edges
  );

  const pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Left_edges,
    pivot_Right_edges,
    pivot_Top_edges,
    pivot_Bottom_edges
  );

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(
    pivot_All,
    pivot_All_edges
    // getFlap(A, B, C, O, P)
  );
  pivotGroupAll.rotation.set(0, Math.PI, Math.PI / 2);

  if (animate) {
    // setTimeout(() => {
    //   sceneAdd(pivot_All_edges, pivot_All_edges);
    // }, 5000);
    foldBox(
      pivot_Right,
      pivot_lid_B_right,
      pivot_lr_lid_B_right,
      pivot_lid_B_right_top,
      pivot_lid_B_right_bottom,
      pivot_inside_flap_right,
      pivot_Left,
      pivot_lid_B_left,
      pivot_lr_lid_B_left,
      pivot_lid_B_left_top,
      pivot_lid_B_left_bottom,
      pivot_inside_flap_left,
      pivot_Top,
      pivot_lid_A_top,
      pivot_lr_A_top_left,
      pivot_lr_A_top_right,
      pivot_lr_lid_A_top,
      pivot_glue_flap_top,
      pivot_dust_flap_top_left,
      pivot_dust_flap_top_right,
      pivot_Bottom,
      pivot_lid_A_bottom,
      pivot_lr_A_bottom_left,
      pivot_lr_A_bottom_right,
      pivot_lr_lid_A_bottom,
      pivot_glue_flap_bottom,
      pivot_dust_flap_bottom_left,
      pivot_dust_flap_bottom_right,
      pivot_All,
      pivot_Right_edges,
      pivot_lid_B_right_edges,
      pivot_lr_lid_B_right_edges,
      pivot_lid_B_right_top_edges,
      pivot_lid_B_right_bottom_edges,
      pivot_inside_flap_right_edges,
      pivot_Left_edges,
      pivot_lid_B_left_edges,
      pivot_lr_lid_B_left_edges,
      pivot_lid_B_left_top_edges,
      pivot_lid_B_left_bottom_edges,
      pivot_inside_flap_left_edges,
      pivot_Top_edges,
      pivot_lid_A_top_edges,
      pivot_lr_A_top_left_edges,
      pivot_lr_A_top_right_edges,
      pivot_lr_lid_A_top_edges,
      pivot_glue_flap_top_edges,
      pivot_dust_flap_top_left_edges,
      pivot_dust_flap_top_right_edges,
      pivot_Bottom_edges,
      pivot_lid_A_bottom_edges,
      pivot_lr_A_bottom_left_edges,
      pivot_lr_A_bottom_right_edges,
      pivot_lr_lid_A_bottom_edges,
      pivot_glue_flap_bottom_edges,
      pivot_dust_flap_bottom_left_edges,
      pivot_dust_flap_bottom_right_edges,
      pivot_All_edges
      // getPivotTopFlap,
      // getPivotGlueFlap,
      // getPivotFrontFlap,
      // getPivotBBottomLid,
      // getPivotBackFlap,
      // getPivotTopFlapEdges,
      // getPivotGlueFlapEdges,
      // getPivotFrontFlapEdges,
      // getPivotBBottomLidEdges,
      // getPivotBackFlapEdges
    );
  } else {
    expandBox(
      B,
      C,
      pivot_Right,
      pivot_lid_B_right,
      pivot_lr_lid_B_right,
      pivot_lid_B_right_top,
      pivot_lid_B_right_bottom,
      pivot_inside_flap_right,
      pivot_Left,
      pivot_lid_B_left,
      pivot_lr_lid_B_left,
      pivot_lid_B_left_top,
      pivot_lid_B_left_bottom,
      pivot_inside_flap_left,
      pivot_Top,
      pivot_lid_A_top,
      pivot_lr_A_top_left,
      pivot_lr_A_top_right,
      pivot_lr_lid_A_top,
      pivot_glue_flap_top,
      pivot_dust_flap_top_left,
      pivot_dust_flap_top_right,
      pivot_Bottom,
      pivot_lid_A_bottom,
      pivot_lr_A_bottom_left,
      pivot_lr_A_bottom_right,
      pivot_lr_lid_A_bottom,
      pivot_glue_flap_bottom,
      pivot_dust_flap_bottom_left,
      pivot_dust_flap_bottom_right,
      pivot_All,
      pivot_Right_edges,
      pivot_lid_B_right_edges,
      pivot_lr_lid_B_right_edges,
      pivot_lid_B_right_top_edges,
      pivot_lid_B_right_bottom_edges,
      pivot_inside_flap_right_edges,
      pivot_Left_edges,
      pivot_lid_B_left_edges,
      pivot_lr_lid_B_left_edges,
      pivot_lid_B_left_top_edges,
      pivot_lid_B_left_bottom_edges,
      pivot_inside_flap_left_edges,
      pivot_Top_edges,
      pivot_lid_A_top_edges,
      pivot_lr_A_top_left_edges,
      pivot_lr_A_top_right_edges,
      pivot_lr_lid_A_top_edges,
      pivot_glue_flap_top_edges,
      pivot_dust_flap_top_left_edges,
      pivot_dust_flap_top_right_edges,
      pivot_Bottom_edges,
      pivot_lid_A_bottom_edges,
      pivot_lr_A_bottom_left_edges,
      pivot_lr_A_bottom_right_edges,
      pivot_lr_lid_A_bottom_edges,
      pivot_glue_flap_bottom_edges,
      pivot_dust_flap_bottom_left_edges,
      pivot_dust_flap_bottom_right_edges,
      pivot_All_edges
      // getPivotTopFlap,
      // getPivotGlueFlap,
      // getPivotFrontFlap,
      // getPivotBBottomLid,
      // getPivotBackFlap,
      // getPivotTopFlapEdges,
      // getPivotGlueFlapEdges,
      // getPivotFrontFlapEdges,
      // getPivotBBottomLidEdges,
      // getPivotBackFlapEdges
    );
  }

  return pivotGroupAll;
};

// const flap = (
//   pivotTopFlap,
//   pivotGlueFlap,
//   pivotFrontFlap,
//   pivotBBottomLid,
//   pivotBackFlap,
//   pivotTopFlapEdges,
//   pivotGlueFlapEdges,
//   pivotFrontFlapEdges,
//   pivotBBottomLidEdges,
//   pivotBackFlapEdges
// ) => {
//   getPivotTopFlap = pivotTopFlap;
//   getPivotGlueFlap = pivotGlueFlap;
//   getPivotFrontFlap = pivotFrontFlap;
//   getPivotBBottomLid = pivotBBottomLid;
//   getPivotBackFlap = pivotBackFlap;
//   getPivotTopFlapEdges = pivotTopFlapEdges;
//   getPivotGlueFlapEdges = pivotGlueFlapEdges;
//   getPivotFrontFlapEdges = pivotFrontFlapEdges;
//   getPivotBBottomLidEdges = pivotBBottomLidEdges;
//   getPivotBackFlapEdges = pivotBackFlapEdges;
// };
