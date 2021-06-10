import * as THREE from 'three';

import {
  getLidALeftRightShape,
  getLidBTopBottomShape,
  getLRLidATopShape,
  getGlueLidShape,
  getPlaneASideShape,
  getPlaneBSideShape,
} from './food12001BoxesModel';
import { foldBox } from './food12001BoxesAnim';

import { material } from '../../../../three_modules/material';

export const food12001Model = (A, B, C, O, G, animate, materialColor) => {
  const P = 5; //? ความกว้างเฉพาะด้านของฝาเสียบกาว

  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, B),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideGlueLid = new THREE.Mesh(
    getGlueLidShape(A, G, P),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;

  const sideLRLidALeft = new THREE.Mesh(
    getLRLidATopShape(B, C),
    material(O, materialColor)
  );
  sideLRLidALeft.castShadow = true;
  sideLRLidALeft.rotation.y = -Math.PI;

  const sideLRLidARight = new THREE.Mesh(
    getLRLidATopShape(B, C),
    material(O, materialColor)
  );
  sideLRLidARight.castShadow = true;

  const sideLidATop = new THREE.Mesh(
    getPlaneASideShape(A, B),
    material(O, materialColor)
  );
  sideLidATop.castShadow = true;

  const sideLidBTopLeft = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O, materialColor)
  );
  sideLidBTopLeft.castShadow = true;
  sideLidBTopLeft.rotation.y = Math.PI;

  const sideLidBTopRight = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O, materialColor)
  );
  sideLidBTopRight.castShadow = true;

  const sideBTop = new THREE.Mesh(
    getPlaneBSideShape(A, C),
    material(O, materialColor)
  );
  sideBTop.castShadow = true;

  const sideLidBBottomLeft = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O, materialColor)
  );
  sideLidBBottomLeft.castShadow = true;
  sideLidBBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  const sideLidBBottomRight = new THREE.Mesh(
    getLidBTopBottomShape(C),
    material(O, materialColor)
  );
  sideLidBBottomRight.castShadow = true;
  sideLidBBottomRight.rotation.x = Math.PI;

  const sideBBottom = new THREE.Mesh(
    getPlaneBSideShape(A, C),
    material(O, materialColor)
  );
  sideBBottom.castShadow = true;
  sideBBottom.rotation.x = -Math.PI;

  const sideLeft = new THREE.Mesh(
    getLidALeftRightShape(C, B),
    material(O, materialColor)
  );
  sideLeft.castShadow = true;
  sideLeft.rotation.y = -(Math.PI / 180) * 180;

  const sideRight = new THREE.Mesh(
    getLidALeftRightShape(C, B),
    material(O, materialColor)
  );
  sideRight.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLidShape(A, G, P));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidATopShape(B, C));
  const sideLRLidALeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLRLidALeftEdges.rotation.y = -Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidATopShape(B, C));
  const sideLRLidARightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideLidATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const sideLidBTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBTopLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const sideLidBTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(A, C));
  const sideBTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const sideLidBBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBBottomLeftEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getLidBTopBottomShape(C));
  const sideLidBBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBBottomRightEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(A, C));
  const sideBBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBBottomEdges.rotation.x = -Math.PI;

  edges = new THREE.EdgesGeometry(getLidALeftRightShape(C, B));
  const sideLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLeftEdges.rotation.y = -(Math.PI / 180) * 180;

  edges = new THREE.EdgesGeometry(getLidALeftRightShape(C, B));
  const sideRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);
  pivotGlueLid.position.y = B;

  const pivotLRLidALeft = new THREE.Object3D();
  pivotLRLidALeft.add(sideLRLidALeft, sideLRLidALeftEdges);

  const pivotLRLidARight = new THREE.Object3D();
  pivotLRLidARight.add(sideLRLidARight, sideLRLidARightEdges);
  pivotLRLidARight.position.x = A;

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(
    sideLidATop,
    sideLidATopEdges,
    pivotGlueLid,
    pivotLRLidALeft,
    pivotLRLidARight
  );
  pivotLidATop.position.y = C;

  const pivotLidBTopLeft = new THREE.Object3D();
  pivotLidBTopLeft.add(sideLidBTopLeft, sideLidBTopLeftEdges);

  const pivotLidBTopRight = new THREE.Object3D();
  pivotLidBTopRight.add(sideLidBTopRight, sideLidBTopRightEdges);
  pivotLidBTopRight.position.x = A;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideBTop,
    sideBTopEdges,
    pivotLidBTopLeft,
    pivotLidBTopRight,
    pivotLidATop
  );
  pivotTop.position.y = B;

  const pivotLidBBottomLeft = new THREE.Object3D();
  pivotLidBBottomLeft.add(sideLidBBottomLeft, sideLidBBottomLeftEdges);

  const pivotLidBBottomRight = new THREE.Object3D();
  pivotLidBBottomRight.add(sideLidBBottomRight, sideLidBBottomRightEdges);
  pivotLidBBottomRight.position.x = A;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideBBottom,
    sideBBottomEdges,
    pivotLidBBottomLeft,
    pivotLidBBottomRight
  );

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(sideLeft, sideLeftEdges);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(sideRight, sideRightEdges);
  pivotRight.position.x = A;

  const pivotBack = new THREE.Object3D();
  pivotBack.add(
    sideABack,
    sideABackEdges,
    pivotTop,
    pivotBottom,
    pivotLeft,
    pivotRight
  );

  if (animate) {
    foldBox(
      pivotBack,
      pivotGlueLid,
      pivotLRLidALeft,
      pivotLRLidARight,
      pivotLidATop,
      pivotLidBTopLeft,
      pivotLidBTopRight,
      pivotTop,
      pivotLidBBottomLeft,
      pivotLidBBottomRight,
      pivotBottom,
      pivotLeft,
      pivotRight
    );
  }

  return pivotBack;
};
