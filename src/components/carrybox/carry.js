import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 175;
var B = 105;
var C = 75;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;

var side_A_front;
var side_A_back;
var side_B_left;
var side_B_right;
var side_left_lid;
var side_left_lid_d;
var side_right_lid;
var side_right_lid_d;
var side_top_A_back;
var side_top_A_lid_top_back;
var side_glue_lid;
var side_top_A_front;
var side_top_A_lid_top_front;
var side_bottom_A_front;
var side_lid_bottom_A_front;
var side_bottom_A_back;
var side_lid_bottom_A_back;

var side_A_front_edges;
var side_A_back_edges;
var side_B_left_edges;
var side_B_right_edges;
var side_left_lid_edges;
var side_left_lid_d_edges;
var side_right_lid_edges;
var side_right_lid_d_edges;
var side_top_A_back_edges;
var side_top_A_lid_top_back_edges;
var side_glue_lid_edges;
var side_top_A_front_edges;
var side_top_A_lid_top_front_edges;
var side_bottom_A_front_edges;
var side_lid_bottom_A_front_edges;
var side_bottom_A_back_edges;
var side_lid_bottom_A_back_edges;

var pivot_Bottom_front;
var pivot_Bottom_front_lid;
var pivot_group_Bottom_front;
var pivot_front;
var pivot_Right_lid;
var pivot_Right_lid_d;
var pivot_group_right;
var pivot_Left_lid;
var pivot_Left_lid_d;
var pivot_Left;
var pivot_Glue_lid;
var pivot_Top_back;
var pivot_Top_back_lid;
var pivot_Group_top_back;
var pivot_Bottom_back;
var pivot_Bottom_back_lid;
var pivot_Group_bottom_back;
var pivot_Back;
var pivot_group_left;
var pivot_Top_front;
var pivot_Top_front_lid;
var pivot_top;
var pivot_all;

