import * as THREE from 'three';
import {
  getPlaneATopShape,
  getPlaneASideShape,
  getPlaneABottomDShape,
  getPlaneABottomSideShape,
  getPlaneABottomLeftRightSideShape,
  getPlaneBTop,
  getPlaneBSide,
  getPlaneBHalfBottomShape,
  getPlaneBHalfDBottomShape,
  getPlaneBBottomShape,
  getGlueTop,
  getGlueLid,
  getGlueCenter,
  getGlueCenterLid,
  getGlueBottom,
} from './models';

/* #region  //* sideAEdges */

export const getSideATopEdges = (A, D, R) => {
  const edges = new THREE.EdgesGeometry(getPlaneATopShape(A, D, R));
  const sideATop = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideATop;
};

export const getSideAFrontEdges = (A, B, C, D, R) => {
  const edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B, C, D, R));
  const sideAFront = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideAFront;
};

export const getSideABottomDEdges = (A, B) => {
  const edges = new THREE.EdgesGeometry(getPlaneABottomDShape(A, B));
  const sideABottomD = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideABottomD;
};

export const getSideABottomEdges = (A, B) => {
  const edges = new THREE.EdgesGeometry(getPlaneABottomSideShape(A, B));
  const sideABottom = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideABottom;
};

export const getSideABottomLeftRightEdges = (B) => {
  const edges = new THREE.EdgesGeometry(getPlaneABottomLeftRightSideShape(B));
  const sideABottomLeftRight = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideABottomLeftRight;
};

/* #endregion */

/* #region  //* sideBEdges */

export const getSideBTopEdges = (B, D) => {
  const edges = new THREE.EdgesGeometry(getPlaneBTop(B, D));
  const sideBTop = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBTop;
};

export const getSideBRightLEdges = (B, C) => {
  const edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightL = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBRightL;
};

export const getSideBRightREdges = (B, C) => {
  const edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightR = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBRightR;
};

export const getSideBHalfBottomEdges = (B) => {
  const edges = new THREE.EdgesGeometry(getPlaneBHalfBottomShape(B));
  const sideBHalfBottom = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBHalfBottom;
};

export const getsideBHalfDBottomEdges = (B) => {
  const edges = new THREE.EdgesGeometry(getPlaneBHalfDBottomShape(B));
  const sideBHalfDBottom = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBHalfDBottom;
};

export const getsideBBottomEdges = (B) => {
  const edges = new THREE.EdgesGeometry(getPlaneBBottomShape(B));
  const sideBBottom = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideBBottom;
};

/* #endregion */

/* #region  //* sideGlueLidEdges */

export const getsideGlueTopEdges = (D, G) => {
  const edges = new THREE.EdgesGeometry(getGlueTop(D, G));
  const sideGlueTop = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideGlueTop;
};

export const getSideGlueLidEdges = (B, C, G) => {
  const edges = new THREE.EdgesGeometry(getGlueLid(B, C, G));
  const sideGlueLid = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideGlueLid;
};

export const getSideGlueCenterEdges = (B, G) => {
  const edges = new THREE.EdgesGeometry(getGlueCenter(B, G));
  const sideGlueCenter = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideGlueCenter;
};

export const getSideGlueCenterLidEdges = (G) => {
  const edges = new THREE.EdgesGeometry(getGlueCenterLid(G));
  const sideGlueCenterLid = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideGlueCenterLid;
};

export const getSideGlueBottomEdges = (B, G) => {
  const edges = new THREE.EdgesGeometry(getGlueBottom(B, G));
  const sideGlueBottom = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  return sideGlueBottom;
};

/* #endregion */

/* #region  //! pivotGlueEdges */

export const getPivotGlueTop = (B, C, D, G) => {
  const pivotGlueTop = new THREE.Object3D();
  pivotGlueTop.add(getsideGlueTopEdges(D, G));
  pivotGlueTop.position.y = (C - B / 2) | 0;

  return pivotGlueTop;
};

export const getPivotGlueBottom = (B, G) => {
  const pivotGlueBottom = new THREE.Object3D();
  pivotGlueBottom.add(getSideGlueBottomEdges(B, G));
  pivotGlueBottom.rotation.x = Math.PI;

  return pivotGlueBottom;
};

