import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setL,
  setG,
  setGSlope,
  setP,
  setPSlope,
  setF,
  setUnit,
  setRadius,
  setLockHeight_fix,
  setSlopet,
  setSloped,
  setHand_fix,
  setLonghand_fix,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Init from '../../init';

import { specialBoxes } from './specialBoxes';

export default function SPECIAL_BOXES_MAIN() {
  const dispatch = useDispatch();
  const {
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    PSlope,
    F,
    unit,
    Radius,
    LockHeight_fix,
    Slpet,
    Sloped,
    Hand_fix,
    Longhand_fix,
  } = useSelector((state) => state.menuReducer);

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(120));
    dispatch(setB(75));
    dispatch(setC(50));
    dispatch(setL(4));
    dispatch(setG(15));
    dispatch(setGSlope(4));
    dispatch(setP(35));
    dispatch(setPSlope(4));
    dispatch(setF(50));
    dispatch(setUnit('mm'));
    dispatch(setRadius(4));
    dispatch(setLockHeight_fix(50));
    dispatch(setSlopet(50));
    dispatch(setSloped(50));
    dispatch(setHand_fix(50));
    dispatch(setLonghand_fix(50));
  }, [dispatch]);

  //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(
      specialBoxes(
        A,
        B,
        C,
        L,
        G,
        GSlope,
        P,
        PSlope,
        F,
        unit,
        Radius,
        LockHeight_fix,
        Slpet,
        Sloped,
        Hand_fix,
        Longhand_fix
      )
    );

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [
    A,
    B,
    C,
    L,
    G,
    GSlope,
    P,
    PSlope,
    F,
    unit,
    Radius,
    LockHeight_fix,
    Slpet,
    Sloped,
    Hand_fix,
    Longhand_fix,
  ]);

  return <Init sceneModel={scene} />;
}
