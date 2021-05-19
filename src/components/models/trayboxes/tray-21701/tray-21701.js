import * as THREE from 'three';

import { gsap } from 'gsap';

import { sceneAdd } from '../../../../function/webgl';
import { materialMap } from '../../../../function/material';
import { updateSize } from '../../../../function/updatesize';
import { assignUVs } from '../../../../function/assignUVs';

let A = 100; // กว้าง
let B = 100; // ลึก
let C = 50; // สูง

let Cx = C; // ตัวคุณ C

let O = 1; // ความโปร่งแสง

let tween;
let face;

let side_B_top;

let pivot_A_back;
let pivot_A_top;
let pivot_B_Top_left;
let pivot_B_Top_right;
let pivot_A_Top_lid;
let pivot_A_Top_left;
let pivot_A_Top_right;
let pivot_A_Top_Lid_l;
let pivot_A_Top_Lid_r;

let pivot_B_left;
let pivot_B_Left_lid;
let pivot_B_right;
let pivot_B_Right_lid;
let pivot_B_top;
let pivot_B_Bottom_left;
let pivot_B_Bottom_right;
let pivot_B_bottom;

const init = (a, b, c, o) => {
  /*  #region  //* Model */

  /*  #region  //* หน้า A */

  /*  #region  //* plane_A_top */

  /* #region  //*  Plane */

  //*  Plane
  const plane_A = new THREE.Geometry();
  plane_A.vertices.push(
    new THREE.Vector3(2, 0, 0), //*   0
    new THREE.Vector3(A - 2, 0, 0), //*   1
    new THREE.Vector3(A - 2, 0, -2.5), //*   2,
    new THREE.Vector3(2, 0, -2.5), //*   3,

    new THREE.Vector3(A - 2, B, -2.5), //*   4,
    new THREE.Vector3(2, B, -2.5), //*   5,
    new THREE.Vector3(2, B, 0), //*   6
    new THREE.Vector3(A - 2, B, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_A.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_A.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_A.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  plane_A.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  plane_A.computeFaceNormals();

  const plane_A_side = new THREE.Mesh(plane_A, materialMap(O));

  /* #endregion */
  /* #region  //*  Corrugate */

  //*  Corrugate
  const points_A = [];

  points_A.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 7.5) / 2; i += 2.5) {
    points_A.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A = new THREE.CatmullRomCurve3(points_A);

  const points_A_corrugated = curve_A.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_corrugated)
  );

  const extrudeSettings = {
    depth: B,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_A = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(corrugated_A, materialMap(O));
  plane_A_corrugated.position.set(A - 2.5, 0, -2.4);
  plane_A_corrugated.rotation.set(-Math.PI / 2, 0, Math.PI);

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_A_Top_Left_right */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_Top_Left_right_shape = new THREE.Shape();

  plane_A_Top_Left_right_shape.moveTo(0, 0);
  plane_A_Top_Left_right_shape.lineTo(0, B);
  plane_A_Top_Left_right_shape.lineTo(40, 90);
  plane_A_Top_Left_right_shape.bezierCurveTo(40, 90, 50, 89, 50, 79);
  plane_A_Top_Left_right_shape.lineTo(50, 19);
  plane_A_Top_Left_right_shape.bezierCurveTo(50, 19, 50, 9, 40, 8);
  plane_A_Top_Left_right_shape.lineTo(0, 0);

  const plane_A_Top_Left_right = new THREE.ShapeGeometry(
    plane_A_Top_Left_right_shape
  );
  assignUVs(plane_A_Top_Left_right);

  //*  Front Plane
  const plane_A_Top_Left_Right_front = new THREE.Mesh(
    plane_A_Top_Left_right,
    materialMap(O)
  );

  //*  Back Plane
  const plane_A_Top_Left_Right_back = new THREE.Mesh(
    plane_A_Top_Left_right,
    materialMap(O)
  );
  plane_A_Top_Left_Right_back.position.z = -2.5;

  /* #endregion */
  /* #region  //* Corrugate */

  //*  Corrugate A-Top (Right)
  const points_A_Top_right = [];
  let plane_A_Top_Right_cent = [];

  points_A_Top_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= A / 4 - 5.5; i += 2.5) {
    points_A_Top_right.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_A_Top_right.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_Top_right = new THREE.CatmullRomCurve3(points_A_Top_right);

    const points_A_Top_Right_corrugated = curve_A_Top_right.getPoints(1000);

    const corrugated_A_Top_Right_shape = new THREE.Shape();
    corrugated_A_Top_Right_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Top_Right_corrugated)
    );

    const extrudeSettings_A_Top_right = {
      depth: i > 10 ? C + 10 - i : C - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_A_Top_right = new THREE.ExtrudeGeometry(
      corrugated_A_Top_Right_shape,
      extrudeSettings_A_Top_right
    );

    const plane_A_Top_Right_Cent_shape = new THREE.Mesh(
      corrugated_A_Top_right,
      materialMap(O)
    );
    plane_A_Top_Right_Cent_shape.position.set(0, A / 2 - 1, -2.4);
    plane_A_Top_Right_Cent_shape.rotation.set(Math.PI, Math.PI, 0);

    plane_A_Top_Right_cent.push(plane_A_Top_Right_Cent_shape);
  }

  //*  Corrugate A-Top (Left)
  const points_A_Top_left = [];
  let plane_A_Top_Left_cent = [];

  points_A_Top_left.push(new THREE.Vector3(0, 0));

  for (let i = 0; i < 20; i += 2.5) {
    points_A_Top_left.push(new THREE.Vector3(i * 2 + 2.5, -C * (2.4 / Cx)));
    points_A_Top_left.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_Top_left = new THREE.CatmullRomCurve3(points_A_Top_left);

    const points_A_Top_Left_corrugated = curve_A_Top_left.getPoints(1000);

    const corrugated_A_Top_Left_shape = new THREE.Shape();
    corrugated_A_Top_Left_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Top_Left_corrugated)
    );

    const extrudeSettings_A_Top_left = {
      depth: i > 10 ? C + 10 - i : C - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_A_Top_left = new THREE.ExtrudeGeometry(
      corrugated_A_Top_Left_shape,
      extrudeSettings_A_Top_left
    );

    const plane_A_Top_Left_Cent_shape = new THREE.Mesh(
      corrugated_A_Top_left,
      materialMap(O)
    );
    plane_A_Top_Left_Cent_shape.position.set(0, A / 2 - 1, -2.4);
    plane_A_Top_Left_Cent_shape.rotation.set(0, Math.PI / 2, -Math.PI / 2);

    plane_A_Top_Left_cent.push(plane_A_Top_Left_Cent_shape);
  }

  const corrugated_A_Top_left_cent = new THREE.Group();
  corrugated_A_Top_left_cent.add(
    ...plane_A_Top_Right_cent,
    ...plane_A_Top_Left_cent
  );

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_A_Top_Lid_Left_Right */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_Top_Lid_Left_Right_shape = new THREE.Shape();

  plane_A_Top_Lid_Left_Right_shape.moveTo(0, 0);
  plane_A_Top_Lid_Left_Right_shape.lineTo(0, C - 1);
  plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(0, C - 1, C, C, C - 1, 9);
  plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(C - 1, 9, 49, 0, 44, 0);

  const plane_A_Top_Lid_Left_Right = new THREE.ShapeGeometry(
    plane_A_Top_Lid_Left_Right_shape
  );
  assignUVs(plane_A_Top_Lid_Left_Right);

  //*  Front Plane
  const plane_A_Top_Lid_Left_Right_Shape_front = new THREE.Mesh(
    plane_A_Top_Lid_Left_Right,
    materialMap(O)
  );

  //*  Back Plane
  const plane_A_Top_Lid_Left_Right_Shape_back = new THREE.Mesh(
    plane_A_Top_Lid_Left_Right,
    materialMap(O)
  );
  plane_A_Top_Lid_Left_Right_Shape_back.position.z = -2.5;

  /* #endregion */
  /* #region  //* Corrugate */

  //*  Corrugate
  let points_A_Top_Lid_Left_right = [];
  let plane_A_Top_Lid_Left_Right_cent = [];

  points_A_Top_Lid_Left_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 12.5) / 2; i += 2.5) {
    points_A_Top_Lid_Left_right.push(
      new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx))
    );
    points_A_Top_Lid_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_Top_Lid_Left_right = new THREE.CatmullRomCurve3(
      points_A_Top_Lid_Left_right
    );

    const points_A_Top_Lid_Left_Right_corrugated = curve_A_Top_Lid_Left_right.getPoints(
      1000
    );

    const corrugated_A_Top_Lid_Left_Right_shape = new THREE.Shape();
    corrugated_A_Top_Lid_Left_Right_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Top_Lid_Left_Right_corrugated)
    );

    const extrudeSettings_A_Top_Lid_Left_righ = {
      depth: C - 5 - i,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_A_Top_Lid_Left_right = new THREE.ExtrudeGeometry(
      corrugated_A_Top_Lid_Left_Right_shape,
      extrudeSettings_A_Top_Lid_Left_righ
    );

    const plane_A_Top_Lid_Left_Right_Cent_shape = new THREE.Mesh(
      corrugated_A_Top_Lid_Left_right,
      materialMap(O)
    );
    plane_A_Top_Lid_Left_Right_Cent_shape.position.z = -2.4;
    plane_A_Top_Lid_Left_Right_Cent_shape.rotation.set(
      0,
      Math.PI / 2,
      Math.PI / 2
    );

    plane_A_Top_Lid_Left_Right_cent.push(plane_A_Top_Lid_Left_Right_Cent_shape);
  }

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_A_back */

  /* #region  //* Plane */

  //*  Plane
  const plane_A_Back_shape = new THREE.Shape();

  plane_A_Back_shape.moveTo(0, 0);
  plane_A_Back_shape.lineTo(0, 8);
  plane_A_Back_shape.lineTo(3, 8);
  plane_A_Back_shape.lineTo(3, 32);
  plane_A_Back_shape.lineTo(0, 32);
  plane_A_Back_shape.lineTo(0, 68);
  plane_A_Back_shape.lineTo(3, 68);
  plane_A_Back_shape.lineTo(3, 92);
  plane_A_Back_shape.lineTo(0, 92);
  plane_A_Back_shape.lineTo(0, 100);
  plane_A_Back_shape.lineTo(100, 100);
  plane_A_Back_shape.lineTo(100, 92);
  plane_A_Back_shape.lineTo(97, 92);
  plane_A_Back_shape.lineTo(97, 68);
  plane_A_Back_shape.lineTo(100, 68);
  plane_A_Back_shape.lineTo(100, 32);
  plane_A_Back_shape.lineTo(97, 32);
  plane_A_Back_shape.lineTo(97, 8);
  plane_A_Back_shape.lineTo(100, 8);
  plane_A_Back_shape.lineTo(100, 0);

  const plane_A_back = new THREE.ShapeGeometry(plane_A_Back_shape);
  assignUVs(plane_A_back);

  //*  Front Plane
  const plane_A_Back_front = new THREE.Mesh(plane_A_back, materialMap(O));

  //*  Back Plane
  const plane_A_Back_back = new THREE.Mesh(plane_A_back, materialMap(O));
  plane_A_Back_back.position.z = -2.5;

  /* #endregion */

  /* #region  //* Corrugate */

  //*  Corrugate
  let points_A_back = [];
  let plane_A_Back_cent = [];

  points_A_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (B - 2.5) / 2; i += 2.5) {
    points_A_back.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

    const points_A_Back_corrugated = curve_A_back.getPoints(1000);

    const corrugated_A_Back_shape = new THREE.Shape();
    corrugated_A_Back_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Back_corrugated)
    );

    const extrudeSettings_A_back = {
      depth: A - 6,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_A_back = new THREE.ExtrudeGeometry(
      corrugated_A_Back_shape,
      extrudeSettings_A_back
    );

    const plane_A_Back_Cent_shape = new THREE.Mesh(
      corrugated_A_back,
      materialMap(O)
    );
    plane_A_Back_Cent_shape.position.set(3, 0, -2.4);
    plane_A_Back_Cent_shape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    plane_A_Back_cent.push(plane_A_Back_Cent_shape);
  }

  /* #endregion */

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* หน้า B */

  /*  #region  //* plane_B_Top_bottom */

  /* #region  //*  Plane */

  //*  Plane
  const plane_B_Top_bottom = new THREE.Geometry();
  plane_B_Top_bottom.vertices.push(
    new THREE.Vector3(1, 0, 0), //*   0
    new THREE.Vector3(A - 1, 0, 0), //*   1
    new THREE.Vector3(A - 1, 0, -2.5), //*   2
    new THREE.Vector3(1, 0, -2.5), //*   3

    new THREE.Vector3(A - 1, C, -2.5), //*   4
    new THREE.Vector3(1, C, -2.5), //*   5
    new THREE.Vector3(1, C, 0), //*   6
    new THREE.Vector3(A - 1, C, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_B_Top_bottom.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_B_Top_bottom.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_B_Top_bottom.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  plane_B_Top_bottom.faces.push(face);

  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  plane_B_Top_bottom.computeFaceNormals();

  const plane_B_Top_Bottom_side = new THREE.Mesh(
    plane_B_Top_bottom,
    materialMap(O)
  );

  /* #endregion */
  /* #region  //*  Corrugate */

  //*  Corrugate
  const points_B_Top_bottom = [];

  points_B_Top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 10) / 2; i += 2.5) {
    points_B_Top_bottom.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_B_Top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Top_bottom = new THREE.CatmullRomCurve3(points_B_Top_bottom);

  const points_B_Top_Bottom_corrugated = curve_B_Top_bottom.getPoints(1000);

  const corrugated_B_Top_Bottom_shape = new THREE.Shape();
  corrugated_B_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Top_Bottom_corrugated)
  );

  const extrudeSettings_B_Top_bottom = {
    depth: A - 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_B_Top_bottom = new THREE.ExtrudeGeometry(
    corrugated_B_Top_Bottom_shape,
    extrudeSettings_B_Top_bottom
  );

  const plane_B_Top_Bottom_cent = new THREE.Mesh(
    corrugated_B_Top_bottom,
    materialMap(O)
  );
  plane_B_Top_Bottom_cent.position.set(1, 5, -2.4);
  plane_B_Top_Bottom_cent.rotation.set(Math.PI / 2, Math.PI / 2, 0);

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_B_Top_bottom_lid */

  /* #region  //*  Plane */

  //*  Plane
  const plane_B_Top_Bottom_Lid_shape = new THREE.Shape();

  plane_B_Top_Bottom_Lid_shape.moveTo(0, 0);
  plane_B_Top_Bottom_Lid_shape.lineTo(0, C - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo((C - 1) / 2, C - 1);
  plane_B_Top_Bottom_Lid_shape.bezierCurveTo(
    (C - 1) / 2,
    C - 1,
    C - 1 + 2,
    C - 1 + 2,
    C - 1,
    (C - 1) / 2
  );
  plane_B_Top_Bottom_Lid_shape.lineTo(C - 1, (C - 1) / 2);
  plane_B_Top_Bottom_Lid_shape.lineTo(C - 1, C - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo(C - 1, 0);

  const plane_B_Top_Bottom_lid = new THREE.ShapeGeometry(
    plane_B_Top_Bottom_Lid_shape
  );
  assignUVs(plane_B_Top_Bottom_lid);

  /* #region  //*  plane_B_Top_lid */

  //*  Front Plane
  const plane_B_Top_Lid_front = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(O)
  );

  //* Back Plane
  const plane_B_Top_Lid_back = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(O)
  );
  plane_B_Top_Lid_back.position.z = -2.5;

  /* #endregion */
  /* #region  //*  plane_B_Bottom_lid */

  //*  Front Plane
  const plane_B_Bottom_Lid_front = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(O)
  );

  //*  Back Plane
  const plane_B_Bottom_Lid_back = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(O)
  );
  plane_B_Bottom_Lid_back.position.z = -2.5;

  /* #endregion */

  /* #endregion */
  /* #region  //*  Corrugate */

  let plane_B_Top_Lid_cent = [];
  let plane_B_Bottom_Lid_cent = [];

  //*  Corrugate
  const points_B_Top_Bottom_lid = [];

  points_B_Top_Bottom_lid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 5.5) / 2; i += 2.5) {
    points_B_Top_Bottom_lid.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_B_Top_Bottom_lid.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_B_Top_Bottom_lid = new THREE.CatmullRomCurve3(
      points_B_Top_Bottom_lid
    );

    const points_B_Top_Bottom_Lid_corrugated = curve_B_Top_Bottom_lid.getPoints(
      1000
    );

    const corrugated_B_Top_Bottom_Lid_shape = new THREE.Shape();
    corrugated_B_Top_Bottom_Lid_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_Top_Bottom_Lid_corrugated)
    );

    const extrudeSettings_B_Top_Bottom_lid = {
      depth: i > 10 ? C + 10 - i : C - 1,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_B_Top_Bottom_lid = new THREE.ExtrudeGeometry(
      corrugated_B_Top_Bottom_Lid_shape,
      extrudeSettings_B_Top_Bottom_lid
    );

    //*  Top Corrugate
    const plane_B_Top_Lid_shape = new THREE.Mesh(
      corrugated_B_Top_Bottom_lid,
      materialMap(O)
    );
    plane_B_Top_Lid_shape.position.z = -2.4;
    plane_B_Top_Lid_shape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    plane_B_Top_Lid_cent.push(plane_B_Top_Lid_shape);

    //*  Bottom Corrugate
    const plane_B_Bottom_Lid_shape = new THREE.Mesh(
      corrugated_B_Top_Bottom_lid,
      materialMap(O)
    );
    plane_B_Bottom_Lid_shape.position.z = -2.4;
    plane_B_Bottom_Lid_shape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    plane_B_Bottom_Lid_cent.push(plane_B_Bottom_Lid_shape);
  }

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_B_Left_right */

  /* #region  //*  Plane */

  //*  Plane
  const plane_B_Left_right = new THREE.Geometry();
  plane_B_Left_right.vertices.push(
    new THREE.Vector3(0, 0, 0), //*   0
    new THREE.Vector3(C, 0, 0), //*   1
    new THREE.Vector3(C, 0, -2.5), //*   2
    new THREE.Vector3(0, 0, -2.5), //*   3

    new THREE.Vector3(C, B, -2.5), //*   4
    new THREE.Vector3(0, B, -2.5), //*   5
    new THREE.Vector3(0, B, 0), //*   6
    new THREE.Vector3(C, B, 0) //*   7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  plane_B_Left_right.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  plane_B_Left_right.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  plane_B_Left_right.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  plane_B_Left_right.faces.push(face);

  //*  Right Plane
  face = new THREE.Face3(1, 2, 7);
  face.materialIndex = 2;
  plane_B_Left_right.faces.push(face);
  face = new THREE.Face3(7, 4, 2);
  face.materialIndex = 2;
  plane_B_Left_right.faces.push(face);

  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  plane_B_Left_right.computeFaceNormals();

  const plane_B_Left_Right_side = new THREE.Mesh(
    plane_B_Left_right,
    materialMap(O)
  );

  /* #endregion */
  /* #region  //*  Corrugate */

  //*  Corrugate
  const points_B_Left_right = [];

  points_B_Left_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 7.5) / 2; i += 2.5) {
    points_B_Left_right.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_B_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Left_right = new THREE.CatmullRomCurve3(points_B_Left_right);

  const points_B_Left_Right_corrugated = curve_B_Left_right.getPoints(1000);

  const corrugated_B_Left_Right_shape = new THREE.Shape();
  corrugated_B_Left_Right_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Left_Right_corrugated)
  );

  const extrudeSettings_B_Left_right = {
    depth: C - 2.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_B_Left_right = new THREE.ExtrudeGeometry(
    corrugated_B_Left_Right_shape,
    extrudeSettings_B_Left_right
  );

  const plane_B_Left_Right_cent = new THREE.Mesh(
    corrugated_B_Left_right,
    materialMap(O)
  );
  plane_B_Left_Right_cent.position.set(C, 2.5, -0.1);
  plane_B_Left_Right_cent.rotation.set(-Math.PI, -Math.PI, 0);

  /* #endregion */

  /*  #endregion */
  /*  #region  //* plane_B_Left_Right_lid */

  /* #region  //*  Plane */

  //*  Plane
  const plane_B_Left_Right_Lid_shape = new THREE.Shape();

  plane_B_Left_Right_Lid_shape.moveTo(0, 0);
  plane_B_Left_Right_Lid_shape.lineTo(0, B);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, B);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, B - 10);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1 + 1, B - 10);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1 + 1, B - 30);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, B - 30);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, B - 70);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1 + 1, B - 70);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1 + 1, B - 90);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, B - 90);
  plane_B_Left_Right_Lid_shape.lineTo(C - 1, 1);
  plane_B_Left_Right_Lid_shape.lineTo(0, 1);

  const plane_B_Left_Right_lid = new THREE.ShapeGeometry(
    plane_B_Left_Right_Lid_shape
  );
  assignUVs(plane_B_Left_Right_lid);

  //*  Front Plane
  const plane_B_Left_Right_Lid_Shape_front = new THREE.Mesh(
    plane_B_Left_Right_lid,
    materialMap(O)
  );

  //*  Back Plane
  const plane_B_Left_Right_Lid_Shape_back = new THREE.Mesh(
    plane_B_Left_Right_lid,
    materialMap(O)
  );
  plane_B_Left_Right_Lid_Shape_back.position.z = -2.5;

  /* #endregion */
  /* #region  //*  Corrugate */

  //*  Corrugate
  const points_B_Left_Right_lid = [];

  points_B_Left_Right_lid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 7.5) / 2; i += 2.5) {
    points_B_Left_Right_lid.push(
      new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx))
    );
    points_B_Left_Right_lid.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Left_Right_lid = new THREE.CatmullRomCurve3(
    points_B_Left_Right_lid
  );

  const points_B_Left_Right_Lid_corrugated = curve_B_Left_Right_lid.getPoints(
    1000
  );

  const corrugated_B_Left_Right_Lid_shape = new THREE.Shape();
  corrugated_B_Left_Right_Lid_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Left_Right_Lid_corrugated)
  );

  const extrudeSettings_B_Left_Right_lid = {
    depth: C - 2.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_B_Left_Right_lid = new THREE.ExtrudeGeometry(
    corrugated_B_Left_Right_Lid_shape,
    extrudeSettings_B_Left_Right_lid
  );

  const plane_B_Left_Right_Lid_cent = new THREE.Mesh(
    corrugated_B_Left_Right_lid,
    materialMap(O)
  );
  plane_B_Left_Right_Lid_cent.position.set(C - 2.5, 2.5, -0.1);
  plane_B_Left_Right_Lid_cent.rotation.set(-Math.PI / 2, -Math.PI / 2, 0);
  /* #endregion */

  /*  #endregion */

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* Mesh - แกนหมุน */

  /*  #region  //* Non_Edges */

  /*  #region  //* side_A */

  /*  #region  //* side_A_top */

  const side_A_top = new THREE.Group();
  side_A_top.add(plane_A_side, plane_A_corrugated);

  /*  #endregion */
  /*  #region  //* side_A_Top_left */

  const side_A_Top_left = new THREE.Group();
  side_A_Top_left.add(
    plane_A_Top_Left_Right_front,
    corrugated_A_Top_left_cent,
    plane_A_Top_Left_Right_back
  );

  /* #endregion */
  /*  #region  //* side_A_back */

  const side_A_back = new THREE.Group();
  side_A_back.add(plane_A_Back_front, ...plane_A_Back_cent, plane_A_Back_back);

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* side_B */

  /*  #region  //* side_B_left */

  const side_B_left = new THREE.Group();
  side_B_left.add(plane_B_Left_Right_side, plane_B_Left_Right_cent);
  side_B_left.rotation.y = Math.PI;

  /*  #endregion */
  /*  #region  //* side_B_right */

  const side_B_right = new THREE.Group();
  side_B_right.add(side_B_left.clone());
  side_B_right.rotation.y = -Math.PI;

  /*  #endregion */
  /*  #region  //* side_B_top */

  const side_B_Top_left = new THREE.Group();
  side_B_Top_left.add(
    plane_B_Top_Lid_front,
    ...plane_B_Top_Lid_cent,
    plane_B_Top_Lid_back
  );

  const side_B_Top_right = new THREE.Group();
  side_B_Top_right.add(side_B_Top_left.clone());

  side_B_top = new THREE.Group();
  side_B_top.add(plane_B_Top_Bottom_side, plane_B_Top_Bottom_cent);

  /*  #endregion */
  /*  #region  //* side_B_bottom */

  const side_B_Bottom_right = new THREE.Group();
  side_B_Bottom_right.add(
    plane_B_Bottom_Lid_front,
    ...plane_B_Bottom_Lid_cent,
    plane_B_Bottom_Lid_back
  );

  const side_B_bottom = new THREE.Group();
  side_B_bottom.add(side_B_top.clone());
  side_B_bottom.position.set(A, 0, -2.5);
  side_B_bottom.rotation.y = -Math.PI;

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* side_Lid */

  /* #region  //*  side_A_Top_lid */

  const side_A_Top_lid = new THREE.Group();
  side_A_Top_lid.add(side_B_top.clone());

  /*  #endregion */
  /* #region  //*  side_A_Top_Lid_l */

  const side_A_Top_Lid_l = new THREE.Group();
  side_A_Top_Lid_l.add(
    plane_A_Top_Lid_Left_Right_Shape_front,
    ...plane_A_Top_Lid_Left_Right_cent,
    plane_A_Top_Lid_Left_Right_Shape_back
  );

  /* #endregion */

  /* #region  //*  side_B_Left_lid */

  const side_B_Left_lid = new THREE.Group();
  side_B_Left_lid.add(
    plane_B_Left_Right_Lid_Shape_front,
    plane_B_Left_Right_Lid_cent,
    plane_B_Left_Right_Lid_Shape_back
  );

  /* #endregion */

  /*  #endregion */

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* Object3D - จุดหมุน */

  /*  #region  //* Non-Edges */

  /*  #region  //* pivot_B */

  /*  #region  //* pivot_B_left */

  pivot_B_Left_lid = new THREE.Object3D();
  pivot_B_Left_lid.add(side_B_Left_lid);
  pivot_B_Left_lid.rotation.y = Math.PI;
  pivot_B_Left_lid.position.x = -B / 2;

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left, pivot_B_Left_lid);
  pivot_B_left.position.z = -2.5;

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  pivot_B_Right_lid = new THREE.Object3D();
  pivot_B_Right_lid.add(side_B_Left_lid.clone());
  pivot_B_Right_lid.position.x = B / 2;

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right, pivot_B_Right_lid);
  pivot_B_right.position.x = A;

  /*  #endregion */
  /*  #region  //* pivot_B_top */

  pivot_A_Top_Lid_l = new THREE.Object3D();
  pivot_A_Top_Lid_l.add(side_A_Top_Lid_l);
  pivot_A_Top_Lid_l.rotation.y = Math.PI;
  pivot_A_Top_Lid_l.position.set(1, 0, -2.5);

  pivot_A_Top_Lid_r = new THREE.Object3D();
  pivot_A_Top_Lid_r.add(side_A_Top_Lid_l.clone());
  pivot_A_Top_Lid_r.position.x = A - 1;

  pivot_A_Top_lid = new THREE.Object3D();
  pivot_A_Top_lid.add(side_A_Top_lid, pivot_A_Top_Lid_l, pivot_A_Top_Lid_r);
  pivot_A_Top_lid.position.y = B;

  pivot_A_Top_left = new THREE.Object3D();
  pivot_A_Top_left.add(side_A_Top_left);
  pivot_A_Top_left.rotation.y = Math.PI;
  pivot_A_Top_left.position.set(2, 0, -2.5);

  pivot_A_Top_right = new THREE.Object3D();
  pivot_A_Top_right.add(side_A_Top_left.clone());
  pivot_A_Top_right.position.x = A - 2;

  pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(
    side_A_top,
    pivot_A_Top_lid,
    pivot_A_Top_left,
    pivot_A_Top_right
  );
  pivot_A_top.position.y = C;

  pivot_B_Top_left = new THREE.Object3D();
  pivot_B_Top_left.add(side_B_Top_left);
  pivot_B_Top_left.position.set(1, 0, -2.5);
  pivot_B_Top_left.rotation.y = Math.PI;

  pivot_B_Top_right = new THREE.Object3D();
  pivot_B_Top_right.add(side_B_Top_right);
  pivot_B_Top_right.position.x = A - 1;

  pivot_B_top = new THREE.Object3D();
  pivot_B_top.add(side_B_top, pivot_A_top, pivot_B_Top_left, pivot_B_Top_right);
  pivot_B_top.position.y = B;

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  pivot_B_Bottom_right = new THREE.Object3D();
  pivot_B_Bottom_right.add(side_B_Bottom_right);
  pivot_B_Bottom_right.position.x = A - 1;

  pivot_B_Bottom_left = new THREE.Object3D();
  pivot_B_Bottom_left.add(side_B_Bottom_right.clone());
  pivot_B_Bottom_left.rotation.y = Math.PI;
  pivot_B_Bottom_left.position.set(1, 0, -2.5);

  pivot_B_bottom = new THREE.Object3D();
  pivot_B_bottom.add(side_B_bottom, pivot_B_Bottom_right, pivot_B_Bottom_left);
  pivot_B_bottom.position.z = -2.5;
  pivot_B_bottom.rotation.x = Math.PI;

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* pivot_A */

  /*  #region  //* pivot_A_back */

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_B_left,
    pivot_B_right,
    pivot_B_top,
    pivot_B_bottom
  );

  /*  #endregion */

  /*  #endregion */
  /*  #region  //* pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);

  /*  #endregion */

  /*  #endregion */

  /*  #endregion */

  if ((a, b, c, o)) {
    A = a;
    B = b;
    C = c;
    O = o;

    updateSize(A, B, C, O);
  }

  sceneAdd(pivot_All);
};

