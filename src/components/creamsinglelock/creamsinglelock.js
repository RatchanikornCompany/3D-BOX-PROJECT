import * as THREE from 'three';

import { WebGL } from '../webgl';
import { material } from '../material';
import { updateSize } from '../updatesize';

import {
  getLid,
  getGlueLid,
  getLRLid,
  getLRBottom,
  getLRLock,
  getLRLidLock,
  getLRBottomLock,
  getPlaneASideShape,
  getPlaneBSideShape,
  getPlaneTopBottomShape,
} from './module/models';
import { getEdges } from './module/edges';
import { foldBox, expandBox } from './module/animate';

let A = 70; //  ความกว้าง
let B = 30; //  ความลึก
let C = 105; //  ความสูง

let O = 1; //  ความโปร่งแสง

let G = 15; //  ส่วนประกาว
let gSlope = 5; //  ควมเฉียงส่วนประกาว

let P = 15; //  ลิ้นเสียบ ค่า Defualt
let plugSlope = 5; //  ความเฉียงฝาเสียบ

let LockHeight = 15; //  ความสูงฐานล็อค
let lockSlope = 5;

let R = 20; //  ความยาวของเส้นรอบวง

let pivot_Right;
let pivot_Right_lid;
let pivot_Right_lid_d;
let pivot_Left;
let pivot_Left_lid;
let pivot_Left_lid_d;
let pivot_Front;
let pivot_Front_lid_d;
let pivot_Front_lid;
let pivot_Glue_lid;
let pivot_Top;
let pivot_Top_lid;
let pivot_Bottom;
let pivot_Bottom_left;
let pivot_Bottom_right;
let pivot_Bottom_lock;
let pivot_Lock_Bottom_lid;

let getPivotRight;
let getPivotRightLid;
let getPivotRightLidD;
let getPivotLeft;
let getPivotLeftLid;
let getPivotLeftLidD;
let getPivotFront;
let getPivotFrontLidD;
let getPivotFrontLid;
let getPivotGlueLid;
let getPivotTop;
let getPivotTopLid;
let getPivotBottom;
let getPivotBottomLeft;
let getPivotBottomRight;
let getPivotBottomLock;
let getPivotLockBottomLid;

const init = (a, b, c, o, r) => {
  /* #region  //* วัตถุ */

  /* #region  //* side_A_back */

  const side_A_back = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  /* #endregion */
  /* #region  //* side_A_top */

  const side_Top = new THREE.Mesh(getPlaneTopBottomShape(A, B), material(O));

  const side_Top_lid = new THREE.Mesh(getLid(A, P, plugSlope), material(O));

  /* #endregion */
  /* #region  //* side_A_bottom */

  const side_Bottom = new THREE.Mesh(getLRBottom(A, B), material(O));
  side_Bottom.rotation.x = Math.PI;

  const side_Lock_lid = new THREE.Mesh(getLRLock(A, B, R), material(O));
  side_Lock_lid.rotation.x = Math.PI;

  const side_lr_Left_lock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material(O)
  );
  side_lr_Left_lock.rotation.set(Math.PI, Math.PI, 0);

  const side_lr_Right_lock = new THREE.Mesh(
    getLRLidLock(B, LockHeight, lockSlope),
    material(O)
  );
  side_lr_Right_lock.rotation.x = Math.PI;

  const side_Bottom_lock = new THREE.Mesh(
    getLRBottomLock(A, LockHeight, lockSlope),
    material(O)
  );
  side_Bottom_lock.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_B_left */

  const side_B_left = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  const side_lr_Lid_left = new THREE.Mesh(getLRLid(A, B), material(O));

  const side_lr_Lid_left_d = new THREE.Mesh(getLRLid(A, B), material(O));
  side_lr_Lid_left_d.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_left_d.position.x = B;

  /* #endregion */
  /* #region  //* side_B_right */

  const side_B_right = new THREE.Mesh(getPlaneBSideShape(B, C), material(O));

  const side_lr_Lid_right = new THREE.Mesh(getLRLid(A, B), material(O));
  side_lr_Lid_right.rotation.y = Math.PI;

  const side_lr_Lid_right_d = new THREE.Mesh(getLRLid(A, B), material(O));
  side_lr_Lid_right_d.rotation.x = Math.PI;

  /* #endregion */
  /* #region  //* side_A_front */

  const side_A_front = new THREE.Mesh(getPlaneASideShape(A, C), material(O));

  const side_Glue_lid = new THREE.Mesh(getGlueLid(C, G, gSlope), material(O));

  const side_Lid_front_d = new THREE.Mesh(
    getPlaneTopBottomShape(A, B),
    material(O)
  );
  side_Lid_front_d.rotation.x = Math.PI;

  const side_Lid = new THREE.Mesh(getLid(A, P, plugSlope), material(O));

  /* #endregion */

  /* #endregion */
  /* #region  //! จุดหมุน */

  /* #region  //! pivot_Top */

  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid);
  pivot_Top_lid.position.y = B;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, pivot_Top_lid);
  pivot_Top.position.y = C;

  /* #endregion */
  /* #region  //! pivot_Back */

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);

  const pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top, pivot_Glue_lid);

  /* #endregion */
  /* #region  //! pivot_Left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left);
  pivot_Left_lid.position.y = C;

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);
  pivot_Left.position.x = A;

  /* #endregion */
  /* #region  //! pivot_Front */

  pivot_Front_lid = new THREE.Object3D();
  pivot_Front_lid.add(side_Lid);
  pivot_Front_lid.rotation.set(0, Math.PI, Math.PI);
  pivot_Front_lid.position.y = -B;

  pivot_Front_lid_d = new THREE.Object3D();
  pivot_Front_lid_d.add(side_Lid_front_d, pivot_Front_lid);

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Front_lid_d, pivot_Left);
  pivot_Front.position.x = B;

  /* #endregion */
  /* #region  //! pivot_Right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right);
  pivot_Right_lid.position.set(B, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(
    side_B_right,
    pivot_Front,
    pivot_Right_lid,
    pivot_Right_lid_d
  );
  pivot_Right.position.x = A;

  /* #endregion */
  /* #region  //! pivot_Bottom */

  pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock);
  pivot_Bottom_left.position.x = 1;

  pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock);
  pivot_Bottom_right.position.x = A - 1;

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock);
  pivot_Bottom_lock.position.y = -B + 2;

  pivot_Lock_Bottom_lid = new THREE.Object3D();
  pivot_Lock_Bottom_lid.add(
    side_Lock_lid,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_Lock_Bottom_lid.position.y = -(B / 2) | 0;

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, pivot_Lock_Bottom_lid);

  /* #endregion */

  const pivotGroupEdges = new THREE.Group();
  pivotGroupEdges.add(
    getEdges(A, B, C, G, gSlope, P, plugSlope, LockHeight, lockSlope, R)
  );

  const pivotAll = new THREE.Object3D();
  pivotAll.add(pivot_Back, pivot_Right, pivot_Bottom, pivotGroupEdges);

  /* #endregion */
  if ((a, b, c, o, r)) {
    A = a;
    B = b;
    C = c;
    O = o;
    R = r;

    updateSize(A, B, C, O, R);
  }

  WebGL(pivotAll);
};

