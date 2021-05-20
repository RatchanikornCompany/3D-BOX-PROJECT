import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setR,
  setO,
  setG,
  setGSlope,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../main';
import Webgl from '../../webgl';

import { creamSingleModel } from './render/object';

const CreamSingleBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, R, O, G, GSlope, animate } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      R: state.menuReducer.R,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      GSlope: state.menuReducer.GSlope,
      animate: state.menuReducer.animate,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(70));
    dispatch(setB(30));
    dispatch(setC(105));
    dispatch(setR(20));
    dispatch(setO(1));
    dispatch(setG(15));
    dispatch(setGSlope(5));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const group_All = new THREE.Group();
    group_All.add(creamSingleModel(A, B, C, R, O, G, GSlope, animate));

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, R, O, G, GSlope, animate]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default CreamSingleBoxes;
