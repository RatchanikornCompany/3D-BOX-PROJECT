import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 100;
var C = 40;
var D = 15;
var w = window.innerWidth;
var h = window.innerHeight / 1.2;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

var edges;

// var side_A_back;
// var side_A_back;
// var side_B_left;
// var side_B_right;
// var side_left_lid;
// var side_left_lid_d;
// var side_right_lid;
// var side_right_lid_d;
// var side_top_A_back;
// var side_top_A_lid_top_back;
// var side_glue_lid;
// var side_top_A_front;
// var side_top_A_lid_top_front;
// var side_bottom_A_front;
// var side_lid_bottom_A_front;
// var side_lid_d_bottom_A_front;
// var side_bottom_A_back;
// var side_lid_bottom_A_back;
// var side_lid_d_bottom_A_back;

// var side_A_back_edges;
// var side_A_back_edges;
// var side_B_left_edges;
// var side_B_right_edges;
// var side_left_lid_edges;
// var side_left_lid_d_edges;
// var side_right_lid_edges;
// var side_right_lid_d_edges;
// var side_top_A_back_edges;
// var side_top_A_lid_top_back_edges;
// var side_glue_lid_edges;
// var side_top_A_front_edges;
// var side_top_A_lid_top_front_edges;
// var side_bottom_A_front_edges;
// var side_lid_bottom_A_front_edges;
// var side_lid_d_bottom_A_front_edges;
// var side_bottom_A_back_edges;
// var side_lid_bottom_A_back_edges;
// var side_lid_d_bottom_A_back_edges;

// var pivot_Bottom_front;
// var pivot_Bottom_front_lid;
// var pivot_Bottom_front_lid_d;
// var pivot_group_Bottom_front;
// var pivot_front;
// var pivot_Right_lid;
// var pivot_Right_lid_d;
// var pivot_group_right;
// var pivot_Left_lid;
// var pivot_Left_lid_d;
// var pivot_Left;
// var pivot_Glue_lid;
// var pivot_Top_back;
// var pivot_Top_back_lid;
// var pivot_Group_top_back;
// var pivot_Bottom_back;
// var pivot_Bottom_back_lid;
// var pivot_Bottom_back_lid_d;
// var pivot_Group_bottom_back;
// var pivot_Back;
// var pivot_group_left;
// var pivot_Top_front;
// var pivot_Top_front_lid;
// var pivot_top;
// var pivot_all;

// var pivot_Bottom_front_edges;
// var pivot_Bottom_front_lid_edges;
// var pivot_Bottom_front_lid_d_edges;
// var pivot_group_Bottom_front_edges;
// var pivot_front_edges;
// var pivot_Right_lid_edges;
// var pivot_Right_lid_d_edges;
// var pivot_group_right_edges;
// var pivot_Left_lid_edges;
// var pivot_Left_lid_d_edges;
// var pivot_Left_edges;
// var pivot_Glue_lid_edges;
// var pivot_Top_back_edges;
// var pivot_Top_back_lid_edges;
// var pivot_Group_top_back_edges;
// var pivot_Group_top_back_edges;
// var pivot_Bottom_back_edges;
// var pivot_Bottom_back_lid_edges;
// var pivot_Bottom_back_lid_d_edges;
// var pivot_Group_bottom_back_edges;
// var pivot_Back_edges;
// var pivot_group_left_edges;
// var pivot_Top_front_edges;
// var pivot_Top_front_lid_edges;
// var pivot_top_edges;
// var pivot_all_edges;

