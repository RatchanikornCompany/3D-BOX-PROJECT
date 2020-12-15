import React, { Fragment } from 'react';
import { Row, Col } from 'antd';

/* Router */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

/* Import Component and Pages */

import Menu from './components/menu';

import SNAPBOX from './components/snapbox/snaplock';
import SNAPBOX191 from './components/snapbox/snapBecf191';
import CARRYBOX from './components/carrybox/carry';
import FOODBOX1171 from './components/foodbox/foodBecf1171';
import FOODBOX1202 from './components/foodbox/foodBecf1202';
import FOODBOX1207 from './components/foodbox/foodBecf1207';
import TRAYBOX from './components/traybox/tray';
import TRAYSBOX from './components/traybox/trays';
import TRAYBOX1171 from './components/traybox/trayBecf1171';
import SHIRTBOX from './components/shirtbox/shirt';
import THREEJSLOCKBOX from './components/threeJSlockbox/threeJSlock';
import THREEJSDUALLOCKBOX from './components/threeJSlockbox/threeJSDualLock';
import THREEJSUPPERLOWERLOCKBOX from './components/threeJSlockbox/threeJSUpperLowerLock';
import CARTOONBAG from './components/cartoonsbag/cartoons';
import GLOVEBOX from './components/glovebox/gloveBox';

let closeBox;
let openBox;
let sizeShape;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' children={<Routes />} />
        <Route exact path='/:xRoute' children={<Routes />} />
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
    xRoute === 'trays' ||
    xRoute === 'tray1171' ||
    xRoute === 'shirt' ||
    xRoute === 'threelock' ||
    xRoute === 'threeduallock' ||
    xRoute === 'threelockul' ||
    xRoute === 'cartoonbag' ||
    xRoute === 'snap191' ||
    xRoute === 'glovebox'
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
      threeduallock: THREEJSDUALLOCKBOX,
      threelockul: THREEJSUPPERLOWERLOCKBOX,
      cartoonbag: CARTOONBAG,
      snap191: SNAPBOX191,
      glovebox: GLOVEBOX,
    };

    /* Button */
    closeBox = (clb) => {
      console.log('Close');
      return x[xRoute].rotations1();
    };

    openBox = (opb) => {
      console.log('Open');
      return x[xRoute].rotations2();
    };

    /* Slider */
    // sizeShape = (a, b, c, r, p, ll) => {
    //   // console.log(`${a} ${b} ${c} ${r} ${p} ${ll}`);
    //   return x[xRoute].updateSize(a, b, c, r, p, ll);
    // };

    return (
      <Fragment>
        {x[xRoute].main()}
        <Menu clb={closeBox} opb={openBox} size={sizeShape} newRoute={xRoute} />
      </Fragment>
    );
  } else if (xRoute === undefined) {
    /* Button */
    closeBox = (clb) => {
      console.log('Close');
      return SNAPBOX.rotations1();
    };

    openBox = (opb) => {
      console.log('Open');
      return SNAPBOX.rotations2();
    };

    /* Slider */
    sizeShape = (a, b, c, r, p, ll) => {
      // console.log(`${a} ${b} ${c} ${r} ${p} ${ll}`);
      return SNAPBOX.updateSize(a, b, c, r, p, ll);
    };

    return (
      <Fragment>
          {SNAPBOX.main()}
            <Menu
              clb={closeBox}
              opb={openBox}
              size={sizeShape}
              newRoute={xRoute}
            />
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default App;
