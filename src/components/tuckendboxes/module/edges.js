import * as THREE from 'three';
import {
  getLidCover,
  getGlueLid,
  getLRLid,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './models';
import TUCKENDBOXES from '../tuckendboxes';

let edges;

export const getEdges = (A, B, C, F, P, G, gSlope) => {
  /* #region  //* ฉาก - แบบมีเส้น */

  /* #region  //* side_A_front */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_back */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueLid(C, G, gSlope));
  const side_glue_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_glue_Lid_edges.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  //* side_Bottom */

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, P));
  const side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_left */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B;

  edges = new THREE.EdgesGeometry(getLRLid(B, F));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLid(B, F));
  const side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(B, F));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLid(B, F));
  const side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLidCover(A, P));
  const side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_Top */

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B));
  const side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, P));
  const side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน - แบบมีเส้น */

  /* #region  //! pivot_A_front */
  /* #region  //! pivot_Group_bottom */

  const pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges);
  pivot_Bottom_edges.rotation.x = Math.PI;

  const pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.add(side_lid_Bottom_edges);
  pivot_Bottom_lid_edges.position.y = -B;

  const pivot_Group_bottom_edges = new THREE.Object3D();
  pivot_Group_bottom_edges.add(pivot_Bottom_edges, pivot_Bottom_lid_edges);

  /* #endregion */

  const pivot_A_front_edges = new THREE.Object3D();
  pivot_A_front_edges.add(side_A_front_edges, pivot_Group_bottom_edges);

  /* #endregion */
  /* #region  //! pivot_B_left */

  /* #region  //! pivot_group_A_back */

  /* #region  //! pivot_Top */

  const pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.position.y = B;
  pivot_Top_lid_edges.add(side_Top_lid_edges);

  const pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.position.set(-A, C, 0);
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);

  /* #endregion */
  /* #region  //! pivot_A_back */

  const pivot_glue_Lid_edges = new THREE.Object3D();
  pivot_glue_Lid_edges.position.x = -A;
  pivot_glue_Lid_edges.add(side_glue_Lid_edges);

  const pivot_A_back_edges = new THREE.Object3D();
  pivot_A_back_edges.add(
    side_A_back_edges,
    pivot_glue_Lid_edges,
    pivot_Top_edges
  );

  /* #endregion */

  const pivot_group_A_back_edges = new THREE.Object3D();
  pivot_group_A_back_edges.position.x = -B;
  pivot_group_A_back_edges.add(pivot_A_back_edges);

  /* #endregion */

  const pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.position.y = C;
  pivot_lid_B_left_edges.add(side_lid_B_left_edges);

  const pivot_lid_B_left_d_edges = new THREE.Object3D();
  pivot_lid_B_left_d_edges.add(side_B_left_d_edges);
  pivot_lid_B_left_d_edges.position.x = -B;

  const pivot_B_left_edges = new THREE.Object3D();
  pivot_B_left_edges.add(
    side_B_left_edges,
    pivot_lid_B_left_edges,
    pivot_lid_B_left_d_edges,
    pivot_group_A_back_edges
  );

  /* #endregion */
  /* #region  //! pivot_B_right */

  const pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.position.y = C;
  pivot_lid_B_right_edges.add(side_lid_B_right_edges);

  const pivot_lid_B_right_d_edges = new THREE.Object3D();
  pivot_lid_B_right_d_edges.add(side_B_right_d_edges);
  pivot_lid_B_right_d_edges.position.x = B;

  const pivot_group_B_right_d_edges = new THREE.Object3D();
  pivot_group_B_right_d_edges.add(pivot_lid_B_right_d_edges);

  const pivot_B_right_edges = new THREE.Object3D();
  pivot_B_right_edges.position.x = A;
  pivot_B_right_edges.add(
    pivot_lid_B_right_edges,
    side_B_right_edges,
    pivot_group_B_right_d_edges
  );

  /* #endregion */
  /* #region  //! pivot_All */

  const pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_A_front_edges,
    pivot_B_left_edges,
    pivot_B_right_edges
  );

  /* #endregion */

  /* #endregion */

  TUCKENDBOXES.edges(
    pivot_Bottom_lid_edges,
    pivot_Group_bottom_edges,
    pivot_lid_B_left_edges,
    pivot_lid_B_left_d_edges,
    pivot_B_left_edges,
    pivot_Top_lid_edges,
    pivot_Top_edges,
    pivot_glue_Lid_edges,
    pivot_A_back_edges,
    pivot_lid_B_right_edges,
    pivot_lid_B_right_d_edges,
    pivot_B_right_edges
  );

  return pivot_All_edges;
};
