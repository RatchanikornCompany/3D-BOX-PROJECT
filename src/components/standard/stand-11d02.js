/* #region  ประกาศตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 100; // กว้าง
var B = 50; // ลึก
var C = 150; // สูง
var O = 1; // ความโปร่งแสง
var G = [13, 4]; //  ส่วนประกาว
var g_Width = G[0] / A; //  ควมกว้างส่วนประกาว ค่า Defualt
var g_Slope = G[1] / C; //  ควมเฉียงส่วนประกาว ค่า Defualt

var edges;
var tween;

var side_A_front;
var side_A_Top_front;
var side_A_Bottom_front;
var side_A_back;
var side_A_Top_back;
var side_A_Bottom_back;
var side_Glue_lid;
var side_A_Top_back;
var side_A_Bottom_back;
var side_Glue_lid;
var side_B_left;
var side_B_Top_left;
var side_B_Bottom_left;
var side_B_right;
var side_B_Top_right;
var side_B_Bottom_right;

var side_A_Front_edges;
var side_A_Top_Front_edges;
var side_A_Bottom_Front_edges;
var side_A_Back_edges;
var side_A_Top_Back_edges;
var side_A_Bottom_Back_edges;
var side_Glue_Lid_edges;
var side_B_Left_edges;
var side_B_Top_Left_edges;
var side_B_Bottom_Left_edges;
var side_B_Right_edges;
var side_B_Top_Right_edges;
var side_B_Bottom_Right_edges;

var pivot_A_Top_front;
var pivot_A_Bottom_front;
var pivot_A_front;
var pivot_A_Top_back;
var pivot_A_Bottom_back;
var pivot_Glue_lid;
var pivot_A_back;
var pivot_Top_B_left;
var pivot_Bottom_B_left;
var pivot_B_left;
var pivot_Top_B_right;
var pivot_Bottom_B_right;
var pivot_B_right;
var pivot_All;

var pivot_A_Top_Front_edges;
var pivot_A_Bottom_Front_edges;
var pivot_A_Front_edges;
var pivot_A_Top_Back_edges;
var pivot_A_Bottom_Back_edges;
var pivot_Glue_Lid_edges;
var pivot_A_Back_edges;
var pivot_Top_B_Left_edges;
var pivot_Bottom_B_Left_edges;
var pivot_B_Left_edges;
var pivot_Top_B_Right_edges;
var pivot_Bottom_B_Right_edges;
var pivot_B_Right_edges;
var pivot_All_edges;

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
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_front.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_front.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_back.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_back.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_left.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_right.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน (เส้น) */

  /* #region  pivot_A_Front_edges */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_Front_edges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_Front_edges.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_A_Back_edges */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_Back_edges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_Back_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_Lid_edges.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_Back_edges.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_Left_edges */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_Left_edges.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_Left_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_Left_edges.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_Right_edges */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_Right_edges.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_Right_edges.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_Right_edges.y = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_front.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน (เส้น) */

  /* #region  pivot_A_Front_edges */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_Front_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_Front_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_Back_edges */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Top_Back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_Bottom_Back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_Lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_Lid_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_Back_edges.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_Left_edges */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_Left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_Left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_Left_edges.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_Right_edges */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_B_Right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_B_Right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_Right_edges.y = 0),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  rotateObject */

const rotateObject = (object, degreeX = 0, degreeY = 0, degreeZ = 0) => {
  object.rotateX(THREE.Math.degToRad(degreeX));
  object.rotateY(THREE.Math.degToRad(degreeY));
  object.rotateZ(THREE.Math.degToRad(degreeZ));
};

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  const initDiv = document.getElementById("webgl");
  const newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

/* #endregion */
/* #region  TextureLoader */

