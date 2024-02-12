import {
  GiEagleEmblem,
  GiLion,
  GiMedievalGate,
  GiRaccoonHead,
  GiSnakeBite,
} from "react-icons/gi";

const DEFAULT_SIZE = "1em";

export const renderHarryPotterHouseIcon = (house?: string, size?: string) => {
  switch (house) {
    case "Gryffindor":
      return <GiLion size={size || DEFAULT_SIZE} />;
    case "Slytherin":
      return <GiSnakeBite size={size || DEFAULT_SIZE} />;
    case "Hufflepuff":
      return <GiRaccoonHead size={size || DEFAULT_SIZE} />;
    case "Ravenclaw":
      return <GiEagleEmblem size={size || DEFAULT_SIZE} />;
    default:
      return <GiMedievalGate size={size || DEFAULT_SIZE} />;
  }
};
