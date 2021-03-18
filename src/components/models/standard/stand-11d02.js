/* #region  //* Variable */

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { gsap } from 'gsap';

import rotateObject from '../../function/rotateObject';
import texture from '../../function/texture';
import assignUVs from '../../function/assignUVs';

import pictureAInput from '../../pic/a.png';
import pictureBInput from '../../pic/b.png';
import pictureCInput from '../../pic/c.png';

const A = 250;
const B = 380;
const C = 220;

const aModel = 250;
const bModel = 380;
const cModel = 22;
const Floor = 3;

const G = 30;
const g_slope = 4;

const O = 1;

let modelObj;
let boxHelper;
let calcArea;
let img;
let unit = 'mm';

let tween;
let face;

let side_A_front;
let side_A_top_front;
let side_A_bottom_front;
let side_Glue_lid;
let side_B_left;
let side_B_top_left;
let side_B_right;

let pivot_A_top_front;
let pivot_A_bottom_front;
let pivot_A_front;
let pivot_A_top_back;
let pivot_A_bottom_back;
let pivot_Glue_lid;
let pivot_A_back;
let pivot_top_B_left;
let pivot_bottom_B_left;
let pivot_B_left;
let pivot_top_B_right;
let pivot_bottom_B_right;
let pivot_B_right;
let pivot_all;

let side_A_Front_line;
let side_A_Back_line;
let side_B_Left_upperline;
let side_B_Right_upperline;
let side_B_Left_underline;
let side_B_Right_underline;
let line_all;

/* #endregion */

/* #region  //* ฟังก์ชั่น */

/* #region  //* rotations */

/* #region  //* พับกล่อง */

const rotations1 = () => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_A_front */

  /* #region  //* pivot_A_top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_front.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_top_front.y = C - 2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_front.y = 2.5),
    z: (pivot_A_bottom_front.z = 0),
  });

  /* #endregion */
  /* #region  //* pivot_A_back */

  /* #region  //* pivot_A_top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_back.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_top_back.y = C - 2.5),
    z: (pivot_A_top_back.z = -2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_back.y = 2.5),
    z: (pivot_A_bottom_back.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid.x = -A + 2.5),
    z: (pivot_Glue_lid.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_B_left */

  /* #region  //* pivot_top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivot_top_B_left.x = ((Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.position, {
    duration: 10,
    ease: 'power4.in',
    y: (pivot_top_B_left.y = C - 2.5),
    z: (pivot_top_B_left.z = -2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_left.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_bottom_B_left.y = 2.5),
    z: (pivot_bottom_B_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_B_right */

  /* #region  //* pivot_top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivot_top_B_right.x = (-(Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.position, {
    duration: 10,
    ease: 'power4.in',
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right.x = A - 2.5),
    z: (pivot_B_right.z = 0),
  });

  /* #endregion */
  /* #region  //* removeObjects */

  // scene.remove(line_all);

  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  //* กางกล่อง */

const rotations2 = () => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_A_front */

  /* #region  //* pivot_A_top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_front.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_front.y = 0),
    z: (pivot_A_bottom_front.z = -2.5),
  });

  /* #endregion */
  /* #region  //* pivot_A_back */

  /* #region  //* pivot_A_top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_back.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_back.y = 0),
    z: (pivot_A_bottom_back.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.position, {
    duration: 5,
    ease: 'power4.in',
    z: (pivot_Glue_lid.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_B_left */

  /* #region  //* pivot_top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_top_B_left.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_left.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_bottom_B_left.y = 0),
    z: (pivot_bottom_B_left.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_B_right */

  /* #region  //* pivot_top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_top_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_top_B_right.y = C),
    z: (pivot_top_B_right.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_right.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right.x = A),
    z: (pivot_B_right.z = -2.5),
  });

  /* #endregion */
  /* #region  //* addObjects */

  setTimeout(() => {
    // scene.add(line_all);
  }, 8000);

  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  //* updateSize */

const updateSize = (a, b, c, amodel, bmodel, cmodel, floor, o) => {
  A = a;
  B = b;
  C = c;
  aModel = amodel;
  bModel = bmodel;
  cModel = cmodel;
  Floor = floor;
  O = o;

  const initDiv = document.getElementById('webgl');
  const newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('init').appendChild(newDiv);

  return init();
};

/* #endregion */
/* #region  //* modelCosmeticTube */

const modelCosmeticTube = () => {
  const OBJFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.obj';
  const MTLFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.mtl';
  const JPGFile = '#';

  new MTLLoader().load(MTLFile, function (materials) {
    materials.preload();
    new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
      //*  Scale & Position
      object.scale.set(1, 1, 1);
      object.position.set(2.5, 0, -2.6);

      const box = new THREE.Box3().setFromObject(object);
      const box3Helper = new THREE.Box3Helper(box);
      box3Helper.name = 'box3Helper';

      boxHelper = box3Helper;

      const texture = new THREE.TextureLoader().load(JPGFile);

      object.traverse(function (child) {
        //*  Set Texture
        child.name = 'Texture';
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });

      const threedModel = new THREE.Group();
      threedModel.name = '3DModel';
      threedModel.add(box3Helper, object);
      // scene.add(threedModel);

      modelObj = threedModel;
    });
  });
};

/* #endregion */
/* #region  //* delModelCosmeticTube */

const delModelCosmeticTube = () => {
  // scene.remove(modelObj);
  // scene.remove(boxHelper);
};

/* #endregion */
/* #region  //* calVolume */

