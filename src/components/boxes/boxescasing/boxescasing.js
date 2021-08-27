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
    this.red_line = [];
    this.green_line = [];
    this.red_line1 = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.depth));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));

    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.red_line1.push(new THREE.Vector2(this.width, 0));
    this.red_line1.push(new THREE.Vector2(this.width, this.depth));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.scene.add(this.green_lines, this.red_lines, this.red_lines1);

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
    this.red_line = [];
    this.red_line1 = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.red_line1.push(new THREE.Vector2(this.width, 0));
    this.red_line1.push(new THREE.Vector2(this.width, this.height));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.red_lines, this.red_lines1, this.green_lines);

    return this.scene;
  }

  planeB2() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(this.width, 0));
    this.red_line.push(new THREE.Vector2(this.width, this.height));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.red_lines);

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
    this.green_line1 = [];
    this.green_line0 = [];
    this.red_line = [];
    this.red_line0 = [];
    this.red_line1 = [];
    this.red_line2 = [];
    this.red_line3 = [];

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(0, this.height + this.height));
    this.red_line.push(new THREE.Vector2(this.glue, this.height + this.height));
    this.red_line.push(new THREE.Vector2(this.glue, this.height + this.glue));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.red_line0.push(
      new THREE.Vector2(this.width - this.glue, this.height + this.glue)
    );
    this.red_line0.push(
      new THREE.Vector2(this.width - this.glue, this.height + this.height)
    );
    this.red_line0.push(
      new THREE.Vector2(this.width, this.height + this.height)
    );
    this.red_line0.push(new THREE.Vector2(this.width, this.height));
    this.red_lines0 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line0),
      this.color.cr_red
    );

    this.green_line0.push(
      new THREE.Vector2(this.glue, this.height + this.glue)
    );
    this.green_line0.push(
      new THREE.Vector2(this.width - this.glue, this.height + this.glue)
    );
    this.green_lines0 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line0),
      this.color.cr_green
    );
    this.green_lines0.computeLineDistances();

    this.red_line1.push(
      new THREE.Vector2(this.glue + 1, this.height + this.glue)
    );
    this.red_line1.push(
      new THREE.Vector2(this.glue + 1, this.height + this.glue + this.height)
    );
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.green_line1.push(
      new THREE.Vector2(this.glue + 1, this.height + this.glue + this.height)
    );
    this.green_line1.push(
      new THREE.Vector2(
        this.width - this.glue,
        this.height + this.glue + this.height
      )
    );
    this.green_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line1),
      this.color.cr_green
    );
    this.green_lines1.computeLineDistances();

    this.red_line2.push(
      new THREE.Vector2(
        this.width - this.glue - 1,
        this.height + this.glue + this.height
      )
    );
    this.red_line2.push(
      new THREE.Vector2(this.width - this.glue - 1, this.height + this.glue)
    );
    this.red_lines2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line2),
      this.color.cr_red
    );

    this.red_line3.push(
      new THREE.Vector2(this.glue + 1, this.height + this.glue + this.height)
    );
    this.red_line3.push(
      new THREE.Vector2(0, this.height + this.glue + this.height)
    );
    this.red_line3.push(
      new THREE.Vector2(0, this.height + this.glue + this.height + this.glue)
    );
    this.red_line3.push(
      new THREE.Vector2(
        this.width,
        this.height + this.glue + this.height + this.glue
      )
    );
    this.red_line3.push(
      new THREE.Vector2(this.width, this.height + this.glue + this.height)
    );
    this.red_line3.push(
      new THREE.Vector2(
        this.width - (this.glue + 1),
        this.height + this.glue + this.height
      )
    );
    this.red_lines3 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line3),
      this.color.cr_red
    );

    this.scene.add(
      this.green_lines,
      this.red_lines,
      this.red_lines1,
      this.red_lines2,
      this.green_lines1,
      this.red_lines0,
      this.green_lines0,
      this.red_lines3
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

  sideC() {
    this.scene = new THREE.Scene();
    this.red_line = [];

    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(this.height, 0));
    this.red_line.push(new THREE.Vector2(this.height, this.height));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.scene.add(this.red_lines);

    return this.scene;
  }

  side_trapezium() {
    this.scene = new THREE.Scene();
    this.green_line1 = [];
    this.red_line3 = [];
    this.red_line4 = [];

    this.green_line1.push(
      new THREE.Vector2(this.flap, this.height + this.flap)
    );
    this.green_line1.push(
      new THREE.Vector2(this.depth - this.flap, this.height + this.flap)
    );
    this.green_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line1),
      this.color.cr_green
    );
    this.green_lines1.computeLineDistances();
    this.red_line3.push(new THREE.Vector2(0, this.height));
    this.red_line3.push(new THREE.Vector2(this.flap, this.height + this.flap));
    this.red_lines3 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line3),
      this.color.cr_red
    );

    this.red_line4.push(
      new THREE.Vector2(this.depth - this.flap, this.height + this.flap)
    );
    this.red_line4.push(
      new THREE.Vector2(this.depth - this.flap + this.flap, this.height)
    );
    this.red_lines4 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line4),
      this.color.cr_red
    );

    this.scene.add(this.green_lines1, this.red_lines3, this.red_lines4);

    return this.scene;
  }

  sideOctagon() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.red_line1 = [];
    this.green_line1 = [];
    this.red_line3 = [];
    this.red_line4 = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(this.flap, 0));
    this.red_line.push(
      new THREE.Vector2(
        ((this.flap / 100) * 85) | 0,
        ((this.height / 100) * 8) | 0
      )
    );
    this.red_line.push(
      new THREE.Vector2(
        ((this.flap / 100) * 85) | 0,
        ((this.height / 100) * 94) | 0
      )
    );
    this.red_line.push(new THREE.Vector2(this.flap, this.height));
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.red_line1.push(new THREE.Vector2(this.depth - this.flap, 0));
    this.red_line1.push(
      new THREE.Vector2(
        this.depth - (((this.flap / 100) * 85) | 0),
        ((this.height / 100) * 8) | 0
      )
    );
    this.red_line1.push(
      new THREE.Vector2(
        this.depth - (((this.flap / 100) * 85) | 0),
        ((this.height / 100) * 94) | 0
      )
    );
    this.red_line1.push(new THREE.Vector2(this.depth - this.flap, this.height));
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(this.flap, this.height));
    this.green_line.push(
      new THREE.Vector2((this.depth - this.flap) | 0, this.height)
    );
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.red_line3.push(new THREE.Vector2(this.flap, this.height));
    this.red_line3.push(new THREE.Vector2(this.flap, this.height + this.flap));
    this.red_line3.push(
      new THREE.Vector2(this.depth - this.flap, this.height + this.flap)
    );
    this.red_line3.push(new THREE.Vector2(this.depth - this.flap, this.height));
    this.red_lines3 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line3),
      this.color.cr_red
    );

    this.scene.add(
      this.red_lines,
      this.green_lines,
      this.red_lines1,
      this.red_lines3
    );

    return this.scene;
  }
}

