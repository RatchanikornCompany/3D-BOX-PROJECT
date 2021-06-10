import * as THREE from 'three';

export const getPlaneABackShape = (A, C) => {
  const planeABackShape = new THREE.Shape();
  planeABackShape.moveTo(0, 0);
  planeABackShape.lineTo(0, C);
  planeABackShape.lineTo(-A, C);
  planeABackShape.lineTo(-A, 0);

  const planeABack = new THREE.ShapeGeometry(planeABackShape);

  return planeABack;
}; // Plane A

export const getPlaneTopShape = (A, B, plugLength) => {
  const planeTopShape = new THREE.Shape();
  planeTopShape.moveTo(0, 0);
  planeTopShape.lineTo(0, B);
  planeTopShape.lineTo(plugLength, B);
  planeTopShape.lineTo(plugLength, B * (49.5 / 50));
  planeTopShape.lineTo(A - plugLength, B * (49.5 / 50));
  planeTopShape.lineTo(A - plugLength, B);
  planeTopShape.lineTo(A, B);
  planeTopShape.lineTo(A, 0);

  const planeTop = new THREE.ShapeGeometry(planeTopShape);

  return planeTop;
}; // PlaneTop

export const getPlaneBottomShape = (A, B, plugLength) => {
  const planeBottomShape = new THREE.Shape();
  planeBottomShape.moveTo(0, 0);
  planeBottomShape.lineTo(0, -B);
  planeBottomShape.lineTo(plugLength, -B);
  planeBottomShape.lineTo(plugLength, -B * (49.5 / 50));
  planeBottomShape.lineTo(A - plugLength, -B * (49.5 / 50));
  planeBottomShape.lineTo(A - plugLength, -B);
  planeBottomShape.lineTo(A, -B);
  planeBottomShape.lineTo(A, 0);

  const planeBottom = new THREE.ShapeGeometry(planeBottomShape);

  return planeBottom;
}; // PlaneBottom

export const getLidCoverD = (A, B, P, plugLength) => {
  let lidDShape = new THREE.Shape();

  lidDShape.moveTo(0, 0);
  lidDShape.bezierCurveTo(0, 0, 2, -P - 2, plugLength + 5, -P);
  lidDShape.lineTo(plugLength + 5, -P);
  lidDShape.lineTo(A - (plugLength + 5), -P);
  lidDShape.bezierCurveTo(A - (plugLength + 5), -P, A - 2, -P - 2, A, 0);
  lidDShape.lineTo(A, 0);
  lidDShape.lineTo(A - plugLength, 0);
  lidDShape.lineTo(A - plugLength, -B * (-0.5 / 50));
  lidDShape.lineTo(plugLength, -B * (-0.5 / 50));
  lidDShape.lineTo(plugLength, 0);

  let lidD = new THREE.ShapeGeometry(lidDShape); // ฝาเสียบ

  return lidD;
}; // ฝาเสียบล่าง

export const getGlueLid = (C, G, gSlope) => {
  let glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  let glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};

export const getLLid = (A, B, F) => {
  let lLidShape = new THREE.Shape();

  lLidShape.moveTo(0, 0);
  lLidShape.lineTo(0, ((((A / 100) * F) / 100) * 20) | 0);
  lLidShape.lineTo(-((B / 100) * 6) | 0, ((((A / 100) * F) / 100) * 36) | 0);
  lLidShape.bezierCurveTo(
    -((B / 100) * 6) | 0,
    ((((A / 100) * F) / 100) * 72) | 0,
    -((B / 100) * 12) | 0,
    ((((A / 100) * F) / 100) * 100) | 0,
    -((B / 100) * 39) | 0,
    ((((A / 100) * F) / 100) * 100) | 0
  );

  lLidShape.lineTo(-((B / 100) * 96) | 0, ((A / 100) * F) | 0);
  lLidShape.lineTo(-((B / 100) * 96) | 0, ((((A / 100) * F) / 100) * 7) | 0);
  lLidShape.lineTo(-B, 0);

  let lLid = new THREE.ShapeGeometry(lLidShape); // ลิ้นกันฝุ่น

  return lLid;
}; // ลิ้นกันฝุ่น

export const getRLid = (A, B, F) => {
  let rLidShape = new THREE.Shape();

  rLidShape.moveTo(0, 0);
  rLidShape.lineTo(0, ((((A / 100) * F) / 100) * 20) | 0);
  rLidShape.lineTo(-((B / 100) * 6) | 0, ((((A / 100) * F) / 100) * 36) | 0);
  rLidShape.bezierCurveTo(
    -((B / 100) * 6) | 0,
    ((((A / 100) * F) / 100) * 72) | 0,
    -((B / 100) * 12) | 0,
    ((((A / 100) * F) / 100) * 100) | 0,
    -((B / 100) * 39) | 0,
    ((((A / 100) * F) / 100) * 100) | 0
  );

  rLidShape.lineTo(-((B / 100) * 96) | 0, ((A / 100) * F) | 0);
  rLidShape.lineTo(-((B / 100) * 96) | 0, ((((A / 100) * F) / 100) * 7) | 0);
  rLidShape.lineTo(-B, 0);

  let rLid = new THREE.ShapeGeometry(rLidShape); // ลิ้นกันฝุ่น

  return rLid;
}; // ลิ้นกันฝุ่น
