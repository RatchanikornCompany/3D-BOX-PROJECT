import * as THREE from 'three';

import { material } from '../../../.modules/material';

import {
  getInnerFlapTopShape,
  getInnerFlapBottomShape,
  getInnerFlapLeftShape,
  getInnerFlapRightShape,
  getDustFlapHalfTopShape,
  getDustFlapHalfBottomShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
  getPlaneALidFrontBoxesShape,
  getPlaneALidBackBoxesShape,
  getPlaneBLidBoxesShape,
  getGludLidShape,
} from './slideBoxesModel';
import { foldBox } from './slideBoxesAnim';

export const slideBoxesModel = (
  A,
  B,
  C,
  O,
  G,
  GSlope,
  animate,
  materialColor
) => {
  const sideABack = new THREE.Mesh(
    getPlaneASideShape(A, B),
    material(O, materialColor)
  );
  sideABack.castShadow = true;

  const sideInnerFlapLeft = new THREE.Mesh(
    getInnerFlapLeftShape(B, C),
    material(O, materialColor)
  );
  sideInnerFlapLeft.castShadow = true;
  sideInnerFlapLeft.rotation.z = Math.PI / 2;

  const sideLidBLeft = new THREE.Mesh(
    getPlaneBSideShape(C, B),
    material(O, materialColor)
  );
  sideLidBLeft.castShadow = true;
  sideLidBLeft.position.x = -C;

  const sideDustFlapLeftTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O, materialColor)
  );
  sideDustFlapLeftTop.castShadow = true;
  sideDustFlapLeftTop.rotation.z = Math.PI / 2;

  const sideDustFlapLeftBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O, materialColor)
  );
  sideDustFlapLeftBottom.castShadow = true;
  sideDustFlapLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(C, B),
    material(O, materialColor)
  );
  sideBLeft.castShadow = true;
  sideBLeft.position.x = -C;

  const sideInnerFlapRight = new THREE.Mesh(
    getInnerFlapRightShape(B, C),
    material(O, materialColor)
  );
  sideInnerFlapRight.castShadow = true;
  sideInnerFlapRight.rotation.z = -Math.PI / 2;

  const sideLidBRight = new THREE.Mesh(
    getPlaneBSideShape(C, B),
    material(O, materialColor)
  );
  sideLidBRight.castShadow = true;

  const sideDustFlapRightTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O, materialColor)
  );
  sideDustFlapRightTop.castShadow = true;

  const sideDustFlapRightBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O, materialColor)
  );
  sideDustFlapRightBottom.castShadow = true;
  sideDustFlapRightBottom.rotation.z = Math.PI * 1.5;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(C, B),
    material(O, materialColor)
  );
  sideBRight.castShadow = true;

  const sideInnerFlapTop = new THREE.Mesh(
    getInnerFlapTopShape(A, C),
    material(O, materialColor)
  );
  sideInnerFlapTop.castShadow = true;

  const sideLidCTop = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O, materialColor)
  );
  sideLidCTop.castShadow = true;

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O, materialColor)
  );
  sideDustFlapTopLeft.castShadow = true;
  sideDustFlapTopLeft.rotation.z = Math.PI / 2;

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O, materialColor)
  );
  sideDustFlapTopRight.castShadow = true;

  const sideATop = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O, materialColor)
  );
  sideATop.castShadow = true;

  const sideInnerFlapBottom = new THREE.Mesh(
    getInnerFlapBottomShape(A, C),
    material(O, materialColor)
  );
  sideInnerFlapBottom.castShadow = true;

  const sideLidCBottom = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O, materialColor)
  );
  sideLidCBottom.castShadow = true;
  sideLidCBottom.position.y = -C;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O, materialColor)
  );
  sideDustFlapBottomLeft.castShadow = true;
  sideDustFlapBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O, materialColor)
  );
  sideDustFlapBottomRight.castShadow = true;
  sideDustFlapBottomRight.rotation.z = -Math.PI / 2;

  const sideABottom = new THREE.Mesh(
    getPlaneCSideShape(A, C),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;
  sideABottom.position.y = -C;

  const sideALidFront = new THREE.Mesh(
    getPlaneALidFrontBoxesShape(A, B),
    material(O, materialColor)
  );
  sideALidFront.castShadow = true;

  const sideALidBack = new THREE.Mesh(
    getPlaneALidBackBoxesShape(A, B),
    material(O, materialColor)
  );
  sideALidBack.castShadow = true;
  sideALidBack.rotation.x = Math.PI;

  const sideBLidFront = new THREE.Mesh(
    getPlaneBLidBoxesShape(A, C),
    material(O, materialColor)
  );
  sideBLidFront.castShadow = true;
  sideBLidFront.rotation.x = Math.PI;

  const sideGludLid = new THREE.Mesh(
    getGludLidShape(A, G, GSlope),
    material(O, materialColor)
  );
  sideGludLid.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getInnerFlapLeftShape(B, C));
  const sideInnerFlapLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapLeftEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.position.x = -C;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapLeftTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftTopEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapLeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -C;

  edges = new THREE.EdgesGeometry(getInnerFlapRightShape(B, C));
  const sideInnerFlapRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapRightEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapRightTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapRightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapRightBottomEdges.rotation.z = Math.PI * 1.5;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getInnerFlapTopShape(A, C));
  const sideInnerFlapTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideLidCTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapTopLeftEdges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getInnerFlapBottomShape(A, C));
  const sideInnerFlapBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideLidCBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCBottomEdges.position.y = -C;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomLeftEdges.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomRightEdges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.y = -C;

  edges = new THREE.EdgesGeometry(getPlaneALidFrontBoxesShape(A, B));
  const sideALidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneALidBackBoxesShape(A, B));
  const sideALidBackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidBackEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBLidBoxesShape(A, C));
  const sideBLidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLidFrontEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getGludLidShape(A, G, GSlope));
  const sideGludLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotInnerFlapLeft = new THREE.Object3D();
  pivotInnerFlapLeft.add(sideInnerFlapLeft, sideInnerFlapLeftEdges);
  pivotInnerFlapLeft.position.x = -C;

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges, pivotInnerFlapLeft);
  pivotLidBLeft.position.x = -C;

  const pivotDustFlapLeftTop = new THREE.Object3D();
  pivotDustFlapLeftTop.add(sideDustFlapLeftTop, sideDustFlapLeftTopEdges);
  pivotDustFlapLeftTop.position.y = B;

  const pivotDustFlapLeftBottom = new THREE.Object3D();
  pivotDustFlapLeftBottom.add(
    sideDustFlapLeftBottom,
    sideDustFlapLeftBottomEdges
  );

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    sideBLeftEdges,
    pivotLidBLeft,
    pivotDustFlapLeftTop,
    pivotDustFlapLeftBottom
  );

  const pivotInnerFlapRight = new THREE.Object3D();
  pivotInnerFlapRight.add(sideInnerFlapRight, sideInnerFlapRightEdges);
  pivotInnerFlapRight.position.x = C;

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges, pivotInnerFlapRight);
  pivotLidBRight.position.x = C;

  const pivotDustFlapRightTop = new THREE.Object3D();
  pivotDustFlapRightTop.add(sideDustFlapRightTop, sideDustFlapRightTopEdges);
  pivotDustFlapRightTop.position.y = B;

  const pivotDustFlapRightBottom = new THREE.Object3D();
  pivotDustFlapRightBottom.add(
    sideDustFlapRightBottom,
    sideDustFlapRightBottomEdges
  );

  const pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    sideBRightEdges,
    pivotLidBRight,
    pivotDustFlapRightTop,
    pivotDustFlapRightBottom
  );
  pivotRight.position.x = A;

  const pivotInnerFlapTop = new THREE.Object3D();
  pivotInnerFlapTop.add(sideInnerFlapTop, sideInnerFlapTopEdges);
  pivotInnerFlapTop.position.y = C;

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideLidCTop, sideLidCTopEdges, pivotInnerFlapTop);
  pivotLidATop.position.y = C;

  const pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft, sideDustFlapTopLeftEdges);

  const pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight, sideDustFlapTopRightEdges);
  pivotDustFlapTopRight.position.x = A;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    sideATopEdges,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.y = B;

  const pivotInnerFlapBottom = new THREE.Object3D();
  pivotInnerFlapBottom.add(sideInnerFlapBottom, sideInnerFlapBottomEdges);
  pivotInnerFlapBottom.position.y = -C;

  const pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(
    sideLidCBottom,
    sideLidCBottomEdges,
    pivotInnerFlapBottom
  );
  pivotLidABottom.position.y = -C;

  const pivotDustFlapBottomLeft = new THREE.Object3D();
  pivotDustFlapBottomLeft.add(
    sideDustFlapBottomLeft,
    sideDustFlapBottomLeftEdges
  );

  const pivotDustFlapBottomRight = new THREE.Object3D();
  pivotDustFlapBottomRight.add(
    sideDustFlapBottomRight,
    sideDustFlapBottomRightEdges
  );
  pivotDustFlapBottomRight.position.x = A;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    sideABottomEdges,
    pivotLidABottom,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  const pivotBack = new THREE.Object3D();
  pivotBack.add(
    sideABack,
    sideABackEdges,
    pivotLeft,
    pivotRight,
    pivotTop,
    pivotBottom
  );

  const pivotBLidBack = new THREE.Object3D();
  pivotBLidBack.add(sideBLidFront.clone(), sideBLidFrontEdges.clone());
  pivotBLidBack.position.y = B;

  const pivotALidBack = new THREE.Object3D();
  pivotALidBack.add(sideALidBack, sideALidBackEdges, pivotBLidBack);
  pivotALidBack.position.y = C;

  const pivotBLidFront = new THREE.Object3D();
  pivotBLidFront.add(sideBLidFront, sideBLidFrontEdges, pivotALidBack);
  pivotBLidFront.rotation.x = Math.PI;

  const pivotGludLid = new THREE.Object3D();
  pivotGludLid.add(sideGludLid, sideGludLidEdges);
  pivotGludLid.position.y = B;

  const pivotALidFront = new THREE.Object3D();
  pivotALidFront.add(
    sideALidFront,
    sideALidFrontEdges,
    pivotGludLid,
    pivotBLidFront
  );
  pivotALidFront.position.x = A * 2;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotALidFront);

  if (animate) {
    foldBox(
      pivotBack,
      pivotLeft,
      pivotLidBLeft,
      pivotDustFlapLeftTop,
      pivotDustFlapLeftBottom,
      pivotInnerFlapLeft,
      pivotRight,
      pivotLidBRight,
      pivotDustFlapRightTop,
      pivotDustFlapRightBottom,
      pivotInnerFlapRight,
      pivotTop,
      pivotLidATop,
      pivotDustFlapTopLeft,
      pivotDustFlapTopRight,
      pivotInnerFlapTop,
      pivotBottom,
      pivotLidABottom,
      pivotDustFlapBottomLeft,
      pivotDustFlapBottomRight,
      pivotInnerFlapBottom,
      pivotBLidBack,
      pivotALidBack,
      pivotBLidFront,
      pivotGludLid,
      pivotALidFront
    );
  }

  return pivotAll;
};
