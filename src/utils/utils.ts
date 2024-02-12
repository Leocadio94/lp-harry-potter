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

export const translateHarryPotterPatronus = (patronus?: string) => {
  switch (patronus) {
    case "stag":
      return "Cervo";
    case "otter":
      return "Lontra";
    case "phoenix":
      return "Fênix";
    case "hare":
      return "Lebre";
    case "wolf":
      return "Lobo";
    case "weasel":
      return "Doninha";
    case "horse":
      return "Cavalo";
    case "dog":
      return "Cachorro";
    case "cat":
      return "Gato";
    case "swan":
      return "Cisne";
    case "doe":
      return "Corça";
    case "fox":
      return "Raposa";
    case "jack russell terrier":
      return "Jack Russell Terrier";
    case "lynx":
      return "Lince";
    case "dragonfly":
      return "Libélula";
    case "nebula":
      return "Nebulosa";
    case "tabby cat":
      return "Gato malhado";
    case "persian cat":
      return "Gato persa";
    case "non-corporeal":
      return "Não corpóreo";
    case "unknown":
      return "Desconhecido";
    default:
      return patronus;
  }
};
