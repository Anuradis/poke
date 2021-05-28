import {Component, OnInit} from '@angular/core';
import {PokemontAPI} from 'src/app/interfaces/pokemonAPI';
import {PokemonList} from 'src/app/interfaces/pokemonList';
import {PokemonService} from 'src/app/services/pokemon.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  // pokemons: PokemonList | null = null;
  pokemons: any;
  displayedColumns: string[] = [ 'name', 'url', 'actions'];
  dataSource = new MatTableDataSource<PokemonList>();





  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  viewPokemonDetails(name: string): void {
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['pokemon/details/' + name]).then();
    });
  }


  getPokemons(): void {
    this.pokemonService.getPokemonList().subscribe((data: PokemontAPI) => {
      this.pokemons = data.results;
      this.dataSource = new MatTableDataSource<PokemonList>(this.pokemons);


      console.log(this.pokemons);
    });
  }
}