const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

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

    /* สร้างรูปทรง */

    var lid_C_top_bottom_shape = new THREE.Shape();
    lid_C_top_bottom_shape.moveTo(0, 0);
    lid_C_top_bottom_shape.lineTo(0, C);
    lid_C_top_bottom_shape.lineTo((A * 0.075) | 0, C);
    lid_C_top_bottom_shape.lineTo((A * 0.075) | 0, (C * 0.38) | 0);
    lid_C_top_bottom_shape.lineTo((A * 0.925) | 0, (C * 0.38) | 0);
    lid_C_top_bottom_shape.lineTo((A * 0.925) | 0, C);
    lid_C_top_bottom_shape.lineTo(A, C);
    lid_C_top_bottom_shape.lineTo(A, 0);

    var lr_lid_C_top_bottom_shape = new THREE.Shape();
    lr_lid_C_top_bottom_shape.moveTo(0, 0);
    lr_lid_C_top_bottom_shape.lineTo(0, C);
    lr_lid_C_top_bottom_shape.lineTo((A * 0.85) | 0, C);
    lr_lid_C_top_bottom_shape.lineTo((A * 0.85) | 0, 0);

    var lid_B_left_right_shape = new THREE.Shape();
    lid_B_left_right_shape.moveTo(0, 0);
    lid_B_left_right_shape.lineTo((B * 0.15) | 0, (C * 0.375) | 0);
    lid_B_left_right_shape.lineTo((B * 0.85) | 0, (C * 0.375) | 0);
    lid_B_left_right_shape.lineTo(B, 0);

    var lr_lid_B_left_right_shape = new THREE.Shape();
    lr_lid_B_left_right_shape.moveTo(0, 0);
    lr_lid_B_left_right_shape.lineTo(0, C);
    lr_lid_B_left_right_shape.lineTo((A * 0.4), C);
    lr_lid_B_left_right_shape.lineTo((A * 0.4), 0);

    var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
    var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
    var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา

    var lid_C_top_bottom = new THREE.ShapeGeometry(lid_C_top_bottom_shape);
    var lr_lid_C_top_bottom = new THREE.ShapeGeometry(lr_lid_C_top_bottom_shape);
    var lid_B_left_right = new THREE.ShapeGeometry(lid_B_left_right_shape);
    var lr_lid_B_left_right = new THREE.ShapeGeometry(lr_lid_B_left_right_shape);

    /* ฉาก */

    var side_A_back = new THREE.Mesh(plane_A_side, material);
    side_A_back.position.x = A / 2;
    side_A_back.position.y = B / 2;

    var side_lr_lid_B_left = new THREE.Mesh(lr_lid_B_left_right, material);
    side_lr_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

    var side_lid_B_left = new THREE.Mesh(lid_B_left_right, material);
    side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

    var side_B_left = new THREE.Mesh(plane_B_side, material);
    side_B_left.position.set(-C / 2, B / 2, 0);

    var side_lr_lid_B_right = new THREE.Mesh(lr_lid_B_left_right, material);
    side_lr_lid_B_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);

    var side_lid_B_right = new THREE.Mesh(lid_B_left_right, material);
    side_lid_B_right.rotation.set(0, 0, (Math.PI / 180) * 270);
    side_lid_B_right.position.set(0, B, 0);

    var side_B_right = new THREE.Mesh(plane_B_side, material);
    side_B_right.position.set(C / 2, B / 2, 0);

    var side_lr_lid_C_top = new THREE.Mesh(lr_lid_C_top_bottom, material);

    var side_lid_C_top = new THREE.Mesh(lid_C_top_bottom, material);

    var side_A_top = new THREE.Mesh(plane_C_side, material);
    side_A_top.position.set(A / 2, C / 2, 0);

    var side_lr_lid_C_bottom = new THREE.Mesh(lr_lid_C_top_bottom, material);
    side_lr_lid_C_bottom.rotation.set(Math.PI, 0, 0);

    var side_lid_C_bottom = new THREE.Mesh(lid_C_top_bottom, material);
    side_lid_C_bottom.rotation.x = (Math.PI / 180) * 180;

    var side_A_bottom = new THREE.Mesh(plane_C_side, material);
    side_A_bottom.position.set(A / 2, -C / 2, 0);

    /* จุดหมุน */

    var pivot_Back = new THREE.Object3D();
    pivot_Back.add(side_A_back);

    var pivot_lr_lid_B_left = new THREE.Object3D();
    pivot_lr_lid_B_left.add(side_lr_lid_B_left);
    pivot_lr_lid_B_left.position.set(-C / (C / 15), B / 10, 0);

    var pivot_lid_B_left = new THREE.Object3D();
    pivot_lid_B_left.add(
        side_lid_B_left,
        pivot_lr_lid_B_left
    );
    pivot_lid_B_left.position.set(-C, 0, 0);

    var pivot_Left = new THREE.Object3D();
    pivot_Left.add(
        side_B_left,
        pivot_lid_B_left
    );

    var pivot_lr_lid_B_right = new THREE.Object3D();
    pivot_lr_lid_B_right.add(side_lr_lid_B_right);
    pivot_lr_lid_B_right.position.set(C / (C / 15), B / 10, 0);

    var pivot_lid_B_right = new THREE.Object3D();
    pivot_lid_B_right.add(
        side_lid_B_right,
        pivot_lr_lid_B_right
    );
    pivot_lid_B_right.position.set(C, 0, 0);

    var pivot_Right = new THREE.Object3D();
    pivot_Right.add(side_B_right, pivot_lid_B_right);
    pivot_Right.position.set(A, 0, 0);

    var pivot_lr_lid_A_top = new THREE.Object3D();
    pivot_lr_lid_A_top.add(side_lr_lid_C_top);
    pivot_lr_lid_A_top.position.set((A * 0.075) | 0, (C * 0.375) | 0, 0);

    var pivot_lid_A_top = new THREE.Object3D();
    pivot_lid_A_top.add(side_lid_C_top, pivot_lr_lid_A_top);
    pivot_lid_A_top.position.set(0, C, 0);

    var pivot_Top = new THREE.Object3D();
    pivot_Top.add(side_A_top, pivot_lid_A_top);
    pivot_Top.position.set(0, B, 0);

    var pivot_lr_lid_A_bottom = new THREE.Object3D();
    pivot_lr_lid_A_bottom.add(side_lr_lid_C_bottom);
    pivot_lr_lid_A_bottom.position.set((A * 0.075) | 0, (-C * 0.375) | 0, 0);

    var pivot_lid_A_bottom = new THREE.Object3D();
    pivot_lid_A_bottom.add(side_lid_C_bottom, pivot_lr_lid_A_bottom);
    pivot_lid_A_bottom.position.set(0, -C, 0);

    var pivot_Bottom = new THREE.Object3D();
    pivot_Bottom.add(side_A_bottom, pivot_lid_A_bottom);

    var pivot_All = new THREE.Object3D();
    pivot_All.add(
        pivot_Back,
        pivot_Left,
        pivot_Right,
        pivot_Top,
        pivot_Bottom
    )
    scene.add(pivot_All);

    /* ********** Edges - เส้น ********** */

    /* เซทฉาก */



    /* จุดหมุน */



    /* End Region */

    // Webgl Render
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    document.getElementById("webgl").append(renderer.domElement);

    // The Mouse Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 10;

    setInterval(rotations(), 5000);
};

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

const rotations = () => {
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
