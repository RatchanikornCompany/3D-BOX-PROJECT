import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 200;
var B = 150;
var C = 50;
var D = 0.5;
var O = 0.5;
var w = (window.innerWidth * 75) / 100;
var h = window.innerHeight;
// var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
// var leng_lr_lib = A * L;

var edges;
var tween;

/* #region  กล่อง */

/* #region  วัตถุ */
var side_A_back;
var side_Lock_left;
var side_lid_B_left;
var side_B_left;
var side_Lock_right;
var side_lid_B_right;
var side_B_right;
var side_lr_lid_A_top_left;
var side_lr_lid_A_top_right;
var side_A_top;
var side_lr_lid_A_bottom_left;
var side_lr_lid_A_bottom_right;
var side_A_bottom;

var side_A_back_edges;
var side_Lock_left_edges;
var side_lid_B_left_edges;
var side_B_left_edges;
var side_Lock_right_edges;
var side_lid_B_right_edges;
var side_B_right_edges;
var side_lr_lid_A_top_left_edges;
var side_lr_lid_A_top_right_edges;
var side_A_top_edges;
var side_lr_lid_A_bottom_left_edges;
var side_lr_lid_A_bottom_right_edges;
var side_A_bottom_edges;
/* #endregion */
/* #region  วัตถุ - เส้น */
var side_A_front_x;
var side_Glue_flap;
var side_A_back_x;
var side_B_top_lid;
var side_B_bottom_lid;

var side_A_front_x_edges;
var side_Glue_flap_edges;
var side_A_back_x_edges;
var side_B_top_lid_edges;
var side_B_bottom_lid_edges;
/* #endregion */

/* #endregion */

/* #region  ฝากล่อง */

/* #region  จุดหมุน */
var pivot_Back;
var pivot_Lock_left;
var pivot_lid_B_left;
var pivot_Left;
var pivot_Lock_right;
var pivot_lid_B_right;
var pivot_Right;
var pivot_lr_lid_A_top_left;
var pivot_lr_lid_A_top_right;
var pivot_Top;
var pivot_lr_lid_A_bottom_left;
var pivot_lr_lid_A_bottom_right;
var pivot_Bottom;
var pivot_All;

var pivot_Back_edges;
var pivot_Lock_left_edges;
var pivot_lid_B_left_edges;
var pivot_Left_edges;
var pivot_Lock_right_edges;
var pivot_lid_B_right_edges;
var pivot_Right_edges;
var pivot_lr_lid_A_top_left_edges;
var pivot_lr_lid_A_top_right_edges;
var pivot_Top_edges;
var pivot_lr_lid_A_bottom_left_edges;
var pivot_lr_lid_A_bottom_right_edges;
var pivot_Bottom_edges;
var pivot_All_edges;
/* #endregion */
/* #region  จุดหมุน - เส้น */
var pivot_Top_x;
var pivot_Glue_flap;
var pivot_Front_x;
var pivot_B_bottom_lid;
var pivot_Back_x;

