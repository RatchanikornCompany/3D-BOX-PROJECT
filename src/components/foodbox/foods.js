import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 220;
var B = 220;
var C = 30;
var D = 0.5;
var w = window.innerWidth;
var h = (window.innerHeight / 1.5) | 0;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
  /* #region  Three-3D Renderer */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //เซ็ทตำแหน่งของกล้อง
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

  //สร้างแกนหมุน
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  //เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: true,
  });

  // Spotlight 1
  var spotLight = new THREE.SpotLight(0xffffff);
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

  // ภาพฉาย Spotlight 1
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  // Spotlight 2
  var spotLight2 = new THREE.SpotLight(0xffffff);
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

  // ภาพฉาย Spotlight 2
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);

  //Webgl Render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("webgl").append(renderer.domElement);

  //The mouse controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #region  โมเดลที่สร้างใหม่ */
  var lid_Bottom_shape = new THREE.Shape();
  lid_Bottom_shape.moveTo(0, 0);
  lid_Bottom_shape.lineTo(0, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo((A * 0.182) | 0, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo((A * 0.182) | 0, (B * 0.26) | 0);
  lid_Bottom_shape.lineTo((A * 0.364) | 0, (B * 0.26) | 0);
  lid_Bottom_shape.lineTo((A * 0.364) | 0, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo((A * 0.637) | 0, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo((A * 0.637) | 0, (B * 0.26) | 0);
  lid_Bottom_shape.lineTo((A * 0.819) | 0, (B * 0.26) | 0);
  lid_Bottom_shape.lineTo((A * 0.819) | 0, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo(A, (B * 0.237) | 0);
  lid_Bottom_shape.lineTo(A, 0);

  var lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);

  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_A_top = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | ลึก x สูง | ความหนา
  /* #endregion */

  /* #region  ฉาก */
  var side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;

  var side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = A / 2;
  side_A_front.position.y = B / 2;
  //   scene.add(side_A_front);

  var side_A_top = new THREE.Mesh(plane_A_top, material);
  //   side_A_top.rotation.z = (Math.PI / 180) * 90;
  side_A_top.position.x = A / 2;
  side_A_top.position.y = C / 2;
  //   scene.add(side_A_top);

  var side_A_back_top = new THREE.Mesh(plane_A_top, material);
  //   side_A_top.rotation.z = (Math.PI / 180) * 90;
  side_A_back_top.position.x = A / 2;
  side_A_back_top.position.y = C / 2;
  //   scene.add(side_A_top);

  var side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -C / 2;
  side_B_left.position.y = B / 2;
  //   scene.add(side_B_left);

  var side_B_back_left = new THREE.Mesh(plane_B_side, material);
  side_B_back_left.position.x = -C / 2;
  side_B_back_left.position.y = B / 2;
  //   scene.add(side_B_back_left);

  var side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = C / 2;
  side_B_right.position.y = B / 2;
  //   scene.add(side_B_right);

  var side_B_back_right = new THREE.Mesh(plane_B_side, material);
  side_B_back_right.position.x = C / 2;
  side_B_back_right.position.y = B / 2;
  //   scene.add(side_B_back_right);

  var side_Lid_bottom = new THREE.Mesh(lid_Bottom, material);
  //   scene.add(side_Lid_bottom);
  /* #endregion */

  /* #region  ฉาก - แบบมีเส้น */

  /* #endregion */

  /* #region  จุดหมุน */
  var pivot_A_back_top = new THREE.Object3D();
  pivot_A_back_top.add(side_A_back_top);
  pivot_A_back_top.position.y = B;

  var pivot_B_back_left = new THREE.Object3D();
  pivot_B_back_left.add(side_B_back_left);
  //   scene.add(pivot_B_back_left);

  var pivot_B_back_right = new THREE.Object3D();
  pivot_B_back_right.add(side_B_back_right);
  pivot_B_back_right.position.x = A;
  // scene.add(pivot_B_back_right);

  var pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_A_back_top,
    pivot_B_back_left,
    pivot_B_back_right
  );
  pivot_A_back.position.y = C;

  var pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_A_back);
  pivot_A_top.position.y = B;

  var pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left);

  var pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right);
  pivot_B_right.position.x = A;

  var pivot_Lid_bottom = new THREE.Object3D();
  pivot_Lid_bottom.add(side_Lid_bottom);
  pivot_Lid_bottom.rotation.x = (Math.PI / 180) * 180;

  var pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(
    side_A_front,
    pivot_A_top,
    pivot_B_left,
    pivot_B_right,
    pivot_Lid_bottom
  );

  var pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front);
  scene.add(pivot_All);
  /* #endregion */

  /* #region  จุดหมุน - แบบมีเส้น */

  /* #endregion */
};

// /* #region  ฟังก์ชันอนิเมชั่น */
// const rotations1 = () => {
//   /* #region  จุดหมุน - ชิ้นงาน */

//   /* #region  pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Back.y = -(Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #region  pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_left.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_right.x = (Math.PI / 180) * 91),
//   });
//   /* #endregion */

//   /* #region  pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right.y = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_left.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_right.x = (Math.PI / 180) * 91),
//   });
//   /* #endregion */

