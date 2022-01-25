import React, { Component } from "react";
import FormMenuContentComponent from "./FormMenuContentComponent";
import DiagramMenuContentComponent from "./DiagramMenuContentComponent";
import DescriptionMenuContentComponent from "./DescriptionMenuContentComponent";
import HistoryMenuContentComponent from "./HistoryMenuContentComponent";

export default class TaskDetailMenuContentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // var MyComponent = this.props.compname | "DiagramMenuContentComponent";
    return (
      <div class="tasldetailmenucontentcontext">
        {this.props.compname === "Form" ? (
          <FormMenuContentComponent activeTaskId={this.props.activeTaskId} />
        ) : this.props.compname === "History" ? (
          <HistoryMenuContentComponent activeTaskId={this.props.activeTaskId} />
        ) : this.props.compname === "Diagram" ? (
          <DiagramMenuContentComponent
            processDefinitionId={this.props.processDefinitionId}
            taskname={this.props.taskname}
          />
        ) : (
          <DescriptionMenuContentComponent
            taskDescription={this.props.taskDescription}
          />
        )}
      </div>
    );
  }
}
