// import React, { Fragment } from "react";
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
// import gsap from "gsap";
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 200;
var B = 100;
var C = 40;
var D = 0.5;
var w = (window.innerWidth * 75) / 100;
var h = window.innerHeight;
// var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
// var leng_lr_lib = A * L;

var edges;
// var tween;

var side_A_back;
var side_Glue_lid;
var side_lr_lid_A_left;
var side_lr_lid_A_right;
var side_lid_A_top;
var side_lid_B_top_left;
var side_lid_B_top_right;
var side_B_top;
var side_lid_B_bottom_left;
var side_lid_B_bottom_right;
var side_B_bottom;
var side_Left;
var side_Right;

var side_A_back_edges;
var side_Glue_lid_edges;
var side_lr_lid_A_left_edges;
var side_lr_lid_A_right_edges;
var side_lid_A_top_edges;
var side_lid_B_top_left_edges;
var side_lid_B_top_right_edges;
var side_B_top_edges;
var side_lid_B_bottom_left_edges;
var side_lid_B_bottom_right_edges;
var side_B_bottom_edges;
var side_Left_edges;
var side_Right_edges;

var pivot_Back;
var pivot_Glue_lid;
var pivot_lr_lid_A_left;
var pivot_lr_lid_A_right;
var pivot_lid_A_top;
var pivot_lid_B_top_left;
var pivot_lid_B_top_right;
var pivot_Top;
var pivot_lid_B_bottom_left;
var pivot_lid_B_bottom_right;
var pivot_Bottom;
var pivot_Left;
var pivot_Right;
var pivot_All;

