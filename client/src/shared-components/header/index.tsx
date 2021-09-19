import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import image from "../../images/GARDEN OF ROSAS.png";

type Props = {
  name: string;
};

export const Navigation: React.FC<Props> = (props: any) => {
  let isSignedIn = false;
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
    <Navbar>
      <Navbar.Brand>
        <Navbar.Text
          style={{
            fontFamily: "Bonheur Royale, cursive",
            fontSize: "2.3rem",
            color: "black",
            margin: 10,
          }}
        >
          Garden of Rosas
          <h5
            style={{
              fontFamily: "Roboto",
              fontSize: "15px",
              color: "black",
              marginTop: "-5px",
            }}
          >
            Landscape and Hardscape Co.
          </h5>
        </Navbar.Text>
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
        {isSignedIn ? (
          <Navbar.Text>
            Signed in as: <a href="/login">Mark Otto</a>
          </Navbar.Text>
        ) : (
          <Navbar.Text>
            <a href="/login">Login</a> / <a href="/register">Register</a>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
