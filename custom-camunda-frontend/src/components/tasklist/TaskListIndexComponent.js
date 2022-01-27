import React, { Component } from "react";

import Tasklist from "./Tasklist";

import Header from "../Header";
import Filter from "./Filter";
import TaskDetail from "./TaskDetail";
import Footer from "../Footer";

export default class TaskListIndexComponent extends Component {
  render() {
    return (
      <>
        <div class="taskfegroup">
          <Filter />
          <Tasklist />
        </div>
      </>
    );
  }
}
