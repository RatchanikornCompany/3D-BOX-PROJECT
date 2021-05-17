import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getLidShape,
  getLRLidShape,
  getLidBottomShape,
  getLRLidBottomShape,
  getLRLidBottomShapeD,
  getLidCurveShape,
  getLidBottomCurveShape,
  getGlueLidShape,
  getPlaneASide,
  getPlaneBSide,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

export const snapLockBoxesModel = (A, B, C, O, G, gSlope, animate) => {
  const side_Bottom_A_front = new THREE.Mesh(
    getLidBottomShape(A, C),
    material(O)
  );
  side_Bottom_A_front.rotation.x = Math.PI;

  let edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const side_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_front_edges.rotation.x = Math.PI;

  const side_lid_Bottom_A_front = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O)
  );
  side_lid_Bottom_A_front.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  const side_lid_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_front_edges.rotation.x = Math.PI;

  const side_lid_d_Bottom_A_front = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O)
  );
  side_lid_d_Bottom_A_front.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  const side_lid_d_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_front_edges.rotation.x = Math.PI;

  const side_A_front = new THREE.Mesh(getPlaneASide(A, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Right_lid = new THREE.Mesh(getLidCurveShape(B, C), material(O));

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  const side_Right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Right_lid_d = new THREE.Mesh(
    getLidBottomCurveShape(B, C),
    material(O)
  );
  side_Right_lid_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  const side_Right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Right_lid_d_edges.rotation.x = Math.PI;

  const side_B_right = new THREE.Mesh(getPlaneBSide(B, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Left_lid = new THREE.Mesh(getLidCurveShape(B, C), material(O));
  side_Left_lid.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  const side_Left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_edges.rotation.y = Math.PI;

  const side_Left_lid_d = new THREE.Mesh(
    getLidBottomCurveShape(B, C),
    material(O)
  );
  side_Left_lid_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  const side_Left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_d_edges.rotation.x = Math.PI;

  const side_B_left = new THREE.Mesh(getPlaneBSide(B, C), material(O));
  side_B_left.position.x = -B;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B;

  const side_Glue_lid = new THREE.Mesh(
    getGlueLidShape(C, G, gSlope),
    material(O)
  );
  side_Glue_lid.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getGlueLidShape(C, G, gSlope));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  const side_Top_A_back = new THREE.Mesh(getLidShape(A, C), material(O));

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  const side_Top_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_A_lid_top_back = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_Top_A_lid_top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Bottom_A_back = new THREE.Mesh(
    getLidBottomShape(A, C),
    material(O)
  );
  side_Bottom_A_back.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const side_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_back_edges.rotation.x = Math.PI;

  const side_lid_Bottom_A_back = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O)
  );
  side_lid_Bottom_A_back.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  const side_lid_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_back_edges.rotation.x = Math.PI;

  const side_lid_d_Bottom_A_back = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O)
  );
  side_lid_d_Bottom_A_back.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  const side_lid_d_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_back_edges.rotation.x = Math.PI;

  const side_A_back = new THREE.Mesh(getPlaneASide(A, C), material(O));
  side_A_back.position.x = -A;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A;

  const side_Top_A_front = new THREE.Mesh(getLidShape(A, C), material(O));

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  const side_Top_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_A_lid_top_front = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_Top_A_lid_top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivot_Bottom_front = new THREE.Object3D();
  pivot_Bottom_front.add(side_Bottom_A_front, side_Bottom_A_front_edges);

  const pivot_Bottom_front_lid = new THREE.Object3D();
  pivot_Bottom_front_lid.add(
    side_lid_Bottom_A_front,
    side_lid_Bottom_A_front_edges
  );
  pivot_Bottom_front_lid.position.set(
    Math.round(A * (133 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  const pivot_Bottom_front_lid_d = new THREE.Object3D();
  pivot_Bottom_front_lid_d.add(
    side_lid_d_Bottom_A_front,
    side_lid_d_Bottom_A_front_edges
  );
  pivot_Bottom_front_lid_d.position.set(
    Math.round(A * (5 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  const pivot_Group_bottom_front = new THREE.Object3D();
  pivot_Group_bottom_front.add(
    pivot_Bottom_front,
    pivot_Bottom_front_lid,
    pivot_Bottom_front_lid_d
  );

  const pivot_front = new THREE.Object3D();
  pivot_front.add(side_A_front, side_A_front_edges, pivot_Group_bottom_front);

  const pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_Right_lid, side_Right_lid_edges);
  pivot_Right_lid.position.y = C;

  const pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_Right_lid_d, side_Right_lid_d_edges);

  const pivot_Group_right = new THREE.Object3D();
  pivot_Group_right.add(
    side_B_right,
    side_B_right_edges,
    pivot_Right_lid,
    pivot_Right_lid_d
  );
  pivot_Group_right.position.x = A;

  const pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_Left_lid, side_Left_lid_edges);
  pivot_Left_lid.position.y = C;

  const pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_Left_lid_d, side_Left_lid_d_edges);
  pivot_Left_lid_d.position.x = -B;

  const pivot_Left = new THREE.Object3D();
  pivot_Left.add(
    side_B_left,
    side_B_left_edges,
    pivot_Left_lid,
    pivot_Left_lid_d
  );

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.x = -A;
  pivot_Glue_lid.add(side_Glue_lid, side_Glue_lid_edges);

  const pivot_Top_back = new THREE.Object3D();
  pivot_Top_back.add(side_Top_A_back, side_Top_A_back_edges);

  const pivot_Top_back_lid = new THREE.Object3D();
  pivot_Top_back_lid.position.y = Math.round(C * (52 / 75));
  pivot_Top_back_lid.add(
    side_Top_A_lid_top_back,
    side_Top_A_lid_top_back_edges
  );

  const pivot_Group_top_back = new THREE.Object3D();
  pivot_Group_top_back.add(pivot_Top_back, pivot_Top_back_lid);
  pivot_Group_top_back.position.set(-A, C);

  const pivot_Bottom_back = new THREE.Object3D();
  pivot_Bottom_back.add(side_Bottom_A_back, side_Bottom_A_back_edges);
  pivot_Bottom_back.position.x = -A;

  const pivot_Bottom_back_lid = new THREE.Object3D();
  pivot_Bottom_back_lid.add(
    side_lid_Bottom_A_back,
    side_lid_Bottom_A_back_edges
  );
  pivot_Bottom_back_lid.position.set(
    Math.round(A * (-42 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  const pivot_Bottom_back_lid_d = new THREE.Object3D();
  pivot_Bottom_back_lid_d.add(
    side_lid_d_Bottom_A_back,
    side_lid_d_Bottom_A_back_edges
  );
  pivot_Bottom_back_lid_d.position.set(
    Math.round(A * (-170 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  const pivot_Group_bottom_back = new THREE.Object3D();
  pivot_Group_bottom_back.add(
    pivot_Bottom_back,
    pivot_Bottom_back_lid,
    pivot_Bottom_back_lid_d
  );

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(
    side_A_back,
    side_A_back_edges,
    pivot_Glue_lid,
    pivot_Group_top_back,
    pivot_Group_bottom_back
  );
  pivot_Back.position.x = -B;

  const pivot_Group_left = new THREE.Object3D();
  pivot_Group_left.add(pivot_Left, pivot_Back);

  const pivot_Top_front = new THREE.Object3D();
  pivot_Top_front.add(side_Top_A_front, side_Top_A_front_edges);

  const pivot_Top_front_lid = new THREE.Object3D();
  pivot_Top_front_lid.add(
    side_Top_A_lid_top_front,
    side_Top_A_lid_top_front_edges
  );
  pivot_Top_front_lid.position.y = Math.round(C * (52 / 75));

  const pivot_Top = new THREE.Object3D();
  pivot_Top.add(pivot_Top_front, pivot_Top_front_lid);
  pivot_Top.position.y = C;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivot_front, pivot_Group_right, pivot_Group_left, pivot_Top);

  const pivotGroupAll = new THREE.Object3D();
  pivotGroupAll.add(pivotAll);

  animate
    ? foldBox(
        pivot_Back,
        pivot_Glue_lid,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Group_left,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Group_right,
        pivot_Group_top_back,
        pivot_Top_back_lid,
        pivot_Top,
        pivot_Top_front_lid,
        pivot_Group_bottom_front,
        pivot_Bottom_front_lid,
        pivot_Bottom_front_lid_d,
        pivot_Group_bottom_back,
        pivot_Bottom_back_lid,
        pivot_Bottom_back_lid_d
      )
    : expandBox(
        pivot_Back,
        pivot_Glue_lid,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Group_left,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Group_right,
        pivot_Group_top_back,
        pivot_Top_back_lid,
        pivot_Top,
        pivot_Top_front_lid,
        pivot_Group_bottom_front,
        pivot_Bottom_front_lid,
        pivot_Bottom_front_lid_d,
        pivot_Group_bottom_back,
        pivot_Bottom_back_lid,
        pivot_Bottom_back_lid_d
      );

  return pivotGroupAll;
};
