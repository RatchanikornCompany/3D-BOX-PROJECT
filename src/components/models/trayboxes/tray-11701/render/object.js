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
} from '../../tray-11a05/render/module/models';
import { foldBox, expandBox } from './module/animate';

import { material } from '../../../../function/material';

export const tray11701Model = (A, B, C, O, animate) => {
  /* #region  //* ฉาก */

  /* #region  //* side_A_back */

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* side_B_left */

  const side_lid_B_left = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  side_B_left.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right */

  const side_lid_B_right = new THREE.Mesh(
    getLidBLeftRightShape(B, C),
    material(O)
  );
  side_lid_B_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  /* #endregion */
  /* #region  //* side_lr_lid_A_top */

  const side_dust_flap_lid_A_left = new THREE.Mesh(
    getDustFlapLidAShape(B, C),
    material(O)
  );
  side_dust_flap_lid_A_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  const side_dust_flap_lid_A_right = new THREE.Mesh(
    getDustFlapLidAShape(B, C),
    material(O)
  );

  const side_lr_lid_A_top = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O)
  );

  /* #endregion */
  /* #region  //* side_lid_A_top */

  const side_lr_lid_A_top_left = new THREE.Mesh(
    getLRLidALeftRightShape(B, C),
    material(O)
  );
  side_lr_lid_A_top_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  const side_lr_lid_A_top_right = new THREE.Mesh(
    getLRLidALeftRightShape(B, C),
    material(O)
  );
  side_lr_lid_A_top_right.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  const side_lid_A_top = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* side_A_top */

  const side_dust_flap_Top_left = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  side_dust_flap_Top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  const side_dust_flap_Top_right = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );

  const side_A_top = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* side_A_bottom */

  const side_dust_flap_Bottom_left = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  side_dust_flap_Bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  const side_dust_flap_Bottom_right = new THREE.Mesh(
    getDustFlapShape(B, C),
    material(O)
  );
  side_dust_flap_Bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

  const side_A_bottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  side_A_bottom.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - เส้น */

  /* #region  //* side_A_back_edges */

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_left_edges */

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

  /* #endregion */
  /* #region  //* side_B_right_edges */

  edges = new THREE.EdgesGeometry(getLidBLeftRightShape(B, C));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_lr_lid_A_top_edges */

  edges = new THREE.EdgesGeometry(getDustFlapLidAShape(B, C));
  const side_dust_flap_lid_A_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_lid_A_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapLidAShape(B, C));
  const side_dust_flap_lid_A_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_lr_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_lid_A_top_edges */

  edges = new THREE.EdgesGeometry(getLRLidALeftRightShape(B, C));
  const side_lr_lid_A_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_top_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getLRLidALeftRightShape(B, C));
  const side_lr_lid_A_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_top_right_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_top_edges */

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const side_dust_flap_Top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_Top_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const side_dust_flap_Top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_bottom_edges */

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const side_dust_flap_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_Bottom_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(getDustFlapShape(B, C));
  const side_dust_flap_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_dust_flap_Bottom_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Back */

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, side_A_back_edges);

  /* #endregion */
  /* #region  //* pivot_Left */

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges);
  pivot_lid_B_left.position.set(-C, 0, 0);

  const pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, side_B_left_edges, pivot_lid_B_left);

  /* #endregion */
  /* #region  //* pivot_Right */

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right, side_lid_B_right_edges);
  pivot_lid_B_right.position.set(C, 0, 0);

  const pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, side_B_right_edges, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);

  /* #endregion */
  /* #region  //* pivot_Top */

  const pivot_dust_flap_lid_A_left = new THREE.Object3D();
  pivot_dust_flap_lid_A_left.add(
    side_dust_flap_lid_A_left,
    side_dust_flap_lid_A_left_edges
  );

  const pivot_dust_flap_lid_A_right = new THREE.Object3D();
  pivot_dust_flap_lid_A_right.add(
    side_dust_flap_lid_A_right,
    side_dust_flap_lid_A_right_edges
  );
  pivot_dust_flap_lid_A_right.position.set(A, 0, 0);

  const pivot_lr_lid_A_top = new THREE.Object3D();
  pivot_lr_lid_A_top.add(
    side_lr_lid_A_top,
    side_lr_lid_A_top_edges,
    pivot_dust_flap_lid_A_left,
    pivot_dust_flap_lid_A_right
  );
  pivot_lr_lid_A_top.position.set(0, B, 0);

  const pivot_lr_lid_A_top_left = new THREE.Object3D();
  pivot_lr_lid_A_top_left.add(
    side_lr_lid_A_top_left,
    side_lr_lid_A_top_left_edges
  );

  const pivot_lr_lid_A_top_right = new THREE.Object3D();
  pivot_lr_lid_A_top_right.add(
    side_lr_lid_A_top_right,
    side_lr_lid_A_top_right_edges
  );
  pivot_lr_lid_A_top_right.position.set(A, 0, 0);

  const pivot_group_A_top = new THREE.Object3D();
  pivot_group_A_top.add(
    side_lid_A_top,
    side_lid_A_top_edges,
    pivot_lr_lid_A_top,
    pivot_lr_lid_A_top_left,
    pivot_lr_lid_A_top_right
  );
  pivot_group_A_top.position.set(0, C, 0);

  const pivot_dust_flap_Top_left = new THREE.Object3D();
  pivot_dust_flap_Top_left.add(
    side_dust_flap_Top_left,
    side_dust_flap_Top_left_edges
  );

  const pivot_dust_flap_Top_right = new THREE.Object3D();
  pivot_dust_flap_Top_right.add(
    side_dust_flap_Top_right,
    side_dust_flap_Top_right_edges
  );
  pivot_dust_flap_Top_right.position.set(A, 0, 0);

  const pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    side_A_top_edges,
    pivot_dust_flap_Top_left,
    pivot_dust_flap_Top_right,
    pivot_group_A_top
  );
  pivot_Top.position.set(0, B, 0);

  /* #endregion */
  /* #region  //* pivot_Bottom */

  const pivot_dust_flap_Bottom_left = new THREE.Object3D();
  pivot_dust_flap_Bottom_left.add(
    side_dust_flap_Bottom_left,
    side_dust_flap_Bottom_left_edges
  );

  const pivot_dust_flap_Bottom_right = new THREE.Object3D();
  pivot_dust_flap_Bottom_right.add(
    side_dust_flap_Bottom_right,
    side_dust_flap_Bottom_right_edges
  );
  pivot_dust_flap_Bottom_right.position.set(A, 0, 0);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    side_A_bottom_edges,
    pivot_dust_flap_Bottom_left,
    pivot_dust_flap_Bottom_right
  );

  /* #endregion */
  /* #region  //* pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Top, pivot_Bottom);

  /* #endregion */

  /* #endregion */

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivot_All);

  animate
    ? foldBox(
        pivot_Top,
        pivot_group_A_top,
        pivot_lr_lid_A_top_left,
        pivot_lr_lid_A_top_right,
        pivot_dust_flap_Top_left,
        pivot_dust_flap_Top_right,
        pivot_lr_lid_A_top,
        pivot_dust_flap_lid_A_left,
        pivot_dust_flap_lid_A_right,
        pivot_Left,
        pivot_lid_B_left,
        pivot_Right,
        pivot_lid_B_right,
        pivot_Bottom,
        pivot_dust_flap_Bottom_left,
        pivot_dust_flap_Bottom_right,
        pivot_All
      )
    : expandBox(
        pivot_Top,
        pivot_group_A_top,
        pivot_lr_lid_A_top_left,
        pivot_lr_lid_A_top_right,
        pivot_dust_flap_Top_left,
        pivot_dust_flap_Top_right,
        pivot_lr_lid_A_top,
        pivot_dust_flap_lid_A_left,
        pivot_dust_flap_lid_A_right,
        pivot_Left,
        pivot_lid_B_left,
        pivot_Right,
        pivot_lid_B_right,
        pivot_Bottom,
        pivot_dust_flap_Bottom_left,
        pivot_dust_flap_Bottom_right,
        pivot_All
      );

  return pivotGroupAll;
};
