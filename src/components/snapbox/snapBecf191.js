import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import 'antd/dist/antd.css';

import {
  getLidCover,
  getGlueLid,
  getLRLid,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './models';

let controls, renderer, scene, camera;

let A = 100; //  กว้าง
let B = 50; //  ลึก
let C = 150; //  สูง
let O = 1; //  ความโปร่งแสง
let P = 15; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let G = 15; //  ประกาว
let F = 32; //  ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
let g_slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt
let w = (window.innerWidth * 75) / 100;
let h = window.innerHeight;

let edges;
let tween;

let side_A_front;
let side_A_back;
let side_glue_Lid;
let side_Bottom;
let side_lid_Bottom;
let side_B_left;
let side_lid_B_left;
let side_B_left_d;
let side_B_right;
let side_lid_B_right;
let side_B_right_d;
let side_lid_Cover;
let side_Top;
let side_Top_lid;

let side_A_front_edges;
let side_A_back_edges;
let side_glue_Lid_edges;
let side_Bottom_edges;
let side_lid_Bottom_edges;
let side_B_left_edges;
let side_lid_B_left_edges;
let side_B_left_d_edges;
let side_B_right_edges;
let side_lid_B_right_edges;
let side_B_right_d_edges;
let side_lid_Cover_edges;
let side_Top_edges;
let side_Top_lid_edges;

let pivot_A_front;
let pivot_Top_lid;
let pivot_Top;
let pivot_glue_Lid;
let pivot_A_back;
let pivot_Bottom;
let pivot_Bottom_lid;
let pivot_Group_bottom;
let pivot_group_A_back;
let pivot_lid_B_left;
let pivot_lid_B_left_d;
let pivot_B_left;
let pivot_lid_B_right;
let pivot_lid_B_right_d;
let pivot_group_B_right_d;
let pivot_B_right;
let pivot_All;

let pivot_A_front_edges;
let pivot_Top_lid_edges;
let pivot_Top_edges;
let pivot_glue_Lid_edges;
let pivot_A_back_edges;
let pivot_Bottom_edges;
let pivot_Bottom_lid_edges;
let pivot_Group_bottom_edges;
let pivot_group_A_back_edges;
let pivot_lid_B_left_edges;
let pivot_lid_B_left_d_edges;
let pivot_B_left_edges;
let pivot_lid_B_right_edges;
let pivot_lid_B_right_d_edges;
let pivot_group_B_right_d_edges;
let pivot_B_right_edges;
let pivot_All_edges;

/* #endregion */

const init = () => {
  /* #region  //? Three-3D Renderer */

  /* #region  //? Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  //? Camera */

  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.z = 700;

  /* #endregion */
  /* #region  //? axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  //? Material */

  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  //? WebGL Render */

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x404040);
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  //? The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  //? Spotlights */

  /* #region  //* Spotlight 1 */

  /*  Spotlight 1 */
  let spotLight = new THREE.SpotLight(0xffffff);
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
  // let helper = new THREE.CameraHelper(spotLight.shadow.camera);
  // scene.add(helper);

  /* #endregion */
  /* #region  //* Spotlight 2 */

  /*  Spotlight 2 */

  let spotLight2 = new THREE.SpotLight(0xffffff);
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
  // let helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);

  /* #endregion */

  /* #endregion */
  /* #region  //? Viewport on Resize */

  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  /* #endregion */
  /* #region  //? GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก */

  /* #region  //* side_A_front */

  side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material);

  /* #endregion */
  /* #region  //* side_A_back */

  side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material);
  side_A_back.rotation.y = Math.PI;

  side_glue_Lid = new THREE.Mesh(getGlueLid(C, G, g_slope), material);
  side_glue_Lid.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  //* side_Bottom */

  side_Bottom = new THREE.Mesh(getPlaneTopBottomShape(A, B), material);

  side_lid_Bottom = new THREE.Mesh(getLidCover(A, P), material);

  /* #endregion */
  /* #region  //* side_B_left */

  side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material);
  side_B_left.position.x = -B;

  side_lid_B_left = new THREE.Mesh(getLRLid(B, F), material);
  side_lid_B_left.rotation.y = Math.PI;

  side_B_left_d = new THREE.Mesh(getLRLid(B, F), material);
  side_B_left_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right */

  side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material);

  side_lid_B_right = new THREE.Mesh(getLRLid(B, F), material);

  side_B_right_d = new THREE.Mesh(getLRLid(B, F), material);
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  side_lid_Cover = new THREE.Mesh(getLidCover(A, P), material);
  side_lid_Cover.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_Top */

  side_Top = new THREE.Mesh(getPlaneTopBottomShape(A, B), material);

  side_Top_lid = new THREE.Mesh(getLidCover(A, P), material);
  side_Top_lid.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivot_A_front */
  /* #region  //! pivot_Group_bottom */

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom);
  pivot_Bottom.rotation.x = Math.PI;

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_lid_Bottom);
  pivot_Bottom_lid.position.y = -B;

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  /* #endregion */

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_Group_bottom);

  /* #endregion */
  /* #region  //! pivot_B_left */

  /* #region  //! pivot_group_A_back */

  /* #region  //* pivot_Top */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = B;
  pivot_Top_lid.add(side_Top_lid);

  pivot_Top = new THREE.Object3D();
  pivot_Top.position.set(-A, C, 0);
  pivot_Top.add(side_Top, pivot_Top_lid);

  /* #endregion */
  /* #region  //* pivot_A_back */

  pivot_glue_Lid = new THREE.Object3D();
  pivot_glue_Lid.position.x = -A;
  pivot_glue_Lid.add(side_glue_Lid);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, pivot_glue_Lid, pivot_Top);

  /* #endregion */

  pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -B;
  pivot_group_A_back.add(pivot_A_back);

  /* #endregion */

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.y = C;
  pivot_lid_B_left.add(side_lid_B_left);

  pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d);
  pivot_lid_B_left_d.position.x = -B;

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    pivot_lid_B_left,
    pivot_lid_B_left_d,
    pivot_group_A_back
  );

  /* #endregion */
  /* #region  //! pivot_B_right */

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.y = C;
  pivot_lid_B_right.add(side_lid_B_right);

  pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.add(side_B_right_d);
  pivot_lid_B_right_d.position.x = B;

  pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(pivot_lid_B_right, side_B_right, pivot_group_B_right_d);

  /* #endregion */

  /* #endregion */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_All);

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
};

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  let initDiv = document.getElementById('webgl');
  let newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('init').appendChild(newDiv);

  return init();
};

export default {
  init,
  updateSize,
};
