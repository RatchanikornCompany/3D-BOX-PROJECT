import * as THREE from 'three';

export const getPlaneASideShape = (A, C) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, C);
  planeASideShape.lineTo(A, C);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneBSideShape = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneTopBottomShape = (A, B, plugLength) => {
  const planeTopBottomShape = new THREE.Shape();
  planeTopBottomShape.moveTo(0, 0);
  planeTopBottomShape.lineTo(0, B);
  planeTopBottomShape.lineTo(plugLength, B);
  planeTopBottomShape.lineTo(plugLength, B * (49.5 / 50));
  planeTopBottomShape.lineTo(A - plugLength, B * (49.5 / 50));
  planeTopBottomShape.lineTo(A - plugLength, B);
  planeTopBottomShape.lineTo(A, B);
  planeTopBottomShape.lineTo(A, 0);

  const planeTopBottom = new THREE.ShapeGeometry(planeTopBottomShape);

  return planeTopBottom;
};

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
};

export const getGlueLid = (C, G, gSlope) => {
  let glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(gSlope, G);
  glueLidShape.lineTo(C - gSlope, G);
  glueLidShape.lineTo(C, 0);

  let glueLid = new THREE.ShapeGeometry(glueLidShape); // ฝาเสียบกาว

  return glueLid;
};

export const getLRLid = (A, B, F) => {
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
};
