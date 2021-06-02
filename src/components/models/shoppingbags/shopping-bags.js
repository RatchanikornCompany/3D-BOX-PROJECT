import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setR,
  setO,
  setG,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../init';

import { shoppingBagsModel } from './render/object/object';

const ShoppingBagsBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, R, O, G, animate, lineArea, materialColor } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      R: state.menuReducer.R,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      animate: state.menuReducer.animate,
      lineArea: state.menuReducer.lineArea,
      materialColor: state.menuReducer.materialColor,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(250));
    dispatch(setB(130));
    dispatch(setC(250));
    dispatch(setR(6));
    dispatch(setO(1));
    dispatch(setG(30));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(
      shoppingBagsModel(A, B, C, R, O, G, animate, materialColor),
      lineArea
    );

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, R, O, G, animate, lineArea, materialColor]);

  return <Init sceneModel={scene} />;
};

export default ShoppingBagsBoxes;
