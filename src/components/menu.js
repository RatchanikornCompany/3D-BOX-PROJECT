import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

const Menu = (props) => {
  const { clb, opb, size } = props;

  const [inputAvalue, setinputAvalue] = useState(52);
  const [inputBvalue, setinputBvalue] = useState(52);
  const [inputCvalue, setinputCvalue] = useState(175);
  const [inputRvalue, setinputRvalue] = useState(52);

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
  const onChangeR = (value) => {
    setinputRvalue(value);

    /* + */

    // กรณีที่ค่า R มากกว่า A และ B
    if (value > inputAvalue && value > inputBvalue) {
      setinputAvalue(value + 1);
      setinputBvalue(value + 1);
      return size(value + 1, value + 1, inputCvalue, value);
    }
    // กรณีที่ R มากกว่า A และน้อยกว่า B
    else if (value > inputAvalue && value < inputBvalue) {
      setinputAvalue(value + 1);
      return size(value + 1, inputBvalue, inputCvalue, value);
    }
    // กรณีที่ R น้อยกว่า A และมากกว่า B
    else if (value < inputAvalue && value > inputBvalue) {
      setinputBvalue(value + 1);
      return size(inputAvalue, value + 1, inputCvalue, value);
    }

    /* - */

    // กรณีที่ค่า R น้อยกว่า A และ B
    if (value < inputAvalue && value < inputBvalue) {
      setinputAvalue(value - 1);
      setinputBvalue(value - 1);
      return size(value - 1, value - 1, inputCvalue, value);
    }
    // กรณีที่ R น้อยกว่า A และมากกว่า B
    else if (value < inputAvalue && value > inputBvalue) {
      setinputAvalue(value - 1);
      return size(value - 1, inputBvalue, inputCvalue, value);
    }
    // กรณีที่ R มากกว่า A และน้อยกว่า B
    else if (value > inputAvalue && value < inputBvalue) {
      setinputBvalue(value - 1);
      return size(inputAvalue, value - 1, inputCvalue, value);
    }
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
            onChange={onChangeR}
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
