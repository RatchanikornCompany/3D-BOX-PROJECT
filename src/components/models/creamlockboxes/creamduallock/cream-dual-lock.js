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

import { creamDualLockModel } from './render/object/object';

const CreamDualLockBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, R, O, G, GSlope, animate, lineArea, materialColor } =
    useSelector((state) => state.menuReducer);

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(175));
    dispatch(setB(52));
    dispatch(setC(52));
    dispatch(setR(20));
    dispatch(setO(1));
    dispatch(setG(15));
    dispatch(setGSlope(4));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(
      creamDualLockModel(A, B, C, R, O, G, GSlope, animate, materialColor),
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

export default CreamDualLockBoxes;
