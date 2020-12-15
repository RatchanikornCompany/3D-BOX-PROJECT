import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 52;
var B = 52;
var C = 175;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_front;
var side_A_back;
var side_Glue_lid;
var side_Bottom;
var side_lid_Bottom;
var side_B_left;
var side_lid_B_left;
var side_B_left_d;
var side_lid_B_left_d;
var side_B_right;
var side_lid_B_right;
var side_B_right_d;
var side_lid_B_right_d;
var side_lid_Cover;
var side_Top;
var side_Top_lid;
var side_A_bottom;

var side_A_front_edges;
var side_A_back_edges;
var side_Glue_lid_edges;
var side_Bottom_edges;
var side_lid_Bottom_edges;
var side_B_left_edges;
var side_lid_B_left_edges;
var side_B_left_d_edges;
var side_lid_B_left_d_edges;
var side_B_right_edges;
var side_lid_B_right_edges;
var side_B_right_d_edges;
var side_lid_B_right_d_edges;
var side_lid_Cover_edges;
var side_Top_edges;
var side_Top_lid_edges;
var side_A_bottom_edges;
var side_A_left_bottom_edges;
var side_A_right_bottom_edges;

var pivot_A_left_bottom;
var pivot_A_right_bottom;
var pivot_group_A_front;
var pivot_A_front;
var pivot_Glue_lid;
var pivot_A_back;
var pivot_Bottom_lid;
var pivot_Group_bottom;
var pivot_Bottom;
var pivot_group_A_back;
var pivot_lid_B_left;
var pivot_lid_B_left_d;
var pivot_lr_lid_B_left_d;
var pivot_groub_B_left_d;
var pivot_B_left;
var pivot_lid_B_right;
var pivot_lid_B_right_d;
var pivot_lr_lid_B_right_d;
var pivot_group_B_right_d;
var pivot_B_right;
var pivot_Top_lid;
var pivot_Top;
var pivot_All;

