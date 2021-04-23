import React from "react";
import {
  BrowserRouter as Router,
  Link,
  matchPath,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/:id">About</Link>
            </li>
            <li>
              <Link to="/users/:id">Users</Link>
            </li>
          </ul>
        </nav>
        {console.log(
          "Does Match",
          matchPath(
            "/participants/join/1d59d9c0-5939-4934-8270-b84c4767762f?locale=en",
            {
              path:
                "/participants/join/:sessionId?locale=:languageCode?/:authorTools?",
              exact: false,
              strict: false,
            }
          )
        )}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:id">
            <Users />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
