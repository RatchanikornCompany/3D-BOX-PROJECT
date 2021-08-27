import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setF,
  setP,
  setG,
  setGSlope,
  setUnit,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../init';

import { boxesCasing } from './boxescasing';

export default function BOXES_CASING_MAIN() {
  const dispatch = useDispatch();
  const { A, B, C, F, P, G, GSlope, unit } = useSelector(
    (state) => state.menuReducer
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(100));
    dispatch(setB(50));
    dispatch(setC(150));
    dispatch(setF(30));
    dispatch(setP(15));
    dispatch(setG(15));
    dispatch(setGSlope(4));
    dispatch(setUnit('mm'));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(boxesCasing(A, B, C, F, P, G, GSlope, unit));

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, F, P, G, GSlope, unit]);

  return <Init sceneModel={scene} />;
}
