import {Results} from './results';

export interface PokemonAPI {
  count: number;
  next: string;
  results: Results[];
}
