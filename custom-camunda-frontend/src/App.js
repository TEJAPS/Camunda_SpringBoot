import "./App.css";
import Footer from "./components/Footer";
import "./index.css";

import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import TaskListIndexComponent from "./components/tasklist/TaskListIndexComponent";
import AdminIndexComponent from "./components/admin/AdminIndexComponent";
import CockPitIndexComponent from "./components/cockpit/CockPitIndexComponent";
import HomepageIndexComponent from "./components/home/HomepageIndexComponent";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomepageIndexComponent} />
          <Route exact path="/tasklist" component={TaskListIndexComponent} />
          <Route exact path="/admin" component={AdminIndexComponent} />
          <Route exact path="/cockpit" component={CockPitIndexComponent} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
