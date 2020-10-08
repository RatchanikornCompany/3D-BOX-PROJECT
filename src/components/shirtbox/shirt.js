import React, { Fragment } from "react";
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

//

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

    var inner_Flap_top_bottom_shape = new THREE.Shape();
    inner_Flap_top_bottom_shape.moveTo(0, 0);
    inner_Flap_top_bottom_shape.lineTo(0, (C * 0.225) | 0);
    inner_Flap_top_bottom_shape.lineTo((A * 0.025) | 0, (C * 0.225) | 0);
    inner_Flap_top_bottom_shape.lineTo((A * 0.025) | 0, (C * 0.35) | 0);
    inner_Flap_top_bottom_shape.lineTo((A * 0.975) | 0, (C * 0.35) | 0);
    inner_Flap_top_bottom_shape.lineTo((A * 0.975) | 0, (C * 0.225) | 0);
    inner_Flap_top_bottom_shape.lineTo(A, (C * 0.225) | 0);
    inner_Flap_top_bottom_shape.lineTo(A, 0);

    var inner_Flap_left_right_shape = new THREE.Shape();
    inner_Flap_left_right_shape.moveTo(0, 0);
    inner_Flap_left_right_shape.lineTo(0, (C * 0.225) | 0);
    inner_Flap_left_right_shape.lineTo((B * 0.05) | 0, (C * 0.225) | 0);
    inner_Flap_left_right_shape.lineTo((B * 0.05) | 0, (C * 0.35) | 0);
    inner_Flap_left_right_shape.lineTo((B * 0.95) | 0, (C * 0.35) | 0);
    inner_Flap_left_right_shape.lineTo((B * 0.95) | 0, (C * 0.225) | 0);
    inner_Flap_left_right_shape.lineTo(B, (C * 0.225) | 0);
    inner_Flap_left_right_shape.lineTo(B, 0);

    var dust_flap_half_Top_shape = new THREE.Shape();
    dust_flap_half_Top_shape.moveTo(0, 0);
    dust_flap_half_Top_shape.lineTo(0, C);
    dust_flap_half_Top_shape.lineTo((C * 0.875) | 0, (C * 0.875) | 0);

    var dust_flap_half_Bottom_shape = new THREE.Shape();
    dust_flap_half_Bottom_shape.moveTo(0, 0);
    dust_flap_half_Bottom_shape.lineTo((C * 0.875) | 0, (C * 0.875) | 0);
    dust_flap_half_Bottom_shape.lineTo(C, 0);

    var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
    var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
    var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา

    var inner_Flap_top_bottom = new THREE.ShapeGeometry(inner_Flap_top_bottom_shape);
    var inner_Flap_left_right = new THREE.ShapeGeometry(inner_Flap_left_right_shape);
    var dust_flap_half_Top = new THREE.ShapeGeometry(dust_flap_half_Top_shape);
    var dust_flap_half_Bottom = new THREE.ShapeGeometry(dust_flap_half_Bottom_shape);

    /* ฉาก */

    var side_A_back = new THREE.Mesh(plane_A_side, material);
    side_A_back.position.x = A / 2;
    side_A_back.position.y = B / 2;

    var side_inner_Flap_left = new THREE.Mesh(inner_Flap_left_right, material);
    side_inner_Flap_left.rotation.set(0, 0, (Math.PI / 180) * 90);

    var side_lid_B_left = new THREE.Mesh(plane_B_side, material);
    side_lid_B_left.position.set(-C / 2, B / 2, 0);







    var side_B_left = new THREE.Mesh(plane_B_side, material);
    side_B_left.position.set(-C / 2, B / 2, 0);

    var side_inner_Flap_right = new THREE.Mesh(inner_Flap_left_right, material);
    side_inner_Flap_right.rotation.set((Math.PI / 180) * 180, 0, -(Math.PI / 180) * 90);

    var side_lid_B_right = new THREE.Mesh(plane_B_side, material);
    side_lid_B_right.position.set(C / 2, B / 2, 0);









    var side_B_right = new THREE.Mesh(plane_B_side, material);
    side_B_right.position.set(C / 2, B / 2, 0);

    var side_inner_Flap_top = new THREE.Mesh(inner_Flap_top_bottom, material);

    var side_lid_C_top = new THREE.Mesh(plane_C_side, material);
    side_lid_C_top.position.set(A / 2, C / 2, 0);













    var side_A_top = new THREE.Mesh(plane_C_side, material);
    side_A_top.position.set(A / 2, C / 2, 0);

    var side_inner_Flap_bottom = new THREE.Mesh(inner_Flap_top_bottom, material);
    side_inner_Flap_bottom.rotation.set((Math.PI / 180) * 180, 0, 0);

    var side_lid_C_bottom = new THREE.Mesh(plane_C_side, material);
    side_lid_C_bottom.position.set(A / 2, -C / 2, 0);













    var side_A_bottom = new THREE.Mesh(plane_C_side, material);
    side_A_bottom.position.set(A / 2, -C / 2, 0);

    /* จุดหมุน */

    var pivot_Back = new THREE.Object3D();
    pivot_Back.add(side_A_back);
    scene.add(pivot_Back);

    var pivot_inner_Flap_left = new THREE.Object3D();
    pivot_inner_Flap_left.add(side_inner_Flap_left);
    pivot_inner_Flap_left.position.set(-C, 0, 0);

    var pivot_lid_B_left = new THREE.Object3D();
    pivot_lid_B_left.add(
        side_lid_B_left,
        pivot_inner_Flap_left
    );
    pivot_lid_B_left.position.set(-C, 0, 0);

    var pivot_Left = new THREE.Object3D();
    pivot_Left.add(
        side_B_left,
        pivot_lid_B_left
    );
    scene.add(pivot_Left);

    var pivot_inner_Flap_right = new THREE.Object3D();
    pivot_inner_Flap_right.add(side_inner_Flap_right);
    pivot_inner_Flap_right.position.set(C, 0, 0);

    var pivot_lid_B_right = new THREE.Object3D();
    pivot_lid_B_right.add(
        side_lid_B_right,
        pivot_inner_Flap_right
    );
    pivot_lid_B_right.position.set(C, 0, 0);

    var pivot_Right = new THREE.Object3D();
    pivot_Right.add(
        side_B_right,
        pivot_lid_B_right
    );
    pivot_Right.position.set(A, 0, 0);
    scene.add(pivot_Right);

    var pivot_inner_Flap_top = new THREE.Object3D();
    pivot_inner_Flap_top.add(side_inner_Flap_top)
    pivot_inner_Flap_top.position.set(0, C, 0)

    var pivot_lid_A_top = new THREE.Object3D();
    pivot_lid_A_top.add(
        side_lid_C_top,
        pivot_inner_Flap_top
    );
    pivot_lid_A_top.position.set(0, C, 0);

    var pivot_Top = new THREE.Object3D();
    pivot_Top.add(
        side_A_top,
        pivot_lid_A_top
    );
    pivot_Top.position.set(0, B, 0);
    scene.add(pivot_Top);

    var pivot_inner_Flap_bottom = new THREE.Object3D();
    pivot_inner_Flap_bottom.add(side_inner_Flap_bottom)
    pivot_inner_Flap_bottom.position.set(0, -C, 0)

    var pivot_lid_A_bottom = new THREE.Object3D();
    pivot_lid_A_bottom.add(
        side_lid_C_bottom,
        pivot_inner_Flap_bottom
    );
    pivot_lid_A_bottom.position.set(0, -C, 0);

    var pivot_Bottom = new THREE.Object3D();
    pivot_Bottom.add(
        side_A_bottom,
        pivot_lid_A_bottom
    );
    scene.add(pivot_Bottom)

    var pivot_All = new THREE.Object3D();
    pivot_All.add(
        // pivot_Back,
        // pivot_Left,
        // pivot_Right,
        // pivot_Top,
        // pivot_Bottom
    )
    // scene.add(pivot_All);

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
    // rotations1,
    // rotations2,
    updateSize,
};
