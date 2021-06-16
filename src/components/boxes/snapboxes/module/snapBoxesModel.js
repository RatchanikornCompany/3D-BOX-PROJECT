import * as THREE from 'three';

export const getLLidShape = (B, lengLRLib) => {
  const lrLidShape = new THREE.Shape();

  lrLidShape.moveTo(0, 0);
  // Front ....................................................
  lrLidShape.lineTo(0, (lengLRLib * 0.1) | 0);
  lrLidShape.lineTo(B * 0.05, (lengLRLib * 0.15) | 0);
  lrLidShape.lineTo(B * 0.15, (lengLRLib * 0.9) | 0);
  // Center ...................................................
  lrLidShape.lineTo(B * 0.2, lengLRLib);
  lrLidShape.lineTo(B, lengLRLib);
  // Rear......................................................
  lrLidShape.lineTo(B, 0);
  lrLidShape.lineTo(0, 0);

  const lrLid = new THREE.ShapeGeometry(lrLidShape); // ลิ้นกันฝุ่นซ้าย

  return lrLid;
}; // ลิ้นกันฝุ่นซ้าย

export const getRLidShape = (B, lengLRLib) => {
  const rLidShape = new THREE.Shape();

  rLidShape.moveTo(0, 0);
  // Front ....................................................
  rLidShape.lineTo(0, (lengLRLib * 0.1) | 0);
  rLidShape.lineTo(-B * 0.05, (lengLRLib * 0.15) | 0);
  rLidShape.lineTo(-B * 0.15, (lengLRLib * 0.9) | 0);
  // Center ...................................................
  rLidShape.lineTo(-B * 0.2, lengLRLib);
  rLidShape.lineTo(-B, lengLRLib);
  // Rear......................................................
  rLidShape.lineTo(-B, 0);
  rLidShape.lineTo(0, 0);

  const rLid = new THREE.ShapeGeometry(rLidShape); // ลิ้นกันฝุ่นขวา

  return rLid;
}; // ลิ้นกันฝุ่นขวา

export const getLidLeftDShape = (A, B) => {
  const lidLeftDShape = new THREE.Shape();

  lidLeftDShape.moveTo(0, 0);
  lidLeftDShape.lineTo(0, -(A * 0.47) | 0);
  lidLeftDShape.lineTo((B * 0.47) | 0, -(A * 0.47) | 0);
  lidLeftDShape.lineTo((B * 0.47) | 0, -(A * 0.29) | 0);
  lidLeftDShape.lineTo(B, 0);
  lidLeftDShape.lineTo(0, 0);

  const lidLeftD = new THREE.ShapeGeometry(lidLeftDShape); // ลิ้นกันฝุ่นล่างซ้าย

  return lidLeftD;
}; // ลิ้นกันฝุ่นล่างซ้าย

export const getLidRightDShape = (A, B) => {
  const lidRightDShape = new THREE.Shape();

  lidRightDShape.moveTo(0, 0);
  lidRightDShape.lineTo(0, (A * 0.47) | 0);
  lidRightDShape.lineTo((B * 0.47) | 0, (A * 0.47) | 0);
  lidRightDShape.lineTo((B * 0.47) | 0, (A * 0.29) | 0);
  lidRightDShape.lineTo(B, 0);
  lidRightDShape.lineTo(0, 0);

  const lidRightD = new THREE.ShapeGeometry(lidRightDShape); // ลิ้นกันฝุ่นล่างขวา

  return lidRightD;
}; // ลิ้นกันฝุ่นล่างขวา

export const getLLidShapeD = (A, B) => {
  const lLidShapeD = new THREE.Shape();

  lLidShapeD.moveTo(0, 0);
  lLidShapeD.lineTo(0, (A * 0.19) | 0);
  lLidShapeD.lineTo(-(B * 0.06) | 0, (A * 0.19) | 0);

  const lLidD = new THREE.ShapeGeometry(lLidShapeD); // ตัวเสียบลิ้นกันฝุ่นล่างซ้าย

  return lLidD;
}; // ตัวเสียบลิ้นกันฝุ่นล่างซ้าย

