import React, { Component } from 'react';
import '../App.css';
import CheckboxContainer from './CheckboxContainer'
import { withRouter } from 'react-router-dom'

class ReportForm extends Component {
  state = {
    checkedItems: new Map(),
  }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let currentTime = new Date();
    let tokens = parseInt(window.sessionStorage.tokens)
    let addToken = tokens + 1;
    window.sessionStorage.setItem("time", currentTime)
    window.sessionStorage.setItem("tokens", addToken)
    let checked = {}
    this.state.checkedItems.forEach((item, i) => (
      checked[i] = item
    ))
    window.sessionStorage.setItem("checkedItems", JSON.stringify(checked))
    this.props.history.push('/profile')
  }

  render() {
    return (
      <form className="ReportForm" onSubmit={this.handleSubmit}>
        <CheckboxContainer handleChange={(e) => this.handleChange(e)} checkedItems={this.state.checkedItems}/>
        <button type="submit">
          Submit Report
        </button>
      </form>
    );
  }
}

export default withRouter(ReportForm);
