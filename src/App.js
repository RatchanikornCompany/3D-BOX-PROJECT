import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Three from "./three";
import ThreeT from "./three_test";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Three} />
        <Route exact path="/test" component={ThreeT} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
