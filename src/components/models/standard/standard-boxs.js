import * as THREE from 'three';

import texture from '../../function/texture';
import rotateObject from '../../function/rotateObject';

const A = 250;
const B = 380;
const C = 220;

const O = 1;

let face;

const StandardBoxs = () => {
  //*  Plane
  const plane_A_side_shape = new THREE.Geometry();
  plane_A_side_shape.vertices.push(
    new THREE.Vector3(0, 0, 0), // 0
    new THREE.Vector3(A, 0, 0), // 1
    new THREE.Vector3(A, 0, -2.5), // 2,
    new THREE.Vector3(0, 0, -2.5), // 3,

    new THREE.Vector3(A, C, -2.5), // 4,
    new THREE.Vector3(0, C, -2.5), // 5,
    new THREE.Vector3(0, C, 0), // 6
    new THREE.Vector3(A, C, 0) // 7
  );

  //*  Front Plane
  face = new THREE.Face3(0, 1, 6);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(6, 7, 1);
  face.materialindex = 0;
  plane_A_side_shape.faces.push(face);

  //*  Back Plane
  face = new THREE.Face3(3, 2, 5);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);
  face = new THREE.Face3(5, 4, 2);
  face.materialindex = 1;
  plane_A_side_shape.faces.push(face);

  //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A_side_shape.faceVertexUvs[0].push([
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ]);

  plane_A_side_shape.computeFaceNormals();

  const plane_A_side = new THREE.Mesh(
    plane_A_side_shape,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
      map: texture,
    })
  );
  plane_A_side.name = 'plane_A_side';

  //* Corrugate
  const points_a = [];

  points_a.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= Math.abs((A - 2.5) / 2); i += 2.5) {
    points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
    points_a.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_a = new THREE.CatmullRomCurve3(points_a);

  const points_A_curve = curve_a.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(new THREE.Path().setFromPoints(points_A_curve));

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const corrugate_a = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_corrugated = new THREE.Mesh(
    corrugate_a,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: O,
      transparent: true,
      map: texture,
    })
  );
  plane_A_corrugated.name = 'plane_A_corrugated';
  plane_A_corrugated.position.z = -0.1;
  rotateObject(plane_A_corrugated, -90);

  const side_A_front = new THREE.Group();
  side_A_front.name = 'side_A_front';
  side_A_front.add(plane_A_side, plane_A_corrugated);

  return side_A_front;
};

export default StandardBoxs;
