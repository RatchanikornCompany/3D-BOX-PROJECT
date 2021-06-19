import * as THREE from 'three';

export const material = (O, materialColor) =>
  new THREE.MeshPhongMaterial({
    color: materialColor ? 0x946d46 : 0xffffff,
    side: materialColor ? THREE.FrontSide : THREE.DoubleSide,
    opacity: O,
    transparent: true,
  });

export const materialBack = (O, materialColor) =>
  new THREE.MeshPhongMaterial({
    side: materialColor ? THREE.BackSide : THREE.DoubleSide,
    opacity: O,
    transparent: true,
  });

export const materialMap = (O) =>
  new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    opacity: O,
    transparent: true,
    map: new THREE.TextureLoader().load(
      'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
    ),
  });
