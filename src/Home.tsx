import { useEffect, useState } from "react";
import CharactersList from "./components/home/CharactersList";
import { Character } from "./components/home/CharactersList/CharactersList";
import "./styles/home.scss";
import HpIcon from "/images/hp.svg";

function Home() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);

        if (!data || !data?.length) {
          return;
        }

        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <main className="home">
      <section className="home__title--wrapper">
        <img src={HpIcon} className="home__logo" alt="Logo Harry Potter" />

        <h1 className="home__title">Landing Page Harry Potter</h1>
      </section>

      <section className="home__content">
        {loading ? (
          <p className="home__loading">Carregando...</p>
        ) : (
          <CharactersList characters={data} />
        )}
      </section>
    </main>
  );
}

export default Home;
