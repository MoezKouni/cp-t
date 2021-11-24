import { Container } from "react-bootstrap";
import bootstrap from "../../assets/img/bootstrap.png";
import Button from "../Button/Button";
import ControleBtn from "../ControlBtn/ControleBtn";
import "./Hero.css";

export default function Hero({ component }: Component) {
  return (
    <div className="hero section">
      <ControleBtn component={component} align="column" />
      <Container>
        <img src={bootstrap} alt="bootstrap" />
        <h1 className="hero-title">Build anything</h1>
        <p>Themes built by or reviewed by Bootstrap's creators.</p>
        <Button type="filled" size="large">
          Why our themes?
        </Button>
      </Container>
    </div>
  );
}
