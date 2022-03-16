import { Row, Col } from "react-bootstrap";

import styles from "../styles/Home.module.css";

export default function About({ data }) {
  return (
    <div>
      <Row>
        <Col xs="3">
          <h6>Species :</h6>
        </Col>
        <Col xs="9">
          <h6>{data?.species.name}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <h6>Height :</h6>
        </Col>
        <Col xs="9">
          <h6>{data?.height}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <h6>Weight :</h6>
        </Col>
        <Col xs="9">
          <h6>{data?.weight}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <h6>Abilities :</h6>
        </Col>
        <Col xs="9">
          <h6>{data?.abilities.map((el) => {
            return el.ability.name + ", "
          })}</h6>
        </Col>
      </Row>
    </div>
  );
}
