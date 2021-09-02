import * as THREE from 'three';
import PARTS from '../../_module/parts';

class main_box {
  constructor(
    width,
    depth,
    height,
    lid,
    glue,
    GSlope,
    plug,
    p_slope,
    flap,
    colors
  ) {
    this.width = width;
    this.depth = depth;
    this.height = height;
    this.lid = lid;
    this.glue = glue;
    this.plug = plug;
    this.flap = flap;
    this.color = colors;
    this.plugs_slope = p_slope;
    this.glue_slope = GSlope;
  }

  planeA1() {
    this.scene = new THREE.Scene();
    this.green_line = [];
    this.red_line1 = [];
    this.red_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(this.depth, 0));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.red_line1.push(new THREE.Vector2(0, this.width));
    this.red_line1.push(new THREE.Vector2(this.depth, this.width));

    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(this.depth, this.width));
    this.green_line.push(new THREE.Vector2(this.depth, 0));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines, this.red_lines1, this.red_lines);

    return this.scene;
  }

  planeA2() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.red_line1 = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.depth));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.red_line1.push(new THREE.Vector2(this.width, 0));
    this.red_line1.push(new THREE.Vector2(this.width, this.depth));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.green_line = [];
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines, this.red_lines, this.red_lines1);

    return this.scene;
  }

  planeB1() {
    this.scene = new THREE.Scene();
    this.green_line = [];
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.height, 0));
    this.green_line.push(new THREE.Vector2(this.height, this.width));
    this.green_line.push(new THREE.Vector2(0, this.width));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines);

    return this.scene;
  }

  planeB2() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.green_line = [];
    this.green_line1 = [];
    this.green_line2 = [];
    this.green_line3 = [];

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.height, 0));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.green_line1.push(new THREE.Vector2(0, this.width));
    this.green_line1.push(new THREE.Vector2(this.height, this.width));

    this.green_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line1),
      this.color.cr_green
    );
    this.green_lines1.computeLineDistances();

    this.red_line.push(new THREE.Vector2(this.height, 0));
    this.red_line.push(new THREE.Vector2(this.height, this.width));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.green_line2.push(new THREE.Vector2(0, 0));
    this.green_line2.push(new THREE.Vector2(this.height, this.width / 2 / 2));

    this.green_lines2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line2),
      this.color.cr_green
    );
    this.green_lines2.computeLineDistances();

    this.green_line3.push(new THREE.Vector2(0, this.width));
    this.green_line3.push(
      new THREE.Vector2(this.height, ((this.width / 100) * 75) | 0)
    );

    this.green_lines3 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line3),
      this.color.cr_green
    );
    this.green_lines3.computeLineDistances();

    this.scene.add(
      this.red_lines,
      this.green_lines,
      this.green_lines1,
      this.green_lines2,
      this.green_lines3
    );

    return this.scene;
  }

  planeAB() {
    this.scene = new THREE.Scene();
    this.green_line = [];

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_line.push(new THREE.Vector2(this.width, this.depth));
    this.green_line.push(new THREE.Vector2(0, this.depth));
    this.green_line.push(new THREE.Vector2(0, 0));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines);

    return this.scene;
  }

  sideAC() {
    this.scene = new THREE.Scene();
    this.green_line = [];

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_line.push(new THREE.Vector2(this.width, 0));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.red_lines, this.green_lines);

    return this.scene;
  }

  sideAC1() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.red_line1 = [];
    this.red_line2 = [];
    this.yellow_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.yellow_line.push(new THREE.Vector2(0, this.height));
    this.yellow_line.push(new THREE.Vector2(this.width, this.height));
    this.yellow_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.yellow_line),
      this.color.cr_yellow
    );
    this.yellow_lines.computeLineDistances();

    this.red_line1.push(new THREE.Vector2(this.width, 0));
    this.red_line1.push(new THREE.Vector2(this.width, this.height));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.red_line2.push(new THREE.Vector2(0, this.height));
    this.red_line2.push(new THREE.Vector2(0, this.height + this.flap / 2));
    this.red_line2.push(
      new THREE.Vector2(this.flap / 2, this.height + this.flap / 2)
    );
    this.red_line2.push(
      new THREE.Vector2(this.flap / 2, this.height + (this.flap / 2) * 2)
    );
    this.red_line2.push(
      new THREE.Vector2(
        this.width - this.flap / 2,
        this.height + (this.flap / 2) * 2
      )
    );
    this.red_line2.push(
      new THREE.Vector2(this.width - this.flap / 2, this.height + this.flap / 2)
    );
    this.red_line2.push(
      new THREE.Vector2(this.width, this.height + this.flap / 2)
    );
    this.red_line2.push(new THREE.Vector2(this.width, this.height));
    this.red_lines2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line2),
      this.color.cr_red
    );

    this.scene.add(
      this.red_lines,
      this.yellow_lines,
      this.red_lines1,
      this.red_lines2
    );

    return this.scene;
  }

  sideBC() {
    this.scene = new THREE.Scene();
    this.green_line = [];

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.height, 0));
    this.green_line.push(new THREE.Vector2(this.height, this.depth));
    this.green_line.push(new THREE.Vector2(0, this.depth));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.red_lines, this.green_lines);

    return this.scene;
  }

  sideBC1() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.red_line1 = [];
    this.red_line2 = [];
    this.yellow_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.yellow_line.push(new THREE.Vector2(0, this.height));
    this.yellow_line.push(new THREE.Vector2(this.depth, this.height));
    this.yellow_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.yellow_line),
      this.color.cr_yellow
    );
    this.yellow_lines.computeLineDistances();

    this.red_line1.push(new THREE.Vector2(this.depth, 0));
    this.red_line1.push(new THREE.Vector2(this.depth, this.height));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.red_line2.push(new THREE.Vector2(0, this.height));
    this.red_line2.push(new THREE.Vector2(0, this.height + this.flap / 2));
    this.red_line2.push(
      new THREE.Vector2(this.flap / 2, this.height + this.flap / 2)
    );
    this.red_line2.push(
      new THREE.Vector2(this.flap / 2, this.height + (this.flap / 2) * 2)
    );
    this.red_line2.push(
      new THREE.Vector2(
        this.depth - this.flap / 2,
        this.height + (this.flap / 2) * 2
      )
    );
    this.red_line2.push(
      new THREE.Vector2(this.depth - this.flap / 2, this.height + this.flap / 2)
    );
    this.red_line2.push(
      new THREE.Vector2(this.depth, this.height + this.flap / 2)
    );
    this.red_line2.push(new THREE.Vector2(this.depth, this.height));
    this.red_lines2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line2),
      this.color.cr_red
    );

    this.scene.add(
      this.red_lines,
      this.yellow_lines,
      this.red_lines1,
      this.red_lines2
    );

    return this.scene;
  }

  planeC() {
    this.scene = new THREE.Scene();
    this.green_line = [];
    this.red_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.flap));
    this.red_line.push(new THREE.Vector2(this.depth, this.flap));
    this.red_line.push(new THREE.Vector2(this.depth, 0));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.scene.add(this.red_lines);

    return this.scene;
  }
}

