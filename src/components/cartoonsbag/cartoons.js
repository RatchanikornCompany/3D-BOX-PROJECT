/* #region  ตัวแปร */

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import OrbitControls from 'three-orbitcontrols';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

let controls, renderer, scene, camera;

let A = 150;
let B = 60;
let C = 170;
let D = 0.5;
let O = 0.5; //  ความโปร่งแสง
let w = (window.innerWidth * 75) / 100;
let h = window.innerHeight;
let L = 0.3; // เปอร์เซนนต์
let P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
let leng_lr_lib = A * L;

let edges;
let tween;

let side_A_front;
let side_A_front_d;
let side_A_bottom_front;
let side_A_bottom_front_left;
let side_A_bottom_front_right;
let side_Glue_lid;
let side_B_left;
let side_B_left_bottom_right;
let side_B_left_bottom_d_right;
let side_B_left_bottom_lid_right;
let side_B_left_bottom_lid_d_right;
let side_B_left_l;
let side_B_left_bottom_left;
let side_B_left_bottom_d_left;
let side_B_left_bottom_lid_left;
let side_B_left_bottom_lid_d_left;
let side_B_right;
let side_B_right_bottom_left;
let side_B_right_bottom_lid_left;
let side_B_right_bottom_lid_d_left;
let side_B_right_bottom_d_left;
let side_B_right_r;
let side_B_right_bottom_right;
let side_B_right_bottom_lid_right;
let side_B_right_bottom_lid_d_right;
let side_B_right_bottom_d_right;
let side_A_back;
let side_A_back_d;
let side_A_bottom_back;
let side_A_bottom_back_left;
let side_A_bottom_back_right;
let side_Glue_center;
let side_Glue_bottom;
let side_Glue_bottom_lid;
let side_back_A_top;

let side_A_front_edges;
let side_A_front_d_edges;
let side_A_bottom_front_edges;
let side_A_bottom_front_left_edges;
let side_A_bottom_front_right_edges;
let side_Glue_lid_edges;
let side_B_left_edges;
let side_B_left_bottom_right_edges;
let side_B_left_bottom_d_right_edges;
let side_B_left_bottom_lid_right_edges;
let side_B_left_bottom_lid_d_right_edges;
let side_B_left_l_edges;
let side_B_left_bottom_left_edges;
let side_B_left_bottom_d_left_edges;
let side_B_left_bottom_lid_left_edges;
let side_B_left_bottom_lid_d_left_edges;
let side_B_right_edges;
let side_B_right_bottom_left_edges;
let side_B_right_bottom_lid_left_edges;
let side_B_right_bottom_lid_d_left_edges;
let side_B_right_bottom_d_left_edges;
let side_B_right_r_edges;
let side_B_right_bottom_right_edges;
let side_B_right_bottom_lid_right_edges;
let side_B_right_bottom_lid_d_right_edges;
let side_B_right_bottom_d_right_edges;
let side_A_back_edges;
let side_A_back_d_edges;
let side_A_bottom_back_edges;
let side_A_bottom_back_left_edges;
let side_A_bottom_back_right_edges;
let side_Glue_center_edges;
let side_Glue_bottom_edges;
let side_Glue_bottom_lid_edges;
let side_back_A_top_edges;

let pivot_A_bottom_front_left;
let pivot_A_bottom_front_right;
let pivot_A_bottom_front;
let pivot_Front_d;
let pivot_Front;
let pivot_back_A_top;
let pivot_Glue_lid;
let pivot_A_bottom_back_left;
let pivot_A_bottom_back_right;
let pivot_A_bottom_back;
let pivot_Back_d;
let pivot_Back;
let pivot_Left_bottom_lid_d_left;
let pivot_Left_bottom_lid_left;
let pivot_Left_bottom_d_left;
let pivot_Left_bottom_left;
let pivot_Left_l;
let pivot_Left_bottom_lid_d_right;
let pivot_Left_bottom_lid_right;
let pivot_Left_bottom_d_right;
let pivot_Left_bottom_right;
let pivot_Left;
let pivot_Glue_bottom_lid;
let pivot_Glue_bottom;
let pivot_Glue_center;
let pivot_Glue;
let pivot_Right_bottom_lid_d_right;
let pivot_Right_bottom_lid_right;
let pivot_Right_bottom_d_right;
let pivot_Right_bottom_right;
let pivot_Right_r;
let pivot_Right_bottom_lid_d_left;
let pivot_Right_bottom_lid_left;
let pivot_Right_bottom_d_left;
let pivot_Right_bottom_left;
let pivot_Right;
let pivot_All;

