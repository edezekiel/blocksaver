import React, { Component } from "react";
import localStorage from "local-storage";
import "../App.css";

class AccountDisplay extends Component {
  state = {
    edit: false,
    address: "text"
  };

  componentDidMount() {
    window.web3
      ? this.setState({ address: window.web3.eth.defaultAccount })
      : this.setState({ address: "0xohhh" });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { title } = this.props;
    return (
      <div className="Display">
        <div><h3>{title}</h3></div>
        <div className="AccountContainer">
          <input
            id="address"
            value={this.state.address}
            onChange={this.state.edit === true ? e => this.onChange(e) : null}
          />
          <button
            onClick={() => {
              if (this.state.edit === true) {
                localStorage("address", this.state.address);
                this.setState({ address: localStorage("address") });
              }
              this.setState({ edit: !this.state.edit });
            }}
          >
            {!this.state.edit ? "edit" : "save"}
          </button>
        </div>
      </div>
    );
  }
}

export default AccountDisplay;
