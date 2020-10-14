// import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 100;
var C = 40;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight / 1.2;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;
var tween;

var side_A_back

var pivot_Back
var pivot_All

const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xDDDDDD);

    // เซ็ทตำแหน่งของกล้อง
    camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 800;

    // สร้างแกนหมุน
    const axesHelper = new THREE.AxesHelper(700);
    scene.add(axesHelper);

    // เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
    const material = new THREE.MeshBasicMaterial({
        color: "#FFFFFF",
        side: THREE.DoubleSide,
        wireframe: true,
    });

    /* Region */

    var lid_A_left_right_shape = new THREE.Shape();
    lid_A_left_right_shape.moveTo(0, 0);
    lid_A_left_right_shape.lineTo(0, B);
    lid_A_left_right_shape.lineTo((A * 0.2) | 0, B);
    lid_A_left_right_shape.lineTo((A * 0.2) | 0, 0);

    var lr_lid_B_top_bottom_shape = new THREE.Shape();
    lr_lid_B_top_bottom_shape.moveTo(0, 0);
    lr_lid_B_top_bottom_shape.lineTo(0, (A * 0.2) | 0);
    lr_lid_B_top_bottom_shape.lineTo(((C * 0.75) | 0), (A * 0.2) | 0);
    lr_lid_B_top_bottom_shape.bezierCurveTo(
        ((C * 0.75) | 0), // X1
        (A * 0.2) | 0, // Y1
        (C * 0.875) | 0, // X2
        (A * 0.15) | 0, // Y2
        ((C * 0.75) | 0), // X3
        (A * 0.1) | 0 // Y3
    );
    lr_lid_B_top_bottom_shape.lineTo(((C * 0.75) | 0), (A * 0.1) | 0);
    lr_lid_B_top_bottom_shape.lineTo(C, (A * 0.05) | 0);
    lr_lid_B_top_bottom_shape.lineTo(C, 0);

    var lr_lid_A_top_shape = new THREE.Shape()
    lr_lid_A_top_shape.moveTo(0, 0);
    lr_lid_A_top_shape.lineTo(0, B);
    lr_lid_A_top_shape.lineTo((A * 0.15) | 0, B);
    lr_lid_A_top_shape.bezierCurveTo(
        (A * 0.15) | 0, // X1
        B, // Y1
        (A * 0.175) | 0, // X2
        (B * 0.9) | 0, // Y2
        (A * 0.15) | 0, // X3
        (B * 0.8) | 0 // Y3
    );
    lr_lid_A_top_shape.lineTo((A * 0.15) | 0, (B * 0.8) | 0);
    lr_lid_A_top_shape.lineTo((A * 0.2) | 0, (B * 0.6) | 0);
    lr_lid_A_top_shape.lineTo((A * 0.2) | 0, 0);

    // ฝาเสียบกาว
    var glue_lid_shape = new THREE.Shape();
    glue_lid_shape.moveTo(0, 0);
    glue_lid_shape.lineTo(A, 0);
    glue_lid_shape.moveTo(0, 0);
    glue_lid_shape.lineTo(A, 0);
    glue_lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
    glue_lid_shape.lineTo(A / 10, -P);
    glue_lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

    /* สร้างรูปทรง */

    var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
    var plane_B_side = new THREE.BoxGeometry(A, C, D); // ด้าน B | สูง x กว้าง | ความหนา

    var lid_A_left_right = new THREE.ShapeGeometry(lid_A_left_right_shape);
    var lr_lid_B_top_bottom = new THREE.ShapeGeometry(lr_lid_B_top_bottom_shape);
    var lr_lid_A_top = new THREE.ShapeGeometry(lr_lid_A_top_shape)
    var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);

    /* ฉาก */

    side_A_back = new THREE.Mesh(plane_A_side, material);
    side_A_back.position.x = A / 2;
    side_A_back.position.y = B / 2;

    var side_Glue_lid = new THREE.Mesh(glue_lid, material);
    side_Glue_lid.rotation.set(-(Math.PI / 180) * 180, 0, 0);

    var side_lr_lid_A_left = new THREE.Mesh(lr_lid_A_top, material);
    side_lr_lid_A_left.rotation.set(0, -(Math.PI / 180) * 180, 0);

    var side_lr_lid_A_right = new THREE.Mesh(lr_lid_A_top, material);

    var side_lid_A_top = new THREE.Mesh(plane_A_side, material);
    side_lid_A_top.position.x = A / 2;
    side_lid_A_top.position.y = B / 2;

    var side_lr_lid_B_top_left = new THREE.Mesh(lr_lid_B_top_bottom, material);
    side_lr_lid_B_top_left.rotation.set(0, -(Math.PI / 180) * 360, (Math.PI / 180) * 90);

    var side_lr_lid_B_top_right = new THREE.Mesh(lr_lid_B_top_bottom, material);
    side_lr_lid_B_top_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);

    var side_B_top = new THREE.Mesh(plane_B_side, material);
    side_B_top.position.x = A / 2;
    side_B_top.position.y = C / 2;

    var side_lr_lid_B_bottom_left = new THREE.Mesh(lr_lid_B_top_bottom, material);
    side_lr_lid_B_bottom_left.rotation.set((Math.PI / 180) * 180, 0, (Math.PI / 180) * 90);

    var side_lr_lid_B_bottom_right = new THREE.Mesh(lr_lid_B_top_bottom, material);
    side_lr_lid_B_bottom_right.rotation.set((Math.PI / 180) * 180, -(Math.PI / 180) * 180, (Math.PI / 180) * 90);

    var side_B_bottom = new THREE.Mesh(plane_B_side, material);
    side_B_bottom.position.x = A / 2;
    side_B_bottom.position.y = -C / 2;

    var side_Left = new THREE.Mesh(lid_A_left_right, material);
    side_Left.rotation.set(0, -(Math.PI / 180) * 180, 0)

    var side_Right = new THREE.Mesh(lid_A_left_right, material);

    /* จุดหมุน */

    pivot_Back = new THREE.Object3D();
    pivot_Back.add(side_A_back);

    var pivot_Glue_lid = new THREE.Object3D();
    pivot_Glue_lid.add(side_Glue_lid);
    pivot_Glue_lid.position.set(0, B, 0);

    var pivot_lr_lid_A_left = new THREE.Object3D();
    pivot_lr_lid_A_left.add(side_lr_lid_A_left);

    var pivot_lr_lid_A_right = new THREE.Object3D();
    pivot_lr_lid_A_right.add(side_lr_lid_A_right);
    pivot_lr_lid_A_right.position.set(A, 0, 0);

    var pivot_lid_A_top = new THREE.Object3D();
    pivot_lid_A_top.add(
        side_lid_A_top,
        pivot_Glue_lid,
        pivot_lr_lid_A_left,
        pivot_lr_lid_A_right
    );
    pivot_lid_A_top.position.set(0, C, 0);

    var pivot_lr_lid_B_top_left = new THREE.Object3D();
    pivot_lr_lid_B_top_left.add(side_lr_lid_B_top_left);

    var pivot_lr_lid_B_top_right = new THREE.Object3D();
    pivot_lr_lid_B_top_right.add(side_lr_lid_B_top_right);
    pivot_lr_lid_B_top_right.position.set(A, 0, 0);

    var pivot_Top = new THREE.Object3D();
    pivot_Top.add(
        side_B_top,
        pivot_lr_lid_B_top_left,
        pivot_lr_lid_B_top_right,
        pivot_lid_A_top
    );
    pivot_Top.position.set(0, B, 0);

    var pivot_lr_lid_B_bottom_left = new THREE.Object3D();
    pivot_lr_lid_B_bottom_left.add(side_lr_lid_B_bottom_left);

    var pivot_lr_lid_B_bottom_right = new THREE.Object3D();
    pivot_lr_lid_B_bottom_right.add(side_lr_lid_B_bottom_right);
    pivot_lr_lid_B_bottom_right.position.set(A, 0, 0);

    var pivot_Bottom = new THREE.Object3D();
    pivot_Bottom.add(
        side_B_bottom,
        pivot_lr_lid_B_bottom_left,
        pivot_lr_lid_B_bottom_right
    );

    var pivot_Left = new THREE.Object3D();
    pivot_Left.add(side_Left);

    var pivot_Right = new THREE.Object3D();
    pivot_Right.add(side_Right);
    pivot_Right.position.set(A, 0, 0);

    pivot_All = new THREE.Object3D();
    pivot_All.add(
        pivot_Back,
        pivot_Top,
        pivot_Bottom,
        pivot_Left,
        pivot_Right
    )
    scene.add(pivot_All);

    /* ********** Edges - เส้น ********** */

    /* เซทฉาก */



    /* จุดหมุน */



    /* ********** Edges - เส้น ********** */

    // Webgl Render
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    document.getElementById("webgl").append(renderer.domElement);

    // The Mouse Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 10;

    // setInterval(rotations(), 5000);
};

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

const updateSize = (a, b, c) => {
    A = a;
    B = b;
    C = c;

    var initDiv = document.getElementById("webgl");
    var newDiv = document.createElement("div");
    newDiv.id = "webgl";

    initDiv.remove();
    document.getElementById("main").appendChild(newDiv);

    return main();
};

const main = () => {
    init();
    animate();
};

export default {
    main,
    updateSize,
};