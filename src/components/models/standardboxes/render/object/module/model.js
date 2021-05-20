import * as THREE from 'three';

import rotateObject from '../../../../../function/rotateObject';
import assignUVs from '../../../../../function/assignUVs';

import { materialMap } from '../../../../../function/material';

/* #region  //* หน้า A */

export const getPlaneASideShape = (A, C, O) => {
  const plane_A_side_shape = new THREE.Geometry();
  plane_A_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(A, 0, 0), // 1
    new THREE.Vector3(A, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(A, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(A, C, 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_side_shape.computeFaceNormals();

  const plane_A_side = new THREE.Mesh(plane_A_side_shape, materialMap(O));
  plane_A_side.name = 'plane_A_side';

  return plane_A_side;
};

export const getPlaneASideCorrugated = (A, C, O) => {
  const points_a = [];

  points_a.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
    points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_a = new THREE.CatmullRomCurve3(points_a);

  const points_A_curve = curve_a.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(new THREE.Path().setFromPoints(points_A_curve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugate_a = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(corrugate_a, materialMap(O));
  plane_A_corrugated.name = 'plane_A_corrugated';
  plane_A_corrugated.position.z = -0.1;
  rotateObject(plane_A_corrugated, -90);

  return plane_A_corrugated;
};

/* #endregion */
/* #region  //* หน้า A (หลัง) */

export const getPlaneABack = (A, C, O) => {
  const plane_A_back_shape = new THREE.Geometry();
  plane_A_back_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), C, 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_back_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_back_shape.computeFaceNormals();

  const plane_A_back = new THREE.Mesh(plane_A_back_shape, materialMap(O));
  plane_A_back.name = 'plane_A_back';

  return plane_A_back;
};

export const getPlaneABackCorrugated = (A, C, O) => {
  const points_A_back = [];

  points_A_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    points_A_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

  const points_A_back_curve = curve_A_back.getPoints(1000);

  const corrugated_A_back_shape = new THREE.Shape();
  corrugated_A_back_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_back_curve)
  );

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugate_A_back = new THREE.ExtrudeGeometry(
    corrugated_A_back_shape,
    extrudeSettings
  );

  const plane_A_back_corrugated = new THREE.Mesh(
    corrugate_A_back,
    materialMap(O)
  );
  plane_A_back_corrugated.name = 'plane_A_back_corrugated';
  plane_A_back_corrugated.position.z = -0.1;
  rotateObject(plane_A_back_corrugated, -90);
  return plane_A_back_corrugated;
};

/* #endregion */
/* #region  //* บน-ล่าง A */

export const getPlaneATopBottomShape = (A, B, O) => {
  const plane_A_top_bottom_shape = new THREE.Geometry();
  plane_A_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_top_bottom_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_top_bottom_shape.computeFaceNormals();

  const plane_A_top_bottom = new THREE.Mesh(
    plane_A_top_bottom_shape,
    materialMap(O)
  );
  plane_A_top_bottom.name = 'plane_A_top_bottom';

  return plane_A_top_bottom;
};

export const getPlaneATopBottomCorrugated = (A, B, O) => {
  const points_A_top_bottom = [];

  points_A_top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    points_A_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_top_bottom = new THREE.CatmullRomCurve3(points_A_top_bottom);

  const points_A_top_bottom_curve = curve_A_top_bottom.getPoints(1000);

  const corrugated_A_top_bottom_shape = new THREE.Shape();
  corrugated_A_top_bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_top_bottom_curve)
  );

  const extrudeSettings_A_Top_bottom = {
    depth: (B - 130) / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_A_top_bottom = new THREE.ExtrudeGeometry(
    corrugated_A_top_bottom_shape,
    extrudeSettings_A_Top_bottom
  );

  const plane_A_top_bottom_corrugated = new THREE.Mesh(
    corrugated_A_top_bottom,
    materialMap(O)
  );
  plane_A_top_bottom_corrugated.name = 'plane_A_top_bottom_corrugated';
  plane_A_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_A_top_bottom_corrugated, -90);

  return plane_A_top_bottom_corrugated;
};

/* #endregion */
/* #region  //* บน-ล่าง A (หลัง) */

export const getPlaneATopBottomBackShape = (A, B, O) => {
  const plane_A_top_bottom_back_shape = new THREE.Geometry();
  plane_A_top_bottom_back_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_top_bottom_back_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_top_bottom_back_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_top_bottom_back_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_top_bottom_back_shape.computeFaceNormals();

  const plane_A_top_bottom_back = new THREE.Mesh(
    plane_A_top_bottom_back_shape,
    materialMap(O)
  );
  plane_A_top_bottom_back.name = 'plane_A_top_bottom_back';
  plane_A_top_bottom_back.position.x = 2.5;

  return plane_A_top_bottom_back;
};

export const getPlaneATopBottomBackCorrugated = (A, B, O) => {
  const points_A_top_bottom_back = [];

  points_A_top_bottom_back.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 12.5) / 2); i += 2.5) {
    points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A_top_bottom_back = new THREE.CatmullRomCurve3(
    points_A_top_bottom_back
  );

  const points_A_top_bottom_back_curve =
    curve_A_top_bottom_back.getPoints(1000);

  const corrugated_A_top_bottom_back_shape = new THREE.Shape();
  corrugated_A_top_bottom_back_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_top_bottom_back_curve)
  );

  const extrudeSettings_A_Top_bottom = {
    depth: (B - 130) / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_A_top_bottom_back = new THREE.ExtrudeGeometry(
    corrugated_A_top_bottom_back_shape,
    extrudeSettings_A_Top_bottom
  );

  const plane_A_top_bottom_back_corrugated = new THREE.Mesh(
    corrugated_A_top_bottom_back,
    materialMap(O)
  );
  plane_A_top_bottom_back_corrugated.name =
    'plane_A_top_bottom_back_corrugated';
  plane_A_top_bottom_back_corrugated.position.set(5, 0, -0.1);
  rotateObject(plane_A_top_bottom_back_corrugated, -90);

  return plane_A_top_bottom_back_corrugated;
};

