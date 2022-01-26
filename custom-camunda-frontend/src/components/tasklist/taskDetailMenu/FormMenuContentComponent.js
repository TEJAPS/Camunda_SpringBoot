import React, { Component } from "react";
import axios from "axios";

export default class FormMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: "",
      url: "",
      activeTaskId: "",
    };
    this.getdata = this.getdata.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "this.props.activeTaskId",
  //     this.props.activeTaskId,
  //     "nextProps.activeTaskId",
  //     nextProps.activeTaskId,
  //     "this.props.activeTaskId === undefined",
  //     this.props.activeTaskId === undefined,
  //     "nextProps.activeTaskId !== this.props.activeTaskId",
  //     nextProps.activeTaskId !== this.props.activeTaskId
  //   );
  //   if (nextProps.activeTaskId == this.props.activeTaskId) {
  //     return false;
  //   }
  //   return true;
  // }

  componentDidMount() {
    console.log(
      "componentWillMount this.props.activeTaskId",
      this.props.activeTaskId
    );
    this.getdata();
  }

  componentDidUpdate(prevProps) {
    console.log(
      "componentWillUpdate this.props.activeTaskId",
      this.props.activeTaskId
    );
    if (this.props.activeTaskId !== prevProps.activeTaskId) {
      this.getdata();
    }
  }

  getdata() {
    var url =
      "http://127.0.0.1:8085/engine-rest/task/" +
      this.props.activeTaskId +
      "/rendered-form";
    axios
      .get(url)
      .then((result) => {
        this.setState({
          formdata: result.data,
          url: url,
        });
      })
      .catch((e) => {
        this.setState({
          formdata: "no form",
          url: url,
        });
      });
  }

  createMarkup() {
    return { __html: this.state.formdata };
  }

  render() {
    return (
      <div class="tasldetailmenucontentcomponent">
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}
