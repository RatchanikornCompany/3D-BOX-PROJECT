/* ########## REFACTOR ########## */

/* #region  ตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 250;
var B = 130;
var C = 250;
var Cx = C;
var O = 1; //   ความโปร่งแสง
var P = 5; //  ความกว้างเฉพาะด้านของฝาเสียบกาว

var tween;
var edges;

var side_A_Top_front;
var side_A_front;
var side_A_Front_d;
var side_A_Bottom_front;
var side_A_Bottom_Front_left;
var side_A_Bottom_Front_right;
var side_B_Left_Top_r;
var side_B_left;
var side_B_Left_Bottom_right;
var side_B_Left_Bottom_D_right;
var side_B_Left_Bottom_Lid_right;
var side_B_Left_Top_l;
var side_B_Left_l;
var side_B_Left_Bottom_left;
var side_B_Left_Bottom_D_left;
var side_B_Left_Bottom_Lid_left;
var side_B_Right_Top_l;
var side_B_right;
var side_B_Right_Bottom_left;
var side_B_Right_Bottom_Lid_left;
var side_B_Right_Bottom_D_left;
var side_B_Right_Top_r;
var side_B_Right_r;
var side_B_Right_Bottom_right;
var side_B_Right_Bottom_Lid_right;
var side_B_Right_Bottom_D_right;
var side_A_Top_back;
var side_A_back;
var side_A_Back_d;
var side_A_Bottom_back;
var side_A_Bottom_Back_left;
var side_A_Bottom_Back_right;
var side_Glue_top;
var side_Glue_lid;
var side_Glue_Lid_d;
var side_Glue_Center_lid;
var side_Glue_center;

var side_A_Top_front_edges;
var side_A_front_edges;
var side_A_Front_d_edges;
var side_A_Bottom_front_edges;
var side_A_Bottom_Front_left_edges;
var side_A_Bottom_Front_right_edges;
var side_B_Left_Top_r_edges;
var side_B_left_edges;
var side_B_Left_Bottom_right_edges;
var side_B_Left_Bottom_D_right_edges;
var side_B_Left_Bottom_Lid_right_edges;
var side_B_Left_Top_l_edges;
var side_B_Left_l_edges;
var side_B_Left_Bottom_left_edges;
var side_B_Left_Bottom_D_left_edges;
var side_B_Left_Bottom_Lid_left_edges;
var side_B_Right_Top_l_edges;
var side_B_right_edges;
var side_B_Right_Bottom_left_edges;
var side_B_Right_Bottom_Lid_left_edges;
var side_B_Right_Bottom_D_left_edges;
var side_B_Right_Top_r_edges;
var side_B_Right_r_edges;
var side_B_Right_Bottom_right_edges;
var side_B_Right_Bottom_Lid_right_edges;
var side_B_Right_Bottom_D_right_edges;
var side_A_Top_back_edges;
var side_A_back_edges;
var side_A_Back_d_edges;
var side_A_Bottom_back_edges;
var side_A_Bottom_Back_left_edges;
var side_A_Bottom_Back_right_edges;
var side_Glue_top_edges;
var side_Glue_lid_edges;
var side_Glue_Lid_d_edges;
var side_Glue_Center_lid_edges;
var side_Glue_center_edges;

var pivot_Front_A_bottom_left;
var pivot_Front_A_bottom_right;
var pivot_Front_A_bottom;
var pivot_Front_A_d;
var pivot_Front_A_top;
var pivot_Front;
var pivot_Glue_Lid_d;
var pivot_Glue_Center_lid;
var pivot_Group_Center_lid;
var pivot_Glue_center;
var pivot_Glue_top;
var pivot_Glue_lid;
var pivot_Back_A_Bottom_left;
var pivot_Back_A_Bottom_right;
var pivot_Back_A_bottom;
var pivot_Back_d;
var pivot_Back_A_top;
var pivot_Back;
var pivot_Left_Bottom_Lid_left;
var pivot_Left_Bottom_D_left;
var pivot_Left_Bottom_left;
var pivot_Left_Top_l;
var pivot_Left_l;
var pivot_Left_Bottom_Lid_right;
var pivot_Left_Bottom_D_right;
var pivot_Left_Bottom_right;
var pivot_Left_Top_r;
var pivot_Left;
var pivot_Right_Bottom_Lid_right;
var pivot_Right_Bottom_D_right;
var pivot_Right_Bottom_right;
var pivot_Right_Top_r;
var pivot_Right_r;
var pivot_Right_Bottom_Lid_left;
var pivot_Right_Bottom_D_left;
var pivot_Right_Bottom_left;
var pivot_Right_Top_l;
var pivot_Right;
var pivot_All;

var pivot_Front_A_bottom_left_edges;
var pivot_Front_A_bottom_right_edges;
var pivot_Front_A_bottom_edges;
var pivot_Front_A_d_edges;
var pivot_Front_A_top_edges;
var pivot_Front_edges;
var pivot_Glue_Lid_d_edges;
var pivot_Glue_Center_lid_edges;
var pivot_Group_Center_lid_edges;
var pivot_Glue_center_edges;
var pivot_Glue_top_edges;
var pivot_Glue_lid_edges;
var pivot_Back_A_Bottom_left_edges;
var pivot_Back_A_Bottom_right_edges;
var pivot_Back_A_bottom_edges;
var pivot_Back_d_edges;
var pivot_Back_A_top_edges;
var pivot_Back_edges;
var pivot_Left_Bottom_Lid_left_edges;
var pivot_Left_Bottom_D_left_edges;
var pivot_Left_Bottom_left_edges;
var pivot_Left_Top_l_edges;
var pivot_Left_l_edges;
var pivot_Left_Bottom_Lid_right_edges;
var pivot_Left_Bottom_D_right_edges;
var pivot_Left_Bottom_right_edges;
var pivot_Left_Top_r_edges;
var pivot_Left_edges;
var pivot_Right_Bottom_Lid_right_edges;
var pivot_Right_Bottom_D_right_edges;
var pivot_Right_Bottom_right_edges;
var pivot_Right_Top_r_edges;
var pivot_Right_r_edges;
var pivot_Right_Bottom_Lid_left_edges;
var pivot_Right_Bottom_D_left_edges;
var pivot_Right_Bottom_left_edges;
var pivot_Right_Top_l_edges;
var pivot_Right_edges;
var pivot_All_edges;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */

