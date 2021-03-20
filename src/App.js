import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Stand11d02 from "./components/models/standard/stand-11d02";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/stand11d02"><Stand11d02 /></Route>
          <Route exact path="/shirt"><Stand11d02 /></Route>
        {/*<Route exact path="/" children={<Main />} />*/}
      </Switch>
    </Router>
  );
};

export default App;
