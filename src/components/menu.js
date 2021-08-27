import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Menu, Select, Row, Col, Slider, InputNumber, Switch } from 'antd';
import {
  SettingOutlined,
  CodepenOutlined,
  DropboxOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {
  setA,
  setB,
  setC,
  setF,
  setP,
  setUnit,
  setLayout,
} from '../store/reducers/menuReducer';

import '../custom.css';

const Menus = (props) => {
  const dispatch = useDispatch();
  const { A, B, C, F, P, unit, Layout } = useSelector(
    (state) => state.menuReducer
  );

  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  const [, setPrevUnit] = useState('mm');

  const { SubMenu } = Menu;
  const { Option } = Select;

  const handleChangeSize = (value, type) => {
    switch (type) {
      case 'width':
        dispatch(setA(value));
        break;
      case 'depth':
        dispatch(setB(value));
        break;
      case 'height':
        dispatch(setC(value));
        break;
      case 'flap':
        dispatch(setF(value));
        break;
      case 'plug':
        dispatch(setP(value));
        break;
      default:
        return '';
    }
  };

  const handleCheckUnit = (value) => {
    let pre;

    setPrevUnit((prevState) => {
      pre = prevState;
      return { value };
    }); //?  pre เก็บค่าตัวแปร value ที่รับเข้ามาก่อนหน้า

    // mm
    if (value === 'mm') {
      if (pre === 'cm') {
        dispatch(setUnit(value));
      }
      dispatch(setUnit(value));
    }
    // cm
    if (value === 'cm') {
      if (pre === 'in') {
        dispatch(setUnit(value));
      }
      dispatch(setUnit(value));
    }
    // in
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

  const showButton = () => {
    const dataButton = [
      'TUCK END BOXES',
      'TUCK END BOXES COVER CENTER',
      'BOXES CASING',
      'SNAP LOCK BOXES',
      'SNAP LOCK BOXES COVER',
      'SPECIAL BOXES',
      'BENTO BOXES',
    ];
    return (
      <>
        {dataButton.map((insideValue, index) => (
          <Menu.Item onClick={() => props.sendCallBackPosition(index)}>
            {insideValue}
          </Menu.Item>
        ))}
      </>
    );
  };

  return (
    <>
      <Menu
        theme="dark"
        style={{ minHeight: '100vh', maxHeight: '50vh', overflow: 'auto' }}
      >
        <Menu.Item icon={<SettingOutlined />}>BOX SIZING</Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={1}>
            <img
              src={'./image/a.png'}
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
              onChange={(value) => handleChangeSize(value, 'width')}
              value={A}
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
                  ? (A / defaultUnit[unit]).toFixed(2)
                  : (A / defaultUnit[unit]).toFixed(1)
              }`}
              onChange={(value) => handleChangeSize(value, 'width')}
            />
          </Col>
          <Col span={3}>{selectUnit()}</Col>
          <Col span={3}>
            <label>Width</label>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={1}>
            <img
              src={'./image/b.png'}
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
              onChange={(value) => handleChangeSize(value, 'depth')}
              value={B}
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
                  ? (B / defaultUnit[unit]).toFixed(2)
                  : (B / defaultUnit[unit]).toFixed(1)
              }`}
              onChange={(value) => handleChangeSize(value, 'depth')}
            />
          </Col>
          <Col span={3}>{selectUnit()}</Col>
          <Col span={3}>
            <label>Depth</label>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={1}>
            <img
              src={'./image/c.png'}
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
              onChange={(value) => handleChangeSize(value, 'height')}
              value={C}
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
                  ? (C / defaultUnit[unit]).toFixed(2)
                  : (C / defaultUnit[unit]).toFixed(1)
              }`}
              onChange={(value) => handleChangeSize(value, 'height')}
            />
          </Col>
          <Col span={3}>{selectUnit()}</Col>
          <Col span={3}>
            <label>Height</label>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={1}>
            <img
              src={'./image/f.png'}
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
              onChange={(value) => handleChangeSize(value, 'flap')}
              value={F}
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
                  ? (F / defaultUnit[unit]).toFixed(2)
                  : (F / defaultUnit[unit]).toFixed(1)
              }`}
              onChange={(value) => handleChangeSize(value, 'flap')}
            />
          </Col>
          <Col span={3}>{selectUnit()}</Col>
          <Col span={3}>
            <label>Flap</label>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={1}>
            <img
              src={'./image/p.png'}
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
              onChange={(value) => handleChangeSize(value, 'plug')}
              value={P}
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
                  ? (P / defaultUnit[unit]).toFixed(2)
                  : (P / defaultUnit[unit]).toFixed(1)
              }`}
              onChange={(value) => handleChangeSize(value, 'plug')}
            />
          </Col>
          <Col span={3}>{selectUnit()}</Col>
          <Col span={3}>
            <label>Plug</label>
          </Col>
        </Row>
        <Menu.Item icon={<DropboxOutlined />}>MOVEMENT CONTROL</Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Switch
            onClick={(value) =>
              value ? dispatch(setLayout(value)) : dispatch(setLayout(value))
            }
            checkedChildren={'LAYOUT'}
            unCheckedChildren={'2D'}
          />
        </Row>
        <SubMenu icon={<CodepenOutlined />} title="BOXES">
          {showButton()}
        </SubMenu>
      </Menu>
    </>
  );
};

export default Menus;
