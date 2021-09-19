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
import { Banner } from "./shared-components/banner";
import { Slider } from "./shared-components/slider";
import { Col, Row } from "react-bootstrap";
import { Services } from "./shared-components/services";
import { CustomFooter } from "./shared-components/footer";

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

      <Row>
        <Col>
          <Banner></Banner>
        </Col>
        <Col>
          <Slider></Slider>
        </Col>
      </Row>

      <Row>
        <Services></Services>
      </Row>
      <Row>
        <CustomFooter></CustomFooter>
      </Row>
    </Router>
  );
}

export default App;
