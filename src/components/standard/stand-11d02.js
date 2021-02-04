/* #region  ประกาศตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 100; // กว้าง
var Ax = A; // ตัวคุณ A
var B = 50; // ลึก
var Bx = B; // ตัวคูณ B
var C = 150; // สูง
var Cx = C; // ตัวคุณ C
var O = 0.5; // ความโปร่งแสง

var tween;

var side_A_front;
var side_A_Top_front;
var side_A_Bottom_front;
var side_A_back;
var side_A_Top_back;
var side_A_Bottom_back;
var side_Glue_lid;
var side_B_left;
var side_B_Top_left;
var side_B_Bottom_left;
var side_B_right;
var side_B_Top_right;
var side_B_Bottom_right;

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

var side_A_Front_line;
var side_A_Back_line;
var side_B_Left_upperline;
var side_B_Right_upperline;
var side_B_Left_underline;
var side_B_Right_underline;
var line_All;

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

  /* #region  pivot_A_Top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_A_Top_front.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.position, {
    duration: 8,
    ease: "power4.in",
    z: (pivot_A_Top_front.z = -1),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Bottom_front.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  /* #region  pivot_A_Top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_A_Top_back.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.position, {
    duration: 8,
    ease: "power4.in",
    z: (pivot_A_Top_back.z = -1),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Bottom_back.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_Top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_Top_B_left.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.position, {
    duration: 4,
    ease: "power4.in",
    z: (pivot_Top_B_left.z = -1.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_left.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_B_left.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  /* #region  pivot_Top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_Top_B_right.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.position, {
    duration: 4,
    ease: "power4.in",
    z: (pivot_Top_B_right.z = -1.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_right.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_Bottom_B_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_right.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  removeObjects */
  scene.remove(line_All);
  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */

  /* #region  pivot_A_Top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_front.position, {
    duration: 2,
    ease: "power4.in",
    z: (pivot_A_Top_front.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_front.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_A_Bottom_front.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  /* #region  pivot_A_Top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_back.position, {
    duration: 2,
    ease: "power4.in",
    z: (pivot_A_Top_back.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_Bottom_back.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_A_Bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 8,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 8,
    ease: "power4.in",
    y: (pivot_A_back.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_Top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_Top_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_B_left.position, {
    duration: 4,
    ease: "power4.in",
    z: (pivot_Top_B_left.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_left.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_Bottom_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 8,
    ease: "power4.in",
    y: (pivot_B_left.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  /* #region  pivot_Top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_Top_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_B_right.position, {
    duration: 4,
    ease: "power4.in",
    z: (pivot_Top_B_right.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_B_right.rotation, {
    duration: 8,
    ease: "power4.in",
    x: (pivot_Bottom_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 8,
    ease: "power4.in",
    y: (pivot_B_right.y = 0),
  });

  /* #endregion */
  /* #region  addObjects */
  setTimeout(() => {
    scene.add(line_All);
  }, 8000);
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
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
    map: texture,
  });

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_A_Top_bottom = {
    depth: B < 100 ? (B * (23 / Bx)) | 0 : Math.round(B * (24.5 / Bx)),
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_B_Top_bottom = {
    depth: A * (23 / Ax),
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_g = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

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
  plane_A_Side_shape.bezierCurveTo(
    0,
    0,
    (A * (5 / Ax)) | 0,
    C * (1.125 / Cx),
    0,
    C * (2.5 / Cx)
  );
  plane_A_Side_shape.lineTo(0, C * (2.5 / Cx));
  plane_A_Side_shape.lineTo(A, C * (2.5 / Cx));
  plane_A_Side_shape.bezierCurveTo(
    A,
    C * (2.5 / Cx),
    (A * (95 / Ax)) | 0,
    C * (1.125 / Cx),
    A,
    0
  );
  plane_A_Side_shape.lineTo(A, 0);

  var points_A = [];

  points_A.push(new THREE.Vector3(A * (2.5 / Ax), 0));

  for (let i = 0; i <= A * (46.25 / Ax); i += 2.5) {
    points_A.push(new THREE.Vector3(i * 2 + 5, C * (2.5 / Cx)));
    points_A.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_A = new THREE.CatmullRomCurve3(points_A);

  const points_Curve = curve_A.getPoints(1000);

  plane_A_Side_shape.holes.push(new THREE.Path().setFromPoints(points_Curve));

  const plane_A_side = new THREE.ExtrudeGeometry(
    plane_A_Side_shape,
    extrudeSettings
  );

  /* #endregion */
  /* #region  หน้า B */

  const plane_B_side_shape = new THREE.Shape();

  plane_B_side_shape.moveTo(0, 0);
  plane_B_side_shape.bezierCurveTo(
    0,
    0,
    (B * (5 / Bx)) | 0,
    C * (1.125 / Cx),
    0,
    C * (2.5 / Cx)
  );
  plane_B_side_shape.lineTo(0, C * (2.5 / Cx));
  plane_B_side_shape.lineTo(B, C * (2.5 / Cx));
  plane_B_side_shape.bezierCurveTo(
    B,
    C * (2.5 / Cx),
    (B * (45 / Bx)) | 0,
    C * (1.125 / Cx),
    B,
    0
  );
  plane_B_side_shape.lineTo(B, 0);

  var points_B = [];

  points_B.push(new THREE.Vector3(B * (2.5 / Bx), 0));

  for (let i = 0; i <= B * (21.25 / Bx); i += 2.5) {
    points_B.push(new THREE.Vector3(i * 2 + 5, C * (2.5 / Cx)));
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
  /* #region  บน-ล่าง A */

  const plane_A_Top_Bottom_shape = new THREE.Shape();

  plane_A_Top_Bottom_shape.moveTo((A * (1 / Ax)) | 0, 0);
  plane_A_Top_Bottom_shape.bezierCurveTo(
    (A * (1 / Ax)) | 0,
    0,
    (A * (6 / Ax)) | 0,
    C * (1.125 / Cx),
    (A * (1 / Ax)) | 0,
    C * (2.5 / Cx)
  );
  plane_A_Top_Bottom_shape.lineTo((A * (1 / Ax)) | 0, C * (2.5 / Cx));
  plane_A_Top_Bottom_shape.lineTo((A * (99 / Ax)) | 0, C * (2.5 / Cx));
  plane_A_Top_Bottom_shape.bezierCurveTo(
    (A * (99 / Ax)) | 0,
    C * (2.5 / Cx),
    (A * (94 / Ax)) | 0,
    C * (1.125 / Cx),
    (A * (99 / Ax)) | 0,
    0
  );
  plane_A_Top_Bottom_shape.lineTo((A * (99 / Ax)) | 0, 0);

  plane_A_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_Curve)
  );

  const plane_A_Top_bottom = new THREE.ExtrudeGeometry(
    plane_A_Top_Bottom_shape,
    extrudeSettings_A_Top_bottom
  );

  /* #endregion */
  /* #region  บน-ล่าง B */

  const plane_B_Top_Bottom_shape = new THREE.Shape();

  plane_B_Top_Bottom_shape.moveTo((B * (1 / Bx)) | 0, 0);
  plane_B_Top_Bottom_shape.bezierCurveTo(
    (B * (1 / Bx)) | 0,
    0,
    (B * (6 / Bx)) | 0,
    C * (1.125 / Cx),
    (B * (1 / Bx)) | 0,
    C * (2.5 / Cx)
  );
  plane_B_Top_Bottom_shape.lineTo((B * (1 / Bx)) | 0, C * (2.5 / Cx));
  plane_B_Top_Bottom_shape.lineTo((B * (49 / Bx)) | 0, C * (2.5 / Cx));
  plane_B_Top_Bottom_shape.bezierCurveTo(
    (B * (49 / Bx)) | 0,
    C * (2.5 / Cx),
    (B * (44 / Bx)) | 0,
    C * (1.125 / Cx),
    (B * (49 / Bx)) | 0,
    0
  );
  plane_B_Top_Bottom_shape.lineTo((B * (49 / Bx)) | 0, 0);

  plane_B_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_curve)
  );

  const plane_B_Top_bottom = new THREE.ExtrudeGeometry(
    plane_B_Top_Bottom_shape,
    extrudeSettings_B_Top_bottom
  );

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  // var G = [13, 4]; //  ส่วนประกาว
  // var g_Width = G[0] / A; //  ควมกว้างส่วนประกาว ค่า Defualt
  // var g_Slope = G[1] / C; //  ควมเฉียงส่วนประกาว ค่า Defualt

  // const glue_Lid_shape = new THREE.Shape();
  // glue_Lid_shape.moveTo(0, 0);
  // glue_Lid_shape.lineTo(C, 0);
  // glue_Lid_shape.lineTo(Math.floor(C - C * g_Slope), Math.round(g_Width * A));
  // glue_Lid_shape.lineTo(Math.round(C * g_Slope), Math.round(g_Width * A));

  // const glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.bezierCurveTo(0, 0, 5, C * (1.125 / Cx), 0, C * (2.5 / Cx));
  glue_Lid_shape.lineTo(0, C * (2.5 / Cx));
  glue_Lid_shape.lineTo(15, C * (2.5 / Cx));
  glue_Lid_shape.bezierCurveTo(
    15,
    C * (2.5 / Cx),
    15 - 5,
    C * (1.125 / Cx),
    15,
    0
  );
  glue_Lid_shape.lineTo(15, 0);

  var points_G = [];

  points_G.push(new THREE.Vector3(2.5, 0));

  for (let i = 0; i <= (15 - 7.5) / 2; i += 2.5) {
    points_G.push(new THREE.Vector3(i * 2 + 5, C * (2.5 / Cx)));
    points_G.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_G = new THREE.CatmullRomCurve3(points_G);

  const points_G_curve = curve_G.getPoints(1000);

  glue_Lid_shape.holes.push(new THREE.Path().setFromPoints(points_G_curve));

  const glue_Lid = new THREE.ExtrudeGeometry(glue_Lid_shape, extrudeSettings_g);

  /* #endregion */
  /* #region  ทดลองวาดเส้นโค้ง texture */

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
  rotateObject(side_A_Top_front, -90);

  side_A_Bottom_front = new THREE.Mesh(plane_A_Top_bottom, material);
  side_A_Bottom_front.position.set(0, -1, -2.5);
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
  side_Glue_lid.position.set(0, 1, -2.5);
  rotateObject(side_Glue_lid, -90, 0, 180);

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-B, 1, 0);
  rotateObject(side_B_left, -90);

  side_B_Top_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Top_left.position.x = -B;
  rotateObject(side_B_Top_left, -90);

  side_B_Bottom_left = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_left.position.set(-B, -1, -2.5);
  rotateObject(side_B_Bottom_left, 90);

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.y = 1;
  rotateObject(side_B_right, -90);

  side_B_Top_right = new THREE.Mesh(plane_B_Top_bottom, material);
  rotateObject(side_B_Top_right, -90);

  side_B_Bottom_right = new THREE.Mesh(plane_B_Top_bottom, material);
  side_B_Bottom_right.position.set(0, -1, -2.5);
  rotateObject(side_B_Bottom_right, 90);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Object3D - จุดหมุน */

  /* #region  Non-Edges */

  /* #region  pivot_A_front */

  pivot_A_Top_front = new THREE.Object3D();
  pivot_A_Top_front.add(side_A_Top_front);
  pivot_A_Top_front.position.y = C + 2;

  pivot_A_Bottom_front = new THREE.Object3D();
  pivot_A_Bottom_front.add(side_A_Bottom_front);

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_A_Top_front, pivot_A_Bottom_front);

  /* #endregion */
  /* #region  pivot_A_back */

  pivot_A_Top_back = new THREE.Object3D();
  pivot_A_Top_back.add(side_A_Top_back);
  pivot_A_Top_back.position.y = C + 2;

  pivot_A_Bottom_back = new THREE.Object3D();
  pivot_A_Bottom_back.add(side_A_Bottom_back);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A;
  scene.add(pivot_Glue_lid);

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
  pivot_Top_B_left.position.y = C + 2;

  pivot_Bottom_B_left = new THREE.Object3D();
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

  pivot_Top_B_right = new THREE.Object3D();
  pivot_Top_B_right.add(side_B_Top_right);
  pivot_Top_B_right.position.y = C + 2;

  pivot_Bottom_B_right = new THREE.Object3D();
  pivot_Bottom_B_right.add(side_B_Bottom_right);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(side_B_right, pivot_Top_B_right, pivot_Bottom_B_right);

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Dielines - เส้นปะจุดพับ */

  const side_A_line = [];
  const side_B_UpperUnder_line = [];
  const side_B_Upper_R_line = [];

  side_A_line.push(new THREE.Vector2(0, 0));
  side_A_line.push(new THREE.Vector2(0, C));
  side_A_line.push(new THREE.Vector2(A, C));
  side_A_line.push(new THREE.Vector2(A, 0));
  side_A_line.push(new THREE.Vector2(0, 0));

  side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
  side_B_UpperUnder_line.push(new THREE.Vector2(B, 0));

  side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, -C));

  /* #region  side_A_line */

  side_A_Front_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Front_line.computeLineDistances();

  side_A_Back_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Back_line.computeLineDistances();
  side_A_Back_line.position.x = -A - B;

  /* #endregion */
  /* #region  side_B_line */

  /* #region  side_B_upperline */

  side_B_Left_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_upperline.computeLineDistances();
  side_B_Left_upperline.position.set(-B, C, 0);

  side_B_Right_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_upperline.computeLineDistances();
  side_B_Right_upperline.position.set(A, C, 0);

  /* #endregion */
  /* #region  side_B_underline */

  side_B_Left_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_underline.computeLineDistances();
  side_B_Left_underline.position.x = -B;

  side_B_Right_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: "#45a033",
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_underline.computeLineDistances();
  side_B_Right_underline.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  line_All */

  line_All = new THREE.Line();
  line_All.add(
    side_A_Front_line,
    side_A_Back_line,
    side_B_Left_upperline,
    side_B_Right_upperline,
    side_B_Left_underline,
    side_B_Right_underline
  );
  scene.add(line_All);

  /* #endregion */

  /* #endregion */

  //texture

  // const testNewbox = [];

  // testNewbox.push(new THREE.Vector3(0, 0, 0));
  // testNewbox.push(new THREE.Vector3(0, 0, 2.5));
  // testNewbox.push(new THREE.Vector3(100, 0, 2.5));
  // testNewbox.push(new THREE.Vector3(100, 0, 0));
  // testNewbox.push(new THREE.Vector3(100, 150, 0));
  // testNewbox.push(new THREE.Vector3(100, 150, 2.5));
  // testNewbox.push(new THREE.Vector3(0, 150, 0));

  // const geometry_new = new THREE.BufferGeometry().setFromPoints(testNewbox);

  // const testNewbox_shape = new THREE.Mesh(geometry_new, material);
  // testNewbox_shape.position.z = 100;
  // scene.add(testNewbox_shape);
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
