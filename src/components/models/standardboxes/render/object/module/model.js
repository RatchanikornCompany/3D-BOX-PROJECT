import * as THREE from 'three';

import assignUVs from '../../../../../function/assignUVs';

import { materialMap } from '../../../../../function/material';

export const getPlaneASideShape = (A, C, O) => {
  const planeASideShape = new THREE.Geometry();
  planeASideShape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(A, 0, 0), // 1
    new THREE.Vector3(A, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(A, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(A, C, 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeASideShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeASideShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeASideShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeASideShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeASideShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeASideShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeASideShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeASideShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeASideShape.computeFaceNormals();

  const planeASide = new THREE.Mesh(planeASideShape, materialMap(O));
  planeASide.castShadow = true;

  return planeASide;
};

export const getPlaneASideCorrugated = (A, C, O) => {
  const pointsA = [];

  pointsA.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
    pointsA.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsA.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveA = new THREE.CatmullRomCurve3(pointsA);

  const pointsACurve = curveA.getPoints(1000);

  const corrugatedAShape = new THREE.Shape();
  corrugatedAShape.holes.push(new THREE.Path().setFromPoints(pointsACurve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugateA = new THREE.ExtrudeGeometry(
    corrugatedAShape,
    extrudeSettings
  );

  const planeACorrugated = new THREE.Mesh(corrugateA, materialMap(O));
  planeACorrugated.castShadow = true;
  planeACorrugated.position.z = -0.1;
  planeACorrugated.rotation.x = -Math.PI / 2;

  return planeACorrugated;
};

export const getPlaneABack = (A, C, O) => {
  const planeABackShape = new THREE.Geometry();
  planeABackShape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), C, 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeABackShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeABackShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeABackShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeABackShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeABackShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeABackShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeABackShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeABackShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeABackShape.computeFaceNormals();

  const planeABack = new THREE.Mesh(planeABackShape, materialMap(O));
  planeABack.castShadow = true;

  return planeABack;
};

export const getPlaneABackCorrugated = (A, C, O) => {
  const pointsABack = [];

  pointsABack.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    pointsABack.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsABack.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveABack = new THREE.CatmullRomCurve3(pointsABack);

  const pointsABackCurve = curveABack.getPoints(1000);

  const corrugatedABackShape = new THREE.Shape();
  corrugatedABackShape.holes.push(
    new THREE.Path().setFromPoints(pointsABackCurve)
  );

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugateABack = new THREE.ExtrudeGeometry(
    corrugatedABackShape,
    extrudeSettings
  );

  const planeABackCorrugated = new THREE.Mesh(corrugateABack, materialMap(O));
  planeABackCorrugated.castShadow = true;
  planeABackCorrugated.position.z = -0.1;
  planeABackCorrugated.rotation.x = -Math.PI / 2;
  return planeABackCorrugated;
};

export const getPlaneATopBottomShape = (A, B, O) => {
  const planeATopBottomShape = new THREE.Geometry();
  planeATopBottomShape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 2.5), Math.abs((B - 130) / 2), 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeATopBottomShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeATopBottomShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeATopBottomShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeATopBottomShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeATopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeATopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeATopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeATopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeATopBottomShape.computeFaceNormals();

  const planeATopBottom = new THREE.Mesh(planeATopBottomShape, materialMap(O));
  planeATopBottom.castShadow = true;

  return planeATopBottom;
};

export const getPlaneATopBottomCorrugated = (A, B, O) => {
  const pointsATopBottom = [];

  pointsATopBottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    pointsATopBottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsATopBottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveATopBottom = new THREE.CatmullRomCurve3(pointsATopBottom);

  const pointsATopBottomCurve = curveATopBottom.getPoints(1000);

  const corrugatedATopBottomShape = new THREE.Shape();
  corrugatedATopBottomShape.holes.push(
    new THREE.Path().setFromPoints(pointsATopBottomCurve)
  );

  const extrudeSettingsATopBottom = {
    depth: (B - 130) / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedATopBottom = new THREE.ExtrudeGeometry(
    corrugatedATopBottomShape,
    extrudeSettingsATopBottom
  );

  const planeATopBottomCorrugated = new THREE.Mesh(
    corrugatedATopBottom,
    materialMap(O)
  );
  planeATopBottomCorrugated.castShadow = true;
  planeATopBottomCorrugated.position.set(2.5, 0, -0.1);
  planeATopBottomCorrugated.rotation.x = -Math.PI / 2;

  return planeATopBottomCorrugated;
};

export const getPlaneATopBottomBackShape = (A, B, O) => {
  const planeATopBottomBackShape = new THREE.Geometry();
  planeATopBottomBackShape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(A - 5), 0, 0), // 1
    new THREE.Vector3(Math.abs(A - 5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs((B - 130) / 2), 0), // 6
    new THREE.Vector3(Math.abs(A - 5), Math.abs((B - 130) / 2), 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeATopBottomBackShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeATopBottomBackShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeATopBottomBackShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeATopBottomBackShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeATopBottomBackShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeATopBottomBackShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeATopBottomBackShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeATopBottomBackShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeATopBottomBackShape.computeFaceNormals();

  const planeATopBottomBack = new THREE.Mesh(
    planeATopBottomBackShape,
    materialMap(O)
  );
  planeATopBottomBack.castShadow = true;
  planeATopBottomBack.position.x = 2.5;

  return planeATopBottomBack;
};

export const getPlaneATopBottomBackCorrugated = (A, B, O) => {
  const pointsATopBottomBack = [];

  pointsATopBottomBack.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 12.5) / 2); i += 2.5) {
    pointsATopBottomBack.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsATopBottomBack.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveATopBottomBack = new THREE.CatmullRomCurve3(pointsATopBottomBack);

  const pointsATopBottomBackCurve = curveATopBottomBack.getPoints(1000);

  const corrugatedATopBottomBackShape = new THREE.Shape();
  corrugatedATopBottomBackShape.holes.push(
    new THREE.Path().setFromPoints(pointsATopBottomBackCurve)
  );

  const extrudeSettingsATopBottom = {
    depth: (B - 130) / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedATopBottomBack = new THREE.ExtrudeGeometry(
    corrugatedATopBottomBackShape,
    extrudeSettingsATopBottom
  );

  const planeATopBottomBackCorrugated = new THREE.Mesh(
    corrugatedATopBottomBack,
    materialMap(O)
  );
  planeATopBottomBackCorrugated.castShadow = true;
  planeATopBottomBackCorrugated.position.set(5, 0, -0.1);
  planeATopBottomBackCorrugated.rotation.x = -Math.PI / 2;

  return planeATopBottomBackCorrugated;
};

export const getPlaneBSideShape = (B, C, O) => {
  const planeBSideShape = new THREE.Geometry();
  planeBSideShape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(B, 0, 0), // 1
    new THREE.Vector3(B, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(B, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(B, C, 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeBSideShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeBSideShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeBSideShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeBSideShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeBSideShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBSideShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeBSideShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBSideShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeBSideShape.computeFaceNormals();

  const planeBSide = new THREE.Mesh(planeBSideShape, materialMap(O));
  planeBSide.castShadow = true;

  return planeBSide;
};

export const getPlaneBSideCorrugated = (B, C, O) => {
  const pointsB = [];

  pointsB.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 2.5) / 2); i += 2.5) {
    pointsB.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsB.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveB = new THREE.CatmullRomCurve3(pointsB);

  const pointsBCurve = curveB.getPoints(1000);

  const corrugatedBShape = new THREE.Shape();
  corrugatedBShape.holes.push(new THREE.Path().setFromPoints(pointsBCurve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugateB = new THREE.ExtrudeGeometry(
    corrugatedBShape,
    extrudeSettings
  );

  const planeBCorrugated = new THREE.Mesh(corrugateB, materialMap(O));
  planeBCorrugated.castShadow = true;
  planeBCorrugated.position.z = -0.1;
  planeBCorrugated.rotation.x = -Math.PI / 2;

  return planeBCorrugated;
};

export const getPlaneBTopBottomShape = (B, A, O) => {
  const planeBTopBottomShape = new THREE.Geometry();
  planeBTopBottomShape.vertices.push(
    new THREE.Vector3(2.5, 0, 0), // 0
    new THREE.Vector3(Math.abs(B - 2.5), 0, 0), // 1
    new THREE.Vector3(Math.abs(B - 2.5), 0, -2.5), // 2,
    new THREE.Vector3(2.5, 0, -2.5), // 3,

    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), -2.5), // 4,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), -2.5), // 5,
    new THREE.Vector3(2.5, Math.abs(A / 2 - 1), 0), // 6
    new THREE.Vector3(Math.abs(B - 2.5), Math.abs(A / 2 - 1), 0) // 7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  planeBTopBottomShape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  planeBTopBottomShape.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  planeBTopBottomShape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  planeBTopBottomShape.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeBTopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBTopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  planeBTopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBTopBottomShape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  planeBTopBottomShape.computeFaceNormals();

  const planeBTopBottom = new THREE.Mesh(planeBTopBottomShape, materialMap(O));
  planeBTopBottom.castShadow = true;

  return planeBTopBottom;
};

export const getPlaneBTopBottomCorrugated = (B, A, O) => {
  const pointsBTopBottom = [];

  pointsBTopBottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((B - 7.5) / 2); i += 2.5) {
    pointsBTopBottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsBTopBottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveBTopBottom = new THREE.CatmullRomCurve3(pointsBTopBottom);

  const pointsBTopBottomCurve = curveBTopBottom.getPoints(1000);

  const corrugatedBTopBottomShape = new THREE.Shape();
  corrugatedBTopBottomShape.holes.push(
    new THREE.Path().setFromPoints(pointsBTopBottomCurve)
  );

  const extrudeSettingsBTopBottom = {
    depth: Math.abs(A / 2 - 1),
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedBTopBottom = new THREE.ExtrudeGeometry(
    corrugatedBTopBottomShape,
    extrudeSettingsBTopBottom
  );

  const planeBTopBottomCorrugated = new THREE.Mesh(
    corrugatedBTopBottom,
    materialMap(O)
  );
  planeBTopBottomCorrugated.castShadow = true;
  planeBTopBottomCorrugated.position.set(2.5, 0, -0.1);
  planeBTopBottomCorrugated.rotation.x = -Math.PI / 2;

  return planeBTopBottomCorrugated;
};

export const getGlueLidShape = (C, G, GSlope, O) => {
  const glueLidShape = new THREE.Shape();

  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(GSlope, G);
  glueLidShape.lineTo(C - GSlope, G);
  glueLidShape.lineTo(C, 0);

  const glueLid = new THREE.ShapeGeometry(glueLidShape);
  assignUVs(glueLid);

  const planeGlueLidFront = new THREE.Mesh(glueLid, materialMap(O));
  planeGlueLidFront.castShadow = true;
  planeGlueLidFront.rotation.z = Math.PI / 2;

  const planeGlueLidBack = new THREE.Mesh(glueLid, materialMap(O));
  planeGlueLidBack.castShadow = true;
  planeGlueLidBack.position.z = -2.5;
  planeGlueLidBack.rotation.z = Math.PI / 2;

  const planeGlueLid = new THREE.Group();
  planeGlueLid.add(planeGlueLidFront, planeGlueLidBack);

  return planeGlueLid;
};

export const getGlueLidCorrugated = (C, G, GSlope, O) => {
  const pointsG = [];

  pointsG.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((G - 2.5) / 2); i += 2.5) {
    pointsG.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsG.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveG = new THREE.CatmullRomCurve3(pointsG);

  const pointsGCurve = curveG.getPoints(1000);

  const glueLidCorrugateShape = new THREE.Shape();
  glueLidCorrugateShape.holes.push(
    new THREE.Path().setFromPoints(pointsGCurve)
  );

  const extrudeSettingsG = {
    depth: C - 8,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedGlueLid = new THREE.ExtrudeGeometry(
    glueLidCorrugateShape,
    extrudeSettingsG
  );

  const planeGlueLidCorrugated = new THREE.Mesh(
    corrugatedGlueLid,
    materialMap(O)
  );
  planeGlueLidCorrugated.castShadow = true;
  planeGlueLidCorrugated.position.set(-G, GSlope, -0.1);
  planeGlueLidCorrugated.rotation.x = -Math.PI / 2;

  return planeGlueLidCorrugated;
};
