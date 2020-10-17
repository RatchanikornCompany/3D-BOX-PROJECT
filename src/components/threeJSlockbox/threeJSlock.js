// import React from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 52;
var B = 52;
var C = 175;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight / 1.2;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_back;
var side_Top;
var side_Top_lid;
var side_Bottom;
var side_Lock_lid;
var side_lr_Left_lock;
var side_lr_Right_lock;
var side_Bottom_lock;
var side_B_left;
var side_lr_Lid_left;
var side_lr_Lid_left_d;
var side_B_right;
var side_lr_Lid_right;
var side_lr_Lid_right_d;
var side_A_front;
var side_Glue_lid;
var side_Lid_front_d;
var side_Lid;

var side_A_back_edges;
var side_Top_edges;
var side_Top_lid_edges;
var side_Bottom_edges;
var side_Lock_lid_edges;
var side_lr_Left_lock_edges;
var side_lr_Right_lock_edges;
var side_Bottom_lock_edges;
var side_B_left_edges;
var side_lr_Lid_left_edges;
var side_lr_Lid_left_d_edges;
var side_B_right_edges;
var side_lr_Lid_right_edges;
var side_lr_Lid_right_d_edges;
var side_A_front_edges;
var side_Glue_lid_edges;
var side_Lid_front_d_edges;
var side_Lid_edges;

var pivot_Top_lid;
var pivot_Top;
var pivot_Back;
var pivot_Front_lid;
var pivot_Front_lid_d;
var pivot_Glue_lid;
var pivot_Front;
var pivot_Right_lid;
var pivot_Right_lid_d;
var pivot_Right;
var pivot_Left_lid;
var pivot_Left_lid_d;
var pivot_Left;
var pivot_Bottom_left;
var pivot_Bottom_right;
var pivot_Bottom_lock;
var pivot_Lock_lid;
var pivot_Bottom;
var pivot_All;

