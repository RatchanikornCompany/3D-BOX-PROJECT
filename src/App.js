import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './main';

import FOODBOX1171 from './components/models/foodbox/foodBecf1171';
import FOODBOX1202 from './components/models/foodbox/foodBecf1202';
import FOODBOX1207 from './components/models/foodbox/foodBecf1207';
import SNAPBOX from './components/models/snapbox/snaplock';
import SNAPBOX191 from './components/models/snapbox/snapBecf191';
import TRAYBOX from './components/models/traybox/tray';
import TRAYBOX1171 from './components/models/traybox/trayBecf1171';
import TRAYBOX21701 from './components/models/traybox/trayBecf-21701';
import SHIRTBOX from './components/models/shirtbox/shirt';
import STAND11D02 from './components/models/standard/stand-11d02';
import GLOVEBOX from './components/models/glovebox/gloveBox';
import CARRYBOX from './components/models/carrybox/carry';
import CARTOONBAG from './components/models/cartoonsbag/cartoons';
import THREEJSLOCKBOX from './components/models/threeJSlockbox/threeJSlock';
import THREEJSDUALLOCKBOX from './components/models/threeJSlockbox/threeJSDualLock';
import THREEJSUPPERLOWERLOCKBOX from './components/models/threeJSlockbox/threeJSUpperLowerLock';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/food1171">
          <FOODBOX1171 />
        </Route>
        <Route exact path="/food1202">
          <FOODBOX1202 />
        </Route>
        <Route exact path="/food1207">
          <FOODBOX1207 />
        </Route>
        <Route exact path="/snap">
          <SNAPBOX />
        </Route>
        <Route exact path="/snap191">
          <SNAPBOX191 />
        </Route>
        <Route exact path="/tray">
          <TRAYBOX />
        </Route>
        <Route exact path="/tray1171">
          <TRAYBOX1171 />
        </Route>
        <Route exact path="/tray21701">
          <TRAYBOX21701 />
        </Route>
        <Route exact path="/shirt">
          <SHIRTBOX />
        </Route>
        <Route exact path="/stand11d02">
          <STAND11D02 />
        </Route>
        <Route exact path="/glovebox">
          <GLOVEBOX />
        </Route>
        <Route exact path="/carry">
          <CARRYBOX />
        </Route>
        <Route exact path="/cartoonbag">
          <CARTOONBAG />
        </Route>
        <Route exact path="/threelock">
          <THREEJSLOCKBOX />
        </Route>
        <Route exact path="/threeduallock">
          <THREEJSDUALLOCKBOX />
        </Route>
        <Route exact path="/threelockul">
          <THREEJSUPPERLOWERLOCKBOX />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
