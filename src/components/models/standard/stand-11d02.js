/* #region  //* Variable */
import React, { useEffect } from "react";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { gsap } from 'gsap';
import Webgl from "../../webgl";
import Main from "../../../main";

let A = 250;
let B = 380;
let C = 220;

let aModel = 250;
let bModel = 380;
let cModel = 22;
let Floor = 3;

let O = 1;

let modelObj;
let boxHelper;
let img;

let tween;

let pivot_A_top_front;
let pivot_A_bottom_front;
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
/* #region  //* modelCosmeticTube */

const modelCosmeticTube = () => {
    const OBJFile =
        'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.obj';
    const MTLFile =
        'https://raw.githubusercontent.com/RatchanikornCompany/react-three-js/bossxdev/src/components/standard/objModel/Ice%20cream/icecream.mtl';
    const JPGFile = '#';

    new MTLLoader().load(MTLFile, function ( materials ) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load(OBJFile, function ( object ) {
            //*  Scale & Position
            object.scale.set(1, 1, 1);
            object.position.set(2.5, 0, -2.6);

            const box = new THREE.Box3().setFromObject(object);
            const box3Helper = new THREE.Box3Helper(box);
            box3Helper.name = 'box3Helper';

            boxHelper = box3Helper;

            const texture = new THREE.TextureLoader().load(JPGFile);

            object.traverse(function ( child ) {
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

const Stand11d02 = () => {
    return <Main>
        <Webgl/>
    </Main>
}

export default Stand11d02