export const getPivotGlueCenterLid = (B, G) => {
  const pivotGlueCenterLid = new THREE.Object3D();
  pivotGlueCenterLid.add(
    getSideGlueCenterLidEdges(G),
    getPivotGlueBottom(B, G)
  );
  pivotGlueCenterLid.rotation.y = Math.PI;
  pivotGlueCenterLid.position.x = G;

  return pivotGlueCenterLid;
};

export const getPivotGlueCenter = (B, G) => {
  const pivotGlueCenter = new THREE.Object3D();
  pivotGlueCenter.add(
    getSideGlueCenterEdges(B, G),
    getPivotGlueCenterLid(B, G)
  );
  pivotGlueCenter.rotation.y = Math.PI;
  pivotGlueCenter.position.set(G, -(B / 2), 0);

  return pivotGlueCenter;
};

export const getPivotGlueLid = (A, B, C, D, G) => {
  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(
    getSideGlueLidEdges(B, C, G),
    getPivotGlueTop(B, C, D, G),
    getPivotGlueCenter(B, G)
  );
  pivotGlueLid.position.x = A;

  return pivotGlueLid;
};

/* #endregion */

/* #region  //! pivotABack */

export const getPivotABackTop = (A, B, C, D, R) => {
  const pivotABackTop = new THREE.Object3D();
  pivotABackTop.add(getSideATopEdges(A, D, R));
  pivotABackTop.position.y = (C - B / 2) | 0;

  return pivotABackTop;
};

export const getPivotABackBottomLeft = (B) => {
  const pivotABackBottomLeft = new THREE.Object3D();
  pivotABackBottomLeft.add(getSideABottomLeftRightEdges(B));

  return pivotABackBottomLeft;
};

export const getPivotABackBottomRight = (A, B) => {
  const pivotABackBottomRight = new THREE.Object3D();
  pivotABackBottomRight.add(getPivotABackBottomLeft(B));
  pivotABackBottomRight.rotation.y = Math.PI;
  pivotABackBottomRight.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  return pivotABackBottomRight;
};

export const getPivotABackBottom = (A, B) => {
  const pivotABackBottom = new THREE.Object3D();
  pivotABackBottom.add(
    getSideABottomEdges(A, B),
    getPivotABackBottomLeft(B),
    getPivotABackBottomRight(A, B)
  );
  pivotABackBottom.position.y = (B / 2) | 0;

  return pivotABackBottom;
};

export const getPivotABackBottomD = (A, B) => {
  const pivotABackBottomD = new THREE.Object3D();
  pivotABackBottomD.add(getSideABottomDEdges(A, B), getPivotABackBottom(A, B));
  pivotABackBottomD.rotation.x = Math.PI;

  return pivotABackBottomD;
};

export const getPivotABack = (A, B, C, D, G, R) => {
  const pivotABack = new THREE.Object3D();
  pivotABack.add(
    getSideAFrontEdges(A, B, C, D, R),
    getPivotABackTop(A, B, C, D, R),
    getPivotABackBottomD(A, B),
    getPivotGlueLid(A, B, C, D, G)
  );
  pivotABack.position.x = (B / 2) | 0;

  return pivotABack;
};

/* #endregion */

/* #region  //! pivotBLeft */

/* #region  //! pivotBLeftL */

export const getPivotBLeftLTop = (B, C, D) => {
  const pivotBLeftLTop = new THREE.Object3D();
  pivotBLeftLTop.add(getSideBTopEdges(B, D));
  pivotBLeftLTop.position.y = (C - B / 2) | 0;

  return pivotBLeftLTop;
};

export const getPivotBLeftHalfLeftBottom = (B) => {
  const pivotBLeftHalfLeftBottom = new THREE.Object3D();
  pivotBLeftHalfLeftBottom.add(getSideBHalfBottomEdges(B));
  pivotBLeftHalfLeftBottom.rotation.x = Math.PI;

  return pivotBLeftHalfLeftBottom;
};

export const getPivotBLeftLBottom = (B) => {
  const pivotBLeftLBottom = new THREE.Object3D();
  pivotBLeftLBottom.add(getsideBBottomEdges(B));
  pivotBLeftLBottom.position.y = (B / 2) | 0;

  return pivotBLeftLBottom;
};

