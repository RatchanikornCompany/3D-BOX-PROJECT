import * as THREE from 'three';

import rotateObject from '../../../../../function/rotateObject';
import assignUVs from '../../../../../function/assignUVs';

import { materialMap } from '../../../../../function/material';

/* #region  //* บน A */

export const getPlaneASide = (valueA, valueB, valueO) => {
  const plane_A = new THREE.Geometry();
  plane_A.vertices.push(
    new THREE.Vector3(2, 0, 0), //*   0
    new THREE.Vector3(valueA - 2, 0, 0), //*   1
    new THREE.Vector3(valueA - 2, 0, -2.5), //*   2,
    new THREE.Vector3(2, 0, -2.5), //*   3,

    new THREE.Vector3(valueA - 2, valueB, -2.5), //*   4,
    new THREE.Vector3(2, valueB, -2.5), //*   5,
    new THREE.Vector3(2, valueB, 0), //*   6
    new THREE.Vector3(valueA - 2, valueB, 0) //*   7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
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

  const plane_A_side = new THREE.Mesh(plane_A, materialMap(valueO));

  return plane_A_side;
};

export const getPlaneACorrugated = (valueA, valueB, valueO) => {
  const points_a = [];

  points_a.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
    points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_a = new THREE.CatmullRomCurve3(points_a);

  const points_A_corrugated = curve_a.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_corrugated)
  );

  const extrudeSettings = {
    depth: valueB,
    bevelEnabled: true,
    bevelSegments: valueO,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_a = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(corrugated_a, materialMap(valueO));
  plane_A_corrugated.position.set(valueA - 2.5, 0, -2.4);
  rotateObject(plane_A_corrugated, -90, 0, 180);

  return plane_A_corrugated;
};

/* #endregion */
/* #region  //* บน ซ้าย-ขวา A */

export const getPlaneATopLeftRightShape = (valueB, valueO) => {
  const plane_A_Top_Left_right_shape = new THREE.Shape();

  plane_A_Top_Left_right_shape.moveTo(0, 0);
  plane_A_Top_Left_right_shape.lineTo(0, valueB);
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
    materialMap(valueO)
  );

  //*  Back Plane
  const plane_A_Top_Left_Right_back = new THREE.Mesh(
    plane_A_Top_Left_right,
    materialMap(valueO)
  );
  plane_A_Top_Left_Right_back.position.z = -2.5;

  const plane_A_Top_Left_Right = new THREE.Group();
  plane_A_Top_Left_Right.add(
    plane_A_Top_Left_Right_front,
    plane_A_Top_Left_Right_back
  );

  return plane_A_Top_Left_Right;
};

export const getPlaneATopLeftRightCorrugated = (valueA, valueC, valueO) => {
  const points_A_Top_right = [];
  let plane_A_Top_Right_cent = [];
  let Cx = valueC;

  points_A_Top_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= valueA / 4 - 5.5; i += 2.5) {
    points_A_Top_right.push(
      new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
    );
    points_A_Top_right.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_Top_right = new THREE.CatmullRomCurve3(points_A_Top_right);

    const points_A_Top_Right_corrugated = curve_A_Top_right.getPoints(1000);

    const corrugated_A_Top_Right_shape = new THREE.Shape();
    corrugated_A_Top_Right_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Top_Right_corrugated)
    );

    const extrudeSettings_A_Top_right = {
      depth: i > 10 ? valueC + 10 - i : valueC - 2.5,
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
      materialMap(valueO)
    );
    plane_A_Top_Right_Cent_shape.position.set(0, valueA / 2 - 1, -2.4);
    rotateObject(plane_A_Top_Right_Cent_shape, 90, 90, 0);

    plane_A_Top_Right_cent.push(plane_A_Top_Right_Cent_shape);
  }

  //*  Corrugate A-Top (Left)
  const points_A_Top_left = [];
  let plane_A_Top_Left_cent = [];

  points_A_Top_left.push(new THREE.Vector3(0, 0));

  for (let i = 0; i < 20; i += 2.5) {
    points_A_Top_left.push(
      new THREE.Vector3(i * 2 + 2.5, -valueC * (2.4 / Cx))
    );
    points_A_Top_left.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_Top_left = new THREE.CatmullRomCurve3(points_A_Top_left);

    const points_A_Top_Left_corrugated = curve_A_Top_left.getPoints(1000);

    const corrugated_A_Top_Left_shape = new THREE.Shape();
    corrugated_A_Top_Left_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Top_Left_corrugated)
    );

    const extrudeSettings_A_Top_left = {
      depth: i > 10 ? valueC + 10 - i : valueC - 2.5,
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
      materialMap(valueO)
    );
    plane_A_Top_Left_Cent_shape.position.set(0, valueA / 2 - 1, -2.4);
    rotateObject(plane_A_Top_Left_Cent_shape, 0, 90, -90);

    plane_A_Top_Left_cent.push(plane_A_Top_Left_Cent_shape);
  }

  const corrugated_A_Top_left_cent = new THREE.Group();
  corrugated_A_Top_left_cent.add(
    ...plane_A_Top_Right_cent,
    ...plane_A_Top_Left_cent
  );

  return corrugated_A_Top_left_cent;
};

