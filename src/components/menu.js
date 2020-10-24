import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

const Menu = (props) => {
  const { clb, opb, size } = props;

  const [inputAvalue, setinputAvalue] = useState(52);
  const [inputBvalue, setinputBvalue] = useState(52);
  const [inputCvalue, setinputCvalue] = useState(175);
  const [inputDvalue, setinputDvalue] = useState(52);

  const onChangeA = (value) => {
    setinputAvalue(value);
    return size(value, inputBvalue, inputCvalue);
  };
  const onChangeB = (value) => {
    setinputBvalue(value);
    return size(inputAvalue, value, inputCvalue);
  };
  const onChangeC = (value) => {
    setinputCvalue(value);
    return size(inputAvalue, inputBvalue, value);
  };
  const onChangeD = (value) => {
    setinputDvalue(value);
    /*  */
    return size(value, value, value);
  };

  const onClick1 = () => {
    return clb("พับกล่อง");
  };
  const onClick2 = () => {
    return opb("กางกล่อง");
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
            onChange={onChangeD}
            value={typeof inputDvalue === "number" ? inputDvalue : 0}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: "0 16px" }}
            step={1}
            value={inputDvalue}
            onChange={onChangeD}
          />
          องศา
        </Col>
      </Row>
      <hr />
      <Button type="primary" onClick={onClick1}>
        พับกล่อง
      </Button>
      <Button onClick={onClick2}>กางกล่อง</Button>
    </div>
  );
};

export default Menu;
