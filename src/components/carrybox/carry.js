// import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 175;
var B = 105;
var C = 75;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
// var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
// var leng_lr_lib = A * L;

var edges;
var tween;

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
var side_lid_d_bottom_A_front;
var side_bottom_A_back;
var side_lid_bottom_A_back;
var side_lid_d_bottom_A_back;

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
var side_lid_d_bottom_A_front_edges;
var side_bottom_A_back_edges;
var side_lid_bottom_A_back_edges;
var side_lid_d_bottom_A_back_edges;

var pivot_Bottom_front;
var pivot_Bottom_front_lid;
var pivot_Bottom_front_lid_d;
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
var pivot_Bottom_back_lid_d;
var pivot_Group_bottom_back;
var pivot_Back;
var pivot_group_left;
var pivot_Top_front;
var pivot_Top_front_lid;
var pivot_top;
var pivot_all;

var pivot_Bottom_front_edges;
var pivot_Bottom_front_lid_edges;
var pivot_Bottom_front_lid_d_edges;
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
var pivot_Bottom_back_edges;
var pivot_Bottom_back_lid_edges;
var pivot_Bottom_back_lid_d_edges;
var pivot_Group_bottom_back_edges;
var pivot_Back_edges;
var pivot_group_left_edges;
var pivot_Top_front_edges;
var pivot_Top_front_lid_edges;
var pivot_top_edges;
var pivot_all_edges;
/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

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

  // Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById("webgl").append(renderer.domElement);

  // The Mouse Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #region  โมเดลที่สร้างใหม่ */
  var lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(0, (C * 0.7) | 0);
  lid_shape.lineTo(A, (C * 0.7) | 0);
  lid_shape.lineTo(A, 0);

  var lid_onTop = new THREE.ShapeGeometry(lid_shape);

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

  var lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);

  var lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo((A * 0.03) | 0, (C * 0.706) | 0); // 0.68
  lid_Bottom_shape.lineTo((A * 0.7) | 0, (C * 0.706) | 0); // 0.68
  lid_Bottom_shape.lineTo(A, 0);

  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);

  var lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo((A * 0.7) | 0, (C * 0.706) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.7) | 0, (C * 0.706) | 0); // 0.68
  lr_lid_Bottom_shape.lineTo((A * 0.783) | 0, (C * 0.91) | 0); // 0.91
  lr_lid_Bottom_shape.lineTo((A * 0.972) | 0, (C * 0.91) | 0); // 0.91
  lr_lid_Bottom_shape.lineTo((A * 0.972) | 0, (C * 0.24) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.95) | 0, (C * 0.14) | 0);
  lr_lid_Bottom_shape.lineTo(A, 0);

  var lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape);

  var lr_lid_Bottom_shape_d = new THREE.Shape();
  lr_lid_Bottom_shape_d.moveTo(0, 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.012) | 0, (C * 0.256) | 0);
  lr_lid_Bottom_shape_d.lineTo((A * 0.41) | 0, (C * 0.256) | 0); // 0.44
  lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, (C * 0.1) | 0); // 5
  lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, 0); // 5

  var lr_lid_Bottom_d = new THREE.ShapeGeometry(lr_lid_Bottom_shape_d);

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

  var lid_curve = new THREE.ShapeGeometry(lid_curve_shape);

  var lid_bottom_curve_shape = new THREE.Shape();
  lid_bottom_curve_shape.moveTo(0, 0);
  lid_bottom_curve_shape.lineTo((B * 0.29) | 0, (C * 0.72) | 0); // 0.29, 0.74
  lid_bottom_curve_shape.lineTo((B * 0.49) | 0, (C * 0.72) | 0); // 0.53, 0.74
  lid_bottom_curve_shape.lineTo(B, 0);

  var lid_bottom_curve = new THREE.ShapeGeometry(lid_bottom_curve_shape);

  /* #region  ฝาเสียบกาว */
  var glue_lid_shape = new THREE.Shape();
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_lid_shape.lineTo(C / 10, -P);
  glue_lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);
  /* #endregion */

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x สูง | ความหนา
  /* #endregion */

  /* #region  ฉาก */
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

  side_lid_bottom_A_front = new THREE.Mesh(lr_lid_Bottom, material);
  side_lid_bottom_A_front.rotation.x = Math.PI;

  side_lid_d_bottom_A_front = new THREE.Mesh(lr_lid_Bottom_d, material);
  side_lid_d_bottom_A_front.rotation.x = Math.PI;

  side_bottom_A_back = new THREE.Mesh(lid_Bottom, material);
  side_bottom_A_back.rotation.x = Math.PI;

  side_lid_bottom_A_back = new THREE.Mesh(lr_lid_Bottom, material);
  side_lid_bottom_A_back.rotation.x = Math.PI;

  side_lid_d_bottom_A_back = new THREE.Mesh(lr_lid_Bottom_d, material);
  side_lid_d_bottom_A_back.rotation.x = Math.PI;
  /* #endregion */

  /* #region  ฉาก - แบบมีเส้น */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = -A / 2;
  side_A_back_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.x = -B / 2;
  side_B_left_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.x = B / 2;
  side_B_right_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid_curve);
  side_left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_left_lid_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_bottom_curve);
  side_left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_left_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_curve);
  side_right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lid_bottom_curve);
  side_right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_right_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_onTop);
  side_top_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid_onTop);
  side_top_A_lid_top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(glue_lid);
  side_glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_glue_lid_edges.rotation.y = Math.PI;
  side_glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(lid_onTop);
  side_top_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid_onTop);
  side_top_A_lid_top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lid_bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom_d);
  side_lid_d_bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_d_bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lid_bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom_d);
  side_lid_d_bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_d_bottom_A_back_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_Front */
  pivot_Bottom_front = new THREE.Object3D();
  pivot_Bottom_front.add(side_bottom_A_front);

  pivot_Bottom_front_lid = new THREE.Object3D();
  pivot_Bottom_front_lid.add(side_lid_bottom_A_front);

  pivot_Bottom_front_lid_d = new THREE.Object3D();
  pivot_Bottom_front_lid_d.add(side_lid_d_bottom_A_front);
  pivot_Bottom_front_lid_d.position.set(((A / 175) * 5) | 0, (-C * 0.7) | 0, 0);

  pivot_group_Bottom_front = new THREE.Object3D();
  pivot_group_Bottom_front.add(
    pivot_Bottom_front,
    pivot_Bottom_front_lid,
    pivot_Bottom_front_lid_d
  );

  pivot_front = new THREE.Object3D();
  pivot_front.add(side_A_front, pivot_group_Bottom_front);
  /* #endregion */

  /* #region  pivot_Group_right */
  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_right_lid);
  pivot_Right_lid.position.set(0, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_right_lid_d);

  pivot_group_right = new THREE.Object3D();
  pivot_group_right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_group_right.position.set(A, 0, 0);
  /* #endregion */

  /* #region  pivot_Group_left */
  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_left_lid);
  pivot_Left_lid.position.set(0, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_left_lid_d);
  pivot_Left_lid_d.position.set(-B, 0, 0);

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
  pivot_Bottom_back.position.x = -A;

  pivot_Bottom_back_lid = new THREE.Object3D();
  pivot_Bottom_back_lid.add(side_lid_bottom_A_back);
  pivot_Bottom_back_lid.position.x = -A;

  pivot_Bottom_back_lid_d = new THREE.Object3D();
  pivot_Bottom_back_lid_d.add(side_lid_d_bottom_A_back);
  pivot_Bottom_back_lid_d.position.set((-A * 0.974) | 0, (-C * 0.7) | 0, 0);

  pivot_Group_bottom_back = new THREE.Object3D();
  pivot_Group_bottom_back.add(
    pivot_Bottom_back,
    pivot_Bottom_back_lid,
    pivot_Bottom_back_lid_d
  );

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
  /* #endregion */

  /* #region  pivot_Top */
  pivot_Top_front = new THREE.Object3D();
  pivot_Top_front.add(side_top_A_front);

  pivot_Top_front_lid = new THREE.Object3D();
  pivot_Top_front_lid.add(side_top_A_lid_top_front);
  pivot_Top_front_lid.position.set(0, (C * 0.7) | 0, 0);

  pivot_top = new THREE.Object3D();
  pivot_top.add(pivot_Top_front, pivot_Top_front_lid);
  pivot_top.position.set(0, C, 0);
  /* #endregion */

  /* #region  pivot_All */
  pivot_all = new THREE.Object3D();
  pivot_all.add(pivot_front, pivot_group_right, pivot_group_left, pivot_top);
  scene.add(pivot_all);
  /* #endregion */

  /* #endregion */

 /* #region  จุดหมุน - แบบมีเส้น */
  
 /* #region  pivot_Front */
  pivot_Bottom_front_edges = new THREE.Object3D();
  pivot_Bottom_front_edges.add(side_bottom_A_front_edges);

  pivot_Bottom_front_lid_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_edges.add(side_lid_bottom_A_front_edges);

  pivot_Bottom_front_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_d_edges.add(side_lid_d_bottom_A_front_edges);
  pivot_Bottom_front_lid_d_edges.position.set(
    ((A / 175) * 5) | 0,
    (-C * 0.7) | 0,
    0
  );

  pivot_group_Bottom_front_edges = new THREE.Object3D();
  pivot_group_Bottom_front_edges.add(
    pivot_Bottom_front_edges,
    pivot_Bottom_front_lid_edges,
    pivot_Bottom_front_lid_d_edges
  );

  pivot_front_edges = new THREE.Object3D();
  pivot_front_edges.add(side_A_front_edges, pivot_group_Bottom_front_edges)
  /* #endregion */;

  /* #region  pivot_Group_right */
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
  /* #endregion */

  /* #region  pivot_Group_left */
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
  pivot_Bottom_back_edges.position.x = -A;

  pivot_Bottom_back_lid_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_edges.add(side_lid_bottom_A_back_edges);
  pivot_Bottom_back_lid_edges.position.x = -A;

  pivot_Bottom_back_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_d_edges.add(side_lid_d_bottom_A_back_edges);
  pivot_Bottom_back_lid_d_edges.position.set(
    (-A * 0.974) | 0,
    (-C * 0.7) | 0,
    0
  );

  pivot_Group_bottom_back_edges = new THREE.Object3D();
  pivot_Group_bottom_back_edges.add(
    pivot_Bottom_back_edges,
    pivot_Bottom_back_lid_edges,
    pivot_Bottom_back_lid_d_edges
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
  /* #endregion */

  /* #region  pivot_Top */
  pivot_Top_front_edges = new THREE.Object3D();
  pivot_Top_front_edges.add(side_top_A_front_edges);

  pivot_Top_front_lid_edges = new THREE.Object3D();
  pivot_Top_front_lid_edges.add(side_top_A_lid_top_front_edges);
  pivot_Top_front_lid_edges.position.set(0, (C * 0.7) | 0, 0);

  pivot_top_edges = new THREE.Object3D();
  pivot_top.add(pivot_Top_front_edges, pivot_Top_front_lid_edges);
  pivot_top_edges.position.set(0, C, 0);
  /* #endregion */

  /* #region  pivot_All */
  pivot_all_edges = new THREE.Object3D();
  pivot_all_edges.add(
    pivot_front_edges,
    pivot_group_right_edges,
    pivot_group_left_edges,
    pivot_top_edges
  );
  scene.add(pivot_all_edges);
  /* #endregion */

 /* #endregion */
};

