import { Card, Image, Row, Col } from "react-bootstrap";
import Router from "next/router";

import styles from "../styles/Home.module.css";

export default function CardPokemon({ data }) {
  return (
    <div onClick={() => Router.push(`detail?id=${data?.id}`)}>
      <Card
        className={`${styles.card} p-0`}
        style={
          data?.types[0].type.name === "grass"
            ? { backgroundColor: "#A3DDCB" }
            : data?.types[0].type.name === "fire"
            ? { backgroundColor: "#FF7171" }
            : { backgroundColor: "#98D6EA" }
        }
      >
        <Card.Body>
          <h3 style={{ color: "#F5F5F5" }}>{data?.name}</h3>
          <Row>
            <Col xs="4" >
              {data?.types.map((el, idx) => (
                <div key={idx}>
                  <span className="badge">{el.type.name}</span>
                </div>
              ))}
            </Col>
            <Col xs="8">
              <Image
                src={data?.sprites?.other?.dream_world.front_default}
                style={{ height: "120px" }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
