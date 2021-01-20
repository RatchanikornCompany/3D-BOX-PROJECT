/* #region  ตัวแปร */

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import OrbitControls from 'three-orbitcontrols';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

let controls, renderer, scene, camera;

let A = 250;
let B = 130;
let C = 250;
let D = 0.5;
let O = 0.5; //  ความโปร่งแสง
let w = window.innerWidth;
let h = window.innerHeight;
let L = 0.3; // เปอร์เซนนต์
let P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว

let tween;

let side_A_front;
let side_A_Front_d;
let side_A_Bottom_front;
let side_A_Bottom_Front_left;
let side_A_Bottom_Front_right;
let side_Glue_lid;
let side_B_left;
let side_B_Left_Bottom_right;
let side_B_Left_Bottom_D_right;
let side_B_Left_Bottom_Lid_right;
let side_B_Left_l;
let side_B_Left_Bottom_left;
let side_B_Left_Bottom_D_left;
let side_B_Left_Bottom_Lid_left;
let side_B_right;
let side_B_Right_Bottom_left;
let side_B_Right_Bottom_Lid_left;
let side_B_Right_Bottom_D_left;
let side_B_Right_r;
let side_B_Right_Bottom_right;
let side_B_Right_Bottom_Lid_right;
let side_B_Right_Bottom_D_right;
let side_A_back;
let side_A_Back_d;
let side_A_Bottom_back;
let side_A_Bottom_Back_left;
let side_A_Bottom_Back_right;
let side_Glue_Lid_d;
let side_Glue_Center_lid;
let side_Glue_center;

let pivot_A_Bottom_Front_left;
let pivot_A_Bottom_Front_right;
let pivot_A_Bottom_front;
let pivot_Front_d;
let pivot_Front;
let pivot_Glue_Lid_d;
let pivot_Glue_Center_lid;
let pivot_Glue_center;
let pivot_Glue_lid;
let pivot_A_Bottom_back_left;
let pivot_A_Bottom_back_right;
let pivot_A_Bottom_back;
let pivot_Back_d;
let pivot_Back;
let pivot_Left_Bottom_Lid_left;
let pivot_Left_Bottom_D_left;
let pivot_Left_Bottom_left;
let pivot_Left_l;
let pivot_Left_Bottom_Lid_right;
let pivot_Left_Bottom_D_right;
let pivot_Left_Bottom_right;
let pivot_Left;
let pivot_Right_Bottom_Lid_right;
let pivot_Right_Bottom_D_right;
let pivot_Right_Bottom_right;
let pivot_Right_r;
let pivot_Right_Bottom_Lid_left;
let pivot_Right_Bottom_D_left;
let pivot_Right_Bottom_left;
let pivot_Right;
let pivot_All;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  render */

