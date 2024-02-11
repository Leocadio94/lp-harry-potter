import {
  GiEagleEmblem,
  GiLion,
  GiMedievalGate,
  GiRaccoonHead,
  GiSnakeBite,
} from "react-icons/gi";

export const renderHarryPotterHouseIcon = (house?: string) => {
  switch (house) {
    case "Gryffindor":
      return <GiLion />;
    case "Slytherin":
      return <GiSnakeBite />;
    case "Hufflepuff":
      return <GiRaccoonHead />;
    case "Ravenclaw":
      return <GiEagleEmblem />;
    default:
      return <GiMedievalGate />;
  }
};
