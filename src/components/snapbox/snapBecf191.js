/* #region  ประกาศตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

let controls, renderer, scene, camera;

let A = 100; //  กว้าง
let B = 50; //  ลึก
let C = 150; //  สูง
let O = 1; //  ความโปร่งแสง
let P = 15; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let G = 15; //  ประกาว
let F = 32; //  ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
let g_slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt
let w = (window.innerWidth * 75) / 100;
let h = window.innerHeight;

let edges;
let tween;

let side_A_front;
let side_A_back;
let side_glue_Lid;
let side_Bottom;
let side_lid_Bottom;
let side_B_left;
let side_lid_B_left;
let side_B_left_d;
let side_B_right;
let side_lid_B_right;
let side_B_right_d;
let side_lid_Cover;
let side_Top;
let side_Top_lid;

let side_A_front_edges;
let side_A_back_edges;
let side_glue_Lid_edges;
let side_Bottom_edges;
let side_lid_Bottom_edges;
let side_B_left_edges;
let side_lid_B_left_edges;
let side_B_left_d_edges;
let side_B_right_edges;
let side_lid_B_right_edges;
let side_B_right_d_edges;
let side_lid_Cover_edges;
let side_Top_edges;
let side_Top_lid_edges;

let pivot_A_front;
let pivot_Top_lid;
let pivot_Top;
let pivot_glue_Lid;
let pivot_A_back;
let pivot_Bottom;
let pivot_Bottom_lid;
let pivot_Group_bottom;
let pivot_group_A_back;
let pivot_lid_B_left;
let pivot_lid_B_left_d;
let pivot_B_left;
let pivot_lid_B_right;
let pivot_lid_B_right_d;
let pivot_group_B_right_d;
let pivot_B_right;
let pivot_All;

let pivot_A_front_edges;
let pivot_Top_lid_edges;
let pivot_Top_edges;
let pivot_glue_Lid_edges;
let pivot_A_back_edges;
let pivot_Bottom_edges;
let pivot_Bottom_lid_edges;
let pivot_Group_bottom_edges;
let pivot_group_A_back_edges;
let pivot_lid_B_left_edges;
let pivot_lid_B_left_d_edges;
let pivot_B_left_edges;
let pivot_lid_B_right_edges;
let pivot_lid_B_right_d_edges;
let pivot_group_B_right_d_edges;
let pivot_B_right_edges;
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
  /* #region  แกนหมุน */

  /* #region  pivot_Group_bottom */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left.x = -(Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d.x = (Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  /* #region  pivot_Top */

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_glue_Lid.y = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right.x = -(Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d.x = (Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
  /* #region  แกนหมุน - เส้น */

  /* #region  pivot_Group_bottom */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom_edges.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_edges.x = -(Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d_edges.x = (Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = -Math.PI / 2),
  });

  /* #region  pivot_Top */

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_glue_Lid_edges.y = -Math.PI / 2),
  });
  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back_edges.y = -Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_edges.x = -(Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d_edges.x = (Math.PI / 180) * 91),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
};
/* #endregion */
/* #region  กางกล่อง */
const rotations2 = () => {
  /* #region  แกนหมุน */

  /* #region  pivot_Group_bottom */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom.x = 0),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left.y = 0),
  });

  /* #region  pivot_Top */

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_glue_Lid.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back.y = 0),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right.y = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  แกนหมุน - เส้น */

  /* #region  pivot_Group_bottom */

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Group_bottom_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_left_d_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_left_edges.y = 0),
  });

  /* #region  pivot_Top */

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_glue_Lid_edges.y = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_A_back_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_A_back_edges.y = 0),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lid_B_right_d_edges.x = 0),
  });
  tween = gsap.timeline();
  tween.to(pivot_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_B_right_edges.y = 0),
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

  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.z = 700;

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
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

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
  // let helper = new THREE.CameraHelper(spotLight.shadow.camera);
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
  // let helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  // scene.add(helper2);

  /* #endregion */

  /* #endregion */
  /* #region  Viewport on Resize */

  window.addEventListener("resize", function () {
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

  let lid_shape = new THREE.Shape();

  lid_shape.moveTo(0, 0);
  lid_shape.lineTo(A, 0);
  lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lid_shape.lineTo(A / 10, -P);
  lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  let lid_cover = new THREE.ShapeGeometry(lid_shape); // ฝาเสียบ

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  let glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_slope, G);
  glue_Lid_shape.lineTo(C - g_slope, G);
  glue_Lid_shape.lineTo(C, 0);

  let glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว

  /* #endregion */
  /* #region  ลิ้นกันฝุ่นบน */

  let lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, (F * 0.0938) | 0); //  0, 3
  lr_lid_shape.lineTo(B * 0.05, (F * 0.125) | 0); //  0, 4
  lr_lid_shape.lineTo(B * 0.15, (F * 0.875) | 0); //  0, 28
  // Center ...................................................
  lr_lid_shape.lineTo((B * 0.2) | 0, F);
  lr_lid_shape.lineTo(B, F);
  // Rear......................................................
  lr_lid_shape.lineTo(B, 0);

  let lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น

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
  side_A_front.position.set(A / 2, C / 2, 0);

  /* #endregion */
  /* #region  side_A_back */

  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.set(-A / 2, C / 2, 0);

  side_glue_Lid = new THREE.Mesh(glue_Lid, material);
  side_glue_Lid.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  side_Bottom */

  side_Bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_Bottom.position.set(A / 2, B / 2, 0);

  side_lid_Bottom = new THREE.Mesh(lid_cover, material);

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-B / 2, C / 2, 0);

  side_lid_B_left = new THREE.Mesh(lr_lid, material);
  side_lid_B_left.rotation.y = Math.PI;

  side_B_left_d = new THREE.Mesh(lr_lid, material);
  side_B_left_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(B / 2, C / 2, 0);

  side_lid_B_right = new THREE.Mesh(lr_lid, material);

  side_B_right_d = new THREE.Mesh(lr_lid, material);
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  side_lid_Cover = new THREE.Mesh(lid_cover, material);
  side_lid_Cover.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_Top */

  side_Top = new THREE.Mesh(plane_Top_bottom, material);
  side_Top.position.set(A / 2, B / 2, 0);

  side_Top_lid = new THREE.Mesh(lid_cover, material);
  side_Top_lid.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  ฉาก - แบบมีเส้น */

  /* #region  side_A_front */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.set(A / 2, C / 2, 0);

  /* #endregion */
  /* #region  side_A_back */

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.set(-A / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_glue_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_glue_Lid_edges.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  side_Bottom */

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_edges.position.set(A / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lid_cover);
  side_lid_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  /* #endregion */
  /* #region  side_B_left */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(-B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_B_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_d_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_B_right */

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(B / 2, C / 2, 0);

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid);
  side_B_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_d_edges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(lid_cover);
  side_lid_Cover_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_Cover_edges.rotation.x = Math.PI;

  /* #endregion */
  /* #region  side_Top */

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_edges.position.set(A / 2, B / 2, 0);

  edges = new THREE.EdgesGeometry(lid_cover);
  side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */
  /* #region  pivot_Group_bottom */

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom);
  pivot_Bottom.rotation.x = Math.PI;

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_lid_Bottom);
  pivot_Bottom_lid.position.y = -B;

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  /* #endregion */

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_Group_bottom);

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  /* #region  pivot_Top */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = B;
  pivot_Top_lid.add(side_Top_lid);

  pivot_Top = new THREE.Object3D();
  pivot_Top.position.set(-A, C, 0);
  pivot_Top.add(side_Top, pivot_Top_lid);

  /* #endregion */
  /* #region  pivot_A_back */

  pivot_glue_Lid = new THREE.Object3D();
  pivot_glue_Lid.position.x = -A;
  pivot_glue_Lid.add(side_glue_Lid);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, pivot_glue_Lid, pivot_Top);

  /* #endregion */

  pivot_group_A_back = new THREE.Object3D();
  pivot_group_A_back.position.x = -B;
  pivot_group_A_back.add(pivot_A_back);

  /* #endregion */

  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.position.y = C;
  pivot_lid_B_left.add(side_lid_B_left);

  pivot_lid_B_left_d = new THREE.Object3D();
  pivot_lid_B_left_d.add(side_B_left_d);
  pivot_lid_B_left_d.position.x = -B;

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    pivot_lid_B_left,
    pivot_lid_B_left_d,
    pivot_group_A_back
  );

  /* #endregion */
  /* #region  pivot_B_right */

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.y = C;
  pivot_lid_B_right.add(side_lid_B_right);

  pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.add(side_B_right_d);
  pivot_lid_B_right_d.position.x = B;

  pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(pivot_lid_B_right, side_B_right, pivot_group_B_right_d);

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - แบบมีเส้น */

  /* #region  pivot_A_front */
  /* #region  pivot_Group_bottom */

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges);
  pivot_Bottom_edges.rotation.x = Math.PI;

  pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.add(side_lid_Bottom_edges);
  pivot_Bottom_lid_edges.position.y = -B;

  pivot_Group_bottom_edges = new THREE.Object3D();
  pivot_Group_bottom_edges.add(pivot_Bottom_edges, pivot_Bottom_lid_edges);

  /* #endregion */

  pivot_A_front_edges = new THREE.Object3D();
  pivot_A_front_edges.add(side_A_front_edges, pivot_Group_bottom_edges);

  /* #endregion */
  /* #region  pivot_B_left */

  /* #region  pivot_group_A_back */

  /* #region  pivot_Top */

  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.position.y = B;
  pivot_Top_lid_edges.add(side_Top_lid_edges);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.position.set(-A, C, 0);
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);

  /* #endregion */
  /* #region  pivot_A_back */

  pivot_glue_Lid_edges = new THREE.Object3D();
  pivot_glue_Lid_edges.position.x = -A;
  pivot_glue_Lid_edges.add(side_glue_Lid_edges);

  pivot_A_back_edges = new THREE.Object3D();
  pivot_A_back_edges.add(
    side_A_back_edges,
    pivot_glue_Lid_edges,
    pivot_Top_edges
  );

  /* #endregion */

  pivot_group_A_back_edges = new THREE.Object3D();
  pivot_group_A_back_edges.position.x = -B;
  pivot_group_A_back_edges.add(pivot_A_back_edges);

  /* #endregion */

  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.position.y = C;
  pivot_lid_B_left_edges.add(side_lid_B_left_edges);

  pivot_lid_B_left_d_edges = new THREE.Object3D();
  pivot_lid_B_left_d_edges.add(side_B_left_d_edges);
  pivot_lid_B_left_d_edges.position.x = -B;

  pivot_B_left_edges = new THREE.Object3D();
  pivot_B_left_edges.add(
    side_B_left_edges,
    pivot_lid_B_left_edges,
    pivot_lid_B_left_d_edges,
    pivot_group_A_back_edges
  );

  /* #endregion */
  /* #region  pivot_B_right */

  pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.position.y = C;
  pivot_lid_B_right_edges.add(side_lid_B_right_edges);

  pivot_lid_B_right_d_edges = new THREE.Object3D();
  pivot_lid_B_right_d_edges.add(side_B_right_d_edges);
  pivot_lid_B_right_d_edges.position.x = B;

  pivot_group_B_right_d_edges = new THREE.Object3D();
  pivot_group_B_right_d_edges.add(pivot_lid_B_right_d_edges);

  pivot_B_right_edges = new THREE.Object3D();
  pivot_B_right_edges.position.x = A;
  pivot_B_right_edges.add(
    pivot_lid_B_right_edges,
    side_B_right_edges,
    pivot_group_B_right_d_edges
  );

  /* #endregion */
  /* #region  pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_A_front_edges,
    pivot_B_left_edges,
    pivot_B_right_edges
  );
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
