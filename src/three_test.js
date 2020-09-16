import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

var controls, renderer, scene, camera;

var A = 52;
var B = 52;
var C = 175;
var D = 0.5;
var w = window.innerWidth;
var h = window.innerHeight;
var L = 0.3;
var P = 5;
var leng_lr_lib = A * L;

var pivot_group_a_front;
var pivot_a_front;
var pivot_glue_lid;
var pivot_a_back;
var pivot_bottom_lid;
var pivot_group_bottom;
var pivot_bottom;
var pivot_group_a_back;
var pivot_lid_b_left;
var pivot_lid_b_left_d;
var pivot_lr_lid_b_left_d;
var pivot_groub_b_left_d;
var pivot_b_left;
var pivot_lid_b_right;
var pivot_lid_b_right_d;
var pivot_lr_lid_b_right_d;
var pivot_group_b_right_d;
var pivot_b_right;
var pivot_top_lid;
var pivot_top;
var pivot_all;

const ThreeT = () => {
  const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //เซ็ทตำแหน่งของกล้อง
    camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 800;

    //สร้างแกนหมุน
    const axesHelper = new THREE.AxesHelper(700);
    scene.add(axesHelper);

    //เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน
    const material = new THREE.MeshBasicMaterial({
      color: "#FFFFFF",
      side: THREE.DoubleSide,
      wireframe: true,
    });

    /* ********** Model Created ********** */

    // ลิ้นกันฝุ่น
    var lr_lid_shape = new THREE.Shape();

    lr_lid_shape.moveTo(0, 0);
    // Front ....................................................
    lr_lid_shape.lineTo(0, (leng_lr_lib * 0.1) | 0);
    lr_lid_shape.lineTo(B * 0.05, (leng_lr_lib * 0.15) | 0);
    lr_lid_shape.lineTo(B * 0.15, (leng_lr_lib * 0.9) | 0);
    // Center ...................................................
    lr_lid_shape.lineTo(B * 0.2, leng_lr_lib);
    lr_lid_shape.lineTo(B, leng_lr_lib);
    // Rear......................................................
    lr_lid_shape.lineTo(B, 0);
    lr_lid_shape.lineTo(0, 0);

    // ลิ้นด้านล่าง
    var lid_shape_d = new THREE.Shape();

    lid_shape_d.moveTo(0, 0);
    lid_shape_d.lineTo(0, (A * 0.47) | 0);
    lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.47) | 0);
    lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.29) | 0);
    lid_shape_d.lineTo(B, 0);
    lid_shape_d.lineTo(0, 0);

    var lr_lid_shape_d = new THREE.Shape();

    lr_lid_shape_d.moveTo(0, 0);
    lr_lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.47) | 0);
    lr_lid_shape_d.bezierCurveTo(
      (B * 0.5) | 0,
      (A * 0.47) | 0,
      (B * 0.75) | 0,
      (A * 0.47) | 0,
      (B * 0.5) | 0,
      (A * 0.29) | 0
    );
    lr_lid_shape_d.lineTo(0, 0);

    // ฝาเสียบ
    var lid_shape = new THREE.Shape();

    lid_shape.moveTo(0, 0);
    lid_shape.lineTo(A, 0);
    lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
    lid_shape.lineTo(A / 10, -P);
    lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

    // ฝาเสียบกาว
    var glue_lid_shape = new THREE.Shape();

    glue_lid_shape.moveTo(0, 0);
    glue_lid_shape.lineTo(C, 0);
    glue_lid_shape.moveTo(0, 0);
    glue_lid_shape.lineTo(C, 0);
    glue_lid_shape.bezierCurveTo(
      C,
      0,
      C - C / 35,
      -(P - P / 35),
      C - C / 10,
      -P
    );
    glue_lid_shape.lineTo(C / 10, -P);
    glue_lid_shape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

    // ฝาเสียบล่าง
    var lid_bottom_shape = new THREE.Shape();

    lid_bottom_shape.moveTo(0, 0);
    lid_bottom_shape.lineTo(0, (A * 0.69) | 0);
    lid_bottom_shape.lineTo((B * 0.2) | 0, (A * 0.69) | 0);
    lid_bottom_shape.lineTo((B * 0.2) | 0, (A * 0.47) | 0);
    lid_bottom_shape.lineTo((B * 0.8) | 0, (A * 0.47) | 0);
    lid_bottom_shape.lineTo((B * 0.8) | 0, (A * 0.69) | 0);
    lid_bottom_shape.lineTo(B, (A * 0.69) | 0);
    lid_bottom_shape.lineTo(B);

    // ตัวเสียบล่าง
    var lr_lid_bottom = new THREE.Shape();

    lr_lid_bottom.moveTo(0, 0);
    lr_lid_bottom.lineTo((B * 0.3) | 0, (A * 0.47) | 0);
    lr_lid_bottom.lineTo((B * 0.73) | 0, (A * 0.47) | 0);
    lr_lid_bottom.lineTo(B, 0);

    // ลิ้นเสียบล่าง
    var lid_bottom_cover_shape = new THREE.Shape();

    lid_bottom_cover_shape.moveTo((B * 0.47) | 0, (A * 0.3) | 0);
    lid_bottom_cover_shape.lineTo((B * 0.47) | 0, (A * 0.3) | 0);
    lid_bottom_cover_shape.lineTo((B *0.81) | 0, (A * 0.3) | 0);
    lid_bottom_cover_shape.lineTo((B *0.81) | 0, (A * 0.73) | 0);
    lid_bottom_cover_shape.lineTo((B * 0.47) | 0, (A * 0.73) | 0);

    /* ********** Model Created ********** */

    var plane_side_A = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
    var plane_side_B = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
    var plane_top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา

    var lid_cover = new THREE.ShapeGeometry(lid_shape);
    var lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape);
    var lr_lid_bottom = new THREE.ShapeGeometry(lr_lid_bottom);
    var lid_bottom_cover = new THREE.ShapeGeometry(lid_bottom_cover_shape);
    var lr_lid = new THREE.ShapeGeometry(lr_lid_shape);
    var lid_d = new THREE.ShapeGeometry(lid_shape_d);
    var lr_lid_d = new THREE.ShapeGeometry(lr_lid_shape_d);
    var glue_lid = new THREE.ShapeGeometry(glue_lid_shape);

    // เซทฉาก

    var side_A_front = new THREE.Mesh(plane_side_A, material);
    side_A_front.position.x = A / 2;
    side_A_front.position.y = C / 2;

    var side_A_back = new THREE.Mesh(plane_side_A, material);
    side_A_back.position.x = -A / 2;
    side_A_back.position.y = C / 2;

    var side_glue_lid = new THREE.Mesh(glue_lid, material);
    side_glue_lid.rotation.y = Math.PI;
    side_glue_lid.rotation.z = Math.PI / 2;

    var side_bottom = new THREE.Mesh(lr_lid_bottom, material);
    side_bottom.rotation.x = Math.PI;
    side_bottom.rotation.y = Math.PI;

    var side_lid_bottom = new THREE.Mesh(lid_bottom_cover, material);
    side_lid_bottom.rotation.x = Math.PI;
    side_lid_bottom.rotation.z = Math.PI / 2;

    var side_B_left = new THREE.Mesh(plane_side_B, material);
    side_B_left.position.x = -B / 2;
    side_B_left.position.y = C / 2;

    var side_lid_b_left = new THREE.Mesh(lr_lid, material);

    var side_b_left_d = new THREE.Mesh(lid_d, material);
    side_b_left_d.rotation.x = Math.PI;

    var side_lid_b_left_d = new THREE.Mesh(lr_lid_d, material);
    side_lid_b_left_d.rotation.x = Math.PI;

    var side_B_right = new THREE.Mesh(plane_side_B, material);
    side_B_right.position.x = B / 2;
    side_B_right.position.y = C / 2;

    var side_lid_b_right = new THREE.Mesh(lr_lid, material);
    side_lid_b_right.rotation.y = Math.PI;

    var side_b_right_d = new THREE.Mesh(lid_d, material);
    side_b_right_d.rotation.x = Math.PI;
    side_b_right_d.rotation.y = Math.PI;

    var side_lid_b_right_d = new THREE.Mesh(lr_lid_d, material);
    side_lid_b_right_d.rotation.x = Math.PI;
    side_lid_b_right_d.rotation.y = Math.PI;

    var side_lid_cover = new THREE.Mesh(lid_cover, material);
    side_lid_cover.rotation.x = Math.PI;

    var side_top = new THREE.Mesh(plane_top_bottom, material);
    side_top.position.x = A / 2;
    side_top.position.y = B / 2;

    var side_top_lid = new THREE.Mesh(lid_cover, material);
    side_top_lid.rotation.x = Math.PI;

    var side_A_bottom = new THREE.Mesh(lid_bottom, material);
    side_A_bottom.rotation.x = Math.PI;

    // สร้างจุดหมุน

    pivot_group_a_front = new THREE.Object3D();
    pivot_group_a_front.add(
      side_A_bottom
    );

    pivot_a_front = new THREE.Object3D();
    pivot_a_front.position.set(0, 0, 0);
    pivot_a_front.add(side_A_front, pivot_group_a_front);

    pivot_glue_lid = new THREE.Object3D();
    pivot_glue_lid.position.set(-A, 0, 0);
    pivot_glue_lid.add(side_glue_lid);

    pivot_a_back = new THREE.Object3D();
    pivot_a_back.position.set(0, 0, 0);
    pivot_a_back.add(side_A_back, pivot_glue_lid);

    pivot_bottom = new THREE.Object3D();
    pivot_bottom.position.set(0, 0, 0);
    pivot_bottom.add(side_bottom);

    pivot_bottom_lid = new THREE.Object3D();
    pivot_bottom_lid.position.set(0, 0, 0);
    pivot_bottom_lid.add(
      side_lid_bottom
    );

    pivot_group_bottom = new THREE.Object3D();
    pivot_group_bottom.position.set(0, 0, 0);
    pivot_group_bottom.add(
      pivot_bottom,
      pivot_bottom_lid
    );

    pivot_group_a_back = new THREE.Object3D();
    pivot_group_a_back.position.set(-B, 0, 0);
    pivot_group_a_back.add(
      pivot_a_back, 
      pivot_group_bottom
    );

    pivot_lid_b_left = new THREE.Object3D();
    pivot_lid_b_left.position.set(-B, C, 0);
    pivot_lid_b_left.add(side_lid_b_left);

    pivot_lid_b_left_d = new THREE.Object3D();
    pivot_lid_b_left_d.position.set(-B, 0, 0);
    pivot_lid_b_left_d.add(side_b_left_d);

    pivot_lr_lid_b_left_d = new THREE.Object3D();
    pivot_lr_lid_b_left_d.position.set(-B, 0, 0);
    pivot_lr_lid_b_left_d.add(side_lid_b_left_d);

    pivot_groub_b_left_d = new THREE.Object3D();
    pivot_groub_b_left_d.position.set(0, 0, 0);
    pivot_groub_b_left_d.add(pivot_lid_b_left_d, pivot_lr_lid_b_left_d);

    pivot_b_left = new THREE.Object3D();
    pivot_b_left.position.set(0, 0, 0);
    pivot_b_left.add(
      pivot_lid_b_left,
      side_B_left,
      pivot_groub_b_left_d,
      pivot_group_a_back
    );

    pivot_lid_b_right = new THREE.Object3D();
    pivot_lid_b_right.position.set(B, C, 0);
    pivot_lid_b_right.add(side_lid_b_right);

    pivot_lid_b_right_d = new THREE.Object3D();
    pivot_lid_b_right_d.position.set(B, 0, 0);
    pivot_lid_b_right_d.add(side_b_right_d);

    pivot_lr_lid_b_right_d = new THREE.Object3D();
    pivot_lr_lid_b_right_d.position.set(B, 0, 0);
    pivot_lr_lid_b_right_d.add(side_lid_b_right_d);

    pivot_group_b_right_d = new THREE.Object3D();
    pivot_group_b_right_d.position.set(0, 0, 0);
    pivot_group_b_right_d.add(pivot_lid_b_right_d, pivot_lr_lid_b_right_d);

    pivot_b_right = new THREE.Object3D();
    pivot_b_right.position.set(A, 0, 0);
    pivot_b_right.add(pivot_lid_b_right, side_B_right, pivot_group_b_right_d);

    pivot_top_lid = new THREE.Object3D();
    pivot_top_lid.position.set(0, B, 0);
    pivot_top_lid.add(side_top_lid);

    pivot_top = new THREE.Object3D();
    pivot_top.position.set(0, C | 0, 0);
    pivot_top.add(side_top, pivot_top_lid);

    pivot_all = new THREE.Object3D();
    scene.add(pivot_all);
    pivot_all.add(pivot_a_front, pivot_b_left, pivot_b_right, pivot_top);

    //Webgl Render
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    document.getElementById("webgl").append(renderer.domElement);

    //The mouse controls
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
    // pivot_b_right.rotation.y = -Math.PI / 2;
    // pivot_top.rotation.x = Math.PI / 2;
    // pivot_b_left.rotation.y = Math.PI / 2;
    // pivot_group_a_back.rotation.y = Math.PI / 2;
    // pivot_lid_b_left.rotation.x = Math.PI / 2;
    // pivot_lid_b_right.rotation.x = Math.PI / 2;
    // // pivot_lid_b_left_d.rotation.x = -Math.PI / 2;
    // // pivot_lid_b_right_d.rotation.x = -Math.PI / 2;
    // pivot_top_lid.rotation.x = Math.PI / 2;
    // pivot_glue_lid.rotation.y = Math.PI / 2;
    // pivot_group_a_front.rotation.x = -Math.PI / 2;
    // pivot_groub_b_left_d.rotation.x = -Math.PI / 2;
    // pivot_group_b_right_d.rotation.x = -Math.PI / 2;
    // pivot_group_bottom.rotation.x = -Math.PI / 2;
    // // pivot_lr_lid_b_left_d.rotation.x = Math.PI / 2;
    // // pivot_lr_lid_b_right_d.rotation.x = Math.PI / 2;
  };

  return (
    <Fragment>
      {init()}
      {animate()}
    </Fragment>
  );
};

export default ThreeT;
