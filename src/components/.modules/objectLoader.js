import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export const objectLoader = () => {
  var OBJFile = '';
  var MTLFile = '';
  var JPGFile = '';

  new MTLLoader().load(MTLFile, function (materials) {
    materials.preload();
    new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
      //* Scale
      object.scale.set(''); // 0.35, 0.58, 0.5

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
