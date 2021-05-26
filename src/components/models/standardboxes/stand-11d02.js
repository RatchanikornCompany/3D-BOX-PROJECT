import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setA, setB, setC, setO } from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../main';
import Webgl from '../../webgl';

import { standObject } from './render/object/object';
import { standDielines } from './render/dieline/dieline';
import { standDimension } from './render/dimension/dimension';

const Stand11d02 = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, GSlope, animate, unit, lineArea } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      GSlope: state.menuReducer.GSlope,
      floor: state.menuReducer.floor,
      animate: state.menuReducer.animate,
      unit: state.menuReducer.unit,
      lineArea: state.menuReducer.lineArea,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(250)); //*  Width
    dispatch(setB(380)); //*  Depth
    dispatch(setC(220)); //*  Height
    dispatch(setO(1)); //*  Opacity
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(
      standObject(A, B, C, O, G, GSlope, animate),
      standDielines(A, B, C),
      standDimension(A, B, C, G, unit),
      lineArea
    );

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, G, GSlope, animate, unit, lineArea]);

  return <Webgl sceneModel={scene} />;
};

export default Stand11d02;
