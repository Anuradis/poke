import { PokemonDetails } from "./pokemon";

export interface Results {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
  description?: string;
}
