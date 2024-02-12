import { CiUser } from "react-icons/ci";
import { GiHarryPotterSkull, GiStagHead } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Character } from "../../../typings/typings";
import { renderHarryPotterHouseIcon } from "../../../utils/renderHarryPotterHouseIcon";
import { transformDate, translateHarryPotterHouse } from "../../../utils/utils";

export interface CharacterListProps {
  characters: Character[];
}

const CharactersList = ({ characters }: CharacterListProps) => {
  if (!characters || !characters.length) {
    return <p>Nenhum personagem encontrado!</p>;
  }

  return (
    <div className="characters-list__wrapper">
      <div className="characters-list__list">
        {characters.map((character, index) => (
          <Link
            key={`character-${character.name}-${index}`}
            to={`/personagem/${character.id}`}
            className="characters-list__item"
          >
            <div className="characters-list__inner">
              <h2 className="characters-list__name">
                <span
                  className="characters-list__name--title"
                  title={character?.name}
                >
                  {character.name}
                </span>

                <span className="characters-list__name--icon">
                  {renderHarryPotterHouseIcon(character?.house)}
                </span>
              </h2>

              <img
                className="characters-list__image"
                src={
                  character?.image ||
                  `https://placehold.co/365x290?text=${character?.name}`
                }
                alt={character?.name}
              />

              <div className="characters-list__text">
                {character?.dateOfBirth && (
                  <p className="characters-list__text-content characters-list__date-of-birth">
                    <span className="characters-list__text-icon">
                      <IoCalendarOutline />
                    </span>{" "}
                    <strong className="characters-list__text-label">
                      Data de Nascimento:
                    </strong>{" "}
                    {character?.dateOfBirth &&
                      transformDate(character?.dateOfBirth)}
                  </p>
                )}

                {character?.house && (
                  <p className="characters-list__text-content characters-list__house">
                    <span className="characters-list__text-icon">
                      {renderHarryPotterHouseIcon(character?.house)}
                    </span>{" "}
                    <strong className="characters-list__text-label">
                      Casa:
                    </strong>{" "}
                    {translateHarryPotterHouse(character?.house)}
                  </p>
                )}

                {character?.patronus && (
                  <p className="characters-list__text-content characters-list__patronus">
                    <span className="characters-list__text-icon">
                      <GiStagHead />
                    </span>{" "}
                    <strong className="characters-list__text-label">
                      Patrono:
                    </strong>{" "}
                    {character?.patronus || "Não possui"}
                  </p>
                )}

                {character?.actor && (
                  <p className="characters-list__text-content characters-list__actor">
                    <span className="characters-list__text-icon">
                      <CiUser />
                    </span>{" "}
                    <strong className="characters-list__text-label">
                      Ator:
                    </strong>{" "}
                    {character?.actor}
                  </p>
                )}

                <p className="characters-list__text-content characters-list__alive">
                  <span className="characters-list__text-icon">
                    <GiHarryPotterSkull />
                  </span>{" "}
                  <strong className="characters-list__text-label">
                    Estado:
                  </strong>{" "}
                  {character?.alive ? "Vivo" : "Morto"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
