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

export const MainLays = (A, B, C, L, G, g_slope, P, p_slope, F, colors) => {
  const scene = new THREE.Scene();
  const parts = new PARTS(A, B, C, L, G, g_slope, P, p_slope, F, colors);
  const side_a1 = new main_box(
    A,
    B,
    C,
    L,
    G,
    g_slope,
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
    g_slope,
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
    g_slope,
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
    g_slope,
    P,
    p_slope,
    F,
    colors
  ).planeB2();

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

  const grid_all = new THREE.Object3D();
  grid_all.position.set(0, P + B, 0);
  scene.add(grid_all);
  grid_all.add(
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
    glue_lid
  );

  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(
    -(G + A * 2 + B * 2) / 2,
    -((C + P * 2 + B * 2) / 2),
    0
  );

  scene.add(PositionCenter);
  PositionCenter.add(grid_all);

  return scene;
};
