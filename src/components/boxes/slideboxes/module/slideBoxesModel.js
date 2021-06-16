import * as THREE from 'three';

export const getInnerFlapTopShape = (A, C) => {
  const innerFlapTopShape = new THREE.Shape();
  innerFlapTopShape.moveTo(0, 0);
  innerFlapTopShape.lineTo(0, Math.round(C * (9 / 40)));
  innerFlapTopShape.lineTo(Math.round(A * (5 / 200)), Math.round(C * (9 / 40)));
  innerFlapTopShape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(C * (14 / 40))
  );
  innerFlapTopShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (14 / 40))
  );
  innerFlapTopShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (9 / 40))
  );
  innerFlapTopShape.lineTo(A, Math.round(C * (9 / 40)));
  innerFlapTopShape.lineTo(A, 0);

  const innerFlapTop = new THREE.ShapeGeometry(innerFlapTopShape);

  return innerFlapTop;
};

export const getInnerFlapBottomShape = (A, C) => {
  const innerFlapBottomShape = new THREE.Shape();
  innerFlapBottomShape.moveTo(0, 0);
  innerFlapBottomShape.lineTo(0, Math.round(-C * (9 / 40)));
  innerFlapBottomShape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(-C * (9 / 40))
  );
  innerFlapBottomShape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(-C * (14 / 40))
  );
  innerFlapBottomShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(-C * (14 / 40))
  );
  innerFlapBottomShape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(-C * (9 / 40))
  );
  innerFlapBottomShape.lineTo(A, Math.round(-C * (9 / 40)));
  innerFlapBottomShape.lineTo(A, 0);

  const innerFlapBottom = new THREE.ShapeGeometry(innerFlapBottomShape);

  return innerFlapBottom;
};

export const getInnerFlapLeftShape = (B, C) => {
  const innerFlapLeftShape = new THREE.Shape();
  innerFlapLeftShape.moveTo(0, 0);
  innerFlapLeftShape.lineTo(0, Math.round(C * (9 / 40)));
  innerFlapLeftShape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapLeftShape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapLeftShape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapLeftShape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapLeftShape.lineTo(B, Math.round(C * (9 / 40)));
  innerFlapLeftShape.lineTo(B, 0);

  const innerFlapLeft = new THREE.ShapeGeometry(innerFlapLeftShape);

  return innerFlapLeft;
};

export const getInnerFlapRightShape = (B, C) => {
  const innerFlapRightShape = new THREE.Shape();
  innerFlapRightShape.moveTo(0, 0);
  innerFlapRightShape.lineTo(0, Math.round(C * (9 / 40)));
  innerFlapRightShape.lineTo(
    Math.round(-B * (5 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapRightShape.lineTo(
    Math.round(-B * (5 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapRightShape.lineTo(
    Math.round(-B * (95 / 100)),
    Math.round(C * (14 / 40))
  );
  innerFlapRightShape.lineTo(
    Math.round(-B * (95 / 100)),
    Math.round(C * (9 / 40))
  );
  innerFlapRightShape.lineTo(-B, Math.round(C * (9 / 40)));
  innerFlapRightShape.lineTo(-B, 0);

  const innerFlapRight = new THREE.ShapeGeometry(innerFlapRightShape);

  return innerFlapRight;
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

export const getPlaneALidFrontBoxesShape = (A, B) => {
  const planeALidFrontBoxesShape = new THREE.Shape();
  planeALidFrontBoxesShape.moveTo(0, 0);
  planeALidFrontBoxesShape.lineTo(0, B);
  planeALidFrontBoxesShape.lineTo(A, B);
  planeALidFrontBoxesShape.lineTo(A, 0);

  const planeALidFrontBoxes = new THREE.ShapeGeometry(planeALidFrontBoxesShape);

  return planeALidFrontBoxes;
};

export const getPlaneALidBackBoxesShape = (A, B) => {
  const planeALidBackBoxesShape = new THREE.Shape();
  planeALidBackBoxesShape.moveTo(0, 0);
  planeALidBackBoxesShape.lineTo(0, -B);
  planeALidBackBoxesShape.lineTo(A, -B);
  planeALidBackBoxesShape.lineTo(A, 0);

  const planeALidBackBoxes = new THREE.ShapeGeometry(planeALidBackBoxesShape);

  return planeALidBackBoxes;
};

export const getPlaneBLidBoxesShape = (A, C) => {
  const planeBLidBoxesShape = new THREE.Shape();
  planeBLidBoxesShape.moveTo(0, 0);
  planeBLidBoxesShape.lineTo(0, -C);
  planeBLidBoxesShape.lineTo(A, -C);
  planeBLidBoxesShape.lineTo(A, 0);

  const planeBLidBoxes = new THREE.ShapeGeometry(planeBLidBoxesShape);

  return planeBLidBoxes;
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
