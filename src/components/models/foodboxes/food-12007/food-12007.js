import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setA, setB, setC, setO } from '../../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../../main';
import Webgl from '../../../webgl';

import { food12007Model } from './render/object/object';

const Food12007Boxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, animate, lineArea } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      animate: state.menuReducer.animate,
      lineArea: state.menuReducer.lineArea,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(220));
    dispatch(setB(220));
    dispatch(setC(30));
    dispatch(setO(1));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(food12007Model(A, B, C, O, animate), lineArea);

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, animate, lineArea]);

  return <Webgl sceneModel={scene} />;
};

export default Food12007Boxes;
