import * as THREE from 'three';

import { WebGL } from '../webgl';
import { material } from '../material';

import {
  getInnerFlapTopBottomShape,
  getInnerFlapLeftRightShape,
  getDustFlapHalfTopShape,
  getDustFlapHalfBottomShape,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneCSideShape,
} from './models';

let A = 200;
let B = 100;
let C = 40;

let O = 1;

let edges;

const init = (a, b, c, o) => {
  /* #region  //* sideABack */

  const sideABack = new THREE.Mesh(getPlaneASideShape(A, B), material(O));

  /* #endregion */
  /* #region  //* sideBLeft */

  const sideInnerFlapLeft = new THREE.Mesh(
    getInnerFlapLeftRightShape(B, C),
    material(O)
  );
  sideInnerFlapLeft.rotation.z = Math.PI / 2;

  const sideLidBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideLidBLeft.position.x = -C;

  const sideDustFlapLeftTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapLeftTop.rotation.y = Math.PI;

  const sideDustFlapLeftBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapLeftBottom.rotation.set(Math.PI, Math.PI, 0);

  const sideBLeft = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));
  sideBLeft.position.x = -C;

  /* #endregion */
  /* #region  //* sideBRight */

  const sideInnerFlapRight = new THREE.Mesh(
    getInnerFlapLeftRightShape(B, C),
    material(O)
  );
  sideInnerFlapRight.rotation.set(Math.PI, 0, -Math.PI / 2);

  const sideLidBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  const sideDustFlapRightTop = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );

  const sideDustFlapRightBottom = new THREE.Mesh(
    getDustFlapHalfBottomShape(C),
    material(O)
  );
  sideDustFlapRightBottom.rotation.x = Math.PI;

  const sideBRight = new THREE.Mesh(getPlaneBSideShape(C, B), material(O));

  /* #endregion */
  /* #region  //* sideATop */

  const sideInnerFlapTop = new THREE.Mesh(
    getInnerFlapTopBottomShape(A, C),
    material(O)
  );

  const sideLidCTop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  const sideDustFlapTopLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapTopLeft.rotation.y = Math.PI;

  const sideDustFlapTopRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );

  const sideATop = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* sideABottom */

  const sideInnerFlapBottom = new THREE.Mesh(
    getInnerFlapTopBottomShape(A, C),
    material(O)
  );
  sideInnerFlapBottom.rotation.x = Math.PI;

  const sideLidCBottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideLidCBottom.position.y = -C;

  const sideDustFlapBottomLeft = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapBottomLeft.rotation.set(Math.PI, Math.PI, 0);

  const sideDustFlapBottomRight = new THREE.Mesh(
    getDustFlapHalfTopShape(C),
    material(O)
  );
  sideDustFlapBottomRight.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(getPlaneCSideShape(A, C), material(O));
  sideABottom.position.y = -C;

  /* #endregion */

  /* #region  //! pivotBack */

  const pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack);

  /* #endregion */
  /* #region  //! pivotLeft */

  const pivotInnerFlapLeft = new THREE.Object3D();
  pivotInnerFlapLeft.add(sideInnerFlapLeft);
  pivotInnerFlapLeft.position.x = -C;

  const pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, pivotInnerFlapLeft);
  pivotLidBLeft.position.x = -C;

  const pivotDustFlapLeftTop = new THREE.Object3D();
  pivotDustFlapLeftTop.add(sideDustFlapLeftTop);
  pivotDustFlapLeftTop.position.y = B;

  const pivotDustFlapLeftBottom = new THREE.Object3D();
  pivotDustFlapLeftBottom.add(sideDustFlapLeftBottom);

  const pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    pivotLidBLeft,
    pivotDustFlapLeftTop,
    pivotDustFlapLeftBottom
  );

  /* #endregion */
  /* #region  //! pivotRight */

  const pivotInnerFlapRight = new THREE.Object3D();
  pivotInnerFlapRight.add(sideInnerFlapRight);
  pivotInnerFlapRight.position.x = C;

  const pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, pivotInnerFlapRight);
  pivotLidBRight.position.x = C;

  const pivotDustFlapRightTop = new THREE.Object3D();
  pivotDustFlapRightTop.add(sideDustFlapRightTop);
  pivotDustFlapRightTop.position.y = B;

  const pivotDustFlapRightBottom = new THREE.Object3D();
  pivotDustFlapRightBottom.add(sideDustFlapRightBottom);

  const pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    pivotLidBRight,
    pivotDustFlapRightTop,
    pivotDustFlapRightBottom
  );
  pivotRight.position.x = A;

  /* #endregion */
  /* #region  //! pivotTop */

  const pivotInnerFlapTop = new THREE.Object3D();
  pivotInnerFlapTop.add(sideInnerFlapTop);
  pivotInnerFlapTop.position.y = C;

  const pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideLidCTop, pivotInnerFlapTop);
  pivotLidATop.position.y = C;

  const pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft);

  const pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight);
  pivotDustFlapTopRight.position.x = A;

  const pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.y = B;

  /* #endregion */
  /* #region  //! pivotBottom */

  const pivotInnerFlapBottom = new THREE.Object3D();
  pivotInnerFlapBottom.add(sideInnerFlapBottom);
  pivotInnerFlapBottom.position.y = -C;

  const pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(sideLidCBottom, pivotInnerFlapBottom);
  pivotLidABottom.position.y = -C;

  const pivotDustFlapBottomLeft = new THREE.Object3D();
  pivotDustFlapBottomLeft.add(sideDustFlapBottomLeft);

  const pivotDustFlapBottomRight = new THREE.Object3D();
  pivotDustFlapBottomRight.add(sideDustFlapBottomRight);
  pivotDustFlapBottomRight.position.x = A;

  const pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    pivotLidABottom,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  /* #endregion */

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
  /* #region  //* sideABottom Edges*/

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

  /* #region  //! pivotBackEdges */

  const pivotBackEdges = new THREE.Object3D();
  pivotBackEdges.add(sideABackEdges);

  /* #endregion */
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
  /* #region  //! pivotAllEdges */

  const pivotAllEdges = new THREE.Object3D();
  pivotAllEdges.add(
    pivotBackEdges,
    pivotLeftEdges,
    pivotRightEdges,
    pivotTopEdges,
    pivotBottomEdges
  );

  /* #endregion */

  const pivotAll = new THREE.Object3D();
  pivotAll.add(
    pivotBack,
    pivotLeft,
    pivotRight,
    pivotTop,
    pivotBottom,
    pivotAllEdges
  );

  if ((a, b, c, o)) {
    A = a;
    B = b;
    C = c;
    O = o;

    let initDiv = document.getElementById('webgl');
    let newDiv = document.createElement('div');
    newDiv.id = 'webgl';

    initDiv.remove();
    document.getElementById('init').appendChild(newDiv);
  }

  WebGL(pivotAll);
};

export default {
  init,
};
