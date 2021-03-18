import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:Route" children={<Main />} />
        <Route exact path="/" children={<Main />} />
      </Switch>
    </Router>
  );
};

export default App;
