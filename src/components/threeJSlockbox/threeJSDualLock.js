import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 175;
var B = 52;
var C = 52;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight / 1.45;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;
var R; // ความยาวของเส้นรอบวง

var edges;
var tween;

var side_A_back;
var side_A_lid_bottom;
var side_A_bottom;
var side_A_front;
var side_A_lid_top;
var side_Lock;
var side_A_top;
var side_Bottom_lock;
var side_lr_Lid_lock_left;
var side_lr_Lid_lock_right;
var side_lr_Bottom_lock;
var side_Glue_lid;
var side_B_left;
var side_Left_lid;
var side_Left_lid_d;
var side_B_right;
var side_Right_lid;
var side_Right_lid_d;

var side_A_back_edges;
var side_A_lid_bottom_edges;
var side_A_bottom_edges;
var side_A_front_edges;
var side_A_lid_top_edges;
var side_Lock_edges;
var side_A_top_edges;
var side_Bottom_lock_edges;
var side_lr_Lid_lock_left_edges;
var side_lr_Lid_lock_right_edges;
var side_lr_Bottom_lock_edges;
var side_Glue_lid_edges;
var side_B_left_edges;
var side_Left_lid_edges;
var side_Left_lid_d_edges;
var side_B_right_edges;
var side_Right_lid_edges;
var side_Right_lid_d_edges;

var pivot_Lid_bottom;
var pivot_Bottom;
var pivot_Back;
var pivot_Lid_top;
var pivot_Top;
var pivot_lr_Lid_lock_left;
var pivot_lr_Lid_lock_right;
var pivot_lr_Bottom_lock;
var pivot_Lock;
var pivot_Bottom_lock;
var pivot_Glue_lid;
var pivot_Front;
var pivot_Left_lid;
var pivot_Left_lid_d;
var pivot_Left;
var pivot_Right_lid;
var pivot_Right_lid_d;
var pivot_Right;
var pivot_All;

