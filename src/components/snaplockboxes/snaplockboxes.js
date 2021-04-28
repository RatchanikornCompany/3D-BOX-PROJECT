import * as THREE from 'three';

import { WebGL } from '../webgl';
import { material } from '../material';
import { updateSize } from '../updatesize';

import {
  getLidShape,
  getLRLidShape,
  getLidBottomShape,
  getLRLidBottomShape,
  getLRLidBottomShapeD,
  getLidCurveShape,
  getLidBottomCurveShape,
  getGlueLidShape,
  getPlaneASide,
  getPlaneBSide,
} from './module/models';
import { foldBox, expandBox } from './module/animate';

let A = 175; //  กว้าง
let B = 105; //  ลึก
let C = 75; //  สูง

let O = 1; //  ความโปร่งแสง

let G = 5; //  ความกว้างเฉพาะด้านของฝาเสียบกาว
let gSlope = 4; //  ควมเฉียงส่วนประกาว ค่า Defualt

let edges;

let side_A_front;
let side_A_back;
let side_B_left;
let side_B_right;
let side_Left_lid;
let side_Left_lid_d;
let side_Right_lid;
let side_Right_lid_d;
let side_Top_A_back;
let side_Top_A_lid_top_back;
let side_Glue_lid;
let side_Top_A_front;
let side_Top_A_lid_top_front;
let side_Bottom_A_front;
let side_lid_Bottom_A_front;
let side_lid_d_Bottom_A_front;
let side_Bottom_A_back;
let side_lid_Bottom_A_back;
let side_lid_d_Bottom_A_back;

let side_A_front_edges;
let side_A_back_edges;
let side_B_left_edges;
let side_B_right_edges;
let side_Left_lid_edges;
let side_Left_lid_d_edges;
let side_Right_lid_edges;
let side_Right_lid_d_edges;
let side_Top_A_back_edges;
let side_Top_A_lid_top_back_edges;
let side_Glue_lid_edges;
let side_Top_A_front_edges;
let side_Top_A_lid_top_front_edges;
let side_Bottom_A_front_edges;
let side_lid_Bottom_A_front_edges;
let side_lid_d_Bottom_A_front_edges;
let side_Bottom_A_back_edges;
let side_lid_Bottom_A_back_edges;
let side_lid_d_Bottom_A_back_edges;

let pivot_Bottom_front;
let pivot_Bottom_front_lid;
let pivot_Bottom_front_lid_d;
let pivot_Group_bottom_front;
let pivot_front;
let pivot_Right_lid;
let pivot_Right_lid_d;
let pivot_Group_right;
let pivot_Left_lid;
let pivot_Left_lid_d;
let pivot_Left;
let pivot_Glue_lid;
let pivot_Top_back;
let pivot_Top_back_lid;
let pivot_Group_top_back;
let pivot_Bottom_back;
let pivot_Bottom_back_lid;
let pivot_Bottom_back_lid_d;
let pivot_Group_bottom_back;
let pivot_Back;
let pivot_Group_left;
let pivot_Top_front;
let pivot_Top_front_lid;
let pivot_Top;
let pivotAll;

let pivot_Bottom_front_edges;
let pivot_Bottom_front_lid_edges;
let pivot_Bottom_front_lid_d_edges;
let pivot_Group_bottom_front_edges;
let pivot_front_edges;
let pivot_Right_lid_edges;
let pivot_Right_lid_d_edges;
let pivot_Group_right_edges;
let pivot_Left_lid_edges;
let pivot_Left_lid_d_edges;
let pivot_Left_edges;
let pivot_Glue_lid_edges;
let pivot_Top_back_edges;
let pivot_Top_back_lid_edges;
let pivot_Group_top_back_edges;
let pivot_Bottom_back_edges;
let pivot_Bottom_back_lid_edges;
let pivot_Bottom_back_lid_d_edges;
let pivot_Group_bottom_back_edges;
let pivot_Back_edges;
let pivot_Group_left_edges;
let pivot_Top_front_edges;
let pivot_Top_front_lid_edges;
let pivot_Top_edges;
let pivotAllEdges;

