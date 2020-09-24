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
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

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
  lr_lid_shape.lineTo((A * 0.143), (C * 0.48) | 0);
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
  lid_Bottom_shape.lineTo((A * 0.03) | 0, (C * 0.89) | 0);
  lid_Bottom_shape.lineTo((A * 0.44) | 0, (C * 0.89) | 0);
  lid_Bottom_shape.lineTo((A * 0.5) | 0, (C * 0.78) | 0);
  lid_Bottom_shape.lineTo((A * 0.5) | 0, (C * 0.69) | 0);
  lid_Bottom_shape.lineTo((A * 0.7) | 0, (C * 0.69) | 0);
  lid_Bottom_shape.lineTo(A, 0);

  var lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo((A * 0.255) | 0, 0);
  lr_lid_Bottom_shape.lineTo((A * 0.255) | 0, 0);
  lr_lid_Bottom_shape.lineTo(0, (C * 0.55) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.09) | 0, (C * 0.78) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.278) | 0, (C * 0.78) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.278) | 0, (C * 0.11) | 0);

  var lid_curve_shape = new THREE.Shape();
  lid_curve_shape.moveTo(0, 0); // B x C
  lid_curve_shape.lineTo((B * 0.29) | 0, (C * 0.65) | 0);
  lid_curve_shape.bezierCurveTo((B * 0.29) | 0, (C * 0.65) | 0, (B * 0.5) | 0, (C * 0.87) | 0, (B * 0.72) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo((B * 0.72) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo(B, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, 0);
  lid_curve_shape.lineTo((B * 0.51) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo((B * 0.48) | 0, (C * 0.65) | 0);
  lid_curve_shape.lineTo((B * 0.48) | 0, 0);

  var lid_bottom_curve_shape = new THREE.Shape();
  lid_bottom_curve_shape.moveTo(0, 0);
  lid_bottom_curve_shape.lineTo((B * 0.29) | 0, (C * 0.74) | 0);
  lid_bottom_curve_shape.lineTo((B * 0.53) | 0, (C * 0.74) | 0);
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

  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;

  var side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  var side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = - B / 2;
  side_B_left.position.y = C / 2;
  scene.add(side_B_left);

  var side_left_lid = new THREE.Mesh(lid_curve, material);
  side_left_lid.position.x = -B;
  side_left_lid.position.y = C;
  scene.add(side_left_lid);

  var side_left_lid_d = new THREE.Mesh(lid_bottom_curve, material);
  side_left_lid_d.position.x = -B;
  side_left_lid_d.rotation.x = Math.PI;
  scene.add(side_left_lid_d);

  var side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  var side_right_lid = new THREE.Mesh(lid_curve, material);
  side_right_lid.position.y = C;
  scene.add(side_right_lid);

  var side_right_lid_d = new THREE.Mesh(lid_bottom_curve, material);
  side_right_lid_d.rotation.x = Math.PI;
  scene.add(side_right_lid_d);

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

  var side_bottom_A_front = new THREE.Mesh(lid_Bottom, material)
  side_bottom_A_front.rotation.x = Math.PI;

  /* ตัวเสียบล่างด้านหน้า */
  var side_lid_bottom_A_front = new THREE.Mesh(lr_lid_Bottom, material)
  side_lid_bottom_A_front.rotation.x = Math.PI;
  side_lid_bottom_A_front.position.x = (A * 0.7) | 0;
  side_lid_bottom_A_front.position.y = (-C * 0.11) | 0;
  scene.add(side_lid_bottom_A_front);

  var side_bottom_A_back = new THREE.Mesh(lid_Bottom, material)
  side_bottom_A_back.rotation.x = Math.PI;
  side_bottom_A_back.position.x = -A;

  /* ตัวเสียบล่างด้านหลัง */
  var side_lid_bottom_A_back = new THREE.Mesh(lr_lid_Bottom, material)
  side_lid_bottom_A_back.rotation.y = Math.PI;
  side_lid_bottom_A_back.rotation.z = Math.PI;
  side_lid_bottom_A_back.position.x = (-A * 0.305) | 0;
  side_lid_bottom_A_back.position.y = (-C * 0.11) | 0;

  /* จุดหมุน */

  /* pivot_Front */
  var pivot_front = new THREE.Object3D();
  pivot_front.add(
    side_A_front
  );

  /* pivot_Right */
  var pivot_group_right = new THREE.Object3D();
  pivot_group_right.add(
    side_B_right,
    side_right_lid,
    side_right_lid_d
  );
  pivot_group_right.position.set(A, 0, 0)

  var pivot_glue_lid = new THREE.Object3D();
  pivot_glue_lid.position.set(-A, 0, 0);
  pivot_glue_lid.add(side_glue_lid);

  var pivot_group_top_A_back = new THREE.Object3D();
  pivot_group_top_A_back.add(
    side_top_A_back,
    pivot_glue_lid,
    side_top_A_lid_top_back
  );

  var pivot_group_top_A_bottom = new THREE.Object3D();
  pivot_group_top_A_bottom.add(
    side_bottom_A_back,
    side_lid_bottom_A_back
  );

  var pivot_group_left = new THREE.Object3D();
  pivot_group_left.add(
    side_A_back,
    pivot_group_top_A_back,
    pivot_group_top_A_bottom
  );
  pivot_group_left.position.set(-B, 0, 0)
  scene.add(pivot_group_left)

  var pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_bottom_A_front);
  scene.add(pivot_Bottom)


  /* pivot_Top */
  var pivot_top = new THREE.Object3D();
  pivot_top.add(
    side_top_A_front,
    side_top_A_lid_top_front
  );

  /* pivot_All */
  var pivot_all = new THREE.Object3D();
  pivot_all.add(
    pivot_front,
    pivot_group_right,
    // pivot_group_left,
    pivot_top
  );
  scene.add(pivot_all);

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