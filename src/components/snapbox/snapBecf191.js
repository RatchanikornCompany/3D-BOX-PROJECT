import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import 'antd/dist/antd.css';

import {
  getLidCover,
  getGlueLid,
  getLRLid,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './models';
import { getEdges } from './edges';
import { foldBox, expandBox } from './animate';

let controls, renderer, scene, camera;

let A = 100; //  กว้าง
let B = 50; //  ลึก
let C = 150; //  สูง

let O = 1; //  ความโปร่งแสง

const F = 32; //  ลิ้นกันฝุ่น ค่า Defualt  (A / 100) * F
const P = 15; //  ความกว้างเฉพาะด้านของฝาเสียบกาว

const G = 15; //  ประกาว
const gSlope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt

let pivot_Bottom_lid;
let pivot_Group_bottom;
let pivot_lid_B_left;
let pivot_lid_B_left_d;
let pivot_B_left;
let pivot_Top_lid;
let pivot_Top;
let pivot_glue_Lid;
let pivot_A_back;
let pivot_lid_B_right;
let pivot_lid_B_right_d;
let pivot_B_right;

let getPivotBottomLid;
let getPivotGroupBottom;
let getPivotLidBLeft;
let getPivotLidBLeftD;
let getPivotBLeft;
let getPivotTopLid;
let getPivotTop;
let getPivotGlueLid;
let getPivotABack;
let getPivotLidBRight;
let getPivotLidBRightD;
let getPivotBRight;

const init = () => {
  /* #region  //? Three-3D Renderer */

  /* #region  //? Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  //? Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  //? axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  //? Material */

  const material = new THREE.MeshPhongMaterial({
    //   MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  //? WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  //? The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  //? Spotlights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  //? GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก */

  /* #region  //* side_A_front */

  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material);

  /* #endregion */
  /* #region  //* side_A_back */

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material);
  side_A_back.rotation.y = Math.PI;

  const side_glue_Lid = new THREE.Mesh(getGlueLid(C, G, gSlope), material);
  side_glue_Lid.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  //* side_Bottom */

  const side_Bottom = new THREE.Mesh(getPlaneTopBottomShape(A, B), material);

  const side_lid_Bottom = new THREE.Mesh(getLidCover(A, P), material);

  /* #endregion */
  /* #region  //* side_B_left */

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material);
  side_B_left.position.x = -B;

  const side_lid_B_left = new THREE.Mesh(getLRLid(B, F), material);
  side_lid_B_left.rotation.y = Math.PI;

  const side_B_left_d = new THREE.Mesh(getLRLid(B, F), material);
  side_B_left_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_right */

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material);

  const side_lid_B_right = new THREE.Mesh(getLRLid(B, F), material);

  const side_B_right_d = new THREE.Mesh(getLRLid(B, F), material);
  side_B_right_d.rotation.set(Math.PI, Math.PI, 0);

  const side_lid_Cover = new THREE.Mesh(getLidCover(A, P), material);
  side_lid_Cover.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_Top */

  const side_Top = new THREE.Mesh(getPlaneTopBottomShape(A, B), material);

  const side_Top_lid = new THREE.Mesh(getLidCover(A, P), material);
  side_Top_lid.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivot_A_front */
  /* #region  //! pivot_Group_bottom */

  const pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom);
  pivot_Bottom.rotation.x = Math.PI;

  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_lid_Bottom);
  pivot_Bottom_lid.position.y = -B;

  pivot_Group_bottom = new THREE.Object3D();
  pivot_Group_bottom.add(pivot_Bottom, pivot_Bottom_lid);

  /* #endregion */

  const pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_Group_bottom);

  /* #endregion */
  /* #region  //! pivot_B_left */

  /* #region  //! pivot_group_A_back */

  /* #region  //* pivot_Top */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.position.y = B;
  pivot_Top_lid.add(side_Top_lid);

  pivot_Top = new THREE.Object3D();
  pivot_Top.position.set(-A, C, 0);
  pivot_Top.add(side_Top, pivot_Top_lid);

  /* #endregion */
  /* #region  //* pivot_A_back */

  pivot_glue_Lid = new THREE.Object3D();
  pivot_glue_Lid.position.x = -A;
  pivot_glue_Lid.add(side_glue_Lid);

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(side_A_back, pivot_glue_Lid, pivot_Top);

  /* #endregion */

  const pivot_group_A_back = new THREE.Object3D();
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
  /* #region  //! pivot_B_right */

  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.position.y = C;
  pivot_lid_B_right.add(side_lid_B_right);

  pivot_lid_B_right_d = new THREE.Object3D();
  pivot_lid_B_right_d.add(side_B_right_d);
  pivot_lid_B_right_d.position.x = B;

  const pivot_group_B_right_d = new THREE.Object3D();
  pivot_group_B_right_d.add(pivot_lid_B_right_d);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.position.x = A;
  pivot_B_right.add(pivot_lid_B_right, side_B_right, pivot_group_B_right_d);

  /* #endregion */

  /* #endregion */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_All);

  const pivotGroupEdges = new THREE.Group();
  pivotGroupEdges.add(getEdges(A, B, C, F, P, G, gSlope));
  scene.add(pivotGroupEdges);

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
};

