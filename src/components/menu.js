import React, { useState, Fragment } from 'react';
import { Menu, Select, Row, Col, Slider, InputNumber } from 'antd';
import {
  SettingOutlined,
  CodeSandboxOutlined,
  CodepenOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import pictureAInput from '../pictures/a.png';
import pictureBInput from '../pictures/b.png';
import pictureCInput from '../pictures/c.png';

import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
  setUnit,
} from '../store/reducers/menuReducer';

import '../custom.css';

const { SubMenu } = Menu;
const { Option } = Select;

const Menus = () => {
  const radianSelect = null;
  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  //*  State
  const dispatch = useDispatch();
  const { valueA, valueB, valueC, valueR, valueO, unit } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA, //?  Width
      valueB: state.menuReducer.valueB, //?  Depth
      valueC: state.menuReducer.valueC, //?  Height
      valueR: state.menuReducer.valueR, //?  Radian
      valueO: state.menuReducer.valueO, //?  Opacity
      unit: state.menuReducer.unit,
    }),
    []
  );

  const [prevUnit, setPrevUnit] = useState('mm');

  //*  onChange Event
  const onChangeA = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= valueR + 12) {
        dispatch(setValueA(value));
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= valueR + 137) {
        dispatch(setValueA(value));
      }
    } else {
      dispatch(setValueA(value));
    }
  };
  const onChangeB = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= valueR + 12) {
        dispatch(setValueB(value));
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= valueR + 14) {
        dispatch(setValueB(value));
      }
    } else {
      dispatch(setValueB(value));
    }
  };
  const onChangeC = (value) => {
    dispatch(setValueC(value));
  };
  const onChangeO = (value) => {
    dispatch(setValueO(value));
  };
  const handleCheckUnit = (value) => {
    let pre;

    setPrevUnit((prevState) => {
      pre = prevState;
      return { value };
    }); //?  prev เก็บค่าตัวแปร value ที่รับเข้ามาก่อนหน้า

    //*  mm
    if (value === 'mm') {
      if (pre === 'cm') {
        dispatch(setUnit(value));
      }
      dispatch(setUnit(value));
    }
    //*  cm
    if (value === 'cm') {
      if (pre === 'in') {
        dispatch(setUnit(value));
      }
      dispatch(setUnit(value));
    }
    //*  in
    if (value === 'in') {
      if (pre === 'cm') {
        dispatch(setUnit(value));
      }
      dispatch(setUnit(value));
    }
  };
  const selectUnit = () => (
    <Select
      value={unit}
      style={{ width: 80, maxWidth: '100%' }}
      onChange={handleCheckUnit}
    >
      <Option value="mm">mm</Option>
      <Option value="cm">cm</Option>
      <Option value="in">inch</Option>
    </Select>
  );

  return (
    <Fragment>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{ minHeight: '100vh', maxHeight: '50vh', overflow: 'auto' }}
      >
        <SubMenu key="sub1" icon={<SettingOutlined />} title="การปรับขนาดกล่อง">
          <Menu.Item key="1">
            <Row>
              <Col span={1}>
                <img
                  src={pictureAInput}
                  alt=""
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeA}
                  value={valueA}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={`${
                    unit === 'mm'
                      ? (valueA / defaultUnit[unit]).toFixed(2)
                      : (valueA / defaultUnit[unit]).toFixed(1)
                  }`}
                  onChange={onChangeA}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>กว้าง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={1}>
                <img
                  src={pictureBInput}
                  alt=""
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeB}
                  value={valueB}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={`${
                    unit === 'mm'
                      ? (valueB / defaultUnit[unit]).toFixed(2)
                      : (valueB / defaultUnit[unit]).toFixed(1)
                  }`}
                  onChange={onChangeB}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>ยาว</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={1}>
                <img
                  src={pictureCInput}
                  alt=""
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeC}
                  value={valueC}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={`${
                    unit === 'mm'
                      ? (valueC / defaultUnit[unit]).toFixed(2)
                      : (valueC / defaultUnit[unit]).toFixed(1)
                  }`}
                  onChange={onChangeC}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          icon={<CodeSandboxOutlined />}
          title="การปรับขนาดชิ้นส่วนกล่อง"
        >
          <Menu.Item>
            <Row>
              <Col span={16}>
                <Slider
                  min={0.1}
                  max={1}
                  onChange={onChangeO}
                  value={valueO}
                  step={0.1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={valueO}
                  formatter={(value) => `${value}`}
                  onChange={onChangeO}
                />
              </Col>
              <Col span={5}>
                <label>ความโปร่งใส</label>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<CodepenOutlined />} title="กล่องรูปทรงอื่น">
          <SubMenu title="Standard boxes">
            <Menu.Item>
              <a href="/stand11d02">stand-11d02</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default Menus;
