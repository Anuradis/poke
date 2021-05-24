import { Component, OnInit } from '@angular/core';
import { PokemontAPI } from 'src/app/interfaces/pokemonAPI';
import { PokemonList } from 'src/app/interfaces/pokemonList';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  // pokemons: PokemonList | null = null;
  pokemons: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }


 getPokemons(): void {
   this.pokemonService.getPokemonList().subscribe((data: PokemontAPI) => {
     this.pokemons = data.results
     console.log(this.pokemons);
   });
 }
}
