import { useState } from "react";
import Layout from "../../components/Layout";
import "./styles.css";
import Card from "../../components/Card";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <form>
        <input type="text" placeholder="Pesquisar"/>
        <button>Pesquisar</button>
      </form>

      <section className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Layout>
  );
}

export default App;
