import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavbarBrand } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  matchPath,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

type Props = {
  name: string;
};

export const Navigation: React.FC<Props> = (props: any) => {
  const active: React.CSSProperties = {
    fontWeight: "bold",
    color: "red",
  };
  const inactive: React.CSSProperties = {
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "none",
  };
  return (
    <Navbar style={{ marginBottom: 20 }}>
      <Navbar.Brand>
        <img
          src="/nosugarpls.svg"
          height={80}
          width={170}
          className="d-inline-block align-top"
          alt="No Sugar Pls Logo"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/home" activeStyle={active} style={inactive}>
              Home
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/browse" activeStyle={active} style={inactive}>
              Browse
            </NavLink>{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/blog" activeStyle={active} style={inactive}>
              Blog
            </NavLink>{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
