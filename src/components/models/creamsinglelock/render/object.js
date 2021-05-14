import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getLid,
  getGlueLid,
  getLRLid,
  getLRBottom,
  getLRLock,
  getLRLidLock,
  getLRBottomLock,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

const P = 15; //  ลิ้นเสียบ ค่า Defualt
const plugSlope = 5; //  ความเฉียงฝาเสียบ

const LockHeight = 15; //  ความสูงฐานล็อค
const lockSlope = 5;

const R = 20; //  ความยาวของเส้นรอบวง

export const creamSingleModel = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  valueGSlope,
  animate
) => {
  const side_A_back = new THREE.Mesh(
    getPlaneASideShape(valueA, valueC),
    material(valueO)
  );

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueC));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top = new THREE.Mesh(
    getPlaneTopBottomShape(valueA, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(valueA, valueB));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Top_lid = new THREE.Mesh(
    getLid(valueA, P, plugSlope),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getLid(valueA, P, plugSlope));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Bottom = new THREE.Mesh(
    getLRBottom(valueA, valueB),
    material(valueO)
  );
  side_Bottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRBottom(valueA, valueB));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.rotation.x = Math.PI;

  const side_Lock_lid = new THREE.Mesh(
    getLRLock(valueA, valueB, R),
    material(valueO)
  );
  side_Lock_lid.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLock(valueA, valueB, R));
  const side_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_lid_edges.rotation.x = Math.PI;

  const side_lr_Left_lock = new THREE.Mesh(
    getLRLidLock(valueB, LockHeight, lockSlope),
    material(valueO)
  );
  side_lr_Left_lock.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidLock(valueB, LockHeight, lockSlope));
  const side_lr_Left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Left_lock_edges.rotation.set(Math.PI, Math.PI, 0);

  const side_lr_Right_lock = new THREE.Mesh(
    getLRLidLock(valueB, LockHeight, lockSlope),
    material(valueO)
  );
  side_lr_Right_lock.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidLock(valueB, LockHeight, lockSlope));
  const side_lr_Right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Right_lock_edges.rotation.x = Math.PI;

  const side_Bottom_lock = new THREE.Mesh(
    getLRBottomLock(valueA, LockHeight, lockSlope),
    material(valueO)
  );
  side_Bottom_lock.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(
    getLRBottomLock(valueA, LockHeight, lockSlope)
  );
  const side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_lock_edges.rotation.x = Math.PI;

  const side_B_left = new THREE.Mesh(
    getPlaneBSideShape(valueB, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueB, valueC));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lr_Lid_left = new THREE.Mesh(
    getLRLid(valueA, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB));
  const side_lr_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lr_Lid_left_d = new THREE.Mesh(
    getLRLid(valueA, valueB),
    material(valueO)
  );
  side_lr_Lid_left_d.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_left_d.position.x = valueB;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB));
  const side_lr_Lid_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_left_d_edges.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_left_d_edges.position.x = valueB;

  const side_B_right = new THREE.Mesh(
    getPlaneBSideShape(valueB, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueB, valueC));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_lr_Lid_right = new THREE.Mesh(
    getLRLid(valueA, valueB),
    material(valueO)
  );
  side_lr_Lid_right.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB));
  const side_lr_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_edges.rotation.y = Math.PI;

  const side_lr_Lid_right_d = new THREE.Mesh(
    getLRLid(valueA, valueB),
    material(valueO)
  );
  side_lr_Lid_right_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(valueA, valueB));
  const side_lr_Lid_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_d_edges.rotation.x = Math.PI;

  const side_A_front = new THREE.Mesh(
    getPlaneASideShape(valueA, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueC));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Glue_lid = new THREE.Mesh(
    getGlueLid(valueC, valueG, valueGSlope),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getGlueLid(valueC, valueG, valueGSlope));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const side_Lid_front_d = new THREE.Mesh(
    getPlaneTopBottomShape(valueA, valueB),
    material(valueO)
  );
  side_Lid_front_d.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(valueA, valueB));
  const side_Lid_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_front_d_edges.rotation.x = Math.PI;

  const side_Lid = new THREE.Mesh(
    getLid(valueA, P, plugSlope),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getLid(valueA, P, plugSlope));
  const side_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid, side_Top_lid_edges);
  pivot_Top_lid.position.y = valueB;

  const pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, side_Top_edges, pivot_Top_lid);
  pivot_Top.position.y = valueC;

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid, side_Glue_lid_edges);

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, side_A_back_edges, pivot_Top, pivot_Glue_lid);

  const pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left, side_lr_Lid_left_edges);
  pivot_Left_lid.position.y = valueC;

  const pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d, side_lr_Lid_left_d_edges);

  const pivot_Left = new THREE.Object3D();
  pivot_Left.add(
    side_B_left,
    side_B_left_edges,
    pivot_Left_lid,
    pivot_Left_lid_d
  );
  pivot_Left.position.x = valueA;

  const pivot_Front_lid = new THREE.Object3D();
  pivot_Front_lid.add(side_Lid, side_Lid_edges);
  pivot_Front_lid.rotation.set(0, Math.PI, Math.PI);
  pivot_Front_lid.position.y = -valueB;

  const pivot_Front_lid_d = new THREE.Object3D();
  pivot_Front_lid_d.add(
    side_Lid_front_d,
    side_Lid_front_d_edges,
    pivot_Front_lid
  );

  const pivot_Front = new THREE.Object3D();
  pivot_Front.add(
    side_A_front,
    side_A_front_edges,
    pivot_Front_lid_d,
    pivot_Left
  );
  pivot_Front.position.x = valueB;

  const pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right, side_lr_Lid_right_edges);
  pivot_Right_lid.position.set(valueB, valueC, 0);

  const pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d, side_lr_Lid_right_d_edges);

  const pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    side_B_right_edges,
    pivot_Front,
    pivot_Right_lid,
    pivot_Right_lid_d
  );
  pivot_Right.position.x = valueA;

  const pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock, side_lr_Left_lock_edges);
  pivot_Bottom_left.position.x = 1;

  const pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock, side_lr_Right_lock_edges);
  pivot_Bottom_right.position.x = valueA - 1;

  const pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock, side_Bottom_lock_edges);
  pivot_Bottom_lock.position.y = -valueB + 2;

  const pivot_Lock_Bottom_lid = new THREE.Object3D();
  pivot_Lock_Bottom_lid.add(
    side_Lock_lid,
    side_Lock_lid_edges,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_Lock_Bottom_lid.position.y = -(valueB / 2) | 0;

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, side_Bottom_edges, pivot_Lock_Bottom_lid);

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivot_Back, pivot_Right, pivot_Bottom);

  animate
    ? foldBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid
      )
    : expandBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid
      );

  return pivotAll;
};
