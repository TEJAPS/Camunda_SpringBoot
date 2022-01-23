import React from "react";
import "../../index.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.customClick = this.customClick.bind(this);
  }

  customClick(e) {
    console.log(e, "hey macha");
  }
  render() {
    return (
      <div class="task">
        <p>{this.props.name} </p>
        <p>{this.props.decision}</p>
        <p>{this.props.creationDate}</p>
        <p>{this.props.priority}</p>
        {/* <button onClick={this.customClick}>Try Click</button> */}
      </div>
    );
  }
}

export default Task;
