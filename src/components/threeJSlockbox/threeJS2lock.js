// import React from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 175;
var B = 52;
var C = 52;
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
  // glue_Lid_shape.moveTo(0, 0);
  // glue_Lid_shape.lineTo(C, 0);
  // glue_Lid_shape.moveTo(0, 0);
  // glue_Lid_shape.lineTo(C, 0);
  // glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  // glue_Lid_shape.lineTo(C / 10, -P);
  // glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape);

  // ลิ้นกันฝุ่น
  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  // // Front ....................................................
  lr_lid_shape.lineTo(0, 1);
  lr_lid_shape.lineTo(2, 2);
  lr_lid_shape.bezierCurveTo(7, 14, 0, 26, 25, 26);
  // Center ...................................................
  lr_lid_shape.lineTo(10, 26);
  lr_lid_shape.lineTo(51, 26);
  // Rear .....................................................
  lr_lid_shape.lineTo(51, 1);
  lr_lid_shape.lineTo(52, 0);

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  // ลิ้นกันฝุ่น
  var lr_lid_d_shape = new THREE.Shape();
  lr_lid_d_shape.moveTo(0, 0);
  // // Front ....................................................
  lr_lid_d_shape.lineTo(0, 1);
  lr_lid_d_shape.lineTo(2, 2);
  lr_lid_d_shape.bezierCurveTo(7, 14, 0, 26, 51, 26);
  // Center ...................................................
  lr_lid_d_shape.lineTo(10, 26);
  lr_lid_d_shape.lineTo(51, 26);
  // Rear .....................................................
  lr_lid_d_shape.lineTo(51, 1);
  lr_lid_d_shape.lineTo(52, 0);

  var lr_lid_d = new THREE.ShapeGeometry(lr_lid_d_shape); // ลิ้นกันฝุ่นล่าง

  // ลิ้นฝาล็อค
  var lr_Bottom_shape = new THREE.Shape();
  // Front ....................................................
  lr_Bottom_shape.lineTo(0, (B * 0.27) | 0);
  // Center ...................................................
  lr_Bottom_shape.lineTo((A * 0.989) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lr_Bottom_shape.lineTo((A * 0.989) | 0, 0);

  var lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค

  // *ฝาล็อค
  var lr_Lock_shape = new THREE.Shape();
  lr_Lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo(0, 86);
  // Center ...................................................
  lr_Lock_shape.lineTo(173, 86);
  // Rear .....................................................
  lr_Lock_shape.lineTo(173, 0);

  // lr_Lock_shape.moveTo(0, 0);
  // // Front ....................................................
  // lr_Lock_shape.lineTo(0, (B * 0.962) | 0);
  // // Center ...................................................
  // lr_Lock_shape.lineTo((A * 0.962) | 0, (B * 0.962) | 0);
  // // Rear .....................................................
  // lr_Lock_shape.lineTo((A * 0.962) | 0, 0);

  var hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo(5, 43);
  hole_Lock_shape.bezierCurveTo(5, 43, 5, 5, 43, 5);
  hole_Lock_shape.bezierCurveTo(43, 5, 82, 5, 82, 43);
  hole_Lock_shape.bezierCurveTo(82, 43, 82, 82, 43, 82);
  hole_Lock_shape.bezierCurveTo(43, 82, 5, 82, 5, 43);
  lr_Lock_shape.holes.push(hole_Lock_shape);

  var hole_Lock_shape2 = new THREE.Path();
  hole_Lock_shape2.moveTo(92, 43);
  hole_Lock_shape2.bezierCurveTo(92, 43, 92, 5, 130, 5);
  hole_Lock_shape2.bezierCurveTo(130, 5, 168, 5, 168, 43);
  hole_Lock_shape2.bezierCurveTo(168, 43, 168, 82, 130, 82);
  hole_Lock_shape2.bezierCurveTo(130, 82, 92, 82, 92, 43);
  lr_Lock_shape.holes.push(hole_Lock_shape2);

  var lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค

  // ลิ้นกันฝุ่นฝาล็อค
  var lr_Lid_lock_shape = new THREE.Shape();
  lr_Lid_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo((B * 0.2) | 0, (leng_lr_lib * 0.27) | 0);
  // Center ...................................................
  lr_Lid_lock_shape.lineTo((B * 1.616) | 0, (leng_lr_lib * 0.27) | 0);
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo((B * 1.654) | 0, 0);

  var lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค

  // ตัวเสียบฝาล็อคล่าง
  var lr_Bottom_lock_shape = new THREE.Shape();
  // lr_Bottom_lock_shape.moveTo(0, 0);
  // // Front ....................................................
  // lr_Bottom_lock_shape.lineTo((A * 0.1) | 0, (leng_lr_lib * 0.897) | 0);
  // // Center ...................................................
  // lr_Bottom_lock_shape.lineTo((A * 0.87) | 0, (leng_lr_lib * 0.897) | 0);
  // // Rear .....................................................
  // lr_Bottom_lock_shape.lineTo((A * 0.967) | 0, 0);

  var lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคล่าง

  /* ********** Model Created ********** */

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา

  // เซทฉาก

  // side_A_back

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  var side_A_lid_bottom = new THREE.Mesh(lid, material);
  side_A_lid_bottom.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 180,
    0
  );

  var side_A_bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_A_bottom.position.x = -A / 2;
  side_A_bottom.position.y = B / 2;

  // side_A_front

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;

  var side_A_lid_top = new THREE.Mesh(lid, material);
  side_A_lid_top.rotation.set((Math.PI / 180) * 180, 0, 0);

  var side_Lock = new THREE.Mesh(lr_Lock, material);
  side_Lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  var side_A_top = new THREE.Mesh(plane_Top_bottom, material);
  side_A_top.position.x = A / 2;
  side_A_top.position.y = B / 2;

  var side_Bottom_lock = new THREE.Mesh(lr_Bottom, material);
  side_Bottom_lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  var side_lr_Lid_lock_left = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Lid_lock_left.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  var side_lr_Lid_lock_right = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Lid_lock_right.rotation.set(0, 0, -(Math.PI / 180) * 90);

  // side_B_left

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;

  var side_Left_lid = new THREE.Mesh(lr_lid, material);
  side_Left_lid.rotation.set(0, (Math.PI / 180) * 180, 0);

  var side_Left_lid_d = new THREE.Mesh(lr_lid_d, material);
  side_Left_lid_d.position.x = -B;
  side_Left_lid_d.rotation.set((Math.PI / 180) * 180, 0, 0);

  // side_B_right

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  var side_Right_lid = new THREE.Mesh(lr_lid, material);

  var side_Right_lid_d = new THREE.Mesh(lr_lid_d, material);
  side_Right_lid_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  // สร้างจุดหมุน

  // pivot_Back

  var pivot_A_lid_bottom = new THREE.Object3D();
  pivot_A_lid_bottom.add(side_A_lid_bottom);

  var pivot_A_bottom = new THREE.Object3D();
  pivot_A_bottom.add(side_A_bottom, pivot_A_lid_bottom);
  pivot_A_bottom.position.set(0, -B, 0);

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_A_bottom);

  // pivot_Front

  var pivot_A_lid_top = new THREE.Object3D();
  pivot_A_lid_top.add(side_A_lid_top);
  pivot_A_lid_top.position.set(0, B, 0);

  var pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_A_lid_top);
  pivot_A_top.position.set(0, C, 0);

  var pivot_lr_Lid_lock_left = new THREE.Object3D();
  pivot_lr_Lid_lock_left.add(side_lr_Lid_lock_left);

  var pivot_lr_Lid_lock_right = new THREE.Object3D();
  pivot_lr_Lid_lock_right.add(side_lr_Lid_lock_right);
  pivot_lr_Lid_lock_right.position.set((A * 0.994) | 0, 0, 0);

  var pivot_Lock = new THREE.Object3D();
  pivot_Lock.add(side_Lock, pivot_lr_Lid_lock_left, pivot_lr_Lid_lock_right);
  pivot_Lock.position.set(0, -(B * 0.27) | 0, 0);

  var pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock, pivot_Lock);
  pivot_Bottom_lock.position.set((A / 175) | 0, 0, 0);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_A_top, pivot_Bottom_lock);
  pivot_Front.position.set(B, 0, 0);

  // pivot_Left

  var pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_Left_lid);
  pivot_Left_lid.position.set(0, C, 0);

  var pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_Left_lid_d);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);
  pivot_Left.position.set(-A, 0, 0);

  // pivot_Right

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_Right_lid);
  pivot_Right_lid.position.set(0, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_Right_lid_d);
  pivot_Right_lid_d.position.set(B, 0, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);

  /* pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  // เซทฉาก

  // สร้างจุดหมุน

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
