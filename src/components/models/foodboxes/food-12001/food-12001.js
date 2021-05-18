import * as THREE from 'three';

import {
  getLidALeftRightShape,
  getLidBTopBottomShape,
  getLRLidATopShape,
  getGlueLidShape,
  getPlaneASideShape,
  getPlaneBSideShape,
} from './modules/models';
import { foldBox, expandBox } from './modules/animate';

import { sceneAdd } from '../../../../function/webgl';
import { material } from '../../../../function/material';
import { updateSize } from '../../../../function/updatesize';

let A = 200,
  B = 100,
  C = 40,
  O = 1,
  G = 15,
  P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

let pivot_Glue_lid,
  pivot_Glue_lid_edges,
  pivot_lr_lid_A_left,
  pivot_lr_lid_A_left_edges,
  pivot_lr_lid_A_right,
  pivot_lr_lid_A_right_edges,
  pivot_lid_A_top,
  pivot_lid_A_top_edges,
  pivot_lid_B_top_left,
  pivot_lid_B_top_left_edges,
  pivot_lid_B_top_right,
  pivot_lid_B_top_right_edges,
  pivot_Top,
  pivot_Top_edges,
  pivot_lid_B_bottom_left,
  pivot_lid_B_bottom_left_edges,
  pivot_lid_B_bottom_right,
  pivot_lid_B_bottom_right_edges,
  pivot_Bottom,
  pivot_Bottom_edges,
  pivot_Left,
  pivot_Left_edges,
  pivot_Right,
  pivot_Right_edges;

let edges;

const init = (a, b, c, o) => {
  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const side_Glue_lid = new THREE.Mesh(getGlueLidShape(A, G, P), material(O));

  const side_lr_lid_A_left = new THREE.Mesh(
    getLRLidATopShape(B, C),
    material(O)
  );
  side_lr_lid_A_left.rotation.y = -Math.PI;

  const side_lr_lid_A_right = new THREE.Mesh(
    getLRLidATopShape(B, C),
    material(O)
  );

  const side_lid_A_top = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const side_lid_B_top_left = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O)
  );
  side_lid_B_top_left.rotation.y = Math.PI;

  const side_lid_B_top_right = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O)
  );

  const side_B_top = new THREE.Mesh(getPlaneBSideShape(A, C), material(O));

  const side_lid_B_bottom_left = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O)
  );
  side_lid_B_bottom_left.rotation.set(Math.PI, Math.PI, 0);

  const side_lid_B_bottom_right = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O)
  );
  side_lid_B_bottom_right.rotation.x = Math.PI;

  const side_B_bottom = new THREE.Mesh(getPlaneBSideShape(A, C), material(O));
  side_B_bottom.rotation.x = -Math.PI;

  const side_Left = new THREE.Mesh(getLidALeftRightShape(C, B), material(O));
  side_Left.rotation.y = -(Math.PI / 180) * 180;

  const side_Right = new THREE.Mesh(getLidALeftRightShape(C, B), material(O));

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLidShape(A, G, P));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidATopShape(B, C));
  const side_lr_lid_A_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_left_edges.rotation.y = -Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidATopShape(B, C));
  const side_lr_lid_A_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const side_lid_B_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_top_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const side_lid_B_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(A, C));
  const side_B_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const side_lid_B_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_bottom_left_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const side_lid_B_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_bottom_right_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(A, C));
  const side_B_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_bottom_edges.rotation.x = -Math.PI;

  edges = new THREE.EdgesGeometry(getLidALeftRightShape(C, B));
  const side_Left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_edges.rotation.y = -(Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLidALeftRightShape(C, B));
  const side_Right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.y = B;

  pivot_lr_lid_A_left = new THREE.Object3D();
  pivot_lr_lid_A_left.add(side_lr_lid_A_left);

  pivot_lr_lid_A_right = new THREE.Object3D();
  pivot_lr_lid_A_right.add(side_lr_lid_A_right);
  pivot_lr_lid_A_right.position.x = A;

  pivot_lid_A_top = new THREE.Object3D();
  pivot_lid_A_top.add(
    side_lid_A_top,
    pivot_Glue_lid,
    pivot_lr_lid_A_left,
    pivot_lr_lid_A_right
  );
  pivot_lid_A_top.position.set(0, C, 0);

  pivot_lid_B_top_left = new THREE.Object3D();
  pivot_lid_B_top_left.add(side_lid_B_top_left);

  pivot_lid_B_top_right = new THREE.Object3D();
  pivot_lid_B_top_right.add(side_lid_B_top_right);
  pivot_lid_B_top_right.position.x = A;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_B_top,
    pivot_lid_B_top_left,
    pivot_lid_B_top_right,
    pivot_lid_A_top
  );
  pivot_Top.position.y = B;

  pivot_lid_B_bottom_left = new THREE.Object3D();
  pivot_lid_B_bottom_left.add(side_lid_B_bottom_left);

  pivot_lid_B_bottom_right = new THREE.Object3D();
  pivot_lid_B_bottom_right.add(side_lid_B_bottom_right);
  pivot_lid_B_bottom_right.position.x = A;

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_B_bottom,
    pivot_lid_B_bottom_left,
    pivot_lid_B_bottom_right
  );

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_Left);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_Right);
  pivot_Right.position.set(A, 0, 0);

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Top, pivot_Bottom, pivot_Left, pivot_Right);
  pivot_All.rotation.z = Math.PI / 2;

  const pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(0, B, 0);

  pivot_lr_lid_A_left_edges = new THREE.Object3D();
  pivot_lr_lid_A_left_edges.add(side_lr_lid_A_left_edges);

  pivot_lr_lid_A_right_edges = new THREE.Object3D();
  pivot_lr_lid_A_right_edges.add(side_lr_lid_A_right_edges);
  pivot_lr_lid_A_right_edges.position.set(A, 0, 0);

  pivot_lid_A_top_edges = new THREE.Object3D();
  pivot_lid_A_top_edges.add(
    side_lid_A_top_edges,
    pivot_Glue_lid_edges,
    pivot_lr_lid_A_left_edges,
    pivot_lr_lid_A_right_edges
  );
  pivot_lid_A_top_edges.position.set(0, C, 0);

  pivot_lid_B_top_left_edges = new THREE.Object3D();
  pivot_lid_B_top_left_edges.add(side_lid_B_top_left_edges);

  pivot_lid_B_top_right_edges = new THREE.Object3D();
  pivot_lid_B_top_right_edges.add(side_lid_B_top_right_edges);
  pivot_lid_B_top_right_edges.position.set(A, 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_B_top_edges,
    pivot_lid_B_top_left_edges,
    pivot_lid_B_top_right_edges,
    pivot_lid_A_top_edges
  );
  pivot_Top_edges.position.set(0, B, 0);

  pivot_lid_B_bottom_left_edges = new THREE.Object3D();
  pivot_lid_B_bottom_left_edges.add(side_lid_B_bottom_left_edges);

  pivot_lid_B_bottom_right_edges = new THREE.Object3D();
  pivot_lid_B_bottom_right_edges.add(side_lid_B_bottom_right_edges);
  pivot_lid_B_bottom_right_edges.position.set(A, 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_B_bottom_edges,
    pivot_lid_B_bottom_left_edges,
    pivot_lid_B_bottom_right_edges
  );

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_Left_edges);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_Right_edges);
  pivot_Right_edges.position.x = A;

  const pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Top_edges,
    pivot_Bottom_edges,
    pivot_Left_edges,
    pivot_Right_edges
  );
  pivot_All_edges.rotation.z = Math.PI / 2;

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivot_All, pivot_All_edges);

  if ((a, b, c, o)) {
    A = a;
    B = b;
    C = c;
    O = o;

    updateSize(A, B, C, O);
  }

  sceneAdd(pivotGroupAll);
};