const rotations = (value) => {
  value ? foldBox() : expandBox();
};

const foldBox = () => {
  /*  #region  //* จุดหมุน */

  /*  #region  //* pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 4 / 10,
    ease: 'power4.in',
    x: (pivot_A_back.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 4 / 10,
    ease: 'power4.in',
    y: (pivot_A_back.y = 2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_left.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_right.x = A - 2.6),
    z: (pivot_B_Top_right.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_left.x = 2.6),
    z: (pivot_B_Bottom_left.z = -3.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_right.x = A - 0.1),
    z: (pivot_B_Bottom_right.z = -3.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_B_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 8 / 10,
    ease: 'power4.in',
    y: (pivot_B_top.y = B - 2.5),
    z: (pivot_B_top.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_B_bottom.x = Math.PI / 2),
  });

  // /*  #endregion */

  /*  #region  //* pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_B_left.y = Math.PI / 2),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_B_right.x = A - 2.5),
    z: (pivot_B_right.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Left_lid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Left_lid.z = 2.61),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Right_lid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Right_lid.z = -2.39),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_left.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_right.x = A - 2.5 - 0.1),
    z: (pivot_A_Top_right.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_A_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 32 / 10,
    ease: 'power4.in',
    y: (pivot_A_top.y = C - 2.5),
    z: (pivot_A_top.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_Lid_l */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_l.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_l.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_Lid_r */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_r.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_r.x = A - 2.5 - 0.1),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 92 / 12,
    ease: 'power4.in',
    x: (pivot_A_Top_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 92 / 12,
    ease: 'power4.in',
    y: (pivot_A_Top_lid.y = B - 2.6),
    z: (pivot_A_Top_lid.z = -2.5),
  });

  /*  #endregion */

  /*  #endregion */
};

