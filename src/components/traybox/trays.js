import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 200;
var B = 150;
var C = 50;
var D = 0.5;
var w = (window.innerWidth * 75) / 100;
var h = window.innerHeight;
// var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว // 5
// var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_back;
var side_Glue_flap;
var side_A_front;
var side_B_left;
var side_B_right;

var side_A_back_edges;
var side_Glue_flap_edges;
var side_A_front_edges;
var side_B_left_edges;
var side_B_right_edges;

var pivot_Back;
var pivot_Glue_flap;
var pivot_Front;
var pivot_Back_group;
var pivot_Left;
var pivot_Right;
var pivot_All;

var pivot_Front_edges;
var pivot_Glue_flap_edges;
var pivot_Back_edges;
var pivot_Back_group_edges;
var pivot_Left_edges;
var pivot_Right_edges;
var pivot_All_edges;
/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งของกล้อง */
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;
  /* #endregion */
  /* #region  สร้างแกนหมุน */
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน */
  const material = new THREE.MeshBasicMaterial({
    color: '#FFFFFF',
    side: THREE.DoubleSide,
    wireframe: false,
  });
  /* #endregion */
  /* #region  WebGL Render */
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.getElementById('webgl').append(renderer.domElement);
  /* #endregion */
  /* #region  Viewport on Resize*/
  window.addEventListener('resize', function () {
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  /* #endregion */
  /* #region  The Mouse Controls */
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #endregion */

  /* #region  Model */

  /* #region  ฝากาว */
  var glue_flap_shape = new THREE.Shape();
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.moveTo(0, 0);
  glue_flap_shape.lineTo(A, 0);
  glue_flap_shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(P - P / 35),
    A - A / 10,
    -P
  );
  glue_flap_shape.lineTo(A / 10, -P);
  glue_flap_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  var glue_flap = new THREE.ShapeGeometry(glue_flap_shape); // ฝากาว
  /* #endregion */
  /* #region  โมเดลมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, A, D); // ด้าน B | กว้าง x สูง | ความหนา
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก */

  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_front.position.x = B / 2;
  side_A_front.position.y = A / 2;
  /* #endregion */
  /* #region  side_Glub_flap */
  side_Glue_flap = new THREE.Mesh(glue_flap, material);
  side_Glue_flap.rotation.set(0, Math.PI, (Math.PI / 180) * 90);
  /* #endregion */
  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_back.position.x = -B / 2;
  side_A_back.position.y = A / 2;
  /* #endregion */
  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -C / 2;
  side_B_left.position.y = A / 2;
  /* #endregion */
  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = C / 2;
  side_B_right.position.y = A / 2;
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก - เส้น */

  /* #region  side_A_front_edges */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_front_edges.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_front_edges.position.x = B / 2;
  side_A_front_edges.position.y = A / 2;
  /* #endregion */
  /* #region  side_Glue_flap_edges */
  edges = new THREE.EdgesGeometry(glue_flap);
  side_Glue_flap_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_flap_edges.rotation.set(0, Math.PI, (Math.PI / 180) * 90);
  /* #endregion */
  /* #region  side_A_back_edges */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.rotation.set(0, 0, (Math.PI / 180) * 90);
  side_A_back_edges.position.x = -B / 2;
  side_A_back_edges.position.y = A / 2;
  /* #endregion */
  /* #region  side_B_left_edges */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -C / 2;
  side_B_left_edges.position.y = A / 2;
  /* #endregion */
  /* #region  side_B_right_edges */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_right_edges.position.x = C / 2;
  side_B_right_edges.position.y = A / 2;
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_Front */
  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front);
  /* #endregion */
  /* #region  pivot_Glue_flap */
  pivot_Glue_flap = new THREE.Object3D();
  pivot_Glue_flap.add(side_Glue_flap);
  pivot_Glue_flap.position.x = -B;
  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);
  /* #endregion */
  /* #region  pivot_Back_group */
  pivot_Back_group = new THREE.Object3D();
  pivot_Back_group.add(pivot_Back, pivot_Glue_flap);
  pivot_Back_group.position.x = -C;
  /* #endregion */
  /* #region  pivot_Left */
  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Back_group);
  /* #endregion */
  /* #region  pivot_Right */
  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right);
  pivot_Right.position.x = B;
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Front, pivot_Left, pivot_Right);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Front_edges */
  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(side_A_front_edges);
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  pivot_Glue_flap_edges = new THREE.Object3D();
  pivot_Glue_flap_edges.add(side_Glue_flap_edges);
  pivot_Glue_flap_edges.position.x = -B;
  /* #endregion */
  /* #region  pivot_Back_edges */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);
  /* #endregion */
  /* #region  pivot_Back_group_edges */
  pivot_Back_group_edges = new THREE.Object3D();
  pivot_Back_group_edges.add(pivot_Back_edges, pivot_Glue_flap_edges);
  pivot_Back_group_edges.position.x = -C;
  /* #endregion */
  /* #region  pivot_Left_edges */
  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_Back_group_edges);
  /* #endregion */
  /* #region  pivot_Right_edges */
  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges);
  pivot_Right_edges.position.x = B;
  /* #endregion */
  /* #region  pivot_All_edges */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Front_edges, pivot_Left_edges, pivot_Right_edges);
  scene.add(pivot_All_edges);
  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

/* #region  ฟังก์ชั่นการหมุน */
/*  พับกล่อง */
const rotations1 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = (-Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Back_group */
  tween = gsap.timeline();
  tween.to(pivot_Back_group.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_group.y = (-Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_flap.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Left_edges */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = (-Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Back_group_edges */
  tween = gsap.timeline();
  tween.to(pivot_Back_group_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_group_edges.y = (-Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_flap_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */

  /* #endregion */
};
/*  กางกล่อง */
const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Back_group */
  tween = gsap.timeline();
  tween.to(pivot_Back_group.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_group.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_flap.y = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Left_edges */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Back_group_edges */
  tween = gsap.timeline();
  tween.to(pivot_Back_group_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_group_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Glue_flap_edges */
  tween = gsap.timeline();
  tween.to(pivot_Glue_flap_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_flap_edges.y = 0),
  });
  /* #endregion */

  /* #endregion */
};
/* #endregion */

const updateSize = (a, b, c, p) => {
  A = a;
  B = b;
  C = c;
  P = p;

  var initDiv = document.getElementById('webgl');
  var newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

  return main();
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
