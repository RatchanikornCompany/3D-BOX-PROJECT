import React, { useState } from "react";
import { Slider, InputNumber, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

const Menu = (props) => {
  const { clb, opb, size, newRoute } = props;

  const [inputAvalue, setinputAvalue] = useState(200);
  const [inputBvalue, setinputBvalue] = useState(150);
  const [inputCvalue, setinputCvalue] = useState(50);
  const [inputRvalue, setinputRvalue] = useState(52);
  const [inputPvalue, setinputPvalue] = useState(5);
  const [inputLLvalue, setinputLLvalue] = useState((inputAvalue * 0.3) | 0);

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
    </div>
  );
};

export default Menu;
