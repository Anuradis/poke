export interface PokemonDetails {
  name: string;
  id: number;
  sprites: {front_default: string};
  abilities?: Array<any>;
  types?: Array<any>;
}
