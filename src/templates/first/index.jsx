import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./styles.css";
import Card from "../../components/Card";
import api from "../../services/api";

function App() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      api
        .get("/pokemon?limit=8")
        .then((response) => {
          setPokemons(response.data.results);
        })
        .catch((error) => {});
    };
    getPokemons();
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    api
      .get(`/pokemon/${search}`)
      .then((response) => {
        setPokemons([response.data]);
      })
      .catch((error) => {});
    event.preventDefault();
  };

  return (
    <Layout>
      <form>
        <input
          onChange={handleInputChange}
          value={search}
          type="text"
          placeholder="Pesquisar"
        />
        <button type="submit" onClick={handleSubmit}>
          Pesquisar
        </button>
      </form>

      <section className="grid">
        {pokemons?.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            image={pokemon?.sprites?.other?.dream_world?.front_default}
          />
        ))}
      </section>
    </Layout>
  );
}

export default App;