const edges = (
  pivot_Right,
  pivot_Right_lid,
  pivot_Right_lid_d,
  pivot_Left,
  pivot_Left_lid,
  pivot_Left_lid_d,
  pivot_Front,
  pivot_Front_lid_d,
  pivot_Front_lid,
  pivot_Glue_lid,
  pivot_Top,
  pivot_Top_lid,
  pivot_Bottom,
  pivot_Bottom_left,
  pivot_Bottom_right,
  pivot_Bottom_lock,
  pivot_Lock_Bottom_lid
) => {
  getPivotRight = pivot_Right;
  getPivotRightLid = pivot_Right_lid;
  getPivotRightLidD = pivot_Right_lid_d;
  getPivotLeft = pivot_Left;
  getPivotLeftLid = pivot_Left_lid;
  getPivotLeftLidD = pivot_Left_lid_d;
  getPivotFront = pivot_Front;
  getPivotFrontLidD = pivot_Front_lid_d;
  getPivotFrontLid = pivot_Front_lid;
  getPivotGlueLid = pivot_Glue_lid;
  getPivotTop = pivot_Top;
  getPivotTopLid = pivot_Top_lid;
  getPivotBottom = pivot_Bottom;
  getPivotBottomLeft = pivot_Bottom_left;
  getPivotBottomRight = pivot_Bottom_right;
  getPivotBottomLock = pivot_Bottom_lock;
  getPivotLockBottomLid = pivot_Lock_Bottom_lid;
};

const rotations = (value) => {
  value
    ? foldBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid,
        getPivotRight,
        getPivotRightLid,
        getPivotRightLidD,
        getPivotLeft,
        getPivotLeftLid,
        getPivotLeftLidD,
        getPivotFront,
        getPivotFrontLidD,
        getPivotFrontLid,
        getPivotGlueLid,
        getPivotTop,
        getPivotTopLid,
        getPivotBottom,
        getPivotBottomLeft,
        getPivotBottomRight,
        getPivotBottomLock,
        getPivotLockBottomLid
      )
    : expandBox(
        pivot_Right,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Left,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Front,
        pivot_Front_lid_d,
        pivot_Front_lid,
        pivot_Glue_lid,
        pivot_Top,
        pivot_Top_lid,
        pivot_Bottom,
        pivot_Bottom_left,
        pivot_Bottom_right,
        pivot_Bottom_lock,
        pivot_Lock_Bottom_lid,
        getPivotRight,
        getPivotRightLid,
        getPivotRightLidD,
        getPivotLeft,
        getPivotLeftLid,
        getPivotLeftLidD,
        getPivotFront,
        getPivotFrontLidD,
        getPivotFrontLid,
        getPivotGlueLid,
        getPivotTop,
        getPivotTopLid,
        getPivotBottom,
        getPivotBottomLeft,
        getPivotBottomRight,
        getPivotBottomLock,
        getPivotLockBottomLid
      );
};

export default {
  init,
  edges,
  rotations,
};