const render = () => {
  renderer.render(scene, camera);
  //   pivot_All.rotation.y += Math.PI / 360;
  //   pivot_All_edges.rotation.y += Math.PI / 360;
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */

const rotations1 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = -Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_Bottom_Lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_Bottom_Lid_right.x = (Math.PI / 180) * 91),
  });
  /* #endregion */
  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_Bottom_Lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_Bottom_Lid_right.x = (Math.PI / 180) * 91),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_front.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_Front_left.x = (Math.PI / 180) * 179),
    y: (pivot_A_Bottom_Front_left.y = (Math.PI / 180) * 1),
    z: (pivot_A_Bottom_Front_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_Front_right.x = (Math.PI / 180) * 179),
    y: (pivot_A_Bottom_Front_right.y = (Math.PI / 180) * -1),
    z: (pivot_A_Bottom_Front_right.z = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back_left.x = (Math.PI / 180) * 178),
    y: (pivot_A_Bottom_back_left.y = (Math.PI / 180) * 2),
    z: (pivot_A_Bottom_back_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back_right.x = (Math.PI / 180) * 178),
    y: (pivot_A_Bottom_back_right.y = (Math.PI / 180) * -2),
    z: (pivot_A_Bottom_back_right.z = Math.PI / 2),
  });
  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_Lid_d.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = 0),
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
  tween.to(pivot_Left_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_Bottom_Lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_Bottom_Lid_right.x = 0),
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
  tween.to(pivot_Right_Bottom_Lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_Bottom_Lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_Bottom_Lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_Bottom_Lid_right.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_Front_left.x = 0),
    y: (pivot_A_Bottom_Front_left.y = 0),
    z: (pivot_A_Bottom_Front_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_Front_right.x = 0),
    y: (pivot_A_Bottom_Front_right.y = 0),
    z: (pivot_A_Bottom_Front_right.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back_left.x = 0),
    y: (pivot_A_Bottom_back_left.y = 0),
    z: (pivot_A_Bottom_back_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_Bottom_back_right.x = 0),
    y: (pivot_A_Bottom_back_right.y = 0),
    z: (pivot_A_Bottom_back_right.z = 0),
  });
  /* #endregion */
  /* #region  pivot_Glue_lid */

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_Lid_d.x = 0),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, d, o) => {
  A = a;
  B = b;
  C = c;
  D = d;
  O = o;

  let initDiv = document.getElementById('webgl');
  let newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

  return main();
};

/* #endregion */
/* #region  modelCosmeticTube */

let modelObj;