const init = (a, b, c, o) => {
  /* #region  //* ฉาก */

  /* #region  //* side_A_front */

  side_Bottom_A_front = new THREE.Mesh(getLidBottomShape(A, C), material(O));
  side_Bottom_A_front.rotation.x = Math.PI;

  side_lid_Bottom_A_front = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O)
  );
  side_lid_Bottom_A_front.rotation.x = Math.PI;

  side_lid_d_Bottom_A_front = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O)
  );
  side_lid_d_Bottom_A_front.rotation.x = Math.PI;

  side_A_front = new THREE.Mesh(getPlaneASide(A, C), material(O));

  /* #endregion */
  /* #region  //* side_B_right */

  side_Right_lid = new THREE.Mesh(getLidCurveShape(B, C), material(O));

  side_Right_lid_d = new THREE.Mesh(getLidBottomCurveShape(B, C), material(O));
  side_Right_lid_d.rotation.x = Math.PI;

  side_B_right = new THREE.Mesh(getPlaneBSide(B, C), material(O));

  /* #endregion */
  /* #region  //* side_B_left */

  side_Left_lid = new THREE.Mesh(getLidCurveShape(B, C), material(O));
  side_Left_lid.rotation.y = Math.PI;

  side_Left_lid_d = new THREE.Mesh(getLidBottomCurveShape(B, C), material(O));
  side_Left_lid_d.rotation.x = Math.PI;

  side_B_left = new THREE.Mesh(getPlaneBSide(B, C), material(O));
  side_B_left.position.x = -B;

  side_Glue_lid = new THREE.Mesh(getGlueLidShape(C, G, gSlope), material(O));
  side_Glue_lid.rotation.z = Math.PI / 2;

  side_Top_A_back = new THREE.Mesh(getLidShape(A, C), material(O));

  side_Top_A_lid_top_back = new THREE.Mesh(getLRLidShape(A, C), material(O));

  side_Bottom_A_back = new THREE.Mesh(getLidBottomShape(A, C), material(O));
  side_Bottom_A_back.rotation.x = Math.PI;

  side_lid_Bottom_A_back = new THREE.Mesh(
    getLRLidBottomShape(A, C),
    material(O)
  );
  side_lid_Bottom_A_back.rotation.x = Math.PI;

  side_lid_d_Bottom_A_back = new THREE.Mesh(
    getLRLidBottomShapeD(A, C),
    material(O)
  );
  side_lid_d_Bottom_A_back.rotation.x = Math.PI;

  side_A_back = new THREE.Mesh(getPlaneASide(A, C), material(O));
  side_A_back.position.x = -A;

  /* #endregion */
  /* #region  //* side_Top_A_front */

  side_Top_A_front = new THREE.Mesh(getLidShape(A, C), material(O));

  side_Top_A_lid_top_front = new THREE.Mesh(getLRLidShape(A, C), material(O));

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Front */

  pivot_Bottom_front = new THREE.Object3D();
  pivot_Bottom_front.add(side_Bottom_A_front);

  pivot_Bottom_front_lid = new THREE.Object3D();
  pivot_Bottom_front_lid.add(side_lid_Bottom_A_front);
  pivot_Bottom_front_lid.position.set(
    A * (133 / 175),
    Math.round(C * (-12 / 75)),
    0
  );

  pivot_Bottom_front_lid_d = new THREE.Object3D();
  pivot_Bottom_front_lid_d.add(side_lid_d_Bottom_A_front);
  pivot_Bottom_front_lid_d.position.set(
    Math.round(A * (5 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  pivot_Group_bottom_front = new THREE.Object3D();
  pivot_Group_bottom_front.add(
    pivot_Bottom_front,
    pivot_Bottom_front_lid,
    pivot_Bottom_front_lid_d
  );

  pivot_front = new THREE.Object3D();
  pivot_front.add(side_A_front, pivot_Group_bottom_front);

  /* #endregion */
  /* #region  //* pivot_Group_right */

  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_Right_lid);
  pivot_Right_lid.position.y = C;

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_Right_lid_d);

  pivot_Group_right = new THREE.Object3D();
  pivot_Group_right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_Group_right.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Group_left */

  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_Left_lid);
  pivot_Left_lid.position.y = C;

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_Left_lid_d);
  pivot_Left_lid_d.position.x = -B;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d);

  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.position.x = -A;
  pivot_Glue_lid.add(side_Glue_lid);

  pivot_Top_back = new THREE.Object3D();
  pivot_Top_back.add(side_Top_A_back);

  pivot_Top_back_lid = new THREE.Object3D();
  pivot_Top_back_lid.position.y = Math.round(C * (52 / 75));
  pivot_Top_back_lid.add(side_Top_A_lid_top_back);

  pivot_Group_top_back = new THREE.Object3D();
  pivot_Group_top_back.add(pivot_Top_back, pivot_Top_back_lid);
  pivot_Group_top_back.position.set(-A, C);

  pivot_Bottom_back = new THREE.Object3D();
  pivot_Bottom_back.add(side_Bottom_A_back);
  pivot_Bottom_back.position.x = -A;

  pivot_Bottom_back_lid = new THREE.Object3D();
  pivot_Bottom_back_lid.add(side_lid_Bottom_A_back);
  pivot_Bottom_back_lid.position.set(
    Math.round(A * (-42 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  pivot_Bottom_back_lid_d = new THREE.Object3D();
  pivot_Bottom_back_lid_d.add(side_lid_d_Bottom_A_back);
  pivot_Bottom_back_lid_d.position.set(
    Math.round(A * (-170 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  pivot_Group_bottom_back = new THREE.Object3D();
  pivot_Group_bottom_back.add(
    pivot_Bottom_back,
    pivot_Bottom_back_lid,
    pivot_Bottom_back_lid_d
  );

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(
    side_A_back,
    pivot_Glue_lid,
    pivot_Group_top_back,
    pivot_Group_bottom_back
  );
  pivot_Back.position.x = -B;

  pivot_Group_left = new THREE.Object3D();
  pivot_Group_left.add(pivot_Left, pivot_Back);

  /* #endregion */
  /* #region  //* pivot_Top */

  pivot_Top_front = new THREE.Object3D();
  pivot_Top_front.add(side_Top_A_front);

  pivot_Top_front_lid = new THREE.Object3D();
  pivot_Top_front_lid.add(side_Top_A_lid_top_front);
  pivot_Top_front_lid.position.y = Math.round(C * (52 / 75));

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(pivot_Top_front, pivot_Top_front_lid);
  pivot_Top.position.y = C;

  /* #endregion */
  /* #region  //* pivotAll */

  pivotAll = new THREE.Object3D();
  pivotAll.add(pivot_front, pivot_Group_right, pivot_Group_left, pivot_Top);

  /* #endregion */

  /* #endregion */
  /* #region  //* ฉาก - แบบมีเส้น */

  /* #region  //* side_A_front */

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  side_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  side_lid_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  side_lid_d_Bottom_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_front_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_right */

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  side_Right_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  side_Right_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Right_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */
  /* #region  //* side_B_left */

  edges = new THREE.EdgesGeometry(getLidCurveShape(B, C));
  side_Left_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getLidBottomCurveShape(B, C));
  side_Left_lid_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Left_lid_d_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_B_left_edges.position.x = -B;

  edges = new THREE.EdgesGeometry(getGlueLidShape(C, G, gSlope));
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  side_Top_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Glue_lid_edges.rotation.z = Math.PI / 2;

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  side_Top_A_lid_top_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLidBottomShape(A, C));
  side_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShape(A, C));
  side_lid_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getLRLidBottomShapeD(A, C));
  side_lid_d_Bottom_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_lid_d_Bottom_A_back_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneASide(A, C));
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  side_A_back_edges.position.x = -A;

  /* #endregion */
  /* #region  //* side_Top_A_front */

  edges = new THREE.EdgesGeometry(getLidShape(A, C));
  side_Top_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getLRLidShape(A, C));
  side_Top_A_lid_top_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Front */

  pivot_Bottom_front_edges = new THREE.Object3D();
  pivot_Bottom_front_edges.add(side_Bottom_A_front_edges);

  pivot_Bottom_front_lid_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_edges.add(side_lid_Bottom_A_front_edges);
  pivot_Bottom_front_lid_edges.position.set(
    Math.round(A * (133 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  pivot_Bottom_front_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_front_lid_d_edges.add(side_lid_d_Bottom_A_front_edges);
  pivot_Bottom_front_lid_d_edges.position.set(
    Math.round(A * (5 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  pivot_Group_bottom_front_edges = new THREE.Object3D();
  pivot_Group_bottom_front_edges.add(
    pivot_Bottom_front_edges,
    pivot_Bottom_front_lid_edges,
    pivot_Bottom_front_lid_d_edges
  );

  pivot_front_edges = new THREE.Object3D();
  pivot_front_edges.add(side_A_front_edges, pivot_Group_bottom_front_edges);

  /* #endregion */
  /* #region  //* pivot_Group_right */

  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_Right_lid_edges);
  pivot_Right_lid_edges.position.y = C;

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_Right_lid_d_edges);

  pivot_Group_right_edges = new THREE.Object3D();
  pivot_Group_right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Group_right_edges.position.x = A;

  /* #endregion */
  /* #region  //* pivot_Group_left */

  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_Left_lid_edges);
  pivot_Left_lid_edges.position.y = C;

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_Left_lid_d_edges);
  pivot_Left_lid_d_edges.position.x = -B;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges
  );

  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.position.x = -A;
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);

  pivot_Top_back_edges = new THREE.Object3D();
  pivot_Top_back_edges.add(side_Top_A_back_edges);

  pivot_Top_back_lid_edges = new THREE.Object3D();
  pivot_Top_back_lid_edges.position.y = Math.round(C * (52 / 75));
  pivot_Top_back_lid_edges.add(side_Top_A_lid_top_back_edges);

  pivot_Group_top_back_edges = new THREE.Object3D();
  pivot_Group_top_back_edges.add(
    pivot_Top_back_edges,
    pivot_Top_back_lid_edges
  );
  pivot_Group_top_back_edges.position.set(-A, C);

  pivot_Bottom_back_edges = new THREE.Object3D();
  pivot_Bottom_back_edges.add(side_Bottom_A_back_edges);
  pivot_Bottom_back_edges.position.x = -A;

  pivot_Bottom_back_lid_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_edges.add(side_lid_Bottom_A_back_edges);
  pivot_Bottom_back_lid_edges.position.set(
    Math.round(A * (-42 / 175)),
    Math.round(C * (-12 / 75)),
    0
  );

  pivot_Bottom_back_lid_d_edges = new THREE.Object3D();
  pivot_Bottom_back_lid_d_edges.add(side_lid_d_Bottom_A_back_edges);
  pivot_Bottom_back_lid_d_edges.position.set(
    Math.round(A * (-170 / 175)),
    Math.round(C * (-52 / 75)),
    0
  );

  pivot_Group_bottom_back_edges = new THREE.Object3D();
  pivot_Group_bottom_back_edges.add(
    pivot_Bottom_back_edges,
    pivot_Bottom_back_lid_edges,
    pivot_Bottom_back_lid_d_edges
  );

  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(
    side_A_back_edges,
    pivot_Glue_lid_edges,
    pivot_Group_top_back_edges,
    pivot_Group_bottom_back_edges
  );
  pivot_Back_edges.position.x = -B;

  pivot_Group_left_edges = new THREE.Object3D();
  pivot_Group_left_edges.add(pivot_Left_edges, pivot_Back_edges);

  /* #endregion */
  /* #region  //* pivot_Top */

  pivot_Top_front_edges = new THREE.Object3D();
  pivot_Top_front_edges.add(side_Top_A_front_edges);

  pivot_Top_front_lid_edges = new THREE.Object3D();
  pivot_Top_front_lid_edges.add(side_Top_A_lid_top_front_edges);
  pivot_Top_front_lid_edges.position.y = Math.round(C * (52 / 75));

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(pivot_Top_front_edges, pivot_Top_front_lid_edges);
  pivot_Top_edges.position.y = C;

  /* #endregion */
  /* #region  //* pivotAllEdges */

  pivotAllEdges = new THREE.Object3D();
  pivotAllEdges.add(
    pivot_front_edges,
    pivot_Group_right_edges,
    pivot_Group_left_edges,
    pivot_Top_edges,
    pivotAll
  );

  /* #endregion */

  /* #endregion */

  if ((a, b, c, o)) {
    A = a;
    B = b;
    C = c;
    O = o;

    updateSize(A, B, C, O);
  }

  WebGL(pivotAllEdges);
};

