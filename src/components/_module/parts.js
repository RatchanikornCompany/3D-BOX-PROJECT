import * as THREE from 'three'

export default class PARTS {
  constructor(
    width,
    depth,
    height,
    lid,
    glue,
    g_slope,
    plug,
    p_slope,
    flap,
    colors,
    radius,
    lockHeight_Fix,
    slopet,
    sloped,
    hand_fix,
    longhand_fix,
    window_height,
    window_length,
    display_length,
    display_height
  ) {
    this.width = width
    this.depth = depth
    this.height = height
    this.lid = lid
    this.glue = glue
    this.plug = plug
    this.flap = flap
    this.color = colors
    this.plugs_slope = p_slope
    this.glue_slope = g_slope
    this.radius = radius
    this.lockHeight_Fix = lockHeight_Fix
    this.slopet = slopet
    this.sloped = sloped
    this.hand_fix = hand_fix
    this.longhand_fix = longhand_fix
    this.window_height = window_height
    this.window_length = window_length
    this.display_length = display_length
    this.display_height = display_height
  }

  //* Side A Shape.
  planeAGeomety() {
    this.planeA = new THREE.Mesh(
      new THREE.PlaneGeometry(this.width, this.height),
      this.color.cr_lays
    )
    this.planeA.position.x = this.width / 2
    this.planeA.position.y = this.height / 2
    this.planeA.position.z = -1
    return this.planeA
  }
  planeAGeomety_Invert() {
    this.planeA = new THREE.Mesh(
      new THREE.PlaneGeometry(this.width, this.height),
      this.color.cr_lays
    )
    this.planeA.position.x = this.width / 2
    this.planeA.position.y = this.height / 2
    this.planeA.position.z = 1
    return this.planeA
  }
  planeAGeomety_Invert1() {
    this.planeA = new THREE.Mesh(
      new THREE.PlaneGeometry(this.width, this.height),
      this.color.cr_lays
    )
    this.planeA.position.x = this.width / 2
    this.planeA.position.y = this.height / 2
    this.planeA.position.z = 2
    return this.planeA
  }

  //* Side B shape.
  planeBGeomety() {
    this.planeB = new THREE.Mesh(
      new THREE.PlaneGeometry(this.depth, this.height),
      this.color.cr_lays
    )
    this.planeB.position.x = this.depth / 2
    this.planeB.position.y = this.height / 2
    this.planeB.position.z = -1
    return this.planeB
  }
  planeBGeomety_Invert() {
    this.planeB = new THREE.Mesh(
      new THREE.PlaneGeometry(this.depth, this.height),
      this.color.cr_lays
    )
    this.planeB.position.x = this.depth / 2
    this.planeB.position.y = this.height / 2
    this.planeB.position.z = 1
    return this.planeB
  }
  planeBGeomety_Invert1() {
    this.planeB = new THREE.Mesh(
      new THREE.PlaneGeometry(this.depth, this.height),
      this.color.cr_lays
    )
    this.planeB.position.x = this.depth / 2
    this.planeB.position.y = this.height / 2
    this.planeB.position.z = 2
    return this.planeB
  }

