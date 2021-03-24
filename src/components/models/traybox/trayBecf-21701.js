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

const Tray21701 = () => {
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
    dispatch(setValueA(100)); //*  Width
    dispatch(setValueB(100)); //*  Depth
    dispatch(setValueC(50)); //*  Height
    dispatch(setValueO(1)); //*  Opacity
  }, []); //? default side box set.

  useEffect(() => {
    /*  #region  //* TextureLoader */

    const texture = new THREE.TextureLoader().load(
      'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
    );

    /*  #endregion */
    /*  #region  //* Material */

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: valueO,
      transparent: true,
      map: texture,
    });

    texture['kraft'] = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: valueO,
      transparent: true,
      map: texture,
    });

    const extrudeSettings = {
      depth: valueB,
      bevelEnabled: true,
      bevelSegments: valueO,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    /*  #endregion */
    /*  #region  //* Model */

    /*  #region  //* หน้า A */

    /*  #region  //* plane_A_top */

    /* #region  //*  Plane */

    //*  Plane
    const plane_A = new THREE.Geometry();
    plane_A.vertices.push(
      new THREE.Vector3(2, 0, 0), //*   0
      new THREE.Vector3(valueA - 2, 0, 0), //*   1
      new THREE.Vector3(valueA - 2, 0, -2.5), //*   2,
      new THREE.Vector3(2, 0, -2.5), //*   3,

      new THREE.Vector3(valueA - 2, valueB, -2.5), //*   4,
      new THREE.Vector3(2, valueB, -2.5), //*   5,
      new THREE.Vector3(2, valueB, 0), //*   6
      new THREE.Vector3(valueA - 2, valueB, 0) //*   7
    );

    //*  Front Plane
    let face = new THREE.Face3(0, 1, 6);
    face.materialIndex = 0;
    plane_A.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialIndex = 0;
    plane_A.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialIndex = 1;
    plane_A.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialIndex = 1;
    plane_A.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา
    plane_A.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_A.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_A.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_A.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    plane_A.computeFaceNormals();

    const plane_A_side = new THREE.Mesh(plane_A, material);

    /* #endregion */
    /* #region  //*  Corrugate */

    //*  Corrugate
    const points_a = [];

    points_a.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
      points_a.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_a.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_a = new THREE.CatmullRomCurve3(points_a);

    const points_A_corrugated = curve_a.getPoints(1000);

    const corrugated_A_shape = new THREE.Shape();
    corrugated_A_shape.holes.push(
      new THREE.Path().setFromPoints(points_A_corrugated)
    );

    const corrugated_a = new THREE.ExtrudeGeometry(
      corrugated_A_shape,
      extrudeSettings
    );

    const plane_A_corrugated = new THREE.Mesh(corrugated_a, material);
    plane_A_corrugated.position.set(valueA - 2.5, 0, -2.4);
    rotateObject(plane_A_corrugated, -90, 0, 180);

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_A_Top_Left_right */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_Top_Left_right_shape = new THREE.Shape();

    plane_A_Top_Left_right_shape.moveTo(0, 0);
    plane_A_Top_Left_right_shape.lineTo(0, valueB);
    plane_A_Top_Left_right_shape.lineTo(40, 90);
    plane_A_Top_Left_right_shape.bezierCurveTo(40, 90, 50, 89, 50, 79);
    plane_A_Top_Left_right_shape.lineTo(50, 19);
    plane_A_Top_Left_right_shape.bezierCurveTo(50, 19, 50, 9, 40, 8);
    plane_A_Top_Left_right_shape.lineTo(0, 0);

    const plane_A_Top_Left_right = new THREE.ShapeGeometry(
      plane_A_Top_Left_right_shape
    );
    assignUVs(plane_A_Top_Left_right);

    //*  Front Plane
    const plane_A_Top_Left_Right_front = new THREE.Mesh(
      plane_A_Top_Left_right,
      material
    );

    //*  Back Plane
    const plane_A_Top_Left_Right_back = new THREE.Mesh(
      plane_A_Top_Left_right,
      material
    );
    plane_A_Top_Left_Right_back.position.z = -2.5;

    /* #endregion */
    /* #region  //* Corrugate */

    //*  Corrugate A-Top (Right)
    const points_A_Top_right = [];
    let plane_A_Top_Right_cent = [];
    let Cx = valueC;

    points_A_Top_right.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= valueA / 4 - 5.5; i += 2.5) {
      points_A_Top_right.push(
        new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
      );
      points_A_Top_right.push(new THREE.Vector3(i * 2 + 5, 0));

      const curve_A_Top_right = new THREE.CatmullRomCurve3(points_A_Top_right);

      const points_A_Top_Right_corrugated = curve_A_Top_right.getPoints(1000);

      const corrugated_A_Top_Right_shape = new THREE.Shape();
      corrugated_A_Top_Right_shape.holes.push(
        new THREE.Path().setFromPoints(points_A_Top_Right_corrugated)
      );

      const extrudeSettings_A_Top_right = {
        depth: i > 10 ? valueC + 10 - i : valueC - 2.5,
        bevelEnabled: true,
        bevelSegments: 0,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 1,
      };

      const corrugated_A_Top_right = new THREE.ExtrudeGeometry(
        corrugated_A_Top_Right_shape,
        extrudeSettings_A_Top_right
      );

      const plane_A_Top_Right_Cent_shape = new THREE.Mesh(
        corrugated_A_Top_right,
        material
      );
      plane_A_Top_Right_Cent_shape.position.set(0, valueA / 2 - 1, -2.4);
      rotateObject(plane_A_Top_Right_Cent_shape, 90, 90, 0);

      plane_A_Top_Right_cent.push(plane_A_Top_Right_Cent_shape);
    }

    //*  Corrugate A-Top (Left)
    const points_A_Top_left = [];
    let plane_A_Top_Left_cent = [];

    points_A_Top_left.push(new THREE.Vector3(0, 0));

    for (let i = 0; i < 20; i += 2.5) {
      points_A_Top_left.push(
        new THREE.Vector3(i * 2 + 2.5, -valueC * (2.4 / Cx))
      );
      points_A_Top_left.push(new THREE.Vector3(i * 2 + 5, 0));

      const curve_A_Top_left = new THREE.CatmullRomCurve3(points_A_Top_left);

      const points_A_Top_Left_corrugated = curve_A_Top_left.getPoints(1000);

      const corrugated_A_Top_Left_shape = new THREE.Shape();
      corrugated_A_Top_Left_shape.holes.push(
        new THREE.Path().setFromPoints(points_A_Top_Left_corrugated)
      );

      const extrudeSettings_A_Top_left = {
        depth: i > 10 ? valueC + 10 - i : valueC - 2.5,
        bevelEnabled: true,
        bevelSegments: 0,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 1,
      };

      const corrugated_A_Top_left = new THREE.ExtrudeGeometry(
        corrugated_A_Top_Left_shape,
        extrudeSettings_A_Top_left
      );

      const plane_A_Top_Left_Cent_shape = new THREE.Mesh(
        corrugated_A_Top_left,
        material
      );
      plane_A_Top_Left_Cent_shape.position.set(0, valueA / 2 - 1, -2.4);
      rotateObject(plane_A_Top_Left_Cent_shape, 0, 90, -90);

      plane_A_Top_Left_cent.push(plane_A_Top_Left_Cent_shape);
    }

    const corrugated_A_Top_left_cent = new THREE.Group();
    corrugated_A_Top_left_cent.add(
      ...plane_A_Top_Right_cent,
      ...plane_A_Top_Left_cent
    );

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_A_Top_Lid_Left_Right */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_Top_Lid_Left_Right_shape = new THREE.Shape();

    plane_A_Top_Lid_Left_Right_shape.moveTo(0, 0);
    plane_A_Top_Lid_Left_Right_shape.lineTo(0, valueC - 1);
    plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(
      0,
      valueC - 1,
      valueC,
      valueC,
      valueC - 1,
      9
    );
    plane_A_Top_Lid_Left_Right_shape.bezierCurveTo(valueC - 1, 9, 49, 0, 44, 0);

    const plane_A_Top_Lid_Left_Right = new THREE.ShapeGeometry(
      plane_A_Top_Lid_Left_Right_shape
    );
    assignUVs(plane_A_Top_Lid_Left_Right);

    //*  Front Plane
    const plane_A_Top_Lid_Left_Right_Shape_front = new THREE.Mesh(
      plane_A_Top_Lid_Left_Right,
      material
    );

    //*  Back Plane
    const plane_A_Top_Lid_Left_Right_Shape_back = new THREE.Mesh(
      plane_A_Top_Lid_Left_Right,
      material
    );
    plane_A_Top_Lid_Left_Right_Shape_back.position.z = -2.5;

    /* #endregion */
    /* #region  //* Corrugate */

    //*  Corrugate
    let points_A_Top_Lid_Left_right = [];
    let plane_A_Top_Lid_Left_Right_cent = [];

    points_A_Top_Lid_Left_right.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= (valueC - 12.5) / 2; i += 2.5) {
      points_A_Top_Lid_Left_right.push(
        new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
      );
      points_A_Top_Lid_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));

      const curve_A_Top_Lid_Left_right = new THREE.CatmullRomCurve3(
        points_A_Top_Lid_Left_right
      );

      const points_A_Top_Lid_Left_Right_corrugated = curve_A_Top_Lid_Left_right.getPoints(
        1000
      );

      const corrugated_A_Top_Lid_Left_Right_shape = new THREE.Shape();
      corrugated_A_Top_Lid_Left_Right_shape.holes.push(
        new THREE.Path().setFromPoints(points_A_Top_Lid_Left_Right_corrugated)
      );

      const extrudeSettings_A_Top_Lid_Left_righ = {
        depth: valueC - 5 - i,
        bevelEnabled: true,
        bevelSegments: 0,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 1,
      };

      const corrugated_A_Top_Lid_Left_right = new THREE.ExtrudeGeometry(
        corrugated_A_Top_Lid_Left_Right_shape,
        extrudeSettings_A_Top_Lid_Left_righ
      );

      const plane_A_Top_Lid_Left_Right_Cent_shape = new THREE.Mesh(
        corrugated_A_Top_Lid_Left_right,
        material
      );
      plane_A_Top_Lid_Left_Right_Cent_shape.position.z = -2.4;
      rotateObject(plane_A_Top_Lid_Left_Right_Cent_shape, 0, 90, 90);

      plane_A_Top_Lid_Left_Right_cent.push(
        plane_A_Top_Lid_Left_Right_Cent_shape
      );
    }

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_A_back */

    /* #region  //* Plane */

    //*  Plane
    const plane_A_Back_shape = new THREE.Shape();

    plane_A_Back_shape.moveTo(0, 0);
    plane_A_Back_shape.lineTo(0, 8);
    plane_A_Back_shape.lineTo(3, 8);
    plane_A_Back_shape.lineTo(3, 32);
    plane_A_Back_shape.lineTo(0, 32);
    plane_A_Back_shape.lineTo(0, 68);
    plane_A_Back_shape.lineTo(3, 68);
    plane_A_Back_shape.lineTo(3, 92);
    plane_A_Back_shape.lineTo(0, 92);
    plane_A_Back_shape.lineTo(0, 100);
    plane_A_Back_shape.lineTo(100, 100);
    plane_A_Back_shape.lineTo(100, 92);
    plane_A_Back_shape.lineTo(97, 92);
    plane_A_Back_shape.lineTo(97, 68);
    plane_A_Back_shape.lineTo(100, 68);
    plane_A_Back_shape.lineTo(100, 32);
    plane_A_Back_shape.lineTo(97, 32);
    plane_A_Back_shape.lineTo(97, 8);
    plane_A_Back_shape.lineTo(100, 8);
    plane_A_Back_shape.lineTo(100, 0);

    const plane_A_back = new THREE.ShapeGeometry(plane_A_Back_shape);
    assignUVs(plane_A_back);

    //*  Front Plane
    const plane_A_Back_front = new THREE.Mesh(plane_A_back, material);

    //*  Back Plane
    const plane_A_Back_back = new THREE.Mesh(plane_A_back, material);
    plane_A_Back_back.position.z = -2.5;

    /* #endregion */

    /* #region  //* Corrugate */

    //*  Corrugate
    let points_A_back = [];
    let plane_A_Back_cent = [];

    points_A_back.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= (valueB - 2.5) / 2; i += 2.5) {
      points_A_back.push(new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx)));
      points_A_back.push(new THREE.Vector3(i * 2 + 5, 0));

      const curve_A_back = new THREE.CatmullRomCurve3(points_A_back);

      const points_A_Back_corrugated = curve_A_back.getPoints(1000);

      const corrugated_A_Back_shape = new THREE.Shape();
      corrugated_A_Back_shape.holes.push(
        new THREE.Path().setFromPoints(points_A_Back_corrugated)
      );

      const extrudeSettings_A_back = {
        depth: valueA - 6,
        bevelEnabled: true,
        bevelSegments: 0,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 1,
      };

      const corrugated_A_back = new THREE.ExtrudeGeometry(
        corrugated_A_Back_shape,
        extrudeSettings_A_back
      );

      const plane_A_Back_Cent_shape = new THREE.Mesh(
        corrugated_A_back,
        material
      );
      plane_A_Back_Cent_shape.position.set(3, 0, -2.4);
      rotateObject(plane_A_Back_Cent_shape, 0, 90, 90);

      plane_A_Back_cent.push(plane_A_Back_Cent_shape);
    }

    /* #endregion */

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* หน้า B */

    /*  #region  //* plane_B_Top_bottom */

    /* #region  //*  Plane */

    //*  Plane
    const plane_B_Top_bottom = new THREE.Geometry();
    plane_B_Top_bottom.vertices.push(
      new THREE.Vector3(1, 0, 0), //*   0
      new THREE.Vector3(valueA - 1, 0, 0), //*   1
      new THREE.Vector3(valueA - 1, 0, -2.5), //*   2
      new THREE.Vector3(1, 0, -2.5), //*   3

      new THREE.Vector3(valueA - 1, valueC, -2.5), //*   4
      new THREE.Vector3(1, valueC, -2.5), //*   5
      new THREE.Vector3(1, valueC, 0), //*   6
      new THREE.Vector3(valueA - 1, valueC, 0) //*   7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialIndex = 0;
    plane_B_Top_bottom.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialIndex = 0;
    plane_B_Top_bottom.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialIndex = 1;
    plane_B_Top_bottom.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialIndex = 1;
    plane_B_Top_bottom.faces.push(face);

    plane_B_Top_bottom.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_Top_bottom.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_Top_bottom.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_Top_bottom.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    plane_B_Top_bottom.computeFaceNormals();

    const plane_B_Top_Bottom_side = new THREE.Mesh(
      plane_B_Top_bottom,
      material
    );

    /* #endregion */
    /* #region  //*  Corrugate */

    //*  Corrugate
    const points_B_top_bottom = [];

    points_B_top_bottom.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueC - 10) / 2); i += 2.5) {
      points_B_top_bottom.push(
        new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
      );
      points_B_top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_B_top_bottom = new THREE.CatmullRomCurve3(points_B_top_bottom);

    const points_B_top_bottom_curve = curve_B_top_bottom.getPoints(1000);

    const corrugated_B_Top_Bottom_shape = new THREE.Shape();
    corrugated_B_Top_Bottom_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_top_bottom_curve)
    );

    const extrudeSettings_B_Top_bottom = {
      depth: valueA - 2,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_B_Top_bottom = new THREE.ExtrudeGeometry(
      corrugated_B_Top_Bottom_shape,
      extrudeSettings_B_Top_bottom
    );

    const plane_B_Top_Bottom_cent = new THREE.Mesh(
      corrugated_B_Top_bottom,
      material
    );
    plane_B_Top_Bottom_cent.position.set(1, 5, -2.4);
    rotateObject(plane_B_Top_Bottom_cent, 90, 90, 0);

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_B_Top_bottom_lid */

    /* #region  //*  Plane */

    //*  Plane
    const plane_B_Top_Bottom_Lid_shape = new THREE.Shape();

    plane_B_Top_Bottom_Lid_shape.moveTo(0, 0);
    plane_B_Top_Bottom_Lid_shape.lineTo(0, valueC - 1);
    plane_B_Top_Bottom_Lid_shape.lineTo((valueC - 1) / 2, valueC - 1);
    plane_B_Top_Bottom_Lid_shape.bezierCurveTo(
      (valueC - 1) / 2,
      valueC - 1,
      valueC - 1 + 2,
      valueC - 1 + 2,
      valueC - 1,
      (valueC - 1) / 2
    );
    plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, (valueC - 1) / 2);
    plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, valueC - 1);
    plane_B_Top_Bottom_Lid_shape.lineTo(valueC - 1, 0);

    const plane_B_Top_Bottom_lid = new THREE.ShapeGeometry(
      plane_B_Top_Bottom_Lid_shape
    );
    assignUVs(plane_B_Top_Bottom_lid);

    /* #region  //*  plane_B_Top_lid */

    //*  Front Plane
    const plane_B_Top_Lid_front = new THREE.Mesh(
      plane_B_Top_Bottom_lid,
      material
    );

    //* Back Plane
    const plane_B_Top_Lid_back = new THREE.Mesh(
      plane_B_Top_Bottom_lid,
      material
    );
    plane_B_Top_Lid_back.position.z = -2.5;

    /* #endregion */
    /* #region  //*  plane_B_Bottom_lid */

    //*  Front Plane
    const plane_B_Bottom_Lid_front = new THREE.Mesh(
      plane_B_Top_Bottom_lid,
      material
    );

    //*  Back Plane
    const plane_B_Bottom_Lid_back = new THREE.Mesh(
      plane_B_Top_Bottom_lid,
      material
    );
    plane_B_Bottom_Lid_back.position.z = -2.5;

    /* #endregion */

    /* #endregion */
    /* #region  //*  Corrugate */

    let plane_B_Top_Lid_cent = [];
    let plane_B_Bottom_Lid_cent = [];

    //*  Corrugate
    const points_B_Top_Bottom_lid = [];

    points_B_Top_Bottom_lid.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= (valueC - 5.5) / 2; i += 2.5) {
      points_B_Top_Bottom_lid.push(new THREE.Vector3(i * 2 + 2.5, 2.4));
      points_B_Top_Bottom_lid.push(new THREE.Vector3(i * 2 + 5, 0));

      const curve_B_Top_Bottom_lid = new THREE.CatmullRomCurve3(
        points_B_Top_Bottom_lid
      );

      const points_B_Top_Bottom_Lid_corrugated = curve_B_Top_Bottom_lid.getPoints(
        1000
      );

      const corrugated_B_Top_Bottom_Lid_shape = new THREE.Shape();
      corrugated_B_Top_Bottom_Lid_shape.holes.push(
        new THREE.Path().setFromPoints(points_B_Top_Bottom_Lid_corrugated)
      );

      const extrudeSettings_B_Top_Bottom_lid = {
        depth: i > 10 ? valueC + 10 - i : valueC - 1,
        bevelEnabled: true,
        bevelSegments: 0,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 1,
      };

      const corrugated_B_Top_Bottom_lid = new THREE.ExtrudeGeometry(
        corrugated_B_Top_Bottom_Lid_shape,
        extrudeSettings_B_Top_Bottom_lid
      );

      //*  Top Corrugate
      const plane_B_Top_Lid_shape = new THREE.Mesh(
        corrugated_B_Top_Bottom_lid,
        material
      );
      plane_B_Top_Lid_shape.position.z = -2.4;
      rotateObject(plane_B_Top_Lid_shape, 0, 90, 90);

      plane_B_Top_Lid_cent.push(plane_B_Top_Lid_shape);

      //*  Bottom Corrugate
      const plane_B_Bottom_Lid_shape = new THREE.Mesh(
        corrugated_B_Top_Bottom_lid,
        material
      );
      plane_B_Bottom_Lid_shape.position.z = -2.4;
      rotateObject(plane_B_Bottom_Lid_shape, 0, 90, 90);

      plane_B_Bottom_Lid_cent.push(plane_B_Bottom_Lid_shape);
    }

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_B_Left_right */

    /* #region  //*  Plane */

    //*  Plane
    const plane_B_Left_right = new THREE.Geometry();
    plane_B_Left_right.vertices.push(
      new THREE.Vector3(0, 0, 0), //*   0
      new THREE.Vector3(valueC, 0, 0), //*   1
      new THREE.Vector3(valueC, 0, -2.5), //*   2
      new THREE.Vector3(0, 0, -2.5), //*   3

      new THREE.Vector3(valueC, valueB, -2.5), //*   4
      new THREE.Vector3(0, valueB, -2.5), //*   5
      new THREE.Vector3(0, valueB, 0), //*   6
      new THREE.Vector3(valueC, valueB, 0) //*   7
    );

    //*  Front Plane
    face = new THREE.Face3(0, 1, 6);
    face.materialIndex = 0;
    plane_B_Left_right.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialIndex = 0;
    plane_B_Left_right.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialIndex = 1;
    plane_B_Left_right.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialIndex = 1;
    plane_B_Left_right.faces.push(face);

    //*  Right Plane
    face = new THREE.Face3(1, 2, 7);
    face.materialIndex = 2;
    plane_B_Left_right.faces.push(face);
    face = new THREE.Face3(7, 4, 2);
    face.materialIndex = 2;
    plane_B_Left_right.faces.push(face);

    plane_B_Left_right.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_Left_right.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);
    plane_B_Left_right.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    plane_B_Left_right.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    plane_B_Left_right.computeFaceNormals();

    const plane_B_Left_Right_side = new THREE.Mesh(
      plane_B_Left_right,
      material
    );

    /* #endregion */
    /* #region  //*  Corrugate */

    //*  Corrugate
    const points_B_Left_right = [];

    points_B_Left_right.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
      points_B_Left_right.push(
        new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
      );
      points_B_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_B_Left_right = new THREE.CatmullRomCurve3(points_B_Left_right);

    const points_B_Left_Right_corrugated = curve_B_Left_right.getPoints(1000);

    const corrugated_B_Left_Right_shape = new THREE.Shape();
    corrugated_B_Left_Right_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_Left_Right_corrugated)
    );

    const extrudeSettings_B_Left_right = {
      depth: valueC - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_B_Left_right = new THREE.ExtrudeGeometry(
      corrugated_B_Left_Right_shape,
      extrudeSettings_B_Left_right
    );

    const plane_B_Left_Right_cent = new THREE.Mesh(
      corrugated_B_Left_right,
      material
    );
    plane_B_Left_Right_cent.position.set(valueC, 2.5, -0.1);
    rotateObject(plane_B_Left_Right_cent, -90, -90, 0);

    /* #endregion */

    /*  #endregion */
    /*  #region  //* plane_B_Left_Right_lid */

    /* #region  //*  Plane */

    //*  Plane
    const plane_B_Left_Right_Lid_shape = new THREE.Shape();

    plane_B_Left_Right_Lid_shape.moveTo(0, 0);
    plane_B_Left_Right_Lid_shape.lineTo(0, valueB);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, valueB);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, valueB - 10);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1 + 1, valueB - 10);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1 + 1, valueB - 30);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, valueB - 30);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, valueB - 70);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1 + 1, valueB - 70);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1 + 1, valueB - 90);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, valueB - 90);
    plane_B_Left_Right_Lid_shape.lineTo(valueC - 1, 1);
    plane_B_Left_Right_Lid_shape.lineTo(0, 1);

    const plane_B_Left_Right_lid = new THREE.ShapeGeometry(
      plane_B_Left_Right_Lid_shape
    );
    assignUVs(plane_B_Left_Right_lid);

    //*  Front Plane
    const plane_B_Left_Right_Lid_Shape_front = new THREE.Mesh(
      plane_B_Left_Right_lid,
      material
    );

    //*  Back Plane
    const plane_B_Left_Right_Lid_Shape_back = new THREE.Mesh(
      plane_B_Left_Right_lid,
      material
    );
    plane_B_Left_Right_Lid_Shape_back.position.z = -2.5;

    /* #endregion */
    /* #region  //*  Corrugate */

    //*  Corrugate
    const points_B_Left_Right_lid = [];

    points_B_Left_Right_lid.push(new THREE.Vector3(0, 0));

    for (let i = 0; i <= Math.abs((valueA - 7.5) / 2); i += 2.5) {
      points_B_Left_Right_lid.push(
        new THREE.Vector3(i * 2 + 2.5, valueC * (2.4 / Cx))
      );
      points_B_Left_Right_lid.push(new THREE.Vector3(i * 2 + 5, 0));
    }

    const curve_B_Left_Right_lid = new THREE.CatmullRomCurve3(
      points_B_Left_Right_lid
    );

    const points_B_Left_Right_Lid_corrugated = curve_B_Left_Right_lid.getPoints(
      1000
    );

    const corrugated_B_Left_Right_Lid_shape = new THREE.Shape();
    corrugated_B_Left_Right_Lid_shape.holes.push(
      new THREE.Path().setFromPoints(points_B_Left_Right_Lid_corrugated)
    );

    const extrudeSettings_B_Left_Right_lid = {
      depth: valueC - 2.5,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 1,
    };

    const corrugated_B_Left_Right_lid = new THREE.ExtrudeGeometry(
      corrugated_B_Left_Right_Lid_shape,
      extrudeSettings_B_Left_Right_lid
    );

    const plane_B_Left_Right_Lid_cent = new THREE.Mesh(
      corrugated_B_Left_Right_lid,
      material
    );
    plane_B_Left_Right_Lid_cent.position.set(valueC - 2.5, 2.5, -0.1);
    rotateObject(plane_B_Left_Right_Lid_cent, -90, -90, 0);
    /* #endregion */

    /*  #endregion */

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* Mesh - แกนหมุน */

    /*  #region  //* Non_Edges */

    /*  #region  //* side_A */

    /*  #region  //* side_A_top */

    const side_A_top = new THREE.Group();
    side_A_top.add(plane_A_side, plane_A_corrugated);

    /*  #endregion */
    /*  #region  //* side_A_Top_left */

    const side_A_Top_left = new THREE.Group();
    side_A_Top_left.add(
      plane_A_Top_Left_Right_front,
      corrugated_A_Top_left_cent,
      plane_A_Top_Left_Right_back
    );

    /* #endregion */
    /*  #region  //* side_A_back */

    const side_A_back = new THREE.Group();
    side_A_back.add(
      plane_A_Back_front,
      ...plane_A_Back_cent,
      plane_A_Back_back
    );

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* side_B */

    /*  #region  //* side_B_left */

    const side_B_left = new THREE.Group();
    side_B_left.add(plane_B_Left_Right_side, plane_B_Left_Right_cent);
    rotateObject(side_B_left, 0, 180);

    /*  #endregion */
    /*  #region  //* side_B_right */

    const side_B_right = new THREE.Group();
    side_B_right.add(side_B_left.clone());
    rotateObject(side_B_right, 0, -180);

    /*  #endregion */
    /*  #region  //* side_B_top */

    const side_B_Top_left = new THREE.Group();
    side_B_Top_left.add(
      plane_B_Top_Lid_front,
      ...plane_B_Top_Lid_cent,
      plane_B_Top_Lid_back
    );

    const side_B_Top_right = new THREE.Group();
    side_B_Top_right.add(side_B_Top_left.clone());

    const side_B_top = new THREE.Group();
    side_B_top.add(plane_B_Top_Bottom_side, plane_B_Top_Bottom_cent);

    /*  #endregion */
    /*  #region  //* side_B_bottom */

    const side_B_Bottom_right = new THREE.Group();
    side_B_Bottom_right.add(
      plane_B_Bottom_Lid_front,
      ...plane_B_Bottom_Lid_cent,
      plane_B_Bottom_Lid_back
    );

    const side_B_bottom = new THREE.Group();
    side_B_bottom.add(side_B_top.clone());
    side_B_bottom.position.set(valueA, 0, -2.5);
    rotateObject(side_B_bottom, 0, -180);

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* side_Lid */

    /* #region  //*  side_A_Top_lid */

    const side_A_Top_lid = new THREE.Group();
    side_A_Top_lid.add(side_B_top.clone());

    /*  #endregion */
    /* #region  //*  side_A_Top_Lid_l */

    const side_A_Top_Lid_l = new THREE.Group();
    side_A_Top_Lid_l.add(
      plane_A_Top_Lid_Left_Right_Shape_front,
      ...plane_A_Top_Lid_Left_Right_cent,
      plane_A_Top_Lid_Left_Right_Shape_back
    );

    /* #endregion */

    /* #region  //*  side_B_Left_lid */

    const side_B_Left_lid = new THREE.Group();
    side_B_Left_lid.add(
      plane_B_Left_Right_Lid_Shape_front,
      plane_B_Left_Right_Lid_cent,
      plane_B_Left_Right_Lid_Shape_back
    );

    /* #endregion */

    /*  #endregion */

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* Object3D - จุดหมุน */

    /*  #region  //* Non-Edges */

    /*  #region  //* pivot_B */

    /*  #region  //* pivot_B_left */

    const pivot_B_Left_lid = new THREE.Object3D();
    pivot_B_Left_lid.add(side_B_Left_lid);
    rotateObject(pivot_B_Left_lid, 0, 180);
    pivot_B_Left_lid.position.x = -valueB / 2;

    const pivot_B_left = new THREE.Object3D();
    pivot_B_left.add(side_B_left, pivot_B_Left_lid);
    pivot_B_left.position.z = -2.5;

    /*  #endregion */
    /*  #region  //* pivot_B_right */

    const pivot_B_Right_lid = new THREE.Object3D();
    pivot_B_Right_lid.add(side_B_Left_lid.clone());
    pivot_B_Right_lid.position.x = valueB / 2;

    const pivot_B_right = new THREE.Object3D();
    pivot_B_right.add(side_B_right, pivot_B_Right_lid);
    pivot_B_right.position.x = valueA;

    /*  #endregion */
    /*  #region  //* pivot_B_top */

    const pivot_A_Top_Lid_l = new THREE.Object3D();
    pivot_A_Top_Lid_l.add(side_A_Top_Lid_l);
    rotateObject(pivot_A_Top_Lid_l, 0, 180);
    pivot_A_Top_Lid_l.position.set(1, 0, -2.5);

    const pivot_A_Top_Lid_r = new THREE.Object3D();
    pivot_A_Top_Lid_r.add(side_A_Top_Lid_l.clone());
    pivot_A_Top_Lid_r.position.x = valueA - 1;

    const pivot_A_Top_lid = new THREE.Object3D();
    pivot_A_Top_lid.add(side_A_Top_lid, pivot_A_Top_Lid_l, pivot_A_Top_Lid_r);
    pivot_A_Top_lid.position.y = valueB;

    const pivot_A_Top_left = new THREE.Object3D();
    pivot_A_Top_left.add(side_A_Top_left);
    rotateObject(pivot_A_Top_left, 0, 180);
    pivot_A_Top_left.position.set(2, 0, -2.5);

    const pivot_A_Top_right = new THREE.Object3D();
    pivot_A_Top_right.add(side_A_Top_left.clone());
    pivot_A_Top_right.position.x = valueA - 2;

    const pivot_A_top = new THREE.Object3D();
    pivot_A_top.add(
      side_A_top,
      pivot_A_Top_lid,
      pivot_A_Top_left,
      pivot_A_Top_right
    );
    pivot_A_top.position.y = valueC;

    const pivot_B_Top_left = new THREE.Object3D();
    pivot_B_Top_left.add(side_B_Top_left);
    pivot_B_Top_left.position.set(1, 0, -2.5);
    rotateObject(pivot_B_Top_left, 0, 180);

    const pivot_B_Top_right = new THREE.Object3D();
    pivot_B_Top_right.add(side_B_Top_right);
    pivot_B_Top_right.position.x = valueA - 1;

    const pivot_B_top = new THREE.Object3D();
    pivot_B_top.add(
      side_B_top,
      pivot_A_top,
      pivot_B_Top_left,
      pivot_B_Top_right
    );
    pivot_B_top.position.y = valueB;

    /*  #endregion */
    /*  #region  //* pivot_B_bottom */

    const pivot_B_Bottom_right = new THREE.Object3D();
    pivot_B_Bottom_right.add(side_B_Bottom_right);
    pivot_B_Bottom_right.position.x = valueA - 1;

    const pivot_B_Bottom_left = new THREE.Object3D();
    pivot_B_Bottom_left.add(side_B_Bottom_right.clone());
    rotateObject(pivot_B_Bottom_left, 0, 180);
    pivot_B_Bottom_left.position.set(1, 0, -2.5);

    const pivot_B_bottom = new THREE.Object3D();
    pivot_B_bottom.add(
      side_B_bottom,
      pivot_B_Bottom_right,
      pivot_B_Bottom_left
    );
    pivot_B_bottom.position.z = -2.5;
    rotateObject(pivot_B_bottom, 180);

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* pivot_A */

    /*  #region  //* pivot_A_back */

    const pivot_A_back = new THREE.Object3D();
    pivot_A_back.add(
      side_A_back,
      pivot_B_left,
      pivot_B_right,
      pivot_B_top,
      pivot_B_bottom
    );

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* pivot_All */

    const pivot_All = new THREE.Object3D();
    pivot_All.add(pivot_A_back);

    /*  #endregion */

    /*  #endregion */

    /*  #endregion */

    setScene((prevState) => {
      prevState.add(pivot_All);
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

export default Tray21701;
