import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Three from "./components/three";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Three} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
