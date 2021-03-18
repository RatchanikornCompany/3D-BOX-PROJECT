import React, { useEffect, Fragment } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import Menu from './components/menu/menu';

import STAND11D02 from './components/models/standard/stand-11d02';

const Main = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.name = 'Scene';
    scene.background = new THREE.Color(0x404040);
    scene.add(STAND11D02.init());

    console.log(STAND11D02.init());

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.name = 'Camera';
    camera.position.z = 700;

    const axesHelper = new THREE.AxesHelper(700);
    axesHelper.name = 'axesHelper';

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').append(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 0.5;
    controls.maxZoom = 12;
    controls.minDistance = 10;
    controls.maxDistance = 1000;
    // controls.autoRotate = true;
    controls.autoRotateSpeed = -1.0;

    const light = new THREE.PointLight(0xffffff, 1);
    light.name = 'light';
    camera.add(light);

    const gridHelper = new THREE.GridHelper(10000, 1000);
    gridHelper.name = 'gridHelper';

    const three3DRenderer = new THREE.Group();
    three3DRenderer.name = '### three3DRenderer ###';
    three3DRenderer.add(axesHelper, camera, gridHelper);
    scene.add(three3DRenderer);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12" style={{ padding: 0 }}>
            <div>
              <Menu />
            </div>
          </div>
          <div
            className="col-md-8 col-12"
            style={{ padding: 0, backgroundColor: '#404040' }}
          >
            <div id="webgl" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
