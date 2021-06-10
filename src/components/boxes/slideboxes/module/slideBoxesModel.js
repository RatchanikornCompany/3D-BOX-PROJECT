import * as THREE from 'three';

export const getInnerFlapTopBottomShape = (A, C) => {
  const innerFlapTopBottomShape = new THREE.Shape();
  innerFlapTopBottomShape.moveTo(0, 0);
  innerFlapTopBottomShape.lineTo(0, Math.round(C * (9 / 40)));
  innerFlapTopBottomShape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(C * (9 / 40))
  );
  innerFlapTopBottomShape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(C * (14 / 40))
  );
  innerFlapTopBottomShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (14 / 40))
  );
  innerFlapTopBottomShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (9 / 40))
  );
  innerFlapTopBottomShape.lineTo(A, Math.round(C * (9 / 40)));
  innerFlapTopBottomShape.lineTo(A, 0);

  const innerFlapTopBottom = new THREE.ShapeGeometry(innerFlapTopBottomShape);

  return innerFlapTopBottom;
};

export const getInnerFlapLeftRightShape = (B, C) => {
  const innerFlapLeftRightShape = new THREE.Shape();
  innerFlapLeftRightShape.moveTo(0, 0);
  innerFlapLeftRightShape.lineTo(0, Math.round(C * (9 / 40)));
  innerFlapLeftRightShape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapLeftRightShape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapLeftRightShape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapLeftRightShape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapLeftRightShape.lineTo(B, Math.round(C * (9 / 40)));
  innerFlapLeftRightShape.lineTo(B, 0);

  const innerFlapLeftRight = new THREE.ShapeGeometry(innerFlapLeftRightShape);

  return innerFlapLeftRight;
};

export const getDustFlapHalfTopShape = (C) => {
  const dustFlapHalfTopShape = new THREE.Shape();
  dustFlapHalfTopShape.moveTo(0, 0);
  dustFlapHalfTopShape.lineTo(0, C);
  dustFlapHalfTopShape.lineTo(
    Math.round(C * (35 / 40)),
    Math.round(C * (35 / 40))
  );

  const dustFlapHalfTop = new THREE.ShapeGeometry(dustFlapHalfTopShape);

  return dustFlapHalfTop;
};

export const getDustFlapHalfBottomShape = (C) => {
  const dustFlapHalfBottomShape = new THREE.Shape();
  dustFlapHalfBottomShape.moveTo(0, 0);
  dustFlapHalfBottomShape.lineTo(
    Math.round(C * (35 / 40)),
    Math.round(C * (35 / 40))
  );
  dustFlapHalfBottomShape.lineTo(C, 0);

  const dustFlapHalfBottom = new THREE.ShapeGeometry(dustFlapHalfBottomShape);

  return dustFlapHalfBottom;
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

export const getPlaneALidBoxesShape = (A, B) => {
  const planeALidBoxesShape = new THREE.Shape();
  planeALidBoxesShape.moveTo(0, 0);
  planeALidBoxesShape.lineTo(0, B);
  planeALidBoxesShape.lineTo(A, B);
  planeALidBoxesShape.lineTo(A, 0);

  const planeALidBoxes = new THREE.ShapeGeometry(planeALidBoxesShape);

  return planeALidBoxes;
};

export const getPlaneBSideShape = (C, B) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, B);
  planeBSideShape.lineTo(C, B);
  planeBSideShape.lineTo(C, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneBLidBoxesShape = (A, C) => {
  const planeBLidBoxesShape = new THREE.Shape();
  planeBLidBoxesShape.moveTo(0, 0);
  planeBLidBoxesShape.lineTo(0, C);
  planeBLidBoxesShape.lineTo(A, C);
  planeBLidBoxesShape.lineTo(A, 0);

  const planeBLidBoxes = new THREE.ShapeGeometry(planeBLidBoxesShape);

  return planeBLidBoxes;
};

export const getPlaneCSideShape = (A, C) => {
  const planeCSideShape = new THREE.Shape();
  planeCSideShape.moveTo(0, 0);
  planeCSideShape.lineTo(0, C);
  planeCSideShape.lineTo(A, C);
  planeCSideShape.lineTo(A, 0);

  const planeCSide = new THREE.ShapeGeometry(planeCSideShape);

  return planeCSide;
};

export const getGludLidShape = (A, G, gSlope) => {
  const planeGludLidShape = new THREE.Shape();
  planeGludLidShape.moveTo(0, 0);
  planeGludLidShape.lineTo(G, gSlope);
  planeGludLidShape.lineTo(A - G, gSlope);
  planeGludLidShape.lineTo(A, 0);

  const planeGludLid = new THREE.ShapeGeometry(planeGludLidShape);

  return planeGludLid;
};
