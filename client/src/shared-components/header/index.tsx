import React from "react";
import Nav from "react-bootstrap/Nav";

type Props = {
  name: string;
};

export const Navbar: React.FC<Props> = (props: any) => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">NoSugaryFood</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Browse</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Sales</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Testimony</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
