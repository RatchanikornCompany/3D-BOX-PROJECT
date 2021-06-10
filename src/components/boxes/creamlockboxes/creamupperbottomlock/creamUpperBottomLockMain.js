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
} from '../../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../../init';

import { creamUpperBottomLockModel } from './module/creamUpperBottomLockAttr';

const CreamUpperBottomLockBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, R, O, G, GSlope, animate, lineArea, materialColor } =
    useSelector((state) => state.menuReducer);

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
    const groupAll = new THREE.Group();
    groupAll.add(
      creamUpperBottomLockModel(
        A,
        B,
        C,
        R,
        O,
        G,
        GSlope,
        animate,
        materialColor
      ),
      lineArea
    );

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, R, O, G, GSlope, animate, lineArea, materialColor]);

  return <Init sceneModel={scene} />;
};

export default CreamUpperBottomLockBoxes;
