import { useParams } from "react-router-dom";
import CharacterInformation from "../components/character-page/CharacterInformation";
import Loading from "../components/common/Loading";
import { useFetchHarryPotterCharacter } from "../hooks/useFetchHarryPotterCharacter";
import "../styles/character-page.scss";
import { renderHarryPotterHouseIcon } from "../utils/renderHarryPotterHouseIcon";

function CharacterPage() {
  const { id } = useParams();
  const { data, error, loading } = useFetchHarryPotterCharacter(id);

  if (error) {
    console.error("Erro ao buscar o personagem de Harry Potter");

    return <h1>Erro ao buscar o personagem de Harry Potter</h1>;
  }

  const character = data;

  return (
    <section className="character-page">
      {!loading && (
        <div className="character-page__title--wrapper">
          {renderHarryPotterHouseIcon(character?.house, "80px")}
          <h1 className="character-page__title">{character?.name}</h1>
        </div>
      )}

      <div className="character-page__content">
        {loading ? <Loading /> : <CharacterInformation character={character} />}
      </div>
    </section>
  );
}

export default CharacterPage;
