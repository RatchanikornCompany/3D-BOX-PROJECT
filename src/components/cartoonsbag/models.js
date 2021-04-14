import * as THREE from 'three';

/* #region  //* planeAside */

// A
export const getPlaneASideShape = (A, B, C, D, R) => {
  const planeASideHole = [];

  for (let i = 0; i <= 360; i++) {
    planeASideHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + A / 4 + A / 2,
        Math.cos(i * (Math.PI / 180)) * R + (C - B / 2) - D / 2,
        0
      )
    );
  }

  for (let i = 0; i <= 360; i++) {
    planeASideHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + A / 4,
        Math.cos(i * (Math.PI / 180)) * R + (C - B / 2) - D / 2,
        0
      )
    );
  }

  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, (C - B / 2) | 0);
  planeASideShape.lineTo(A, (C - B / 2) | 0);
  planeASideShape.lineTo(A, 0);

  planeASideShape.holes.push(new THREE.Path().setFromPoints(planeASideHole));

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

// A Top
export const getPlaneATopShape = (A, D, R) => {
  const planeATopHole = [];

  for (let i = 0; i <= 360; i++) {
    planeATopHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + A / 4 + A / 2,
        Math.cos(i * (Math.PI / 180)) * R + D / 2,
        0
      )
    );
  }

  for (let i = 0; i <= 360; i++) {
    planeATopHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + A / 4,
        Math.cos(i * (Math.PI / 180)) * R + D / 2,
        0
      )
    );
  }

  const planeATopShape = new THREE.Shape();
  planeATopShape.moveTo(0, 0);
  planeATopShape.lineTo(0, D);
  planeATopShape.lineTo(A, D);
  planeATopShape.lineTo(A);

  planeATopShape.holes.push(new THREE.Path().setFromPoints(planeATopHole));

  const planeATop = new THREE.ShapeGeometry(planeATopShape);

  return planeATop;
};

// A Bottom (D)
export const getPlaneABottomDShape = (A, B) => {
  const planeABottomDShape = new THREE.Shape();
  planeABottomDShape.moveTo(0, 0);
  planeABottomDShape.lineTo(A, 0);
  planeABottomDShape.lineTo(A, (B / 2) | 0);
  planeABottomDShape.lineTo(0, (B / 2) | 0);

  const planeABottomD = new THREE.ShapeGeometry(planeABottomDShape);

  return planeABottomD;
};

// A Bottom
export const getPlaneABottomSideShape = (A, B) => {
  const planeABottomSideShape = new THREE.Shape();
  planeABottomSideShape.moveTo(0, 0);
  planeABottomSideShape.lineTo(A, 0);
  planeABottomSideShape.lineTo((A - (B / 2 + 15)) | 0, (B / 2 + 15) | 0);
  planeABottomSideShape.lineTo((B / 2 + 15) | 0, (B / 2 + 15) | 0);
  const planeABottomSide = new THREE.ShapeGeometry(planeABottomSideShape);

  return planeABottomSide;
};

// A Bottom Left
export const getPlaneABottomLeftRightSideShape = (B) => {
  const planeABottomLeftRightSideShape = new THREE.Shape();
  planeABottomLeftRightSideShape.moveTo(0, (B / 2 + 15) | 0);
  planeABottomLeftRightSideShape.lineTo((B / 2 + 15) | 0, (B / 2 + 15) | 0);
  planeABottomLeftRightSideShape.lineTo(0, 0);
  const planeABottomLeftRightSide = new THREE.ShapeGeometry(
    planeABottomLeftRightSideShape
  );

  return planeABottomLeftRightSide;
};

/* #endregion */
/* #region  //* planeBSide */

