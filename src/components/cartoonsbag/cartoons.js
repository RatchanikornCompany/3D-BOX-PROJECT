// import React from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 150;
var B = 60;
var C = 170;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
// var tween;

var side_A_back;
var side_A_back_edges;

var pivot_Back;
var pivot_All;

var pivot_Back_edges;
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
  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: true,
  });

  //spotLight
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(
    (spotLight.position.x = 800),
    (spotLight.position.y = 800),
    (spotLight.position.z = 800)
  );
  spotLight.castShadow = true;
  scene.add(spotLight);

  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 0.5;
  spotLight.shadow.camera.far = 500;
  spotLight.focus = 1;

  // ภาพฉ่าย spotLight
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  //spotLight2
  var spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.position.set(
    (spotLight2.position.x = -800),
    (spotLight2.position.y = 800),
    (spotLight2.position.z = 800)
  );
  spotLight2.castShadow = true;
  scene.add(spotLight2);

  spotLight2.shadow.mapSize.width = 512;
  spotLight2.shadow.mapSize.height = 512;
  spotLight2.shadow.camera.near = 0.5;
  spotLight2.shadow.camera.far = 500;
  spotLight2.focus = 1;

  // ภาพฉ่าย spotLight2
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);

  /* ********** Model Created ********** */

  //   // ฝาเสียบ
  //   var lid_shape = new THREE.Shape();
  //   lid_shape.moveTo(0, 0);
  //   lid_shape.lineTo(A, 0);
  //   lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  //   lid_shape.lineTo(A / 10, -P);
  //   lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  //   var lid = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  //   // ฝาเสียบกาว
  //   var glue_Lid_shape = new THREE.Shape();
  //   glue_Lid_shape.moveTo(0, 0);
  //   glue_Lid_shape.lineTo(C, 0);
  //   glue_Lid_shape.moveTo(0, 0);
  //   glue_Lid_shape.lineTo(C, 0);
  //   glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  //   glue_Lid_shape.lineTo(C / 10, -P);
  //   glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  //   var glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape);

  //   // ลิ้นกันฝุ่น
  //   var lr_lid_shape = new THREE.Shape();
  //   lr_lid_shape.moveTo(0, 0);
  //   // Front ....................................................
  //   lr_lid_shape.lineTo(0, (leng_lr_lib * 0.1) | 0);
  //   lr_lid_shape.lineTo((B * 0.05) | 0, (leng_lr_lib * 0.15) | 0);
  //   lr_lid_shape.lineTo((B * 0.15) | 0, (leng_lr_lib * 0.9) | 0);
  //   // Center ...................................................
  //   lr_lid_shape.lineTo((B * 0.2) | 0, leng_lr_lib);
  //   lr_lid_shape.lineTo((B * 0.981) | 0, leng_lr_lib);
  //   // Rear .....................................................
  //   lr_lid_shape.lineTo((B * 0.981) | 0, (leng_lr_lib * 0.1) | 0);
  //   lr_lid_shape.lineTo(B, 0);

  //   var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  //   // ลิ้นฝาล็อค
  //   var lr_Bottom_shape = new THREE.Shape();
  //   lr_Bottom_shape.moveTo(0, 0);
  //   // Front ....................................................
  //   lr_Bottom_shape.lineTo(0, (B * 0.27) | 0);
  //   // Center ...................................................
  //   lr_Bottom_shape.lineTo((A * 0.962) | 0, (B * 0.27) | 0);
  //   // Rear .....................................................
  //   lr_Bottom_shape.lineTo((A * 0.962) | 0, 0);

  //   var lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค

  //   // *ฝาล็อค
  //   var lr_Lock_shape = new THREE.Shape();
  //   lr_Lock_shape.moveTo(0, 0);
  //   // Front ....................................................
  //   lr_Lock_shape.lineTo(0, (B * 0.962) | 0);
  //   // Center ...................................................
  //   lr_Lock_shape.lineTo((A * 0.962) | 0, (B * 0.962) | 0);
  //   // Rear .....................................................
  //   lr_Lock_shape.lineTo((A * 0.962) | 0, 0);

  //   var hole_Lock_shape = new THREE.Path();
  //   hole_Lock_shape.moveTo((A * 0.097) | 0, (B * 0.481) | 0);
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.097) | 0,
  //     (B * 0.481) | 0,
  //     (A * 0.097) | 0,
  //     (B * 0.097) | 0,
  //     (A * 0.481) | 0,
  //     (B * 0.097) | 0
  //   );
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.481) | 0,
  //     (B * 0.097) | 0,
  //     (A * 0.866) | 0,
  //     (B * 0.097) | 0,
  //     (A * 0.866) | 0,
  //     (B * 0.481) | 0
  //   );
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.866) | 0,
  //     (B * 0.481) | 0,
  //     (A * 0.866) | 0,
  //     (B * 0.866) | 0,
  //     (A * 0.481) | 0,
  //     (B * 0.866) | 0
  //   );
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.481) | 0,
  //     (B * 0.866) | 0,
  //     (A * 0.097) | 0,
  //     (B * 0.866) | 0,
  //     (A * 0.097) | 0,
  //     (B * 0.481) | 0
  //   );
  //   lr_Lock_shape.holes.push(hole_Lock_shape);

  //   var lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค

  //   // ลิ้นกันฝุ่นฝาล็อค
  //   var lr_Lid_lock_shape = new THREE.Shape();
  //   lr_Lid_lock_shape.moveTo(0, 0);
  //   // Front ....................................................
  //   lr_Lid_lock_shape.lineTo((B * 0.2) | 0, (leng_lr_lib * 0.897) | 0);
  //   // Center ...................................................
  //   lr_Lid_lock_shape.lineTo((B * 0.923) | 0, (leng_lr_lib * 0.897) | 0);
  //   // Rear .....................................................
  //   lr_Lid_lock_shape.lineTo((B * 0.962) | 0, 0);

  //   var lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค

  //   // ตัวเสียบฝาล็อคล่าง
  //   var lr_Bottom_lock_shape = new THREE.Shape();
  //   lr_Bottom_lock_shape.moveTo(0, 0);
  //   // Front ....................................................
  //   lr_Bottom_lock_shape.lineTo((A * 0.1) | 0, (leng_lr_lib * 0.897) | 0);
  //   // Center ...................................................
  //   lr_Bottom_lock_shape.lineTo((A * 0.87) | 0, (leng_lr_lib * 0.897) | 0);
  //   // Rear .....................................................
  //   lr_Bottom_lock_shape.lineTo((A * 0.967) | 0, 0);

  //   var lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคล่าง

  /* ********** Model Created ********** */

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา

  // ฝาเสียบบน

  var lid_Shape = new THREE.Shape();
  lid_Shape.moveTo(0, 0);
  lid_Shape.lineTo(5, 90);
  lid_Shape.lineTo(165, 90);
  lid_Shape.lineTo(170, 0);

  var lid = new THREE.ShapeGeometry(lid_Shape); // ฝาเสียบบน

  var side_front_A_top = new THREE.Mesh(lid, material);
  side_front_A_top.position.x = -A;
  side_front_A_top.castShadow = true;
  side_front_A_top.receiveShadow = true;

  scene.add(side_front_A_top);

  // เซทฉาก

  // side_A_back

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = C / 2;
  side_A_back.castShadow = true;
  side_A_back.receiveShadow = true;

  var side_A_left = new THREE.Mesh(plane_B_side, material);
  side_A_left.position.x = -B / 2;
  side_A_left.position.y = C / 2;
  side_A_left.castShadow = true;
  side_A_left.receiveShadow = true;

  var side_A_right = new THREE.Mesh(plane_B_side, material);
  side_A_right.position.x = B / 2;
  side_A_right.position.y = C / 2;
  side_A_right.castShadow = true;
  side_A_right.receiveShadow = true;

  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = -A / 2;
  side_A_front.position.y = C / 2;

  // สร้างจุดหมุน

  // pivot_Back

  var pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  var pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_A_left);

  var pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_A_right);
  pivot_Right.position.set(A, 0, 0);

  var pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front);
  pivot_Front.position.set(-B, 0, 0);

  /* pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Front);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  // เซทฉาก

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = C / 2;

  // สร้างจุดหมุน

  // pivot_Back

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);

  /* pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Back_edges);
  //   scene.add(pivot_All_edges);

  /* ********** Edges - เส้น ********** */

  //Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("webgl").append(renderer.domElement);

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