/* #endregion */
/* #region  //* ลิ้นบน ซ้ายขวา A */

export const getPlaneATopLidLeftRightShape = (valueC, valueO) => {
  const plane_A_Top_Lid_Left_Right_shape = new THREE.Shape();

  plane_A_Top_Lid_Left_Right_shape.moveTo(0, 0);
  plane_A_Top_Lid_Left_Right_shape.lineTo(0, valueC - 1);
  plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(
    0,
    valueC - 1,
    valueC,
    valueC,
    valueC - 1,
    9
  );
  plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(valueC - 1, 9, 49, 0, 44, 0);

  const plane_A_Top_Lid_Left_Right = new THREE.ShapeGeometry(
    plane_A_Top_Lid_Left_Right_shape
  );
  assignUVs(plane_A_Top_Lid_Left_Right);

  //*  Front Plane
  const plane_A_Top_Lid_Left_Right_Shape_front = new THREE.Mesh(
    plane_A_Top_Lid_Left_Right,
    materialMap(valueO)
  );

  //*  Back Plane
  const plane_A_Top_Lid_Left_Right_Shape_back = new THREE.Mesh(
    plane_A_Top_Lid_Left_Right,
    materialMap(valueO)
  );
  plane_A_Top_Lid_Left_Right_Shape_back.position.z = -2.5;

  const plane_A_Top_Lid_Left_Right_Shape = new THREE.Group();
  plane_A_Top_Lid_Left_Right_Shape.add(
    plane_A_Top_Lid_Left_Right_Shape_front,
    plane_A_Top_Lid_Left_Right_Shape_back
  );

  return plane_A_Top_Lid_Left_Right_Shape;
};

export const getPlaneATopLidLeftRightCorrugated = (valueC, valueO) => {
  let Cx = valueC;
  let points_A_Top_Lid_Left_right = [];
  let plane_A_Top_Lid_Left_Right_cent = [];

  points_A_Top_Lid_Left_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (valueC - 12.5) / 2; i += 2.5) {
    points_A_Top_Lid_Left_right.push(
      new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
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
      depth: valueC - 5 - i,
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
      materialMap(valueO)
    );
    plane_A_Top_Lid_Left_Right_Cent_shape.position.z = -2.4;
    rotateObject(plane_A_Top_Lid_Left_Right_Cent_shape, 0, 90, 90);

    plane_A_Top_Lid_Left_Right_cent.push(plane_A_Top_Lid_Left_Right_Cent_shape);
  }

  return plane_A_Top_Lid_Left_Right_cent;
};

/* #endregion */
/* #region  //* บน A (หลัง) */

export const getPlaneABackShape = (valueO) => {
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
  const plane_A_Back_front = new THREE.Mesh(plane_A_back, materialMap(valueO));

  //*  Back Plane
  const plane_A_Back_back = new THREE.Mesh(plane_A_back, materialMap(valueO));
  plane_A_Back_back.position.z = -2.5;

  const plane_A_back_group = new THREE.Group();
  plane_A_back_group.add(plane_A_Back_front, plane_A_Back_back);

  return plane_A_back_group;
};

