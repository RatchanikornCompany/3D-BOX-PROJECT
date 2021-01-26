/* #region  ตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 100;
var C = 40;
var D = 0.5;
var O = 1;

// var edges;
var tween;

var side_A_back;
var side_inner_Flap_left;
var side_lid_B_left;
var side_dust_flap_Left_top;
var side_dust_flap_Left_bottom;
var side_B_left;
var side_inner_Flap_right;
var side_lid_B_right;
var side_dust_flap_Right_top;
var side_dust_flap_Right_bottom;
var side_B_right;
var side_inner_Flap_top;
var side_lid_C_top;
var side_dust_flap_Top_left;
var side_dust_flap_Top_right;
var side_A_top;
var side_inner_Flap_bottom;
var side_lid_C_bottom;
var side_dust_flap_Bottom_left;
var side_dust_flap_Bottom_right;
var side_A_bottom;
var pivot_Back;
var pivot_inner_Flap_left;
var pivot_lid_B_left;
var pivot_dust_flap_Left_top;
var pivot_dust_flap_Left_bottom;
var pivot_Left;
var pivot_inner_Flap_right;
var pivot_lid_B_right;
var pivot_dust_flap_Right_top;
var pivot_dust_flap_Right_bottom;
var pivot_Right;
var pivot_inner_Flap_top;
var pivot_lid_A_top;
var pivot_dust_flap_Top_left;
var pivot_dust_flap_Top_right;
var pivot_Top;
var pivot_inner_Flap_bottom;
var pivot_lid_A_bottom;
var pivot_dust_flap_Bottom_left;
var pivot_dust_flap_Bottom_right;
var pivot_Bottom;
var pivot_All;

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

  /* #region  pivot_Left */
  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  // pivot_lid_B_left
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Left_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Left_top.x = -(Math.PI / 180) * 90),
  });

  // pivot_dust_flap_Left_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Left_bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_inner_Flap_left
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inner_Flap_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Right */
  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  // pivot_lid_B_right
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Right_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Right_top.x = -(Math.PI / 180) * 90),
  });

  // pivot_dust_flap_Right_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Right_bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_inner_Flap_right
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inner_Flap_right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Top */
  // pivot_Top
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  // pivot_lid_A_top
  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top.x = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Top_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Top_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right.y = (Math.PI / 180) * 180),
  });

  // pivot_inner_Flap_top
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_inner_Flap_top.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  // pivot_Bottom
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_lid_A_bottom
  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom.x = (Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Bottom_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Bottom_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right.y = (Math.PI / 180) * 180),
  });

  //  pivot_inner_Flap_bottom
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_inner_Flap_bottom.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน - ชิ้นงาน */

  /* #region  pivot_Left */
  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  // pivot_lid_B_left
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = 0),
  });

  // pivot_dust_flap_Left_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Left_top.x = 0),
  });

  // pivot_dust_flap_Left_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Left_bottom.x = 0),
  });

  // pivot_inner_Flap_left
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inner_Flap_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Right */
  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  // pivot_lid_B_right
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = 0),
  });

  // pivot_dust_flap_Right_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Right_top.x = 0),
  });

  // pivot_dust_flap_Right_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_dust_flap_Right_bottom.x = 0),
  });

  // pivot_inner_Flap_right
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_inner_Flap_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Top */
  // pivot_Top
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });

  // pivot_lid_A_top
  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_top.x = 0),
  });

  // pivot_dust_flap_Top_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left.y = 0),
  });

  // pivot_dust_flap_Top_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right.y = 0),
  });

  // pivot_inner_Flap_top
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_inner_Flap_top.x = 0),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  // pivot_Bottom
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = 0),
  });

  // pivot_lid_A_bottom
  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_A_bottom.x = 0),
  });

  // pivot_dust_flap_Bottom_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left.y = 0),
  });

  // pivot_dust_flap_Bottom_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right.y = 0),
  });

  //  pivot_inner_Flap_bottom
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_inner_Flap_bottom.x = 0),
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
  /* #region  Model */

  /* #region  inner_Flap_top_bottom_shape */
  var inner_Flap_top_bottom_shape = new THREE.Shape();
  inner_Flap_top_bottom_shape.moveTo(0, 0);
  inner_Flap_top_bottom_shape.lineTo(0, (C * 0.225) | 0);
  inner_Flap_top_bottom_shape.lineTo((A * 0.025) | 0, (C * 0.225) | 0);
  inner_Flap_top_bottom_shape.lineTo((A * 0.025) | 0, (C * 0.35) | 0);
  inner_Flap_top_bottom_shape.lineTo((A * 0.975) | 0, (C * 0.35) | 0);
  inner_Flap_top_bottom_shape.lineTo((A * 0.975) | 0, (C * 0.225) | 0);
  inner_Flap_top_bottom_shape.lineTo(A, (C * 0.225) | 0);
  inner_Flap_top_bottom_shape.lineTo(A, 0);

  var inner_Flap_top_bottom = new THREE.ShapeGeometry(
    inner_Flap_top_bottom_shape
  );
  /* #endregion */
  /* #region  inner_Flap_left_right_shape */
  var inner_Flap_left_right_shape = new THREE.Shape();
  inner_Flap_left_right_shape.moveTo(0, 0);
  inner_Flap_left_right_shape.lineTo(0, (C * 0.225) | 0);
  inner_Flap_left_right_shape.lineTo((B * 0.05) | 0, (C * 0.225) | 0);
  inner_Flap_left_right_shape.lineTo((B * 0.05) | 0, (C * 0.35) | 0);
  inner_Flap_left_right_shape.lineTo((B * 0.95) | 0, (C * 0.35) | 0);
  inner_Flap_left_right_shape.lineTo((B * 0.95) | 0, (C * 0.225) | 0);
  inner_Flap_left_right_shape.lineTo(B, (C * 0.225) | 0);
  inner_Flap_left_right_shape.lineTo(B, 0);

  var inner_Flap_left_right = new THREE.ShapeGeometry(
    inner_Flap_left_right_shape
  );
  /* #endregion */
  /* #region  dust_flap_half_Top_shape */
  var dust_flap_half_Top_shape = new THREE.Shape();
  dust_flap_half_Top_shape.moveTo(0, 0);
  dust_flap_half_Top_shape.lineTo(0, C);
  dust_flap_half_Top_shape.lineTo((C * 0.875) | 0, (C * 0.875) | 0);

  var dust_flap_half_Top = new THREE.ShapeGeometry(dust_flap_half_Top_shape);
  /* #endregion */
  /* #region  dust_flap_half_Bottom_shape */
  var dust_flap_half_Bottom_shape = new THREE.Shape();
  dust_flap_half_Bottom_shape.moveTo(0, 0);
  dust_flap_half_Bottom_shape.lineTo((C * 0.875) | 0, (C * 0.875) | 0);
  dust_flap_half_Bottom_shape.lineTo(C, 0);

  var dust_flap_half_Bottom = new THREE.ShapeGeometry(
    dust_flap_half_Bottom_shape
  );
  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
  var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา
  /* #endregion */

  /* #endregion */
  /* #region  ฉาก */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_left */
  side_inner_Flap_left = new THREE.Mesh(inner_Flap_left_right, material);
  side_inner_Flap_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_lid_B_left = new THREE.Mesh(plane_B_side, material);
  side_lid_B_left.position.set(-C / 2, B / 2, 0);

  side_dust_flap_Left_top = new THREE.Mesh(dust_flap_half_Bottom, material);
  side_dust_flap_Left_top.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_dust_flap_Left_bottom = new THREE.Mesh(dust_flap_half_Bottom, material);
  side_dust_flap_Left_bottom.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_B_right */
  side_inner_Flap_right = new THREE.Mesh(inner_Flap_left_right, material);
  side_inner_Flap_right.rotation.set(
    (Math.PI / 180) * 180,
    0,
    -(Math.PI / 180) * 90
  );

  side_lid_B_right = new THREE.Mesh(plane_B_side, material);
  side_lid_B_right.position.set(C / 2, B / 2, 0);

  side_dust_flap_Right_top = new THREE.Mesh(dust_flap_half_Bottom, material);

  side_dust_flap_Right_bottom = new THREE.Mesh(dust_flap_half_Bottom, material);
  side_dust_flap_Right_bottom.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_A_top */
  side_inner_Flap_top = new THREE.Mesh(inner_Flap_top_bottom, material);

  side_lid_C_top = new THREE.Mesh(plane_C_side, material);
  side_lid_C_top.position.set(A / 2, C / 2, 0);

  side_dust_flap_Top_left = new THREE.Mesh(dust_flap_half_Top, material);
  side_dust_flap_Top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_dust_flap_Top_right = new THREE.Mesh(dust_flap_half_Top, material);

  side_A_top = new THREE.Mesh(plane_C_side, material);
  side_A_top.position.set(A / 2, C / 2, 0);
  /* #endregion */
  /* #region  side_A_bottom */
  side_inner_Flap_bottom = new THREE.Mesh(inner_Flap_top_bottom, material);
  side_inner_Flap_bottom.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_lid_C_bottom = new THREE.Mesh(plane_C_side, material);
  side_lid_C_bottom.position.set(A / 2, -C / 2, 0);

  side_dust_flap_Bottom_left = new THREE.Mesh(dust_flap_half_Top, material);
  side_dust_flap_Bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  side_dust_flap_Bottom_right = new THREE.Mesh(dust_flap_half_Top, material);
  side_dust_flap_Bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_A_bottom = new THREE.Mesh(plane_C_side, material);
  side_A_bottom.position.set(A / 2, -C / 2, 0);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);
  /* #endregion */
  /* #region  pivot_Left */
  pivot_inner_Flap_left = new THREE.Object3D();
  pivot_inner_Flap_left.add(side_inner_Flap_left);
  pivot_inner_Flap_left.position.set(-C, 0, 0);

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left, pivot_inner_Flap_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  pivot_dust_flap_Left_top = new THREE.Object3D();
  pivot_dust_flap_Left_top.add(side_dust_flap_Left_top);
  pivot_dust_flap_Left_top.position.set(0, B, 0);

  pivot_dust_flap_Left_bottom = new THREE.Object3D();
  pivot_dust_flap_Left_bottom.add(side_dust_flap_Left_bottom);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(
    side_B_left,
    pivot_lid_B_left,
    pivot_dust_flap_Left_top,
    pivot_dust_flap_Left_bottom
  );
  /* #endregion */
  /* #region  pivot_Right */
  pivot_inner_Flap_right = new THREE.Object3D();
  pivot_inner_Flap_right.add(side_inner_Flap_right);
  pivot_inner_Flap_right.position.set(C, 0, 0);

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right, pivot_inner_Flap_right);
  pivot_lid_B_right.position.set(C, 0, 0);

  pivot_dust_flap_Right_top = new THREE.Object3D();
  pivot_dust_flap_Right_top.add(side_dust_flap_Right_top);
  pivot_dust_flap_Right_top.position.set(0, B, 0);

  pivot_dust_flap_Right_bottom = new THREE.Object3D();
  pivot_dust_flap_Right_bottom.add(side_dust_flap_Right_bottom);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_lid_B_right,
    pivot_dust_flap_Right_top,
    pivot_dust_flap_Right_bottom
  );
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_Top */
  pivot_inner_Flap_top = new THREE.Object3D();
  pivot_inner_Flap_top.add(side_inner_Flap_top);
  pivot_inner_Flap_top.position.set(0, C, 0);

  pivot_lid_A_top = new THREE.Object3D();
  pivot_lid_A_top.add(side_lid_C_top, pivot_inner_Flap_top);
  pivot_lid_A_top.position.set(0, C, 0);

  pivot_dust_flap_Top_left = new THREE.Object3D();
  pivot_dust_flap_Top_left.add(side_dust_flap_Top_left);

  pivot_dust_flap_Top_right = new THREE.Object3D();
  pivot_dust_flap_Top_right.add(side_dust_flap_Top_right);
  pivot_dust_flap_Top_right.position.set(A, 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    pivot_lid_A_top,
    pivot_dust_flap_Top_left,
    pivot_dust_flap_Top_right
  );
  pivot_Top.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_inner_Flap_bottom = new THREE.Object3D();
  pivot_inner_Flap_bottom.add(side_inner_Flap_bottom);
  pivot_inner_Flap_bottom.position.set(0, -C, 0);

  pivot_lid_A_bottom = new THREE.Object3D();
  pivot_lid_A_bottom.add(side_lid_C_bottom, pivot_inner_Flap_bottom);
  pivot_lid_A_bottom.position.set(0, -C, 0);

  pivot_dust_flap_Bottom_left = new THREE.Object3D();
  pivot_dust_flap_Bottom_left.add(side_dust_flap_Bottom_left);

  pivot_dust_flap_Bottom_right = new THREE.Object3D();
  pivot_dust_flap_Bottom_right.add(side_dust_flap_Bottom_right);
  pivot_dust_flap_Bottom_right.position.set(A, 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    pivot_lid_A_bottom,
    pivot_dust_flap_Bottom_left,
    pivot_dust_flap_Bottom_right
  );
  scene.add(pivot_Bottom);
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Top, pivot_Bottom);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  pivot_All.rotation.y += Math.PI / 360;
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