export const getPivotBLeftHalfLeftDBottom = (B) => {
  const pivotBLeftHalfLeftDBottom = new THREE.Object3D();
  pivotBLeftHalfLeftDBottom.add(
    getsideBHalfDBottomEdges(B),
    getPivotBLeftLBottom(B)
  );
  pivotBLeftHalfLeftDBottom.rotation.x = Math.PI;

  return pivotBLeftHalfLeftDBottom;
};

export const getPivotBLeftL = (A, B, C, D, G, R) => {
  const pivotBLeftL = new THREE.Object3D();
  pivotBLeftL.add(
    getSideBRightREdges(B, C),
    getPivotBLeftLTop(B, C, D),
    getPivotBLeftHalfLeftBottom(B),
    getPivotBLeftHalfLeftDBottom(B),
    getPivotABack(A, B, C, D, G, R)
  );
  pivotBLeftL.position.x = (B / 2) | 0;

  return pivotBLeftL;
};

/* #endregion */
/* #region  //! pivotBLeftR */

export const getPivotBLeftRTop = (B, C, D) => {
  const pivotBLeftRTop = new THREE.Object3D();
  pivotBLeftRTop.add(getSideBTopEdges(B, D));
  pivotBLeftRTop.position.y = (C - B / 2) | 0;

  return pivotBLeftRTop;
};

export const getPivotBLeftHalfRightBottom = (B) => {
  const pivotBLeftHalfRightBottom = new THREE.Object3D();
  pivotBLeftHalfRightBottom.add(getSideBHalfBottomEdges(B));
  pivotBLeftHalfRightBottom.rotation.x = Math.PI;

  return pivotBLeftHalfRightBottom;
};

export const getPivotBLeftRBottom = (B) => {
  const pivotBLeftRBottom = new THREE.Object3D();
  pivotBLeftRBottom.add(getsideBBottomEdges(B));
  pivotBLeftRBottom.position.y = (B / 2) | 0;

  return pivotBLeftRBottom;
};

export const getPivotBLeftHalfRightDBottom = (B) => {
  const pivotBLeftHalfRightDBottom = new THREE.Object3D();
  pivotBLeftHalfRightDBottom.add(
    getsideBHalfDBottomEdges(B),
    getPivotBLeftRBottom(B)
  );
  pivotBLeftHalfRightDBottom.rotation.x = Math.PI;

  return pivotBLeftHalfRightDBottom;
};

export const getPivotBLeftR = (A, B, C, D, G, R) => {
  const pivotBLeftR = new THREE.Object3D();
  pivotBLeftR.add(
    getSideBRightREdges(B, C),
    getPivotBLeftRTop(B, C, D),
    getPivotBLeftHalfRightBottom(B),
    getPivotBLeftHalfRightDBottom(B),
    getPivotBLeftL(A, B, C, D, G, R)
  );
  pivotBLeftR.rotation.y = Math.PI;

  return pivotBLeftR;
};

/* #endregion */

/* #endregion */

/* #region  //! pivotBRight */

/* #region  //! pivotBR */

export const getPivotSideBRightTop = (B, C, D) => {
  const pivotSideBRightTop = new THREE.Object3D();
  pivotSideBRightTop.add(getSideBTopEdges(B, D));
  pivotSideBRightTop.position.y = (C - B / 2) | 0;

  return pivotSideBRightTop;
};

export const getPivotBRightBottom = (B) => {
  const pivotBRightBottom = new THREE.Object3D();
  pivotBRightBottom.add(getsideBBottomEdges(B));
  pivotBRightBottom.position.y = (B / 2) | 0;

  return pivotBRightBottom;
};

export const getPivotBHalfRightBottom = (B) => {
  const pivotBHalfRightBottom = new THREE.Object3D();
  pivotBHalfRightBottom.add(getSideBHalfBottomEdges(B));
  pivotBHalfRightBottom.rotation.x = Math.PI;

  return pivotBHalfRightBottom;
};

export const getPivotBHalfRightDBottom = (B) => {
  const pivotBHalfRightDBottom = new THREE.Object3D();
  pivotBHalfRightDBottom.add(
    getsideBHalfDBottomEdges(B),
    getPivotBRightBottom(B)
  );
  pivotBHalfRightDBottom.rotation.x = Math.PI;

  return pivotBHalfRightDBottom;
};

