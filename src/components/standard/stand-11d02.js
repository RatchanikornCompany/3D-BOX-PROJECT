/* #region  //* Variable */

import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

import Menu from '../menu';

var controls, renderer, scene, camera;

var A = 250; // Width
var B = 380; // Depth
var C = 220; // Height

var aModel = 250; // Width-Model
var bModel = 380; // Depth-Model
var cModel = 22; // Height-Model
var Floor = 3; // Floor
var calcArea;

let G = 30; // Width-Glue
let g_slope = 4; // Slope-Glue

var O = 1; // Opacity

let img;

var tween;
var face;

var side_A_front;
var side_A_top_front;
var side_A_bottom_front;
var side_Glue_lid;
var side_B_left;
var side_B_top_left;
var side_B_right;

var pivot_A_top_front;
var pivot_A_bottom_front;
var pivot_A_front;
var pivot_A_top_back;
var pivot_A_bottom_back;
var pivot_Glue_lid;
var pivot_A_back;
var pivot_top_B_left;
var pivot_bottom_B_left;
var pivot_B_left;
var pivot_top_B_right;
var pivot_bottom_B_right;
var pivot_B_right;
var pivot_all;

var side_A_Front_line;
var side_A_Back_line;
var side_B_Left_upperline;
var side_B_Right_upperline;
var side_B_Left_underline;
var side_B_Right_underline;
var line_all;

/* #endregion */

/* #region  //* ฟังก์ชั่น */

/* #region  //* main */

const main = () => {
  init();
  animate();
};

/* #endregion */
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

  // tween = gsap.timeline();
  // tween.to(pivot_A_back.position, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (pivot_A_back.x = B + 2.5),
  // });

  /* #endregion */
  /* #region  //* pivot_B_left */

  /* #region  //* pivot_top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivot_top_B_left.x = ((Math.PI / 180) * 89) / 2),
  });

  //! New Add
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
    // y: (pivot_top_B_right.y = C - 2.5),
    // z: (pivot_top_B_right.z = -2.5),
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
  scene.remove(line_all);
  /* #endregion */

  // modelCosmeticTube();

  setTimeout(() => {
    // modelCosmeticTube();
    // calVolume();
  }, 5000);

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
    scene.add(line_all);
  }, 8000);
  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  //* rotateObject */

const rotateObject = (object, degreeX = 0, degreeY = 0, degreeZ = 0) => {
  object.rotateX(THREE.Math.degToRad(degreeX));
  object.rotateY(THREE.Math.degToRad(degreeY));
  object.rotateZ(THREE.Math.degToRad(degreeZ));
};

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
  document.getElementById('main').appendChild(newDiv);

  return main();
};

/* #endregion */
/* #region  //* TextureLoader */

const Texture = new THREE.TextureLoader().load(
  'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
);

/* #endregion */
/* #region  //* assignUVs */

function assignUVs(geometry) {
  geometry.computeBoundingBox();

  var max = geometry.boundingBox.max,
    min = geometry.boundingBox.min;
  var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
  var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
  var faces = geometry.faces;

  geometry.faceVertexUvs[0] = [];

  for (var i = 0; i < faces.length; i++) {
    var v1 = geometry.vertices[faces[i].a],
      v2 = geometry.vertices[faces[i].b],
      v3 = geometry.vertices[faces[i].c];

    geometry.faceVertexUvs[0].push([
      new THREE.Vector2(
        (v1.x + offset.x) / range.x,
        (v1.y + offset.y) / range.y
      ),
      new THREE.Vector2(
        (v2.x + offset.x) / range.x,
        (v2.y + offset.y) / range.y
      ),
      new THREE.Vector2(
        (v3.x + offset.x) / range.x,
        (v3.y + offset.y) / range.y
      ),
    ]);
  }
  geometry.uvsNeedUpdate = true;
}

/*  #endregion */
/* #region  //* modelCosmeticTube */

var modelObj;
var boxHelper;

