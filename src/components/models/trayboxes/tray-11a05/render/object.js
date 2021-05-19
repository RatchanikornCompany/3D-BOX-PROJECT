import * as THREE from 'three';

import {
  getLRLidShape,
  getLockFlapShape,
  getGlueFlapShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

import { material } from '../../../../function/material';

var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

// var modelObj;
// var boxHelper;

export const tray11A05Model = (A, B, C, O, animate) => {
  /* #region  //* กล่อง */

  /* #region  //* ฉาก */

  /* #region  //* side_A_back */

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* side_B_left */

  const side_Lock_left = new THREE.Mesh(getLockFlapShape(B, C), material(O));
  side_Lock_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  const side_lid_B_left = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  side_lid_B_left.rotation.y = Math.PI;

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  side_B_left.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right */

  const side_Lock_right = new THREE.Mesh(getLockFlapShape(B, C), material(O));
  side_Lock_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  const side_lid_B_right = new THREE.Mesh(
    getPlaneBSideShape(C, B),
    material(O)
  );

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  /* #endregion */
  /* #region  //* side_A_top */

  const side_lr_lid_A_top_left = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );
  side_lr_lid_A_top_left.rotation.set(0, Math.PI, 0);

  const side_lr_lid_A_top_right = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );

  const side_A_top = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* side_A_bottom */

  const side_lr_lid_A_bottom_left = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );
  side_lr_lid_A_bottom_left.rotation.set(Math.PI, Math.PI, 0);

  const side_lr_lid_A_bottom_right = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O)
  );
  side_lr_lid_A_bottom_right.rotation.set(Math.PI, 0, 0);

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

  edges = new THREE.EdgesGeometry(getLockFlapShape(B, C));
  const side_Lock_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right_edges */

  edges = new THREE.EdgesGeometry(getLockFlapShape(B, C));
  const side_Lock_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_top_edges */

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_lr_lid_A_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_top_left_edges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_lr_lid_A_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_A_bottom_edges */

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_lr_lid_A_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_bottom_left_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const side_lr_lid_A_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_bottom_right_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Top */

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

  const pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    side_A_top_edges,
    pivot_lr_lid_A_top_left,
    pivot_lr_lid_A_top_right
  );
  pivot_Top.position.set(0, B, 0);

  /* #endregion */
  /* #region  //* pivot_Back */

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, side_A_back_edges, pivot_Top);

  /* #endregion */
  /* #region  //* pivot_Left */

  const pivot_Lock_left = new THREE.Object3D();
  pivot_Lock_left.add(side_Lock_left, side_Lock_left_edges);
  pivot_Lock_left.position.set(-C, 0, 0);

  const pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, side_lid_B_left_edges, pivot_Lock_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  const pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, side_B_left_edges, pivot_lid_B_left);

  /* #endregion */
  /* #region  //* pivot_Right */

  const pivot_Lock_right = new THREE.Object3D();
  pivot_Lock_right.add(side_Lock_right, side_Lock_right_edges);
  pivot_Lock_right.position.set(C, 0, 0);

  const pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(
    side_lid_B_right,
    side_lid_B_right_edges,
    pivot_Lock_right
  );
  pivot_lid_B_right.position.set(C, 0, 0);

  const pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, side_B_right_edges, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);

  /* #endregion */
  /* #region  //* pivot_Bottom */

  const pivot_lr_lid_A_bottom_left = new THREE.Object3D();
  pivot_lr_lid_A_bottom_left.add(
    side_lr_lid_A_bottom_left,
    side_lr_lid_A_bottom_left_edges
  );

  const pivot_lr_lid_A_bottom_right = new THREE.Object3D();
  pivot_lr_lid_A_bottom_right.add(
    side_lr_lid_A_bottom_right,
    side_lr_lid_A_bottom_right_edges
  );
  pivot_lr_lid_A_bottom_right.position.set(A, 0, 0);

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    side_A_bottom_edges,
    pivot_lr_lid_A_bottom_left,
    pivot_lr_lid_A_bottom_right
  );

  /* #endregion */
  /* #region  //* pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Bottom);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* ฝากล่อง */

  /* #region  //* ฉาก */

  /* #region  //* side_A_front */

  const side_A_front_x = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* side_Glub_flap */

  const side_Glue_flap = new THREE.Mesh(getGlueFlapShape(A, P), material(O));
  side_Glue_flap.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_A_back */

  const side_A_back_x = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* side_B_top_lid */

  const side_B_top_lid = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* side_B_bottom_lid */

  const side_B_bottom_lid = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O)
  );

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - เส้น */

  /* #region  //* side_A_front */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_front_x_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_Glub_flap */

  edges = new THREE.EdgesGeometry(getGlueFlapShape(A, P));
  const side_Glue_flap_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_flap_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_A_back */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const side_A_back_x_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_top_lid */

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_B_top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_bottom_lid */

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const side_B_bottom_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Top */

  const pivot_Top_x = new THREE.Object3D();
  pivot_Top_x.add(side_B_top_lid, side_B_top_lid_edges);
  pivot_Top_x.position.y = B;

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Glue_flap */

  const pivot_Glue_flap = new THREE.Object3D();
  pivot_Glue_flap.add(side_Glue_flap, side_Glue_flap_edges);
  pivot_Glue_flap.position.y = B;

  /* #endregion */
  /* #region  //* pivot_Front */

  const pivot_Front_lid = new THREE.Object3D();
  pivot_Front_lid.add(side_A_front_x, side_A_front_x_edges, pivot_Glue_flap);
  pivot_Front_lid.position.y = C;

  /* #endregion */
  /* #region  //* pivot_B_bottom_lid */

  const pivot_B_bottom_lid = new THREE.Object3D();
  pivot_B_bottom_lid.add(
    side_B_bottom_lid,
    side_B_bottom_lid_edges,
    pivot_Front_lid
  );
  pivot_B_bottom_lid.rotation.x = -Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Back */

  const pivot_Back_x = new THREE.Object3D();
  pivot_Back_x.add(
    side_A_back_x,
    side_A_back_x_edges,
    pivot_Top_x,
    pivot_B_bottom_lid
  );
  pivot_Back_x.position.x = (-A * 2) | 0;

  /* #endregion */

  /* #endregion */

  /* #endregion */

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivot_All, pivot_Back_x);

  animate
    ? foldBox(
        pivot_Back,
        pivot_Right,
        pivot_lid_B_right,
        pivot_Lock_right,
        pivot_Left,
        pivot_lid_B_left,
        pivot_Lock_left,
        pivot_Top,
        pivot_lr_lid_A_top_left,
        pivot_lr_lid_A_top_right,
        pivot_Bottom,
        pivot_lr_lid_A_bottom_left,
        pivot_lr_lid_A_bottom_right,
        pivot_Top_x,
        pivot_Back_x,
        pivot_B_bottom_lid,
        pivot_Front_lid,
        pivot_Glue_flap
      )
    : expandBox(
        A,
        pivot_Back,
        pivot_Right,
        pivot_lid_B_right,
        pivot_Lock_right,
        pivot_Left,
        pivot_lid_B_left,
        pivot_Lock_left,
        pivot_Top,
        pivot_lr_lid_A_top_left,
        pivot_lr_lid_A_top_right,
        pivot_Bottom,
        pivot_lr_lid_A_bottom_left,
        pivot_lr_lid_A_bottom_right,
        pivot_Top_x,
        pivot_Back_x,
        pivot_B_bottom_lid,
        pivot_Front_lid,
        pivot_Glue_flap
      );

  return pivotGroupAll;
};

// const objModel = (value) => {
//   value ? modelCosmeticTube() : delModelCosmeticTube();
// };

// const modelCosmeticTube = () => {
//   var loader = new OBJLoader();
//   var objFile = './models/soap/soap.obj';

//   loader.load(objFile, (object) => {
//     object.scale.set(23.9, 26, 20); // 23.9, 26, 20
//     object.position.set(A / 2, B / 3.1, B / 2);
//     object.rotation.x = Math.PI / 2;

//     scene.add(object);
//     modelObj = object;

//     var box = new THREE.Box3().setFromObject(object);
//     var box3Helper = new THREE.Box3Helper(box);
//     scene.add(box3Helper);
//     boxHelper = box3Helper;
//   });
// };

// const delModelCosmeticTube = () => {
//   scene.remove(modelObj);
//   scene.remove(boxHelper);
// };
