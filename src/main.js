import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import Menu from './components/menu/menu';

import SNAPBOX from './components/models/snapbox/snaplock';
import SNAPBOX191 from './components/models/snapbox/snapBecf191';
import CARRYBOX from './components/models/carrybox/carry';
import FOODBOX1171 from './components/models/foodbox/foodBecf1171';
import FOODBOX1202 from './components/models/foodbox/foodBecf1202';
import FOODBOX1207 from './components/models/foodbox/foodBecf1207';
import TRAYBOX from './components/models/traybox/tray';
import TRAYBOX1171 from './components/models/traybox/trayBecf1171';
import SHIRTBOX from './components/models/shirtbox/shirt';
import THREEJSLOCKBOX from './components/models/threeJSlockbox/threeJSlock';
import THREEJSDUALLOCKBOX from './components/models/threeJSlockbox/threeJSDualLock';
import THREEJSUPPERLOWERLOCKBOX from './components/models/threeJSlockbox/threeJSUpperLowerLock';
import CARTOONBAG from './components/models/cartoonsbag/cartoons';
import GLOVEBOX from './components/models/glovebox/gloveBox';
import STAND11D02 from './components/models/standard/stand-11d02';
import TRAYBOX21701 from './components/models/traybox/trayBecf-21701';

const Main = () => {
  const { Route } = useParams();

  useEffect(() => {
    checkParams();
  }, []);

  const checkParams = () => {
    let x;

    if (
      Route === 'snapbox' ||
      Route === 'snap191' ||
      Route === 'carry' ||
      Route === 'food1171' ||
      Route === 'food1202' ||
      Route === 'food1207' ||
      Route === 'tray' ||
      Route === 'tray1171' ||
      Route === 'shirt' ||
      Route === 'threelock' ||
      Route === 'threeduallock' ||
      Route === 'threelockul' ||
      Route === 'cartoonbag' ||
      Route === 'glovebox' ||
      Route === 'stand11d02' ||
      Route === 'tray21701'
    ) {
      x = {
        snapbox: SNAPBOX,
        snap191: SNAPBOX191,
        carry: CARRYBOX,
        food1171: FOODBOX1171,
        food1202: FOODBOX1202,
        food1207: FOODBOX1207,
        tray: TRAYBOX,
        tray1171: TRAYBOX1171,
        shirt: SHIRTBOX,
        threelock: THREEJSLOCKBOX,
        threeduallock: THREEJSDUALLOCKBOX,
        threelockul: THREEJSUPPERLOWERLOCKBOX,
        cartoonbag: CARTOONBAG,
        glovebox: GLOVEBOX,
        stand11d02: STAND11D02,
        tray21701: TRAYBOX21701,
      }; //?  ตัวแปร x เก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } รับค่าจาก Router Switch
    }
    if (x) {
      threeDRender(x);
    }
  };

  const threeDRender = (x) => {
    const scene = new THREE.Scene();
    scene.name = 'Scene';
    scene.background = new THREE.Color(0x404040);
    scene.add(x[Route].init());

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
  };

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