var pivot_A_left_bottom_edges;
var pivot_A_right_bottom_edges;
var pivot_group_A_front_edges;
var pivot_A_front_edges;
var pivot_Glue_lid_edges;
var pivot_A_back_edges;
var pivot_Bottom_lid_edges;
var pivot_Group_bottom_edges;
var pivot_Bottom_edges;
var pivot_group_A_back_edges;
var pivot_lid_B_left_edges;
var pivot_lid_B_left_d_edges;
var pivot_lr_lid_B_left_d_edges;
var pivot_groub_B_left_d_edges;
var pivot_B_left_edges;
var pivot_lid_B_right_edges;
var pivot_lid_B_right_d_edges;
var pivot_lr_lid_B_right_d_edges;
var pivot_group_B_right_d_edges;
var pivot_b_Right_edges;
var pivot_Top_lid_edges;
var pivot_Top_edges;
var pivot_All_edges;
/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.z = 800; // 800

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

  // ภาพฉาย Spotlight 1
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  // Spotlight 2
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

  //The mouse controls
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

  var lid_cover = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ
  /* #endregion */

  /* #region  ฝาเสียบกาว */
  var glue_lid_shape = new THREE.Shape();

  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.moveTo(0, 0);
  glue_lid_shape.lineTo(C, 0);
  glue_lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_lid_shape.lineTo(C / 10, -P);
  glue_lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  var glue_lid = new THREE.ShapeGeometry(glue_lid_shape); // ฝาเสียบกาว
  /* #endregion */

  /* #region  ลิ้นกันฝุ่น */
  var lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (leng_lr_lib * 0.1) | 0);
  lr_lid_shape.lineTo(B * 0.05, (leng_lr_lib * 0.15) | 0);
  lr_lid_shape.lineTo(B * 0.15, (leng_lr_lib * 0.9) | 0);
  // Center ...................................................
  lr_lid_shape.lineTo(B * 0.2, leng_lr_lib);
  lr_lid_shape.lineTo(B, leng_lr_lib);
  // Rear......................................................
  lr_lid_shape.lineTo(B, 0);
  lr_lid_shape.lineTo(0, 0);

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น
  /* #endregion */

  /* #region  ลิ้นด้านล่าง */
  var lid_shape_d = new THREE.Shape();

  lid_shape_d.moveTo(0, 0);
  lid_shape_d.lineTo(0, (A * 0.47) | 0);
  lid_shape_d.lineTo((B * 0.47) | 0, (A * 0.47) | 0);
  lid_shape_d.lineTo((B * 0.47) | 0, (A * 0.29) | 0);
  lid_shape_d.lineTo(B, 0);
  lid_shape_d.lineTo(0, 0);

  var lid_d = new THREE.ShapeGeometry(lid_shape_d); // ลิ้นด้านล่าง
  /* #endregion */

  /* #region  ลิ้นด้านล่าง (ลิ้น) */
  var lr_lid_shape_d = new THREE.Shape();

  lr_lid_shape_d.moveTo(0, 0);
  lr_lid_shape_d.lineTo(0, (A * 0.19) | 0);
  lr_lid_shape_d.lineTo((B * 0.06) | 0, (A * 0.19) | 0);

  var lr_lid_d = new THREE.ShapeGeometry(lr_lid_shape_d);
  /* #endregion */

  /* #region  ฝาเสียบล่าง */
  var lid_bottom_shape = new THREE.Shape();

  lid_bottom_shape.moveTo(0, 0);
  lid_bottom_shape.lineTo(0, (B * 0.47) | 0);
  lid_bottom_shape.lineTo(A, (B * 0.47) | 0);
  lid_bottom_shape.lineTo(A);

  var lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape); // ฝาเสียบล่าง
  /* #endregion */

  /* #region  ลิ้นฝาเสียบล่าง */
  var lid_Bottom_d_shape = new THREE.Shape();

  lid_Bottom_d_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, (B * 0.19) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.3) | 0, (B * 0.19) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.3) | 0, 0);

  var lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape);
  /* #endregion */

  /* #region  ตัวเสียบล่าง */
  var lr_lid_Bottom_shape = new THREE.Shape();

  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo((A * 0.3) | 0, (B * 0.5) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.7) | 0, (B * 0.5) | 0);
  lr_lid_Bottom_shape.lineTo(A, 0);

  var lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ตัวเสียบล่าง
  /* #endregion */

  /* #region  ลิ้นเสียบบล่าง */
  var lid_bottom_cover_shape = new THREE.Shape();

  // lid_bottom_cover_shape.moveTo(0, 0);
  // lid_bottom_cover_shape.lineTo(0, (A * 0.42) | 0);
  // lid_bottom_cover_shape.lineTo((B * 0.2) | 0, (A * 0.42) | 0);
  // lid_bottom_cover_shape.lineTo((B * 0.2) | 0, 0);
  // lid_bottom_cover_shape.lineTo(0, 0);

  var lid_bottom_cover = new THREE.ShapeGeometry(lid_bottom_cover_shape); // ลิ้นเสียบล่าง
  /* #endregion */

  /* #region  โมเดลมาตราฐาน */
  var plane_side_A = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_side_B = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา
  /* #endregion */
  /* #endregion */

  /* #region  ฉาก */
  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_side_A, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;
  /* #endregion */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_side_A, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  side_Glue_lid = new THREE.Mesh(glue_lid, material);
  side_Glue_lid.rotation.y = Math.PI;
  side_Glue_lid.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_Bottom */
  side_Bottom = new THREE.Mesh(lr_lid_Bottom, material);
  side_Bottom.rotation.x = Math.PI;
  side_Bottom.rotation.y = Math.PI;

  side_lid_Bottom = new THREE.Mesh(lid_bottom_cover, material);
  side_lid_Bottom.rotation.x = Math.PI;
  side_lid_Bottom.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_side_B, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;

  side_lid_B_left = new THREE.Mesh(lr_lid, material);

  side_B_left_d = new THREE.Mesh(lid_d, material);
  side_B_left_d.rotation.x = Math.PI;

  side_lid_B_left_d = new THREE.Mesh(lr_lid_d, material);
  side_lid_B_left_d.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_side_B, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  side_lid_B_right = new THREE.Mesh(lr_lid, material);
  side_lid_B_right.rotation.y = Math.PI;

  side_B_right_d = new THREE.Mesh(lid_d, material);
  side_B_right_d.rotation.x = Math.PI;
  side_B_right_d.rotation.y = Math.PI;

  side_lid_B_right_d = new THREE.Mesh(lr_lid_d, material);
  side_lid_B_right_d.rotation.x = Math.PI;
  side_lid_B_right_d.rotation.y = Math.PI;

  side_lid_Cover = new THREE.Mesh(lid_cover, material);
  side_lid_Cover.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_Top */
  side_Top = new THREE.Mesh(plane_top_bottom, material);
  side_Top.position.x = A / 2;
  side_Top.position.y = B / 2;

  side_Top_lid = new THREE.Mesh(lid_cover, material);
  side_Top_lid.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_bottom */
  side_A_bottom = new THREE.Mesh(lid_bottom, material);
  side_A_bottom.rotation.x = Math.PI;

  var side_A_left_bottom = new THREE.Mesh(lid_Bottom_d, material);
  side_A_left_bottom.rotation.x = Math.PI;

  var side_A_right_bottom = new THREE.Mesh(lid_Bottom_d, material);
  side_A_right_bottom.rotation.x = Math.PI;
  side_A_right_bottom.rotation.y = Math.PI;
  /* #endregion */
  /* #endregion */

  /* #region  ฉาก - เส้น */
  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_side_A);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;
  /* #endregion */

  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_side_A);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A / 2;
  side_A_back_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(glue_lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.y = Math.PI;
  side_Glue_lid_edges.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_Bottom */
  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.rotation.x = Math.PI;
  side_Bottom_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_bottom_cover);
  side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_edges.rotation.x = Math.PI;
  side_lid_Bottom_edges.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_B_left */
  edges = new THREE.EdgesGeometry(plane_side_B);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B / 2;
  side_B_left_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lid_d);
  side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_d);
  side_lid_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_left_d_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_B_right */
  edges = new THREE.EdgesGeometry(plane_side_B);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_edges.position.x = B / 2;
  side_B_right_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_d);
  side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_d_edges.rotation.x = Math.PI;
  side_B_right_d_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid_d);
  side_lid_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_B_right_d_edges.rotation.x = Math.PI;
  side_lid_B_right_d_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_cover);
  side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_Top */
  edges = new THREE.EdgesGeometry(plane_top_bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_edges.position.x = A / 2;
  side_Top_edges.position.y = B / 2;

  edges = new THREE.EdgesGeometry(lid_cover);
  side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lid_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_bottom */
  edges = new THREE.EdgesGeometry(lid_bottom);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom_d);
  side_A_left_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_left_bottom_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom_d);
  side_A_right_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_right_bottom_edges.rotation.x = Math.PI;
  side_A_right_bottom_edges.rotation.y = Math.PI;
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน */
  /* #region  pivot_A_front */
  /* #region  pivot_group_A_front */
  pivot_A_left_bottom = new THREE.Object3D();
  pivot_A_left_bottom.position.set(0, (-B * 0.47) | 0, 0);
  pivot_A_left_bottom.add(side_A_left_bottom);

  pivot_A_right_bottom = new THREE.Object3D();
  pivot_A_right_bottom.position.set(A, (-B * 0.47) | 0, 0);
  pivot_A_right_bottom.add(side_A_right_bottom);

  pivot_group_A_front = new THREE.Object3D();
  pivot_group_A_front.add(
    side_A_bottom,
    pivot_A_left_bottom,
    pivot_A_right_bottom
  );
  /* #endregion */

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.position.set(0, 0, 0);
  pivot_A_front.add(side_A_front, pivot_group_A_front);
  /* #endregion */

  /* #region  pivot_B_left */
  /* #region  pivot_group_A_back */
  /* #region  pivot_A_back */
  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.set(-A, 0, 0);
  pivot_Glue_lid.add(side_Glue_lid);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.position.set(0, 0, 0);
  pivot_A_back.add(side_A_back, pivot_Glue_lid);
  /* #endregion */

  /* #region  pivot_Group_bottom */
  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.position.set(0, 0, 0);
  pivot_Bottom.add(side_Bottom);

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.position.set((-B * 0.3) | 0, (-A * 0.5) | 0, 0);
  pivot_Bottom_lid.add(side_lid_Bottom);

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.position.set(0, 0, 0);
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);
  /* #endregion */

  pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.set(-B, 0, 0);
  pivot_group_A_back.add(pivot_A_back, pivot_Group_bottom);
  /* #endregion */

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.set(-B, C, 0);
  pivot_lid_B_left.add(side_lid_B_left);

  pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.position.set(-B, 0, 0);
  pivot_lid_B_left_d.add(side_B_left_d);

  pivot_lr_lid_B_left_d = new THREE.Object3D();
  pivot_lr_lid_B_left_d.position.set((-B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_left_d.add(side_lid_B_left_d);

  pivot_groub_B_left_d = new THREE.Object3D();
  pivot_groub_B_left_d.position.set(0, 0, 0);
  pivot_groub_B_left_d.add(pivot_lid_B_left_d, pivot_lr_lid_B_left_d);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.position.set(0, 0, 0);
  pivot_B_left.add(
    pivot_lid_B_left,
    side_B_left,
    pivot_groub_B_left_d,
    pivot_group_A_back
  );
  /* #endregion */

  /* #region  pivot_B_right */
  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.set(B, C, 0);
  pivot_lid_B_right.add(side_lid_B_right);

  pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.position.set(B, 0, 0);
  pivot_lid_B_right_d.add(side_B_right_d);

  pivot_lr_lid_B_right_d = new THREE.Object3D();
  pivot_lr_lid_B_right_d.position.set((B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_right_d.add(side_lid_B_right_d);

  pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.position.set(0, 0, 0);
  pivot_group_B_right_d.add(pivot_lid_B_right_d, pivot_lr_lid_B_right_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.set(A, 0, 0);
  pivot_B_right.add(pivot_lid_B_right, side_B_right, pivot_group_B_right_d);
  /* #endregion */

  /* #region  pivot_Top */
  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.set(0, B, 0);
  pivot_Top_lid.add(side_Top_lid);

  pivot_Top = new THREE.Object3D();
  pivot_Top.position.set(0, C | 0, 0);
  pivot_Top.add(side_Top, pivot_Top_lid);
  /* #endregion */

  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  scene.add(pivot_All);
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right, pivot_Top);
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน */
  /* #region  pivot_A_front */
  /* #region  pivot_group_A_front */
  pivot_A_left_bottom_edges = new THREE.Object3D();
  pivot_A_left_bottom_edges.position.set(0, (-B * 0.47) | 0, 0);
  pivot_A_left_bottom_edges.add(side_A_left_bottom_edges);

  pivot_A_right_bottom_edges = new THREE.Object3D();
  pivot_A_right_bottom_edges.position.set(A, (-B * 0.47) | 0, 0);
  pivot_A_right_bottom_edges.add(side_A_right_bottom_edges);

  pivot_group_A_front_edges = new THREE.Object3D();
  pivot_group_A_front_edges.add(
    side_A_bottom_edges,
    pivot_A_left_bottom_edges,
    pivot_A_right_bottom_edges
  );
  /* #endregion */

  pivot_A_front_edges = new THREE.Object3D();
  pivot_A_front_edges.position.set(0, 0, 0);
  pivot_A_front_edges.add(side_A_front_edges, pivot_group_A_front_edges);
  /* #endregion */

  /* #region  pivot_B_left */
  /* #region  pivot_group_A_back */
  /* #region  pivot_A_back */
  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.position.set(-A, 0, 0);
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);

  pivot_A_back_edges = new THREE.Object3D();
  pivot_A_back_edges.position.set(0, 0, 0);
  pivot_A_back_edges.add(side_A_back_edges, pivot_Glue_lid_edges);
  /* #endregion */

  /* #region  pivot_Group_bottom */
  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.position.set(0, 0, 0);
  pivot_Bottom_edges.add(side_Bottom_edges);

  pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.position.set((-B * 0.3) | 0, (-A * 0.5) | 0, 0);
  pivot_Bottom_lid_edges.add(side_lid_Bottom_edges);

  pivot_Group_bottom_edges = new THREE.Object3D();
  pivot_Group_bottom_edges.position.set(0, 0, 0);
  pivot_Group_bottom_edges.add(pivot_Bottom_edges, pivot_Bottom_lid_edges);
  /* #endregion */

  pivot_group_A_back_edges = new THREE.Object3D();
  pivot_group_A_back_edges.position.set(-B, 0, 0);
  pivot_group_A_back_edges.add(pivot_A_back_edges, pivot_Group_bottom_edges);
  /* #endregion */

  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.position.set(-B, C, 0);
  pivot_lid_B_left_edges.add(side_lid_B_left_edges);

  pivot_lid_B_left_d_edges = new THREE.Object3D();
  pivot_lid_B_left_d_edges.position.set(-B, 0, 0);
  pivot_lid_B_left_d_edges.add(side_B_left_d_edges);

  pivot_lr_lid_B_left_d_edges = new THREE.Object3D();
  pivot_lr_lid_B_left_d_edges.position.set((-B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_left_d_edges.add(side_lid_B_left_d_edges);

  pivot_groub_B_left_d_edges = new THREE.Object3D();
  pivot_groub_B_left_d_edges.position.set(0, 0, 0);
  pivot_groub_B_left_d_edges.add(
    pivot_lid_B_left_d_edges,
    pivot_lr_lid_B_left_d_edges
  );

  pivot_B_left_edges = new THREE.Object3D();
  pivot_B_left_edges.position.set(0, 0, 0);
  pivot_B_left_edges.add(
    pivot_lid_B_left_edges,
    side_B_left_edges,
    pivot_groub_B_left_d_edges,
    pivot_group_A_back_edges
  );
  /* #endregion */

  /* #region  pivot_B_right */
  pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.position.set(B, C, 0);
  pivot_lid_B_right_edges.add(side_lid_B_right_edges);

  pivot_lid_B_right_d_edges = new THREE.Object3D();
  pivot_lid_B_right_d_edges.position.set(B, 0, 0);
  pivot_lid_B_right_d_edges.add(side_B_right_d_edges);

  pivot_lr_lid_B_right_d_edges = new THREE.Object3D();
  pivot_lr_lid_B_right_d_edges.position.set((B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_right_d_edges.add(side_lid_B_right_d_edges);

  pivot_group_B_right_d_edges = new THREE.Object3D();
  pivot_group_B_right_d_edges.position.set(0, 0, 0);
  pivot_group_B_right_d_edges.add(
    pivot_lid_B_right_d_edges,
    pivot_lr_lid_B_right_d_edges
  );

  pivot_b_Right_edges = new THREE.Object3D();
  pivot_b_Right_edges.position.set(A, 0, 0);
  pivot_b_Right_edges.add(
    pivot_lid_B_right_edges,
    side_B_right_edges,
    pivot_group_B_right_d_edges
  );
  /* #endregion */

  /* #region  pivot_Top */
  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.position.set(0, B, 0);
  pivot_Top_lid_edges.add(side_Top_lid_edges);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.position.set(0, C | 0, 0);
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);
  /* #endregion */

  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  scene.add(pivot_All_edges);
  pivot_All_edges.add(
    pivot_A_front_edges,
    pivot_B_left_edges,
    pivot_b_Right_edges,
    pivot_Top_edges
  );
  /* #endregion */
  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

/* #region  ฟังก์ชั่นอนิเมชั่น */
/*  พับกล่อง */
const rotations1 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = -Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d.y = -Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d.y = Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front.x = -Math.PI / 1.9),
  });
  /* #endregion */
  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid_edges.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_edges.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_edges.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_edges.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid_edges.x = -Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back_edges.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left_edges.y = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_b_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_b_Right_edges.y = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d_edges.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d_edges.y = -Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d_edges.y = Math.PI / 2.7),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d_edges.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front_edges.x = -Math.PI / 1.9),
  });
  /* #endregion */
};
/*  กางกล่อง */
const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front.x = 0),
  });
  /* #endregion */
  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_b_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_b_Right_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_group_A_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front_edges.x = 0),
  });
  /* #endregion */
};
/* #endregion */

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
  //   pivot_All.rotation.y += Math.PI / 360;
  //   pivot_All_edges.rotation.y += Math.PI / 360;
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
