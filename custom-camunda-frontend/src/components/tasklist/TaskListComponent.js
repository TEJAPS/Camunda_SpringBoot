import React, { useEff } from "react";
import TaskComponent from "./TaskComponent";
import TaskDetailComponent from "./TaskDetailComponent";
import "../../index.css";

export default class TaskListComponent extends React.Component {
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(process.env.REACT_APP_CAMUNDA_ENGINE_BASE_URL + "task")
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
            <div class="tasklistheader boxbottomborder textaligncenter">
              Created
            </div>
            <div class="tasklist">
              {tasks.map((task) => (
                <TaskComponent
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
          <TaskDetailComponent activeTaskId={this.state.activeTaskId} />
        </div>
      );
    }
  }
}
