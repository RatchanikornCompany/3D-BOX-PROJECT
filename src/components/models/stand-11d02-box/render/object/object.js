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
} from './modules/model';
import { foldBox, expandBox } from './modules/animate';

export const standObject = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  valueGSlope,
  animate
) => {
  /* #region  //* Mesh - แกนหมุน */

  /* #region  //* side_A_front */

  let side_A_front = new THREE.Group();
  side_A_front.name = 'side_A_front';
  side_A_front.add(
    getPlaneASideShape(valueA, valueC, valueO),
    getPlaneASideCorrugated(valueA, valueC, valueO)
  );

  let side_A_top_front = new THREE.Group();
  side_A_top_front.name = 'side_A_top_front';
  side_A_top_front.add(
    getPlaneATopBottomShape(valueA, valueB, valueO),
    getPlaneATopBottomCorrugated(valueA, valueB, valueO)
  );

  let side_A_bottom_front = new THREE.Group();
  side_A_bottom_front.name = 'side_A_bottom_front';
  side_A_bottom_front.add(side_A_top_front.clone());

  /* #endregion */
  /* #region  //* side_A_back */

  const side_A_top_back = new THREE.Group();
  side_A_top_back.name = 'side_A_top_back';
  side_A_top_back.add(
    getPlaneATopBottomBackShape(valueA, valueB, valueO),
    getPlaneATopBottomBackCorrugated(valueA, valueB, valueO)
  );

  const side_A_back = new THREE.Group();
  side_A_back.name = 'side_A_back';
  side_A_back.add(
    getPlaneABack(valueA, valueC, valueO),
    getPlaneABackCorrugated(valueA, valueC, valueO)
  );
  side_A_back.position.x = -valueA + 2.5;

  let side_Glue_lid = new THREE.Group();
  side_Glue_lid.name = 'side_Glue_lid';
  side_Glue_lid.add(
    getGlueLidShape(valueC, valueG, valueGSlope, valueO),
    getGlueLidCorrugated(valueC, valueG, valueGSlope, valueO)
  );

  /* #endregion */
  /* #region  //* side_B_left */

  let side_B_left = new THREE.Group();
  side_B_left.name = 'side_B_left';
  side_B_left.add(
    getPlaneBSideShape(valueB, valueC, valueO),
    getPlaneBSideCorrugated(valueB, valueC, valueO)
  );
  side_B_left.position.x = -valueB;

  let side_B_top_left = new THREE.Group();
  side_B_top_left.name = 'side_B_top_left';
  side_B_top_left.add(
    getPlaneBTopBottomShape(valueB, valueA, valueO),
    getPlaneBTopBottomCorrugated(valueB, valueA, valueO)
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
  pivot_A_top_front.position.y = valueC;

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
  pivot_A_top_back.position.set(-valueA, valueC, 0);

  const pivot_A_bottom_back = new THREE.Object3D();
  pivot_A_bottom_back.name = 'pivot_A_bottom_back';
  pivot_A_bottom_back.add(side_A_top_back.clone());
  pivot_A_bottom_back.position.set(-valueA, 0, -2.5);
  rotateObject(pivot_A_bottom_back, -180);

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.name = 'pivot_Glue_lid';
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -valueA + 2.5;

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.name = 'pivot_A_back';
  pivot_A_back.add(
    side_A_back,
    pivot_A_top_back,
    pivot_A_bottom_back,
    pivot_Glue_lid
  );
  pivot_A_back.position.x = -valueB;

  /* #endregion */
  /* #region  //* pivot_B_left */

  const pivot_top_B_left = new THREE.Object3D();
  pivot_top_B_left.name = 'pivot_top_B_left';
  pivot_top_B_left.add(side_B_top_left);
  pivot_top_B_left.position.set(-valueB, valueC, 0);

  const pivot_bottom_B_left = new THREE.Object3D();
  pivot_bottom_B_left.name = 'pivot_bottom_B_left';
  pivot_bottom_B_left.add(side_B_top_left.clone());
  pivot_bottom_B_left.position.set(-valueB, 0, -2.5);
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
  pivot_top_B_right.position.set(-valueB, valueC, 0);

  const pivot_bottom_B_right = new THREE.Object3D();
  pivot_bottom_B_right.name = 'pivot_bottom_B_right';
  pivot_bottom_B_right.add(side_B_top_left.clone());
  pivot_bottom_B_right.position.set(-valueB, 0, -2.5);
  rotateObject(pivot_bottom_B_right, 180);

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.name = 'pivot_B_right';
  pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  pivot_B_right.position.set(valueA, 0, -2.5);
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
        valueA,
        valueC,
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
        valueA,
        valueC,
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
