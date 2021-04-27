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
import { getEdges } from './edges';
import { lidBoxes } from './lidBoxes';
import { foldBox, expandBox } from './animate';

let A = 200;
let B = 100;
let C = 40;

let O = 1;

let G = 15;
let gSlope = 5;

let pivotBack;
let pivotLeft;
let pivotLidBLeft;
let pivotDustFlapLeftTop;
let pivotDustFlapLeftBottom;
let pivotInnerFlapLeft;
let pivotRight;
let pivotLidBRight;
let pivotDustFlapRightTop;
let pivotDustFlapRightBottom;
let pivotInnerFlapRight;
let pivotTop;
let pivotLidATop;
let pivotDustFlapTopLeft;
let pivotDustFlapTopRight;
let pivotInnerFlapTop;
let pivotBottom;
let pivotLidABottom;
let pivotDustFlapBottomLeft;
let pivotDustFlapBottomRight;
let pivotInnerFlapBottom;

let getPivotBLidBack;
let getPivotALidBack;
let getPivotBLidFront;
let getPivotGludLid;
let getPivotALidFront;

let getPivotBack;
let getPivotLeft;
let getPivotLidBLeft;
let getPivotDustFlapLeftTop;
let getPivotDustFlapLeftBottom;
let getPivotInnerFlapLeft;
let getPivotRight;
let getPivotLidBRight;
let getPivotDustFlapRightTop;
let getPivotDustFlapRightBottom;
let getPivotInnerFlapRight;
let getPivotTop;
let getPivotLidATop;
let getPivotDustFlapTopLeft;
let getPivotDustFlapTopRight;
let getPivotInnerFlapTop;
let getPivotBottom;
let getPivotLidABottom;
let getPivotDustFlapBottomLeft;
let getPivotDustFlapBottomRight;
let getPivotInnerFlapBottom;
let getPivotBLidBackEdges;
let getPivotALidBackEdges;
let getPivotBLidFrontEdges;
let getPivotGludLidEdges;
let getPivotALidFrontEdges;

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

  /* #region  //! pivotLeft */

  pivotInnerFlapLeft = new THREE.Object3D();
  pivotInnerFlapLeft.add(sideInnerFlapLeft);
  pivotInnerFlapLeft.position.x = -C;

  pivotLidBLeft = new THREE.Object3D();
  pivotLidBLeft.add(sideLidBLeft, pivotInnerFlapLeft);
  pivotLidBLeft.position.x = -C;

  pivotDustFlapLeftTop = new THREE.Object3D();
  pivotDustFlapLeftTop.add(sideDustFlapLeftTop);
  pivotDustFlapLeftTop.position.y = B;

  pivotDustFlapLeftBottom = new THREE.Object3D();
  pivotDustFlapLeftBottom.add(sideDustFlapLeftBottom);

  pivotLeft = new THREE.Object3D();
  pivotLeft.add(
    sideBLeft,
    pivotLidBLeft,
    pivotDustFlapLeftTop,
    pivotDustFlapLeftBottom
  );

  /* #endregion */
  /* #region  //! pivotRight */

  pivotInnerFlapRight = new THREE.Object3D();
  pivotInnerFlapRight.add(sideInnerFlapRight);
  pivotInnerFlapRight.position.x = C;

  pivotLidBRight = new THREE.Object3D();
  pivotLidBRight.add(sideLidBRight, pivotInnerFlapRight);
  pivotLidBRight.position.x = C;

  pivotDustFlapRightTop = new THREE.Object3D();
  pivotDustFlapRightTop.add(sideDustFlapRightTop);
  pivotDustFlapRightTop.position.y = B;

  pivotDustFlapRightBottom = new THREE.Object3D();
  pivotDustFlapRightBottom.add(sideDustFlapRightBottom);

  pivotRight = new THREE.Object3D();
  pivotRight.add(
    sideBRight,
    pivotLidBRight,
    pivotDustFlapRightTop,
    pivotDustFlapRightBottom
  );
  pivotRight.position.x = A;

  /* #endregion */
  /* #region  //! pivotTop */

  pivotInnerFlapTop = new THREE.Object3D();
  pivotInnerFlapTop.add(sideInnerFlapTop);
  pivotInnerFlapTop.position.y = C;

  pivotLidATop = new THREE.Object3D();
  pivotLidATop.add(sideLidCTop, pivotInnerFlapTop);
  pivotLidATop.position.y = C;

  pivotDustFlapTopLeft = new THREE.Object3D();
  pivotDustFlapTopLeft.add(sideDustFlapTopLeft);

  pivotDustFlapTopRight = new THREE.Object3D();
  pivotDustFlapTopRight.add(sideDustFlapTopRight);
  pivotDustFlapTopRight.position.x = A;

  pivotTop = new THREE.Object3D();
  pivotTop.add(
    sideATop,
    pivotLidATop,
    pivotDustFlapTopLeft,
    pivotDustFlapTopRight
  );
  pivotTop.position.y = B;

  /* #endregion */
  /* #region  //! pivotBottom */

  pivotInnerFlapBottom = new THREE.Object3D();
  pivotInnerFlapBottom.add(sideInnerFlapBottom);
  pivotInnerFlapBottom.position.y = -C;

  pivotLidABottom = new THREE.Object3D();
  pivotLidABottom.add(sideLidCBottom, pivotInnerFlapBottom);
  pivotLidABottom.position.y = -C;

  pivotDustFlapBottomLeft = new THREE.Object3D();
  pivotDustFlapBottomLeft.add(sideDustFlapBottomLeft);

  pivotDustFlapBottomRight = new THREE.Object3D();
  pivotDustFlapBottomRight.add(sideDustFlapBottomRight);
  pivotDustFlapBottomRight.position.x = A;

  pivotBottom = new THREE.Object3D();
  pivotBottom.add(
    sideABottom,
    pivotLidABottom,
    pivotDustFlapBottomLeft,
    pivotDustFlapBottomRight
  );

  /* #endregion */
  /* #region  //! pivotBack */

  pivotBack = new THREE.Object3D();
  pivotBack.add(sideABack, pivotLeft, pivotRight, pivotTop, pivotBottom);

  /* #endregion */

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivotBack, getEdges(A, B, C), lidBoxes(A, B, C, O, G, gSlope));

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

