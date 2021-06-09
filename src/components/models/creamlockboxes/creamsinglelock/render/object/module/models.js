import * as THREE from 'three';

export const getPlaneTopBottomShape = (A, B) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};

export const getLRLid = (A, B) => {
  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);

  lrLidShape.lineTo(0, ((((A / 100) * 30) / 100) * 15) | 0);
  lrLidShape.lineTo(((B / 100) * 6) | 0, ((((A / 100) * 30) / 100) * 25) | 0);
  lrLidShape.lineTo(((B / 100) * 13) | 0, ((((A / 100) * 30) / 100) * 63) | 0);

  lrLidShape.bezierCurveTo(
    ((B / 100) * 13) | 0,
    ((((A / 100) * 30) / 100) * 63) | 0,
    ((B / 100) * 18) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0,
    ((B / 100) * 33) | 0,
    ((((A / 100) * 30) / 100) * 100) | 0
  );

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 100) | 0);

  lrLidShape.lineTo(((B / 100) * 97) | 0, ((((A / 100) * 30) / 100) * 16) | 0);

  lrLidShape.lineTo(B, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
};
