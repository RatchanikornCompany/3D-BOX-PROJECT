import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

export const WebGL = (boxes) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

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

  scene.add(new THREE.AxesHelper(700));
  // scene.add(new THREE.GridHelper(10000, 1000));
  scene.add(camera.add(new THREE.PointLight(0xffffff, 1))); //? add to scene only because the camera  has a child
  scene.add(boxes); //? add models boxes

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
};
