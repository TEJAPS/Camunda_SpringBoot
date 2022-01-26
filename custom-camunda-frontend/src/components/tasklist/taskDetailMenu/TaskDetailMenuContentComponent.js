import React, { Component } from "react";
import FormMenuContentComponent from "./FormMenuContentComponent";
import DiagramMenuContentComponent from "./DiagramMenuContentComponent";
import DescriptionMenuContentComponent from "./DescriptionMenuContentComponent";
import HistoryMenuContentComponent from "./HistoryMenuContentComponent";

export default class TaskDetailMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compname: "",
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.compname !== this.props.compname ||
  //     nextProps.activeTaskId !== this.props.activeTaskId ||
  //     nextProps.processDefinitionId !== this.props.processDefinitionId
  //   ) {
  //     console.log("shoud com update is true");
  //     return true;
  //   }

  //   console.log("shoud com update is false");
  //   return false;
  // }

  // componentDidUpdate() {
  //   this.setState({
  //     compname: this.props.compname,
  //   });
  // }

  render() {
    // var MyComponent = this.props.compname | "DiagramMenuContentComponent";
    return (
      <div class="tasldetailmenucontentcontext">
        {this.props.compname === "Form" ? (
          <FormMenuContentComponent
            activeTaskId={this.props.activeTaskId}
            taskDetailMenuContentComponentId={
              this.props.taskDetailMenuContentComponentId + this.props.compname
            }
          />
        ) : this.props.compname === "History" ? (
          <HistoryMenuContentComponent
            activeTaskId={this.props.activeTaskId}
            taskDetailMenuContentComponentId={
              this.props.taskDetailMenuContentComponentId + this.props.compname
            }
          />
        ) : this.props.compname === "Diagram" ? (
          <DiagramMenuContentComponent
            processDefinitionId={this.props.processDefinitionId}
            taskname={this.props.taskname}
            activeTaskId={this.props.activeTaskId}
            taskDetailMenuContentComponentId={
              this.props.taskDetailMenuContentComponentId + this.props.compname
            }
          />
        ) : (
          <DescriptionMenuContentComponent
            taskDescription={this.props.taskDescription}
            activeTaskId={this.props.activeTaskId}
            taskDetailMenuContentComponentId={
              this.props.taskDetailMenuContentComponentId + this.props.compname
            }
          />
        )}
      </div>
    );
  }
}
