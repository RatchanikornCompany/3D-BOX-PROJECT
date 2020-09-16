import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

var controls, renderer, scene, camera;

var A = 100;
var B = 100;
var C = 100;
var w = window.innerWidth;
var h = window.innerHeight;
var L = 0.3;
var leng_lr_lib = A * L;

var pivot_lid_b_left;
var pivot_lid_b_left_d;
var pivot_all;

const ThreeM = () => {
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

    // ลิ้นกันฝุ่น
    var lid_shape_d = new THREE.Shape();

    lid_shape_d.moveTo(0, 0);
    lid_shape_d.lineTo(0, (A * 0.47) | 0); // 0, 24
    lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.47) | 0); // 26, 24
    lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.29) | 0); // 26, 15
    lid_shape_d.lineTo(B, 0); // 52, 0
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

    var lr_lid = new THREE.ShapeGeometry(lid_shape_d);
    var lr_lid_d = new THREE.ShapeGeometry(lr_lid_shape_d);

    // เซทฉาก

    var side_lid_b_left = new THREE.Mesh(lr_lid, material);
    var side_lid_b_left_d = new THREE.Mesh(lr_lid_d, material);

    // สร้างจุดหมุน

    pivot_lid_b_left = new THREE.Object3D();
    pivot_lid_b_left.add(side_lid_b_left);

    pivot_lid_b_left_d = new THREE.Object3D();
    pivot_lid_b_left_d.add(side_lid_b_left_d);

    pivot_all = new THREE.Object3D();
    scene.add(pivot_all);
    pivot_all.add(pivot_lid_b_left, pivot_lid_b_left_d);

    /* ********** Model Created ********** */

    //Webgl Render
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    document.getElementById("webgl").append(renderer.domElement);

    //The mouse controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 10;
  };

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  return (
    <Fragment>
      {init()}
      {animate()}
    </Fragment>
  );
};

export default ThreeM;
