// import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 100;
var C = 40;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight / 1.2;
// var L = 0.3; // เปอร์เซนนต์
// var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
// var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_back;
var side_inside_flap_left;
var side_lr_lid_B_left;
var side_lid_B_left_top;
var side_lid_B_left_bottom;
var side_lid_B_left;
var side_B_left;
var side_inside_flap_right;
var side_lr_lid_B_right;
var side_lid_B_right_top;
var side_lid_B_right_bottom;
var side_lid_B_right;
var side_B_right;
var side_glue_flap_top;
var side_lr_lid_C_top;
var side_lr_C_top_left;
var side_lr_C_top_right;
var side_lid_C_top;
var side_dust_flap_top_left;
var side_dust_flap_top_right;
var side_A_top;
var side_glue_flap_bottom;
var side_lr_lid_C_bottom;
var side_lr_C_bottom_left;
var side_lr_C_bottom_right;
var side_lid_C_bottom;
var side_dust_flap_bottom_left;
var side_dust_flap_bottom_right;
var side_A_bottom;

var pivot_Back;
var pivot_inside_flap_left;
var pivot_lid_B_left_top;
var pivot_lid_B_left_bottom;
var pivot_lr_lid_B_left;
var pivot_lid_B_left;
var pivot_Left;
var pivot_inside_flap_right;
var pivot_lid_B_right_top;
var pivot_lid_B_right_bottom;
var pivot_lr_lid_B_right;
var pivot_lid_B_right;
var pivot_Right;
var pivot_glue_flap_top;
var pivot_lr_lid_A_top;
var pivot_lr_A_top_left;
var pivot_lr_A_top_right;
var pivot_lid_A_top;
var pivot_dust_flap_top_left;
var pivot_dust_flap_top_right;
var pivot_Top;
var pivot_glue_flap_bottom;
var pivot_lr_lid_A_bottom;
var pivot_lr_A_bottom_left;
var pivot_lr_A_bottom_right;
var pivot_lid_A_bottom;
var pivot_dust_flap_bottom_left;
var pivot_dust_flap_bottom_right;
var pivot_Bottom;
var pivot_All;

var side_A_back_edges;
var side_inside_flap_left_edges;
var side_lr_lid_B_left_edges;
var side_lid_B_left_top_edges;
var side_lid_B_left_bottom_edges;
var side_lid_B_left_edges;
var side_B_left_edges;
var side_inside_flap_right_edges;
var side_lr_lid_B_right_edges;
var side_lid_B_right_top_edges;
var side_lid_B_right_bottom_edges;
var side_lid_B_right_edges;
var side_B_right_edges;
var side_glue_flap_top_edges;
var side_lr_lid_C_top_edges;
var side_lr_C_top_left_edges;
var side_lr_C_top_right_edges;
var side_lid_C_top_edges;
var side_dust_flap_top_left_edges;
var side_dust_flap_top_right_edges;
var side_A_top_edges;
var side_glue_flap_bottom_edges;
var side_lr_lid_C_bottom_edges;
var side_lr_C_bottom_left_edges;
var side_lr_C_bottom_right_edges;
var side_lid_C_bottom_edges;
var side_dust_flap_bottom_left_edges;
var side_dust_flap_bottom_right_edges;
var side_A_bottom_edges;

var pivot_Back_edges;
var pivot_inside_flap_left_edges;
var pivot_lid_B_left_top_edges;
var pivot_lid_B_left_bottom_edges;
var pivot_lr_lid_B_left_edges;
var pivot_lid_B_left_edges;
var pivot_Left_edges;
var pivot_inside_flap_right_edges;
var pivot_lid_B_right_top_edges;
var pivot_lid_B_right_bottom_edges;
var pivot_lr_lid_B_right_edges;
var pivot_lid_B_right_edges;
var pivot_Right_edges;
var pivot_glue_flap_top_edges;
var pivot_lr_lid_A_top_edges;
var pivot_lr_A_top_left_edges;
var pivot_lr_A_top_right_edges;
var pivot_lid_A_top_edges;
var pivot_dust_flap_top_left_edges;
var pivot_dust_flap_top_right_edges;
var pivot_Top_edges;
var pivot_glue_flap_bottom_edges;
var pivot_lr_lid_A_bottom_edges;
var pivot_lr_A_bottom_left_edges;
var pivot_lr_A_bottom_right_edges;
var pivot_lid_A_bottom_edges;
var pivot_dust_flap_bottom_left_edges;
var pivot_dust_flap_bottom_right_edges;
var pivot_Bottom_edges;
var pivot_All_edges;

