import * as THREE from 'three';

import rotateObject from '../../../../../function/rotateObject';

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
} from './module/model';
import { foldBox, expandBox } from './module/animate';

export const trayModel = (A, B, C, O, animate) => {
  /*  #region  //* Mesh - แกนหมุน */

  /*  #region  //* Non_Edges */

  /*  #region  //* side_A */

  /*  #region  //* side_A_top */

  const side_A_top = new THREE.Group();
  side_A_top.add(getPlaneASide(A, B, O), getPlaneACorrugated(A, B, O));

  /*  #endregion */
  /*  #region  //* side_A_Top_left */

  const side_A_Top_left = new THREE.Group();
  side_A_Top_left.add(
    getPlaneATopLeftRightShape(B, O),
    getPlaneATopLeftRightCorrugated(A, C, O)
  );

  /* #endregion */
  /*  #region  //* side_A_back */

  const side_A_back = new THREE.Group();
  side_A_back.add(
    getPlaneABackShape(O),
    ...getPlaneABackCorrugated(A, B, C, O)
  );

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* side_B */

  /*  #region  //* side_B_left */

  const side_B_left = new THREE.Group();
  side_B_left.add(
    getPlaneBLeftRightShape(C, B, O),
    getPlaneBLeftRightCorrugated(A, C, O)
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
    getPlaneBTopLidShape(C, O),
    ...getPlaneBTopLidShapeCorrugated(C, O)
  );

  const side_B_Top_right = new THREE.Group();
  side_B_Top_right.add(side_B_Top_left.clone());

  const side_B_top = new THREE.Group();
  side_B_top.add(
    getPlaneBTopBottomShape(A, C, O),
    getPlaneBTopBottomCorrugated(A, C, O)
  );

  /*  #endregion */
  /*  #region  //* side_B_bottom */

  const side_B_Bottom_right = new THREE.Group();
  side_B_Bottom_right.add(
    getPlaneBBottomLidShape(C, O),
    ...getPlaneBBottomLidShapeCorrugated(C, O)
  );

  const side_B_bottom = new THREE.Group();
  side_B_bottom.add(side_B_top.clone());
  side_B_bottom.position.set(A, 0, -2.5);
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
    getPlaneATopLidLeftRightShape(C, O),
    ...getPlaneATopLidLeftRightCorrugated(C, O)
  );

  /* #endregion */

  /* #region  //*  side_B_Left_lid */

  const side_B_Left_lid = new THREE.Group();
  side_B_Left_lid.add(
    getPlaneBLeftRightLidShape(B, C, O),
    getPlaneBLeftRightLidCorrugated(A, C, O)
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
  pivot_B_Left_lid.position.x = -B / 2;

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left, pivot_B_Left_lid);
  pivot_B_left.position.z = -2.5;

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  const pivot_B_Right_lid = new THREE.Object3D();
  pivot_B_Right_lid.add(side_B_Left_lid.clone());
  pivot_B_Right_lid.position.x = B / 2;

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_B_Right_lid);
  pivot_B_right.position.x = A;

  /*  #endregion */
  /*  #region  //* pivot_B_top */

  const pivot_A_Top_Lid_l = new THREE.Object3D();
  pivot_A_Top_Lid_l.add(side_A_Top_Lid_l);
  rotateObject(pivot_A_Top_Lid_l, 0, 180);
  pivot_A_Top_Lid_l.position.set(1, 0, -2.5);

  const pivot_A_Top_Lid_r = new THREE.Object3D();
  pivot_A_Top_Lid_r.add(side_A_Top_Lid_l.clone());
  pivot_A_Top_Lid_r.position.x = A - 1;

  const pivot_A_Top_lid = new THREE.Object3D();
  pivot_A_Top_lid.add(side_A_Top_lid, pivot_A_Top_Lid_l, pivot_A_Top_Lid_r);
  pivot_A_Top_lid.position.y = B;

  const pivot_A_Top_left = new THREE.Object3D();
  pivot_A_Top_left.add(side_A_Top_left);
  rotateObject(pivot_A_Top_left, 0, 180);
  pivot_A_Top_left.position.set(2, 0, -2.5);

  const pivot_A_Top_right = new THREE.Object3D();
  pivot_A_Top_right.add(side_A_Top_left.clone());
  pivot_A_Top_right.position.x = A - 2;

  const pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(
    side_A_top,
    pivot_A_Top_lid,
    pivot_A_Top_left,
    pivot_A_Top_right
  );
  pivot_A_top.position.y = C;

  const pivot_B_Top_left = new THREE.Object3D();
  pivot_B_Top_left.add(side_B_Top_left);
  pivot_B_Top_left.position.set(1, 0, -2.5);
  rotateObject(pivot_B_Top_left, 0, 180);

  const pivot_B_Top_right = new THREE.Object3D();
  pivot_B_Top_right.add(side_B_Top_right);
  pivot_B_Top_right.position.x = A - 1;

  const pivot_B_top = new THREE.Object3D();
  pivot_B_top.add(side_B_top, pivot_A_top, pivot_B_Top_left, pivot_B_Top_right);
  pivot_B_top.position.y = B;

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  const pivot_B_Bottom_right = new THREE.Object3D();
  pivot_B_Bottom_right.add(side_B_Bottom_right);
  pivot_B_Bottom_right.position.x = A - 1;

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
        A,
        B,
        C,
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
        A,
        B,
        C,
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
