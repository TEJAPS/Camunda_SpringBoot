import logo from "./logo.svg";
import Tasklist from "./components/tasklist/Tasklist";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/tasklist/Filter";
import TaskDetail from "./components/tasklist/TaskDetail";
import Footer from "./components/Footer";
import "./index.css";
import DiagramMenuContentComponent from "./components/tasklist/taskDetailMenu/DiagramMenuContentComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="taskfegroup">
        <Filter />
        <Tasklist />
      </div>
      <Footer />
      {/* <DiagramMenuContentComponent /> */}
    </div>
  );
}

export default App;
