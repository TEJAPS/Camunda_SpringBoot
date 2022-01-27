import logo from "./logo.svg";
import Tasklist from "./components/tasklist/Tasklist";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/tasklist/Filter";
import TaskDetail from "./components/tasklist/TaskDetail";
import Footer from "./components/Footer";
import "./index.css";
import DiagramMenuContentComponent from "./components/tasklist/taskDetailMenu/DiagramMenuContentComponent";

import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import TaskListIndexComponent from "./components/tasklist/TaskListIndexComponent";
import AdminIndexComponent from "./components/admin/AdminIndexComponent";
import CockPitIndexComponent from "./components/cockpit/CockPitIndexComponent";
import Homepage from "./components/home/Homepage";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        
        <Header />
        
        <Footer />
      </div> */}
      {/* <Link to="/tasklist">Tasklist</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/cockpit">Cockpit</Link> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/tasklist" component={TaskListIndexComponent} />
        <Route exact path="/admin" component={AdminIndexComponent} />
        <Route exact path="/cockpit" component={CockPitIndexComponent} />
      </Switch>
      <Route
        component={() => {
          <h1>Page Not Found</h1>;
        }}
      />
    </BrowserRouter>
  );
}

export default App;
