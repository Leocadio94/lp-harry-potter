import Loading from "../components/common/Loading";
import CharactersList from "../components/home/CharactersList";
import { useFetchHarryPotterCharacters } from "../hooks/useFetchHarryPotterCharacters";
import "../styles/home.scss";
import HpIcon from "/images/hp.svg";

function Home() {
  const { data, error, loading } = useFetchHarryPotterCharacters();
  console.log("🚀 ~ Home ~ data, error, loading:", data, error, loading);

  if (error) {
    console.error("Erro ao buscar os personagens de Harry Potter");

    return <h1>Erro ao buscar os personagens de Harry Potter</h1>;
  }

  return (
    <main className="home">
      <section className="home__title--wrapper">
        <img src={HpIcon} className="home__logo" alt="Logo Harry Potter" />

        <h1 className="home__title">Harry Potter</h1>
      </section>

      <section className="home__content">
        {loading ? <Loading /> : <CharactersList characters={data} />}
      </section>
    </main>
  );
}

export default Home;
