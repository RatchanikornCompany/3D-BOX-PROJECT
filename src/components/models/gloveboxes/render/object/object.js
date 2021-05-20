import * as THREE from 'three';

import { material } from '../../../../function/material';

import { getLidShape, getFlaps, getCover, getCoverD } from './module/models';
import {
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
  getLidCover,
} from '../../../tuckendboxes/render/object/module/models';
import { foldBox, expandBox } from './module/animate';

export const gloveModel = (A, B, C, O, animate) => {
  const P = 18; // ความกว้างเฉพาะด้านของฝาเสียบกาว
  const plug = 15;
  const plugSlope = 5;

  // let tween;

  /* #region  //* ฉาก */

  /* #region  //* sideAFront */

  const sideAFront = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* sideABack */

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, C), material(O));
  sideABack.rotation.y = Math.PI;

  const sideGlueLid = new THREE.Mesh(getLidShape(C, P), material(O));
  sideGlueLid.rotation.y = Math.PI;
  sideGlueLid.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  //* sideTop */

  const sideTop = new THREE.Mesh(getCover(A, B), material(O));
  sideTop.rotation.y = Math.PI;

  const sideLidTop = new THREE.Mesh(getCoverD(A, B), material(O));
  sideLidTop.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //* sideBottom */

  const sideBottom = new THREE.Mesh(getCover(A, B), material(O));
  sideBottom.rotation.x = Math.PI;
  sideBottom.rotation.y = Math.PI;

  const sideLidBottom = new THREE.Mesh(getCoverD(A, B), material(O));
  sideLidBottom.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideBLeft */

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));
  sideBLeft.rotation.y = Math.PI;

  const sideLidBLeft = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O)
  );
  sideLidBLeft.rotation.y = Math.PI;

  const sideBLeftD = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O)
  );
  sideBLeftD.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideBRight */

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  const sideLidBRight = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O)
  );
  sideLidBRight.rotation.y = Math.PI;

  const sideBRightD = new THREE.Mesh(
    getFlaps(A, B, plug, plugSlope),
    material(O)
  );
  sideBRightD.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideATop */

  const sideATop = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugSlope),
    material(O)
  );

  const sideATopLid = new THREE.Mesh(
    getLidCover(A, B, plug, plugSlope),
    material(O)
  );

  /* #endregion */
  /* #region  //* sideABottom */

  const sideABottom = new THREE.Mesh(
    getPlaneTopBottomShape(A, B, plugSlope),
    material(O)
  );
  sideABottom.rotation.x = Math.PI;

  const sideALidBottom = new THREE.Mesh(
    getLidCover(A, B, plug, plugSlope),
    material(O)
  );
  sideALidBottom.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - แบบมีเส้น*/

  /* #region  //* sideAFront */

  let edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* sideABack */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, C));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidShape(C, P));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.y = Math.PI;
  sideGlueLidEdges.rotation.z = Math.PI / 2;

  /* #endregion */
  /* #region  //* sideTop */

  edges = new THREE.EdgesGeometry(getCover(A, B));
  const sideTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideTopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getCoverD(A, B));
  const sideLidTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidTopEdges.rotation.y = Math.PI;

  /* #endregion */
  /* #region  //* sideBottom */

  edges = new THREE.EdgesGeometry(getCover(A, B));
  const sideBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBottomEdges.rotation.x = Math.PI;
  sideBottomEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getCoverD(A, B));
  const sideLidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBottomEdges.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideBLeft */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideLidBLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideBLeftDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftDEdges.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideBRight */

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(B, C));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideLidBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideLidBRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getFlaps(A, B, plug, plugSlope));
  const sideBRightDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBRightDEdges.rotation.set(Math.PI, Math.PI, 0);

  /* #endregion */
  /* #region  //* sideATop */

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugSlope));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidCover(A, B, plug, plugSlope));
  const sideATopLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* sideABottom */

  edges = new THREE.EdgesGeometry(getPlaneTopBottomShape(A, B, plugSlope));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLidCover(A, B, plug, plugSlope));
  const sideALidBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideALidBottomEdges.rotation.x = Math.PI;

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivotAFront */

  /* #region  //* pivotGroupABottom */

  /* #region  //* pivotGroupATop */

  const pivotALidTop = new THREE.Object3D();
  pivotALidTop.position.y = B;
  pivotALidTop.add(sideATopLid, sideATopLidEdges);

  const pivotGroupATop = new THREE.Object3D();
  pivotGroupATop.add(sideATop, sideATopEdges, pivotALidTop);
  pivotGroupATop.position.y = C;

  /* #endregion */
  /* #region  //* pivotABottom */

  const pivotALidBottom = new THREE.Object3D();
  pivotALidBottom.add(sideALidBottom, sideALidBottomEdges);
  pivotALidBottom.position.y = -B;

  const pivotGroupABottom = new THREE.Object3D();
  pivotGroupABottom.add(sideABottom, sideABottomEdges, pivotALidBottom);

  /* #endregion */

  /* #endregion */

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotGroupATop,
    pivotGroupABottom
  );

  /* #endregion */
  /* #region  //* pivotBLeft */
  /* #region  //* pivotGroupABack */

  /* #region  //* pivotABack */

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.position.x = -A;
  pivotGlueLid.add(sideGlueLid, sideGlueLidEdges);

  const pivotABack = new THREE.Object3D();
  pivotABack.add(sideABack, sideABackEdges, pivotGlueLid);

  /* #endregion */
  /* #region  //* pivotGroupTop */

  const pivotTop = new THREE.Object3D();
  pivotTop.add(sideTop, sideTopEdges);

  const pivotTopLid = new THREE.Object3D();
  pivotTopLid.add(sideLidTop, sideLidTopEdges);
  pivotTopLid.position.y = B;

  const pivotGroupTop = new THREE.Object3D();
  pivotGroupTop.add(pivotTop, pivotTopLid);
  pivotGroupTop.position.y = C;

  /* #endregion */
  /* #region  //* pivotGroupBottom */

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(sideBottom, sideBottomEdges);

  const pivotBottomLid = new THREE.Object3D();
  pivotBottomLid.add(sideLidBottom, sideLidBottomEdges);
  pivotBottomLid.position.y = -B;

  const pivotGroupBottom = new THREE.Object3D();
  pivotGroupBottom.add(pivotBottom, pivotBottomLid);

  /* #endregion */

  const pivotGroupABack = new THREE.Object3D();
  pivotGroupABack.position.x = -B;
  pivotGroupABack.add(pivotABack, pivotGroupTop, pivotGroupBottom);

  /* #endregion */

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.position.y = C;
  pivotLidBLeft.add(sideLidBLeft, sideLidBLeftEdges);

  const pivotLidBLeftD = new THREE.Object3D();
  pivotLidBLeftD.add(sideBLeftD, sideBLeftDEdges);

  const pivotGroubBLeftD = new THREE.Object3D();
  pivotGroubBLeftD.add(pivotLidBLeftD);

  const pivotBLeft = new THREE.Object3D();
  pivotBLeft.add(
    pivotLidBLeft,
    sideBLeft,
    sideBLeftEdges,
    pivotGroubBLeftD,
    pivotGroupABack
  );

  /* #endregion */
  /* #region  //* pivotBRight */

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.position.set(B, C, 0);
  pivotLidBRight.add(sideLidBRight, sideLidBRightEdges);

  const pivotLidBRightD = new THREE.Object3D();
  pivotLidBRightD.position.x = B;
  pivotLidBRightD.add(sideBRightD);

  const pivotGroupBRightD = new THREE.Object3D();
  pivotGroupBRightD.add(pivotLidBRightD);

  const pivotBRight = new THREE.Object3D();
  pivotBRight.position.x = A;
  pivotBRight.add(
    pivotLidBRight,
    sideBRight,
    sideBRightEdges,
    pivotGroupBRightD
  );

  /* #endregion */
  /* #region  //* pivot_All */

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotAFront, pivotBLeft, pivotBRight);

  /* #endregion */

  /* #endregion */

  animate
    ? foldBox(
        pivotALidTop,
        pivotGroupATop,
        pivotALidBottom,
        pivotGroupABottom,
        pivotGlueLid,
        pivotTopLid,
        pivotGroupTop,
        pivotBottomLid,
        pivotGroupBottom,
        pivotGroupABack,
        pivotLidBLeft,
        pivotLidBLeftD,
        pivotBLeft,
        pivotLidBRight,
        pivotLidBRightD,
        pivotBRight
      )
    : expandBox(
        pivotALidTop,
        pivotGroupATop,
        pivotALidBottom,
        pivotGroupABottom,
        pivotGlueLid,
        pivotTopLid,
        pivotGroupTop,
        pivotBottomLid,
        pivotGroupBottom,
        pivotGroupABack,
        pivotLidBLeft,
        pivotLidBLeftD,
        pivotBLeft,
        pivotLidBRight,
        pivotLidBRightD,
        pivotBRight
      );

  return pivotAll;
};
