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

    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(this.width, this.height));
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line);
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red);

    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    // this.green_line.push(new THREE.Vector2(this.width, this.height));
    //this.green_line.push(new THREE.Vector2(0, 0));
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

    this.red_line.push(new THREE.Vector2(0, this.height));
    this.red_line.push(new THREE.Vector2(this.width, this.height));

    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    );

    //  this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
    //this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    );
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines);

    return this.scene;
  }

  planeB1() {
    this.scene = new THREE.Scene();
    this.green_line = [];

    this.green_line.push(new THREE.Vector2(this.depth, 0));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.depth, this.height));
    //this.green_line.push(new THREE.Vector2(this.depth, 0));
    //  this.green_line.push(new THREE.Vector2(0, 0));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines);

    return this.scene;
  }

  planeB2() {
    this.scene = new THREE.Scene();
    this.red_line = [];
    this.green_line = [];

    this.red_line.push(new THREE.Vector2(this.depth, this.height));
    this.red_line.push(new THREE.Vector2(this.depth, 0));
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line);
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red);

    this.green_line.push(new THREE.Vector2(this.depth, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.depth, 0));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines, this.red_lines);

    return this.scene;
  }
}

export const snapLockBoxesCover = (A, B, C, F, P, G, GSlope, unit) => {
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
  const falp_long = ((A / 100) * 58) | 0;
  const coverbottom_long = ((B / 100) * 85) | 0;
  const set_bottom =
    falp_long > coverbottom_long ? falp_long : coverbottom_long;

  //! model [group]
  /* #region model [group]  */
  const sideB1 = new THREE.Object3D();
  sideB1.position.set(G + A, set_bottom, 0);
  sideB1.add(side_b1);

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(G + A + B + A, set_bottom, 0);
  sideB2.add(side_b2);

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(G, set_bottom, 0);
  sideA1.add(side_a1);

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(G + B + A, set_bottom, 0);
  sideA2.add(side_a2);

  const cover_top = new THREE.Object3D();
  cover_top.position.set(G + A + B, set_bottom + C, 0);
  cover_top.add(parts.cover1());

  const cover_down = new THREE.Object3D();
  cover_down.position.set(G + A + B, set_bottom, 0);
  cover_down.add(parts.cover4());

  const cover_down_right = new THREE.Object3D();
  cover_down_right.position.set(G + A + B + A, set_bottom, 0);
  cover_down_right.add(parts.cover5());

  const cover_down_left1 = new THREE.Object3D();
  cover_down_left1.position.set(G + A + B, set_bottom, 0);
  cover_down_left1.rotation.y = Math.PI;
  cover_down_left1.add(parts.cover5().clone());

  const cover_down_left = new THREE.Object3D();
  cover_down_left.position.set(G, set_bottom, 0);
  cover_down_left.add(parts.cover6());

  const flap_left = new THREE.Object3D();
  flap_left.position.set(G + A, set_bottom + C, 0);
  flap_left.add(parts.flap4());

  const flap_right = new THREE.Object3D(); //? ที่ทำใหม่
  flap_right.position.set(G + B + A * 2 + B, set_bottom + C, 0);
  flap_right.rotation.y = Math.PI;

  flap_right.add(parts.flap4());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(0, set_bottom, 0);
  glue_lid.add(parts.glue1());

  /* #endregion */

  //! Start line marker.
  /* #region line marker */
  const geometry = new THREE.PlaneBufferGeometry(A / 6, A / 6);
  const loader = new THREE.TextureLoader();

  const meshA = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/a.png') })
  );
  const meshB = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/b.png') })
  );
  const meshC = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/c.png') })
  );
  const meshF = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/f.png') })
  );
  const meshP = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./image/p.png') })
  );

  /* #region linemarker */
  const lineMarkA = new THREE.Object3D();
  lineMarkA.position.set(G + A / 2, set_bottom, 2);
  lineMarkA.add(meshA);

  const lineMarkB = new THREE.Object3D();
  lineMarkB.position.set(G + A + B / 2, set_bottom, 2);
  lineMarkB.add(meshB);

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set(G + B + A * 2, set_bottom + C / 3, 2);
  lineMarkC.add(meshC);

  const lineMarkF = new THREE.Object3D();
  lineMarkF.position.set(B / 2 + G + A * 2 + B, set_bottom + C + P, 2);
  lineMarkF.add(meshF);

  const lineMarkP = new THREE.Object3D();
  lineMarkP.position.set(G + A / 2 + B + A, set_bottom + C + P + B, 2);
  lineMarkP.add(meshP);
  /* #endregion */
  /* #endregion */
  //! End line marker.

  //! Start size lable.
  /* #region size lable  */
  /* #region  lable */
  const lableA = new THREE.Object3D();
  lableA.position.set(G + A / 2, set_bottom + C / 2, 2);

  const lableA2 = new THREE.Object3D();
  lableA2.position.set(G + A + B + A / 2, set_bottom + C / 2, 2);

  const lableB = new THREE.Object3D();
  lableB.position.set(G + A + B / 2, set_bottom + C / 2, 2);

  const lableB2 = new THREE.Object3D();
  lableB2.position.set(G + B + A * 2 + B / 2, set_bottom + C / 2, 2);

  const lableB3 = new THREE.Object3D();
  lableB3.position.set(G + A / 2 + B + A, B / 2 + C + set_bottom, 2);

  const lableC = new THREE.Object3D();
  lableC.position.set(G + A * 2 + B * 2 + 20, set_bottom + C / 2, 2);

  const lableD = new THREE.Object3D();
  lableD.position.set(-G + -5, set_bottom + C / 2, 2);

  const lableE = new THREE.Object3D();
  lableE.position.set(G + A + B, set_bottom + C + B + P + 20, 2);

  const loaderTextA = new THREE.FontLoader();
  const loaderTextB = new THREE.FontLoader();
  const loaderTextC = new THREE.FontLoader();
  const loaderTextD = new THREE.FontLoader();
  const loaderTextE = new THREE.FontLoader();
  /* #endregion */
  //? Start load text A.
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
        ? (A / defaultUnit[unit]).toFixed(2)
        : (A / defaultUnit[unit]).toFixed(1)
    } ${unit}.`;
    const shapes = font.generateShapes(message, 4);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableA.add(text);
    lableA2.add(text.clone());
  }); //*end load text A.

  //? Start load text B.
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
    lableB2.add(text.clone());
    lableB3.add(text.clone());
    // lableB4.add(text.clone());
  }); //*end load text B.

  //? Start load text C.
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
    } ${unit}.`;
    const shapes = font.generateShapes(message, 4);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableC.add(text);
  });
  //*end load text C.

  //? Start load text height.
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
        ? ((C + B + P + set_bottom) / defaultUnit[unit]).toFixed(2)
        : ((C + B + P + set_bottom) / defaultUnit[unit]).toFixed(1)
    } ${unit}.`;
    const shapes = font.generateShapes(message, 6);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableD.add(text);
    lableD.rotation.z = Math.PI / 2;
  });
  //*end load text D.

  //? Start load text width
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
        ? ((G + A * 2 + B * 2) / defaultUnit[unit]).toFixed(2)
        : ((G + A * 2 + B * 2) / defaultUnit[unit]).toFixed(1)
    } ${unit}.`;
    const shapes = font.generateShapes(message, 6);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    lableE.add(text);
  });
  //*end load text E.

  /* #endregion */
  //! End size lable.

  //! Start arrow size.
  /* #region arrow size  */
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
  /* #region  arrow */
  const a_arrow_l = new THREE.Object3D();
  a_arrow_l.position.set(G, set_bottom + C / 2, 2);
  a_arrow_l.add(arrow_left(A / 3));

  const a_arrow_l2 = new THREE.Object3D();
  a_arrow_l2.position.set(G + A + B, set_bottom + C / 2, 2);
  a_arrow_l2.add(arrow_left(A / 3).clone());

  const a_arrow_r = new THREE.Object3D();
  a_arrow_r.position.set(G + A, set_bottom + C / 2, 2);
  a_arrow_r.add(arrow_right(A / 3));

  const a_arrow_r2 = new THREE.Object3D();
  a_arrow_r2.position.set(G + A * 2 + B, set_bottom + C / 2, 2);
  a_arrow_r2.add(arrow_right(A / 3));

  const b_arrow_l = new THREE.Object3D();
  b_arrow_l.position.set(G + A, set_bottom + C / 2, 2);
  b_arrow_l.add(arrow_left(B / 3).clone());

  const b_arrow_l2 = new THREE.Object3D();
  b_arrow_l2.position.set(G + A * 2 + B, set_bottom + C / 2, 2);
  b_arrow_l2.add(arrow_left(B / 3).clone());

  const b_arrow_r = new THREE.Object3D();
  b_arrow_r.position.set(G + A + B, set_bottom + C / 2, 2);
  b_arrow_r.add(arrow_right(B / 3).clone());

  const b_arrow_r2 = new THREE.Object3D();
  b_arrow_r2.position.set(G + A * 2 + B * 2, set_bottom + C / 2, 2);
  b_arrow_r2.add(arrow_right(B / 3).clone());

  const b_arrow_t = new THREE.Object3D(); //P
  b_arrow_t.position.set(G + A / 2 + B + A, set_bottom + C + B, 2);
  b_arrow_t.add(arrow_top(B / 3));

  const b_arrow_d = new THREE.Object3D();
  b_arrow_d.position.set(G + A / 2 + B + A, set_bottom + C, 2); //P
  b_arrow_d.add(arrow_down(B / 3));

  const c_arrow_t = new THREE.Object3D();
  c_arrow_t.position.set(G + A * 2 + B * 2 + 20, set_bottom + C, 2);
  c_arrow_t.add(arrow_top(C / 3), arrow_c(20));

  const c_arrow_d = new THREE.Object3D();
  c_arrow_d.position.set(G + A * 2 + B * 2 + 20, set_bottom, 2);
  c_arrow_d.add(arrow_down(C / 2.5), arrow_c(20).clone());

  const d_arrow_t = new THREE.Object3D(); //!height
  d_arrow_t.position.set(-G, set_bottom + B + C + P, 2);
  d_arrow_t.add(arrow_top(B + C / 2 + P), arrow_d(10));

  const d_arrow_d = new THREE.Object3D(); //!height
  d_arrow_d.position.set(-G, 0, 2);
  d_arrow_d.add(arrow_down(B + C / 2 + P), arrow_d(10).clone());

  const e_arrow_el = new THREE.Object3D(); //! width
  e_arrow_el.position.set(0, set_bottom + C + B + P + 15, 2);
  e_arrow_el.add(arrow_left(A + G + B), arrow_e(10));

  const e_arrow_er = new THREE.Object3D(); //! width
  e_arrow_er.position.set(G + A + B + A + B, set_bottom + C + B + P + 15, 2);
  e_arrow_er.add(arrow_right(A + B).clone(), arrow_e(10).clone());

  /* #endregion */

  /* #endregion */
  //!End arrow size.

  const grid_all = new THREE.Object3D();
  grid_all.position.set(0, 0, 0);
  grid_all.add(
    sideA1,
    sideA2,
    sideB1,
    sideB2,
    cover_down,
    cover_down_right,
    cover_down_left,
    cover_down_left1,
    cover_top,
    flap_left,
    flap_right,
    glue_lid,

    lineMarkA,
    lineMarkB,
    lineMarkC,
    lineMarkF,
    lineMarkP,

    lableA,
    lableA2,
    lableB,
    lableB2,
    lableB3,
    lableC,
    lableD,
    lableE,

    a_arrow_l,
    a_arrow_l2,
    a_arrow_r,
    a_arrow_r2,
    b_arrow_l,
    b_arrow_l2,
    b_arrow_r,
    b_arrow_r2,
    b_arrow_t,
    b_arrow_d,
    c_arrow_t,
    c_arrow_d,
    d_arrow_t,
    d_arrow_d,
    e_arrow_el,
    e_arrow_er
  );
  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(
    -(G + A * 2 + B * 2) / 2,
    -(C + set_bottom + B + P) / 2,
    0
  );

  scene.add(PositionCenter);
  PositionCenter.add(grid_all);

  return scene;
};