  //* Slide Boxes *// (ทำเพิ่มส่วนของกล่องสไลด์).
  planeA_SlideGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)
    this.cover.lineTo(this.width, this.depth)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  planeA_SlideGeometyInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)
    this.cover.lineTo(this.width, this.depth)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  planeB_SlideGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.height)
    this.cover.lineTo(this.width, this.height)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  planeB_SlideGeometyInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.height)
    this.cover.lineTo(this.width, this.height)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  planeBC_SlideGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.height, 0)
    this.cover.lineTo(this.height, this.depth)
    this.cover.lineTo(0, this.depth)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }
  planeBC_SlideGeometyInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.height, 0)
    this.cover.lineTo(this.height, this.depth)
    this.cover.lineTo(0, this.depth)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  planeBC1_SlideGeomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth, 0)
    this.cover.lineTo(this.depth, this.height)
    this.cover.lineTo(0, this.height)
    this.cover.lineTo(0, this.height + this.flap / 2)
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)

    this.coverShape.position.z = 1

    return this.coverShape
  }

  planeBC1_SlideGeomety1() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth, 0)
    this.cover.lineTo(this.depth, this.height)
    this.cover.lineTo(0, this.height)
    this.cover.lineTo(0, this.height + this.flap / 2)
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)

    this.coverShape.position.z = -1

    return this.coverShape
  }

  planeBC1Head_SlideGeomety() {
    this.cover1 = new THREE.Shape()

    this.cover1.moveTo(0, this.height)
    this.cover1.lineTo(0, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + (this.flap / 2) * 2)
    this.cover1.lineTo(
      this.depth - this.flap / 2,
      this.height + (this.flap / 2) * 2
    )
    this.cover1.lineTo(this.depth - this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.depth, this.height + this.flap / 2)
    this.cover1.lineTo(this.depth, this.height)
    this.cover1Geomety = new THREE.ShapeGeometry(this.cover1)
    this.cover1Shape = new THREE.Mesh(this.cover1Geomety, this.color.cr_lays)

    this.cover1Shape.position.z = 1

    return this.cover1Shape
  }

  planeBC1Head_SlideGeomety1() {
    this.cover1 = new THREE.Shape()

    this.cover1.moveTo(0, this.height)
    this.cover1.lineTo(0, this.height + this.flap)
    this.cover1.lineTo(this.flap, this.height + this.flap)
    this.cover1.lineTo(
      this.depth - this.flap,
      this.height + (this.flap / 2) * 2
    )
    this.cover1.lineTo(this.depth - this.flap, this.height + this.flap)
    this.cover1.lineTo(this.depth, this.height + this.flap)
    this.cover1.lineTo(this.depth, this.height)
    this.cover1Geomety = new THREE.ShapeGeometry(this.cover1)
    this.cover1Shape = new THREE.Mesh(this.cover1Geomety, this.color.cr_lays)

    this.cover1Shape.position.z = -1

    return this.cover1Shape
  }

  planeAC1Head_SlideGeometyInvert() {
    this.cover1 = new THREE.Shape()

    this.cover1.moveTo(0, this.height)
    this.cover1.lineTo(0, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + (this.flap / 2) * 2)
    this.cover1.lineTo(
      this.width - this.flap / 2,
      this.height + (this.flap / 2) * 2
    )
    this.cover1.lineTo(this.width - this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.width, this.height + this.flap / 2)
    this.cover1.lineTo(this.width, this.height)
    this.cover1Geomety = new THREE.ShapeGeometry(this.cover1)
    this.cover1Shape = new THREE.Mesh(this.cover1Geomety, this.color.cr_lays)

    this.cover1Shape.position.z = -1

    return this.cover1Shape
  }
  planeAC1Head_SlideGeomety() {
    this.cover1 = new THREE.Shape()

    this.cover1.moveTo(0, this.height)
    this.cover1.lineTo(0, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.flap / 2, this.height + (this.flap / 2) * 2)
    this.cover1.lineTo(
      this.width - this.flap / 2,
      this.height + (this.flap / 2) * 2
    )
    this.cover1.lineTo(this.width - this.flap / 2, this.height + this.flap / 2)
    this.cover1.lineTo(this.width, this.height + this.flap / 2)
    this.cover1.lineTo(this.width, this.height)
    this.cover1Geomety = new THREE.ShapeGeometry(this.cover1)
    this.cover1Shape = new THREE.Mesh(this.cover1Geomety, this.color.cr_lays)

    this.cover1Shape.position.z = 1

    return this.cover1Shape
  }

  Square_SlideGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.height, 0)
    this.cover.lineTo(this.height, this.height)
    this.cover.lineTo(0, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  Square_SlideGeometyInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.height, 0)
    this.cover.lineTo(this.height, this.height)
    this.cover.lineTo(0, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  //* Glue Shape.
  glue1() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(this.glue, 0))
    this.red_line.push(new THREE.Vector2(0, this.glue_slope))
    this.red_line.push(new THREE.Vector2(0, this.height - this.glue_slope))
    this.red_line.push(new THREE.Vector2(this.glue, this.height))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(this.glue, 0))
    this.green_line.push(new THREE.Vector2(this.glue, this.height))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  glueGeomety1() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = -1
    return this.glueMesh
  }
  glueGeomety1_Invert() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = 1
    return this.glueMesh
  }
  glueGeomety1_Invert1() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = 2
    return this.glueMesh
  }

  glue2() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(this.glue, 0))
    this.red_line.push(new THREE.Vector2(0, this.glue_slope))
    this.red_line.push(new THREE.Vector2(0, this.height - this.glue_slope))
    this.red_line.push(new THREE.Vector2(this.glue, this.height))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(this.glue, 0))
    this.green_line.push(new THREE.Vector2(0, this.glue_slope))
    this.green_line.push(new THREE.Vector2(0, this.height - this.glue_slope))
    this.green_line.push(new THREE.Vector2(this.glue, this.height))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines)

    return this.scene
  }
  glueGeomety2() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    //this.glueMesh.position.z = -1;
    return this.glueMesh
  }

  glue3() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(this.glue, 0))
    this.red_line.push(new THREE.Vector2(0, this.glue_slope))
    this.red_line.push(new THREE.Vector2(0, this.width - this.glue_slope))
    this.red_line.push(new THREE.Vector2(this.glue, this.width))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(this.glue, 0))
    this.green_line.push(new THREE.Vector2(this.glue, this.width))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  glueGeomety3() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.width - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.width)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = 1
    return this.glueMesh
  }
  glueGeomety3Invert() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.width - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.width)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = -1
    return this.glueMesh
  }

  glue4() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.glue - 5)

    this.red_line.bezierCurveTo(
      0,
      this.glue - 5,
      0,
      this.glue,
      this.glue_slope,
      this.glue
    )

    this.red_line.lineTo(this.width - this.glue_slope, this.glue)

    this.red_line.bezierCurveTo(
      this.width - this.glue_slope,
      this.glue,
      this.width,
      this.glue,
      this.width,
      this.glue - 5
    )

    this.red_line.lineTo(this.width, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.width, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  glueGeomety4() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.glue - 5)

    this.flaps.bezierCurveTo(
      0,
      this.glue - 5,
      0,
      this.glue,
      this.glue_slope,
      this.glue
    )

    this.flaps.lineTo(this.width - this.glue_slope, this.glue)

    this.flaps.bezierCurveTo(
      this.width - this.glue_slope,
      this.glue,
      this.width,
      this.glue,
      this.width,
      this.glue - 5
    )

    this.flaps.lineTo(this.width, 0)
    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = -1

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.width, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.flapGeomety, this.green_lines)

    return this.scene
  }
  glueGeomety4_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.glue - 5)

    this.flaps.bezierCurveTo(
      0,
      this.glue - 5,
      0,
      this.glue,
      this.glue_slope,
      this.glue
    )

    this.flaps.lineTo(this.width - this.glue_slope, this.glue)

    this.flaps.bezierCurveTo(
      this.width - this.glue_slope,
      this.glue,
      this.width,
      this.glue,
      this.width,
      this.glue - 5
    )

    this.flaps.lineTo(this.width, 0)
    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = 1

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.width, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.flapGeomety, this.green_lines)

    return this.scene
  }

  //* Cover Shape.
  cover1() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.green_group1 = []
    this.green_group2 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(0, this.depth))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.depth))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.depth - 0.5))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.red_group1
    )
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(this.width, 0))
    this.red_group2.push(new THREE.Vector2(this.width, this.depth))
    this.red_group2.push(
      new THREE.Vector2(this.width - this.plugs_slope, this.depth)
    )
    this.red_group2.push(
      new THREE.Vector2(this.width - this.plugs_slope, this.depth - 0.5)
    )

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.red_group2
    )
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.

    this.red_group3.push(
      new THREE.Vector2(this.plugs_slope + 5, this.depth + this.plug)
    )
    this.red_group3.push(
      new THREE.Vector2(
        this.width - this.plugs_slope - 5,
        this.depth + this.plug
      )
    )

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.red_group3
    )
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(0, this.depth),
          new THREE.Vector2(2, this.depth + this.plug - 2),
          new THREE.Vector2(this.plugs_slope + 5, this.depth + this.plug),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(
            this.width - (this.plugs_slope + 5),
            this.depth + this.plug
          ),
          new THREE.Vector2(this.width - 2, this.depth + this.plug - 2),
          new THREE.Vector2(this.width, this.depth),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(
      new THREE.Vector2(this.plugs_slope, this.depth - 0.5)
    )
    this.green_group1.push(
      new THREE.Vector2(this.width - this.plugs_slope, this.depth - 0.5)
    )

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    // this.green_lines_g1 = new THREE.LineDashedMaterial( this.green_geometry_g1, this.color.cr_green );
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      this.color.cr_green
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(0, 0))
    this.green_group2.push(new THREE.Vector2(this.width, 0))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.green_group2
    )
    this.green_lines_g2 = new THREE.Line(
      this.green_geometry_g2,
      this.color.cr_green
    )
    this.green_lines_g2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_cruve_left,
      this.red_cruve_right,

      this.green_lines_g1,
      this.green_lines_g2
    )

    return this.scene
  }
  coverGeomety1() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(
      0,
      this.depth,
      -3,
      this.depth + this.plug + 4,
      this.plugs_slope + 5,
      this.depth + this.plug
    )

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverGeomety1_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(
      0,
      this.depth,
      -3,
      this.depth + this.plug + 4,
      this.plugs_slope + 5,
      this.depth + this.plug
    )

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  cover2() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.green_group1 = []
    this.green_group2 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(0, this.depth))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.red_group1
    )
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(this.width, 0))
    this.red_group2.push(new THREE.Vector2(this.width, this.depth))

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.red_group2
    )
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.
    this.red_group3.push(
      new THREE.Vector2(this.plugs_slope + 5, this.depth + this.plug)
    )
    this.red_group3.push(
      new THREE.Vector2(
        this.width - this.plugs_slope - 5,
        this.depth + this.plug
      )
    )

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.red_group3
    )
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(0, this.depth),
          new THREE.Vector2(2, this.depth + this.plug - 2),
          new THREE.Vector2(this.plugs_slope + 5, this.depth + this.plug),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(
            this.width - (this.plugs_slope + 5),
            this.depth + this.plug
          ),
          new THREE.Vector2(this.width - 2, this.depth + this.plug - 2),
          new THREE.Vector2(this.width, this.depth),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(new THREE.Vector2(0, this.depth))
    this.green_group1.push(new THREE.Vector2(this.width, this.depth))

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      this.color.cr_green
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(0, 0))
    this.green_group2.push(new THREE.Vector2(this.width, 0))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.green_group2
    )
    this.green_lines_g2 = new THREE.Line(
      this.green_geometry_g2,
      this.color.cr_green
    )
    this.green_lines_g2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_cruve_left,
      this.red_cruve_right,

      this.green_lines_g1,
      this.green_lines_g2
    )

    return this.scene
  }
  coverGeomety2() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(
      0,
      this.depth,
      -3,
      this.depth + this.plug + 4,
      this.plugs_slope + 5,
      this.depth + this.plug
    )

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverGeomety2_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(
      0,
      this.depth,
      -3,
      this.depth + this.plug + 4,
      this.plugs_slope + 5,
      this.depth + this.plug
    )

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 2

    return this.coverShape
  }
  coverGeomety2_Invert1() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(
      0,
      this.depth,
      -3,
      this.depth + this.plug + 4,
      this.plugs_slope + 5,
      this.depth + this.plug
    )

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 2

    return this.coverShape
  }

  cover3() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.red_group4 = []
    this.green_group1 = []
    this.green_group2 = []
    this.green_group3 = []
    this.green_group4 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(5, this.depth - 10))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.red_group1
    )
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(20, this.depth - 2))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth + 5))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 20, this.depth + 5))

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.red_group2
    )
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.
    this.red_group3.push(new THREE.Vector2(this.width - 20, this.depth - 2))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth + 5))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 20, this.depth + 5))

    //! Red line g4.
    this.red_group4.push(new THREE.Vector2(this.width, 0))
    this.red_group4.push(new THREE.Vector2(this.width - 5, this.depth - 10))

    this.red_geometry_g4 = new THREE.BufferGeometry().setFromPoints(
      this.red_group4
    )
    this.red_lines_g4 = new THREE.Line(this.red_geometry_g4, this.color.cr_red)

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.red_group3
    )
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(5, this.depth - 10),
          new THREE.Vector2(8, this.depth - 4),
          new THREE.Vector2(20, this.depth - 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_left2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 - 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 - 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width - 5, this.depth - 10),
          new THREE.Vector2(this.width - 8, this.depth - 4),
          new THREE.Vector2(this.width - 20, this.depth - 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_right2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 + 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 + 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.green_group1.push(new THREE.Vector2(this.width / 2 + 10, this.depth))

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    // this.green_lines_g1 = new THREE.Line( this.green_geometry_g1, this.color.cr_green );
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      new THREE.LineDashedMaterial({
        color: '#33FF00',
        dashSize: 3,
        gapSize: 2,
      })
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(0, 0))
    this.green_group2.push(new THREE.Vector2(this.width, 0))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.green_group2
    )
    this.green_lines_g2 = new THREE.Line(
      this.green_geometry_g2,
      this.color.cr_green
    )
    this.green_lines_g2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_lines_g4,

      this.red_cruve_left1,
      this.red_cruve_left2,
      this.red_cruve_right1,
      this.red_cruve_right2,

      this.green_lines_g1,
      this.green_lines_g2
    )

    return this.scene
  }
  coverGeomety3() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(5, this.depth - 10)
    this.cover.bezierCurveTo(
      5,
      this.depth - 10,
      5,
      this.depth - 1,
      20,
      this.depth - 2
    )

    this.cover.lineTo(20, this.depth - 2)
    this.cover.lineTo(this.width / 2 - 10, this.depth)
    this.cover.lineTo(this.width / 2 - 10, this.depth + 5)
    this.cover.lineTo(this.width / 2 - 20, this.depth + 5)

    this.cover.bezierCurveTo(
      this.width / 2 - 20,
      this.depth + 5,
      this.width / 2 - 23,
      this.depth + 15 + 3,
      this.width / 2 - 10,
      this.depth + 15
    )

    this.cover.moveTo(this.width / 2 - 5, this.depth + 15)
    this.cover.moveTo(this.width / 2 + 5, this.depth + 15)

    this.cover.bezierCurveTo(
      this.width / 2 + 10,
      this.depth + 15,
      this.width / 2 + 23,
      this.depth + 15 + 3,
      this.width / 2 + 20,
      this.depth + 5
    )

    this.cover.lineTo(this.width / 2 + 20, this.depth + 5)
    this.cover.lineTo(this.width / 2 + 10, this.depth + 5)
    this.cover.lineTo(this.width / 2 + 10, this.depth)
    this.cover.lineTo(this.width - 20, this.depth - 2)

    this.cover.bezierCurveTo(
      this.width - 20,
      this.depth - 2,
      this.width - 5,
      this.depth - 1,
      this.width - 5,
      this.depth - 10
    )

    this.cover.lineTo(this.width - 5, this.depth - 10)
    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  cover4() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()

    this.red_lines_g1.moveTo(0, 0)
    this.red_lines_g1.lineTo(0, -((this.depth / 100) * 85) | 0)

    this.red_lines_g1.bezierCurveTo(
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.red_lines_g1.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.red_lines_g1.bezierCurveTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 80) | 0,
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 80) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.red_lines_g1.lineTo(this.width, -((this.depth / 100) * 85) | 0)
    this.red_lines_g1.lineTo(this.width, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.scene.add(this.red_lines_g1)

    return this.scene
  }
  coverGeomety4() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 100) * 85) | 0)

    this.cover.bezierCurveTo(
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 80) | 0,
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 80) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.lineTo(this.width, -((this.depth / 100) * 85) | 0)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1
    return this.coverShape
  }
  coverGeomety4_Invert() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 100) * 85) | 0)

    this.cover.bezierCurveTo(
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 79) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 80) | 0,
      ((this.width / 100) * 70) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 80) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.lineTo(this.width, -((this.depth / 100) * 85) | 0)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1
    return this.coverShape
  }

  cover5() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()
    this.red_lines_g1.moveTo(0, 0)

    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 67) | 0,
      -((this.width / 100) * 43) | 0
    )
    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 55) | 0
    )

    this.red_lines_g1.bezierCurveTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 57) | 0,

      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 58) | 0,

      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )
    this.red_lines_g1.lineTo(this.depth, -((this.width / 100) * 58) | 0)
    this.red_lines_g1.lineTo(this.depth, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_group1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.scene.add(this.red_group1)

    return this.scene
  }
  coverGeomety5() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.depth / 100) * 67) | 0,
      -((this.width / 100) * 43) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 55) | 0
    )

    this.cover.bezierCurveTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 57) | 0,
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 58) | 0,
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )
    this.cover.lineTo(this.depth, -((this.width / 100) * 58) | 0)

    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverGeomety5_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.depth / 100) * 67) | 0,
      -((this.width / 100) * 43) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 55) | 0
    )

    this.cover.bezierCurveTo(
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 57) | 0,
      ((this.depth / 100) * 45) | 0,
      -((this.width / 100) * 58) | 0,
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 58) | 0
    )
    this.cover.lineTo(this.depth, -((this.width / 100) * 58) | 0)

    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  coverlock() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()
    this.red_lines_g1.moveTo(0, 0)

    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 49) | 0,
      -((this.width / 100) * 24) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.red_lines_g1.bezierCurveTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 34) | 0
    )
    this.red_lines_g1.lineTo(this.depth, -((this.width / 100) * 34) | 0)

    this.red_lines_g1.lineTo(this.depth, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_group1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.scene.add(this.red_group1)

    return this.scene
  }
  coverlockGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.depth / 100) * 49) | 0,
      -((this.width / 100) * 24) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.cover.bezierCurveTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 34) | 0
    )
    this.cover.lineTo(this.depth, -((this.width / 100) * 34) | 0)

    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverlockGeomety_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.depth / 100) * 49) | 0,
      -((this.width / 100) * 24) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.cover.bezierCurveTo(
      ((this.depth / 100) * 38) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0,
      ((this.depth / 100) * 47) | 0,
      -((this.width / 100) * 34) | 0
    )

    this.cover.lineTo(
      ((this.depth / 100) * 60) | 0,
      -((this.width / 100) * 34) | 0
    )
    this.cover.lineTo(this.depth, -((this.width / 100) * 34) | 0)

    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  cover_lock() {
    this.scene = new THREE.Scene()
    this.red_group1 = new THREE.Shape()

    this.red_group1.moveTo(0, 0)
    this.red_group1.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.red_group1.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.red_group1.bezierCurveTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.red_group1.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 67) | 0
    )
    this.red_group1.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.red_group1.bezierCurveTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,

      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 60) | 0
    )

    this.red_group1.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.red_group1.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.red_group1.lineTo(this.width, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_group1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.green_group1 = []
    this.green_group1.push(
      new THREE.Vector2(
        ((this.width / 100) * 23) | 0,
        -((this.depth / 100) * 51) | 0
      )
    )
    this.green_group1.push(
      new THREE.Vector2(
        ((this.width / 100) * 78) | 0,
        -((this.depth / 100) * 51) | 0
      )
    )

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines_g1, this.green_lines)

    return this.scene
  }
  cove_lockGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 67) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,

      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 60) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  cove_lockGeometyInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 23) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 30) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 67) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 67) | 0,

      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 60) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 78) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  cover6() {
    this.scene = new THREE.Scene()
    this.red_group1 = new THREE.Shape()

    this.red_group1.moveTo(0, 0)
    this.red_group1.lineTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.red_group1.bezierCurveTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 78) | 0,
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 84) | 0,
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.red_group1.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )
    this.red_group1.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.red_group1.bezierCurveTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 84) | 0,

      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 78) | 0
    )

    this.red_group1.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.red_group1.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.red_group1.lineTo(this.width, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_group1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.green_group1 = []
    this.green_group1.push(
      new THREE.Vector2(
        ((this.width / 100) * 34) | 0,
        -((this.depth / 100) * 55) | 0
      )
    )
    this.green_group1.push(
      new THREE.Vector2(
        ((this.width / 100) * 67) | 0,
        -((this.depth / 100) * 55) | 0
      )
    )

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines_g1, this.green_lines)

    return this.scene
  }
  coverGeomety6() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 78) | 0,
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 84) | 0,
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 84) | 0,

      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 78) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverGeomety6_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 55) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 78) | 0,
      ((this.width / 100) * 34) | 0,
      -((this.depth / 100) * 84) | 0,
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 39) | 0,
      -((this.depth / 100) * 85) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0
    )

    this.cover.bezierCurveTo(
      ((this.width / 100) * 63) | 0,
      -((this.depth / 100) * 85) | 0,
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 84) | 0,

      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 78) | 0
    )

    this.cover.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 67) | 0,
      -((this.depth / 100) * 55) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  cover7() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.red_group4 = []
    this.green_group1 = []
    this.green_group2 = []
    this.green_group3 = []
    this.green_group4 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(5, this.depth - 10))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.red_group1
    )
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(20, this.depth - 2))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth + 5))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 20, this.depth + 5))

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.red_group2
    )
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.
    this.red_group3.push(new THREE.Vector2(this.width - 20, this.depth - 2))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth + 5))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 20, this.depth + 5))

    //! Red line g4.
    this.red_group4.push(new THREE.Vector2(this.width, 0))
    this.red_group4.push(new THREE.Vector2(this.width - 5, this.depth - 10))

    this.red_geometry_g4 = new THREE.BufferGeometry().setFromPoints(
      this.red_group4
    )
    this.red_lines_g4 = new THREE.Line(this.red_geometry_g4, this.color.cr_red)

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.red_group3
    )
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(0, 0),
          new THREE.Vector2(0, this.plug - this.p_slope),
          new THREE.Vector2(this.p_slope, this.plug),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_left2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 - 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 - 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width - 5, this.depth - 10),
          new THREE.Vector2(this.width - 8, this.depth - 4),
          new THREE.Vector2(this.width - 20, this.depth - 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_right2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 + 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 + 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.green_group1.push(new THREE.Vector2(this.width / 2 + 10, this.depth))

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    // this.green_lines_g1 = new THREE.Line( this.green_geometry_g1, this.color.cr_green );
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      new THREE.LineDashedMaterial({
        color: '#33FF00',
        dashSize: 3,
        gapSize: 2,
      })
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(0, 0))
    this.green_group2.push(new THREE.Vector2(this.width, 0))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.green_group2
    )
    this.green_lines_g2 = new THREE.Line(
      this.green_geometry_g2,
      this.color.cr_green
    )
    this.green_lines_g2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_lines_g4,

      this.red_cruve_left1,
      this.red_cruve_left2,
      this.red_cruve_right1,
      this.red_cruve_right2,

      this.green_lines_g1,
      this.green_lines_g2
    )

    return this.scene
  }

  cover8() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()

    this.red_lines_g1.moveTo(0, 0)
    this.red_lines_g1.lineTo(0, -((this.depth / 100) * 67) | 0)

    this.red_lines_g1.bezierCurveTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 66) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 51) | 0
    )

    this.red_lines_g1.lineTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0
    )

    this.red_lines_g1.bezierCurveTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0,
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 67) | 0
    )

    this.red_lines_g1.lineTo(this.width, -((this.depth / 100) * 67) | 0)
    this.red_lines_g1.lineTo(this.width, 0)

    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.scene.add(this.red_lines_g1)

    return this.scene
  }

  coverGeomety8() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 100) * 67) | 0)

    this.cover.bezierCurveTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 66) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0
    )
    this.cover.bezierCurveTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0,
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 67) | 0
    )
    this.cover.lineTo(this.width, -((this.depth / 100) * 67) | 0)
    this.cover.lineTo(this.width, 0)
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  coverGeomety8_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 100) * 67) | 0)

    this.cover.bezierCurveTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 27) | 0,
      -((this.depth / 100) * 66) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 24) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 51) | 0
    )
    this.cover.lineTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0
    )
    this.cover.bezierCurveTo(
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 66) | 0,
      ((this.width / 100) * 74) | 0,
      -((this.depth / 100) * 67) | 0,
      ((this.width / 100) * 77) | 0,
      -((this.depth / 100) * 67) | 0
    )
    this.cover.lineTo(this.width, -((this.depth / 100) * 67) | 0)
    this.cover.lineTo(this.width, 0)
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  cover9() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = new THREE.Shape()
    this.red_line2 = new THREE.Shape()
    this.red_line3 = new THREE.Shape()
    this.red_line4 = new THREE.Shape()
    this.red_line5 = new THREE.Shape()
    this.green_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.width)
    this.red_line.lineTo(this.plugs_slope, this.width)
    this.red_line.lineTo(this.plugs_slope, this.width - 0.5)
    this.red_lines = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line),
      this.color.cr_red
    )

    this.red_line1.moveTo(this.depth, 0)
    this.red_line1.lineTo(this.depth, this.width)
    this.red_line1.lineTo(this.depth - this.plugs_slope, this.width)
    this.red_line1.lineTo(this.depth - this.plugs_slope, this.width - 0.5)
    this.red_lines1 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line1),
      this.color.cr_red
    )

    this.red_line3.moveTo(this.plugs_slope + 5, this.width + this.plug)
    this.red_line3.lineTo(
      this.depth - this.plugs_slope - 5,
      this.width + this.plug
    )
    this.red_lines3 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line3),
      this.color.cr_red
    )

    //! Red curve left.
    this.red_line2.moveTo(0, this.width)
    this.red_line2.bezierCurveTo(
      0,
      this.width,
      2,
      this.width + this.plug - 2,
      this.plugs_slope + 5,
      this.width + this.plug
    )
    this.red_lines2 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line2),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_line4.moveTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug
    )
    this.red_line4.bezierCurveTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug,
      this.depth - 2,
      this.width + this.plug - 2,
      this.depth,
      this.width
    )
    this.red_lines4 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line4),
      this.color.cr_red
    )

    //! Red line.
    this.green_line.moveTo(this.plugs_slope, this.width - 0.5)
    this.green_line.lineTo(this.depth - this.plugs_slope, this.width - 0.5)
    this.green_lines = new THREE.Line(
      new THREE.ShapeGeometry(this.green_line),
      this.color.cr_green
    )
    this.green_lines.computeLineDistances()

    //!  ***
    this.red_line5.moveTo(
      ((this.depth / 100) * 47) | 0,
      (this.width / 100) * 22.5
    ) //39.5
    this.red_line5.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 78) | 0
    ) //136
    this.red_line5.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 78) | 0 | 0
    )
    this.red_line5.lineTo(
      ((this.depth / 100) * 50) | 0,
      (this.width / 100) * 23
    )
    this.red_line5.bezierCurveTo(
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 23) | 0
    )
    this.red_lines5 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line5),
      this.color.cr_red
    )

    this.scene.add(
      this.red_lines,
      this.red_lines1,
      this.red_lines2,
      this.red_lines3,
      this.red_lines4,
      this.green_lines,
      this.red_lines5
    )

    return this.scene
  }

  coverGeomety9() {
    this.cover = new THREE.Shape()
    this.redLineHoles = new THREE.Path()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.width)
    this.cover.bezierCurveTo(
      0,
      this.width,
      2,
      this.width + this.plug - 2,
      this.plugs_slope + 5,
      this.width + this.plug
    )
    this.cover.lineTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug
    )
    this.cover.bezierCurveTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug,
      this.depth - 2,
      this.width + this.plug - 2,
      this.depth,
      this.width
    )
    this.cover.lineTo(this.depth, 0)

    this.redLineHoles.moveTo(
      ((this.depth / 100) * 47) | 0,
      (this.width / 100) * 22.5
    ) //39.5
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 78) | 0
    ) //136
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 78) | 0 | 0
    )
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 50) | 0,
      (this.width / 100) * 23
    )
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 23) | 0
    )

    this.cover.holes.push(this.redLineHoles)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  coverGeomety9_Invert() {
    this.cover = new THREE.Shape()
    this.redLineHoles = new THREE.Path()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.width)
    this.cover.bezierCurveTo(
      0,
      this.width,
      2,
      this.width + this.plug - 2,
      this.plugs_slope + 5,
      this.width + this.plug
    )
    this.cover.lineTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug
    )
    this.cover.bezierCurveTo(
      this.depth - (this.plugs_slope + 5),
      this.width + this.plug,
      this.depth - 2,
      this.width + this.plug - 2,
      this.depth,
      this.width
    )
    this.cover.lineTo(this.depth, 0)

    this.redLineHoles.moveTo(
      ((this.depth / 100) * 47) | 0,
      (this.width / 100) * 22.5
    ) //39.5
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 78) | 0
    ) //136
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 78) | 0 | 0
    )
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 50) | 0,
      (this.width / 100) * 23
    )
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 47) | 0,
      ((this.width / 100) * 23) | 0
    )

    this.cover.holes.push(this.redLineHoles)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  //* Flap Shape.
  flap1() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(2, 2))
    this.red_line.push(new THREE.Vector2(2, (this.width / 100) * this.flap - 2))
    this.red_line.push(
      new THREE.Vector2(this.depth - 8, (this.width / 100) * this.flap - 2)
    )
    this.red_line.push(new THREE.Vector2(this.depth - 5, 8))
    this.red_line.push(new THREE.Vector2(this.depth, 5))
    this.red_line.push(new THREE.Vector2(this.depth, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  flap2() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, (this.width / 100) * this.flap - 2))
    this.red_line.push(
      new THREE.Vector2(this.depth - 8, (this.width / 100) * this.flap - 2)
    )
    this.red_line.push(new THREE.Vector2(this.depth - 5, 8))
    this.red_line.push(new THREE.Vector2(this.depth, 5))
    this.red_line.push(new THREE.Vector2(this.depth, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  flap3() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.red_line2 = []
    this.green_line = []

    //! Red line.
    //! Red curve left.
    this.red_cruve_left = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(2, this.width / 2),
          new THREE.Vector2(5, this.width / 2 + this.plug - 2),
          new THREE.Vector2(this.depth / 2, this.width / 2 + this.plug),
        ]).getPoints(50)
      ),
      this.color.cr_red
    )

    // //! Red curve right.
    this.red_cruve_right = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.depth / 2, this.width / 2 + this.plug),
          new THREE.Vector2(this.depth - 8, this.width / 2 + this.plug - 2),
          new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_line.push(
      new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2)
    )
    this.red_line.push(new THREE.Vector2(this.depth / 2, this.width / 2))
    this.red_line.push(
      new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2 - 3)
    )
    this.red_line.push(new THREE.Vector2(this.depth, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.red_line2.push(new THREE.Vector2(0, 0))
    this.red_line2.push(new THREE.Vector2(2, this.width / 2))

    this.red_geometry2 = new THREE.BufferGeometry().setFromPoints(
      this.red_line2
    )
    this.red_lines2 = new THREE.Line(this.red_geometry2, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(
      this.red_cruve_left,
      this.red_cruve_right,
      this.red_lines,
      this.red_lines2
    )

    return this.scene
  }

  flapGeomety1() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(2, 2)
    this.flaps.lineTo(2, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 8, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 5, 8)
    this.flaps.lineTo(this.depth, 5)
    this.flaps.lineTo(this.depth, 0)
    this.flaps.lineTo(0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  flapGeomety3() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, 0)
    this.flaps.lineTo(2, this.width / 2)
    this.flaps.bezierCurveTo(
      2,
      this.width / 2,
      -1,
      this.width / 2 + this.plug - 4,
      7,
      this.width / 2 + this.plug
    )

    this.flaps.bezierCurveTo(
      this.depth - this.plugs_slope - 2,
      this.width / 2 + this.plug,
      this.depth - 4,
      this.width / 2 + this.plug + 3,
      this.depth - this.plugs_slope,
      this.width / 2
    )

    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2)
    this.flaps.lineTo(this.depth / 2, this.width / 2)
    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2 - 3)
    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2)
    this.flaps.lineTo(this.depth, 0)
    this.flaps.lineTo(0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  flapGeomety2() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 8, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 5, 8)
    this.flaps.lineTo(this.depth, 5)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  flapGeomety2_Invert() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 8, (this.width / 100) * this.flap - 2)
    this.flaps.lineTo(this.depth - 5, 8)
    this.flaps.lineTo(this.depth, 5)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }

  flap4() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0) //0,0
    this.red_line.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 15) | 0) //0,4

    this.red_line.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 25) | 0
    ) //2,6

    this.red_line.lineTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0
    ) //5,15

    //5, 15, 7, 24, 13, 24
    this.red_line.bezierCurveTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0,
      ((this.depth / 100) * 18) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 33) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.red_line.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.red_line.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 16) | 0
    )

    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  flapGeomety4() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0) //0,0
    this.flaps.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 15) | 0) //0,4
    this.flaps.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 25) | 0
    ) //2,6
    this.flaps.lineTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0
    ) //5,15

    //5, 15, 7, 24, 13, 24
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0,
      ((this.depth / 100) * 18) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 33) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 16) | 0
    )

    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }
  flapGeomety4_Invert() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0) //0,0
    this.flaps.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 15) | 0) //0,4
    this.flaps.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 25) | 0
    ) //2,6
    this.flaps.lineTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0
    ) //5,15

    //5, 15, 7, 24, 13, 24
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 13) | 0,
      ((((this.width / 100) * this.flap) / 100) * 63) | 0,
      ((this.depth / 100) * 18) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 33) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(
      ((this.depth / 100) * 97) | 0,
      ((((this.width / 100) * this.flap) / 100) * 16) | 0
    )

    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }

  flap5() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 20) | 0)
    this.red_line.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 36) | 0
    )
    this.red_line.bezierCurveTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 72) | 0,
      ((this.depth / 100) * 12) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 39) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.red_line.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.red_line.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 7) | 0
    )
    this.red_line.lineTo(((this.depth / 100) * 100) | 0, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  flapGeomety5() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 20) | 0)
    this.flaps.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 36) | 0
    )
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 72) | 0,
      ((this.depth / 100) * 12) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 39) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 7) | 0
    )
    this.flaps.lineTo(((this.depth / 100) * 100) | 0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }
  flapGeomety5_Invert() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 20) | 0)
    this.flaps.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 36) | 0
    )
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 72) | 0,
      ((this.depth / 100) * 12) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 39) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 7) | 0
    )
    this.flaps.lineTo(((this.depth / 100) * 100) | 0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 2

    return this.flapShape
  }
  flapGeomety_invert() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, ((((this.width / 100) * this.flap) / 100) * 20) | 0)
    this.flaps.lineTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 36) | 0
    )
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 6) | 0,
      ((((this.width / 100) * this.flap) / 100) * 72) | 0,
      ((this.depth / 100) * 12) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0,
      ((this.depth / 100) * 39) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 100) | 0
    )
    this.flaps.lineTo(
      ((this.depth / 100) * 96) | 0,
      ((((this.width / 100) * this.flap) / 100) * 7) | 0
    )
    this.flaps.lineTo(((this.depth / 100) * 100) | 0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 2

    return this.flapShape
  }

  flap_lock() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line2 = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(((this.depth / 100) * 33) | 0, this.plug + 10)
    this.red_line.bezierCurveTo(
      ((this.depth / 100) * 34) | 0,
      this.plug + 12,
      ((this.depth / 100) * 36) | 0,
      this.plug + 14,
      ((this.depth / 100) * 40) | 0,
      this.plug + 14
    )
    this.red_line.lineTo(((this.depth / 100) * 40) | 0, this.plug + 14)
    this.red_line.lineTo(((this.depth / 100) * 61) | 0, this.plug + 14)
    this.red_line.bezierCurveTo(
      ((this.depth / 100) * 62) | 0,
      this.plug + 14,
      ((this.depth / 100) * 65) | 0,
      this.plug + 13,
      ((this.depth / 100) * 67) | 0,
      this.plug + 10
    )
    this.red_line.lineTo(((this.depth / 100) * 67) | 0, this.plug + 10)
    this.red_line.lineTo(this.depth, 0)

    this.red_lines = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line),
      this.color.cr_red
    )

    //!  ***
    this.red_line2.moveTo(((this.depth / 100) * 47) | 0, 0)
    this.red_line2.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.red_line2.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 89) | 0,
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0
    )
    this.red_line2.lineTo(
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0
    )

    this.red_line2.bezierCurveTo(
      ((this.depth / 100) * 49) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.red_line2.lineTo(((this.depth / 100) * 51) | 0, 0)
    this.red_line2.lineTo(((this.depth / 100) * 51) | 0, 0)
    this.red_line2.lineTo((this.depth / 100) * 47.05, 0)

    this.red_lines2 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line2),
      this.color.cr_red
    )

    this.scene.add(this.red_lines, this.red_lines2)

    return this.scene
  }

  flap_lockGeomety() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(((this.depth / 100) * 33) | 0, this.plug + 10)
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 34) | 0,
      this.plug + 12,
      ((this.depth / 100) * 36) | 0,
      this.plug + 14,
      ((this.depth / 100) * 40) | 0,
      this.plug + 14
    )
    this.flaps.lineTo(((this.depth / 100) * 40) | 0, this.plug + 14)
    this.flaps.lineTo(((this.depth / 100) * 61) | 0, this.plug + 14)
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 62) | 0,
      this.plug + 14,
      ((this.depth / 100) * 65) | 0,
      this.plug + 13,
      ((this.depth / 100) * 67) | 0,
      this.plug + 10
    )
    this.flaps.lineTo(((this.depth / 100) * 67) | 0, this.plug + 10)
    this.flaps.lineTo(this.depth, 0)

    this.redLineHoles = new THREE.Path()
    this.redLineHoles.moveTo(((this.depth / 100) * 47) | 0, 0)
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 89) | 0,
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0
    )
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 90) | 0
    )

    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 49) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 90) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.redLineHoles.lineTo(((this.depth / 100) * 51) | 0, 29)
    this.redLineHoles.lineTo(((this.depth / 100) * 51) | 0, 0)
    this.redLineHoles.lineTo((this.depth / 100) * 47.05, 0)

    this.flaps.holes.push(this.redLineHoles)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }
  flap_lockGeomety_Invert() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(((this.depth / 100) * 33) | 0, this.plug + 10)
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 34) | 0,
      this.plug + 12,
      ((this.depth / 100) * 36) | 0,
      this.plug + 14,
      ((this.depth / 100) * 40) | 0,
      this.plug + 14
    )
    this.flaps.lineTo(((this.depth / 100) * 40) | 0, this.plug + 14)
    this.flaps.lineTo(((this.depth / 100) * 61) | 0, this.plug + 14)
    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 62) | 0,
      this.plug + 14,
      ((this.depth / 100) * 65) | 0,
      this.plug + 13,
      ((this.depth / 100) * 67) | 0,
      this.plug + 10
    )
    this.flaps.lineTo(((this.depth / 100) * 67) | 0, this.plug + 10)
    this.flaps.lineTo(this.depth, 0)

    this.redLineHoles = new THREE.Path()

    this.redLineHoles.moveTo(((this.depth / 100) * 47) | 0, 0)
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 47) | 0,
      ((this.plug / 100) * 86) | 0,
      ((this.depth / 100) * 48) | 0,
      ((this.plug / 100) * 89) | 0,
      ((this.depth / 100) * 49) | 0,
      ((this.plug / 100) * 89) | 0
    )
    this.redLineHoles.lineTo(
      ((this.depth / 100) * 49) | 0,
      ((this.plug / 100) * 90) | 0
    )

    this.redLineHoles.bezierCurveTo(
      ((this.depth / 100) * 49) | 0,
      ((this.plug / 100) * 89) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 89) | 0,
      ((this.depth / 100) * 51) | 0,
      ((this.plug / 100) * 83) | 0
    )
    this.redLineHoles.lineTo(((this.depth / 100) * 51) | 0, 29)
    this.redLineHoles.lineTo(((this.depth / 100) * 51) | 0, 0)
    this.redLineHoles.lineTo((this.depth / 100) * 47.05, 0)

    this.flaps.holes.push(this.redLineHoles)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  flap6() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(((this.depth / 100) * 5) | 0, this.height - 12)

    this.red_line.bezierCurveTo(
      ((this.depth / 100) * 7) | 0,
      this.height - 1,
      ((this.depth / 100) * 9) | 0,
      this.height,
      ((this.depth / 100) * 15) | 0,
      this.height
    )

    this.red_line.lineTo(this.depth, this.height)
    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines)

    return this.scene
  }
  flapGeomety6() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(((this.depth / 100) * 5) | 0, this.height - 12)

    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 7) | 0,
      this.height - 1,
      ((this.depth / 100) * 9) | 0,
      this.height,
      ((this.depth / 100) * 15) | 0,
      this.height
    )

    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)
    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }
  flapGeomety6_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(((this.depth / 100) * 5) | 0, this.height - 12)

    this.flaps.bezierCurveTo(
      ((this.depth / 100) * 7) | 0,
      this.height - 1,
      ((this.depth / 100) * 9) | 0,
      this.height,
      ((this.depth / 100) * 15) | 0,
      this.height
    )

    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)
    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap7() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = []
    this.red_line2 = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.height)
    this.red_line.lineTo(this.depth, this.height)
    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.red_line1.push(
      new THREE.Vector2(((this.depth / 100) * 20) | 0, this.height / 2)
    )
    this.red_line1.push(
      new THREE.Vector2(
        ((this.depth / 100) * 40) | 0,
        ((this.height / 100) * 43) | 0
      )
    )
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    )

    this.red_line2.push(
      new THREE.Vector2(
        ((this.depth / 100) * 60) | 0,
        ((this.height / 100) * 43) | 0
      )
    )
    this.red_line2.push(
      new THREE.Vector2(((this.depth / 100) * 80) | 0, this.height / 2)
    )
    this.red_lines2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line2),
      this.color.cr_red
    )

    this.scene.add(this.red_lines, this.red_lines1, this.red_lines2)

    return this.scene
  }
  flapGeomety7() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }
  flapGeomety7_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap8() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, this.height)
    this.red_line.lineTo(((this.height / 100) * 25) | 0, this.height)
    this.red_line.lineTo(
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.red_line.bezierCurveTo(
      ((this.height / 100) * 63) | 0,
      ((this.height / 100) * 75) | 0,
      ((this.height / 100) * 88) | 0,
      ((this.height / 100) * 75) | 0,
      this.height,
      ((this.height / 100) * 50) | 0
    )
    this.red_line.lineTo(this.height, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  flapGeomety8() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(((this.height / 100) * 25) | 0, this.height)
    this.flaps.lineTo(
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.flaps.bezierCurveTo(
      ((this.height / 100) * 63) | 0,
      ((this.height / 100) * 75) | 0,
      ((this.height / 100) * 88) | 0,
      ((this.height / 100) * 75) | 0,
      this.height,
      ((this.height / 100) * 50) | 0
    )
    this.flaps.lineTo(this.height, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }
  flapGeomety8_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(((this.height / 100) * 25) | 0, this.height)
    this.flaps.lineTo(
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.flaps.bezierCurveTo(
      ((this.height / 100) * 63) | 0,
      ((this.height / 100) * 75) | 0,
      ((this.height / 100) * 88) | 0,
      ((this.height / 100) * 75) | 0,
      this.height,
      ((this.height / 100) * 50) | 0
    )
    this.flaps.lineTo(this.height, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap13() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.red_line1 = []
    this.red_line2 = []
    this.red_line3 = []
    this.red_line4 = []
    this.green_line = []

    //! Red line.
    this.red_line3.push(new THREE.Vector2(0, 0))
    this.red_line3.push(new THREE.Vector2(0, this.depth / 2))
    this.green_geometry3 = new THREE.BufferGeometry().setFromPoints(
      this.red_line3
    )
    this.red_lines3 = new THREE.Line(this.green_geometry3, this.color.cr_red)

    this.red_line.push(new THREE.Vector2(0, this.depth / 2))
    this.red_line.push(
      new THREE.Vector2(((this.width / 100) * 20) | 0, this.depth / 2)
    )
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.red_line2.push(
      new THREE.Vector2(((this.width / 100) * 31) | 0, this.depth / 2)
    )
    this.red_line2.push(
      new THREE.Vector2(((this.width / 100) * 69) | 0, this.depth / 2)
    )
    this.green_geometry2 = new THREE.BufferGeometry().setFromPoints(
      this.red_line2
    )
    this.red_lines2 = new THREE.Line(this.green_geometry2, this.color.cr_red)

    this.red_line1.push(
      new THREE.Vector2(((this.width / 100) * 91.5) | 0, this.depth / 2)
    )
    this.red_line1.push(new THREE.Vector2(((this.width / 100) * 98.5) | 0, 7))
    this.red_line1.push(new THREE.Vector2(this.width, 5))
    this.red_line1.push(new THREE.Vector2(this.width, 0))
    this.red_geometry1 = new THREE.BufferGeometry().setFromPoints(
      this.red_line1
    )
    this.red_lines1 = new THREE.Line(this.red_geometry1, this.color.cr_red)

    this.red_line4.push(
      new THREE.Vector2(((this.width / 100) * 80) | 0, this.depth / 2)
    )
    this.red_line4.push(
      new THREE.Vector2(((this.width / 100) * 91.5) | 0, this.depth / 2)
    )
    this.red_geometry4 = new THREE.BufferGeometry().setFromPoints(
      this.red_line4
    )
    this.red_lines4 = new THREE.Line(this.red_geometry4, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, this.depth / 2))
    this.green_line.push(
      new THREE.Vector2(((this.width / 100) * 91.5) | 0, this.depth / 2)
    )
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(
      this.red_lines1,
      this.red_lines,
      this.red_lines2,
      this.red_lines3,
      this.red_lines4,
      this.green_lines
    )

    return this.scene
  }

  flapGeomety13() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 20) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 31) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 69) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 91.5) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 98.5) | 0, 7)
    this.flaps.lineTo(this.width, 5)
    this.flaps.lineTo(this.width, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  flapGeomety13_Invert() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 20) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 31) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 69) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 91.5) | 0, this.depth / 2)
    this.flaps.lineTo(((this.width / 100) * 98.5) | 0, 7)
    this.flaps.lineTo(this.width, 5)
    this.flaps.lineTo(this.width, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }

  handle_lock() {
    this.scene = new THREE.Scene()
    this.red_line_g1 = new THREE.Shape()
    this.red_line_g2 = new THREE.Shape()
    this.red_line_g3 = new THREE.Shape()
    this.red_line_g4 = new THREE.Shape()

    //? Red_lines_g1.
    this.red_line_g1.moveTo(0, 0)
    this.red_line_g1.lineTo(0, ((this.plug / 100) * 80) | 0)
    this.red_line_g1.bezierCurveTo(
      1,
      ((this.plug / 100) * 100) | 0,
      8,
      ((this.plug / 100) * 100) | 0,
      11,
      ((this.plug / 100) * 100) | 0
    )
    this.red_line_g1.lineTo(11, ((this.plug / 100) * 100) | 0)
    this.red_line_g1.bezierCurveTo(
      12,
      ((this.plug / 100) * 100) | 0,
      19,
      ((this.plug / 100) * 100) | 0,
      20,
      ((this.plug / 100) * 77) | 0
    )
    this.red_line_g1.lineTo(this.longhand_fix, ((this.plug / 100) * 65) | 0)
    this.red_line_g1.lineTo(this.longhand_fix + 3, ((this.plug / 100) * 65) | 0)

    this.red_lines_g1 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line_g1),
      this.color.cr_red
    )

    //! Red_lines_g2.
    this.red_line_g2.moveTo(this.longhand_fix + 3, ((this.plug / 100) * 65) | 0)
    this.red_line_g2.lineTo(this.longhand_fix + 5, ((this.flap / 100) * 94) | 0)
    this.red_line_g2.bezierCurveTo(
      25,
      ((this.flap / 100) * 100) | 0,
      29,
      ((this.flap / 100) * 100) | 0,
      33,
      ((this.flap / 100) * 100) | 0
    )
    this.red_line_g2.lineTo(this.width - 31, ((this.flap / 100) * 100) | 0)
    this.red_line_g2.bezierCurveTo(
      this.width - 29,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 94) | 0
    )
    this.red_line_g2.lineTo(this.width - 23, ((this.flap / 100) * 45) | 0)
    this.red_line_g2.lineTo(this.width - 22, ((this.plug / 100) * 65) | 0)

    this.red_lines_g2 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line_g2),
      this.color.cr_red
    )

    //? Red_lines_g3.
    this.red_line_g3.moveTo(this.width - 22, ((this.plug / 100) * 65) | 0)
    this.red_line_g3.lineTo(this.width - 20, ((this.plug / 100) * 65) | 0)
    this.red_line_g3.bezierCurveTo(
      this.width - 20,
      ((this.plug / 100) * 100) | 0,
      this.width - 13,
      ((this.plug / 100) * 100) | 0,
      this.width - 10,
      ((this.plug / 100) * 100) | 0
    )
    this.red_line_g3.lineTo(this.width - 10, ((this.plug / 100) * 100) | 0)
    this.red_line_g3.bezierCurveTo(
      this.width - 8,
      ((this.plug / 100) * 100) | 0,
      this.width - 1,
      ((this.plug / 100) * 100) | 0,
      this.width,
      ((this.plug / 100) * 80) | 0
    )
    this.red_line_g3.lineTo(this.width, 0)

    this.red_lines_g3 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line_g3),
      this.color.cr_red
    )

    //! Red_lines_g4.
    this.red_line_g4.moveTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.red_line_g4.lineTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0
    )

    this.red_line_g4.bezierCurveTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 21) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 24) | 0
    )

    this.red_line_g4.lineTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0
    )

    this.red_line_g4.bezierCurveTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0,
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 36) | 0,
      ((this.flap / 100) * 60) | 0
    )

    this.red_line_g4.lineTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0
    )

    this.red_line_g4.bezierCurveTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 57) | 0
    )

    this.red_line_g4.lineTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0
    )
    this.red_line_g4.bezierCurveTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0,
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.red_line_g4.lineTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )

    this.red_line_g4 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line_g4),
      this.color.cr_red
    )

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_line_g4
    )

    return this.scene
  }
  handle_lockGeomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.plug / 100) * 80) | 0)
    this.cover.bezierCurveTo(
      1,
      ((this.plug / 100) * 100) | 0,
      8,
      ((this.plug / 100) * 100) | 0,
      11,
      ((this.plug / 100) * 100) | 0
    )
    this.cover.lineTo(11, ((this.plug / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      12,
      ((this.plug / 100) * 100) | 0,
      19,
      ((this.plug / 100) * 100) | 0,
      20,
      ((this.plug / 100) * 77) | 0
    )
    this.cover.lineTo(this.longhand_fix, ((this.plug / 100) * 65) | 0)
    this.cover.lineTo(this.longhand_fix + 3, ((this.plug / 100) * 65) | 0)

    this.cover.lineTo(this.longhand_fix + 3, ((this.flap / 100) * 45) | 0)
    this.cover.lineTo(this.longhand_fix + 5, ((this.flap / 100) * 94) | 0)
    this.cover.bezierCurveTo(
      25,
      ((this.flap / 100) * 100) | 0,
      29,
      ((this.flap / 100) * 100) | 0,
      33,
      ((this.flap / 100) * 100) | 0
    )
    this.cover.lineTo(this.width - 31, ((this.flap / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      this.width - 29,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 94) | 0
    )
    this.cover.lineTo(this.width - 23, ((this.flap / 100) * 45) | 0)
    this.cover.lineTo(this.width - 22, ((this.plug / 100) * 65) | 0)

    this.cover.lineTo(this.width - 20, ((this.plug / 100) * 65) | 0)
    this.cover.bezierCurveTo(
      this.width - 20,
      ((this.plug / 100) * 100) | 0,
      this.width - 13,
      ((this.plug / 100) * 100) | 0,
      this.width - 10,
      ((this.plug / 100) * 100) | 0
    )
    this.cover.lineTo(this.width - 10, ((this.plug / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      this.width - 8,
      ((this.plug / 100) * 100) | 0,
      this.width - 1,
      ((this.plug / 100) * 100) | 0,
      this.width,
      ((this.plug / 100) * 80) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.redLineHoles = new THREE.Path()

    this.redLineHoles.moveTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 21) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 24) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0,
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 36) | 0,
      ((this.flap / 100) * 60) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 57) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0,
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )

    this.cover.holes.push(this.redLineHoles)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  handle_lockGeometyInvert() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.plug / 100) * 80) | 0)
    this.cover.bezierCurveTo(
      1,
      ((this.plug / 100) * 100) | 0,
      8,
      ((this.plug / 100) * 100) | 0,
      11,
      ((this.plug / 100) * 100) | 0
    )
    this.cover.lineTo(11, ((this.plug / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      12,
      ((this.plug / 100) * 100) | 0,
      19,
      ((this.plug / 100) * 100) | 0,
      20,
      ((this.plug / 100) * 77) | 0
    )
    this.cover.lineTo(this.longhand_fix, ((this.plug / 100) * 65) | 0)
    this.cover.lineTo(this.longhand_fix + 3, ((this.plug / 100) * 65) | 0)

    this.cover.lineTo(this.longhand_fix + 3, ((this.flap / 100) * 45) | 0)
    this.cover.lineTo(this.longhand_fix + 5, ((this.flap / 100) * 94) | 0)
    this.cover.bezierCurveTo(
      25,
      ((this.flap / 100) * 100) | 0,
      29,
      ((this.flap / 100) * 100) | 0,
      33,
      ((this.flap / 100) * 100) | 0
    )
    this.cover.lineTo(this.width - 31, ((this.flap / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      this.width - 29,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 100) | 0,
      this.width - 26,
      ((this.flap / 100) * 94) | 0
    )
    this.cover.lineTo(this.width - 23, ((this.flap / 100) * 45) | 0)
    this.cover.lineTo(this.width - 22, ((this.plug / 100) * 65) | 0)

    this.cover.lineTo(this.width - 20, ((this.plug / 100) * 65) | 0)
    this.cover.bezierCurveTo(
      this.width - 20,
      ((this.plug / 100) * 100) | 0,
      this.width - 13,
      ((this.plug / 100) * 100) | 0,
      this.width - 10,
      ((this.plug / 100) * 100) | 0
    )
    this.cover.lineTo(this.width - 10, ((this.plug / 100) * 100) | 0)
    this.cover.bezierCurveTo(
      this.width - 8,
      ((this.plug / 100) * 100) | 0,
      this.width - 1,
      ((this.plug / 100) * 100) | 0,
      this.width,
      ((this.plug / 100) * 80) | 0
    )
    this.cover.lineTo(this.width, 0)

    this.redLineHoles = new THREE.Path()

    this.redLineHoles.moveTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 32) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 21) | 0,
      ((this.width / 100) * 30) | 0,
      ((this.flap / 100) * 24) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 57) | 0,
      ((this.width / 100) * 33) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 36) | 0,
      ((this.flap / 100) * 60) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 65) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 60) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 57) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0
    )
    this.redLineHoles.bezierCurveTo(
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 24) | 0,
      ((this.width / 100) * 71) | 0,
      ((this.flap / 100) * 20) | 0,
      ((this.width / 100) * 68) | 0,
      ((this.flap / 100) * 20) | 0
    )
    this.redLineHoles.lineTo(
      ((this.width / 100) * 69) | 0,
      ((this.flap / 100) * 20) | 0
    )

    this.cover.holes.push(this.redLineHoles)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  handle() {
    this.scene = new THREE.Scene()

    this.red_line = []
    this.green_line = []
    this.red_line1 = []

    //! Red_lines.
    this.red_line.push(new THREE.Vector2(0, 0)) //0,0
    this.red_line.push(new THREE.Vector2(0, ((this.depth / 100) * 40) | 0)) //0,33
    this.red_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line),
      this.color.cr_red
    )
    //* Green_lines.
    this.green_line.push(new THREE.Vector2(0, ((this.depth / 100) * 40) | 0)) //0,33
    this.green_line.push(
      new THREE.Vector2(this.width, ((this.depth / 100) * 40) | 0)
    ) //120,33
    this.green_lines = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.green_line),
      this.color.cr_green
    )
    this.green_lines.computeLineDistances()
    //! Red_lines1.
    this.red_line1.push(
      new THREE.Vector2(this.width, ((this.depth / 100) * 40) | 0)
    ) //120,33
    this.red_line1.push(new THREE.Vector2(this.width, 0)) //120,0
    this.red_lines1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(this.red_line1),
      this.color.cr_red
    )

    this.scene.add(this.red_lines, this.green_lines, this.red_lines1)

    return this.scene
  }
  handleGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  handleGeomety_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, ((this.depth / 100) * 40) | 0)
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  lockOnBox() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    this.lockHeight = 20
    this.slopet = 4
    this.sloped = 10
    this.radius = 40

    this.circle = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CircleGeometry(this.radius / 2, 128)),
      this.color.cr_red
    )

    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    // //? ความลกว้างมากกว่าเส้นผ่าศูนย์กลาง และ ระยะห่างไม่น้อยกว่า 5 มิล
    // if(this.width > this.radius && this.depthSpace >= 5) {

    //     //? ความลึกมากกว่าเส้นผ่าศูนย์กลาง และ ระยะห่างไม่น้อยกว่า 5 มิล
    //     if(this.depth > this.radius && this.depthSpace >= 5) {

    this.circle.position.x = this.widthhSpace + this.radius / 2
    this.circle.position.y = this.lockHeight + this.depthSpace + this.radius / 2
    this.scene.add(this.circle)
    // }
    // //? ความลึกมากกว่าเส้นผ่าศูนย์กลาง และ ระยะห่างน้อยกว่า 5 มิล
    // else {
    // this.circle = new THREE.LineSegments(
    //     new THREE.EdgesGeometry( new THREE.CircleGeometry( this.radius / 2, 128 ), new THREE.LineBasicMaterial( { color: '#33FF00' } ) )
    // );

    // this.circle.position.x = ((this.width - this.radius) / 2) + this.radius / 2;
    // this.circle.position.y = (this.lockHeight + ((this.depth - this.radius) / 2)) + this.radius / 2;
    // this.sceneCircle.add(this.circle)
    //     }

    // }else {

    // }

    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, this.lockHeight))
    this.red_line.push(
      new THREE.Vector2(-this.lockHeight, this.lockHeight + this.sloped)
    )
    this.red_line.push(
      new THREE.Vector2(
        -this.lockHeight,
        this.lockHeight + this.depth - this.slopet
      )
    )
    this.red_line.push(new THREE.Vector2(0, this.lockHeight + this.depth))
    this.red_line.push(
      new THREE.Vector2(
        this.slopet,
        this.lockHeight + this.depth + this.lockHeight
      )
    )
    this.red_line.push(
      new THREE.Vector2(
        this.width - this.slopet,
        this.lockHeight + this.depth + this.lockHeight
      )
    )
    this.red_line.push(
      new THREE.Vector2(this.width, this.lockHeight + this.depth)
    )
    this.red_line.push(
      new THREE.Vector2(
        this.width + this.lockHeight,
        this.lockHeight + this.depth - this.slopet
      )
    )
    this.red_line.push(
      new THREE.Vector2(
        this.width + this.lockHeight,
        this.lockHeight + this.sloped
      )
    )
    this.red_line.push(new THREE.Vector2(this.width, this.lockHeight))
    this.red_line.push(new THREE.Vector2(this.width, 0))
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.push(new THREE.Vector2(0, this.lockHeight))
    this.green_line.push(new THREE.Vector2(0, this.lockHeight + this.depth))
    this.green_line.push(
      new THREE.Vector2(this.width, this.lockHeight + this.depth)
    )
    this.green_line.push(new THREE.Vector2(this.width, this.lockHeight))
    this.green_line.push(new THREE.Vector2(0, this.lockHeight))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }

  lockOnBoxCream() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //  this.lockHeight_Fix = 20;
    // this.slopet = 5;
    // this.sloped = 10;

    this.circle = new THREE.LineSegments(
      new THREE.EdgesGeometry(
        new THREE.CircleGeometry((this.radius - 10) / 2, 128)
      ),
      this.color.cr_red
    )

    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    this.circle.position.x = this.widthhSpace + this.radius / 2
    this.circle.position.y =
      this.lockHeight_Fix + this.depthSpace + this.radius / 2

    this.scene.add(this.circle)

    /* #region  red line */
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, this.lockHeight_Fix))
    this.red_line.push(
      new THREE.Vector2(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    )

    this.red_line.push(
      new THREE.Vector2(
        -this.lockHeight_Fix,
        this.lockHeight_Fix + this.depth - this.slopet
      )
    )

    this.red_line.push(new THREE.Vector2(0, this.lockHeight_Fix + this.depth))

    this.red_line.push(
      new THREE.Vector2(
        this.slopet,
        this.lockHeight_Fix + this.depth + this.lockHeight_Fix
      )
    )

    this.red_line.push(
      new THREE.Vector2(
        this.width - this.slopet,
        this.lockHeight_Fix + this.depth + this.lockHeight_Fix
      )
    )
    this.red_line.push(
      new THREE.Vector2(this.width - 1, this.lockHeight_Fix + this.depth)
    )
    this.red_line.push(
      new THREE.Vector2(
        this.width + this.lockHeight_Fix,
        this.lockHeight_Fix + this.depth - this.slopet
      )
    )
    this.red_line.push(
      new THREE.Vector2(
        this.width + this.lockHeight_Fix,
        this.lockHeight_Fix + this.sloped
      )
    )
    this.red_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix))
    this.red_line.push(new THREE.Vector2(this.width - 1, 0))

    /* #endregion */

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    /* #region green_line */
    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix))
    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix + this.depth))

    this.green_line.push(
      new THREE.Vector2(this.width - 1, this.lockHeight_Fix + this.depth)
    )

    this.green_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix))

    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()
    /* #endregion */

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  lockOnBoxCream_Geomety() {
    this.flaps = new THREE.Shape()

    /* #region  circle */
    this.radius = this.depth - 10 / 2 //พทวงกลม

    //! Validate Position
    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    //* New Circle
    var points = []

    for (let i = 0; i <= 360; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * ((this.radius - 10) / 2) +
            this.widthhSpace +
            this.radius / 2,
          Math.cos(i * (Math.PI / 180)) * ((this.radius - 10) / 2) +
            this.lockHeight_Fix +
            this.depthSpace +
            this.radius / 2
        )
      )
    }
    /* #endregion */
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.lockHeight_Fix)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(
      -this.lockHeight_Fix,
      this.lockHeight_Fix + this.depth - this.slopet
    )
    this.flaps.lineTo(0, this.lockHeight_Fix + this.depth)
    this.flaps.lineTo(
      this.slopet,
      this.lockHeight_Fix + this.depth + this.lockHeight_Fix
    )
    this.flaps.lineTo(
      this.width - this.slopet,
      this.lockHeight_Fix + this.depth + this.lockHeight_Fix
    )
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix + this.depth)

    this.flaps.lineTo(
      this.width + this.lockHeight_Fix,
      this.lockHeight_Fix + this.depth - this.slopet
    )
    this.flaps.lineTo(
      this.width + this.lockHeight_Fix,
      this.lockHeight_Fix + this.sloped
    )
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points)) //วงกลม

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)

    this.flapShape.position.z = 1

    return this.flapShape
  }
  lockOnBoxCream_GeometyInvert() {
    this.radius = this.depth - 10 / 2 //พทวงกลม

    //! Validate Position
    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    //* New Circle
    var points = []

    for (let i = 0; i <= 360; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * ((this.radius - 10) / 2) +
            this.widthhSpace +
            this.radius / 2,
          Math.cos(i * (Math.PI / 180)) * ((this.radius - 10) / 2) +
            this.lockHeight_Fix +
            this.depthSpace +
            this.radius / 2
        )
      )
    }

    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.lockHeight_Fix)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(
      -this.lockHeight_Fix,
      this.lockHeight_Fix + this.depth - this.slopet
    )
    this.flaps.lineTo(0, this.lockHeight_Fix + this.depth)
    this.flaps.lineTo(
      this.slopet,
      this.lockHeight_Fix + this.depth + this.lockHeight_Fix
    )
    this.flaps.lineTo(
      this.width - this.slopet,
      this.lockHeight_Fix + this.depth + this.lockHeight_Fix
    )
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix + this.depth)

    this.flaps.lineTo(
      this.width + this.lockHeight_Fix,
      this.lockHeight_Fix + this.depth - this.slopet
    )
    this.flaps.lineTo(
      this.width + this.lockHeight_Fix,
      this.lockHeight_Fix + this.sloped
    )
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  octagonGeomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(this.flap, 0)
    this.cover.lineTo(
      ((this.flap / 100) * 85) | 0,
      ((this.height / 100) * 8) | 0
    )
    this.cover.lineTo(
      ((this.flap / 100) * 85) | 0,
      ((this.height / 100) * 94) | 0
    )
    this.cover.lineTo(this.flap, this.height)
    this.cover.lineTo(this.depth - this.flap, this.height)
    this.cover.lineTo(
      this.depth - (((this.flap / 100) * 85) | 0),
      ((this.height / 100) * 94) | 0
    )
    this.cover.lineTo(
      this.depth - (((this.flap / 100) * 85) | 0),
      ((this.height / 100) * 8) | 0
    )
    this.cover.lineTo(this.depth - this.flap, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  octagonSq_Geomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(this.flap, this.height)
    this.cover.lineTo(this.flap, this.height + this.flap)
    this.cover.lineTo(this.depth - this.flap, this.height + this.flap)
    this.cover.lineTo(this.depth - this.flap, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover, this.cover1)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  trapeziumGeomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, this.height)
    this.cover.lineTo(this.flap, this.height + this.flap)
    this.cover.lineTo(this.flap, this.height + this.flap)
    this.cover.lineTo(this.depth - this.flap, this.height + this.flap)
    this.cover.lineTo(this.depth - this.flap, this.height + this.flap)
    this.cover.lineTo(this.depth - this.flap + this.flap, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover, this.cover1)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  buildingGeomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, this.height)
    this.cover.lineTo(0, this.height + this.height)
    this.cover.lineTo(this.glue, this.height + this.height)
    this.cover.lineTo(this.glue, this.height + this.glue)
    this.cover.lineTo(this.glue + 1, this.height + this.glue)
    this.cover.lineTo(this.glue + 1, this.height + this.glue + this.height)
    this.cover.lineTo(
      this.width - this.glue,
      this.height + this.glue + this.height
    )
    this.cover.lineTo(
      this.width - this.glue - 1,
      this.height + this.glue + this.height
    )
    this.cover.lineTo(this.width - this.glue - 1, this.height + this.glue)
    this.cover.lineTo(this.width - this.glue, this.height + this.glue)
    this.cover.lineTo(this.width - this.glue, this.height + this.height)
    this.cover.lineTo(this.width, this.height + this.height)
    this.cover.lineTo(this.width, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  buildingGeometyInvert() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(0, this.height)
    this.cover.lineTo(0, this.height + this.height)
    this.cover.lineTo(this.glue, this.height + this.height)
    this.cover.lineTo(this.glue, this.height + this.glue)
    this.cover.lineTo(this.glue + 1, this.height + this.glue)
    this.cover.lineTo(this.glue + 1, this.height + this.glue + this.height)
    this.cover.lineTo(
      this.width - this.glue,
      this.height + this.glue + this.height
    )
    this.cover.lineTo(
      this.width - this.glue - 1,
      this.height + this.glue + this.height
    )
    this.cover.lineTo(this.width - this.glue - 1, this.height + this.glue)
    this.cover.lineTo(this.width - this.glue, this.height + this.glue)
    this.cover.lineTo(this.width - this.glue, this.height + this.height)
    this.cover.lineTo(this.width, this.height + this.height)
    this.cover.lineTo(this.width, this.height)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  buildingSq_Geomety() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(this.glue + 1, this.height + this.glue + this.height)
    this.cover.lineTo(0, this.height + this.glue + this.height)
    this.cover.lineTo(0, this.height + this.glue + this.height + this.glue)
    this.cover.lineTo(
      this.width,
      this.height + this.glue + this.height + this.glue
    )
    this.cover.lineTo(this.width, this.height + this.glue + this.height)
    this.cover.lineTo(
      this.width - (this.glue + 1),
      this.height + this.glue + this.height
    )

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  buildingSq_GeometyInvert() {
    this.cover = new THREE.Shape()

    this.cover.moveTo(this.glue + 1, this.height + this.glue + this.height)
    this.cover.lineTo(0, this.height + this.glue + this.height)
    this.cover.lineTo(0, this.height + this.glue + this.height + this.glue)
    this.cover.lineTo(
      this.width,
      this.height + this.glue + this.height + this.glue
    )
    this.cover.lineTo(this.width, this.height + this.glue + this.height)
    this.cover.lineTo(
      this.width - (this.glue + 1),
      this.height + this.glue + this.height
    )

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  //* Snap lock boxes becf-12e01 *// (ทำเพิ่ม).

  flapSnaplock() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, (this.depth / 100) * this.flap - 2))
    this.red_line.push(
      new THREE.Vector2(this.width - 8, (this.depth / 100) * this.flap - 2)
    )
    this.red_line.push(new THREE.Vector2(this.width - 5, 8))
    this.red_line.push(new THREE.Vector2(this.width, 5))
    this.red_line.push(new THREE.Vector2(this.width, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.width, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }

  semicircle_yellow() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    //! Yellow line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, -((this.window_height / 100) * 85) | 0)
    this.red_line.bezierCurveTo(
      0,
      -((this.window_height / 100) * 89) | 0,
      0,
      -((this.window_height / 100) * 97) | 0,
      ((this.window_length / 100) * 10) | 0,
      -this.window_height
    )
    this.red_line.lineTo(
      ((this.window_length / 100) * 91) | 0,
      -this.window_height
    )
    this.red_line.bezierCurveTo(
      ((this.window_length / 100) * 96) | 0,
      -this.window_height,
      this.window_length,
      -((this.window_height / 100) * 97) | 0,
      this.window_length,
      -((this.window_height / 100) * 90) | 0
    )
    this.red_line.lineTo(
      this.window_length,
      -((this.window_height / 100) * 86) | 0
    )
    this.red_line.lineTo(this.window_length, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_yellow)
    this.red_lines.computeLineDistances()

    this.scene.add(this.red_lines)

    return this.scene
  }

  semicircle_red() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, ((-this.display_height / 100) * 85) | 0)

    this.red_line.bezierCurveTo(
      0,
      ((-this.display_height / 100) * 85) | 0,
      0,
      ((-this.display_height / 100) * 98) | 0,
      ((this.display_length / 100) * 14) | 0,
      -this.display_height
    )

    this.red_line.lineTo(
      ((this.display_length / 100) * 86) | 0,
      -this.display_height
    )

    this.red_line.bezierCurveTo(
      ((this.display_length / 100) * 94) | 0,
      -this.display_height,
      this.display_length,
      ((-this.display_height / 100) * 98) | 0,
      this.display_length,
      ((-this.display_height / 100) * 85) | 0
    )

    this.red_line.lineTo(
      this.display_length,
      ((-this.display_height / 100) * 85) | 0
    )
    this.red_line.lineTo(this.display_length, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)
    this.red_lines.computeLineDistances()

    this.scene.add(this.red_lines)

    return this.scene
  }

  coverSnaplock() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.green_group1 = []
    this.green_group2 = []
    this.green_group3 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(0, this.width))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.width))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.width - 0.5))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.red_group1
    )
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(this.depth, 0))
    this.red_group2.push(new THREE.Vector2(this.depth, this.width))
    this.red_group2.push(
      new THREE.Vector2(this.depth - this.plugs_slope, this.width)
    )
    this.red_group2.push(
      new THREE.Vector2(this.depth - this.plugs_slope, this.width - 0.5)
    )

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.red_group2
    )
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.

    this.red_group3.push(
      new THREE.Vector2(this.plugs_slope + 5, this.width + this.plug)
    )
    this.red_group3.push(
      new THREE.Vector2(
        this.depth - this.plugs_slope - 5,
        this.width + this.plug
      )
    )

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.red_group3
    )
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(0, this.width),
          new THREE.Vector2(2, this.width + this.plug - 2),
          new THREE.Vector2(this.plugs_slope + 5, this.width + this.plug),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(
            this.depth - (this.plugs_slope + 5),
            this.width + this.plug
          ),
          new THREE.Vector2(this.depth - 2, this.width + this.plug - 2),
          new THREE.Vector2(this.depth, this.width),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(
      new THREE.Vector2(this.plugs_slope, this.width - 0.5)
    )
    this.green_group1.push(
      new THREE.Vector2(this.depth - this.plugs_slope, this.width - 0.5)
    )

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(
      this.green_group1
    )
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      this.color.cr_green
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(this.depth, this.width / 2))
    this.green_group2.push(new THREE.Vector2(this.depth - 15, this.width / 2))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(
      this.green_group2
    )
    this.green_lines_g2 = new THREE.Line(
      this.green_geometry_g2,
      this.color.cr_green
    )
    this.green_lines_g2.computeLineDistances()

    //* Green line g3.
    this.green_group3.push(new THREE.Vector2(0, this.width / 2))
    this.green_group3.push(new THREE.Vector2(15, this.width / 2))

    this.green_geometry_g3 = new THREE.BufferGeometry().setFromPoints(
      this.green_group3
    )
    this.green_lines_g3 = new THREE.Line(
      this.green_geometry_g3,
      this.color.cr_green
    )
    this.green_lines_g3.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_cruve_left,
      this.red_cruve_right,

      this.green_lines_g1,
      this.green_lines_g2,
      this.green_lines_g3
    )

    return this.scene
  }

  coverSnaplockGeomety1() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, (this.depth / 100) * this.flap - 2)
    this.flaps.lineTo(this.width - 8, (this.depth / 100) * this.flap - 2)
    this.flaps.lineTo(this.width - 5, 8)
    this.flaps.lineTo(this.width, 5)
    this.flaps.lineTo(this.width, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }

  coverSnaplockGeomety1_Invert() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, (this.depth / 100) * this.flap - 2)
    this.flaps.lineTo(this.width - 8, (this.depth / 100) * this.flap - 2)
    this.flaps.lineTo(this.width - 5, 8)
    this.flaps.lineTo(this.width, 5)
    this.flaps.lineTo(this.width, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  //* Tuck Auto Bottom

  Trapezium_1() {
    this.scene = new THREE.Scene()
    this.red_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(
      new THREE.Vector2(((this.depth / 100) * 16) | 0, -this.depth / 2, 0)
    )
    this.red_line.push(
      new THREE.Vector2(((this.depth / 100) * 46) | 0, -this.depth / 2, 0)
    )
    this.red_line.push(new THREE.Vector2(this.depth, 0, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }

  Trapezium_Geomety() {
    this.Trapezium = new THREE.Shape()

    this.Trapezium.moveTo(0, 0)
    this.Trapezium.lineTo(((this.depth / 100) * 16) | 0, -this.depth / 2, 0)
    this.Trapezium.lineTo(((this.depth / 100) * 46) | 0, -this.depth / 2, 0)
    this.Trapezium.lineTo(this.depth, 0, 0)

    this.trapeziumGeo = new THREE.ShapeGeometry(this.Trapezium)

    this.trapeziumShape = new THREE.Mesh(this.trapeziumGeo, this.color.cr_lays)
    this.trapeziumShape.position.z = -1

    return this.trapeziumShape
  }

  Nonagon() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.

    //TODO แก้ models ก้นขัดกล่อง special boxes
    if (this.width <= 200 || this.depth <= 200) {
      this.red_line.push(new THREE.Vector2(0, 0, 0))
      this.red_line.push(
        new THREE.Vector2(
          ((this.width / 100) * 3) | 0,
          (-(this.depth / 100) * 65) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          ((this.width / 100) * 40) | 0,
          (-(this.depth / 100) * 65) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width / 2 + 1) | 0,
          (-(this.depth / 100) * 59) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2((this.width / 2) | 0, (-this.depth / 2) | 0, 0)
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width - this.depth / 2) | 0,
          (-this.depth / 2) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width - (this.depth / 100) * 27) | 0,
          (-(this.depth / 100) * 65) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width - (this.depth / 100) * 4) | 0,
          (-(this.depth / 100) * 65) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width - (this.depth / 100) * 4) | 0,
          (-(this.depth / 100) * 17) | 0,
          0
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          (this.width - (this.depth / 100) * 10) | 0,
          (-(this.depth / 100) * 10) | 0,
          0
        )
      )
      this.red_line.push(new THREE.Vector2(this.width, 0, 0))
    } else {
      this.red_line.push(new THREE.Vector2(0, 0))
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (3 / 100)),
          Math.round(this.depth * (-32 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (40 / 100)),
          Math.round(this.depth * (-32 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (51 / 100)),
          Math.round(this.depth * (-29 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (50 / 100)),
          Math.round(this.depth * (-25 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (56 / 100)),
          Math.round(this.depth * (-32 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (98 / 100)),
          Math.round(this.depth * (-32 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (98 / 100)),
          Math.round(this.depth * (-8 / 50))
        )
      )
      this.red_line.push(
        new THREE.Vector2(
          Math.round(this.width * (90 / 100)),
          Math.round(this.depth * (-5 / 50))
        )
      )
      this.red_line.push(new THREE.Vector2(this.width, 0))
    }

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.push(new THREE.Vector2(this.width, 0))
    this.green_line.push(
      new THREE.Vector2(this.width - this.depth / 2, (-this.depth / 2) | 0)
    )

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(
      this.green_line
    )
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    const test = (-(this.depth / 100) * 65) | 0
    // console.log(test)

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }

  Nonagon_Geomety() {
    this.red_line = new THREE.Shape()

    //! Red line.

    //TODO แก้ models ก้นขัดกล่อง special boxes
    if (this.width <= 200 || this.depth <= 200) {
      this.red_line.moveTo(0, 0)
      this.red_line.lineTo(
        ((this.width / 100) * 3) | 0,
        -((this.depth / 100) * 65) | 0
      )
      this.red_line.lineTo(
        ((this.width / 100) * 40) | 0,
        -((this.depth / 100) * 65) | 0
      )

      this.red_line.lineTo(
        -((this.width / 2 + 1) | 0, -((this.depth / 100) * 59) | 0)
      )
      this.red_line.lineTo(((this.width / 2) | 0, (-this.depth / 2) | 0))

      this.red_line.lineTo(
        -((this.width - this.depth / 2) | 0, (-this.depth / 2) | 0)
      )

      this.red_line.lineTo(
        -((this.width - (this.depth / 100) * 27) | 0,
        (-(this.depth / 100) * 65) | 0)
      )

      this.red_line.lineTo(
        ((this.width - (this.depth / 100) * 4) | 0,
        (-(this.depth / 100) * 65) | 0)
      )

      this.red_line.lineTo(
        -((this.width - (this.depth / 100) * 4) | 0,
        (-(this.depth / 100) * 17) | 0)
      )

      this.red_line.lineTo(
        -((this.width - (this.depth / 100) * 10) | 0,
        -((this.depth / 100) * 10) | 0)
      )

      this.red_line.lineTo((-this.width, 0))
    } else {
      this.red_line.moveTo((0, 0))
      this.red_line.lineTo(
        (Math.round(this.width * (3 / 100)),
        Math.round(this.depth * (-32 / 50)))
      )
      // this.red_line.lineTo(
      //   (Math.round(this.width * (40 / 100)),
      //   Math.round(this.depth * (-32 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (51 / 100)),
      //   Math.round(this.depth * (-29 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (50 / 100)),
      //   Math.round(this.depth * (-25 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (56 / 100)),
      //   Math.round(this.depth * (-32 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (98 / 100)),
      //   Math.round(this.depth * (-32 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (98 / 100)),
      //   Math.round(this.depth * (-8 / 50)))
      // );
      // this.red_line.lineTo(
      //   (Math.round(this.width * (90 / 100)),
      //   Math.round(this.depth * (-5 / 50)))
      // );
      // this.red_line.lineTo((this.width, 0));
    }

    this.Red_lineGeometry = new THREE.ShapeGeometry(this.red_line)
    this.Red_lineGeometryShape = new THREE.Mesh(
      this.Red_lineGeometry,
      this.color.cr_lays
    )

    this.Red_lineGeometryShape.position.z = -1

    return this.Red_lineGeometryShape
  }

  //* Food Boxes becf-12007 *// (ทำเพิ่ม).

  flap9() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.height)
    this.red_line.lineTo(this.depth - 10, this.height)

    this.red_line.bezierCurveTo(
      this.depth - 10,
      this.height,
      this.depth - 1,
      this.height,
      this.depth - 1,
      this.height - 10
    )
    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  flapGeomety9() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth - 10, this.height)

    this.flaps.bezierCurveTo(
      this.depth - 10,
      this.height,
      this.depth - 1,
      this.height,
      this.depth - 1,
      this.height - 10
    )
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }
  flapGeomety9_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth - 10, this.height)

    this.flaps.bezierCurveTo(
      this.depth - 10,
      this.height,
      this.depth - 1,
      this.height,
      this.depth - 1,
      this.height - 10
    )
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap10() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.height - 10)
    this.red_line.bezierCurveTo(
      0,
      this.height,
      10,
      this.height,
      10,
      this.height
    )
    this.red_line.lineTo(this.width - 10, this.height)
    this.red_line.bezierCurveTo(
      this.width - 10,
      this.height,
      this.width,
      this.height,
      this.width,
      this.height - 10
    )
    this.red_line.lineTo(this.width, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  flapGeomety10() {
    var points = []

    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          Math.cos(i * (Math.PI / 180)) * this.radius + this.width / 2,
          Math.sin(i * (Math.PI / 180)) * this.radius
        )
      )
    }

    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height - 10)
    this.flaps.bezierCurveTo(0, this.height, 10, this.height, 10, this.height)
    this.flaps.lineTo(this.width - 10, this.height)
    this.flaps.bezierCurveTo(
      this.width - 10,
      this.height,
      this.width,
      this.height,
      this.width,
      this.height - 10
    )
    this.flaps.lineTo(this.width, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))
    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )
    this.flapGeomety.position.z = 1
    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap11() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    if (this.height >= 65 && this.height <= 69) {
      const testHeight = 0

      switch (this.height) {
        case (this.height = 69):
          this.testHeight = 64
          break
        case (this.height = 68):
          this.testHeight = 63
          break
        case (this.height = 67):
          this.testHeight = 62
          break
        case (this.height = 66):
          this.testHeight = 61
          break
        case (this.height = 65):
          this.testHeight = 60
          break
        default:
          this.testHeight = 30
          break
      }
      this.red_line.moveTo(0, 0)
      this.red_line.lineTo(0, this.testHeight / 2)
      this.red_line.bezierCurveTo(
        2,
        this.testHeight / 2 + 5,
        10,
        this.testHeight,
        13,
        this.testHeight
      )
      this.red_line.lineTo(this.height - testHeight, this.testHeight)
    } else if (this.height >= 70) {
      this.red_line.moveTo(0, 0)
      this.red_line.lineTo(0, 30)
      this.red_line.bezierCurveTo(10, 50, 10, 65, 15, 65)
      this.red_line.lineTo(this.height, 65)
    } else {
      this.red_line.moveTo(0, 0)
      this.red_line.lineTo(0, this.height / 2)
      this.red_line.bezierCurveTo(
        5,
        ((this.height / 100) * 67) | 0,
        5,
        this.height,
        10,
        this.height
      )
    }

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }

  flapGeomety11() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    if (this.height >= 65 && this.height <= 69) {
      const testHeight = 0

      switch (this.height) {
        case (this.height = 69):
          this.testHeight = 64
          break
        case (this.height = 68):
          this.testHeight = 63
          break
        case (this.height = 67):
          this.testHeight = 62
          break
        case (this.height = 66):
          this.testHeight = 61
          break
        case (this.height = 65):
          this.testHeight = 60
          break
        default:
          this.testHeight = 30
          break
      }
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, this.testHeight / 2)
      this.flaps.bezierCurveTo(
        2,
        this.testHeight / 2 + 5,
        10,
        this.testHeight,
        13,
        this.testHeight
      )
      this.flaps.lineTo(this.height - testHeight, this.testHeight)
      this.flaps.lineTo(this.height - testHeight, 0)
    } else if (this.height >= 70) {
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, 30)
      this.flaps.bezierCurveTo(10, 50, 10, 65, 15, 65)
      this.flaps.lineTo(this.height, 65)
      this.flaps.lineTo(this.height, 0)
    } else {
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, this.height / 2)
      this.flaps.bezierCurveTo(
        5,
        ((this.height / 100) * 67) | 0,
        5,
        this.height,
        10,
        this.height
      )
      this.flaps.lineTo(this.height, this.height)
      this.flaps.lineTo(this.height, 0)
    }

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flapGeomety11_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    if (this.height >= 65 && this.height <= 69) {
      const testHeight = 0

      switch (this.height) {
        case (this.height = 69):
          this.testHeight = 64
          break
        case (this.height = 68):
          this.testHeight = 63
          break
        case (this.height = 67):
          this.testHeight = 62
          break
        case (this.height = 66):
          this.testHeight = 61
          break
        case (this.height = 65):
          this.testHeight = 60
          break
        default:
          this.testHeight = 30
          break
      }
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, this.testHeight / 2)
      this.flaps.bezierCurveTo(
        2,
        this.testHeight / 2 + 5,
        10,
        this.testHeight,
        13,
        this.testHeight
      )
      this.flaps.lineTo(this.height - testHeight, this.testHeight)
      this.flaps.lineTo(this.height - testHeight, 0)
    } else if (this.height >= 70) {
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, 30)
      this.flaps.bezierCurveTo(10, 50, 10, 65, 15, 65)
      this.flaps.lineTo(this.height, 65)
      this.flaps.lineTo(this.height, 0)
    } else {
      this.flaps.moveTo(0, 0)
      this.flaps.lineTo(0, this.height / 2)
      this.flaps.bezierCurveTo(
        5,
        ((this.height / 100) * 67) | 0,
        5,
        this.height,
        10,
        this.height
      )
      this.flaps.lineTo(this.height, this.height)
      this.flaps.lineTo(this.height, 0)
    }

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  //TODO

  flap12() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    if (this.height >= 20 && this.height < 36) {
      switch (this.height) {
        case (this.height = 20):
          this.window_height = 39.5
          break
        case (this.height = 21):
          this.window_height = 41.5
          break
        case (this.height = 22):
          this.window_height = 43.5
          break
        case (this.height = 23):
          this.window_height = 45.5
          break
        case (this.height = 24):
          this.window_height = 47.5
          break
        case (this.height = 25):
          this.window_height = 49.5
          break
        case (this.height = 26):
          this.window_height = 51.5
          break
        case (this.height = 27):
          this.window_height = 53.5
          break
        case (this.height = 28):
          this.window_height = 55.5
          break
        case (this.height = 29):
          this.window_height = 57.5
          break
        case (this.height = 30):
          this.window_height = 59.5
          break
        case (this.height = 31):
          this.window_height = 61.5
          break
        case (this.height = 32):
          this.window_height = 63.5
          break
        case (this.height = 33):
          this.window_height = 65.5
          break
        case (this.height = 34):
          this.window_height = 67.5
          break
        case (this.height = 35):
          this.window_height = 69.5
          break
        default:
          this.window_height = 59.5
          break
      }

      this.red_line.moveTo(0, 0) //this.window_height D = 59.50
      this.red_line.lineTo(0, -(this.window_height / 2 + this.height / 2) | 0)
      this.red_line.lineTo(
        3,
        -((this.window_height / 100) * 72 + this.height / 2) | 0
      )
      this.red_line.bezierCurveTo(
        4,
        -this.window_height,
        5,
        -this.window_height,
        this.height - 5,
        -this.window_height
      )
      this.red_line.lineTo(this.height, -(this.window_height / 2) | 0)
    } else {
      this.red_line.moveTo(0, 0)
      this.red_line.lineTo(0, -45)
      this.red_line.lineTo(14, -68)
      this.red_line.bezierCurveTo(15, -70, 20, -70, 30, -70)
      this.red_line.lineTo(this.height, -70)
    }

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }

  flap12Geomety() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()
    this.green_line = []

    if (this.height >= 20 && this.height < 36) {
      switch (this.height) {
        case (this.height = 20):
          this.window_height = 39.5
          break
        case (this.height = 21):
          this.window_height = 41.5
          break
        case (this.height = 22):
          this.window_height = 43.5
          break
        case (this.height = 23):
          this.window_height = 45.5
          break
        case (this.height = 24):
          this.window_height = 47.5
          break
        case (this.height = 25):
          this.window_height = 49.5
          break
        case (this.height = 26):
          this.window_height = 51.5
          break
        case (this.height = 27):
          this.window_height = 53.5
          break
        case (this.height = 28):
          this.window_height = 55.5
          break
        case (this.height = 29):
          this.window_height = 57.5
          break
        case (this.height = 30):
          this.window_height = 59.5
          break
        case (this.height = 31):
          this.window_height = 61.5
          break
        case (this.height = 32):
          this.window_height = 63.5
          break
        case (this.height = 33):
          this.window_height = 65.5
          break
        case (this.height = 34):
          this.window_height = 67.5
          break
        case (this.height = 35):
          this.window_height = 69.5
          break
        default:
          this.window_height = 59.5
          break
      }

      this.flaps.moveTo(0, 0) //this.window_height D = 59.50
      this.flaps.lineTo(0, -(this.window_height / 2 + this.height / 2) | 0)
      this.flaps.lineTo(
        3,
        -((this.window_height / 100) * 72 + this.height / 2) | 0
      )
      this.flaps.bezierCurveTo(
        4,
        -this.window_height,
        5,
        -this.window_height,
        this.height - 5,
        -this.window_height
      )
      this.flaps.lineTo(this.height, -(this.window_height / 2) | 0)
      this.flaps.lineTo(this.height, 0)
    } else {
      this.flaps.moveTo(0, 0) //this.window_height D = 59.50
      this.flaps.lineTo(0, -45)
      this.flaps.lineTo(14, -68)
      this.flaps.bezierCurveTo(15, -70, 20, -70, 30, -70)
      this.flaps.lineTo(this.height, -70)
      this.flaps.lineTo(this.height, 0)
    }

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flap12Geomety_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()
    this.green_line = []

    if (this.height >= 20 && this.height < 36) {
      switch (this.height) {
        case (this.height = 20):
          this.window_height = 39.5
          break
        case (this.height = 21):
          this.window_height = 41.5
          break
        case (this.height = 22):
          this.window_height = 43.5
          break
        case (this.height = 23):
          this.window_height = 45.5
          break
        case (this.height = 24):
          this.window_height = 47.5
          break
        case (this.height = 25):
          this.window_height = 49.5
          break
        case (this.height = 26):
          this.window_height = 51.5
          break
        case (this.height = 27):
          this.window_height = 53.5
          break
        case (this.height = 28):
          this.window_height = 55.5
          break
        case (this.height = 29):
          this.window_height = 57.5
          break
        case (this.height = 30):
          this.window_height = 59.5
          break
        case (this.height = 31):
          this.window_height = 61.5
          break
        case (this.height = 32):
          this.window_height = 63.5
          break
        case (this.height = 33):
          this.window_height = 65.5
          break
        case (this.height = 34):
          this.window_height = 67.5
          break
        case (this.height = 35):
          this.window_height = 69.5
          break
        default:
          this.window_height = 59.5
          break
      }

      this.flaps.moveTo(0, 0) //this.window_height D = 59.50
      this.flaps.lineTo(0, -(this.window_height / 2 + this.height / 2) | 0)
      this.flaps.lineTo(
        3,
        -((this.window_height / 100) * 72 + this.height / 2) | 0
      )
      this.flaps.bezierCurveTo(
        4,
        -this.window_height,
        5,
        -this.window_height,
        this.height - 5,
        -this.window_height
      )
      this.flaps.lineTo(this.height, -(this.window_height / 2) | 0)
      this.flaps.lineTo(this.height, 0)
    } else {
      this.flaps.moveTo(0, 0) //this.window_height D = 59.50
      this.flaps.lineTo(0, -45)
      this.flaps.lineTo(14, -68)
      this.flaps.bezierCurveTo(15, -70, 20, -70, 30, -70)
      this.flaps.lineTo(this.height, -70)
      this.flaps.lineTo(this.height, 0)
    }

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flapGeometyA2_HalfDown() {
    var points = []

    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          Math.cos(i * (Math.PI / 180)) * this.radius + this.width / 2,
          Math.sin(i * (-Math.PI / 180)) * this.radius + this.height
        )
      )
      // console.log(Math.sin(i * -(Math.PI / 180)));
    }

    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, this.height)
    this.flaps.lineTo(0, 0)
    this.flaps.lineTo(this.width / 6, 0)
    this.flaps.lineTo(this.width / 6 + 1, -3)
    this.flaps.lineTo((this.width / 6) * 2, -3)
    this.flaps.lineTo((this.width / 6) * 2 + 1, 0)
    this.flaps.lineTo((this.width / 6) * 4, 0)
    this.flaps.lineTo((this.width / 6) * 4 + 1, -3)
    this.flaps.lineTo((this.width / 6) * 5, -3)
    this.flaps.lineTo((this.width / 6) * 5 + 1, 0)
    this.flaps.lineTo(this.width, 0)
    this.flaps.lineTo(this.width, this.height)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flapGeometyB3() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = 1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  flapGeometyB3_Invert() {
    this.scene = new THREE.Scene()
    this.flaps = new THREE.Shape()

    //! Red line.
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.depth, this.height)
    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.Mesh(
      new THREE.ShapeGeometry(this.flaps),
      this.color.cr_lays
    )

    this.flapGeomety.position.z = -1

    this.scene.add(this.flapGeomety)

    return this.scene
  }

  planeBGeometyCircle() {
    var points = []
    var points_1 = []

    for (let i = 0; i <= 360; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * this.radius + this.width / 3,
          Math.cos(i * (Math.PI / 180)) * this.radius + this.height / 2
        )
      )
    }

    for (let i = 0; i <= 360; i++) {
      points_1.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * this.radius + this.width / 1.5,
          Math.cos(i * (Math.PI / 180)) * this.radius + this.height / 2
        )
      )
    }

    //console.log(this.radius)

    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.width, this.height)
    this.flaps.lineTo(this.width, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))
    this.flaps.holes.push(new THREE.Path().setFromPoints(points_1))

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)

    this.flapShape.position.z = 1
    return this.flapShape
  }

  planeBGeomety_Halftop() {
    //? Half Circle
    var points = []

    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          Math.cos(i * (Math.PI / 180)) * this.radius + this.width / 2,
          Math.sin(i * (Math.PI / 180)) * this.radius
        )
      )
    }

    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.height)
    this.flaps.lineTo(this.width, this.height)
    this.flaps.lineTo(this.width, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)

    this.flapShape.position.z = 1
    return this.flapShape
  }

  flap22() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(3, 3)
    this.red_line.lineTo(3, this.height - 10)

    this.red_line.bezierCurveTo(
      3,
      this.height - 10,
      3,
      this.height - 5,
      8,
      this.height - 5
    )

    this.red_line.lineTo(this.height - 15, this.height - 5)

    this.red_line.bezierCurveTo(
      this.height - 9,
      this.height - 5,

      this.height - 7,
      this.height - 10,

      this.height - 7,
      this.height - 10
    )

    this.red_line.lineTo(this.height - 3, 3)
    this.red_line.lineTo(this.height, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }

  flap222() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = []

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.height)
    this.red_line.lineTo(this.depth, this.height)
    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  //TODO food-boxes-becf-1200d

  rectangle() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.green_line = new THREE.Shape()
    this.green_line1 = new THREE.Shape()

    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, this.width)
    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.moveTo(this.height, this.width)
    this.green_line.lineTo(0, this.width)
    this.green_geometry = new THREE.ShapeGeometry(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.green_line1.moveTo(0, 0)
    this.green_line1.lineTo(this.height, 0)
    this.green_geometry1 = new THREE.ShapeGeometry(this.green_line1)
    this.green_lines1 = new THREE.Line(
      this.green_geometry1,
      this.color.cr_green
    )
    this.green_lines1.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines, this.green_lines1)

    return this.scene
  }

  daisy() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, ((this.height / 100) * 17) | 0)
    this.red_line.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 30) | 0
    )
    this.red_line.bezierCurveTo(
      ((this.height / 100) * 14) | 0,
      ((this.height / 100) * 40) | 0,
      ((this.height / 100) * 8) | 0,
      ((this.height / 100) * 68) | 0,
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.red_line.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.red_line.bezierCurveTo(
      ((this.height / 100) * 37) | 0,
      ((this.height / 100) * 70) | 0,
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 65) | 0,
      ((this.height / 100) * 60) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.red_line.lineTo(this.height, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }

  daisyGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.height / 100) * 17) | 0)
    this.cover.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 30) | 0
    )
    this.cover.bezierCurveTo(
      ((this.height / 100) * 14) | 0,
      ((this.height / 100) * 40) | 0,
      ((this.height / 100) * 8) | 0,
      ((this.height / 100) * 68) | 0,
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.cover.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.cover.bezierCurveTo(
      ((this.height / 100) * 37) | 0,
      ((this.height / 100) * 70) | 0,
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 65) | 0,
      ((this.height / 100) * 60) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.cover.lineTo(this.height, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  daisyGeomety_Invert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, ((this.height / 100) * 17) | 0)
    this.cover.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 30) | 0
    )
    this.cover.bezierCurveTo(
      ((this.height / 100) * 14) | 0,
      ((this.height / 100) * 40) | 0,
      ((this.height / 100) * 8) | 0,
      ((this.height / 100) * 68) | 0,
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.cover.lineTo(
      ((this.height / 100) * 30) | 0,
      ((this.height / 100) * 70) | 0
    )
    this.cover.bezierCurveTo(
      ((this.height / 100) * 37) | 0,
      ((this.height / 100) * 70) | 0,
      ((this.height / 100) * 50) | 0,
      ((this.height / 100) * 65) | 0,
      ((this.height / 100) * 60) | 0,
      ((this.height / 100) * 50) | 0
    )
    this.cover.lineTo(this.height, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  line_circle() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = new THREE.Shape()
    this.green_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(this.height, 0)
    this.red_line.lineTo(this.height, ((this.width / 100) * 45.5) | 0)
    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.red_line1.moveTo(this.height, this.width)
    this.red_line1.lineTo(this.height, ((this.width / 100) * 55.3) | 0)
    this.red_geometry1 = new THREE.ShapeGeometry(this.red_line1)
    this.red_lines1 = new THREE.Line(this.red_geometry1, this.color.cr_red)

    this.scene.add(this.red_lines, this.red_lines1)

    return this.scene
  }

  rectangle1() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = new THREE.Shape()
    this.red_line2 = new THREE.Shape()
    this.green_line = new THREE.Shape()
    this.green_line1 = new THREE.Shape()

    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, -this.height)
    this.red_line.lineTo(this.depth, -this.height)
    this.red_line.lineTo(this.depth, 0)
    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.moveTo(0, 0)
    this.green_line.lineTo(this.height, -this.height)
    this.green_geometry = new THREE.ShapeGeometry(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.green_line1.moveTo(this.depth, 0)
    this.green_line1.lineTo(this.depth - this.height, -this.height)
    this.green_geometry1 = new THREE.ShapeGeometry(this.green_line1)
    this.green_lines1 = new THREE.Line(
      this.green_geometry1,
      this.color.cr_green
    )
    this.green_lines1.computeLineDistances()

    this.red_line1.moveTo(this.depth - 65, -(this.height - 15))
    this.red_line1.lineTo(this.depth - 70, -(this.height - 10))
    this.red_geometry1 = new THREE.ShapeGeometry(this.red_line1)
    this.red_lines1 = new THREE.Line(this.red_geometry1, this.color.cr_red)

    this.red_line2.moveTo(this.depth - 15, -(this.height - 15))
    this.red_line2.lineTo(this.depth - 10, -(this.height - 10))
    this.red_geometry2 = new THREE.ShapeGeometry(this.red_line2)
    this.red_lines2 = new THREE.Line(this.red_geometry2, this.color.cr_red)

    this.scene.add(
      this.red_lines,
      this.green_lines,
      this.green_lines1,
      this.red_lines1,
      this.red_lines2
    )

    return this.scene
  }

  rectangle2() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = new THREE.Shape()
    this.green_line1 = new THREE.Shape()

    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(0, -this.height)
    this.red_line.lineTo(this.depth, -this.height)
    this.red_line.lineTo(this.depth, 0)
    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line1.moveTo(this.depth, 0)
    this.green_line1.lineTo(this.depth - this.height, -this.height)
    this.green_geometry1 = new THREE.ShapeGeometry(this.green_line1)
    this.green_lines1 = new THREE.Line(
      this.green_geometry1,
      this.color.cr_green
    )
    this.green_lines1.computeLineDistances()

    this.red_line1.moveTo(this.depth - 15, -(this.height - 15))
    this.red_line1.lineTo(this.depth - 10, -(this.height - 10))
    // this.red_line1.moveTo((this.depth/100)*82 |0, -(this.height/100)*50 |0);
    // this.red_line1.lineTo((this.depth/100)*88 |0, -(this.height/100)*67 |0);
    this.red_geometry1 = new THREE.ShapeGeometry(this.red_line1)
    this.red_lines1 = new THREE.Line(this.red_geometry1, this.color.cr_red)

    this.scene.add(this.red_lines, this.red_lines1, this.green_lines1)

    return this.scene
  }

  A_Geomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.width)
    this.cover.lineTo(this.depth, this.width)
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  B_Geomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.width)
    this.cover.lineTo(this.height, this.width)
    this.cover.lineTo(this.height, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  rectangleGeomety() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -this.height)
    this.cover.lineTo(this.depth, -this.height)
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  rectangleGeomety_Invtert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -this.height)
    this.cover.lineTo(this.depth, -this.height)
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  halfcircle_Geomety() {
    var points = []
    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          (Math.sin(i * (Math.PI / 180)) *
            ((((this.width / 100) * 55.3) | 0) -
              (((this.width / 100) * 45.5) | 0))) /
            2,
          (Math.cos(i * (Math.PI / 180)) *
            ((((this.width / 100) * 55.3) | 0) -
              (((this.width / 100) * 45.5) | 0))) /
            2
        )
      )
    }

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.width)
    this.cover.lineTo(this.height, this.width)
    this.cover.lineTo(this.height, 0)

    this.cover.holes.push(new THREE.Path().setFromPoints(points))
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1
    return this.coverShape
  }

  //TODO

  halfCircle_Outline_Geometry() {
    var points = []
    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * (this.width / 100) * 19,
          Math.cos(i * (Math.PI / 180)) * (this.width / 100) * 19
        )
      )
    }

    var shapeHalfCircle = []

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(0, (this.width / 100) * 19 + (this.width / 100) * 11)
    this.cover.bezierCurveTo(
      0,
      (this.width / 100) * 19 + (this.width / 100) * 11,
      (this.width / 100) * 30,
      (this.width / 100) * 30,
      (this.width / 100) * 19 + (this.width / 100) * 11,
      0
    )
    this.cover.lineTo((this.width / 100) * 19 + (this.width / 100) * 11, 0)

    this.cover.holes.push(new THREE.Path().setFromPoints(points))
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1
    return this.coverShape
  }

  halfCircle_Outline_GeometryInvert() {
    var points = []
    for (let i = 0; i <= 180; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * (this.width / 100) * 19,
          Math.cos(i * (Math.PI / 180)) * (this.width / 100) * 19
        )
      )
    }

    var shapeHalfCircle = []

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)

    this.cover.lineTo(0, (this.width / 100) * 19 + (this.width / 100) * 11)
    this.cover.bezierCurveTo(
      0,
      (this.width / 100) * 19 + (this.width / 100) * 11,
      (this.width / 100) * 30,
      (this.width / 100) * 30,
      (this.width / 100) * 19 + (this.width / 100) * 11,
      0
    )
    this.cover.lineTo((this.width / 100) * 19 + (this.width / 100) * 11, 0)

    this.cover.holes.push(new THREE.Path().setFromPoints(points))
    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1
    return this.coverShape
  }

  //TODO

  coverfood() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()

    this.red_lines_g1.moveTo(0, 0)
    this.red_lines_g1.lineTo(0, this.height)
    this.red_lines_g1.lineTo(this.height / 2, this.height)
    this.red_lines_g1.lineTo(this.height, this.height / 2)
    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    this.scene.add(this.red_lines_g1)

    return this.scene
  }

  ladybird() {
    this.scene = new THREE.Scene()
    this.red_lines_g1 = new THREE.Shape()
    this.green_lines_g1 = new THREE.Shape()
    this.red_lines_g2 = new THREE.Shape()
    this.red_lines_g1.moveTo(0, 0)
    this.red_lines_g1.lineTo(30, 50)
    this.red_geometry_g1 = new THREE.ShapeGeometry(this.red_lines_g1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)
    this.green_lines_g1.moveTo(30, 50)
    this.green_lines_g1.lineTo(this.width - 20, 50)
    this.green_geometry_g1 = new THREE.ShapeGeometry(this.green_lines_g1)
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      this.color.cr_green
    )
    this.green_lines_g1.computeLineDistances()
    this.red_lines_g2.moveTo(this.width - 20, 50)
    this.red_lines_g2.lineTo(this.width, 0)
    this.red_geometry_g2 = new THREE.ShapeGeometry(this.red_lines_g2)
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    this.scene.add(this.red_lines_g1, this.green_lines_g1, this.red_lines_g2)

    return this.scene
  }

  covertest() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line1 = new THREE.Shape()
    this.red_line5 = new THREE.Shape()
    this.red_line2 = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0)
    this.red_line.lineTo(
      ((this.depth / 100) * 38) | 0,
      ((this.width / 100) * 93.5) | 0
    )
    this.red_lines = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line),
      this.color.cr_red
    )

    this.red_line1.moveTo(this.depth, 0)
    this.red_line1.lineTo(
      ((this.depth / 100) * 65) | 0,
      ((this.width / 100) * 93.5) | 0
    )
    this.red_lines1 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line1),
      this.color.cr_red
    )

    this.red_line2.moveTo(
      ((this.depth / 100) * 38) | 0,
      ((this.width / 100) * 93.5) | 0
    )
    this.red_line2.lineTo(
      ((this.depth / 100) * 38) | 0,
      ((this.width / 100) * 93.5) | 0
    )

    this.red_line2.bezierCurveTo(
      ((this.depth / 100) * 38) | 0,
      ((this.width / 100) * 93.5) | 0,
      ((this.depth / 100) * 50) | 0,
      this.width,
      ((this.depth / 100) * 65) | 0,
      ((this.width / 100) * 93.5) | 0
    )
    this.red_lines2 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line2),
      this.color.cr_red
    )

    //!  ***
    this.red_line5.moveTo(
      ((this.depth / 100) * 49) | 0,
      (this.width / 100) * 22.5
    ) //39.5
    this.red_line5.lineTo(
      ((this.depth / 100) * 49) | 0,
      ((this.width / 100) * 78) | 0
    ) //136
    this.red_line5.bezierCurveTo(
      ((this.depth / 100) * 49) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 79) | 0 | 0,
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 78) | 0 | 0
    )
    this.red_line5.lineTo(
      ((this.depth / 100) * 50) | 0,
      (this.width / 100) * 23
    )
    this.red_line5.bezierCurveTo(
      ((this.depth / 100) * 50) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 49) | 0,
      ((this.width / 100) * 22) | 0,
      ((this.depth / 100) * 49) | 0,
      ((this.width / 100) * 23) | 0
    )
    this.red_lines5 = new THREE.Line(
      new THREE.ShapeGeometry(this.red_line5),
      this.color.cr_red
    )

    this.scene.add(
      this.red_lines,
      this.red_lines1,
      this.red_lines5,
      this.red_lines2
    )

    return this.scene
  }
}
