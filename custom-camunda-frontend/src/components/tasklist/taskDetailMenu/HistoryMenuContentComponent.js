import React, { Component } from "react";

export default class HistoryMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyUserOperations: [],
    };
  }

  componentDidMount() {
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
