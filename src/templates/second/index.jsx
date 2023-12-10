import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../../services/api";
import Layout from "../../components/Layout";
import "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();
  
  const getPokemons = async () => {
    api
      .get(`/pokemon/${name}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout>
      <img src={pokemon?.sprites?.other?.dream_world?.front_default} id="pokeIMG"/>
      
      <section id="title">
        <h1>{name}</h1>
      </section>

      <section className="grid">
        <section>
          <h2>Abilites</h2>
          {pokemon?.abilities.map((item, index) => (
            <p key={index}>{item.ability.name}</p>
          ))}
        </section>

        <section>
          <h2>Types</h2>
          {pokemon?.types.map((item, index) => (
            <p key={index}>{item.type.name}</p>
          ))}
        </section>

        <section>
          <h2>Held items</h2>
          {pokemon?.held_items.map((item, index) => (
            <p key={index}>{item.item.name}</p>
          ))}
        </section>

        <section>
          <h2>Base experience</h2>
          <p>{pokemon?.base_experience}</p>
        </section>
      </section>
    </Layout>
  );
}

export default App;
