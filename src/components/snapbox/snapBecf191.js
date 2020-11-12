import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 125;
var B = 60;
var C = 235;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
var L = 0.3; // เปอร์เซนนต์
var P = 10; // ความกว้างเฉพาะด้านของฝาเสียบกาว
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
var side_A_lid_bottom;

var pivot_A_lid_bottom;
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
    wireframe: true,
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
  document.getElementById("webgl").append(renderer.domElement);

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #region  โมเดลที่สร้างใหม่ */
  /* #region  ฝาเสียบ */
  var lid_Cover_shape = new THREE.Shape();

  lid_Cover_shape.moveTo(0, 0);
  lid_Cover_shape.lineTo(A, 0);
  lid_Cover_shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(P - P / 35),
    A - A / 10,
    -P
  );
  lid_Cover_shape.lineTo(A / 10, -P);
  lid_Cover_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var lid_Cover = new THREE.ShapeGeometry(lid_Cover_shape); // ฝาเสียบ
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

  /* #region  ลิ้นกันฝุ่นบน */
  var lr_Lid_shape = new THREE.Shape();

  lr_Lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lid_shape.lineTo(3, 60);
  // Center ...................................................
  lr_Lid_shape.lineTo(25, 60);
  lr_Lid_shape.lineTo(55, 55);
  // Rear......................................................
  lr_Lid_shape.lineTo(60, 0);

  // New ....................................................
  lr_Lid_shape.moveTo(3, 60);
  // Front ....................................................
  lr_Lid_shape.bezierCurveTo(3, 65, 3, 70, 8, 70);
  // Center ...................................................
  lr_Lid_shape.lineTo(45, 70);
  lr_Lid_shape.bezierCurveTo(45, 70, 55, 70, 55, 60);
  // Rear......................................................
  lr_Lid_shape.lineTo(35, 60);

  var lr_Lid = new THREE.ShapeGeometry(lr_Lid_shape); // ลิ้นกันฝุ่น
  /* #endregion */

  /* #region  ลิ้นด้านล่าง (ลิ้น) */
  var lr_Lid_shape_d = new THREE.Shape();

  lr_Lid_shape_d.moveTo(0, 0);
  lr_Lid_shape_d.lineTo(0, (A * 0.19) | 0);
  lr_Lid_shape_d.lineTo((B * 0.06) | 0, (A * 0.19) | 0);

  var lr_Lid_d = new THREE.ShapeGeometry(lr_Lid_shape_d);
  /* #endregion */

  /* #region  ฝาเสียบล่าง */
  var lid_Bottom_shape = new THREE.Shape();

  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, (B * 0.4) | 0);
  lid_Bottom_shape.lineTo(A, (B * 0.4) | 0);
  lid_Bottom_shape.lineTo(A);

  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape); // ฝาเสียบล่าง
  /* #endregion */

  /* #region  ลิ้นฝาเสียบล่าง */
  var lid_Bottom_d_shape = new THREE.Shape();

  lid_Bottom_d_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, (B * 0.24) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.3) | 0, (B * 0.24) | 0);
  lid_Bottom_d_shape.lineTo((A * 0.25) | 0, 0);

  var lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape);
  /* #endregion */

  /* #region  ตัวเสียบล่าง */
  var lr_lid_Bottom_shape = new THREE.Shape();

  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo(5, 58);
  lr_lid_Bottom_shape.lineTo(120, 58);
  lr_lid_Bottom_shape.lineTo(125, 0);

  lr_lid_Bottom_shape.moveTo(112.5, 60);
  lr_lid_Bottom_shape.lineTo(112.5, 62);
  lr_lid_Bottom_shape.lineTo(87.5, 62);

  var lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ตัวเสียบล่าง
  /* #endregion */

  /* #region  ลิ้นเสียบบล่าง */
  var lid_Bottom_cover_shape = new THREE.Shape();

  lid_Bottom_cover_shape.moveTo(0, 0);
  lid_Bottom_cover_shape.lineTo(0, (A * 0.42) | 0);
  lid_Bottom_cover_shape.lineTo((B * 0.24) | 0, (A * 0.42) | 0);
  lid_Bottom_cover_shape.lineTo((B * 0.24) | 0, 0);

  var lid_Bottom_cover = new THREE.ShapeGeometry(lid_Bottom_cover_shape); // ลิ้นเสียบล่าง
  /* #endregion */

  /* #region  โมเดลมาตราฐาน */
  var plane_A_side_ = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา
  /* #endregion */
  /* #endregion */

  /* #region  ฉาก */
  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side_, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;
  /* #endregion */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side_, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.y = Math.PI;
  side_Glue_lid.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_Bottom */
  side_Bottom = new THREE.Mesh(lr_lid_Bottom, material);
  side_Bottom.rotation.x = Math.PI;
  side_Bottom.rotation.y = Math.PI;

  side_lid_Bottom = new THREE.Mesh(lid_Bottom_cover, material);
  side_lid_Bottom.rotation.x = Math.PI;
  side_lid_Bottom.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;

  side_lid_B_left = new THREE.Mesh(lr_Lid, material);
  side_lid_B_left.rotation.y = Math.PI;

  side_B_left_d = new THREE.Mesh(lr_Lid, material);
  side_B_left_d.rotation.set(Math.PI, Math.PI, 0);

  side_lid_B_left_d = new THREE.Mesh(lr_Lid_d, material);
  side_lid_B_left_d.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;

  side_lid_B_right = new THREE.Mesh(lr_Lid, material);
  side_lid_B_right.rotation.y = Math.PI;

  side_B_right_d = new THREE.Mesh(lr_Lid, material);
  side_B_right_d.rotation.x = Math.PI;
  side_B_right_d.rotation.y = Math.PI;

  side_lid_B_right_d = new THREE.Mesh(lr_Lid_d, material);
  side_lid_B_right_d.rotation.x = Math.PI;
  side_lid_B_right_d.rotation.y = Math.PI;

  side_lid_Cover = new THREE.Mesh(lid_Cover, material);
  side_lid_Cover.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_Top */
  side_Top = new THREE.Mesh(plane_Top_bottom, material);
  side_Top.position.x = A / 2;
  side_Top.position.y = B / 2;

  side_Top_lid = new THREE.Mesh(lid_Cover, material);
  side_Top_lid.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_bottom */
  side_A_bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_A_bottom.position.set(A / 2, B / 2, 0);

  side_A_lid_bottom = new THREE.Mesh(lid_Cover, material);
  side_A_lid_bottom.rotation.x = Math.PI;
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน */
  /* #region  pivot_A_front */
  /* #region  pivot_group_A_front */
  pivot_A_lid_bottom = new THREE.Object3D();
  pivot_A_lid_bottom.add(side_A_lid_bottom);
  pivot_A_lid_bottom.position.y = B;

  pivot_group_A_front = new THREE.Object3D();
  pivot_group_A_front.add(side_A_bottom, pivot_A_lid_bottom);
  pivot_group_A_front.rotation.x = Math.PI;
  /* #endregion */

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_group_A_front);
  /* #endregion */

  /* #region  pivot_B_left */
  /* #region  pivot_group_A_back */
  /* #region  pivot_A_back */
  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.set(-A, 0, 0);
  pivot_Glue_lid.add(side_Glue_lid);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, pivot_Glue_lid);
  /* #endregion */

  /* #region  pivot_Group_bottom */
  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom);

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.position.set(-(A * 0.3) | 0, -(B * 0.4) | 0, 0);
  pivot_Bottom_lid.add(side_lid_Bottom);

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);
  /* #endregion */

  pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.set(-B, 0, 0);
  pivot_group_A_back.add(pivot_A_back, pivot_Group_bottom);
  /* #endregion */

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.set(0, C, 0);
  pivot_lid_B_left.add(side_lid_B_left);

  pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d);

  pivot_lr_lid_B_left_d = new THREE.Object3D();
  pivot_lr_lid_B_left_d.position.set((-B / 1.8) | 0, (-A / 3.4) | 0, 0);
  pivot_lr_lid_B_left_d.add(side_lid_B_left_d);

  pivot_groub_B_left_d = new THREE.Object3D();
  pivot_groub_B_left_d.add(pivot_lid_B_left_d, pivot_lr_lid_B_left_d);

  pivot_B_left = new THREE.Object3D();
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
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
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
  //   pivot_All.rotation.y += Math.PI / 360;
  //   pivot_All_edges.rotation.y += Math.PI / 360;
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  //   rotations1,
  //   rotations2,
  updateSize,
};
