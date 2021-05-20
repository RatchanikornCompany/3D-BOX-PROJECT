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

import Main from '../../../../main';
import Webgl from '../../../webgl';

import { food12001Model } from './render/object/object';

const Food12001Boxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, animate } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      animate: state.menuReducer.animate,
    }),
    []
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
    const group_All = new THREE.Group();
    group_All.add(food12001Model(A, B, C, O, G, animate));

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, G, animate]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default Food12001Boxes;
