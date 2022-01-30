import React from "react";
import "../../index.css";

export default class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this);
  }

  handleDivClick(e) {
    this.props.changeActiveTaskId(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleDivClick} class={"task " + this.props.className}>
        <section class="taskinfo">
          <p>{this.props.name} </p>
          <p>{this.props.decision.split(":")[0]}</p>
          <p>{this.props.creationDate | "today"}</p>
          <p>{this.props.id}</p>
        </section>
        <section class="taskpriority">{this.props.priority}</section>
      </div>
    );
  }
}
