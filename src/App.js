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

import THREEBOX from "./components/threebox/three";
import CARRYBOX from "./components/carrybox/carry";
import FOODBOX1171 from "./components/foodbox/foodBecf1171";
import FOODBOX1202 from "./components/foodbox/foodboxBecf1202";
import FOODBOX1207 from "./components/foodbox/foodBecf1207";
import TRAYBOX from "./components/traybox/tray";
import TRAYSBOX from "./components/traybox/trays";
import TRAYBOX1171 from "./components/traybox/trayboxBecf1171";
import SHIRTBOX from "./components/shirtbox/shirt";
import THREEJSLOCKBOX from "./components/threeJSlockbox/threeJSlock";
import THREEJSDUALLOCKBOX from "./components/threeJSlockbox/threeJSDualLock";
import THREEJSUPPERLOWERLOCKBOX from "./components/threeJSlockbox/threeJSUpperLowerLock";
import CARTOONBAG from "./components/cartoonsbag/cartoons";

let closeBox;
let openBox;
let sizeShape;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Routes />} />
        <Route exact path="/:xRoute" children={<Routes />} />
      </Switch>
    </Router>
  );
};

const Routes = () => {
  let { xRoute } = useParams();

  if (
    xRoute === "carry" ||
    xRoute === "food1171" ||
    xRoute === "food1202" ||
    xRoute === "food1207" ||
    xRoute === "tray" ||
    xRoute === "trays" ||
    xRoute === "tray1171" ||
    xRoute === "shirt" ||
    xRoute === "threelock" ||
    xRoute === "threelockdual" ||
    xRoute === "threelockul" ||
    xRoute === "cartoonbag"
  ) {
    // ประกาศตัวแปร x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    var x = {
      carry: CARRYBOX,
      food1171: FOODBOX1171,
      food1202: FOODBOX1202,
      food1207: FOODBOX1207,
      tray: TRAYBOX,
      trays: TRAYSBOX,
      tray1171: TRAYBOX1171,
      shirt: SHIRTBOX,
      threelock: THREEJSLOCKBOX,
      threelockdual: THREEJSDUALLOCKBOX,
      threelockul: THREEJSUPPERLOWERLOCKBOX,
      cartoonbag: CARTOONBAG,
    };

    /* Button */
    closeBox = (clb) => {
      console.log("Close");
      return x[xRoute].rotations1();
    };

    openBox = (opb) => {
      console.log("Open");
      return x[xRoute].rotations2();
    };

    /* Slider */
    sizeShape = (a, b, c, r, p, ll) => {
      // console.log(`${a} ${b} ${c} ${r} ${p} ${ll}`);
      return x[xRoute].updateSize(a, b, c, r, p, ll);
    };

    return (
      <Fragment>
        {x[xRoute].main()}
        <Menu clb={closeBox} opb={openBox} size={sizeShape} newRoute={xRoute} />
      </Fragment>
    );
  } else if (xRoute === undefined) {
    /* Button */
    closeBox = (clb) => {
      console.log("Close");
      return THREEBOX.rotations1();
    };

    openBox = (opb) => {
      console.log("Open");
      return THREEBOX.rotations2();
    };

    /* Slider */
    sizeShape = (a, b, c, r, p, ll) => {
      // console.log(`${a} ${b} ${c} ${r} ${p} ${ll}`);
      return THREEBOX.updateSize(a, b, c, r, p, ll);
    };

    return (
      <Fragment>
        {THREEBOX.main()}
        <Menu clb={closeBox} opb={openBox} size={sizeShape} newRoute={xRoute} />
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default App;
