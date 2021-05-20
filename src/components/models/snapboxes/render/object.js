import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getLidShape,
  getGludLidShape,
  getLRLidShape,
  getLidShapeD,
  getLRLidShapeD,
  getLidBottomShape,
  getLidBottomDShape,
  getLRLidBottomShape,
  getLidBottomCoverShape,
  getPlaneTopBottomShape,
} from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
} from '../../tuckendboxes/render/module/models';
import { foldBox, expandBox } from './module/animate';

export const snapBoxesModel = (A, B, C, O, animate) => {
  const P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

  const leng_lr_lib = A * 0.3;

  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material(O));
  side_A_back.position.x = -A;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A;

  const side_Glue_lid = new THREE.Mesh(getGludLidShape(C, P), material(O));
  side_Glue_lid.rotation.y = Math.PI;
  side_Glue_lid.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getGludLidShape(C, P));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.y = Math.PI;
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  const side_Bottom = new THREE.Mesh(getLRLidBottomShape(A, B), material(O));
  side_Bottom.rotation.x = Math.PI;
  side_Bottom.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, B));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.rotation.x = Math.PI;
  side_Bottom_edges.rotation.y = Math.PI;

  const side_lid_Bottom = new THREE.Mesh(
    getLidBottomCoverShape(B, A),
    material(O)
  );
  side_lid_Bottom.rotation.x = Math.PI;
  side_lid_Bottom.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidBottomCoverShape(B, A));
  const side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_edges.rotation.x = Math.PI;
  side_lid_Bottom_edges.rotation.z = Math.PI / 2;

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));
  side_B_left.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.rotation.y = Math.PI;

  const side_lid_B_left = new THREE.Mesh(
    getLRLidShape(B, leng_lr_lib),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(B, leng_lr_lib));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_B_left_d = new THREE.Mesh(getLidShapeD(A, B), material(O));
  side_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShapeD(A, B));
  const side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  const side_lid_B_left_d = new THREE.Mesh(getLRLidShapeD(A, B), material(O));
  side_lid_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(A, B));
  const side_lid_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_d_edges.rotation.x = Math.PI;

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lid_B_right = new THREE.Mesh(
    getLRLidShape(B, leng_lr_lib),
    material(O)
  );
  side_lid_B_right.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShape(B, leng_lr_lib));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.y = Math.PI;

  const side_B_right_d = new THREE.Mesh(getLidShapeD(A, B), material(O));
  side_B_right_d.rotation.x = Math.PI;
  side_B_right_d.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShapeD(A, B));
  const side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.x = Math.PI;
  side_B_right_d_edges.rotation.y = Math.PI;

  const side_lid_B_right_d = new THREE.Mesh(getLRLidShapeD(A, B), material(O));
  side_lid_B_right_d.rotation.x = Math.PI;
  side_lid_B_right_d.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(A, B));
  const side_lid_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_d_edges.rotation.x = Math.PI;
  side_lid_B_right_d_edges.rotation.y = Math.PI;

  const side_lid_Cover = new THREE.Mesh(getLidShape(A, P), material(O));
  side_lid_Cover.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(A, P));
  const side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;

  const side_Top = new THREE.Mesh(getPlaneTopBottomShape(A, B), material(O));

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_lid = new THREE.Mesh(getLidShape(A, P), material(O));
  side_Top_lid.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(A, P));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  const side_A_bottom = new THREE.Mesh(getLidBottomShape(A, B), material(O));
  side_A_bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, B));
  const side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  const side_A_left_bottom = new THREE.Mesh(
    getLidBottomDShape(A, B),
    material(O)
  );
  side_A_left_bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, B));
  const side_A_left_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_left_bottom_edges.rotation.x = Math.PI;

  const side_A_right_bottom = new THREE.Mesh(
    getLidBottomDShape(A, B),
    material(O)
  );
  side_A_right_bottom.rotation.x = Math.PI;
  side_A_right_bottom.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, B));
  const side_A_right_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_right_bottom_edges.rotation.x = Math.PI;
  side_A_right_bottom_edges.rotation.y = Math.PI;

  const pivot_A_left_bottom = new THREE.Object3D();
  pivot_A_left_bottom.position.y = -B * 0.47;
  pivot_A_left_bottom.add(side_A_left_bottom, side_A_left_bottom_edges);

  const pivot_A_right_bottom = new THREE.Object3D();
  pivot_A_right_bottom.position.set(A, (-B * 0.47) | 0, 0);
  pivot_A_right_bottom.add(side_A_right_bottom, side_A_right_bottom_edges);

  const pivot_group_A_front = new THREE.Object3D();
  pivot_group_A_front.add(
    side_A_bottom,
    side_A_bottom_edges,
    pivot_A_left_bottom,
    pivot_A_right_bottom
  );

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, side_A_front_edges, pivot_group_A_front);

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.x = -A;
  pivot_Glue_lid.add(side_Glue_lid, side_Glue_lid_edges);

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, side_A_back_edges, pivot_Glue_lid);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, side_Bottom_edges);

  const pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.position.set((-B * 0.3) | 0, (-A * 0.5) | 0, 0);
  pivot_Bottom_lid.add(side_lid_Bottom, side_lid_Bottom_edges);

  const pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  const pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -B;
  pivot_group_A_back.add(pivot_A_back, pivot_Group_bottom);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.set(-B, C, 0);
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges);

  const pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.position.x = -B;
  pivot_lid_B_left_d.add(side_B_left_d, side_B_left_d_edges);

  const pivot_lr_lid_B_left_d = new THREE.Object3D();
  pivot_lr_lid_B_left_d.position.set((-B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_left_d.add(side_lid_B_left_d, side_lid_B_left_d_edges);

  const pivot_groub_B_left_d = new THREE.Object3D();
  pivot_groub_B_left_d.add(pivot_lid_B_left_d, pivot_lr_lid_B_left_d);

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    pivot_lid_B_left,
    side_B_left,
    side_B_left_edges,
    pivot_groub_B_left_d,
    pivot_group_A_back
  );

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.set(B, C, 0);
  pivot_lid_B_right.add(side_lid_B_right, side_lid_B_right_edges);

  const pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.position.x = B;
  pivot_lid_B_right_d.add(side_B_right_d, side_B_right_d_edges);

  const pivot_lr_lid_B_right_d = new THREE.Object3D();
  pivot_lr_lid_B_right_d.position.set((B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_right_d.add(side_lid_B_right_d, side_lid_B_right_d_edges);

  const pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d, pivot_lr_lid_B_right_d);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(
    pivot_lid_B_right,
    side_B_right,
    side_B_right_edges,
    pivot_group_B_right_d
  );

  const pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = B;
  pivot_Top_lid.add(side_Top_lid, side_Top_lid_edges);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.position.y = C;
  pivot_Top.add(side_Top, side_Top_edges, pivot_Top_lid);

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right, pivot_Top);

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivot_All);

  animate
    ? foldBox(
        pivot_Top,
        pivot_Top_lid,
        pivot_group_A_front,
        pivot_Bottom_lid,
        pivot_group_A_back,
        pivot_Group_bottom,
        pivot_Glue_lid,
        pivot_lid_B_left,
        pivot_B_left,
        pivot_groub_B_left_d,
        pivot_lr_lid_B_left_d,
        pivot_lid_B_right,
        pivot_B_right,
        pivot_group_B_right_d,
        pivot_lr_lid_B_right_d
      )
    : expandBox(
        pivot_Top,
        pivot_Top_lid,
        pivot_group_A_front,
        pivot_Bottom_lid,
        pivot_group_A_back,
        pivot_Group_bottom,
        pivot_Glue_lid,
        pivot_lid_B_left,
        pivot_B_left,
        pivot_groub_B_left_d,
        pivot_lr_lid_B_left_d,
        pivot_lid_B_right,
        pivot_B_right,
        pivot_group_B_right_d,
        pivot_lr_lid_B_right_d
      );

  return pivotGroupAll;
};
