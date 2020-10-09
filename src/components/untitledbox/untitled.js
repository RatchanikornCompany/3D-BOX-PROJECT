import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 200;
var B = 150;
var C = 50;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight / 1.2;
var L = 0.3; // เปอร์เซนนต์
var P = 5; // ความกว้างเฉพาะด้านของฝาเสียบกาว
var leng_lr_lib = A * L;

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

    var lr_lid_A_left_right_shape = new THREE.Shape();
    lr_lid_A_left_right_shape.moveTo(0, 0);
    lr_lid_A_left_right_shape.lineTo(10, 50);
    lr_lid_A_left_right_shape.lineTo(140, 50);
    lr_lid_A_left_right_shape.lineTo(150, 0);

    var lid_B_left_right_shape = new THREE.Shape();
    lid_B_left_right_shape.moveTo(0, 0);
    lid_B_left_right_shape.lineTo(0, (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 0.5) | 0, (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 0.5) | 0, (B * 0.367) | 0);
    lid_B_left_right_shape.lineTo(C, (B * 0.367) | 0);
    lid_B_left_right_shape.lineTo(C, (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 2) | 0, (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 2) | 0, (B * 0.367) | 0);
    lid_B_left_right_shape.lineTo((C * 2.5) | 0, (B * 0.367) | 0);
    lid_B_left_right_shape.lineTo((C * 2.5) | 0, (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 3), (B * 0.333) | 0);
    lid_B_left_right_shape.lineTo((C * 3), 0);

    var dust_flap_shape = new THREE.Shape();
    dust_flap_shape.moveTo(0, 0);
    dust_flap_shape.lineTo(0, C);
    dust_flap_shape.lineTo((A * 0.25) | 0, C);
    dust_flap_shape.lineTo((A * 0.25) | 0, 0);

    /* สร้างรูปทรง */

    var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
    var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
    var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา

    var lid_B_left_right = new THREE.ShapeGeometry(lid_B_left_right_shape);
    var lr_lid_A_left_right = new THREE.ShapeGeometry(lr_lid_A_left_right_shape);
    var dust_flap_shape = new THREE.ShapeGeometry(dust_flap_shape);

    /* ฉาก */

    var side_A_back = new THREE.Mesh(plane_A_side, material);
    side_A_back.position.x = A / 2;
    side_A_back.position.y = B / 2;

    var side_lid_B_left = new THREE.Mesh(lid_B_left_right, material);
    side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90)

    var side_B_left = new THREE.Mesh(plane_B_side, material);
    side_B_left.position.set(-C / 2, B / 2, 0);

    var side_lid_B_right = new THREE.Mesh(lid_B_left_right, material);
    side_lid_B_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90)

    var side_B_right = new THREE.Mesh(plane_B_side, material);
    side_B_right.position.set(C / 2, B / 2, 0);

    var side_lr_lid_A_top = new THREE.Mesh(plane_C_side, material);
    side_lr_lid_A_top.position.x = A / 2;
    side_lr_lid_A_top.position.y = B / 6;

    var side_lr_lid_A_top_left = new THREE.Mesh(lr_lid_A_left_right, material);
    side_lr_lid_A_top_left.rotation.set(0, 0, (Math.PI / 180) * 90)

    var side_lr_lid_A_top_right = new THREE.Mesh(lr_lid_A_left_right, material);
    side_lr_lid_A_top_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90)

    var side_lid_A_top = new THREE.Mesh(plane_A_side, material);
    side_lid_A_top.position.x = A / 2;
    side_lid_A_top.position.y = B / 2;

    var side_dust_flap_Top_left = new THREE.Mesh(dust_flap_shape, material);
    side_dust_flap_Top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

    var side_dust_flap_Top_right = new THREE.Mesh(dust_flap_shape, material);

    var side_A_top = new THREE.Mesh(plane_C_side, material);
    side_A_top.position.set(A / 2, C / 2, 0);

    var side_dust_flap_Bottom_left = new THREE.Mesh(dust_flap_shape, material);
    side_dust_flap_Bottom_left.rotation.set((Math.PI / 180) * 180, (Math.PI / 180) * 180, 0);

    var side_dust_flap_Bottom_right = new THREE.Mesh(dust_flap_shape, material);
    side_dust_flap_Bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

    var side_A_bottom = new THREE.Mesh(plane_C_side, material);
    side_A_bottom.position.set(A / 2, -C / 2, 0);

    /* จุดหมุน */

    var pivot_Back = new THREE.Object3D();
    pivot_Back.add(side_A_back);

    var pivot_lid_B_left = new THREE.Object3D();
    pivot_lid_B_left.add(side_lid_B_left);
    pivot_lid_B_left.position.set(-C, 0, 0);

    var pivot_Left = new THREE.Object3D();
    pivot_Left.add(
        side_B_left,
        pivot_lid_B_left
    );

    var pivot_lid_B_right = new THREE.Object3D();
    pivot_lid_B_right.add(side_lid_B_right);
    pivot_lid_B_right.position.set(C, 0, 0);

    var pivot_Right = new THREE.Object3D();
    pivot_Right.add(
        side_B_right,
        pivot_lid_B_right
    );
    pivot_Right.position.set(A, 0, 0);

    var pivot_lr_lid_A_top = new THREE.Object3D();
    pivot_lr_lid_A_top.add(side_lr_lid_A_top);
    pivot_lr_lid_A_top.position.set(0, B, 0);

    var pivot_lr_lid_A_top_left = new THREE.Object3D();
    pivot_lr_lid_A_top_left.add(side_lr_lid_A_top_left);

    var pivot_lr_lid_A_top_right = new THREE.Object3D();
    pivot_lr_lid_A_top_right.add(side_lr_lid_A_top_right);
    pivot_lr_lid_A_top_right.position.set(A, 0, 0);

    var pivot_lid_A_top = new THREE.Object3D();
    pivot_lid_A_top.add(
        side_lid_A_top,
        pivot_lr_lid_A_top,
        pivot_lr_lid_A_top_left,
        pivot_lr_lid_A_top_right
    );
    pivot_lid_A_top.position.set(0, C, 0);

    var pivot_dust_flap_Top_left = new THREE.Object3D();
    pivot_dust_flap_Top_left.add(side_dust_flap_Top_left);

    var pivot_dust_flap_Top_right = new THREE.Object3D();
    pivot_dust_flap_Top_right.add(side_dust_flap_Top_right);
    pivot_dust_flap_Top_right.position.set(A, 0, 0);

    var pivot_Top = new THREE.Object3D();
    pivot_Top.add(
        side_A_top,
        pivot_lid_A_top,
        pivot_dust_flap_Top_left,
        pivot_dust_flap_Top_right
    );
    pivot_Top.position.set(0, B, 0);

    var pivot_dust_flap_Bottom_left = new THREE.Object3D();
    pivot_dust_flap_Bottom_left.add(side_dust_flap_Bottom_left);

    var pivot_dust_flap_Bottom_right = new THREE.Object3D();
    pivot_dust_flap_Bottom_right.add(side_dust_flap_Bottom_right);
    pivot_dust_flap_Bottom_right.position.set(A, 0, 0);

    var pivot_Bottom = new THREE.Object3D();
    pivot_Bottom.add(
        side_A_bottom,
        pivot_dust_flap_Bottom_left,
        pivot_dust_flap_Bottom_right
    );

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