const expandBox = () => {
  /*  #region  //* จุดหมุน */

  /*  #region  //* pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 4 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 4,
    ease: 'power4.in',
    y: (pivot_A_Top_lid.y = B),
    z: (pivot_A_Top_lid.z = 0),
  });

  // /*  #endregion */

  /*  #region  //* pivot_A_Top_Lid_l */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_l.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_l.x = 1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_Lid_r */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_r.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_r.x = A - 1),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 8 / 10,
    ease: 'power4.in',
    y: (pivot_A_top.y = C),
    z: (pivot_A_top.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_left.x = 2),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_right.x = A - 2),
    z: (pivot_A_Top_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Left_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Left_lid.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Right_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Right_lid.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_B_right.x = A),
    z: (pivot_B_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_B_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 32 / 10,
    ease: 'power4.in',
    y: (pivot_B_top.y = B),
    z: (pivot_B_top.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_B_bottom.x = Math.PI),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_left.x = 1),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_right.x = A - 1),
    z: (pivot_B_Top_right.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_left.x = 1),
    z: (pivot_B_Bottom_left.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_right.x = A - 1),
    z: (pivot_B_Bottom_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 92 / 12,
    ease: 'power4.in',
    x: (pivot_A_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 92 / 12,
    ease: 'power4.in',
    z: (pivot_A_back.z = 0),
  });

  /*  #endregion */

  /*  #endregion */
};

export default {
  init,
  rotations,
};
