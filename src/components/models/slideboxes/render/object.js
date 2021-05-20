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

export const slideBoxesModel = (A, B, C, O, G, GSlope, animate) => {
  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapLeft = new THREE.Mesh(
    getInnerFlapLeftRightShape(B, C),
    material(O)
  );
  sideInnerFlapLeft.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(B, C));
  const sideInnerFlapLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapLeftEdges.rotation.z = Math.PI / 2;

  const sideLidBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideLidBLeft.position.x = -C;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.position.x = -C;

  const sideDustFlapLeftTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapLeftTop.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapLeftTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftTopEdges.rotation.y = Math.PI;

  const sideDustFlapLeftBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapLeftBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapLeftBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.position.x = -C;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.position.x = -C;

  const sideInnerFlapRight = new THREE.Mesh(
    getInnerFlapLeftRightShape(B, C),
    material(O)
  );
  sideInnerFlapRight.rotation.set(Math.PI, 0, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(B, C));
  const sideInnerFlapRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapRightEdges.rotation.set(Math.PI, 0, -Math.PI / 2);

  const sideLidBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapRightTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapRightTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapRightBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapRightBottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfBottomShape(C));
  const sideDustFlapRightBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapRightBottomEdges.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapTop = new THREE.Mesh(
    getInnerFlapTopBottomShape(A, C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(A, C));
  const sideInnerFlapTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideLidCTop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideLidCTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapTopLeft.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapTopLeftEdges.rotation.y = Math.PI;

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapTopRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideInnerFlapBottom = new THREE.Mesh(
    getInnerFlapTopBottomShape(A, C),
    material(O)
  );
  sideInnerFlapBottom.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(A, C));
  const sideInnerFlapBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapBottomEdges.rotation.x = Math.PI;

  const sideLidCBottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideLidCBottom.position.y = -C;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideLidCBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidCBottomEdges.position.y = -C;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapBottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomLeftEdges.rotation.set(Math.PI, Math.PI, 0);

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapBottomRight.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getDustFlapHalfTopShape(C));
  const sideDustFlapBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideDustFlapBottomRightEdges.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideABottom.position.y = -C;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.y = -C;

  // ฝา

  const sideALidFront = new THREE.Mesh(
    getPlaneALidBoxesShape(A, B),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneALidBoxesShape(A, B));
  const sideALidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideBLidFront = new THREE.Mesh(
    getPlaneBLidBoxesShape(A, C),
    material(O)
  );

  edges = new THREE.EdgesGeometry(getPlaneBLidBoxesShape(A, C));
  const sideBLidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  const sideGludLid = new THREE.Mesh(
    getGludLidShape(A, G, GSlope),
    material(O)
  );

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
  pivotALidBack.add(
    sideALidFront.clone(),
    sideALidFrontEdges.clone(),
    pivotBLidBack
  );
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
        A,
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
