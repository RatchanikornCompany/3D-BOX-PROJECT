import * as THREE from 'three';
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
} from './models';
import THREEJSLOCKBOX from './threeJSlock';

let edges;

export const getEdges = (
  A,
  B,
  C,
  G,
  gSlope,
  P,
  plugSlope,
  LockHeight,
  lockSlope,
  R
) => {
  /* #region  //* วัตถุ - แบบมีเส้น */

  /* #region  //* side_A_back */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_top */

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLid(A, P, plugSlope));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_bottom */

  edges = new THREE.EdgesGeometry(getLRBottom(A, B));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLock(A, B, R));
  const side_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_lid_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidLock(B, LockHeight, lockSlope));
  const side_lr_Left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Left_lock_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidLock(B, LockHeight, lockSlope));
  const side_lr_Right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Right_lock_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRBottomLock(A, LockHeight, lockSlope));
  const side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_lock_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_left */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const side_lr_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const side_lr_Lid_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_left_d_edges.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_left_d_edges.position.x = B;

  /* #endregion */
  /* #region  //* side_B_right */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const side_lr_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(A, B));
  const side_lr_Lid_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_d_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_A_front */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, gSlope));
  const side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const side_Lid_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_front_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLid(A, P, plugSlope));
  const side_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน - แบบมีเส้น */

  /* #region  //! pivot_Top */

  const pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.add(side_Top_lid_edges);
  pivot_Top_lid_edges.position.y = B;

  const pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);
  pivot_Top_edges.position.y = C;

  /* #endregion */
  /* #region  //! pivot_Back */

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid_edges);

  const pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Top_edges);

  /* #endregion */
  /* #region  //! pivot_Left */

  const pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_lr_Lid_left_edges);
  pivot_Left_lid_edges.position.y = C;

  const pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_lr_Lid_left_d_edges);

  const pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );
  pivot_Left_edges.position.x = A;

  /* #endregion */
  /* #region  //! pivot_Front */

  const pivot_Front_lid_edges = new THREE.Object3D();
  pivot_Front_lid_edges.add(side_Lid_edges);
  pivot_Front_lid_edges.rotation.set(0, Math.PI, Math.PI);
  pivot_Front_lid_edges.position.y = -B;

  const pivot_Front_lid_d_edges = new THREE.Object3D();
  pivot_Front_lid_d_edges.add(side_Lid_front_d_edges, pivot_Front_lid_edges);

  const pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Front_lid_d_edges,
    pivot_Left_edges
  );
  pivot_Front_edges.position.x = B;

  /* #endregion */
  /* #region  //! pivot_Right */

  const pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_lr_Lid_right_edges);
  pivot_Right_lid_edges.position.set(B, C, 0);

  const pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_lr_Lid_right_d_edges);

  const pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Front_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Right_edges.position.x = A;

  /* #endregion */
  /* #region  //! pivot_Bottom */

  const pivot_Bottom_left_edges = new THREE.Object3D();
  pivot_Bottom_left_edges.add(side_lr_Left_lock_edges);
  pivot_Bottom_left_edges.position.x = 1;

  const pivot_Bottom_right_edges = new THREE.Object3D();
  pivot_Bottom_right_edges.add(side_lr_Right_lock_edges);
  pivot_Bottom_right_edges.position.x = A - 1;

  const pivot_Bottom_lock_edges = new THREE.Object3D();
  pivot_Bottom_lock_edges.add(side_Bottom_lock_edges);
  pivot_Bottom_lock_edges.position.y = -B;

  const pivot_Lock_Bottom_lid_edges = new THREE.Object3D();
  pivot_Lock_Bottom_lid_edges.add(
    side_Lock_lid_edges,
    pivot_Bottom_left_edges,
    pivot_Bottom_right_edges,
    pivot_Bottom_lock_edges
  );
  pivot_Lock_Bottom_lid_edges.position.y = -(B / 2) | 0;

  const pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges, pivot_Lock_Bottom_lid_edges);

  /* #endregion */
  /* #region  //! pivot_All */

  const pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Back_edges, pivot_Right_edges, pivot_Bottom_edges);

  /* #endregion */

  /* #endregion */

  return pivot_All_edges;
};
