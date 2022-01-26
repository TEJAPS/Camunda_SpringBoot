import logo from "./logo.svg";
import Tasklist from "./components/tasklist/Tasklist";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/tasklist/Filter";
import TaskDetail from "./components/tasklist/TaskDetail";
import Footer from "./components/Footer";
import "./index.css";
import DiagramMenuContentComponent from "./components/tasklist/taskDetailMenu/DiagramMenuContentComponent";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskListIndexComponent from "./components/tasklist/TaskListIndexComponent";
import AdminIndexComponent from "./components/admin/AdminIndexComponent";
import CockPitIndexComponent from "./components/cockpit/CockPitIndexComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header />
        <TaskListIndexComponent />
        <Footer /> */}
        {/* <Switch> */}
        <Link to="/tasklist">Tasklist</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cockpit">Cockpit</Link>
        <Header />
        <Route exact path="/tasklist" component={TaskListIndexComponent} />
        <Route exact path="/admin" component={AdminIndexComponent} />
        <Route exact path="/cockpit" component={CockPitIndexComponent} />
        <Footer />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
