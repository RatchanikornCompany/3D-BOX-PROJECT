/* #region  ประกาศตัวแปร */

import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

var controls, renderer, scene, camera;

var A = 250; // กว้าง
var B = 380; // ลึก
var C = 220; // สูง
var An = 25; // กว้าง
var Bn = 380; // ลึก
var Cn = 220; // สูง
var O = 1; // ความโปร่งแสง
let G = 30; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let g_slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt

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
var pivot_All;

var side_A_Front_line;
var side_A_Back_line;
var side_B_Left_upperline;
var side_B_Right_upperline;
var side_B_Left_underline;
var side_B_Right_underline;
var line_All;

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
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */

  /* #region  pivot_A_top_front */

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
  /* #region  pivot_A_back */

  /* #region  pivot_A_top_back */

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
  /* #region  pivot_B_left */

  /* #region  pivot_top_B_left */

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
  /* #region  pivot_B_right */

  /* #region  pivot_top_B_right */

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
  /* #region  removeObjects */
  scene.remove(line_All);
  /* #endregion */

  // modelCosmeticTube();

  setTimeout(() => {
    modelCosmeticTube();
    calVolume();
  }, 5000);

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_A_front */

  /* #region  pivot_A_top_front */

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
  /* #region  pivot_A_back */

  /* #region  pivot_A_top_back */

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
  /* #region  pivot_B_left */

  /* #region  pivot_top_B_left */

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
  /* #region  pivot_B_right */

  /* #region  pivot_top_B_right */

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
  /* #region  addObjects */
  setTimeout(() => {
    scene.add(line_All);
  }, 8000);
  /* #endregion */

  /* #endregion */
};

/* #endregion */

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

  const initDiv = document.getElementById('webgl');
  const newDiv = document.createElement('div');
  newDiv.id = 'webgl';

  initDiv.remove();
  document.getElementById('main').appendChild(newDiv);

  return main();
};

/* #endregion */
/* #region  TextureLoader */

const texture = new THREE.TextureLoader().load(
  'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
);

/* #endregion */
/* #region  assignUVs */

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
/* #region  modelCosmeticTube */

var modelObj;
var boxHelper;

const modelCosmeticTube = (object) => {
  var OBJFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.obj';
  var MTLFile =
    'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.mtl';
  var JPGFile =
    'https://github.com/RatchanikornCompany/react-three-js/raw/bossxdev/src/components/standard/objModel/Ice%20cream/icecream/_1.jpg';

  new MTLLoader().load(MTLFile, function (materials) {
    materials.preload();
    new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
      //* Scale & Position
      object.scale.set(116, 580, 1256); // 0.35, 0.58, 0.5
      object.position.set(0.1, 0, -2.6);

      var box = new THREE.Box3().setFromObject(object);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object);

      const object2 = object.clone();

      object2.position.set(0.1 + 50, 0, -2.6);

      var box = new THREE.Box3().setFromObject(object2);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object2);

      const object3 = object.clone();

      object3.position.set(0.1 + 100, 0, -2.6);

      var box = new THREE.Box3().setFromObject(object3);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object3);

      const object4 = object.clone();

      object4.position.set(0.1 + 150, 0, -2.6);

      var box = new THREE.Box3().setFromObject(object4);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object4);

      const object5 = object.clone();

      object5.position.set(0.1 + 200, 0, -2.6);

      var box = new THREE.Box3().setFromObject(object5);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object5);

      const object6 = object.clone();

      object6.position.set(0.1, 110, -2.6);

      var box = new THREE.Box3().setFromObject(object6);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object6);

      const object7 = object.clone();

      object7.position.set(0.1 + 50, 110, -2.6);

      var box = new THREE.Box3().setFromObject(object7);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object7);

      const object8 = object.clone();

      object8.position.set(0.1 + 100, 110, -2.6);

      var box = new THREE.Box3().setFromObject(object8);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object8);

      const object9 = object.clone();

      object9.position.set(0.1 + 150, 110, -2.6);

      var box = new THREE.Box3().setFromObject(object9);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object9);

      const object10 = object.clone();

      object10.position.set(0.1 + 200, 110, -2.6);

      var box = new THREE.Box3().setFromObject(object10);
      var box3Helper = new THREE.Box3Helper(box);
      scene.add(box3Helper);
      boxHelper = box3Helper;

      scene.add(object10);

      var texture = new THREE.TextureLoader().load(JPGFile);

      object.traverse(function (child) {
        //* Set Texture
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });

      modelObj = object;
    });
  });
};

