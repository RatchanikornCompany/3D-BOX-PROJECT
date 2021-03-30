import * as THREE from 'three';

export const material = (valueO) =>
  new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: valueO,
    transparent: true,
  });

export const materialMap = (valueO) =>
  new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: valueO,
    transparent: true,
    map: new THREE.TextureLoader().load(
      'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
    ),
  });
