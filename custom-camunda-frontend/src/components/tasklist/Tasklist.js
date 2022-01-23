import React from "react";
import Task from "./Task";
import "../../index.css";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tasks: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8085/engine-rest/task")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result,
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

  render() {
    const { error, isLoaded, tasks } = this.state;
    if (error) {
      return <div>Error </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="tasklist">
          {tasks.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              creationDate={task.createTime}
              decision={task.processDefinitionId}
              priority={task.priority}
            />
          ))}
        </div>
      );
    }
  }
}

export default TaskList;
