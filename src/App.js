import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

import Menu from './components/menu';

import TUCKENDBOXES from './components/tuckendboxes/tuckendboxes';
import TUCKCENTBOXES from './components/tuckcentboxes/tuckcentboxes';
import CREAMSINGLELOCK from './components/creamsinglelock/creamsinglelock';
import SHOPPINGBAGS from './components/shoppingbags/shoppingbags';
import SNAPLOCKBOXES from './components/snaplockboxes/snaplockboxes';
import SLIDEBOXES from './components/slideboxes/slideboxes';

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
    xRoute === 'tuckendboxes' ||
    xRoute === 'tuckcentboxes' ||
    xRoute === 'creamsinglelock' ||
    xRoute === 'shoppingbags' ||
    xRoute === 'snaplockboxes' ||
    xRoute === 'slideboxes'
  ) {
    //?  Variable x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    let x = {
      tuckendboxes: TUCKENDBOXES,
      tuckcentboxes: TUCKCENTBOXES,
      creamsinglelock: CREAMSINGLELOCK,
      shoppingbags: SHOPPINGBAGS,
      snaplockboxes: SNAPLOCKBOXES,
      slideboxes: SLIDEBOXES,
    };
    const animateBox = (value) => {
      return x[xRoute].rotations(value);
    };

    const sizeShape = (a, b, c, o, r) => {
      return x[xRoute].init(a, b, c, o, r);
    };

    return (
      <Fragment>
        {x[xRoute].init()}
        <Menu amb={animateBox} size={sizeShape} radianSelect={xRoute} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Menu />
      </Fragment>
    );
  }
};

export default App;
