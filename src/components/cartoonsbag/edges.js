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
import CARTOONBAG from './cartoons';

let edges;

export const getEdges = (A, B, C, D, G, R) => {
  /* #region  //* ฉาก */

  /* #region  //* sideAEdges */

  edges = new THREE.EdgesGeometry(getPlaneATopShape(A, D, R));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B, C, D, R));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABottomDShape(A, B));
  const sideABottomDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABottomSideShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABottomLeftRightSideShape(B));
  const sideABottomLeftRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #region  //* sideBEdges */

  edges = new THREE.EdgesGeometry(getPlaneBTop(B, D));
  const sideBTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightLEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightREdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBHalfBottomShape(B));
  const sideBHalfBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBHalfDBottomShape(B));
  const sideBHalfDBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBBottomShape(B));
  const sideBBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #region  //* sideGlueLidEdges */

  edges = new THREE.EdgesGeometry(getGlueTop(D, G));
  const sideGlueTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueLid(B, C, G));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueCenter(B, G));
  const sideGlueCenterEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueCenterLid(G));
  const sideGlueCenterLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueBottom(B, G));
  const sideGlueBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivotGlue */

  const pivotGlueTopEdges = new THREE.Object3D();
  pivotGlueTopEdges.add(sideGlueTopEdges);
  pivotGlueTopEdges.position.y = (C - B / 2) | 0;

  const pivotGlueBottomEdges = new THREE.Object3D();
  pivotGlueBottomEdges.add(sideGlueBottomEdges);
  pivotGlueBottomEdges.rotation.x = Math.PI;

  const pivotGlueCenterLidEdges = new THREE.Object3D();
  pivotGlueCenterLidEdges.add(sideGlueCenterLidEdges, pivotGlueBottomEdges);
  pivotGlueCenterLidEdges.rotation.y = Math.PI;
  pivotGlueCenterLidEdges.position.x = G;

  const pivotGlueCenterEdges = new THREE.Object3D();
  pivotGlueCenterEdges.add(sideGlueCenterEdges, pivotGlueCenterLidEdges);
  pivotGlueCenterEdges.position.y = -(B / 2) | 0;

  const pivotGlueLidEdges = new THREE.Object3D();
  pivotGlueLidEdges.add(
    sideGlueLidEdges,
    pivotGlueTopEdges,
    pivotGlueCenterEdges
  );
  pivotGlueLidEdges.position.x = A;

  /* #endregion */

  /* #region  //! pivotABack */

  const pivotABackTopEdges = new THREE.Object3D();
  pivotABackTopEdges.add(sideATopEdges.clone());
  pivotABackTopEdges.position.y = (C - B / 2) | 0;

  const pivotABackBottomLeftEdges = new THREE.Object3D();
  pivotABackBottomLeftEdges.add(sideABottomLeftRightEdges.clone());

  const pivotABackBottomRightEdges = new THREE.Object3D();
  pivotABackBottomRightEdges.add(pivotABackBottomLeftEdges.clone());
  pivotABackBottomRightEdges.rotation.y = Math.PI;
  pivotABackBottomRightEdges.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  const pivotABackBottomEdges = new THREE.Object3D();
  pivotABackBottomEdges.add(
    sideABottomEdges.clone(),
    pivotABackBottomLeftEdges,
    pivotABackBottomRightEdges
  );
  pivotABackBottomEdges.position.y = (B / 2) | 0;

  const pivotABackBottomDEdges = new THREE.Object3D();
  pivotABackBottomDEdges.add(sideABottomDEdges.clone(), pivotABackBottomEdges);
  pivotABackBottomDEdges.rotation.x = Math.PI;

  const pivotABackEdges = new THREE.Object3D();
  pivotABackEdges.add(
    sideAFrontEdges.clone(),
    pivotABackTopEdges,
    pivotABackBottomDEdges,
    pivotGlueLidEdges
  );
  pivotABackEdges.position.x = (B / 2) | 0;

  /* #endregion */

  /* #region  //! pivotBLeft */

  /* #region  //! pivotBLeftL */

  const pivotBLeftLTopEdges = new THREE.Object3D();
  pivotBLeftLTopEdges.add(sideBTopEdges.clone());
  pivotBLeftLTopEdges.position.y = (C - B / 2) | 0;

  const pivotBLeftHalfLeftBottomEdges = new THREE.Object3D();
  pivotBLeftHalfLeftBottomEdges.add(sideBHalfBottomEdges.clone());
  pivotBLeftHalfLeftBottomEdges.rotation.x = Math.PI;

  const pivotBLeftLBottomEdges = new THREE.Object3D();
  pivotBLeftLBottomEdges.add(sideBBottomEdges.clone());
  pivotBLeftLBottomEdges.position.y = (B / 2) | 0;

  const pivotBLeftHalfLeftDBottomEdges = new THREE.Object3D();
  pivotBLeftHalfLeftDBottomEdges.add(
    sideBHalfDBottomEdges.clone(),
    pivotBLeftLBottomEdges
  );
  pivotBLeftHalfLeftDBottomEdges.rotation.x = Math.PI;

  const pivotBLeftLEdges = new THREE.Object3D();
  pivotBLeftLEdges.add(
    sideBRightREdges.clone(),
    pivotBLeftLTopEdges,
    pivotBLeftHalfLeftBottomEdges,
    pivotBLeftHalfLeftDBottomEdges,
    pivotABackEdges
  );
  pivotBLeftLEdges.position.x = (B / 2) | 0;

  /* #endregion */
  /* #region  //! pivotBLeftR */

  const pivotBLeftRTopEdges = new THREE.Object3D();
  pivotBLeftRTopEdges.add(sideBTopEdges.clone());
  pivotBLeftRTopEdges.position.y = (C - B / 2) | 0;

  const pivotBLeftHalfRightBottomEdges = new THREE.Object3D();
  pivotBLeftHalfRightBottomEdges.add(sideBHalfBottomEdges.clone());
  pivotBLeftHalfRightBottomEdges.position.y = -(B / 2) | 0;

  const pivotBLeftRBottomEdges = new THREE.Object3D();
  pivotBLeftRBottomEdges.add(sideBBottomEdges.clone());
  pivotBLeftRBottomEdges.rotation.x = Math.PI;

  const pivotBLeftHalfRightDBottomEdges = new THREE.Object3D();
  pivotBLeftHalfRightDBottomEdges.add(
    sideBHalfDBottomEdges.clone(),
    pivotBLeftRBottomEdges
  );
  pivotBLeftHalfRightDBottomEdges.position.y = -(B / 2) | 0;

  const pivotBLeftREdges = new THREE.Object3D();
  pivotBLeftREdges.add(
    sideBRightREdges.clone(),
    pivotBLeftRTopEdges,
    pivotBLeftHalfRightBottomEdges,
    pivotBLeftHalfRightDBottomEdges,
    pivotBLeftLEdges
  );
  pivotBLeftREdges.rotation.y = Math.PI;

  /* #endregion */

  /* #endregion */

  /* #region  //! pivotBRight */

  /* #region  //! pivotBR */

  const pivotSideBRightTopEdges = new THREE.Object3D();
  pivotSideBRightTopEdges.add(sideBTopEdges.clone());
  pivotSideBRightTopEdges.position.y = (C - B / 2) | 0;

  const pivotBRightBottomEdges = new THREE.Object3D();
  pivotBRightBottomEdges.add(sideBBottomEdges.clone());
  pivotBRightBottomEdges.position.y = (B / 2) | 0;

  const pivotBHalfRightBottomEdges = new THREE.Object3D();
  pivotBHalfRightBottomEdges.add(sideBHalfBottomEdges.clone());
  pivotBHalfRightBottomEdges.rotation.x = Math.PI;

  const pivotBHalfRightDBottomEdges = new THREE.Object3D();
  pivotBHalfRightDBottomEdges.add(
    sideBHalfDBottomEdges.clone(),
    pivotBRightBottomEdges
  );
  pivotBHalfRightDBottomEdges.rotation.x = Math.PI;

  const pivotBRightREdges = new THREE.Object3D();
  pivotBRightREdges.add(
    sideBRightREdges,
    pivotSideBRightTopEdges,
    pivotBHalfRightBottomEdges,
    pivotBHalfRightDBottomEdges
  );
  pivotBRightREdges.position.x = (B / 2) | 0;

  /* #endregion */
  /* #region  //! pivotBL */

  const pivotSideBLeftTopEdges = new THREE.Object3D();
  pivotSideBLeftTopEdges.add(sideBTopEdges);
  pivotSideBLeftTopEdges.position.y = (C - B / 2) | 0;

  const pivotBHalfLeftBottomEdges = new THREE.Object3D();
  pivotBHalfLeftBottomEdges.add(sideBHalfBottomEdges);
  pivotBHalfLeftBottomEdges.position.y = -(B / 2) | 0;

  const pivotBLeftBottomEdges = new THREE.Object3D();
  pivotBLeftBottomEdges.add(sideBBottomEdges);
  pivotBLeftBottomEdges.rotation.x = Math.PI;

  const pivotBHalfLeftDBottomEdges = new THREE.Object3D();
  pivotBHalfLeftDBottomEdges.add(sideBHalfDBottomEdges, pivotBLeftBottomEdges);
  pivotBHalfLeftDBottomEdges.position.y = -(B / 2) | 0;

  const pivotBRightLEdges = new THREE.Object3D();
  pivotBRightLEdges.add(
    sideBRightLEdges,
    pivotSideBLeftTopEdges,
    pivotBHalfLeftBottomEdges,
    pivotBHalfLeftDBottomEdges,
    pivotBRightREdges
  );
  pivotBRightLEdges.position.x = A;

  /* #endregion */

  /* #endregion */

  /* #region  //! pivotAFront */

  const pivotATopEdges = new THREE.Object3D();
  pivotATopEdges.add(sideATopEdges);
  pivotATopEdges.position.y = (C - B / 2) | 0;

  const pivotABottomLeftEdges = new THREE.Object3D();
  pivotABottomLeftEdges.add(sideABottomLeftRightEdges);

  const pivotABottomRightEdges = new THREE.Object3D();
  pivotABottomRightEdges.add(pivotABottomLeftEdges.clone());
  pivotABottomRightEdges.rotation.y = Math.PI;
  pivotABottomRightEdges.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  const pivotABottomEdges = new THREE.Object3D();
  pivotABottomEdges.add(
    sideABottomEdges,
    pivotABottomLeftEdges,
    pivotABottomRightEdges
  );
  pivotABottomEdges.position.y = (B / 2) | 0;

  const pivotABottomDEdges = new THREE.Object3D();
  pivotABottomDEdges.add(sideABottomDEdges, pivotABottomEdges);
  pivotABottomDEdges.rotation.x = Math.PI;

  const pivotAFrontEdges = new THREE.Object3D();
  pivotAFrontEdges.add(
    sideAFrontEdges,
    pivotATopEdges,
    pivotABottomDEdges,
    pivotBRightLEdges,
    pivotBLeftREdges
  );

  /* #endregion */

  const pivotGroupAllEdges = new THREE.Group();
  pivotGroupAllEdges.add(pivotAFrontEdges);

  /* #endregion */

  CARTOONBAG.edges(
    pivotBRightLEdges,
    pivotATopEdges,
    pivotSideBLeftTopEdges,
    pivotSideBRightTopEdges,
    pivotBLeftBottomEdges,
    pivotBRightBottomEdges,
    pivotABottomLeftEdges,
    pivotABottomRightEdges,
    pivotABottomEdges,
    pivotBLeftREdges,
    pivotBLeftRTopEdges,
    pivotBLeftRBottomEdges,
    pivotBLeftLTopEdges,
    pivotBLeftLBottomEdges,
    pivotABackEdges,
    pivotABackTopEdges,
    pivotABackBottomEdges,
    pivotABackBottomLeftEdges,
    pivotABackBottomRightEdges,
    pivotGlueTopEdges,
    pivotGlueBottomEdges,
    pivotGlueLidEdges
  );

  return pivotGroupAllEdges;
};
