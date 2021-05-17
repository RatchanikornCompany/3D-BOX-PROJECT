import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './main';

import STAND11D02 from './components/models/stand-11d02-box/stand-11d02-box';
import TRAYBOX21701 from './components/models/tray-21701-box/tray-21701-box';

import TUCKENDBOXES from './components/models/tuckendboxes/tuck-end-boxes';
import TUCKCENTBOXES from './components/models/tuckcentboxes/tuck-end-center-boxes';

import CREAMSINGLELOCK from './components/models/creamsinglelock/cream-single-lock';

import SHOPPINGBAGS from './components/models/shoppingbags/shopping-bags';

import SLIDEBOXES from './components/models/slideboxes/slide-boxes';

import SNAPBOXES from './components/models/snapboxes/snap-boxes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/tray21701">
          <TRAYBOX21701 />
        </Route>
        <Route exact path="/stand11d02">
          <STAND11D02 />
        </Route>
        <Route exact path="/tuckendboxes">
          <TUCKENDBOXES />
        </Route>
        <Route exact path="/tuckcentboxes">
          <TUCKCENTBOXES />
        </Route>
        <Route exact path="/creamsinglelock">
          <CREAMSINGLELOCK />
        </Route>
        <Route exact path="/shoppingbags">
          <SHOPPINGBAGS />
        </Route>
        <Route exact path="/slideboxes">
          <SLIDEBOXES />
        </Route>
        <Route exact path="/snapboxes">
          <SNAPBOXES />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
