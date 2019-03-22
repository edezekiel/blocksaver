import React, { Component } from "react";
import "../App.css";

class BadgeField extends Component {

    showBadges = (data) => {
      // query to see how many tokens user has
      return data.slice(0, window.sessionStorage.tokens).map(badge => (
        <img className="Badge" src={badge} alt="" />
      ))
    }

    render() {
      const { title, data } = this.props;

      return (
        <div className="Display">
          <div className="BadgeTitle"><h3>{title}</h3></div>
          <div className="Badges">{this.showBadges(data)}</div>
        </div>
      );
    }
  }

export default BadgeField;
