/* #region  ตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

let controls, renderer, scene, camera;

let A = 125;
let B = 60;
let C = 235;
let D = 0.5;
let O = 1;
let P = 18; // ความกว้างเฉพาะด้านของฝาเสียบกาว
let plug = 15;
let plugs_slope = 5;

let edges;
let tween;

let side_A_front;
let side_A_back;
let side_Glue_lid;
let side_Top;
let side_Lid_top;
let side_Bottom;
let side_Lid_bottom;
let side_B_left;
let side_lid_B_left;
let side_B_left_d;
let side_B_right;
let side_lid_B_right;
let side_B_right_d;
let side_lid_Cover;
let side_A_top;
let side_A_top_lid;
let side_A_bottom;
let side_A_lid_bottom;

let side_A_front_edges;
let side_A_back_edges;
let side_Glue_lid_edges;
let side_Top_edges;
let side_Lid_top_edges;
let side_Bottom_edges;
let side_Lid_bottom_edges;
let side_B_left_edges;
let side_lid_B_left_edges;
let side_B_left_d_edges;
let side_B_right_edges;
let side_lid_B_right_edges;
let side_B_right_d_edges;
let side_lid_Cover_edges;
let side_A_top_edges;
let side_A_top_lid_edges;
let side_A_bottom_edges;
let side_A_lid_bottom_edges;

let pivot_A_lid_bottom;
let pivot_group_A_bottom;
let pivot_A_front;
let pivot_Glue_lid;
let pivot_A_back;
let pivot_Top;
let pivot_Top_lid;
let pivot_Group_top;
let pivot_Group_bottom;
let pivot_Bottom;
let pivot_Bottom_lid;
let pivot_group_A_back;
let pivot_lid_B_left;
let pivot_lid_B_left_d;
let pivot_groub_B_left_d;
let pivot_B_left;
let pivot_lid_B_right;
let pivot_lid_B_right_d;
let pivot_group_B_right_d;
let pivot_B_right;
let pivot_A_lid_top;
let pivot_group_A_top;
let pivot_All;

let pivot_A_lid_bottom_edges;
let pivot_group_A_bottom_edges;
let pivot_A_front_edges;
let pivot_Glue_lid_edges;
let pivot_A_back_edges;
let pivot_Top_edges;
let pivot_Top_lid_edges;
let pivot_Group_top_edges;
let pivot_Group_bottom_edges;
let pivot_Bottom_edges;
let pivot_Bottom_lid_edges;
let pivot_group_A_back_edges;
let pivot_lid_B_left_edges;
let pivot_lid_B_left_d_edges;
let pivot_groub_B_left_d_edges;
let pivot_B_left_edges;
let pivot_lid_B_right_edges;
let pivot_lid_B_right_d_edges;
let pivot_group_B_right_d_edges;
let pivot_B_right_edges;
let pivot_A_lid_top_edges;
let pivot_group_A_top_edges;
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
  tween = gsap.timeline();
  tween.to(pivot_A_lid_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_top.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_lid_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_top.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_group_A_back.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  จุดหมุน - ชิ้นงาน (เส้น)*/
  tween = gsap.timeline();
  tween.to(pivot_A_lid_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_top_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_lid_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_top_edges.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_group_A_back_edges.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_edges.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d_edges.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_edges.x = (Math.PI / 180) * -92),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d_edges.x = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */
  tween = gsap.timeline();
  tween.to(pivot_A_lid_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_lid_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_group_A_back.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  จุดหมุน - ชิ้นงาน (เส้น)*/
  tween = gsap.timeline();
  tween.to(pivot_A_lid_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_lid_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_lid_bottom_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_bottom_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_top_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_group_A_back_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d_edges.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  D = d;
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
  /* #region  ฝาเสียบ */
  let lid_Cover_shape = new THREE.Shape();

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

  let lid_Cover = new THREE.ShapeGeometry(lid_Cover_shape); // ฝาเสียบ
  /* #endregion */

  /* #region  ฝาเสียบกาว */
  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glue_Lid_shape.lineTo(C / 10, -P);
  glue_Lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว
  /* #endregion */

  /* #region  ลิ้นกันฝุ่นบน */
  const flaps = new THREE.Shape();
  flaps.moveTo(0, 0);
  flaps.lineTo(0, 0);
  flaps.lineTo(2, A / 2);
  flaps.bezierCurveTo(2, A / 2, -1, A / 2 + plug - 4, 7, A / 2 + plug);

  flaps.bezierCurveTo(
    B - plugs_slope - 2,
    A / 2 + plug,
    B - 4,
    A / 2 + plug + 3,
    B - plugs_slope,
    A / 2
  );

  flaps.lineTo(B - plugs_slope, A / 2);
  flaps.lineTo(B / 2, A / 2);
  flaps.lineTo(B - plugs_slope, A / 2 - 3);
  flaps.lineTo(B - plugs_slope, A / 2);
  flaps.lineTo(B, 0);
  flaps.lineTo(0, 0);

  let lr_Lid = new THREE.ShapeGeometry(flaps); // ลิ้นกันฝุ่น
  /* #endregion */

  /* #region  ตัวเสียบล่าง */
  const cover = new THREE.Shape();
  cover.moveTo(0, 0);
  cover.lineTo(5, B - 10);
  cover.bezierCurveTo(5, B - 10, 5, B - 1, 20, B - 2);

  cover.lineTo(20, B - 2);
  cover.lineTo(A / 2 - 10, B);

  cover.lineTo(A / 2 + 10, B);
  cover.lineTo(A - 20, B - 2);

  cover.bezierCurveTo(A - 20, B - 2, A - 5, B - 1, A - 5, B - 10);

  cover.lineTo(A - 5, B - 10);
  cover.lineTo(A, 0);
  cover.lineTo(0, 0);

  let lr_lid_Bottom = new THREE.ShapeGeometry(cover); // ตัวเสียบล่าง
  /* #endregion */

  /* #region  ลิ้นเสียบบล่าง */
  const cover_d = new THREE.Shape();
  cover_d.moveTo((A * 0.42) | 0, 0);
  cover_d.lineTo((A * 0.42) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.34) | 0, (B * 0.084) | 0);

  cover_d.bezierCurveTo(
    (A * 0.34) | 0,
    (B * 0.084) | 0,
    (A * 0.316) | 0,
    (B * 0.3) | 0,
    (A * 0.42) | 0,
    (B * 0.25) | 0
  );

  cover_d.moveTo((A * 0.46) | 0, (B * 0.25) | 0);
  cover_d.moveTo((A * 0.54) | 0, (B * 0.25) | 0);

  cover_d.bezierCurveTo(
    (A * 0.58) | 0,
    (B * 0.25) | 0,
    (A * 0.684) | 0,
    (B * 0.3) | 0,
    (A * 0.66) | 0,
    (B * 0.084) | 0
  );

  cover_d.lineTo((A * 0.66) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.58) | 0, (B * 0.084) | 0);
  cover_d.lineTo((A * 0.58) | 0, 0);

  let lid_Bottom_cover = new THREE.ShapeGeometry(cover_d); // ลิ้นเสียบล่าง
  /* #endregion */

  /* #region  โมเดลมาตราฐาน */
  let plane_A_side = new THREE.PlaneGeometry(A, C); // ด้าน A | กว้าง x สูง | ความหนา
  let plane_B_side = new THREE.PlaneGeometry(B, C); // ด้าน B | ลึก x กว้าง | ความหนา
  let plane_Top_bottom = new THREE.PlaneGeometry(A, B); // กว้าง x ลึก | ความหนา
  /* #endregion */
  /* #endregion */
  /* #region  ฉาก */
  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = C / 2;
  /* #endregion */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = -A / 2;
  side_A_back.position.y = C / 2;

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.y = Math.PI;
  side_Glue_lid.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_Top */
  side_Top = new THREE.Mesh(lr_lid_Bottom, material);
  side_Top.rotation.y = Math.PI;

  side_Lid_top = new THREE.Mesh(lid_Bottom_cover, material);
  side_Lid_top.rotation.y = Math.PI;
  /* #endregion */

  /* #region  side_Bottom */
  side_Bottom = new THREE.Mesh(lr_lid_Bottom, material);
  side_Bottom.rotation.x = Math.PI;
  side_Bottom.rotation.y = Math.PI;

  side_Lid_bottom = new THREE.Mesh(lid_Bottom_cover, material);
  side_Lid_bottom.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */

  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-B / 2, C / 2, 0);

  side_lid_B_left = new THREE.Mesh(lr_Lid, material);
  side_lid_B_left.rotation.y = Math.PI;

  side_B_left_d = new THREE.Mesh(lr_Lid, material);
  side_B_left_d.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */

  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(B / 2, C / 2, 0);

  side_lid_B_right = new THREE.Mesh(lr_Lid, material);
  side_lid_B_right.rotation.y = Math.PI;

  side_B_right_d = new THREE.Mesh(lr_Lid, material);
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  side_lid_Cover = new THREE.Mesh(lid_Cover, material);
  side_lid_Cover.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_top */
  side_A_top = new THREE.Mesh(plane_Top_bottom, material);
  side_A_top.position.x = A / 2;
  side_A_top.position.y = B / 2;

  side_A_top_lid = new THREE.Mesh(lid_Cover, material);
  side_A_top_lid.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_bottom */
  side_A_bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_A_bottom.position.set(A / 2, -B / 2, 0);

  side_A_lid_bottom = new THREE.Mesh(lid_Cover, material);
  /* #endregion */
  /* #endregion */
  /* #region  ฉาก - แบบมีเส้น*/
  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.x = A / 2;
  side_A_front_edges.position.y = C / 2;
  /* #endregion */

  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = -A / 2;
  side_A_back_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_lid_edges.rotation.y = Math.PI;
  side_Glue_lid_edges.rotation.z = Math.PI / 2;
  /* #endregion */

  /* #region  side_Top */
  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom_cover);
  side_Lid_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_top_edges.rotation.y = Math.PI;
  /* #endregion */

  /* #region  side_Bottom */
  edges = new THREE.EdgesGeometry(lr_lid_Bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_edges.rotation.x = Math.PI;
  side_Bottom_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lid_Bottom_cover);
  side_Lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_bottom_edges.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */

  /* #region  side_B_left */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(-B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_d_edges.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */

  /* #region  side_B_right */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_right_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Lid);
  side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lid_Cover);
  side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_top */
  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_top_edges.position.x = A / 2;
  side_A_top_edges.position.y = B / 2;

  edges = new THREE.EdgesGeometry(lid_Cover);
  side_A_top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_top_lid_edges.rotation.x = Math.PI;
  /* #endregion */

  /* #region  side_A_bottom */
  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_bottom_edges.position.set(A / 2, -B / 2, 0);

  edges = new THREE.EdgesGeometry(lid_Cover);
  side_A_lid_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  /* #endregion */
  /* #endregion */
  /* #region  จุดหมุน */
  /* #region  pivot_A_front */
  /* #region  pivot_group_A_bottom */
  /* #region  pivot_group_A_top */
  pivot_A_lid_top = new THREE.Object3D();
  pivot_A_lid_top.position.set(0, B, 0);
  pivot_A_lid_top.add(side_A_top_lid);

  pivot_group_A_top = new THREE.Object3D();
  pivot_group_A_top.add(side_A_top, pivot_A_lid_top);
  pivot_group_A_top.position.y = C;
  /* #endregion */

  /* #region  pivot_A_bottom */
  pivot_A_lid_bottom = new THREE.Object3D();
  pivot_A_lid_bottom.add(side_A_lid_bottom);
  pivot_A_lid_bottom.position.y = -B;

  pivot_group_A_bottom = new THREE.Object3D();
  pivot_group_A_bottom.add(side_A_bottom, pivot_A_lid_bottom);
  /* #endregion */

  /* #endregion */

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_group_A_top, pivot_group_A_bottom);
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

  /* #region  pivot_Group_top */
  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top);

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Lid_top);
  pivot_Top_lid.position.y = B;

  pivot_Group_top = new THREE.Object3D();
  pivot_Group_top.add(pivot_Top, pivot_Top_lid);
  pivot_Group_top.position.y = C;
  /* #endregion */

  /* #region  pivot_Group_bottom */
  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom);

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_Lid_bottom);
  pivot_Bottom_lid.position.y = -B;

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);
  /* #endregion */

  pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.set(-B, 0, 0);
  pivot_group_A_back.add(pivot_A_back, pivot_Group_top, pivot_Group_bottom);
  /* #endregion */

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.set(0, C, 0);
  pivot_lid_B_left.add(side_lid_B_left);

  pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d);

  pivot_groub_B_left_d = new THREE.Object3D();
  pivot_groub_B_left_d.add(pivot_lid_B_left_d);

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

  pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.set(A, 0, 0);
  pivot_B_right.add(pivot_lid_B_right, side_B_right, pivot_group_B_right_d);
  /* #endregion */

  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  scene.add(pivot_All);
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  /* #endregion */
  /* #endregion */
  /* #region  จุดหมุน - แบบมีเส้น */
  /* #region  pivot_A_front */
  /* #region  pivot_group_A_bottom */
  /* #region  pivot_group_A_top */
  pivot_A_lid_top_edges = new THREE.Object3D();
  pivot_A_lid_top_edges.position.set(0, B, 0);
  pivot_A_lid_top_edges.add(side_A_top_lid_edges);

  pivot_group_A_top_edges = new THREE.Object3D();
  pivot_group_A_top_edges.add(side_A_top_edges, pivot_A_lid_top_edges);
  pivot_group_A_top_edges.position.y = C;
  /* #endregion */

  /* #region  pivot_A_bottom */
  pivot_A_lid_bottom_edges = new THREE.Object3D();
  pivot_A_lid_bottom_edges.add(side_A_lid_bottom_edges);
  pivot_A_lid_bottom_edges.position.y = -B;

  pivot_group_A_bottom_edges = new THREE.Object3D();
  pivot_group_A_bottom_edges.add(side_A_bottom_edges, pivot_A_lid_bottom_edges);
  /* #endregion */

  /* #endregion */

  pivot_A_front_edges = new THREE.Object3D();
  pivot_A_front_edges.add(
    side_A_front_edges,
    pivot_group_A_top_edges,
    pivot_group_A_bottom_edges
  );
  /* #endregion */

  /* #region  pivot_B_left */
  /* #region  pivot_group_A_back */
  /* #region  pivot_A_back */
  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.position.set(-A, 0, 0);
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);

  pivot_A_back_edges = new THREE.Object3D();
  pivot_A_back_edges.add(side_A_back_edges, pivot_Glue_lid_edges);
  /* #endregion */

  /* #region  pivot_Group_top */
  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_Top_edges);

  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.add(side_Lid_top_edges);
  pivot_Top_lid_edges.position.y = B;

  pivot_Group_top_edges = new THREE.Object3D();
  pivot_Group_top_edges.add(pivot_Top_edges, pivot_Top_lid_edges);
  pivot_Group_top_edges.position.y = C;
  /* #endregion */

  /* #region  pivot_Group_bottom */
  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges);

  pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.add(side_Lid_bottom_edges);
  pivot_Bottom_lid_edges.position.y = -B;

  pivot_Group_bottom_edges = new THREE.Object3D();
  pivot_Group_bottom_edges.add(pivot_Bottom_edges, pivot_Bottom_lid_edges);
  /* #endregion */

  pivot_group_A_back_edges = new THREE.Object3D();
  pivot_group_A_back_edges.position.set(-B, 0, 0);
  pivot_group_A_back_edges.add(
    pivot_A_back_edges,
    pivot_Group_top_edges,
    pivot_Group_bottom_edges
  );
  /* #endregion */

  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.position.set(0, C, 0);
  pivot_lid_B_left_edges.add(side_lid_B_left_edges);

  pivot_lid_B_left_d_edges = new THREE.Object3D();
  pivot_lid_B_left_d_edges.add(side_B_left_d_edges);

  pivot_groub_B_left_d_edges = new THREE.Object3D();
  pivot_groub_B_left_d_edges.add(pivot_lid_B_left_d_edges);

  pivot_B_left_edges = new THREE.Object3D();
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

  pivot_group_B_right_d_edges = new THREE.Object3D();
  pivot_group_B_right_d_edges.add(pivot_lid_B_right_d_edges);

  pivot_B_right_edges = new THREE.Object3D();
  pivot_B_right_edges.position.set(A, 0, 0);
  pivot_B_right_edges.add(
    pivot_lid_B_right_edges,
    side_B_right_edges,
    pivot_group_B_right_d_edges
  );
  /* #endregion */

  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  scene.add(pivot_All_edges);
  pivot_All_edges.add(
    pivot_A_front_edges,
    pivot_B_left_edges,
    pivot_B_right_edges
  );
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
