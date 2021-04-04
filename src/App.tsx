import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./shared-components/header/index";

function App() {
  return (
    <div className="App">
      <Navbar name="Viviana" />
      <div className="App-header">
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
      </div>
    </div>
  );
}

export default App;
