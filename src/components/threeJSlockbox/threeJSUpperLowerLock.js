/* #region  ประกาศตัวแปร */

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

let controls, renderer, scene, camera;

let A = 52; //  ความกว้าง
let B = 52; //  ความลึก
let C = 175; //  ความสูง
let D = 0.5; //  ความหนา
let O = 0.5; //  ความโปร่งแสง
let G = 15; //  ส่วนประกาว
let P = 15; //  ลิ้นเสียบ ค่า Defualt
let R = 40; //  ความยาวของเส้นรอบวง
let LH = 20; //  ความสูงฐานล็อค ค่า Defualt
let g_Slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt
let w = (window.innerWidth * 75) / 100;
let h = window.innerHeight;

let edges;
let tween;

let side_A_back;
let side_Top;
let side_Top_lid;
let side_A_top;
let side_Top_Lock_lid;
let side_lr_Top_left_lock;
let side_lr_Top_right_lock;
let side_Top_lock;
let side_Bottom;
let side_Bottom_lid;
let side_A_bottom;
let side_Lock_lid;
let side_lr_Left_lock;
let side_lr_Right_lock;
let side_Bottom_lock;
let side_B_left;
let side_lr_Lid_left;
let side_lr_Lid_left_d;
let side_B_right;
let side_lr_Lid_right;
let side_lr_Lid_right_d;
let side_A_front;
let side_Glue_lid;
let side_Lid_front_d;
let side_Lid;

let side_A_back_edges;
let side_Top_edges;
let side_Top_lid_edges;
let side_A_top_edges;
let side_Top_Lock_lid_edges;
let side_lr_Top_left_lock_edges;
let side_lr_Top_right_lock_edges;
let side_Top_lock_edges;
let side_Bottom_edges;
let side_Bottom_lid_edges;
let side_A_bottom_edges;
let side_Lock_lid_edges;
let side_lr_Left_lock_edges;
let side_lr_Right_lock_edges;
let side_Bottom_lock_edges;
let side_B_left_edges;
let side_lr_Lid_left_edges;
let side_lr_Lid_left_d_edges;
let side_B_right_edges;
let side_lr_Lid_right_edges;
let side_lr_Lid_right_d_edges;
let side_A_front_edges;
let side_Glue_lid_edges;
let side_Lid_front_d_edges;
let side_Lid_edges;

let pivot_Top_lid;
let pivot_Top;
let pivot_Lock_Top_left;
let pivot_Lock_Top_right;
let pivot_Lock_top;
let pivot_Lock_Top_lid;
let pivot_A_top;
let pivot_Bottom_lid;
let pivot_Bottom;
let pivot_Back;
let pivot_Glue_lid;
let pivot_Front;
let pivot_Right_lid;
let pivot_Right_lid_d;
let pivot_Right;
let pivot_Left_lid;
let pivot_Left_lid_d;
let pivot_Left;
let pivot_Bottom_left;
let pivot_Bottom_right;
let pivot_Bottom_lock;
let pivot_Lock_Bottom_lid;
let pivot_A_bottom;
let pivot_All;

