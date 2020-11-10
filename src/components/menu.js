import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Button, Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const Menus = (props) => {
  const { clb, opb, size, newRoute } = props;

  const [inputAvalue, setinputAvalue] = useState(220);
  const [inputBvalue, setinputBvalue] = useState(220);
  const [inputCvalue, setinputCvalue] = useState(30);
  const [inputRvalue, setinputRvalue] = useState(52);
  const [inputPvalue, setinputPvalue] = useState(5);
  const [inputLLvalue, setinputLLvalue] = useState((inputAvalue * 0.3) | 0);

  /* onChange */
  const onChangeA = (value) => {
    setinputAvalue(value);
    return size(
      value,
      inputBvalue,
      inputCvalue,
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
      inputRvalue,
      inputPvalue,
      inputLLvalue
    );
  };
  const onChangeR = (value) => {
    if (
      newRoute === "threelock" ||
      newRoute === "threelock2" ||
      newRoute === "threelock3"
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
      inputRvalue,
      inputPvalue,
      value
    );
  };

  /* onClick */
  const onClick1 = () => {
    return clb();
  };
  const onClick2 = () => {
    return opb();
  };
  const onClick3 = (key) => {
    console.log(key);
  };

  return (
    <div>
      การปรับขนาดกล่อง
      {/* A */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeA}
            value={typeof inputAvalue === "number" ? inputAvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputAvalue}
            formatter={(value) => `${value} mm`}
            onChange={onChangeA}
          />
          กว้าง
        </Col>
      </Row>
      {/* B */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeB}
            value={typeof inputBvalue === "number" ? inputBvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputBvalue}
            formatter={(value) => `${value} mm`}
            onChange={onChangeB}
          />
          ลึก
        </Col>
      </Row>
      {/* C */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeC}
            value={typeof inputCvalue === "number" ? inputCvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputCvalue}
            formatter={(value) => `${value} mm`}
            onChange={onChangeC}
          />
          สูง
        </Col>
      </Row>
      <hr />
      การปรับขนาดชิ้นส่วนกล่อง
      {/* Radian */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeR}
            value={typeof inputRvalue === "number" ? inputRvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputRvalue}
            formatter={(value) => `${value - 31} mm`}
            onChange={onChangeR}
          />
          รัศมีครึ่งวงกลม
        </Col>
      </Row>
      {/* P */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeP}
            value={typeof inputPvalue === "number" ? inputPvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputPvalue}
            formatter={(value) => `${value} mm`}
            onChange={onChangeP}
          />
          ฝาเสียบ
        </Col>
      </Row>
      {/* L */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={onChangeLL}
            value={typeof inputLLvalue === "number" ? inputLLvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputLLvalue}
            formatter={(value) => `${value} mm`}
            onChange={onChangeLL}
          />
          ผนังกันฝุ่น
        </Col>
      </Row>
      <hr />
      <Button type="primary" onClick={onClick1}>
        พับกล่อง
      </Button>
      <Button onClick={onClick2}>กางกล่อง</Button>
      <Dropdown
        overlay={
          <Menu onClick={onClick3}>
            <Menu.Item key="three" icon={<UserOutlined />}>
              THREEBOX
            </Menu.Item>
            <Menu.Item key="carry" icon={<UserOutlined />}>
              CARRYBOX
            </Menu.Item>
            <Menu.Item key="foodboxbecf1171" icon={<UserOutlined />}>
              FOODBECF1171
            </Menu.Item>
            <Menu.Item key="foodboxbecf1202" icon={<UserOutlined />}>
              foodboxbecf1202
            </Menu.Item>
            <Menu.Item key="foodboxbecf1207" icon={<UserOutlined />}>
              FOODBECF1207
            </Menu.Item>
            <Menu.Item key="tray" icon={<UserOutlined />}>
              TRAYBOX
            </Menu.Item>
            <Menu.Item key="trays" icon={<UserOutlined />}>
              TRAYSBOX
            </Menu.Item>
            <Menu.Item key="shirt" icon={<UserOutlined />}>
              SHIRTBOX
            </Menu.Item>
            <Menu.Item key="threelock" icon={<UserOutlined />}>
              THREEJSLOCKBOX
            </Menu.Item>
            <Menu.Item key="threelock2" icon={<UserOutlined />}>
              threelockdual
            </Menu.Item>
            <Menu.Item key="threelock3" icon={<UserOutlined />}>
              threelockul
            </Menu.Item>
            <Menu.Item key="cartoonbag" icon={<UserOutlined />}>
              CARTOONBAG
            </Menu.Item>
          </Menu>
        }
      >
        <Button>
          กล่องอื่นๆ <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Menus;
