import React, { Fragment } from "react";

/* Router */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

/* Import Component and Pages */

import Menu from "./components/menu";

import THREEBOX from "./components/three";
import CARRYBOX from "./components/carrybox/carry";
import FOODBOX from "./components/foodbox/food";
import TRAYBOX from "./components/traybox/tray";
import TRAYSBOX from "./components/traybox/trays";
import SHIRTBOX from "./components/shirtbox/shirt";
import UNTITLEDBOX from "./components/untitledbox/untitled";
import UNTITLED2BOX from "./components/untitled2box/untitled2";
import THREEJSLOCKBOX from "./components/threeJSlockbox/threeJSlock";
import THREEJS2LOCKBOX from "./components/threeJSlockbox/threeJS2lock";
import THREEJS3LOCKBOX from "./components/threeJSlockbox/threeJS3lock";

let closeBox;
let openBox;
let sizeShape;

const App = () => {
  /* Button */
  closeBox = (clb) => {
    console.log("Close");
    return THREEJS3LOCKBOX.rotations1();
  };

  openBox = (opb) => {
    console.log("Open");
    return THREEJS3LOCKBOX.rotations2();
  };

  /* Slider */
  sizeShape = (a, b, c) => {
    console.log(`${a} ${b} ${c}`);
    return THREEJS3LOCKBOX.updateSize(a, b, c);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/:xRoute" children={<Routes />} />
      </Switch>
    </Router>
  );
};

const Routes = () => {
  let { xRoute } = useParams();

  // ประกาศตัวแปร a เพื่อเก็บค่า a ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
  let x = {
    three: THREEBOX,
    carry: CARRYBOX,
    food: FOODBOX,
    tray: TRAYBOX,
    trays: TRAYSBOX,
    shirt: SHIRTBOX,
    untitled: UNTITLEDBOX,
    untitled2: UNTITLED2BOX,
    threelock: THREEJSLOCKBOX,
    threelock2: THREEJS2LOCKBOX,
    threelock3: THREEJS3LOCKBOX,
  };

  return (
    <Fragment>
      {x[xRoute].main()}
      <Menu clb={closeBox} opb={openBox} size={sizeShape} />
    </Fragment>
  );
};

export default App;