let pivot_Top_lid_edges;
let pivot_Top_edges;
let pivot_Lock_Top_left_edges;
let pivot_Lock_Top_right_edges;
let pivot_Lock_top_edges;
let pivot_Lock_Top_lid_edges;
let pivot_A_top_edges;
let pivot_Bottom_lid_edges;
let pivot_Bottom_edges;
let pivot_Back_edges;
let pivot_Glue_lid_edges;
let pivot_Front_edges;
let pivot_Right_lid_edges;
let pivot_Right_lid_d_edges;
let pivot_Right_edges;
let pivot_Left_lid_edges;
let pivot_Left_lid_d_edges;
let pivot_Left_edges;
let pivot_Bottom_left_edges;
let pivot_Bottom_right_edges;
let pivot_Bottom_lock_edges;
let pivot_Lock_Bottom_lid_edges;
let pivot_A_bottom_edges;
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
  // pivot_All.rotation.y += Math.PI / 360;
  // pivot_All_edges.rotation.y += Math.PI / 360;
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */
const rotations1 = () => {
  // ชิ้นงาน

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = Math.PI / 2),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = Math.PI / 2),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = -(Math.PI / 2)),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Top_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_right.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = -(Math.PI / 2)),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = Math.PI / 2),
  });

  // เส้น

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = Math.PI / 2),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = Math.PI / 2),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front_edges.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 2)),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Top_lid_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_top_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_left_edges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_right_edges.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid_edges.x = -(Math.PI / 2)),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_edges.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock_edges.x = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left_edges.y = -(Math.PI / 2)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right_edges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid_edges.x = Math.PI / 2),
  });
};
/* #endregion */
/* #region  กางกล่อง */
const rotations2 = () => {
  // ชิ้นงาน

  // pivot_Left

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

  // pivot_Right

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

  // pivot_Front

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

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_right.y = 0),
  });

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

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = 0),
  });

  // ชิ้นงาน

  // pivot_Left

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

  // pivot_Right

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

  // pivot_Front

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

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Top_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_Top_right_edges.y = 0),
  });

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

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid_edges.x = 0),
  });
};
/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, d, o, r) => {
  A = a;
  B = b;
  C = c;
  D = d;
  O = o;
  R = r;

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
  // scene.add(helper);

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
  // scene.add(helper2);

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
  /* #region  โมเดล */

  /* #region  ฝาเสียบ */

  let lid_Shape = new THREE.Shape();
  lid_Shape.moveTo(0, 0);
  lid_Shape.lineTo(A, 0);
  lid_Shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_Shape.lineTo(A / 10, -P);
  lid_Shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  let lid = new THREE.ShapeGeometry(lid_Shape); // ฝาเสียบ

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_Slope, G);
  glue_Lid_shape.lineTo(C - g_Slope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  /* #endregion */
  /* #region  ลิ้นกันฝุ่น */

  let lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (LH * 0.1) | 0); // 0, 2
  lr_lid_shape.lineTo((B * 0.039) | 0, (LH * 0.15) | 0); // 2, 3
  lr_lid_shape.lineTo((B * 0.14) | 0, (LH * 0.9) | 0); // 7, 18
  // Center ...................................................
  lr_lid_shape.lineTo((B * 0.2) | 0, LH); // 10, 20
  lr_lid_shape.lineTo((B * 0.99) | 0, LH); // 51, 20
  // Rear .....................................................
  lr_lid_shape.lineTo((B * 0.99) | 0, (LH * 0.1) | 0); // 51, 2
  lr_lid_shape.lineTo(B, 0); // 52, 0

  let lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

  /* #endregion */
  /* #region  ลิ้นฝาล็อค */

  let lr_Bottom_shape = new THREE.Shape();

  lr_Bottom_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Bottom_shape.lineTo((A * 0.02) | 0, (B * 0.39) | 0); // 0, 20
  // Center ...................................................
  lr_Bottom_shape.lineTo((A * 0.99) | 0, (B * 0.39) | 0); // 50, 20
  // Rear .....................................................
  lr_Bottom_shape.lineTo((A * 0.99) | 0, 0); // 50, 0

  let lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค

  /* #endregion */
  /* #region  ฝาล็อค */

  let lr_Lock_shape = new THREE.Shape();

  lr_Lock_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo((A * 0.02) | 0, (B * 0.962) | 0);
  // Center ...................................................
  lr_Lock_shape.lineTo((A * 0.99) | 0, (B * 0.962) | 0);
  // Rear .....................................................
  lr_Lock_shape.lineTo((A * 0.99) | 0, 0);

  let hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo(A / 2 - R / 2, (B - 2) / 2); // 6, 25
  hole_Lock_shape.bezierCurveTo(
    A / 2 - R / 2, // 6
    (B - 2) / 2, // 25
    A / 2 - R / 2, // 6
    (B - 2 - R) / 2, // 5
    A / 2, // 26
    (B - 2 - R) / 2 // 5
  );
  hole_Lock_shape.bezierCurveTo(
    A / 2, // 26
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2 - R) / 2, // 5
    (A + R) / 2, // 46
    (B - 2) / 2 // 25
  );
  hole_Lock_shape.bezierCurveTo(
    (A + R) / 2, // 46
    (B - 2) / 2, // 25
    (A + R) / 2, // 46
    (B - 2 + R) / 2, // 45
    A / 2, // 26
    (B - 2 + R) / 2 // 45
  );
  hole_Lock_shape.bezierCurveTo(
    A / 2, // 26
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2 + R) / 2, // 45
    A / 2 - R / 2, // 6
    (B - 2) / 2 // 25
  );
  lr_Lock_shape.holes.push(hole_Lock_shape);

  let lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค

  /* #endregion */
  /* #region  ลิ้นกันฝุ่นฝาล็อค */

  let lr_Lid_lock_shape = new THREE.Shape();

  lr_Lid_lock_shape.moveTo(0, -(LH * 0.05) | 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo((B * 0.2) | 0, (LH * 0.95) | 0); // 10, 20
  // Center ...................................................
  lr_Lid_lock_shape.lineTo((B * 0.885) | 0, (LH * 0.95) | 0); // 46, 20
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo((B * 0.962) | 0, -(LH * 0.05) | 0); // 50, 0

  let lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค

  /* #endregion */
  /* #region  ตัวเสียบฝาล็อคบน */

  let lr_Bottom_lock_shape = new THREE.Shape();

  lr_Bottom_lock_shape.moveTo((A * 0.02) | 0, 0);
  // Front ....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.116) | 0, LH);
  // Center ...................................................
  lr_Bottom_lock_shape.lineTo((A * 0.885) | 0, LH);
  // Rear .....................................................
  lr_Bottom_lock_shape.lineTo((A * 0.99) | 0, 0);

  let lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคบน

  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */

  let plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  let plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  let plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา

  /* #endregion */

  /* #endregion */
  /* #region  วัตถุ */

  /* #region  side_A_back */

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.set(A / 2, C / 2, 0);

  /* #endregion */
  /* #region  side_A_top */

  side_Top = new THREE.Mesh(plane_Top_bottom, material);
  side_Top.position.set(A / 2, B / 2, 0);

  side_Top_lid = new THREE.Mesh(lid, material);
  side_Top_lid.rotation.x = Math.PI;

  side_A_top = new THREE.Mesh(lr_Bottom, material);
  side_A_top.rotation.y = Math.PI;

  side_Top_Lock_lid = new THREE.Mesh(lr_Lock, material);
  side_Top_Lock_lid.rotation.y = Math.PI;

  side_lr_Top_left_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Top_left_lock.rotation.z = -(Math.PI / 180) * 270;

  side_lr_Top_right_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Top_right_lock.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  side_Top_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_Top_lock.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_A_bottom */

  side_Bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_Bottom.position.set(A / 2, -B / 2, 0);

  side_Bottom_lid = new THREE.Mesh(lid, material);

  side_A_bottom = new THREE.Mesh(lr_Bottom, material);
  side_A_bottom.rotation.set(Math.PI, Math.PI, 0);

  side_Lock_lid = new THREE.Mesh(lr_Lock, material);
  side_Lock_lid.rotation.set(Math.PI, Math.PI, 0);

  side_lr_Left_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Left_lock.rotation.set(0, Math.PI, -Math.PI / 2);

  side_lr_Right_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Right_lock.rotation.z = -Math.PI / 2;

  side_Bottom_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_Bottom_lock.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-B / 2, C / 2, 0);

  side_lr_Lid_left = new THREE.Mesh(lr_lid, material);

  side_lr_Lid_left_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_left_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(B / 2, C / 2, 0);

  side_lr_Lid_right = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right.rotation.y = Math.PI;

  side_lr_Lid_right_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right_d.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  side_A_front */

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.set(-A / 2, C / 2, 0);

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.z = Math.PI / 2;

  side_Lid_front_d = new THREE.Mesh(plane_Top_bottom, material);
  side_Lid_front_d.position.set(A / 2, -B / 2, 0);

  side_Lid = new THREE.Mesh(lid, material);

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Top */

  /* #region  pivot_Lock_Top_lid */

  pivot_Lock_Top_left = new THREE.Object3D();
  pivot_Lock_Top_left.add(side_lr_Top_left_lock);
  pivot_Lock_Top_left.position.x = -A;

  pivot_Lock_Top_right = new THREE.Object3D();
  pivot_Lock_Top_right.add(side_lr_Top_right_lock);

  pivot_Lock_top = new THREE.Object3D();
  pivot_Lock_top.add(side_Top_lock);
  pivot_Lock_top.position.y = (B * 0.97) | 0;

  pivot_Lock_Top_lid = new THREE.Object3D();
  pivot_Lock_Top_lid.add(
    side_Top_Lock_lid,
    pivot_Lock_Top_left,
    pivot_Lock_Top_right,
    pivot_Lock_top
  );
  pivot_Lock_Top_lid.position.y = (B * 0.39) | 0;

  /* #endregion */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid);
  pivot_Top_lid.position.y = B;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, pivot_Top_lid);
  pivot_Top.position.y = C;

  pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_Lock_Top_lid);
  pivot_A_top.position.y = C;

  /* #endregion */
  /* #region  pivot_Bottom */

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_Bottom_lid);
  pivot_Bottom_lid.position.y = -B;

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, pivot_Bottom_lid);

  pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock);
  pivot_Bottom_left.position.x = -A;

  pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock);

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock);
  pivot_Bottom_lock.position.y = (-B * 0.962) | 0;

  pivot_Lock_Bottom_lid = new THREE.Object3D();
  pivot_Lock_Bottom_lid.add(
    side_Lock_lid,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_Lock_Bottom_lid.position.y = -(B * 0.39) | 0;

  pivot_A_bottom = new THREE.Object3D();
  pivot_A_bottom.add(side_A_bottom, pivot_Lock_Bottom_lid);

  /* #endregion */
  /* #region  pivot_Back */

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top, pivot_Bottom);

  /* #endregion */
  /* #region  pivot_Front */

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A;

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Glue_lid, pivot_A_top, pivot_A_bottom);
  pivot_Front.position.x = -B;

  /* #endregion */
  /* #region  pivot_Left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left);
  pivot_Left_lid.position.set(-B, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d);
  pivot_Left_lid_d.position.x = -B;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d, pivot_Front);

  /* #endregion */
  /* #region  pivot_Right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right);
  pivot_Right_lid.position.set(B, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d);
  pivot_Right_lid_d.position.x = B;

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_Right.position.x = A;

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Right, pivot_Left);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
  /* #region  วัตถุ - เส้น */

  /* #region  side_A_back */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.set(A / 2, C / 2, 0);

  /* #endregion */
  /* #region  side_A_top */

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_edges.position.set(A / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lid);
  side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_top_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Top_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_Lock_lid_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Top_left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Top_left_lock_edges.rotation.z = -(Math.PI / 180) * 270;

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Top_right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Top_right_lock_edges.rotation.set(0, Math.PI, Math.PI / 2);

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_Top_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Top_lock_edges.rotation.y = Math.PI;

  /* #endregion */
  /* #region  side_A_bottom */

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_edges.position.set(A / 2, -B / 2, 0);

  edges = new THREE.EdgesGeometry(lid);
  side_Bottom_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_bottom_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lock_lid_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Left_lock_edges.rotation.set(0, Math.PI, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Right_lock_edges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_lock_edges.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  side_B_left */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.set(-B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_left_d_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_B_right */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_edges.position.set(B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lr_Lid_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  side_A_front */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_edges.position.set(-A / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Lid_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Lid_front_d_edges.position.set(A / 2, -B / 2, 0);

  edges = new THREE.EdgesGeometry(lid);
  side_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Top */

  /* #region  pivot_Lock_Top_lid */

  pivot_Lock_Top_left_edges = new THREE.Object3D();
  pivot_Lock_Top_left_edges.add(side_lr_Top_left_lock_edges);
  pivot_Lock_Top_left_edges.position.x = -A;

  pivot_Lock_Top_right_edges = new THREE.Object3D();
  pivot_Lock_Top_right_edges.add(side_lr_Top_right_lock_edges);

  pivot_Lock_top_edges = new THREE.Object3D();
  pivot_Lock_top_edges.add(side_Top_lock_edges);
  pivot_Lock_top_edges.position.y = (B * 0.97) | 0;

  pivot_Lock_Top_lid_edges = new THREE.Object3D();
  pivot_Lock_Top_lid_edges.add(
    side_Top_Lock_lid_edges,
    pivot_Lock_Top_left_edges,
    pivot_Lock_Top_right_edges,
    pivot_Lock_top_edges
  );
  pivot_Lock_Top_lid_edges.position.y = (B * 0.39) | 0;

  /* #endregion */

  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.add(side_Top_lid_edges);
  pivot_Top_lid_edges.position.y = B;

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);
  pivot_Top_edges.position.y = C;

  pivot_A_top_edges = new THREE.Object3D();
  pivot_A_top_edges.add(side_A_top_edges, pivot_Lock_Top_lid_edges);
  pivot_A_top_edges.position.y = C;

  /* #endregion */
  /* #region  pivot_Bottom */

  pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.add(side_Bottom_lid_edges);
  pivot_Bottom_lid_edges.position.y = -B;

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges, pivot_Bottom_lid_edges);

  pivot_Bottom_left_edges = new THREE.Object3D();
  pivot_Bottom_left_edges.add(side_lr_Left_lock_edges);
  pivot_Bottom_left_edges.position.x = -A;

  pivot_Bottom_right_edges = new THREE.Object3D();
  pivot_Bottom_right_edges.add(side_lr_Right_lock_edges);

  pivot_Bottom_lock_edges = new THREE.Object3D();
  pivot_Bottom_lock_edges.add(side_Bottom_lock_edges);
  pivot_Bottom_lock_edges.position.y = (-B * 0.962) | 0;

  pivot_Lock_Bottom_lid_edges = new THREE.Object3D();
  pivot_Lock_Bottom_lid_edges.add(
    side_Lock_lid_edges,
    pivot_Bottom_left_edges,
    pivot_Bottom_right_edges,
    pivot_Bottom_lock_edges
  );
  pivot_Lock_Bottom_lid_edges.position.y = -(B * 0.39) | 0;

  pivot_A_bottom_edges = new THREE.Object3D();
  pivot_A_bottom_edges.add(side_A_bottom_edges, pivot_Lock_Bottom_lid_edges);

  /* #endregion */
  /* #region  pivot_Back */

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Top_edges, pivot_Bottom_edges);

  /* #endregion */
  /* #region  pivot_Front */

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.x = -A;

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Glue_lid_edges,
    pivot_A_top_edges,
    pivot_A_bottom_edges
  );
  pivot_Front_edges.position.x = -B;

  /* #endregion */
  /* #region  pivot_Left */

  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_lr_Lid_left_edges);
  pivot_Left_lid_edges.position.set(-B, C, 0);

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_lr_Lid_left_d_edges);
  pivot_Left_lid_d_edges.position.x = -B;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges,
    pivot_Front_edges
  );

  /* #endregion */
  /* #region  pivot_Right */

  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_lr_Lid_right_edges);
  pivot_Right_lid_edges.position.set(B, C, 0);

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_lr_Lid_right_d_edges);
  pivot_Right_lid_d_edges.position.x = B;

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Right_edges.position.x = A;

  /* #endregion */
  /* #region  pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Back_edges, pivot_Right_edges, pivot_Left_edges);
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
  modelCosmeticTube,
  delModelCosmeticTube,
};
