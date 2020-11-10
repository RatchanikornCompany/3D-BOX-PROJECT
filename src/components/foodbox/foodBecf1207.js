import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 220;
var B = 220;
var C = 30;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

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
  hole_plane_A_shape.moveTo((A * 0.464) | 0, 0); // 102, 26
  // hole_plane_A_shape.bezierCurveTo(
  //   (A * 0.464) | 0, // 102
  //   (C * 0.867) | 0, // 26
  //   (A * 0.464) | 0, // 102
  //   (C * 0.6) | 0, // 18
  //   (A * 0.5) | 0, // 110
  //   (C * 0.6) | 0 // 18
  // );
  // hole_plane_A_shape.bezierCurveTo(
  //   (A * 0.5) | 0, // 110
  //   (C * 0.6) | 0, // 18
  //   (A * 0.537) | 0, // 118
  //   (C * 0.6) | 0, // 18
  //   (A * 0.537) | 0, // 118
  //   (C * 0.867) | 0 // 26
  // );
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.537) | 0, // 118
    0, // 26
    (A * 0.537) | 0, // 118
    (C * 1.14) | 0, // 34
    (A * 0.5) | 0, // 110
    (C * 1.14) | 0 // 34
  );
  hole_plane_A_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 1.14) | 0, // 34
    (A * 0.464) | 0, // 102
    (C * 1.14) | 0, // 34
    (A * 0.464) | 0, // 102
    0 // 26
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
  var lid_Bottom_shape = new THREE.Shape(); // ฝาล่าง
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, (C * 1.734) | 0); // 0, 52
  lid_Bottom_shape.lineTo((A * 0.182) | 0, (C * 1.734) | 0); // 40, 52
  lid_Bottom_shape.lineTo((A * 0.182) | 0, (C * 1.9) | 0); // 40, 57
  lid_Bottom_shape.lineTo((A * 0.364) | 0, (C * 1.9) | 0); // 80, 57
  lid_Bottom_shape.lineTo((A * 0.364) | 0, (C * 1.734) | 0); // 80, 52
  lid_Bottom_shape.lineTo((A * 0.637) | 0, (C * 1.734) | 0); // 140, 52
  lid_Bottom_shape.lineTo((A * 0.637) | 0, (C * 1.9) | 0); // 140, 57
  lid_Bottom_shape.lineTo((A * 0.819) | 0, (C * 1.9) | 0); // 180, 57
  lid_Bottom_shape.lineTo((A * 0.819) | 0, (C * 1.734) | 0); // 180, 52
  lid_Bottom_shape.lineTo(A, (C * 1.734) | 0); // 220,52
  lid_Bottom_shape.lineTo(A, 0); // 220, 0

  var hole_lid_Bottom_shape = new THREE.Path();
  hole_lid_Bottom_shape.moveTo((A * 0.464) | 0, (C * 0.867) | 0); // 102, 26
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.464) | 0, // 102
    (C * 0.867) | 0, // 26
    (A * 0.464) | 0, // 102
    (C * 0.6) | 0, // 18
    (A * 0.5) | 0, // 110
    (C * 0.6) | 0 // 18
  );
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 0.6) | 0, // 18
    (A * 0.537) | 0, // 118
    (C * 0.6) | 0, // 18
    (A * 0.537) | 0, // 118
    (C * 0.867) | 0 // 26
  );
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.537) | 0, // 118
    (C * 0.867) | 0, // 26
    (A * 0.537) | 0, // 118
    (C * 1.14) | 0, // 34
    (A * 0.5) | 0, // 110
    (C * 1.14) | 0 // 34
  );
  hole_lid_Bottom_shape.bezierCurveTo(
    (A * 0.5) | 0, // 110
    (C * 1.14) | 0, // 34
    (A * 0.464) | 0, // 102
    (C * 1.14) | 0, // 34
    (A * 0.464) | 0, // 102
    (C * 0.867) | 0 // 26
  );
  lid_Bottom_shape.holes.push(hole_lid_Bottom_shape);

  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape); // ฝาล่าง
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
  var side_A_front_top = new THREE.Mesh(plane_A, material);

  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.set(A / 2, B / 2, 0);
  /* #endregion */

  /* #region  b_Left */
  var side_B_front_left = new THREE.Mesh(plane_B, material);
  side_B_front_left.rotation.y = (Math.PI / 180) * 180;

  var side_B_left_lid = new THREE.Mesh(lr_Lid, material);
  side_B_left_lid.rotation.y = (Math.PI / 180) * 180;

  var side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);

  var side_B_left_lid_d = new THREE.Mesh(lr_Lid_d, material);
  side_B_left_lid_d.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */

  /* #region  b_Right */
  var side_B_front_right = new THREE.Mesh(plane_B, material);

  var side_B_right_lid = new THREE.Mesh(lr_Lid, material);

  var side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);

  var side_B_right_lid_d = new THREE.Mesh(lr_Lid_d, material);
  side_B_right_lid_d.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  a_Back */
  var side_A_top = new THREE.Mesh(plane_A_top, material);

  var side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.set(A / 2, B / 2, 0);

  var side_Lid_bottom = new THREE.Mesh(lid_Bottom, material);
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_A_front */
  var pivot_A_front_top = new THREE.Object3D();
  pivot_A_front_top.add(side_A_front_top);
  pivot_A_front_top.position.y = B;

  var pivot_B_front_left = new THREE.Object3D();
  pivot_B_front_left.add(side_B_front_left);

  var pivot_B_front_right = new THREE.Object3D();
  pivot_B_front_right.add(side_B_front_right);
  pivot_B_front_right.position.x = A;

  var pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(
    side_A_front,
    pivot_A_front_top,
    pivot_B_front_left,
    pivot_B_front_right
  );
  pivot_A_front.position.y = C;
  /* #endregion */

  /* #region  pivot_B_left */
  var pivot_B_left_lid = new THREE.Object3D();
  pivot_B_left_lid.add(side_B_left_lid);
  pivot_B_left_lid.position.y = B;

  var pivot_B_left_lid_d = new THREE.Object3D();
  pivot_B_left_lid_d.add(side_B_left_lid_d);

  var pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left, pivot_B_left_lid, pivot_B_left_lid_d);
  /* #endregion */

  /* #region  pivot_B_right */
  var pivot_B_right_lid = new THREE.Object3D();
  pivot_B_right_lid.add(side_B_right_lid);
  pivot_B_right_lid.position.y = B;

  var pivot_B_right_lid_d = new THREE.Object3D();
  pivot_B_right_lid_d.add(side_B_right_lid_d);

  var pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_B_right_lid, pivot_B_right_lid_d);
  pivot_B_right.position.x = A;
  /* #endregion */

  /* #region  pivot_A_back */
  var pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_A_front);
  pivot_A_top.position.y = B;

  var pivot_Lid_bottom = new THREE.Object3D();
  pivot_Lid_bottom.add(side_Lid_bottom);
  pivot_Lid_bottom.rotation.x = (Math.PI / 180) * 180;

  var pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_A_top,
    pivot_B_left,
    pivot_B_right,
    pivot_Lid_bottom
  );
  /* #endregion */

  /* #region  pivot_All */
  var pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);
  scene.add(pivot_All);
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
  // pivot_All.rotation.y += Math.PI / 360;
  // pivot_All_edges.rotation.y += Math.PI / 360;
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
