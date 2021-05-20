import * as THREE from 'three';

import rotateObject from '../../../../function/rotateObject';

import {
  getPlaneASideShape,
  getPlaneASideCorrugated,
  getPlaneABack,
  getPlaneABackCorrugated,
  getPlaneBSideShape,
  getPlaneBSideCorrugated,
  getPlaneATopBottomShape,
  getPlaneATopBottomCorrugated,
  getPlaneATopBottomBackShape,
  getPlaneATopBottomBackCorrugated,
  getPlaneBTopBottomShape,
  getPlaneBTopBottomCorrugated,
  getGlueLidShape,
  getGlueLidCorrugated,
} from './module/model';
import { foldBox, expandBox } from './module/animate';

export const standObject = (A, B, C, O, G, GSlope, animate) => {
  /* #region  //* Mesh - แกนหมุน */

  /* #region  //* side_A_front */

  let side_A_front = new THREE.Group();
  side_A_front.name = 'side_A_front';
  side_A_front.add(
    getPlaneASideShape(A, C, O),
    getPlaneASideCorrugated(A, C, O)
  );

  let side_A_top_front = new THREE.Group();
  side_A_top_front.name = 'side_A_top_front';
  side_A_top_front.add(
    getPlaneATopBottomShape(A, B, O),
    getPlaneATopBottomCorrugated(A, B, O)
  );

  let side_A_bottom_front = new THREE.Group();
  side_A_bottom_front.name = 'side_A_bottom_front';
  side_A_bottom_front.add(side_A_top_front.clone());

  /* #endregion */
  /* #region  //* side_A_back */

  const side_A_top_back = new THREE.Group();
  side_A_top_back.name = 'side_A_top_back';
  side_A_top_back.add(
    getPlaneATopBottomBackShape(A, B, O),
    getPlaneATopBottomBackCorrugated(A, B, O)
  );

  const side_A_back = new THREE.Group();
  side_A_back.name = 'side_A_back';
  side_A_back.add(getPlaneABack(A, C, O), getPlaneABackCorrugated(A, C, O));
  side_A_back.position.x = -A + 2.5;

  let side_Glue_lid = new THREE.Group();
  side_Glue_lid.name = 'side_Glue_lid';
  side_Glue_lid.add(
    getGlueLidShape(C, G, GSlope, O),
    getGlueLidCorrugated(C, G, GSlope, O)
  );

  /* #endregion */
  /* #region  //* side_B_left */

  let side_B_left = new THREE.Group();
  side_B_left.name = 'side_B_left';
  side_B_left.add(
    getPlaneBSideShape(B, C, O),
    getPlaneBSideCorrugated(B, C, O)
  );
  side_B_left.position.x = -B;

  let side_B_top_left = new THREE.Group();
  side_B_top_left.name = 'side_B_top_left';
  side_B_top_left.add(
    getPlaneBTopBottomShape(B, A, O),
    getPlaneBTopBottomCorrugated(B, A, O)
  );

  /* #endregion */
  /* #region  //* side_B_right */

  let side_B_right = new THREE.Group();
  side_B_right.name = 'side_B_right';
  side_B_right.add(side_B_left.clone());

  /* #endregion */

  /* #endregion */
  /* #region  //* Object - จุดหมุน */

  /* #region  //* pivot_A_front */

  const pivot_A_top_front = new THREE.Object3D();
  pivot_A_top_front.name = 'pivot_A_top_front';
  pivot_A_top_front.add(side_A_top_front);
  pivot_A_top_front.position.y = C;

  const pivot_A_bottom_front = new THREE.Object3D();
  pivot_A_bottom_front.name = 'pivot_A_bottom_front';
  pivot_A_bottom_front.add(side_A_bottom_front);
  pivot_A_bottom_front.position.z = -2.5;
  rotateObject(pivot_A_bottom_front, -180);

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.name = 'pivot_A_front';
  pivot_A_front.add(side_A_front, pivot_A_top_front, pivot_A_bottom_front);

  /* #endregion */
  /* #region  //* pivot_A_back */

  const pivot_A_top_back = new THREE.Object3D();
  pivot_A_top_back.name = 'pivot_A_top_back';
  pivot_A_top_back.add(side_A_top_back);
  pivot_A_top_back.position.set(-A, C, 0);

  const pivot_A_bottom_back = new THREE.Object3D();
  pivot_A_bottom_back.name = 'pivot_A_bottom_back';
  pivot_A_bottom_back.add(side_A_top_back.clone());
  pivot_A_bottom_back.position.set(-A, 0, -2.5);
  rotateObject(pivot_A_bottom_back, -180);

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.name = 'pivot_Glue_lid';
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A + 2.5;

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.name = 'pivot_A_back';
  pivot_A_back.add(
    side_A_back,
    pivot_A_top_back,
    pivot_A_bottom_back,
    pivot_Glue_lid
  );
  pivot_A_back.position.x = -B;

  /* #endregion */
  /* #region  //* pivot_B_left */

  const pivot_top_B_left = new THREE.Object3D();
  pivot_top_B_left.name = 'pivot_top_B_left';
  pivot_top_B_left.add(side_B_top_left);
  pivot_top_B_left.position.set(-B, C, 0);

  const pivot_bottom_B_left = new THREE.Object3D();
  pivot_bottom_B_left.name = 'pivot_bottom_B_left';
  pivot_bottom_B_left.add(side_B_top_left.clone());
  pivot_bottom_B_left.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_left, -180);

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.name = 'pivot_B_left';
  pivot_B_left.add(
    side_B_left,
    pivot_top_B_left,
    pivot_bottom_B_left,
    pivot_A_back
  );

  /* #endregion */
  /* #region  //* pivot_B_right */

  const pivot_top_B_right = new THREE.Object3D();
  pivot_top_B_right.name = 'pivot_top_B_right';
  pivot_top_B_right.add(side_B_top_left.clone());
  pivot_top_B_right.position.set(-B, C, 0);

  const pivot_bottom_B_right = new THREE.Object3D();
  pivot_bottom_B_right.name = 'pivot_bottom_B_right';
  pivot_bottom_B_right.add(side_B_top_left.clone());
  pivot_bottom_B_right.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_right, 180);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.name = 'pivot_B_right';
  pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  pivot_B_right.position.set(A, 0, -2.5);
  rotateObject(pivot_B_right, 0, 180);

  /* #endregion */
  /* #region  //* pivot_all */

  const pivot_all = new THREE.Object3D();
  pivot_all.name = 'pivot_all';
  pivot_all.add(pivot_A_front, pivot_B_left, pivot_B_right);

  /* #endregion */

  /* #endregion */

  animate
    ? foldBox(
        A,
        C,
        pivot_A_top_front,
        pivot_A_bottom_front,
        pivot_A_top_back,
        pivot_A_bottom_back,
        pivot_Glue_lid,
        pivot_A_back,
        pivot_top_B_left,
        pivot_bottom_B_left,
        pivot_B_left,
        pivot_top_B_right,
        pivot_bottom_B_right,
        pivot_B_right
      )
    : expandBox(
        A,
        C,
        pivot_A_top_front,
        pivot_A_bottom_front,
        pivot_A_top_back,
        pivot_A_bottom_back,
        pivot_Glue_lid,
        pivot_A_back,
        pivot_top_B_left,
        pivot_bottom_B_left,
        pivot_B_left,
        pivot_top_B_right,
        pivot_bottom_B_right,
        pivot_B_right
      );

  return pivot_all;
};
