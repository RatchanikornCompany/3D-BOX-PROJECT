import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setO,
  setG,
  setGSlope,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../main';
import Webgl from '../../webgl';

import { tuckEndCenterModel } from './render/object/object';

const TuckEndCenterBox = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, GSlope, animate, lineArea } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      GSlope: state.menuReducer.GSlope,
      animate: state.menuReducer.animate,
      lineArea: state.menuReducer.lineArea,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(100));
    dispatch(setB(50));
    dispatch(setC(150));
    dispatch(setO(1));
    dispatch(setG(15));
    dispatch(setGSlope(4));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const group_All = new THREE.Group();
    group_All.add(
      tuckEndCenterModel(A, B, C, O, G, GSlope, animate),

      lineArea
    );

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, G, GSlope, animate, lineArea]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default TuckEndCenterBox;
