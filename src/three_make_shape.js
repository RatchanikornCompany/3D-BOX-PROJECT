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

var pivot_lid_d;

var pivot_lr_lid_d;
var pivot_group;
var pivot_lid_bottom;

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

    /* ********** Model Created ********** */

    // ลิ้นด้านล่าง
    var lid_shape_d = new THREE.Shape();

    // lid_shape_d.moveTo(0, 0);
    // lid_shape_d.lineTo(0, (A * 0.47) | 0);
    // lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.47) | 0);
    // lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.29) | 0);
    // lid_shape_d.lineTo(B, 0);
    // lid_shape_d.lineTo(0, 0);

    var lr_lid_shape_d = new THREE.Shape();

    // lr_lid_shape_d.moveTo((B * 0.5) | 0, (A * 0.3) | 0);
    // lr_lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.3) | 0);
    // lr_lid_shape_d.lineTo((B * 0.5) | 0, (A * 0.47) | 0);
    // lr_lid_shape_d.lineTo((B * 0.57) | 0, (A * 0.47) | 0);

    var lid_bottom_shape = new THREE.Shape();

    lid_bottom_shape.moveTo(0, 0);

    // lid_bottom_shape.lineTo(0, (B * 0.69) | 0);
    // lid_bottom_shape.lineTo((A * 0.2) | 0, (B * 0.69) | 0);

    lid_bottom_shape.lineTo(0, (B * 0.5) | 0);

    lid_bottom_shape.lineTo((A * 0.2) | 0, (B * 0.5) | 0);
    lid_bottom_shape.lineTo((A * 0.8) | 0, (B * 0.5) | 0);

    lid_bottom_shape.lineTo(A, (B * 0.5) | 0);

    // lid_bottom_shape.lineTo((A * 0.8) | 0, (B * 0.69) | 0);
    // lid_bottom_shape.lineTo(A, (B * 0.69) | 0);

    lid_bottom_shape.lineTo(A);

    var lr_lid_bottom_shape = new THREE.Shape();

    lr_lid_bottom_shape.moveTo(0, 0);
    lr_lid_bottom_shape.lineTo(0, (B * 0.19) | 0);
    lr_lid_bottom_shape.lineTo((A * 0.2) | 0, (B * 0.19) | 0);
    lr_lid_bottom_shape.lineTo((A * 0.2) | 0, 0);

    /* ********** Model Created ********** */

    var lid_d = new THREE.ShapeGeometry(lid_shape_d);
    var lr_lid_d = new THREE.ShapeGeometry(lr_lid_shape_d);
    var lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape);

    var lr_lid_bottom = new THREE.ShapeGeometry(lr_lid_bottom_shape);

    // เซทฉาก

    var side_lid_d = new THREE.Mesh(lid_d, material);
    side_lid_d.rotation.x = Math.PI;

    var side_lr_lid_d = new THREE.Mesh(lr_lid_d, material);
    side_lr_lid_d.rotation.x = Math.PI;

    var side_lid_bottom = new THREE.Mesh(lid_bottom, material);

    var side_lr_lid_bottom = new THREE.Mesh(lr_lid_bottom, material);

    // สร้างจุดหมุน

    pivot_lid_d = new THREE.Object3D();
    pivot_lid_d.add(side_lid_d);

    pivot_lr_lid_d = new THREE.Object3D();
    pivot_lr_lid_d.add(side_lr_lid_d);

    pivot_group = new THREE.Object3D();
    pivot_group.add(side_lid_d, side_lr_lid_d);

    pivot_lid_bottom = new THREE.Object3D();
    pivot_group.add(side_lid_bottom);

    var pivot_lr_lid_bottom = new THREE.Object3D();
    pivot_lr_lid_bottom.add(side_lr_lid_bottom);

    var pivot_group_lid_bottom = new THREE.Object3D();
    pivot_group_lid_bottom.add(side_lid_bottom, side_lr_lid_bottom);

    pivot_all = new THREE.Object3D();
    scene.add(pivot_all);
    pivot_all.add(pivot_group, pivot_group_lid_bottom);

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
    // pivot_group.rotation.x = -Math.PI / 2;
    // pivot_lid_bottom.rotation.x = -Math.PI / 2;
  };

  return (
    <Fragment>
      {init()}
      {animate()}
    </Fragment>
  );
};

export default ThreeM;
