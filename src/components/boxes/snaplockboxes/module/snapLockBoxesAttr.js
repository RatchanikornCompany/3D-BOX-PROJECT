import * as THREE from 'three';

import { material } from '../../../_modules/material';

import {
  getLidShape,
  getLRLidShape,
  getLidBottomShape,
  getLRLidBottomShape,
  getLRLidBottomShapeD,
  getLidCurveShape,
  getLidBottomCurveShape,
  getGlueLidShape,
  getPlaneASide,
  getPlaneBSide,
} from './snapLockBoxesModel';
import { foldBox } from './snapLockBoxesAnim';

export const snapLockBoxesModel = (
  A,
  B,
  C,
  O,
  G,
  gSlope,
  animate,
  materialColor
) => {
  const sideBottomAFront = new THREE.Mesh(
    getLidBottomShape(A, C),
    material(O, materialColor)
  );
  sideBottomAFront.castShadow = true;
  sideBottomAFront.rotation.x = Math.PI;

  const sideLidBottomAFront = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O, materialColor)
  );
  sideLidBottomAFront.castShadow = true;
  sideLidBottomAFront.rotation.x = Math.PI;

  const sideLidDBottomAFront = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O, materialColor)
  );
  sideLidDBottomAFront.castShadow = true;
  sideLidDBottomAFront.rotation.x = Math.PI;

  const sideAFront = new THREE.Mesh(
    getPlaneASide(A, C),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideRightLid = new THREE.Mesh(
    getLidCurveShape(B, C),
    material(O, materialColor)
  );
  sideRightLid.castShadow = true;

  const sideRightLidD = new THREE.Mesh(
    getLidBottomCurveShape(B, C),
    material(O, materialColor)
  );
  sideRightLidD.castShadow = true;
  sideRightLidD.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSide(B, C),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideLeftLid = new THREE.Mesh(
    getLidCurveShape(B, C),
    material(O, materialColor)
  );
  sideLeftLid.castShadow = true;
  sideLeftLid.rotation.y = Math.PI;

  const sideLeftLidD = new THREE.Mesh(
    getLidBottomCurveShape(B, C),
    material(O, materialColor)
  );
  sideLeftLidD.castShadow = true;
  sideLeftLidD.rotation.x = Math.PI;

  const sideBLeft = new THREE.Mesh(
    getPlaneBSide(B, C),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.position.x = -B;

  const sideGlueLid = new THREE.Mesh(
    getGlueLidShape(C, G, gSlope),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.z = Math.PI / 2;

  const sideTopABack = new THREE.Mesh(
    getLidShape(A, C),
    material(O, materialColor)
  );
  sideTopABack.castShadow = true;
  sideTopABack.castShadow = true;

  const sideBottomABack = new THREE.Mesh(
    getLidBottomShape(A, C),
    material(O, materialColor)
  );
  sideBottomABack.castShadow = true;
  sideBottomABack.rotation.x = Math.PI;

  const sideTopALidTopBack = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O, materialColor)
  );
  sideTopALidTopBack.castShadow = true;

  const sideLidBottomABack = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O, materialColor)
  );
  sideLidBottomABack.castShadow = true;
  sideLidBottomABack.rotation.x = Math.PI;

  const sideLidDBottomABack = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O, materialColor)
  );
  sideLidDBottomABack.castShadow = true;
  sideLidDBottomABack.rotation.x = Math.PI;

  const sideABack = new THREE.Mesh(
    getPlaneASide(A, C),
    material(O, materialColor)
  );
  sideABack.castShadow = true;
  sideABack.position.x = -A;

  const sideTopAFront = new THREE.Mesh(
    getLidShape(A, C),
    material(O, materialColor)
  );
  sideTopAFront.castShadow = true;

  const sideTopALidTopFront = new THREE.Mesh(
    getLRLidShape(A, C),
    material(O, materialColor)
  );
  sideTopALidTopFront.castShadow = true;

  let edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const sideBottomAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomAFrontEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  const sideLidBottomAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomAFrontEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  const sideLidDBottomAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidDBottomAFrontEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  const sideRightLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  const sideRightLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideRightLidDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  const sideLeftLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  const sideLeftLidDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftLidDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -B;

  edges = new THREE.EdgesGeometry(getGlueLidShape(C, G, gSlope));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  const sideTopABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideTopALidTopBackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  const sideBottomABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomABackEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  const sideLidBottomABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomABackEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  const sideLidDBottomABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidDBottomABackEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.position.x = -A;

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  const sideTopAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  const sideTopALidTopFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotBottomFront = new THREE.Object3D();
  pivotBottomFront.add(sideBottomAFront, sideBottomAFrontEdges);

  const pivotBottomFrontLid = new THREE.Object3D();
  pivotBottomFrontLid.add(sideLidBottomAFront, sideLidBottomAFrontEdges);
  pivotBottomFrontLid.position.set(
    Math.round(A * (133 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  const pivotBottomFrontLidD = new THREE.Object3D();
  pivotBottomFrontLidD.add(sideLidDBottomAFront, sideLidDBottomAFrontEdges);
  pivotBottomFrontLidD.position.set(
    Math.round(A * (5 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  const pivotGroupBottomFront = new THREE.Object3D();
  pivotGroupBottomFront.add(
    pivotBottomFront,
    pivotBottomFrontLid,
    pivotBottomFrontLidD
  );

  const pivotFront = new THREE.Object3D();
  pivotFront.add(sideAFront, sideAFrontEdges, pivotGroupBottomFront);

  const pivotRightLid = new THREE.Object3D();
  pivotRightLid.add(sideRightLid, sideRightLidEdges);
  pivotRightLid.position.y = C;

  const pivotRightLidD = new THREE.Object3D();
  pivotRightLidD.add(sideRightLidD, sideRightLidDEdges);

  const pivotGroupRight = new THREE.Object3D();
  pivotGroupRight.add(
    sideBRight,
    sideBRightEdges,
    pivotRightLid,
    pivotRightLidD
  );
  pivotGroupRight.position.x = A;

  const pivotLeftLid = new THREE.Object3D();
  pivotLeftLid.add(sideLeftLid, sideLeftLidEdges);
  pivotLeftLid.position.y = C;

  const pivotLeftLidD = new THREE.Object3D();
  pivotLeftLidD.add(sideLeftLidD, sideLeftLidDEdges);
  pivotLeftLidD.position.x = -B;

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideBLeft, sideBLeftEdges, pivotLeftLid, pivotLeftLidD);

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.position.x = -A;
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotTopBack = new THREE.Object3D();
  pivotTopBack.add(sideTopABack, sideTopABackEdges);

  const pivotTopBackLid = new THREE.Object3D();
  pivotTopBackLid.position.y = Math.round(C * (52 / 75));
  pivotTopBackLid.add(sideTopALidTopBack, sideTopALidTopBackEdges);

  const pivotGroupTopBack = new THREE.Object3D();
  pivotGroupTopBack.add(pivotTopBack, pivotTopBackLid);
  pivotGroupTopBack.position.set(-A, C);

  const pivotBottomBack = new THREE.Object3D();
  pivotBottomBack.add(sideBottomABack, sideBottomABackEdges);
  pivotBottomBack.position.x = -A;

  const pivotBottomBackLid = new THREE.Object3D();
  pivotBottomBackLid.add(sideLidBottomABack, sideLidBottomABackEdges);
  pivotBottomBackLid.position.set(
    Math.round(A * (-42 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  const pivotBottomBackLidD = new THREE.Object3D();
  pivotBottomBackLidD.add(sideLidDBottomABack, sideLidDBottomABackEdges);
  pivotBottomBackLidD.position.set(
    Math.round(A * (-170 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  const pivotGroupBottomBack = new THREE.Object3D();
  pivotGroupBottomBack.add(
    pivotBottomBack,
    pivotBottomBackLid,
    pivotBottomBackLidD
  );

  const pivotBack = new THREE.Object3D();
  pivotBack.add(
    sideABack,
    sideABackEdges,
    pivotGlueLid,
    pivotGroupTopBack,
    pivotGroupBottomBack
  );
  pivotBack.position.x = -B;

  const pivotGroupLeft = new THREE.Object3D();
  pivotGroupLeft.add(pivotLeft, pivotBack);

  const pivotTopFront = new THREE.Object3D();
  pivotTopFront.add(sideTopAFront, sideTopAFrontEdges);

  const pivotTopFrontLid = new THREE.Object3D();
  pivotTopFrontLid.add(sideTopALidTopFront, sideTopALidTopFrontEdges);
  pivotTopFrontLid.position.y = Math.round(C * (52 / 75));

  const pivotTop = new THREE.Object3D();
  pivotTop.add(pivotTopFront, pivotTopFrontLid);
  pivotTop.position.y = C;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotFront, pivotGroupRight, pivotGroupLeft, pivotTop);

  const pivotGroupAll = new THREE.Object3D();
  pivotGroupAll.add(pivotAll);

  if (animate) {
    foldBox(
      pivotBack,
      pivotGlueLid,
      pivotLeftLid,
      pivotLeftLidD,
      pivotGroupLeft,
      pivotRightLid,
      pivotRightLidD,
      pivotGroupRight,
      pivotGroupTopBack,
      pivotTopBackLid,
      pivotTop,
      pivotTopFrontLid,
      pivotGroupBottomFront,
      pivotBottomFrontLid,
      pivotBottomFrontLidD,
      pivotGroupBottomBack,
      pivotBottomBackLid,
      pivotBottomBackLidD
    );
  }

  return pivotGroupAll;
};
