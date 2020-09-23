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

  /* สร้างรูปทรง */

  var lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(0, (C * 0.7) | 0); // A * C
  lid_shape.lineTo(A, (C * 0.7) | 0);
  lid_shape.lineTo(A, 0);

  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.115) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo((A * 0.115) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.143), (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.23) | 0, (C * 0.7) | 0);
  lr_lid_shape.lineTo((A * 0.775) | 0, (C * 0.7) | 0);
  lr_lid_shape.lineTo((A * 0.86) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.89) | 0, (C * 0.48) | 0);
  lr_lid_shape.lineTo((A * 0.89) | 0, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, (C * 0.64) | 0);
  lr_lid_shape.lineTo(A, 0);

  var lid_bottom_shape = new THREE.Shape();
  lid_bottom_shape.moveTo(0, 0);
  lid_bottom_shape.lineTo((A * 0.03) | 0, (C * 0.89) | 0); // A * C
  lid_bottom_shape.lineTo((A * 0.44) | 0, (C * 0.89) | 0);
  lid_bottom_shape.lineTo((A * 0.5) | 0, (C * 0.78) | 0);
  lid_bottom_shape.lineTo((A * 0.5) | 0, (C * 0.69) | 0);
  lid_bottom_shape.lineTo((A * 0.7) | 0, (C * 0.69) | 0);
  // lid_bottom_shape.lineTo(137, 68);
  // lid_bottom_shape.lineTo(170, 68);
  // lid_bottom_shape.lineTo(170, 18);
  // lid_bottom_shape.lineTo(166, 10);
  lid_bottom_shape.lineTo(A, 0);

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
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา

  var lid_onTop = new THREE.ShapeGeometry(lid_shape);
  var lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);
  var lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape);
  var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);

  /* ฉาก */
  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;
  scene.add(side_A_front);

  var side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  var side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = - B / 2;
  side_B_left.position.y = C / 2;
  scene.add(side_B_left);

  var side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  var side_top_A_back = new THREE.Mesh(lid_onTop, material)
  side_top_A_back.position.x = -A;
  side_top_A_back.position.y = C;

  var side_top_A_lid_top_back = new THREE.Mesh(lr_lid_onTop, material)
  side_top_A_lid_top_back.position.x = -A;
  side_top_A_lid_top_back.position.y = (C * 1.7) | 0;

  var side_glue_lid = new THREE.Mesh(glue_lid, material);
  side_glue_lid.rotation.y = Math.PI;
  side_glue_lid.rotation.z = Math.PI / 2;

  var side_top_A_front = new THREE.Mesh(lid_onTop, material)
  side_top_A_front.position.y = C;

  var side_top_A_lid_top_front = new THREE.Mesh(lr_lid_onTop, material)
  side_top_A_lid_top_front.position.y = (C * 1.7) | 0;

  var side_bottom_A_front = new THREE.Mesh(lid_bottom, material)
  side_bottom_A_front.rotation.x = Math.PI;

  var side_bottom_A_back = new THREE.Mesh(lid_bottom, material)
  side_bottom_A_back.rotation.x = Math.PI;
  side_bottom_A_back.position.x = -A;

  /* จุดหมุน */

  var pivot_group_right = new THREE.Object3D();
  pivot_group_right.add(side_B_right);
  pivot_group_right.position.set(A, 0, 0)
  scene.add(pivot_group_right)

  var pivot_glue_lid = new THREE.Object3D();
  pivot_glue_lid.position.set(-A, 0, 0);
  pivot_glue_lid.add(side_glue_lid);

  var pivot_group_top_A_back = new THREE.Object3D();
  pivot_group_top_A_back.add(side_top_A_back, pivot_glue_lid, side_top_A_lid_top_back, side_bottom_A_back);
  // pivot_group_top_A_back.position.set(0, 0, 0);

  var pivot_group_left = new THREE.Object3D();
  pivot_group_left.add(
    side_A_back,
    pivot_group_top_A_back
  );
  pivot_group_left.position.set(-B, 0, 0)
  scene.add(pivot_group_left)

  var pivot_top = new THREE.Object3D();
  pivot_top.add(side_top_A_front, side_top_A_lid_top_front);
  // pivot_top.position.set(0, 0, 0)
  scene.add(pivot_top)

  var pivot_bottom = new THREE.Object3D();
  pivot_bottom.add(side_bottom_A_front);
  // pivot_bottom.position.set(0, 0, 0);
  scene.add(pivot_bottom)

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