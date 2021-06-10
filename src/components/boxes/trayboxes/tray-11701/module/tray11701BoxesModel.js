import * as THREE from 'three';

export const getLRLidALeftRightShape = (B, C) => {
  const lrLidALeftRightShape = new THREE.Shape();
  lrLidALeftRightShape.moveTo(0, 0);
  lrLidALeftRightShape.lineTo((B * 0.067) | 0, C);
  lrLidALeftRightShape.lineTo((B * 0.933) | 0, C);
  lrLidALeftRightShape.lineTo(B, 0);

  const lrLidALeftRight = new THREE.ShapeGeometry(lrLidALeftRightShape);

  return lrLidALeftRight;
};

export const getLidBLeftRightShape = (B, C) => {
  const lidBLeftRightShape = new THREE.Shape();
  lidBLeftRightShape.moveTo(0, 0);
  lidBLeftRightShape.lineTo(0, C);
  lidBLeftRightShape.lineTo((B * 0.167) | 0, C);
  lidBLeftRightShape.lineTo((B * 0.167) | 0, (C * 1.1) | 0);
  lidBLeftRightShape.lineTo((B * 0.333) | 0, (C * 1.1) | 0);
  lidBLeftRightShape.lineTo((B * 0.333) | 0, C);
  lidBLeftRightShape.lineTo((B * 0.667) | 0, C);
  lidBLeftRightShape.lineTo((B * 0.667) | 0, (C * 1.1) | 0);
  lidBLeftRightShape.lineTo((B * 0.833) | 0, (C * 1.1) | 0);
  lidBLeftRightShape.lineTo((B * 0.833) | 0, C);
  lidBLeftRightShape.lineTo(B, C);
  lidBLeftRightShape.lineTo(B, 0);

  const lidBLeftRight = new THREE.ShapeGeometry(lidBLeftRightShape);

  return lidBLeftRight;
};

export const getDustFlapShape = (B, C) => {
  const dustFlapShape = new THREE.Shape();
  dustFlapShape.moveTo(0, 0);
  dustFlapShape.lineTo(0, C);
  dustFlapShape.lineTo((B * 0.333) | 0, C);
  dustFlapShape.lineTo((B * 0.333) | 0, 0);

  const dustFlap = new THREE.ShapeGeometry(dustFlapShape);

  return dustFlap;
};

export const getDustFlapLidAShape = (B, C) => {
  const dustFlapLidAShape = new THREE.Shape();
  dustFlapLidAShape.moveTo(0, 0);
  dustFlapLidAShape.lineTo(0, C);
  dustFlapLidAShape.bezierCurveTo(
    0, // X1
    C, // Y1
    (B * 0.333) | 0, // X2
    C, // Y2
    (B * 0.333) | 0, // X3
    0 // Y3
  );
  dustFlapLidAShape.lineTo((B * 0.333) | 0, 0);

  const dustFlapLid = new THREE.ShapeGeometry(dustFlapLidAShape);

  return dustFlapLid;
};
