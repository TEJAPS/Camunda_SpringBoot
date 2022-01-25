import React, { Component } from "react";
import axios from "axios";

export default class FormMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: "",
    };
    this.getdata = this.getdata.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    this.getdata();
    console.log("component did mount");
  }
  // componentDidUpdate() {
  //   console.log("component did update");
  //   this.getdata();
  // }

  getdata() {
    axios
      .get(
        "http://127.0.0.1:8085/engine-rest/task/" +
          this.props.activeTaskId +
          "/rendered-form"
      )
      // .then((res) => res.json())
      .then((result) => {
        this.setState({
          formdata: result.data,
        });
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }

  createMarkup() {
    return { __html: this.state.formdata };
  }

  render() {
    return (
      <div class="tasldetailmenucontentcomponent">
        <div dangerouslySetInnerHTML={this.createMarkup()} />
        {this.state.formdata === ""}
      </div>
    );
  }
}
