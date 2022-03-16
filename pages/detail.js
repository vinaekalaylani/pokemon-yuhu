import { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import About from "../component/about";
import Base from "../component/base";
import Evolution from "../component/evolution";
import Moves from "../component/moves";

import styles from "../styles/Home.module.css";

export default function Detail({ detailPokemon }) {
  const [tab, set_tab] = useState("about");

  console.log(detailPokemon);

  return (
    <div
      className={styles.detail}
      style={
        detailPokemon?.types[0].type.name === "grass"
          ? { backgroundColor: "#A3DDCB" }
          : data?.types[0].type.name === "fire"
          ? { backgroundColor: "#FF7171" }
          : { backgroundColor: "#98D6EA" }
      }
    >
      <Row className={styles.container}>
        <Col xs="6">
          <h1>{detailPokemon.name}</h1>
          <Row style={{ marginTop: "20px" }}>
            {detailPokemon?.types.map((el, idx) => (
              <Col xs="3" key={idx}>
                <h6>{el.type.name}</h6>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs="6" className="text-end" style={{ marginTop: "20px" }}>
          <h2>#{detailPokemon.id}</h2>
        </Col>
      </Row>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <Image src={detailPokemon?.sprites?.other?.dream_world.front_default} />
      </div>

      <div className={styles.cardDetail}>
        <div className="d-flex justify-content-center">
          <Row style={{ width: "400px" }} className="text-center">
            <Col xs="3">
              <div
                style={
                  tab === "about"
                    ? {
                        colour: "black",
                        borderBottom: "solid",
                      }
                    : { color: "#BBBBBB" }
                }
                onClick={() => set_tab("about")}
              >
                About
              </div>
            </Col>
            <Col xs="3">
              <div
                style={
                  tab === "base"
                    ? {
                        colour: "black",
                        borderBottom: "solid",
                      }
                    : { color: "#BBBBBB" }
                }
                onClick={() => set_tab("base")}
              >
                Base Stats
              </div>
            </Col>
            <Col xs="3">
              <div
                style={
                  tab === "evolution"
                    ? {
                        colour: "black",
                        borderBottom: "solid",
                      }
                    : { color: "#BBBBBB" }
                }
                onClick={() => set_tab("evolution")}
              >
                Evolution
              </div>
            </Col>
            <Col xs="3">
              <div
                style={
                  tab === "moves"
                    ? {
                        colour: "black",
                        borderBottom: "solid",
                      }
                    : { color: "#BBBBBB" }
                }
                onClick={() => set_tab("moves")}
              >
                Moves
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ padding: "2rem 2rem"}}>
          {tab === "about" && <About data={detailPokemon}/>}
          {tab === "base" && <Base data={detailPokemon} />}
          {tab === "evolution" && <Evolution />}
          {tab === "moves" && <Moves />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const detailPokemon = await data.json();
  return {
    props: {
      detailPokemon,
    },
  };
}
