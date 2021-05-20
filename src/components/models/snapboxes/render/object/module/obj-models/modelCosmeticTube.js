import * as THREE from 'three';

import { sceneAdd } from '../../../webgl';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export const modelCosmeticTube = (A, B, C) => {
  var OBJFile = './models/cosmetic_tube.obj';
  var MTLFile = '';
  var JPGFile = '';

  new MTLLoader().load(MTLFile, function (materials) {
    materials.preload();
    new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
      //* Scale
      object.scale.set(A - 51.65, C - 174.42, B - 51.5); // 0.35, 0.58, 0.5
      object.position.set(A / 2, -C / 18, B / 2);

      var texture = new THREE.TextureLoader().load(JPGFile);

      object.traverse(function (child) {
        //* aka setTexture
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });
      sceneAdd(object);
    });
  });
};
