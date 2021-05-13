import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getLidCover,
  getGlueLid,
  getLRLid,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from '../../tuckendboxes/render/module/models';
import { foldBox, expandBox } from './module/animate';

const F = 30; //  ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F

const P = 15; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
const plugLength = 5;

export const tuckEndCenterModel = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  valueGSlope,
  animate
) => {
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
  side_A_back.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueC));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.rotation.y = Math.PI;

  const side_glue_Lid = new THREE.Mesh(
    getGlueLid(valueC, valueG, valueGSlope),
    material(valueO)
  );
  side_glue_Lid.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getGlueLid(valueC, valueG, valueGSlope));
  const side_glue_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_glue_Lid_edges.rotation.z = Math.PI / 2;

  const side_Bottom = new THREE.Mesh(
    getPlaneTopBottomShape(valueA, valueB, plugLength),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(
    getPlaneTopBottomShape(valueA, valueB, plugLength)
  );
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lid_Bottom = new THREE.Mesh(
    getLidCover(valueA, valueB, P, plugLength),
    material(valueO)
  );
  side_lid_Bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(valueA, valueB, P, plugLength));
  const side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_edges.rotation.x = Math.PI;

  const side_B_left = new THREE.Mesh(
    getPlaneBSideShape(valueB, valueC),
    material(valueO)
  );
  side_B_left.position.x = -valueB;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueB, valueC));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -valueB;

  const side_lid_B_left = new THREE.Mesh(
    getLRLid(valueA, valueB, F),
    material(valueO)
  );
  side_lid_B_left.position.x = -valueB;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB, F));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.position.x = -valueB;

  const side_B_left_d = new THREE.Mesh(
    getLRLid(valueA, valueB, F),
    material(valueO)
  );
  side_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB, F));
  const side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

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
    getLRLid(valueA, valueB, F),
    material(valueO)
  );
  side_lid_B_right.rotation.y = Math.PI;
  side_lid_B_right.position.x = valueB;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB, F));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.y = Math.PI;
  side_lid_B_right_edges.position.x = valueB;

  const side_B_right_d = new THREE.Mesh(
    getLRLid(valueA, valueB, F),
    material(valueO)
  );
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB, F));
  const side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  const side_Top = new THREE.Mesh(
    getPlaneTopBottomShape(valueA, valueB, plugLength),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(
    getPlaneTopBottomShape(valueA, valueB, plugLength)
  );
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_lid = new THREE.Mesh(
    getLidCover(valueA, valueB, P, plugLength),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getLidCover(valueA, valueB, P, plugLength));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = valueB;
  pivot_Top_lid.add(side_Top_lid, side_Top_lid_edges);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.position.y = valueC;
  pivot_Top.add(side_Top, side_Top_edges, pivot_Top_lid);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, side_Bottom_edges);
  pivot_Bottom.rotation.x = Math.PI;

  const pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_lid_Bottom, side_lid_Bottom_edges);
  pivot_Bottom_lid.position.y = -valueB;

  const pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(
    side_A_front,
    side_A_front_edges,
    pivot_Top,
    pivot_Group_bottom
  );

  const pivot_glue_Lid = new THREE.Object3D();
  pivot_glue_Lid.position.x = -valueA;
  pivot_glue_Lid.add(side_glue_Lid, side_glue_Lid_edges);

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, side_A_back_edges, pivot_glue_Lid);

  const pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -valueB;
  pivot_group_A_back.add(pivot_A_back);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.y = valueC;
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges);

  const pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d, side_B_left_d_edges);
  pivot_lid_B_left_d.position.x = -valueB;

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    side_B_left_edges,
    pivot_lid_B_left,
    pivot_lid_B_left_d,
    pivot_group_A_back
  );

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.y = valueC;
  pivot_lid_B_right.add(side_lid_B_right, side_lid_B_right_edges);

  const pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.add(side_B_right_d, side_B_right_d_edges);
  pivot_lid_B_right_d.position.x = valueB;

  const pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = valueA;
  pivot_B_right.add(
    pivot_lid_B_right,
    side_B_right,
    side_B_right_edges,
    pivot_group_B_right_d
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivot_A_front, pivot_B_left, pivot_B_right);

  animate
    ? foldBox(
        pivot_Bottom_lid,
        pivot_Group_bottom,
        pivot_lid_B_left,
        pivot_lid_B_left_d,
        pivot_B_left,
        pivot_Top_lid,
        pivot_Top,
        pivot_glue_Lid,
        pivot_A_back,
        pivot_lid_B_right,
        pivot_lid_B_right_d,
        pivot_B_right
      )
    : expandBox(
        pivot_Bottom_lid,
        pivot_Group_bottom,
        pivot_lid_B_left,
        pivot_lid_B_left_d,
        pivot_B_left,
        pivot_Top_lid,
        pivot_Top,
        pivot_glue_Lid,
        pivot_A_back,
        pivot_lid_B_right,
        pivot_lid_B_right_d,
        pivot_B_right
      );

  return pivotAll;
};