var pivot_Lid_bottom_edges;
var pivot_Bottom_edges;
var pivot_Back_edges;
var pivot_Lid_top_edges;
var pivot_Top_edges;
var pivot_lr_Lid_lock_left_edges;
var pivot_lr_Lid_lock_right_edges;
var pivot_lr_Bottom_lock_edges;
var pivot_Lock_edges;
var pivot_Bottom_lock_edges;
var pivot_Glue_lid_edges;
var pivot_Front_edges;
var pivot_Left_lid_edges;
var pivot_Left_lid_d_edges;
var pivot_Left_edges;
var pivot_Right_lid_edges;
var pivot_Right_lid_d_edges;
var pivot_Right_edges;
var pivot_All_edges;
/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //  เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

  //  สร้างแกนหมุน
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  //  เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
  });

  //  Spotlight 1
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

  //  ภาพฉาย Spotlight 1
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  //  Spotlight 2
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

  //  ภาพฉาย Spotlight 2
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);

  //  Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);

  //  The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #region  โมเดลที่สร้างใหม่ */
  /* #region  ฝาเสียบ */
  var lid_shape = new THREE.Shape();
  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_shape.lineTo(A / 10, -P);
  lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var lid = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ
  /* #endregion */

  /* #region  ฝาเสียบกาว */
  var glue_Lid_shape = new THREE.Shape();
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_Lid_shape.lineTo(C / 10, -P);
  glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว
  /* #endregion */

  /* #region  ลิ้นกันฝุ่น */
  var lr_lid_shape = new THREE.Shape();
  lr_lid_shape.moveTo(0, 0);
  // // Front ....................................................
  lr_lid_shape.lineTo(0, (leng_lr_lib * 0.02) | 0);
  lr_lid_shape.lineTo((B * 0.039) | 0, (leng_lr_lib * 0.039) | 0);
  lr_lid_shape.bezierCurveTo(
    (B * 0.04) | 0,
    (leng_lr_lib * 0.267) | 0,
    0,
    (leng_lr_lib * 0.496) | 0,
    (B * 0.143) | 0,
    (leng_lr_lib * 0.496) | 0
  );
  // Center ...................................................
  lr_lid_shape.lineTo((B * 0.193) | 0, (leng_lr_lib * 0.496) | 0);
  lr_lid_shape.lineTo((B * 1.653) | 0, (leng_lr_lib * 0.496) | 0);
  // Rear .....................................................
  lr_lid_shape.lineTo((B * 1.653) | 0, (leng_lr_lib * 0.02) | 0);
  lr_lid_shape.lineTo((B * 1.654) | 0, 0);

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น
  /* #endregion */

  /* #region  ลิ้นกันฝุ่นล่าง */
  var lr_lid_d_shape = new THREE.Shape();
  lr_lid_d_shape.moveTo(0, 0);
  // // Front ....................................................
  lr_lid_d_shape.lineTo(0, (leng_lr_lib * 0.02) | 0);
  lr_lid_d_shape.lineTo((B * 0.039) | 0, (leng_lr_lib * 0.039) | 0);
  lr_lid_d_shape.bezierCurveTo(
    (B * 0.135) | 0,
    (leng_lr_lib * 0.27) | 0,
    0,
    (leng_lr_lib * 0.496) | 0,
    (B * 0.99) | 0,
    (leng_lr_lib * 0.496) | 0
  );
  // Center ...................................................
  lr_lid_d_shape.lineTo((B * 0.193) | 0, (leng_lr_lib * 0.496) | 0);
  lr_lid_d_shape.lineTo((B * 1.653) | 0, (leng_lr_lib * 0.496) | 0);
  // Rear .....................................................
  lr_lid_d_shape.lineTo((B * 1.653) | 0, (leng_lr_lib * 0.02) | 0);
  lr_lid_d_shape.lineTo((B * 1.654) | 0, 0);

  var lr_lid_d = new THREE.ShapeGeometry(lr_lid_d_shape); // ลิ้นกันฝุ่นล่างล่าง
  /* #endregion */

  /* #region  ฝาล็อค */
  var lr_Lock_shape = new THREE.Shape();
  lr_Lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo(0, (B * 1.654) | 0);
  // Center ...................................................
  lr_Lock_shape.lineTo((A * 0.989) | 0, (B * 1.654) | 0);
  // Rear .....................................................
  lr_Lock_shape.lineTo((A * 0.989) | 0, 0);

  var hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo((A * 0.029) | 0, (B * 0.827) | 0);
  hole_Lock_shape.bezierCurveTo(
    (A * 0.029) | 0,
    (B * 0.827) | 0,
    (A * 0.029) | 0,
    (B * 0.097) | 0,
    (A * 0.246) | 0,
    (B * 0.097) | 0
  );
  hole_Lock_shape.bezierCurveTo(
    (A * 0.246) | 0,
    (B * 0.097) | 0,
    (A * 0.469) | 0,
    (B * 0.097) | 0,
    (A * 0.469) | 0,
    (B * 0.827) | 0
  );
  hole_Lock_shape.bezierCurveTo(
    (A * 0.469) | 0,
    (B * 0.827) | 0,
    (A * 0.469) | 0,
    (B * 1.577) | 0,
    (A * 0.246) | 0,
    (B * 1.577) | 0
  );
  hole_Lock_shape.bezierCurveTo(
    (A * 0.246) | 0,
    (B * 1.577) | 0,
    (A * 0.029) | 0,
    (B * 1.577) | 0,
    (A * 0.029) | 0,
    (B * 0.827) | 0
  );
  lr_Lock_shape.holes.push(hole_Lock_shape);

  var hole_Lock_shape2 = new THREE.Path();
  hole_Lock_shape2.moveTo((A * 0.526) | 0, (B * 0.827) | 0);
  hole_Lock_shape2.bezierCurveTo(
    (A * 0.526) | 0,
    (B * 0.827) | 0,
    (A * 0.526) | 0,
    (B * 0.097) | 0,
    (A * 0.743) | 0,
    (B * 0.097) | 0
  );
  hole_Lock_shape2.bezierCurveTo(
    (A * 0.743) | 0,
    (B * 0.097) | 0,
    (A * 0.96) | 0,
    (B * 0.097) | 0,
    (A * 0.96) | 0,
    (B * 0.827) | 0
  );
  hole_Lock_shape2.bezierCurveTo(
    (A * 0.96) | 0,
    (B * 0.827) | 0,
    (A * 0.96) | 0,
    (B * 1.577) | 0,
    (A * 0.743) | 0,
    (B * 1.577) | 0
  );
  hole_Lock_shape2.bezierCurveTo(
    (A * 0.743) | 0,
    (B * 1.577) | 0,
    (A * 0.526) | 0,
    (B * 1.577) | 0,
    (A * 0.526) | 0,
    (B * 0.827) | 0
  );
  lr_Lock_shape.holes.push(hole_Lock_shape2);

  var lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค
  /* #endregion */

  /* #region  ลิ้นฝาล็อค */
  var lr_Bottom_shape = new THREE.Shape();
  // Front ....................................................
  lr_Bottom_shape.lineTo(0, (B * 0.27) | 0);
  // Center ...................................................
  lr_Bottom_shape.lineTo((A * 0.989) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lr_Bottom_shape.lineTo((A * 0.989) | 0, 0);

  var lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค
  /* #endregion */

  /* #region  ลิ้นกันฝุ่นฝาล็อค */
  var lr_Lid_lock_shape = new THREE.Shape();
  lr_Lid_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo((B * 0.2) | 0, (leng_lr_lib * 0.27) | 0);
  // Center ...................................................
  lr_Lid_lock_shape.lineTo((B * 1.616) | 0, (leng_lr_lib * 0.27) | 0);
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo((B * 1.654) | 0, 0);

  var lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค
  /* #endregion */

  /* #region  ตัวเสียบฝาล็อคล่าง */
  var lr_Bottom_lock_shape = new THREE.Shape();
  lr_Bottom_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.029) | 0, (B * 0.27) | 0);
  // Center ...................................................
  lr_Bottom_lock_shape.lineTo((A * 0.96) | 0, (B * 0.27) | 0);
  // Rear .....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.989) | 0, 0);

  var lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคล่าง
  /* #endregion */

  /* #region  plane_B_side */
  var plane_B_side_shape = new THREE.Shape();
  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.lineTo(0, C);
  plane_B_side_shape.lineTo((B * 1.654) | 0, C);
  plane_B_side_shape.lineTo((B * 1.654) | 0, 0);
  /* #endregion */

  /* #region  plane_Top_bottom */
  var plane_Top_bottom_shape = new THREE.Shape();
  plane_Top_bottom_shape.moveTo(0, 0);
  plane_Top_bottom_shape.lineTo(0, (B * 1.654) | 0);
  plane_Top_bottom_shape.lineTo(A, (B * 1.654) | 0);
  plane_Top_bottom_shape.lineTo(A, 0);
  /* #endregion */

  /* #region  โมเดลมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.ShapeGeometry(plane_B_side_shape); // plane_B_side
  var plane_Top_bottom = new THREE.ShapeGeometry(plane_Top_bottom_shape); // plane_Top_bottom
  /* #endregion */
  /* #endregion */

  /* #region  ฉาก */
  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  side_A_lid_bottom = new THREE.Mesh(lid, material);
  side_A_lid_bottom.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 180,
    0
  );

  side_A_bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_A_bottom.position.x = -A;
  side_A_bottom.position.y = -(B * 1.654) | 0;
  /* #endregion */

  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;

  side_A_lid_top = new THREE.Mesh(lid, material);
  side_A_lid_top.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_Lock = new THREE.Mesh(lr_Lock, material);
  side_Lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_A_top = new THREE.Mesh(plane_Top_bottom, material);

  side_Bottom_lock = new THREE.Mesh(lr_Bottom, material);
  side_Bottom_lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_lr_Lid_lock_left = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Lid_lock_left.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  side_lr_Lid_lock_right = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Lid_lock_right.rotation.set(0, 0, -(Math.PI / 180) * 90);

  side_lr_Bottom_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_lr_Bottom_lock.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.set(0, 0, (Math.PI / 180) * 90);
  /* #endregion */

  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -(B * 1.654) | 0;

  side_Left_lid = new THREE.Mesh(lr_lid, material);
  side_Left_lid.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_Left_lid_d = new THREE.Mesh(lr_lid_d, material);
  side_Left_lid_d.position.x = -(B * 1.654) | 0;
  side_Left_lid_d.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);

  side_Right_lid = new THREE.Mesh(lr_lid, material);

  side_Right_lid_d = new THREE.Mesh(lr_lid_d, material);
  side_Right_lid_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */
  /* #endregion */

  /* #region  ฉาก - แบบมีเส้น */
  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A / 2;
  side_A_back_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_A_lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_lid_bottom_edges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.position.x = -A;
  side_A_bottom_edges.position.y = -(B * 1.654) | 0;
  /* #endregion */

  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_A_lid_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_lid_top_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_lock_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Lid_lock_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_lock_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    0,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Lid_lock_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_lock_right_edges.rotation.set(0, 0, -(Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_lr_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Bottom_lock_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.set(0, 0, (Math.PI / 180) * 90);
  /* #endregion */

  /* #region  side_B_left */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -(B * 1.654) | 0;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_Left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(lr_lid_d);
  side_Left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_d_edges.position.x = -(B * 1.654) | 0;
  side_Left_lid_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  side_B_right */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_lid);
  side_Right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_lid_d);
  side_Right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Right_lid_d_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน */
  /* #region  pivot_Top */
  pivot_Lid_top = new THREE.Object3D();
  pivot_Lid_top.add(side_A_lid_top);
  pivot_Lid_top.position.set(0, (B * 1.654) | 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_A_top, pivot_Lid_top);
  pivot_Top.position.set(0, C, 0);
  /* #endregion */

  /* #region  pivot_Bottom */
  pivot_Lid_bottom = new THREE.Object3D();
  pivot_Lid_bottom.add(side_A_lid_bottom);
  pivot_Lid_bottom.position.set(0, -(B * 1.654) | 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_A_bottom, pivot_Lid_bottom);
  /* #endregion */

  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Bottom);
  /* #endregion */

  /* #region  pivot_Front */
  pivot_lr_Lid_lock_left = new THREE.Object3D();
  pivot_lr_Lid_lock_left.add(side_lr_Lid_lock_left);

  pivot_lr_Lid_lock_right = new THREE.Object3D();
  pivot_lr_Lid_lock_right.add(side_lr_Lid_lock_right);
  pivot_lr_Lid_lock_right.position.set((A * 0.994) | 0, 0, 0);

  pivot_lr_Bottom_lock = new THREE.Object3D();
  pivot_lr_Bottom_lock.add(side_lr_Bottom_lock);
  pivot_lr_Bottom_lock.position.set(0, -(B * 1.654) | 0, 0);

  pivot_Lock = new THREE.Object3D();
  pivot_Lock.add(
    side_Lock,
    pivot_lr_Lid_lock_left,
    pivot_lr_Lid_lock_right,
    pivot_lr_Bottom_lock
  );
  pivot_Lock.position.set(0, -(B * 0.27) | 0, 0);

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock, pivot_Lock);
  pivot_Bottom_lock.position.set((A / 175) | 0, 0, 0);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.set(A, 0, 0);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Top, pivot_Bottom_lock, pivot_Glue_lid);
  pivot_Front.position.set((B * 1.654) | 0, 0, 0);
  /* #endregion */

  /* #region  pivot_Left */
  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_Left_lid);
  pivot_Left_lid.position.set(0, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_Left_lid_d);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);
  pivot_Left.position.set(-A, 0, 0);
  /* #endregion */

  /* #region  pivot_Right */
  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_Right_lid);
  pivot_Right_lid.position.set(0, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_Right_lid_d);
  pivot_Right_lid_d.position.set((B * 1.654) | 0, 0, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_Right_lid,
    pivot_Right_lid_d,
    pivot_Front
  );
  /* #endregion */

  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right);
  scene.add(pivot_All);
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - แบบมีเส้น */
  /* #region  pivot_Top */
  pivot_Lid_top_edges = new THREE.Object3D();
  pivot_Lid_top_edges.add(side_A_lid_top_edges);
  pivot_Lid_top_edges.position.set(0, (B * 1.654) | 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_A_top_edges, pivot_Lid_top_edges);
  pivot_Top_edges.position.set(0, C, 0);
  /* #endregion */

  /* #region  pivot_Bottom */
  pivot_Lid_bottom_edges = new THREE.Object3D();
  pivot_Lid_bottom_edges.add(side_A_lid_bottom_edges);
  pivot_Lid_bottom_edges.position.set(0, -(B * 1.654) | 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_A_bottom_edges, pivot_Lid_bottom_edges);
  /* #endregion */

  /* #region  pivot_Back */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Bottom_edges);
  /* #endregion */

  /* #region  pivot_Front */
  pivot_lr_Lid_lock_left_edges = new THREE.Object3D();
  pivot_lr_Lid_lock_left_edges.add(side_lr_Lid_lock_left_edges);

  pivot_lr_Lid_lock_right_edges = new THREE.Object3D();
  pivot_lr_Lid_lock_right_edges.add(side_lr_Lid_lock_right_edges);
  pivot_lr_Lid_lock_right_edges.position.set((A * 0.994) | 0, 0, 0);

  pivot_lr_Bottom_lock_edges = new THREE.Object3D();
  pivot_lr_Bottom_lock_edges.add(side_lr_Bottom_lock_edges);
  pivot_lr_Bottom_lock_edges.position.set(0, -(B * 1.654) | 0, 0);

  pivot_Lock_edges = new THREE.Object3D();
  pivot_Lock_edges.add(
    side_Lock_edges,
    pivot_lr_Lid_lock_left_edges,
    pivot_lr_Lid_lock_right_edges,
    pivot_lr_Bottom_lock_edges
  );
  pivot_Lock_edges.position.set(0, -(B * 0.27) | 0, 0);

  pivot_Bottom_lock_edges = new THREE.Object3D();
  pivot_Bottom_lock_edges.add(side_Bottom_lock_edges, pivot_Lock_edges);
  pivot_Bottom_lock_edges.position.set((A / 175) | 0, 0, 0);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(A, 0, 0);

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Top_edges,
    pivot_Bottom_lock_edges,
    pivot_Glue_lid_edges
  );
  pivot_Front_edges.position.set((B * 1.654) | 0, 0, 0);
  /* #endregion */

  /* #region  pivot_Left */
  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_Left_lid_edges);
  pivot_Left_lid_edges.position.set(0, C, 0);

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_Left_lid_d_edges);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );
  pivot_Left_edges.position.set(-A, 0, 0);
  /* #endregion */

  /* #region  pivot_Right */
  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_Right_lid_edges);
  pivot_Right_lid_edges.position.set(0, C, 0);

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_Right_lid_d_edges);
  pivot_Right_lid_d_edges.position.set((B * 1.654) | 0, 0, 0);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges,
    pivot_Front_edges
  );
  /* #endregion */

  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Back_edges, pivot_Left_edges, pivot_Right_edges);
  scene.add(pivot_All_edges);
  /* #endregion */
  /* #endregion */
};