// const rotations1 = () => {
//   // ชิ้นงาน

//   // pivot_Left

//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_d.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_d.x = (Math.PI / 180) * 90),
//   });

//   // pivot_Right

//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_d.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_d.x = (Math.PI / 180) * 90),
//   });

//   // pivot_Front

//   tween = gsap.timeline();
//   tween.to(pivot_Front.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Front.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue_lid.y = -(Math.PI / 180) * 90),
//   });

//   // pivot_Top @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_top.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_top.x = -(Math.PI / 180) * 180),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Top_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Top_lid.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lock.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lock.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_left.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_right.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lid.x = -(Math.PI / 180) * 90),
//   });

//   // pivot_Bottom @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom.x = (Math.PI / 180) * 180),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Bottom_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Bottom_lid.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lock.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lock.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_left.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_right.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lid.x = (Math.PI / 180) * 90),
//   });

//   // เส้น

//   // pivot_Left

//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_d_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 90),
//   });

//   // pivot_Right

//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_d_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 90),
//   });

//   // pivot_Front

//   tween = gsap.timeline();
//   tween.to(pivot_Front_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Front_edges.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 90),
//   });

//   // pivot_Top @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_top_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_top_edges.x = -(Math.PI / 180) * 180),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Top_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Top_lid_edges.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lock_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lock_edges.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_left_edges.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_right_edges.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lid_edges.x = -(Math.PI / 180) * 90),
//   });

