import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

import Menu from './components/menu';

import SNAPBOX191 from './components/snapbox/snapBecf191';
import TUCKCENTER from './components/tuckendboxes/tuckendboxes_center';
import CARRYBOX from './components/carrybox/carry';
import THREEJSLOCKBOX from './components/threeJSlockbox/threeJSlock';
import CARTOONBAG from './components/cartoonsbag/cartoons';
import SLIDEBOXES from './components/shirtbox/shirt';

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
    xRoute === 'cartoonbag' ||
    xRoute === 'slide'
  ) {
    //?  Variable x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    let x = {
      snap191: SNAPBOX191,
      tuckcenter: TUCKCENTER,
      carry: CARRYBOX,
      threelock: THREEJSLOCKBOX,
      cartoonbag: CARTOONBAG,
      slide: SLIDEBOXES,
    };
    const animateBox = (value) => {
      return x[xRoute].rotations(value);
    };

    const showModel = () => {
      return x[xRoute].modelCosmeticTube();
    };

    const delModel = () => {
      return x[xRoute].delModelCosmeticTube();
    };

    const sizeShape = (a, b, c, o, r) => {
      return x[xRoute].init(a, b, c, o, r);
    };

    return (
      <Fragment>
        {x[xRoute].init()}
        <Menu
          amb={animateBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  }
  if (xRoute === undefined) {
    const animateBox = (value) => {
      return SNAPBOX191.rotations(value);
    };

    const showModel = () => {
      return SNAPBOX191.modelCosmeticTube();
    };

    const delModel = () => {
      return SNAPBOX191.delModelCosmeticTube();
    };

    const sizeShape = (a, b, c, o) => {
      return SNAPBOX191.updateSize(a, b, c, o);
    };

    return (
      <Fragment>
        {SNAPBOX191.init()}
        <Menu
          amb={animateBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
        />
      </Fragment>
    );
  }
};

export default App;
