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

export const snapBoxesModel = (valueA, valueB, valueC, valueO, animate) => {
  const P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

  const leng_lr_lib = valueA * 0.3;

  const side_A_front = new THREE.Mesh(
    getPlaneASideShape(valueA, valueC),
    material(valueO)
  );

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueC));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_A_back = new THREE.Mesh(
    getPlaneASideShape(valueA, valueC),
    material(valueO)
  );
  side_A_back.position.x = -valueA;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueC));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -valueA;

  const side_Glue_lid = new THREE.Mesh(
    getGludLidShape(valueC, P),
    material(valueO)
  );
  side_Glue_lid.rotation.y = Math.PI;
  side_Glue_lid.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getGludLidShape(valueC, P));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.y = Math.PI;
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  const side_Bottom = new THREE.Mesh(
    getLRLidBottomShape(valueA, valueB),
    material(valueO)
  );
  side_Bottom.rotation.x = Math.PI;
  side_Bottom.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(valueA, valueB));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.rotation.x = Math.PI;
  side_Bottom_edges.rotation.y = Math.PI;

  const side_lid_Bottom = new THREE.Mesh(
    getLidBottomCoverShape(valueB, valueA),
    material(valueO)
  );
  side_lid_Bottom.rotation.x = Math.PI;
  side_lid_Bottom.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidBottomCoverShape(valueB, valueA));
  const side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_edges.rotation.x = Math.PI;
  side_lid_Bottom_edges.rotation.z = Math.PI / 2;

  const side_B_left = new THREE.Mesh(
    getPlaneBSideShape(valueB, valueC),
    material(valueO)
  );
  side_B_left.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueB, valueC));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.rotation.y = Math.PI;

  const side_lid_B_left = new THREE.Mesh(
    getLRLidShape(valueB, leng_lr_lib),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(valueB, leng_lr_lib));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_B_left_d = new THREE.Mesh(
    getLidShapeD(valueA, valueB),
    material(valueO)
  );
  side_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShapeD(valueA, valueB));
  const side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  const side_lid_B_left_d = new THREE.Mesh(
    getLRLidShapeD(valueA, valueB),
    material(valueO)
  );
  side_lid_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(valueA, valueB));
  const side_lid_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_d_edges.rotation.x = Math.PI;

  const side_B_right = new THREE.Mesh(
    getPlaneBSideShape(valueB, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueB, valueC));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lid_B_right = new THREE.Mesh(
    getLRLidShape(valueB, leng_lr_lib),
    material(valueO)
  );
  side_lid_B_right.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShape(valueB, leng_lr_lib));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.y = Math.PI;

  const side_B_right_d = new THREE.Mesh(
    getLidShapeD(valueA, valueB),
    material(valueO)
  );
  side_B_right_d.rotation.x = Math.PI;
  side_B_right_d.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShapeD(valueA, valueB));
  const side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.x = Math.PI;
  side_B_right_d_edges.rotation.y = Math.PI;

  const side_lid_B_right_d = new THREE.Mesh(
    getLRLidShapeD(valueA, valueB),
    material(valueO)
  );
  side_lid_B_right_d.rotation.x = Math.PI;
  side_lid_B_right_d.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidShapeD(valueA, valueB));
  const side_lid_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_d_edges.rotation.x = Math.PI;
  side_lid_B_right_d_edges.rotation.y = Math.PI;

  const side_lid_Cover = new THREE.Mesh(
    getLidShape(valueA, P),
    material(valueO)
  );
  side_lid_Cover.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(valueA, P));
  const side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;

  const side_Top = new THREE.Mesh(
    getPlaneTopBottomShape(valueA, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(valueA, valueB));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_lid = new THREE.Mesh(getLidShape(valueA, P), material(valueO));
  side_Top_lid.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(valueA, P));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  const side_A_bottom = new THREE.Mesh(
    getLidBottomShape(valueA, valueB),
    material(valueO)
  );
  side_A_bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomShape(valueA, valueB));
  const side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  const side_A_left_bottom = new THREE.Mesh(
    getLidBottomDShape(valueA, valueB),
    material(valueO)
  );
  side_A_left_bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(valueA, valueB));
  const side_A_left_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_left_bottom_edges.rotation.x = Math.PI;

  const side_A_right_bottom = new THREE.Mesh(
    getLidBottomDShape(valueA, valueB),
    material(valueO)
  );
  side_A_right_bottom.rotation.x = Math.PI;
  side_A_right_bottom.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(valueA, valueB));
  const side_A_right_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_right_bottom_edges.rotation.x = Math.PI;
  side_A_right_bottom_edges.rotation.y = Math.PI;

  const pivot_A_left_bottom = new THREE.Object3D();
  pivot_A_left_bottom.position.y = -valueB * 0.47;
  pivot_A_left_bottom.add(side_A_left_bottom, side_A_left_bottom_edges);

  const pivot_A_right_bottom = new THREE.Object3D();
  pivot_A_right_bottom.position.set(valueA, (-valueB * 0.47) | 0, 0);
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
  pivot_Glue_lid.position.x = -valueA;
  pivot_Glue_lid.add(side_Glue_lid, side_Glue_lid_edges);

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, side_A_back_edges, pivot_Glue_lid);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, side_Bottom_edges);

  const pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.position.set((-valueB * 0.3) | 0, (-valueA * 0.5) | 0, 0);
  pivot_Bottom_lid.add(side_lid_Bottom, side_lid_Bottom_edges);

  const pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  const pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -valueB;
  pivot_group_A_back.add(pivot_A_back, pivot_Group_bottom);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.set(-valueB, valueC, 0);
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges);

  const pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.position.x = -valueB;
  pivot_lid_B_left_d.add(side_B_left_d, side_B_left_d_edges);

  const pivot_lr_lid_B_left_d = new THREE.Object3D();
  pivot_lr_lid_B_left_d.position.set(
    (-valueB / 1.8) | 0,
    (-valueA / 3.4) | 0,
    0
  );
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
  pivot_lid_B_right.position.set(valueB, valueC, 0);
  pivot_lid_B_right.add(side_lid_B_right, side_lid_B_right_edges);

  const pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.position.x = valueB;
  pivot_lid_B_right_d.add(side_B_right_d, side_B_right_d_edges);

  const pivot_lr_lid_B_right_d = new THREE.Object3D();
  pivot_lr_lid_B_right_d.position.set(
    (valueB / 1.8) | 0,
    (-valueA / 3.4) | 0,
    0
  );
  pivot_lr_lid_B_right_d.add(side_lid_B_right_d, side_lid_B_right_d_edges);

  const pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d, pivot_lr_lid_B_right_d);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = valueA;
  pivot_B_right.add(
    pivot_lid_B_right,
    side_B_right,
    side_B_right_edges,
    pivot_group_B_right_d
  );

  const pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = valueB;
  pivot_Top_lid.add(side_Top_lid, side_Top_lid_edges);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.position.y = valueC;
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
