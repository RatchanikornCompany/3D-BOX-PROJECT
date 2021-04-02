import React, { useState, useEffect, Fragment } from 'react';
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
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {
  setValueA,
  setValueB,
  setValueC,
  setValueO,
  setValueAModel,
  setValueBModel,
  setValueCModel,
  setFloor,
  setUnit,
  setAnimate,
  setLineArea,
} from '../store/reducers/menuReducer';

import pictureAInput from '../pictures/a.png';
import pictureBInput from '../pictures/b.png';
import pictureCInput from '../pictures/c.png';

import '../custom.css';

import { layoutArea } from '../components/function/layoutArea';

const { SubMenu } = Menu;
const { Option } = Select;
const key = 'updatable';

const Menus = () => {
  const dispatch = useDispatch();
  const {
    valueA,
    valueB,
    valueC,
    valueO,
    valueAModel,
    valueBModel,
    valueCModel,
    floor,
    unit,
  } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      valueAModel: state.menuReducer.valueAModel,
      valueBModel: state.menuReducer.valueBModel,
      valueCModel: state.menuReducer.valueCModel,
      floor: state.menuReducer.floor,
      unit: state.menuReducer.unit,
    }),
    []
  );
  const [prevUnit, setPrevUnit] = useState('mm');

  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  const handleChangeSize = (value, type) => {
    switch (type) {
      case 'width':
        dispatch(setValueA(value));
        break;
      case 'depth':
        dispatch(setValueB(value));
        break;
      case 'height':
        dispatch(setValueC(value));
        break;
      case 'opacity':
        dispatch(setValueO(value));
        break;
      case 'widthModel':
        dispatch(setValueAModel(value));
        break;
      case 'depthModel':
        dispatch(setValueBModel(value));
        break;
      case 'heightModel':
        dispatch(setValueCModel(value));
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

  const animateBox = (value) => {
    if (value) {
      dispatch(setAnimate(value));
    } else {
      dispatch(setAnimate(value));
    }
  };

  useEffect(() => {
    msgVolume();
  }, [valueA, valueB, valueC]);

  const msgVolume = () => {
    let Vs;
    let Vn;
    let BCM;
    let BCMofFloor;
    let numRow = 0;
    let calcArea;

    Vs = (Math.abs(valueA - 5) * Math.abs(valueB - 5) * valueC) / 1000; // ค่าปริมาตรของกล่องลูกฟูก
    Vn = (valueAModel * valueBModel * valueCModel) / 1000; // ค่าปริมาตรของกล่องที่จะบรรจุ

    BCM = (Vs / Vn) | 0; // จำนวนกล่องที่สามารถบรรจุได้
    BCMofFloor = (BCM / floor) | 0;

    for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
      numRow = numRow + 1;
    } // นับจำนวน Row

    calcArea = BCMofFloor * floor * (numRow - 1);

    dispatch(
      setLineArea(
        layoutArea(valueA, valueB, valueC, floor, BCMofFloor, calcArea)
      )
    );

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
                  onChange={(value) => handleChangeSize(value, 'width')}
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
                  onChange={(value) => handleChangeSize(value, 'width')}
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
                  onChange={(value) => handleChangeSize(value, 'depth')}
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
                  onChange={(value) => handleChangeSize(value, 'depth')}
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
                  onChange={(value) => handleChangeSize(value, 'height')}
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
                  onChange={(value) => handleChangeSize(value, 'height')}
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
                  onChange={(value) => handleChangeSize(value, 'opacity')}
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
                  onChange={(value) => handleChangeSize(value, 'opacity')}
                />
              </Col>
              <Col span={5}>
                <label>ความโปร่งใส</label>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<DropboxOutlined />} title="การควบคุมการเคลื่อนไหว">
          <Menu.Item>
            <Switch
              onClick={(value) => animateBox(value)}
              checkedChildren={'พับกล่อง'}
              unCheckedChildren={'กางกล่อง'}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<CalculatorOutlined />} title="การคำนวณพื้นที่กล่อง">
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueAModel}
                  onChange={(value) => handleChangeSize(value, 'widthModel')}
                />
              </Col>
              <Col span={5}>
                <label>กว้าง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueBModel}
                  onChange={(value) => handleChangeSize(value, 'depthModel')}
                />
              </Col>
              <Col span={5}>
                <label>ยาว</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueCModel}
                  onChange={(value) => handleChangeSize(value, 'heightModel')}
                />
              </Col>
              <Col span={5}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Row
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 48 }}
          >
            <span>จำนวนชั้นที่ต้องการวางซ้อน</span>
          </Row>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={10}
                  step={1}
                  value={floor}
                  onChange={(value) => handleChangeSize(value, 'floor')}
                />
              </Col>
              <Col span={5}>
                <label>ชั้น</label>
              </Col>
            </Row>
          </Menu.Item>
          <Row
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 46 }}
          >
            <Button type="primary" onClick={msgVolume}>
              คำนวณ
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => window.location.reload()}
              style={{ marginLeft: 12 }}
            >
              รีเซ็ท
            </Button>
          </Row>
        </SubMenu>
        <SubMenu icon={<CodepenOutlined />} title="กล่องรูปทรงอื่น">
          <SubMenu title="Standard boxes">
            <Menu.Item>
              <a href="/stand11d02">stand-11d02</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Tray boxes">
            <Menu.Item>
              <a href="/tray21701">tray-21701</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default Menus;
