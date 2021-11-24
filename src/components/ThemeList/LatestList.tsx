import { Container, Row, Col } from "react-bootstrap";
import { themes } from "../../data";
import Card from "../Card/Card";
import ControleBtn from "../ControlBtn/ControleBtn";
import ListHeader from "./ListHeader";

export default function LatestList({ component }: Component) {
  return (
    <div className="section">
      <ControleBtn component={component} align="column" />
      <Container className="mt-5">
        <Row className="my-4 mb-5">
          <ListHeader
            title={"Latest"}
            subTitle={"Most recently added to our collection."}
          />
        </Row>
        <Row className="border-bottom">
          {themes
            .filter((theme: OneThemeI) => theme.section === "Latest")
            .map((theme: OneThemeI) => (
              <Col md={6} key={theme.id}>
                <Card theme={theme} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