var pivot_Top_lid_edges;
var pivot_Top_edges;
var pivot_Back_edges;
var pivot_Front_lid_edges;
var pivot_Front_lid_d_edges;
var pivot_Glue_lid_edges;
var pivot_Front_edges;
var pivot_Right_lid_edges;
var pivot_Right_lid_d_edges;
var pivot_Right_edges;
var pivot_Left_lid_edges;
var pivot_Left_lid_d_edges;
var pivot_Left_edges;
var pivot_Bottom_left_edges;
var pivot_Bottom_right_edges;
var pivot_Bottom_lock_edges;
var pivot_Lock_lid_edges;
var pivot_Bottom_edges;
var pivot_All_edges;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

  //สร้างแกนหมุน
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  //เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
  const material = new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
    side: THREE.DoubleSide,
    wireframe: true,
  });

  /* ********** Model Created ********** */

  // ฝาเสียบ
  var lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_shape.lineTo(A / 10, -P);
  lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var lid = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  // ฝาเสียบกาว
  var glue_Lid_shape = new THREE.Shape();
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_Lid_shape.lineTo(C / 10, -P);
  glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape);

  // ลิ้นกันฝุ่น
  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (leng_lr_lib * 0.1) | 0);
  lr_lid_shape.lineTo((B * 0.05) | 0, (leng_lr_lib * 0.15) | 0);
  lr_lid_shape.lineTo((B * 0.15) | 0, (leng_lr_lib * 0.9) | 0);
  // Center ...................................................
  lr_lid_shape.lineTo((B * 0.2) | 0, leng_lr_lib);
  lr_lid_shape.lineTo((B * 0.981) | 0, leng_lr_lib);
  // Rear .....................................................
  lr_lid_shape.lineTo((B * 0.981) | 0, (leng_lr_lib * 0.1) | 0);
  lr_lid_shape.lineTo(B, 0);

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  // ลิ้นฝาล็อค
  var lr_Bottom_shape = new THREE.Shape();
  lr_Bottom_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Bottom_shape.lineTo(0, (B * 0.27) | 0);
  // Center ...................................................
  lr_Bottom_shape.lineTo((A * 0.962) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lr_Bottom_shape.lineTo((A * 0.962) | 0, 0);

  var lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค

  // *ฝาล็อค
  var lr_Lock_shape = new THREE.Shape();
  lr_Lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo(0, (B * 0.962) | 0);
  // Center ...................................................
  lr_Lock_shape.lineTo((A * 0.962) | 0, (B * 0.962) | 0);
  // Rear .....................................................
  lr_Lock_shape.lineTo((A * 0.962) | 0, 0);

  var hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo(5, 25);
  hole_Lock_shape.bezierCurveTo(5, 25, 5, 5, 25, 5);
  hole_Lock_shape.bezierCurveTo(25, 5, 45, 5, 45, 25);
  hole_Lock_shape.bezierCurveTo(45, 25, 45, 45, 25, 45);
  hole_Lock_shape.bezierCurveTo(25, 45, 5, 45, 5, 25);
  lr_Lock_shape.holes.push(hole_Lock_shape);

  var lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค

  // ลิ้นกันฝุ่นฝาล็อค
  var lr_Lid_lock_shape = new THREE.Shape();
  lr_Lid_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo((B * 0.2) | 0, leng_lr_lib);
  // Center ...................................................
  lr_Lid_lock_shape.lineTo((B * 0.923) | 0, leng_lr_lib);
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo((B * 0.962) | 0, 0);

  var lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค

  // ตัวเสียบฝาล็อคล่าง
  var lr_Bottom_lock_shape = new THREE.Shape();
  lr_Bottom_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.1) | 0, leng_lr_lib);
  // Center ...................................................
  lr_Bottom_lock_shape.lineTo((A * 0.87) | 0, leng_lr_lib);
  // Rear .....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.967) | 0, 0);

  var lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคล่าง

  /* ********** Model Created ********** */

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา

  // เซทฉาก

  // side_A_back

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = C / 2;

  // side_A_top

  side_Top = new THREE.Mesh(plane_Top_bottom, material);
  side_Top.position.x = A / 2;
  side_Top.position.y = B / 2;

  side_Top_lid = new THREE.Mesh(lid, material);
  side_Top_lid.rotation.set((Math.PI / 180) * 180, 0, 0);

  // side_A_bottom

  side_Bottom = new THREE.Mesh(lr_Bottom, material);
  side_Bottom.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_Bottom.position.set((A * 0.02) | 0, 0, 0);

  side_Lock_lid = new THREE.Mesh(lr_Lock, material);
  side_Lock_lid.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_Lock_lid.position.set((A * 0.02) | 0, 0, 0);

  side_lr_Left_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Left_lock.rotation.set(
    0,
    (Math.PI / 180) * 180,
    -(Math.PI / 180) * 90
  );

  side_lr_Right_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Right_lock.rotation.set(0, 0, -(Math.PI / 180) * 90);

  side_Bottom_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_Bottom_lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  // side_B_left

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;

  side_lr_Lid_left = new THREE.Mesh(lr_lid, material);

  side_lr_Lid_left_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_left_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  // side_B_right

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  side_lr_Lid_right = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_lr_Lid_right_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right_d.rotation.set((Math.PI / 180) * 180, 0, 0);

  //side_A_front

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.add(glue_Lid);
  side_Glue_lid.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_Lid_front_d = new THREE.Mesh(plane_Top_bottom, material);
  side_Lid_front_d.position.x = A / 2;
  side_Lid_front_d.position.y = -B / 2;

  side_Lid = new THREE.Mesh(lid, material);

  // สร้างจุดหมุน

  // pivot_Top

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid);
  pivot_Top_lid.position.set(0, B, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, pivot_Top_lid);
  pivot_Top.position.set(0, C, 0);

  // pivot_Back

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top);

  // pivot_Right

  pivot_Front_lid = new THREE.Object3D();
  pivot_Front_lid.add(side_Lid);
  pivot_Front_lid.position.set(0, -B, 0);

  pivot_Front_lid_d = new THREE.Object3D();
  pivot_Front_lid_d.add(side_Lid_front_d, pivot_Front_lid);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.set(A, 0, 0);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Front_lid_d, pivot_Glue_lid);
  pivot_Front.position.set(B, 0, 0);

  // pivot_Right

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right);
  pivot_Right_lid.position.set(B, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_Front,
    pivot_Right_lid,
    pivot_Right_lid_d
  );
  pivot_Right.position.set(A, 0, 0);

  // pivot_Left

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left);
  pivot_Left_lid.position.set(-B, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);

  // pivot_Bottom

  pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock);
  pivot_Bottom_left.position.set((A * 0.02) | 0, 0, 0);

  pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock);
  pivot_Bottom_right.position.set((A * 0.981) | 0, 0, 0);

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock);
  pivot_Bottom_lock.position.set((A * 0.02) | 0, (-B * 0.962) | 0, 0);

  pivot_Lock_lid = new THREE.Object3D();
  pivot_Lock_lid.add(
    side_Lock_lid,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_Lock_lid.position.set(0, (-B * 0.27) | 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, pivot_Lock_lid);

  /* pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Right, pivot_Left, pivot_Bottom);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  // เซทฉาก

  // side_A_back

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = C / 2;

  // side_A_top

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_edges.position.x = A / 2;
  side_Top_edges.position.y = B / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_lid_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  // side_A_bottom

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_Bottom_edges.position.set((A * 0.02) | 0, 0, 0);

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lock_lid_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_Lock_lid_edges.position.set((A * 0.02) | 0, 0, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Left_lock_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    -(Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Right_lock_edges.rotation.set(0, 0, -(Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_lock_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  // side_B_left

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.x = -B / 2;
  side_B_left_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_left_d_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  // side_B_right

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.x = B / 2;
  side_B_right_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_right_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_right_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  //side_A_front

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_lid_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Lid_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_front_d_edges.position.x = A / 2;
  side_Lid_front_d_edges.position.y = -B / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  // สร้างจุดหมุน

  // pivot_Top

  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.add(side_Top_lid_edges);
  pivot_Top_lid_edges.position.set(0, B, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_Top, pivot_Top_lid_edges);
  pivot_Top_edges.position.set(0, C, 0);

  // pivot_Back

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Top_edges);

  // pivot_Right

  pivot_Front_lid_edges = new THREE.Object3D();
  pivot_Front_lid_edges.add(side_Lid_edges);
  pivot_Front_lid_edges.position.set(0, -B, 0);

  pivot_Front_lid_d_edges = new THREE.Object3D();
  pivot_Front_lid_d_edges.add(side_Lid_front_d_edges, pivot_Front_lid_edges);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(A, 0, 0);

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Front_lid_d_edges,
    pivot_Glue_lid_edges
  );
  pivot_Front_edges.position.set(B, 0, 0);

  // pivot_Right

  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_lr_Lid_right_edges);
  pivot_Right_lid_edges.position.set(B, C, 0);

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_lr_Lid_right_d_edges);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Front_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Right_edges.position.set(A, 0, 0);

  // pivot_Left

  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_lr_Lid_left_edges);
  pivot_Left_lid_edges.position.set(-B, C, 0);

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_lr_Lid_left_d_edges);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );

  // pivot_Bottom

  pivot_Bottom_left_edges = new THREE.Object3D();
  pivot_Bottom_left_edges.add(side_lr_Left_lock_edges);
  pivot_Bottom_left_edges.position.set((A * 0.02) | 0, 0, 0);

  pivot_Bottom_right_edges = new THREE.Object3D();
  pivot_Bottom_right_edges.add(side_lr_Right_lock_edges);
  pivot_Bottom_right_edges.position.set((A * 0.981) | 0, 0, 0);

  pivot_Bottom_lock_edges = new THREE.Object3D();
  pivot_Bottom_lock_edges.add(side_Bottom_lock_edges);
  pivot_Bottom_lock_edges.position.set((A * 0.02) | 0, (-B * 0.962) | 0, 0);

  pivot_Lock_lid_edges = new THREE.Object3D();
  pivot_Lock_lid_edges.add(
    side_Lock_lid_edges,
    pivot_Bottom_left_edges,
    pivot_Bottom_right_edges,
    pivot_Bottom_lock_edges
  );
  pivot_Lock_lid_edges.position.set(0, (-B * 0.27) | 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges, pivot_Lock_lid_edges);

  /* pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Right_edges,
    pivot_Left_edges,
    pivot_Bottom_edges
  );
  scene.add(pivot_All_edges);

  /* ********** Edges - เส้น ********** */

  //Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById("webgl").append(renderer.domElement);

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

  // setInterval(rotations(), 5000);
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

const rotations = () => {
  // pivot_Right
  pivot_Right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Right_lid.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Right_lid_d.rotation.set((Math.PI / 180) * 90, 0, 0);
  // pivot_Left
  pivot_Left.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_Left_lid.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Left_lid_d.rotation.set((Math.PI / 180) * 90, 0, 0);
  // pivot_Front
  pivot_Front.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Front_lid_d.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Front_lid.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Glue_lid.rotation.set(0, (Math.PI / 180) * 90, 0);
  // pivot_Top
  pivot_Top.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Top_lid.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  // pivot_Bottom
  pivot_Bottom.rotation.set((Math.PI / 180) * 180, 0, 0);
  pivot_Bottom_left.rotation.set(0, (-Math.PI / 180) * 90, 0);
  pivot_Bottom_right.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Bottom_lock.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Lock_lid.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  /* edges */
  // pivot_Right
  pivot_Right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Right_lid_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Right_lid_d_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  // pivot_Left
  pivot_Left_edges.rotation.set(0, -(Math.PI / 180) * 90, 0);
  pivot_Left_lid_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Left_lid_d_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  // pivot_Front
  pivot_Front_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Front_lid_d_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Front_lid_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Glue_lid_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  // pivot_Top
  pivot_Top_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  pivot_Top_lid_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
  // pivot_Bottom
  pivot_Bottom_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  pivot_Bottom_left_edges.rotation.set(0, (-Math.PI / 180) * 90, 0);
  pivot_Bottom_right_edges.rotation.set(0, (Math.PI / 180) * 90, 0);
  pivot_Bottom_lock_edges.rotation.set((Math.PI / 180) * 90, 0, 0);
  pivot_Lock_lid_edges.rotation.set(-(Math.PI / 180) * 90, 0, 0);
};

// Animate
const rotations1 = () => {
  // ชิ้นงาน

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 90),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 90),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_d.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = (Math.PI / 180) * 90),
  });

  // pivot_Top

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = -(Math.PI / 180) * 90),
  });

  // pivot_Bottom

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left.y = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lock_lid.x = -(Math.PI / 180) * 90),
  });

  /* edges */

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = (Math.PI / 180) * 90),
  });

  // pivot_Top

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = -(Math.PI / 180) * 90),
  });

  // pivot_Bottom

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left_edges.y = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lock_lid_edges.x = -(Math.PI / 180) * 90),
  });
};

// Non-Animate
const rotations2 = () => {
  // ชิ้นงาน

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = 0),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = 0),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  // pivot_Top

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = 0),
  });

  // pivot_Bottom

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lock_lid.x = 0),
  });

  /* edges */

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = 0),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = 0),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_d_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Front_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = 0),
  });

  // pivot_Top

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = 0),
  });

  // pivot_Bottom

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lock_lid_edges.x = 0),
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
