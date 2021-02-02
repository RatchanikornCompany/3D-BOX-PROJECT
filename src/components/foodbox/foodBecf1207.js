/* #region  ตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

let controls, renderer, scene, camera;

let A = 220;
let B = 220;
let C = 30;
let O = 1;
let L = 0.3; // เปอร์เซนนต์
let leng_lr_lib = A * L;

let edges;
let tween;

let side_A_front_top;
let side_A_front;
let side_B_front_left;
let side_B_left_lid;
let side_B_left;
let side_B_left_lid_d;
let side_B_front_right;
let side_B_right_lid;
let side_B_right;
let side_B_right_lid_d;
let side_A_top;
let side_A_back;
let side_Lid_bottom;
let side_Lid_bottom_d;
let side_lr_lid_Bottom_left;
let side_lr_lid_Bottom_right;

let side_A_front_top_edges;
let side_A_front_edges;
let side_B_front_left_edges;
let side_B_left_lid_edges;
let side_B_left_edges;
let side_B_left_lid_d_edges;
let side_B_front_right_edges;
let side_B_right_lid_edges;
let side_B_right_edges;
let side_B_right_lid_d_edges;
let side_A_top_edges;
let side_A_back_edges;
let side_Lid_bottom_edges;
let side_Lid_bottom_d_edges;
let side_lr_lid_Bottom_left_edges;
let side_lr_lid_Bottom_right_edges;

let pivot_A_front_top;
let pivot_B_front_left;
let pivot_B_front_right;
let pivot_A_front;
let pivot_B_left_lid;
let pivot_B_left_lid_d;
let pivot_B_left;
let pivot_B_right_lid;
let pivot_B_right_lid_d;
let pivot_B_right;
let pivot_A_top;
let pivot_lr_lid_Bottom_left;
let pivot_lr_lid_Bottom_right;
let pivot_Lid_bottom_d;
let pivot_Lid_bottom;
let pivot_A_back;
let pivot_All;

let pivot_A_front_top_edges;
let pivot_B_front_left_edges;
let pivot_B_front_right_edges;
let pivot_A_front_edges;
let pivot_B_left_lid_edges;
let pivot_B_left_lid_d_edges;
let pivot_B_left_edges;
let pivot_B_right_lid_edges;
let pivot_B_right_lid_d_edges;
let pivot_B_right_edges;
let pivot_A_top_edges;
let pivot_lr_lid_Bottom_left_edges;
let pivot_lr_lid_Bottom_right_edges;
let pivot_Lid_bottom_d_edges;
let pivot_Lid_bottom_edges;
let pivot_A_back_edges;
let pivot_All_edges;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */

