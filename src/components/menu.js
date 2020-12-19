import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider, InputNumber, Row, Col, Menu, Switch, Affix } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const Menus = (props) => {
  const { clb, opb, size, radianSelect } = props;

  const [inputAvalue, setinputAvalue] = useState(100);
  const [inputBvalue, setinputBvalue] = useState(50);
  const [inputCvalue, setinputCvalue] = useState(150);
  const [inputDvalue, setinputDvalue] = useState(0.5);
  const [inputRvalue, setinputRvalue] = useState(52);
  const [inputPvalue, setinputPvalue] = useState(5);
  const [inputLLvalue, setinputLLvalue] = useState((inputAvalue * 0.3) | 0);
  const [box, setBox] = useState('');
  const [checkOpenBox, setCheckOpenBox] = useState(false);
  const [container, setContainer] = useState(null);

  const changeBox = (value) => {
    if (value === 'close') {
      closeBox();
    } else if (value === 'open') {
      openBox();
    }
    setCheckOpenBox(!checkOpenBox);
  };

  /* onChange */
  const onChangeA = (value) => {
    setinputAvalue(value);
    return size(
      value,
      inputBvalue,
      inputCvalue,
      inputDvalue,
      inputRvalue,
      inputPvalue,
      inputLLvalue
    );
  };
  const onChangeB = (value) => {
    setinputBvalue(value);
    return size(
      inputAvalue,
      value,
      inputCvalue,
      inputDvalue,
      inputRvalue,
      inputPvalue,
      inputLLvalue
    );
  };
  const onChangeC = (value) => {
    setinputCvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      value,
      inputDvalue,
      inputRvalue,
      inputPvalue,
      inputLLvalue
    );
  };
  const onChangeD = (value) => {
    setinputDvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      value,
      inputRvalue,
      inputPvalue,
      inputLLvalue
    );
  };
  const onChangeR = (value) => {
    if (
      radianSelect === 'threelock' ||
      radianSelect === 'threeduallock' ||
      radianSelect === 'threelockul'
    ) {
      setinputRvalue(value);

      /* + */
      // กรณีที่ค่า R มากกว่า A และ B
      if (value >= inputAvalue && value >= inputBvalue) {
        setinputAvalue(value);
        setinputBvalue(value);
        return size(
          value,
          value,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }
      // กรณีที่ R มากกว่า A และน้อยกว่า B
      else if (value >= inputAvalue && value <= inputBvalue) {
        setinputAvalue(value);
        return size(
          value,
          inputBvalue,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }
      // กรณีที่ R น้อยกว่า A และมากกว่า B
      else if (value <= inputAvalue && value >= inputBvalue) {
        setinputBvalue(value);
        return size(
          inputAvalue,
          value,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }

      /* - */
      // กรณีที่ค่า R น้อยกว่า A และ B
      if (value <= inputAvalue && value <= inputBvalue) {
        setinputAvalue(value);
        setinputBvalue(value);
        return size(
          value,
          value,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }
      // กรณีที่ R น้อยกว่า A และมากกว่า B
      else if (value <= inputAvalue && value >= inputBvalue) {
        setinputAvalue(value);
        return size(
          value,
          inputBvalue,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }
      // กรณีที่ R มากกว่า A และน้อยกว่า B
      else if (value >= inputAvalue && value <= inputBvalue) {
        setinputBvalue(value);
        return size(
          inputAvalue,
          value,
          inputCvalue,
          inputDvalue,
          value,
          inputPvalue,
          inputLLvalue
        );
      }
    }
  };
  const onChangeP = (value) => {
    setinputPvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputDvalue,
      inputRvalue,
      value,
      inputLLvalue
    );
  };
  const onChangeLL = (value) => {
    setinputLLvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputDvalue,
      inputRvalue,
      inputPvalue,
      value
    );
  };

  /* onClick */
  const closeBox = (value) => {
    setBox('closeBox');
    return clb();
  };
  const openBox = (value) => {
    setBox('openBox');
    return opb();
  };

  return (
    <div>
      <Affix target={() => container}>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          style={{ minHeight: '100vh', maxHeight: '50vh', overflow: 'auto' }}
        >
          <SubMenu
            key='sub1'
            icon={<SettingOutlined />}
            title='การปรับขนาดกล่อง'
          >
            <Menu.Item key='1'>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeA}
                    value={typeof inputAvalue === 'number' ? inputAvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputAvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeA}
                  />
                  กว้าง
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeB}
                    value={typeof inputBvalue === 'number' ? inputBvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputBvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeB}
                  />
                  ลึก
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeC}
                    value={typeof inputCvalue === 'number' ? inputCvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputCvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeC}
                  />
                  สูง
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={0.1}
                    max={10}
                    onChange={onChangeD}
                    value={typeof inputDvalue === 'number' ? inputDvalue : 0}
                    step={0.1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={0.1}
                    max={10}
                    style={{ margin: '0 16px' }}
                    step={0.1}
                    value={inputDvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeD}
                  />
                  หนา
                </Col>
              </Row>
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<AppstoreOutlined />} title='การปรับขนาดชิ้นส่วนกล่อง'>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeR}
                    value={typeof inputRvalue === 'number' ? inputRvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputRvalue}
                    formatter={(value) => `${value - 31} mm`}
                    onChange={onChangeR}
                  />
                  รัศมีครึ่งวงกลม
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeP}
                    value={typeof inputPvalue === 'number' ? inputPvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputPvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeP}
                  />
                  ฝาเสียบ
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={200}
                    onChange={onChangeLL}
                    value={typeof inputLLvalue === 'number' ? inputLLvalue : 0}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={200}
                    style={{ margin: '0 16px' }}
                    step={1}
                    value={inputLLvalue}
                    formatter={(value) => `${value} mm`}
                    onChange={onChangeLL}
                  />
                  ผนังกันฝุ่น
                </Col>
              </Row>
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<PieChartOutlined />} title='การควบคุมการเคลื่อนไหว'>
            <Menu.Item>
              <Switch
                onClick={() => changeBox(checkOpenBox ? 'open' : 'close')}
                checkedChildren={'พับกล่อง'}
                unCheckedChildren={'กางกล่อง'}
              />
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<MailOutlined />} title='กล่องรูปทรงอื่น'>
            <SubMenu title='Snap lock boxes'>
              <Menu.Item>
                <a href='/'>snap-boxes</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/snap191'>snap-1910</a>
              </Menu.Item>
            </SubMenu>
            <SubMenu title='Food boxes'>
              <Menu.Item>
                <a href='/food1171'>food-1171</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/food1202'>food-1202</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/food1207'>food-1207</a>
              </Menu.Item>
            </SubMenu>
            <SubMenu title='Tray boxes'>
              <Menu.Item>
                <a href='/tray1171'>tray-1171</a>
              </Menu.Item>
              <SubMenu title='tray-11a05'>
                <Menu.Item>
                  <a href='/trays'>Tray</a>
                </Menu.Item>
                <Menu.Item>
                  <a href='/tray'>Boxes</a>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu title='Shirt boxes'>
              <Menu.Item>
                <a href='/shirt'>shirt-12405</a>
              </Menu.Item>
            </SubMenu>
            <SubMenu title='Carton bags & pillows'>
              <Menu.Item>
                <a href='/cartoonbag'>cartoonbag-1210c</a>
              </Menu.Item>
            </SubMenu>
            <SubMenu title='Glove boxes'>
              <Menu.Item>
                <a href='/glovebox'>glove-boxes</a>
              </Menu.Item>
            </SubMenu>
            <SubMenu title='Lock boxes'>
              <Menu.Item>
                <a href='/threelock'>lock boxes</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/threeduallock'>lock boxes - twin</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/threelockul'>lock boxes - upper & bottom</a>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Affix>
    </div>
  );
};

export default Menus;