export const bentoBoxes = (A, B, C, F, P, G, GSlope, unit) => {
  let L = ((B / 100) * 85) | 0,
    p_slope = 5;

  let colors = {
    cr_green: new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    }),
    cr_red: new THREE.LineBasicMaterial({
      color: '#FF0B00',
      side: THREE.DoubleSide,
    }),
    cr_gray: new THREE.LineBasicMaterial({
      color: '#d3cfcf',
      side: THREE.DoubleSide,
    }),
    cr_lays: new THREE.LineBasicMaterial({
      color: '#91d1ff',
      side: THREE.DoubleSide,
    }),
    cr_black: new THREE.LineBasicMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
    }),
    cr_yellow: new THREE.LineDashedMaterial({
      color: '#fed049',
      dashSize: 3,
      gapSize: 2,
    }),
  };

  const scene = new THREE.Scene();
  const parts = new PARTS(A, B, C, L, G, GSlope, P, p_slope, F, colors);
  const side_a1 = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeA1();
  const side_a2 = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeA2();
  const side_b1 = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeB1();
  const side_b2 = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeB2();
  const side_ab1 = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeAB();

  const side_c = new main_box(
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    p_slope,
    F,
    colors
  ).planeC();

  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 };

  const sideA = new THREE.Object3D();
  sideA.position.set(G, 0, 0);
  sideA.add(side_a1);

  const sideB = new THREE.Object3D();
  sideB.position.set(G + B, 0, 0);
  sideB.add(side_b1);

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(G + C + B, 0, 0);
  sideA1.add(side_a1.clone());

  const sideB1 = new THREE.Object3D();
  sideB1.position.set(G + C + B + B, 0, 0);
  sideB1.add(side_b2);

  const sideC = new THREE.Object3D();
  sideC.position.set(G + B + C, C + A, 0);
  sideC.add(side_c);

  const sideC1 = new THREE.Object3D();
  sideC1.position.set(G + B + C, -C, 0);
  sideC1.rotation.x = Math.PI;
  sideC1.add(side_c.clone());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(0, 0, 0);
  glue_lid.add(parts.glue3());

  const flap_right = new THREE.Object3D();
  flap_right.position.set(G + B, A, 0);
  flap_right.add(parts.flap22());

  const flap_left = new THREE.Object3D();
  flap_left.position.set(G + B + C + B + C, A, 0);
  flap_left.add(parts.flap22().clone());
  flap_left.rotation.y = Math.PI;

  const flap_left1 = new THREE.Object3D();
  flap_left1.position.set(G + B + C + B + C, 0, 0);
  flap_left1.add(parts.flap22().clone());
  flap_left1.rotation.z = Math.PI;

  const flap_right1 = new THREE.Object3D();
  flap_right1.position.set(G + B, 0, 0);
  flap_right1.add(parts.flap22().clone());
  flap_right1.rotation.x = Math.PI;

  const flap_C = new THREE.Object3D();
  flap_C.position.set(G + B + C, A, 0);
  flap_C.add(parts.flap222());

  const flap_C1 = new THREE.Object3D();
  flap_C1.position.set(G + B + C, 0, 0);
  flap_C1.add(parts.flap222().clone());
  flap_C1.rotation.x = Math.PI;

  //! Start line marker.
  const geometry = new THREE.PlaneBufferGeometry(A / 10, A / 10);
  const loader = new THREE.TextureLoader();

  const meshA = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/a.png') }) //pic A
  );
  const meshB = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/b.png') }) //pic B
  );
  const meshC = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/c.png') }) //pic C
  );

  const lineMarkA = new THREE.Object3D();
  lineMarkA.position.set(A / 2 + C, C, 2);
  lineMarkA.add(meshA);

  const lineMarkA1 = new THREE.Object3D();
  lineMarkA1.position.set(A / 2, C, 2);
  lineMarkA1.add(meshA.clone());

  const lineMarkB = new THREE.Object3D();
  lineMarkB.position.set(0, C + B / 2, 2);
  lineMarkB.add(meshB);

  const lineMarkB1 = new THREE.Object3D();
  lineMarkB1.position.set(0, C * 2 + B + B / 2, 2);
  lineMarkB1.add(meshB.clone());

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set(C + A + C / 2, C + B / 3, 2);
  lineMarkC.add(meshC);

  //! End line marker.

  //! Start size lable.
  const lableA = new THREE.Object3D();
  lableA.position.set(A / 2 + C, C + 20, 2);

  const lableA1 = new THREE.Object3D();
  lableA1.position.set(A / 2, C + 20, 2);

  const lableB = new THREE.Object3D();
  lableB.position.set(C / 2, C + B / 2, 2);

  const lableB1 = new THREE.Object3D();
  lableB1.position.set(C / 2, C + B / 2 + B + C, 2);

  const lableC = new THREE.Object3D();
  lableC.position.set(C + A + C / 2, C + B / 2, 2);

  const lableD = new THREE.Object3D();
  lableD.position.set(-(C + F + 50), A / 2 - F, 2);

  const lableE = new THREE.Object3D();
  lableE.position.set(A / 2 + C, C + B + C + F + C + 50, 2);

  const lableF = new THREE.Object3D();
  lableF.position.set(A / 2, B + C + B + C + G + 50, 2);

  const lableG = new THREE.Object3D();
  lableG.position.set(A + 50, (B + B + C + C + G) / 2, 2);

  const loaderTextA = new THREE.FontLoader();
  const loaderTextB = new THREE.FontLoader();
  const loaderTextC = new THREE.FontLoader();
  const loaderTextD = new THREE.FontLoader();
  const loaderTextE = new THREE.FontLoader();
  const loaderTextF = new THREE.FontLoader();
  const loaderTextG = new THREE.FontLoader();

  //? - - - Start load text A. - - -
  loaderTextA.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? (A / defaultUnit[unit]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
        : (A / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 4);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableA.add(text);
    lableA1.add(text.clone());
  });
  //? End load text A.

  //? - - - Start load text B. - - -
  loaderTextB.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? (B / defaultUnit[unit]).toFixed(2)
        : (B / defaultUnit[unit]).toFixed(1)
    } ${unit}.`;
    const shapes = font.generateShapes(message, 4);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableB.add(text);
    lableB.rotation.z = Math.PI / 2;
    lableB1.add(text.clone());
    lableB1.rotation.z = Math.PI / 2;
    lableB1.rotation.x = Math.PI;
    lableB1.rotation.y = Math.PI;
  });
  /* #endregion */
  //? End load text B.

  //? - - - Start load text C. - - -
  /* #region text C. */
  loaderTextC.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? (C / defaultUnit[unit]).toFixed(2)
        : (C / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 4);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableC.add(text);
  });
  /* #endregion */
  //? End load text C.

  //? - - - Start load text height. - - -
  /* #region text D */
  loaderTextD.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? ((B * 2 + P * 2 + C) / defaultUnit[unit]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
        : ((B * 2 + P * 2 + C) / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 8);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableD.add(text);
    lableD.rotation.z = Math.PI / 2;
  });
  /* #endregion */
  //? End load text D.

  //? - - - Start load text width. - - -
  loaderTextE.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? ((A * 2 + B * 2 + G) / defaultUnit[unit]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
        : ((A * 2 + B * 2 + G) / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 8);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableE.add(text);
  });
  //? End load text E.

  //? - - - Start load text F. - - -
  loaderTextF.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? (A / defaultUnit[unit]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
        : (A / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 8);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableF.add(text);
  });
  //? End load text F.

  //? - - - Start load text width. - - -
  loaderTextG.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'inch'
        ? ((C * 2 + B * 2 + G) / defaultUnit[unit]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
        : ((C * 2 + B * 2 + G) / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 8);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableG.add(text);
    lableG.rotation.z = Math.PI / 2;
    lableG.rotation.x = Math.PI;
    lableG.rotation.y = Math.PI;
  });
  //? End load text G.

  //* End size lable.

  //! Start arrow size.

  //! Start arrow lable.
  /* #region arrow lable. */
  //* arrow size.
  const arrow_left = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(4, 2);
    arrowHead.lineTo(4, -2);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrow_line = [];
    arrow_line.push(new THREE.Vector3(4, 0));
    arrow_line.push(new THREE.Vector3(size, 0));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_line),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrow_mesh);
    return scene;
  };

  const arrow_right = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(-4, 2);
    arrowHead.lineTo(-4, -2);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrow_line = [];
    arrow_line.push(new THREE.Vector3(-4, 0));
    arrow_line.push(new THREE.Vector3(-size, 0));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_line),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrow_mesh);
    return scene;
  };

  const arrow_top = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(2, -4);
    arrowHead.lineTo(-2, -4);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrow_line = [];
    arrow_line.push(new THREE.Vector3(0, -4));
    arrow_line.push(new THREE.Vector3(0, -size));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_line),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrow_mesh);
    return scene;
  };

  const arrow_down = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(2, 4);
    arrowHead.lineTo(-2, 4);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrow_line = [];
    arrow_line.push(new THREE.Vector3(0, 4));
    arrow_line.push(new THREE.Vector3(0, size));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_line),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrow_mesh);
    return scene;
  };

  const arrow_c = (size) => {
    const scene = new THREE.Scene();

    const arrow_line = [];
    arrow_line.push(new THREE.Vector3(0, 0));
    arrow_line.push(new THREE.Vector3(-size, 0));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_line),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(arrow_mesh);
    return scene;
  };

  const arrow_e = (size) => {
    const scene = new THREE.Scene();

    const arrow_linee = []; //* เส้นตรงส่วนหัวของลูกศร D
    arrow_linee.push(new THREE.Vector3(0, 0));
    arrow_linee.push(new THREE.Vector3(0, -size));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_linee),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(arrow_mesh);
    return scene;
  };

  const arrow_d = (size) => {
    const scene = new THREE.Scene();

    const arrow_lineD = [];
    arrow_lineD.push(new THREE.Vector3(0, 0));
    arrow_lineD.push(new THREE.Vector3(size, 0));
    const arrow_mesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrow_lineD),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(arrow_mesh);
    return scene;
  };

  const a_arrow_l = new THREE.Object3D(); //! A
  a_arrow_l.position.set(C, C + B / 6, 2);
  a_arrow_l.add(arrow_left(A / 2));

  const a_arrow_r = new THREE.Object3D(); //! A
  a_arrow_r.position.set(C + A, C + B / 6, 2);
  a_arrow_r.add(arrow_right(A / 2));

  const a_arrow_l1 = new THREE.Object3D(); //! A1
  a_arrow_l1.position.set(0, C + B / 6, 2);
  a_arrow_l1.add(arrow_left(A / 2).clone());

  const a_arrow_r1 = new THREE.Object3D(); //! A1
  a_arrow_r1.position.set(A, C + B / 6, 2);
  a_arrow_r1.add(arrow_right(A / 2).clone());

  const b_arrow_l = new THREE.Object3D(); //! B
  b_arrow_l.position.set(C / 2 + 10, C + B, 2);
  b_arrow_l.add(arrow_top(B / 2).clone());

  const b_arrow_r = new THREE.Object3D(); //! B
  b_arrow_r.position.set(C / 2 + 10, C, 2);
  b_arrow_r.add(arrow_down(B / 2).clone());

  const b_arrow_l1 = new THREE.Object3D(); //! B1
  b_arrow_l1.position.set(B / 8, C + B + C + B, 2);
  b_arrow_l1.add(arrow_top(B / 2).clone());

  const b_arrow_r1 = new THREE.Object3D(); //! B1
  b_arrow_r1.position.set(B / 8, C + B + C, 2);
  b_arrow_r1.add(arrow_down(B / 2).clone());

  const c_arrow_t = new THREE.Object3D(); //! C
  c_arrow_t.position.set(C + A + C, C + B / 2 + 10, 2);
  c_arrow_t.add(arrow_right(C / 2).clone());

  const c_arrow_d = new THREE.Object3D(); //! C
  c_arrow_d.position.set(C + A, C + B / 2 + 10, 2);
  c_arrow_d.add(arrow_left(C / 2).clone());

  const d_arrow_t = new THREE.Object3D(); //! D
  d_arrow_t.position.set(-(C + F + 45), C + B + C + F + C, 2);
  d_arrow_t.add(arrow_top(B + C + P / 2), arrow_d(10));

  const d_arrow_d = new THREE.Object3D(); //! D
  d_arrow_d.position.set(-(C + F + 45), -(C + F), 2);
  d_arrow_d.add(arrow_down(B + C + P / 2), arrow_d(10).clone());

  const e_arrow_el = new THREE.Object3D(); //! E
  e_arrow_el.position.set(-(C + F), C + B + C + C + F + 45, 2);
  e_arrow_el.add(arrow_left(F + C + A), arrow_e(10));

  const e_arrow_er = new THREE.Object3D(); //! E
  e_arrow_er.position.set(F + C * 3 + A, C + B + C + C + F + 45, 2);
  e_arrow_er.add(arrow_right(F + C + A).clone(), arrow_e(10).clone());

  const f_arrow_el = new THREE.Object3D(); //! F
  f_arrow_el.position.set(0, C + C + B + B + G + 45, 2);
  f_arrow_el.add(arrow_left(A / 2), arrow_e(10));

  const f_arrow_er = new THREE.Object3D(); //! F
  f_arrow_er.position.set(A, C + C + B + B + G + 45, 2);
  f_arrow_er.add(arrow_right(A / 2).clone(), arrow_e(10).clone());

  const g_arrow_t = new THREE.Object3D(); //! G
  g_arrow_t.position.set(A + 45, C + C + B + B + G, 2);
  g_arrow_t.add(arrow_top(B + C + P / 2), arrow_c(10));

  const g_arrow_d = new THREE.Object3D(); //! G
  g_arrow_d.position.set(A + 45, 0, 2);
  g_arrow_d.add(arrow_down(B + C + P / 2), arrow_c(10).clone());

  //! End arrow size.

  //* Group *//

  const groupboxes1 = new THREE.Object3D();
  groupboxes1.position.set(C + F, C + F, 0);
  groupboxes1.add(
    sideA,
    sideB1,
    sideB,
    sideA1,
    glue_lid,
    flap_right,
    flap_left,
    flap_left1,
    flap_right1,
    flap_C,
    flap_C1,
    sideC,
    sideC1

    // lineMarkA,
    // lineMarkB,
    // lineMarkC,

    // lableA,
    // lableB,
    // lableC,
    // lableD,
    // lableE,

    // a_arrow_l,
    // a_arrow_r,
    // b_arrow_l,
    // b_arrow_r,
    // c_arrow_t,
    // c_arrow_d,
    // d_arrow_t,
    // d_arrow_d,
    // e_arrow_el,
    // e_arrow_er
  );

  const geometryBoxGroup = new THREE.Object3D();
  geometryBoxGroup.position.set(
    -(F + C + C + A + C + C + F + 50 + A) / 2,
    -(F + C + C + B + C + C + F + G) / 2,
    0
  );
  geometryBoxGroup.add(groupboxes1);

  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(0, 0, 0);
  scene.add(PositionCenter);
  PositionCenter.add(geometryBoxGroup);

  return scene;
};