var pivot_Top_x_edges;
var pivot_Glue_flap_edges;
var pivot_Front_x_edges;
var pivot_B_bottom_lid_edges;
var pivot_Back_x_edges;
/* #endregion */

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งกล้อง */
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
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
    opacity: O,
    transparent: true,
  });
  /* #endregion */
  /* #region  WebGL Render */
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x404040);
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);
  /* #endregion */
  /* #region  Viewport on Resize */
  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  The mouse controls */
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */
  /* #region  Spotlights */

  /* #region  Spotlight 1 */
  /*  Spotlight 1 */
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

  /*  ภาพฉาย Spotlight 1 */
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  // scene.add(helper);
  /* #endregion */
  /* #region  Spotlight 2 */
  /*  Spotlight 2 */
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

  /*  ภาพฉาย Spotlight 2 */
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);
  /* #endregion */

  /* #endregion */
  /* #region  Viewport on Resize */
  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  GridHelper */
  scene.add(new THREE.GridHelper(1000, 100));
  /* #endregion */

  /* #endregion */
  /* #region  โมเดล */

  /* #region  lr_lid_shape */
  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  lr_lid_shape.lineTo(0, C);
  lr_lid_shape.lineTo((A * 0.25) | 0, C);
  lr_lid_shape.lineTo((A * 0.25) | 0, 0);

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape);
  /* #endregion */
  /* #region  lock_flap_shape */
  var lock_flap_shape = new THREE.Shape();
  lock_flap_shape.moveTo(0, 0);
  lock_flap_shape.lineTo(0, (C * 0.3) | 0);
  lock_flap_shape.lineTo(B, (C * 0.3) | 0);
  lock_flap_shape.lineTo(B, 0);

  var lock_flap = new THREE.ShapeGeometry(lock_flap_shape);
  /* #endregion */
  /* #region  glue_Flap_shape */
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

  var glue_flap = new THREE.ShapeGeometry(glue_flap_shape); // ฝากาว
  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
  var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา
  /* #endregion */

  /* #endregion */
  /* #region  กล่อง */

  /* #region  ฉาก */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_left */
  side_Lock_left = new THREE.Mesh(lock_flap, material);
  side_Lock_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_lid_B_left = new THREE.Mesh(plane_B_side, material);
  side_lid_B_left.position.set(-C / 2, B / 2, 0);

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_B_right */
  side_Lock_right = new THREE.Mesh(lock_flap, material);
  side_Lock_right.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  side_lid_B_right = new THREE.Mesh(plane_B_side, material);
  side_lid_B_right.position.set(C / 2, B / 2, 0);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_A_top */
  side_lr_lid_A_top_left = new THREE.Mesh(lr_lid, material);
  side_lr_lid_A_top_left.rotation.set(0, Math.PI, 0);

  side_lr_lid_A_top_right = new THREE.Mesh(lr_lid, material);

  side_A_top = new THREE.Mesh(plane_C_side, material);
  side_A_top.position.set(A / 2, C / 2, 0);
  /* #endregion */
  /* #region  side_A_bottom */
  side_lr_lid_A_bottom_left = new THREE.Mesh(lr_lid, material);
  side_lr_lid_A_bottom_left.rotation.set(Math.PI, Math.PI, 0);

  side_lr_lid_A_bottom_right = new THREE.Mesh(lr_lid, material);
  side_lr_lid_A_bottom_right.rotation.set(Math.PI, 0, 0);

  side_A_bottom = new THREE.Mesh(plane_C_side, material);
  side_A_bottom.position.set(A / 2, -C / 2, 0);
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
  /* #region  side_B_left_edges */
  edges = new THREE.EdgesGeometry(lock_flap);
  side_Lock_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_edges.position.set(-C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.set(-C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_B_right_edges */
  edges = new THREE.EdgesGeometry(lock_flap);
  side_Lock_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_right_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.position.set(C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_edges.position.set(C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_A_top_edges */
  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_lid_A_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_top_left_edges.rotation.set(0, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_lid_A_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_top_edges.position.set(A / 2, C / 2, 0);
  /* #endregion */
  /* #region  side_A_bottom_edges */
  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_lid_A_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_bottom_left_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_lid_A_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_A_bottom_right_edges.rotation.set(Math.PI, 0, 0);

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.position.set(A / 2, -C / 2, 0);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */
  /* #region  pivot_Top */
  pivot_lr_lid_A_top_left = new THREE.Object3D();
  pivot_lr_lid_A_top_left.add(side_lr_lid_A_top_left);

  pivot_lr_lid_A_top_right = new THREE.Object3D();
  pivot_lr_lid_A_top_right.add(side_lr_lid_A_top_right);
  pivot_lr_lid_A_top_right.position.set(A, 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_A_top, pivot_lr_lid_A_top_left, pivot_lr_lid_A_top_right);
  pivot_Top.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top);
  /* #endregion */
  /* #region  pivot_Left */
  pivot_Lock_left = new THREE.Object3D();
  pivot_Lock_left.add(side_Lock_left);
  pivot_Lock_left.position.set(-C, 0, 0);

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, pivot_Lock_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_lid_B_left);
  /* #endregion */
  /* #region  pivot_Right */
  pivot_Lock_right = new THREE.Object3D();
  pivot_Lock_right.add(side_Lock_right);
  pivot_Lock_right.position.set(C, 0, 0);

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right, pivot_Lock_right);
  pivot_lid_B_right.position.set(C, 0, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_lr_lid_A_bottom_left = new THREE.Object3D();
  pivot_lr_lid_A_bottom_left.add(side_lr_lid_A_bottom_left);

  pivot_lr_lid_A_bottom_right = new THREE.Object3D();
  pivot_lr_lid_A_bottom_right.add(side_lr_lid_A_bottom_right);
  pivot_lr_lid_A_bottom_right.position.set(A, 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    pivot_lr_lid_A_bottom_left,
    pivot_lr_lid_A_bottom_right
  );
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Bottom);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Top_edges */
  pivot_lr_lid_A_top_left_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_left_edges.add(side_lr_lid_A_top_left_edges);

  pivot_lr_lid_A_top_right_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_right_edges.add(side_lr_lid_A_top_right_edges);
  pivot_lr_lid_A_top_right_edges.position.set(A, 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_A_top_edges,
    pivot_lr_lid_A_top_left_edges,
    pivot_lr_lid_A_top_right_edges
  );
  pivot_Top_edges.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Back_edges */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Top_edges);
  /* #endregion */
  /* #region  pivot_Left_edges */
  pivot_Lock_left_edges = new THREE.Object3D();
  pivot_Lock_left_edges.add(side_Lock_left_edges);
  pivot_Lock_left_edges.position.set(-C, 0, 0);

  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.add(side_lid_B_left_edges, pivot_Lock_left_edges);
  pivot_lid_B_left_edges.position.set(-C, 0, 0);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_lid_B_left_edges);
  /* #endregion */
  /* #region  pivot_Right_edges */
  pivot_Lock_right_edges = new THREE.Object3D();
  pivot_Lock_right_edges.add(side_Lock_right_edges);
  pivot_Lock_right_edges.position.set(C, 0, 0);

  pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.add(side_lid_B_right_edges, pivot_Lock_right_edges);
  pivot_lid_B_right_edges.position.set(C, 0, 0);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges, pivot_lid_B_right_edges);
  pivot_Right_edges.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_lr_lid_A_bottom_left_edges = new THREE.Object3D();
  pivot_lr_lid_A_bottom_left_edges.add(side_lr_lid_A_bottom_left_edges);

  pivot_lr_lid_A_bottom_right_edges = new THREE.Object3D();
  pivot_lr_lid_A_bottom_right_edges.add(side_lr_lid_A_bottom_right_edges);
  pivot_lr_lid_A_bottom_right_edges.position.set(A, 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_A_bottom_edges,
    pivot_lr_lid_A_bottom_left_edges,
    pivot_lr_lid_A_bottom_right_edges
  );
  /* #endregion */
  /* #region  pivot_All_edges */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Left_edges,
    pivot_Right_edges,
    pivot_Bottom_edges
  );
  scene.add(pivot_All_edges);
  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  ฝากล่อง */

  /* #region  ฉาก */

  /* #region  side_A_front */
  side_A_front_x = new THREE.Mesh(plane_A_side, material);
  side_A_front_x.position.x = A / 2;
  side_A_front_x.position.y = B / 2;
  /* #endregion */
  /* #region  side_Glub_flap */
  side_Glue_flap = new THREE.Mesh(glue_flap, material);
  side_Glue_flap.rotation.x = Math.PI;
  /* #endregion */
  /* #region  side_A_back */
  side_A_back_x = new THREE.Mesh(plane_A_side, material);
  side_A_back_x.position.x = A / 2;
  side_A_back_x.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_top_lid */
  side_B_top_lid = new THREE.Mesh(plane_C_side, material);
  side_B_top_lid.position.x = A / 2;
  side_B_top_lid.position.y = C / 2;
  /* #endregion */
  /* #region  side_B_bottom_lid */
  side_B_bottom_lid = new THREE.Mesh(plane_C_side, material);
  side_B_bottom_lid.position.x = A / 2;
  side_B_bottom_lid.position.y = C / 2;
  /* #endregion */

  /* #endregion */
  /* #region  ฉาก - เส้น */

  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_x_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_x_edges.position.x = A / 2;
  side_A_front_x_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_Glub_flap */
  edges = new THREE.EdgesGeometry(glue_flap);
  side_Glue_flap_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_flap_edges.rotation.x = Math.PI;
  /* #endregion */
  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_x_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_x_edges.position.x = A / 2;
  side_A_back_x_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_top_lid */
  edges = new THREE.EdgesGeometry(plane_C_side);
  side_B_top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_top_lid_edges.position.x = A / 2;
  side_B_top_lid_edges.position.y = C / 2;
  /* #endregion */
  /* #region  side_B_bottom_lid */
  edges = new THREE.EdgesGeometry(plane_C_side);
  side_B_bottom_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_bottom_lid_edges.position.x = A / 2;
  side_B_bottom_lid_edges.position.y = C / 2;
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Top */
  pivot_Top_x = new THREE.Object3D();
  pivot_Top_x.add(side_B_top_lid);
  pivot_Top_x.position.y = B;
  // pivot_Top_x.rotation.x = -Math.PI / 2;
  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Glue_flap */
  pivot_Glue_flap = new THREE.Object3D();
  pivot_Glue_flap.add(side_Glue_flap);
  pivot_Glue_flap.position.y = B;
  // pivot_Glue_flap.rotation.x = Math.PI / 2;
  /* #endregion */
  /* #region  pivot_Front */
  pivot_Front_x = new THREE.Object3D();
  pivot_Front_x.add(side_A_front_x, pivot_Glue_flap);
  pivot_Front_x.position.y = C;
  // pivot_Front_x.rotation.x = Math.PI / 2;
  /* #endregion */
  /* #region  pivot_B_bottom_lid */
  pivot_B_bottom_lid = new THREE.Object3D();
  pivot_B_bottom_lid.add(side_B_bottom_lid, pivot_Front_x);
  pivot_B_bottom_lid.rotation.x = -Math.PI;
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back_x = new THREE.Object3D();
  pivot_Back_x.add(side_A_back_x, pivot_Top_x, pivot_B_bottom_lid);
  // pivot_Back_x.rotation.x = Math.PI / 2;
  pivot_Back_x.position.x = (-A * 2) | 0;
  scene.add(pivot_Back_x);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Top */
  pivot_Top_x_edges = new THREE.Object3D();
  pivot_Top_x_edges.add(side_B_top_lid_edges);
  pivot_Top_x_edges.position.y = B;
  // pivot_Top_x_edges.rotation.x = -Math.PI / 2;
  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Glue_flap */
  pivot_Glue_flap_edges = new THREE.Object3D();
  pivot_Glue_flap_edges.add(side_Glue_flap_edges);
  pivot_Glue_flap_edges.position.y = B;
  // pivot_Glue_flap_edges.rotation.x = Math.PI / 2;
  /* #endregion */
  /* #region  pivot_Front */
  pivot_Front_x_edges = new THREE.Object3D();
  pivot_Front_x_edges.add(side_A_front_x_edges, pivot_Glue_flap_edges);
  pivot_Front_x_edges.position.y = C;
  // pivot_Front_x_edges.rotation.x = Math.PI / 2;
  /* #endregion */
  /* #region  pivot_B_top_lid */
  pivot_B_bottom_lid_edges = new THREE.Object3D();
  pivot_B_bottom_lid_edges.add(side_B_bottom_lid_edges, pivot_Front_x_edges);
  pivot_B_bottom_lid_edges.rotation.x = -Math.PI;
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back_x_edges = new THREE.Object3D();
  pivot_Back_x_edges.add(
    side_A_back_x_edges,
    pivot_Top_x_edges,
    pivot_B_bottom_lid_edges
  );
  // pivot_Back_x_edges.rotation.x = Math.PI / 2;
  pivot_Back_x_edges.position.x = (-A * 2) | 0;
  scene.add(pivot_Back_x_edges);
  /* #endregion */

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

