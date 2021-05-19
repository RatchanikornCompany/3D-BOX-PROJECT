import * as THREE from 'three';

import {
  getLRLidShape,
  getLockFlapShape,
  getGlueFlapShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './module/models';

import { material } from '../../../../function/material';

var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

// var modelObj;
// var boxHelper;

export const tray11A05Model = (A, B, C, O) => {
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

  const pivot_Front_x = new THREE.Object3D();
  pivot_Front_x.add(side_A_front_x, side_A_front_x_edges, pivot_Glue_flap);
  pivot_Front_x.position.y = C;

  /* #endregion */
  /* #region  //* pivot_B_bottom_lid */

  const pivot_B_bottom_lid = new THREE.Object3D();
  pivot_B_bottom_lid.add(
    side_B_bottom_lid,
    side_B_bottom_lid_edges,
    pivot_Front_x
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

  return pivotGroupAll;
};

// const rotations = (value) => {
//   value ? foldBox() : expandBox();
// };

// const foldBox = () => {
//   /* #region  //* จุดหมุน */

//   /* #region  //* กล่อง */

//   /* #region  //* pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Right */

//   /* #region  //* pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Right.x = Math.PI / 2),
//     y: (pivot_Right.y = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_right.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lid_B_right.y = (Math.PI / 180) * 178),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_right */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_right.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_Lock_right.y = -(Math.PI / 180) * 88),
//   });
//   /* #endregion */

//   // /* #endregion */
//   /* #region  //* pivot_Left */

//   /* #region  //* pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Left.x = Math.PI / 2),
//     y: (pivot_Left.y = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_left.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lid_B_left.y = -(Math.PI / 180) * 178),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_left */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_left.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_Lock_left.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Top */

//   /* #region  //* pivot_Top */
//   tween = gsap.timeline();
//   tween.to(pivot_Top.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Top.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_left.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_left.y = -(Math.PI / 180) * 90),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_right.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_right.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Bottom */

//   /* #region  //* pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_Bottom.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Bottom.x = Math.PI),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_left.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_left.y = -(Math.PI / 180) * 90),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_right.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_right.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #endregion */
//   /* #region  //* ฝากล่อง */

//   /* #region  //* pivot_Top_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_x.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Top_x.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back_x.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_B_bottom_lid */
//   tween = gsap.timeline();
//   tween.to(pivot_B_bottom_lid.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_B_bottom_lid.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Front_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Front_x.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Front_x.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Glue_flap */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_flap.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Glue_flap.x = Math.PI / 2),
//   });
//   /* #endregion */

//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x.position, {
//     duration: 6,
//     ease: 'power4.in',
//     x: (pivot_Back_x.x = 0),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #region  //* modelCosmeticTube delay */
//   setTimeout(() => {
//     modelCosmeticTube();
//   }, 6000);
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* จุดหมุน - มีเส้น */

//   /* #region  //* กล่อง */

//   /* #region  //* pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back_edges.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Right */

//   /* #region  //* pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Right_edges.x = Math.PI / 2),
//     y: (pivot_Right_edges.y = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_right_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lid_B_right_edges.y = (Math.PI / 180) * 178),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_right */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_right_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_Lock_right_edges.y = -(Math.PI / 180) * 88),
//   });
//   /* #endregion */

//   // /* #endregion */
//   /* #region  //* pivot_Left */

//   /* #region  //* pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Left_edges.x = Math.PI / 2),
//     y: (pivot_Left_edges.y = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_left_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lid_B_left_edges.y = -(Math.PI / 180) * 178),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_left */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_left_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_Lock_left_edges.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Top */

//   /* #region  //* pivot_Top */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Top_edges.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_left_edges.y = -(Math.PI / 180) * 90),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_right_edges.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Bottom */

//   /* #region  //* pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Bottom_edges.x = Math.PI),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_left_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_left_edges.y = -(Math.PI / 180) * 90),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_right_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_right_edges.y = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #endregion */
//   /* #region  //* ฝากล่อง */

//   /* #region  //* pivot_Top_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_x_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Top_x_edges.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back_x_edges.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_B_bottom_lid */
//   tween = gsap.timeline();
//   tween.to(pivot_B_bottom_lid_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_B_bottom_lid_edges.x = -Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Front_x_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Front_x_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Front_x_edges.x = Math.PI / 2),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Glue_flap_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_flap_edges.rotation, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Glue_flap_edges.x = Math.PI / 2),
//   });
//   /* #endregion */

//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x_edges.position, {
//     duration: 6,
//     ease: 'power4.in',
//     x: (pivot_Back_x_edges.x = 0),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #endregion */
// };

// const expandBox = () => {
//   /* #region  //* จุดหมุน */

//   /* #region  //* pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Back.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Right */

//   /* #region  //* pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Right.x = 0),
//     y: (pivot_Right.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_right.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lid_B_right.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_right */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_right.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_Lock_right.y = 0),
//   });
//   /* #endregion */

//   // /* #endregion */
//   /* #region  //* pivot_Left */

//   /* #region  //* pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Left.x = 0),
//     y: (pivot_Left.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_left.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lid_B_left.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_left */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_left.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_Lock_left.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Top */

//   /* #region  //* pivot_Top */
//   tween = gsap.timeline();
//   tween.to(pivot_Top.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Top.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_left.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_left.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_right.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_right.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Bottom */

//   /* #region  //* pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_Bottom.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Bottom.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_left.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_left.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_right.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_right.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #region  //* pivot_Top_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_x.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Top_x.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Back_x.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_B_bottom_lid */
//   tween = gsap.timeline();
//   tween.to(pivot_B_bottom_lid.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_B_bottom_lid.x = -Math.PI),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Front_x_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Front_x.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Front_x.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Glue_flap_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_flap.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Glue_flap.x = 0),
//   });
//   /* #endregion */

//   /* #region  //* pivot_Back_x (Test) */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x.position, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back_x.x = -(A * 2) | 0),
//   });
//   /* #endregion */

//   /* #region  //* delModelCosmeticTube delay */
//   setTimeout(() => {
//     delModelCosmeticTube();
//   }, 5000);
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* จุดหมุน - มีเส้น*/

//   /* #region  //* pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Back_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Right */

//   /* #region  //* pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Right_edges.x = 0),
//     y: (pivot_Right_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_right_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lid_B_right_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_right */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_right_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_Lock_right_edges.y = 0),
//   });
//   /* #endregion */

//   // /* #endregion */
//   /* #region  //* pivot_Left */

//   /* #region  //* pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Left_edges.x = 0),
//     y: (pivot_Left_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lid_B_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lid_B_left_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lid_B_left_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Lock_left */
//   tween = gsap.timeline();
//   tween.to(pivot_Lock_left_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_Lock_left_edges.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Top */

//   /* #region  //* pivot_Top */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Top_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_left_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_top_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_top_right_edges.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */
//   /* #region  //* pivot_Bottom */

//   /* #region  //* pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Bottom_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_left */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_left_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_left_edges.y = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_lr_lid_A_bottom_right */
//   tween = gsap.timeline();
//   tween.to(pivot_lr_lid_A_bottom_right_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     y: (pivot_lr_lid_A_bottom_right_edges.y = 0),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #region  //* pivot_Top_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Top_x_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Top_x_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Back_x */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Back_x_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_B_bottom_lid */
//   tween = gsap.timeline();
//   tween.to(pivot_B_bottom_lid_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_B_bottom_lid_edges.x = -Math.PI),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Front_x_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Front_x_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Front_x_edges.x = 0),
//   });
//   /* #endregion */
//   /* #region  //* pivot_Glue_flap_edges */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_flap_edges.rotation, {
//     duration: 14,
//     ease: 'power4.in',
//     x: (pivot_Glue_flap_edges.x = 0),
//   });
//   /* #endregion */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_x_edges.position, {
//     duration: 5,
//     ease: 'power4.in',
//     x: (pivot_Back_x_edges.x = -(A * 2)),
//   });

//   /* #endregion */
// };

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
