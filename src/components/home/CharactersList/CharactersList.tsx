export type Character = {
  image?: string;
  name?: string;
  house?: string;
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
              src={character.image}
              alt={character.name}
            />

            <h2 className="characters-list__name">{character.name}</h2>
            <p className="characters-list__house">{character.house}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
