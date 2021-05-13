import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
  setValueG,
  setValueGSlope,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../main';
import Webgl from '../../webgl';

import { tuckEndCenterModel } from './render/object';

const TuckEndCenterBox = () => {
  const dispatch = useDispatch();
  const {
    valueA,
    valueB,
    valueC,
    valueO,
    valueG,
    valueGSlope,
    animate,
    unit,
    lineArea,
  } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      valueG: state.menuReducer.valueG,
      valueGSlope: state.menuReducer.valueGSlope,
      floor: state.menuReducer.floor,
      animate: state.menuReducer.animate,
      unit: state.menuReducer.unit,
      lineArea: state.menuReducer.lineArea,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setValueA(100));
    dispatch(setValueB(50));
    dispatch(setValueC(150));
    dispatch(setValueO(1));
    dispatch(setValueG(15));
    dispatch(setValueGSlope(4));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const group_All = new THREE.Group();
    group_All.add(
      tuckEndCenterModel(
        valueA,
        valueB,
        valueC,
        valueO,
        valueG,
        valueGSlope,
        animate
      ),

      lineArea
    );

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [
    valueA,
    valueB,
    valueC,
    valueO,
    valueG,
    valueGSlope,
    animate,
    unit,
    lineArea,
  ]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default TuckEndCenterBox;