const modelCosmeticTube = () => {
  var OBJFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.obj';
  var MTLFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.mtl';
  var JPGFile = '#';

  new MTLLoader().load(MTLFile, function (materials) {
    materials.preload();
    new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
      //*  Scale & Position
      object.scale.set(1, 1, 1);
      object.position.set(2.5,0,-2.6)

      var box = new THREE.Box3().setFromObject(object);
      var box3Helper = new THREE.Box3Helper(box);
      box3Helper.name = 'box3Helper';

      boxHelper = box3Helper;

      var Texture = new THREE.TextureLoader().load(JPGFile);

      object.traverse(function (child) {
        //*  Set Texture
        child.name = 'Texture';
        if (child instanceof THREE.Mesh) {
          child.material.map = Texture;
        }
      });

      var threedModel = new THREE.Group();
      threedModel.name = '3DModel';
      threedModel.add(box3Helper, object);
      scene.add(threedModel);

      modelObj = threedModel;
    });
  });
};

/* #endregion */
/* #region  //* delModelCosmeticTube */

const delModelCosmeticTube = () => {
    scene.remove(modelObj);
};

/* #endregion */
/* #region  //* calVolume */

const calVolume = () => {
  var Vs = (Math.abs(A - 5) * Math.abs(B - 5) * C) / 1000; // ค่าปริมาตรของกล่องลูกฟูก
  var Vn = (aModel * bModel * cModel) / 1000; // ค่าปริมาตรของกล่องที่จะบรรจุ

  var BCM = (Vs / Vn) | 0; // จำนวนกล่องที่สามารถบรรจุได้
  var BCMofFloor = (BCM / Floor) | 0; // จำนวนกล่องที่สามารถบรรจุได้ในแต่ล่ะชั้น

  var numRow = 0;

  //*  นับจำนวน Row
  for (var i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
    numRow = numRow + 1;
  }

  //*  Area
  calcArea = BCMofFloor * Floor * (numRow - 1);

  if (calcArea >= 1 && calcArea <= 500) {
    //*  Row
    var row = [];

    row.push(new THREE.Vector3(2.5, 0, -2.5));
    row.push(new THREE.Vector3(2.5, C, -2.5));

    var row_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(row),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    row_line.name = 'line_row';
    row_line.computeLineDistances();

    var line_row = new THREE.Line();
    line_row.add(row_line);

    for (var i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
      for (var k = 0; k <= B; k += Math.abs((B - 5) / BCMofFloor)) {
        var cloneRow = new THREE.Line();
        cloneRow.name = 'cloneRow';
        cloneRow.add(row_line.clone());
        cloneRow.position.set(i, 0, -k);
        scene.add(cloneRow);
      }
    }

    //*  Column
    var column = [];

    for (var i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
      column.push(new THREE.Vector3(i, 0, 0));
      column.push(new THREE.Vector3(i, 0, -B + 5));
      column.push(new THREE.Vector3(0, 0, -B + 5));
      column.push(new THREE.Vector3(0, 0, 0));
    }

    var column_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(column),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    column_line.name = 'line_column';
    column_line.computeLineDistances();

    var line_column = new THREE.Line();
    line_column.add();

    for (var j = 0; j <= C; j += C / Floor) {
      var cloneColumn = new THREE.Line();
      cloneColumn.name = 'cloneColumn';
      cloneColumn.add(column_line.clone());
      cloneColumn.position.set(2.5, j, -2.5);
      scene.add(cloneColumn);
    }

    //*  Depth
    var depth = [];

    for (var i = 0; i <= B; i += Math.abs((B - 5) / BCMofFloor)) {
      depth.push(new THREE.Vector3(A - 5, 0, 0));
      depth.push(new THREE.Vector3(A - 5, 0, -i));
      depth.push(new THREE.Vector3(0, 0, -i));
      depth.push(new THREE.Vector3(0, 0, 0));
    }

    var depth_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(depth),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    depth_line.name = 'depth_line';
    depth_line.computeLineDistances();

    var line_depth = new THREE.Line();
    line_depth.add(depth_line);
    line_depth.name = 'line_depth';

    for (var j = 0; j <= C; j += C / Floor) {
      var cloneDepth = new THREE.Line();
      cloneDepth.name = 'cloneDepth';
      cloneDepth.add(line_depth.clone());
      cloneDepth.position.set(2.5, j, -2.5);
      scene.add(cloneDepth);
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
    scene.remove(line_all);
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

    new THREE.Vector3((A - 5) / BCMofFloor, C / Floor, (-B + 5) / (numRow - 1)), // 4,
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
    var i = 0;
    i <= A - (A - 5) / BCMofFloor;
    i += Math.abs((A - 5) / BCMofFloor)
  ) {
    for (var j = 0; j <= C - C / Floor; j += Math.abs(C / Floor)) {
      for (
        var k = 0;
        k <= B - (B - 5) / (numRow - 1);
        k += Math.abs((B - 5) / (numRow - 1))
      ) {
        const cloneModel = new THREE.Object3D();
        cloneModel.name = 'cloneModel';
        cloneModel.add(model.clone());
        cloneModel.position.set(i, j, -k);
        scene.add(cloneModel);
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
  console.log('work')
  img = value;
};
/* #endregion */

/* #endregion */

const init = () => {
  /* #region  //* Three-3D Renderer */

  /* #region  //* Scene */

  scene = new THREE.Scene();
  scene.name = 'Scene';
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  //* Camera */

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.name = 'Camera';
  camera.position.z = 700;

  /* #endregion */
  /* #region  //* axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  axesHelper.name = 'axesHelper';

  /* #endregion */
  /* #region  //* Material */

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
    map: Texture,
  });

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_A_Top_bottom = {
    depth: (B - 130) / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_B_Top_bottom = {
    depth: Math.abs(A / 2 - 1),
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_g = {
    depth: C - 8,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

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
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  //* PointLight */

  const light = new THREE.PointLight(0xffffff, 1);
  light.name = 'light';
  camera.add(light); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  //* GridHelper */

  const gridHelper = new THREE.GridHelper(10000, 1000);
  gridHelper.name = 'gridHelper';

  /* #endregion */
  /* #region  //* Three-3D Renderer Group */

  const three3DRenderer = new THREE.Group();
  three3DRenderer.name = '### three3DRenderer ###';
  three3DRenderer.add(axesHelper, camera, gridHelper);
  scene.add(three3DRenderer);

  /* #endregion */

  /* #endregion */
  /* #region  //* Model */

  /* #region  //* หน้า A */

  /* #region  //* Plane */

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

  const plane_A_side = new THREE.Mesh(plane_A_side_shape, material);
  plane_A_side.name = 'plane_A_side';

  /* #endregion */
  /* #region  //* Corrugate */

  //* Corrugate
  var points_a = [];

  points_a.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
    points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_a = new THREE.CatmullRomCurve3(points_a);

  const points_A_curve = curve_a.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(new THREE.Path().setFromPoints(points_A_curve));

  const corrugate_a = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(corrugate_a, material);
  plane_A_corrugated.name = 'plane_A_corrugated';
  plane_A_corrugated.position.z = -0.1;
  rotateObject(plane_A_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* หน้า A (หลัง) */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_back_shape = new THREE.Geometry();
  plane_A_back_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), C, 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_back_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_back_shape.computeFaceNormals();

  const plane_A_back = new THREE.Mesh(plane_A_back_shape, material);
  plane_A_back.name = 'plane_A_back';

  /* #endregion */
  /* #region  //* Corrugate */

  //*  Corrugate
  var points_A_back = [];

  points_A_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    points_A_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

  const points_A_back_curve = curve_A_back.getPoints(1000);

  const corrugated_A_back_shape = new THREE.Shape();
  corrugated_A_back_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_back_curve)
  );

  const corrugate_A_back = new THREE.ExtrudeGeometry(
    corrugated_A_back_shape,
    extrudeSettings
  );

  const plane_A_back_corrugated = new THREE.Mesh(corrugate_A_back, material);
  plane_A_back_corrugated.name = 'plane_A_back_corrugated';
  plane_A_back_corrugated.position.z = -0.1;
  rotateObject(plane_A_back_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* หน้า B */

  /* #region  //* Plane */

  //*  Plane
  const plane_B_side_shape = new THREE.Geometry();
  plane_B_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(B, 0, 0), // 1
    new THREE.Vector3(B, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(B, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(B, C, 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_B_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_B_side_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_B_side_shape.computeFaceNormals();

  const plane_B_side = new THREE.Mesh(plane_B_side_shape, material);
  plane_B_side.name = 'plane_B_side';

  /* #endregion */
  /* #region  //* Corrgugate */

  //*  Corrgugate
  var points_b = [];

  points_b.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 2.5) / 2); i += 2.5) {
    points_b.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_b.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_b = new THREE.CatmullRomCurve3(points_b);

  const points_B_curve = curve_b.getPoints(1000);

  const corrugated_B_shape = new THREE.Shape();
  corrugated_B_shape.holes.push(new THREE.Path().setFromPoints(points_B_curve));

  const corrugate_b = new THREE.ExtrudeGeometry(
    corrugated_B_shape,
    extrudeSettings
  );

  const plane_B_corrugated = new THREE.Mesh(corrugate_b, material);
  plane_B_corrugated.name = 'plane_B_corrugated';
  plane_B_corrugated.position.z = -0.1;
  rotateObject(plane_B_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* บน-ล่าง A */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_top_bottom_shape = new THREE.Geometry();
  plane_A_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_top_bottom_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_top_bottom_shape.computeFaceNormals();

  const plane_A_top_bottom = new THREE.Mesh(plane_A_top_bottom_shape, material);
  plane_A_top_bottom.name = 'plane_A_top_bottom';

  /* #endregion */
  /* #region  //* Corrgugate */

  //*  Corrgugate
  var points_A_top_bottom = [];

  points_A_top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    points_A_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_top_bottom = new THREE.CatmullRomCurve3(points_A_top_bottom);

  const points_A_top_bottom_curve = curve_A_top_bottom.getPoints(1000);

  const corrugated_A_top_bottom_shape = new THREE.Shape();
  corrugated_A_top_bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_top_bottom_curve)
  );

  const corrugated_A_top_bottom = new THREE.ExtrudeGeometry(
    corrugated_A_top_bottom_shape,
    extrudeSettings_A_Top_bottom
  );

  const plane_A_top_bottom_corrugated = new THREE.Mesh(
    corrugated_A_top_bottom,
    material
  );
  plane_A_top_bottom_corrugated.name = 'plane_A_top_bottom_corrugated';
  plane_A_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_A_top_bottom_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* บน-ล่าง A (หลัง) */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_top_bottom_back_shape = new THREE.Geometry();
  plane_A_top_bottom_back_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_top_bottom_back_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_top_bottom_back_shape.computeFaceNormals();

  const plane_A_top_bottom_back = new THREE.Mesh(
    plane_A_top_bottom_back_shape,
    material
  );
  plane_A_top_bottom_back.name = 'plane_A_top_bottom_back';
  plane_A_top_bottom_back.position.x = 2.5;

  /* #endregion */
  /* #region  //* Corrgugate */

  //*  Corrgugate
  var points_A_top_bottom_back = [];

  points_A_top_bottom_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 12.5) / 2); i += 2.5) {
    points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_top_bottom_back = new THREE.CatmullRomCurve3(
    points_A_top_bottom_back
  );

  const points_A_top_bottom_back_curve = curve_A_top_bottom_back.getPoints(
    1000
  );

  const corrugated_A_top_bottom_back_shape = new THREE.Shape();
  corrugated_A_top_bottom_back_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_top_bottom_back_curve)
  );

  const corrugated_A_top_bottom_back = new THREE.ExtrudeGeometry(
    corrugated_A_top_bottom_back_shape,
    extrudeSettings_A_Top_bottom
  );

  const plane_A_top_bottom_back_corrugated = new THREE.Mesh(
    corrugated_A_top_bottom_back,
    material
  );
  plane_A_top_bottom_back_corrugated.name =
    'plane_A_top_bottom_back_corrugated';
  plane_A_top_bottom_back_corrugated.position.set(5, 0, -0.1);
  rotateObject(plane_A_top_bottom_back_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* บน-ล่าง B */

  /* #region  //* Plane */

  //*  Plane
  const plane_B_top_bottom_shape = new THREE.Geometry();
  plane_B_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(B - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(B - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), 0), // 6
    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_B_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_B_top_bottom_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_B_top_bottom_shape.computeFaceNormals();

  const plane_B_top_bottom = new THREE.Mesh(plane_B_top_bottom_shape, material);
  plane_B_top_bottom.name = 'plane_B_top_bottom';

  /* #endregion */
  /* #region  //* Corrgugate */

  //*  Corrgugate
  var points_B_top_bottom = [];

  points_B_top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 7.5) / 2); i += 2.5) {
    points_B_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

  const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

  const corrugated_B_top_bottom_shape = new THREE.Shape();
  corrugated_B_top_bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_top_bottom_curve)
  );

  const corrugated_B_top_bottom = new THREE.ExtrudeGeometry(
    corrugated_B_top_bottom_shape,
    extrudeSettings_B_Top_bottom
  );

  const plane_B_top_bottom_corrugated = new THREE.Mesh(
    corrugated_B_top_bottom,
    material
  );
  plane_B_top_bottom_corrugated.name = 'plane_B_top_bottom_corrugated';
  plane_B_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_B_top_bottom_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  //* ฝาเสียบกาว */

  /* #region  //* Plane */

  //*  Plane
  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_slope, G);
  glue_Lid_shape.lineTo(C - g_slope, G);
  glue_Lid_shape.lineTo(C, 0);

  const glue_lid = new THREE.ShapeGeometry(glue_Lid_shape);
  assignUVs(glue_lid);

  const plane_Glue_lid_front = new THREE.Mesh(glue_lid, material);
  plane_Glue_lid_front.name = 'plane_Glue_lid_front';
  rotateObject(plane_Glue_lid_front, 0, 0, 90);

  const plane_Glue_lid_back = new THREE.Mesh(glue_lid, material);
  plane_Glue_lid_back.name = 'plane_Glue_lid_back';
  plane_Glue_lid_back.position.z = -2.5;
  rotateObject(plane_Glue_lid_back, 0, 0, 90);

  /* #endregion */
  /* #region  //* Corrugate */

  //*  Corrugate

  var points_G = [];

  points_G.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((G - 2.5) / 2); i += 2.5) {
    points_G.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_G.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_G = new THREE.CatmullRomCurve3(points_G);

  const points_G_curve = curve_G.getPoints(1000);

  const glue_Lid_corrugate_shape = new THREE.Shape();
  glue_Lid_corrugate_shape.holes.push(
    new THREE.Path().setFromPoints(points_G_curve)
  );

  const corrugated_Glue_lid = new THREE.ExtrudeGeometry(
    glue_Lid_corrugate_shape,
    extrudeSettings_g
  );

  const plane_Glue_lid_corrugated = new THREE.Mesh(
    corrugated_Glue_lid,
    material
  );
  plane_Glue_lid_corrugated.name = 'plane_Glue_lid_corrugated';
  plane_Glue_lid_corrugated.position.set(-G, g_slope, -0.1);
  rotateObject(plane_Glue_lid_corrugated, -90, 0, 0);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* Mesh - แกนหมุน */

  /* #region  //* Non_Edges */

  /* #region  //* side_A_front */

  side_A_front = new THREE.Group();
  side_A_front.name = 'side_A_front';
  side_A_front.add(plane_A_side, plane_A_corrugated);

  side_A_top_front = new THREE.Group();
  side_A_top_front.name = 'side_A_top_front';
  side_A_top_front.add(plane_A_top_bottom, plane_A_top_bottom_corrugated);

  side_A_bottom_front = new THREE.Group();
  side_A_bottom_front.name = 'side_A_bottom_front';
  side_A_bottom_front.add(side_A_top_front.clone());

  /* #endregion */
  /* #region  //* side_A_back */

  const side_A_top_back = new THREE.Group();
  side_A_top_back.name = 'side_A_top_back';
  side_A_top_back.add(
    plane_A_top_bottom_back,
    plane_A_top_bottom_back_corrugated
  );

  const side_A_back = new THREE.Group();
  side_A_back.name = 'side_A_back';
  side_A_back.add(plane_A_back, plane_A_back_corrugated);
  side_A_back.position.x = -A + 2.5;

  side_Glue_lid = new THREE.Group();
  side_Glue_lid.name = 'side_Glue_lid';
  side_Glue_lid.add(
    plane_Glue_lid_front,
    plane_Glue_lid_back,
    plane_Glue_lid_corrugated
  );

  /* #endregion */
  /* #region  //* side_B_left */

  side_B_left = new THREE.Group();
  side_B_left.name = 'side_B_left';
  side_B_left.add(plane_B_side, plane_B_corrugated);
  side_B_left.position.x = -B;

  side_B_top_left = new THREE.Group();
  side_B_top_left.name = 'side_B_top_left';
  side_B_top_left.add(plane_B_top_bottom, plane_B_top_bottom_corrugated);

  /* #endregion */
  /* #region  //* side_B_right */

  side_B_right = new THREE.Group();
  side_B_right.name = 'side_B_right';
  side_B_right.add(side_B_left.clone());

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* Object3D - จุดหมุน */

  /* #region  //* Non-Edges */

  /* #region  //* pivot_A_front */

  pivot_A_top_front = new THREE.Object3D();
  pivot_A_top_front.name = 'pivot_A_top_front';
  pivot_A_top_front.add(side_A_top_front);
  pivot_A_top_front.position.y = C;

  pivot_A_bottom_front = new THREE.Object3D();
  pivot_A_bottom_front.name = 'pivot_A_bottom_front';
  pivot_A_bottom_front.add(side_A_bottom_front);
  pivot_A_bottom_front.position.z = -2.5;
  rotateObject(pivot_A_bottom_front, -180);

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.name = 'pivot_A_front';
  pivot_A_front.add(side_A_front, pivot_A_top_front, pivot_A_bottom_front);

  /* #endregion */
  /* #region  //* pivot_A_back */

  pivot_A_top_back = new THREE.Object3D();
  pivot_A_top_back.name = 'pivot_A_top_back';
  pivot_A_top_back.add(side_A_top_back);
  pivot_A_top_back.position.set(-A, C, 0);

  pivot_A_bottom_back = new THREE.Object3D();
  pivot_A_bottom_back.name = 'pivot_A_bottom_back';
  pivot_A_bottom_back.add(side_A_top_back.clone());
  pivot_A_bottom_back.position.set(-A, 0, -2.5);
  rotateObject(pivot_A_bottom_back, -180);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.name = 'pivot_Glue_lid';
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A + 2.5;

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.name = 'pivot_A_back';
  pivot_A_back.add(
    side_A_back,
    pivot_A_top_back,
    pivot_A_bottom_back,
    pivot_Glue_lid
  );
  pivot_A_back.position.x = -B;

  /* #endregion */
  /* #region  //* pivot_B_left */

  pivot_top_B_left = new THREE.Object3D();
  pivot_top_B_left.name = 'pivot_top_B_left';
  pivot_top_B_left.add(side_B_top_left);
  pivot_top_B_left.position.set(-B, C, 0);

  pivot_bottom_B_left = new THREE.Object3D();
  pivot_bottom_B_left.name = 'pivot_bottom_B_left';
  pivot_bottom_B_left.add(side_B_top_left.clone());
  pivot_bottom_B_left.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_left, -180);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.name = 'pivot_B_left';
  pivot_B_left.add(
    side_B_left,
    pivot_top_B_left,
    pivot_bottom_B_left,
    pivot_A_back
  );

  /* #endregion */
  /* #region  //* pivot_B_right */

  pivot_top_B_right = new THREE.Object3D();
  pivot_top_B_right.name = 'pivot_top_B_right';
  pivot_top_B_right.add(side_B_top_left.clone());
  pivot_top_B_right.position.set(-B, C, 0);

  pivot_bottom_B_right = new THREE.Object3D();
  pivot_bottom_B_right.name = 'pivot_bottom_B_right';
  pivot_bottom_B_right.add(side_B_top_left.clone());
  pivot_bottom_B_right.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_right, 180);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.name = 'pivot_B_right';
  pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  pivot_B_right.position.set(A, 0, -2.5);
  rotateObject(pivot_B_right, 0, 180);

  /* #endregion */
  /* #region  //* pivot_all */

  pivot_all = new THREE.Object3D();
  pivot_all.name = 'pivot_all';
  pivot_all.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_all);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  //*  Dielines
  /* #region  //* Dielines - เส้นปะจุดพับ */

  const side_A_line = [];
  const side_A_Line_back = [];
  const side_B_UpperUnder_line = [];
  const side_B_Upper_R_line = [];

  side_A_line.push(new THREE.Vector2(0, 0));
  side_A_line.push(new THREE.Vector2(0, C));
  side_A_line.push(new THREE.Vector2(A, C));
  side_A_line.push(new THREE.Vector2(A, 0));
  side_A_line.push(new THREE.Vector2(0, 0));

  side_A_Line_back.push(new THREE.Vector2(0, 0));
  side_A_Line_back.push(new THREE.Vector2(0, C));
  side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), C));
  side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), 0));
  side_A_Line_back.push(new THREE.Vector2(0, 0));

  side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
  side_B_UpperUnder_line.push(new THREE.Vector2(B, 0));

  side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, -C));

  /* #region  //* side_A_line */

  side_A_Front_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Front_line.computeLineDistances();
  side_A_Front_line.name = 'side_A_Front_line';

  side_A_Back_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Back_line.computeLineDistances();
  side_A_Back_line.name = 'side_A_Back_line';
  side_A_Back_line.position.x = -A - B + 2.5;

  /* #endregion */
  /* #region  //* side_B_line */

  /* #region  //* side_B_upperline */

  side_B_Left_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_upperline.computeLineDistances();
  side_B_Left_upperline.name = 'side_B_Left_upperline';
  side_B_Left_upperline.position.set(-B, C, 0);

  side_B_Right_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_upperline.computeLineDistances();
  side_B_Right_upperline.name = 'side_B_Right_upperline';
  side_B_Right_upperline.position.set(A, C, 0);

  /* #endregion */
  /* #region  //* side_B_underline */

  side_B_Left_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_underline.computeLineDistances();
  side_B_Left_underline.name = 'side_B_Left_underline';
  side_B_Left_underline.position.x = -B;

  side_B_Right_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_underline.computeLineDistances();
  side_B_Right_underline.name = 'side_B_Right_underline';
  side_B_Right_underline.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  //* line_all */

  line_all = new THREE.Line();
  line_all.name = 'line_all';
  line_all.add(
    side_A_Front_line,
    side_A_Back_line,
    side_B_Left_upperline,
    side_B_Right_upperline,
    side_B_Left_underline,
    side_B_Right_underline
  );
  // scene.add(line_all);

  /* #endregion */

  /* #endregion */

  // calVolume();
  // modelCosmeticTube();

  window.scene = scene;
  window.THREE = THREE;
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
  modelCosmeticTube,
  delModelCosmeticTube,
  calVolume,
  saveIMG
};
