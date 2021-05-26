import React, { useEffect } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import '../custom.css';

const Webgl = (scene) => {
  const { sceneModel } = scene;

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x404040);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 700;

    const axesHelper = new THREE.AxesHelper(700);
    scene.add(axesHelper);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 12;
    controls.minDistance = 10;
    controls.maxDistance = 1000;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -1.0;

    const light = new THREE.PointLight(0xffffff, 1);
    camera.add(light);
    scene.add(camera);

    const gridHelper = new THREE.GridHelper(1000, 100);
    scene.add(gridHelper);

    scene.add(sceneModel);

    const element = document.getElementById('webgl'); //?  สร้าง element wrbgl

    if (element !== null) {
      element.appendChild(renderer.domElement);
    } //?  ถ้า element != null ให้เรนเดอร์ parent child renderer.domElement

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      element.removeChild(renderer.domElement);
    }; //?  didMount โดยการ remove parent child ของ renderer.domElement ออกไป
  }, [sceneModel]); //? dependencies กำหนดว่าให้ props ไหนที่มีการเปลี่ยนแปลง

  return <div id="webgl" />;
};

export default Webgl;
