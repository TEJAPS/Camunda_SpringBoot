import React, { useEff } from "react";
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
    this.fetchData = this.fetchData.bind(this);
    // this.changeActiveTask = this.changeActiveTask.bind(this);
  }

  changeActiveTaskId(activeTaskIdValue) {
    this.setState({ activeTaskId: activeTaskIdValue });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "should component update is null",
  //     this.state.activeTaskId,
  //     this.state.activeTaskId == null
  //   );
  //   if (nextState.activeTaskId !== this.state.activeTaskId) {
  //     return true;
  //   }
  //   return false;
  // }
  // componentDidUpdate() {
  //   this.fetchData();
  // }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://127.0.0.1:8085/engine-rest/task")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result,
            // activeTaskId: this.props.activeTaskId,
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
                  onClick={this.changeActiveTask}
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  creationDate={task.createTime}
                  decision={task.processDefinitionId}
                  priority={task.priority}
                  changeActiveTaskId={this.changeActiveTaskId}
                  className={
                    ("activespan",
                    this.state.activeTaskId === task.id ? "activetask" : "")
                  }
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