const rotations = (value) => {
  value
    ? foldBox(
        pivot_Glue_lid,
        pivot_Glue_lid_edges,
        pivot_lr_lid_A_left,
        pivot_lr_lid_A_left_edges,
        pivot_lr_lid_A_right,
        pivot_lr_lid_A_right_edges,
        pivot_lid_A_top,
        pivot_lid_A_top_edges,
        pivot_lid_B_top_left,
        pivot_lid_B_top_left_edges,
        pivot_lid_B_top_right,
        pivot_lid_B_top_right_edges,
        pivot_Top,
        pivot_Top_edges,
        pivot_lid_B_bottom_left,
        pivot_lid_B_bottom_left_edges,
        pivot_lid_B_bottom_right,
        pivot_lid_B_bottom_right_edges,
        pivot_Bottom,
        pivot_Bottom_edges,
        pivot_Left,
        pivot_Left_edges,
        pivot_Right,
        pivot_Right_edges
      )
    : expandBox(
        pivot_Glue_lid,
        pivot_Glue_lid_edges,
        pivot_lr_lid_A_left,
        pivot_lr_lid_A_left_edges,
        pivot_lr_lid_A_right,
        pivot_lr_lid_A_right_edges,
        pivot_lid_A_top,
        pivot_lid_A_top_edges,
        pivot_lid_B_top_left,
        pivot_lid_B_top_left_edges,
        pivot_lid_B_top_right,
        pivot_lid_B_top_right_edges,
        pivot_Top,
        pivot_Top_edges,
        pivot_lid_B_bottom_left,
        pivot_lid_B_bottom_left_edges,
        pivot_lid_B_bottom_right,
        pivot_lid_B_bottom_right_edges,
        pivot_Bottom,
        pivot_Bottom_edges,
        pivot_Left,
        pivot_Left_edges,
        pivot_Right,
        pivot_Right_edges
      );
};

export default {
  init,
  rotations,
};
