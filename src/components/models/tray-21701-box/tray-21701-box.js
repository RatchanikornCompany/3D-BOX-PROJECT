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

import {
  getPlaneASide,
  getPlaneACorrugated,
  getPlaneATopLeftRightShape,
  getPlaneATopLeftRightCorrugated,
  getPlaneATopLidLeftRightShape,
  getPlaneATopLidLeftRightCorrugated,
  getPlaneABackShape,
  getPlaneABackCorrugated,
  getPlaneBTopBottomShape,
  getPlaneBTopBottomCorrugated,
  getPlaneBTopLidShape,
  getPlaneBTopLidShapeCorrugated,
  getPlaneBBottomLidShape,
  getPlaneBBottomLidShapeCorrugated,
  getPlaneBLeftRightShape,
  getPlaneBLeftRightCorrugated,
} from './render/object/modules/model';

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
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    let Cx = valueC;

    /*  #region  //* Material */

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

    new THREE.TextureLoader().load(
      'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
    )['kraft'] = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: false,
      opacity: valueO,
      transparent: true,
      map: new THREE.TextureLoader().load(
        'https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg'
      ),
    });

    /*  #endregion */
    /*  #region  //* Model */

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
    side_A_top.add(
      getPlaneASide(valueA, valueB, valueO),
      getPlaneACorrugated(valueA, valueB, valueO)
    );

    /*  #endregion */
    /*  #region  //* side_A_Top_left */

    const side_A_Top_left = new THREE.Group();
    side_A_Top_left.add(
      getPlaneATopLeftRightShape(valueB, valueO),
      getPlaneATopLeftRightCorrugated(valueA, valueC, valueO)
    );

    /* #endregion */
    /*  #region  //* side_A_back */

    const side_A_back = new THREE.Group();
    side_A_back.add(
      getPlaneABackShape(valueO),
      ...getPlaneABackCorrugated(valueA, valueB, valueC, valueO)
    );

    /*  #endregion */

    /*  #endregion */
    /*  #region  //* side_B */

    /*  #region  //* side_B_left */

    const side_B_left = new THREE.Group();
    side_B_left.add(
      getPlaneBLeftRightShape(valueC, valueB, valueO),
      getPlaneBLeftRightCorrugated(valueA, valueC, valueO)
    );
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
      getPlaneBTopLidShape(valueC, valueO),
      ...getPlaneBTopLidShapeCorrugated(valueC, valueO)
    );

    const side_B_Top_right = new THREE.Group();
    side_B_Top_right.add(side_B_Top_left.clone());

    const side_B_top = new THREE.Group();
    side_B_top.add(
      getPlaneBTopBottomShape(valueA, valueC, valueO),
      getPlaneBTopBottomCorrugated(valueA, valueC, valueO)
    );

    /*  #endregion */
    /*  #region  //* side_B_bottom */

    const side_B_Bottom_right = new THREE.Group();
    side_B_Bottom_right.add(
      getPlaneBBottomLidShape(valueC, valueO),
      ...getPlaneBBottomLidShapeCorrugated(valueC, valueO)
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
      getPlaneATopLidLeftRightShape(valueC, valueO),
      ...getPlaneATopLidLeftRightCorrugated(valueC, valueO)
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
