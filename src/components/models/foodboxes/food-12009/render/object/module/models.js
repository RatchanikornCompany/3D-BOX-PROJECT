import * as THREE from 'three';

export const getLidCTopBottomShape = (A, C) => {
  let lidCTopBottomShape = new THREE.Shape();
  lidCTopBottomShape.moveTo(0, 0);
  lidCTopBottomShape.lineTo(
    Math.round(A * (15 / 200)),
    Math.round(C * (15 / 40))
  );
  lidCTopBottomShape.lineTo(
    Math.round(A * (185 / 200)),
    Math.round(C * (15 / 40))
  );
  lidCTopBottomShape.lineTo(A, 0);

  let lidCTopBottom = new THREE.ShapeGeometry(lidCTopBottomShape);

  return lidCTopBottom;
};

export const getLRCTopBottomShape = (A, C) => {
  let lrCTopBottomShape = new THREE.Shape();
  lrCTopBottomShape.moveTo(0, 0);
  lrCTopBottomShape.lineTo(0, C);
  lrCTopBottomShape.lineTo(Math.round(A * (15 / 200)), C);
  lrCTopBottomShape.lineTo(
    Math.round(A * (15 / 200)),
    Math.round(C * (15 / 40))
  );

  let lrCTopBottom = new THREE.ShapeGeometry(lrCTopBottomShape);

  return lrCTopBottom;
};

export const getLRLidCTopBottomShape = (A, C) => {
  let lrLidCTopBottomShape = new THREE.Shape();
  lrLidCTopBottomShape.moveTo(0, 0);
  lrLidCTopBottomShape.lineTo(0, C);
  lrLidCTopBottomShape.lineTo(Math.round(A * (170 / 200)), C);
  lrLidCTopBottomShape.lineTo(Math.round(A * (170 / 200)), 0);

  let lrLidCTopBottom = new THREE.ShapeGeometry(lrLidCTopBottomShape);

  return lrLidCTopBottom;
};

export const getLidBLeftRightShape = (B, C) => {
  let lidBLeftRightShape = new THREE.Shape();
  lidBLeftRightShape.moveTo(0, 0);
  lidBLeftRightShape.lineTo(
    Math.round(B * (15 / 100)),
    Math.round(C * (15 / 40))
  );
  lidBLeftRightShape.lineTo(
    Math.round(B * (85 / 100)),
    Math.round(C * (15 / 40))
  );
  lidBLeftRightShape.lineTo(B, 0);

  let lidBLeftRight = new THREE.ShapeGeometry(lidBLeftRightShape);

  return lidBLeftRight;
};

export const getLRLidBLeftRightShape = (B, C) => {
  let lrLidBLeftRightShape = new THREE.Shape();
  lrLidBLeftRightShape.moveTo(0, 0);
  lrLidBLeftRightShape.lineTo(0, C);
  lrLidBLeftRightShape.lineTo(Math.round(B * (70 / 100)), C);
  lrLidBLeftRightShape.lineTo(Math.round(B * (70 / 100)), 0);

  let lrLidBLeftRight = new THREE.ShapeGeometry(lrLidBLeftRightShape);

  return lrLidBLeftRight;
};

export const getLRBLeftRightShape = (B, C) => {
  let lrBLeftRightShape = new THREE.Shape();
  lrBLeftRightShape.moveTo(0, 0);
  lrBLeftRightShape.lineTo(Math.round(B * (5 / 100)), Math.round(C * (5 / 40)));
  lrBLeftRightShape.lineTo(
    Math.round(B * (35 / 100)),
    Math.round(C * (5 / 40))
  );
  lrBLeftRightShape.lineTo(Math.round(B * (40 / 100)), 0);

  let lrBLeftRight = new THREE.ShapeGeometry(lrBLeftRightShape);

  return lrBLeftRight;
};

export const getInsideFlapShape = (B, C) => {
  let insideFlapShape = new THREE.Shape();
  insideFlapShape.moveTo(0, 0);
  insideFlapShape.lineTo(0, Math.round(C * (14 / 40)));
  insideFlapShape.lineTo(Math.round(B * (70 / 100)), Math.round(C * (14 / 40)));
  insideFlapShape.lineTo(Math.round(B * (70 / 100)), 0);

  let insideFlap = new THREE.ShapeGeometry(insideFlapShape);

  return insideFlap;
};

export const getGlueFlapShape = (A, C) => {
  let glueFlapShape = new THREE.Shape();
  glueFlapShape.moveTo(0, 0);
  glueFlapShape.lineTo(0, Math.round(C * (15 / 40)));
  glueFlapShape.lineTo(Math.round(A * (170 / 200)), Math.round(C * (15 / 40)));
  glueFlapShape.lineTo(Math.round(A * (170 / 200)), 0);

  let glueFlap = new THREE.ShapeGeometry(glueFlapShape);

  return glueFlap;
};

export const getDustFlapShape = (A, C) => {
  let dustFlapShape = new THREE.Shape();
  dustFlapShape.moveTo(0, 0);
  dustFlapShape.lineTo(0, C);
  dustFlapShape.lineTo(Math.round(A * (40 / 200)), C);
  dustFlapShape.lineTo(Math.round(A * (40 / 200)), 0);

  let dustFlap = new THREE.ShapeGeometry(dustFlapShape);

  return dustFlap;
};

export const getPlaneASideShape = (A, B) => {
  let planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, B);
  planeASideShape.lineTo(A, B);
  planeASideShape.lineTo(A, 0);

  let planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneBSideShape = (B, C) => {
  let planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, C);
  planeBSideShape.lineTo(B, C);
  planeBSideShape.lineTo(B, 0);

  let planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneCSideShape = (A, C) => {
  let planeCSideShape = new THREE.Shape();
  planeCSideShape.moveTo(0, 0);
  planeCSideShape.lineTo(0, C);
  planeCSideShape.lineTo(A, C);
  planeCSideShape.lineTo(A, 0);

  let planeCSide = new THREE.ShapeGeometry(planeCSideShape);

  return planeCSide;
};
