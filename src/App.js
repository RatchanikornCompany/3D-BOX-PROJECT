import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <Main />
      {/* <Router>
        <Switch>
          <Route exact path="/:xRoute" children={<Routes />} />
        </Switch>
      </Router> */}
    </Fragment>
  );
};

export default App;
