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

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(this.width, 0));
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line);
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red);

    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines, this.red_lines);

    return this.scene;
  }

  planeA2() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(this.width, this.height));
    this.red_line.push(new THREE.Vector2(0, this.height));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.green_line = [];
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    // this.green_line.push(new THREE.Vector2(this.width, 0));

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines, this.red_lines);

    return this.scene;
  }

  planeB1() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(this.depth, this.height));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    this.green_line.push(new THREE.Vector2(this.depth, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.depth, 0));
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

    this.red_line.push(new THREE.Vector2(this.depth, 0));
    this.red_line.push(new THREE.Vector2(this.depth, this.height));
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line);
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red);

    // this.green_line.push(new THREE.Vector2(this.depth, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    // this.green_line.push(new THREE.Vector2(this.depth, 0));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.red_lines, this.green_lines);

    return this.scene;
  }
}

export const tuckEndBoxes = (A, B, C, F, P, G, GSlope, unit, Layout) => {
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

  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  const sideB1 = new THREE.Object3D();
  sideB1.position.set(G + A, 0, 0);
  sideB1.add(side_b1, parts.planeBGeomety());

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(G + A + B + A, 0, 0);
  sideB2.add(side_b2, parts.planeBGeomety());

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(G, 0, 0);
  sideA1.add(side_a1, parts.planeAGeomety());

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(G + A + B, 0, 0);
  sideA2.add(side_a2, parts.planeAGeomety());

  const cover_top = new THREE.Object3D();
  cover_top.position.set(G, C, 0);
  cover_top.add(parts.cover1(), parts.coverGeomety2());

  const cover_down = new THREE.Object3D();
  cover_down.rotation.z = Math.PI;
  cover_down.position.set(G + A * 2 + B, 0, 0);
  cover_down.add(parts.cover1(), parts.coverGeomety2());

  const flap_left = new THREE.Object3D(); //ลิ้นกันฝุ่นบนซ้าย
  flap_left.position.set(G + A + B, C, 0);
  flap_left.rotation.y = Math.PI;
  flap_left.add(parts.flap5(), parts.flapGeomety_invert());

  const flap_left_d = new THREE.Object3D();
  flap_left_d.position.set(G + A, 0, 0);
  flap_left_d.rotation.x = Math.PI;
  flap_left_d.add(parts.flap5(), parts.flapGeomety_invert());

  const flap_right = new THREE.Object3D();
  flap_right.position.set(G + A * 2 + B, C, 0);
  flap_right.add(parts.flap5(), parts.flapGeomety5());

  const flap_right_d = new THREE.Object3D();
  flap_right_d.rotation.x = Math.PI;
  flap_right_d.rotation.y = Math.PI;
  flap_right_d.position.set(G + A * 2 + B * 2, 0, 0);
  flap_right_d.add(parts.flap5(), parts.flapGeomety5());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(0, 0, 0);
  glue_lid.add(parts.glue1(), parts.glueGeomety1());

  //! Start line marker.
  /* #region image position. */
  const geometry = new THREE.PlaneBufferGeometry(A / 8, A / 8); //กล่องที่จะเอารูปมาใส่
  const loader = new THREE.TextureLoader();
  //* - - - image loader - - -
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
  const meshF = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/f.png') }) //pic F
  );

  const geometry1 = new THREE.PlaneBufferGeometry(A / 19, A / 4); //กล่องที่จะเอารูปมาใส่
  const loader1 = new THREE.TextureLoader();

  const meshBlue = new THREE.Mesh(
    geometry1.clone(),
    new THREE.MeshBasicMaterial({ map: loader1.load('./image/blue.png') }) //pic P
  );

  const meshYellow = new THREE.Mesh(
    geometry1.clone(),
    new THREE.MeshBasicMaterial({ map: loader1.load('./image/yellow.png') }) //pic P
  );

  const meshP = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/p.png') }) //pic P
  );

  //* - - - line marker - - -
  const lineMarkA = new THREE.Object3D(); //ตำแหน่ง pic A
  lineMarkA.position.set(G + A / 2, 0, 2);
  lineMarkA.add(meshA);

  const lineMarkB = new THREE.Object3D();
  lineMarkB.position.set(G + A + B / 2, 0, 2); //ตำแหน่ง pic B
  lineMarkB.add(meshB);

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set(G + B + A * 2, C / 4, 2); //ตำแหน่ง pic C
  lineMarkC.add(meshC);

  const lineMarkF = new THREE.Object3D();
  lineMarkF.position.set(G + A + B / 2, C + 10, 2); //ตำแหน่ง pic F
  lineMarkF.add(meshF);

  const lineMarkBlue = new THREE.Object3D();
  lineMarkBlue.position.set(G / 2, C / 2, 2); //ตำแหน่ง pic P
  lineMarkBlue.add(meshBlue);

  const lineMarkYellow = new THREE.Object3D();
  lineMarkYellow.position.set(G + A / 2, C + B + P / 2, 2); //ตำแหน่ง pic P
  lineMarkYellow.rotation.z = Math.PI / 2;
  lineMarkYellow.add(meshYellow);

  const lineMarkYellow1 = new THREE.Object3D();
  lineMarkYellow1.position.set(G + A + B + A / 2, -B + -P / 2, 2); //ตำแหน่ง pic P
  lineMarkYellow1.rotation.z = Math.PI / 2;
  lineMarkYellow1.add(meshYellow.clone());

  const lineMarkP = new THREE.Object3D();
  lineMarkP.position.set(G + A / 4, C + B + P / 2, 2); //ตำแหน่ง pic P
  lineMarkP.add(meshP);
  /* #endregion */
  //! End line marker.

  //! Start size lable.
  /* #region size lable. */
  //? - - - Position text ตำแหน่งของข้อความ - - -
  const lableA = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ A
  lableA.position.set(G + A / 2, C / 2, 2);

  const lableA2 = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ A2
  lableA2.position.set(G + A + B + A / 2, C / 2, 2);

  const lableB = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ B
  lableB.position.set(G + A + B / 2, C / 2, 2);

  const lableB2 = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ B2
  lableB2.position.set(G + B + A * 2 + B / 2, C / 2, 2);

  const lableB3 = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ P
  lableB3.position.set(G + A / 2, B / 2 + C, 2);

  const lableB4 = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ B4
  lableB4.position.set(G + A + B + A / 2, -B / 2, 2);

  const lableC = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ C
  lableC.position.set(G + A * 2 + B * 2 + 20, C / 2, 2);

  const lableD = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ D
  lableD.position.set(-G + -5, C / 2, 2);

  const lableE = new THREE.Object3D(); //ตำแหน่งขอความบอกขนาดของ E
  lableE.position.set(G + A + B, -B - P - 25, 2);

  const loaderTextA = new THREE.FontLoader();
  const loaderTextB = new THREE.FontLoader();
  const loaderTextC = new THREE.FontLoader();
  const loaderTextD = new THREE.FontLoader();
  const loaderTextE = new THREE.FontLoader();

  //? - - - Start load text A. - - -
  /* #region text A */
  loaderTextA.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'in'
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
    lableA2.add(text.clone());
  });
  /* #endregion */
  //? End load text A.

  //? - - - Start load text B. - - -
  /* #region text B */
  loaderTextB.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'in'
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
    lableB2.add(text.clone());
    lableB3.add(text.clone());
    lableB4.add(text.clone());
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
      unit === 'in'
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
    lableC.rotation.z = Math.PI / 2;
    lableC.rotation.y = Math.PI;
    lableC.rotation.x = Math.PI;
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
      unit === 'in'
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
  /* #region text E */
  loaderTextE.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'in'
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
  /* #endregion */
  //? End load text E.
  //* End size lable.
  /* #endregion */
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

  const a_arrow_l = new THREE.Object3D(); //! A Arrow Left
  a_arrow_l.position.set(G, C / 2 - 2, 2);
  a_arrow_l.add(arrow_left(A / 3));

  const a_arrow_l2 = new THREE.Object3D(); //! A Arrow Right
  a_arrow_l2.position.set(G + A + B, C / 2 - 2, 2);
  a_arrow_l2.add(arrow_left(A / 3).clone());

  const a_arrow_r = new THREE.Object3D();
  a_arrow_r.position.set(G + A, C / 2 - 2, 2); //! A Arrow Left
  a_arrow_r.add(arrow_right(A / 3));

  const a_arrow_r2 = new THREE.Object3D();
  a_arrow_r2.position.set(G + A * 2 + B, C / 2 - 2, 2); //! A Arrow Right
  a_arrow_r2.add(arrow_right(A / 3));

  const b_arrow_l = new THREE.Object3D(); //! B Arrow Left
  b_arrow_l.position.set(G + A, C / 2 - 2, 2);
  b_arrow_l.add(arrow_left(B / 3).clone());

  const b_arrow_l2 = new THREE.Object3D(); //! B Arrow Right
  b_arrow_l2.position.set(G + A * 2 + B, C / 2 - 2, 2);
  b_arrow_l2.add(arrow_left(B / 3).clone());

  const b_arrow_r = new THREE.Object3D(); //! B Arrow Left
  b_arrow_r.position.set(G + A + B, C / 2 - 2, 2);
  b_arrow_r.add(arrow_right(B / 3).clone());

  const b_arrow_r2 = new THREE.Object3D(); //! B Arrow Right
  b_arrow_r2.position.set(G + A * 2 + B * 2, C / 2 - 2, 2);
  b_arrow_r2.add(arrow_right(B / 3).clone());

  const b_arrow_t = new THREE.Object3D();
  b_arrow_t.position.set(A / 2 + G, C + B, 2); //! P Arrow Top
  b_arrow_t.add(arrow_top(B / 3));

  const b_arrow_d = new THREE.Object3D(); //! P Arrow Dr
  b_arrow_d.position.set(A / 2 + G, C, 2);
  b_arrow_d.add(arrow_down(B / 3));

  const b_arrow_t2 = new THREE.Object3D();
  b_arrow_t2.position.set(A + B + A / 2 + G, 0, 2); //!P Top
  b_arrow_t2.add(arrow_top(B / 3));

  const b_arrow_d2 = new THREE.Object3D(); //! P Dr
  b_arrow_d2.position.set(A + B + A / 2 + G, -B, 2);
  b_arrow_d2.add(arrow_down(B / 3));

  const c_arrow_t = new THREE.Object3D(); //! Arrow เส้นข้างขวา Top
  c_arrow_t.position.set(G + A * 2 + B * 2 + 15, C, 2);
  c_arrow_t.add(arrow_top(C / 2), arrow_c(10));

  const c_arrow_d = new THREE.Object3D(); //! Arrow เส้นข้างขวา Dr
  c_arrow_d.position.set(G + A * 2 + B * 2 + 15, 0, 2);
  c_arrow_d.add(arrow_down(C / 2), arrow_c(10).clone());

  const d_arrow_t = new THREE.Object3D(); //!
  d_arrow_t.position.set(-G, C + B + P, 2);
  d_arrow_t.add(arrow_top(B + C + P / 2), arrow_d(10));

  const d_arrow_d = new THREE.Object3D(); //!
  d_arrow_d.position.set(-G, -B + -P, 2);
  d_arrow_d.add(arrow_down(B + C + P / 2), arrow_d(10).clone());

  const e_arrow_el = new THREE.Object3D(); //! E Arrow Left
  e_arrow_el.position.set(G + A + B + A + B, -B - P - 15, 2);
  e_arrow_el.add(arrow_left(A + G + B), arrow_e(10));
  e_arrow_el.rotation.z = Math.PI;

  const e_arrow_er = new THREE.Object3D(); //! E Arrow Right
  e_arrow_er.position.set(0, -B - P - 15, 2);
  e_arrow_er.add(arrow_right(A + G + B).clone(), arrow_e(10).clone());
  e_arrow_er.rotation.z = Math.PI;

  /* #endregion */
  //! End arrow size.

  /* #region GroupAll */
  const geometryBoxGroup = new THREE.Object3D();
  geometryBoxGroup.position.set(0, P + B, 0);
  geometryBoxGroup.add(
    sideA1,
    sideA2,
    sideB1,
    sideB2,
    cover_top,
    cover_down,
    flap_left,
    flap_left_d,
    flap_right,
    flap_right_d,
    glue_lid,

    lineMarkA,
    lineMarkB,
    lineMarkC,
    lineMarkF,
    lineMarkP,
    lineMarkBlue,
    lineMarkYellow,
    lineMarkYellow1

    // lableA,
    // lableA2,
    // lableB,
    // lableB2,
    // lableB3,
    // lableB4,
    // lableC,
    // lableD,
    // lableE

    // a_arrow_l,
    // a_arrow_l2,
    // e_arrow_el,
    // e_arrow_er,
    // a_arrow_r,
    // a_arrow_r2,
    // b_arrow_l,
    // b_arrow_l2,
    // b_arrow_r,
    // b_arrow_r2,
    // b_arrow_t,
    // b_arrow_d,
    // b_arrow_t2,
    // b_arrow_d2,
    // c_arrow_t,
    // c_arrow_d,
    // d_arrow_t,
    // d_arrow_d
  );

  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(
    -(G + A * 2 + B * 2) / 2,
    -((C + P * 2 + B * 2) / 2),
    0
  );
  scene.add(PositionCenter);
  PositionCenter.add(geometryBoxGroup);

  return scene;
};
