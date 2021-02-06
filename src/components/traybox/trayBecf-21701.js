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
var C = 100; // สูง
var Cx = C; // ตัวคุณ C
var O = 0.5; // ความโปร่งแสง

var tween;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

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

  texture["kraft"] = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_B_Top_bottom = {
    depth: B,
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

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.position.set(200, 200, 200);
  scene.add(dirLight);

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  Model */

  /* #region  หน้า A */

  /* #region  plane */

  var v1 = new THREE.Vector3(0, 0);
  var v2 = new THREE.Vector3(0, C);
  var v3 = new THREE.Vector3(A, C);
  var v4 = new THREE.Vector3(A, 0);
  var v5 = new THREE.Vector3(0, 0);

  const geom = new THREE.Geometry();

  geom.vertices.push(v1);
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  geom.vertices.push(v4);
  geom.vertices.push(v5);

  geom.faces.push(new THREE.Face3(0, 1, 2));
  geom.faces.push(new THREE.Face3(3, 0, 2));

  geom.faceVertexUvs[0].push([
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(0.7, 1),
    new THREE.Vector2(1, 0),
  ]);
  geom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(1, 0),
  ]);

  /* #endregion */

  /* #region  corrugated */

  const plane_A_Side_shape = new THREE.Shape();

  var points_A = [];

  points_A.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 2.5) / 2; i += 2.5) {
    points_A.push(new THREE.Vector3(i * 2 + 2.5, C * (2.5 / Cx)));
    points_A.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A = new THREE.CatmullRomCurve3(points_A);

  const points_Curve = curve_A.getPoints(1000);

  plane_A_Side_shape.holes.push(new THREE.Path().setFromPoints(points_Curve));

  const plane_A_side = new THREE.ExtrudeGeometry(
    plane_A_Side_shape,
    extrudeSettings
  );

  /* #endregion */
  /* #region   */

  const object = new THREE.Mesh(geom, texture["kraft"]);
  rotateObject(object, 90);
  object.position.y = -0.1;

  const object2 = new THREE.Mesh(geom, texture["kraft"]);
  rotateObject(object2, 90);
  object2.position.y = 2.5;

  /* #endregion */
  /* #endregion */
  /* #region  หน้า B */

  /* #region  plane_B_side */

  const plane_B_Side_shape = new THREE.Shape();

  plane_B_Side_shape.moveTo(0, 0);
  plane_B_Side_shape.bezierCurveTo(
    0,
    0,
    (B * (5 / Bx)) | 0,
    C * (1.125 / Cx),
    0,
    C * (2.5 / Cx)
  );
  plane_B_Side_shape.lineTo(0, C * (2.5 / Cx));
  plane_B_Side_shape.lineTo(B, C * (2.5 / Cx));
  plane_B_Side_shape.bezierCurveTo(
    B,
    C * (2.5 / Cx),
    (B * (45 / Bx)) | 0,
    C * (1.125 / Cx),
    B,
    0
  );
  plane_B_Side_shape.lineTo(B, 0);

  var points_B = [];

  points_B.push(new THREE.Vector3(B * (2.5 / Bx), 0));

  for (let i = 0; i <= B * (21.25 / Bx); i += 2.5) {
    points_B.push(new THREE.Vector3(i * 2 + 5, C * (2.5 / Cx)));
    points_B.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_B = new THREE.CatmullRomCurve3(points_B);

  const points_B_curve = curve_B.getPoints(1000);

  plane_B_Side_shape.holes.push(new THREE.Path().setFromPoints(points_B_curve));

  const plane_B_side = new THREE.ExtrudeGeometry(
    plane_B_Side_shape,
    extrudeSettings
  );

  /* #endregion */
  /* #region  plane_B_Side_lid */

  const plane_B_Side_Lid_shape = new THREE.Shape();

  plane_B_Side_Lid_shape.moveTo(0, 0);
  plane_B_Side_Lid_shape.bezierCurveTo(
    0,
    0,
    (B * (5 / Bx)) | 0,
    C * (1.125 / Cx),
    0,
    C * (2.5 / Cx)
  );
  plane_B_Side_Lid_shape.lineTo(0, C * (2.5 / Cx));
  plane_B_Side_Lid_shape.lineTo(B, C * (2.5 / Cx));
  plane_B_Side_Lid_shape.bezierCurveTo(
    B,
    C * (2.5 / Cx),
    (B * (45 / Bx)) | 0,
    C * (1.125 / Cx),
    B,
    0
  );
  plane_B_Side_Lid_shape.lineTo(B, 0);

  var points_B_lid = [];

  points_B_lid.push(new THREE.Vector3(B * (2.5 / Bx), 0));

  for (let i = 0; i <= B * (21.25 / Bx); i += 2.5) {
    points_B_lid.push(new THREE.Vector3(i * 2 + 5, C * (2.5 / Cx)));
    points_B_lid.push(new THREE.Vector3(i * 2 + 7.5, 0));
  }

  const curve_B_lid = new THREE.CatmullRomCurve3(points_B_lid);

  const points_B_Curve_lid = curve_B_lid.getPoints(1000);

  plane_B_Side_Lid_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Curve_lid)
  );

  const plane_B_Side_lid = new THREE.ExtrudeGeometry(
    plane_B_Side_Lid_shape,
    extrudeSettings_B_Top_bottom
  );

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Mesh - แกนหมุน */

  /* #region  Non_Edges */

  /* #region  side_A_back */
  const side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.add(object, object2);

  // rotateObject(side_A_back, -90);

  scene.add(side_A_back);

  /* #endregion */
  /* #region  side_A_top */

  const side_A_top = new THREE.Mesh(plane_A_side, material);
  side_A_top.position.y = -2.5;

  /* #endregion */
  /* #region  side_B_left */

  const side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.z = -2.5;

  /* #endregion */
  /* #region  side_B_right */

  const side_B_right = new THREE.Mesh(plane_B_side, material);

  /* #endregion */
  /* #region  side_B_bottom */

  const side_B_bottom = new THREE.Mesh(plane_B_side, material);

  const side_B_Bottom_left = new THREE.Mesh(plane_B_Side_lid, material);
  side_B_Bottom_left.position.set(0, -2.5, -1);

  const side_B_Bottom_right = new THREE.Mesh(plane_B_Side_lid, material);
  side_B_Bottom_right.position.set(0, 0, -1);

  /* #endregion */
  /* #region  side_B_top */

  const side_B_top = new THREE.Mesh(plane_B_side, material);
  side_B_top.position.y = -2.5;

  const side_B_Top_left = new THREE.Mesh(plane_B_Side_lid, material);
  side_B_Top_left.position.z = -1;

  const side_B_Top_right = new THREE.Mesh(plane_B_Side_lid, material);
  side_B_Top_right.position.set(0, -2.5, -1);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Object3D - จุดหมุน */

  /* #region  Non-Edges */

  /* #region  pivot_A_top */

  const pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top);
  pivot_A_top.position.x = B;

  // rotateObject(pivot_A_top, 0, 0, 90);

  /* #endregion */
  /* #region  pivot_B_top */

  const pivot_B_Top_left = new THREE.Object3D();
  pivot_B_Top_left.add(side_B_Top_left);
  rotateObject(pivot_B_Top_left, 180, 0);

  // rotateObject(pivot_B_Top_left, 90);

  const pivot_B_Top_right = new THREE.Object3D();
  pivot_B_Top_right.add(side_B_Top_right);
  pivot_B_Top_right.position.z = A;

  // rotateObject(pivot_B_Top_right, -90);

  const pivot_B_top = new THREE.Object3D();
  pivot_B_top.add(side_B_top, pivot_B_Top_left, pivot_B_Top_right, pivot_A_top);
  pivot_B_top.position.y = C;
  rotateObject(pivot_B_top, 90, 90);

  // rotateObject(pivot_B_top, 0, 0, 90);

  /* #endregion */
  /* #region  pivot_B_bottom */

  const pivot_B_Bottom_left = new THREE.Object3D();
  pivot_B_Bottom_left.add(side_B_Bottom_left);
  rotateObject(pivot_B_Bottom_left, -180);

  // rotateObject(pivot_B_Bottom_left, -90, 0, 0);

  const pivot_B_Bottom_right = new THREE.Object3D();
  pivot_B_Bottom_right.add(side_B_Bottom_right);
  pivot_B_Bottom_right.position.z = A;

  // rotateObject(pivot_B_Bottom_right, 90, 0, 0);

  const pivot_B_bottom = new THREE.Object3D();
  pivot_B_bottom.add(side_B_bottom, pivot_B_Bottom_left, pivot_B_Bottom_right);
  rotateObject(pivot_B_bottom, -90, 90);

  // rotateObject(pivot_B_bottom, 0, 0, -90);

  /* #endregion */
  /* #region  pivot_B_left */

  const pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left);
  rotateObject(side_B_left, -90, 0, 180);

  // rotateObject(pivot_B_left, 0, 90, 0);

  /* #endregion */
  /* #region  pivot_B_right */

  const pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right);
  pivot_B_right.position.x = A;
  rotateObject(side_B_right, -90);

  // rotateObject(pivot_B_right, 0, -90, 0);

  /* #endregion */
  /* #region  pivot_A_back */

  const pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    // side_A_back,
    pivot_B_top,
    pivot_B_bottom,
    pivot_B_left,
    pivot_B_right
  );
  rotateObject(side_A_back, -90);

  // rotateObject(pivot_A_back, -90);

  /* #endregion */
  /* #region  pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);
  // scene.add(pivot_All);

  /* #endregion */

  /* #endregion */

  /* #endregion */

  /* #endregion */

  /* #region  curve */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  updateSize,
};
