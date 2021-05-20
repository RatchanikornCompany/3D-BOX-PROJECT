import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getLidCover,
  getGlueLid,
  getLRLid,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

const F = 30; //  ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F

const P = 15; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
const plugLength = 5;

export const tuckEndModel = (A, B, C, O, G, GSlope, animate) => {
  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material(O));
  side_A_back.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.rotation.y = Math.PI;

  const side_glue_Lid = new THREE.Mesh(getGlueLid(C, G, GSlope), material(O));
  side_glue_Lid.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, GSlope));
  const side_glue_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_glue_Lid_edges.rotation.z = Math.PI / 2;

  const side_Bottom = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugLength),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugLength));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lid_Bottom = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O)
  );
  side_lid_Bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_edges.rotation.x = Math.PI;

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));
  side_B_left.position.x = -B;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B;

  const side_lid_B_left = new THREE.Mesh(getLRLid(A, B, F), material(O));
  side_lid_B_left.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.rotation.y = Math.PI;

  const side_B_left_d = new THREE.Mesh(getLRLid(A, B, F), material(O));
  side_B_left_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lid_B_right = new THREE.Mesh(getLRLid(A, B, F), material(O));

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_B_right_d = new THREE.Mesh(getLRLid(A, B, F), material(O));
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLid(A, B, F));
  const side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  const side_Top = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugLength),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugLength));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_lid = new THREE.Mesh(
    getLidCover(A, B, P, plugLength),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, P, plugLength));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, side_Bottom_edges);
  pivot_Bottom.rotation.x = Math.PI;

  const pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_lid_Bottom, side_lid_Bottom_edges);
  pivot_Bottom_lid.position.y = -B;

  const pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  /* #endregion */

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, side_A_front_edges, pivot_Group_bottom);

  const pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = B;
  pivot_Top_lid.add(side_Top_lid, side_Top_lid_edges);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.position.set(-A, C, 0);
  pivot_Top.add(side_Top, side_Top_edges, pivot_Top_lid);

  const pivot_glue_Lid = new THREE.Object3D();
  pivot_glue_Lid.add(side_glue_Lid, side_glue_Lid_edges);
  pivot_glue_Lid.position.x = -A;

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, side_A_back_edges, pivot_glue_Lid, pivot_Top);

  const pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -B;
  pivot_group_A_back.add(pivot_A_back);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.y = C;
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges);

  const pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d, side_B_left_d_edges);
  pivot_lid_B_left_d.position.x = -B;

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    side_B_left_edges,
    pivot_lid_B_left,
    pivot_lid_B_left_d,
    pivot_group_A_back
  );

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.y = C;
  pivot_lid_B_right.add(side_lid_B_right, side_lid_B_right_edges);

  const pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.add(side_B_right_d, side_B_right_d_edges);
  pivot_lid_B_right_d.position.x = B;

  const pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
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
