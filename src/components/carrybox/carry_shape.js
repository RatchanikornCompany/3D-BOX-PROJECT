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
var w = window.innerWidth / 2;
var h = window.innerHeight / 2;
var L = 0.3;
var P = 5;
var leng_lr_lib = A * L;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

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

  /* Region */

  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา

  /* ฉาก */
  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;
  scene.add(side_A_front);

  var side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;
  // scene.add(side_A_back);

  var side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = - B / 2;
  side_B_left.position.y = C / 2;
  scene.add(side_B_left);

  var side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;
  // scene.add(side_B_right);

  /* จุดหมุน */

  var pivot_group_right = new THREE.Object3D();
  pivot_group_right.add(side_B_right);
  pivot_group_right.position.set(A, 0, 0)
  scene.add(pivot_group_right)

  var pivot_group_left = new THREE.Object3D();
  pivot_group_left.add(side_A_back);
  pivot_group_left.position.set(-B, 0, 0)
  scene.add(pivot_group_left)

  /* End Region */

  //Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById("webgl").append(renderer.domElement);

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

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