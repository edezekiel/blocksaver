import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Report from "./Report/Report";

class App extends Component {
  render() {
    // if (window.web3) {
    //   window.ethereum.enable();
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Report} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