/* #region  ฟังก์ชันอนิเมชั่น */
// Animate
const rotations1 = () => {
  // ชิ้นงาน

  // tween = gsap.timeline();
  // tween.to(pivot_Group_top_back.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Group_top_back.x = -(Math.PI / 180) * 90),
  // });

  // tween = gsap.timeline();
  // tween.to(pivot_top.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_top.x = -(Math.PI / 180) * 90),
  // });

  // tween = gsap.timeline();
  // tween.to(pivot_Right_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Right_lid.x = -(Math.PI / 180) * 30),
  // });

  // tween = gsap.timeline();
  // tween.to(pivot_Left_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Left_lid.x = -(Math.PI / 180) * 30),
  // });

  // tween = gsap.timeline();
  // tween.to(pivot_Top_back_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_back_lid.x = (Math.PI / 180) * 90),
  // });

  // tween = gsap.timeline();
  // tween.to(pivot_Top_front_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_front_lid.x = (Math.PI / 180) * 90),
  // });

  /* ---------------------------------------------------------------- */

  tween = gsap.timeline();
  tween.to(pivot_group_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_group_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_group_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_Back.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Group_top_back.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_top.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Right_lid.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Top_back_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Top_front_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_Bottom_front.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_group_Bottom_front.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Group_bottom_back.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_front_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_back_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 90),
  });

  // เส้น

  //   tween = gsap.timeline();
  //   tween.to(pivot_Group_top_back_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_Group_top_back_edges.x = -(Math.PI / 180) * 90),
  //   });

  //   tween = gsap.timeline();
  //   tween.to(pivot_top_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_top_edges.x = -(Math.PI / 180) * 90),
  //   });

  //   tween = gsap.timeline();
  //   tween.to(pivot_Right_lid_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 30),
  //   });

  //   tween = gsap.timeline();
  //   tween.to(pivot_Left_lid_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 30),
  //   });

  //   tween = gsap.timeline();
  //   tween.to(pivot_Top_back_lid_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_Top_back_lid_edges.x = (Math.PI / 180) * 90),
  //   });

  //   tween = gsap.timeline();
  //   tween.to(pivot_Top_front_lid_edges.rotation, {
  //     duration: 2,
  //     ease: "power4.in",
  //     x: (pivot_Top_front_lid_edges.x = (Math.PI / 180) * 90),
  //   });

  tween = gsap.timeline();
  tween.to(pivot_group_right_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_group_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_left_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_group_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_Back_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Group_top_back_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Top_back_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Top_front_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_Bottom_front_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_group_Bottom_front_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Group_bottom_back_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_front_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_back_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 90),
  });
};
// Non-Animate
const rotations2 = () => {
  // ชิ้นงาน
  // tween = gsap.timeline();
  // tween.to(pivot_Group_top_back.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Group_top_back.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_top.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_top.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Right_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Right_lid.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Left_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Left_lid.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Top_back_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_back_lid.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Top_front_lid.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_front_lid.x = (Math.PI / 180) * 60),
  // });

  tween = gsap.timeline();
  tween.to(pivot_group_right.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_group_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_left.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_group_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_Back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Group_top_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_top.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Top_back_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Top_front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_Bottom_front.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_group_Bottom_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Group_bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Bottom_front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Bottom_back_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = 0),
  });

  // เส้น

  // tween = gsap.timeline();
  // tween.to(pivot_Group_top_back_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Group_top_back_edges.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_top_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_top_edges.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Right_lid_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Right_lid_edges.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Left_lid_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Left_lid_edges.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Top_back_lid_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_back_lid_edges.x = (Math.PI / 180) * 60),
  // });
  // tween = gsap.timeline();
  // tween.to(pivot_Top_front_lid_edges.rotation, {
  //   duration: 2,
  //   ease: "power4.in",
  //   x: (pivot_Top_front_lid_edges.x = (Math.PI / 180) * 60),
  // });

  tween = gsap.timeline();
  tween.to(pivot_group_right_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_group_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_left_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_group_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_Back_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Group_top_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Top_back_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Top_front_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_Bottom_front_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_group_Bottom_front_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Group_bottom_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Bottom_front_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Bottom_back_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 3,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = 0),
  });
};
/* #endregion */

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

const updateSize = (a, b, c, p) => {
  A = a;
  B = b;
  C = c;
  P = p;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

const render = () => {
  renderer.render(scene, camera);
  // pivot_all.rotation.y += Math.PI / 360;
  // pivot_all_edges.rotation.y += Math.PI / 360;
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
