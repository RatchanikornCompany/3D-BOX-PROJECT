import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

const Menu = (props) => {
  const { clb, opb, size } = props;

  // const [inputAvalue, setinputAvalue] = useState(52);
  // const [inputBvalue, setinputBvalue] = useState(52);
  // const [inputCvalue, setinputCvalue] = useState(52);

  const [inputAvalue, setinputAvalue] = useState(200);
  const [inputBvalue, setinputBvalue] = useState(100);
  const [inputCvalue, setinputCvalue] = useState(40);

  const onChangeA = (value) => {
    setinputAvalue(value);
    return props.size(value, inputBvalue, inputCvalue);
  };
  const onChangeB = (value) => {
    setinputBvalue(value);
    return props.size(inputAvalue, value, inputCvalue);
  };
  const onChangeC = (value) => {
    setinputCvalue(value);
    return props.size(inputAvalue, inputAvalue, value);
  };

  const onClick1 = () => {
    return clb("พับกล่อง");
  };
  const onClick2 = () => {
    return opb("แกะกล่อง");
  };

  return (
    <div>
      <Button type="primary" onClick={onClick1}>
        พับกล่อง
      </Button>
      <Button onClick={onClick2}>แกะกล่อง</Button>
      <br />
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
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Menu;