const edges = (
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
) => {
  getPivotBack = pivotBackEdges;
  getPivotLeft = pivotLeftEdges;
  getPivotLidBLeft = pivotLidBLeftEdges;
  getPivotDustFlapLeftTop = pivotDustFlapLeftTopEdges;
  getPivotDustFlapLeftBottom = pivotDustFlapLeftBottomEdges;
  getPivotInnerFlapLeft = pivotInnerFlapLeftEdges;
  getPivotRight = pivotRightEdges;
  getPivotLidBRight = pivotLidBRightEdges;
  getPivotDustFlapRightTop = pivotDustFlapRightTopEdges;
  getPivotDustFlapRightBottom = pivotDustFlapRightBottomEdges;
  getPivotInnerFlapRight = pivotInnerFlapRightEdges;
  getPivotTop = pivotTopEdges;
  getPivotLidATop = pivotLidATopEdges;
  getPivotDustFlapTopLeft = pivotDustFlapTopLeftEdges;
  getPivotDustFlapTopRight = pivotDustFlapTopRightEdges;
  getPivotInnerFlapTop = pivotInnerFlapTopEdges;
  getPivotBottom = pivotBottomEdges;
  getPivotLidABottom = pivotLidABottomEdges;
  getPivotDustFlapBottomLeft = pivotDustFlapBottomLeftEdges;
  getPivotDustFlapBottomRight = pivotDustFlapBottomRightEdges;
  getPivotInnerFlapBottom = pivotInnerFlapBottomEdges;
  getPivotBLidBackEdges = pivotBLidBackEdges;
  getPivotALidBackEdges = pivotALidBackEdges;
  getPivotBLidFrontEdges = pivotBLidFrontEdges;
  getPivotGludLidEdges = pivotGludLidEdges;
  getPivotALidFrontEdges = pivotALidFrontEdges;
};

const lid = (
  pivotBLidBack,
  pivotALidBack,
  pivotBLidFront,
  pivotGludLid,
  pivotALidFront
) => {
  getPivotBLidBack = pivotBLidBack;
  getPivotALidBack = pivotALidBack;
  getPivotBLidFront = pivotBLidFront;
  getPivotGludLid = pivotGludLid;
  getPivotALidFront = pivotALidFront;
};

const rotations = (value) => {
  value
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
        getPivotBack,
        getPivotLeft,
        getPivotLidBLeft,
        getPivotDustFlapLeftTop,
        getPivotDustFlapLeftBottom,
        getPivotInnerFlapLeft,
        getPivotRight,
        getPivotLidBRight,
        getPivotDustFlapRightTop,
        getPivotDustFlapRightBottom,
        getPivotInnerFlapRight,
        getPivotTop,
        getPivotLidATop,
        getPivotDustFlapTopLeft,
        getPivotDustFlapTopRight,
        getPivotInnerFlapTop,
        getPivotBottom,
        getPivotLidABottom,
        getPivotDustFlapBottomLeft,
        getPivotDustFlapBottomRight,
        getPivotInnerFlapBottom,
        getPivotBLidBackEdges,
        getPivotALidBackEdges,
        getPivotBLidFrontEdges,
        getPivotGludLidEdges,
        getPivotALidFrontEdges,
        getPivotBLidBack,
        getPivotALidBack,
        getPivotBLidFront,
        getPivotGludLid,
        getPivotALidFront
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
        getPivotBack,
        getPivotLeft,
        getPivotLidBLeft,
        getPivotDustFlapLeftTop,
        getPivotDustFlapLeftBottom,
        getPivotInnerFlapLeft,
        getPivotRight,
        getPivotLidBRight,
        getPivotDustFlapRightTop,
        getPivotDustFlapRightBottom,
        getPivotInnerFlapRight,
        getPivotTop,
        getPivotLidATop,
        getPivotDustFlapTopLeft,
        getPivotDustFlapTopRight,
        getPivotInnerFlapTop,
        getPivotBottom,
        getPivotLidABottom,
        getPivotDustFlapBottomLeft,
        getPivotDustFlapBottomRight,
        getPivotInnerFlapBottom,
        getPivotBLidBackEdges,
        getPivotALidBackEdges,
        getPivotBLidFrontEdges,
        getPivotGludLidEdges,
        getPivotALidFrontEdges,
        getPivotBLidBack,
        getPivotALidBack,
        getPivotBLidFront,
        getPivotGludLid,
        getPivotALidFront
      );
};

export default {
  init,
  edges,
  lid,
  rotations,
};
