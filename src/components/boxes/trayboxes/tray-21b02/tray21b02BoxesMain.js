import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setA, setB, setC, setO } from '../../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../../init';

import { tray21B02Model } from './module/tray21b02BoxesAttr';

const Tray21B02Boxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, animate, lineArea, materialColor } = useSelector(
    (state) => state.menuReducer
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(300));
    dispatch(setB(200));
    dispatch(setC(200));
    dispatch(setO(1));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(tray21B02Model(A, B, C, O, animate, materialColor), lineArea);

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, animate, lineArea, materialColor]);

  return <Init sceneModel={scene} />;
};

export default Tray21B02Boxes;