const texture = new THREE.TextureLoader().load(
  "https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg"
);

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
    75,
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
    color: "0xffffff",
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
    // map: texture,
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
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Spotlights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  Model */

  /* #region  หน้า A */

  const plane_A_Side_shape = new THREE.Shape();

  plane_A_Side_shape.moveTo(0, 0);
  plane_A_Side_shape.bezierCurveTo(0, 0, 5, 1.125, 0, 2.5);
  plane_A_Side_shape.lineTo(0, 2.5);
  plane_A_Side_shape.lineTo(A, 2.5);
  plane_A_Side_shape.bezierCurveTo(A, 2.5, A - 5, 1.125, A, 0);
  plane_A_Side_shape.lineTo(A, 0);

  var points_A = [];

  points_A.push(new THREE.Vector3(2.5, 0));

  for (let i = 0; i <= (A - 7.5) / 2; i += 2.5) {
    points_A.push(new THREE.Vector3(i * 2 + 5, 2.5));
    points_A.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_A = new THREE.CatmullRomCurve3(points_A);

  const points_Curve = curve_A.getPoints(1000);

  plane_A_Side_shape.holes.push(new THREE.Path().setFromPoints(points_Curve));

  const extrudeSettings = {
    amount: C,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const plane_A_side = new THREE.ExtrudeGeometry(
    plane_A_Side_shape,
    extrudeSettings
  );

  /* #endregion */
  /* #region  หน้า B */

  const plane_B_side_shape = new THREE.Shape();

  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.bezierCurveTo(0, 0, 5, 1.125, 0, 2.5);
  plane_B_side_shape.lineTo(0, 2.5);
  plane_B_side_shape.lineTo(B, 2.5);
  plane_B_side_shape.bezierCurveTo(B, 2.5, B - 5, 1.125, B, 0);
  plane_B_side_shape.lineTo(B, 0);

  var points_B = [];

  points_B.push(new THREE.Vector3(2.5, 0));

  for (let i = 0; i <= (B - 7.5) / 2; i += 2.5) {
    points_B.push(new THREE.Vector3(i * 2 + 5, 2.5));
    points_B.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_B = new THREE.CatmullRomCurve3(points_B);

  const points_B_curve = curve_B.getPoints(1000);

  plane_B_side_shape.holes.push(new THREE.Path().setFromPoints(points_B_curve));

  const plane_B_side = new THREE.ExtrudeGeometry(
    plane_B_side_shape,
    extrudeSettings
  );

  /* #endregion */
  /* #region  บน A */

  const plane_A_Top_Bottom_shape = new THREE.Shape();

  plane_A_Top_Bottom_shape.moveTo(0, 0);
  plane_A_Top_Bottom_shape.bezierCurveTo(0, 0, 5, 1.125, 0, 2.5);
  plane_A_Top_Bottom_shape.lineTo(0, 2.5);
  plane_A_Top_Bottom_shape.lineTo(A, 2.5);
  plane_A_Top_Bottom_shape.bezierCurveTo(A, 2.5, A - 5, 1.125, A, 0);
  plane_A_Top_Bottom_shape.lineTo(A, 0);

  plane_A_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_Curve)
  );

  const extrudeSettings_AB_Top_bottom = {
    amount: 25,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const plane_A_Top_bottom = new THREE.ExtrudeGeometry(
    plane_A_Top_Bottom_shape,
    extrudeSettings_AB_Top_bottom
  );

  /* #endregion */
  /* #region  บน B */

  const plane_B_Top_Bottom_shape = new THREE.Shape();

  plane_B_Top_Bottom_shape.moveTo(0, 0);
  plane_B_Top_Bottom_shape.bezierCurveTo(0, 0, 5, 1.125, 0, 2.5);
  plane_B_Top_Bottom_shape.lineTo(0, 2.5);
  plane_B_Top_Bottom_shape.lineTo(B, 2.5);
  plane_B_Top_Bottom_shape.bezierCurveTo(B, 2.5, B - 5, 1.125, B, 0);
  plane_B_Top_Bottom_shape.lineTo(B, 0);

  plane_B_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_curve)
  );

  const plane_B_Top_bottom = new THREE.ExtrudeGeometry(
    plane_B_Top_Bottom_shape,
    extrudeSettings_AB_Top_bottom
  );

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  /* const glue_Lid_shape = new THREE.Shape();
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.lineTo(Math.floor(C - C * g_Slope), Math.round(g_Width * A));
  glue_Lid_shape.lineTo(Math.round(C * g_Slope), Math.round(g_Width * A));

  const glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว */

  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.bezierCurveTo(0, 0, 5, 1.125, 0, 2.5);
  glue_Lid_shape.lineTo(0, 2.5);
  glue_Lid_shape.lineTo(15, 2.5);
  glue_Lid_shape.bezierCurveTo(15, 2.5, 15 - 5, 1.125, 15, 0);
  glue_Lid_shape.lineTo(15, 0);

  var points_G = [];

  points_G.push(new THREE.Vector3(2.5, 0));

  for (let i = 0; i <= (15 - 7.5) / 2; i += 2.5) {
    points_G.push(new THREE.Vector3(i * 2 + 5, 2.5));
    points_G.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_G = new THREE.CatmullRomCurve3(points_G);

  const points_G_curve = curve_G.getPoints(1000);

  glue_Lid_shape.holes.push(new THREE.Path().setFromPoints(points_G_curve));

  const extrudeSettings_g = {
    amount: C,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const glue_Lid = new THREE.ExtrudeGeometry(glue_Lid_shape, extrudeSettings_g);

  /* #endregion */
  /* #region  ทดลองวาดเส้น texture */

  /* #region  Under-Line */

  // var points_u = [];

  // points_u.push(new THREE.Vector3(0, 0, 0));

  // for (let i = 0; i <= (A - 2.5) / 2; i += 2.5) {
  //   points_u.push(new THREE.Vector3(i * 2 + 2.5, 0, -5)),
  //     points_u.push(new THREE.Vector3(i * 2 + 5, 0, 0));
  // }

  // const curve_u = new THREE.CatmullRomCurve3(points_u);

  // const points_curve_u = curve_u.getPoints(500);
  // const lineGeometry_u = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(points_curve_u),
  //   material
  // );
  // lineGeometry_u.position.set(0, C, 2.5);
  // scene.add(lineGeometry_u);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Mesh - แกนหมุน */

  /* #region  Non_Edges */

  /* #region  side_A_front */

  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.y = 1;
  rotateObject(side_A_front, -90);

  side_A_Top_front = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Top_front.position.y = 1;
  side_A_Top_front.position.z = 2.5;
  rotateObject(side_A_Top_front, -90);

  side_A_Bottom_front = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Bottom_front.position.y = -1;
  side_A_Bottom_front.position.z = -2.5;
  rotateObject(side_A_Bottom_front, 90);

  /* #endregion */
  /* #region  side_A_back */

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.set(-A, 1, 0);
  rotateObject(side_A_back, -90);

  side_A_Top_back = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Top_back.position.x = -A;
  rotateObject(side_A_Top_back, -90);

  side_A_Bottom_back = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Bottom_back.position.set(-A, -1, -2.5);
  rotateObject(side_A_Bottom_back, 90);

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  rotateObject(side_Glue_lid, -90, 0, 180);
  side_Glue_lid.position.z = -2.5;

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B;
  rotateObject(side_B_left, -90);

  side_B_Top_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Top_left.position.x = -B;
  rotateObject(side_B_Top_left, -90);

  side_B_Bottom_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_left.position.set(-B, 0, -2.5);
  rotateObject(side_B_Bottom_left, 90);

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.rotation.x = -Math.PI / 2;

  side_B_Top_right = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Top_right.rotation.x = -Math.PI / 2;

  side_B_Bottom_right = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_right.position.z = -2.5;
  side_B_Bottom_right.rotation.x = Math.PI / 2;

  /* #endregion */

  /* #endregion */
  /* #region  Edges */

  /* #region  side_A_Front_edges */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_Front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineDashedMaterial({ color: "#D5B59C" })
  );
  side_A_Front_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_A_Top_bottom);
  side_A_Top_Front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#D5B59C" })
  );
  side_A_Top_Front_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_A_Top_bottom);
  side_A_Bottom_Front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#D5B59C" })
  );
  side_A_Bottom_Front_edges.position.z = -2.5;
  side_A_Bottom_Front_edges.rotation.x = Math.PI / 2;

  /* #endregion */
  /* #region  side_A_Back_edges */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_Back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Back_edges.position.x = -A;
  side_A_Back_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_A_Top_bottom);
  side_A_Top_Back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Top_Back_edges.position.x = -A;
  side_A_Top_Back_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_A_Top_bottom);
  side_A_Bottom_Back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_Bottom_Back_edges.position.set(-A, 0, -2.5);
  side_A_Bottom_Back_edges.rotation.x = Math.PI / 2;

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_Lid_edges.rotation.set(-Math.PI / 2, 0, Math.PI);
  side_Glue_Lid_edges.position.z = -2.5;

  /* #endregion */
  /* #region  side_B_Left_edges */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_Left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Left_edges.position.x = -B;
  side_B_Left_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_B_Top_bottom);
  side_B_Top_Left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Top_Left_edges.position.x = -B;
  side_B_Top_Left_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_B_Top_bottom);
  side_B_Bottom_Left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Bottom_Left_edges.position.set(-B, 0, -2.5);
  side_B_Bottom_Left_edges.rotation.x = Math.PI / 2;

  /* #endregion */
  /* #region  side_B_Right_edges */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_Right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Right_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_B_Top_bottom);
  side_B_Top_Right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Top_Right_edges.rotation.x = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(plane_B_Top_bottom);
  side_B_Bottom_Right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_Bottom_Right_edges.position.z = -2.5;
  side_B_Bottom_Right_edges.rotation.x = Math.PI / 2;

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Object3D - จุดหมุน */

  /* #region  Non-Edges */

  /* #region  pivot_A_front */

  pivot_A_Top_front = new THREE.Object3D();
  pivot_A_Top_front.add(side_A_Top_front);
  pivot_A_Top_front.position.y = C;

  pivot_A_Bottom_front = new THREE.Object3D();
  pivot_A_Bottom_front.add(side_A_Bottom_front);

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_A_Top_front, pivot_A_Bottom_front);
  scene.add(pivot_A_front);

  /* #endregion */
  /* #region  pivot_A_back */

  pivot_A_Top_back = new THREE.Object3D();
  pivot_A_Top_back.add(side_A_Top_back);
  pivot_A_Top_back.position.y = C;

  pivot_A_Bottom_back = new THREE.Object3D();
  pivot_A_Bottom_back.add(side_A_Bottom_back);

  pivot_Glue_lid = new THREE.Object3D();
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

  pivot_Top_B_left = new THREE.Object3D();
  pivot_Top_B_left.add(side_B_Top_left);
  pivot_Top_B_left.position.y = C;

  pivot_Bottom_B_left = new THREE.Object3D();
  pivot_Bottom_B_left.add(side_B_Bottom_left);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    pivot_Top_B_left,
    pivot_Bottom_B_left,
    pivot_A_back
  );
  scene.add(pivot_B_left);

  /* #endregion */
  /* #region  pivot_B_right */

  pivot_Top_B_right = new THREE.Object3D();
  pivot_Top_B_right.add(side_B_Top_right);
  pivot_Top_B_right.position.y = C;

  pivot_Bottom_B_right = new THREE.Object3D();
  pivot_Bottom_B_right.add(side_B_Bottom_right);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(side_B_right, pivot_Top_B_right, pivot_Bottom_B_right);

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(
    // pivot_A_front,
    // pivot_B_left,
    pivot_B_right
  );
  // scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
  /* #region  Edges */

  /* #region  pivot_A_Front_edges */

  pivot_A_Top_Front_edges = new THREE.Object3D();
  pivot_A_Top_Front_edges.add(side_A_Top_Front_edges);
  pivot_A_Top_Front_edges.position.y = C;

  pivot_A_Bottom_Front_edges = new THREE.Object3D();
  pivot_A_Bottom_Front_edges.add(side_A_Bottom_Front_edges);

  pivot_A_Front_edges = new THREE.Object3D();
  pivot_A_Front_edges.add(
    side_A_Front_edges,
    pivot_A_Top_Front_edges,
    pivot_A_Bottom_Front_edges
  );

  /* #endregion */
  /* #region  pivot_A_Back_edges */

  pivot_A_Top_Back_edges = new THREE.Object3D();
  pivot_A_Top_Back_edges.add(side_A_Top_Back_edges);
  pivot_A_Top_Back_edges.position.y = C;

  pivot_A_Bottom_Back_edges = new THREE.Object3D();
  pivot_A_Bottom_Back_edges.add(side_A_Bottom_Back_edges);

  pivot_Glue_Lid_edges = new THREE.Object3D();
  pivot_Glue_Lid_edges.add(side_Glue_Lid_edges);
  pivot_Glue_Lid_edges.position.x = -A;

  pivot_A_Back_edges = new THREE.Object3D();
  pivot_A_Back_edges.add(
    side_A_Back_edges,
    pivot_A_Top_Back_edges,
    pivot_A_Bottom_Back_edges,
    pivot_Glue_Lid_edges
  );
  pivot_A_Back_edges.position.x = -B;

  /* #endregion */
  /* #region  pivot_B_Left_edges */

  pivot_Top_B_Left_edges = new THREE.Object3D();
  pivot_Top_B_Left_edges.add(side_B_Top_Left_edges);
  pivot_Top_B_Left_edges.position.y = C;

  pivot_Bottom_B_Left_edges = new THREE.Object3D();
  pivot_Bottom_B_Left_edges.add(side_B_Bottom_Left_edges);

  pivot_B_Left_edges = new THREE.Object3D();
  pivot_B_Left_edges.add(
    side_B_Left_edges,
    pivot_Top_B_Left_edges,
    pivot_Bottom_B_Left_edges,
    pivot_A_Back_edges
  );

  /* #endregion */
  /* #region  pivot_B_Right_edges */

  pivot_Top_B_Right_edges = new THREE.Object3D();
  pivot_Top_B_Right_edges.add(side_B_Top_Right_edges);
  pivot_Top_B_Right_edges.position.y = C;

  pivot_Bottom_B_Right_edges = new THREE.Object3D();
  pivot_Bottom_B_Right_edges.add(side_B_Bottom_Right_edges);

  pivot_B_Right_edges = new THREE.Object3D();
  pivot_B_Right_edges.position.x = A;
  pivot_B_Right_edges.add(
    side_B_Right_edges,
    pivot_Top_B_Right_edges,
    pivot_Bottom_B_Right_edges
  );

  /* #endregion */
  /* #region  pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_A_Front_edges,
    pivot_B_Left_edges,
    pivot_B_Right_edges
  );
  // scene.add(pivot_All_edges);

  /* #endregion */

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
