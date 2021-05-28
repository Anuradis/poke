import {Results} from './results';

export interface PokemontAPI {
  count: number;
  next: string;
  results: Results[];
}
