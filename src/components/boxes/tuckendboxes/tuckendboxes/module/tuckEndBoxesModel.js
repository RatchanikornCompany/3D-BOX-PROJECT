import * as THREE from 'three';

export const getGlueLid = (C, G, gSlope) => {
  let glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  let glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};