var pivot_Bottom_front_edges;
var pivot_Bottom_front_lid_edges;
var pivot_group_Bottom_front_edges;
var pivot_front_edges;
var pivot_Right_lid_edges;
var pivot_Right_lid_d_edges;
var pivot_group_right_edges;
var pivot_Left_lid_edges;
var pivot_Left_lid_d_edges;
var pivot_Left_edges;
var pivot_Glue_lid_edges;
var pivot_Top_back_edges;
var pivot_Top_back_lid_edges;
var pivot_Group_top_back_edges;
var pivot_Group_top_back_edges;
var pivot_Bottom_back_edges;
var pivot_Bottom_back_lid_edges;
var pivot_Group_bottom_back_edges;
var pivot_Back_edges;
var pivot_group_left_edges;
var pivot_Top_front_edges;
var pivot_Top_front_lid_edges;
var pivot_top_edges;
var pivot_all_edges;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

  // สร้างแกนหมุน
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  // เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
  const material = new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
    side: THREE.DoubleSide,
    wireframe: false,
  });

  /* Region */

  /* สร้างรูปทรง */

  var lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(0, (C * 0.7) | 0);
  lid_shape.lineTo(A, (C * 0.7) | 0);
  lid_shape.lineTo(A, 0);

  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.115) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.115) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo(A * 0.143, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.23) | 0, (C * 0.7) | 0);
  lr_lid_shape.lineTo((A * 0.775) | 0, (C * 0.7) | 0);
  lr_lid_shape.lineTo((A * 0.86) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.89) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.89) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, 0);
  lr_lid_shape.lineTo((A * 0.8) | 0, 0);
  lr_lid_shape.lineTo((A * 0.8) | 0, (C * 0.27) | 0);
  lr_lid_shape.lineTo((A * 0.2) | 0, (C * 0.27) | 0);
  lr_lid_shape.lineTo((A * 0.2) | 0, 0);

  var lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, 0);
  lid_Bottom_shape.lineTo((A * 0.03) | 0, (C * 0.706) | 0); // 0.68
  lid_Bottom_shape.lineTo((A * 0.7) | 0, (C * 0.706) | 0); // 0.68
  lid_Bottom_shape.lineTo((A * 0.783) | 0, (C * 0.91) | 0); // 0.91
  lid_Bottom_shape.lineTo((A * 0.972) | 0, (C * 0.91) | 0); // 0.91
  lid_Bottom_shape.lineTo((A * 0.972) | 0, (C * 0.24) | 0);
  lid_Bottom_shape.lineTo((A * 0.95) | 0, (C * 0.14) | 0);
  lid_Bottom_shape.lineTo(A, 0);

  var lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo((A * 0.012) | 0, (C * 0.256) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.41) | 0, (C * 0.256) | 0); // 0.44
  lr_lid_Bottom_shape.lineTo((A * 0.47) | 0, (C * 0.1) | 0); // 5
  lr_lid_Bottom_shape.lineTo((A * 0.47) | 0, 0); // 5

  var lid_curve_shape = new THREE.Shape();
  lid_curve_shape.moveTo(0, 0); // B x C
  lid_curve_shape.lineTo((B * 0.29) | 0, (C * 0.65) | 0);
  lid_curve_shape.bezierCurveTo(
    (B * 0.29) | 0,
    (C * 0.65) | 0,
    (B * 0.5) | 0,
    (C * 0.87) | 0,
    (B * 0.72) | 0,
    (C * 0.65) | 0
  );
  lid_curve_shape.lineTo((B * 0.72) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo(B, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo((B * 0.48) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo((B * 0.48) | 0, 0);

  var lid_bottom_curve_shape = new THREE.Shape();
  lid_bottom_curve_shape.moveTo(0, 0);
  lid_bottom_curve_shape.lineTo((B * 0.29) | 0, (C * 0.7) | 0); // 0.29, 0.74
  lid_bottom_curve_shape.lineTo((B * 0.49) | 0, (C * 0.7) | 0); // 0.53, 0.74
  lid_bottom_curve_shape.lineTo(B, 0);

  // ฝาเสียบกาว
  var glue_lid_shape = new THREE.Shape();

  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_lid_shape.lineTo(C / 10, -P);
  glue_lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x สูง | ความหนา

  var lid_onTop = new THREE.ShapeGeometry(lid_shape);
  var lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);
  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);
  var lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape);
  var lid_curve = new THREE.ShapeGeometry(lid_curve_shape);
  var lid_bottom_curve = new THREE.ShapeGeometry(lid_bottom_curve_shape);
  var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);

  /* ฉาก */

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  side_left_lid = new THREE.Mesh(lid_curve, material);
  side_left_lid.rotation.y = Math.PI;

  side_left_lid_d = new THREE.Mesh(lid_bottom_curve, material);
  side_left_lid_d.rotation.x = Math.PI;

  side_right_lid = new THREE.Mesh(lid_curve, material);

  side_right_lid_d = new THREE.Mesh(lid_bottom_curve, material);
  side_right_lid_d.rotation.x = Math.PI;

  side_top_A_back = new THREE.Mesh(lid_onTop, material);

  side_top_A_lid_top_back = new THREE.Mesh(lr_lid_onTop, material);

  side_glue_lid = new THREE.Mesh(glue_lid, material);
  side_glue_lid.rotation.y = Math.PI;
  side_glue_lid.rotation.z = Math.PI / 2;

  side_top_A_front = new THREE.Mesh(lid_onTop, material);

  side_top_A_lid_top_front = new THREE.Mesh(lr_lid_onTop, material);

  side_bottom_A_front = new THREE.Mesh(lid_Bottom, material);
  side_bottom_A_front.rotation.x = Math.PI;

  /* ตัวเสียบล่างด้านหน้า */
  side_lid_bottom_A_front = new THREE.Mesh(lr_lid_Bottom, material);
  side_lid_bottom_A_front.rotation.x = Math.PI;

  side_bottom_A_back = new THREE.Mesh(lid_Bottom, material);
  side_bottom_A_back.rotation.x = Math.PI;
  side_bottom_A_back.position.x = -A;

  /* ตัวเสียบล่างด้านหลัง */
  side_lid_bottom_A_back = new THREE.Mesh(lr_lid_Bottom, material);
  side_lid_bottom_A_back.rotation.x = Math.PI;

  /* จุดหมุน */

  /* pivot_Front */

  pivot_Bottom_front = new THREE.Object3D();
  pivot_Bottom_front.add(side_bottom_A_front);

  pivot_Bottom_front_lid = new THREE.Object3D();
  pivot_Bottom_front_lid.add(side_lid_bottom_A_front);
  pivot_Bottom_front_lid.position.set((A * 0.03) | 0, (-C * 0.7) | 0, 0);

  pivot_group_Bottom_front = new THREE.Object3D();
  pivot_group_Bottom_front.add(pivot_Bottom_front, pivot_Bottom_front_lid);

  pivot_front = new THREE.Object3D();
  pivot_front.add(side_A_front, pivot_group_Bottom_front);

  /* pivot_Group_right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_right_lid);
  pivot_Right_lid.position.set(0, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_right_lid_d);

  pivot_group_right = new THREE.Object3D();
  pivot_group_right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_group_right.position.set(A, 0, 0);

  /* pivot_Group_left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_left_lid);
  pivot_Left_lid.position.set(0, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_left_lid_d);
  pivot_Left_lid_d.position.set(-B, 0, 0)

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.set(-A, 0, 0);
  pivot_Glue_lid.add(side_glue_lid);

  pivot_Top_back = new THREE.Object3D();
  pivot_Top_back.add(side_top_A_back);

  pivot_Top_back_lid = new THREE.Object3D();
  pivot_Top_back_lid.position.set(0, (C * 0.7) | 0, 0);
  pivot_Top_back_lid.add(side_top_A_lid_top_back);

  pivot_Group_top_back = new THREE.Object3D();
  pivot_Group_top_back.add(pivot_Top_back, pivot_Top_back_lid);
  pivot_Group_top_back.position.set(-A, C, 0);

  pivot_Bottom_back = new THREE.Object3D();
  pivot_Bottom_back.add(side_bottom_A_back);

  pivot_Bottom_back_lid = new THREE.Object3D();
  pivot_Bottom_back_lid.add(side_lid_bottom_A_back);
  pivot_Bottom_back_lid.position.set((-A * 0.974) | 0, (-C * 0.7) | 0, 0);

  pivot_Group_bottom_back = new THREE.Object3D();
  pivot_Group_bottom_back.add(pivot_Bottom_back, pivot_Bottom_back_lid);

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(
    side_A_back,
    pivot_Glue_lid,
    pivot_Group_top_back,
    pivot_Group_bottom_back
  );
  pivot_Back.position.set(-B, 0, 0);

  pivot_group_left = new THREE.Object3D();
  pivot_group_left.add(pivot_Left, pivot_Back);

  /* pivot_Top */

  pivot_Top_front = new THREE.Object3D();
  pivot_Top_front.add(side_top_A_front);

  pivot_Top_front_lid = new THREE.Object3D();
  pivot_Top_front_lid.add(side_top_A_lid_top_front);
  pivot_Top_front_lid.position.set(0, (C * 0.7) | 0, 0);

  pivot_top = new THREE.Object3D();
  pivot_top.add(pivot_Top_front, pivot_Top_front_lid);
  pivot_top.position.set(0, C, 0);

  /* pivot_All */

  pivot_all = new THREE.Object3D();
  pivot_all.add(pivot_front, pivot_group_right, pivot_group_left, pivot_top);
  scene.add(pivot_all);

  /* ********** Edges - เส้น ********** */

  // เซทฉาก

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_A_back_edges.position.x = -A / 2;
  side_A_back_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_B_left_edges.position.x = -B / 2;
  side_B_left_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_B_right_edges.position.x = B / 2;
  side_B_right_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid_curve);
  side_left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_left_lid_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_bottom_curve);
  side_left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_left_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_curve);
  side_right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );

  edges = new THREE.EdgesGeometry(lid_bottom_curve);
  side_right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_right_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_onTop);
  side_top_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );

  edges = new THREE.EdgesGeometry(lr_lid_onTop);
  side_top_A_lid_top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );

  edges = new THREE.EdgesGeometry(glue_lid);
  side_glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_glue_lid_edges.rotation.y = Math.PI;
  side_glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(lid_onTop);
  side_top_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );

  edges = new THREE.EdgesGeometry(lr_lid_onTop);
  side_top_A_lid_top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lid_bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_lid_bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_bottom_A_back_edges.rotation.x = Math.PI;
  side_bottom_A_back_edges.position.x = -A;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lid_bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#000000" })
  );
  side_lid_bottom_A_back_edges.rotation.x = Math.PI;

  /* จุดหมุน */

  /* pivot_Front */

  pivot_Bottom_front_edges = new THREE.Object3D();
  pivot_Bottom_front_edges.add(side_bottom_A_front_edges);

  pivot_Bottom_front_lid_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_edges.add(side_lid_bottom_A_front_edges);
  pivot_Bottom_front_lid_edges.position.set((A * 0.03) | 0, (-C * 0.7) | 0, 0);

  pivot_group_Bottom_front_edges = new THREE.Object3D();
  pivot_group_Bottom_front_edges.add(
    pivot_Bottom_front_edges,
    pivot_Bottom_front_lid_edges
  );

  pivot_front_edges = new THREE.Object3D();
  pivot_front_edges.add(side_A_front_edges, pivot_group_Bottom_front_edges);

  /* pivot_Group_right */

  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_right_lid_edges);
  pivot_Right_lid_edges.position.set(0, C, 0);

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_right_lid_d_edges);

  pivot_group_right_edges = new THREE.Object3D();
  pivot_group_right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_group_right_edges.position.set(A, 0, 0);

  /* pivot_Group_left */

  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_left_lid_edges);
  pivot_Left_lid_edges.position.set(0, C, 0);

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_left_lid_d_edges);
  pivot_Left_lid_d_edges.position.set(-B, 0, 0);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.position.set(-A, 0, 0);
  pivot_Glue_lid_edges.add(side_glue_lid_edges);

  pivot_Top_back_edges = new THREE.Object3D();
  pivot_Top_back_edges.add(side_top_A_back_edges);

  pivot_Top_back_lid_edges = new THREE.Object3D();
  pivot_Top_back_lid_edges.position.set(0, (C * 0.7) | 0, 0);
  pivot_Top_back_lid_edges.add(side_top_A_lid_top_back_edges);

  pivot_Group_top_back_edges = new THREE.Object3D();
  pivot_Group_top_back_edges.add(
    pivot_Top_back_edges,
    pivot_Top_back_lid_edges
  );
  pivot_Group_top_back_edges.position.set(-A, C, 0);

  pivot_Bottom_back_edges = new THREE.Object3D();
  pivot_Bottom_back_edges.add(side_bottom_A_back_edges);

  pivot_Bottom_back_lid_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_edges.add(side_lid_bottom_A_back_edges);
  pivot_Bottom_back_lid_edges.position.set(
    (-A * 0.974) | 0,
    (-C * 0.7) | 0,
    0
  );

  pivot_Group_bottom_back_edges = new THREE.Object3D();
  pivot_Group_bottom_back_edges.add(
    pivot_Bottom_back_edges,
    pivot_Bottom_back_lid_edges
  );

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_Glue_lid_edges,
    pivot_Group_top_back_edges,
    pivot_Group_bottom_back_edges
  );
  pivot_Back_edges.position.set(-B, 0, 0);

  pivot_group_left_edges = new THREE.Object3D();
  pivot_group_left_edges.add(pivot_Left_edges, pivot_Back_edges);

  /* pivot_Top */

  pivot_Top_front_edges = new THREE.Object3D();
  pivot_Top_front_edges.add(side_top_A_front_edges);

  pivot_Top_front_lid_edges = new THREE.Object3D();
  pivot_Top_front_lid_edges.add(side_top_A_lid_top_front_edges);
  pivot_Top_front_lid_edges.position.set(0, (C * 0.7) | 0, 0);

  pivot_top_edges = new THREE.Object3D();
  pivot_top_edges.add(pivot_Top_front_edges, pivot_Top_front_lid_edges);
  pivot_top_edges.position.set(0, C, 0);

  /* pivot_All */

  pivot_all_edges = new THREE.Object3D();
  pivot_all_edges.add(
    pivot_front_edges,
    pivot_group_right_edges,
    pivot_group_left_edges,
    pivot_top_edges
  );
  scene.add(pivot_all_edges);

  /* End Region */

  // Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById("webgl").append(renderer.domElement);

  // The Mouse Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

  setInterval(rotations(), 5000);
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

