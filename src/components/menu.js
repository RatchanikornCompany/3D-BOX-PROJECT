import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Menu,
  Select,
  Row,
  Col,
  Slider,
  InputNumber,
  Switch,
  Button,
  message,
} from 'antd';
import {
  SettingOutlined,
  CodeSandboxOutlined,
  DropboxOutlined,
  CalculatorOutlined,
  CodepenOutlined,
  EditOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {
  setA,
  setB,
  setC,
  setR,
  setO,
  setAModel,
  setBModel,
  setCModel,
  setFloor,
  setUnit,
  setAnimate,
  setLineArea,
  setMaterialsColor,
} from '../store/reducers/menuReducer';

import pictureAInput from '../pictures/a.png';
import pictureBInput from '../pictures/b.png';
import pictureCInput from '../pictures/c.png';

import '../custom.css';

import { layoutArea } from '../components/function/layoutArea';

const Menus = (props) => {
  const dispatch = useDispatch();
  const { A, B, C, R, O, AModel, BModel, CModel, floor, unit } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      R: state.menuReducer.R,
      O: state.menuReducer.O,
      AModel: state.menuReducer.AModel,
      BModel: state.menuReducer.BModel,
      CModel: state.menuReducer.CModel,
      floor: state.menuReducer.floor,
      unit: state.menuReducer.unit,
    }),
    []
  );

  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  const [prevUnit, setPrevUnit] = useState('mm');

  const { SubMenu } = Menu;
  const { Option } = Select;
  const key = 'updatable';

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
      case 'radius':
        dispatch(setR(value));
        break;
      case 'opacity':
        dispatch(setO(value));
        break;
      case 'widthModel':
        dispatch(setAModel(value));
        break;
      case 'depthModel':
        dispatch(setBModel(value));
        break;
      case 'heightModel':
        dispatch(setCModel(value));
        break;
      case 'floor':
        dispatch(setFloor(value));
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
    }); //?  prev เก็บค่าตัวแปร value ที่รับเข้ามาก่อนหน้า

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

  const msgVolume = () => {
    let Vs,
      Vn,
      BCM,
      BCMofFloor,
      numRow = 0,
      calcArea;

    Vs = (Math.abs(A - 5) * Math.abs(B - 5) * C) / 1000; // ค่าปริมาตรของกล่องลูกฟูก
    Vn = (AModel * BModel * CModel) / 1000; // ค่าปริมาตรของกล่องที่จะบรรจุ

    BCM = (Vs / Vn) | 0; // จำนวนกล่องที่สามารถบรรจุได้
    BCMofFloor = (BCM / floor) | 0;

    for (let i = 0; i <= A; i += Math.abs((A - 5) / BCMofFloor)) {
      numRow = numRow + 1;
    } // นับจำนวน Row

    calcArea = BCMofFloor * floor * (numRow - 1);

    if (calcArea) {
      message.loading({ content: 'กระณารอสักครู่...', key });
      setTimeout(() => {
        if (calcArea >= 1 && calcArea <= 500) {
          message.success({
            content: `จำนวนที่สามารถบรรจุได้ ${calcArea} ชิ้น!`,
            key,
            duration: 10,
          });
        } else {
          message.error({
            content: `จำนวนที่สามารถบรรจุได้ไม่ถูกต้อง!`,
            key,
            duration: 10,
          });
        }
      }, 1000);

      dispatch(
        setLineArea(layoutArea(A, B, C, floor, BCMofFloor, numRow, calcArea))
      );
    }
  };
  useEffect(() => {
    msgVolume();
  }, [A, B, C]);

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
      'TUCK END BOXES CENTER',
      'CREAM BOXES SINGLE LOCK',
      'CREAM BOXES DUAL LOCK',
      'CREAM BOXES UPPER & BOTTOM LOCK',
      'SHOPPING BAGS',
      'SLIDE BOXES',
      'SNAP BOXES',
      'SNAP LOCK BOXES',
      'STANDARD BOXES',
      'GLOVE BOXES',
      'FOOD BOXES (12001)',
      'FOOD BOXES (12007)',
      'FOOD BOXES (12009)',
      'TRAY BOXES (11A05)',
      'TRAY BOXES (11701)',
      'TRAY BOXES (21701)',
      'TRAY BOXES (21B02)',
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
        <Menu.Item icon={<CodeSandboxOutlined />}>
          SIZING OF BOX PARTS
        </Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={16}>
            <Slider
              min={1}
              max={50}
              onChange={(value) => handleChangeSize(value, 'radius')}
              value={R}
              step={1}
            />
          </Col>
          <Col span={5}>
            <InputNumber
              min={1}
              max={50}
              step={1}
              value={R}
              onChange={(value) => handleChangeSize(value, 'radius')}
            />
          </Col>
          <Col span={3}>
            <label>Radius</label>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={16}>
            <Slider
              min={0.1}
              max={1}
              onChange={(value) => handleChangeSize(value, 'opacity')}
              value={O}
              step={0.1}
            />
          </Col>
          <Col span={5}>
            <InputNumber
              min={0.1}
              max={1}
              step={0.1}
              value={O}
              onChange={(value) => handleChangeSize(value, 'opacity')}
            />
          </Col>
          <Col span={3}>
            <label>Opacity</label>
          </Col>
        </Row>
        <Menu.Item icon={<DropboxOutlined />}>MOVEMENT CONTROL</Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Switch
            onClick={(value) =>
              value ? dispatch(setAnimate(value)) : dispatch(setAnimate(value))
            }
            checkedChildren={'Fold'}
            unCheckedChildren={'Expand'}
          />
        </Row>
        <Menu.Item icon={<EditOutlined />}>TEXTURE MATERIAL</Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={2}>
            <Button
              shape="circle"
              onClick={() => dispatch(setMaterialsColor(false))}
            >
              Clay
            </Button>
          </Col>
          <Col span={2}>
            <Button
              style={{ backgroundColor: '#d5b59c' }}
              shape="circle"
              onClick={() => dispatch(setMaterialsColor(true))}
            >
              Kraft
            </Button>
          </Col>
        </Row>
        <Menu.Item icon={<CalculatorOutlined />}>
          BOX AREA CALCULATION
        </Menu.Item>
        <Row style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}>
          <Col span={4}>
            <InputNumber
              min={1}
              max={500}
              step={1}
              value={AModel}
              onChange={(value) => handleChangeSize(value, 'widthModel')}
              placeholder={'Width'}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={500}
              step={1}
              value={BModel}
              onChange={(value) => handleChangeSize(value, 'depthModel')}
              placeholder={'Depth'}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={500}
              step={1}
              value={CModel}
              onChange={(value) => handleChangeSize(value, 'heightModel')}
              placeholder={'Height'}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={10}
              step={1}
              value={floor}
              onChange={(value) => handleChangeSize(value, 'floor')}
              placeholder={'Floor'}
            />
          </Col>
        </Row>
        <Row
          role="button"
          aria-expanded="false"
          aria-haspopup="true"
          style={{ paddingLeft: 46, marginTop: 4, marginBottom: 8 }}
        >
          <Button type="primary" onClick={msgVolume}>
            Calculate
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(setAModel());
              dispatch(setBModel());
              dispatch(setCModel());
              dispatch(setFloor());
            }}
            style={{ marginLeft: 12 }}
          >
            Reset
          </Button>
        </Row>
        <SubMenu icon={<CodepenOutlined />} title="BOXES">
          {showButton()}
        </SubMenu>
      </Menu>
    </>
  );
};

export default Menus;
