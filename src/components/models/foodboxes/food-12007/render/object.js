import * as THREE from 'three';

import { material } from '../../../../function/material';

import {
  getPlaneAShape,
  getPlaneATopShape,
  getPlaneBShape,
  getLidBottomShape,
  getLidBottomDShape,
  getLRLidBottom,
  getLRLidShape,
  getLRLidDShape,
} from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
} from '../../../tuckendboxes/render/object/module/models';
import { foldBox, expandBox } from './module/animate';

export const food12007Model = (A, B, C, O, animate) => {
  const L = 0.3; // เปอร์เซนนต์
  const leng_lr_lib = A * L;

  /* #region  //* ฉาก */

  /* #region  //* a_Front */

  const side_A_front_top = new THREE.Mesh(getPlaneAShape(A, C), material(O));

  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* b_Left */

  const side_B_front_left = new THREE.Mesh(getPlaneBShape(C, B), material(O));
  side_B_front_left.rotation.y = (Math.PI / 180) * 180;

  const side_B_left_lid = new THREE.Mesh(
    getLRLidShape(C, leng_lr_lib),
    material(O)
  );
  side_B_left_lid.rotation.y = (Math.PI / 180) * 180;

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  side_B_left.rotation.y = Math.PI;

  const side_B_left_lid_d = new THREE.Mesh(
    getLRLidDShape(C, leng_lr_lib),
    material(O)
  );
  side_B_left_lid_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  /* #endregion */
  /* #region  //* b_Right */

  const side_B_front_right = new THREE.Mesh(getPlaneBShape(C, B), material(O));

  const side_B_right_lid = new THREE.Mesh(
    getLRLidShape(C, leng_lr_lib),
    material(O)
  );

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const side_B_right_lid_d = new THREE.Mesh(
    getLRLidDShape(C, leng_lr_lib),
    material(O)
  );
  side_B_right_lid_d.rotation.set((Math.PI / 180) * 180, 0, 0);

  /* #endregion */
  /* #region  //* a_Back */

  const side_A_top = new THREE.Mesh(getPlaneATopShape(A, C), material(O));

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  const side_Lid_bottom = new THREE.Mesh(getLidBottomShape(A, C), material(O));
  side_Lid_bottom.rotation.x = (Math.PI / 180) * 180;

  const side_Lid_bottom_d = new THREE.Mesh(
    getLidBottomDShape(A, C),
    material(O)
  );
  side_Lid_bottom_d.position.y = -C;

  const side_lr_lid_Bottom_left = new THREE.Mesh(
    getLRLidBottom(A, C),
    material(O)
  );
  side_lr_lid_Bottom_left.rotation.x = (Math.PI / 180) * 180;

  const side_lr_lid_Bottom_right = new THREE.Mesh(
    getLRLidBottom(A, C),
    material(O)
  );
  side_lr_lid_Bottom_right.rotation.x = (Math.PI / 180) * 180;

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - แบบมีเส้น */

  /* #region  //* a_Front */

  let edges = new THREE.EdgesGeometry(getPlaneAShape(A, C));
  const side_A_front_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* b_Left */

  edges = new THREE.EdgesGeometry(getPlaneBShape(C, B));
  const side_B_front_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_front_left_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLRLidShape(C, leng_lr_lib));
  const side_B_left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_lid_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidDShape(C, leng_lr_lib));
  const side_B_left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_lid_d_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  /* #endregion */
  /* #region  //* b_Right */

  edges = new THREE.EdgesGeometry(getPlaneBShape(C, B));
  const side_B_front_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(C, leng_lr_lib));
  const side_B_right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidDShape(C, leng_lr_lib));
  const side_B_right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_lid_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  /* #endregion */
  /* #region  //* a_Back */

  edges = new THREE.EdgesGeometry(getPlaneATopShape(A, C));
  const side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const side_Lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_bottom_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLidBottomDShape(A, C));
  const side_Lid_bottom_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_bottom_d_edges.position.y = -C;

  edges = new THREE.EdgesGeometry(getLRLidBottom(A, C));
  const side_lr_lid_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_Bottom_left_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLRLidBottom(A, C));
  const side_lr_lid_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_Bottom_right_edges.rotation.x = (Math.PI / 180) * 180;

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_A_front */

  const pivot_A_front_top = new THREE.Object3D();
  pivot_A_front_top.add(side_A_front_top, side_A_front_top_edges);
  pivot_A_front_top.position.y = B;

  const pivot_B_front_left = new THREE.Object3D();
  pivot_B_front_left.add(side_B_front_left, side_B_front_left_edges);

  const pivot_B_front_right = new THREE.Object3D();
  pivot_B_front_right.add(side_B_front_right, side_B_front_right_edges);
  pivot_B_front_right.position.x = A;

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(
    side_A_front,
    side_A_front_edges,
    pivot_A_front_top,
    pivot_B_front_left,
    pivot_B_front_right
  );
  pivot_A_front.position.y = C;

  /* #endregion */
  /* #region  //* pivot_B_left */

  const pivot_B_left_lid = new THREE.Object3D();
  pivot_B_left_lid.add(side_B_left_lid, side_B_left_lid_edges);
  pivot_B_left_lid.position.y = B;

  const pivot_B_left_lid_d = new THREE.Object3D();
  pivot_B_left_lid_d.add(side_B_left_lid_d, side_B_left_lid_d_edges);

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    side_B_left_edges,
    pivot_B_left_lid,
    pivot_B_left_lid_d
  );

  /* #endregion */
  /* #region  //* pivot_B_right */

  const pivot_B_right_lid = new THREE.Object3D();
  pivot_B_right_lid.add(side_B_right_lid, side_B_right_lid_edges);
  pivot_B_right_lid.position.y = B;

  const pivot_B_right_lid_d = new THREE.Object3D();
  pivot_B_right_lid_d.add(side_B_right_lid_d, side_B_right_lid_d_edges);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(
    side_B_right,
    side_B_right_edges,
    pivot_B_right_lid,
    pivot_B_right_lid_d
  );
  pivot_B_right.position.x = A;

  /* #endregion */
  /* #region  //* pivot_A_back */

  const pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, side_A_top_edges, pivot_A_front);
  pivot_A_top.position.y = B;

  const pivot_lr_lid_Bottom_left = new THREE.Object3D();
  pivot_lr_lid_Bottom_left.add(
    side_lr_lid_Bottom_left,
    side_lr_lid_Bottom_left_edges
  );
  pivot_lr_lid_Bottom_left.position.set((A * 0.182) | 0, -C, 0);

  const pivot_lr_lid_Bottom_right = new THREE.Object3D();
  pivot_lr_lid_Bottom_right.add(
    side_lr_lid_Bottom_right,
    side_lr_lid_Bottom_right_edges
  );
  pivot_lr_lid_Bottom_right.position.set((A * 0.637) | 0, -C, 0);

  const pivot_Lid_bottom_d = new THREE.Object3D();
  pivot_Lid_bottom_d.add(
    side_Lid_bottom_d,
    side_Lid_bottom_d_edges,
    pivot_lr_lid_Bottom_left,
    pivot_lr_lid_Bottom_right
  );
  pivot_Lid_bottom_d.position.y = -C;

  const pivot_Lid_bottom = new THREE.Object3D();
  pivot_Lid_bottom.add(
    side_Lid_bottom,
    side_Lid_bottom_edges,
    pivot_Lid_bottom_d
  );

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    side_A_back_edges,
    pivot_A_top,
    pivot_B_left,
    pivot_B_right,
    pivot_Lid_bottom
  );

  /* #endregion */
  /* #region  //* pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);

  /* #endregion */

  /* #endregion */

  animate
    ? foldBox(
        pivot_A_front_top,
        pivot_B_front_left,
        pivot_B_front_right,
        pivot_A_front,
        pivot_B_left_lid,
        pivot_B_left_lid_d,
        pivot_B_left,
        pivot_B_right_lid,
        pivot_B_right_lid_d,
        pivot_B_right,
        pivot_A_top,
        pivot_Lid_bottom_d,
        pivot_Lid_bottom,
        pivot_A_back
      )
    : expandBox(
        pivot_A_front_top,
        pivot_B_front_left,
        pivot_B_front_right,
        pivot_A_front,
        pivot_B_left_lid,
        pivot_B_left_lid_d,
        pivot_B_left,
        pivot_B_right_lid,
        pivot_B_right_lid_d,
        pivot_B_right,
        pivot_A_top,
        pivot_Lid_bottom_d,
        pivot_Lid_bottom,
        pivot_A_back
      );

  return pivot_All;
};
