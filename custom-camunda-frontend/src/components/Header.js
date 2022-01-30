import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul id="headerleft">
          <li>image </li>
          <li>Camunda TaskList</li>
        </ul>
        <ul id="headerright">
          <li>Keyboard Shortcuts </li>
          <li>Create task </li>
          <li>Start Process |</li>
          <li>Full Name </li>
          <li>HomeIcon</li>
        </ul>
      </header>
    );
  }
}
