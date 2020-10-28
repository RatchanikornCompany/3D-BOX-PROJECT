// import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 150;
var C = 50;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
// var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว // 5
// var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_back;
var side_Glue_flap;
var side_A_front;
var side_B_left;
var side_B_right;

var side_A_back_edges;
var side_Glue_flap_edges;
var side_A_front_edges;
var side_B_left_edges;
var side_B_right_edges;

var pivot_Back;
var pivot_Glue_flap;
var pivot_Front;
var pivot_Back_group;
var pivot_Left;
var pivot_Right;
var pivot_All;

var pivot_Front_edges;
var pivot_Glue_flap_edges;
var pivot_Back_edges;
var pivot_Back_group_edges;
var pivot_Left_edges;
var pivot_Right_edges;
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

  var glue_flap_shape = new THREE.Shape();
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(P - P / 35),
    A - A / 10,
    -P
  );
  glue_flap_shape.lineTo(A / 10, -P);
  glue_flap_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, A, D); // ด้าน B | กว้าง x สูง | ความหนา

  var glue_flap = new THREE.ShapeGeometry(glue_flap_shape);

  /* ฉาก */

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_front.position.x = B / 2;
  side_A_front.position.y = A / 2;

  side_Glue_flap = new THREE.Mesh(glue_flap, material);
  side_Glue_flap.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_back.position.x = -B / 2;
  side_A_back.position.y = A / 2;

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -C / 2;
  side_B_left.position.y = A / 2;

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = C / 2;
  side_B_right.position.y = A / 2;

  /* จุดหมุน */

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front);

  pivot_Glue_flap = new THREE.Object3D();
  pivot_Glue_flap.add(side_Glue_flap);
  pivot_Glue_flap.position.x = -B;

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  pivot_Back_group = new THREE.Object3D();
  pivot_Back_group.add(pivot_Back, pivot_Glue_flap);
  pivot_Back_group.position.x = -C;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Back_group);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right);
  pivot_Right.position.x = B;

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);

  /* ********** Edges - เส้น ********** */

  /* เซทฉาก */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_front_edges.position.x = B / 2;
  side_A_front_edges.position.y = A / 2;

  edges = new THREE.EdgesGeometry(glue_flap);
  side_Glue_flap_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_flap_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_back_edges.position.x = -B / 2;
  side_A_back_edges.position.y = A / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.x = -C / 2;
  side_B_left_edges.position.y = A / 2;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.x = C / 2;
  side_B_right_edges.position.y = A / 2;

  /* จุดหมุน */

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(side_A_front_edges);

  pivot_Glue_flap_edges = new THREE.Object3D();
  pivot_Glue_flap_edges.add(side_Glue_flap_edges);
  pivot_Glue_flap_edges.position.x = -B;

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);

  pivot_Back_group_edges = new THREE.Object3D();
  pivot_Back_group_edges.add(pivot_Back_edges, pivot_Glue_flap_edges);
  pivot_Back_group_edges.position.x = -C;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_Back_group_edges);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges);
  pivot_Right_edges.position.x = B;

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Front_edges, pivot_Left_edges, pivot_Right_edges);
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
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

// Animate
const rotations1 = () => {
  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = (-Math.PI / 180) * 90),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = (-Math.PI / 180) * 90),
  });

  // pivot_Back_group
  tween = gsap.timeline();
  tween.to(pivot_Back_group.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_group.y = (-Math.PI / 180) * 90),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Back_group_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_group_edges.y = (-Math.PI / 180) * 90),
  });

  // pivot_Glue_flap
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_flap.y = -(Math.PI / 180) * 90),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_flap_edges.y = -(Math.PI / 180) * 90),
  });
};

// Non-Animate
const rotations2 = () => {
  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });

  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  // pivot_Back_group
  tween = gsap.timeline();
  tween.to(pivot_Back_group.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_group.y = 0),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Back_group_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Back_group_edges.y = 0),
  });

  // pivot_Glue_flap
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_flap.y = 0),
  });
  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_flap_edges.y = 0),
  });
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
