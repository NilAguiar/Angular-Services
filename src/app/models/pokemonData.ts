export type PokemonData = {
  name: string;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  };
  types: {
      type: {
        name: string,
        url: string,
      }
    }[]

}
