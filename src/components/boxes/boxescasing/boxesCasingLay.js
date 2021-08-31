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

export const boxesCasingLay = (A, B, C, G, GSlope, P, F) => {
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

  const sideB1 = new THREE.Object3D();
  sideB1.position.set(0, B + C, 0);
  sideB1.add(side_b1, parts.planeB_SlideGeomety());

  const sideB2 = new THREE.Object3D();
  sideB2.position.set(0, 0, 0);
  sideB2.add(side_b2, parts.planeB_SlideGeomety().clone());

  const sideA1 = new THREE.Object3D();
  sideA1.position.set(0, C + C + B, 0);
  sideA1.add(side_a1, parts.planeA_SlideGeomety());

  const sideA2 = new THREE.Object3D();
  sideA2.position.set(0, C, 0);
  sideA2.add(side_a2, parts.planeA_SlideGeomety().clone());

  const glue_lid = new THREE.Object3D();
  glue_lid.position.set(A, G + B + C + B + C, 0);
  glue_lid.rotation.x = Math.PI;
  glue_lid.rotation.z = Math.PI / 2;
  glue_lid.add(parts.glue3(), parts.glueGeomety3());

  const groupboxes = new THREE.Object3D();
  groupboxes.position.set(0, 0, 0);
  groupboxes.add(sideA1, sideB1, glue_lid, sideA2, sideB2);

  const PositionCenter = new THREE.Object3D();
  PositionCenter.position.set(0, 0, 0);
  scene.add(PositionCenter);
  PositionCenter.add(groupboxes);

  return scene;
};
