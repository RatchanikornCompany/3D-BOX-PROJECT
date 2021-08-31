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

    this.green_line.push(new THREE.Vector2(this.width, 0));
    this.green_line.push(new THREE.Vector2(0, 0));
    this.green_line.push(new THREE.Vector2(0, this.height));
    this.green_line.push(new THREE.Vector2(this.width, this.height));
    //this.green_line.push(new THREE.Vector2(0, 0));
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

    this.scene.add(this.green_lines, this.red_lines);

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

export const snapLockBoxesLay = (A, B, C, G, GSlope, P, F) => {
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

  const falp_long = ((A / 100) * 58) | 0;
  const coverbottom_long = ((B / 100) * 85) | 0;
  const set_bottom =
    falp_long > coverbottom_long ? falp_long : coverbottom_long;

  const sideB1 = new THREE.Object3D();
  sideB1.position.set(G + A, set_bottom, 0);
  sideB1.add(side_b1, parts.planeBGeomety());

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(G + A + B + A, set_bottom, 0);
  sideB2.add(side_b2, parts.planeBGeomety());

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(G, set_bottom, 0);
  sideA1.add(side_a1, parts.planeAGeomety());

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(G + B + A, set_bottom, 0);
  sideA2.add(side_a2, parts.planeAGeomety());

  const cover_top = new THREE.Object3D();
  cover_top.position.set(G, set_bottom + C, 0);
  cover_top.add(parts.cover1(), parts.coverGeomety2());

  const cover_down = new THREE.Object3D();
  cover_down.position.set(G + A + B, set_bottom, 0);
  cover_down.add(parts.cover4(), parts.coverGeomety4());

  const flap_left = new THREE.Object3D();
  flap_left.rotation.y = Math.PI;
  flap_left.position.set(G + B + A, set_bottom + C, 0);
  flap_left.add(parts.flap4(), parts.flapGeomety4_Invert());

  const flap_right = new THREE.Object3D();
  flap_right.position.set(G + B + A * 2, set_bottom + C, 0);
  flap_right.add(parts.flap4(), parts.flapGeomety4());

  const cover_down_left = new THREE.Object3D();
  cover_down_left.position.set(G, set_bottom, 0);
  cover_down_left.add(parts.cover6(), parts.coverGeomety6());

  const cover_down_right = new THREE.Object3D();
  cover_down_right.position.set(G + A + B + A, set_bottom, 0);
  cover_down_right.add(parts.cover5(), parts.coverGeomety5());

  const cover_down_left1 = new THREE.Object3D();
  cover_down_left1.position.set(G + A + B, set_bottom, 0);
  cover_down_left1.rotation.y = Math.PI;
  cover_down_left1.add(parts.cover5().clone(), parts.coverGeomety5_Invert());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(0, set_bottom, 0);
  glue_lid.add(parts.glue1(), parts.glueGeomety1());

  const grid_all = new THREE.Object3D();
  grid_all.position.set(0, 0, 0);
  scene.add(grid_all);
  grid_all.add(
    sideA1,
    sideA2,
    sideB1,
    sideB2,
    cover_top,
    cover_down,
    flap_left,
    cover_down_right,
    flap_right,
    cover_down_left1,
    cover_down_left,
    glue_lid
  );

  return scene;
};
