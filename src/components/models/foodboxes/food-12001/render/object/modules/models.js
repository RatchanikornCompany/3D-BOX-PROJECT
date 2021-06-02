import * as THREE from 'three';

export const getLidALeftRightShape = (C, B) => {
  const lidALeftRightShape = new THREE.Shape();

  lidALeftRightShape.moveTo(0, 0);
  lidALeftRightShape.lineTo(0, B);
  lidALeftRightShape.lineTo(C, B);
  lidALeftRightShape.lineTo(C, 0);

  let holeLidALeftShape = new THREE.Path();
  holeLidALeftShape.moveTo(C * (24 / 40), B * (20 / 100));
  holeLidALeftShape.lineTo(C * (25 / 40), B * (20 / 100));
  holeLidALeftShape.lineTo(C * (15 / 40), B * (40 / 100));
  holeLidALeftShape.lineTo(C * (14 / 40), B * (40 / 100));
  lidALeftRightShape.holes.push(holeLidALeftShape);

  let holeLidARightShape = new THREE.Path();
  holeLidARightShape.moveTo(C * (24 / 40), B * (80 / 100));
  holeLidARightShape.lineTo(C * (25 / 40), B * (80 / 100));
  holeLidARightShape.lineTo(C * (15 / 40), B * (60 / 100));
  holeLidARightShape.lineTo(C * (14 / 40), B * (60 / 100));
  lidALeftRightShape.holes.push(holeLidARightShape);

  const lidALeftRight = new THREE.ShapeGeometry(lidALeftRightShape);

  return lidALeftRight;
};

export const getLidBTopBottomShape = (C) => {
  const lidBTopBottomShape = new THREE.Shape();

  // lidBTopBottomShape.moveTo(0, 0);
  // lidBTopBottomShape.lineTo(0, C);
  // lidBTopBottomShape.lineTo(Math.round(C / 2), C);
  // lidBTopBottomShape.bezierCurveTo(
  //   Math.round(C * (25 / 40)),
  //   C,
  //   C,
  //   Math.round(C * (27 / 40)),
  //   Math.round(C / 2),
  //   Math.round(C * (17 / 40))
  // );
  // lidBTopBottomShape.lineTo(C, Math.round(C * (10 / 40)));
  // lidBTopBottomShape.lineTo(C, 0);

  lidBTopBottomShape.moveTo(0, C);
  lidBTopBottomShape.lineTo(((C / 100) * 25) | 0, C);
  lidBTopBottomShape.lineTo(((C / 100) * 50) | 0, ((C / 100) * 50) | 0);
  lidBTopBottomShape.bezierCurveTo(
    ((C / 100) * 63) | 0,
    ((C / 100) * 75) | 0,
    ((C / 100) * 88) | 0,
    ((C / 100) * 75) | 0,
    C,
    ((C / 100) * 50) | 0
  );
  lidBTopBottomShape.lineTo(C, 0);
  lidBTopBottomShape.lineTo(0, 0);

  const lidBTopBottom = new THREE.ShapeGeometry(lidBTopBottomShape);

  return lidBTopBottom;
};

export const getLRLidATopShape = (B, C) => {
  const lrLidATopShape = new THREE.Shape();

  lrLidATopShape.moveTo(0, 0);
  lrLidATopShape.lineTo(C, 0);
  lrLidATopShape.lineTo(C * (38 / 40), B * (94 / 100));
  lrLidATopShape.bezierCurveTo(
    C * (37.2 / 40),
    B * (99.5 / 100),
    C * (36.4 / 40),
    B,
    C * (34 / 40),
    B
  );
  lrLidATopShape.lineTo(0, B);

  const lrLidATop = new THREE.ShapeGeometry(lrLidATopShape);

  return lrLidATop;
};

export const getGlueLidShape = (A, G, P) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(0, G - P);

  glueLidShape.bezierCurveTo(0, G - P, 0, G, P, G);

  glueLidShape.lineTo(A - P, G);

  glueLidShape.bezierCurveTo(A - P, G, A, G, A, G - P);
  glueLidShape.lineTo(A, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape);

  return glueLid;
};

export const getPlaneASideShape = (A, B) => {
  const planeASideShape = new THREE.Shape();

  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, B);
  planeASideShape.lineTo(A, B);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneBSideShape = (A, C) => {
  const planeBSideShape = new THREE.Shape();

  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(A, C);
  planeBSideShape.lineTo(A, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};