const modelCosmeticTube = (object) => {
  let loader = new OBJLoader();
  let objFile =
    'https://raw.githubusercontent.com/l3osslunla/react-three-js/bossxdev/src/components/snapbox/cosmetic_tube.obj';

  loader.load(objFile, (object) => {
    /* #region  ขยายโมเดล */
    modelObj = object;

    object.scale.set(A - 51.65, C - 174.42, B - 51.5); // 0.35, 0.58, 0.5
    object.position.set(A / 2, -C / 18, B / 2);
    scene.add(object);
    /* #endregion */
    /* #region  สร้างภาพฉาย */
    let box = new THREE.Box3().setFromObject(object);
    let box3Helper = new THREE.Box3Helper(box);
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

/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  Camera */

  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.z = 800;

  /* #endregion */
  /* #region  axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  Material */

  const material = new THREE.MeshPhongMaterial({
    //  MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: true,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

  /* #endregion */
  /* #region  Spotlights */

  /* #region  Spotlight 1 */

  /*  Spotlight 1 */
  let spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(800, 800, 800);
  spotLight.castShadow = true;
  scene.add(spotLight);

  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 0.5;
  spotLight.shadow.camera.far = 500;
  spotLight.focus = 1;

  /*  ภาพฉาย Spotlight 1 */
  let helper = new THREE.CameraHelper(spotLight.shadow.camera);
  // scene.add(helper);

  /* #endregion */
  /* #region  Spotlight 2 */

  /*  Spotlight 2 */

  let spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.position.set(-800, 800, 800);
  spotLight2.castShadow = true;
  scene.add(spotLight2);

  spotLight2.shadow.mapSize.width = 512;
  spotLight2.shadow.mapSize.height = 512;
  spotLight2.shadow.camera.near = 0.5;
  spotLight2.shadow.camera.far = 500;
  spotLight2.focus = 1;

  /*  ภาพฉาย Spotlight 2 */
  let helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);

  /* #endregion */

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  โมเดลที่สร้างใหม่ */

  /* #region  หน้า A */

  let plane_A_Side_shape = new THREE.Shape();
  plane_A_Side_shape.moveTo(0, 0);
  plane_A_Side_shape.lineTo(0, 180.5);
  plane_A_Side_shape.lineTo(A, 180.5);
  plane_A_Side_shape.lineTo(A);

  //   let hole_Lock_shape = new THREE.Path();
  //   hole_Lock_shape.moveTo((A * 0.347) | 0, (C * 0.706) | 0);
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.347) | 0,
  //     (C * 0.706) | 0,
  //     (A * 0.234) | 0,
  //     (C * 0.636) | 0,
  //     (A * 0.347) | 0,
  //     (C * 0.559) | 0
  //   );
  //   hole_Lock_shape.lineTo((A * 0.347) | 0, (C * 0.559) | 0);
  //   hole_Lock_shape.lineTo((A * 0.654) | 0, (C * 0.559) | 0);
  //   hole_Lock_shape.bezierCurveTo(
  //     (A * 0.654) | 0,
  //     (C * 0.559) | 0,
  //     (A * 0.767) | 0,
  //     (C * 0.636) | 0,
  //     (A * 0.654) | 0,
  //     (C * 0.706) | 0
  //   );
  //   hole_Lock_shape.lineTo((A * 0.654) | 0, (C * 0.706) | 0);
  //   plane_A_Side_shape.holes.push(hole_Lock_shape);

  let plane_A_side = new THREE.ShapeGeometry(plane_A_Side_shape); //  พื้นที่หน้าถุง A

  let plane_A_Side_d_shape = new THREE.Shape();
  plane_A_Side_d_shape.moveTo(0, 0);
  plane_A_Side_d_shape.lineTo(0, 65);
  plane_A_Side_d_shape.lineTo(A, 65);
  plane_A_Side_d_shape.lineTo(A, 0);
  let plane_A_side_d = new THREE.ShapeGeometry(plane_A_Side_d_shape); //  พื้นที่ก้นถุง-บน A

  let plane_A_Bottom_Side_shape = new THREE.Shape();
  plane_A_Bottom_Side_shape.moveTo(0, 0);
  plane_A_Bottom_Side_shape.lineTo(80, 80);
  plane_A_Bottom_Side_shape.lineTo(170, 80);
  plane_A_Bottom_Side_shape.lineTo(A, 0);
  let plane_A_Bottom_side = new THREE.ShapeGeometry(plane_A_Bottom_Side_shape); //  พื้นที่ก้นถุง-ล่าง A

  let plane_A_Bottom_Side_d_shape = new THREE.Shape();
  plane_A_Bottom_Side_d_shape.moveTo(0, 0);
  plane_A_Bottom_Side_d_shape.lineTo(0, 80);
  plane_A_Bottom_Side_d_shape.lineTo(80, 80);
  let plane_A_Bottom_Side_d = new THREE.ShapeGeometry(
    plane_A_Bottom_Side_d_shape
  ); //  พื้นที่พับก้นถุง A

  /* #endregion */
  /* #region  หน้า B */

  let plane_B_side_shape = new THREE.Shape();
  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.lineTo(0, 180.5);
  plane_B_side_shape.lineTo(B / 2, 180.5);
  plane_B_side_shape.lineTo(B / 2, 0);
  let plane_B_side = new THREE.ShapeGeometry(plane_B_side_shape); // พื้นที่หน้าถุง B

  let plane_B_Bottom_shape = new THREE.Shape();
  plane_B_Bottom_shape.moveTo(0, 0);
  plane_B_Bottom_shape.lineTo(0, 65);
  plane_B_Bottom_shape.lineTo(B / 2, 0);
  let plane_B_bottom = new THREE.ShapeGeometry(plane_B_Bottom_shape);

  let plane_B_Bottom_d_shape = new THREE.Shape();
  plane_B_Bottom_d_shape.moveTo(0, 65);
  plane_B_Bottom_d_shape.lineTo(B / 2, 65);
  plane_B_Bottom_d_shape.lineTo(B / 2, 0);
  let plane_B_Bottom_d = new THREE.ShapeGeometry(plane_B_Bottom_d_shape);

  let plane_B_Bottom_lid_shape = new THREE.Shape();
  plane_B_Bottom_lid_shape.moveTo(0, 0);
  plane_B_Bottom_lid_shape.lineTo(0, 80);
  plane_B_Bottom_lid_shape.lineTo(B / 2, 80);
  plane_B_Bottom_lid_shape.lineTo(B / 2, 0);
  let plane_B_Bottom_lid = new THREE.ShapeGeometry(plane_B_Bottom_lid_shape);

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  let glue_Lid_shape = new THREE.Shape();
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(0, 180.5);
  glue_Lid_shape.lineTo((P * 3) | 0, 180.5);
  glue_Lid_shape.lineTo((P * 3) | 0, 0);
  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape);

  let glue_Lid_d_shape = new THREE.Shape();
  glue_Lid_d_shape.moveTo(0, 0);
  glue_Lid_d_shape.lineTo(0, (C * 0.248) | 0);
  glue_Lid_d_shape.lineTo((P * 3) | 0, (C * 0.248) | 0);
  glue_Lid_d_shape.lineTo((P * 3) | 0, 0);
  let glue_Lid_d = new THREE.ShapeGeometry(glue_Lid_d_shape);

  let glue_Center_shape = new THREE.Shape();
  glue_Center_shape.moveTo(0, 0);
  glue_Center_shape.lineTo(0, (C * 0.177) | 0);
  glue_Center_shape.lineTo((P * 3) | 0, (C * 0.089) | 0);
  glue_Center_shape.lineTo((P * 3) | 0, 0);
  let glue_Center = new THREE.ShapeGeometry(glue_Center_shape);

  let glue_Center_lid_shape = new THREE.Shape();
  glue_Center_lid_shape.moveTo(0, (C * 0.089) | 0);
  glue_Center_lid_shape.lineTo((P * 3) | 0, (C * 0.089) | 0);
  glue_Center_lid_shape.lineTo((P * 3) | 0, 0);
  let glue_Center_lid = new THREE.ShapeGeometry(glue_Center_lid_shape);

  /* #endregion */

  /* #endregion */
  /* #region  ฉาก */

  /* #region  side_A_front */

  side_A_front = new THREE.Mesh(plane_A_side, material);

  side_A_Front_d = new THREE.Mesh(plane_A_side_d, material);

  side_A_Bottom_front = new THREE.Mesh(plane_A_Bottom_side, material);

  side_A_Bottom_Front_left = new THREE.Mesh(plane_A_Bottom_Side_d, material);

  side_A_Bottom_Front_right = new THREE.Mesh(plane_A_Bottom_Side_d, material);
  side_A_Bottom_Front_right.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_A_back */

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A;

  side_A_Back_d = new THREE.Mesh(plane_A_side_d, material);
  side_A_Back_d.position.x = -A;

  side_A_Bottom_back = new THREE.Mesh(plane_A_Bottom_side, material);
  side_A_Bottom_back.rotation.y = Math.PI;

  side_A_Bottom_Back_left = new THREE.Mesh(plane_A_Bottom_Side_d, material);

  side_A_Bottom_Back_right = new THREE.Mesh(plane_A_Bottom_Side_d, material);
  side_A_Bottom_Back_right.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_B_left */

  /* #region  side_B_left @ right_Panel */

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;

  side_B_Left_Bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_Left_Bottom_right.rotation.set(Math.PI, Math.PI, 0);

  side_B_Left_Bottom_D_right = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Left_Bottom_D_right.rotation.z = Math.PI;

  side_B_Left_Bottom_Lid_right = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Left_Bottom_Lid_right.position.x = -B / 2;
  side_B_Left_Bottom_Lid_right.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_B_left @ left_Panel */

  side_B_Left_l = new THREE.Mesh(plane_B_side, material);
  side_B_Left_l.position.x = -B / 2;

  side_B_Left_Bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_Left_Bottom_left.rotation.x = Math.PI;

  side_B_Left_Bottom_D_left = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Left_Bottom_D_left.rotation.x = Math.PI;

  side_B_Left_Bottom_Lid_left = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Left_Bottom_Lid_left.position.x = B / 2;
  side_B_Left_Bottom_Lid_left.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */

  /* #endregion */
  /* #region  side_B_right */

  /* #region  side_B_right @ right_Panel */

  side_B_right = new THREE.Mesh(plane_B_side, material);

  side_B_Right_Bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_Right_Bottom_left.rotation.x = Math.PI;

  side_B_Right_Bottom_D_left = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Right_Bottom_D_left.rotation.x = Math.PI;

  side_B_Right_Bottom_Lid_left = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Right_Bottom_Lid_left.position.x = B / 2;
  side_B_Right_Bottom_Lid_left.rotation.z = Math.PI;

  /* #endregion */
  /* #region  side_B_right @ left_Panel */

  side_B_Right_r = new THREE.Mesh(plane_B_side, material);

  side_B_Right_Bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_Right_Bottom_right.rotation.set(Math.PI, Math.PI, 0);

  side_B_Right_Bottom_D_right = new THREE.Mesh(plane_B_Bottom_d, material);
  side_B_Right_Bottom_D_right.rotation.set(Math.PI, Math.PI, 0);

  side_B_Right_Bottom_Lid_right = new THREE.Mesh(plane_B_Bottom_lid, material);
  side_B_Right_Bottom_Lid_right.position.x = -B / 2;
  side_B_Right_Bottom_Lid_right.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  side_Glue */

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.y = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Front */

  pivot_A_Bottom_Front_left = new THREE.Object3D();
  pivot_A_Bottom_Front_left.add(side_A_Bottom_Front_left);

  pivot_A_Bottom_Front_right = new THREE.Object3D();
  pivot_A_Bottom_Front_right.add(side_A_Bottom_Front_right);
  pivot_A_Bottom_Front_right.position.x = A;

  pivot_A_Bottom_front = new THREE.Object3D();
  pivot_A_Bottom_front.add(
    side_A_Bottom_front,
    pivot_A_Bottom_Front_left,
    pivot_A_Bottom_Front_right
  );
  pivot_A_Bottom_front.position.y = 65;

  pivot_Front_d = new THREE.Object3D();
  pivot_Front_d.add(side_A_Front_d, pivot_A_Bottom_front);
  pivot_Front_d.rotation.x = Math.PI;

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Front_d);

  /* #endregion */
  /* #region  pivot_Back */

  /* #region  glue_Lid */

  pivot_Glue_Lid_d = new THREE.Object3D();
  pivot_Glue_Lid_d.add(side_Glue_Lid_d);
  pivot_Glue_Lid_d.position.y = -(C * 0.089) | 0;

  pivot_Glue_Center_lid = new THREE.Object3D();
  pivot_Glue_Center_lid.add(side_Glue_Center_lid, pivot_Glue_Lid_d);
  pivot_Glue_Center_lid.position.y = -(C * 0.089) | 0;

  pivot_Glue_center = new THREE.Object3D();
  pivot_Glue_center.add(side_Glue_center, pivot_Glue_Center_lid);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid, pivot_Glue_center);
  pivot_Glue_lid.position.x = -A;

  /* #endregion */

  pivot_A_Bottom_back_left = new THREE.Object3D();
  pivot_A_Bottom_back_left.add(side_A_Bottom_Back_left);
  pivot_A_Bottom_back_left.position.x = -A;

  pivot_A_Bottom_back_right = new THREE.Object3D();
  pivot_A_Bottom_back_right.add(side_A_Bottom_Back_right);

  pivot_A_Bottom_back = new THREE.Object3D();
  pivot_A_Bottom_back.add(
    side_A_Bottom_back,
    pivot_A_Bottom_back_left,
    pivot_A_Bottom_back_right
  );
  pivot_A_Bottom_back.position.y = 65;

  pivot_Back_d = new THREE.Object3D();
  pivot_Back_d.add(side_A_Back_d, pivot_A_Bottom_back);
  pivot_Back_d.rotation.x = Math.PI;

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Glue_lid, pivot_Back_d);
  pivot_Back.position.x = -B / 2;

  /* #endregion */
  /* #region  pivot_Left */

  /* #region  pivot_Left @ right_Panel */

  pivot_Left_Bottom_Lid_left = new THREE.Object3D();
  pivot_Left_Bottom_Lid_left.add(side_B_Left_Bottom_Lid_left);
  pivot_Left_Bottom_Lid_left.position.y = -65;

  pivot_Left_Bottom_D_left = new THREE.Object3D();
  pivot_Left_Bottom_D_left.add(
    side_B_Left_Bottom_D_left,
    pivot_Left_Bottom_Lid_left
  );

  pivot_Left_Bottom_left = new THREE.Object3D();
  pivot_Left_Bottom_left.add(side_B_Left_Bottom_left, pivot_Left_Bottom_D_left);
  pivot_Left_Bottom_left.position.x = -B / 2;

  pivot_Left_l = new THREE.Object3D();
  pivot_Left_l.add(side_B_Left_l, pivot_Left_Bottom_left, pivot_Back);
  pivot_Left_l.position.x = -B / 2;

  /* #endregion */
  /* #region  pivot_Left @ left_Panel */

  pivot_Left_Bottom_Lid_right = new THREE.Object3D();
  pivot_Left_Bottom_Lid_right.add(side_B_Left_Bottom_Lid_right);
  pivot_Left_Bottom_Lid_right.position.set(0, -65, 0);

  pivot_Left_Bottom_D_right = new THREE.Object3D();
  pivot_Left_Bottom_D_right.add(
    side_B_Left_Bottom_D_right,
    pivot_Left_Bottom_Lid_right
  );

  pivot_Left_Bottom_right = new THREE.Object3D();
  pivot_Left_Bottom_right.add(
    side_B_Left_Bottom_right,
    pivot_Left_Bottom_D_right
  );

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_l, pivot_Left_Bottom_right);

  /* #endregion */

  /* #endregion */
  /* #region  pivot_Right */

  /* #region  pivot_Right @ right_Panel */

  pivot_Right_Bottom_Lid_right = new THREE.Object3D();
  pivot_Right_Bottom_Lid_right.add(side_B_Right_Bottom_Lid_right);
  pivot_Right_Bottom_Lid_right.position.y = -65;

  pivot_Right_Bottom_D_right = new THREE.Object3D();
  pivot_Right_Bottom_D_right.add(
    side_B_Right_Bottom_D_right,
    pivot_Right_Bottom_Lid_right
  );

  pivot_Right_Bottom_right = new THREE.Object3D();
  pivot_Right_Bottom_right.add(
    side_B_Right_Bottom_right,
    pivot_Right_Bottom_D_right
  );
  pivot_Right_Bottom_right.position.x = B / 2;

  pivot_Right_r = new THREE.Object3D();
  pivot_Right_r.add(side_B_Right_r, pivot_Right_Bottom_right);
  pivot_Right_r.position.x = B / 2;

  /* #endregion */
  /* #region  pivot_Right @ left_Panel */

  pivot_Right_Bottom_Lid_left = new THREE.Object3D();
  pivot_Right_Bottom_Lid_left.add(side_B_Right_Bottom_Lid_left);
  pivot_Right_Bottom_Lid_left.position.y = -65;

  pivot_Right_Bottom_D_left = new THREE.Object3D();
  pivot_Right_Bottom_D_left.add(
    side_B_Right_Bottom_D_left,
    pivot_Right_Bottom_Lid_left
  );

  pivot_Right_Bottom_left = new THREE.Object3D();
  pivot_Right_Bottom_left.add(
    side_B_Right_Bottom_left,
    pivot_Right_Bottom_D_left
  );

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_Bottom_left, pivot_Right_r);
  pivot_Right.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