//   // pivot_Bottom @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_edges.x = (Math.PI / 180) * 180),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Bottom_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Bottom_lid_edges.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lock_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lock_edges.x = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_left_edges.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_right_edges.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_edges.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lid_edges.x = (Math.PI / 180) * 90),
//   });
// };

// const rotations2 = () => {
//   // ชิ้นงาน

//   // pivot_Left

//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_d.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_d.x = 0),
//   });

//   // pivot_Right

//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_d.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_d.x = 0),
//   });

//   // pivot_Front

//   tween = gsap.timeline();
//   tween.to(pivot_Front.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Front.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue_lid.y = 0),
//   });

//   // pivot_Top @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_top.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_top.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Top_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Top_lid.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lock.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lock.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_left.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_right.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lid.x = 0),
//   });

//   // pivot_Bottom @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Bottom_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Bottom_lid.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lock.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lock.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_left.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_right.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lid.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lid.x = 0),
//   });

//   // ชิ้นงาน

//   // pivot_Left

//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_lid_d_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_lid_d_edges.x = 0),
//   });

//   // pivot_Right

//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_lid_d_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_lid_d_edges.x = 0),
//   });

//   // pivot_Front

//   tween = gsap.timeline();
//   tween.to(pivot_Front_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Front_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue_lid_edges.y = 0),
//   });

//   // pivot_Top @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_top_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_top_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Top_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Top_lid_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lock_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lock_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_left_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Top_right_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Top_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Top_lid_edges.x = 0),
//   });

//   // pivot_Bottom @ Front

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_lock_Bottom_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_lock_Bottom_lid_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lock_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lock_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_left_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Bottom_right_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Bottom_lid_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Bottom_lid_edges.x = 0),
//   });
// };

const updateSize = (a, b, c, p, ll) => {
  A = a;
  B = b;
  C = c;
  P = p;
  leng_lr_lib = ll;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

const render = () => {
  renderer.render(scene, camera);
  // pivot_All.rotation.y += Math.PI / 360;
  // pivot_All_edges.rotation.y += Math.PI / 360;
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  //   rotations1,
  //   rotations2,
  updateSize,
};
