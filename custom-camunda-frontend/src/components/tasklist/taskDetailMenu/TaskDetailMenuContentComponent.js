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
      <div class="tasldetailmenucontentcomponent">
        {this.props.compname === "Form" ? (
          <FormMenuContentComponent />
        ) : this.props.compname === "History" ? (
          <HistoryMenuContentComponent />
        ) : this.props.compname === "Diagram" ? (
          <DiagramMenuContentComponent />
        ) : (
          <DescriptionMenuContentComponent />
        )}
      </div>
    );
  }
}
