import * as THREE from 'three';

export const getPlaneASideShape = (A, C) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, C);
  planeASideShape.lineTo(A, C);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
}; // Plane A

export const getPlaneABackShape = (A, C) => {
  const planeABackShape = new THREE.Shape();
  planeABackShape.moveTo(0, 0);
  planeABackShape.lineTo(0, C);
  planeABackShape.lineTo(-A, C);
  planeABackShape.lineTo(-A, 0);

  const planeABack = new THREE.ShapeGeometry(planeABackShape);

  return planeABack;
}; // Plane A Back

export const getPlaneBSideShape = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
}; // Plane B

export const getPlaneBBackShape = (B, C) => {
  const planeBBackShape = new THREE.Shape();
  planeBBackShape.moveTo(0, 0);
  planeBBackShape.lineTo(0, C);
  planeBBackShape.lineTo(-B, C);
  planeBBackShape.lineTo(-B, 0);

  const planeBBack = new THREE.ShapeGeometry(planeBBackShape);

  return planeBBack;
}; // Plane B Back

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

  const planeTopBottom = new THREE.ShapeGeometry(planeTopShape);

  return planeTopBottom;
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

export const getLidCover = (A, B, P, plugLength) => {
  let lidShape = new THREE.Shape();

  lidShape.moveTo(0, 0);
  lidShape.bezierCurveTo(0, 0, 2, P - 2, plugLength + 5, P);
  lidShape.lineTo(plugLength + 5, P);
  lidShape.lineTo(A - (plugLength + 5), P);
  lidShape.bezierCurveTo(A - (plugLength + 5), P, A - 2, P - 2, A, 0);
  lidShape.lineTo(A, 0);
  lidShape.lineTo(A - plugLength, 0);
  lidShape.lineTo(A - plugLength, B * (-0.5 / 50));
  lidShape.lineTo(plugLength, B * (-0.5 / 50));
  lidShape.lineTo(plugLength, 0);

  let lidCover = new THREE.ShapeGeometry(lidShape); // ฝาเสียบ

  return lidCover;
}; // ฝาเสียบ

export const getLidCoverD = (A, B, P, plugLength) => {
  let lidShape = new THREE.Shape();

  lidShape.moveTo(0, 0);
  lidShape.bezierCurveTo(0, 0, 2, -P - 2, plugLength + 5, -P);
  lidShape.lineTo(plugLength + 5, -P);
  lidShape.lineTo(A - (plugLength + 5), -P);
  lidShape.bezierCurveTo(A - (plugLength + 5), -P, A - 2, -P - 2, A, 0);
  lidShape.lineTo(A, 0);
  lidShape.lineTo(A - plugLength, 0);
  lidShape.lineTo(A - plugLength, -B * (-0.5 / 50));
  lidShape.lineTo(plugLength, -B * (-0.5 / 50));
  lidShape.lineTo(plugLength, 0);

  let lidCover = new THREE.ShapeGeometry(lidShape); // ฝาเสียบ

  return lidCover;
}; // ฝาเสียบล่าง

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
}; // ลิ้นกันฝุ่นซ้าย

export const getRLid = (A, B, F) => {
  let lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  lrLidShape.lineTo(0, ((((A / 100) * F) / 100) * 20) | 0);
  lrLidShape.lineTo(((B / 100) * 6) | 0, ((((A / 100) * F) / 100) * 36) | 0);
  lrLidShape.bezierCurveTo(
    ((B / 100) * 6) | 0,
    ((((A / 100) * F) / 100) * 72) | 0,
    ((B / 100) * 12) | 0,
    ((((A / 100) * F) / 100) * 100) | 0,
    ((B / 100) * 39) | 0,
    ((((A / 100) * F) / 100) * 100) | 0
  );

  lrLidShape.lineTo(((B / 100) * 96) | 0, ((A / 100) * F) | 0);
  lrLidShape.lineTo(((B / 100) * 96) | 0, ((((A / 100) * F) / 100) * 7) | 0);
  lrLidShape.lineTo(B, 0);

  let lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่น

  return lrLid;
}; // ลิ้นกันฝุ่นขวา

export const getGlueLid = (C, G, gSlope) => {
  let glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  let glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
}; // ฝาเสียบกาว
