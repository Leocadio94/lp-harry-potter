import { CiUser } from "react-icons/ci";
import { GiHarryPotterSkull, GiStagHead } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { Character } from "../../../typings/typings";
import { renderHarryPotterHouseIcon } from "../../../utils/renderHarryPotterHouseIcon";
import { transformDate, translateHarryPotterHouse } from "../../../utils/utils";

interface CharacterInformationProps {
  character?: Character;
}

const CharacterInformation = ({ character }: CharacterInformationProps) => {
  if (!character) {
    return <p>Nenhum personagem encontrado!</p>;
  }

  return (
    <div className="characters-information__wrapper">
      {character?.image && (
        <img
          className="characters-information__image"
          src={character?.image}
          alt={character?.name}
        />
      )}

      <div className="characters-information__text">
        <p className="characters-information__text-content characters-information__house">
          <span className="characters-information__text-icon">
            {renderHarryPotterHouseIcon(character?.house)}
          </span>{" "}
          <strong className="characters-information__text-label">Casa:</strong>{" "}
          {translateHarryPotterHouse(character?.house)}
        </p>

        <p className="characters-information__text-content characters-information__date-of-birth">
          <span className="characters-information__text-icon">
            <IoCalendarOutline />
          </span>{" "}
          <strong className="characters-information__text-label">
            Data de Nascimento:
          </strong>{" "}
          {character?.dateOfBirth && transformDate(character?.dateOfBirth)}
        </p>

        <p className="characters-information__text-content characters-information__alive">
          <span className="characters-information__text-icon">
            <GiHarryPotterSkull />
          </span>{" "}
          <strong className="characters-information__text-label">
            Estado:
          </strong>{" "}
          {character?.alive ? "Vivo" : "Morto"}
        </p>

        <p className="characters-information__text-content characters-information__patronus">
          <span className="characters-information__text-icon">
            <GiStagHead />
          </span>{" "}
          <strong className="characters-information__text-label">
            Patrono:
          </strong>{" "}
          {character?.patronus || "Não possui"}
        </p>

        <p className="characters-information__text-content characters-information__actor">
          <span className="characters-information__text-icon">
            <CiUser />
          </span>{" "}
          <strong className="characters-information__text-label">Ator:</strong>{" "}
          {character?.actor}
        </p>
      </div>
    </div>
  );
};

export default CharacterInformation;