const rotations1 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_right.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_back.x = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_right_edges.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_edges.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_d_edges.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_d_edges.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_d_edges.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_back_edges.x = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_left.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_right.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_back.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #endregion */

  /* #region  จุดหมุน - ชิ้นงาน (เส้น) */
  /* #region  pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_left_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_front_right_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_front_edges.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_left_lid_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_B_right_lid_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Lid_bottom_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_back_edges.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  let initDiv = document.getElementById("webgl");
  let newDiv = document.createElement("div");
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
    //   MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Spotlights */

  let light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  โมเดลที่สร้างใหม่ */

  /* #region  ฝาบน */
  let plane_A_shape = new THREE.Shape();
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

  let hole_plane_A_shape = new THREE.Path();
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

  let plane_A = new THREE.ShapeGeometry(plane_A_shape); // ฝาบน
  /* #endregion */

  /* #region  ฝา A */
  let plane_A_top_shape = new THREE.Shape();
  plane_A_top_shape.moveTo(0, 0);
  plane_A_top_shape.lineTo(0, C);
  plane_A_top_shape.lineTo(A, C);
  plane_A_top_shape.lineTo(A, 0);

  let hole_plane_A_top_shape = new THREE.Path();
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

  let hole_2_plane_A_top_shape = new THREE.Path();
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

  let plane_A_top = new THREE.ShapeGeometry(plane_A_top_shape);
  /* #endregion */

  /* #region  ฝาข้าง */
  let plane_B_shape = new THREE.Shape();
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

  let plane_B = new THREE.ShapeGeometry(plane_B_shape); // ฝาข้าง
  /* #endregion */

  /* #region  ฝาล่าง */
  let lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, C); // 0, 30
  lid_Bottom_shape.lineTo(A, C); // 220, 30
  lid_Bottom_shape.lineTo(A, 0); // 220, 0

  let hole_lid_Bottom_shape = new THREE.Path();
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

  let lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape); // ฝาล่าง (ถ่อนบน)

  let lid_Bottom_d_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_d_shape.lineTo(0, C); // 0, 30
  lid_Bottom_d_shape.lineTo(A, C); // 220, 30
  lid_Bottom_d_shape.lineTo(A, 0); // 220, 0

  let hole_lid_Bottom_d_shape = new THREE.Path();
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

  let lid_Bottom_d = new THREE.ShapeGeometry(lid_Bottom_d_shape); // ฝาล่าง (ถ่อนล่าง)

  let lr_lid_Bottom_shape = new THREE.Shape();
  lr_lid_Bottom_shape.moveTo(0, 0);
  lr_lid_Bottom_shape.lineTo(0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, (C * 0.167) | 0);
  lr_lid_Bottom_shape.lineTo((A * 0.182) | 0, 0);

  let lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape); // ลิ้นฝาล่าง
  /* #endregion */

  /* #region  ลิ้นฝาเสียบบน */
  let lr_Lid_shape = new THREE.Shape(); // ลิ้นฝาเสียบล่าง
  lr_Lid_shape.moveTo(0, 0);
  lr_Lid_shape.lineTo(0, (leng_lr_lib * 0.455) | 0); // 0, 30
  lr_Lid_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.455) | 0); // 25, 30
  lr_Lid_shape.lineTo(C, 15); // 30, 15
  lr_Lid_shape.lineTo(C, 0); // 30, 0

  let lr_Lid = new THREE.ShapeGeometry(lr_Lid_shape); // ลิ้นฝาเสียบบน
  /* #endregion */

  /* #region  ลิ้นฝาเสียบล่าง */
  let lr_Lid_d_shape = new THREE.Shape(); // ลิ้นฝาเสียบบน
  lr_Lid_d_shape.moveTo(0, 0); // 0, 0
  lr_Lid_d_shape.lineTo(0, (leng_lr_lib * 0.54) | 0); // 0, 35
  lr_Lid_d_shape.lineTo((C * 0.067) | 0, (leng_lr_lib * 0.788) | 0); // 2, 52
  lr_Lid_d_shape.lineTo((C * 0.834) | 0, (leng_lr_lib * 0.788) | 0); // 25, 52
  lr_Lid_d_shape.lineTo(C, (leng_lr_lib * 0.455) | 0); // 30, 30
  lr_Lid_d_shape.lineTo(C, 0); // 30, 0

  let lr_Lid_d = new THREE.ShapeGeometry(lr_Lid_d_shape); // ลิ้นฝาเสียบล่าง
  /* #endregion */

  /* #region  รูปทรงมาตราฐาน */
  let plane_A_side = new THREE.PlaneGeometry(A, B); // ด้าน A | กว้าง x สูง | ความหนา
  let plane_B_side = new THREE.PlaneGeometry(C, B); // ด้าน B | ลึก x สูง | ความหนา
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
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.set(A / 2, B / 2, 0);
  /* #endregion */

  /* #region  b_Left */
  edges = new THREE.EdgesGeometry(plane_B);
  side_B_front_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_front_left_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_lid_edges.rotation.y = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(-C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_d);
  side_B_left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
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
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(C / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid_d);
  side_B_right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_lid_d_edges.rotation.set((Math.PI / 180) * 180, 0, 0);
  /* #endregion */

  /* #region  a_Back */
  edges = new THREE.EdgesGeometry(plane_A_top);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.set(A / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lid_Bottom);
  side_Lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_bottom_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lid_Bottom_d);
  side_Lid_bottom_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_bottom_d_edges.position.y = -C;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lr_lid_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_Bottom_left_edges.rotation.x = (Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_lr_lid_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
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

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
