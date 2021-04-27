import React from "react";
import Nav from "react-bootstrap/Nav";
import {
  Card,
  CardColumns,
  CardDeck,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  matchPath,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

type Props = {
  name?: string;
};

export const Blog: React.FC<Props> = (props: any) => {
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
    <CardDeck style={{ marginRight: 40, marginLeft: 40 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};