export const boxesCasing = (A, B, C, F, P, G, GSlope, unit) => {
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

  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 };

  const sideB1 = new THREE.Object3D();
  sideB1.position.set(0, B + C, 0);
  sideB1.add(side_b1);

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(0, 0, 0);
  sideB2.add(side_b2);

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(0, C + C + B, 0);
  sideA1.add(side_a1);

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(0, C, 0);
  sideA2.add(side_a2);

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(A, G + B + C + B + C, 0);
  glue_lid.rotation.x = Math.PI;
  glue_lid.rotation.z = Math.PI / 2;
  glue_lid.add(parts.glue3());

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

  const lineMarkA1 = new THREE.Object3D();
  lineMarkA1.position.set(A / 2, C + B, 2);
  lineMarkA1.add(meshA.clone());

  const lineMarkB1 = new THREE.Object3D();
  lineMarkB1.position.set(0, C * 2 + B + B / 2, 2);
  lineMarkB1.add(meshB.clone());

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set(0, C / 2, 2);
  lineMarkC.add(meshC);

  //! End line marker.

  //! Start size lable.

  const lableA1 = new THREE.Object3D();
  lableA1.position.set(A / 2, C + B / 2, 2);

  const lableB1 = new THREE.Object3D();
  lableB1.position.set(A / 2, C + B + C + B / 2, 2);

  const lableC1 = new THREE.Object3D();
  lableC1.position.set(A / 2, C / 2, 2);

  const lableF = new THREE.Object3D();
  lableF.position.set(A / 2, B + C + B + C + G + 50, 2);

  const lableG = new THREE.Object3D();
  lableG.position.set(A + 50, (B + B + C + C + G) / 2, 2);

  const loaderTextA = new THREE.FontLoader();
  const loaderTextB = new THREE.FontLoader();
  const loaderTextC = new THREE.FontLoader();
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
    lableA1.add(text.clone());
  });

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
    lableB1.add(text.clone());
  });
  //? End load text B.

  //? - - - Start load text C. - - -
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
    lableC1.add(text);
  });

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

  //! Start arrow lable.
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

  const a_arrow_l1 = new THREE.Object3D(); //! A1
  a_arrow_l1.position.set(0, C + B / 2, 2);
  a_arrow_l1.add(arrow_left(A / 3 + 5).clone());

  const a_arrow_r1 = new THREE.Object3D(); //! A1
  a_arrow_r1.position.set(A, C + B / 2, 2);
  a_arrow_r1.add(arrow_right(A / 3 + 5).clone());

  const b_arrow_l1 = new THREE.Object3D(); //! B1
  b_arrow_l1.position.set(A / 2, C + B + C + B, 2);
  b_arrow_l1.add(arrow_top(B / 3).clone());

  const b_arrow_r1 = new THREE.Object3D(); //! B1
  b_arrow_r1.position.set(A / 2, C + B + C, 2);
  b_arrow_r1.add(arrow_down(B / 3).clone());

  const c_arrow_t = new THREE.Object3D(); //! C
  c_arrow_t.position.set(A / 2, C, 2);
  c_arrow_t.add(arrow_top(C / 3).clone());

  const c_arrow_d = new THREE.Object3D(); //! C
  c_arrow_d.position.set(A / 2, 0, 2);
  c_arrow_d.add(arrow_down(C / 3).clone());

  const d_arrow_t = new THREE.Object3D(); //! D
  d_arrow_t.position.set(-(C + F + F + 45), C + F + C + A + C + F + C + F, 2);
  d_arrow_t.add(arrow_top(A + F + C + C), arrow_d(10));

  const d_arrow_d = new THREE.Object3D(); //! D
  d_arrow_d.position.set(-(C + F + F + 45), -F, 2);
  d_arrow_d.add(arrow_down(A + F + C + C), arrow_d(10).clone());

  const e_arrow_el = new THREE.Object3D(); //! E
  e_arrow_el.position.set(-(C + F), F * 3 + C * 4 + A + 45, 2);
  e_arrow_el.add(arrow_left(B + C + F + C + C), arrow_e(10));

  const e_arrow_er = new THREE.Object3D(); //! E
  e_arrow_er.position.set(B + F * 3 + C * 2, F * 3 + C * 4 + A + 45, 2);
  e_arrow_er.add(arrow_right(B + C + F + C + C).clone(), arrow_e(10).clone());

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

  const groupboxes = new THREE.Object3D();
  groupboxes.position.set(0, 0, 0);
  groupboxes.add(
    sideA1,
    sideB1,
    glue_lid,
    sideA2,
    sideB2,

    lineMarkA1,
    lineMarkB1,
    lineMarkC,

    lableA1,
    lableB1,
    lableC1,
    lableF,
    lableG,

    a_arrow_l1,
    a_arrow_r1,
    b_arrow_l1,
    b_arrow_r1,
    f_arrow_el,
    f_arrow_er,
    g_arrow_t,
    g_arrow_d,
    c_arrow_t,
    c_arrow_d
  );

  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(-(A / 2), -(C + B + C + B) / 2, 0);
  scene.add(PositionCenter);
  PositionCenter.add(groupboxes);

  return scene;
};
