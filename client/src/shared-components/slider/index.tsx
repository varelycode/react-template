import Carousel from "react-bootstrap/Carousel";

import React, { ReactComponentElement } from "react";
import { Card, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import Image1 from "../../images/IMG_1023.jpeg";
import image2 from "../../images/IMG_0558.jpeg";
import image3 from "../../images/IMG_1996.jpeg";
import { JsxElement } from "typescript";
type Props = {
  child?: JsxElement;
};

export const Slider: React.FC<Props> = (props: any) => {
  const styles = style;

  return (
    <Carousel className="w-100">
      <Carousel.Item style={{ zIndex: -1 }}>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={Image1}
          alt="Big House Walkway"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "50%", zIndex: -1 }}>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "50%", zIndex: -1 }}>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

const style = {
  item: {
    height: "50%",
  },
};
