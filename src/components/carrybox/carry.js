import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

import {
  getLidShape,
  getLRLidShape,
  getLidBottomShape,
  getLRLidBottomShape,
  getLRLidBottomShapeD,
  getLidCurveShape,
  getLidBottomCurveShape,
  getGlueLidShape,
  getPlaneASide,
  getPlaneBSide,
} from './models';

let controls, renderer, scene, camera;

let A = 175; //  กว้าง
let B = 105; //  ลึก
let C = 75; //  สูง

let O = 1; //  ความโปร่งแสง

let G = 5; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let gSlope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt

let edges;
let tween;

let side_A_front;
let side_A_back;
let side_B_left;
let side_B_right;
let side_Left_lid;
let side_Left_lid_d;
let side_Right_lid;
let side_Right_lid_d;
let side_Top_A_back;
let side_Top_A_lid_top_back;
let side_Glue_lid;
let side_Top_A_front;
let side_Top_A_lid_top_front;
let side_Bottom_A_front;
let side_lid_Bottom_A_front;
let side_lid_d_Bottom_A_front;
let side_Bottom_A_back;
let side_lid_Bottom_A_back;
let side_lid_d_Bottom_A_back;

let side_A_front_edges;
let side_A_back_edges;
let side_B_left_edges;
let side_B_right_edges;
let side_Left_lid_edges;
let side_Left_lid_d_edges;
let side_Right_lid_edges;
let side_Right_lid_d_edges;
let side_Top_A_back_edges;
let side_Top_A_lid_top_back_edges;
let side_Glue_lid_edges;
let side_Top_A_front_edges;
let side_Top_A_lid_top_front_edges;
let side_Bottom_A_front_edges;
let side_lid_Bottom_A_front_edges;
let side_lid_d_Bottom_A_front_edges;
let side_Bottom_A_back_edges;
let side_lid_Bottom_A_back_edges;
let side_lid_d_Bottom_A_back_edges;

let pivot_Bottom_front;
let pivot_Bottom_front_lid;
let pivot_Bottom_front_lid_d;
let pivot_Group_bottom_front;
let pivot_front;
let pivot_Right_lid;
let pivot_Right_lid_d;
let pivot_Group_right;
let pivot_Left_lid;
let pivot_Left_lid_d;
let pivot_Left;
let pivot_Glue_lid;
let pivot_Top_back;
let pivot_Top_back_lid;
let pivot_Group_top_back;
let pivot_Bottom_back;
let pivot_Bottom_back_lid;
let pivot_Bottom_back_lid_d;
let pivot_Group_bottom_back;
let pivot_Back;
let pivot_Group_left;
let pivot_Top_front;
let pivot_Top_front_lid;
let pivot_Top;
let pivot_All;

let pivot_Bottom_front_edges;
let pivot_Bottom_front_lid_edges;
let pivot_Bottom_front_lid_d_edges;
let pivot_Group_bottom_front_edges;
let pivot_front_edges;
let pivot_Right_lid_edges;
let pivot_Right_lid_d_edges;
let pivot_Group_right_edges;
let pivot_Left_lid_edges;
let pivot_Left_lid_d_edges;
let pivot_Left_edges;
let pivot_Glue_lid_edges;
let pivot_Top_back_edges;
let pivot_Top_back_lid_edges;
let pivot_Group_top_back_edges;
let pivot_Bottom_back_edges;
let pivot_Bottom_back_lid_edges;
let pivot_Bottom_back_lid_d_edges;
let pivot_Group_bottom_back_edges;
let pivot_Back_edges;
let pivot_Group_left_edges;
let pivot_Top_front_edges;
let pivot_Top_front_lid_edges;
let pivot_Top_edges;
let pivot_All_edges;

