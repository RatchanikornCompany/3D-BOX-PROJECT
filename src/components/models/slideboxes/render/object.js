import * as THREE from 'three';

import { material } from '../../../function/material';

import {
  getInnerFlapTopBottomShape,
  getInnerFlapLeftRightShape,
  getDustFlapHalfTopShape,
  getDustFlapHalfBottomShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
  getPlaneALidBoxesShape,
  getPlaneBLidBoxesShape,
  getGludLidShape,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

export const slideBoxesModel = (
  valueA,
  valueB,
  valueC,
  valueO,
  valueG,
  valueGSlope,
  animate
) => {
  const sideABack = new THREE.Mesh(
    getPlaneASideShape(valueA, valueB),
    material(valueO)
  );

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(valueA, valueB));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapLeft = new THREE.Mesh(
    getInnerFlapLeftRightShape(valueB, valueC),
    material(valueO)
  );
  sideInnerFlapLeft.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(valueB, valueC));
  const sideInnerFlapLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapLeftEdges.rotation.z = Math.PI / 2;

  const sideLidBLeft = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );
  sideLidBLeft.position.x = -valueC;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueC, valueB));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.position.x = -valueC;

  const sideDustFlapLeftTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapLeftTop.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(valueC));
  const sideDustFlapLeftTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftTopEdges.rotation.y = Math.PI;

  const sideDustFlapLeftBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(valueC));
  const sideDustFlapLeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );
  sideBLeft.position.x = -valueC;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueC, valueB));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -valueC;

  const sideInnerFlapRight = new THREE.Mesh(
    getInnerFlapLeftRightShape(valueB, valueC),
    material(valueO)
  );
  sideInnerFlapRight.rotation.set(Math.PI, 0, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(valueB, valueC));
  const sideInnerFlapRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapRightEdges.rotation.set(Math.PI, 0, -Math.PI / 2);

  const sideLidBRight = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueC, valueB));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapRightTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(valueC));
  const sideDustFlapRightTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapRightBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(valueC),
    material(valueO)
  );
  sideDustFlapRightBottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(valueC));
  const sideDustFlapRightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapRightBottomEdges.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(
    getPlaneBSideShape(valueC, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(valueC, valueB));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapTop = new THREE.Mesh(
    getInnerFlapTopBottomShape(valueA, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(valueA, valueC));
  const sideInnerFlapTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideLidCTop = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(valueA, valueC));
  const sideLidCTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapTopLeft.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(valueC));
  const sideDustFlapTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapTopLeftEdges.rotation.y = Math.PI;

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(valueC));
  const sideDustFlapTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideATop = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(valueA, valueC));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapBottom = new THREE.Mesh(
    getInnerFlapTopBottomShape(valueA, valueC),
    material(valueO)
  );
  sideInnerFlapBottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(valueA, valueC));
  const sideInnerFlapBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapBottomEdges.rotation.x = Math.PI;

  const sideLidCBottom = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );
  sideLidCBottom.position.y = -valueC;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(valueA, valueC));
  const sideLidCBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCBottomEdges.position.y = -valueC;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(valueC));
  const sideDustFlapBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomLeftEdges.rotation.set(Math.PI, Math.PI, 0);

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapHalfTopShape(valueC),
    material(valueO)
  );
  sideDustFlapBottomRight.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(valueC));
  const sideDustFlapBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomRightEdges.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(
    getPlaneCSideShape(valueA, valueC),
    material(valueO)
  );
  sideABottom.position.y = -valueC;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(valueA, valueC));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.y = -valueC;

  // ฝา

  const sideALidFront = new THREE.Mesh(
    getPlaneALidBoxesShape(valueA, valueB),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneALidBoxesShape(valueA, valueB));
  const sideALidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideBLidFront = new THREE.Mesh(
    getPlaneBLidBoxesShape(valueA, valueC),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getPlaneBLidBoxesShape(valueA, valueC));
  const sideBLidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideGludLid = new THREE.Mesh(
    getGludLidShape(valueA, valueG, valueGSlope),
    material(valueO)
  );

  edges = new THREE.EdgesGeometry(getGludLidShape(valueA, valueG, valueGSlope));
  const sideGludLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const pivotInnerFlapLeft = new THREE.Object3D();
  pivotInnerFlapLeft.add(sideInnerFlapLeft, sideInnerFlapLeftEdges);
  pivotInnerFlapLeft.position.x = -valueC;

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges, pivotInnerFlapLeft);
  pivotLidBLeft.position.x = -valueC;

  const pivotDustFlapLeftTop = new THREE.Object3D();
  pivotDustFlapLeftTop.add(sideDustFlapLeftTop, sideDustFlapLeftTopEdges);
  pivotDustFlapLeftTop.position.y = valueB;

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
  pivotInnerFlapRight.position.x = valueC;

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges, pivotInnerFlapRight);
  pivotLidBRight.position.x = valueC;

  const pivotDustFlapRightTop = new THREE.Object3D();
  pivotDustFlapRightTop.add(sideDustFlapRightTop, sideDustFlapRightTopEdges);
  pivotDustFlapRightTop.position.y = valueB;

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
  pivotRight.position.x = valueA;

  const pivotInnerFlapTop = new THREE.Object3D();
  pivotInnerFlapTop.add(sideInnerFlapTop, sideInnerFlapTopEdges);
  pivotInnerFlapTop.position.y = valueC;

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideLidCTop, sideLidCTopEdges, pivotInnerFlapTop);
  pivotLidATop.position.y = valueC;

  const pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft, sideDustFlapTopLeftEdges);

  const pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight, sideDustFlapTopRightEdges);
  pivotDustFlapTopRight.position.x = valueA;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    sideATopEdges,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.y = valueB;

  const pivotInnerFlapBottom = new THREE.Object3D();
  pivotInnerFlapBottom.add(sideInnerFlapBottom, sideInnerFlapBottomEdges);
  pivotInnerFlapBottom.position.y = -valueC;

  const pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(
    sideLidCBottom,
    sideLidCBottomEdges,
    pivotInnerFlapBottom
  );
  pivotLidABottom.position.y = -valueC;

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
  pivotDustFlapBottomRight.position.x = valueA;

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
  pivotBLidBack.position.y = valueB;

  const pivotALidBack = new THREE.Object3D();
  pivotALidBack.add(
    sideALidFront.clone(),
    sideALidFrontEdges.clone(),
    pivotBLidBack
  );
  pivotALidBack.position.y = valueC;

  const pivotBLidFront = new THREE.Object3D();
  pivotBLidFront.add(sideBLidFront, sideBLidFrontEdges, pivotALidBack);
  pivotBLidFront.rotation.x = Math.PI;

  const pivotGludLid = new THREE.Object3D();
  pivotGludLid.add(sideGludLid, sideGludLidEdges);
  pivotGludLid.position.y = valueB;

  const pivotALidFront = new THREE.Object3D();
  pivotALidFront.add(
    sideALidFront,
    sideALidFrontEdges,
    pivotGludLid,
    pivotBLidFront
  );
  pivotALidFront.position.x = valueA * 2;

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, pivotALidFront);

  animate
    ? foldBox(
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
      )
    : expandBox(
        valueA,
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

  return pivotAll;
};
