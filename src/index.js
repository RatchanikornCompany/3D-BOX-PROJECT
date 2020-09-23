import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd";
// import App from "./App";
import App from "./components/control.js";
import { BrowserRouter } from "react-router-dom"
// import Carry from "./components/carrybox/carry"

const AppSwitch = () => (
    <BrowserRouter>
        <App />
        {/* <Carry /> */}
    </BrowserRouter>
)

ReactDOM.render(<AppSwitch />, document.getElementById("root"));
