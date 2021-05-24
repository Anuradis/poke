import { Results } from "./results";

export interface  PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}
