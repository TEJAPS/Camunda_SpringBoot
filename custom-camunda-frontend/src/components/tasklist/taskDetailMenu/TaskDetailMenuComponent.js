import React, { Component } from "react";
import TaskDetailMenuContentComponent from "./TaskDetailMenuContentComponent";

export default class TaskDetailMenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="taskDetailMenuComponent">
        <span onClick={this.props.setComponentToDisplay}>Form</span>
        <span onClick={this.props.setComponentToDisplay}>History</span>
        <span onClick={this.props.setComponentToDisplay}>Diagram</span>
        <span onClick={this.props.setComponentToDisplay}>Description</span>
      </div>
    );
  }
}