const rotations = () => {
  pivot_group_right.rotation.y = Math.PI / 2;
  pivot_group_left.rotation.y = -Math.PI / 2;

  pivot_Back.rotation.y = -Math.PI / 2;
  pivot_Glue_lid.rotation.y = -Math.PI / 2;

  pivot_Group_top_back.rotation.x = -Math.PI / 2;
  pivot_top.rotation.x = -Math.PI / 2;

  pivot_Right_lid.rotation.x = -Math.PI / 6;
  pivot_Left_lid.rotation.x = -Math.PI / 6;

  pivot_Top_back_lid.rotation.x = Math.PI / 2;
  pivot_Top_front_lid.rotation.x = Math.PI / 2;

  pivot_group_Bottom_front.rotation.x = Math.PI / 2.1;
  pivot_Group_bottom_back.rotation.x = Math.PI / 2.1;

  pivot_Bottom_front_lid.rotation.x = Math.PI / 11;
  pivot_Bottom_back_lid.rotation.x = Math.PI / 11;

  pivot_Right_lid_d.rotation.x = Math.PI / 2;
  pivot_Left_lid_d.rotation.x = Math.PI / 2;

  /* เส้น */

  pivot_group_right_edges.rotation.y = Math.PI / 2;
  pivot_group_left_edges.rotation.y = -Math.PI / 2;

  pivot_Back_edges.rotation.y = -Math.PI / 2;
  pivot_Glue_lid_edges.rotation.y = -Math.PI / 2;

  pivot_Group_top_back_edges.rotation.x = -Math.PI / 2;
  pivot_top_edges.rotation.x = -Math.PI / 2;

  pivot_Right_lid_edges.rotation.x = -Math.PI / 6;
  pivot_Left_lid_edges.rotation.x = -Math.PI / 6;

  pivot_Top_back_lid_edges.rotation.x = Math.PI / 2;
  pivot_Top_front_lid_edges.rotation.x = Math.PI / 2;

  pivot_group_Bottom_front_edges.rotation.x = Math.PI / 2.1;
  pivot_Group_bottom_back_edges.rotation.x = Math.PI / 2.1;

  pivot_Bottom_front_lid_edges.rotation.x = Math.PI / 11;
  pivot_Bottom_back_lid_edges.rotation.x = Math.PI / 11;

  pivot_Right_lid_d_edges.rotation.x = Math.PI / 2;
  pivot_Left_lid_d_edges.rotation.x = Math.PI / 2;
};

const updateSize = (a, b, c) => {
  A = a;
  B = b;
  C = c;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  updateSize,
};