export const getRLidShapeD = (A, B) => {
  const rLidShapeD = new THREE.Shape();

  rLidShapeD.moveTo(0, 0);
  rLidShapeD.lineTo(0, (A * 0.19) | 0);
  rLidShapeD.lineTo((B * 0.06) | 0, (A * 0.19) | 0);

  const rLidD = new THREE.ShapeGeometry(rLidShapeD); // ตัวเสียบลิ้นกันฝุ่นล่างขวา

  return rLidD;
}; // ตัวเสียบลิ้นกันฝุ่นล่างขวา

export const getLidBottomShape = (A, B) => {
  const lidBottomShape = new THREE.Shape();

  lidBottomShape.moveTo(0, 0);
  lidBottomShape.lineTo(0, -(B * 0.47) | 0);
  lidBottomShape.lineTo(A, -(B * 0.47) | 0);
  lidBottomShape.lineTo(A);

  const lidBottom = new THREE.ShapeGeometry(lidBottomShape); // ฝาเสียบล่าง

  return lidBottom;
}; // ฝาเสียบล่าง

export const getLidLeftBottomDShape = (A, B) => {
  const lidLeftBottomDShape = new THREE.Shape();

  lidLeftBottomDShape.moveTo(0, 0);
  lidLeftBottomDShape.lineTo(0, (B * 0.19) | 0);
  lidLeftBottomDShape.lineTo(-(A * 0.3) | 0, (B * 0.19) | 0);
  lidLeftBottomDShape.lineTo(-(A * 0.3) | 0, 0);

  const lidLeftBottomD = new THREE.ShapeGeometry(lidLeftBottomDShape); // ตัวเสียบล่าง - ซ้าย

  return lidLeftBottomD;
}; // ตัวเสียบล่าง - ซ้าย

export const getLidRightBottomDShape = (A, B) => {
  const lidRightBottomDShape = new THREE.Shape();

  lidRightBottomDShape.moveTo(0, 0);
  lidRightBottomDShape.lineTo(0, (B * 0.19) | 0);
  lidRightBottomDShape.lineTo((A * 0.3) | 0, (B * 0.19) | 0);
  lidRightBottomDShape.lineTo((A * 0.3) | 0, 0);

  const lidRightBottomD = new THREE.ShapeGeometry(lidRightBottomDShape); // ตัวเสียบล่าง - ขวา

  return lidRightBottomD;
}; // ตัวเสียบล่าง - ขวา

export const getLidTrapeBottomShape = (A, B) => {
  const lidTrapeBottomShape = new THREE.Shape();

  lidTrapeBottomShape.moveTo(0, 0);
  lidTrapeBottomShape.lineTo((A * 0.3) | 0, (B * 0.5) | 0);
  lidTrapeBottomShape.lineTo((A * 0.7) | 0, (B * 0.5) | 0);
  lidTrapeBottomShape.lineTo(A, 0);

  const lidTrapeBottom = new THREE.ShapeGeometry(lidTrapeBottomShape); // ฝาเสียบล่างทรงสี่เหลี่ยมคางหมู

  return lidTrapeBottom;
}; // ฝาเสียบล่างทรงสี่เหลี่ยมคางหมู

export const getLidBottomCoverShape = (B, A) => {
  let lidBottomCoverShape = new THREE.Shape();

  lidBottomCoverShape.moveTo(0, 0);
  lidBottomCoverShape.lineTo(0, (A * 0.42) | 0);
  lidBottomCoverShape.lineTo(-(B * 0.2) | 0, (A * 0.42) | 0);
  lidBottomCoverShape.lineTo(-(B * 0.2) | 0, 0);
  lidBottomCoverShape.lineTo(0, 0);

  let lidBottomCover = new THREE.ShapeGeometry(lidBottomCoverShape); // ตัวเสียบล่างทรงสี่เหลี่ยมคางหมู

  return lidBottomCover;
}; // ตัวเสียบล่างทรงสี่เหลี่ยมคางหมู
