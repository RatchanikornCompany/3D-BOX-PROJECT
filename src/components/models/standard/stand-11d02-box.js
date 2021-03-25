import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
} from '../../../store/reducers/menuReducer';

import * as THREE from 'three';

import rotateObject from '../../function/rotateObject';
import assignUVs from '../../function/assignUVs';

import Main from '../../../main';
import Webgl from '../../webgl';

import pictureAInput from '../../pic/a.png';
import pictureBInput from '../../pic/b.png';
import pictureCInput from '../../pic/c.png';

const Stand11d02 = () => {
  const dispatch = useDispatch();
  const { valueA, valueB, valueC, valueO, valueG, valueGSlope } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      valueG: state.menuReducer.valueG,
      valueGSlope: state.menuReducer.valueGSlope,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setValueA(250)); //*  Width
    dispatch(setValueB(380)); //*  Depth
    dispatch(setValueC(220)); //*  Height
    dispatch(setValueO(1)); //*  Opacity
  }, []); //? default side box set.

  useEffect(() => {
    /* #region  //* Models */

    /* #region  //* Material */

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: valueO,
      transparent: true,
      map: new THREE.TextureLoader().load(
        'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
      ),
    });

    const extrudeSettings = {
      depth: valueC,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const extrudeSettings_A_Top_bottom = {
      depth: (valueB - 130) / 2,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const extrudeSettings_B_Top_bottom = {
      depth: Math.abs(valueA / 2 - 1),
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const extrudeSettings_g = {
      depth: valueC - 8,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    /* #endregion */
    /* #region  //* Model */

    /* #region  //* หน้า A */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_side_shape = new THREE.Geometry();
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

    //*  Front Plane
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

    const plane_A_side = new THREE.Mesh(plane_A_side_shape, material);
    plane_A_side.name = 'plane_A_side';

    /* #endregion */
    /* #region  //* Corrugate */

    //* Corrugate
    const points_a = [];

    points_a.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 2.5) / 2); i += 2.5) {
      points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_a.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_a = new THREE.CatmullRomCurve3(points_a);

    const points_A_curve = curve_a.getPoints(1000);

    const corrugated_A_shape = new THREE.Shape();
    corrugated_A_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_curve)
    );

    const corrugate_a = new THREE.ExtrudeGeometry(
      corrugated_A_shape,
      extrudeSettings
    );

    const plane_A_corrugated = new THREE.Mesh(corrugate_a, material);
    plane_A_corrugated.name = 'plane_A_corrugated';
    plane_A_corrugated.position.z = -0.1;
    rotateObject(plane_A_corrugated, -90);

    /* #endregion */

    /* #endregion */
    /* #region  //* หน้า A (หลัง) */

    /* #region  //* Plane */

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
    face = new THREE.Face3(0, 1, 6);
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

    const plane_A_back = new THREE.Mesh(plane_A_back_shape, material);
    plane_A_back.name = 'plane_A_back';

    /* #endregion */
    /* #region  //* Corrugate */

    //*  Corrugate
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

    /* #endregion */

    /* #endregion */
    /* #region  //* หน้า B */

    /* #region  //* Plane */

    //*  Plane
    const plane_B_side_shape = new THREE.Geometry();
    plane_B_side_shape.vertices.push(
      new THREE.Vector3(0, 0, 0), // 0
      new THREE.Vector3(valueB, 0, 0), // 1
      new THREE.Vector3(valueB, 0, -2.5), // 2,
      new THREE.Vector3(0, 0, -2.5), // 3,

      new THREE.Vector3(valueB, valueC, -2.5), // 4,
      new THREE.Vector3(0, valueC, -2.5), // 5,
      new THREE.Vector3(0, valueC, 0), // 6
      new THREE.Vector3(valueB, valueC, 0) // 7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    plane_B_side_shape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    plane_B_side_shape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    plane_B_side_shape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    plane_B_side_shape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_B_side_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_side_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_side_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_side_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    plane_B_side_shape.computeFaceNormals();

    const plane_B_side = new THREE.Mesh(plane_B_side_shape, material);
    plane_B_side.name = 'plane_B_side';

    /* #endregion */
    /* #region  //* Corrgugate */

    //*  Corrgugate
    const points_b = [];

    points_b.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueB - 2.5) / 2); i += 2.5) {
      points_b.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_b.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_b = new THREE.CatmullRomCurve3(points_b);

    const points_B_curve = curve_b.getPoints(1000);

    const corrugated_B_shape = new THREE.Shape();
    corrugated_B_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_curve)
    );

    const corrugate_b = new THREE.ExtrudeGeometry(
      corrugated_B_shape,
      extrudeSettings
    );

    const plane_B_corrugated = new THREE.Mesh(corrugate_b, material);
    plane_B_corrugated.name = 'plane_B_corrugated';
    plane_B_corrugated.position.z = -0.1;
    rotateObject(plane_B_corrugated, -90);

    /* #endregion */

    /* #endregion */
    /* #region  //* บน-ล่าง A */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_top_bottom_shape = new THREE.Geometry();
    plane_A_top_bottom_shape.vertices.push(
      new THREE.Vector3(2.5, 0, 0), // 0
      new THREE.Vector3(Math.abs(valueA - 2.5), 0, 0), // 1
      new THREE.Vector3(Math.abs(valueA - 2.5), 0, -2.5), // 2,
      new THREE.Vector3(2.5, 0, -2.5), // 3,

      new THREE.Vector3(
        Math.abs(valueA - 2.5),
        Math.abs((valueB - 130) / 2),
        -2.5
      ), // 4,
      new THREE.Vector3(2.5, Math.abs((valueB - 130) / 2), -2.5), // 5,
      new THREE.Vector3(2.5, Math.abs((valueB - 130) / 2), 0), // 6
      new THREE.Vector3(Math.abs(valueA - 2.5), Math.abs((valueB - 130) / 2), 0) // 7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    plane_A_top_bottom_shape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    plane_A_top_bottom_shape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    plane_A_top_bottom_shape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    plane_A_top_bottom_shape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_A_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_A_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);
    plane_A_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_A_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    plane_A_top_bottom_shape.computeFaceNormals();

    const plane_A_top_bottom = new THREE.Mesh(
      plane_A_top_bottom_shape,
      material
    );
    plane_A_top_bottom.name = 'plane_A_top_bottom';

    /* #endregion */
    /* #region  //* Corrgugate */

    //*  Corrgugate
    const points_A_top_bottom = [];

    points_A_top_bottom.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
      points_A_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_A_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_A_top_bottom = new THREE.CatmullRomCurve3(points_A_top_bottom);

    const points_A_top_bottom_curve = curve_A_top_bottom.getPoints(1000);

    const corrugated_A_top_bottom_shape = new THREE.Shape();
    corrugated_A_top_bottom_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_top_bottom_curve)
    );

    const corrugated_A_top_bottom = new THREE.ExtrudeGeometry(
      corrugated_A_top_bottom_shape,
      extrudeSettings_A_Top_bottom
    );

    const plane_A_top_bottom_corrugated = new THREE.Mesh(
      corrugated_A_top_bottom,
      material
    );
    plane_A_top_bottom_corrugated.name = 'plane_A_top_bottom_corrugated';
    plane_A_top_bottom_corrugated.position.set(2.5, 0, -0.1);
    rotateObject(plane_A_top_bottom_corrugated, -90);

    /* #endregion */

    /* #endregion */
    /* #region  //* บน-ล่าง A (หลัง) */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_top_bottom_back_shape = new THREE.Geometry();
    plane_A_top_bottom_back_shape.vertices.push(
      new THREE.Vector3(2.5, 0, 0), // 0
      new THREE.Vector3(Math.abs(valueA - 5), 0, 0), // 1
      new THREE.Vector3(Math.abs(valueA - 5), 0, -2.5), // 2,
      new THREE.Vector3(2.5, 0, -2.5), // 3,

      new THREE.Vector3(
        Math.abs(valueA - 5),
        Math.abs((valueB - 130) / 2),
        -2.5
      ), // 4,
      new THREE.Vector3(2.5, Math.abs((valueB - 130) / 2), -2.5), // 5,
      new THREE.Vector3(2.5, Math.abs((valueB - 130) / 2), 0), // 6
      new THREE.Vector3(Math.abs(valueA - 5), Math.abs((valueB - 130) / 2), 0) // 7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    plane_A_top_bottom_back_shape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    plane_A_top_bottom_back_shape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    plane_A_top_bottom_back_shape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    plane_A_top_bottom_back_shape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);
    plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_A_top_bottom_back_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    plane_A_top_bottom_back_shape.computeFaceNormals();

    const plane_A_top_bottom_back = new THREE.Mesh(
      plane_A_top_bottom_back_shape,
      material
    );
    plane_A_top_bottom_back.name = 'plane_A_top_bottom_back';
    plane_A_top_bottom_back.position.x = 2.5;

    /* #endregion */
    /* #region  //* Corrgugate */

    //*  Corrgugate
    const points_A_top_bottom_back = [];

    points_A_top_bottom_back.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 12.5) / 2); i += 2.5) {
      points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_A_top_bottom_back.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_A_top_bottom_back = new THREE.CatmullRomCurve3(
      points_A_top_bottom_back
    );

    const points_A_top_bottom_back_curve = curve_A_top_bottom_back.getPoints(
      1000
    );

    const corrugated_A_top_bottom_back_shape = new THREE.Shape();
    corrugated_A_top_bottom_back_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_top_bottom_back_curve)
    );

    const corrugated_A_top_bottom_back = new THREE.ExtrudeGeometry(
      corrugated_A_top_bottom_back_shape,
      extrudeSettings_A_Top_bottom
    );

    const plane_A_top_bottom_back_corrugated = new THREE.Mesh(
      corrugated_A_top_bottom_back,
      material
    );
    plane_A_top_bottom_back_corrugated.name =
      'plane_A_top_bottom_back_corrugated';
    plane_A_top_bottom_back_corrugated.position.set(5, 0, -0.1);
    rotateObject(plane_A_top_bottom_back_corrugated, -90);

    /* #endregion */

    /* #endregion */
    /* #region  //* บน-ล่าง B */

    /* #region  //* Plane */

    //*  Plane
    const plane_B_top_bottom_shape = new THREE.Geometry();
    plane_B_top_bottom_shape.vertices.push(
      new THREE.Vector3(2.5, 0, 0), // 0
      new THREE.Vector3(Math.abs(valueB - 2.5), 0, 0), // 1
      new THREE.Vector3(Math.abs(valueB - 2.5), 0, -2.5), // 2,
      new THREE.Vector3(2.5, 0, -2.5), // 3,

      new THREE.Vector3(Math.abs(valueB - 2.5), Math.abs(valueA / 2 - 1), -2.5), // 4,
      new THREE.Vector3(2.5, Math.abs(valueA / 2 - 1), -2.5), // 5,
      new THREE.Vector3(2.5, Math.abs(valueA / 2 - 1), 0), // 6
      new THREE.Vector3(Math.abs(valueB - 2.5), Math.abs(valueA / 2 - 1), 0) // 7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    plane_B_top_bottom_shape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    plane_B_top_bottom_shape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    plane_B_top_bottom_shape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    plane_B_top_bottom_shape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_B_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_top_bottom_shape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    plane_B_top_bottom_shape.computeFaceNormals();

    const plane_B_top_bottom = new THREE.Mesh(
      plane_B_top_bottom_shape,
      material
    );
    plane_B_top_bottom.name = 'plane_B_top_bottom';

    /* #endregion */
    /* #region  //* Corrgugate */

    //*  Corrgugate
    const points_B_top_bottom = [];

    points_B_top_bottom.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueB - 7.5) / 2); i += 2.5) {
      points_B_top_bottom.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

    const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

    const corrugated_B_top_bottom_shape = new THREE.Shape();
    corrugated_B_top_bottom_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_top_bottom_curve)
    );

    const corrugated_B_top_bottom = new THREE.ExtrudeGeometry(
      corrugated_B_top_bottom_shape,
      extrudeSettings_B_Top_bottom
    );

    const plane_B_top_bottom_corrugated = new THREE.Mesh(
      corrugated_B_top_bottom,
      material
    );
    plane_B_top_bottom_corrugated.name = 'plane_B_top_bottom_corrugated';
    plane_B_top_bottom_corrugated.position.set(2.5, 0, -0.1);
    rotateObject(plane_B_top_bottom_corrugated, -90);

    /* #endregion */

    /* #endregion */
    /* #region  //* ฝาเสียบกาว */

    /* #region  //* Plane */

    //*  Plane
    const glue_Lid_shape = new THREE.Shape();

    glue_Lid_shape.moveTo(0, 0);
    glue_Lid_shape.lineTo(valueGSlope, valueG);
    glue_Lid_shape.lineTo(valueC - valueGSlope, valueG);
    glue_Lid_shape.lineTo(valueC, 0);

    const glue_lid = new THREE.ShapeGeometry(glue_Lid_shape);
    assignUVs(glue_lid);

    const plane_Glue_lid_front = new THREE.Mesh(glue_lid, material);
    plane_Glue_lid_front.name = 'plane_Glue_lid_front';
    rotateObject(plane_Glue_lid_front, 0, 0, 90);

    const plane_Glue_lid_back = new THREE.Mesh(glue_lid, material);
    plane_Glue_lid_back.name = 'plane_Glue_lid_back';
    plane_Glue_lid_back.position.z = -2.5;
    rotateObject(plane_Glue_lid_back, 0, 0, 90);

    /* #endregion */
    /* #region  //* Corrugate */

    //*  Corrugate

    const points_G = [];

    points_G.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueG - 2.5) / 2); i += 2.5) {
      points_G.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_G.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_G = new THREE.CatmullRomCurve3(points_G);

    const points_G_curve = curve_G.getPoints(1000);

    const glue_Lid_corrugate_shape = new THREE.Shape();
    glue_Lid_corrugate_shape.holes.push(
      new THREE.Path().setFromPoints(points_G_curve)
    );

    const corrugated_Glue_lid = new THREE.ExtrudeGeometry(
      glue_Lid_corrugate_shape,
      extrudeSettings_g
    );

    const plane_Glue_lid_corrugated = new THREE.Mesh(
      corrugated_Glue_lid,
      material
    );
    plane_Glue_lid_corrugated.name = 'plane_Glue_lid_corrugated';
    plane_Glue_lid_corrugated.position.set(-valueG, valueGSlope, -0.1);
    rotateObject(plane_Glue_lid_corrugated, -90, 0, 0);

    /* #endregion */

    /* #endregion */

    /* #endregion */
    /* #region  //* Mesh - แกนหมุน */

    /* #region  //* side_A_front */

    let side_A_front = new THREE.Group();
    side_A_front.name = 'side_A_front';
    side_A_front.add(plane_A_side, plane_A_corrugated);

    let side_A_top_front = new THREE.Group();
    side_A_top_front.name = 'side_A_top_front';
    side_A_top_front.add(plane_A_top_bottom, plane_A_top_bottom_corrugated);

    let side_A_bottom_front = new THREE.Group();
    side_A_bottom_front.name = 'side_A_bottom_front';
    side_A_bottom_front.add(side_A_top_front.clone());

    /* #endregion */
    /* #region  //* side_A_back */

    const side_A_top_back = new THREE.Group();
    side_A_top_back.name = 'side_A_top_back';
    side_A_top_back.add(
      plane_A_top_bottom_back,
      plane_A_top_bottom_back_corrugated
    );

    const side_A_back = new THREE.Group();
    side_A_back.name = 'side_A_back';
    side_A_back.add(plane_A_back, plane_A_back_corrugated);
    side_A_back.position.x = -valueA + 2.5;

    let side_Glue_lid = new THREE.Group();
    side_Glue_lid.name = 'side_Glue_lid';
    side_Glue_lid.add(
      plane_Glue_lid_front,
      plane_Glue_lid_back,
      plane_Glue_lid_corrugated
    );

    /* #endregion */
    /* #region  //* side_B_left */

    let side_B_left = new THREE.Group();
    side_B_left.name = 'side_B_left';
    side_B_left.add(plane_B_side, plane_B_corrugated);
    side_B_left.position.x = -valueB;

    let side_B_top_left = new THREE.Group();
    side_B_top_left.name = 'side_B_top_left';
    side_B_top_left.add(plane_B_top_bottom, plane_B_top_bottom_corrugated);

    /* #endregion */
    /* #region  //* side_B_right */

    let side_B_right = new THREE.Group();
    side_B_right.name = 'side_B_right';
    side_B_right.add(side_B_left.clone());

    /* #endregion */

    /* #endregion */
    /* #region  //* Object - จุดหมุน */

    /* #region  //* pivot_A_front */

    let pivot_A_top_front = new THREE.Object3D();
    pivot_A_top_front.name = 'pivot_A_top_front';
    pivot_A_top_front.add(side_A_top_front);
    pivot_A_top_front.position.y = valueC;

    let pivot_A_bottom_front = new THREE.Object3D();
    pivot_A_bottom_front.name = 'pivot_A_bottom_front';
    pivot_A_bottom_front.add(side_A_bottom_front);
    pivot_A_bottom_front.position.z = -2.5;
    rotateObject(pivot_A_bottom_front, -180);

    let pivot_A_front = new THREE.Object3D();
    pivot_A_front.name = 'pivot_A_front';
    pivot_A_front.add(side_A_front, pivot_A_top_front, pivot_A_bottom_front);

    /* #endregion */
    /* #region  //* pivot_A_back */

    let pivot_A_top_back = new THREE.Object3D();
    pivot_A_top_back.name = 'pivot_A_top_back';
    pivot_A_top_back.add(side_A_top_back);
    pivot_A_top_back.position.set(-valueA, valueC, 0);

    let pivot_A_bottom_back = new THREE.Object3D();
    pivot_A_bottom_back.name = 'pivot_A_bottom_back';
    pivot_A_bottom_back.add(side_A_top_back.clone());
    pivot_A_bottom_back.position.set(-valueA, 0, -2.5);
    rotateObject(pivot_A_bottom_back, -180);

    let pivot_Glue_lid = new THREE.Object3D();
    pivot_Glue_lid.name = 'pivot_Glue_lid';
    pivot_Glue_lid.add(side_Glue_lid);
    pivot_Glue_lid.position.x = -valueA + 2.5;

    let pivot_A_back = new THREE.Object3D();
    pivot_A_back.name = 'pivot_A_back';
    pivot_A_back.add(
      side_A_back,
      pivot_A_top_back,
      pivot_A_bottom_back,
      pivot_Glue_lid
    );
    pivot_A_back.position.x = -valueB;

    /* #endregion */
    /* #region  //* pivot_B_left */

    let pivot_top_B_left = new THREE.Object3D();
    pivot_top_B_left.name = 'pivot_top_B_left';
    pivot_top_B_left.add(side_B_top_left);
    pivot_top_B_left.position.set(-valueB, valueC, 0);

    let pivot_bottom_B_left = new THREE.Object3D();
    pivot_bottom_B_left.name = 'pivot_bottom_B_left';
    pivot_bottom_B_left.add(side_B_top_left.clone());
    pivot_bottom_B_left.position.set(-valueB, 0, -2.5);
    rotateObject(pivot_bottom_B_left, -180);

    let pivot_B_left = new THREE.Object3D();
    pivot_B_left.name = 'pivot_B_left';
    pivot_B_left.add(
      side_B_left,
      pivot_top_B_left,
      pivot_bottom_B_left,
      pivot_A_back
    );

    /* #endregion */
    /* #region  //* pivot_B_right */

    let pivot_top_B_right = new THREE.Object3D();
    pivot_top_B_right.name = 'pivot_top_B_right';
    pivot_top_B_right.add(side_B_top_left.clone());
    pivot_top_B_right.position.set(-valueB, valueC, 0);

    let pivot_bottom_B_right = new THREE.Object3D();
    pivot_bottom_B_right.name = 'pivot_bottom_B_right';
    pivot_bottom_B_right.add(side_B_top_left.clone());
    pivot_bottom_B_right.position.set(-valueB, 0, -2.5);
    rotateObject(pivot_bottom_B_right, 180);

    let pivot_B_right = new THREE.Object3D();
    pivot_B_right.name = 'pivot_B_right';
    pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
    pivot_B_right.position.set(valueA, 0, -2.5);
    rotateObject(pivot_B_right, 0, 180);

    /* #endregion */
    /* #region  //* pivot_all */

    const pivot_all = new THREE.Object3D();
    pivot_all.name = 'pivot_all';
    pivot_all.add(pivot_A_front, pivot_B_left, pivot_B_right);

    /* #endregion */

    /* #endregion */

    /* #endregion */
    /* #region  //* Dielines */

    /* #region  //* side_A */

    /* #region  //* side_A_line */

    const side_A_line = [];
    side_A_line.push(new THREE.Vector2(0, 0));
    side_A_line.push(new THREE.Vector2(0, valueC));
    side_A_line.push(new THREE.Vector2(valueA, valueC));
    side_A_line.push(new THREE.Vector2(valueA, 0));
    side_A_line.push(new THREE.Vector2(0, 0));

    const side_A_Front_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_A_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_A_Front_line.computeLineDistances();
    side_A_Front_line.name = 'side_A_Front_line';

    /* #endregion */
    /* #region  //* side_A_Line_back */

    const side_A_Line_back = [];
    side_A_Line_back.push(new THREE.Vector2(0, 0));
    side_A_Line_back.push(new THREE.Vector2(0, valueC));
    side_A_Line_back.push(new THREE.Vector2(Math.abs(valueA - 2.5), valueC));
    side_A_Line_back.push(new THREE.Vector2(Math.abs(valueA - 2.5), 0));
    side_A_Line_back.push(new THREE.Vector2(0, 0));

    const side_A_Back_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_A_Back_line.computeLineDistances();
    side_A_Back_line.name = 'side_A_Back_line';
    side_A_Back_line.position.x = -valueA - valueB + 2.5;

    /* #endregion */

    /* #endregion */
    /* #region  //* side_B */

    /* #region  //* side_B_upperline */

    /* #region  //* side_B_UpperUnder_line */

    const side_B_UpperUnder_line = [];
    side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
    side_B_UpperUnder_line.push(new THREE.Vector2(valueB, 0));

    const side_B_Left_upperline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Left_upperline.computeLineDistances();
    side_B_Left_upperline.name = 'side_B_Left_upperline';
    side_B_Left_upperline.position.set(-valueB, valueC, 0);

    /* #endregion */
    /* #region  //* side_B_Upper_R_line */

    const side_B_Upper_R_line = [];
    side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
    side_B_Upper_R_line.push(new THREE.Vector2(valueB, 0));
    side_B_Upper_R_line.push(new THREE.Vector2(valueB, -valueC));

    const side_B_Right_upperline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Right_upperline.computeLineDistances();
    side_B_Right_upperline.name = 'side_B_Right_upperline';
    side_B_Right_upperline.position.set(valueA, valueC, 0);

    /* #endregion */

    /* #endregion */
    /* #region  //* side_B_underline */

    /* #region  //* side_B_Left_underline */

    const side_B_Left_underline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Left_underline.computeLineDistances();
    side_B_Left_underline.name = 'side_B_Left_underline';
    side_B_Left_underline.position.x = -valueB;

    /* #endregion */
    /* #region  //* side_B_Right_underline */
    const side_B_Right_underline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Right_underline.computeLineDistances();
    side_B_Right_underline.name = 'side_B_Right_underline';
    side_B_Right_underline.position.x = valueA;
    /* #endregion */

    /* #endregion */

    /* #endregion */
    /* #region  //* line_all */

    const line_all = new THREE.Line();
    line_all.name = 'line_all';
    line_all.add(
      side_A_Front_line,
      side_A_Back_line,
      side_B_Left_upperline,
      side_B_Right_upperline,
      side_B_Left_underline,
      side_B_Right_underline
    );

    /* #endregion */

    /* #endregion */
    /* #region  //* Marker */

    let label = valueA / 6;

    const defaultUnit = { mm: 1, cm: 10, in: 25.4 };
    const unit = 'mm';

    /* #region  //* Label */

    const geometry = new THREE.PlaneBufferGeometry(label, label);
    const loader = new THREE.TextureLoader();

    const meshLabelA = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load(pictureAInput) })
    );

    const meshLabelB = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load(pictureBInput) })
    );

    const meshLabelC = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load(pictureCInput) })
    );

    const lineMarkA = new THREE.Object3D();
    lineMarkA.position.set(-(valueA / 2) - valueB, valueC / 2 + label, 2);
    lineMarkA.add(meshLabelA);

    const lineMarkB = new THREE.Object3D();
    lineMarkB.position.set(-(valueB / 2), valueC / 2 + label, 2);
    lineMarkB.add(meshLabelB);

    const lineMarkC = new THREE.Object3D();
    lineMarkC.position.set((valueA - label * 2) / 2, valueC / 2, 2);
    lineMarkC.add(meshLabelC);

    /* #endregion */
    /* #region  //* Text */

    const loaderTextA = new THREE.FontLoader();
    loaderTextA.load(
      './fonts/helvetiker_regular.typeface.json',
      function (font) {
        const textUnit = unit;

        const color = 0x00000;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });
        const message = `${
          unit === 'mm'
            ? (valueA / defaultUnit[unit]).toFixed(2)
            : (valueA / defaultUnit[unit]).toFixed(1)
        } ${unit}`;
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeBufferGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);

        const text = new THREE.Mesh(geometry, matLite);
        lableA.add(text);
      }
    );

    const lableA = new THREE.Object3D();
    lableA.position.set(-valueA / 2 - valueB, valueC / 2 - 10, 2);

    //* Start size lable.
    const lableB = new THREE.Object3D();
    lableB.position.set(-valueB / 2, valueC / 2 - 10, 2);

    const loaderTextB = new THREE.FontLoader();

    //* Start load text A.
    loaderTextB.load(
      './fonts/helvetiker_regular.typeface.json',
      function (font) {
        const color = 0x00000;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });

        const message = `${
          unit === 'in'
            ? (valueB / defaultUnit[unit]).toFixed(2)
            : (valueB / defaultUnit[unit]).toFixed(1)
        } ${unit}`;
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeBufferGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);

        const text = new THREE.Mesh(geometry, matLite);
        lableB.add(text);
      }
    );

    //*  Font Loader Function
    const loaderTextC = new THREE.FontLoader();
    loaderTextC.load(
      './fonts/helvetiker_regular.typeface.json',
      function (font) {
        const color = 0x00000;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });

        //*  Message
        const message = `${
          unit === 'in'
            ? (valueC / defaultUnit[unit]).toFixed(2)
            : (valueC / defaultUnit[unit]).toFixed(1)
        } ${unit}`;
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeBufferGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);

        //*  Mesh
        const text = new THREE.Mesh(geometry, matLite);
        lableC.add(text);
      }
    );

    //* Position.
    const lableC = new THREE.Object3D();
    lableC.position.set(valueA / 2 + 2 + label, valueC / 2 - 10, 2);

    //* Start size lable.
    const lableWidth = new THREE.Object3D();
    lableWidth.position.set(
      -valueA - valueB + 4 - valueG + 10 - valueC / 4 / 2,
      valueC / 2 - 10,
      2
    );
    rotateObject(lableWidth, 0, 0, 90);

    const loaderTextWidth = new THREE.FontLoader();

    //* Start load text A.
    loaderTextWidth.load(
      './fonts/helvetiker_regular.typeface.json',
      function (font) {
        const color = 0x00000;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });

        const message = `${
          unit === 'in'
            ? (valueC + (125 * 2) / defaultUnit[unit]).toFixed(2)
            : (valueC + (125 * 2) / defaultUnit[unit]).toFixed(1)
        } ${unit}`;
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeBufferGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);

        const text = new THREE.Mesh(geometry, matLite);
        lableWidth.add(text);
      }
    );

    //* Start size lable.
    const lableHeight = new THREE.Object3D();
    lableHeight.position.set(0, valueC + 125 + valueC / 4 / 2 - 10, 2);

    const loaderTextHeight = new THREE.FontLoader();

    //* Start load text A.
    loaderTextHeight.load(
      './fonts/helvetiker_regular.typeface.json',
      function (font) {
        const color = 0x00000;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });

        const message = `${
          unit === 'in'
            ? (valueC + (125 * 2) / defaultUnit[unit]).toFixed(2)
            : (valueC + (125 * 2) / defaultUnit[unit]).toFixed(1)
        } ${unit}`;
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeBufferGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);

        const text = new THREE.Mesh(geometry, matLite);
        lableHeight.add(text);
      }
    );

    /* #endregion */
    /* #region  //* Pointer */

    //*  Arrow Left
    const arrow_left = (size) => {
      const scene = new THREE.Scene();

      const arrowHead = new THREE.Shape();
      arrowHead.moveTo(0, 0);
      arrowHead.lineTo(10, 5);
      arrowHead.lineTo(10, -5);
      arrowHead.lineTo(0, 0);
      const headMesh = new THREE.Mesh(
        new THREE.ShapeGeometry(arrowHead),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      const arrow_line = [];
      arrow_line.push(new THREE.Vector3(10, 0));
      arrow_line.push(new THREE.Vector3(size, 0));
      const arrow_mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      scene.add(headMesh, arrow_mesh);
      return scene;
    };

    //*  Arrow Right
    const arrow_right = (size) => {
      const scene = new THREE.Scene();

      const arrowHead = new THREE.Shape();
      arrowHead.moveTo(0, 0);
      arrowHead.lineTo(-10, 5);
      arrowHead.lineTo(-10, -5);
      arrowHead.lineTo(0, 0);
      const headMesh = new THREE.Mesh(
        new THREE.ShapeGeometry(arrowHead),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      const arrow_line = [];
      arrow_line.push(new THREE.Vector3(-10, 0));
      arrow_line.push(new THREE.Vector3(-size, 0));
      const arrow_mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      scene.add(headMesh, arrow_mesh);
      return scene;
    };

    //*  Arrow Top
    const arrow_top = (size) => {
      const scene = new THREE.Scene();

      const arrowHead = new THREE.Shape();
      arrowHead.moveTo(0, 0);
      arrowHead.lineTo(5, -10);
      arrowHead.lineTo(-5, -10);
      arrowHead.lineTo(0, 0);
      const headMesh = new THREE.Mesh(
        new THREE.ShapeGeometry(arrowHead),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      const arrow_line = [];
      arrow_line.push(new THREE.Vector3(0, -10));
      arrow_line.push(new THREE.Vector3(0, -size));
      const arrow_mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      scene.add(headMesh, arrow_mesh);
      return scene;
    };

    //*  Arrow Down
    const arrow_down = (size) => {
      const scene = new THREE.Scene();

      const arrowHead = new THREE.Shape();
      arrowHead.moveTo(0, 0);
      arrowHead.lineTo(5, 10);
      arrowHead.lineTo(-5, 10);
      arrowHead.lineTo(0, 0);
      const headMesh = new THREE.Mesh(
        new THREE.ShapeGeometry(arrowHead),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      const arrow_line = [];
      arrow_line.push(new THREE.Vector3(0, 10));
      arrow_line.push(new THREE.Vector3(0, size));
      const arrow_mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
      );

      scene.add(headMesh, arrow_mesh);
      return scene;
    };

    //*  Arrow Center
    const arrow_c = (size) => {
      const scene = new THREE.Scene();

      const arrow_line = [];
      arrow_line.push(new THREE.Vector3(0, 0));
      arrow_line.push(new THREE.Vector3(-size, 0));
      const arrow_mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
      );

      scene.add(arrow_mesh);
      return scene;
    };

    const a_arrow_l = new THREE.Object3D();
    a_arrow_l.position.set(-valueA - valueB + 2, valueC / 2, 2);
    a_arrow_l.add(arrow_left(valueA / 4)); //  <-- arrow_left([ความยาวเส้น])

    const a_arrow_r = new THREE.Object3D();
    a_arrow_r.position.set(-(valueA / valueA) - valueB + 2, valueC / 2, 2);
    a_arrow_r.add(arrow_right(valueA / 4));

    const b_arrow_l = new THREE.Object3D();
    b_arrow_l.position.set(-valueB, valueC / 2, 2);
    b_arrow_l.add(arrow_left(valueA / 2).clone());

    const b_arrow_r = new THREE.Object3D();
    b_arrow_r.position.set(-(valueB / valueB), valueC / 2, 2);
    b_arrow_r.add(arrow_right(valueA / 2));

    const c_arrow_t = new THREE.Object3D();
    c_arrow_t.position.set((valueA - 1) / 2, valueC, 2);
    c_arrow_t.add(arrow_top(valueA / 3).clone());

    const c_arrow_d = new THREE.Object3D();
    c_arrow_d.position.set((valueA - 1) / 2, 0, 2);
    c_arrow_d.add(arrow_down(valueA / 3).clone());

    const line_height_t = new THREE.Object3D();
    line_height_t.add(arrow_c(valueC / 4).clone());
    line_height_t.position.set(-valueA - valueB + 4 - valueG, valueC + 125, 2);

    const line_height_d = new THREE.Object3D();
    line_height_d.add(arrow_c(valueC / 4).clone());
    line_height_d.position.set(-valueA - valueB + 4 - valueG, -125, 2);

    const line_width_l = new THREE.Object3D();
    line_width_l.add(arrow_c(valueC / 4).clone());
    line_width_l.position.set(-valueA - valueB - valueG + 4, valueC + 125, 2);
    rotateObject(line_width_l, 0, 0, -90);

    const line_width_r = new THREE.Object3D();
    line_width_r.add(arrow_c(valueC / 4).clone());
    line_width_r.position.set(valueA + valueB, valueC + 125, 2);
    rotateObject(line_width_r, 0, 0, -90);

    const arrow_height_t = new THREE.Object3D();
    arrow_height_t.position.set(
      -valueA - valueB + 4 - valueG - valueC / 4 / 2,
      valueC + 125,
      2
    );
    arrow_height_t.add(arrow_top(valueC / 1.5).clone());

    const arrow_height_d = new THREE.Object3D();
    arrow_height_d.position.set(
      -valueA - valueB + 4 - valueG - valueC / 4 / 2,
      -125,
      2
    );
    arrow_height_d.add(arrow_down(valueC / 1.5).clone());

    const arrow_width_l = new THREE.Object3D();
    arrow_width_l.position.set(
      -valueA - valueB - valueG + 4,
      valueC + 125 + valueC / 4 / 2,
      2
    );
    arrow_width_l.add(arrow_left((valueA + valueB + valueG) / 1.25).clone());

    const arrow_width_r = new THREE.Object3D();
    arrow_width_r.position.set(
      valueA + valueB,
      valueC + 125 + valueC / 4 / 2,
      2
    );
    arrow_width_r.add(arrow_right((valueA + valueB) / 1.25).clone());

    /* #endregion */
    /* #region  //* Group Scene */

    const geometryBoxGroup = new THREE.Object3D();
    geometryBoxGroup.add(
      lineMarkA,
      lineMarkB,
      lineMarkC,

      lableA,
      lableB,
      lableC,
      lableWidth,
      lableHeight,

      a_arrow_l,
      a_arrow_r,
      b_arrow_l,
      b_arrow_r,
      c_arrow_t,
      c_arrow_d,

      line_height_t,
      line_height_d,
      line_width_l,
      line_width_r,

      arrow_height_t,
      arrow_height_d,
      arrow_width_l,
      arrow_width_r
    );

    /* #endregion */

    /* #endregion */

    /* #region  //* Group_All */

    const group_All = new THREE.Group();
    group_All.add(pivot_all, line_all, geometryBoxGroup);

    /* #endregion */

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [valueA, valueB, valueC, valueO, valueG, valueGSlope]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default Stand11d02;
