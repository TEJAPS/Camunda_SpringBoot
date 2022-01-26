import React, { Component } from "react";

export default class DescriptionMenuContentComponent extends Component {
  render() {
    return (
      <div class="tasldetailmenucontentcomponent">
        <p>{this.props.activeTaskId}</p>
        {this.props.taskDescription !== null
          ? this.props.taskDescription
          : "No Description provided for this task"}
      </div>
    );
  }
}
