import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

//*  Import Component and Pages
import Menu from './components/menu';

import SNAPBOX191 from './components/snapbox/snapBecf191';
import TUCKCENTER from './components/tuckendboxes/tuckendboxes_center';
import CARRYBOX from './components/carrybox/carry';
import THREEJSLOCKBOX from './components/threeJSlockbox/threeJSlock';
import CARTOONBAG from './components/cartoonsbag/cartoons';

let animateBox,
  showModel,
  delModel,
  sizeShape,
  checkVolume,
  returnIMG,
  returnUnit;

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
    xRoute === 'snap191' ||
    xRoute === 'tuckcenter' ||
    xRoute === 'carry' ||
    xRoute === 'threelock' ||
    xRoute === 'cartoonbag'
  ) {
    //?  Variable x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    let x = {
      snap191: SNAPBOX191,
      tuckcenter: TUCKCENTER,
      carry: CARRYBOX,
      threelock: THREEJSLOCKBOX,
      cartoonbag: CARTOONBAG,
    };

    //*  Button
    animateBox = (value) => {
      return x[xRoute].rotations(value);
    };
    showModel = () => {
      // console.log('เปิดโมเดล');
      return x[xRoute].modelCosmeticTube();
    };
    delModel = () => {
      // console.log('ลบโมเดล');
      return x[xRoute].delModelCosmeticTube();
    };
    checkVolume = () => {
      // console.log('คำนวณพื้นที่กล่อง');
      return x[xRoute].calVolume();
    };
    returnIMG = (value) => {
      return x[xRoute].saveIMG(value);
    };
    returnUnit = (value) => {
      console.log('App', value);
      return x[xRoute].unitTest(value);
    };

    //*  Slide
    sizeShape = (a, b, c, amodel, bmodel, cmodel, floor, o, r) => {
      // console.log(
      // `width : ${a} length : ${b} height : ${c} aModel : ${amodel}, bModel : ${bmodel}, cModel : ${cmodel}, floor : ${floor}, opacity : ${o} radian : ${r}`
      // );
      return x[xRoute].updateSize(a, b, c, amodel, bmodel, cmodel, floor, o, r);
    };

    return (
      <Fragment>
        {x[xRoute].init()}
        <Menu
          amb={animateBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          msg={checkVolume}
          imgURL={returnIMG}
          unitSent={returnUnit}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  }
  if (xRoute === undefined) {
    //*  Button
    animateBox = () => {
      // console.log('พับกล่อง');
      return SNAPBOX191.rotations1();
    };
    showModel = () => {
      // console.log('เปิดโมเดล');
      return SNAPBOX191.modelCosmeticTube();
    };
    delModel = () => {
      // console.log('ลบโมเดล');
      return SNAPBOX191.delModelCosmeticTube();
    };

    //*  Slider
    sizeShape = (a, b, c, o) => {
      // console.log(
      // `width : ${a} length : ${b} height : ${c} opacity : ${o}`
      // );
      return SNAPBOX191.updateSize(a, b, c, o);
    };

    return (
      <Fragment>
        {SNAPBOX191.main()}
        <Menu
          amb={animateBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          msg={checkVolume}
          imgURL={returnIMG}
          unitSent={returnUnit}
        />
      </Fragment>
    );
  }
};

export default App;
