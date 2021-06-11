import * as THREE from 'three';

import assignUVs from '../../../../.modules/assignUVs';

import { materialMap } from '../../../../.modules/material';

/* #region  //* หน้า A */

export const getPlaneASide = (A, B, O) => {
  const planeA = new THREE.Geometry();
  planeA.vertices.push(
    new THREE.Vector3(2, 0, 0), //*  0
    new THREE.Vector3(A - 2, 0, 0), //*  1
    new THREE.Vector3(A - 2, 0, -2.5), //*  2,
    new THREE.Vector3(2, 0, -2.5), //*  3,

    new THREE.Vector3(A - 2, B, -2.5), //*  4,
    new THREE.Vector3(2, B, -2.5), //*  5,
    new THREE.Vector3(2, B, 0), //*  6
    new THREE.Vector3(A - 2, B, 0) //*  7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  planeA.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  planeA.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  planeA.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  planeA.faces.push(face);

  //* faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  planeA.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeA.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeA.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeA.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  planeA.computeFaceNormals();

  const planeASide = new THREE.Mesh(planeA, materialMap(O));
  planeASide.castShadow = true;

  return planeASide;
};

export const getPlaneACorrugated = (A, B, O) => {
  const pointsA = [];

  pointsA.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    pointsA.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsA.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveA = new THREE.CatmullRomCurve3(pointsA);

  const pointsACorrugated = curveA.getPoints(1000);

  const corrugatedAShape = new THREE.Shape();
  corrugatedAShape.holes.push(
    new THREE.Path().setFromPoints(pointsACorrugated)
  );

  const extrudeSettings = {
    depth: B,
    bevelEnabled: true,
    bevelSegments: O,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedA = new THREE.ExtrudeGeometry(
    corrugatedAShape,
    extrudeSettings
  );

  const planeACorrugated = new THREE.Mesh(corrugatedA, materialMap(O));
  planeACorrugated.castShadow = true;
  planeACorrugated.position.set(A - 2.5, 0, -2.4);
  planeACorrugated.rotation.set(-Math.PI / 2, 0, Math.PI);

  return planeACorrugated;
};

/* #endregion */
/* #region  //* หน้า A (หลัง) */

export const getPlaneABackShape = (O) => {
  const planeABackShape = new THREE.Shape();

  planeABackShape.moveTo(0, 0);
  planeABackShape.lineTo(0, 8);
  planeABackShape.lineTo(3, 8);
  planeABackShape.lineTo(3, 32);
  planeABackShape.lineTo(0, 32);
  planeABackShape.lineTo(0, 68);
  planeABackShape.lineTo(3, 68);
  planeABackShape.lineTo(3, 92);
  planeABackShape.lineTo(0, 92);
  planeABackShape.lineTo(0, 100);
  planeABackShape.lineTo(100, 100);
  planeABackShape.lineTo(100, 92);
  planeABackShape.lineTo(97, 92);
  planeABackShape.lineTo(97, 68);
  planeABackShape.lineTo(100, 68);
  planeABackShape.lineTo(100, 32);
  planeABackShape.lineTo(97, 32);
  planeABackShape.lineTo(97, 8);
  planeABackShape.lineTo(100, 8);
  planeABackShape.lineTo(100, 0);

  const planeABack = new THREE.ShapeGeometry(planeABackShape);
  assignUVs(planeABack);

  //* Front Plane
  const planeABackFront = new THREE.Mesh(planeABack, materialMap(O));
  planeABackFront.castShadow = true;

  //* Back Plane
  const planeABackBack = new THREE.Mesh(planeABack, materialMap(O));
  planeABackBack.castShadow = true;
  planeABackBack.position.z = -2.5;

  const planeABackGroup = new THREE.Group();
  planeABackGroup.add(planeABackFront, planeABackBack);

  return planeABackGroup;
};

export const getPlaneABackCorrugated = (A, B, C, O) => {
  const Cx = C;
  const pointsABack = [];
  const planeABackCent = [];

  pointsABack.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (B - 2.5) / 2; i += 2.5) {
    pointsABack.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsABack.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveABack = new THREE.CatmullRomCurve3(pointsABack);

    const pointsABackCorrugated = curveABack.getPoints(1000);

    const corrugatedABackShape = new THREE.Shape();
    corrugatedABackShape.holes.push(
      new THREE.Path().setFromPoints(pointsABackCorrugated)
    );

    const extrudeSettingsABack = {
      depth: A - 6,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedABack = new THREE.ExtrudeGeometry(
      corrugatedABackShape,
      extrudeSettingsABack
    );

    const planeABackCentShape = new THREE.Mesh(corrugatedABack, materialMap(O));
    planeABackCentShape.castShadow = true;
    planeABackCentShape.position.set(3, 0, -2.4);
    planeABackCentShape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    planeABackCent.push(planeABackCentShape);
  }

  return planeABackCent;
};

/* #endregion */
/* #region  //* ฝาเสียบบน ซ้าย-ขวา A */

export const getPlaneATopLeftRightShape = (B, O) => {
  const planeATopLeftRightShape = new THREE.Shape();

  planeATopLeftRightShape.moveTo(0, 0);
  planeATopLeftRightShape.lineTo(0, B);
  planeATopLeftRightShape.lineTo(40, 90);
  planeATopLeftRightShape.bezierCurveTo(40, 90, 50, 89, 50, 79);
  planeATopLeftRightShape.lineTo(50, 19);
  planeATopLeftRightShape.bezierCurveTo(50, 19, 50, 9, 40, 8);
  planeATopLeftRightShape.lineTo(0, 0);

  const planeATopLeftRight = new THREE.ShapeGeometry(planeATopLeftRightShape);
  assignUVs(planeATopLeftRight);

  //* Front Plane
  const planeATopLeftRightFront = new THREE.Mesh(
    planeATopLeftRight,
    materialMap(O)
  );
  planeATopLeftRightFront.castShadow = true;

  //* Back Plane
  const planeATopLeftRightBack = new THREE.Mesh(
    planeATopLeftRight,
    materialMap(O)
  );
  planeATopLeftRightBack.castShadow = true;
  planeATopLeftRightBack.position.z = -2.5;

  const planeATopLeftRightGroup = new THREE.Group();
  planeATopLeftRightGroup.add(planeATopLeftRightFront, planeATopLeftRightBack);

  return planeATopLeftRightGroup;
};

export const getPlaneATopLeftRightCorrugated = (A, C, O) => {
  const pointsATopRight = [];
  const planeATopRightCent = [];
  const Cx = C;

  pointsATopRight.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= A / 4 - 5.5; i += 2.5) {
    pointsATopRight.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsATopRight.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveATopRight = new THREE.CatmullRomCurve3(pointsATopRight);

    const pointsATopRightCorrugated = curveATopRight.getPoints(1000);

    const corrugatedATopRightShape = new THREE.Shape();
    corrugatedATopRightShape.holes.push(
      new THREE.Path().setFromPoints(pointsATopRightCorrugated)
    );

    const extrudeSettingsATopRight = {
      depth: i > 10 ? C + 10 - i : C - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedATopRight = new THREE.ExtrudeGeometry(
      corrugatedATopRightShape,
      extrudeSettingsATopRight
    );

    const planeATopRightCentShape = new THREE.Mesh(
      corrugatedATopRight,
      materialMap(O)
    );
    planeATopRightCentShape.castShadow = true;
    planeATopRightCentShape.position.set(0, A / 2 - 1, -2.4);
    planeATopRightCentShape.rotation.set(Math.PI / 2, Math.PI / 2, 0);

    planeATopRightCent.push(planeATopRightCentShape);
  }

  //* Corrugate A-Top (Left)
  const pointsATopLeft = [];
  const planeATopLeftCent = [];

  pointsATopLeft.push(new THREE.Vector3(0, 0));

  for (let i = 0; i < 20; i += 2.5) {
    pointsATopLeft.push(new THREE.Vector3(i * 2 + 2.5, -C * (2.4 / Cx)));
    pointsATopLeft.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveATopLeft = new THREE.CatmullRomCurve3(pointsATopLeft);

    const pointsATopLeftCorrugated = curveATopLeft.getPoints(1000);

    const corrugatedATopLeftShape = new THREE.Shape();
    corrugatedATopLeftShape.holes.push(
      new THREE.Path().setFromPoints(pointsATopLeftCorrugated)
    );

    const extrudeSettingsATopLeft = {
      depth: i > 10 ? C + 10 - i : C - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedATopLeft = new THREE.ExtrudeGeometry(
      corrugatedATopLeftShape,
      extrudeSettingsATopLeft
    );

    const planeATopLeftCentShape = new THREE.Mesh(
      corrugatedATopLeft,
      materialMap(O)
    );
    planeATopLeftCentShape.castShadow = true;
    planeATopLeftCentShape.position.set(0, A / 2 - 1, -2.4);
    planeATopLeftCentShape.rotation.set(0, Math.PI / 2, -Math.PI / 2);

    planeATopLeftCent.push(planeATopLeftCentShape);
  }

  const corrugatedATopLeftCent = new THREE.Group();
  corrugatedATopLeftCent.add(...planeATopRightCent, ...planeATopLeftCent);

  return corrugatedATopLeftCent;
};

/* #endregion */
/* #region  //* ลิ้นบน ซ้าย-ขวา A */

export const getPlaneATopLidLeftRightShape = (C, O) => {
  const planeATopLidLeftRightShape = new THREE.Shape();

  planeATopLidLeftRightShape.moveTo(0, 0);
  planeATopLidLeftRightShape.lineTo(0, C - 1);
  planeATopLidLeftRightShape.bezierCurveTo(0, C - 1, C, C, C - 1, 9);
  planeATopLidLeftRightShape.bezierCurveTo(C - 1, 9, 49, 0, 44, 0);

  const planeATopLidLeftRight = new THREE.ShapeGeometry(
    planeATopLidLeftRightShape
  );
  assignUVs(planeATopLidLeftRight);

  //* Front Plane
  const planeATopLidLeftRightShapeFront = new THREE.Mesh(
    planeATopLidLeftRight,
    materialMap(O)
  );
  planeATopLidLeftRightShapeFront.castShadow = true;

  //* Back Plane
  const planeATopLidLeftRightShapeBack = new THREE.Mesh(
    planeATopLidLeftRight,
    materialMap(O)
  );
  planeATopLidLeftRightShapeBack.castShadow = true;
  planeATopLidLeftRightShapeBack.position.z = -2.5;

  const planeATopLidLeftRightShapeGroup = new THREE.Group();
  planeATopLidLeftRightShapeGroup.add(
    planeATopLidLeftRightShapeFront,
    planeATopLidLeftRightShapeBack
  );

  return planeATopLidLeftRightShapeGroup;
};

export const getPlaneATopLidLeftRightCorrugated = (C, O) => {
  const Cx = C;
  const pointsATopLidLeftRight = [];
  const planeATopLidLeftRightCent = [];

  pointsATopLidLeftRight.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 12.5) / 2; i += 2.5) {
    pointsATopLidLeftRight.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsATopLidLeftRight.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveATopLidLeftRight = new THREE.CatmullRomCurve3(
      pointsATopLidLeftRight
    );

    const pointsATopLidLeftRightCorrugated =
      curveATopLidLeftRight.getPoints(1000);

    const corrugatedATopLidLeftRightShape = new THREE.Shape();
    corrugatedATopLidLeftRightShape.holes.push(
      new THREE.Path().setFromPoints(pointsATopLidLeftRightCorrugated)
    );

    const extrudeSettingsATopLidLeftRigh = {
      depth: C - 5 - i,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedATopLidLeftRight = new THREE.ExtrudeGeometry(
      corrugatedATopLidLeftRightShape,
      extrudeSettingsATopLidLeftRigh
    );

    const planeATopLidLeftRightCentShape = new THREE.Mesh(
      corrugatedATopLidLeftRight,
      materialMap(O)
    );
    planeATopLidLeftRightCentShape.castShadow = true;
    planeATopLidLeftRightCentShape.position.z = -2.4;
    planeATopLidLeftRightCentShape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    planeATopLidLeftRightCent.push(planeATopLidLeftRightCentShape);
  }

  return planeATopLidLeftRightCent;
};

/* #endregion */

/* #region  //* ฝาเสียบ บน-ล่าง B */

export const getPlaneBTopBottomShape = (A, C, O) => {
  const planeBTopBottom = new THREE.Geometry();
  planeBTopBottom.vertices.push(
    new THREE.Vector3(1, 0, 0), //*  0
    new THREE.Vector3(A - 1, 0, 0), //*  1
    new THREE.Vector3(A - 1, 0, -2.5), //*  2
    new THREE.Vector3(1, 0, -2.5), //*  3

    new THREE.Vector3(A - 1, C, -2.5), //*  4
    new THREE.Vector3(1, C, -2.5), //*  5
    new THREE.Vector3(1, C, 0), //*  6
    new THREE.Vector3(A - 1, C, 0) //*  7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  planeBTopBottom.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  planeBTopBottom.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  planeBTopBottom.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  planeBTopBottom.faces.push(face);

  planeBTopBottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeBTopBottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBTopBottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeBTopBottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  planeBTopBottom.computeFaceNormals();

  const planeBTopBottomSide = new THREE.Mesh(planeBTopBottom, materialMap(O));
  planeBTopBottomSide.castShadow = true;

  return planeBTopBottomSide;
};

export const getPlaneBTopBottomCorrugated = (A, C, O) => {
  const Cx = C;
  const pointsBTopBottom = [];

  pointsBTopBottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((C - 10) / 2); i += 2.5) {
    pointsBTopBottom.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsBTopBottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveBTopBottom = new THREE.CatmullRomCurve3(pointsBTopBottom);

  const pointsBTopBottomCurve = curveBTopBottom.getPoints(1000);

  const corrugatedBTopBottomShape = new THREE.Shape();
  corrugatedBTopBottomShape.holes.push(
    new THREE.Path().setFromPoints(pointsBTopBottomCurve)
  );

  const extrudeSettingsBTopBottom = {
    depth: A - 2,
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

  const planeBTopBottomCent = new THREE.Mesh(
    corrugatedBTopBottom,
    materialMap(O)
  );
  planeBTopBottomCent.castShadow = true;
  planeBTopBottomCent.position.set(1, 5, -2.4);
  planeBTopBottomCent.rotation.set(Math.PI / 2, Math.PI / 2, 0);

  return planeBTopBottomCent;
};

/* #endregion */
/* #region  //* ฝาเสียบ ซ้ายขวา B */

export const getPlaneBLeftRightShape = (C, B, O) => {
  const planeBLeftRight = new THREE.Geometry();
  planeBLeftRight.vertices.push(
    new THREE.Vector3(0, 0, 0), //*  0
    new THREE.Vector3(C, 0, 0), //*  1
    new THREE.Vector3(C, 0, -2.5), //*  2
    new THREE.Vector3(0, 0, -2.5), //*  3

    new THREE.Vector3(C, B, -2.5), //*  4
    new THREE.Vector3(0, B, -2.5), //*  5
    new THREE.Vector3(0, B, 0), //*  6
    new THREE.Vector3(C, B, 0) //*  7
  );

  //* Front Plane
  let face = new THREE.Face3(0, 1, 6);
  face.materialIndex = 0;
  planeBLeftRight.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialIndex = 0;
  planeBLeftRight.faces.push(face);

  //* Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialIndex = 1;
  planeBLeftRight.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialIndex = 1;
  planeBLeftRight.faces.push(face);

  //* Right Plane
  face = new THREE.Face3(1, 2, 7);
  face.materialIndex = 2;
  planeBLeftRight.faces.push(face);
  face = new THREE.Face3(7, 4, 2);
  face.materialIndex = 2;
  planeBLeftRight.faces.push(face);

  planeBLeftRight.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeBLeftRight.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);
  planeBLeftRight.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
  ]);
  planeBLeftRight.faceVertexUvs[0].push([
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(1, 0),
  ]);

  planeBLeftRight.computeFaceNormals();

  const planeBLeftRightSide = new THREE.Mesh(planeBLeftRight, materialMap(O));
  planeBLeftRightSide.castShadow = true;

  return planeBLeftRightSide;
};

export const getPlaneBLeftRightCorrugated = (A, C, O) => {
  const Cx = C;
  const pointsBLeftRight = [];

  pointsBLeftRight.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    pointsBLeftRight.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsBLeftRight.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveBLeftRight = new THREE.CatmullRomCurve3(pointsBLeftRight);

  const pointsBLeftRightCorrugated = curveBLeftRight.getPoints(1000);

  const corrugatedBLeftRightShape = new THREE.Shape();
  corrugatedBLeftRightShape.holes.push(
    new THREE.Path().setFromPoints(pointsBLeftRightCorrugated)
  );

  const extrudeSettingsBLeftRight = {
    depth: C - 2.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedBLeftRight = new THREE.ExtrudeGeometry(
    corrugatedBLeftRightShape,
    extrudeSettingsBLeftRight
  );

  const planeBLeftRightCent = new THREE.Mesh(
    corrugatedBLeftRight,
    materialMap(O)
  );
  planeBLeftRightCent.castShadow = true;
  planeBLeftRightCent.position.set(C, 2.5, -0.1);
  planeBLeftRightCent.rotation.set(-Math.PI / 2, -Math.PI / 2, 0);

  return planeBLeftRightCent;
};

/* #endregion */
/* #region  //* ลิ้นบน B */

export const getPlaneBTopLidShape = (C, O) => {
  //* Plane
  const planeBTopBottomLidShape = new THREE.Shape();

  planeBTopBottomLidShape.moveTo(0, 0);
  planeBTopBottomLidShape.lineTo(0, C - 1);
  planeBTopBottomLidShape.lineTo((C - 1) / 2, C - 1);
  planeBTopBottomLidShape.bezierCurveTo(
    (C - 1) / 2,
    C - 1,
    C - 1 + 2,
    C - 1 + 2,
    C - 1,
    (C - 1) / 2
  );
  planeBTopBottomLidShape.lineTo(C - 1, (C - 1) / 2);
  planeBTopBottomLidShape.lineTo(C - 1, C - 1);
  planeBTopBottomLidShape.lineTo(C - 1, 0);

  const planeBTopBottomLid = new THREE.ShapeGeometry(planeBTopBottomLidShape);
  assignUVs(planeBTopBottomLid);

  //* Front Plane
  const planeBTopLidFront = new THREE.Mesh(planeBTopBottomLid, materialMap(O));
  planeBTopLidFront.castShadow = true;

  //* Back Plane
  const planeBTopLidBack = new THREE.Mesh(planeBTopBottomLid, materialMap(O));
  planeBTopLidBack.castShadow = true;
  planeBTopLidBack.position.z = -2.5;

  const planeBTopGroup = new THREE.Group();
  planeBTopGroup.add(planeBTopLidFront, planeBTopLidBack);

  return planeBTopGroup;
};

export const getPlaneBTopLidShapeCorrugated = (C, O) => {
  const planeBTopLidCent = [];
  const pointsBTopBottomLid = [];

  pointsBTopBottomLid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 5.5) / 2; i += 2.5) {
    pointsBTopBottomLid.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsBTopBottomLid.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveBTopBottomLid = new THREE.CatmullRomCurve3(pointsBTopBottomLid);

    const pointsBTopBottomLidCorrugated = curveBTopBottomLid.getPoints(1000);

    const corrugatedBTopBottomLidShape = new THREE.Shape();
    corrugatedBTopBottomLidShape.holes.push(
      new THREE.Path().setFromPoints(pointsBTopBottomLidCorrugated)
    );

    const extrudeSettingsBTopBottomLid = {
      depth: i > 10 ? C + 10 - i : C - 1,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedBTopBottomLid = new THREE.ExtrudeGeometry(
      corrugatedBTopBottomLidShape,
      extrudeSettingsBTopBottomLid
    );

    const planeBTopLidShape = new THREE.Mesh(
      corrugatedBTopBottomLid,
      materialMap(O)
    );
    planeBTopLidShape.castShadow = true;
    planeBTopLidShape.position.z = -2.4;
    planeBTopLidShape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    planeBTopLidCent.push(planeBTopLidShape);
  }

  return planeBTopLidCent;
};

/* #endregion */
/* #region  //* ลิ้นล่าง B */

export const getPlaneBBottomLidShape = (C, O) => {
  const planeBTopBottomLidShape = new THREE.Shape();

  planeBTopBottomLidShape.moveTo(0, 0);
  planeBTopBottomLidShape.lineTo(0, C - 1);
  planeBTopBottomLidShape.lineTo((C - 1) / 2, C - 1);
  planeBTopBottomLidShape.bezierCurveTo(
    (C - 1) / 2,
    C - 1,
    C - 1 + 2,
    C - 1 + 2,
    C - 1,
    (C - 1) / 2
  );
  planeBTopBottomLidShape.lineTo(C - 1, (C - 1) / 2);
  planeBTopBottomLidShape.lineTo(C - 1, C - 1);
  planeBTopBottomLidShape.lineTo(C - 1, 0);

  const planeBTopBottomLid = new THREE.ShapeGeometry(planeBTopBottomLidShape);
  assignUVs(planeBTopBottomLid);

  //* Front Plane
  const planeBBottomLidFront = new THREE.Mesh(
    planeBTopBottomLid,
    materialMap(O)
  );
  planeBBottomLidFront.castShadow = true;

  //* Back Plane
  const planeBBottomLidBack = new THREE.Mesh(
    planeBTopBottomLid,
    materialMap(O)
  );
  planeBBottomLidBack.castShadow = true;
  planeBBottomLidBack.position.z = -2.5;

  const planeBBottomGroup = new THREE.Group();
  planeBBottomGroup.add(planeBBottomLidFront, planeBBottomLidBack);

  return planeBBottomGroup;
};

export const getPlaneBBottomLidShapeCorrugated = (C, O) => {
  const planeBBottomLidCent = [];
  const pointsBTopBottomLid = [];

  pointsBTopBottomLid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (C - 5.5) / 2; i += 2.5) {
    pointsBTopBottomLid.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    pointsBTopBottomLid.push(new THREE.Vector3(i * 2 + 5, 0));

    const curveBTopBottomLid = new THREE.CatmullRomCurve3(pointsBTopBottomLid);

    const pointsBTopBottomLidCorrugated = curveBTopBottomLid.getPoints(1000);

    const corrugatedBTopBottomLidShape = new THREE.Shape();
    corrugatedBTopBottomLidShape.holes.push(
      new THREE.Path().setFromPoints(pointsBTopBottomLidCorrugated)
    );

    const extrudeSettingsBTopBottomLid = {
      depth: i > 10 ? C + 10 - i : C - 1,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugatedBTopBottomLid = new THREE.ExtrudeGeometry(
      corrugatedBTopBottomLidShape,
      extrudeSettingsBTopBottomLid
    );

    //* Bottom Corrugate
    const planeBBottomLidShape = new THREE.Mesh(
      corrugatedBTopBottomLid,
      materialMap(O)
    );
    planeBBottomLidShape.castShadow = true;
    planeBBottomLidShape.position.z = -2.4;
    planeBBottomLidShape.rotation.set(0, Math.PI / 2, Math.PI / 2);

    planeBBottomLidCent.push(planeBBottomLidShape);
  }

  return planeBBottomLidCent;
};

/* #endregion */
/* #region  //* ลิ้นเสียบ ซ้ายขวา B */

export const getPlaneBLeftRightLidShape = (B, C, O) => {
  const planeBLeftRightLidShape = new THREE.Shape();

  planeBLeftRightLidShape.moveTo(0, 0);
  planeBLeftRightLidShape.lineTo(0, B);
  planeBLeftRightLidShape.lineTo(C - 1, B);
  planeBLeftRightLidShape.lineTo(C - 1, B - 10);
  planeBLeftRightLidShape.lineTo(C - 1 + 1, B - 10);
  planeBLeftRightLidShape.lineTo(C - 1 + 1, B - 30);
  planeBLeftRightLidShape.lineTo(C - 1, B - 30);
  planeBLeftRightLidShape.lineTo(C - 1, B - 70);
  planeBLeftRightLidShape.lineTo(C - 1 + 1, B - 70);
  planeBLeftRightLidShape.lineTo(C - 1 + 1, B - 90);
  planeBLeftRightLidShape.lineTo(C - 1, B - 90);
  planeBLeftRightLidShape.lineTo(C - 1, 1);
  planeBLeftRightLidShape.lineTo(0, 1);

  const planeBLeftRightLid = new THREE.ShapeGeometry(planeBLeftRightLidShape);
  assignUVs(planeBLeftRightLid);

  //* Front Plane
  const planeBLeftRightLidShapeFront = new THREE.Mesh(
    planeBLeftRightLid,
    materialMap(O)
  );
  planeBLeftRightLidShapeFront.castShadow = true;

  //* Back Plane
  const planeBLeftRightLidShapeBack = new THREE.Mesh(
    planeBLeftRightLid,
    materialMap(O)
  );
  planeBLeftRightLidShapeBack.castShadow = true;
  planeBLeftRightLidShapeBack.position.z = -2.5;

  const planeBLeftRightLidGroup = new THREE.Group();
  planeBLeftRightLidGroup.add(
    planeBLeftRightLidShapeFront,
    planeBLeftRightLidShapeBack
  );

  return planeBLeftRightLidGroup;
};

export const getPlaneBLeftRightLidCorrugated = (A, C, O) => {
  const Cx = C;
  const pointsBLeftRightLid = [];

  pointsBLeftRightLid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 7.5) / 2); i += 2.5) {
    pointsBLeftRightLid.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    pointsBLeftRightLid.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curveBLeftRightLid = new THREE.CatmullRomCurve3(pointsBLeftRightLid);

  const pointsBLeftRightLidCorrugated = curveBLeftRightLid.getPoints(1000);

  const corrugatedBLeftRightLidShape = new THREE.Shape();
  corrugatedBLeftRightLidShape.holes.push(
    new THREE.Path().setFromPoints(pointsBLeftRightLidCorrugated)
  );

  const extrudeSettingsBLeftRightLid = {
    depth: C - 2.5,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugatedBLeftRightLid = new THREE.ExtrudeGeometry(
    corrugatedBLeftRightLidShape,
    extrudeSettingsBLeftRightLid
  );

  const planeBLeftRightLidCent = new THREE.Mesh(
    corrugatedBLeftRightLid,
    materialMap(O)
  );
  planeBLeftRightLidCent.castShadow = true;
  planeBLeftRightLidCent.position.set(C - 2.5, 2.5, -0.1);
  planeBLeftRightLidCent.rotation.set(-Math.PI / 2, -Math.PI / 2, 0);

  return planeBLeftRightLidCent;
};

/* #endregion */
