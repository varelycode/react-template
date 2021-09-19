import React from "react";
import { Card, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Style } from "util";

type Props = {
  style?: Style;
};

export const Banner: React.FC<Props> = (props: any) => {
  return (
    <Card
      style={{
        width: "30rem",
        height: "20rem",
        padding: "60px",
        position: "absolute",
        marginTop: "10%",
      }}
    >
      <Card.Body style={{ fontFamily: "Jost, sans-serif" }}>
        <Card.Title>Build Your Dream Home.</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          The Inland Empire's best landscapes.
        </Card.Subtitle>
        <Card.Text>
          We work with families across the Inland Empire to service their
          landscape and hardscape needs. Whether you want a new BBQ area or a
          new drivway, we got you.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
