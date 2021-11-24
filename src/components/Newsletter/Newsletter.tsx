import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import ControleBtn from "../ControlBtn/ControleBtn";
import "./Newsletter.css";

export default function Newsletter({ component }: Component) {
  return (
    <div className="section">
      <ControleBtn component={component} align="column" />
      <Container>
        <Row className="newsletter py-5 align-items-center">
          <Col md={6}>
            <h5 className="mb-0">Get new themes in your inbox!</h5>
            <p className="text-muted form-text mb-0">
              New themes or big discounts. Never spam.
            </p>
          </Col>
          <Col>
            <form className="d-flex w-100 justify-content-md-start justify-content-md-end mt-4 mt-md-0">
              <input
                placeholder="Email address"
                type="email"
                className="form-input me-2"
              />
              <Button type="filled">Subscribe</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
