export const transformDate = (date?: string) => {
  return date?.split("-")?.join("/");
};

export const translateHarryPotterHouse = (house?: string) => {
  switch (house) {
    case "Gryffindor":
      return "Grifinória";
    case "Slytherin":
      return "Sonserina";
    case "Hufflepuff":
      return "Lufa-Lufa";
    case "Ravenclaw":
      return "Corvinal";
    default:
      return "Casa desconhecida";
  }
};