const init = () => {
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

  /* Region */

  /* สร้างรูปทรง */

  var lid_C_top_bottom_shape = new THREE.Shape();
  lid_C_top_bottom_shape.moveTo(0, 0);
  lid_C_top_bottom_shape.lineTo((A * 0.075) | 0, (C * 0.375) | 0);
  lid_C_top_bottom_shape.lineTo((A * 0.925) | 0, (C * 0.375) | 0);
  lid_C_top_bottom_shape.lineTo(A, 0);

  var lr_C_top_bottom_shape = new THREE.Shape();
  lr_C_top_bottom_shape.moveTo(0, 0);
  lr_C_top_bottom_shape.lineTo(0, C);
  lr_C_top_bottom_shape.lineTo(A * 0.075, C);
  lr_C_top_bottom_shape.lineTo(A * 0.075, (C * 0.375) | 0);

  var lr_lid_C_top_bottom_shape = new THREE.Shape();
  lr_lid_C_top_bottom_shape.moveTo(0, 0);
  lr_lid_C_top_bottom_shape.lineTo(0, C);
  lr_lid_C_top_bottom_shape.lineTo((A * 0.85) | 0, C);
  lr_lid_C_top_bottom_shape.lineTo((A * 0.85) | 0, 0);

  var lid_B_left_right_shape = new THREE.Shape();
  lid_B_left_right_shape.moveTo(0, 0);
  lid_B_left_right_shape.lineTo((B * 0.15) | 0, (C * 0.375) | 0);
  lid_B_left_right_shape.lineTo((B * 0.85) | 0, (C * 0.375) | 0);
  lid_B_left_right_shape.lineTo(B, 0);

  var lr_lid_B_left_right_shape = new THREE.Shape();
  lr_lid_B_left_right_shape.moveTo(0, 0);
  lr_lid_B_left_right_shape.lineTo(0, C);
  lr_lid_B_left_right_shape.lineTo((B * 0.7) | 0, C);
  lr_lid_B_left_right_shape.lineTo((B * 0.7) | 0, 0);

  var lr_B_left_right_shape = new THREE.Shape();
  lr_B_left_right_shape.moveTo(0, 0);
  lr_B_left_right_shape.lineTo(0, (C * 0.125) | 0);
  lr_B_left_right_shape.lineTo((B * 0.4) | 0, (C * 0.125) | 0);
  lr_B_left_right_shape.lineTo((B * 0.4) | 0, 0);

  var inside_flap_shape = new THREE.Shape();
  inside_flap_shape.moveTo(0, 0);
  inside_flap_shape.lineTo(0, (C * 0.3625) | 0);
  inside_flap_shape.lineTo((B * 0.7) | 0, (C * 0.3625) | 0);
  inside_flap_shape.lineTo((B * 0.7) | 0, 0);

  var glue_flap_shape = new THREE.Shape();
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(0, (C * 0.375) | 0);
  glue_flap_shape.lineTo((A * 0.85) | 0, (C * 0.375) | 0);
  glue_flap_shape.lineTo((A * 0.85) | 0, 0);

  var dust_flap_shape = new THREE.Shape();
  dust_flap_shape.moveTo(0, 0);
  dust_flap_shape.lineTo(0, (C * 1.012) | 0);
  dust_flap_shape.lineTo((A * 0.202) | 0, (C * 1.012) | 0);
  dust_flap_shape.lineTo((A * 0.202) | 0, 0);

  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
  var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา

  var lid_C_top_bottom = new THREE.ShapeGeometry(lid_C_top_bottom_shape);
  var lr_C_top_bottom = new THREE.ShapeGeometry(lr_C_top_bottom_shape);
  var lr_lid_C_top_bottom = new THREE.ShapeGeometry(lr_lid_C_top_bottom_shape);
  var lid_B_left_right = new THREE.ShapeGeometry(lid_B_left_right_shape);
  var lr_lid_B_left_right = new THREE.ShapeGeometry(lr_lid_B_left_right_shape);
  var lr_B_left_right = new THREE.ShapeGeometry(lr_B_left_right_shape);

  var inside_flap = new THREE.ShapeGeometry(inside_flap_shape);
  var glue_flap = new THREE.ShapeGeometry(glue_flap_shape);
  var dust_flap = new THREE.ShapeGeometry(dust_flap_shape);

  /* ฉาก */

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;

  side_inside_flap_left = new THREE.Mesh(inside_flap, material);
  side_inside_flap_left.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  side_lr_lid_B_left = new THREE.Mesh(lr_lid_B_left_right, material);
  side_lr_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_lid_B_left_top = new THREE.Mesh(lr_B_left_right, material);
  side_lid_B_left_top.rotation.set(0, Math.PI, 0);

  side_lid_B_left_bottom = new THREE.Mesh(lr_B_left_right, material);
  side_lid_B_left_bottom.rotation.set(Math.PI, Math.PI, 0);

  side_lid_B_left = new THREE.Mesh(lid_B_left_right, material);
  side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);

  side_inside_flap_right = new THREE.Mesh(inside_flap, material);
  side_inside_flap_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  side_lr_lid_B_right = new THREE.Mesh(lr_lid_B_left_right, material);
  side_lr_lid_B_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  side_lid_B_right_top = new THREE.Mesh(lr_B_left_right, material);

  side_lid_B_right_bottom = new THREE.Mesh(lr_B_left_right, material);
  side_lid_B_right_bottom.rotation.set(Math.PI, 0, 0);

  side_lid_B_right = new THREE.Mesh(lid_B_left_right, material);
  side_lid_B_right.rotation.set(0, 0, (Math.PI / 180) * 270);
  side_lid_B_right.position.set(0, B, 0);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);

  side_glue_flap_top = new THREE.Mesh(glue_flap, material);
  side_glue_flap_top.rotation.set(Math.PI, 0, 0);

  side_lr_lid_C_top = new THREE.Mesh(lr_lid_C_top_bottom, material);

  side_lr_C_top_left = new THREE.Mesh(lr_C_top_bottom, material);

  side_lr_C_top_right = new THREE.Mesh(lr_C_top_bottom, material);
  side_lr_C_top_right.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_lr_C_top_right.position.set(A, 0, 0);

  side_lid_C_top = new THREE.Mesh(lid_C_top_bottom, material);

  side_dust_flap_top_left = new THREE.Mesh(dust_flap, material);
  side_dust_flap_top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_dust_flap_top_right = new THREE.Mesh(dust_flap, material);

  side_A_top = new THREE.Mesh(plane_C_side, material);
  side_A_top.position.set(A / 2, C / 2, 0);

  side_glue_flap_bottom = new THREE.Mesh(glue_flap, material);

  side_lr_lid_C_bottom = new THREE.Mesh(lr_lid_C_top_bottom, material);
  side_lr_lid_C_bottom.rotation.set(Math.PI, 0, 0);

  side_lr_C_bottom_left = new THREE.Mesh(lr_C_top_bottom, material);
  side_lr_C_bottom_left.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_lr_C_bottom_right = new THREE.Mesh(lr_C_top_bottom, material);
  side_lr_C_bottom_right.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_lr_C_bottom_right.position.set(A, 0, 0);

  side_lid_C_bottom = new THREE.Mesh(lid_C_top_bottom, material);
  side_lid_C_bottom.rotation.x = (Math.PI / 180) * 180;

  side_dust_flap_bottom_left = new THREE.Mesh(dust_flap, material);
  side_dust_flap_bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  side_dust_flap_bottom_right = new THREE.Mesh(dust_flap, material);
  side_dust_flap_bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_A_bottom = new THREE.Mesh(plane_C_side, material);
  side_A_bottom.position.set(A / 2, -C / 2, 0);

  /* จุดหมุน */

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  pivot_inside_flap_left = new THREE.Object3D();
  pivot_inside_flap_left.add(side_inside_flap_left);
  pivot_inside_flap_left.position.set(-C, 0, 0);

  pivot_lid_B_left_top = new THREE.Object3D();
  pivot_lid_B_left_top.add(side_lid_B_left_top);
  pivot_lid_B_left_top.position.set(0, (B / 1.428) | 0, 0);

  pivot_lid_B_left_bottom = new THREE.Object3D();
  pivot_lid_B_left_bottom.add(side_lid_B_left_bottom);

  pivot_lr_lid_B_left = new THREE.Object3D();
  pivot_lr_lid_B_left.add(
    side_lr_lid_B_left,
    pivot_inside_flap_left,
    pivot_lid_B_left_top,
    pivot_lid_B_left_bottom
  );
  pivot_lr_lid_B_left.position.set((-C * 0.375) | 0, (B / 6.667) | 0, 0);

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, pivot_lr_lid_B_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_lid_B_left);

  pivot_inside_flap_right = new THREE.Object3D();
  pivot_inside_flap_right.add(side_inside_flap_right);
  pivot_inside_flap_right.position.set(C, 0, 0);

  pivot_lid_B_right_top = new THREE.Object3D();
  pivot_lid_B_right_top.add(side_lid_B_right_top);
  pivot_lid_B_right_top.position.set(0, (B / 1.428) | 0, 0);

  pivot_lid_B_right_bottom = new THREE.Object3D();
  pivot_lid_B_right_bottom.add(side_lid_B_right_bottom);

  pivot_lr_lid_B_right = new THREE.Object3D();
  pivot_lr_lid_B_right.add(
    side_lr_lid_B_right,
    pivot_inside_flap_right,
    pivot_lid_B_right_top,
    pivot_lid_B_right_bottom
  );
  pivot_lr_lid_B_right.position.set((C * 0.375) | 0, (B / 6.667) | 0, 0);

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right, pivot_lr_lid_B_right);
  pivot_lid_B_right.position.set(C, 0, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);

  pivot_glue_flap_top = new THREE.Object3D();
  pivot_glue_flap_top.add(side_glue_flap_top);
  pivot_glue_flap_top.position.set(0, C, 0);

  pivot_lr_lid_A_top = new THREE.Object3D();
  pivot_lr_lid_A_top.add(side_lr_lid_C_top, pivot_glue_flap_top);
  pivot_lr_lid_A_top.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

  pivot_lr_A_top_left = new THREE.Object3D();
  pivot_lr_A_top_left.add(side_lr_C_top_left);

  pivot_lr_A_top_right = new THREE.Object3D();
  pivot_lr_A_top_right.add(side_lr_C_top_right);

  pivot_lid_A_top = new THREE.Object3D();
  pivot_lid_A_top.add(
    side_lid_C_top,
    pivot_lr_lid_A_top,
    pivot_lr_A_top_left,
    pivot_lr_A_top_right
  );
  pivot_lid_A_top.position.set(0, C, 0);

  pivot_dust_flap_top_left = new THREE.Object3D();
  pivot_dust_flap_top_left.add(side_dust_flap_top_left);

  pivot_dust_flap_top_right = new THREE.Object3D();
  pivot_dust_flap_top_right.add(side_dust_flap_top_right);
  pivot_dust_flap_top_right.position.set(A, 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    pivot_lid_A_top,
    pivot_dust_flap_top_left,
    pivot_dust_flap_top_right
  );
  pivot_Top.position.set(0, B, 0);

  pivot_glue_flap_bottom = new THREE.Object3D();
  pivot_glue_flap_bottom.add(side_glue_flap_bottom);
  pivot_glue_flap_bottom.position.set(0, -C, 0);

  pivot_lr_lid_A_bottom = new THREE.Object3D();
  pivot_lr_lid_A_bottom.add(side_lr_lid_C_bottom, pivot_glue_flap_bottom);
  pivot_lr_lid_A_bottom.position.set((A * 0.075) | 0, (-C * 0.375) | 0, 0);

  pivot_lr_A_bottom_left = new THREE.Object3D();
  pivot_lr_A_bottom_left.add(side_lr_C_bottom_left);

  pivot_lr_A_bottom_right = new THREE.Object3D();
  pivot_lr_A_bottom_right.add(side_lr_C_bottom_right);

  pivot_lid_A_bottom = new THREE.Object3D();
  pivot_lid_A_bottom.add(
    side_lid_C_bottom,
    pivot_lr_lid_A_bottom,
    pivot_lr_A_bottom_left,
    pivot_lr_A_bottom_right
  );
  pivot_lid_A_bottom.position.set(0, -C, 0);

  pivot_dust_flap_bottom_left = new THREE.Object3D();
  pivot_dust_flap_bottom_left.add(side_dust_flap_bottom_left);

  pivot_dust_flap_bottom_right = new THREE.Object3D();
  pivot_dust_flap_bottom_right.add(side_dust_flap_bottom_right);
  pivot_dust_flap_bottom_right.position.set(A, 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    pivot_lid_A_bottom,
    pivot_dust_flap_bottom_left,
    pivot_dust_flap_bottom_right
  );

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Top, pivot_Bottom);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  /* เซทฉาก */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = B / 2;

  edges = new THREE.EdgesGeometry(inside_flap);
  side_inside_flap_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_inside_flap_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90, 0);

  edges = new THREE.EdgesGeometry(lr_lid_B_left_right);
  side_lr_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_B_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_B_left_right);
  side_lid_B_left_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_top_edges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lr_B_left_right);
  side_lid_B_left_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_bottom_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lid_B_left_right);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(-C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(inside_flap);
  side_inside_flap_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_inside_flap_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_lid_B_left_right);
  side_lr_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_B_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_B_left_right);
  side_lid_B_right_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_B_left_right);
  side_lid_B_right_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_right_bottom_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(lid_B_left_right);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_right_edges.rotation.set(0, 0, (Math.PI / 180) * 270);
  side_lid_B_right_edges.position.set(0, B, 0);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(glue_flap);
  side_glue_flap_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_glue_flap_top_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(lr_lid_C_top_bottom);
  side_lr_lid_C_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_C_top_bottom);
  side_lr_C_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_C_top_bottom);
  side_lr_C_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_C_top_right_edges.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_lr_C_top_right_edges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(lid_C_top_bottom);
  side_lid_C_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_top_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_top_edges.position.set(A / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(glue_flap);
  side_glue_flap_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid_C_top_bottom);
  side_lr_lid_C_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_C_bottom_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(lr_C_top_bottom);
  side_lr_C_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_C_bottom_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lr_C_top_bottom);
  side_lr_C_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_C_bottom_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_lr_C_bottom_right_edges.position.set(A, 0, 0);

  edges = new THREE.EdgesGeometry(lid_C_top_bottom);
  side_lid_C_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_C_bottom_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_bottom_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_bottom_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_bottom_edges.position.set(A / 2, -C / 2, 0);

  /* จุดหมุน */

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);

  pivot_inside_flap_left_edges = new THREE.Object3D();
  pivot_inside_flap_left_edges.add(side_inside_flap_left_edges);
  pivot_inside_flap_left_edges.position.set(-C, 0, 0);

  pivot_lid_B_left_top_edges = new THREE.Object3D();
  pivot_lid_B_left_top_edges.add(side_lid_B_left_top_edges);
  pivot_lid_B_left_top_edges.position.set(0, (B / 1.428) | 0, 0);

  pivot_lid_B_left_bottom_edges = new THREE.Object3D();
  pivot_lid_B_left_bottom_edges.add(side_lid_B_left_bottom_edges);

  pivot_lr_lid_B_left_edges = new THREE.Object3D();
  pivot_lr_lid_B_left_edges.add(
    side_lr_lid_B_left_edges,
    pivot_inside_flap_left_edges,
    pivot_lid_B_left_top_edges,
    pivot_lid_B_left_bottom_edges
  );
  pivot_lr_lid_B_left_edges.position.set((-C * 0.375) | 0, (B / 6.667) | 0, 0);

  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.add(side_lid_B_left_edges, pivot_lr_lid_B_left_edges);
  pivot_lid_B_left_edges.position.set(-C, 0, 0);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_lid_B_left_edges);

  pivot_inside_flap_right_edges = new THREE.Object3D();
  pivot_inside_flap_right_edges.add(side_inside_flap_right_edges);
  pivot_inside_flap_right_edges.position.set(C, 0, 0);

  pivot_lid_B_right_top_edges = new THREE.Object3D();
  pivot_lid_B_right_top_edges.add(side_lid_B_right_top_edges);
  pivot_lid_B_right_top_edges.position.set(0, (B / 1.428) | 0, 0);

  pivot_lid_B_right_bottom_edges = new THREE.Object3D();
  pivot_lid_B_right_bottom_edges.add(side_lid_B_right_bottom_edges);

  pivot_lr_lid_B_right_edges = new THREE.Object3D();
  pivot_lr_lid_B_right_edges.add(
    side_lr_lid_B_right_edges,
    pivot_inside_flap_right_edges,
    pivot_lid_B_right_top_edges,
    pivot_lid_B_right_bottom_edges
  );
  pivot_lr_lid_B_right_edges.position.set((C * 0.375) | 0, (B / 6.667) | 0, 0);

  pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.add(
    side_lid_B_right_edges,
    pivot_lr_lid_B_right_edges
  );
  pivot_lid_B_right_edges.position.set(C, 0, 0);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges, pivot_lid_B_right_edges);
  pivot_Right_edges.position.set(A, 0, 0);

  pivot_glue_flap_top_edges = new THREE.Object3D();
  pivot_glue_flap_top_edges.add(side_glue_flap_top_edges);
  pivot_glue_flap_top_edges.position.set(0, C, 0);

  pivot_lr_lid_A_top_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_edges.add(
    side_lr_lid_C_top_edges,
    pivot_glue_flap_top_edges
  );
  pivot_lr_lid_A_top_edges.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

  pivot_lr_A_top_left_edges = new THREE.Object3D();
  pivot_lr_A_top_left_edges.add(side_lr_C_top_left_edges);

  pivot_lr_A_top_right_edges = new THREE.Object3D();
  pivot_lr_A_top_right_edges.add(side_lr_C_top_right_edges);

  pivot_lid_A_top_edges = new THREE.Object3D();
  pivot_lid_A_top_edges.add(
    side_lid_C_top_edges,
    pivot_lr_lid_A_top_edges,
    pivot_lr_A_top_left_edges,
    pivot_lr_A_top_right_edges
  );
  pivot_lid_A_top_edges.position.set(0, C, 0);

  pivot_dust_flap_top_left_edges = new THREE.Object3D();
  pivot_dust_flap_top_left_edges.add(side_dust_flap_top_left_edges);

  pivot_dust_flap_top_right_edges = new THREE.Object3D();
  pivot_dust_flap_top_right_edges.add(side_dust_flap_top_right_edges);
  pivot_dust_flap_top_right_edges.position.set(A, 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_A_top_edges,
    pivot_lid_A_top_edges,
    pivot_dust_flap_top_left_edges,
    pivot_dust_flap_top_right_edges
  );
  pivot_Top_edges.position.set(0, B, 0);

  pivot_glue_flap_bottom_edges = new THREE.Object3D();
  pivot_glue_flap_bottom_edges.add(side_glue_flap_bottom_edges);
  pivot_glue_flap_bottom_edges.position.set(0, -C, 0);

  pivot_lr_lid_A_bottom_edges = new THREE.Object3D();
  pivot_lr_lid_A_bottom_edges.add(
    side_lr_lid_C_bottom_edges,
    pivot_glue_flap_bottom_edges
  );
  pivot_lr_lid_A_bottom_edges.position.set(
    (A * 0.075) | 0,
    (-C * 0.375) | 0,
    0
  );

  pivot_lr_A_bottom_left_edges = new THREE.Object3D();
  pivot_lr_A_bottom_left_edges.add(side_lr_C_bottom_left_edges);

  pivot_lr_A_bottom_right_edges = new THREE.Object3D();
  pivot_lr_A_bottom_right_edges.add(side_lr_C_bottom_right_edges);

  pivot_lid_A_bottom_edges = new THREE.Object3D();
  pivot_lid_A_bottom_edges.add(
    side_lid_C_bottom_edges,
    pivot_lr_lid_A_bottom_edges,
    pivot_lr_A_bottom_left_edges,
    pivot_lr_A_bottom_right_edges
  );
  pivot_lid_A_bottom_edges.position.set(0, -C, 0);

  pivot_dust_flap_bottom_left_edges = new THREE.Object3D();
  pivot_dust_flap_bottom_left_edges.add(side_dust_flap_bottom_left_edges);

  pivot_dust_flap_bottom_right_edges = new THREE.Object3D();
  pivot_dust_flap_bottom_right_edges.add(side_dust_flap_bottom_right_edges);
  pivot_dust_flap_bottom_right_edges.position.set(A, 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_A_bottom_edges,
    pivot_lid_A_bottom_edges,
    pivot_dust_flap_bottom_left_edges,
    pivot_dust_flap_bottom_right_edges
  );

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Left_edges,
    pivot_Right_edges,
    pivot_Top_edges,
    pivot_Bottom_edges
  );
  scene.add(pivot_All_edges);

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
  pivot_Right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_lid_B_right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_lid_B_right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_lr_lid_B_right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_lr_lid_B_right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_lid_B_right_top.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_right_top_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_right_bottom.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_right_bottom_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_inside_flap_right.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_inside_flap_right_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_Left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_Left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_lid_B_left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_lid_B_left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_lr_lid_B_left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_lr_lid_B_left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_lid_B_left_top.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_left_top_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_left_bottom.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lid_B_left_bottom_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_inside_flap_left.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_inside_flap_left_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Top.rotation.set((-Math.PI / 180) * 90, 0, 0);
  pivot_Top_edges.rotation.set((-Math.PI / 180) * 90, 0, 0);
  pivot_lid_A_top.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lid_A_top_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_top_left.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_top_left_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_top_right.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_top_right_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_lid_A_top.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_lr_lid_A_top_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_glue_flap_top.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_glue_flap_top_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_dust_flap_top_left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_dust_flap_top_left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_dust_flap_top_right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_dust_flap_top_right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Bottom.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Bottom_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_A_bottom.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lid_A_bottom_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_bottom_left.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_bottom_left_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_bottom_right.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_A_bottom_right_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_lid_A_bottom.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_lr_lid_A_bottom_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_glue_flap_bottom.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_glue_flap_bottom_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_dust_flap_bottom_left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_dust_flap_bottom_left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_dust_flap_bottom_right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_dust_flap_bottom_right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
};

// Animate
const rotations1 = () => {
  // ชิ้นงาน
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_bottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_bottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_left.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_right.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_left.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_right.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_right.y = (Math.PI / 180) * 90),
  });

  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_bottom_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_right_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_bottom_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_left_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_right_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_left_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_right_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_right_edges.y = (Math.PI / 180) * 90),
  });
};

// Non - Animate
const rotations2 = () => {
  // ชิ้นงาน
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_right.y = 0),
  });

  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_B_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inside_flap_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_top_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_top_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_A_bottom_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_glue_flap_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_bottom_right_edges.y = 0),
  });
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
  rotations1,
  rotations2,
  updateSize,
};