let pivot_A_bottom_front_left_edges;
let pivot_A_bottom_front_right_edges;
let pivot_A_bottom_front_edges;
let pivot_Front_d_edges;
let pivot_Front_edges;
let pivot_back_A_top_edges;
let pivot_Glue_lid_edges;
let pivot_A_bottom_back_left_edges;
let pivot_A_bottom_back_right_edges;
let pivot_A_bottom_back_edges;
let pivot_Back_d_edges;
let pivot_Back_edges;
let pivot_Left_bottom_lid_d_left_edges;
let pivot_Left_bottom_lid_left_edges;
let pivot_Left_bottom_d_left_edges;
let pivot_Left_bottom_left_edges;
let pivot_Left_l_edges;
let pivot_Left_bottom_lid_d_right_edges;
let pivot_Left_bottom_lid_right_edges;
let pivot_Left_bottom_d_right_edges;
let pivot_Left_bottom_right_edges;
let pivot_Left_edges;
let pivot_Glue_bottom_lid_edges;
let pivot_Glue_bottom_edges;
let pivot_Glue_center_edges;
let pivot_Glue_edges;
let pivot_Right_bottom_lid_d_right_edges;
let pivot_Right_bottom_lid_right_edges;
let pivot_Right_bottom_d_right_edges;
let pivot_Right_bottom_right_edges;
let pivot_Right_r_edges;
let pivot_Right_bottom_lid_d_left_edges;
let pivot_Right_bottom_lid_left_edges;
let pivot_Right_bottom_d_left_edges;
let pivot_Right_bottom_left_edges;
let pivot_Right_edges;
let pivot_All_edges;

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
    y: (pivot_Back.y = -(Math.PI / 180) * 90),
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
  tween.to(pivot_Left_bottom_lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_bottom_lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_right.x = (Math.PI / 180) * 91),
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
  tween.to(pivot_Right_bottom_lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_bottom_lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_right.x = (Math.PI / 180) * 91),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_left.x = (Math.PI / 180) * 179),
    y: (pivot_A_bottom_front_left.y = (Math.PI / 180) * 1),
    z: (pivot_A_bottom_front_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_right.x = (Math.PI / 180) * 179),
    y: (pivot_A_bottom_front_right.y = (Math.PI / 180) * -1),
    z: (pivot_A_bottom_front_right.z = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_left.x = (Math.PI / 180) * 178),
    y: (pivot_A_bottom_back_left.y = (Math.PI / 180) * 2),
    z: (pivot_A_bottom_back_left.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_right.x = (Math.PI / 180) * 178),
    y: (pivot_A_bottom_back_right.y = (Math.PI / 180) * -2),
    z: (pivot_A_bottom_back_right.z = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  pivot_Glue */
  tween = gsap.timeline();
  tween.to(pivot_Glue.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_bottom.x = (Math.PI / 180) * 93),
  });
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = -(Math.PI / 180) * 90), // 120
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
  tween.to(pivot_Left_bottom_lid_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_left_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_bottom_lid_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_right_edges.x = (Math.PI / 180) * 91),
  });
  /* #endregion */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90), // 120
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_bottom_lid_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_left_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_bottom_lid_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_right_edges.x = (Math.PI / 180) * 91),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_left_edges.x = (Math.PI / 180) * 179),
    y: (pivot_A_bottom_front_left_edges.y = (Math.PI / 180) * 1),
    z: (pivot_A_bottom_front_left_edges.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_right_edges.x = (Math.PI / 180) * 179),
    y: (pivot_A_bottom_front_right_edges.y = (Math.PI / 180) * -1),
    z: (pivot_A_bottom_front_right_edges.z = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_left_edges.x = (Math.PI / 180) * 178),
    y: (pivot_A_bottom_back_left_edges.y = (Math.PI / 180) * 2),
    z: (pivot_A_bottom_back_left_edges.z = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_right_edges.x = (Math.PI / 180) * 178),
    y: (pivot_A_bottom_back_right_edges.y = (Math.PI / 180) * -2),
    z: (pivot_A_bottom_back_right_edges.z = (Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #region  pivot_Glue */
  tween = gsap.timeline();
  tween.to(pivot_Glue_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_edges.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_bottom_edges.x = (Math.PI / 180) * 93),
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
  tween.to(pivot_Left_bottom_lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_bottom_lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_right.x = 0),
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
  tween.to(pivot_Right_bottom_lid_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_bottom_lid_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_right.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_left.x = 0),
    y: (pivot_A_bottom_front_left.y = 0),
    z: (pivot_A_bottom_front_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_right.x = 0),
    y: (pivot_A_bottom_front_right.y = 0),
    z: (pivot_A_bottom_front_right.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_left.x = 0),
    y: (pivot_A_bottom_back_left.y = 0),
    z: (pivot_A_bottom_back_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_right.x = 0),
    y: (pivot_A_bottom_back_right.y = 0),
    z: (pivot_A_bottom_back_right.z = 0),
  });
  /* #endregion */

  /* #region  pivot_Glue */
  tween = gsap.timeline();
  tween.to(pivot_Glue.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_bottom.x = 0),
  });
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */

  /* #region  pivot_Back */
  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = 0),
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
  tween.to(pivot_Left_bottom_lid_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_bottom_lid_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_bottom_lid_right_edges.x = 0),
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
  tween.to(pivot_Right_bottom_lid_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_bottom_lid_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_bottom_lid_right_edges.x = 0),
  });
  /* #endregion */

  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_left_edges.x = 0),
    y: (pivot_A_bottom_front_left_edges.y = 0),
    z: (pivot_A_bottom_front_left_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front_right_edges.x = 0),
    y: (pivot_A_bottom_front_right_edges.y = 0),
    z: (pivot_A_bottom_front_right_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_left_edges.x = 0),
    y: (pivot_A_bottom_back_left_edges.y = 0),
    z: (pivot_A_bottom_back_left_edges.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back_right_edges.x = 0),
    y: (pivot_A_bottom_back_right_edges.y = 0),
    z: (pivot_A_bottom_back_right_edges.z = 0),
  });
  /* #endregion */

  /* #region  pivot_Glue */
  tween = gsap.timeline();
  tween.to(pivot_Glue_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_bottom_edges.x = 0),
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
    object.scale.set(A - 51.65, C - 174.42, B - 51.5); // 0.35, 0.58, 0.5
    object.position.set(A / 2, -C / 18, B / 2);

    scene.add(object);
    modelObj = object;
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
  camera.position.z = 800; // 800

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
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;

  /* #endregion */
  /* #region  Spotlights */

  /* #region  Spotlight 1 */

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
  let helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  /* #endregion */
  /* #region  Spotlight 2 */

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
  let helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);

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
  /* #region  โมเดลที่สร้างใหม่ */

  /* #region  หน้า A */
  let plane_A_side_shape = new THREE.Shape();
  plane_A_side_shape.moveTo(0, 0);
  plane_A_side_shape.lineTo(0, (C * 0.824) | 0);
  plane_A_side_shape.lineTo(A, (C * 0.824) | 0);
  plane_A_side_shape.lineTo(A);

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
  //   plane_A_side_shape.holes.push(hole_Lock_shape);

  let plane_A_side = new THREE.ShapeGeometry(plane_A_side_shape);

  let plane_A_side_d_shape = new THREE.Shape();
  plane_A_side_d_shape.moveTo(0, 0);
  plane_A_side_d_shape.lineTo(0, (C * 0.177) | 0);
  plane_A_side_d_shape.lineTo(A, (C * 0.177) | 0);
  plane_A_side_d_shape.lineTo(A, 0);

  let plane_A_side_d = new THREE.ShapeGeometry(plane_A_side_d_shape);

  let plane_A_bottom_side_shape = new THREE.Shape();
  plane_A_bottom_side_shape.moveTo(0, 0);
  plane_A_bottom_side_shape.lineTo((A * 0.28) | 0, (C * 0.248) | 0);
  plane_A_bottom_side_shape.lineTo((A * 0.72) | 0, (C * 0.248) | 0);
  plane_A_bottom_side_shape.lineTo(A, 0);

  let plane_A_bottom_side = new THREE.ShapeGeometry(plane_A_bottom_side_shape);

  let plane_A_bottom_side_d_shape = new THREE.Shape();
  plane_A_bottom_side_d_shape.moveTo(0, 0);
  plane_A_bottom_side_d_shape.lineTo(0, (C * 0.248) | 0);
  plane_A_bottom_side_d_shape.lineTo((A * 0.28) | 0, (C * 0.248) | 0);

  let plane_A_bottom_side_d = new THREE.ShapeGeometry(
    plane_A_bottom_side_d_shape
  );

  /* #endregion */
  /* #region  หน้า B */
  let plane_B_side_shape = new THREE.Shape();
  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.lineTo(0, (C * 0.824) | 0);
  plane_B_side_shape.lineTo(B / 2, (C * 0.824) | 0);
  plane_B_side_shape.lineTo(B / 2, 0);

  let plane_B_side = new THREE.ShapeGeometry(plane_B_side_shape);

  let plane_B_bottom_shape = new THREE.Shape();
  plane_B_bottom_shape.moveTo(0, 0);
  plane_B_bottom_shape.lineTo(0, (C * 0.177) | 0);
  plane_B_bottom_shape.lineTo((B * 0.5) | 0, 0);

  let plane_B_bottom = new THREE.ShapeGeometry(plane_B_bottom_shape);

  let plane_B_bottom_d_shape = new THREE.Shape();
  plane_B_bottom_d_shape.moveTo(0, (C * 0.177) | 0);
  plane_B_bottom_d_shape.lineTo((B * 0.5) | 0, (C * 0.177) | 0);
  plane_B_bottom_d_shape.lineTo((B * 0.5) | 0, 0);

  let plane_B_bottom_d = new THREE.ShapeGeometry(plane_B_bottom_d_shape);

  let plane_B_bottom_lid_shape = new THREE.Shape();
  plane_B_bottom_lid_shape.moveTo(0, 0);
  plane_B_bottom_lid_shape.lineTo(0, (C * 0.177) | 0);
  plane_B_bottom_lid_shape.lineTo((B * 0.5) | 0, 0);

  let plane_B_bottom_lid = new THREE.ShapeGeometry(plane_B_bottom_lid_shape);

  let plane_B_bottom_lid_d_shape = new THREE.Shape();
  plane_B_bottom_lid_d_shape.moveTo(0, 0);
  plane_B_bottom_lid_d_shape.lineTo(0, (C * 0.071) | 0);
  plane_B_bottom_lid_d_shape.lineTo((B * 0.5) | 0, (C * 0.248) | 0);
  plane_B_bottom_lid_d_shape.lineTo((B * 0.5) | 0, 0);

  let plane_B_bottom_d_lid = new THREE.ShapeGeometry(
    plane_B_bottom_lid_d_shape
  );

  /* #endregion */
  /* #region  ฝาเสียบบน */
  let lid_Shape = new THREE.Shape();
  // lid_Shape.moveTo(0, 0);
  // lid_Shape.lineTo((A * 0.034) | 0, (C * 0.442) | 0);
  // lid_Shape.bezierCurveTo(
  //     (A * 0.034) | 0,
  //     (C * 0.442) | 0,
  //     (A * 0.034) | 0,
  //     (C * 0.53) | 0,
  //     (A * 0.2) | 0,
  //     (C * 0.53) | 0
  // );
  // lid_Shape.lineTo((A * 0.8) | 0, (C * 0.53) | 0);
  // lid_Shape.bezierCurveTo(
  //     (A * 0.8) | 0,
  //     (C * 0.53) | 0,
  //     (A * 0.967) | 0,
  //     (C * 0.53) | 0,
  //     (A * 0.967) | 0,
  //     (C * 0.442) | 0
  // );
  // lid_Shape.lineTo(A, 0);

  // let hole_Lid_shape = new THREE.Path();
  // hole_Lid_shape.moveTo((A * 0.347) | 0, (C * 0.118) | 0);
  // hole_Lid_shape.bezierCurveTo(
  //     (A * 0.347) | 0,
  //     (C * 0.118) | 0,
  //     (A * 0.234) | 0,
  //     (C * 0.189) | 0,
  //     (A * 0.347) | 0,
  //     (C * 0.265) | 0
  // );
  // hole_Lid_shape.lineTo((A * 0.347) | 0, (C * 0.265) | 0);
  // hole_Lid_shape.lineTo((A * 0.654) | 0, (C * 0.265) | 0);
  // hole_Lid_shape.bezierCurveTo(
  //     (A * 0.654) | 0,
  //     (C * 0.265) | 0,
  //     (A * 0.767) | 0,
  //     (C * 0.189) | 0,
  //     (A * 0.654) | 0,
  //     (C * 0.118) | 0
  // );
  // hole_Lid_shape.lineTo((A * 0.654) | 0, (C * 0.118) | 0);
  // lid_Shape.holes.push(hole_Lid_shape);

  let lid = new THREE.ShapeGeometry(lid_Shape);
  /* #endregion */
  /* #region  ฝาเสียบกาว */
  let glue_Lid_shape = new THREE.Shape();
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(0, (C * 0.824) | 0);
  glue_Lid_shape.lineTo((P * 3) | 0, (C * 0.742) | 0);
  glue_Lid_shape.lineTo((P * 3) | 0, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape);

  let glue_Center_shape = new THREE.Shape();
  glue_Center_shape.moveTo(0, 0);
  glue_Center_shape.lineTo(0, (C * 0.177) | 0);
  glue_Center_shape.lineTo((P * 3) | 0, (C * 0.177) | 0);
  glue_Center_shape.lineTo((P * 3) | 0, 0);

  let glue_Center = new THREE.ShapeGeometry(glue_Center_shape);

  let glue_Bottom_shape = new THREE.Shape();
  glue_Bottom_shape.moveTo(0, (C * 0.106) | 0);
  glue_Bottom_shape.lineTo((P * 3) | 0, (C * 0.106) | 0);
  glue_Bottom_shape.lineTo((P * 3) | 0, 0);

  let glue_Bottom = new THREE.ShapeGeometry(glue_Bottom_shape);

  let glue_Bottom_lid_shape = new THREE.Shape();
  glue_Bottom_lid_shape.moveTo(0, 0);
  glue_Bottom_lid_shape.lineTo(0, (C * 0.248) | 0);
  glue_Bottom_lid_shape.lineTo((P * 3) | 0, (C * 0.142) | 0);
  glue_Bottom_lid_shape.lineTo((P * 3) | 0, 0);

  let glue_Bottom_lid = new THREE.ShapeGeometry(glue_Bottom_lid_shape);
  /* #endregion */
  /* #region  เชือกหูหิ้ว */

  const geometry = new THREE.TorusKnotBufferGeometry( 40, 1, 300, 19,1,1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const torusKnot = new THREE.Mesh( geometry, material );
  torusKnot.position.set(A/2.7,C,18);

  const geometry2 = new THREE.TorusKnotBufferGeometry( 40, 1, 300, 19,1,1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const torusKnot2 = new THREE.Mesh( geometry2, material );
  torusKnot2.position.set(-A/1.6,C,18);

  /* #endregion */

  /* #endregion */
  /* #region  ฉาก */

  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.castShadow = true;
  side_A_front.receiveShadow = true;

  side_A_front_d = new THREE.Mesh(plane_A_side_d, material);
  side_A_front_d.castShadow = true;
  side_A_front_d.receiveShadow = true;

  side_A_bottom_front = new THREE.Mesh(plane_A_bottom_side, material);
  side_A_bottom_front.castShadow = true;
  side_A_bottom_front.receiveShadow = true;

  side_A_bottom_front_left = new THREE.Mesh(plane_A_bottom_side_d, material);
  side_A_bottom_front_left.castShadow = true;
  side_A_bottom_front_left.receiveShadow = true;

  side_A_bottom_front_right = new THREE.Mesh(plane_A_bottom_side_d, material);
  side_A_bottom_front_right.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_A_bottom_front_right.castShadow = true;
  side_A_bottom_front_right.receiveShadow = true;

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);
  side_Glue_lid.castShadow = true;
  side_Glue_lid.receiveShadow = true;
  /* #endregion */
  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A;
  side_A_back.castShadow = true;
  side_A_back.receiveShadow = true;

  side_A_back_d = new THREE.Mesh(plane_A_side_d, material);
  side_A_back_d.rotation.y = (Math.PI / 180) * 180;
  side_A_back_d.castShadow = true;
  side_A_back_d.receiveShadow = true;

  side_A_bottom_back = new THREE.Mesh(plane_A_bottom_side, material);
  side_A_bottom_back.rotation.y = (Math.PI / 180) * 180;
  side_A_bottom_back.castShadow = true;
  side_A_bottom_back.receiveShadow = true;

  side_A_bottom_back_left = new THREE.Mesh(plane_A_bottom_side_d, material);
  side_A_bottom_back_left.castShadow = true;
  side_A_bottom_back_left.receiveShadow = true;

  side_A_bottom_back_right = new THREE.Mesh(plane_A_bottom_side_d, material);
  side_A_bottom_back_right.rotation.y = (Math.PI / 180) * 180;
  side_A_bottom_back_right.castShadow = true;
  side_A_bottom_back_right.receiveShadow = true;
  /* #endregion */
  /* #region  side_B_left */

  /* #region  left_Panel @ side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.castShadow = true;
  side_B_left.receiveShadow = true;

  side_B_left_bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_left_bottom_right.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_B_left_bottom_right.castShadow = true;
  side_B_left_bottom_right.receiveShadow = true;

  side_B_left_bottom_d_right = new THREE.Mesh(plane_B_bottom_d, material);
  side_B_left_bottom_d_right.rotation.set(0, 0, (Math.PI / 180) * 180);
  side_B_left_bottom_d_right.castShadow = true;
  side_B_left_bottom_d_right.receiveShadow = true;

  side_B_left_bottom_lid_right = new THREE.Mesh(plane_B_bottom_lid, material);
  side_B_left_bottom_lid_right.position.x = -B / 2;
  side_B_left_bottom_lid_right.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_left_bottom_lid_right.castShadow = true;
  side_B_left_bottom_lid_right.receiveShadow = true;

  side_B_left_bottom_lid_d_right = new THREE.Mesh(
    plane_B_bottom_d_lid,
    material
  );
  side_B_left_bottom_lid_d_right.castShadow = true;
  side_B_left_bottom_lid_d_right.receiveShadow = true;
  /* #endregion */

  /* #region  right_Panel @ side_B_left */
  side_B_left_l = new THREE.Mesh(plane_B_side, material);
  side_B_left_l.position.x = -B / 2;
  side_B_left_l.castShadow = true;
  side_B_left_l.receiveShadow = true;

  side_B_left_bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_left_bottom_left.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_left_bottom_left.castShadow = true;
  side_B_left_bottom_left.receiveShadow = true;

  side_B_left_bottom_d_left = new THREE.Mesh(plane_B_bottom_d, material);
  side_B_left_bottom_d_left.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_left_bottom_d_left.castShadow = true;
  side_B_left_bottom_d_left.receiveShadow = true;

  side_B_left_bottom_lid_left = new THREE.Mesh(plane_B_bottom_lid, material);
  side_B_left_bottom_lid_left.position.x = B / 2;
  side_B_left_bottom_lid_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_B_left_bottom_lid_left.castShadow = true;
  side_B_left_bottom_lid_left.receiveShadow = true;

  side_B_left_bottom_lid_d_left = new THREE.Mesh(
    plane_B_bottom_d_lid,
    material
  );
  side_B_left_bottom_lid_d_left.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_B_left_bottom_lid_d_left.castShadow = true;
  side_B_left_bottom_lid_d_left.receiveShadow = true;
  /* #endregion */

  /* #endregion */
  /* #region  side_B_right */

  /* #region  left_Panel @ side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.castShadow = true;
  side_B_right.receiveShadow = true;

  side_B_right_bottom_left = new THREE.Mesh(plane_B_bottom, material);
  side_B_right_bottom_left.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_right_bottom_left.castShadow = true;
  side_B_right_bottom_left.receiveShadow = true;

  side_B_right_bottom_d_left = new THREE.Mesh(plane_B_bottom_d, material);
  side_B_right_bottom_d_left.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_right_bottom_d_left.castShadow = true;
  side_B_right_bottom_d_left.receiveShadow = true;

  side_B_right_bottom_lid_left = new THREE.Mesh(plane_B_bottom_lid, material);
  side_B_right_bottom_lid_left.position.x = B / 2;
  side_B_right_bottom_lid_left.rotation.set(0, 0, (Math.PI / 180) * 180);
  side_B_right_bottom_lid_left.castShadow = true;
  side_B_right_bottom_lid_left.receiveShadow = true;

  side_B_right_bottom_lid_d_left = new THREE.Mesh(
    plane_B_bottom_d_lid,
    material
  );
  side_B_right_bottom_lid_d_left.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_B_right_bottom_lid_d_left.castShadow = true;
  side_B_right_bottom_lid_d_left.receiveShadow = true;
  /* #endregion */

  /* #region  right_Panel @ side_B_right */
  side_B_right_r = new THREE.Mesh(plane_B_side, material);
  side_B_right_r.castShadow = true;
  side_B_right_r.receiveShadow = true;

  side_B_right_bottom_right = new THREE.Mesh(plane_B_bottom, material);
  side_B_right_bottom_right.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_B_right_bottom_right.castShadow = true;
  side_B_right_bottom_right.receiveShadow = true;

  side_B_right_bottom_d_right = new THREE.Mesh(plane_B_bottom_d, material);
  side_B_right_bottom_d_right.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );
  side_B_right_bottom_d_right.castShadow = true;
  side_B_right_bottom_d_right.receiveShadow = true;

  side_B_right_bottom_lid_right = new THREE.Mesh(plane_B_bottom_lid, material);
  side_B_right_bottom_lid_right.position.x = -B / 2;
  side_B_right_bottom_lid_right.rotation.set((Math.PI / 180) * 180, 0, 0);
  side_B_right_bottom_lid_right.castShadow = true;
  side_B_right_bottom_lid_right.receiveShadow = true;

  side_B_right_bottom_lid_d_right = new THREE.Mesh(
    plane_B_bottom_d_lid,
    material
  );
  side_B_right_bottom_lid_d_right.castShadow = true;
  side_B_right_bottom_lid_d_right.receiveShadow = true;
  /* #endregion */

  /* #endregion */
  /* #region  side_Glue */
  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.castShadow = true;
  side_Glue_lid.receiveShadow = true;

  side_Glue_center = new THREE.Mesh(glue_Center, material);
  side_Glue_center.position.y = -(C * 0.177) | 0;
  side_Glue_center.castShadow = true;
  side_Glue_center.receiveShadow = true;

  side_Glue_bottom = new THREE.Mesh(glue_Bottom, material);
  side_Glue_bottom.position.y = -(C * 0.106) | 0;
  side_Glue_bottom.castShadow = true;
  side_Glue_bottom.receiveShadow = true;

  side_Glue_bottom_lid = new THREE.Mesh(glue_Bottom_lid, material);
  side_Glue_bottom_lid.position.y = -(C * 0.248) | 0;
  side_Glue_bottom_lid.castShadow = true;
  side_Glue_bottom_lid.receiveShadow = true;
  /* #endregion */
  /* #region  side_A_top */
  side_back_A_top = new THREE.Mesh(lid, material);
  side_back_A_top.rotation.set(0, (Math.PI / 180) * 180, 0);
  side_back_A_top.castShadow = true;
  side_back_A_top.receiveShadow = true;
  /* #endregion */

  /* #endregion */
  /* #region  ฉาก - แบบมีเส้น */

  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_side_d);
  side_A_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_bottom_side);
  side_A_bottom_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_bottom_side_d);
  side_A_bottom_front_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_bottom_side_d);
  side_A_bottom_front_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_front_right_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );
  /* #endregion */
  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A;

  edges = new THREE.EdgesGeometry(plane_A_side_d);
  side_A_back_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_d_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(plane_A_bottom_side);
  side_A_bottom_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_back_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(plane_A_bottom_side_d);
  side_A_bottom_back_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_A_bottom_side_d);
  side_A_bottom_back_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_back_right_edges.rotation.y = (Math.PI / 180) * 180;
  /* #endregion */
  /* #region  side_B_left */

  /* #region  right_Panel @ side_B_left */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B / 2;

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_left_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom_d);
  side_B_left_bottom_d_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_d_right_edges.rotation.set(0, 0, (Math.PI / 180) * 180);

  edges = new THREE.EdgesGeometry(plane_B_bottom_lid);
  side_B_left_bottom_lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_lid_right_edges.position.x = -B / 2;
  side_B_left_bottom_lid_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_d_lid);
  side_B_left_bottom_lid_d_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  /* #endregion */

  /* #region  right_Panel @ side_B_left */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_l_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_l_edges.position.x = -B / 2;

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_left_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_d);
  side_B_left_bottom_d_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_d_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_lid);
  side_B_left_bottom_lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_lid_left_edges.position.x = B / 2;
  side_B_left_bottom_lid_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom_d_lid);
  side_B_left_bottom_lid_d_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_bottom_lid_d_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);
  /* #endregion */

  /* #endregion */
  /* #region  side_B_right */

  /* #region  left_Panel @ side_B_right */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_right_bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_d);
  side_B_right_bottom_d_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_d_left_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_lid);
  side_B_right_bottom_lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_lid_left_edges.position.x = B / 2;
  side_B_right_bottom_lid_left_edges.rotation.set(0, 0, (Math.PI / 180) * 180);

  edges = new THREE.EdgesGeometry(plane_B_bottom_d_lid);
  side_B_right_bottom_lid_d_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_lid_d_left_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    0
  );
  /* #endregion */

  /* #region  right_Panel @ side_B_right */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_r_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom);
  side_B_right_bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom_d);
  side_B_right_bottom_d_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_d_right_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(plane_B_bottom_lid);
  side_B_right_bottom_lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_bottom_lid_right_edges.position.x = -B / 2;
  side_B_right_bottom_lid_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_B_bottom_d_lid);
  side_B_right_bottom_lid_d_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  /* #endregion */

  /* #endregion */
  /* #region  side_Glue */
  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(glue_Center);
  side_Glue_center_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  side_Glue_center_edges.position.y = -(C * 0.177) | 0;

  edges = new THREE.EdgesGeometry(glue_Bottom);
  side_Glue_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_bottom_edges.position.y = -(C * 0.106) | 0;

  edges = new THREE.EdgesGeometry(glue_Bottom_lid);
  side_Glue_bottom_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_bottom_lid_edges.position.y = -(C * 0.248) | 0;
  /* #endregion */
  /* #region  side_A_top */
  edges = new THREE.EdgesGeometry(lid);
  side_back_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_back_A_top_edges.rotation.set(0, (Math.PI / 180) * 180, 0);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Front */
  pivot_A_bottom_front_left = new THREE.Object3D();
  pivot_A_bottom_front_left.add(side_A_bottom_front_left);

  pivot_A_bottom_front_right = new THREE.Object3D();
  pivot_A_bottom_front_right.add(side_A_bottom_front_right);
  pivot_A_bottom_front_right.position.set(A, 0, 0);

  pivot_A_bottom_front = new THREE.Object3D();
  pivot_A_bottom_front.add(
    side_A_bottom_front,
    pivot_A_bottom_front_left,
    pivot_A_bottom_front_right
  );
  pivot_A_bottom_front.position.set(0, (C * 0.177) | 0, 0);

  pivot_Front_d = new THREE.Object3D();
  pivot_Front_d.add(side_A_front_d, pivot_A_bottom_front);
  pivot_Front_d.rotation.set((Math.PI / 180) * 180, 0, 0);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front,torusKnot, pivot_Front_d);
  /* #endregion */
  /* #region  pivot_Back */
  pivot_back_A_top = new THREE.Object3D();
  pivot_back_A_top.add(side_back_A_top, torusKnot2);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.set(-A, -(C * 0.177) | 0, 0);

  pivot_A_bottom_back_left = new THREE.Object3D();
  pivot_A_bottom_back_left.add(side_A_bottom_back_left);
  pivot_A_bottom_back_left.position.set(-A, 0, 0);

  pivot_A_bottom_back_right = new THREE.Object3D();
  pivot_A_bottom_back_right.add(side_A_bottom_back_right);

  pivot_A_bottom_back = new THREE.Object3D();
  pivot_A_bottom_back.add(
    side_A_bottom_back,
    pivot_A_bottom_back_left,
    pivot_A_bottom_back_right
  );
  pivot_A_bottom_back.position.set(0, (C * 0.177) | 0, 0);

  pivot_Back_d = new THREE.Object3D();
  pivot_Back_d.add(side_A_back_d, pivot_A_bottom_back);
  pivot_Back_d.rotation.set((Math.PI / 180) * 180, 0, 0);

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_back_A_top, pivot_Glue_lid, pivot_Back_d);
  pivot_Back.position.set(-B / 2, 0, 0);
  /* #endregion */
  /* #region  pivot_Left */

  /* #region  left_Panel @ pivot_Left */
  pivot_Left_bottom_lid_d_left = new THREE.Object3D();
  pivot_Left_bottom_lid_d_left.add(side_B_left_bottom_lid_d_left);
  pivot_Left_bottom_lid_d_left.position.set(B / 2, -(C * 0.248) | 0, 0);

  pivot_Left_bottom_lid_left = new THREE.Object3D();
  pivot_Left_bottom_lid_left.add(
    side_B_left_bottom_lid_left,
    pivot_Left_bottom_lid_d_left
  );
  pivot_Left_bottom_lid_left.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Left_bottom_d_left = new THREE.Object3D();
  pivot_Left_bottom_d_left.add(
    side_B_left_bottom_d_left,
    pivot_Left_bottom_lid_left
  );

  pivot_Left_bottom_left = new THREE.Object3D();
  pivot_Left_bottom_left.add(side_B_left_bottom_left, pivot_Left_bottom_d_left);
  pivot_Left_bottom_left.position.set(-B / 2, 0, 0);

  pivot_Left_l = new THREE.Object3D();
  pivot_Left_l.add(side_B_left_l, pivot_Left_bottom_left, pivot_Back);
  pivot_Left_l.position.set(-B / 2, 0, 0);
  /* #endregion */

  /* #region  right_Panel @ pivot_Left */
  pivot_Left_bottom_lid_d_right = new THREE.Object3D();
  pivot_Left_bottom_lid_d_right.add(side_B_left_bottom_lid_d_right);
  pivot_Left_bottom_lid_d_right.position.set(-B / 2, -(C * 0.248) | 0, 0);

  pivot_Left_bottom_lid_right = new THREE.Object3D();
  pivot_Left_bottom_lid_right.add(
    side_B_left_bottom_lid_right,
    pivot_Left_bottom_lid_d_right
  );
  pivot_Left_bottom_lid_right.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Left_bottom_d_right = new THREE.Object3D();
  pivot_Left_bottom_d_right.add(
    side_B_left_bottom_d_right,
    pivot_Left_bottom_lid_right
  );

  pivot_Left_bottom_right = new THREE.Object3D();
  pivot_Left_bottom_right.add(
    side_B_left_bottom_right,
    pivot_Left_bottom_d_right
  );

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_l, pivot_Left_bottom_right);
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Glue */
  pivot_Glue_bottom_lid = new THREE.Object3D();
  pivot_Glue_bottom_lid.add(side_Glue_bottom_lid);

  pivot_Glue_bottom = new THREE.Object3D();
  pivot_Glue_bottom.add(side_Glue_bottom, pivot_Glue_bottom_lid);
  pivot_Glue_bottom.position.y = -(C * 0.177) | 0;

  pivot_Glue_center = new THREE.Object3D();
  pivot_Glue_center.add(side_Glue_center, pivot_Glue_bottom);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid, pivot_Glue_center);

  pivot_Glue = new THREE.Object3D();
  pivot_Glue.add(pivot_Glue_lid);
  pivot_Glue.position.x = B / 2;
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  right_Panel @ pivot_Right */
  pivot_Right_bottom_lid_d_right = new THREE.Object3D();
  pivot_Right_bottom_lid_d_right.add(side_B_right_bottom_lid_d_right);
  pivot_Right_bottom_lid_d_right.position.set(-B / 2, -(C * 0.248) | 0, 0);

  pivot_Right_bottom_lid_right = new THREE.Object3D();
  pivot_Right_bottom_lid_right.add(
    side_B_right_bottom_lid_right,
    pivot_Right_bottom_lid_d_right
  );
  pivot_Right_bottom_lid_right.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Right_bottom_d_right = new THREE.Object3D();
  pivot_Right_bottom_d_right.add(
    side_B_right_bottom_d_right,
    pivot_Right_bottom_lid_right
  );

  pivot_Right_bottom_right = new THREE.Object3D();
  pivot_Right_bottom_right.add(
    side_B_right_bottom_right,
    pivot_Right_bottom_d_right
  );
  pivot_Right_bottom_right.position.set(B / 2, 0, 0);

  pivot_Right_r = new THREE.Object3D();
  pivot_Right_r.add(side_B_right_r, pivot_Right_bottom_right, pivot_Glue);
  pivot_Right_r.position.set(B / 2, 0, 0);
  /* #endregion */

  /* #region  left_Panel @ pivot_Right */
  pivot_Right_bottom_lid_d_left = new THREE.Object3D();
  pivot_Right_bottom_lid_d_left.add(side_B_right_bottom_lid_d_left);
  pivot_Right_bottom_lid_d_left.position.set(B / 2, -(C * 0.248) | 0, 0);

  pivot_Right_bottom_lid_left = new THREE.Object3D();
  pivot_Right_bottom_lid_left.add(
    side_B_right_bottom_lid_left,
    pivot_Right_bottom_lid_d_left
  );
  pivot_Right_bottom_lid_left.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Right_bottom_d_left = new THREE.Object3D();
  pivot_Right_bottom_d_left.add(
    side_B_right_bottom_d_left,
    pivot_Right_bottom_lid_left
  );

  pivot_Right_bottom_left = new THREE.Object3D();
  pivot_Right_bottom_left.add(
    side_B_right_bottom_left,
    pivot_Right_bottom_d_left
  );

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_bottom_left, pivot_Right_r);
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - แบบมีเส้น */

  /* #region  pivot_Front */
  pivot_A_bottom_front_left_edges = new THREE.Object3D();
  pivot_A_bottom_front_left_edges.add(side_A_bottom_front_left_edges);

  pivot_A_bottom_front_right_edges = new THREE.Object3D();
  pivot_A_bottom_front_right_edges.add(side_A_bottom_front_right_edges);
  pivot_A_bottom_front_right_edges.position.set(A, 0, 0);

  pivot_A_bottom_front_edges = new THREE.Object3D();
  pivot_A_bottom_front_edges.add(
    side_A_bottom_front_edges,
    pivot_A_bottom_front_left_edges,
    pivot_A_bottom_front_right_edges
  );
  pivot_A_bottom_front_edges.position.set(0, (C * 0.177) | 0, 0);

  pivot_Front_d_edges = new THREE.Object3D();
  pivot_Front_d_edges.add(side_A_front_d_edges, pivot_A_bottom_front_edges);
  pivot_Front_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(side_A_front_edges, pivot_Front_d_edges);
  /* #endregion */
  /* #region  pivot_Back */
  pivot_back_A_top_edges = new THREE.Object3D();
  pivot_back_A_top_edges.add(side_back_A_top_edges);
  pivot_back_A_top_edges.position.set(0, (C * 0.824) | 0, 0);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.set(-A, -(C * 0.177) | 0, 0);

  pivot_A_bottom_back_left_edges = new THREE.Object3D();
  pivot_A_bottom_back_left_edges.add(side_A_bottom_back_left_edges);
  pivot_A_bottom_back_left_edges.position.set(-A, 0, 0);

  pivot_A_bottom_back_right_edges = new THREE.Object3D();
  pivot_A_bottom_back_right_edges.add(side_A_bottom_back_right_edges);

  pivot_A_bottom_back_edges = new THREE.Object3D();
  pivot_A_bottom_back_edges.add(
    side_A_bottom_back_edges,
    pivot_A_bottom_back_left_edges,
    pivot_A_bottom_back_right_edges
  );
  pivot_A_bottom_back_edges.position.set(0, (C * 0.177) | 0, 0);

  pivot_Back_d_edges = new THREE.Object3D();
  pivot_Back_d_edges.add(side_A_back_d_edges, pivot_A_bottom_back_edges);
  pivot_Back_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_back_A_top_edges,
    pivot_Glue_lid_edges,
    pivot_Back_d_edges
  );
  pivot_Back_edges.position.set(-B / 2, 0, 0);
  /* #endregion */
  /* #region  pivot_Left */

  /* #region  left_Panel @ pivot_Left */
  pivot_Left_bottom_lid_d_left_edges = new THREE.Object3D();
  pivot_Left_bottom_lid_d_left_edges.add(side_B_left_bottom_lid_d_left_edges);
  pivot_Left_bottom_lid_d_left_edges.position.set(B / 2, -(C * 0.248) | 0, 0);

  pivot_Left_bottom_lid_left_edges = new THREE.Object3D();
  pivot_Left_bottom_lid_left_edges.add(
    side_B_left_bottom_lid_left_edges,
    pivot_Left_bottom_lid_d_left_edges
  );
  pivot_Left_bottom_lid_left_edges.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Left_bottom_d_left_edges = new THREE.Object3D();
  pivot_Left_bottom_d_left_edges.add(
    side_B_left_bottom_d_left_edges,
    pivot_Left_bottom_lid_left_edges
  );

  pivot_Left_bottom_left_edges = new THREE.Object3D();
  pivot_Left_bottom_left_edges.add(
    side_B_left_bottom_left_edges,
    pivot_Left_bottom_d_left_edges
  );
  pivot_Left_bottom_left_edges.position.set(-B / 2, 0, 0);

  pivot_Left_l_edges = new THREE.Object3D();
  pivot_Left_l_edges.add(
    side_B_left_l_edges,
    pivot_Left_bottom_left_edges,
    pivot_Back_edges
  );
  pivot_Left_l_edges.position.set(-B / 2, 0, 0);
  /* #endregion */

  /* #region  right_Panel @ pivot_Left */
  pivot_Left_bottom_lid_d_right_edges = new THREE.Object3D();
  pivot_Left_bottom_lid_d_right_edges.add(side_B_left_bottom_lid_d_right_edges);
  pivot_Left_bottom_lid_d_right_edges.position.set(-B / 2, -(C * 0.248) | 0, 0);

  pivot_Left_bottom_lid_right_edges = new THREE.Object3D();
  pivot_Left_bottom_lid_right_edges.add(
    side_B_left_bottom_lid_right_edges,
    pivot_Left_bottom_lid_d_right_edges
  );
  pivot_Left_bottom_lid_right_edges.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Left_bottom_d_right_edges = new THREE.Object3D();
  pivot_Left_bottom_d_right_edges.add(
    side_B_left_bottom_d_right_edges,
    pivot_Left_bottom_lid_right_edges
  );

  pivot_Left_bottom_right_edges = new THREE.Object3D();
  pivot_Left_bottom_right_edges.add(
    side_B_left_bottom_right_edges,
    pivot_Left_bottom_d_right_edges
  );

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_l_edges,
    pivot_Left_bottom_right_edges
  );
  /* #endregion */

  /* #endregion */
  /* #region  pivot_Glue */
  pivot_Glue_bottom_lid_edges = new THREE.Object3D();
  pivot_Glue_bottom_lid_edges.add(side_Glue_bottom_lid_edges);

  pivot_Glue_bottom_edges = new THREE.Object3D();
  pivot_Glue_bottom_edges.add(
    side_Glue_bottom_edges,
    pivot_Glue_bottom_lid_edges
  );
  pivot_Glue_bottom_edges.position.y = -(C * 0.177) | 0;

  pivot_Glue_center_edges = new THREE.Object3D();
  pivot_Glue_center_edges.add(side_Glue_center_edges, pivot_Glue_bottom_edges);

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges, pivot_Glue_center_edges);

  pivot_Glue_edges = new THREE.Object3D();
  pivot_Glue_edges.add(pivot_Glue_lid_edges);
  pivot_Glue_edges.position.x = B / 2;
  /* #endregion */
  /* #region  pivot_Right */

  /* #region  right_Panel @ pivot_Right */
  pivot_Right_bottom_lid_d_right_edges = new THREE.Object3D();
  pivot_Right_bottom_lid_d_right_edges.add(
    side_B_right_bottom_lid_d_right_edges
  );
  pivot_Right_bottom_lid_d_right_edges.position.set(
    -B / 2,
    -(C * 0.248) | 0,
    0
  );

  pivot_Right_bottom_lid_right_edges = new THREE.Object3D();
  pivot_Right_bottom_lid_right_edges.add(
    side_B_right_bottom_lid_right_edges,
    pivot_Right_bottom_lid_d_right_edges
  );
  pivot_Right_bottom_lid_right_edges.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Right_bottom_d_right_edges = new THREE.Object3D();
  pivot_Right_bottom_d_right_edges.add(
    side_B_right_bottom_d_right_edges,
    pivot_Right_bottom_lid_right_edges
  );

  pivot_Right_bottom_right_edges = new THREE.Object3D();
  pivot_Right_bottom_right_edges.add(
    side_B_right_bottom_right_edges,
    pivot_Right_bottom_d_right_edges
  );
  pivot_Right_bottom_right_edges.position.set(B / 2, 0, 0);

  pivot_Right_r_edges = new THREE.Object3D();
  pivot_Right_r_edges.add(
    side_B_right_r_edges,
    pivot_Right_bottom_right_edges,
    pivot_Glue_edges
  );
  pivot_Right_r_edges.position.set(B / 2, 0, 0);
  /* #endregion */

  /* #region  left_Panel @ pivot_Right */
  pivot_Right_bottom_lid_d_left_edges = new THREE.Object3D();
  pivot_Right_bottom_lid_d_left_edges.add(side_B_right_bottom_lid_d_left_edges);
  pivot_Right_bottom_lid_d_left_edges.position.set(B / 2, -(C * 0.248) | 0, 0);

  pivot_Right_bottom_lid_left_edges = new THREE.Object3D();
  pivot_Right_bottom_lid_left_edges.add(
    side_B_right_bottom_lid_left_edges,
    pivot_Right_bottom_lid_d_left_edges
  );
  pivot_Right_bottom_lid_left_edges.position.set(0, -(C * 0.177) | 0, 0);

  pivot_Right_bottom_d_left_edges = new THREE.Object3D();
  pivot_Right_bottom_d_left_edges.add(
    side_B_right_bottom_d_left_edges,
    pivot_Right_bottom_lid_left_edges
  );

  pivot_Right_bottom_left_edges = new THREE.Object3D();
  pivot_Right_bottom_left_edges.add(
    side_B_right_bottom_left_edges,
    pivot_Right_bottom_d_left_edges
  );

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Right_bottom_left_edges,
    pivot_Right_r_edges
  );
  pivot_Right_edges.position.set(A, 0, 0);
  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Front_edges, pivot_Left_edges, pivot_Right_edges);
  scene.add(pivot_All_edges);
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
