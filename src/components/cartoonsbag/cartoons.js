import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import 'antd/dist/antd.css';

import {
  getPlaneASideShape,
  getPlaneATopShape,
  getPlaneASideD,
  getPlaneABottomSideShape,
  getPlaneABottomSideD,
  getPlaneBTop,
  getPlaneBSide,
  getPlaneBBottomShape,
  getPlaneBottomDShape,
  getPlaneBBottomLid,
  getPlaneGlueTop,
  getGlueLid,
  getGludLidD,
  getGlueCenterShape,
  getGlueCenterLidShape,
  getRopeFront,
  getRopeBack,
} from './models';

var controls, renderer, scene, camera;

var A = 250;
var B = 130;
var C = 250;
var D = C <= 300 ? 30 : 40;
var G = 30;

var O = 1;

/* #region  //* ฟังก์ชั่น */

/* #region  //* main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  //* updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  var initDiv = document.getElementById('webgl');
  var newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

  return main();
};

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  //? Three-3D Renderer */

  /* #region  //* Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  //* Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
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
    //   MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: true,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  //* WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  //* The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  //* Spotlights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
  // scene.add(hemiLight);

  // const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  // dirLight.position.set(200, 200, 200);
  // scene.add(dirLight);

  /* #endregion */
  /* #region  //* GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก */

  /* #region  //* sideAFront */

  const sideATop = new THREE.Mesh(getPlaneATopShape(A, D), material);

  const sideAFront = new THREE.Mesh(getPlaneASideShape(A, B, C), material);

  /* #endregion */
  /* #region  //* sideBRight */

  const sideBTop = new THREE.Mesh(getPlaneBTop(B, D), material);

  const sideBRight = new THREE.Mesh(getPlaneBSide(B, C), material);

  /* #endregion */
  /* #region  //* sideGlueLid */

  const sideGlueLid = new THREE.Mesh(getGlueLid(B, C, G), material);

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivotAFront */

  const pivotSideBTop = new THREE.Object3D();
  pivotSideBTop.add(sideBTop);
  pivotSideBTop.position.y = (C - B / 2) | 0;

  const pivotBRightL = new THREE.Object3D();
  pivotBRightL.add(sideBRight, pivotSideBTop);
  pivotBRightL.position.x = A;

  const pivotBRightR = new THREE.Object3D();
  pivotBRightR.add(pivotBRightL.clone());
  pivotBRightR.position.x = B / 2;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop);
  pivotATop.position.y = (C - B / 2) | 0;

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(sideAFront, pivotBRightL, pivotBRightR, pivotATop);

  /* #endregion */
  /* #region  //! pivotABack */

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid);
  pivotGlueLid.position.x = -G;

  const pivotABack = new THREE.Object3D();
  pivotABack.add(pivotAFront.clone(), pivotGlueLid);
  pivotABack.position.x = -A - B;

  /* #endregion */

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAFront, pivotABack);
  scene.add(pivotGroupAll);

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
