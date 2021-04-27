import * as THREE from 'three';
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
} from './models';
import SLIDEBOXES from './shirt';

let edges;

export const getEdges = (A, B, C, G, gSlope) => {
  /* #region  //* sideABackEdges */

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* sideBLeftEdges */

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(B, C));
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
  sideDustFlapLeftTopEdges.rotation.y = Math.PI;

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

  /* #endregion */
  /* #region  //* sideBRightEdges */

  edges = new THREE.EdgesGeometry(getInnerFlapLeftRightShape(B, C));
  const sideInnerFlapRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapRightEdges.rotation.set(Math.PI, 0, -Math.PI / 2);

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
  sideDustFlapRightBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSideShape(C, B));
  const sideBRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* sideATopEdges */

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(A, C));
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
  sideDustFlapTopLeftEdges.rotation.y = Math.PI;

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

  /* #endregion */
  /* #region  //* sideABottomEdges*/

  edges = new THREE.EdgesGeometry(getInnerFlapTopBottomShape(A, C));
  const sideInnerFlapBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideInnerFlapBottomEdges.rotation.x = Math.PI;

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
  sideDustFlapBottomRightEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneCSideShape(A, C));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomEdges.position.y = -C;

  /* #endregion */

  edges = new THREE.EdgesGeometry(getPlaneALidBoxesShape(A, B));
  const sideALidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBLidBoxesShape(A, C));
  const sideBLidFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGludLidShape(A, G, gSlope));
  const sideGludLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #region  //! pivotLeftEdges */

  const pivotInnerFlapLeftEdges = new THREE.Object3D();
  pivotInnerFlapLeftEdges.add(sideInnerFlapLeftEdges);
  pivotInnerFlapLeftEdges.position.x = -C;

  const pivotLidBLeftEdges = new THREE.Object3D();
  pivotLidBLeftEdges.add(sideLidBLeftEdges, pivotInnerFlapLeftEdges);
  pivotLidBLeftEdges.position.x = -C;

  const pivotDustFlapLeftTopEdges = new THREE.Object3D();
  pivotDustFlapLeftTopEdges.add(sideDustFlapLeftTopEdges);
  pivotDustFlapLeftTopEdges.position.y = B;

  const pivotDustFlapLeftBottomEdges = new THREE.Object3D();
  pivotDustFlapLeftBottomEdges.add(sideDustFlapLeftBottomEdges);

  const pivotLeftEdges = new THREE.Object3D();
  pivotLeftEdges.add(
    sideBLeftEdges,
    pivotLidBLeftEdges,
    pivotDustFlapLeftTopEdges,
    pivotDustFlapLeftBottomEdges
  );

  /* #endregion */
  /* #region  //! pivotRightEdges */

  const pivotInnerFlapRightEdges = new THREE.Object3D();
  pivotInnerFlapRightEdges.add(sideInnerFlapRightEdges);
  pivotInnerFlapRightEdges.position.x = C;

  const pivotLidBRightEdges = new THREE.Object3D();
  pivotLidBRightEdges.add(sideLidBRightEdges, pivotInnerFlapRightEdges);
  pivotLidBRightEdges.position.x = C;

  const pivotDustFlapRightTopEdges = new THREE.Object3D();
  pivotDustFlapRightTopEdges.add(sideDustFlapRightTopEdges);
  pivotDustFlapRightTopEdges.position.y = B;

  const pivotDustFlapRightBottomEdges = new THREE.Object3D();
  pivotDustFlapRightBottomEdges.add(sideDustFlapRightBottomEdges);

  const pivotRightEdges = new THREE.Object3D();
  pivotRightEdges.add(
    sideBRightEdges,
    pivotLidBRightEdges,
    pivotDustFlapRightTopEdges,
    pivotDustFlapRightBottomEdges
  );
  pivotRightEdges.position.x = A;

  /* #endregion */
  /* #region  //! pivotTopEdges */

  const pivotInnerFlapTopEdges = new THREE.Object3D();
  pivotInnerFlapTopEdges.add(sideInnerFlapTopEdges);
  pivotInnerFlapTopEdges.position.y = C;

  const pivotLidATopEdges = new THREE.Object3D();
  pivotLidATopEdges.add(sideLidCTopEdges, pivotInnerFlapTopEdges);
  pivotLidATopEdges.position.y = C;

  const pivotDustFlapTopLeftEdges = new THREE.Object3D();
  pivotDustFlapTopLeftEdges.add(sideDustFlapTopLeftEdges);

  const pivotDustFlapTopRightEdges = new THREE.Object3D();
  pivotDustFlapTopRightEdges.add(sideDustFlapTopRightEdges);
  pivotDustFlapTopRightEdges.position.x = A;

  const pivotTopEdges = new THREE.Object3D();
  pivotTopEdges.add(
    sideATopEdges,
    pivotLidATopEdges,
    pivotDustFlapTopLeftEdges,
    pivotDustFlapTopRightEdges
  );
  pivotTopEdges.position.y = B;

  /* #endregion */
  /* #region  //! pivotBottomEdges */

  const pivotInnerFlapBottomEdges = new THREE.Object3D();
  pivotInnerFlapBottomEdges.add(sideInnerFlapBottomEdges);
  pivotInnerFlapBottomEdges.position.y = -C;

  const pivotLidABottomEdges = new THREE.Object3D();
  pivotLidABottomEdges.add(sideLidCBottomEdges, pivotInnerFlapBottomEdges);
  pivotLidABottomEdges.position.y = -C;

  const pivotDustFlapBottomLeftEdges = new THREE.Object3D();
  pivotDustFlapBottomLeftEdges.add(sideDustFlapBottomLeftEdges);

  const pivotDustFlapBottomRightEdges = new THREE.Object3D();
  pivotDustFlapBottomRightEdges.add(sideDustFlapBottomRightEdges);
  pivotDustFlapBottomRightEdges.position.x = A;

  const pivotBottomEdges = new THREE.Object3D();
  pivotBottomEdges.add(
    sideABottomEdges,
    pivotLidABottomEdges,
    pivotDustFlapBottomLeftEdges,
    pivotDustFlapBottomRightEdges
  );

  /* #endregion */
  /* #region  //! pivotBackEdges */

  const pivotBackEdges = new THREE.Object3D();
  pivotBackEdges.add(
    sideABackEdges,
    pivotLeftEdges,
    pivotRightEdges,
    pivotTopEdges,
    pivotBottomEdges
  );

  /* #endregion */

  const pivotBLidBackEdges = new THREE.Object3D();
  pivotBLidBackEdges.add(sideBLidFrontEdges.clone());
  pivotBLidBackEdges.position.y = B;

  const pivotALidBackEdges = new THREE.Object3D();
  pivotALidBackEdges.add(sideALidFrontEdges.clone(), pivotBLidBackEdges);
  pivotALidBackEdges.position.y = C;

  const pivotBLidFrontEdges = new THREE.Object3D();
  pivotBLidFrontEdges.add(sideBLidFrontEdges, pivotALidBackEdges);
  pivotBLidFrontEdges.rotation.x = Math.PI;

  const pivotGludLidEdges = new THREE.Object3D();
  pivotGludLidEdges.add(sideGludLidEdges);
  pivotGludLidEdges.position.y = B;

  const pivotALidFrontEdges = new THREE.Object3D();
  pivotALidFrontEdges.add(
    sideALidFrontEdges,
    pivotGludLidEdges,
    pivotBLidFrontEdges
  );
  pivotALidFrontEdges.position.x = A * 2;

  /* #region  //! pivotAllEdges */

  const pivotAllEdges = new THREE.Object3D();
  pivotAllEdges.add(pivotBackEdges, pivotALidFrontEdges);

  /* #endregion */

  SLIDEBOXES.edges(
    pivotBackEdges,
    pivotLeftEdges,
    pivotLidBLeftEdges,
    pivotDustFlapLeftTopEdges,
    pivotDustFlapLeftBottomEdges,
    pivotInnerFlapLeftEdges,
    pivotRightEdges,
    pivotLidBRightEdges,
    pivotDustFlapRightTopEdges,
    pivotDustFlapRightBottomEdges,
    pivotInnerFlapRightEdges,
    pivotTopEdges,
    pivotLidATopEdges,
    pivotDustFlapTopLeftEdges,
    pivotDustFlapTopRightEdges,
    pivotInnerFlapTopEdges,
    pivotBottomEdges,
    pivotLidABottomEdges,
    pivotDustFlapBottomLeftEdges,
    pivotDustFlapBottomRightEdges,
    pivotInnerFlapBottomEdges,
    pivotBLidBackEdges,
    pivotALidBackEdges,
    pivotBLidFrontEdges,
    pivotGludLidEdges,
    pivotALidFrontEdges
  );

  return pivotAllEdges;
};