/* #region  ฟังก์ชั่นการหมุน */
/*  พับกล่อง */
const rotations1 = () => {
  /* #region  จุดหมุน */

  /* #region  กล่อง */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right.x = Math.PI / 2),
    y: (pivot_Right.y = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 178),
  });
  /* #endregion */
  /* #region  pivot_Lock_right */
  tween = gsap.timeline();
  tween.to(pivot_Lock_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_right.y = -(Math.PI / 180) * 88),
  });
  /* #endregion */

  // /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left.x = Math.PI / 2),
    y: (pivot_Left.y = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 178),
  });
  /* #endregion */
  /* #region  pivot_Lock_left */
  tween = gsap.timeline();
  tween.to(pivot_Lock_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Top */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = Math.PI),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  ฝากล่อง */

  /* #region  pivot_Top_x */
  tween = gsap.timeline();
  tween.to(pivot_Top_x.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_x.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_B_bottom_lid */
  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Front_x */
  tween = gsap.timeline();
  tween.to(pivot_Front_x.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_x.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_flap.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x.position, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Back_x.x = 0),
  });
  /* #endregion */

  /* #endregion */

  /* #region  modelCosmeticTube delay */
  setTimeout(() => {
    modelCosmeticTube();
  }, 6000);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - มีเส้น */

  /* #region  กล่อง */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_edges.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_edges.x = Math.PI / 2),
    y: (pivot_Right_edges.y = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right_edges.y = (Math.PI / 180) * 178),
  });
  /* #endregion */
  /* #region  pivot_Lock_right */
  tween = gsap.timeline();
  tween.to(pivot_Lock_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_right_edges.y = -(Math.PI / 180) * 88),
  });
  /* #endregion */

  // /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_edges.x = Math.PI / 2),
    y: (pivot_Left_edges.y = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left_edges.y = -(Math.PI / 180) * 178),
  });
  /* #endregion */
  /* #region  pivot_Lock_left */
  tween = gsap.timeline();
  tween.to(pivot_Lock_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Top */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = Math.PI),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  ฝากล่อง */

  /* #region  pivot_Top_x */
  tween = gsap.timeline();
  tween.to(pivot_Top_x_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_x_edges.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x_edges.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_B_bottom_lid */
  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid_edges.x = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Front_x_edges */
  tween = gsap.timeline();
  tween.to(pivot_Front_x_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_x_edges.x = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_flap_edges.x = Math.PI / 2),
  });
  /* #endregion */

  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x_edges.position, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Back_x_edges.x = 0),
  });
  /* #endregion */

  /* #endregion */

  /* #endregion */
};
/*  กางกล่อง */
const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Right.x = 0),
    y: (pivot_Right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Lock_right */
  tween = gsap.timeline();
  tween.to(pivot_Lock_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_right.y = 0),
  });
  /* #endregion */

  // /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Left.x = 0),
    y: (pivot_Left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Lock_left */
  tween = gsap.timeline();
  tween.to(pivot_Lock_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_left.y = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Top */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right.y = 0),
  });
  /* #endregion */

  /* #endregion */

  /* #region  pivot_Top_x */
  tween = gsap.timeline();
  tween.to(pivot_Top_x.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top_x.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back_x.x = 0),
  });
  /* #endregion */
  /* #region  pivot_B_bottom_lid */
  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid.x = -Math.PI),
  });
  /* #endregion */
  /* #region  pivot_Front_x_edges */
  tween = gsap.timeline();
  tween.to(pivot_Front_x.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Front_x.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Glue_flap.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Back_x (Test) */
  tween = gsap.timeline();
  tween.to(pivot_Back_x.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x.x = -(A * 2) | 0),
  });
  /* #endregion */

  /* #region  delModelCosmeticTube delay */
  setTimeout(() => {
    delModelCosmeticTube();
  }, 5000);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - มีเส้น*/

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Right_edges.x = 0),
    y: (pivot_Right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Lock_right */
  tween = gsap.timeline();
  tween.to(pivot_Lock_right_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_right_edges.y = 0),
  });
  /* #endregion */

  // /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Left_edges.x = 0),
    y: (pivot_Left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Lock_left */
  tween = gsap.timeline();
  tween.to(pivot_Lock_left_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_left_edges.y = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Top */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right_edges.y = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Bottom */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right_edges.y = 0),
  });
  /* #endregion */

  /* #endregion */

  /* #region  pivot_Top_x */
  tween = gsap.timeline();
  tween.to(pivot_Top_x_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top_x_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Back_x */
  tween = gsap.timeline();
  tween.to(pivot_Back_x_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back_x_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_B_bottom_lid */
  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid_edges.x = -Math.PI),
  });
  /* #endregion */
  /* #region  pivot_Front_x_edges */
  tween = gsap.timeline();
  tween.to(pivot_Front_x_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Front_x_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Glue_flap_edges.x = 0),
  });
  /* #endregion */
  tween = gsap.timeline();
  tween.to(pivot_Back_x_edges.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x_edges.x = -(A * 2)),
  });

  /* #endregion */
};
/* #endregion */

const updateSize = (a, b, c, d, o) => {
  A = a;
  B = b;
  C = c;
  D = d;
  O = o;

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

/* #region  modelCosmeticTube */
let modelObj;

const modelCosmeticTube = (object) => {
  var loader = new OBJLoader();
  var objFile =
    'https://raw.githubusercontent.com/l3osslunla/react-three-js/bossxdev/src/components/traybox/Soap.obj';

  loader.load(objFile, (object) => {
    /* #region  ขยายโมเดล */
    object.scale.set(23.9, 26, 20); // 23.9, 26, 20
    object.position.set(A / 2, B / 3.1, B / 2);
    object.rotation.x = Math.PI / 2;

    scene.add(object);
    modelObj = object;
    /* #endregion */
    /* #region  สร้างภาพฉาย */
    var box = new THREE.Box3().setFromObject(object);
    var box3Helper = new THREE.Box3Helper(box);

    // scene.add(box3Helper);
    /* #endregion */
  });
};
/* #endregion */
/* #region  delModelCosmeticTube */
const delModelCosmeticTube = () => {
  scene.remove(modelObj);
};
/* #endregion */

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
  modelCosmeticTube,
  delModelCosmeticTube,
};
