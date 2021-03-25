import * as THREE from "three";
import rotateObject from "../../function/rotateObject";

export const getPlaneASideShape = (valueA,valueB,valueC) => {
    const plane_A_side_shape = new THREE.Geometry();
    //*  Front Plane

    plane_A_side_shape.vertices.push(
        new THREE.Vector3(0, 0, 0), // 0
        new THREE.Vector3(valueA, 0, 0), // 1
        new THREE.Vector3(valueA, 0, -2.5), // 2,
        new THREE.Vector3(0, 0, -2.5), // 3,

        new THREE.Vector3(valueA, valueC, -2.5), // 4,
        new THREE.Vector3(0, valueC, -2.5), // 5,
        new THREE.Vector3(0, valueC, 0), // 6
        new THREE.Vector3(valueA, valueC, 0) // 7
    );

    let face = new THREE.Face3(0, 1, 6);
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
    return plane_A_side_shape
}

export const getPlaneABackShape = (valueA,valueB,valueC) => {
    //*  Plane
    const plane_A_back_shape = new THREE.Geometry();
    plane_A_back_shape.vertices.push(
        new THREE.Vector3(0, 0, 0), // 0
        new THREE.Vector3(Math.abs(valueA - 2.5), 0, 0), // 1
        new THREE.Vector3(Math.abs(valueA - 2.5), 0, -2.5), // 2,
        new THREE.Vector3(0, 0, -2.5), // 3,

        new THREE.Vector3(Math.abs(valueA - 2.5), valueC, -2.5), // 4,
        new THREE.Vector3(0, valueC, -2.5), // 5,
        new THREE.Vector3(0, valueC, 0), // 6
        new THREE.Vector3(Math.abs(valueA - 2.5), valueC, 0) // 7
    );

    //*  Front Plane
    let face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    plane_A_back_shape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    plane_A_back_shape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    plane_A_back_shape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    plane_A_back_shape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_A_back_shape.faceVertexUvs[0].push([
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0, 1),
        new THREE.Vector2(1, 0),
    ]);
    plane_A_back_shape.faceVertexUvs[0].push([
        new THREE.Vector2(1, 0),
        new THREE.Vector2(1, 1),
        new THREE.Vector2(0, 1),
    ]);
    plane_A_back_shape.faceVertexUvs[0].push([
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0, 1),
        new THREE.Vector2(1, 0),
    ]);
    plane_A_back_shape.faceVertexUvs[0].push([
        new THREE.Vector2(1, 0),
        new THREE.Vector2(1, 1),
        new THREE.Vector2(0, 1),
    ]);

    plane_A_back_shape.computeFaceNormals();

    return plane_A_back_shape
}

export const getPlaneABackCorrugated = (material,extrudeSettings,valueA) => {

    const points_A_back = [];

    points_A_back.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
        points_A_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
        points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

    const points_A_back_curve = curve_A_back.getPoints(1000);

    const corrugated_A_back_shape = new THREE.Shape();
    corrugated_A_back_shape.holes.push(
        new THREE.Path().setFromPoints(points_A_back_curve)
    );

    const corrugate_A_back = new THREE.ExtrudeGeometry(
        corrugated_A_back_shape,
        extrudeSettings
    );

    const plane_A_back_corrugated = new THREE.Mesh(corrugate_A_back, material);
    plane_A_back_corrugated.name = 'plane_A_back_corrugated';
    plane_A_back_corrugated.position.z = -0.1;
    rotateObject(plane_A_back_corrugated, -90);

    return plane_A_back_corrugated
}