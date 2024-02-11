export type Character = {
  image?: string;
  name?: string;
  house?: string;
  dateOfBirth?: string;
  alive?: string;
  patronus?: string;
  actor?: string;
};

export interface CharacterListProps {
  characters: Character[];
}

const CharactersList = ({ characters }: CharacterListProps) => {
  if (!characters || !characters.length) {
    return <p>Nenhum personagem encontrado!</p>;
  }

  return (
    <div className="characters-list__wrapper">
      <ul className="characters-list__list">
        {characters.map((character) => (
          <li key={character.name} className="characters-list__item">
            <img
              className="characters-list__image"
              src={
                character?.image ||
                `https://placehold.co/365x520?text=${character?.name}`
              }
              alt={character?.name}
            />

            <h2 className="characters-list__name">{character.name}</h2>
            <p className="characters-list__house">Casa: {character?.house}</p>
            <p className="characters-list__date-of-birth">
              Data de Nascimento:{" "}
              {character?.dateOfBirth &&
                character.dateOfBirth.split("-").join("/")}
            </p>
            <p className="characters-list__alive">
              Estado: {character?.alive ? "Vivo" : "Morto"}
            </p>

            <p className="characters-list__patronus">
              Patrono: {character?.patronus || "Não possui"}
            </p>

            <p className="characters-list__actor">Ator: {character?.actor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
