import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Three from "./three";
import ThreeT from "./three_test";
import ThreeM from "./three_make_shape";

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Three} />
        <Route exact path="/test" component={ThreeT} />
        <Route exact path="/make" component={ThreeM} />
      </Switch>
    )
  }

  render() {
    return (
    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
