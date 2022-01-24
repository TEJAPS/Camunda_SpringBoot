import React, { Component } from "react";
import TaskDetailMenuComponent from "./taskDetailMenu/TaskDetailMenuComponent";
import DiagramMenuContentComponent from "./taskDetailMenu/DiagramMenuContentComponent";
import TaskDetailMenuContentComponent from "./taskDetailMenu/TaskDetailMenuContentComponent";

export default class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetail: {},
      activeTaskId: null,
      componentToDisplay: "Form",
    };
    this.setComponentToDisplay = this.setComponentToDisplay.bind(this);
  }

  componentDidUpdate(prevProp, prevState) {
    //here this.prop is same as nextPro of shouldComponentUpdate
    if (this.state.activeTaskId !== this.props.activeTaskId) {
      this.setState({
        activeTaskId: this.props.activeTaskId,
      });
    }

    if (prevState.activeTaskId !== this.state.activeTaskId) {
      fetch("http://127.0.0.1:8085/engine-rest/task/" + this.props.activeTaskId)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              taskDetail: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  setComponentToDisplay(e) {
    this.setState({ componentToDisplay: e.target.innerText });
  }

  render() {
    return (
      <div class="taskdetail">
        <p class="boxbottomborder">Task Detail</p>
        {this.state.activeTaskId != null && (
          <div class="taskdetailcontent">
            <div>{this.state.taskDetail.name}</div>
            <div>
              {typeof this.state.taskDetail.processDefinitionKey === "string"
                ? this.state.taskDetail.processDefinitionKey.split(":")[0]
                : ""}
            </div>
            <div>
              <ul>
                <li>Set follow-up date</li>
                <li>Set due date</li>
                <li>Add groups</li>
                <li>Claim</li>
              </ul>
            </div>
            <TaskDetailMenuComponent
              setComponentToDisplay={this.setComponentToDisplay}
            />

            <TaskDetailMenuContentComponent
              compname={this.state.componentToDisplay}
              processDefinitionId={this.state.taskDetail.processDefinitionId}
              activeTaskId={this.state.activeTaskId}
            />
          </div>
        )}
      </div>
    );
  }
}
