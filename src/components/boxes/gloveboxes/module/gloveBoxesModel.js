import * as THREE from 'three';

export const getFlapsTop = (A, B, plug, plugSlope) => {
  const flapsTopShape = new THREE.Shape();
  flapsTopShape.moveTo(0, 0);
  flapsTopShape.lineTo(0, 0);
  flapsTopShape.lineTo(-2, A / 2);
  flapsTopShape.bezierCurveTo(-2, A / 2, 1, A / 2 + plug - 4, -7, A / 2 + plug);

  flapsTopShape.bezierCurveTo(
    -B + plugSlope + 2,
    A / 2 + plug,
    -B + 4,
    A / 2 + plug + 3,
    -B + plugSlope,
    A / 2
  );

  flapsTopShape.lineTo(-B + plugSlope, A / 2);
  flapsTopShape.lineTo(-B / 2, A / 2);
  flapsTopShape.lineTo(-B + plugSlope, A / 2 - 3);
  flapsTopShape.lineTo(-B + plugSlope, A / 2);
  flapsTopShape.lineTo(-B, 0);
  flapsTopShape.lineTo(0, 0);

  const flapsTop = new THREE.ShapeGeometry(flapsTopShape); // ลิ้นกันฝุ่น

  return flapsTop;
};

export const getFlapsBottom = (A, B, plug, plugSlope) => {
  const flapsBottomShape = new THREE.Shape();
  flapsBottomShape.moveTo(0, 0);
  flapsBottomShape.lineTo(0, 0);
  flapsBottomShape.lineTo(2, A / 2);
  flapsBottomShape.bezierCurveTo(
    2,
    A / 2,
    -1,
    A / 2 + plug - 4,
    7,
    A / 2 + plug
  );

  flapsBottomShape.bezierCurveTo(
    B - plugSlope - 2,
    A / 2 + plug,
    B - 4,
    A / 2 + plug + 3,
    B - plugSlope,
    A / 2
  );

  flapsBottomShape.lineTo(B - plugSlope, A / 2);
  flapsBottomShape.lineTo(B / 2, A / 2);
  flapsBottomShape.lineTo(B - plugSlope, A / 2 - 3);
  flapsBottomShape.lineTo(B - plugSlope, A / 2);
  flapsBottomShape.lineTo(B, 0);
  flapsBottomShape.lineTo(0, 0);

  const flapsBottom = new THREE.ShapeGeometry(flapsBottomShape); // ลิ้นกันฝุ่น

  return flapsBottom;
};

export const getTopCover = (A, B) => {
  const topCoverShape = new THREE.Shape();
  topCoverShape.moveTo(0, 0);
  topCoverShape.lineTo(-5, B - 10);
  topCoverShape.bezierCurveTo(-5, B - 10, -5, B - 1, -20, B - 2);

  topCoverShape.lineTo(-20, B - 2);
  topCoverShape.lineTo(-A / 2 + 10, B);

  topCoverShape.lineTo(-A / 2 - 10, B);
  topCoverShape.lineTo(-A + 20, B - 2);

  topCoverShape.bezierCurveTo(-A + 20, B - 2, -A + 5, B - 1, -A + 5, B - 10);

  topCoverShape.lineTo(-A + 5, B - 10);
  topCoverShape.lineTo(-A, 0);
  topCoverShape.lineTo(0, 0);

  const topCover = new THREE.ShapeGeometry(topCoverShape); // ตัวเสียบล่าง

  return topCover;
};

export const getBottomCover = (A, B) => {
  const bottomCoverShape = new THREE.Shape();
  bottomCoverShape.moveTo(0, 0);
  bottomCoverShape.lineTo(5, B - 10);
  bottomCoverShape.bezierCurveTo(5, B - 10, 5, B - 1, 20, B - 2);

  bottomCoverShape.lineTo(20, B - 2);
  bottomCoverShape.lineTo(A / 2 - 10, B);

  bottomCoverShape.lineTo(A / 2 + 10, B);
  bottomCoverShape.lineTo(A - 20, B - 2);

  bottomCoverShape.bezierCurveTo(A - 20, B - 2, A - 5, B - 1, A - 5, B - 10);

  bottomCoverShape.lineTo(A - 5, B - 10);
  bottomCoverShape.lineTo(A, 0);
  bottomCoverShape.lineTo(0, 0);

  const bottomCover = new THREE.ShapeGeometry(bottomCoverShape); // ตัวเสียบล่าง

  return bottomCover;
};

export const getTopCoverLid = (A, B) => {
  const topCoverLidShape = new THREE.Shape();
  topCoverLidShape.moveTo(-(A * 0.42) | 0, 0);
  topCoverLidShape.lineTo(-(A * 0.42) | 0, (B * 0.084) | 0);
  topCoverLidShape.lineTo(-(A * 0.34) | 0, (B * 0.084) | 0);

  topCoverLidShape.bezierCurveTo(
    -(A * 0.34) | 0,
    (B * 0.084) | 0,
    -(A * 0.316) | 0,
    (B * 0.3) | 0,
    -(A * 0.42) | 0,
    (B * 0.25) | 0
  );

  topCoverLidShape.moveTo(-(A * 0.46) | 0, (B * 0.25) | 0);
  topCoverLidShape.moveTo(-(A * 0.54) | 0, (B * 0.25) | 0);

  topCoverLidShape.bezierCurveTo(
    -(A * 0.58) | 0,
    (B * 0.25) | 0,
    -(A * 0.684) | 0,
    (B * 0.3) | 0,
    -(A * 0.66) | 0,
    (B * 0.084) | 0
  );

  topCoverLidShape.lineTo(-(A * 0.66) | 0, (B * 0.084) | 0);
  topCoverLidShape.lineTo(-(A * 0.58) | 0, (B * 0.084) | 0);
  topCoverLidShape.lineTo(-(A * 0.58) | 0, 0);

  const topCoverLid = new THREE.ShapeGeometry(topCoverLidShape); // ลิ้นเสียบล่าง

  return topCoverLid;
};

export const getBottomCoverLid = (A, B) => {
  const bottomCoverLidShape = new THREE.Shape();
  bottomCoverLidShape.moveTo((A * 0.42) | 0, 0);
  bottomCoverLidShape.lineTo((A * 0.42) | 0, (B * 0.084) | 0);
  bottomCoverLidShape.lineTo((A * 0.34) | 0, (B * 0.084) | 0);

  bottomCoverLidShape.bezierCurveTo(
    (A * 0.34) | 0,
    (B * 0.084) | 0,
    (A * 0.316) | 0,
    (B * 0.3) | 0,
    (A * 0.42) | 0,
    (B * 0.25) | 0
  );

  bottomCoverLidShape.moveTo((A * 0.46) | 0, (B * 0.25) | 0);
  bottomCoverLidShape.moveTo((A * 0.54) | 0, (B * 0.25) | 0);

  bottomCoverLidShape.bezierCurveTo(
    (A * 0.58) | 0,
    (B * 0.25) | 0,
    (A * 0.684) | 0,
    (B * 0.3) | 0,
    (A * 0.66) | 0,
    (B * 0.084) | 0
  );

  bottomCoverLidShape.lineTo((A * 0.66) | 0, (B * 0.084) | 0);
  bottomCoverLidShape.lineTo((A * 0.58) | 0, (B * 0.084) | 0);
  bottomCoverLidShape.lineTo((A * 0.58) | 0, 0);

  const bottomCoverLid = new THREE.ShapeGeometry(bottomCoverLidShape); // ลิ้นเสียบล่าง

  return bottomCoverLid;
};
