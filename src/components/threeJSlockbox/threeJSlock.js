import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import 'antd/dist/antd.css';

import {
  getLid,
  getGlueLid,
  getLRLid,
  getLRBottom,
  getLRLock,
  getLRLidLock,
  getLRBottomLock,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './models';
import { foldBox, expandBox } from './animate';

var controls, renderer, scene, camera;

let A = 70; //  ความกว้าง
let B = 30; //  ความลึก
let C = 105; //  ความสูง

let O = 1; //  ความโปร่งแสง

let G = 15; //  ส่วนประกาว
let gSlope = 5; //  ควมเฉียงส่วนประกาว

let P = 15; //  ลิ้นเสียบ ค่า Defualt
let plugSlope = 5; //  ความเฉียงฝาเสียบ

let LockHeight = 15; //  ความสูงฐานล็อค
let lockSlope = 5;

let R = 20; //  ความยาวของเส้นรอบวง

let pivot_Right;
let pivot_Right_lid;
let pivot_Right_lid_d;
let pivot_Left;
let pivot_Left_lid;
let pivot_Left_lid_d;
let pivot_Front;
let pivot_Front_lid_d;
let pivot_Front_lid;
let pivot_Glue_lid;
let pivot_Top;
let pivot_Top_lid;
let pivot_Bottom;
let pivot_Bottom_left;
let pivot_Bottom_right;
let pivot_Bottom_lock;
let pivot_Lock_Bottom_lid;

const init = () => {
  /* #region  //? Three-3D Renderer */

  /* #region  //* Scene */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);
  /* #endregion */
  /* #region  //* เซ็ทตำแหน่งกล้อง */
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;
  /* #endregion */
  /* #region  //* สร้างแกนหมุน */
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);
  /* #endregion */
  /* #region  //* เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน */
  const material = new THREE.MeshBasicMaterial({
    color: '#FFFFFF',
    side: THREE.DoubleSide,
    wireframe: true,
    opacity: O,
    transparent: true,
  });
  /* #endregion */
  /* #region  //* WebGL Render */
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x404040);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);
  /* #endregion */
  /* #region  //* Viewport on Resize */
  window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  //* The mouse controls */
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;
  /* #endregion */
  /* #region  //* Spotlights */

  /* #region  //* Spotlight 1 */
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
  // var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  // scene.add(helper);
  /* #endregion */
  /* #region  //* Spotlight 2 */
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
  // var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);
  /* #endregion */

  /* #endregion */
  /* #region  //* Viewport on Resize */
  window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  //* GridHelper */
  scene.add(new THREE.GridHelper(1000, 100));
  /* #endregion */

  /* #endregion */
  /* #region  //* วัตถุ */

  /* #region  //* side_A_back */

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material);

  /* #endregion */
  /* #region  //* side_A_top */

  const side_Top = new THREE.Mesh(getPlaneTopBottomShape(A, B), material);

  const side_Top_lid = new THREE.Mesh(getLid(A, P, plugSlope), material);

  /* #endregion */
  /* #region  //* side_A_bottom */

  const side_Bottom = new THREE.Mesh(getLRBottom(A, B), material);
  side_Bottom.rotation.x = Math.PI;

  const side_Lock_lid = new THREE.Mesh(getLRLock(A, B, R), material);
  side_Lock_lid.rotation.x = Math.PI;

  const side_lr_Left_lock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material
  );
  side_lr_Left_lock.rotation.set(Math.PI, Math.PI, 0);

  const side_lr_Right_lock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material
  );
  side_lr_Right_lock.rotation.x = Math.PI;

  const side_Bottom_lock = new THREE.Mesh(
    getLRBottomLock(A, LockHeight, lockSlope),
    material
  );
  side_Bottom_lock.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_left */

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material);
  // side_B_left.position.x = -B;

  const side_lr_Lid_left = new THREE.Mesh(getLRLid(A, B), material);

  const side_lr_Lid_left_d = new THREE.Mesh(getLRLid(A, B), material);
  side_lr_Lid_left_d.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_left_d.position.x = B;

  /* #endregion */
  /* #region  //* side_B_right */

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material);

  const side_lr_Lid_right = new THREE.Mesh(getLRLid(A, B), material);
  side_lr_Lid_right.rotation.y = Math.PI;

  const side_lr_Lid_right_d = new THREE.Mesh(getLRLid(A, B), material);
  side_lr_Lid_right_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_A_front */

  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material);

  const side_Glue_lid = new THREE.Mesh(getGlueLid(C, G, gSlope), material);

  const side_Lid_front_d = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material
  );
  side_Lid_front_d.rotation.x = Math.PI;

  const side_Lid = new THREE.Mesh(getLid(A, P, plugSlope), material);

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //* pivot_Top */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid);
  pivot_Top_lid.position.y = B;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, pivot_Top_lid);
  pivot_Top.position.y = C;

  /* #endregion */
  /* #region  //* pivot_Back */

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top, pivot_Glue_lid);

  /* #endregion */
  /* #region  //* pivot_Left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left);
  pivot_Left_lid.position.y = C;

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);
  pivot_Left.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Front */

  pivot_Front_lid = new THREE.Object3D();
  pivot_Front_lid.add(side_Lid);
  pivot_Front_lid.rotation.set(0, Math.PI, Math.PI);
  pivot_Front_lid.position.y = -B;

  pivot_Front_lid_d = new THREE.Object3D();
  pivot_Front_lid_d.add(side_Lid_front_d, pivot_Front_lid);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Front_lid_d, pivot_Left);
  pivot_Front.position.x = B;

  /* #endregion */
  /* #region  //* pivot_Right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right);
  pivot_Right_lid.position.set(B, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_Front,
    pivot_Right_lid,
    pivot_Right_lid_d
  );
  pivot_Right.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Bottom */

  pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock);
  pivot_Bottom_left.position.x = 1;

  pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock);
  pivot_Bottom_right.position.x = A - 1;

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock);
  pivot_Bottom_lock.position.y = -B;

  pivot_Lock_Bottom_lid = new THREE.Object3D();
  pivot_Lock_Bottom_lid.add(
    side_Lock_lid,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_Lock_Bottom_lid.position.y = -(B / 2) | 0;

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, pivot_Lock_Bottom_lid);

  /* #endregion */
  /* #region  //* pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Right, pivot_Bottom);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
};

const rotations = (value) => {
  value
    ? foldBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid
      )
    : expandBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid
      );
};

const updateSize = (a, b, c, amodel, bmodel, cmodel, floor, o, r) => {
  A = a;
  B = b;
  C = c;
  O = o;
  R = r;

  let initDiv = document.getElementById('webgl');
  let newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('init').appendChild(newDiv);

  return init();
};

export default {
  init,
  rotations,
  updateSize,
};