export const getPivotBRightR = (B, C, D) => {
  const pivotBRightR = new THREE.Object3D();
  pivotBRightR.add(
    getSideBRightREdges(B, C),
    getPivotSideBRightTop(B, C, D),
    getPivotBHalfRightBottom(B),
    getPivotBHalfRightDBottom(B)
  );
  pivotBRightR.position.x = (B / 2) | 0;

  return pivotBRightR;
};

/* #endregion */
/* #region  //! pivotBL */

export const getPivotSideBLeftTop = (B, C, D) => {
  const pivotSideBLeftTop = new THREE.Object3D();
  pivotSideBLeftTop.add(getSideBTopEdges(B, D));
  pivotSideBLeftTop.position.y = (C - B / 2) | 0;

  return pivotSideBLeftTop;
};

export const getPivotBHalfLeftBottom = (B) => {
  const pivotBHalfLeftBottom = new THREE.Object3D();
  pivotBHalfLeftBottom.add(getSideBHalfBottomEdges(B));
  pivotBHalfLeftBottom.rotation.x = Math.PI;

  return pivotBHalfLeftBottom;
};

export const getPivotBLeftBottom = (B) => {
  const pivotBLeftBottom = new THREE.Object3D();
  pivotBLeftBottom.add(getsideBBottomEdges(B));
  pivotBLeftBottom.position.y = (B / 2) | 0;

  return pivotBLeftBottom;
};

export const getPivotBHalfLeftDBottom = (B) => {
  const pivotBHalfLeftDBottom = new THREE.Object3D();
  pivotBHalfLeftDBottom.add(
    getsideBHalfDBottomEdges(B),
    getPivotBLeftBottom(B)
  );
  pivotBHalfLeftDBottom.rotation.x = Math.PI;

  return pivotBHalfLeftDBottom;
};

export const getPivotBRightL = (A, B, C, D) => {
  const pivotBRightL = new THREE.Object3D();
  pivotBRightL.add(
    getSideBRightLEdges(B, C),
    getPivotSideBLeftTop(B, C, D),
    getPivotBHalfLeftBottom(B),
    getPivotBHalfLeftDBottom(B),
    getPivotBRightR(B)
  );
  pivotBRightL.position.x = A;

  return pivotBRightL;
};

/* #endregion */

/* #endregion */

/* #region  //! pivotAFrontEdges */

export const getPivotATop = (A, B, C, D, R) => {
  const pivotATopEdges = new THREE.Object3D();
  pivotATopEdges.add(getSideATopEdges(A, D, R));
  pivotATopEdges.position.y = (C - B / 2) | 0;

  return pivotATopEdges;
};

export const getPivotABottomLeft = (B) => {
  const pivotABottomLeft = new THREE.Object3D();
  pivotABottomLeft.add(getSideABottomLeftRightEdges(B));

  return pivotABottomLeft;
};

export const getPivotABottomRight = (A, B) => {
  const pivotABottomRight = new THREE.Object3D();
  pivotABottomRight.add(getPivotABottomLeft(B));
  pivotABottomRight.rotation.y = Math.PI;
  pivotABottomRight.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  return pivotABottomRight;
};

export const getPivotABottom = (A, B) => {
  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(
    getSideABottomEdges(A, B),
    getPivotABottomLeft(B),
    getPivotABottomRight(A, B)
  );
  pivotABottom.position.y = (B / 2) | 0;

  return pivotABottom;
};

export const getPivotABottomD = (A, B) => {
  const pivotABottomD = new THREE.Object3D();
  pivotABottomD.add(getSideABottomDEdges(A, B), getPivotABottom(A, B));
  pivotABottomD.rotation.x = Math.PI;

  return pivotABottomD;
};

export const getPivotAFront = (A, B, C, D, G, R) => {
  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    getSideAFrontEdges(A, B, C, D, R),
    getPivotATop(A, B, C, D, R),
    getPivotABottomD(A, B),
    getPivotBRightL(A, B, C, D),
    getPivotBLeftR(A, B, C, D, G, R)
  );

  return pivotAFront;
};

export const getPivotGroupAll = (A, B, C, D, R) => {
  const pivotGroupAll = new THREE.Group();
  pivotGroupAll.add(getPivotAFront(A, B, C, D, R));

  return pivotGroupAll;
};

/* #endregion */
