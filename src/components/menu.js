/* #region  //*  Variable */

import React, { useState } from 'react';
import {
  Slider,
  InputNumber,
  Row,
  Col,
  Menu,
  Switch,
  message,
  Button,
  Upload
} from 'antd';
import {
  CodeSandboxOutlined,
  DropboxOutlined,
  SettingOutlined,
  CodepenOutlined,
  CalculatorOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import STAND11D02 from './standard/stand-11d02';

import '../custom.css';

const { SubMenu } = Menu;
const key = 'updatable';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
};

/* #endregion */

const Menus = (props) => {
  //*  Deconstructor

  const { clb, opb, shm, dlm, size, msg, radianSelect,imgURL } = props;

  //*  State

  const [inputAvalue, setinputAvalue] = useState(250); // Weight
  const [inputBvalue, setinputBvalue] = useState(380); // Depth
  const [inputCvalue, setinputCvalue] = useState(220); // Height

  const [inputOvalue, setinputOvalue] = useState(1); // Opacity

  const [inputRvalue, setinputRvalue] = useState(38); // รัศมีครึ่งวงกลม

  const [inputAModelvalue, setinputAModelvalue] = useState(250); // Width-Model
  const [inputBModelvalue, setinputBModelvalue] = useState(380); // Depth-Model
  const [inputCModelvalue, setinputCModelvalue] = useState(22); // Height-Model

  const [inputFloorvalue, setinputFloorvalue] = useState(3); // Floor

  const [box, setBox] = useState('');
  const [model, setModel] = useState('');
  const [checkOpenBox, setCheckOpenBox] = useState(false);
  const [checkShowModel, setCheckShowModel] = useState(false);

  //*  onClick Event

  const closeBox = () => {
    setBox('closeBox');
    return clb();
  };
  const openBox = () => {
    setBox('openBox');
    return opb();
  };
  const showModel = () => {
    setModel('showModel');
    return shm();
  };
  const delModel = () => {
    setModel('delModel');
    return dlm();
  };
  const msgVolume = () => {
    message.loading({ content: 'กระณารอสักครู่...', key });
    setTimeout(() => {
      if (STAND11D02.calVolume() >= 1 && STAND11D02.calVolume() <= 500) {
        message.success({
          content: `จำนวนที่สามารถบรรจุได้ ${STAND11D02.calVolume()} ชิ้น!`,
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

    return msg();
  };
const returnIMGurl = (value) => {
  return imgURL(value);
}

  //*  onChange Event

  const onChangeA = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= inputRvalue + 12) {
        setinputAvalue(value);
        return size(
          value,
          inputBvalue,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          inputRvalue
        );
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= inputRvalue + 137) {
        setinputAvalue(value);
        return size(
          value,
          inputBvalue,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          inputRvalue
        );
      }
    } else {
      setinputAvalue(value);
      return size(
        value,
        inputBvalue,
        inputCvalue,
        inputAModelvalue,
        inputBModelvalue,
        inputCModelvalue,
        inputFloorvalue,
        inputOvalue,
        inputRvalue
      );
    }
  };
  const onChangeB = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= inputRvalue + 12) {
        setinputBvalue(value);
        return size(
          inputAvalue,
          value,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          inputRvalue
        );
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= inputRvalue + 14) {
        setinputBvalue(value);
        return size(
          inputAvalue,
          value,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          inputRvalue
        );
      }
    } else {
      setinputBvalue(value);
      return size(
        inputAvalue,
        value,
        inputCvalue,
        inputAModelvalue,
        inputBModelvalue,
        inputCModelvalue,
        inputFloorvalue,
        inputOvalue,
        inputRvalue
      );
    }
  };
  const onChangeC = (value) => {
    setinputCvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      value,
      inputAModelvalue,
      inputBModelvalue,
      inputCModelvalue,
      inputFloorvalue,
      inputOvalue,
      inputRvalue
    );
  };

  const onChangeAmodel = (value) => {
    setinputAModelvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      value,
      inputBModelvalue,
      inputCModelvalue,
      inputFloorvalue,
      inputOvalue,
      inputRvalue
    );
  };
  const onChangeBmodel = (value) => {
    setinputBModelvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputAModelvalue,
      value,
      inputCModelvalue,
      inputFloorvalue,
      inputOvalue,
      inputRvalue
    );
  };
  const onChangeCmodel = (value) => {
    setinputCModelvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputAModelvalue,
      inputBModelvalue,
      value,
      inputFloorvalue,
      inputOvalue,
      inputRvalue
    );
  };
  const onChangeFloormodel = (value) => {
    setinputFloorvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputAModelvalue,
      inputBModelvalue,
      inputCModelvalue,
      value,
      inputOvalue,
      inputRvalue
    );
  };

  const onChangeO = (value) => {
    setinputOvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputAModelvalue,
      inputBModelvalue,
      inputCModelvalue,
      inputFloorvalue,
      value,
      inputRvalue
    );
  };
  const onChangeR = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value <= inputAvalue - 12 && value <= inputBvalue - 12) {
        setinputRvalue(value);
        return size(
          inputAvalue,
          inputBvalue,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          value
        );
      }
    } else if (radianSelect === 'threeduallock') {
      if (
        value <= inputAvalue - 137 &&
        value <= inputBvalue - 14 &&
        value <= 43
      ) {
        setinputRvalue(value);
        return size(
          inputAvalue,
          inputBvalue,
          inputCvalue,
          inputAModelvalue,
          inputBModelvalue,
          inputCModelvalue,
          inputFloorvalue,
          inputOvalue,
          value
        );
      }
    }
  };

  const onLoadModelTexture = (value) => {
    let reader = new FileReader();

    reader.readAsDataURL(value.target.files[0]);
    reader.onload = () => {
      returnIMGurl(reader.result);
    };
  };

  const changeBox = (value) => {
    if (value === 'close') {
      closeBox();
    } else if (value === 'open') {
      openBox();
    }
    setCheckOpenBox(!checkOpenBox);
  };

  const changeModel = (value) => {
    if (value === 'delObj') {
      delModel();
    } else if (value === 'Obj') {
      showModel();
    }
    setCheckShowModel(!checkShowModel);
  };

  const imagePreview = {
    listType: "picture"
  }

  return (
    <>
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
              <Col span={16}>
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
              <Col span={5}>
                <label>กว้าง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={16}>
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
              <Col span={5}>
                <label>ยาว</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={16}>
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
              <Col span={5}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
          <hr />
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
                <label>ความโปร่งแสง</label>
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
        </SubMenu>
        <SubMenu icon={<DropboxOutlined />} title="การควบคุมการเคลื่อนไหว">
          <Menu.Item>
            <Switch
              onClick={() => changeBox(checkOpenBox ? 'open' : 'close')}
              checkedChildren={'พับกล่อง'}
              unCheckedChildren={'กางกล่อง'}
            />
          </Menu.Item>
          <Menu.Item>
            <Switch
              onClick={() => changeModel(checkShowModel ? 'delObj' : 'Obj')}
              checkedChildren={'เปิดโมเดล'}
              unCheckedChildren={'ปิดโมเดล'}
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
                  value={inputAModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeAmodel}
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
                  value={inputBModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeBmodel}
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
                  value={inputCModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeCmodel}
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
                  value={inputFloorvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeFloormodel}
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
      <Upload {...imagePreview}>
      <label className="custom-file-upload">
          <input type="file" onChange={onLoadModelTexture} />
          <Button icon={<UploadOutlined />} /> อัพโหลดรูปภาพ
        </label>
      </Upload>
          </Row>
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
              <a href="/">snap-boxes</a>
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
    </>
  );
};

export default Menus;
