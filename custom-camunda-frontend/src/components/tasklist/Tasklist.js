import React from "react";
import Task from "./Task";
import TaskDetail from "./TaskDetail";
import "../../index.css";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tasks: [],
      activeTaskId: null,
    };
    this.changeActiveTaskId = this.changeActiveTaskId.bind(this);
  }

  changeActiveTaskId(activeTaskIdValue) {
    this.setState({ activeTaskId: activeTaskIdValue });
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
        <div class="tasklistdetail">
          <div class="tasklistgroup">
            <div class="tasklistheader boxbottomborder">Created</div>
            <div class="tasklist">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  creationDate={task.createTime}
                  decision={task.processDefinitionId}
                  priority={task.priority}
                  changeActiveTaskId={this.changeActiveTaskId}
                />
              ))}
            </div>
          </div>
          <TaskDetail activeTaskId={this.state.activeTaskId} />
        </div>
      );
    }
  }
}

export default TaskList;
