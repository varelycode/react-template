import React from "react";
import {
  BrowserRouter as Router,
  Link,
  matchPath,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Blog } from "./pages/blog";
import { Register } from "./pages/register";
import { Navigation } from "./shared-components/header";

function App() {
  return (
    <Router>
      <Navigation name="NoSugarPlease" />
      <Switch>
        <Route path="/blog">{<Blog />}</Route>
        <Route path="/register">{<Register />}</Route>
        <Route path="/users/:id">{/* <Users /> */}</Route>

        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>
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
