import React, { Component } from "react";
import Web3 from "web3";

import ABI from "../ABI/crowdsaleABI";

import AccountDisplay from "./AccountDisplay.js";
import BadgeField from "./BadgeField.js";
import CheckinDisplay from "./CheckinDisplay.js";
import badges from "./Badges.js";

import "../App.css";

let tokenAddress = "0x0B723E44CEC6EDB8883F61b9cB1650D341f99604";

class Profile extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  // async loadBlockchainData() {
  //   const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ account: accounts[0] });
  //   const crowdsaleContract = new web3.eth.Contract(ABI, tokenAddress);
  //   this.setState({ crowdsaleContract });
  //   let checkins = await crowdsaleContract.methods
  //     .balanceOf(this.state.account)
  //     .call();
  //   this.setState({ checkins });
  // }

  state = {
      account: "",
      checkins: 0,
      lastCheckin: ""
  };

  render() {
    return (
      <div className="Profile">
        <div className="Displays">
          {this.renderAccount()}
          {this.renderBadges()}
          {this.renderLastCheckin()}
          {this.renderLifetimeCheckins()}
        </div>
      </div>
    );
  }

  renderLifetimeCheckins = () => {
    return (
      <div>
        <CheckinDisplay title="Lifetime Checkins" data={window.sessionStorage.tokens} />
      </div>
    );
  };

  renderLastCheckin = () => {
    return (
      <div>
        <CheckinDisplay title="Last Checkin" data={window.sessionStorage.time ? window.sessionStorage.time : null} />
      </div>
    );
  };

  renderBadges = () => {
    return (
      <div>
        <BadgeField title="Badges" data={badges} />
      </div>
    );
  };

  renderAccount = () => {
    return (
      <div>
        <AccountDisplay title="Account" />
      </div>
    );
  };
}

export default Profile;
