/* #region  //*  Variable */

import React, { Fragment } from 'react';
//*  Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

//*  Import Component and Pages
import Menu from './components/menu';
import SNAPBOX from './components/snapbox/snaplock';
import SNAPBOX191 from './components/snapbox/snapBecf191';
import CARRYBOX from './components/carrybox/carry';
import FOODBOX1171 from './components/foodbox/foodBecf1171';
import FOODBOX1202 from './components/foodbox/foodBecf1202';
import FOODBOX1207 from './components/foodbox/foodBecf1207';
import TRAYBOX from './components/traybox/tray';
import TRAYBOX1171 from './components/traybox/trayBecf1171';
import SHIRTBOX from './components/shirtbox/shirt';
import THREEJSLOCKBOX from './components/threeJSlockbox/threeJSlock';
import THREEJSDUALLOCKBOX from './components/threeJSlockbox/threeJSDualLock';
import THREEJSUPPERLOWERLOCKBOX from './components/threeJSlockbox/threeJSUpperLowerLock';
import CARTOONBAG from './components/cartoonsbag/cartoons';
import GLOVEBOX from './components/glovebox/gloveBox';
import STAND11D02 from './components/standard/stand-11d02';
import TRAYBOX21701 from './components/traybox/trayBecf-21701';

let closeBox,
  openBox,
  showModel,
  delModel,
  sizeShape,
  checkVolume,
  returnIMG,
  returnUnit;

/* #endregion */

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
    xRoute === 'carry' ||
    xRoute === 'food1171' ||
    xRoute === 'food1202' ||
    xRoute === 'food1207' ||
    xRoute === 'tray' ||
    xRoute === 'tray1171' ||
    xRoute === 'shirt' ||
    xRoute === 'threelock' ||
    xRoute === 'threeduallock' ||
    xRoute === 'threelockul' ||
    xRoute === 'cartoonbag' ||
    xRoute === 'snap' ||
    xRoute === 'snap191' ||
    xRoute === 'glovebox' ||
    xRoute === 'stand11d02' ||
    xRoute === 'tray21701'
  ) {
    //*  Variable x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    let x = {
      carry: CARRYBOX,
      food1171: FOODBOX1171,
      food1202: FOODBOX1202,
      food1207: FOODBOX1207,
      tray: TRAYBOX,
      tray1171: TRAYBOX1171,
      shirt: SHIRTBOX,
      threelock: THREEJSLOCKBOX,
      threeduallock: THREEJSDUALLOCKBOX,
      threelockul: THREEJSUPPERLOWERLOCKBOX,
      cartoonbag: CARTOONBAG,
      snap: SNAPBOX,
      snap191: SNAPBOX191,
      glovebox: GLOVEBOX,
      stand11d02: STAND11D02,
      tray21701: TRAYBOX21701,
    };

    //*  Button
    closeBox = () => {
      // console.log('พับกล่อง');
      return x[xRoute].rotations1();
    };

    openBox = () => {
      // console.log('กางกล่อง');
      return x[xRoute].rotations2();
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

    //*  Slider
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
          clb={closeBox}
          opb={openBox}
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
    closeBox = () => {
      // console.log('พับกล่อง');
      return STAND11D02.rotations1();
    };

    openBox = () => {
      // console.log('กางกล่อง');
      return STAND11D02.rotations2();
    };

    showModel = () => {
      // console.log('เปิดโมเดล');
      return STAND11D02.modelCosmeticTube();
    };

    delModel = () => {
      // console.log('ลบโมเดล');
      return STAND11D02.delModelCosmeticTube();
    };

    //*  Slider
    sizeShape = (a, b, c, o, r) => {
      // console.log(
      // `width : ${a} length : ${b} height : ${c} opacity : ${o} radian : ${r}`
      // );
      return STAND11D02.updateSize(a, b, c, o, r);
    };

    return (
      <Fragment>
        {STAND11D02.init()}
        <Menu
          clb={closeBox}
          opb={openBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default App;