//   /* #region  pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_left.x = (Math.PI / 180) * 179),
//     y: (pivot_A_bottom_front_left.y = (Math.PI / 180) * 1),
//     z: (pivot_A_bottom_front_left.z = (Math.PI / 180) * -90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_right.x = (Math.PI / 180) * 179),
//     y: (pivot_A_bottom_front_right.y = (Math.PI / 180) * -1),
//     z: (pivot_A_bottom_front_right.z = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_left.x = (Math.PI / 180) * 178),
//     y: (pivot_A_bottom_back_left.y = (Math.PI / 180) * 2),
//     z: (pivot_A_bottom_back_left.z = (Math.PI / 180) * -90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_right.x = (Math.PI / 180) * 178),
//     y: (pivot_A_bottom_back_right.y = (Math.PI / 180) * -2),
//     z: (pivot_A_bottom_back_right.z = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #region  pivot_Glue */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue.y = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Glue_bottom.x = (Math.PI / 180) * 93),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #region  จุดหมุน - ชิ้นงาน (เส้น) */

//   /* #region  pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Back_edges.y = -(Math.PI / 180) * 90), // 120
//   });
//   /* #endregion */

//   /* #region  pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_left_edges.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_right_edges.x = (Math.PI / 180) * 91),
//   });
//   /* #endregion */

//   /* #region  pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right_edges.y = (Math.PI / 180) * 90), // 120
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_left_edges.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_right_edges.x = (Math.PI / 180) * 91),
//   });
//   /* #endregion */

//   /* #region  pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_edges.x = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_left_edges.x = (Math.PI / 180) * 179),
//     y: (pivot_A_bottom_front_left_edges.y = (Math.PI / 180) * 1),
//     z: (pivot_A_bottom_front_left_edges.z = (Math.PI / 180) * -90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_right_edges.x = (Math.PI / 180) * 179),
//     y: (pivot_A_bottom_front_right_edges.y = (Math.PI / 180) * -1),
//     z: (pivot_A_bottom_front_right_edges.z = (Math.PI / 180) * 90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_edges.x = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_left_edges.x = (Math.PI / 180) * 178),
//     y: (pivot_A_bottom_back_left_edges.y = (Math.PI / 180) * 2),
//     z: (pivot_A_bottom_back_left_edges.z = (Math.PI / 180) * -90),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_right_edges.x = (Math.PI / 180) * 178),
//     y: (pivot_A_bottom_back_right_edges.y = (Math.PI / 180) * -2),
//     z: (pivot_A_bottom_back_right_edges.z = (Math.PI / 180) * 90),
//   });
//   /* #endregion */

//   /* #region  pivot_Glue */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue_edges.y = (Math.PI / 180) * 91),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Glue_bottom_edges.x = (Math.PI / 180) * 93),
//   });
//   /* #endregion */

//   /* #endregion */
// };
// const rotations2 = () => {
//   /* #region  จุดหมุน - ชิ้นงาน */

//   /* #region  pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Back.y = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_left.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_right.x = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_left.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_right.x = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_left.x = 0),
//     y: (pivot_A_bottom_front_left.y = 0),
//     z: (pivot_A_bottom_front_left.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_right.x = 0),
//     y: (pivot_A_bottom_front_right.y = 0),
//     z: (pivot_A_bottom_front_right.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_left.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_left.x = 0),
//     y: (pivot_A_bottom_back_left.y = 0),
//     z: (pivot_A_bottom_back_left.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_right.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_right.x = 0),
//     y: (pivot_A_bottom_back_right.y = 0),
//     z: (pivot_A_bottom_back_right.z = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Glue */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_bottom.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Glue_bottom.x = 0),
//   });
//   /* #endregion */

//   /* #endregion */

//   /* #region  จุดหมุน - ชิ้นงาน (เส้น) */

//   /* #region  pivot_Back */
//   tween = gsap.timeline();
//   tween.to(pivot_Back_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Back_edges.y = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Left */
//   tween = gsap.timeline();
//   tween.to(pivot_Left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Left_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_left_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Left_bottom_lid_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Left_bottom_lid_right_edges.x = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Right */
//   tween = gsap.timeline();
//   tween.to(pivot_Right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Right_edges.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_left_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Right_bottom_lid_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Right_bottom_lid_right_edges.x = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Bottom */
//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_left_edges.x = 0),
//     y: (pivot_A_bottom_front_left_edges.y = 0),
//     z: (pivot_A_bottom_front_left_edges.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_front_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_front_right_edges.x = 0),
//     y: (pivot_A_bottom_front_right_edges.y = 0),
//     z: (pivot_A_bottom_front_right_edges.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_edges.x = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_left_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_left_edges.x = 0),
//     y: (pivot_A_bottom_back_left_edges.y = 0),
//     z: (pivot_A_bottom_back_left_edges.z = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_A_bottom_back_right_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_A_bottom_back_right_edges.x = 0),
//     y: (pivot_A_bottom_back_right_edges.y = 0),
//     z: (pivot_A_bottom_back_right_edges.z = 0),
//   });
//   /* #endregion */

//   /* #region  pivot_Glue */
//   tween = gsap.timeline();
//   tween.to(pivot_Glue_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     y: (pivot_Glue.y = 0),
//   });

//   tween = gsap.timeline();
//   tween.to(pivot_Glue_bottom_edges.rotation, {
//     duration: 5,
//     ease: "power4.in",
//     x: (pivot_Glue_bottom_edges.x = 0),
//   });
//   /* #endregion */

//   /* #endregion */
// };
// /* #endregion */

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

const updateSize = (a, b, c) => {
  A = a;
  B = b;
  C = c;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

const render = () => {
  renderer.render(scene, camera);
  // pivot_All.rotation.y += Math.PI / 360;
  // pivot_All_edges.rotation.y += Math.PI / 360;
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  //   rotations1,
  //   rotations2,
  updateSize,
};
