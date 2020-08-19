import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "../pages/Home";
import World from "../pages/World";
import Business from "../pages/Business";
import Technology from "../pages/Technology";
import Sports from "../pages/Sports";
import Entertainment from "../pages/Entertainment";
import Science from "../pages/Science";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/world" component={World} />
          <Route path="/business" component={Business} />
          <Route path="/technology" component={Technology} />
          <Route path="/sports" component={Sports} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/science" component={Science} />
        </Switch>
      </>
    );
  }
}

export default App;
