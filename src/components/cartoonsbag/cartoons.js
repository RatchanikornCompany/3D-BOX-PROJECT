import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import gsap from 'gsap';
import 'antd/dist/antd.css';

import {
  getPlaneASideShape,
  getPlaneBSide,
  getPlaneATopShape,
  getPlaneBTop,
  getPlaneABottomDShape,
  getPlaneABottomSideShape,
  getPlaneBHalfBottomShape,
  getPlaneBHalfDBottomShape,
  getGlueLid,
  getGlueTop,
  getGlueCenter,
  getGlueCenterLid,
  getGlueBottom,
  getPlaneBBottomShape,
  getPlaneABottomLeftRightSideShape,
} from './models';

var controls, renderer, scene, camera;

var A = 250;
var B = 130;
var C = 250;
var D = C <= 300 ? 30 : 40;
var G = 30;
var R = 6;

var O = 1;

let tween;

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
/* #region  //* rotation */

export const rotation1 = (
  pivotBRightL,
  pivotATop,
  pivotSideBLeftTop,
  pivotSideBRightTop,
  pivotBLeftBottom,
  pivotBRightBottom,
  pivotABottomLeft,
  pivotABottomRight,
  pivotABottom,
  pivotBLeftR,
  pivotBLeftTop,
  pivotBLeftRBottom
) => {
  tween = gsap.timeline();
  tween.to(pivotBRightL.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBRightL.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotATop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotATop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBLeftTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotSideBRightTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotSideBRightTop.x = (Math.PI / 180) * -179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotBRightBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBRightBottom.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomLeft.x = (Math.PI / 180) * -179),
    z: (pivotABottomLeft.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottomRight.x = (Math.PI / 180) * -179),
    z: (pivotABottomRight.z = Math.PI / -2),
  });

  tween = gsap.timeline();
  tween.to(pivotABottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotABottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftR.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivotBLeftR.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftTop.x = (Math.PI / 180) * 179),
  });

  tween = gsap.timeline();
  tween.to(pivotBLeftRBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivotBLeftRBottom.x = (Math.PI / 180) * -91),
  });
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

  /* #endregion */
  /* #region  //* GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก */

  /* #region  //* sideA */

  const sideATop = new THREE.Mesh(getPlaneATopShape(A, D, R), material);

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, B, C, D, R),
    material
  );

  const sideABottomD = new THREE.Mesh(getPlaneABottomDShape(A, B), material);

  const sideABottom = new THREE.Mesh(getPlaneABottomSideShape(A, B), material);

  const sideABottomLeftRight = new THREE.Mesh(
    getPlaneABottomLeftRightSideShape(B),
    material
  );

  /* #endregion */
  /* #region  //* sideB */

  const sideBTop = new THREE.Mesh(getPlaneBTop(B, D), material);

  const sideBRightL = new THREE.Mesh(getPlaneBSide(B, C), material);

  const sideBRightR = new THREE.Mesh(getPlaneBSide(B, C), material);

  const sideBHalfBottom = new THREE.Mesh(getPlaneBHalfBottomShape(B), material);

  const sideBHalfDBottom = new THREE.Mesh(
    getPlaneBHalfDBottomShape(B),
    material
  );

  const sideBBottom = new THREE.Mesh(getPlaneBBottomShape(B), material);

  /* #endregion */
  /* #region  //* sideGlueLid */

  const sideGlueTop = new THREE.Mesh(getGlueTop(D, G), material);

  const sideGlueLid = new THREE.Mesh(getGlueLid(B, C, G), material);

  const sideGlueCenter = new THREE.Mesh(getGlueCenter(B, G), material);

  const sideGlueCenterLid = new THREE.Mesh(getGlueCenterLid(G), material);

  const sideGlueBottom = new THREE.Mesh(getGlueBottom(B, G), material);

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivotBRight */

  const pivotSideBLeftTop = new THREE.Object3D();
  pivotSideBLeftTop.add(sideBTop);
  pivotSideBLeftTop.position.y = (C - B / 2) | 0;

  const pivotSideBRightTop = new THREE.Object3D();
  pivotSideBRightTop.add(sideBTop.clone());
  pivotSideBRightTop.position.y = (C - B / 2) | 0;

  const pivotBLeftBottom = new THREE.Object3D();
  pivotBLeftBottom.add(sideBBottom);
  pivotBLeftBottom.position.y = (B / 2) | 0;

  const pivotBRightBottom = new THREE.Object3D();
  pivotBRightBottom.add(sideBBottom.clone());
  pivotBRightBottom.position.y = (B / 2) | 0;

  const pivotBHalfLeftBottom = new THREE.Object3D();
  pivotBHalfLeftBottom.add(sideBHalfBottom);
  pivotBHalfLeftBottom.rotation.x = Math.PI;

  const pivotBHalfRightBottom = new THREE.Object3D();
  pivotBHalfRightBottom.add(sideBHalfBottom.clone());
  pivotBHalfRightBottom.rotation.x = Math.PI;

  const pivotBHalfLeftDBottom = new THREE.Object3D();
  pivotBHalfLeftDBottom.add(sideBHalfDBottom, pivotBLeftBottom);
  pivotBHalfLeftDBottom.rotation.x = Math.PI;

  const pivotBHalfRightDBottom = new THREE.Object3D();
  pivotBHalfRightDBottom.add(sideBHalfDBottom.clone(), pivotBRightBottom);
  pivotBHalfRightDBottom.rotation.x = Math.PI;

  const pivotBRightR = new THREE.Object3D();
  pivotBRightR.add(
    sideBRightR,
    pivotSideBRightTop,
    pivotBHalfRightBottom,
    pivotBHalfRightDBottom
  );
  pivotBRightR.position.x = (B / 2) | 0;

  const pivotBRightL = new THREE.Object3D();
  pivotBRightL.add(
    sideBRightL,
    pivotSideBLeftTop,
    pivotBHalfLeftBottom,
    pivotBHalfLeftDBottom,
    pivotBRightR
  );
  pivotBRightL.position.x = A;

  /* #endregion */
  /* #region  //! pivotBLeft */

  const pivotBLeftTop = new THREE.Object3D();
  pivotBLeftTop.add(sideBTop.clone());
  pivotBLeftTop.position.y = (C - B / 2) | 0;

  const pivotBLeftHalfRightBottom = new THREE.Object3D();
  pivotBLeftHalfRightBottom.add(sideBHalfBottom.clone());
  pivotBLeftHalfRightBottom.rotation.x = Math.PI;

  const pivotBLeftRBottom = new THREE.Object3D();
  pivotBLeftRBottom.add(sideBBottom.clone());
  pivotBLeftRBottom.position.y = (B / 2) | 0;

  const pivotBLeftHalfRightDBottom = new THREE.Object3D();
  pivotBLeftHalfRightDBottom.add(sideBHalfDBottom.clone(), pivotBLeftRBottom);
  pivotBLeftHalfRightDBottom.rotation.x = Math.PI;

  const pivotBLeftR = new THREE.Object3D();
  pivotBLeftR.add(
    sideBRightR.clone(),
    pivotBLeftTop,
    pivotBLeftHalfRightBottom,
    pivotBLeftHalfRightDBottom
  );
  pivotBLeftR.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //! pivotAFront */

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop);
  pivotATop.position.y = (C - B / 2) | 0;

  const pivotABottomLeft = new THREE.Object3D();
  pivotABottomLeft.add(sideABottomLeftRight);

  const pivotABottomRight = new THREE.Object3D();
  pivotABottomRight.add(pivotABottomLeft.clone());
  pivotABottomRight.rotation.y = Math.PI;
  pivotABottomRight.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(sideABottom, pivotABottomLeft, pivotABottomRight);
  pivotABottom.position.y = (B / 2) | 0;

  const pivotABottomD = new THREE.Object3D();
  pivotABottomD.add(sideABottomD, pivotABottom);
  pivotABottomD.rotation.x = Math.PI;

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    pivotBRightL,
    pivotATop,
    pivotABottomD,
    pivotBLeftR
  );

  /* #endregion */
  /* #region  //! pivotGlue */

  const pivotGlueTop = new THREE.Object3D();
  pivotGlueTop.add(sideGlueTop);
  pivotGlueTop.position.y = (C - B / 2) | 0;

  const pivotGlueBottom = new THREE.Object3D();
  pivotGlueBottom.add(sideGlueBottom);
  pivotGlueBottom.position.y = -(B / 2 + 15) | 0;

  const pivotGlueCenterLid = new THREE.Object3D();
  pivotGlueCenterLid.add(sideGlueCenterLid, pivotGlueBottom);
  pivotGlueCenterLid.rotation.y = Math.PI;
  pivotGlueCenterLid.position.x = G;

  const pivotGlueCenter = new THREE.Object3D();
  pivotGlueCenter.add(sideGlueCenter, pivotGlueCenterLid);
  pivotGlueCenter.rotation.y = Math.PI;
  pivotGlueCenter.position.set(G, -(B / 2), 0);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, pivotGlueTop, pivotGlueCenter);
  pivotGlueLid.position.x = -G;

  /* #endregion */
  /* #region  //! pivotABack */

  const pivotABack = new THREE.Object3D();
  // pivotABack.add(pivotAFront.clone(), pivotGlueLid);
  pivotABack.position.x = (-A - B) | 0;

  /* #endregion */

  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(pivotAFront, pivotABack);
  scene.add(pivotGroupAll);

  /* #endregion */

  rotation1(
    pivotBRightL,
    pivotATop,
    pivotSideBLeftTop,
    pivotSideBRightTop,
    pivotBLeftBottom,
    pivotBRightBottom,
    pivotABottomLeft,
    pivotABottomRight,
    pivotABottom,
    pivotBLeftR,
    pivotBLeftTop,
    pivotBLeftRBottom
  );
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
