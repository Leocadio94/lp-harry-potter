import { CiUser } from "react-icons/ci";
import { GiHarryPotterSkull, GiStagHead, GiWizardStaff } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { Character } from "../../../typings/typings";
import { renderHarryPotterHouseIcon } from "../../../utils/renderHarryPotterHouseIcon";
import {
  transformDate,
  translateHarryPotterHouse,
  translateHarryPotterPatronus,
} from "../../../utils/utils";

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
        {character?.house && (
          <p className="characters-information__text-content characters-information__house">
            <span className="characters-information__text-icon">
              {renderHarryPotterHouseIcon(character?.house)}
            </span>{" "}
            <strong className="characters-information__text-label">
              Casa:
            </strong>{" "}
            {translateHarryPotterHouse(character?.house)}
          </p>
        )}

        {character?.dateOfBirth && (
          <p className="characters-information__text-content characters-information__date-of-birth">
            <span className="characters-information__text-icon">
              <IoCalendarOutline />
            </span>{" "}
            <strong className="characters-information__text-label">
              Data de Nascimento:
            </strong>{" "}
            {character?.dateOfBirth && transformDate(character?.dateOfBirth)}
          </p>
        )}

        <p className="characters-information__text-content characters-information__alive">
          <span className="characters-information__text-icon">
            <GiHarryPotterSkull />
          </span>{" "}
          <strong className="characters-information__text-label">
            Estado:
          </strong>{" "}
          {character?.alive
            ? character?.gender === "male"
              ? "Vivo"
              : "Viva"
            : character?.gender === "male"
            ? "Morto"
            : "Morta"}
        </p>

        {character?.patronus && (
          <p className="characters-information__text-content characters-information__patronus">
            <span className="characters-information__text-icon">
              <GiStagHead />
            </span>{" "}
            <strong className="characters-information__text-label">
              Patrono:
            </strong>{" "}
            {translateHarryPotterPatronus(character?.patronus?.toLowerCase())}
          </p>
        )}

        {character?.actor && (
          <p className="characters-information__text-content characters-information__actor">
            <span className="characters-information__text-icon">
              <CiUser />
            </span>{" "}
            <strong className="characters-information__text-label">
              {character?.gender === "male" ? "Ator" : "Atriz"}:
            </strong>{" "}
            {character?.actor}
          </p>
        )}

        <p className="characters-information__text-content characters-information__gender">
          <span className="characters-information__text-icon">
            <GiHarryPotterSkull />
          </span>{" "}
          <strong className="characters-information__text-label">
            Gênero:
          </strong>{" "}
          {character?.gender === "male" ? "Homem" : "Mulher"}
        </p>

        <p className="characters-information__text-content characters-information__wizard">
          <span className="characters-information__text-icon">
            <GiWizardStaff />
          </span>{" "}
          {character?.wizard ? "Bruxo" : "Trouxa"}
        </p>
      </div>
    </div>
  );
};

export default CharacterInformation;