const init = () => {
  /* #region  //* Three-3D Renderer */

  /* #region  //* Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  //* Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    (window.innerWidth * 75) / 100 / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  //* axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  //* Material */

  const material = new THREE.MeshPhongMaterial({
    // MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  //* WebGL Render */

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x404040);
  renderer.setSize((window.innerWidth * 75) / 100, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  //* The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  //* Spotlights */

  /* #region  //* Spotlight 1 */

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
  /* #region  //* Spotlight 2 */

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
  /* #region  //* Viewport on Resize */

  window.addEventListener('resize', function () {
    renderer.setSize((window.innerWidth * 75) / 100, window.innerHeight);
    camera.aspect = (window.innerWidth * 75) / 100 / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  /* #endregion */
  /* #region  //* GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก */

  /* #region  //* side_A_front */

  side_Bottom_A_front = new THREE.Mesh(getLidBottomShape(A, C), material);
  side_Bottom_A_front.rotation.x = Math.PI;

  side_lid_Bottom_A_front = new THREE.Mesh(getLRLidBottomShape(A, C), material);
  side_lid_Bottom_A_front.rotation.x = Math.PI;

  side_lid_d_Bottom_A_front = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material
  );
  side_lid_d_Bottom_A_front.rotation.x = Math.PI;

  side_A_front = new THREE.Mesh(getPlaneASide(A, C), material);

  /* #endregion */
  /* #region  //* side_B_right */

  side_Right_lid = new THREE.Mesh(getLidCurveShape(B, C), material);

  side_Right_lid_d = new THREE.Mesh(getLidBottomCurveShape(B, C), material);
  side_Right_lid_d.rotation.x = Math.PI;

  side_B_right = new THREE.Mesh(getPlaneBSide(B, C), material);

  /* #endregion */
  /* #region  //* side_B_left */

  side_Left_lid = new THREE.Mesh(getLidCurveShape(B, C), material);
  side_Left_lid.rotation.y = Math.PI;

  side_Left_lid_d = new THREE.Mesh(getLidBottomCurveShape(B, C), material);
  side_Left_lid_d.rotation.x = Math.PI;

  side_B_left = new THREE.Mesh(getPlaneBSide(B, C), material);
  side_B_left.position.x = -B;

  side_Glue_lid = new THREE.Mesh(getGlueLidShape(C, G, gSlope), material);
  side_Glue_lid.rotation.z = Math.PI / 2;

  side_Top_A_back = new THREE.Mesh(getLidShape(A, C), material);

  side_Top_A_lid_top_back = new THREE.Mesh(getLRLidShape(A, C), material);

  side_Bottom_A_back = new THREE.Mesh(getLidBottomShape(A, C), material);
  side_Bottom_A_back.rotation.x = Math.PI;

  side_lid_Bottom_A_back = new THREE.Mesh(getLRLidBottomShape(A, C), material);
  side_lid_Bottom_A_back.rotation.x = Math.PI;

  side_lid_d_Bottom_A_back = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material
  );
  side_lid_d_Bottom_A_back.rotation.x = Math.PI;

  side_A_back = new THREE.Mesh(getPlaneASide(A, C), material);
  side_A_back.position.x = -A;

  /* #endregion */
  /* #region  //* side_Top_A_front */

  side_Top_A_front = new THREE.Mesh(getLidShape(A, C), material);

  side_Top_A_lid_top_front = new THREE.Mesh(getLRLidShape(A, C), material);

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Front */

  pivot_Bottom_front = new THREE.Object3D();
  pivot_Bottom_front.add(side_Bottom_A_front);

  pivot_Bottom_front_lid = new THREE.Object3D();
  pivot_Bottom_front_lid.add(side_lid_Bottom_A_front);
  pivot_Bottom_front_lid.position.set((A * 0.76) | 0, C * -0.1667, 0);

  pivot_Bottom_front_lid_d = new THREE.Object3D();
  pivot_Bottom_front_lid_d.add(side_lid_d_Bottom_A_front);
  pivot_Bottom_front_lid_d.position.set((A * 0.0286) | 0, C * -0.7, 0);

  pivot_Group_bottom_front = new THREE.Object3D();
  pivot_Group_bottom_front.add(
    pivot_Bottom_front,
    pivot_Bottom_front_lid,
    pivot_Bottom_front_lid_d
  );

  pivot_front = new THREE.Object3D();
  pivot_front.add(side_A_front, pivot_Group_bottom_front);

  /* #endregion */
  /* #region  //* pivot_Group_right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_Right_lid);
  pivot_Right_lid.position.y = C;

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_Right_lid_d);

  pivot_Group_right = new THREE.Object3D();
  pivot_Group_right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_Group_right.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Group_left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_Left_lid);
  pivot_Left_lid.position.y = C;

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_Left_lid_d);
  pivot_Left_lid_d.position.x = -B;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.x = -A;
  pivot_Glue_lid.add(side_Glue_lid);

  pivot_Top_back = new THREE.Object3D();
  pivot_Top_back.add(side_Top_A_back);

  pivot_Top_back_lid = new THREE.Object3D();
  pivot_Top_back_lid.position.y = (C * 0.694) | 0;
  pivot_Top_back_lid.add(side_Top_A_lid_top_back);

  pivot_Group_top_back = new THREE.Object3D();
  pivot_Group_top_back.add(pivot_Top_back, pivot_Top_back_lid);
  pivot_Group_top_back.position.set(-A, C);

  pivot_Bottom_back = new THREE.Object3D();
  pivot_Bottom_back.add(side_Bottom_A_back);
  pivot_Bottom_back.position.x = -A;

  pivot_Bottom_back_lid = new THREE.Object3D();
  pivot_Bottom_back_lid.add(side_lid_Bottom_A_back);
  pivot_Bottom_back_lid.position.set(A * -0.24, C * -0.1667, 0);

  pivot_Bottom_back_lid_d = new THREE.Object3D();
  pivot_Bottom_back_lid_d.add(side_lid_d_Bottom_A_back);
  pivot_Bottom_back_lid_d.position.set((A * -0.972) | 0, C * -0.7, 0);

  pivot_Group_bottom_back = new THREE.Object3D();
  pivot_Group_bottom_back.add(
    pivot_Bottom_back,
    pivot_Bottom_back_lid,
    pivot_Bottom_back_lid_d
  );

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(
    side_A_back,
    pivot_Glue_lid,
    pivot_Group_top_back,
    pivot_Group_bottom_back
  );
  pivot_Back.position.x = -B;

  pivot_Group_left = new THREE.Object3D();
  pivot_Group_left.add(pivot_Left, pivot_Back);

  /* #endregion */
  /* #region  //* pivot_Top */

  pivot_Top_front = new THREE.Object3D();
  pivot_Top_front.add(side_Top_A_front);

  pivot_Top_front_lid = new THREE.Object3D();
  pivot_Top_front_lid.add(side_Top_A_lid_top_front);
  pivot_Top_front_lid.position.y = (C * 0.694) | 0;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(pivot_Top_front, pivot_Top_front_lid);
  pivot_Top.position.y = C;

  /* #endregion */
  /* #region  //* pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_front, pivot_Group_right, pivot_Group_left, pivot_Top);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - แบบมีเส้น */

  /* #region  //* side_A_front */

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  side_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  side_lid_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  side_lid_d_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_right */

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  side_Right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  side_Right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Right_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_left */

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  side_Left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  side_Left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B;

  edges = new THREE.EdgesGeometry(getGlueLidShape(C, G, gSlope));
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  side_Top_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  side_Top_A_lid_top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  side_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  side_lid_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  side_lid_d_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A;

  /* #endregion */
  /* #region  //* side_Top_A_front */

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  side_Top_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  side_Top_A_lid_top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Front */

  pivot_Bottom_front_edges = new THREE.Object3D();
  pivot_Bottom_front_edges.add(side_Bottom_A_front_edges);

  pivot_Bottom_front_lid_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_edges.add(side_lid_Bottom_A_front_edges);
  pivot_Bottom_front_lid_edges.position.set((A * 0.76) | 0, C * -0.1667, 0);

  pivot_Bottom_front_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_d_edges.add(side_lid_d_Bottom_A_front_edges);
  pivot_Bottom_front_lid_d_edges.position.set((A * 0.0286) | 0, C * -0.7, 0);

  pivot_Group_bottom_front_edges = new THREE.Object3D();
  pivot_Group_bottom_front_edges.add(
    pivot_Bottom_front_edges,
    pivot_Bottom_front_lid_edges,
    pivot_Bottom_front_lid_d_edges
  );

  pivot_front_edges = new THREE.Object3D();
  pivot_front_edges.add(side_A_front_edges, pivot_Group_bottom_front_edges);

  /* #endregion */
  /* #region  //* pivot_Group_right */

  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_Right_lid_edges);
  pivot_Right_lid_edges.position.y = C;

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_Right_lid_d_edges);

  pivot_Group_right_edges = new THREE.Object3D();
  pivot_Group_right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Group_right_edges.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Group_left */

  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_Left_lid_edges);
  pivot_Left_lid_edges.position.y = C;

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_Left_lid_d_edges);
  pivot_Left_lid_d_edges.position.x = -B;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.position.x = -A;
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);

  pivot_Top_back_edges = new THREE.Object3D();
  pivot_Top_back_edges.add(side_Top_A_back_edges);

  pivot_Top_back_lid_edges = new THREE.Object3D();
  pivot_Top_back_lid_edges.position.y = (C * 0.694) | 0;
  pivot_Top_back_lid_edges.add(side_Top_A_lid_top_back_edges);

  pivot_Group_top_back_edges = new THREE.Object3D();
  pivot_Group_top_back_edges.add(
    pivot_Top_back_edges,
    pivot_Top_back_lid_edges
  );
  pivot_Group_top_back_edges.position.set(-A, C);

  pivot_Bottom_back_edges = new THREE.Object3D();
  pivot_Bottom_back_edges.add(side_Bottom_A_back_edges);
  pivot_Bottom_back_edges.position.x = -A;

  pivot_Bottom_back_lid_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_edges.add(side_lid_Bottom_A_back_edges);
  pivot_Bottom_back_lid_edges.position.set(A * -0.24, C * -0.1667, 0);

  pivot_Bottom_back_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_d_edges.add(side_lid_d_Bottom_A_back_edges);
  pivot_Bottom_back_lid_d_edges.position.set((A * -0.972) | 0, C * -0.7);

  pivot_Group_bottom_back_edges = new THREE.Object3D();
  pivot_Group_bottom_back_edges.add(
    pivot_Bottom_back_edges,
    pivot_Bottom_back_lid_edges,
    pivot_Bottom_back_lid_d_edges
  );

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_Glue_lid_edges,
    pivot_Group_top_back_edges,
    pivot_Group_bottom_back_edges
  );
  pivot_Back_edges.position.x = -B;

  pivot_Group_left_edges = new THREE.Object3D();
  pivot_Group_left_edges.add(pivot_Left_edges, pivot_Back_edges);

  /* #endregion */
  /* #region  //* pivot_Top */

  pivot_Top_front_edges = new THREE.Object3D();
  pivot_Top_front_edges.add(side_Top_A_front_edges);

  pivot_Top_front_lid_edges = new THREE.Object3D();
  pivot_Top_front_lid_edges.add(side_Top_A_lid_top_front_edges);
  pivot_Top_front_lid_edges.position.y = (C * 0.694) | 0;

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(pivot_Top_front_edges, pivot_Top_front_lid_edges);
  pivot_Top_edges.position.y = C;

  /* #endregion */
  /* #region  //* pivot_All */

  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_front_edges,
    pivot_Group_right_edges,
    pivot_Group_left_edges,
    pivot_Top_edges
  );
  scene.add(pivot_All_edges);

  /* #endregion */

  /* #endregion */

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
};

const rotations1 = () => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 90),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = (Math.PI / 180) * -30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid.x = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d.x = (Math.PI / 180) * 45),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d.x = (Math.PI / 180) * 45),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 90),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left_edges.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = (Math.PI / 180) * -30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right_edges.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid_edges.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid_edges.x = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_edges.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d_edges.x = (Math.PI / 180) * 45),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_edges.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d_edges.x = (Math.PI / 180) * 45),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
};

const rotations2 = () => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid.x = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d.x = 0),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid_edges.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid_edges.x = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d_edges.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d_edges.x = 0),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
};

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  let initDiv = document.getElementById('webgl');
  let newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('init').appendChild(newDiv);

  return init();
};

export default {
  init,
  rotations1,
  rotations2,
  updateSize,
};
