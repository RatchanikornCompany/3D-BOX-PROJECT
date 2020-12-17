import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 220;
var B = 220;
var C = 30;
var D = 0.5;
var w = (window.innerWidth * 75) / 100;
var h = window.innerHeight;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_front_top;
var side_A_front;
var side_B_front_left;
var side_B_left_lid;
var side_B_left;
var side_B_left_lid_d;
var side_B_front_right;
var side_B_right_lid;
var side_B_right;
var side_B_right_lid_d;
var side_A_top;
var side_A_back;
var side_Lid_bottom;
var side_Lid_bottom_d;
var side_lr_lid_Bottom_left;
var side_lr_lid_Bottom_right;

var side_A_front_top_edges;
var side_A_front_edges;
var side_B_front_left_edges;
var side_B_left_lid_edges;
var side_B_left_edges;
var side_B_left_lid_d_edges;
var side_B_front_right_edges;
var side_B_right_lid_edges;
var side_B_right_edges;
var side_B_right_lid_d_edges;
var side_A_top_edges;
var side_A_back_edges;
var side_Lid_bottom_edges;
var side_Lid_bottom_d_edges;
var side_lr_lid_Bottom_left_edges;
var side_lr_lid_Bottom_right_edges;

var pivot_A_front_top;
var pivot_B_front_left;
var pivot_B_front_right;
var pivot_A_front;
var pivot_B_left_lid;
var pivot_B_left_lid_d;
var pivot_B_left;
var pivot_B_right_lid;
var pivot_B_right_lid_d;
var pivot_B_right;
var pivot_A_top;
var pivot_lr_lid_Bottom_left;
var pivot_lr_lid_Bottom_right;
var pivot_Lid_bottom_d;
var pivot_Lid_bottom;
var pivot_A_back;
var pivot_All;

var pivot_A_front_top_edges;
var pivot_B_front_left_edges;
var pivot_B_front_right_edges;
var pivot_A_front_edges;
var pivot_B_left_lid_edges;
var pivot_B_left_lid_d_edges;
var pivot_B_left_edges;
var pivot_B_right_lid_edges;
var pivot_B_right_lid_d_edges;
var pivot_B_right_edges;
var pivot_A_top_edges;
var pivot_lr_lid_Bottom_left_edges;
var pivot_lr_lid_Bottom_right_edges;
var pivot_Lid_bottom_d_edges;
var pivot_Lid_bottom_edges;
var pivot_A_back_edges;
var pivot_All_edges;

