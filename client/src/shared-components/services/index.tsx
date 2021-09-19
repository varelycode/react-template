import { Col, Container, Figure, Row } from "react-bootstrap";
import brickwall from "../../images/svg/brickwall.svg";
import concreteMixer from "../../images/svg/concrete-mixer.svg";
import truck1 from "../../images/svg/truck-1.svg";
import blueprint from "../../images/svg/blueprint.svg";

type Props = {
  color?: string;
};
export const Services: React.FC<Props> = (props: any) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Figure>
            <Figure.Image
              width="70px"
              height="70px"
              alt="171x180"
              src={brickwall}
            />
            <Figure.Caption>Pavers</Figure.Caption>
          </Figure>
        </Col>
        <Col md="auto">
          <Figure>
            <Figure.Image
              width="70px"
              height="70px"
              alt="171x180"
              src={concreteMixer}
            />
            <Figure.Caption>Concretes</Figure.Caption>
          </Figure>
        </Col>
        <Col xs lg="2">
          <Figure>
            <Figure.Image
              width="70px"
              height="70px"
              alt="171x180"
              src={blueprint}
            />
            <Figure.Caption>Design and estimates</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