const rotations1 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Front */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_top.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_top.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Left */

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_l.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_l.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_r.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_r.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Right */

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_r.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_r.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_l.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_l.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Bottom */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_left.x = (Math.PI / 180) * 179),
    y: (pivot_Front_A_bottom_left.y = (Math.PI / 180) * 1),
    z: (pivot_Front_A_bottom_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_right.x = (Math.PI / 180) * 179),
    y: (pivot_Front_A_bottom_right.y = (Math.PI / 180) * -1),
    z: (pivot_Front_A_bottom_right.z = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_bottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_left.x = (Math.PI / 180) * 178),
    y: (pivot_Back_A_Bottom_left.y = (Math.PI / 180) * 2),
    z: (pivot_Back_A_Bottom_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_right.x = (Math.PI / 180) * 178),
    y: (pivot_Back_A_Bottom_right.y = (Math.PI / 180) * -2),
    z: (pivot_Back_A_Bottom_right.z = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_Lid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_top.x = -Math.PI),
  });

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Front */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_top_edges.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_top_edges.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Left */

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_left_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_right_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_l_edges.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_r_edges.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Right */

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_left_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_right_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_r_edges.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_l_edges.x = -Math.PI),
  });

  /* #endregion */
  /* #region  pivot_Bottom */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_left_edges.x = (Math.PI / 180) * 179),
    y: (pivot_Front_A_bottom_left_edges.y = (Math.PI / 180) * 1),
    z: (pivot_Front_A_bottom_left_edges.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_right_edges.x = (Math.PI / 180) * 179),
    y: (pivot_Front_A_bottom_right_edges.y = (Math.PI / 180) * -1),
    z: (pivot_Front_A_bottom_right_edges.z = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_bottom_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_left_edges.x = (Math.PI / 180) * 178),
    y: (pivot_Back_A_Bottom_left_edges.y = (Math.PI / 180) * 2),
    z: (pivot_Back_A_Bottom_left_edges.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_right_edges.x = (Math.PI / 180) * 178),
    y: (pivot_Back_A_Bottom_right_edges.y = (Math.PI / 180) * -2),
    z: (pivot_Back_A_Bottom_right_edges.z = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_Lid_d_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_top_edges.x = -Math.PI),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Front */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_top.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_top.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Left */

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_l.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_l.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_r.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_r.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Right */

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_r.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_r.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_l.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_l.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Bottom */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_left.x = 0),
    y: (pivot_Front_A_bottom_left.y = 0),
    z: (pivot_Front_A_bottom_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_right.x = 0),
    y: (pivot_Front_A_bottom_right.y = 0),
    z: (pivot_Front_A_bottom_right.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_left.x = 0),
    y: (pivot_Back_A_Bottom_left.y = 0),
    z: (pivot_Back_A_Bottom_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_right.x = 0),
    y: (pivot_Back_A_Bottom_right.y = 0),
    z: (pivot_Back_A_Bottom_right.z = 0),
  });

  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_Lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_top.x = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Front */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_top_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_top_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Left */

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Bottom_Lid_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_l_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Top_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_Top_r_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Right */

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Bottom_Lid_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_r_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Top_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_Top_l_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_Bottom */

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_left_edges.x = 0),
    y: (pivot_Front_A_bottom_left_edges.y = 0),
    z: (pivot_Front_A_bottom_left_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_A_bottom_right_edges.x = 0),
    y: (pivot_Front_A_bottom_right_edges.y = 0),
    z: (pivot_Front_A_bottom_right_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_left_edges.x = 0),
    y: (pivot_Back_A_Bottom_left_edges.y = 0),
    z: (pivot_Back_A_Bottom_left_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_A_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Back_A_Bottom_right_edges.x = 0),
    y: (pivot_Back_A_Bottom_right_edges.y = 0),
    z: (pivot_Back_A_Bottom_right_edges.z = 0),
  });

  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_Lid_d_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Glue_top_edges.x = 0),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  Material */

  const material = new THREE.MeshPhongMaterial({
    //   MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Spotlights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
  // scene.add(hemiLight);

  // const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  // dirLight.position.set(200, 200, 200);
  // scene.add(dirLight);

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  โมเดลที่สร้างใหม่ */

  /* #region  หน้า A */

  /* #region  โมเดลปากถุง */

  const plane_A_Top_shape = new THREE.Shape();
  plane_A_Top_shape.moveTo(0, 0);
  plane_A_Top_shape.lineTo(0, (C * (30 / Cx)) | 0);
  plane_A_Top_shape.lineTo(A, (C * (30 / Cx)) | 0);
  plane_A_Top_shape.lineTo(A);

  const hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo(Math.round(A * 0.238), (C * 0.06) | 0); //  59.5, 15
  hole_Lock_shape.bezierCurveTo(
    Math.round(A * 0.238), //  59.5
    (C * 0.06) | 0, //  15
    Math.round(A * 0.238), //  59.5
    (C * 0.048) | 0, //  12
    Math.round(A * 0.25), //  62.5
    (C * 0.048) | 0 //  12
  );
  hole_Lock_shape.bezierCurveTo(
    Math.round(A * 0.25), //  62.5
    (C * 0.048) | 0, //  12
    Math.round(A * 0.262), //  65.5
    (C * 0.048) | 0, //  12
    Math.round(A * 0.262), //  65.5
    (C * 0.06) | 0 //  15
  );
  hole_Lock_shape.bezierCurveTo(
    Math.round(A * 0.262), //  65.5
    (C * 0.06) | 0, //  15
    Math.round(A * 0.262), //  65.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.25), //  62.5
    (C * 0.072) | 0 //  18
  );
  hole_Lock_shape.bezierCurveTo(
    Math.round(A * 0.25), //  62.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.238), //  59.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.238), //  59.5
    (C * 0.06) | 0 //  15
  );
  plane_A_Top_shape.holes.push(hole_Lock_shape);

  const hole_Lock_shape2 = new THREE.Path();
  hole_Lock_shape2.moveTo(Math.round(A * 0.738), (C * 0.06) | 0); //  184.5, 15
  hole_Lock_shape2.bezierCurveTo(
    Math.round(A * 0.738), //  184.5
    (C * 0.06) | 0, //  15
    Math.round(A * 0.738), //  184.5
    (C * 0.048) | 0, //  12
    Math.round(A * 0.75), //  187.5
    (C * 0.048) | 0 //  12
  );
  hole_Lock_shape2.bezierCurveTo(
    Math.round(A * 0.75), //  187.5
    (C * 0.048) | 0, //  12
    Math.round(A * 0.762), //  190.5
    (C * 0.048) | 0, //  5
    Math.round(A * 0.762), //  190.5
    (C * 0.06) | 0 //  15
  );
  hole_Lock_shape2.bezierCurveTo(
    Math.round(A * 0.762), //  190.5
    (C * 0.06) | 0, //  15
    Math.round(A * 0.762), //  190.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.75), //  187.5
    (C * 0.072) | 0 //  18
  );
  hole_Lock_shape2.bezierCurveTo(
    Math.round(A * 0.75), //  187.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.738), //  184.5
    (C * 0.072) | 0, //  18
    Math.round(A * 0.738), //  184.5
    (C * 0.06) | 0 //  15
  );
  plane_A_Top_shape.holes.push(hole_Lock_shape2);

  const plane_A_top = new THREE.ShapeGeometry(plane_A_Top_shape);

  /* #endregion */
  /* #region  โมเดลหน้าถุง */
  const plane_A_Side_shape = new THREE.Shape();
  plane_A_Side_shape.moveTo(0, 0);
  plane_A_Side_shape.lineTo(0, (C * 0.74) | 0); //  C = 185
  plane_A_Side_shape.lineTo(A, (C * 0.74) | 0);
  plane_A_Side_shape.lineTo(A);

  const hole_Lock_shape3 = new THREE.Path();
  hole_Lock_shape3.moveTo(Math.round(A * 0.238), (C * 0.68) | 0); //  59.5, 170
  hole_Lock_shape3.bezierCurveTo(
    Math.round(A * 0.238), //  59.5
    (C * 0.68) | 0, //  170
    Math.round(A * 0.238), //  59.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.25), //  62.5
    (C * 0.668) | 0 //  167
  );
  hole_Lock_shape3.bezierCurveTo(
    Math.round(A * 0.25), //  62.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.262), //  65.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.262), //  65.5
    (C * 0.68) | 0 //  170
  );
  hole_Lock_shape3.bezierCurveTo(
    Math.round(A * 0.262), //  65.5
    (C * 0.68) | 0, //  170
    Math.round(A * 0.262), //  65.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.25), //  62.5
    (C * 0.692) | 0 //  173
  );
  hole_Lock_shape3.bezierCurveTo(
    Math.round(A * 0.25), //  62.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.238), //  59.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.238), //  59.5
    (C * 0.68) | 0 //  170
  );
  plane_A_Side_shape.holes.push(hole_Lock_shape3);

  const hole_Lock_shape4 = new THREE.Path();
  hole_Lock_shape4.moveTo(Math.round(A * 0.738), (C * 0.68) | 0); //  184.5, 170
  hole_Lock_shape4.bezierCurveTo(
    Math.round(A * 0.738), //  184.5
    (C * 0.68) | 0, //  170
    Math.round(A * 0.738), //  184.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.75), //  187.5
    (C * 0.668) | 0 //  167
  );
  hole_Lock_shape4.bezierCurveTo(
    Math.round(A * 0.75), //  187.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.762), //  190.5
    (C * 0.668) | 0, //  167
    Math.round(A * 0.762), //  190.5
    (C * 0.68) | 0 //  170
  );
  hole_Lock_shape4.bezierCurveTo(
    Math.round(A * 0.762), //  190.5
    (C * 0.68) | 0, //  170
    Math.round(A * 0.762), //  190.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.75), //  187.5
    (C * 0.692) | 0 //  173
  );
  hole_Lock_shape4.bezierCurveTo(
    Math.round(A * 0.75), //  187.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.738), //  184.5
    (C * 0.692) | 0, //  173
    Math.round(A * 0.738), //  184.5
    (C * 0.68) | 0 //  170
  );
  plane_A_Side_shape.holes.push(hole_Lock_shape4);

  const plane_A_side = new THREE.ShapeGeometry(plane_A_Side_shape);
  /* #endregion */
  /* #region  โมเดลหน้าถุง (ล่าง) */
  const plane_A_side_d = new THREE.PlaneGeometry(A, (C * 0.26) | 0); //  C = 65
  /* #endregion */
  /* #region  โมเดลก้นถุง */

  const plane_A_Bottom_Side_shape = new THREE.Shape();
  plane_A_Bottom_Side_shape.moveTo(0, 0);
  plane_A_Bottom_Side_shape.lineTo((A * 0.32) | 0, (C * 0.32) | 0); // 80, 80
  plane_A_Bottom_Side_shape.lineTo((A * 0.68) | 0, (C * 0.32) | 0); // 170, 80
  plane_A_Bottom_Side_shape.lineTo(A, 0);
  const plane_A_Bottom_side = new THREE.ShapeGeometry(
    plane_A_Bottom_Side_shape
  );

  /* #endregion */
  /* #region  โมเดลพับก้นถุง */
  const plane_A_Bottom_Side_d_shape = new THREE.Shape();
  plane_A_Bottom_Side_d_shape.moveTo(0, 0);
  plane_A_Bottom_Side_d_shape.lineTo(0, (C * 0.32) | 0); // C = 80
  plane_A_Bottom_Side_d_shape.lineTo((A * 0.32) | 0, (C * 0.32) | 0); // 80, 80
  const plane_A_Bottom_Side_d = new THREE.ShapeGeometry(
    plane_A_Bottom_Side_d_shape
  );
  /* #endregion */

  /* #endregion */
  /* #region  หน้า B */

  /* #region  โมเดลข้างปากถุง */

  const plane_B_top = new THREE.PlaneGeometry((B * 0.5) | 0, (C * 0.12) | 0); //  65, 30

  /* #endregion */
  /* #region  โมเดลข้างถุง */

  const plane_B_side = new THREE.PlaneGeometry((B * 0.5) | 0, (C * 0.74) | 0); // 65 , 185

  /* #endregion */
  /* #region  โมเดลข้างถุง (ล่าง) */

  const plane_B_Bottom_shape = new THREE.Shape();
  plane_B_Bottom_shape.moveTo(0, 0);
  plane_B_Bottom_shape.lineTo(0, (C * 0.26) | 0); //  C = 65
  plane_B_Bottom_shape.lineTo((B * 0.5) | 0, 0); //  B = 65
  const plane_B_bottom = new THREE.ShapeGeometry(plane_B_Bottom_shape);

  const plane_B_Bottom_d_shape = new THREE.Shape();
  plane_B_Bottom_d_shape.moveTo(0, (C * 0.26) | 0); //  C = 65
  plane_B_Bottom_d_shape.lineTo((B * 0.5) | 0, (C * 0.26) | 0); //  65, 65
  plane_B_Bottom_d_shape.lineTo((B * 0.5) | 0, 0); //  B = 65
  const plane_B_Bottom_d = new THREE.ShapeGeometry(plane_B_Bottom_d_shape);

  /* #endregion */
  /* #region  โมเดลข้างถุงก้น */

  const plane_B_Bottom_lid = new THREE.PlaneGeometry(
    (B * 0.5) | 0,
    (C * 0.32) | 0
  ); //  65, 80

  /* #endregion */

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  const plane_Glue_top = new THREE.PlaneGeometry((P * 4) | 0, (C * 0.12) | 0); //  20, 30

  const glue_Lid = new THREE.PlaneGeometry((P * 4) | 0, (C * 0.74) | 0); //  20, 185

  const glue_Lid_d = new THREE.PlaneGeometry((P * 4) | 0, (C * 0.32) | 0); //  20, 80

  const glue_Center_shape = new THREE.Shape();
  glue_Center_shape.moveTo(0, 0);
  glue_Center_shape.lineTo(0, (C * 0.26) | 0); //  C = 65
  glue_Center_shape.lineTo((P * 4) | 0 | 0, (C * 0.18) | 0); //  20, 45
  glue_Center_shape.lineTo((P * 4) | 0 | 0, 0); //  P = 20
  const glue_Center = new THREE.ShapeGeometry(glue_Center_shape);

  const glue_Center_lid_shape = new THREE.Shape();
  glue_Center_lid_shape.moveTo(0, (C * 0.08) | 0); //  C = 20
  glue_Center_lid_shape.lineTo((P * 4) | 0 | 0, (C * 0.08) | 0); //  20, 20
  glue_Center_lid_shape.lineTo((P * 4) | 0 | 0, 0); //  P = 20
  const glue_Center_lid = new THREE.ShapeGeometry(glue_Center_lid_shape);

  /* #endregion */
  /* #region  เชือกถุงกระดาษ */

  const start = new THREE.Vector3(Math.round(-A * 0.25), 0, 0);
  const middle = new THREE.Vector3(0, (-C * 0.5) | 0, (C * 0.5) | 0);
  const end = new THREE.Vector3(Math.round(A * 0.25), 0, 0);

  const curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end);

  const tube = new THREE.TubeGeometry(
    curveQuad,
    20,
    Math.ceil(C * 0.008),
    20,
    false
  );
  const rope_Front = new THREE.Mesh(
    tube,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
    })
  );
  rope_Front.name = "tube";
  rope_Front.position.set((A * 0.5) | 0, (C * 0.68) | 0);

  const tube2 = new THREE.TubeGeometry(
    curveQuad,
    20,
    Math.ceil(C * 0.008),
    20,
    false
  );
  const rope_Back = new THREE.Mesh(
    tube2,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
    })
  );
  rope_Back.name = "tube2";
  rope_Back.position.set(-(A * 0.5) | 0, (C * 0.68) | 0);

  /* #endregion */

  /* #endregion */
  /* #region  ฉาก */

  /* #region  side_A_front */

  side_A_Top_front = new THREE.Mesh(plane_A_top, material);

  side_A_front = new THREE.Mesh(plane_A_side, material);

  side_A_Front_d = new THREE.Mesh(plane_A_side_d, material);
  side_A_Front_d.position.set((A * 0.5) | 0, Math.round(C * 0.13), 0);

  side_A_Bottom_front = new THREE.Mesh(plane_A_Bottom_side, material);

  side_A_Bottom_Front_left = new THREE.Mesh(plane_A_Bottom_Side_d, material);

  side_A_Bottom_Front_right = new THREE.Mesh(plane_A_Bottom_Side_d, material);
  side_A_Bottom_Front_right.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_A_back */

  side_A_Top_back = new THREE.Mesh(plane_A_top, material);
  side_A_Top_back.rotation.y = Math.PI;

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A;

  side_A_Back_d = new THREE.Mesh(plane_A_side_d, material);
  side_A_Back_d.position.set(-(A * 0.5) | 0, Math.round(C * 0.13), 0);

  side_A_Bottom_back = new THREE.Mesh(plane_A_Bottom_side, material);
  side_A_Bottom_back.rotation.y = Math.PI;

  side_A_Bottom_Back_left = new THREE.Mesh(plane_A_Bottom_Side_d, material);

  side_A_Bottom_Back_right = new THREE.Mesh(plane_A_Bottom_Side_d, material);
  side_A_Bottom_Back_right.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_B_left */

  /* #region  side_B_left @ right_Panel */

  side_B_Left_Top_r = new THREE.Mesh(plane_B_top, material);
  side_B_Left_Top_r.position.set(-Math.round(B * 0.25), (C * 0.06) | 0, 0);

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-Math.round(B * 0.25), Math.round(C * 0.37), 0);

  side_B_Left_Bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_Left_Bottom_right.rotation.set(Math.PI, Math.PI, 0);

  side_B_Left_Bottom_D_right = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Left_Bottom_D_right.rotation.z = Math.PI;

  side_B_Left_Bottom_Lid_right = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Left_Bottom_Lid_right.position.set(
    -Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */
  /* #region  side_B_left @ left_Panel */

  side_B_Left_Top_l = new THREE.Mesh(plane_B_top, material);
  side_B_Left_Top_l.position.set(-Math.round(B * 0.25), (C * 0.06) | 0, 0);

  side_B_Left_l = new THREE.Mesh(plane_B_side, material);
  side_B_Left_l.position.set(-Math.round(B * 0.25), Math.round(C * 0.37), 0);

  side_B_Left_Bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_Left_Bottom_left.rotation.y = Math.PI;
  side_B_Left_Bottom_left.position.y = (-C * 0.26) | 0;

  side_B_Left_Bottom_D_left = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Left_Bottom_D_left.rotation.y = Math.PI;
  side_B_Left_Bottom_D_left.position.y = (-C * 0.26) | 0;

  side_B_Left_Bottom_Lid_left = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Left_Bottom_Lid_left.position.set(
    -Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */

  /* #endregion */
  /* #region  side_B_right */

  /* #region  side_B_right @ left_Panel */

  side_B_Right_Top_l = new THREE.Mesh(plane_B_top, material);
  side_B_Right_Top_l.position.set(Math.round(B * 0.25), (C * 0.06) | 0, 0);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(Math.round(B * 0.25), Math.round(C * 0.37), 0);

  side_B_Right_Bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_Right_Bottom_left.rotation.x = Math.PI;

  side_B_Right_Bottom_D_left = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Right_Bottom_D_left.rotation.x = Math.PI;

  side_B_Right_Bottom_Lid_left = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Right_Bottom_Lid_left.position.set(
    Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */
  /* #region  side_B_right @ right_Panel */

  side_B_Right_Top_r = new THREE.Mesh(plane_B_top, material);
  side_B_Right_Top_r.position.set(Math.round(B * 0.25), (C * 0.06) | 0, 0);

  side_B_Right_r = new THREE.Mesh(plane_B_side, material);
  side_B_Right_r.position.set(Math.round(B * 0.25), Math.round(C * 0.37), 0);

  side_B_Right_Bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_Right_Bottom_right.position.y = (-C * 0.26) | 0;

  side_B_Right_Bottom_D_right = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Right_Bottom_D_right.position.y = (-C * 0.26) | 0;

  side_B_Right_Bottom_Lid_right = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Right_Bottom_Lid_right.position.set(
    Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */

  /* #endregion */
  /* #region  side_Glue */

  side_Glue_top = new THREE.Mesh(plane_Glue_top, material);
  side_Glue_top.position.set(-(P * 2) | 0, (C * 0.06) | 0, 0);

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.position.set(-(P * 2) | 0, Math.round(C * 0.37), 0);

  side_Glue_Lid_d = new THREE.Mesh(glue_Lid_d, material);
  side_Glue_Lid_d.position.set(-(P * 2) | 0, -Math.round(C * 0.16), 0);

  side_Glue_center = new THREE.Mesh(glue_Center, material);
  side_Glue_center.rotation.z = Math.PI;

  side_Glue_Center_lid = new THREE.Mesh(glue_Center_lid, material);
  side_Glue_Center_lid.rotation.z = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Front */

  pivot_Front_A_bottom_left = new THREE.Object3D();
  pivot_Front_A_bottom_left.add(side_A_Bottom_Front_left);

  pivot_Front_A_bottom_right = new THREE.Object3D();
  pivot_Front_A_bottom_right.add(side_A_Bottom_Front_right);
  pivot_Front_A_bottom_right.position.x = A;

  pivot_Front_A_bottom = new THREE.Object3D();
  pivot_Front_A_bottom.add(
    side_A_Bottom_front,
    pivot_Front_A_bottom_left,
    pivot_Front_A_bottom_right
  );
  pivot_Front_A_bottom.position.y = (C * 0.26) | 0;

  pivot_Front_A_d = new THREE.Object3D();
  pivot_Front_A_d.add(side_A_Front_d, pivot_Front_A_bottom);
  pivot_Front_A_d.rotation.x = Math.PI;

  pivot_Front_A_top = new THREE.Object3D();
  pivot_Front_A_top.add(side_A_Top_front);
  pivot_Front_A_top.position.y = (C * 0.74) | 0;

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Front_A_d, pivot_Front_A_top, rope_Front);

  /* #endregion */
  /* #region  pivot_Back */

  /* #region  glue_Lid */

  pivot_Glue_Lid_d = new THREE.Object3D();
  pivot_Glue_Lid_d.add(side_Glue_Lid_d);
  pivot_Glue_Lid_d.position.y = (-C * 0.08) | 0;

  pivot_Glue_Center_lid = new THREE.Object3D();
  pivot_Glue_Center_lid.add(side_Glue_Center_lid, pivot_Glue_Lid_d);
  pivot_Glue_Center_lid.position.y = (-C * 0.18) | 0;

  pivot_Group_Center_lid = new THREE.Object3D();
  pivot_Group_Center_lid.add(pivot_Glue_Center_lid);

  pivot_Glue_center = new THREE.Object3D();
  pivot_Glue_center.add(side_Glue_center, pivot_Group_Center_lid);

  pivot_Glue_top = new THREE.Object3D();
  pivot_Glue_top.add(side_Glue_top);
  pivot_Glue_top.position.y = (C * 0.74) | 0;

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid, pivot_Glue_center, pivot_Glue_top);
  pivot_Glue_lid.position.x = -A;

  /* #endregion */

  pivot_Back_A_Bottom_left = new THREE.Object3D();
  pivot_Back_A_Bottom_left.add(side_A_Bottom_Back_left);
  pivot_Back_A_Bottom_left.position.x = -A;

  pivot_Back_A_Bottom_right = new THREE.Object3D();
  pivot_Back_A_Bottom_right.add(side_A_Bottom_Back_right);

  pivot_Back_A_bottom = new THREE.Object3D();
  pivot_Back_A_bottom.add(
    side_A_Bottom_back,
    pivot_Back_A_Bottom_left,
    pivot_Back_A_Bottom_right
  );
  pivot_Back_A_bottom.position.y = (C * 0.26) | 0;

  pivot_Back_d = new THREE.Object3D();
  pivot_Back_d.add(side_A_Back_d, pivot_Back_A_bottom);
  pivot_Back_d.rotation.x = Math.PI;

  pivot_Back_A_top = new THREE.Object3D();
  pivot_Back_A_top.add(side_A_Top_back);
  pivot_Back_A_top.position.y = (C * 0.74) | 0;

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(
    side_A_back,
    pivot_Glue_lid,
    pivot_Back_d,
    pivot_Back_A_top,
    rope_Back
  );
  pivot_Back.position.x = -(B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left @ left_Panel */

  pivot_Left_Bottom_Lid_left = new THREE.Object3D();
  pivot_Left_Bottom_Lid_left.add(side_B_Left_Bottom_Lid_left);
  pivot_Left_Bottom_Lid_left.position.y = (-C * 0.26) | 0;

  pivot_Left_Bottom_D_left = new THREE.Object3D();
  pivot_Left_Bottom_D_left.add(
    side_B_Left_Bottom_D_left,
    pivot_Left_Bottom_Lid_left
  );

  pivot_Left_Bottom_left = new THREE.Object3D();
  pivot_Left_Bottom_left.add(side_B_Left_Bottom_left, pivot_Left_Bottom_D_left);

  pivot_Left_Top_l = new THREE.Object3D();
  pivot_Left_Top_l.add(side_B_Left_Top_l);
  pivot_Left_Top_l.position.y = (C * 0.74) | 0;

  pivot_Left_l = new THREE.Object3D();
  pivot_Left_l.add(
    side_B_Left_l,
    pivot_Left_Bottom_left,
    pivot_Back,
    pivot_Left_Top_l
  );
  pivot_Left_l.position.x = -(B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Left @ right_Panel */

  pivot_Left_Bottom_Lid_right = new THREE.Object3D();
  pivot_Left_Bottom_Lid_right.add(side_B_Left_Bottom_Lid_right);
  pivot_Left_Bottom_Lid_right.position.y = (-C * 0.26) | 0;

  pivot_Left_Bottom_D_right = new THREE.Object3D();
  pivot_Left_Bottom_D_right.add(
    side_B_Left_Bottom_D_right,
    pivot_Left_Bottom_Lid_right
  );

  pivot_Left_Bottom_right = new THREE.Object3D();
  pivot_Left_Bottom_right.add(
    side_B_Left_Bottom_right,
    pivot_Left_Bottom_D_right
  );

  pivot_Left_Top_r = new THREE.Object3D();
  pivot_Left_Top_r.add(side_B_Left_Top_r);
  pivot_Left_Top_r.position.y = (C * 0.74) | 0;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(
    side_B_left,
    pivot_Left_l,
    pivot_Left_Bottom_right,
    pivot_Left_Top_r
  );

  /* #endregion */

  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right @ right_Panel */

  pivot_Right_Bottom_Lid_right = new THREE.Object3D();
  pivot_Right_Bottom_Lid_right.add(side_B_Right_Bottom_Lid_right);
  pivot_Right_Bottom_Lid_right.position.y = (-C * 0.26) | 0;

  pivot_Right_Bottom_D_right = new THREE.Object3D();
  pivot_Right_Bottom_D_right.add(
    side_B_Right_Bottom_D_right,
    pivot_Right_Bottom_Lid_right
  );

  pivot_Right_Bottom_right = new THREE.Object3D();
  pivot_Right_Bottom_right.add(
    side_B_Right_Bottom_right,
    pivot_Right_Bottom_D_right
  );

  pivot_Right_Top_r = new THREE.Object3D();
  pivot_Right_Top_r.add(side_B_Right_Top_r);
  pivot_Right_Top_r.position.y = (C * 0.74) | 0;

  pivot_Right_r = new THREE.Object3D();
  pivot_Right_r.add(
    side_B_Right_r,
    pivot_Right_Bottom_right,
    pivot_Right_Top_r
  );
  pivot_Right_r.position.x = (B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Right @ left_Panel */

  pivot_Right_Bottom_Lid_left = new THREE.Object3D();
  pivot_Right_Bottom_Lid_left.add(side_B_Right_Bottom_Lid_left);
  pivot_Right_Bottom_Lid_left.position.y = (-C * 0.26) | 0;

  pivot_Right_Bottom_D_left = new THREE.Object3D();
  pivot_Right_Bottom_D_left.add(
    side_B_Right_Bottom_D_left,
    pivot_Right_Bottom_Lid_left
  );

  pivot_Right_Bottom_left = new THREE.Object3D();
  pivot_Right_Bottom_left.add(
    side_B_Right_Bottom_left,
    pivot_Right_Bottom_D_left
  );

  pivot_Right_Top_l = new THREE.Object3D();
  pivot_Right_Top_l.add(side_B_Right_Top_l);
  pivot_Right_Top_l.position.y = (C * 0.74) | 0;

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_Right_Bottom_left,
    pivot_Right_r,
    pivot_Right_Top_l
  );
  pivot_Right.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
  /* #region  ฉาก - เส้น */

  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_top);
  side_A_Top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_side_d);
  side_A_Front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Front_d_edges.position.set((A * 0.5) | 0, Math.round(C * 0.13), 0);

  edges = new THREE.EdgesGeometry(plane_A_Bottom_side);
  side_A_Bottom_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_Bottom_Side_d);
  side_A_Bottom_Front_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_Bottom_Side_d);
  side_A_Bottom_Front_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Bottom_Front_right_edges.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_A_back */

  edges = new THREE.EdgesGeometry(plane_A_top);
  side_A_Top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Top_back_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = -A;

  edges = new THREE.EdgesGeometry(plane_A_side_d);
  side_A_Back_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Back_d_edges.position.set(-(A * 0.5) | 0, Math.round(C * 0.13), 0);

  edges = new THREE.EdgesGeometry(plane_A_Bottom_side);
  side_A_Bottom_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Bottom_back_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(plane_A_Bottom_Side_d);
  side_A_Bottom_Back_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_Bottom_Side_d);
  side_A_Bottom_Back_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Bottom_Back_right_edges.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_B_left */

  /* #region  side_B_left @ right_Panel */

  edges = new THREE.EdgesGeometry(plane_B_top);
  side_B_Left_Top_r_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Top_r_edges.position.set(
    -Math.round(B * 0.25),
    (C * 0.06) | 0,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(
    -Math.round(B * 0.25),
    Math.round(C * 0.37),
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_Left_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_right_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(plane_B_Bottom_d);
  side_B_Left_Bottom_D_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_D_right_edges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_lid);
  side_B_Left_Bottom_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_Lid_right_edges.position.set(
    -Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */
  /* #region  side_B_left @ left_Panel */

  edges = new THREE.EdgesGeometry(plane_B_top);
  side_B_Left_Top_l_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Top_l_edges.position.set(
    -Math.round(B * 0.25),
    (C * 0.06) | 0,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_Left_l_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_l_edges.position.set(
    -Math.round(B * 0.25),
    Math.round(C * 0.37),
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_Left_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_left_edges.rotation.y = Math.PI;
  side_B_Left_Bottom_left_edges.position.y = (-C * 0.26) | 0;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_d);
  side_B_Left_Bottom_D_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_D_left_edges.rotation.y = Math.PI;
  side_B_Left_Bottom_D_left_edges.position.y = (-C * 0.26) | 0;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_lid);
  side_B_Left_Bottom_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_Bottom_Lid_left_edges.position.set(
    -Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */

  /* #endregion */
  /* #region  side_B_right */

  /* #region  side_B_right @ right_Panel */

  edges = new THREE.EdgesGeometry(plane_B_top);
  side_B_Right_Top_l_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Top_l_edges.position.set(
    Math.round(B * 0.25),
    (C * 0.06) | 0,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(
    Math.round(B * 0.25),
    Math.round(C * 0.37),
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_Right_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_left_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_d);
  side_B_Right_Bottom_D_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_D_left_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_lid);
  side_B_Right_Bottom_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_Lid_left_edges.position.set(
    Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */
  /* #region  side_B_right @ left_Panel */

  edges = new THREE.EdgesGeometry(plane_B_top);
  side_B_Right_Top_r_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Top_r_edges.position.set(
    Math.round(B * 0.25),
    (C * 0.06) | 0,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_Right_r_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_r_edges.position.set(
    Math.round(B * 0.25),
    Math.round(C * 0.37),
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_Right_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_right_edges.position.y = (-C * 0.26) | 0;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_d);
  side_B_Right_Bottom_D_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_D_right_edges.position.y = (-C * 0.26) | 0;

  edges = new THREE.EdgesGeometry(plane_B_Bottom_lid);
  side_B_Right_Bottom_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_Bottom_Lid_right_edges.position.set(
    Math.round(B * 0.25),
    -Math.round(C * 0.16),
    0
  );

  /* #endregion */

  /* #endregion */
  /* #region  side_Glue */

  edges = new THREE.EdgesGeometry(plane_Glue_top);
  side_Glue_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_top_edges.position.set(-(P * 2) | 0, (C * 0.06) | 0, 0);

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_lid_edges.position.set(-(P * 2) | 0, Math.round(C * 0.37), 0);

  edges = new THREE.EdgesGeometry(glue_Lid_d);
  side_Glue_Lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_Lid_d_edges.position.set(-(P * 2) | 0, -Math.round(C * 0.16), 0);

  edges = new THREE.EdgesGeometry(glue_Center);
  side_Glue_center_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_center_edges.rotation.z = Math.PI;

  edges = new THREE.EdgesGeometry(glue_Center_lid);
  side_Glue_Center_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_Center_lid_edges.rotation.z = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Front */

  pivot_Front_A_bottom_left_edges = new THREE.Object3D();
  pivot_Front_A_bottom_left_edges.add(side_A_Bottom_Front_left_edges);

  pivot_Front_A_bottom_right_edges = new THREE.Object3D();
  pivot_Front_A_bottom_right_edges.add(side_A_Bottom_Front_right_edges);
  pivot_Front_A_bottom_right_edges.position.x = A;

  pivot_Front_A_bottom_edges = new THREE.Object3D();
  pivot_Front_A_bottom_edges.add(
    side_A_Bottom_front_edges,
    pivot_Front_A_bottom_left_edges,
    pivot_Front_A_bottom_right_edges
  );
  pivot_Front_A_bottom_edges.position.y = (C * 0.26) | 0;

  pivot_Front_A_d_edges = new THREE.Object3D();
  pivot_Front_A_d_edges.add(side_A_Front_d_edges, pivot_Front_A_bottom_edges);
  pivot_Front_A_d_edges.rotation.x = Math.PI;

  pivot_Front_A_top_edges = new THREE.Object3D();
  pivot_Front_A_top_edges.add(side_A_Top_front_edges);
  pivot_Front_A_top_edges.position.y = (C * 0.74) | 0;

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Front_A_d_edges,
    pivot_Front_A_top_edges
  );

  /* #endregion */
  /* #region  pivot_Back */

  /* #region  glue_Lid */

  pivot_Glue_Lid_d_edges = new THREE.Object3D();
  pivot_Glue_Lid_d_edges.add(side_Glue_Lid_d_edges);
  pivot_Glue_Lid_d_edges.position.y = (-C * 0.08) | 0;

  pivot_Glue_Center_lid_edges = new THREE.Object3D();
  pivot_Glue_Center_lid_edges.add(
    side_Glue_Center_lid_edges,
    pivot_Glue_Lid_d_edges
  );
  pivot_Glue_Center_lid_edges.position.y = (-C * 0.18) | 0;

  pivot_Group_Center_lid_edges = new THREE.Object3D();
  pivot_Group_Center_lid_edges.add(pivot_Glue_Center_lid_edges);

  pivot_Glue_center_edges = new THREE.Object3D();
  pivot_Glue_center_edges.add(
    side_Glue_center_edges,
    pivot_Group_Center_lid_edges
  );

  pivot_Glue_top_edges = new THREE.Object3D();
  pivot_Glue_top_edges.add(side_Glue_top_edges);
  pivot_Glue_top_edges.position.y = (C * 0.74) | 0;

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(
    side_Glue_lid_edges,
    pivot_Glue_center_edges,
    pivot_Glue_top_edges
  );
  pivot_Glue_lid_edges.position.x = -A;

  /* #endregion */

  pivot_Back_A_Bottom_left_edges = new THREE.Object3D();
  pivot_Back_A_Bottom_left_edges.add(side_A_Bottom_Back_left_edges);
  pivot_Back_A_Bottom_left_edges.position.x = -A;

  pivot_Back_A_Bottom_right_edges = new THREE.Object3D();
  pivot_Back_A_Bottom_right_edges.add(side_A_Bottom_Back_right_edges);

  pivot_Back_A_bottom_edges = new THREE.Object3D();
  pivot_Back_A_bottom_edges.add(
    side_A_Bottom_back_edges,
    pivot_Back_A_Bottom_left_edges,
    pivot_Back_A_Bottom_right_edges
  );
  pivot_Back_A_bottom_edges.position.y = (C * 0.26) | 0;

  pivot_Back_d_edges = new THREE.Object3D();
  pivot_Back_d_edges.add(side_A_Back_d_edges, pivot_Back_A_bottom_edges);
  pivot_Back_d_edges.rotation.x = Math.PI;

  pivot_Back_A_top_edges = new THREE.Object3D();
  pivot_Back_A_top_edges.add(side_A_Top_back_edges);
  pivot_Back_A_top_edges.position.y = (C * 0.74) | 0;

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_Glue_lid_edges,
    pivot_Back_d_edges,
    pivot_Back_A_top_edges
  );
  pivot_Back_edges.position.x = -(B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left @ left_Panel */

  pivot_Left_Bottom_Lid_left_edges = new THREE.Object3D();
  pivot_Left_Bottom_Lid_left_edges.add(side_B_Left_Bottom_Lid_left_edges);
  pivot_Left_Bottom_Lid_left_edges.position.y = (-C * 0.26) | 0;

  pivot_Left_Bottom_D_left_edges = new THREE.Object3D();
  pivot_Left_Bottom_D_left_edges.add(
    side_B_Left_Bottom_D_left_edges,
    pivot_Left_Bottom_Lid_left_edges
  );

  pivot_Left_Bottom_left_edges = new THREE.Object3D();
  pivot_Left_Bottom_left_edges.add(
    side_B_Left_Bottom_left_edges,
    pivot_Left_Bottom_D_left_edges
  );

  pivot_Left_Top_l_edges = new THREE.Object3D();
  pivot_Left_Top_l_edges.add(side_B_Left_Top_l_edges);
  pivot_Left_Top_l_edges.position.y = (C * 0.74) | 0;

  pivot_Left_l_edges = new THREE.Object3D();
  pivot_Left_l_edges.add(
    side_B_Left_l_edges,
    pivot_Left_Bottom_left_edges,
    pivot_Back_edges,
    pivot_Left_Top_l_edges
  );
  pivot_Left_l_edges.position.x = -(B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Left @ right_Panel */

  pivot_Left_Bottom_Lid_right_edges = new THREE.Object3D();
  pivot_Left_Bottom_Lid_right_edges.add(side_B_Left_Bottom_Lid_right_edges);
  pivot_Left_Bottom_Lid_right_edges.position.y = (-C * 0.26) | 0;

  pivot_Left_Bottom_D_right_edges = new THREE.Object3D();
  pivot_Left_Bottom_D_right_edges.add(
    side_B_Left_Bottom_D_right_edges,
    pivot_Left_Bottom_Lid_right_edges
  );

  pivot_Left_Bottom_right_edges = new THREE.Object3D();
  pivot_Left_Bottom_right_edges.add(
    side_B_Left_Bottom_right_edges,
    pivot_Left_Bottom_D_right_edges
  );

  pivot_Left_Top_r_edges = new THREE.Object3D();
  pivot_Left_Top_r_edges.add(side_B_Left_Top_r_edges);
  pivot_Left_Top_r_edges.position.y = (C * 0.74) | 0;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_l_edges,
    pivot_Left_Bottom_right_edges,
    pivot_Left_Top_r_edges
  );

  /* #endregion */

  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right @ right_Panel */

  pivot_Right_Bottom_Lid_right_edges = new THREE.Object3D();
  pivot_Right_Bottom_Lid_right_edges.add(side_B_Right_Bottom_Lid_right_edges);
  pivot_Right_Bottom_Lid_right_edges.position.y = (-C * 0.26) | 0;

  pivot_Right_Bottom_D_right_edges = new THREE.Object3D();
  pivot_Right_Bottom_D_right_edges.add(
    side_B_Right_Bottom_D_right_edges,
    pivot_Right_Bottom_Lid_right_edges
  );

  pivot_Right_Bottom_right_edges = new THREE.Object3D();
  pivot_Right_Bottom_right_edges.add(
    side_B_Right_Bottom_right_edges,
    pivot_Right_Bottom_D_right_edges
  );

  pivot_Right_Top_r_edges = new THREE.Object3D();
  pivot_Right_Top_r_edges.add(side_B_Right_Top_r_edges);
  pivot_Right_Top_r_edges.position.y = (C * 0.74) | 0;

  pivot_Right_r_edges = new THREE.Object3D();
  pivot_Right_r_edges.add(
    side_B_Right_r_edges,
    pivot_Right_Bottom_right_edges,
    pivot_Right_Top_r_edges
  );
  pivot_Right_r_edges.position.x = (B * 0.5) | 0;

  /* #endregion */
  /* #region  pivot_Right @ left_Panel */

  pivot_Right_Bottom_Lid_left_edges = new THREE.Object3D();
  pivot_Right_Bottom_Lid_left_edges.add(side_B_Right_Bottom_Lid_left_edges);
  pivot_Right_Bottom_Lid_left_edges.position.y = (-C * 0.26) | 0;

  pivot_Right_Bottom_D_left_edges = new THREE.Object3D();
  pivot_Right_Bottom_D_left_edges.add(
    side_B_Right_Bottom_D_left_edges,
    pivot_Right_Bottom_Lid_left_edges
  );

  pivot_Right_Bottom_left_edges = new THREE.Object3D();
  pivot_Right_Bottom_left_edges.add(
    side_B_Right_Bottom_left_edges,
    pivot_Right_Bottom_D_left_edges
  );

  pivot_Right_Top_l_edges = new THREE.Object3D();
  pivot_Right_Top_l_edges.add(side_B_Right_Top_l_edges);
  pivot_Right_Top_l_edges.position.y = (C * 0.74) | 0;

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Right_Bottom_left_edges,
    pivot_Right_r_edges,
    pivot_Right_Top_l_edges
  );
  pivot_Right_edges.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Front_edges, pivot_Left_edges, pivot_Right_edges);
  scene.add(pivot_All_edges);

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