/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  //เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.set(0, 100, 1200); // 0, 0, 800

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

  // Spotlight 1
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(
    (spotLight.position.x = 1200),
    (spotLight.position.y = 1200),
    (spotLight.position.z = 1200)
  );
  spotLight.castShadow = true;
  scene.add(spotLight);

  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 0.5;
  spotLight.shadow.camera.far = 500;
  spotLight.focus = 1;

  // ภาพฉาย Spotlight 1
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  // Spotlight 2
  var spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.position.set(
    (spotLight2.position.x = -1200),
    (spotLight2.position.y = 1200),
    (spotLight2.position.z = 1200)
  );
  spotLight2.castShadow = true;
  scene.add(spotLight2);

  spotLight2.shadow.mapSize.width = 512;
  spotLight2.shadow.mapSize.height = 512;
  spotLight2.shadow.camera.near = 0.5;
  spotLight2.shadow.camera.far = 500;
  spotLight2.focus = 1;

  // ภาพฉาย Spotlight 2
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);

  //Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);

  //  Viewport on Resize
  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #region  โมเดลที่สร้างใหม่ */

  /* #region  ฝาบน */
  var plane_A_shape = new THREE.Shape();
  plane_A_shape.moveTo(0, 0);
  plane_A_shape.lineTo(0, (C * 0.667) | 0); // 0, 20
  plane_A_shape.bezierCurveTo(
    0,
    (C * 0.667) | 0, // 20
    0,
    C, // 30
    (A * 0.046) | 0, // 10
    C // 30
  );
  plane_A_shape.lineTo((A * 0.955) | 0, C); // 210, 30
  plane_A_shape.bezierCurveTo(
    (A * 0.955) | 0, // 210
    C, // 30
    A, // 220
    C, // 30
    A, //220
    (C * 0.667) | 0 // 20
  );
  plane_A_shape.lineTo(A, 0); // 220

  var hole_plane_A_shape = new THREE.Path();
  hole_plane_A_shape.moveTo((A * 0.464) | 0, 0); // 92, 0
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    0, // 0
    (A * 0.464) | 0, // 102
    (C * 0.267) | 0, // 8
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0 // 8
  );
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.5) | 0, // 100
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    (C * 0.267) | 0, // 8
    (A * 0.537) | 0, // 109
    0 // 0
  );
  plane_A_shape.holes.push(hole_plane_A_shape);

  var plane_A = new THREE.ShapeGeometry(plane_A_shape); // ฝาบน
  /* #endregion */

  /* #region  ฝา A */
  var plane_A_top_shape = new THREE.Shape();
  plane_A_top_shape.moveTo(0, 0);
  plane_A_top_shape.lineTo(0, C);
  plane_A_top_shape.lineTo(A, C);
  plane_A_top_shape.lineTo(A, 0);

  var hole_plane_A_top_shape = new THREE.Path();
  hole_plane_A_top_shape.moveTo(72, 15); // 72, 15
  hole_plane_A_top_shape.bezierCurveTo(
    72, // 72
    15, // 26
    72, // 72
    24, // 24
    80, // 80
    24 // 24
  );
  hole_plane_A_top_shape.bezierCurveTo(
    80, // 80
    24, // 24
    88, // 88
    24, // 24
    88, // 88
    15 // 15
  );
  hole_plane_A_top_shape.bezierCurveTo(
    88, // 88
    15, // 15
    88, // 88
    6, // 6
    80, // 80
    6 // 6
  );
  hole_plane_A_top_shape.bezierCurveTo(
    80, // 80
    6, // 6
    72, // 72
    6, // 6
    72, // 72
    15 // 15
  );
  plane_A_top_shape.holes.push(hole_plane_A_top_shape);

  var hole_2_plane_A_top_shape = new THREE.Path();
  hole_2_plane_A_top_shape.moveTo(132, 15); // 132, 15
  hole_2_plane_A_top_shape.bezierCurveTo(
    132, // 132
    15, // 26
    132, // 132
    24, // 24
    140, // 140
    24 // 24
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    140, // 140
    24, // 24
    148, // 148
    24, // 24
    148, // 148
    15 // 15
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    148, // 148
    15, // 15
    148, // 148
    6, // 6
    140, // 140
    6 // 6
  );
  hole_2_plane_A_top_shape.bezierCurveTo(
    140, // 140
    6, // 6
    132, // 132
    6, // 6
    132, // 132
    15 // 15
  );
  plane_A_top_shape.holes.push(hole_2_plane_A_top_shape);

  var plane_A_top = new THREE.ShapeGeometry(plane_A_top_shape);
  /* #endregion */

  /* #region  ฝาข้าง */
  var plane_B_shape = new THREE.Shape();
  plane_B_shape.moveTo(0, 0);
  plane_B_shape.lineTo(0, B); // 220
  plane_B_shape.lineTo((C * 0.667) | 0, B); // 20, 220
  plane_B_shape.bezierCurveTo(
    (C * 0.667) | 0, // 20
    B, // 220
    C, // 30
    B, // 220
    C, // 30
    (B * 0.955) | 0 // 210
  );
  plane_B_shape.lineTo(C, 0);

  var plane_B = new THREE.ShapeGeometry(plane_B_shape); // ฝาข้าง
  /* #endregion */

  /* #region  ฝาล่าง */
  var lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, C); // 0, 30
  lid_Bottom_shape.lineTo(A, C); // 220, 30
  lid_Bottom_shape.lineTo(A, 0); // 220, 0

  var hole_lid_Bottom_shape = new THREE.Path();
  hole_lid_Bottom_shape.moveTo((A * 0.464) | 0, C); // 102, 30
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lid_Bottom_shape.holes.push(hole_lid_Bottom_shape);

  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape); // ฝาล่าง (ถ่อนบน)

  var lid_Bottom_d_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, C); // 0, 30
  lid_Bottom_d_shape.lineTo(A, C); // 220, 30
  lid_Bottom_d_shape.lineTo(A, 0); // 220, 0

  var hole_lid_Bottom_d_shape = new THREE.Path();
  hole_lid_Bottom_d_shape.moveTo((A * 0.464) | 0, C); // 102, 30
  hole_lid_Bottom_d_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    C, // 30
    (A * 0.464) | 0, // 102
    (C * 0.734) | 0, // 22
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0 // 22
  );
  hole_lid_Bottom_d_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    (C * 0.734) | 0, // 22
    (A * 0.537) | 0, // 118
    C // 30
  );
  lid_Bottom_d_shape.holes.push(hole_lid_Bottom_d_shape);

  var lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape); // ฝาล่าง (ถ่อนล่าง)

  var lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo(0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, 0);

  var lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ลิ้นฝาล่าง
  /* #endregion */

  /* #region  ลิ้นฝาเสียบบน */
  var lr_Lid_shape = new THREE.Shape(); // ลิ้นฝาเสียบล่าง
  lr_Lid_shape.moveTo(0, 0);
  lr_Lid_shape.lineTo(0, (leng_lr_lib * 0.455) | 0); // 0, 30
  lr_Lid_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.455) | 0); // 25, 30
  lr_Lid_shape.lineTo(C, 15); // 30, 15
  lr_Lid_shape.lineTo(C, 0); // 30, 0

  var lr_Lid = new THREE.ShapeGeometry(lr_Lid_shape); // ลิ้นฝาเสียบบน
  /* #endregion */

  /* #region  ลิ้นฝาเสียบล่าง */
  var lr_Lid_d_shape = new THREE.Shape(); // ลิ้นฝาเสียบบน
  lr_Lid_d_shape.moveTo(0, 0); // 0, 0
  lr_Lid_d_shape.lineTo(0, (leng_lr_lib * 0.54) | 0); // 0, 35
  lr_Lid_d_shape.lineTo((C * 0.067) | 0, (leng_lr_lib * 0.788) | 0); // 2, 52
  lr_Lid_d_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.788) | 0); // 25, 52
  lr_Lid_d_shape.lineTo(C, (leng_lr_lib * 0.455) | 0); // 30, 30
  lr_Lid_d_shape.lineTo(C, 0); // 30, 0

  var lr_Lid_d = new THREE.ShapeGeometry(lr_Lid_d_shape); // ลิ้นฝาเสียบล่าง
  /* #endregion */

  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | ลึก x สูง | ความหนา
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก */

  /* #region  a_Front */
  side_A_front_top = new THREE.Mesh(plane_A, material);

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.set(A / 2, B / 2, 0);
  /* #endregion */

  /* #region  b_Left */
  side_B_front_left = new THREE.Mesh(plane_B, material);
  side_B_front_left.rotation.y = (Math.PI / 180) * 180;

  side_B_left_lid = new THREE.Mesh(lr_Lid, material);
  side_B_left_lid.rotation.y = (Math.PI / 180) * 180;

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);

  side_B_left_lid_d = new THREE.Mesh(lr_Lid_d, material);
  side_B_left_lid_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */

  /* #region  b_Right */
  side_B_front_right = new THREE.Mesh(plane_B, material);

  side_B_right_lid = new THREE.Mesh(lr_Lid, material);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);

  side_B_right_lid_d = new THREE.Mesh(lr_Lid_d, material);
  side_B_right_lid_d.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  a_Back */
  side_A_top = new THREE.Mesh(plane_A_top, material);

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.set(A / 2, B / 2, 0);

  side_Lid_bottom = new THREE.Mesh(lid_Bottom, material);
  side_Lid_bottom.rotation.x = (Math.PI / 180) * 180;

  side_Lid_bottom_d = new THREE.Mesh(lid_Bottom_d, material);
  side_Lid_bottom_d.position.y = -C;

  side_lr_lid_Bottom_left = new THREE.Mesh(lr_lid_Bottom, material);
  side_lr_lid_Bottom_left.rotation.x = (Math.PI / 180) * 180;

  side_lr_lid_Bottom_right = new THREE.Mesh(lr_lid_Bottom, material);
  side_lr_lid_Bottom_right.rotation.x = (Math.PI / 180) * 180;
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก - แบบมีเส้น */

  /* #region  a_Front */
  edges = new THREE.EdgesGeometry(plane_A);
  side_A_front_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_edges.position.set(A / 2, B / 2, 0);
  /* #endregion */

  /* #region  b_Left */
  edges = new THREE.EdgesGeometry(plane_B);
  side_B_front_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_front_left_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_lid_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.set(-C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_d);
  side_B_left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_lid_d_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */

  /* #region  b_Right */
  edges = new THREE.EdgesGeometry(plane_B);
  side_B_front_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_edges.position.set(C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_d);
  side_B_right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_lid_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  a_Back */
  edges = new THREE.EdgesGeometry(plane_A_top);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.set(A / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_Lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_bottom_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lid_Bottom_d);
  side_Lid_bottom_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_bottom_d_edges.position.y = -C;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lr_lid_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_Bottom_left_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lr_lid_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_lid_Bottom_right_edges.rotation.x = (Math.PI / 180) * 180;
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_A_front */
  pivot_A_front_top = new THREE.Object3D();
  pivot_A_front_top.add(side_A_front_top);
  pivot_A_front_top.position.y = B;

  pivot_B_front_left = new THREE.Object3D();
  pivot_B_front_left.add(side_B_front_left);

  pivot_B_front_right = new THREE.Object3D();
  pivot_B_front_right.add(side_B_front_right);
  pivot_B_front_right.position.x = A;

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(
    side_A_front,
    pivot_A_front_top,
    pivot_B_front_left,
    pivot_B_front_right
  );
  pivot_A_front.position.y = C;

  /* #endregion */

  /* #region  pivot_B_left */
  pivot_B_left_lid = new THREE.Object3D();
  pivot_B_left_lid.add(side_B_left_lid);
  pivot_B_left_lid.position.y = B;

  pivot_B_left_lid_d = new THREE.Object3D();
  pivot_B_left_lid_d.add(side_B_left_lid_d);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left, pivot_B_left_lid, pivot_B_left_lid_d);

  /* #endregion */

  /* #region  pivot_B_right */
  pivot_B_right_lid = new THREE.Object3D();
  pivot_B_right_lid.add(side_B_right_lid);
  pivot_B_right_lid.position.y = B;

  pivot_B_right_lid_d = new THREE.Object3D();
  pivot_B_right_lid_d.add(side_B_right_lid_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_B_right_lid, pivot_B_right_lid_d);
  pivot_B_right.position.x = A;

  /* #endregion */

  /* #region  pivot_A_back */
  pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_A_front);
  pivot_A_top.position.y = B;

  pivot_lr_lid_Bottom_left = new THREE.Object3D();
  pivot_lr_lid_Bottom_left.add(side_lr_lid_Bottom_left);
  pivot_lr_lid_Bottom_left.position.set((A * 0.182) | 0, -C, 0);

  pivot_lr_lid_Bottom_right = new THREE.Object3D();
  pivot_lr_lid_Bottom_right.add(side_lr_lid_Bottom_right);
  pivot_lr_lid_Bottom_right.position.set((A * 0.637) | 0, -C, 0);

  pivot_Lid_bottom_d = new THREE.Object3D();
  pivot_Lid_bottom_d.add(
    side_Lid_bottom_d,
    pivot_lr_lid_Bottom_left,
    pivot_lr_lid_Bottom_right
  );
  pivot_Lid_bottom_d.position.y = -C;

  pivot_Lid_bottom = new THREE.Object3D();
  pivot_Lid_bottom.add(side_Lid_bottom, pivot_Lid_bottom_d);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_A_top,
    pivot_B_left,
    pivot_B_right,
    pivot_Lid_bottom
  );

  /* #endregion */

  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - แบบมีเส้น */

  /* #region  pivot_A_front */
  pivot_A_front_top_edges = new THREE.Object3D();
  pivot_A_front_top_edges.add(side_A_front_top_edges);
  pivot_A_front_top_edges.position.y = B;

  pivot_B_front_left_edges = new THREE.Object3D();
  pivot_B_front_left_edges.add(side_B_front_left_edges);

  pivot_B_front_right_edges = new THREE.Object3D();
  pivot_B_front_right_edges.add(side_B_front_right_edges);
  pivot_B_front_right_edges.position.x = A;

  pivot_A_front_edges = new THREE.Object3D();
  pivot_A_front_edges.add(
    side_A_front_edges,
    pivot_A_front_top_edges,
    pivot_B_front_left_edges,
    pivot_B_front_right_edges
  );
  pivot_A_front_edges.position.y = C;
  /* #endregion */

  /* #region  pivot_B_left */
  pivot_B_left_lid_edges = new THREE.Object3D();
  pivot_B_left_lid_edges.add(side_B_left_lid_edges);
  pivot_B_left_lid_edges.position.y = B;

  pivot_B_left_lid_d_edges = new THREE.Object3D();
  pivot_B_left_lid_d_edges.add(side_B_left_lid_d_edges);

  pivot_B_left_edges = new THREE.Object3D();
  pivot_B_left_edges.add(
    side_B_left_edges,
    pivot_B_left_lid_edges,
    pivot_B_left_lid_d_edges
  );
  /* #endregion */

  /* #region  pivot_B_right */
  pivot_B_right_lid_edges = new THREE.Object3D();
  pivot_B_right_lid_edges.add(side_B_right_lid_edges);
  pivot_B_right_lid_edges.position.y = B;

  pivot_B_right_lid_d_edges = new THREE.Object3D();
  pivot_B_right_lid_d_edges.add(side_B_right_lid_d_edges);

  pivot_B_right_edges = new THREE.Object3D();
  pivot_B_right_edges.add(
    side_B_right_edges,
    pivot_B_right_lid_edges,
    pivot_B_right_lid_d_edges
  );
  pivot_B_right_edges.position.x = A;
  /* #endregion */

  /* #region  pivot_A_back */
  pivot_A_top_edges = new THREE.Object3D();
  pivot_A_top_edges.add(side_A_top_edges, pivot_A_front_edges);
  pivot_A_top_edges.position.y = B;

  pivot_lr_lid_Bottom_left_edges = new THREE.Object3D();
  pivot_lr_lid_Bottom_left_edges.add(side_lr_lid_Bottom_left_edges);
  pivot_lr_lid_Bottom_left_edges.position.set((A * 0.182) | 0, -C, 0);

  pivot_lr_lid_Bottom_right_edges = new THREE.Object3D();
  pivot_lr_lid_Bottom_right_edges.add(side_lr_lid_Bottom_right_edges);
  pivot_lr_lid_Bottom_right_edges.position.set((A * 0.637) | 0, -C, 0);

  pivot_Lid_bottom_d_edges = new THREE.Object3D();
  pivot_Lid_bottom_d_edges.add(
    side_Lid_bottom_d_edges,
    pivot_lr_lid_Bottom_left_edges,
    pivot_lr_lid_Bottom_right_edges
  );
  pivot_Lid_bottom_d_edges.position.y = -C;

  pivot_Lid_bottom_edges = new THREE.Object3D();
  pivot_Lid_bottom_edges.add(side_Lid_bottom_edges, pivot_Lid_bottom_d_edges);

  pivot_A_back_edges = new THREE.Object3D();
  pivot_A_back_edges.add(
    side_A_back_edges,
    pivot_A_top_edges,
    pivot_B_left_edges,
    pivot_B_right_edges,
    pivot_Lid_bottom_edges
  );
  /* #endregion */

  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_A_back_edges);
  scene.add(pivot_All_edges);
  /* #endregion */

  /* #endregion */
};

/* #region  ฟังก์ชันอนิเมชั่น */
/*  พับกล่อง */
const rotations1 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back.x = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right_edges.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_edges.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d_edges.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d_edges.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right_edges.y = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d_edges.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back_edges.x = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #endregion */
};
/*  กางกล่อง */
const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_edges.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left_edges.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right_edges.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back_edges.x = (Math.PI / 180) * 0),
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

const updateSize = (a, b, c) => {
  A = a;
  B = b;
  C = c;

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
