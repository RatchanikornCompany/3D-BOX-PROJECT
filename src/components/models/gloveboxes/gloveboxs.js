import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setA, setB, setC, setO } from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Webgl from '../../webgl';

import { gloveModel } from './render/object/object';

const GloveBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, animate, lineArea, materialColor } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      animate: state.menuReducer.animate,
      lineArea: state.menuReducer.lineArea,
      materialColor: state.menuReducer.materialColor,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(125));
    dispatch(setB(60));
    dispatch(setC(235));
    dispatch(setO(1));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(gloveModel(A, B, C, O, animate, materialColor), lineArea);

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, animate, lineArea, materialColor]);

  return <Webgl sceneModel={scene} />;
};

export default GloveBoxes;