const rotations = (value) => {
  value
    ? foldBox(
        pivot_Back,
        pivot_Glue_lid,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Group_left,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Group_right,
        pivot_Group_top_back,
        pivot_Top_back_lid,
        pivot_Top,
        pivot_Top_front_lid,
        pivot_Group_bottom_front,
        pivot_Bottom_front_lid,
        pivot_Bottom_front_lid_d,
        pivot_Group_bottom_back,
        pivot_Bottom_back_lid,
        pivot_Bottom_back_lid_d,
        pivot_Back_edges,
        pivot_Glue_lid_edges,
        pivot_Left_lid_edges,
        pivot_Left_lid_d_edges,
        pivot_Group_left_edges,
        pivot_Right_lid_edges,
        pivot_Right_lid_d_edges,
        pivot_Group_right_edges,
        pivot_Group_top_back_edges,
        pivot_Top_back_lid_edges,
        pivot_Top_edges,
        pivot_Top_front_lid_edges,
        pivot_Group_bottom_front_edges,
        pivot_Bottom_front_lid_edges,
        pivot_Bottom_front_lid_d_edges,
        pivot_Group_bottom_back_edges,
        pivot_Bottom_back_lid_edges,
        pivot_Bottom_back_lid_d_edges
      )
    : expandBox(
        pivot_Back,
        pivot_Glue_lid,
        pivot_Left_lid,
        pivot_Left_lid_d,
        pivot_Group_left,
        pivot_Right_lid,
        pivot_Right_lid_d,
        pivot_Group_right,
        pivot_Group_top_back,
        pivot_Top_back_lid,
        pivot_Top,
        pivot_Top_front_lid,
        pivot_Group_bottom_front,
        pivot_Bottom_front_lid,
        pivot_Bottom_front_lid_d,
        pivot_Group_bottom_back,
        pivot_Bottom_back_lid,
        pivot_Bottom_back_lid_d,
        pivot_Back_edges,
        pivot_Glue_lid_edges,
        pivot_Left_lid_edges,
        pivot_Left_lid_d_edges,
        pivot_Group_left_edges,
        pivot_Right_lid_edges,
        pivot_Right_lid_d_edges,
        pivot_Group_right_edges,
        pivot_Group_top_back_edges,
        pivot_Top_back_lid_edges,
        pivot_Top_edges,
        pivot_Top_front_lid_edges,
        pivot_Group_bottom_front_edges,
        pivot_Bottom_front_lid_edges,
        pivot_Bottom_front_lid_d_edges,
        pivot_Group_bottom_back_edges,
        pivot_Bottom_back_lid_edges,
        pivot_Bottom_back_lid_d_edges
      );
};

export default {
  init,
  rotations,
};
