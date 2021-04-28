import React, { useState, Fragment } from 'react';
import { Slider, InputNumber, Row, Col, Menu, Switch } from 'antd';
import {
  CodeSandboxOutlined,
  DropboxOutlined,
  SettingOutlined,
  CodepenOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import pictureAInput from '../pic/a.png';
import pictureBInput from '../pic/b.png';
import pictureCInput from '../pic/c.png';

import '../custom.css';

const { SubMenu } = Menu;

const Menus = (props) => {
  const { amb, size, radianSelect } = props;

  const [inputAvalue, setinputAvalue] = useState(200);
  const [inputBvalue, setinputBvalue] = useState(100);
  const [inputCvalue, setinputCvalue] = useState(40);

  const [inputOvalue, setinputOvalue] = useState(1);

  const [inputRvalue, setinputRvalue] = useState(20);

  const [checkOpenBox, setCheckOpenBox] = useState(false);

  const onChangeA = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= inputRvalue + 12) {
        setinputAvalue(value);
        return size(value, inputBvalue, inputCvalue, inputOvalue, inputRvalue);
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= inputRvalue + 137) {
        setinputAvalue(value);
        return size(value, inputBvalue, inputCvalue, inputOvalue, inputRvalue);
      }
    } else {
      setinputAvalue(value);
      return size(value, inputBvalue, inputCvalue, inputOvalue, inputRvalue);
    }
  };

  const onChangeB = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= inputRvalue + 12) {
        setinputBvalue(value);
        return size(inputAvalue, value, inputCvalue, inputOvalue, inputRvalue);
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= inputRvalue + 14) {
        setinputBvalue(value);
        return size(inputAvalue, value, inputCvalue, inputOvalue, inputRvalue);
      }
    } else {
      setinputBvalue(value);
      return size(inputAvalue, value, inputCvalue, inputOvalue, inputRvalue);
    }
  };

  const onChangeC = (value) => {
    setinputCvalue(value);
    return size(inputAvalue, inputBvalue, value, inputOvalue, inputRvalue);
  };

  const onChangeO = (value) => {
    setinputOvalue(value);
    return size(inputAvalue, inputBvalue, inputCvalue, value, inputRvalue);
  };

  const onChangeR = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value <= inputAvalue - 12 && value <= inputBvalue - 12) {
        setinputRvalue(value);
        return size(inputAvalue, inputBvalue, inputCvalue, inputOvalue, value);
      }
    } else if (radianSelect === 'threeduallock') {
      if (
        value <= inputAvalue - 137 &&
        value <= inputBvalue - 14 &&
        value <= 43
      ) {
        setinputRvalue(value);
        return size(inputAvalue, inputBvalue, inputCvalue, inputOvalue, value);
      }
    }
  };

  const animateBox = (value) => {
    setCheckOpenBox(!checkOpenBox);
    return amb(value);
  };

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
              <Col span={15}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeA}
                  value={typeof inputAvalue === 'number' ? inputAvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputAvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeA}
                />
              </Col>
              <Col span={5} style={{ textAlign: 'center' }}>
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
              <Col span={15}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeB}
                  value={typeof inputBvalue === 'number' ? inputBvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputBvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeB}
                />
              </Col>
              <Col span={5} style={{ textAlign: 'center' }}>
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
              <Col span={15}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeC}
                  value={typeof inputCvalue === 'number' ? inputCvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputCvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeC}
                />
              </Col>
              <Col span={5} style={{ textAlign: 'center' }}>
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
                  min={1}
                  max={500}
                  onChange={onChangeR}
                  value={typeof inputRvalue === 'number' ? inputRvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputRvalue}
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
                  value={typeof inputOvalue === 'number' ? inputOvalue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={inputOvalue}
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
        <SubMenu icon={<DropboxOutlined />} title="การควบคุมการเคลื่อนไหว">
          <Menu.Item>
            <Switch
              onClick={(value) => animateBox(value)}
              checkedChildren={'พับกล่อง'}
              unCheckedChildren={'กางกล่อง'}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<CodepenOutlined />} title="กล่องรูปทรงอื่น">
          <Menu.Item>
            <a href="/tuckendboxes">TUCK END BOXES</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/tuckcentboxes">TUCK END BOXES CENTER</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/creamsinglelock">CREAM BOXES SINGLE LOCK</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/shoppingbags">SHOPPING BAGS</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/snaplockboxes">SNAP LOCK BOXES</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/slideboxes">SLIDE BOXES</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default Menus;
