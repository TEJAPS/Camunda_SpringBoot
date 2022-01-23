import logo from "./logo.svg";
import Tasklist from "./components/tasklist/Tasklist";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/tasklist/Filter";
import TaskDetail from "./components/tasklist/TaskDetail";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div class="taskfegroup">
        <Filter />
        <Tasklist />
        <TaskDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;
