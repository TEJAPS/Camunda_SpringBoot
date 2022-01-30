import React, { Component } from "react";

export default class HistoryMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyUserOperations: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    console.log("component did mound HistoryMenuContentComponent");
    this.fetchData();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "nextprop current prop HistoryMenuContentComponent",
  //     nextProps.activeTaskId,
  //     this.props.activeTaskId
  //   );
  //   if (nextProps.activeTaskId !== this.props.activeTaskId) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidUpdate(prevProps) {
    console.log(
      "component did update HistoryMenuContentComponent",
      this.props.activeTaskId
    );
    if (
      this.props.taskDetailMenuContentComponentId !==
      prevProps.taskDetailMenuContentComponentId
    ) {
      this.fetchData();
    }
  }

  fetchData() {
    console.log("fetch data", this.props.activeTaskId);
    fetch(
      "http://localhost:8085/engine-rest/history/user-operation?taskId=" +
        this.props.activeTaskId +
        "&maxResults=50&firstResult=0&sortBy=timestamp&sortOrder=desc"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            historyUserOperations: result,
          });
        },
        (error) => {
          console.log("error");
        }
      );
  }
  render() {
    const content = this.state.historyUserOperations.map((record) => (
      <React.Fragment>
        <p>{record.timestamp}</p>
        <p>{record.operationType}</p>
        <hr />
      </React.Fragment>
    ));

    return <div class="tasldetailmenucontentcomponent">{content}</div>;
  }
}