const edges = (
  pivot_Bottom_lid,
  pivot_Group_bottom,
  pivot_lid_B_left,
  pivot_lid_B_left_d,
  pivot_B_left,
  pivot_Top_lid,
  pivot_Top,
  pivot_glue_Lid,
  pivot_A_back,
  pivot_lid_B_right,
  pivot_lid_B_right_d,
  pivot_B_right
) => {
  getPivotBottomLid = pivot_Bottom_lid;
  getPivotGroupBottom = pivot_Group_bottom;
  getPivotLidBLeft = pivot_lid_B_left;
  getPivotLidBLeftD = pivot_lid_B_left_d;
  getPivotBLeft = pivot_B_left;
  getPivotTopLid = pivot_Top_lid;
  getPivotTop = pivot_Top;
  getPivotGlueLid = pivot_glue_Lid;
  getPivotABack = pivot_A_back;
  getPivotLidBRight = pivot_lid_B_right;
  getPivotLidBRightD = pivot_lid_B_right_d;
  getPivotBRight = pivot_B_right;
};

const rotations = (value) => {
  value
    ? foldBox(
        pivot_Bottom_lid,
        pivot_Group_bottom,
        pivot_lid_B_left,
        pivot_lid_B_left_d,
        pivot_B_left,
        pivot_Top_lid,
        pivot_Top,
        pivot_glue_Lid,
        pivot_A_back,
        pivot_lid_B_right,
        pivot_lid_B_right_d,
        pivot_B_right,
        getPivotBottomLid,
        getPivotGroupBottom,
        getPivotLidBLeft,
        getPivotLidBLeftD,
        getPivotBLeft,
        getPivotTopLid,
        getPivotTop,
        getPivotGlueLid,
        getPivotABack,
        getPivotLidBRight,
        getPivotLidBRightD,
        getPivotBRight
      )
    : expandBox(
        pivot_Bottom_lid,
        pivot_Group_bottom,
        pivot_lid_B_left,
        pivot_lid_B_left_d,
        pivot_B_left,
        pivot_Top_lid,
        pivot_Top,
        pivot_glue_Lid,
        pivot_A_back,
        pivot_lid_B_right,
        pivot_lid_B_right_d,
        pivot_B_right,
        getPivotBottomLid,
        getPivotGroupBottom,
        getPivotLidBLeft,
        getPivotLidBLeftD,
        getPivotBLeft,
        getPivotTopLid,
        getPivotTop,
        getPivotGlueLid,
        getPivotABack,
        getPivotLidBRight,
        getPivotLidBRightD,
        getPivotBRight
      );
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
  edges,
  rotations,
  updateSize,
};
