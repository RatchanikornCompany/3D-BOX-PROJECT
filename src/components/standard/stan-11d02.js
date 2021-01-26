/* #region  ประกาศตัวแปร */

import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 100; // กว้าง
var B = 50; // ลึก
var C = 150; // สูง
var D = 0.5; // ความหนา
var O = 1; // ความโปร่งแสง
let G = 13; //  ส่วนประกาว
let g_Slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt

var edges;
var tween;

var side_A_front;
var side_A_back;
var side_B_left;
var side_B_right;

var pivot_A_front;
var pivot_A_back;
var pivot_B_left;
var pivot_B_right;
var pivot_All;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, d, o) => {
  A = a;
  B = b;
  C = c;
  D = d;
  O = o;

  const initDiv = document.getElementById("webgl");
  const newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  Material */

  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: true,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x404040);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

  /* #endregion */
  /* #region  Spotlights */

  /* #region  Spotlight 1 */
  /*  Spotlight 1 */
  const spotLight = new THREE.SpotLight(0xffffff);
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
  const helper = new THREE.CameraHelper(spotLight.shadow.camera);
  // scene.add(helper);
  /* #endregion */
  /* #region  Spotlight 2 */
  /*  Spotlight 2 */
  const spotLight2 = new THREE.SpotLight(0xffffff);
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
  const helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);
  /* #endregion */

  /* #endregion */
  /* #region  Viewport on Resize */

  window.addEventListener("resize", function () {
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

  /* #region  ฝาเสียบกาว */

  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_Slope, G);
  glue_Lid_shape.lineTo(C - g_Slope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  /* #endregion */
  /* #region  โมเดลมาตราฐาน */
  const plane_side_A = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  const plane_side_B = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  const plane_A_Top_bottom = new THREE.BoxGeometry(A - 2, C - 125, D); // กว้าง x ลึก | ความหนา
  const plane_B_Top_bottom = new THREE.BoxGeometry(B - 2, C - 125, D);
  /* #endregion */

  /* #endregion */
  /* #region  วัตถุ */

  /* #region  side_A_front */

  side_A_front = new THREE.Mesh(plane_side_A, material);
  side_A_front.position.set(A / 2, C / 2, 0);

  const side_A_Top_front = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Top_front.position.set((A - 1) / 2, (C - 125) / 2, 0);

  const side_A_Bottom_front = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Bottom_front.position.set((A - 1) / 2, -(C - 125) / 2, 0);

  /* #endregion */
  /* #region  side_A_back */

  side_A_back = new THREE.Mesh(plane_side_A, material);
  side_A_back.position.set(-A / 2, C / 2, 0);

  const side_A_Top_back = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Top_back.position.set(-(A - 1) / 2, (C - 125) / 2, 0);

  const side_A_Bottom_back = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Bottom_back.position.set(-(A - 1) / 2, -(C - 125) / 2, 0);

  const side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.position.x - A;

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Mesh(plane_side_B, material);
  side_B_left.position.set(-B / 2, C / 2, 0);

  const side_B_Top_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Top_left.position.set(-(B - 1) / 2, (C - 125) / 2);

  const side_B_Bottom_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_left.position.set(-(B - 1) / 2, -(C - 125) / 2);

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Mesh(plane_side_B, material);
  side_B_right.position.set(B / 2, C / 2, 0);

  const side_B_Top_right = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Top_right.position.set((B - 1) / 2, (C - 125) / 2);

  const side_B_Bottom_right = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_right.position.set((B - 1) / 2, -(C - 125) / 2);

  /* #endregion */

  /* #endregion */
  /* #region  แกนหมุน */

  /* #region  pivot_A_front */

  const pivot_A_Top_front = new THREE.Object3D();
  pivot_A_Top_front.add(side_A_Top_front);
  pivot_A_Top_front.position.y = C;

  const pivot_A_Bottom_front = new THREE.Object3D();
  pivot_A_Bottom_front.add(side_A_Bottom_front);

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_A_Top_front, pivot_A_Bottom_front);

  /* #endregion */
  /* #region  pivot_A_back */

  const pivot_A_Top_back = new THREE.Object3D();
  pivot_A_Top_back.add(side_A_Top_back);
  pivot_A_Top_back.position.y = C;

  const pivot_A_Bottom_back = new THREE.Object3D();
  pivot_A_Bottom_back.add(side_A_Bottom_back);

  const pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A;

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_A_Top_back,
    pivot_A_Bottom_back,
    pivot_Glue_lid
  );
  pivot_A_back.position.x = -B;

  /* #endregion */
  /* #region  pivot_B_left */

  const pivot_Top_B_left = new THREE.Object3D();
  pivot_Top_B_left.add(side_B_Top_left);
  pivot_Top_B_left.position.y = C;

  const pivot_Bottom_B_left = new THREE.Object3D();
  pivot_Bottom_B_left.add(side_B_Bottom_left);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    pivot_Top_B_left,
    pivot_Bottom_B_left,
    pivot_A_back
  );

  /* #endregion */
  /* #region  pivot_B_right */

  const pivot_Top_B_right = new THREE.Object3D();
  pivot_Top_B_right.add(side_B_Top_right);
  pivot_Top_B_right.position.y = C;

  const pivot_Bottom_B_right = new THREE.Object3D();
  pivot_Bottom_B_right.add(side_B_Bottom_right);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(side_B_right, pivot_Top_B_right, pivot_Bottom_B_right);

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  scene.add(pivot_All);
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  updateSize,
};
