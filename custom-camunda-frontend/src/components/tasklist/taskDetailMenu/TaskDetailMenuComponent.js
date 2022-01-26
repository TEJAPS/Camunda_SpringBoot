import React, { Component } from "react";
import TaskDetailMenuContentComponent from "./TaskDetailMenuContentComponent";

export default class TaskDetailMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeclass: "Form",
    };
    this.changeActiveClassState = this.changeActiveClassState.bind(this);
  }
  changeActiveClassState(e) {
    this.setState({
      activeclass: e.target.innerText,
    });
    console.log("clicked", e.target.innerText);
  }

  render() {
    return (
      <div class="taskDetailMenuComponent">
        <span
          onClick={(e) => {
            this.changeActiveClassState(e);
            this.props.setComponentToDisplay(e);
          }}
          className={this.state.activeclass === "Form" ? "activespan" : ""}
        >
          Form
        </span>
        <span
          onClick={(e) => {
            this.changeActiveClassState(e);
            this.props.setComponentToDisplay(e);
          }}
          className={this.state.activeclass === "History" ? "activespan" : ""}
        >
          History
        </span>
        <span
          onClick={(e) => {
            this.changeActiveClassState(e);
            this.props.setComponentToDisplay(e);
          }}
          className={this.state.activeclass === "Diagram" ? "activespan" : ""}
        >
          Diagram
        </span>
        <span
          onClick={(e) => {
            this.changeActiveClassState(e);
            this.props.setComponentToDisplay(e);
          }}
          className={
            this.state.activeclass === "Description" ? "activespan" : ""
          }
        >
          Description
        </span>
      </div>
    );
  }
}
