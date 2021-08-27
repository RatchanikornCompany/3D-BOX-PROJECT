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
    this.red_line.push(new THREE.Vector2(0, 0));
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line);
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red);

    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    );
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green);
    this.green_lines.computeLineDistances();

    this.scene.add(this.green_lines);

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

    this.green_line.push(new THREE.Vector2(this.width, this.height));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(this.width, 0));
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

export const specialBoxes = (A, B, C, F, P, G, GSlope, unit) => {
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
  const falp_long = ((A / 100) * 34) | 0;
  const coverbottom_long = ((B / 100) * 67) | 0;
  const set_bottom =
    falp_long > coverbottom_long ? falp_long : coverbottom_long;

  //! model [group]
  const sideB1 = new THREE.Object3D();
  sideB1.position.set(G + A, 0, 0);
  sideB1.add(side_b1);

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(G + A * 2 + B, 0, 0);
  sideB2.add(side_b2);

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(G, 0, 0);
  sideA1.add(side_a1);

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(G + B + A, 0, 0);
  sideA2.add(side_a2);

  const cover_handle = new THREE.Object3D();
  cover_handle.position.set(G, C, 0);
  cover_handle.add(parts.handle());

  const cover_top = new THREE.Object3D();
  cover_top.position.set(G, C + (B / 100) * 40, 0);
  cover_top.add(parts.handle_lock());

  const cover_topright = new THREE.Object3D();
  cover_topright.position.set(G + A + B, C + (B / 100) * 40, 0);
  cover_topright.add(parts.handle_lock());

  const cover_toprighthandle = new THREE.Object3D();
  cover_toprighthandle.position.set(G + A + B, C, 0);
  cover_toprighthandle.add(parts.handle());

  const cover_down = new THREE.Object3D();
  cover_down.position.set(G + A + B, 0, 0);
  cover_down.add(parts.cover_lock());

  const cover_down_right = new THREE.Object3D();
  cover_down_right.position.set(G + A + B + A + B, 0, 0);
  cover_down_right.rotation.y = Math.PI;
  cover_down_right.add(parts.coverlock().clone());

  const cover_down_left1 = new THREE.Object3D();
  cover_down_left1.position.set(G + A, 0, 0);
  cover_down_left1.add(parts.coverlock());

  const cover_down_left = new THREE.Object3D();
  cover_down_left.position.set(G, 0, 0);
  cover_down_left.add(parts.cover8());

  const flap_left = new THREE.Object3D();
  flap_left.rotation.y = Math.PI;
  flap_left.position.set(G + B + A, C, 0);
  flap_left.add(parts.flap_lock());

  const flap_right = new THREE.Object3D(); //? ที่ทำใหม่
  flap_right.position.set(G + B + A * 2, C, 0);
  flap_right.add(parts.flap_lock());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(0, 0, 0);
  glue_lid.add(parts.glue1());

  //! Start line marker.
  const geometry = new THREE.PlaneBufferGeometry(A / 7, A / 7);
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

  const lineMarkA = new THREE.Object3D();
  lineMarkA.position.set(G + A / 2, 0, 2);
  lineMarkA.add(meshA);

  const lineMarkB = new THREE.Object3D();
  lineMarkB.position.set(G + A + B / 2, 0, 2);
  lineMarkB.add(meshB);

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set(G + A + B + A, C / 3, 2);
  lineMarkC.add(meshC);

  //! End line marker.

  //! Start size lable.
  const lableA = new THREE.Object3D();
  lableA.position.set(G + A / 2, C / 2, 2);

  const lableA2 = new THREE.Object3D();
  lableA2.position.set(G + A + B + A / 2, C / 2, 2);

  const lableB = new THREE.Object3D();
  lableB.position.set(G + A + B / 2, C / 2, 2);

  const lableB2 = new THREE.Object3D();
  lableB2.position.set(G + B + A * 2 + B / 2, C / 2, 2);

  const lableC = new THREE.Object3D();
  lableC.position.set(G + A * 2 + B * 2 + 15, C / 2, 2);

  const lableD = new THREE.Object3D();
  lableD.position.set(-G + -5, (C + (B / 100) * 40) / 2, 2);

  const lableE = new THREE.Object3D();
  lableE.position.set(
    (A + A + B + B) / 2,
    20 + C + (B / 100) * 40 + (F / 100) * 100,
    2
  );

  const loaderTextA = new THREE.FontLoader();
  const loaderTextB = new THREE.FontLoader();
  const loaderTextC = new THREE.FontLoader();
  const loaderTextD = new THREE.FontLoader();
  const loaderTextE = new THREE.FontLoader();

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
  });

  //*end load text A.

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

  //! End size lable.

  //! Start arrow size.
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
  const a_arrow_l = new THREE.Object3D();
  a_arrow_l.position.set(G, C / 2, 2);
  a_arrow_l.add(arrow_left(A / 3));

  const a_arrow_l2 = new THREE.Object3D();
  a_arrow_l2.position.set(G + A + B, C / 2, 2);
  a_arrow_l2.add(arrow_left(A / 3).clone());

  const a_arrow_r = new THREE.Object3D();
  a_arrow_r.position.set(G + A, C / 2, 2);
  a_arrow_r.add(arrow_right(A / 3));

  const a_arrow_r2 = new THREE.Object3D();
  a_arrow_r2.position.set(G + A * 2 + B, C / 2, 2);
  a_arrow_r2.add(arrow_right(A / 3));

  const b_arrow_l = new THREE.Object3D();
  b_arrow_l.position.set(G + A, C / 2, 2);
  b_arrow_l.add(arrow_left(B / 3).clone());

  const b_arrow_l2 = new THREE.Object3D();
  b_arrow_l2.position.set(G + A * 2 + B, C / 2, 2);
  b_arrow_l2.add(arrow_left(B / 3).clone());

  const b_arrow_r = new THREE.Object3D();
  b_arrow_r.position.set(G + A + B, C / 2, 2);
  b_arrow_r.add(arrow_right(B / 3).clone());

  const b_arrow_r2 = new THREE.Object3D();
  b_arrow_r2.position.set(G + A * 2 + B * 2, C / 2, 2);
  b_arrow_r2.add(arrow_right(B / 3).clone());

  const c_arrow_t = new THREE.Object3D();
  c_arrow_t.position.set(G + A * 2 + B * 2 + 15, C, 2);
  c_arrow_t.add(arrow_top(C / 3), arrow_c(15));

  const c_arrow_d = new THREE.Object3D();
  c_arrow_d.position.set(G + A * 2 + B * 2 + 15, 0, 2);
  c_arrow_d.add(arrow_down(C / 3), arrow_c(15).clone());

  const d_arrow_t = new THREE.Object3D(); //!height
  d_arrow_t.position.set(-G, C + (B / 100) * 40 + (F / 100) * 100, 2);
  d_arrow_t.add(arrow_top(B + C / 2), arrow_d(10));

  const d_arrow_d = new THREE.Object3D(); //!height
  d_arrow_d.position.set(-G, -set_bottom, 2);
  d_arrow_d.add(arrow_down(set_bottom + C), arrow_d(10).clone());

  const e_arrow_el = new THREE.Object3D(); //! width
  e_arrow_el.position.set(0, C + (B / 100) * 40 + (F / 100) * 100 + 15, 2);
  e_arrow_el.add(arrow_left(G + A + B), arrow_e(10));

  const e_arrow_er = new THREE.Object3D(); //! width
  e_arrow_er.position.set(
    G + A * 2 + B * 2,
    C + (B / 100) * 40 + (F / 100) * 100 + 15,
    2
  );
  e_arrow_er.add(arrow_right(G + A + B).clone(), arrow_e(10).clone());

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
    cover_handle,
    cover_topright,
    cover_toprighthandle,
    flap_left,
    flap_right,
    glue_lid,

    lineMarkA,
    lineMarkB,
    lineMarkC,

    lableA,
    lableA2,
    lableB,
    lableB2,
    lableC,
    lableD,
    lableE,

    a_arrow_l,
    a_arrow_r,
    a_arrow_l2,
    a_arrow_r2,
    b_arrow_l,
    b_arrow_r,
    b_arrow_l2,
    b_arrow_r2,
    c_arrow_t,
    c_arrow_d,
    d_arrow_t,
    d_arrow_d,
    e_arrow_el,
    e_arrow_er
  );
  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(
    -(G + A + B + A + B) / 2,
    -(C + (B / 100) * 34) / 2,
    0
  );

  scene.add(PositionCenter);
  PositionCenter.add(grid_all);

  return scene;
};