export const getPlaneABackCorrugated = (valueA, valueB, valueC, valueO) => {
  let Cx = valueC;
  let points_A_back = [];
  let plane_A_Back_cent = [];

  points_A_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (valueB - 2.5) / 2; i += 2.5) {
    points_A_back.push(new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx)));
    points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));

    const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

    const points_A_Back_corrugated = curve_A_back.getPoints(1000);

    const corrugated_A_Back_shape = new THREE.Shape();
    corrugated_A_Back_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_Back_corrugated)
    );

    const extrudeSettings_A_back = {
      depth: valueA - 6,
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
      materialMap(valueO)
    );
    plane_A_Back_Cent_shape.position.set(3, 0, -2.4);
    rotateObject(plane_A_Back_Cent_shape, 0, 90, 90);

    plane_A_Back_cent.push(plane_A_Back_Cent_shape);
  }

  return plane_A_Back_cent;
};

/* #endregion */

export const getPlaneBTopBottomShape = (valueA, valueC, valueO) => {
  const plane_B_Top_bottom = new THREE.Geometry();
  plane_B_Top_bottom.vertices.push(
    new THREE.Vector3(1, 0, 0), //*   0
    new THREE.Vector3(valueA - 1, 0, 0), //*   1
    new THREE.Vector3(valueA - 1, 0, -2.5), //*   2
    new THREE.Vector3(1, 0, -2.5), //*   3

    new THREE.Vector3(valueA - 1, valueC, -2.5), //*   4
    new THREE.Vector3(1, valueC, -2.5), //*   5
    new THREE.Vector3(1, valueC, 0), //*   6
    new THREE.Vector3(valueA - 1, valueC, 0) //*   7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
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
    materialMap(valueO)
  );

  return plane_B_Top_Bottom_side;
};

export const getPlaneBTopBottomCorrugated = (valueA, valueC, valueO) => {
  let Cx = valueC;
  const points_B_top_bottom = [];

  points_B_top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((valueC - 10) / 2); i += 2.5) {
    points_B_top_bottom.push(
      new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
    );
    points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

  const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

  const corrugated_B_Top_Bottom_shape = new THREE.Shape();
  corrugated_B_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_top_bottom_curve)
  );

  const extrudeSettings_B_Top_bottom = {
    depth: valueA - 2,
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
    materialMap(valueO)
  );
  plane_B_Top_Bottom_cent.position.set(1, 5, -2.4);
  rotateObject(plane_B_Top_Bottom_cent, 90, 90, 0);

  return plane_B_Top_Bottom_cent;
};

export const getPlaneBTopLidShape = (valueC, valueO) => {
  //*  Plane
  const plane_B_Top_Bottom_Lid_shape = new THREE.Shape();

  plane_B_Top_Bottom_Lid_shape.moveTo(0, 0);
  plane_B_Top_Bottom_Lid_shape.lineTo(0, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo((valueC - 1) / 2, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.bezierCurveTo(
    (valueC - 1) / 2,
    valueC - 1,
    valueC - 1 + 2,
    valueC - 1 + 2,
    valueC - 1,
    (valueC - 1) / 2
  );
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, (valueC - 1) / 2);
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, 0);

  const plane_B_Top_Bottom_lid = new THREE.ShapeGeometry(
    plane_B_Top_Bottom_Lid_shape
  );
  assignUVs(plane_B_Top_Bottom_lid);

  //*  Front Plane
  const plane_B_Top_Lid_front = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(valueO)
  );

  //* Back Plane
  const plane_B_Top_Lid_back = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(valueO)
  );
  plane_B_Top_Lid_back.position.z = -2.5;

  const plane_B_Top_Group = new THREE.Group();
  plane_B_Top_Group.add(plane_B_Top_Lid_front, plane_B_Top_Lid_back);

  return plane_B_Top_Group;
};

export const getPlaneBTopLidShapeCorrugated = (valueC, valueO) => {
  let plane_B_Top_Lid_cent = [];
  let plane_B_Bottom_Lid_cent = [];

  //*  Corrugate
  const points_B_Top_Bottom_lid = [];

  points_B_Top_Bottom_lid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (valueC - 5.5) / 2; i += 2.5) {
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
      depth: i > 10 ? valueC + 10 - i : valueC - 1,
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
      materialMap(valueO)
    );
    plane_B_Top_Lid_shape.position.z = -2.4;
    rotateObject(plane_B_Top_Lid_shape, 0, 90, 90);

    plane_B_Top_Lid_cent.push(plane_B_Top_Lid_shape);
  }

  return plane_B_Top_Lid_cent;
};