var pivot_Back_edges;
var pivot_Glue_lid_edges;
var pivot_lr_lid_A_left_edges;
var pivot_lr_lid_A_right_edges;
var pivot_lid_A_top_edges;
var pivot_lid_B_top_left_edges;
var pivot_lid_B_top_right_edges;
var pivot_Top_edges;
var pivot_lid_B_bottom_left_edges;
var pivot_lid_B_bottom_right_edges;
var pivot_Bottom_edges;
var pivot_Left_edges;
var pivot_Right_edges;
var pivot_All_edges;
/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งกล้อง */
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;
  /* #endregion */
  /* #region  สร้างแกนหมุน */
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน */
  const material = new THREE.MeshBasicMaterial({
    color: '#FFFFFF',
    side: THREE.DoubleSide,
    wireframe: false,
  });
  /* #endregion */
  /* #region  Webgl Render */
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById('webgl').append(renderer.domElement);
  /* #endregion */
  /* #region  Viewport on Resize */
  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  The Mouse Controls */
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #endregion */

  /* #region  Model */

  /* #region  lid_A_left_right_shape */
  var lid_A_left_right_shape = new THREE.Shape();
  lid_A_left_right_shape.moveTo(0, 0);
  lid_A_left_right_shape.lineTo(0, B);
  lid_A_left_right_shape.lineTo((A * 0.2) | 0, B);
  lid_A_left_right_shape.lineTo((A * 0.2) | 0, 0);

  var lid_A_left_right = new THREE.ShapeGeometry(lid_A_left_right_shape);
  /* #endregion */
  /* #region  lid_B_top_bottom */
  var lid_B_top_bottom_shape = new THREE.Shape();
  lid_B_top_bottom_shape.moveTo(0, 0);
  lid_B_top_bottom_shape.lineTo(0, (A * 0.2) | 0);
  lid_B_top_bottom_shape.lineTo(C, (A * 0.05) | 0);
  lid_B_top_bottom_shape.lineTo(C, 0);

  var lid_B_top_bottom = new THREE.ShapeGeometry(lid_B_top_bottom_shape);
  /* #endregion */
  /* #region  lr_lid_A_top_shape */
  var lr_lid_A_top_shape = new THREE.Shape();
  lr_lid_A_top_shape.moveTo(0, 0);
  lr_lid_A_top_shape.lineTo(0, B);
  lr_lid_A_top_shape.lineTo((A * 0.1) | 0, B); // 0.15
  lr_lid_A_top_shape.bezierCurveTo(
    (A * 0.1) | 0, // X1
    B, // Y1
    40, // X2
    B, // Y2 0.9
    (A * 0.15) | 0, // X3
    (B * 0.8) | 0 // Y3
  );
  lr_lid_A_top_shape.lineTo((A * 0.15) | 0, (B * 0.8) | 0);
  lr_lid_A_top_shape.lineTo((A * 0.2) | 0, (B * 0.6) | 0);
  lr_lid_A_top_shape.lineTo((A * 0.2) | 0, 0);

  var lr_lid_A_top = new THREE.ShapeGeometry(lr_lid_A_top_shape);
  /* #endregion */
  /* #region  ฝาเสียบกาว */
  var glue_lid_shape = new THREE.Shape();
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(A, 0);
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(A, 0);
  glue_lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  glue_lid_shape.lineTo(A / 10, -P);
  glue_lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);
  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(A, C, D); // ด้าน B | สูง x กว้าง | ความหนา
  var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;
  /* #endregion */
  /* #region  side_lid_A_top */
  side_Glue_lid = new THREE.Mesh(glue_lid, material);
  side_Glue_lid.rotation.set(-(Math.PI / 180) * 180, 0, 0);

  side_lr_lid_A_left = new THREE.Mesh(lr_lid_A_top, material);
  side_lr_lid_A_left.rotation.set(0, -(Math.PI / 180) * 180, 0);

  side_lr_lid_A_right = new THREE.Mesh(lr_lid_A_top, material);

  side_lid_A_top = new THREE.Mesh(plane_A_side, material);
  side_lid_A_top.position.x = A / 2;
  side_lid_A_top.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_top */
  side_lid_B_top_left = new THREE.Mesh(lid_B_top_bottom, material);
  side_lid_B_top_left.rotation.set(
    0,
    -(Math.PI / 180) * 360,
    (Math.PI / 180) * 90
  );

  side_lid_B_top_right = new THREE.Mesh(lid_B_top_bottom, material);
  side_lid_B_top_right.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  side_B_top = new THREE.Mesh(plane_B_side, material);
  side_B_top.position.x = A / 2;
  side_B_top.position.y = C / 2;
  /* #endregion */
  /* #region  side_B_bottom */
  side_lid_B_bottom_left = new THREE.Mesh(lid_B_top_bottom, material);
  side_lid_B_bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  side_lid_B_bottom_right = new THREE.Mesh(lid_B_top_bottom, material);
  side_lid_B_bottom_right.rotation.set(
    (Math.PI / 180) * 180,
    -(Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  side_B_bottom = new THREE.Mesh(plane_B_side, material);
  side_B_bottom.position.x = A / 2;
  side_B_bottom.position.y = -C / 2;
  /* #endregion */
  /* #region  side_Left */
  side_Left = new THREE.Mesh(lid_A_left_right, material);
  side_Left.rotation.set(0, -(Math.PI / 180) * 180, 0);
  /* #endregion */
  /* #region  side_Right */
  side_Right = new THREE.Mesh(lid_A_left_right, material);
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก - เส้น */

  /* #region  side_A_back_edges */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_lid_A_top_edges */
  edges = new THREE.EdgesGeometry(glue_lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.set(-(Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lr_lid_A_top);
  side_lr_lid_A_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_left_edges.rotation.set(0, -(Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(lr_lid_A_top);
  side_lr_lid_A_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_A_top_edges.position.x = A / 2;
  side_lid_A_top_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_top */
  edges = new THREE.EdgesGeometry(lid_B_top_bottom);
  side_lid_B_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_top_left_edges.rotation.set(
    0,
    -(Math.PI / 180) * 360,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(lid_B_top_bottom);
  side_lid_B_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_top_right_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_top_edges.position.x = A / 2;
  side_B_top_edges.position.y = C / 2;
  /* #endregion */
  /* #region  side_B_bottom_edges */
  edges = new THREE.EdgesGeometry(lid_B_top_bottom);
  side_lid_B_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_bottom_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(lid_B_top_bottom);
  side_lid_B_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_bottom_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    -(Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_bottom_edges.position.x = A / 2;
  side_B_bottom_edges.position.y = -C / 2;
  /* #endregion */
  /* #region  side_Left_edges */
  edges = new THREE.EdgesGeometry(lid_A_left_right);
  side_Left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_edges.rotation.set(0, -(Math.PI / 180) * 180, 0);
  /* #endregion */
  /* #region  side_Right_edges */
  edges = new THREE.EdgesGeometry(lid_A_left_right);
  side_Right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);
  /* #endregion */
  /* #region  pivot_Top */
  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.set(0, B, 0);

  pivot_lr_lid_A_left = new THREE.Object3D();
  pivot_lr_lid_A_left.add(side_lr_lid_A_left);

  pivot_lr_lid_A_right = new THREE.Object3D();
  pivot_lr_lid_A_right.add(side_lr_lid_A_right);
  pivot_lr_lid_A_right.position.set(A, 0, 0);

  pivot_lid_A_top = new THREE.Object3D();
  pivot_lid_A_top.add(
    side_lid_A_top,
    pivot_Glue_lid,
    pivot_lr_lid_A_left,
    pivot_lr_lid_A_right
  );
  pivot_lid_A_top.position.set(0, C, 0);

  pivot_lid_B_top_left = new THREE.Object3D();
  pivot_lid_B_top_left.add(side_lid_B_top_left);

  pivot_lid_B_top_right = new THREE.Object3D();
  pivot_lid_B_top_right.add(side_lid_B_top_right);
  pivot_lid_B_top_right.position.set(A, 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_B_top,
    pivot_lid_B_top_left,
    pivot_lid_B_top_right,
    pivot_lid_A_top
  );
  pivot_Top.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_lid_B_bottom_left = new THREE.Object3D();
  pivot_lid_B_bottom_left.add(side_lid_B_bottom_left);

  pivot_lid_B_bottom_right = new THREE.Object3D();
  pivot_lid_B_bottom_right.add(side_lid_B_bottom_right);
  pivot_lid_B_bottom_right.position.set(A, 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_B_bottom,
    pivot_lid_B_bottom_left,
    pivot_lid_B_bottom_right
  );
  /* #endregion */
  /* #region  pivot_Left */
  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_Left);
  /* #endregion */
  /* #region  pivot_Right */
  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_Right);
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Top, pivot_Bottom, pivot_Left, pivot_Right);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Back_edges */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);
  /* #endregion */
  /* #region  pivot_Top_edges */
  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(0, B, 0);

  pivot_lr_lid_A_left_edges = new THREE.Object3D();
  pivot_lr_lid_A_left_edges.add(side_lr_lid_A_left_edges);

  pivot_lr_lid_A_right_edges = new THREE.Object3D();
  pivot_lr_lid_A_right_edges.add(side_lr_lid_A_right_edges);
  pivot_lr_lid_A_right_edges.position.set(A, 0, 0);

  pivot_lid_A_top_edges = new THREE.Object3D();
  pivot_lid_A_top_edges.add(
    side_lid_A_top_edges,
    pivot_Glue_lid_edges,
    pivot_lr_lid_A_left_edges,
    pivot_lr_lid_A_right_edges
  );
  pivot_lid_A_top_edges.position.set(0, C, 0);

  pivot_lid_B_top_left_edges = new THREE.Object3D();
  pivot_lid_B_top_left_edges.add(side_lid_B_top_left_edges);

  pivot_lid_B_top_right_edges = new THREE.Object3D();
  pivot_lid_B_top_right_edges.add(side_lid_B_top_right_edges);
  pivot_lid_B_top_right_edges.position.set(A, 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_B_top_edges,
    pivot_lid_B_top_left_edges,
    pivot_lid_B_top_right_edges,
    pivot_lid_A_top_edges
  );
  pivot_Top_edges.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Bottom_edges */
  pivot_lid_B_bottom_left_edges = new THREE.Object3D();
  pivot_lid_B_bottom_left_edges.add(side_lid_B_bottom_left_edges);

  pivot_lid_B_bottom_right_edges = new THREE.Object3D();
  pivot_lid_B_bottom_right_edges.add(side_lid_B_bottom_right_edges);
  pivot_lid_B_bottom_right_edges.position.set(A, 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_B_bottom_edges,
    pivot_lid_B_bottom_left_edges,
    pivot_lid_B_bottom_right_edges
  );
  /* #endregion */
  /* #region  pivot_Left_edges */
  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_Left_edges);
  /* #endregion */
  /* #region  pivot_Right_edges */
  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_Right_edges);
  pivot_Right_edges.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_All_edges */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Top_edges,
    pivot_Bottom_edges,
    pivot_Left_edges,
    pivot_Right_edges
  );
  scene.add(pivot_All_edges);
  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

const updateSize = (a, b, c, p) => {
  A = a;
  B = b;
  C = c;
  P = p;

  var initDiv = document.getElementById('webgl');
  var newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

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
