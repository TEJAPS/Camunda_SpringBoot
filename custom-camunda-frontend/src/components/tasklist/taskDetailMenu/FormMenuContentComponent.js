import React, { Component } from "react";
import axios from "axios";

export default class FormMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: "",
    };
    this.getdata = this.getdata.bind(this);
  }

  getdata() {
    axios
      .get(
        "http://127.0.0.1:8085/engine-rest/task/" +
          this.props.activeTaskId +
          "/rendered-form"
      )
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // this.setState({
        //   formdata: result,
        // });
      })
      .catch((e) => {
        console.log(e, "rror");
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getdata}>
          FormMenuContentComponent: activeTaskId={this.props.activeTaskId}
        </button>
        {this.state.formdata}
      </div>
    );
  }
}
