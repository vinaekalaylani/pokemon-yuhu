import Head from "next/head";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../styles/Home.module.css";
import CardPokemon from "../component/card";
import axios from "axios";

export default function Home({ dataPokemon }) {
  const [pokemon, set_pokemon] = useState([]);

  const getData = async () => {
    try {
      const res = [];
      for (let i = 0; i < dataPokemon.results.length; i++) {
        const temp = await axios({
          url: dataPokemon.results[i].url,
          method: "GET",
        });
        res.push(temp.data);
      }
      set_pokemon(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Pokedex</h1>
      </div>
      <Row>
        {pokemon.map((el) => (
          <Col xs="6" md="4" lg="3" xl="2" key={el.id} className="p-0">
            <CardPokemon data={el}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  const dataPokemon = await data.json();
  return {
    props: {
      dataPokemon,
    },
  };
}
