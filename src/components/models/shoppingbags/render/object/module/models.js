import * as THREE from 'three';

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

  const planeASide = new THREE.ShapeGeometry(planeASideShape); // A

  return planeASide;
};

export const getPlaneASideLeftShape = (A, B, C, D, R) => {
  const planeASideLeftHole = [];

  for (let i = 0; i <= 360; i++) {
    planeASideLeftHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + -(A / 4 + A / 2),
        Math.cos(i * (Math.PI / 180)) * R + (C - B / 2) - D / 2,
        0
      )
    );
  }

  for (let i = 0; i <= 360; i++) {
    planeASideLeftHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + -A / 4,
        Math.cos(i * (Math.PI / 180)) * R + (C - B / 2) - D / 2,
        0
      )
    );
  }

  const planeASideLeftShape = new THREE.Shape();
  planeASideLeftShape.moveTo(0, 0);
  planeASideLeftShape.lineTo(0, (C - B / 2) | 0);
  planeASideLeftShape.lineTo(-A, (C - B / 2) | 0);
  planeASideLeftShape.lineTo(-A, 0);

  planeASideLeftShape.holes.push(
    new THREE.Path().setFromPoints(planeASideLeftHole)
  );

  const planeASideLeft = new THREE.ShapeGeometry(planeASideLeftShape); // A

  return planeASideLeft;
};

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

  const planeATop = new THREE.ShapeGeometry(planeATopShape); // A Top

  return planeATop;
};

export const getPlaneATopLeftShape = (A, D, R) => {
  const planeATopLeftHole = [];

  for (let i = 0; i <= 360; i++) {
    planeATopLeftHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + -(A / 4 + A / 2),
        Math.cos(i * (Math.PI / 180)) * R + D / 2,
        0
      )
    );
  }

  for (let i = 0; i <= 360; i++) {
    planeATopLeftHole.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + -A / 4,
        Math.cos(i * (Math.PI / 180)) * R + D / 2,
        0
      )
    );
  }

  const planeATopLeftShape = new THREE.Shape();
  planeATopLeftShape.moveTo(0, 0);
  planeATopLeftShape.lineTo(0, D);
  planeATopLeftShape.lineTo(-A, D);
  planeATopLeftShape.lineTo(-A);

  planeATopLeftShape.holes.push(
    new THREE.Path().setFromPoints(planeATopLeftHole)
  );

  const planeATopLeft = new THREE.ShapeGeometry(planeATopLeftShape); // A Top

  return planeATopLeft;
};

export const getPlaneABottomDShape = (A, B) => {
  const planeABottomDShape = new THREE.Shape();
  planeABottomDShape.moveTo(0, 0);
  planeABottomDShape.lineTo(A, 0);
  planeABottomDShape.lineTo(A, (B / 2) | 0);
  planeABottomDShape.lineTo(0, (B / 2) | 0);

  const planeABottomD = new THREE.ShapeGeometry(planeABottomDShape); // A Bottom (D)

  return planeABottomD;
};

export const getPlaneABottomSideShape = (A, B) => {
  const planeABottomSideShape = new THREE.Shape();
  planeABottomSideShape.moveTo(0, 0);
  planeABottomSideShape.lineTo(A, 0);
  planeABottomSideShape.lineTo((A - (B / 2 + 15)) | 0, (B / 2 + 15) | 0);
  planeABottomSideShape.lineTo((B / 2 + 15) | 0, (B / 2 + 15) | 0);

  const planeABottomSide = new THREE.ShapeGeometry(planeABottomSideShape); // A Bottom

  return planeABottomSide;
};

export const getPlaneABottomLeftRightSideShape = (B) => {
  const planeABottomLeftRightSideShape = new THREE.Shape();
  planeABottomLeftRightSideShape.moveTo(0, (B / 2 + 15) | 0);
  planeABottomLeftRightSideShape.lineTo((B / 2 + 15) | 0, (B / 2 + 15) | 0);
  planeABottomLeftRightSideShape.lineTo(0, 0);

  const planeABottomLeftRightSide = new THREE.ShapeGeometry(
    planeABottomLeftRightSideShape
  ); // A Bottom Left

  return planeABottomLeftRightSide;
};

export const getPlaneBSide = (B, C) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, (C - B / 2) | 0);
  planeBSideShape.lineTo((B / 2) | 0, (C - B / 2) | 0);
  planeBSideShape.lineTo((B / 2) | 0, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape); // B

  return planeBSide;
};

export const getPlaneBSideLeft = (B, C) => {
  const planeBSideLeftShape = new THREE.Shape();
  planeBSideLeftShape.moveTo(0, 0);
  planeBSideLeftShape.lineTo(0, (C - B / 2) | 0);
  planeBSideLeftShape.lineTo(-(B / 2) | 0, (C - B / 2) | 0);
  planeBSideLeftShape.lineTo(-(B / 2) | 0, 0);

  const planeBSideLeft = new THREE.ShapeGeometry(planeBSideLeftShape); // B

  return planeBSideLeft;
};

