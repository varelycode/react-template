import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { data } from "../auth/index";

type Props = {
  name?: string;
};

export const Register: React.FC<Props> = (props: any) => {
  data.then((res) => console.log(res));

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <form>
            <h3>Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/login">log in?</a>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
