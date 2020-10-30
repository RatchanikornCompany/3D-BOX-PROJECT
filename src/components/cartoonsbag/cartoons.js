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
var tween;

var side_A_front;
var side_Glue_lid;
var side_B_left;
var side_B_left_l;
var side_B_right;
var side_B_right_r;
var side_A_back;
var side_back_A_top;

var pivot_Front;
var pivot_back_A_top;
var pivot_Glue_lid;
var pivot_Back;
var pivot_Left_l;
var pivot_Left;
var pivot_Right_r;
var pivot_Right;
var pivot_All;

var side_A_front_edges;
var side_Glue_lid_edges;
var side_B_left_edges;
var side_B_left_l_edges;
var side_B_right_edges;
var side_B_right_r_edges;
var side_A_back_edges;
var side_back_A_top_edges;

var pivot_Front_edges;
var pivot_back_A_top_edges;
var pivot_Glue_lid_edges;
var pivot_Back_edges;
var pivot_Left_l_edges;
var pivot_Left_edges;
var pivot_Right_r_edges;
var pivot_Right_edges;
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
    wireframe: false,
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

  var plane_A_side_shape = new THREE.Shape();
  plane_A_side_shape.moveTo(0, 0);
  plane_A_side_shape.lineTo(0, C);
  plane_A_side_shape.lineTo(A, C);
  plane_A_side_shape.lineTo(A);

  var hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo((A * 0.347) | 0, (C * 0.883) | 0);
  hole_Lock_shape.bezierCurveTo(
    (A * 0.347) | 0,
    (C * 0.883) | 0,
    (A * 0.234) | 0,
    (C * 0.812) | 0,
    (A * 0.347) | 0,
    (C * 0.736) | 0
  );
  hole_Lock_shape.lineTo((A * 0.347) | 0, (C * 0.736) | 0);
  hole_Lock_shape.lineTo((A * 0.654) | 0, (C * 0.736) | 0);
  hole_Lock_shape.bezierCurveTo(
    (A * 0.654) | 0,
    (C * 0.736) | 0,
    (A * 0.767) | 0,
    (C * 0.812) | 0,
    (A * 0.654) | 0,
    (C * 0.883) | 0
  );
  hole_Lock_shape.lineTo((A * 0.654) | 0, (C * 0.883) | 0);
  plane_A_side_shape.holes.push(hole_Lock_shape);

  var plane_A_side = new THREE.ShapeGeometry(plane_A_side_shape);

  var plane_B_side_shape = new THREE.Shape();
  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.lineTo(0, C);
  plane_B_side_shape.lineTo(B / 2, C);
  plane_B_side_shape.lineTo(B / 2, 0);

  var plane_B_side = new THREE.ShapeGeometry(plane_B_side_shape);

  // ฝาเสียบบน

  var lid_Shape = new THREE.Shape();
  lid_Shape.moveTo(0, 0);
  lid_Shape.lineTo((A * 0.034) | 0, (C * 0.442) | 0);
  lid_Shape.bezierCurveTo(
    (A * 0.034) | 0,
    (C * 0.442) | 0,
    (A * 0.034) | 0,
    (C * 0.53) | 0,
    (A * 0.2) | 0,
    (C * 0.53) | 0
  );
  lid_Shape.lineTo((A * 0.8) | 0, (C * 0.53) | 0);
  lid_Shape.bezierCurveTo(
    (A * 0.8) | 0,
    (C * 0.53) | 0,
    (A * 0.967) | 0,
    (C * 0.53) | 0,
    (A * 0.967) | 0,
    (C * 0.442) | 0
  );
  lid_Shape.lineTo(A, 0);

  var hole_Lid_shape = new THREE.Path();
  hole_Lid_shape.moveTo((A * 0.347) | 0, (C * 0.118) | 0);
  hole_Lid_shape.bezierCurveTo(
    (A * 0.347) | 0,
    (C * 0.118) | 0,
    (A * 0.234) | 0,
    (C * 0.189) | 0,
    (A * 0.347) | 0,
    (C * 0.265) | 0
  );
  hole_Lid_shape.lineTo((A * 0.347) | 0, (C * 0.265) | 0);
  hole_Lid_shape.lineTo((A * 0.654) | 0, (C * 0.265) | 0);
  hole_Lid_shape.bezierCurveTo(
    (A * 0.654) | 0,
    (C * 0.265) | 0,
    (A * 0.767) | 0,
    (C * 0.189) | 0,
    (A * 0.654) | 0,
    (C * 0.118) | 0
  );
  hole_Lid_shape.lineTo((A * 0.654) | 0, (C * 0.118) | 0);
  lid_Shape.holes.push(hole_Lid_shape);

  var lid = new THREE.ShapeGeometry(lid_Shape); // ฝาเสียบบน

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

  // ลิ้นล่าง
  var plane_Bottom_shape = new THREE.Shape();
  plane_Bottom_shape.moveTo((A * 0.267) | 0, 0);
  plane_Bottom_shape.lineTo((A * 0.267) | 0, (C * 0.077) | 0);
  plane_Bottom_shape.lineTo(0, (C * 0.236) | 0);
  plane_Bottom_shape.lineTo(A, (C * 0.236) | 0);
  plane_Bottom_shape.lineTo((A * 0.734) | 0, (C * 0.077) | 0);
  plane_Bottom_shape.lineTo((A * 0.734) | 0, 0);

  var plane_Bottom_side = new THREE.ShapeGeometry(plane_Bottom_shape); // ลิ้นล่าง

  // เซทฉาก

  // side_A_front

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.castShadow = true;
  side_A_front.receiveShadow = true;

  // var side_bottom_A_front = new THREE.Mesh(plane_Bottom_side, material);
  // side_bottom_A_front.position.x = -A;
  // side_bottom_A_front.position.y = -C / 4;
  // side_bottom_A_front.castShadow = true;
  // side_bottom_A_front.receiveShadow = true;
  // scene.add(side_bottom_A_front);

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);
  side_Glue_lid.castShadow = true;
  side_Glue_lid.receiveShadow = true;

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.castShadow = true;
  side_B_left.receiveShadow = true;

  side_B_left_l = new THREE.Mesh(plane_B_side, material);
  side_B_left_l.position.x = -B / 2;
  side_B_left_l.castShadow = true;
  side_B_left_l.receiveShadow = true;

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.castShadow = true;
  side_B_right.receiveShadow = true;

  side_B_right_r = new THREE.Mesh(plane_B_side, material);
  side_B_right_r.castShadow = true;
  side_B_right_r.receiveShadow = true;

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A;
  side_A_back.castShadow = true;
  side_A_back.receiveShadow = true;

  side_back_A_top = new THREE.Mesh(lid, material);
  side_back_A_top.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_back_A_top.castShadow = true;
  side_back_A_top.receiveShadow = true;

  // สร้างจุดหมุน

  // pivot_Front

  var pivot_bottom_A_front = new THREE.Object3D();
  pivot_bottom_A_front
    .add
    // side_bottom_A_front
    ();

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Glue_lid, pivot_bottom_A_front);

  // pivot_Back

  pivot_back_A_top = new THREE.Object3D();
  pivot_back_A_top.add(side_back_A_top);
  pivot_back_A_top.position.set(0, C, 0);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.set(-A, 0, 0);
  pivot_Glue_lid.rotation.set(0, -(Math.PI / 180) * 121, 0);

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_back_A_top, pivot_Glue_lid);
  pivot_Back.position.set(-B / 2, 0, 0);
  pivot_Back.rotation.set(0, -(Math.PI / 180) * 120, 0);

  // pivot_Left

  pivot_Left_l = new THREE.Object3D();
  pivot_Left_l.add(side_B_left_l, pivot_Back);
  pivot_Left_l.position.set(-B / 2, 0, 0);
  pivot_Left_l.rotation.set(0, (Math.PI / 180) * 60, 0);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_l);
  pivot_Left.rotation.set(0, -(Math.PI / 180) * 120, 0);

  // pivot_Right

  pivot_Right_r = new THREE.Object3D();
  pivot_Right_r.add(side_B_right_r);
  pivot_Right_r.position.set(B / 2, 0, 0);
  pivot_Right_r.rotation.set(0, -(Math.PI / 180) * 60, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_r);
  pivot_Right.position.set(A, 0, 0);
  pivot_Right.rotation.set(0, (Math.PI / 180) * 120, 0);

  /* pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  // เซทฉาก

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.castShadow = true;
  side_A_front_edges.receiveShadow = true;

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_lid_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.x = -B / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_l_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_l_edges.position.x = -B / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.castShadow = true;
  side_B_right_edges.receiveShadow = true;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_r_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = -A;

  edges = new THREE.EdgesGeometry(lid);
  side_back_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_back_A_top_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  // สร้างจุดหมุน

  // pivot_Front

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(side_A_front_edges, pivot_Glue_lid_edges);

  // pivot_Back

  pivot_back_A_top_edges = new THREE.Object3D();
  pivot_back_A_top_edges.add(side_back_A_top_edges);
  pivot_back_A_top_edges.position.set(0, C, 0);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(-A, 0, 0);
  pivot_Glue_lid_edges.rotation.set(0, -(Math.PI / 180) * 121, 0);

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_back_A_top_edges,
    pivot_Glue_lid_edges
  );
  pivot_Back_edges.position.set(-B / 2, 0, 0);
  pivot_Back_edges.rotation.set(0, -(Math.PI / 180) * 120, 0);

  // pivot_Left

  pivot_Left_l_edges = new THREE.Object3D();
  pivot_Left_l_edges.add(side_B_left_l_edges, pivot_Back_edges);
  pivot_Left_l_edges.position.set(-B / 2, 0, 0);
  pivot_Left_l_edges.rotation.set(0, (Math.PI / 180) * 60, 0);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_Left_l_edges);
  pivot_Left_edges.rotation.set(0, -(Math.PI / 180) * 120, 0);

  // pivot_Right

  pivot_Right_r_edges = new THREE.Object3D();
  pivot_Right_r_edges.add(side_B_right_r_edges);
  pivot_Right_r_edges.position.set(B / 2, 0, 0);
  pivot_Right_r_edges.rotation.set(0, -(Math.PI / 180) * 60, 0);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges, pivot_Right_r_edges);
  pivot_Right_edges.position.set(A, 0, 0);
  pivot_Right_edges.rotation.set(0, (Math.PI / 180) * 120, 0);

  /* pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Front_edges, pivot_Left_edges, pivot_Right_edges);
  scene.add(pivot_All_edges);

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

const rotations1 = () => {
  // ชิ้นงาน

  // pivot_Back

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 121),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back.y = -(Math.PI / 180) * 120),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_l.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_l.y = (Math.PI / 180) * 60),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -(Math.PI / 180) * 120),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_r.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_r.y = -(Math.PI / 180) * 60),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 120),
  });

  // เส้น

  // pivot_Back

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 121),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_edges.y = -(Math.PI / 180) * 120),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_l_edges.y = (Math.PI / 180) * 60),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 120),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_r_edges.y = -(Math.PI / 180) * 60),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = (Math.PI / 180) * 120),
  });
};

const rotations2 = () => {
  // ชิ้นงาน

  // pivot_Back

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back.y = 0),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_l.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_l.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_r.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_r.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  // เส้น

  // pivot_Back

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_edges.y = 0),
  });

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_l_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_l_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_r_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_r_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
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
  rotations1,
  rotations2,
  updateSize,
};
