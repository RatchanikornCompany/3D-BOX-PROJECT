import React, { Fragment } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

var controls, renderer, scene, camera;

var A = 52;
var B = 52;
var C = 175;
var w = window.innerWidth;
var h = window.innerHeight;
var L = 0.3;
var leng_lr_lib = A * L;

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

    // // ฝาเสียบล่าง
    // var lid_bottom_shape = new THREE.Shape();

    // lid_bottom_shape.moveTo(0, 0);
    // lid_bottom_shape.lineTo(0,A);
    // lid_bottom_shape.lineTo((C * 0.7) | 0,A);
    // lid_bottom_shape.lineTo((C * 0.7) | 0, (A * 0.66) | 0);
    // lid_bottom_shape.lineTo((C * 0.49) | 0, ( A * 0.72) | 0);
    // lid_bottom_shape.lineTo((C * 0.49) | 0, (A * 0.3) | 0);
    // lid_bottom_shape.lineTo((C * 0.7) | 0, (A * 0.35) | 0);
    // lid_bottom_shape.lineTo((C * 0.7) | 0,0);
    // lid_bottom_shape.lineTo(0,0);

    // var lid_bottom = new THREE.ShapeGeometry(lid_bottom_shape);

    // // เซทฉาก

    // var side_lid_b_left_d = new THREE.Mesh(lid_bottom, material);

    // // สร้างจุดหมุน

    // var pivot_lr_lid_b_left_d = new THREE.Object3D();
    // pivot_lr_lid_b_left_d.add(side_lid_b_left_d);

    // var pivot_all = new THREE.Object3D();
    // scene.add(pivot_all);
    // pivot_all.add(
    //   pivot_lr_lid_b_left_d
    // );

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
