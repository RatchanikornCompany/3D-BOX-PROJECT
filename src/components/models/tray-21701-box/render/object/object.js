import * as THREE from 'three';

import rotateObject from '../../../../function/rotateObject';

import {
  getPlaneASide,
  getPlaneACorrugated,
  getPlaneATopLeftRightShape,
  getPlaneATopLeftRightCorrugated,
  getPlaneATopLidLeftRightShape,
  getPlaneATopLidLeftRightCorrugated,
  getPlaneABackShape,
  getPlaneABackCorrugated,
  getPlaneBTopBottomShape,
  getPlaneBTopBottomCorrugated,
  getPlaneBTopLidShape,
  getPlaneBTopLidShapeCorrugated,
  getPlaneBBottomLidShape,
  getPlaneBBottomLidShapeCorrugated,
  getPlaneBLeftRightShape,
  getPlaneBLeftRightCorrugated,
  getPlaneBLeftRightLidShape,
  getPlaneBLeftRightLidCorrugated,
} from './modules/model';
import { foldBox, expandBox } from './modules/animate';

export const trayModel = (valueA, valueB, valueC, valueO, animate) => {
  /*  #region  //* Mesh - แกนหมุน */

  /*  #region  //* Non_Edges */

  /*  #region  //* side_A */

  /*  #region  //* side_A_top */

  const side_A_top = new THREE.Group();
  side_A_top.add(
    getPlaneASide(valueA, valueB, valueO),
    getPlaneACorrugated(valueA, valueB, valueO)
  );

  /*  #endregion */
  /*  #region  //* side_A_Top_left */

  const side_A_Top_left = new THREE.Group();
  side_A_Top_left.add(
    getPlaneATopLeftRightShape(valueB, valueO),
    getPlaneATopLeftRightCorrugated(valueA, valueC, valueO)
  );

  /* #endregion */
  /*  #region  //* side_A_back */

  const side_A_back = new THREE.Group();
  side_A_back.add(
    getPlaneABackShape(valueO),
    ...getPlaneABackCorrugated(valueA, valueB, valueC, valueO)
  );

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* side_B */

  /*  #region  //* side_B_left */

  const side_B_left = new THREE.Group();
  side_B_left.add(
    getPlaneBLeftRightShape(valueC, valueB, valueO),
    getPlaneBLeftRightCorrugated(valueA, valueC, valueO)
  );
  rotateObject(side_B_left, 0, 180);

  /*  #endregion */
  /*  #region  //* side_B_right */

  const side_B_right = new THREE.Group();
  side_B_right.add(side_B_left.clone());
  rotateObject(side_B_right, 0, -180);

  /*  #endregion */
  /*  #region  //* side_B_top */

  const side_B_Top_left = new THREE.Group();
  side_B_Top_left.add(
    getPlaneBTopLidShape(valueC, valueO),
    ...getPlaneBTopLidShapeCorrugated(valueC, valueO)
  );

  const side_B_Top_right = new THREE.Group();
  side_B_Top_right.add(side_B_Top_left.clone());

  const side_B_top = new THREE.Group();
  side_B_top.add(
    getPlaneBTopBottomShape(valueA, valueC, valueO),
    getPlaneBTopBottomCorrugated(valueA, valueC, valueO)
  );

  /*  #endregion */
  /*  #region  //* side_B_bottom */

  const side_B_Bottom_right = new THREE.Group();
  side_B_Bottom_right.add(
    getPlaneBBottomLidShape(valueC, valueO),
    ...getPlaneBBottomLidShapeCorrugated(valueC, valueO)
  );

  const side_B_bottom = new THREE.Group();
  side_B_bottom.add(side_B_top.clone());
  side_B_bottom.position.set(valueA, 0, -2.5);
  rotateObject(side_B_bottom, 0, -180);

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* side_Lid */

  /* #region  //*  side_A_Top_lid */

  const side_A_Top_lid = new THREE.Group();
  side_A_Top_lid.add(side_B_top.clone());

  /*  #endregion */
  /* #region  //*  side_A_Top_Lid_l */

  const side_A_Top_Lid_l = new THREE.Group();
  side_A_Top_Lid_l.add(
    getPlaneATopLidLeftRightShape(valueC, valueO),
    ...getPlaneATopLidLeftRightCorrugated(valueC, valueO)
  );

  /* #endregion */

  /* #region  //*  side_B_Left_lid */

  const side_B_Left_lid = new THREE.Group();
  side_B_Left_lid.add(
    getPlaneBLeftRightLidShape(valueB, valueC, valueO),
    getPlaneBLeftRightLidCorrugated(valueA, valueC, valueO)
  );

  /* #endregion */

  /*  #endregion */

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* Object3D - จุดหมุน */

  /*  #region  //* Non-Edges */

  /*  #region  //* pivot_B */

  /*  #region  //* pivot_B_left */

  const pivot_B_Left_lid = new THREE.Object3D();
  pivot_B_Left_lid.add(side_B_Left_lid);
  rotateObject(pivot_B_Left_lid, 0, 180);
  pivot_B_Left_lid.position.x = -valueB / 2;

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left, pivot_B_Left_lid);
  pivot_B_left.position.z = -2.5;

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  const pivot_B_Right_lid = new THREE.Object3D();
  pivot_B_Right_lid.add(side_B_Left_lid.clone());
  pivot_B_Right_lid.position.x = valueB / 2;

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_B_Right_lid);
  pivot_B_right.position.x = valueA;

  /*  #endregion */
  /*  #region  //* pivot_B_top */

  const pivot_A_Top_Lid_l = new THREE.Object3D();
  pivot_A_Top_Lid_l.add(side_A_Top_Lid_l);
  rotateObject(pivot_A_Top_Lid_l, 0, 180);
  pivot_A_Top_Lid_l.position.set(1, 0, -2.5);

  const pivot_A_Top_Lid_r = new THREE.Object3D();
  pivot_A_Top_Lid_r.add(side_A_Top_Lid_l.clone());
  pivot_A_Top_Lid_r.position.x = valueA - 1;

  const pivot_A_Top_lid = new THREE.Object3D();
  pivot_A_Top_lid.add(side_A_Top_lid, pivot_A_Top_Lid_l, pivot_A_Top_Lid_r);
  pivot_A_Top_lid.position.y = valueB;

  const pivot_A_Top_left = new THREE.Object3D();
  pivot_A_Top_left.add(side_A_Top_left);
  rotateObject(pivot_A_Top_left, 0, 180);
  pivot_A_Top_left.position.set(2, 0, -2.5);

  const pivot_A_Top_right = new THREE.Object3D();
  pivot_A_Top_right.add(side_A_Top_left.clone());
  pivot_A_Top_right.position.x = valueA - 2;

  const pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(
    side_A_top,
    pivot_A_Top_lid,
    pivot_A_Top_left,
    pivot_A_Top_right
  );
  pivot_A_top.position.y = valueC;

  const pivot_B_Top_left = new THREE.Object3D();
  pivot_B_Top_left.add(side_B_Top_left);
  pivot_B_Top_left.position.set(1, 0, -2.5);
  rotateObject(pivot_B_Top_left, 0, 180);

  const pivot_B_Top_right = new THREE.Object3D();
  pivot_B_Top_right.add(side_B_Top_right);
  pivot_B_Top_right.position.x = valueA - 1;

  const pivot_B_top = new THREE.Object3D();
  pivot_B_top.add(side_B_top, pivot_A_top, pivot_B_Top_left, pivot_B_Top_right);
  pivot_B_top.position.y = valueB;

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  const pivot_B_Bottom_right = new THREE.Object3D();
  pivot_B_Bottom_right.add(side_B_Bottom_right);
  pivot_B_Bottom_right.position.x = valueA - 1;

  const pivot_B_Bottom_left = new THREE.Object3D();
  pivot_B_Bottom_left.add(side_B_Bottom_right.clone());
  rotateObject(pivot_B_Bottom_left, 0, 180);
  pivot_B_Bottom_left.position.set(1, 0, -2.5);

  const pivot_B_bottom = new THREE.Object3D();
  pivot_B_bottom.add(side_B_bottom, pivot_B_Bottom_right, pivot_B_Bottom_left);
  pivot_B_bottom.position.z = -2.5;
  rotateObject(pivot_B_bottom, 180);

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* pivot_A */

  /*  #region  //* pivot_A_back */

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_B_left,
    pivot_B_right,
    pivot_B_top,
    pivot_B_bottom
  );

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* pivot_all */

  const pivot_all = new THREE.Object3D();
  pivot_all.add(pivot_A_back);

  /*  #endregion */

  /*  #endregion */

  /*  #endregion */

  animate
    ? foldBox(
        valueA,
        valueB,
        valueC,
        pivot_A_back,
        pivot_B_Top_left,
        pivot_B_Top_right,
        pivot_B_Bottom_left,
        pivot_B_Bottom_right,
        pivot_B_top,
        pivot_B_bottom,
        pivot_B_left,
        pivot_B_right,
        pivot_B_Left_lid,
        pivot_B_Right_lid,
        pivot_A_Top_left,
        pivot_A_Top_right,
        pivot_A_top,
        pivot_A_Top_Lid_l,
        pivot_A_Top_Lid_r,
        pivot_A_Top_lid
      )
    : expandBox(
        valueA,
        valueB,
        valueC,
        pivot_A_back,
        pivot_B_Top_left,
        pivot_B_Top_right,
        pivot_B_Bottom_left,
        pivot_B_Bottom_right,
        pivot_B_top,
        pivot_B_bottom,
        pivot_B_left,
        pivot_B_right,
        pivot_B_Left_lid,
        pivot_B_Right_lid,
        pivot_A_Top_left,
        pivot_A_Top_right,
        pivot_A_top,
        pivot_A_Top_Lid_l,
        pivot_A_Top_Lid_r,
        pivot_A_Top_lid
      );

  return pivot_all;
};
