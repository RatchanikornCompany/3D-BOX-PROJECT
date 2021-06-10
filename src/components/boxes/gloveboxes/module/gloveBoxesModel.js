import * as THREE from 'three';

export const getLidCoverShape = (A, P) => {
  const lidCoverShape = new THREE.Shape();

  lidCoverShape.moveTo(0, 0);
  lidCoverShape.lineTo(A, 0);
  lidCoverShape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
  lidCoverShape.lineTo(A / 10, -P);
  lidCoverShape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

  const lidCover = new THREE.ShapeGeometry(lidCoverShape); // ฝาเสียบ

  return lidCover;
};

export const getLidShape = (C, P) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(C, 0);
  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(C, 0);
  glueLidShape.bezierCurveTo(C, 0, C - C / 35, -(P - P / 35), C - C / 10, -P);
  glueLidShape.lineTo(C / 10, -P);
  glueLidShape.bezierCurveTo(C / 10, -P, C / 35, -(P - P / 35), 0, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};

export const getFlaps = (A, B, plug, plugSlope) => {
  const flaps = new THREE.Shape();
  flaps.moveTo(0, 0);
  flaps.lineTo(0, 0);
  flaps.lineTo(2, A / 2);
  flaps.bezierCurveTo(2, A / 2, -1, A / 2 + plug - 4, 7, A / 2 + plug);

  flaps.bezierCurveTo(
    B - plugSlope - 2,
    A / 2 + plug,
    B - 4,
    A / 2 + plug + 3,
    B - plugSlope,
    A / 2
  );

  flaps.lineTo(B - plugSlope, A / 2);
  flaps.lineTo(B / 2, A / 2);
  flaps.lineTo(B - plugSlope, A / 2 - 3);
  flaps.lineTo(B - plugSlope, A / 2);
  flaps.lineTo(B, 0);
  flaps.lineTo(0, 0);

  const lrLid = new THREE.ShapeGeometry(flaps); // ลิ้นกันฝุ่น

  return lrLid;
};

export const getCover = (A, B) => {
  const cover = new THREE.Shape();
  cover.moveTo(0, 0);
  cover.lineTo(5, B - 10);
  cover.bezierCurveTo(5, B - 10, 5, B - 1, 20, B - 2);

  cover.lineTo(20, B - 2);
  cover.lineTo(A / 2 - 10, B);

  cover.lineTo(A / 2 + 10, B);
  cover.lineTo(A - 20, B - 2);

  cover.bezierCurveTo(A - 20, B - 2, A - 5, B - 1, A - 5, B - 10);

  cover.lineTo(A - 5, B - 10);
  cover.lineTo(A, 0);
  cover.lineTo(0, 0);

  const lrLidBottom = new THREE.ShapeGeometry(cover); // ตัวเสียบล่าง

  return lrLidBottom;
};

export const getCoverD = (A, B) => {
  const coverD = new THREE.Shape();
  coverD.moveTo((A * 0.42) | 0, 0);
  coverD.lineTo((A * 0.42) | 0, (B * 0.084) | 0);
  coverD.lineTo((A * 0.34) | 0, (B * 0.084) | 0);

  coverD.bezierCurveTo(
    (A * 0.34) | 0,
    (B * 0.084) | 0,
    (A * 0.316) | 0,
    (B * 0.3) | 0,
    (A * 0.42) | 0,
    (B * 0.25) | 0
  );

  coverD.moveTo((A * 0.46) | 0, (B * 0.25) | 0);
  coverD.moveTo((A * 0.54) | 0, (B * 0.25) | 0);

  coverD.bezierCurveTo(
    (A * 0.58) | 0,
    (B * 0.25) | 0,
    (A * 0.684) | 0,
    (B * 0.3) | 0,
    (A * 0.66) | 0,
    (B * 0.084) | 0
  );

  coverD.lineTo((A * 0.66) | 0, (B * 0.084) | 0);
  coverD.lineTo((A * 0.58) | 0, (B * 0.084) | 0);
  coverD.lineTo((A * 0.58) | 0, 0);

  const lidBottomCover = new THREE.ShapeGeometry(coverD); // ลิ้นเสียบล่าง

  return lidBottomCover;
};
