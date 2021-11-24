import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import ControleBtn from "../ControlBtn/ControleBtn";

export default function Footer({ component }: Component) {
  return (
    <div className="section pb-2 ">
      <ControleBtn component={component} align="row" />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Navbar>
              <Nav>
                <Nav.Link href="#">Help Center</Nav.Link>
                <Nav.Link href="#">Terms of Service</Nav.Link>
                <Nav.Link href="#">Licences</Nav.Link>
                <Nav.Link href="#">Sell Themes</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <div className="d-flex w-100 justify-content-md-start justify-content-md-end align-items-center">
              <p className="mb-0">
                Trying to redownload a theme? Use our{" "}
                <a
                  href="https://themes.getbootstrap.com/redownload/"
                  rel="noreferrer"
                  target="_blank"
                >
                  redownload page.
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