const calVolume = () => {
  const Vs = (Math.abs(A - 5) * Math.abs(B - 5) * C) / 1000; // ค่าปริมาตรของกล่องลูกฟูก
  const Vn = (aModel * bModel * cModel) / 1000; // ค่าปริมาตรของกล่องที่จะบรรจุ

  const BCM = (Vs / Vn) | 0; // จำนวนกล่องที่สามารถบรรจุได้
  const BCMofFloor = (BCM / Floor) | 0; // จำนวนกล่องที่สามารถบรรจุได้ในแต่ล่ะชั้น

  const numRow = 0;

  //*  นับจำนวน Row
  for (let i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
    numRow = numRow + 1;
  }

  //*  Area
  calcArea = BCMofFloor * Floor * (numRow - 1);

  if (calcArea >= 1 && calcArea <= 500) {
    //*  Row
    const row = [];

    row.push(new THREE.Vector3(2.5, 0, -2.5));
    row.push(new THREE.Vector3(2.5, C, -2.5));

    const row_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(row),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    row_line.name = 'line_row';
    row_line.computeLineDistances();

    const line_row = new THREE.Line();
    line_row.add(row_line);

    for (let i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
      for (const k = 0; k <= B; k += Math.abs((B - 5) / BCMofFloor)) {
        const cloneRow = new THREE.Line();
        cloneRow.name = 'cloneRow';
        // cloneRow.add(row_line.clone());
        cloneRow.position.set(i, 0, -k);
        // scene.add(cloneRow);
      }
    }

    //*  Column
    const column = [];

    for (let i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
      column.push(new THREE.Vector3(i, 0, 0));
      column.push(new THREE.Vector3(i, 0, -B + 5));
      column.push(new THREE.Vector3(0, 0, -B + 5));
      column.push(new THREE.Vector3(0, 0, 0));
    }

    const column_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(column),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    column_line.name = 'line_column';
    column_line.computeLineDistances();

    const line_column = new THREE.Line();
    line_column.add();

    for (const j = 0; j <= C; j += C / Floor) {
      const cloneColumn = new THREE.Line();
      cloneColumn.name = 'cloneColumn';
      // cloneColumn.add(column_line.clone());
      cloneColumn.position.set(2.5, j, -2.5);
      // scene.add(cloneColumn);
    }

    //*  Depth
    const depth = [];

    for (let i = 0; i <= B; i += Math.abs((B - 5) / BCMofFloor)) {
      depth.push(new THREE.Vector3(A - 5, 0, 0));
      depth.push(new THREE.Vector3(A - 5, 0, -i));
      depth.push(new THREE.Vector3(0, 0, -i));
      depth.push(new THREE.Vector3(0, 0, 0));
    }

    const depth_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(depth),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    depth_line.name = 'depth_line';
    depth_line.computeLineDistances();

    const line_depth = new THREE.Line();
    line_depth.add(depth_line);
    line_depth.name = 'line_depth';

    for (const j = 0; j <= C; j += C / Floor) {
      const cloneDepth = new THREE.Line();
      cloneDepth.name = 'cloneDepth';
      // cloneDepth.add(line_depth.clone());
      cloneDepth.position.set(2.5, j, -2.5);
      // scene.add(cloneDepth);
    }

    /* #region  //* pivot_A_front */

    /* #region  //* pivot_A_top_front */

    pivot_A_top_front.rotation.x = ((Math.PI / 180) * 91) / 2;

    pivot_A_top_front.position.y = C - 2.5;

    /* #endregion */

    pivot_A_bottom_front.rotation.x = -(Math.PI / 180) * 89;

    pivot_A_bottom_front.position.y = 2.5;
    pivot_A_bottom_front.position.z = 0;

    /* #endregion */
    /* #region  //* pivot_A_back */

    /* #region  //* pivot_A_top_back */

    pivot_A_top_back.rotation.x = ((Math.PI / 180) * 91) / 2;

    pivot_A_top_back.position.y = C - 2.5;
    pivot_A_top_back.position.z = -2.5;

    /* #endregion */

    pivot_A_bottom_back.rotation.x = -(Math.PI / 180) * 89;

    pivot_A_bottom_back.position.y = 2.5;
    pivot_A_bottom_back.position.z = 0;

    pivot_Glue_lid.rotation.y = (Math.PI / 180) * -90;

    pivot_Glue_lid.position.x = -A + 2.5;
    pivot_Glue_lid.position.z = -2.5;

    pivot_A_back.rotation.y = -Math.PI / 2;

    /* #endregion */
    /* #region  //* pivot_B_left */

    /* #region  //* pivot_top_B_left */

    pivot_top_B_left.rotation.x = ((Math.PI / 180) * 89) / 2;

    pivot_top_B_left.position.y = C - 2.5;
    pivot_top_B_left.position.z = -2.5;

    /* #endregion */

    pivot_bottom_B_left.rotation.x = -(Math.PI / 180) * 91;

    pivot_bottom_B_left.position.y = 2.5;
    pivot_bottom_B_left.position.z = 0;

    pivot_B_left.rotation.y = -Math.PI / 2;

    /* #endregion */
    /* #region  //* pivot_B_right */

    /* #region  //* pivot_top_B_right */

    pivot_top_B_right.rotation.x = (-(Math.PI / 180) * 89) / 2;

    /* #endregion */

    pivot_bottom_B_right.rotation.x = (Math.PI / 180) * 91;

    pivot_B_right.rotation.y = -Math.PI / 2;

    pivot_B_right.position.x = A - 2.5;
    pivot_B_right.position.z = 0;

    /* #endregion */
    /* #region  //* removeObjects */
    // scene.remove(line_all);
    /* #endregion */

    //*  model
    /* #region  //* model */

    //*  Plane
    const modelShape = new THREE.Geometry();
    modelShape.vertices.push(
      new THREE.Vector3(0, 0, 0), // 0
      new THREE.Vector3((A - 5) / BCMofFloor, 0, 0), // 1
      new THREE.Vector3((A - 5) / BCMofFloor, 0, (-B + 5) / (numRow - 1)), // 2,
      new THREE.Vector3(0, 0, (-B + 5) / (numRow - 1)), // 3,

      new THREE.Vector3(
        (A - 5) / BCMofFloor,
        C / Floor,
        (-B + 5) / (numRow - 1)
      ), // 4,
      new THREE.Vector3(0, C / Floor, (-B + 5) / (numRow - 1)), // 5,
      new THREE.Vector3(0, C / Floor, 0), // 6
      new THREE.Vector3((A - 5) / BCMofFloor, C / Floor, 0) // 7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    modelShape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    modelShape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    modelShape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    modelShape.faces.push(face);

    //*  Top Plane
    face = new THREE.Face3(0, 1, 3);
    face.materialindex = 2;
    modelShape.faces.push(face);
    face = new THREE.Face3(3, 2, 1);
    face.materialindex = 2;
    modelShape.faces.push(face);

    //*  Bottom Plane
    face = new THREE.Face3(6, 7, 5);
    face.materialindex = 3;
    modelShape.faces.push(face);
    face = new THREE.Face3(5, 4, 7);
    face.materialindex = 3;
    modelShape.faces.push(face);

    //*  Left Plane
    face = new THREE.Face3(0, 3, 6);
    face.materialindex = 4;
    modelShape.faces.push(face);
    face = new THREE.Face3(6, 5, 3);
    face.materialindex = 4;
    modelShape.faces.push(face);

    //*  Right Plane
    face = new THREE.Face3(1, 2, 7);
    face.materialindex = 5;
    modelShape.faces.push(face);
    face = new THREE.Face3(7, 4, 2);
    face.materialindex = 5;
    modelShape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา

    //*  Front Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Back Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Top Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    //*  Bottom Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    //*  Left Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Right Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    modelShape.computeFaceNormals();

    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      map: new THREE.TextureLoader().load(img),
    });

    const model = new THREE.Mesh(modelShape, material);
    model.name = 'model';
    model.position.set(2.5, 0, -2.5);

    for (
      let i = 0;
      i <= A - (A - 5) / BCMofFloor;
      i += Math.abs((A - 5) / BCMofFloor)
    ) {
      for (const j = 0; j <= C - C / Floor; j += Math.abs(C / Floor)) {
        for (
          const k = 0;
          k <= B - (B - 5) / (numRow - 1);
          k += Math.abs((B - 5) / (numRow - 1))
        ) {
          const cloneModel = new THREE.Object3D();
          cloneModel.name = 'cloneModel';
          // cloneModel.add(model.clone());
          cloneModel.position.set(i, j, -k);
          // scene.add(cloneModel);
        }
      }
    }

    /* #endregion */
  }

  // console.log(
  //   `
  //   Vs (ปริมาตรกล่อง) :                                       ${Vs} cm^3
  //   Vn (ปริมาตรสิ่งของ):                                       ${Vn} cm^3
  //   Floor :                                                 ${Floor} ชั้น

  //   BCM (จำนวนที่สามารถบรรจุ) :                                ${BCM} ชิ้น
  //   BCM of floor (จำนวนที่สามารถบรรจุแต่ล่ะชั้น) :                 ${BCMofFloor} ชิ้น
  //   BCM of Area : BCMofFloor[${BCMofFloor}] * Floor[${Floor}] * numRow[${
  //     numRow - 1
  //   }]      ${
  //     BCMofFloor * Floor * (numRow - 1)
  //   } ชิ้น   (จำนวนที่สามารถบรรจุ พื้นที่ จำนวนที่สามารถบรรจุแต่ละแถว x ชั้น x จำนวนแถว)
  //   `
  // );

  return calcArea;
};