export const getPlaneBBottomLidShape = (valueC, valueO) => {
  const plane_B_Top_Bottom_Lid_shape = new THREE.Shape();

  plane_B_Top_Bottom_Lid_shape.moveTo(0, 0);
  plane_B_Top_Bottom_Lid_shape.lineTo(0, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo((valueC - 1) / 2, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.bezierCurveTo(
    (valueC - 1) / 2,
    valueC - 1,
    valueC - 1 + 2,
    valueC - 1 + 2,
    valueC - 1,
    (valueC - 1) / 2
  );
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, (valueC - 1) / 2);
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, valueC - 1);
  plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, 0);

  const plane_B_Top_Bottom_lid = new THREE.ShapeGeometry(
    plane_B_Top_Bottom_Lid_shape
  );
  assignUVs(plane_B_Top_Bottom_lid);

  //*  Front Plane
  const plane_B_Bottom_Lid_front = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(valueO)
  );

  //*  Back Plane
  const plane_B_Bottom_Lid_back = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    materialMap(valueO)
  );
  plane_B_Bottom_Lid_back.position.z = -2.5;

  const plane_B_Bottom_Group = new THREE.Group();
  plane_B_Bottom_Group.add(plane_B_Bottom_Lid_front, plane_B_Bottom_Lid_back);

  return plane_B_Bottom_Group;
};

export const getPlaneBBottomLidShapeCorrugated = (valueC, valueO) => {
  let plane_B_Top_Lid_cent = [];
  let plane_B_Bottom_Lid_cent = [];

  //*  Corrugate
  const points_B_Top_Bottom_lid = [];

  points_B_Top_Bottom_lid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (valueC - 5.5) / 2; i += 2.5) {
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
      depth: i > 10 ? valueC + 10 - i : valueC - 1,
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

    //*  Bottom Corrugate
    const plane_B_Bottom_Lid_shape = new THREE.Mesh(
      corrugated_B_Top_Bottom_lid,
      materialMap(valueO)
    );
    plane_B_Bottom_Lid_shape.position.z = -2.4;
    rotateObject(plane_B_Bottom_Lid_shape, 0, 90, 90);

    plane_B_Bottom_Lid_cent.push(plane_B_Bottom_Lid_shape);
  }

  return plane_B_Bottom_Lid_cent;
};

export const getPlaneBLeftRightShape = (valueC, valueB, valueO) => {
  const plane_B_Left_right = new THREE.Geometry();
  plane_B_Left_right.vertices.push(
    new THREE.Vector3(0, 0, 0), //*   0
    new THREE.Vector3(valueC, 0, 0), //*   1
    new THREE.Vector3(valueC, 0, -2.5), //*   2
    new THREE.Vector3(0, 0, -2.5), //*   3

    new THREE.Vector3(valueC, valueB, -2.5), //*   4
    new THREE.Vector3(0, valueB, -2.5), //*   5
    new THREE.Vector3(0, valueB, 0), //*   6
    new THREE.Vector3(valueC, valueB, 0) //*   7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
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
    materialMap(valueO)
  );

  return plane_B_Left_Right_side;
};

export const getPlaneBLeftRightCorrugated = (valueA, valueC, valueO) => {
  let Cx = valueC;
  const points_B_Left_right = [];

  points_B_Left_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
    points_B_Left_right.push(
      new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
    );
    points_B_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Left_right = new THREE.CatmullRomCurve3(points_B_Left_right);

  const points_B_Left_Right_corrugated = curve_B_Left_right.getPoints(1000);

  const corrugated_B_Left_Right_shape = new THREE.Shape();
  corrugated_B_Left_Right_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Left_Right_corrugated)
  );

  const extrudeSettings_B_Left_right = {
    depth: valueC - 2.5,
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
    materialMap(valueO)
  );
  plane_B_Left_Right_cent.position.set(valueC, 2.5, -0.1);
  rotateObject(plane_B_Left_Right_cent, -90, -90, 0);

  return plane_B_Left_Right_cent;
};
