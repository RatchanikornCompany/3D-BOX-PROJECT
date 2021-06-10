import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setA, setB, setC, setO } from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../init';

import { standObject } from './module/stand11d02BoxesAttr';
import { standDielines } from './dieline/dieline';
import { standDimension } from './dimension/dimension';

const Stand11d02 = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, GSlope, animate, unit, lineArea } = useSelector(
    (state) => state.menuReducer
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

  return <Init sceneModel={scene} />;
};

export default Stand11d02;