/* #endregion */
/* #region  //* saveIMG */
const saveIMG = (value) => {
  img = value;
};
/* #endregion */

/* #endregion */

const init = (value) => {
  //*  Plane
  const plane_A_side_shape = new THREE.Geometry();
  plane_A_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(A, 0, 0), // 1
    new THREE.Vector3(A, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(A, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(A, C, 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_side_shape.computeFaceNormals();

  const plane_A_side = new THREE.Mesh(
    plane_A_side_shape,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
      map: texture,
    })
  );
  plane_A_side.name = 'plane_A_side';

  //* Corrugate
  const points_a = [];

  points_a.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
    points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_a = new THREE.CatmullRomCurve3(points_a);

  const points_A_curve = curve_a.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(new THREE.Path().setFromPoints(points_A_curve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugate_a = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(
    corrugate_a,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
      map: texture,
    })
  );
  plane_A_corrugated.name = 'plane_A_corrugated';
  plane_A_corrugated.position.z = -0.1;
  rotateObject(plane_A_corrugated, -90);

  const side_A_front = new THREE.Group();
  side_A_front.name = 'side_A_front';
  side_A_front.add(plane_A_side, plane_A_corrugated);

  return side_A_front;

  // /* #region  //* Material */

  // const material = new THREE.MeshPhongMaterial({
  //   color: 0xffffff,
  //   side: THREE.DoubleSide,
  //   wireframe: false,
  //   opacity: O,
  //   transparent: true,
  //   map: texture,
  // });

  // const extrudeSettings = {
  //   depth: C,
  //   bevelEnabled: true,
  //   bevelSegments: 0,
  //   steps: 2,
  //   bevelSize: 0,
  //   bevelThickness: 1,
  // };

  // const extrudeSettings_A_Top_bottom = {
  //   depth: (B - 130) / 2,
  //   bevelEnabled: true,
  //   bevelSegments: 0,
  //   steps: 2,
  //   bevelSize: 0,
  //   bevelThickness: 1,
  // };

  // const extrudeSettings_B_Top_bottom = {
  //   depth: Math.abs(A / 2 - 1),
  //   bevelEnabled: true,
  //   bevelSegments: 0,
  //   steps: 2,
  //   bevelSize: 0,
  //   bevelThickness: 1,
  // };

  // const extrudeSettings_g = {
  //   depth: C - 8,
  //   bevelEnabled: true,
  //   bevelSegments: 0,
  //   steps: 2,
  //   bevelSize: 0,
  //   bevelThickness: 1,
  // };

  // /* #endregion */
  // /* #region  //* Model */

  // /* #region  //* หน้า A */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_A_side_shape = new THREE.Geometry();
  // plane_A_side_shape.vertices.push(
  //   new THREE.Vector3(0, 0, 0), // 0
  //   new THREE.Vector3(A, 0, 0), // 1
  //   new THREE.Vector3(A, 0, -2.5), // 2,
  //   new THREE.Vector3(0, 0, -2.5), // 3,

  //   new THREE.Vector3(A, C, -2.5), // 4,
  //   new THREE.Vector3(0, C, -2.5), // 5,
  //   new THREE.Vector3(0, C, 0), // 6
  //   new THREE.Vector3(A, C, 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_A_side_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_A_side_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_A_side_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_A_side_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_A_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_A_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_A_side_shape.computeFaceNormals();

  // const plane_A_side = new THREE.Mesh(plane_A_side_shape, material);
  // plane_A_side.name = 'plane_A_side';

  // /* #endregion */
  // /* #region  //* Corrugate */

  // //* Corrugate
  // const points_a = [];

  // points_a.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
  //   points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_a = new THREE.CatmullRomCurve3(points_a);

  // const points_A_curve = curve_a.getPoints(1000);

  // const corrugated_A_shape = new THREE.Shape();
  // corrugated_A_shape.holes.push(new THREE.Path().setFromPoints(points_A_curve));

  // const corrugate_a = new THREE.ExtrudeGeometry(
  //   corrugated_A_shape,
  //   extrudeSettings
  // );

  // const plane_A_corrugated = new THREE.Mesh(corrugate_a, material);
  // plane_A_corrugated.name = 'plane_A_corrugated';
  // plane_A_corrugated.position.z = -0.1;
  // rotateObject(plane_A_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* หน้า A (หลัง) */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_A_back_shape = new THREE.Geometry();
  // plane_A_back_shape.vertices.push(
  //   new THREE.Vector3(0, 0, 0), // 0
  //   new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
  //   new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
  //   new THREE.Vector3(0, 0, -2.5), // 3,

  //   new THREE.Vector3(Math.abs(A - 2.5), C, -2.5), // 4,
  //   new THREE.Vector3(0, C, -2.5), // 5,
  //   new THREE.Vector3(0, C, 0), // 6
  //   new THREE.Vector3(Math.abs(A - 2.5), C, 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_A_back_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_A_back_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_A_back_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_A_back_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_A_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_A_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_A_back_shape.computeFaceNormals();

  // const plane_A_back = new THREE.Mesh(plane_A_back_shape, material);
  // plane_A_back.name = 'plane_A_back';

  // /* #endregion */
  // /* #region  //* Corrugate */

  // //*  Corrugate
  // const points_A_back = [];

  // points_A_back.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
  //   points_A_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

  // const points_A_back_curve = curve_A_back.getPoints(1000);

  // const corrugated_A_back_shape = new THREE.Shape();
  // corrugated_A_back_shape.holes.push(
  //   new THREE.Path().setFromPoints(points_A_back_curve)
  // );

  // const corrugate_A_back = new THREE.ExtrudeGeometry(
  //   corrugated_A_back_shape,
  //   extrudeSettings
  // );

  // const plane_A_back_corrugated = new THREE.Mesh(corrugate_A_back, material);
  // plane_A_back_corrugated.name = 'plane_A_back_corrugated';
  // plane_A_back_corrugated.position.z = -0.1;
  // rotateObject(plane_A_back_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* หน้า B */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_B_side_shape = new THREE.Geometry();
  // plane_B_side_shape.vertices.push(
  //   new THREE.Vector3(0, 0, 0), // 0
  //   new THREE.Vector3(B, 0, 0), // 1
  //   new THREE.Vector3(B, 0, -2.5), // 2,
  //   new THREE.Vector3(0, 0, -2.5), // 3,

  //   new THREE.Vector3(B, C, -2.5), // 4,
  //   new THREE.Vector3(0, C, -2.5), // 5,
  //   new THREE.Vector3(0, C, 0), // 6
  //   new THREE.Vector3(B, C, 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_B_side_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_B_side_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_B_side_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_B_side_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_B_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_B_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_B_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_B_side_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_B_side_shape.computeFaceNormals();

  // const plane_B_side = new THREE.Mesh(plane_B_side_shape, material);
  // plane_B_side.name = 'plane_B_side';

  // /* #endregion */
  // /* #region  //* Corrgugate */

  // //*  Corrgugate
  // const points_b = [];

  // points_b.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((B - 2.5) / 2); i += 2.5) {
  //   points_b.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_b.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_b = new THREE.CatmullRomCurve3(points_b);

  // const points_B_curve = curve_b.getPoints(1000);

  // const corrugated_B_shape = new THREE.Shape();
  // corrugated_B_shape.holes.push(new THREE.Path().setFromPoints(points_B_curve));

  // const corrugate_b = new THREE.ExtrudeGeometry(
  //   corrugated_B_shape,
  //   extrudeSettings
  // );

  // const plane_B_corrugated = new THREE.Mesh(corrugate_b, material);
  // plane_B_corrugated.name = 'plane_B_corrugated';
  // plane_B_corrugated.position.z = -0.1;
  // rotateObject(plane_B_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* บน-ล่าง A */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_A_top_bottom_shape = new THREE.Geometry();
  // plane_A_top_bottom_shape.vertices.push(
  //   new THREE.Vector3(2.5, 0, 0), // 0
  //   new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
  //   new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
  //   new THREE.Vector3(2.5, 0, -2.5), // 3,

  //   new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), -2.5), // 4,
  //   new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
  //   new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
  //   new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_A_top_bottom_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_A_top_bottom_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_A_top_bottom_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_A_top_bottom_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_A_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_A_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_A_top_bottom_shape.computeFaceNormals();

  // const plane_A_top_bottom = new THREE.Mesh(plane_A_top_bottom_shape, material);
  // plane_A_top_bottom.name = 'plane_A_top_bottom';

  // /* #endregion */
  // /* #region  //* Corrgugate */

  // //*  Corrgugate
  // const points_A_top_bottom = [];

  // points_A_top_bottom.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
  //   points_A_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_A_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_A_top_bottom = new THREE.CatmullRomCurve3(points_A_top_bottom);

  // const points_A_top_bottom_curve = curve_A_top_bottom.getPoints(1000);

  // const corrugated_A_top_bottom_shape = new THREE.Shape();
  // corrugated_A_top_bottom_shape.holes.push(
  //   new THREE.Path().setFromPoints(points_A_top_bottom_curve)
  // );

  // const corrugated_A_top_bottom = new THREE.ExtrudeGeometry(
  //   corrugated_A_top_bottom_shape,
  //   extrudeSettings_A_Top_bottom
  // );

  // const plane_A_top_bottom_corrugated = new THREE.Mesh(
  //   corrugated_A_top_bottom,
  //   material
  // );
  // plane_A_top_bottom_corrugated.name = 'plane_A_top_bottom_corrugated';
  // plane_A_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  // rotateObject(plane_A_top_bottom_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* บน-ล่าง A (หลัง) */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_A_top_bottom_back_shape = new THREE.Geometry();
  // plane_A_top_bottom_back_shape.vertices.push(
  //   new THREE.Vector3(2.5, 0, 0), // 0
  //   new THREE.Vector3(Math.abs(A - 5), 0, 0), // 1
  //   new THREE.Vector3(Math.abs(A - 5), 0, -2.5), // 2,
  //   new THREE.Vector3(2.5, 0, -2.5), // 3,

  //   new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), -2.5), // 4,
  //   new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
  //   new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
  //   new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_A_top_bottom_back_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_A_top_bottom_back_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_A_top_bottom_back_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_A_top_bottom_back_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_A_top_bottom_back_shape.computeFaceNormals();

  // const plane_A_top_bottom_back = new THREE.Mesh(
  //   plane_A_top_bottom_back_shape,
  //   material
  // );
  // plane_A_top_bottom_back.name = 'plane_A_top_bottom_back';
  // plane_A_top_bottom_back.position.x = 2.5;

  // /* #endregion */
  // /* #region  //* Corrgugate */

  // //*  Corrgugate
  // const points_A_top_bottom_back = [];

  // points_A_top_bottom_back.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((A - 12.5) / 2); i += 2.5) {
  //   points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_A_top_bottom_back = new THREE.CatmullRomCurve3(
  //   points_A_top_bottom_back
  // );

  // const points_A_top_bottom_back_curve = curve_A_top_bottom_back.getPoints(
  //   1000
  // );

  // const corrugated_A_top_bottom_back_shape = new THREE.Shape();
  // corrugated_A_top_bottom_back_shape.holes.push(
  //   new THREE.Path().setFromPoints(points_A_top_bottom_back_curve)
  // );

  // const corrugated_A_top_bottom_back = new THREE.ExtrudeGeometry(
  //   corrugated_A_top_bottom_back_shape,
  //   extrudeSettings_A_Top_bottom
  // );

  // const plane_A_top_bottom_back_corrugated = new THREE.Mesh(
  //   corrugated_A_top_bottom_back,
  //   material
  // );
  // plane_A_top_bottom_back_corrugated.name =
  //   'plane_A_top_bottom_back_corrugated';
  // plane_A_top_bottom_back_corrugated.position.set(5, 0, -0.1);
  // rotateObject(plane_A_top_bottom_back_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* บน-ล่าง B */

  // /* #region  //* Plane */

  // //*  Plane
  // const plane_B_top_bottom_shape = new THREE.Geometry();
  // plane_B_top_bottom_shape.vertices.push(
  //   new THREE.Vector3(2.5, 0, 0), // 0
  //   new THREE.Vector3(Math.abs(B - 2.5), 0, 0), // 1
  //   new THREE.Vector3(Math.abs(B - 2.5), 0, -2.5), // 2,
  //   new THREE.Vector3(2.5, 0, -2.5), // 3,

  //   new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), -2.5), // 4,
  //   new THREE.Vector3(2.5, Math.abs(A / 2 - 1), -2.5), // 5,
  //   new THREE.Vector3(2.5, Math.abs(A / 2 - 1), 0), // 6
  //   new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), 0) // 7
  // );

  // //*  Front Plane
  // face = new THREE.Face3(0, 1, 6);
  // face.materialindex = 0;
  // plane_B_top_bottom_shape.faces.push(face);
  // face = new THREE.Face3(6, 7, 1);
  // face.materialindex = 0;
  // plane_B_top_bottom_shape.faces.push(face);

  // //*  Back Plane
  // face = new THREE.Face3(3, 2, 5);
  // face.materialindex = 1;
  // plane_B_top_bottom_shape.faces.push(face);
  // face = new THREE.Face3(5, 4, 2);
  // face.materialindex = 1;
  // plane_B_top_bottom_shape.faces.push(face);

  // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  // plane_B_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_B_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);
  // plane_B_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(0, 0),
  //   new THREE.Vector2(0, 1),
  //   new THREE.Vector2(1, 0),
  // ]);
  // plane_B_top_bottom_shape.faceVertexUvs[0].push([
  //   new THREE.Vector2(1, 0),
  //   new THREE.Vector2(1, 1),
  //   new THREE.Vector2(0, 1),
  // ]);

  // plane_B_top_bottom_shape.computeFaceNormals();

  // const plane_B_top_bottom = new THREE.Mesh(plane_B_top_bottom_shape, material);
  // plane_B_top_bottom.name = 'plane_B_top_bottom';

  // /* #endregion */
  // /* #region  //* Corrgugate */

  // //*  Corrgugate
  // const points_B_top_bottom = [];

  // points_B_top_bottom.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((B - 7.5) / 2); i += 2.5) {
  //   points_B_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

  // const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

  // const corrugated_B_top_bottom_shape = new THREE.Shape();
  // corrugated_B_top_bottom_shape.holes.push(
  //   new THREE.Path().setFromPoints(points_B_top_bottom_curve)
  // );

  // const corrugated_B_top_bottom = new THREE.ExtrudeGeometry(
  //   corrugated_B_top_bottom_shape,
  //   extrudeSettings_B_Top_bottom
  // );

  // const plane_B_top_bottom_corrugated = new THREE.Mesh(
  //   corrugated_B_top_bottom,
  //   material
  // );
  // plane_B_top_bottom_corrugated.name = 'plane_B_top_bottom_corrugated';
  // plane_B_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  // rotateObject(plane_B_top_bottom_corrugated, -90);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* ฝาเสียบกาว */

  // /* #region  //* Plane */

  // //*  Plane
  // const glue_Lid_shape = new THREE.Shape();

  // glue_Lid_shape.moveTo(0, 0);
  // glue_Lid_shape.lineTo(g_slope, G);
  // glue_Lid_shape.lineTo(C - g_slope, G);
  // glue_Lid_shape.lineTo(C, 0);

  // const glue_lid = new THREE.ShapeGeometry(glue_Lid_shape);
  // assignUVs(glue_lid);

  // const plane_Glue_lid_front = new THREE.Mesh(glue_lid, material);
  // plane_Glue_lid_front.name = 'plane_Glue_lid_front';
  // rotateObject(plane_Glue_lid_front, 0, 0, 90);

  // const plane_Glue_lid_back = new THREE.Mesh(glue_lid, material);
  // plane_Glue_lid_back.name = 'plane_Glue_lid_back';
  // plane_Glue_lid_back.position.z = -2.5;
  // rotateObject(plane_Glue_lid_back, 0, 0, 90);

  // /* #endregion */
  // /* #region  //* Corrugate */

  // //*  Corrugate

  // const points_G = [];

  // points_G.push(new THREE.Vector3(0, 0));

  // for (let i = 0; i <= Math.abs((G - 2.5) / 2); i += 2.5) {
  //   points_G.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
  //   points_G.push(new THREE.Vector3(i * 2 + 5, 0));
  // }

  // const curve_G = new THREE.CatmullRomCurve3(points_G);

  // const points_G_curve = curve_G.getPoints(1000);

  // const glue_Lid_corrugate_shape = new THREE.Shape();
  // glue_Lid_corrugate_shape.holes.push(
  //   new THREE.Path().setFromPoints(points_G_curve)
  // );

  // const corrugated_Glue_lid = new THREE.ExtrudeGeometry(
  //   glue_Lid_corrugate_shape,
  //   extrudeSettings_g
  // );

  // const plane_Glue_lid_corrugated = new THREE.Mesh(
  //   corrugated_Glue_lid,
  //   material
  // );
  // plane_Glue_lid_corrugated.name = 'plane_Glue_lid_corrugated';
  // plane_Glue_lid_corrugated.position.set(-G, g_slope, -0.1);
  // rotateObject(plane_Glue_lid_corrugated, -90, 0, 0);

  // /* #endregion */

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* Mesh - แกนหมุน */

  // /* #region  //* side_A_front */

  // side_A_front = new THREE.Group();
  // side_A_front.name = 'side_A_front';
  // side_A_front.add(plane_A_side, plane_A_corrugated);

  // side_A_top_front = new THREE.Group();
  // side_A_top_front.name = 'side_A_top_front';
  // side_A_top_front.add(plane_A_top_bottom, plane_A_top_bottom_corrugated);

  // side_A_bottom_front = new THREE.Group();
  // side_A_bottom_front.name = 'side_A_bottom_front';
  // // side_A_bottom_front.add(side_A_top_front.clone());

  // /* #endregion */
  // /* #region  //* side_A_back */

  // const side_A_top_back = new THREE.Group();
  // side_A_top_back.name = 'side_A_top_back';
  // side_A_top_back.add(
  //   plane_A_top_bottom_back,
  //   plane_A_top_bottom_back_corrugated
  // );

  // const side_A_back = new THREE.Group();
  // side_A_back.name = 'side_A_back';
  // side_A_back.add(plane_A_back, plane_A_back_corrugated);
  // side_A_back.position.x = -A + 2.5;

  // side_Glue_lid = new THREE.Group();
  // side_Glue_lid.name = 'side_Glue_lid';
  // side_Glue_lid.add(
  //   plane_Glue_lid_front,
  //   plane_Glue_lid_back,
  //   plane_Glue_lid_corrugated
  // );

  // /* #endregion */
  // /* #region  //* side_B_left */

  // side_B_left = new THREE.Group();
  // side_B_left.name = 'side_B_left';
  // side_B_left.add(plane_B_side, plane_B_corrugated);
  // side_B_left.position.x = -B;

  // side_B_top_left = new THREE.Group();
  // side_B_top_left.name = 'side_B_top_left';
  // side_B_top_left.add(plane_B_top_bottom, plane_B_top_bottom_corrugated);

  // /* #endregion */
  // /* #region  //* side_B_right */

  // side_B_right = new THREE.Group();
  // side_B_right.name = 'side_B_right';
  // // side_B_right.add(side_B_left.clone());

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* Object3D - จุดหมุน */

  // /* #region  //* pivot_A_front */

  // pivot_A_top_front = new THREE.Object3D();
  // pivot_A_top_front.name = 'pivot_A_top_front';
  // pivot_A_top_front.add(side_A_top_front);
  // pivot_A_top_front.position.y = C;

  // pivot_A_bottom_front = new THREE.Object3D();
  // pivot_A_bottom_front.name = 'pivot_A_bottom_front';
  // pivot_A_bottom_front.add(side_A_bottom_front);
  // pivot_A_bottom_front.position.z = -2.5;
  // rotateObject(pivot_A_bottom_front, -180);

  // pivot_A_front = new THREE.Object3D();
  // pivot_A_front.name = 'pivot_A_front';
  // pivot_A_front.add(side_A_front, pivot_A_top_front, pivot_A_bottom_front);

  // /* #endregion */
  // /* #region  //* pivot_A_back */

  // pivot_A_top_back = new THREE.Object3D();
  // pivot_A_top_back.name = 'pivot_A_top_back';
  // pivot_A_top_back.add(side_A_top_back);
  // pivot_A_top_back.position.set(-A, C, 0);

  // pivot_A_bottom_back = new THREE.Object3D();
  // pivot_A_bottom_back.name = 'pivot_A_bottom_back';
  // // pivot_A_bottom_back.add(side_A_top_back.clone());
  // pivot_A_bottom_back.position.set(-A, 0, -2.5);
  // rotateObject(pivot_A_bottom_back, -180);

  // pivot_Glue_lid = new THREE.Object3D();
  // pivot_Glue_lid.name = 'pivot_Glue_lid';
  // pivot_Glue_lid.add(side_Glue_lid);
  // pivot_Glue_lid.position.x = -A + 2.5;

  // pivot_A_back = new THREE.Object3D();
  // pivot_A_back.name = 'pivot_A_back';
  // pivot_A_back.add(
  //   side_A_back,
  //   pivot_A_top_back,
  //   pivot_A_bottom_back,
  //   pivot_Glue_lid
  // );
  // pivot_A_back.position.x = -B;

  // /* #endregion */
  // /* #region  //* pivot_B_left */

  // pivot_top_B_left = new THREE.Object3D();
  // pivot_top_B_left.name = 'pivot_top_B_left';
  // pivot_top_B_left.add(side_B_top_left);
  // pivot_top_B_left.position.set(-B, C, 0);

  // pivot_bottom_B_left = new THREE.Object3D();
  // pivot_bottom_B_left.name = 'pivot_bottom_B_left';
  // // pivot_bottom_B_left.add(side_B_top_left.clone());
  // pivot_bottom_B_left.position.set(-B, 0, -2.5);
  // rotateObject(pivot_bottom_B_left, -180);

  // pivot_B_left = new THREE.Object3D();
  // pivot_B_left.name = 'pivot_B_left';
  // pivot_B_left.add(
  //   side_B_left,
  //   pivot_top_B_left,
  //   pivot_bottom_B_left,
  //   pivot_A_back
  // );

  // /* #endregion */
  // /* #region  //* pivot_B_right */

  // pivot_top_B_right = new THREE.Object3D();
  // pivot_top_B_right.name = 'pivot_top_B_right';
  // // pivot_top_B_right.add(side_B_top_left.clone());
  // pivot_top_B_right.position.set(-B, C, 0);

  // pivot_bottom_B_right = new THREE.Object3D();
  // pivot_bottom_B_right.name = 'pivot_bottom_B_right';
  // // pivot_bottom_B_right.add(side_B_top_left.clone());
  // pivot_bottom_B_right.position.set(-B, 0, -2.5);
  // rotateObject(pivot_bottom_B_right, 180);

  // pivot_B_right = new THREE.Object3D();
  // pivot_B_right.name = 'pivot_B_right';
  // pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  // pivot_B_right.position.set(A, 0, -2.5);
  // rotateObject(pivot_B_right, 0, 180);

  // /* #endregion */
  // /* #region  //* pivot_all */

  // pivot_all = new THREE.Object3D();
  // pivot_all.name = 'pivot_all';
  // pivot_all.add(pivot_A_front, pivot_B_left, pivot_B_right);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* Dielines - เส้นปะจุดพับ */

  // const side_A_line = [];
  // const side_A_Line_back = [];
  // const side_B_UpperUnder_line = [];
  // const side_B_Upper_R_line = [];

  // side_A_line.push(new THREE.Vector2(0, 0));
  // side_A_line.push(new THREE.Vector2(0, C));
  // side_A_line.push(new THREE.Vector2(A, C));
  // side_A_line.push(new THREE.Vector2(A, 0));
  // side_A_line.push(new THREE.Vector2(0, 0));

  // side_A_Line_back.push(new THREE.Vector2(0, 0));
  // side_A_Line_back.push(new THREE.Vector2(0, C));
  // side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), C));
  // side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), 0));
  // side_A_Line_back.push(new THREE.Vector2(0, 0));

  // side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
  // side_B_UpperUnder_line.push(new THREE.Vector2(B, 0));

  // side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
  // side_B_Upper_R_line.push(new THREE.Vector2(B, 0));
  // side_B_Upper_R_line.push(new THREE.Vector2(B, -C));

  // /* #region  //* side_A_line */

  // side_A_Front_line = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_A_line),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_A_Front_line.computeLineDistances();
  // side_A_Front_line.name = 'side_A_Front_line';

  // side_A_Back_line = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_A_Back_line.computeLineDistances();
  // side_A_Back_line.name = 'side_A_Back_line';
  // side_A_Back_line.position.x = -A - B + 2.5;

  // /* #endregion */
  // /* #region  //* side_B_line */

  // /* #region  //* side_B_upperline */

  // side_B_Left_upperline = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_B_Left_upperline.computeLineDistances();
  // side_B_Left_upperline.name = 'side_B_Left_upperline';
  // side_B_Left_upperline.position.set(-B, C, 0);

  // side_B_Right_upperline = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_B_Right_upperline.computeLineDistances();
  // side_B_Right_upperline.name = 'side_B_Right_upperline';
  // side_B_Right_upperline.position.set(A, C, 0);

  // /* #endregion */
  // /* #region  //* side_B_underline */

  // side_B_Left_underline = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_B_Left_underline.computeLineDistances();
  // side_B_Left_underline.name = 'side_B_Left_underline';
  // side_B_Left_underline.position.x = -B;

  // side_B_Right_underline = new THREE.Line(
  //   new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
  //   new THREE.LineDashedMaterial({
  //     color: '#45a033',
  //     dashSize: 3,
  //     gapSize: 2,
  //   })
  // );
  // side_B_Right_underline.computeLineDistances();
  // side_B_Right_underline.name = 'side_B_Right_underline';
  // side_B_Right_underline.position.x = A;

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* line_all */

  // line_all = new THREE.Line();
  // line_all.name = 'line_all';
  // line_all.add(
  //   side_A_Front_line,
  //   side_A_Back_line,
  //   side_B_Left_upperline,
  //   side_B_Right_upperline,
  //   side_B_Left_underline,
  //   side_B_Right_underline
  // );
  // // scene.add(line_all);

  // /* #endregion */

  // /* #endregion */
  // /* #region  //* Marker - เส้นบอกขนาด */

  // const label = A / 6;
  // const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  // unit = value ? value : 'mm';

  // /* #region  //* Label */

  // const geometry = new THREE.PlaneBufferGeometry(label, label);
  // const loader = new THREE.TextureLoader();

  // const meshLabelA = new THREE.Mesh(
  //   // geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load(pictureAInput) })
  // );

  // const meshLabelB = new THREE.Mesh(
  //   // geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load(pictureBInput) })
  // );

  // const meshLabelC = new THREE.Mesh(
  //   // geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load(pictureCInput) })
  // );

  // const lineMarkA = new THREE.Object3D();
  // lineMarkA.position.set(-(A / 2) - B, C / 2 + label, 2);
  // lineMarkA.add(meshLabelA);

  // const lineMarkB = new THREE.Object3D();
  // lineMarkB.position.set(-(B / 2), C / 2 + label, 2);
  // lineMarkB.add(meshLabelB);

  // const lineMarkC = new THREE.Object3D();
  // lineMarkC.position.set((A - label * 2) / 2, C / 2, 2);
  // lineMarkC.add(meshLabelC);

  // /* #endregion */
  // /* #region  //* Text */
  // const loaderTextA = new THREE.FontLoader();
  // loaderTextA.load('./fonts/helvetiker_regular.typeface.json', function (font) {
  //   const color = 0x00000;
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   });
  //   const message = `${
  //     unit === 'mm'
  //       ? (A / defaultUnit[unit]).toFixed(2)
  //       : (A / defaultUnit[unit]).toFixed(1)
  //   } ${unit}`;
  //   const shapes = font.generateShapes(message, 20);
  //   const geometry = new THREE.ShapeBufferGeometry(shapes);
  //   geometry.computeBoundingBox();

  //   const xMid =
  //     -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  //   geometry.translate(xMid, 0, 0);

  //   const text = new THREE.Mesh(geometry, matLite);
  //   lableA.add(text);
  // });

  // const lableA = new THREE.Object3D();
  // lableA.position.set(-A / 2 - B, C / 2 - 10, 2);

  // //* Start size lable.
  // const lableB = new THREE.Object3D();
  // lableB.position.set(-B / 2, C / 2 - 10, 2);

  // const loaderTextB = new THREE.FontLoader();

  // //* Start load text A.
  // loaderTextB.load('./fonts/helvetiker_regular.typeface.json', function (font) {
  //   const color = 0x00000;
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   });

  //   const message = `${
  //     unit === 'in'
  //       ? (B / defaultUnit[unit]).toFixed(2)
  //       : (B / defaultUnit[unit]).toFixed(1)
  //   } ${unit}`;
  //   const shapes = font.generateShapes(message, 20);
  //   const geometry = new THREE.ShapeBufferGeometry(shapes);
  //   geometry.computeBoundingBox();

  //   const xMid =
  //     -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  //   geometry.translate(xMid, 0, 0);

  //   const text = new THREE.Mesh(geometry, matLite);
  //   lableB.add(text);
  // });

  // //*  Font Loader Function
  // const loaderTextC = new THREE.FontLoader();
  // loaderTextC.load('./fonts/helvetiker_regular.typeface.json', function (font) {
  //   const color = 0x00000;
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   });

  //   //*  Message
  //   const message = `${
  //     unit === 'in'
  //       ? (C / defaultUnit[unit]).toFixed(2)
  //       : (C / defaultUnit[unit]).toFixed(1)
  //   } ${unit}`;
  //   const shapes = font.generateShapes(message, 20);
  //   const geometry = new THREE.ShapeBufferGeometry(shapes);
  //   geometry.computeBoundingBox();

  //   const xMid =
  //     -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  //   geometry.translate(xMid, 0, 0);

  //   //*  Mesh
  //   const text = new THREE.Mesh(geometry, matLite);
  //   lableC.add(text);
  // });

  // //* Position.
  // const lableC = new THREE.Object3D();
  // lableC.position.set(A / 2 + 2 + label, C / 2 - 10, 2);

  // //* Start size lable.
  // const lableWidth = new THREE.Object3D();
  // lableWidth.position.set(-A - B + 4 - G + 10 - C / 4 / 2, C / 2 - 10, 2);
  // rotateObject(lableWidth, 0, 0, 90);

  // const loaderTextWidth = new THREE.FontLoader();

  // //* Start load text A.
  // loaderTextWidth.load(
  //   './fonts/helvetiker_regular.typeface.json',
  //   function (font) {
  //     const color = 0x00000;
  //     const matLite = new THREE.MeshBasicMaterial({
  //       color: color,
  //       transparent: true,
  //       opacity: 1,
  //       side: THREE.DoubleSide,
  //     });

  //     const message = `${
  //       unit === 'in'
  //         ? (C + (125 * 2) / defaultUnit[unit]).toFixed(2)
  //         : (C + (125 * 2) / defaultUnit[unit]).toFixed(1)
  //     } ${unit}`;
  //     const shapes = font.generateShapes(message, 20);
  //     const geometry = new THREE.ShapeBufferGeometry(shapes);
  //     geometry.computeBoundingBox();

  //     const xMid =
  //       -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  //     geometry.translate(xMid, 0, 0);

  //     const text = new THREE.Mesh(geometry, matLite);
  //     lableWidth.add(text);
  //   }
  // );

  // //* Start size lable.
  // const lableHeight = new THREE.Object3D();
  // lableHeight.position.set(0, C + 125 + C / 4 / 2 - 10, 2);

  // const loaderTextHeight = new THREE.FontLoader();

  // //* Start load text A.
  // loaderTextHeight.load(
  //   './fonts/helvetiker_regular.typeface.json',
  //   function (font) {
  //     const color = 0x00000;
  //     const matLite = new THREE.MeshBasicMaterial({
  //       color: color,
  //       transparent: true,
  //       opacity: 1,
  //       side: THREE.DoubleSide,
  //     });

  //     const message = `${
  //       unit === 'in'
  //         ? (C + (125 * 2) / defaultUnit[unit]).toFixed(2)
  //         : (C + (125 * 2) / defaultUnit[unit]).toFixed(1)
  //     } ${unit}`;
  //     const shapes = font.generateShapes(message, 20);
  //     const geometry = new THREE.ShapeBufferGeometry(shapes);
  //     geometry.computeBoundingBox();

  //     const xMid =
  //       -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  //     geometry.translate(xMid, 0, 0);

  //     const text = new THREE.Mesh(geometry, matLite);
  //     lableHeight.add(text);
  //   }
  // );

  // /* #endregion */
  // /* #region  //* Pointer */

  // //*  Arrow Left
  // const arrow_left = (size) => {
  //   const scene = new THREE.Scene();

  //   const arrowHead = new THREE.Shape();
  //   arrowHead.moveTo(0, 0);
  //   arrowHead.lineTo(10, 5);
  //   arrowHead.lineTo(10, -5);
  //   arrowHead.lineTo(0, 0);
  //   const headMesh = new THREE.Mesh(
  //     new THREE.ShapeGeometry(arrowHead),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   const arrow_line = [];
  //   arrow_line.push(new THREE.Vector3(10, 0));
  //   arrow_line.push(new THREE.Vector3(size, 0));
  //   const arrow_mesh = new THREE.Line(
  //     new THREE.BufferGeometry().setFromPoints(arrow_line),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   // scene.add(headMesh, arrow_mesh);
  // };

  // //*  Arrow Right
  // const arrow_right = (size) => {
  //   const scene = new THREE.Scene();

  //   const arrowHead = new THREE.Shape();
  //   arrowHead.moveTo(0, 0);
  //   arrowHead.lineTo(-10, 5);
  //   arrowHead.lineTo(-10, -5);
  //   arrowHead.lineTo(0, 0);
  //   const headMesh = new THREE.Mesh(
  //     new THREE.ShapeGeometry(arrowHead),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   const arrow_line = [];
  //   arrow_line.push(new THREE.Vector3(-10, 0));
  //   arrow_line.push(new THREE.Vector3(-size, 0));
  //   const arrow_mesh = new THREE.Line(
  //     new THREE.BufferGeometry().setFromPoints(arrow_line),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   // scene.add(headMesh, arrow_mesh);
  // };

  // //*  Arrow Top
  // const arrow_top = (size) => {
  //   const scene = new THREE.Scene();

  //   const arrowHead = new THREE.Shape();
  //   arrowHead.moveTo(0, 0);
  //   arrowHead.lineTo(5, -10);
  //   arrowHead.lineTo(-5, -10);
  //   arrowHead.lineTo(0, 0);
  //   const headMesh = new THREE.Mesh(
  //     new THREE.ShapeGeometry(arrowHead),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   const arrow_line = [];
  //   arrow_line.push(new THREE.Vector3(0, -10));
  //   arrow_line.push(new THREE.Vector3(0, -size));
  //   const arrow_mesh = new THREE.Line(
  //     new THREE.BufferGeometry().setFromPoints(arrow_line),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   // scene.add(headMesh, arrow_mesh);
  // };

  // //*  Arrow Down
  // const arrow_down = (size) => {
  //   const scene = new THREE.Scene();

  //   const arrowHead = new THREE.Shape();
  //   arrowHead.moveTo(0, 0);
  //   arrowHead.lineTo(5, 10);
  //   arrowHead.lineTo(-5, 10);
  //   arrowHead.lineTo(0, 0);
  //   const headMesh = new THREE.Mesh(
  //     new THREE.ShapeGeometry(arrowHead),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   const arrow_line = [];
  //   arrow_line.push(new THREE.Vector3(0, 10));
  //   arrow_line.push(new THREE.Vector3(0, size));
  //   const arrow_mesh = new THREE.Line(
  //     new THREE.BufferGeometry().setFromPoints(arrow_line),
  //     new THREE.MeshBasicMaterial({ color: 0x00000 })
  //   );

  //   // scene.add(headMesh, arrow_mesh);
  // };

  // //*  Arrow Center
  // const arrow_c = (size) => {
  //   const scene = new THREE.Scene();

  //   const arrow_line = [];
  //   arrow_line.push(new THREE.Vector3(0, 0));
  //   arrow_line.push(new THREE.Vector3(-size, 0));
  //   const arrow_mesh = new THREE.Line(
  //     new THREE.BufferGeometry().setFromPoints(arrow_line),
  //     new THREE.MeshBasicMaterial({ color: 0x000000 })
  //   );

  //   // scene.add(arrow_mesh);
  // };

  // const a_arrow_l = new THREE.Object3D();
  // a_arrow_l.position.set(-A - B + 2, C / 2, 2);
  // a_arrow_l.add(arrow_left(A / 4)); //  <-- arrow_left([ความยาวเส้น])

  // const a_arrow_r = new THREE.Object3D();
  // a_arrow_r.position.set(-(A / A) - B + 2, C / 2, 2);
  // a_arrow_r.add(arrow_right(A / 4));

  // const b_arrow_l = new THREE.Object3D();
  // b_arrow_l.position.set(-B, C / 2, 2);
  // // b_arrow_l.add(arrow_left(A / 2).clone());

  // const b_arrow_r = new THREE.Object3D();
  // b_arrow_r.position.set(-(B / B), C / 2, 2);
  // b_arrow_r.add(arrow_right(A / 2));

  // const c_arrow_t = new THREE.Object3D();
  // c_arrow_t.position.set((A - 1) / 2, C, 2);
  // // c_arrow_t.add(arrow_top(A / 3).clone());

  // const c_arrow_d = new THREE.Object3D();
  // c_arrow_d.position.set((A - 1) / 2, 0, 2);
  // // c_arrow_d.add(arrow_down(A / 3).clone());

  // const line_height_t = new THREE.Object3D();
  // // line_height_t.add(arrow_c(C / 4).clone());
  // line_height_t.position.set(-A - B + 4 - G, C + 125, 2);

  // const line_height_d = new THREE.Object3D();
  // // line_height_d.add(arrow_c(C / 4).clone());
  // line_height_d.position.set(-A - B + 4 - G, -125, 2);

  // const line_width_l = new THREE.Object3D();
  // // line_width_l.add(arrow_c(C / 4).clone());
  // line_width_l.position.set(-A - B - G + 4, C + 125, 2);
  // rotateObject(line_width_l, 0, 0, -90);

  // const line_width_r = new THREE.Object3D();
  // // line_width_r.add(arrow_c(C / 4).clone());
  // line_width_r.position.set(A + B, C + 125, 2);
  // rotateObject(line_width_r, 0, 0, -90);

  // const arrow_height_t = new THREE.Object3D();
  // arrow_height_t.position.set(-A - B + 4 - G - C / 4 / 2, C + 125, 2);
  // // arrow_height_t.add(arrow_top(C / 1.5).clone());

  // const arrow_height_d = new THREE.Object3D();
  // arrow_height_d.position.set(-A - B + 4 - G - C / 4 / 2, -125, 2);
  // // arrow_height_d.add(arrow_down(C / 1.5).clone());

  // const arrow_width_l = new THREE.Object3D();
  // arrow_width_l.position.set(-A - B - G + 4, C + 125 + C / 4 / 2, 2);
  // // arrow_width_l.add(arrow_left((A + B + G) / 1.25).clone());

  // const arrow_width_r = new THREE.Object3D();
  // arrow_width_r.position.set(A + B, C + 125 + C / 4 / 2, 2);
  // // arrow_width_r.add(arrow_right((A + B) / 1.25).clone());

  // /* #endregion */
  // /* #region  //* Group Scene */

  // const geometryBoxGroup = new THREE.Object3D();
  // geometryBoxGroup.add(
  //   lineMarkA,
  //   lineMarkB,
  //   lineMarkC,

  //   lableA,
  //   lableB,
  //   lableC,
  //   lableWidth,
  //   lableHeight,

  //   a_arrow_l,
  //   a_arrow_r,
  //   b_arrow_l,
  //   b_arrow_r,
  //   c_arrow_t,
  //   c_arrow_d,

  //   line_height_t,
  //   line_height_d,
  //   line_width_l,
  //   line_width_r,

  //   arrow_height_t,
  //   arrow_height_d,
  //   arrow_width_l,
  //   arrow_width_r
  // );
  // // scene.add(geometryBoxGroup);

  // /* #endregion */

  // /* #endregion */
};

export default {
  init,
  rotations1,
  rotations2,
  updateSize,
  modelCosmeticTube,
  delModelCosmeticTube,
  calVolume,
  saveIMG,
};