/* #endregion */
/* #region  delModelCosmeticTube */

const delModelCosmeticTube = () => {
  scene.remove(modelObj);
  scene.remove(boxHelper);
};

/* #endregion */
/* #region calVolume */

const calVolume = () => {
  var Vs = (A * B * C) / 1000; //* ค่าปริมาตรของกล่องลูกฟูก
  var Vn = (An * Bn * Cn) / 1000; //* ค่าปริมาตรของกล่องที่จะบรรจุ
  var Floor = 2; //* จำนวนชั้นที่ต้องการวางซ้อน

  var BCM = (Vs / Vn) | 0; //* จำนวนกล่องที่สามารถบรรจุได้
  var BCMofFloor = (BCM / Floor) | 0; //* จำนวนกล่องที่สามารถบรรจุได้ในแต่ล่ะชั้น

  console.log(
    'Vs',
    Vs,
    'cm^3',
    'Vn',
    Vn,
    'cm^3',
    'BCM',
    BCM,
    'BCM of',
    Floor,
    'Floor is',
    BCMofFloor
  );

  const dielines_V_1 = [];

  for (let i = 0; i <= A; i += A / BCMofFloor) {
    dielines_V_1.push(new THREE.Vector3(0, 0, -B));
    dielines_V_1.push(new THREE.Vector3((An / An) * i, 0, -B));
    dielines_V_1.push(new THREE.Vector3((An / An) * i, 0, 0));
    dielines_V_1.push(new THREE.Vector3(0, 0, 0));
    if (Floor >= 2) {
      for (let j = 0; j <= C; j += C / Floor) {
        dielines_V_1.push(new THREE.Vector3(0, (Cn / Cn) * j, -B));
        dielines_V_1.push(new THREE.Vector3((An / An) * i, (Cn / Cn) * j, -B));
        dielines_V_1.push(new THREE.Vector3((An / An) * i, (Cn / Cn) * j, 0));
        dielines_V_1.push(new THREE.Vector3(0, (Cn / Cn) * j, 0));
      }
    }
  }

  const dielines_V_1_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(dielines_V_1),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  dielines_V_1_line.computeLineDistances();

  const line_volume = new THREE.Line();
  line_volume.add(dielines_V_1_line);
  scene.add(line_volume);
};

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
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webgl').append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Spotlights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  GridHelper */

  // scene.add(new THREE.GridHelper(10000, 1000));

  /* #endregion */

  /* #endregion */
  /* #region  Model */

  /* #region  หน้า A */

  /* #region  Plane */

  //*  Plane
  const plane_A_side_shape = new THREE.Geometry();
  plane_A_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), //*   0
    new THREE.Vector3(A, 0, 0), //*   1
    new THREE.Vector3(A, 0, -2.5), //*   2,
    new THREE.Vector3(0, 0, -2.5), //*   3,

    new THREE.Vector3(A, C, -2.5), //*   4,
    new THREE.Vector3(0, C, -2.5), //*   5,
    new THREE.Vector3(0, C, 0), //*   6
    new THREE.Vector3(A, C, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_A_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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

  /* #endregion */
  /* #region  Corrugate */

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
  plane_A_corrugated.position.z = -0.1;
  rotateObject(plane_A_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  หน้า A (หลัง) */

  /* #region  Plane */

  //*  Plane
  const plane_A_back_shape = new THREE.Geometry();
  plane_A_back_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), //*   0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), //*   1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), //*   2,
    new THREE.Vector3(0, 0, -2.5), //*   3,

    new THREE.Vector3(Math.abs(A - 2.5), C, -2.5), //*   4,
    new THREE.Vector3(0, C, -2.5), //*   5,
    new THREE.Vector3(0, C, 0), //*   6
    new THREE.Vector3(Math.abs(A - 2.5), C, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_A_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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

  /* #endregion */
  /* #region  Corrugate */

  //* Corrugate
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
  plane_A_back_corrugated.position.z = -0.1;
  rotateObject(plane_A_back_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  หน้า B */

  /* #region  Plane */

  //* Plane
  const plane_B_side_shape = new THREE.Geometry();
  plane_B_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), //*   0
    new THREE.Vector3(B, 0, 0), //*   1
    new THREE.Vector3(B, 0, -2.5), //*   2,
    new THREE.Vector3(0, 0, -2.5), //*   3,

    new THREE.Vector3(B, C, -2.5), //*   4,
    new THREE.Vector3(0, C, -2.5), //*   5,
    new THREE.Vector3(0, C, 0), //*   6
    new THREE.Vector3(B, C, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_B_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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

  /* #endregion */
  /* #region  Corrgugate */

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
  plane_B_corrugated.position.z = -0.1;
  rotateObject(plane_B_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  บน-ล่าง A */

  /* #region  Plane */

  //* Plane
  const plane_A_top_bottom_shape = new THREE.Geometry();
  plane_A_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), //*   0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), //*   1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), //*   2,
    new THREE.Vector3(2.5, 0, -2.5), //*   3,

    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), -2.5), //*   4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), //*   5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), //*   6
    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_A_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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

  /* #endregion */
  /* #region  Corrgugate */

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
  plane_A_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_A_top_bottom_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  บน-ล่าง A (หลัง) */

  /* #region  Plane */

  //* Plane
  const plane_A_top_bottom_back_shape = new THREE.Geometry();
  plane_A_top_bottom_back_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), //*   0
    new THREE.Vector3(Math.abs(A - 5), 0, 0), //*   1
    new THREE.Vector3(Math.abs(A - 5), 0, -2.5), //*   2,
    new THREE.Vector3(2.5, 0, -2.5), //*   3,

    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), -2.5), //*   4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), //*   5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), //*   6
    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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
  plane_A_top_bottom_back.position.x = 2.5;

  /* #endregion */
  /* #region  Corrgugate */

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
  plane_A_top_bottom_back_corrugated.position.set(5, 0, -0.1);
  rotateObject(plane_A_top_bottom_back_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  บน-ล่าง B */

  /* #region  Plane */

  //* Plane
  const plane_B_top_bottom_shape = new THREE.Geometry();
  plane_B_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), //*   0
    new THREE.Vector3(Math.abs(B - 2.5), 0, 0), //*   1
    new THREE.Vector3(Math.abs(B - 2.5), 0, -2.5), //*   2,
    new THREE.Vector3(2.5, 0, -2.5), //*   3,

    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), -2.5), //*   4,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), -2.5), //*   5,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), 0), //*   6
    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_B_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
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

  /* #endregion */
  /* #region  Corrgugate */

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
  plane_B_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_B_top_bottom_corrugated, -90);

  /* #endregion */

  /* #endregion */
  /* #region  ฝาเสียบกาว */

  /* #region  Plane */

  //*  Plane
  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(g_slope, G);
  glue_Lid_shape.lineTo(C - g_slope, G);
  glue_Lid_shape.lineTo(C, 0);

  const glue_lid = new THREE.ShapeGeometry(glue_Lid_shape);
  assignUVs(glue_lid);

  const plane_Glue_lid_front = new THREE.Mesh(glue_lid, material);
  rotateObject(plane_Glue_lid_front, 0, 0, 90);

  const plane_Glue_lid_back = new THREE.Mesh(glue_lid, material);
  plane_Glue_lid_back.position.z = -2.5;
  rotateObject(plane_Glue_lid_back, 0, 0, 90);

  /* #endregion */
  /* #region  Corrugate */

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
  plane_Glue_lid_corrugated.position.set(-G, g_slope, -0.1);
  rotateObject(plane_Glue_lid_corrugated, -90, 0, 0);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Mesh - แกนหมุน */

  /* #region  Non_Edges */

  /* #region  side_A_front */

  side_A_front = new THREE.Group();
  side_A_front.add(plane_A_side, plane_A_corrugated);

  side_A_top_front = new THREE.Group();
  side_A_top_front.add(plane_A_top_bottom, plane_A_top_bottom_corrugated);

  side_A_bottom_front = new THREE.Group();
  side_A_bottom_front.add(side_A_top_front.clone());

  /* #endregion */
  /* #region  side_A_back */

  const side_A_top_back = new THREE.Group();
  side_A_top_back.add(
    plane_A_top_bottom_back,
    plane_A_top_bottom_back_corrugated
  );

  const side_A_back = new THREE.Group();
  side_A_back.add(plane_A_back, plane_A_back_corrugated);
  side_A_back.position.x = -A + 2.5;

  side_Glue_lid = new THREE.Group();
  side_Glue_lid.add(
    plane_Glue_lid_front,
    plane_Glue_lid_back,
    plane_Glue_lid_corrugated
  );

  /* #endregion */
  /* #region  side_B_left */

  side_B_left = new THREE.Group();
  side_B_left.add(plane_B_side, plane_B_corrugated);
  side_B_left.position.x = -B;

  side_B_top_left = new THREE.Group();
  side_B_top_left.add(plane_B_top_bottom, plane_B_top_bottom_corrugated);

  /* #endregion */
  /* #region  side_B_right */

  side_B_right = new THREE.Group();
  side_B_right.add(side_B_left.clone());

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Object3D - จุดหมุน */

  /* #region  Non-Edges */

  /* #region  pivot_A_front */

  pivot_A_top_front = new THREE.Object3D();
  pivot_A_top_front.add(side_A_top_front);
  pivot_A_top_front.position.y = C;

  pivot_A_bottom_front = new THREE.Object3D();
  pivot_A_bottom_front.add(side_A_bottom_front);
  pivot_A_bottom_front.position.z = -2.5;
  rotateObject(pivot_A_bottom_front, -180);

  pivot_A_front = new THREE.Object3D();
  pivot_A_front.add(side_A_front, pivot_A_top_front, pivot_A_bottom_front);

  /* #endregion */
  /* #region  pivot_A_back */

  pivot_A_top_back = new THREE.Object3D();
  pivot_A_top_back.add(side_A_top_back);
  pivot_A_top_back.position.set(-A, C, 0);

  pivot_A_bottom_back = new THREE.Object3D();
  pivot_A_bottom_back.add(side_A_top_back.clone());
  pivot_A_bottom_back.position.set(-A, 0, -2.5);
  rotateObject(pivot_A_bottom_back, -180);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A + 2.5;

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_A_top_back,
    pivot_A_bottom_back,
    pivot_Glue_lid
  );
  pivot_A_back.position.x = -B;

  /* #endregion */
  /* #region  pivot_B_left */

  pivot_top_B_left = new THREE.Object3D();
  pivot_top_B_left.add(side_B_top_left);
  pivot_top_B_left.position.set(-B, C, 0);

  pivot_bottom_B_left = new THREE.Object3D();
  pivot_bottom_B_left.add(side_B_top_left.clone());
  pivot_bottom_B_left.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_left, -180);

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(
    side_B_left,
    pivot_top_B_left,
    pivot_bottom_B_left,
    pivot_A_back
  );

  /* #endregion */
  /* #region  pivot_B_right */

  pivot_top_B_right = new THREE.Object3D();
  pivot_top_B_right.add(side_B_top_left.clone());
  pivot_top_B_right.position.set(-B, C, 0);

  pivot_bottom_B_right = new THREE.Object3D();
  pivot_bottom_B_right.add(side_B_top_left.clone());
  pivot_bottom_B_right.position.set(-B, 0, -2.5);
  rotateObject(pivot_bottom_B_right, 180);

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  pivot_B_right.position.set(A, 0, -2.5);
  rotateObject(pivot_B_right, 0, 180);

  /* #endregion */
  /* #region  pivot_All */

  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_front, pivot_B_left, pivot_B_right);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  //*  Dielines
  /* #region  Dielines - เส้นปะจุดพับ */

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

  /* #region  side_A_line */

  side_A_Front_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Front_line.computeLineDistances();

  side_A_Back_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Back_line.computeLineDistances();
  side_A_Back_line.position.x = -A - B + 2.5;

  /* #endregion */
  /* #region  side_B_line */

  /* #region  side_B_upperline */

  side_B_Left_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_upperline.computeLineDistances();
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
  side_B_Right_upperline.position.set(A, C, 0);

  /* #endregion */
  /* #region  side_B_underline */

  side_B_Left_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_underline.computeLineDistances();
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
  side_B_Right_underline.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  line_All */

  line_All = new THREE.Line();
  line_All.add(
    side_A_Front_line,
    side_A_Back_line,
    side_B_Left_upperline,
    side_B_Right_upperline,
    side_B_Left_underline,
    side_B_Right_underline
  );
  // scene.add(line_All);

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
  modelCosmeticTube,
  delModelCosmeticTube,
};
