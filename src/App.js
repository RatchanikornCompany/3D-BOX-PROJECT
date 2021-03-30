import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './main';

import STAND11D02 from './components/models/standard/stand-11d02-box';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/stand11d02">
          <STAND11D02 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
