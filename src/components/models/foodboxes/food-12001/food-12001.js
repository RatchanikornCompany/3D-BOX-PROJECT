import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setO,
  setG,
} from '../../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../../init';

import { food12001Model } from './render/object/object';

const Food12001Boxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, animate, lineArea, materialColor } = useSelector(
    (state) => state.menuReducer
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(200));
    dispatch(setB(100));
    dispatch(setC(40));
    dispatch(setO(1));
    dispatch(setG(15));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(
      food12001Model(A, B, C, O, G, animate, materialColor),
      lineArea
    );

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, G, animate, lineArea, materialColor]);

  return <Init sceneModel={scene} />;
};

export default Food12001Boxes;
