/* #region  //*  Variable */

import React, { useState, Fragment } from 'react';
import { Slider, InputNumber, Row, Col, Menu, Select } from 'antd';
import {
  CodeSandboxOutlined,
  SettingOutlined,
  CodepenOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import pictureAInput from '../pic/a.png';
import pictureBInput from '../pic/b.png';
import pictureCInput from '../pic/c.png';

import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  setValueR,
  setValueO,
} from '../../store/reducers/menuReducer';

import '../../custom.css';

const { SubMenu } = Menu;
const { Option } = Select;

const Menus = (props) => {
  //*  Deconstructor
  const { unitSent, radianSelect } = props;

  //*  State
  const dispatch = useDispatch();
  const { valueA, valueB, valueC, valueR, valueO } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA, //?  Width
      valueB: state.menuReducer.valueB, //?  Depth
      valueC: state.menuReducer.valueC, //?  Height
      valueR: state.menuReducer.valueR, //?  Radian
      valueO: state.menuReducer.valueO, //?  Opacity
    }),
    []
  );

  const [unit, setUnit] = useState('mm');

  const returnSentUnit = (value) => {
    return unitSent(value);
  };

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
  const onChangeR = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value <= valueA - 12 && value <= valueB - 12) {
        dispatch(setValueR(value));
      }
    } else if (radianSelect === 'threeduallock') {
      if (value <= valueA - 137 && value <= valueB - 14 && value <= 43) {
        dispatch(setValueR(value));
      }
    }
  };
  const onChangeO = (value) => {
    dispatch(setValueO(value));
  };

  const handleCheckUnit = (value) => {
    let pre;

    setUnit((prev) => {
      pre = prev;
      return { value };
    }); //?  prev เก็บค่าตัวแปร value ที่รับเข้ามาก่อนหน้า

    if (value === 'cm') {
      //*  mm to cm
      if (pre === 'in') {
        dispatch(setValueA(valueA / 0.3937));
        dispatch(setValueB(valueB / 0.3937));
        dispatch(setValueC(valueC / 0.3937));
        returnSentUnit(value);
        return setUnit(value);
      }
      dispatch(setValueA(valueA / 10));
      dispatch(setValueB(valueB / 10));
      dispatch(setValueC(valueC / 10));
      returnSentUnit(value);
      return setUnit(value);
    }

    if (value === 'in') {
      //*  mm to inch
      if (pre === 'cm') {
        dispatch(setValueA(valueA * 0.3937));
        dispatch(setValueB(valueB * 0.3937));
        dispatch(setValueC(valueC * 0.3937));
        returnSentUnit(value);
        return setUnit(value);
      }
      dispatch(setValueA(Math.round(valueA * 0.03937)));
      dispatch(setValueB(Math.round(valueB * 0.03937)));
      dispatch(setValueC(Math.round(valueC * 0.03937)));
      returnSentUnit(value);
      return setUnit(value);
    }
    //*  cm to mm
    if (pre === 'cm' && value === 'mm') {
      dispatch(setValueA(Math.round(valueA * 10)));
      dispatch(setValueB(Math.round(valueB * 10)));
      dispatch(setValueC(Math.round(valueC * 10)));
      returnSentUnit(value);
      return setUnit(value);
    }
    //*  inch to mm
    if (pre === 'in' && value === 'mm') {
      dispatch(setValueA(Math.round(valueA * 0.03937)));
      dispatch(setValueB(Math.round(valueB * 0.03937)));
      dispatch(setValueC(Math.round(valueC * 0.03937)));
      returnSentUnit(value);
      return setUnit(value);
    }
    returnSentUnit(value);
    return setUnit(value);
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
                  value={valueA}
                  formatter={(value) => `${value}`}
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
                  value={valueB}
                  formatter={(value) => `${value}`}
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
                  value={valueC}
                  formatter={(value) => `${value}`}
                  onChange={onChangeC}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
          <hr />
          <h6 style={{ color: 'white', textAlign: 'center' }}>
            {`ชิ้นงานนี้ มีขนาดพื้นที่ (กว้างxยาว) =
            ${Math.round(valueA + valueB * 2)}x${Math.round(
              valueB * 2 + valueC * 3
            )} ${unit}`}{' '}
            {(valueA + valueB * 2) * (valueB * 2 + valueC * 3) <= 210 * 297
              ? 'ขนาดกระดาษที่แนะนำ A4'
              : 'ขนาดกระดาษที่แนะนำ A5'}
          </h6>
        </SubMenu>
        <SubMenu
          icon={<CodeSandboxOutlined />}
          title="การปรับขนาดชิ้นส่วนกล่อง"
        >
          <Menu.Item>
            <Row>
              <Col span={16}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeR}
                  value={valueR}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueR}
                  formatter={(value) => `${value}`}
                  onChange={onChangeR}
                />
              </Col>
              <Col span={5}>
                <label>เส้นรอบวงกลม</label>
              </Col>
            </Row>
          </Menu.Item>
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
          <SubMenu title="Food boxes">
            <Menu.Item>
              <a href="/food1171">food-1171</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/food1202">food-1202</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/food1207">food-1207</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Snap lock boxes">
            <Menu.Item>
              <a href="/snap">snap-boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/snap191">snap-1910</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Tray boxes">
            <Menu.Item>
              <a href="/tray1171">tray-1171</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/tray">tray-11a05</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/tray21701">tray-21701</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Shirt boxes">
            <Menu.Item>
              <a href="/shirt">shirt-12405</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Standard boxes">
            <Menu.Item>
              <a href="/stand11d02">stand-11d02</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Glove boxes">
            <Menu.Item>
              <a href="/glovebox">glove-boxes</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Carry boxes">
            <Menu.Item>
              <a href="/carry">carry-0000</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Carton bags & pillows">
            <Menu.Item>
              <a href="/cartoonbag">cartoonbag-1210c</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Lock boxes">
            <Menu.Item>
              <a href="/threelock">lock boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/threeduallock">lock boxes - twin</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/threelockul">lock boxes - upper & bottom</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default Menus;