// B
export const getPlaneBSide = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, (C - B / 2) | 0);
  planeBSideShape.lineTo((B / 2) | 0, (C - B / 2) | 0);
  planeBSideShape.lineTo((B / 2) | 0, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

// B Top
export const getPlaneBTop = (B, D) => {
  const planeBTopShape = new THREE.Shape();
  planeBTopShape.moveTo(0, 0);
  planeBTopShape.lineTo(0, D);
  planeBTopShape.lineTo((B / 2) | 0, D);
  planeBTopShape.lineTo((B / 2) | 0);

  const planeBTop = new THREE.ShapeGeometry(planeBTopShape);

  return planeBTop;
};

// B Half Bottom
export const getPlaneBHalfBottomShape = (B) => {
  const planeBHalfBottomShape = new THREE.Shape();
  planeBHalfBottomShape.moveTo(0, 0);
  planeBHalfBottomShape.lineTo(0, (B / 2) | 0);
  planeBHalfBottomShape.lineTo((B / 2) | 0, (B / 2) | 0);
  planeBHalfBottomShape.lineTo(0, 0);

  const planeBHalfBottom = new THREE.ShapeGeometry(planeBHalfBottomShape);

  return planeBHalfBottom;
};

// B Half Bottom (D)
export const getPlaneBHalfDBottomShape = (B) => {
  const planeBHalfDBottomShape = new THREE.Shape();
  planeBHalfDBottomShape.moveTo(0, 0);
  planeBHalfDBottomShape.lineTo((B / 2) | 0, (B / 2) | 0);
  planeBHalfDBottomShape.lineTo((B / 2) | 0, 0);
  planeBHalfDBottomShape.lineTo(0, 0);

  const planeBHalfDBottom = new THREE.ShapeGeometry(planeBHalfDBottomShape);

  return planeBHalfDBottom;
};

// B Bottom
export const getPlaneBBottomShape = (B) => {
  const planeBBottomShape = new THREE.Shape();
  planeBBottomShape.moveTo(0, 0);
  planeBBottomShape.lineTo(0, (B / 2 + 15) | 0);
  planeBBottomShape.lineTo((B / 2) | 0, (B / 2 + 15) | 0);
  planeBBottomShape.lineTo((B / 2) | 0, 0);

  const planeBBottom = new THREE.ShapeGeometry(planeBBottomShape);

  return planeBBottom;
};

/* #endregion */
/* #region  //* planeGlueLid */

//* Glud Lid
export const getGlueLid = (B, C, G) => {
  const glueLidShape = new THREE.Shape();
  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(0, (C - B / 2) | 0);
  glueLidShape.lineTo(G, (C - B / 2) | 0);
  glueLidShape.lineTo(G);

  const glueLid = new THREE.ShapeGeometry(glueLidShape);

  return glueLid;
};

//* Glue Lid Top
export const getGlueTop = (D, G) => {
  const glueTopShape = new THREE.Shape();
  glueTopShape.moveTo(0, 0);
  glueTopShape.lineTo(0, D);
  glueTopShape.lineTo(G, D);
  glueTopShape.lineTo(G);

  const glueTop = new THREE.ShapeGeometry(glueTopShape);

  return glueTop;
};

//* Glue Center
export const getGlueCenter = (B, G) => {
  const glueCenterShape = new THREE.Shape();
  glueCenterShape.moveTo(0, 0);
  glueCenterShape.lineTo(0, (B / 2) | 0);
  glueCenterShape.lineTo(G, (B / 2) | 0);
  glueCenterShape.lineTo(G, G);

  const glueCenter = new THREE.ShapeGeometry(glueCenterShape);

  return glueCenter;
};

//* Glue Center Lid
export const getGlueCenterLid = (G) => {
  const glueCenterLidShape = new THREE.Shape();
  glueCenterLidShape.moveTo(0, 0);
  glueCenterLidShape.lineTo(0, G);
  glueCenterLidShape.lineTo(G, 0);

  const glueCenterLid = new THREE.ShapeGeometry(glueCenterLidShape);

  return glueCenterLid;
};

//* Glue Bottom
export const getGlueBottom = (B, G) => {
  const glueBottomShape = new THREE.Shape();
  glueBottomShape.moveTo(0, 0);
  glueBottomShape.lineTo(0, B / 2 + 15);
  glueBottomShape.lineTo(G, B / 2 + 15);
  glueBottomShape.lineTo(G, 0);

  const glueBottom = new THREE.ShapeGeometry(glueBottomShape);

  return glueBottom;
};

/* #endregion */
/* #region  //* Rope */

export const getTube = (A, B, C, D, R) => {
  const start = new THREE.Vector3(-A / 4, 0, 0);
  const middle = new THREE.Vector3(0, 0, C - B / 2 - D / 2);
  const end = new THREE.Vector3(A / 4, 0, 0);

  const curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end);

  const tube = new THREE.TubeGeometry(curveQuad, 20, R, 20, false);

  return tube;
};

/* #endregion */
