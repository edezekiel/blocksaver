import React, { Component } from "react";
import Web3 from "web3";

import { Link, withRouter } from "react-router-dom";

import "../App.css";
import back from "./left-arrow.png";
import profile from "./user.png";

class NavBar extends Component {

  state = {
    tokens: null
  }

  componentDidMount(){
    this.setTokens()
  }

  setTokens = () => {
    if (window.sessionStorage.tokens) {
      this.setState({tokens: window.sessionStorage.tokens})
    } else {
      this.setState({tokens: 0})
      window.sessionStorage.setItem("tokens", 0)
    }
  }

  render() {
    return (
      <div className="NavBar">
        {this.props.history.location.pathname === "/" ? (
          <Link to="/profile">
            <img src={profile} alt="" />
          </Link>
        ) : (
          <Link to="/">
            <img src={back} alt="" />
          </Link>
        )}
        <h2>BlockSaver</h2>
        <h2>{window.sessionStorage.tokens ?
        window.sessionStorage.tokens
        : "Loading..."} Tokens</h2>
      </div>
    );
  }
}

export default withRouter(NavBar);
