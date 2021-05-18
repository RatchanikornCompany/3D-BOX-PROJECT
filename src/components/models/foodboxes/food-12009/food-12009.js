import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
} from '../../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../../main';
import Webgl from '../../../webgl';

import { food12009Model } from './render/object';

const Food12009Boxes = () => {
  const dispatch = useDispatch();
  const { valueA, valueB, valueC, valueO, animate } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      animate: state.menuReducer.animate,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setValueA(200));
    dispatch(setValueB(100));
    dispatch(setValueC(40));
    dispatch(setValueO(1));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const group_All = new THREE.Group();
    group_All.add(food12009Model(valueA, valueB, valueC, valueO, animate));

    setScene((prevState) => {
      prevState.add(group_All);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [valueA, valueB, valueC, valueO, animate]);

  return (
    <Main>
      <Webgl sceneModel={scene} />
    </Main>
  );
};

export default Food12009Boxes;
