import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
} from '../../../store/reducers/menuReducer';

import * as THREE from 'three';

import { standModel } from './render/object/object';
import { standDielines } from './render/dieline/dieline';
import { standMarker } from './render/dimension/dimension';

import Main from '../../../main';
import Webgl from '../../webgl';

const Stand11d02 = () => {
  const dispatch = useDispatch();
  const {
    valueA,
    valueB,
    valueC,
    valueO,
    valueG,
    valueGSlope,
    unit,
    animate,
  } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      valueG: state.menuReducer.valueG,
      valueGSlope: state.menuReducer.valueGSlope,
      unit: state.menuReducer.unit,
      animate: state.menuReducer.animate,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setValueA(250)); //*  Width
    dispatch(setValueB(380)); //*  Depth
    dispatch(setValueC(220)); //*  Height
    dispatch(setValueO(1)); //*  Opacity
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const group_All = new THREE.Group();
    group_All.add(
      standModel(valueA, valueB, valueC, valueO, valueG, valueGSlope, animate),
      standDielines(valueA, valueB, valueC),
      standMarker(valueA, valueB, valueC, valueG, unit)
    );

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [valueA, valueB, valueC, valueO, valueG, valueGSlope, unit, animate]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default Stand11d02;