export const getPlaneBTop = (B, D) => {
  const planeBTopShape = new THREE.Shape();
  planeBTopShape.moveTo(0, 0);
  planeBTopShape.lineTo(0, D);
  planeBTopShape.lineTo((B / 2) | 0, D);
  planeBTopShape.lineTo((B / 2) | 0);

  const planeBTop = new THREE.ShapeGeometry(planeBTopShape); // B Top

  return planeBTop;
};

export const getPlaneBTopLeft = (B, D) => {
  const planeBTopLeftShape = new THREE.Shape();
  planeBTopLeftShape.moveTo(0, 0);
  planeBTopLeftShape.lineTo(0, D);
  planeBTopLeftShape.lineTo(-(B / 2) | 0, D);
  planeBTopLeftShape.lineTo(-(B / 2) | 0);

  const planeBTopLeft = new THREE.ShapeGeometry(planeBTopLeftShape); // B Top

  return planeBTopLeft;
};

export const getPlaneBHalfBottomShape = (B) => {
  const planeBHalfBottomShape = new THREE.Shape();
  planeBHalfBottomShape.moveTo(0, 0);
  planeBHalfBottomShape.lineTo(0, (B / 2) | 0);
  planeBHalfBottomShape.lineTo((B / 2) | 0, (B / 2) | 0);
  planeBHalfBottomShape.lineTo(0, 0);

  const planeBHalfBottom = new THREE.ShapeGeometry(planeBHalfBottomShape); // B Half Bottom

  return planeBHalfBottom;
};

export const getPlaneBHalfDBottomShape = (B) => {
  const planeBHalfDBottomShape = new THREE.Shape();
  planeBHalfDBottomShape.moveTo(0, 0);
  planeBHalfDBottomShape.lineTo((B / 2) | 0, (B / 2) | 0);
  planeBHalfDBottomShape.lineTo((B / 2) | 0, 0);
  planeBHalfDBottomShape.lineTo(0, 0);

  const planeBHalfDBottom = new THREE.ShapeGeometry(planeBHalfDBottomShape); // B Half Bottom (D)

  return planeBHalfDBottom;
};

export const getPlaneBBottomShape = (B) => {
  const planeBBottomShape = new THREE.Shape();
  planeBBottomShape.moveTo(0, 0);
  planeBBottomShape.lineTo(0, (B / 2 + 15) | 0);
  planeBBottomShape.lineTo((B / 2) | 0, (B / 2 + 15) | 0);
  planeBBottomShape.lineTo((B / 2) | 0, 0);

  const planeBBottom = new THREE.ShapeGeometry(planeBBottomShape); // B Bottom

  return planeBBottom;
};

export const getGlueLid = (B, C, G) => {
  const glueLidShape = new THREE.Shape();
  glueLidShape.moveTo(0, 0);
  glueLidShape.lineTo(0, (C - B / 2) | 0);
  glueLidShape.lineTo(-G, (C - B / 2) | 0);
  glueLidShape.lineTo(-G);

  const glueLid = new THREE.ShapeGeometry(glueLidShape); // Glud Lid

  return glueLid;
};

export const getGlueTop = (D, G) => {
  const glueTopShape = new THREE.Shape();
  glueTopShape.moveTo(0, 0);
  glueTopShape.lineTo(0, D);
  glueTopShape.lineTo(-G, D);
  glueTopShape.lineTo(-G);

  const glueTop = new THREE.ShapeGeometry(glueTopShape); // Glue Lid Top

  return glueTop;
};

export const getGlueCenter = (B, G) => {
  const glueCenterShape = new THREE.Shape();
  glueCenterShape.moveTo(0, 0);
  glueCenterShape.lineTo(0, (B / 2) | 0);
  glueCenterShape.lineTo(-G, (B / 2) | 0);
  glueCenterShape.lineTo(-G, G);

  const glueCenter = new THREE.ShapeGeometry(glueCenterShape); // Glue Center

  return glueCenter;
};

export const getGlueCenterLid = (G) => {
  const glueCenterLidShape = new THREE.Shape();
  glueCenterLidShape.moveTo(0, 0);
  glueCenterLidShape.lineTo(0, G);
  glueCenterLidShape.lineTo(G, 0);

  const glueCenterLid = new THREE.ShapeGeometry(glueCenterLidShape); // Glue Center Lid

  return glueCenterLid;
};

export const getGlueBottom = (B, G) => {
  const glueBottomShape = new THREE.Shape();
  glueBottomShape.moveTo(0, 0);
  glueBottomShape.lineTo(0, B / 2 + 15);
  glueBottomShape.lineTo(-G, B / 2 + 15);
  glueBottomShape.lineTo(-G, 0);

  const glueBottom = new THREE.ShapeGeometry(glueBottomShape); // Glue Bottom

  return glueBottom;
};

export const getTube = (A, B, C, D, R) => {
  const start = new THREE.Vector3(-A / 4, 0, 0);
  const middle = new THREE.Vector3(0, 0, C - B / 2 - D / 2);
  const end = new THREE.Vector3(A / 4, 0, 0);

  const curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end);

  const tube = new THREE.TubeGeometry(curveQuad, 20, R, 20, false);

  return tube;
};
