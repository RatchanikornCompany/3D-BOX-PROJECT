/* #region  ตัวแปร */

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import OrbitControls from 'three-orbitcontrols';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';

let controls, renderer, scene, camera;

let A = 175; //  กว้าง
let B = 105; //  ลึก
let C = 75; //  สูง
let D = 0.5; //  ความหนา
let O = 0.5; //  ความโปร่งแสง
let G = 5; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let g_slope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt
let w = (window.innerWidth * 75) / 100;
let h = window.innerHeight;

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

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
    init();
    animate();
};

/* #endregion */
/* #region  render */

const render = () => {
    renderer.render(scene, camera);
    // pivot_All.rotation.y += Math.PI / 360;
    // pivot_All_edges.rotation.y += Math.PI / 360;
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */
const rotations1 = () => {
    /* #region  จุดหมุน */

    /* #region  pivot_Back */

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
    /* #region  pivot_Group_left */

    /* #region  pivot_Left_lid */

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
    /* #region  pivot_Group_right */

    /* #region  pivot_Right_lid */

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
    /* #region  pivot_Top */

    /* #region  pivot_Group_top_back */

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
    /* #region  pivot_Group_top_front */

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
    /* #region  pivot_Bottom */

    /* #region  pivot_Group_bottom_front */

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
    /* #region  pivot_Group_bottom_back */

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
    /* #region  จุดหมุน - แบบมีเส้น */

    /* #region  pivot_Back */

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
    /* #region  pivot_Group_left */

    /* #region  pivot_Left_lid */

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
    /* #region  pivot_Group_right */

    /* #region  pivot_Right_lid */

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
    /* #region  pivot_Top */

    /* #region  pivot_Group_top_back */

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
    /* #region  pivot_Group_top_front */

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
    /* #region  pivot_Bottom */

    /* #region  pivot_Group_bottom_front */

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
    /* #region  pivot_Group_bottom_back */

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
/* #endregion */
/* #region  กางกล่อง */
const rotations2 = () => {
    /* #region  จุดหมุน */

    /* #region  pivot_Back */

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
    /* #region  pivot_Group_left */

    /* #region  pivot_Left_lid */

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
    /* #region  pivot_Group_right */

    /* #region  pivot_Right_lid */

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
    /* #region  pivot_Top */

    /* #region  pivot_Group_top_back */

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
    /* #region  pivot_Group_top_front */

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
    /* #region  pivot_Bottom */

    /* #region  pivot_Group_bottom_front */

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
    /* #region  pivot_Group_bottom_back */

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
    /* #region  จุดหมุน - แบบมีเส้น */

    /* #region  pivot_Back */

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
    /* #region  pivot_Group_left */

    /* #region  pivot_Left_lid */

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
    /* #region  pivot_Group_right */

    /* #region  pivot_Right_lid */

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
    /* #region  pivot_Top */

    /* #region  pivot_Group_top_back */

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
    /* #region  pivot_Group_top_front */

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
    /* #region  pivot_Bottom */

    /* #region  pivot_Group_bottom_front */

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
    /* #region  pivot_Group_bottom_back */

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
/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, d, o) => {
    A = a;
    B = b;
    C = c;
    D = d;
    O = o;

    let initDiv = document.getElementById('webgl');
    let newDiv = document.createElement('div');
    newDiv.id = 'webgl';

    initDiv.remove();
    document.getElementById('main').appendChild(newDiv);

    return main();
};

/* #endregion */
/* #region  modelCosmeticTube */

let modelObj;

const modelCosmeticTube = (object) => {
    let loader = new OBJLoader();
    let objFile =
        'https://raw.githubusercontent.com/l3osslunla/react-three-js/bossxdev/src/components/snapbox/cosmetic_tube.obj';

    loader.load(objFile, (object) => {
        /* #region  ขยายโมเดล */
        object.scale.set(A - 51.65, C - 174.42, B - 51.5); // 0.35, 0.58, 0.5
        object.position.set(A / 2, -C / 18, B / 2);

        scene.add(object);
        modelObj = object;
        /* #endregion */
        /* #region  สร้างภาพฉาย */
        let box = new THREE.Box3().setFromObject(object);
        let box3Helper = new THREE.Box3Helper(box);

        // scene.add(box3Helper);
        /* #endregion */
    });
};

/* #endregion */
/* #region  delModelCosmeticTube */

const delModelCosmeticTube = () => {
    scene.remove(modelObj);
};

/* #endregion */

/* #endregion */

/* ฟังก์ชันสร้างรูปทรง */
const init = () => {
    /* #region  Three-3D Renderer */

    /* #region  Scene */

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x404040);

    /* #endregion */
    /* #region  Camera */

    camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
    camera.position.z = 800; // 800

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
    document.getElementById('webgl').append(renderer.domElement);

    /* #endregion */
    /* #region  The mouse controls */

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 10;

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
    let helper = new THREE.CameraHelper(spotLight.shadow.camera);
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
    let helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
    // scene.add(helper2);

    /* #endregion */

    /* #endregion */
    /* #region  Viewport on Resize */

    window.addEventListener('resize', function() {
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    });

    /* #endregion */
    /* #region  GridHelper */

    scene.add(new THREE.GridHelper(1000, 100));

    /* #endregion */

    /* #endregion */
    /* #region  โมเดลที่สร้างใหม่ */

    /* #region  ลิ้นบน */

    let lid_shape = new THREE.Shape();
    lid_shape.moveTo(0, 0);
    lid_shape.lineTo(0, (C * .707) | 0);
    lid_shape.lineTo(A, (C * .707) | 0);
    lid_shape.lineTo(A, 0);

    let lid_onTop = new THREE.ShapeGeometry(lid_shape);

    /* #endregion */
    /* #region  ลิ้นฝาเสียบบน */

    let lr_lid_shape = new THREE.Shape();
    lr_lid_shape.moveTo(0, 0);
    lr_lid_shape.lineTo(0, (C * .64) | 0);
    lr_lid_shape.lineTo((A * .1143) | 0, (C * .64) | 0);
    lr_lid_shape.lineTo((A * .1143) | 0, (C * .48) | 0);
    lr_lid_shape.lineTo((A * .143) | 0, (C * .48) | 0);
    lr_lid_shape.lineTo((A * .23) | 0, (C * .694) | 0);
    lr_lid_shape.lineTo((A * .772) | 0, (C * .694) | 0);
    lr_lid_shape.lineTo((A * .858) | 0, (C * .48) | 0);
    lr_lid_shape.lineTo((A * .886) | 0, (C * .48) | 0);
    lr_lid_shape.lineTo((A * .886) | 0, (C * .64) | 0);
    lr_lid_shape.lineTo(A, (C * .64) | 0);
    lr_lid_shape.lineTo(A, 0);
    lr_lid_shape.lineTo((A * .8) | 0, 0);
    lr_lid_shape.lineTo((A * .8) | 0, (C * .267) | 0);
    lr_lid_shape.lineTo((A * .2) | 0, (C * .267) | 0);
    lr_lid_shape.lineTo((A * .2) | 0, 0);

    let lr_lid_onTop = new THREE.ShapeGeometry(lr_lid_shape);

    /* #endregion */
    /* #region  ลิ้นล่าง */

    let lid_Bottom_shape = new THREE.Shape();
    lid_Bottom_shape.moveTo(0, 0);
    lid_Bottom_shape.lineTo((A * .0286) | 0, (C * 0.7));
    lid_Bottom_shape.lineTo((A * .76) | 0, (C * 0.7));
    lid_Bottom_shape.lineTo(A, 0);

    let lid_Bottom = new THREE.ShapeGeometry(lid_Bottom_shape);

    /* #endregion */
    /* #region  ลิ้นเสียบล่าง */

    let lr_lid_Bottom_shape = new THREE.Shape();
    lr_lid_Bottom_shape.moveTo(0, (C * .534) | 0);
    lr_lid_Bottom_shape.lineTo(0, (C * .534) | 0);
    lr_lid_Bottom_shape.lineTo((A * .08) | 0, (C * 0.774) | 0);
    lr_lid_Bottom_shape.lineTo((A * .206) | 0, (C * 0.774) | 0);
    lr_lid_Bottom_shape.lineTo((A * .206) | 0, (C * .107) | 0);
    lr_lid_Bottom_shape.lineTo((A * .183) | 0, 0);

    let lr_lid_Bottom = new THREE.ShapeGeometry(lr_lid_Bottom_shape);

    /* #endregion */
    /* #region  ตัวเสียบล่าง */

    let lr_lid_Bottom_shape_d = new THREE.Shape();
    lr_lid_Bottom_shape_d.moveTo(0, 0);
    lr_lid_Bottom_shape_d.lineTo((A * 0.012) | 0, (C * 0.256) | 0);
    lr_lid_Bottom_shape_d.lineTo((A * 0.41) | 0, (C * 0.256) | 0);
    lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, (C * .1) | 0);
    lr_lid_Bottom_shape_d.lineTo((A * 0.47) | 0, 0);

    let lr_lid_Bottom_d = new THREE.ShapeGeometry(lr_lid_Bottom_shape_d);

    /* #endregion */
    /* #region  ลิ้นบนข้าง */

    let lid_curve_shape = new THREE.Shape();
    lid_curve_shape.moveTo(0, 0);
    lid_curve_shape.lineTo((B * .286) | 0, (C * .64) | 0);
    lid_curve_shape.bezierCurveTo((B * .286) | 0, (C * .64) | 0, (B * .496) | 0, (C * .867) | 0, (B * .715), (C * .64) | 0);
    lid_curve_shape.lineTo((B * -.1524) | 0, (C * .64) | 0);
    lid_curve_shape.lineTo(B, 0);
    lid_curve_shape.lineTo((B * .51) | 0, 0);
    lid_curve_shape.lineTo((B * .51) | 0, (C * .64) | 0);
    lid_curve_shape.lineTo((B * .477) | 0, (C * .64) | 0);
    lid_curve_shape.lineTo((B * .477) | 0, 0);

    let lid_curve = new THREE.ShapeGeometry(lid_curve_shape);

    /* #endregion */
    /* #region  ลิ้นเสียบล่างข้าง */

    let lid_bottom_curve_shape = new THREE.Shape();
    lid_bottom_curve_shape.moveTo(0, 0);
    lid_bottom_curve_shape.lineTo((B * .258) | 0, (C * .56) | 0);
    lid_bottom_curve_shape.lineTo((B * .496) | 0, (C * .56) | 0);
    lid_bottom_curve_shape.lineTo(B, 0);

    let lid_bottom_curve = new THREE.ShapeGeometry(lid_bottom_curve_shape);

    /* #endregion */
    /* #region  ฝาเสียบกาว */

    let glue_lid_shape = new THREE.Shape();
    glue_lid_shape.moveTo(0, 0);
    glue_lid_shape.lineTo(g_slope, G);
    glue_lid_shape.lineTo(C - g_slope, G);
    glue_lid_shape.lineTo(C, 0);

    let glue_lid = new THREE.ShapeGeometry(glue_lid_shape); // ฝาเสียบกาว

    /* #endregion */
    /* #region  โมเดลมาตราฐาน */

    let plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
    let plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x สูง | ความหนา

    /* #endregion */

    /* #endregion */
    /* #region  ฉาก */

    /* #region  side_A_front */

    side_Bottom_A_front = new THREE.Mesh(lid_Bottom, material);
    side_Bottom_A_front.rotation.x = Math.PI;

    side_lid_Bottom_A_front = new THREE.Mesh(lr_lid_Bottom, material);
    side_lid_Bottom_A_front.rotation.x = Math.PI;

    side_lid_d_Bottom_A_front = new THREE.Mesh(lr_lid_Bottom_d, material);
    side_lid_d_Bottom_A_front.rotation.x = Math.PI;

    side_A_front = new THREE.Mesh(plane_A_side, material);
    side_A_front.position.set(A / 2, C / 2, 0);

    /* #endregion */
    /* #region  side_B_right */

    side_Right_lid = new THREE.Mesh(lid_curve, material);

    side_Right_lid_d = new THREE.Mesh(lid_bottom_curve, material);
    side_Right_lid_d.rotation.x = Math.PI;

    side_B_right = new THREE.Mesh(plane_B_side, material);
    side_B_right.position.set(B / 2, C / 2, 0);

    /* #endregion */
    /* #region  side_B_left */

    side_Left_lid = new THREE.Mesh(lid_curve, material);
    side_Left_lid.rotation.y = Math.PI;

    side_Left_lid_d = new THREE.Mesh(lid_bottom_curve, material);
    side_Left_lid_d.rotation.x = Math.PI;

    side_B_left = new THREE.Mesh(plane_B_side, material);
    side_B_left.position.set(-B / 2, C / 2);

    side_Glue_lid = new THREE.Mesh(glue_lid, material);
    side_Glue_lid.rotation.z = Math.PI / 2;

    side_Top_A_back = new THREE.Mesh(lid_onTop, material);

    side_Top_A_lid_top_back = new THREE.Mesh(lr_lid_onTop, material);

    side_Bottom_A_back = new THREE.Mesh(lid_Bottom, material);
    side_Bottom_A_back.rotation.x = Math.PI;

    side_lid_Bottom_A_back = new THREE.Mesh(lr_lid_Bottom, material);
    side_lid_Bottom_A_back.rotation.x = Math.PI;

    side_lid_d_Bottom_A_back = new THREE.Mesh(lr_lid_Bottom_d, material);
    side_lid_d_Bottom_A_back.rotation.x = Math.PI;

    side_A_back = new THREE.Mesh(plane_A_side, material);
    side_A_back.position.set(-A / 2, C / 2);

    /* #endregion */
    /* #region  side_Top_A_front */

    side_Top_A_front = new THREE.Mesh(lid_onTop, material);

    side_Top_A_lid_top_front = new THREE.Mesh(lr_lid_onTop, material);

    /* #endregion */

    /* #endregion */
    /* #region  จุดหมุน */

    /* #region  pivot_Front */

    pivot_Bottom_front = new THREE.Object3D();
    pivot_Bottom_front.add(side_Bottom_A_front);

    pivot_Bottom_front_lid = new THREE.Object3D();
    pivot_Bottom_front_lid.add(side_lid_Bottom_A_front);
    pivot_Bottom_front_lid.position.set((A * .76) | 0, (C * -0.1667), 0);

    pivot_Bottom_front_lid_d = new THREE.Object3D();
    pivot_Bottom_front_lid_d.add(side_lid_d_Bottom_A_front);
    pivot_Bottom_front_lid_d.position.set((A * .0286) | 0, (C * -0.7), 0);

    pivot_Group_bottom_front = new THREE.Object3D();
    pivot_Group_bottom_front.add(
        pivot_Bottom_front,
        pivot_Bottom_front_lid,
        pivot_Bottom_front_lid_d
    );

    pivot_front = new THREE.Object3D();
    pivot_front.add(side_A_front, pivot_Group_bottom_front);

    /* #endregion */
    /* #region  pivot_Group_right */

    pivot_Right_lid = new THREE.Object3D();
    pivot_Right_lid.add(side_Right_lid);
    pivot_Right_lid.position.y = C;

    pivot_Right_lid_d = new THREE.Object3D();
    pivot_Right_lid_d.add(side_Right_lid_d);

    pivot_Group_right = new THREE.Object3D();
    pivot_Group_right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
    pivot_Group_right.position.x = A;

    /* #endregion */
    /* #region  pivot_Group_left */

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
    pivot_Bottom_back_lid.position.set((A * -0.24), (C * -0.1667), 0);

    pivot_Bottom_back_lid_d = new THREE.Object3D();
    pivot_Bottom_back_lid_d.add(side_lid_d_Bottom_A_back);
    pivot_Bottom_back_lid_d.position.set((A * -0.972) | 0, (C * -0.7), 0);

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
    /* #region  pivot_Top */

    pivot_Top_front = new THREE.Object3D();
    pivot_Top_front.add(side_Top_A_front);

    pivot_Top_front_lid = new THREE.Object3D();
    pivot_Top_front_lid.add(side_Top_A_lid_top_front);
    pivot_Top_front_lid.position.y = (C * 0.694) | 0;

    pivot_Top = new THREE.Object3D();
    pivot_Top.add(pivot_Top_front, pivot_Top_front_lid);
    pivot_Top.position.y = C;

    /* #endregion */
    /* #region  pivot_All */

    pivot_All = new THREE.Object3D();
    pivot_All.add(pivot_front, pivot_Group_right, pivot_Group_left, pivot_Top);
    scene.add(pivot_All);

    /* #endregion */

    /* #endregion */
    /* #region  ฉาก - แบบมีเส้น */

    /* #region  side_A_front */

    edges = new THREE.EdgesGeometry(lid_Bottom);
    side_Bottom_A_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Bottom_A_front_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(lr_lid_Bottom);
    side_lid_Bottom_A_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_lid_Bottom_A_front_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(lr_lid_Bottom_d);
    side_lid_d_Bottom_A_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_lid_d_Bottom_A_front_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(plane_A_side);
    side_A_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_A_front_edges.position.set(A / 2, C / 2, 0);

    /* #endregion */
    /* #region  side_B_right */

    edges = new THREE.EdgesGeometry(lid_curve);
    side_Right_lid_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );

    edges = new THREE.EdgesGeometry(lid_bottom_curve);
    side_Right_lid_d_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Right_lid_d_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(plane_B_side);
    side_B_right_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_B_right_edges.position.set(B / 2, C / 2, 0);

    /* #endregion */
    /* #region  side_B_left */

    edges = new THREE.EdgesGeometry(lid_curve);
    side_Left_lid_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Left_lid_edges.rotation.y = Math.PI;

    edges = new THREE.EdgesGeometry(lid_bottom_curve);
    side_Left_lid_d_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Left_lid_d_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(plane_B_side);
    side_B_left_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_B_left_edges.position.set(-B / 2, C / 2, 0);

    edges = new THREE.EdgesGeometry(glue_lid);
    side_Glue_lid_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Glue_lid_edges.rotation.z = Math.PI / 2;

    edges = new THREE.EdgesGeometry(lid_onTop);
    side_Top_A_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Glue_lid_edges.rotation.z = Math.PI / 2;

    edges = new THREE.EdgesGeometry(lr_lid_onTop);
    side_Top_A_lid_top_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );

    edges = new THREE.EdgesGeometry(lid_Bottom);
    side_Bottom_A_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_Bottom_A_back_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(lr_lid_Bottom);
    side_lid_Bottom_A_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_lid_Bottom_A_back_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(lr_lid_Bottom_d);
    side_lid_d_Bottom_A_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_lid_d_Bottom_A_back_edges.rotation.x = Math.PI;

    edges = new THREE.EdgesGeometry(plane_A_side);
    side_A_back_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );
    side_A_back_edges.position.set(-A / 2, C / 2, 0);

    /* #endregion */
    /* #region  side_Top_A_front */

    edges = new THREE.EdgesGeometry(lid_onTop);
    side_Top_A_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );

    edges = new THREE.EdgesGeometry(lr_lid_onTop);
    side_Top_A_lid_top_front_edges = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: '#E7E7E7' })
    );

    /* #endregion */

    /* #endregion */
    /* #region  จุดหมุน - แบบมีเส้น */

    /* #region  pivot_Front */

    pivot_Bottom_front_edges = new THREE.Object3D();
    pivot_Bottom_front_edges.add(side_Bottom_A_front_edges);

    pivot_Bottom_front_lid_edges = new THREE.Object3D();
    pivot_Bottom_front_lid_edges.add(side_lid_Bottom_A_front_edges);
    pivot_Bottom_front_lid_edges.position.set((A * .76) | 0, (C * -0.1667), 0);

    pivot_Bottom_front_lid_d_edges = new THREE.Object3D();
    pivot_Bottom_front_lid_d_edges.add(side_lid_d_Bottom_A_front_edges);
    pivot_Bottom_front_lid_d_edges.position.set((A * .0286) | 0, (C * -0.7), 0);

    pivot_Group_bottom_front_edges = new THREE.Object3D();
    pivot_Group_bottom_front_edges.add(
        pivot_Bottom_front_edges,
        pivot_Bottom_front_lid_edges,
        pivot_Bottom_front_lid_d_edges
    );

    pivot_front_edges = new THREE.Object3D();
    pivot_front_edges.add(side_A_front_edges, pivot_Group_bottom_front_edges);

    /* #endregion */
    /* #region  pivot_Group_right */

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
    /* #region  pivot_Group_left */

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
    pivot_Bottom_back_lid_edges.position.set((A * -0.24), (C * -0.1667), 0);

    pivot_Bottom_back_lid_d_edges = new THREE.Object3D();
    pivot_Bottom_back_lid_d_edges.add(side_lid_d_Bottom_A_back_edges);
    pivot_Bottom_back_lid_d_edges.position.set((A * -0.972) | 0, (C * -0.7));

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
    /* #region  pivot_Top */

    pivot_Top_front_edges = new THREE.Object3D();
    pivot_Top_front_edges.add(side_Top_A_front_edges);

    pivot_Top_front_lid_edges = new THREE.Object3D();
    pivot_Top_front_lid_edges.add(side_Top_A_lid_top_front_edges);
    pivot_Top_front_lid_edges.position.y = (C * 0.694) | 0;

    pivot_Top_edges = new THREE.Object3D();
    pivot_Top_edges.add(pivot_Top_front_edges, pivot_Top_front_lid_edges);
    pivot_Top_edges.position.y = C;

    /* #endregion */
    /* #region  pivot_All */

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
};

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    render();
};

export default {
    main,
    rotations1,
    rotations2,
    updateSize,
    modelCosmeticTube,
    delModelCosmeticTube,
};