/* #region  ฟังก์ชันอนิเมชั่น */
/*  พับกล่อง */
const rotations1 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_Front */
  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 179),
  });
  /* #endregion */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 179),
  });
  /* #endregion */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_top.x = (Math.PI / 180) * 180),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = -(Math.PI / 180) * 180),
  });
  /* #endregion */

  /* #region  pivot_Lock */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_Bottom_lock.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_Front */
  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 179),
  });
  /* #endregion */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 179),
  });
  /* #endregion */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_top_edges.x = (Math.PI / 180) * 180),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_edges.x = -(Math.PI / 180) * 180),
  });
  /* #endregion */

  /* #region  pivot_Lock */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock_edges.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_right_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_Bottom_lock_edges.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #endregion */
};
/*  กางกล่อง */
const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_Front */
  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });
  /* #endregion */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_top.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Lock */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_Bottom_lock.x = 0),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_Front */
  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = 0),
  });
  /* #endregion */

  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Top */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_top_edges.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_edges.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Lock */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Lid_lock_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_Lid_lock_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_Bottom_lock_edges.x = 0),
  });
  /* #endregion */
  /* #endregion */
};
/* #endregion */

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

const updateSize = (a, b, c, r, p, ll) => {
  A = a;
  B = b;
  C = c;
  R = r;
  P = p;
  leng_lr_lib = ll;

  var initDiv = document.getElementById('webgl');
  var newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

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
