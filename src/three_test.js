import * as React from "react";
import { Slider, InputNumber, Row, Col, Button } from "antd";
import "antd/dist/antd.css";
export default class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ margin: "0 16px" }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