/* #endregion */

/* #region  //* หน้า B */

export const getPlaneBSideShape = (B, C, O) => {
  const plane_B_side_shape = new THREE.Geometry();
  plane_B_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(B, 0, 0), // 1
    new THREE.Vector3(B, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(B, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(B, C, 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_B_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_B_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_B_side_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_B_side_shape.computeFaceNormals();

  const plane_B_side = new THREE.Mesh(plane_B_side_shape, materialMap(O));
  plane_B_side.name = 'plane_B_side';

  return plane_B_side;
};

export const getPlaneBSideCorrugated = (B, C, O) => {
  const points_b = [];

  points_b.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 2.5) / 2); i += 2.5) {
    points_b.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_b.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_b = new THREE.CatmullRomCurve3(points_b);

  const points_B_curve = curve_b.getPoints(1000);

  const corrugated_B_shape = new THREE.Shape();
  corrugated_B_shape.holes.push(new THREE.Path().setFromPoints(points_B_curve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugate_b = new THREE.ExtrudeGeometry(
    corrugated_B_shape,
    extrudeSettings
  );

  const plane_B_corrugated = new THREE.Mesh(corrugate_b, materialMap(O));
  plane_B_corrugated.name = 'plane_B_corrugated';
  plane_B_corrugated.position.z = -0.1;
  rotateObject(plane_B_corrugated, -90);

  return plane_B_corrugated;
};

/* #endregion */
/* #region  //* บน-ล่าง B */

export const getPlaneBTopBottomShape = (B, A, O) => {
  const plane_B_top_bottom_shape = new THREE.Geometry();
  plane_B_top_bottom_shape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(B - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(B - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), 0), // 6
    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), 0) // 7
  );

  //*  Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_B_top_bottom_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_B_top_bottom_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_B_top_bottom_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_top_bottom_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_B_top_bottom_shape.computeFaceNormals();

  const plane_B_top_bottom = new THREE.Mesh(
    plane_B_top_bottom_shape,
    materialMap(O)
  );
  plane_B_top_bottom.name = 'plane_B_top_bottom';

  return plane_B_top_bottom;
};

export const getPlaneBTopBottomCorrugated = (B, A, O) => {
  const points_B_top_bottom = [];

  points_B_top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 7.5) / 2); i += 2.5) {
    points_B_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

  const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

  const corrugated_B_top_bottom_shape = new THREE.Shape();
  corrugated_B_top_bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_top_bottom_curve)
  );

  const extrudeSettings_B_Top_bottom = {
    depth: Math.abs(A / 2 - 1),
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_B_top_bottom = new THREE.ExtrudeGeometry(
    corrugated_B_top_bottom_shape,
    extrudeSettings_B_Top_bottom
  );

  const plane_B_top_bottom_corrugated = new THREE.Mesh(
    corrugated_B_top_bottom,
    materialMap(O)
  );
  plane_B_top_bottom_corrugated.name = 'plane_B_top_bottom_corrugated';
  plane_B_top_bottom_corrugated.position.set(2.5, 0, -0.1);
  rotateObject(plane_B_top_bottom_corrugated, -90);

  return plane_B_top_bottom_corrugated;
};

/* #endregion */

/* #region  //* ฝาเสียบกาว */

export const getGlueLidShape = (C, G, GSlope, O) => {
  const glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(GSlope, G);
  glue_Lid_shape.lineTo(C - GSlope, G);
  glue_Lid_shape.lineTo(C, 0);

  const glue_lid = new THREE.ShapeGeometry(glue_Lid_shape);
  assignUVs(glue_lid);

  const plane_Glue_lid_front = new THREE.Mesh(glue_lid, materialMap(O));
  plane_Glue_lid_front.name = 'plane_Glue_lid_front';
  rotateObject(plane_Glue_lid_front, 0, 0, 90);

  const plane_Glue_lid_back = new THREE.Mesh(glue_lid, materialMap(O));
  plane_Glue_lid_back.name = 'plane_Glue_lid_back';
  plane_Glue_lid_back.position.z = -2.5;
  rotateObject(plane_Glue_lid_back, 0, 0, 90);

  const plane_Glue_lid = new THREE.Group();
  plane_Glue_lid.add(plane_Glue_lid_front, plane_Glue_lid_back);

  return plane_Glue_lid;
};

export const getGlueLidCorrugated = (C, G, GSlope, O) => {
  const points_G = [];

  points_G.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((G - 2.5) / 2); i += 2.5) {
    points_G.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_G.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_G = new THREE.CatmullRomCurve3(points_G);

  const points_G_curve = curve_G.getPoints(1000);

  const glue_Lid_corrugate_shape = new THREE.Shape();
  glue_Lid_corrugate_shape.holes.push(
    new THREE.Path().setFromPoints(points_G_curve)
  );

  const extrudeSettings_g = {
    depth: C - 8,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugated_Glue_lid = new THREE.ExtrudeGeometry(
    glue_Lid_corrugate_shape,
    extrudeSettings_g
  );

  const plane_Glue_lid_corrugated = new THREE.Mesh(
    corrugated_Glue_lid,
    materialMap(O)
  );
  plane_Glue_lid_corrugated.name = 'plane_Glue_lid_corrugated';
  plane_Glue_lid_corrugated.position.set(-G, GSlope, -0.1);
  rotateObject(plane_Glue_lid_corrugated, -90, 0, 0);

  return plane_Glue_lid_corrugated;
};

/* #endregion */
