import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonAPI} from 'src/app/interfaces/pokemonAPI';
import {PokemonList} from 'src/app/interfaces/pokemonList';
import {PokemonService} from 'src/app/services/pokemon.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemonsResult: any;
  displayedColumns: string[] = ['name', 'url', 'actions'];
  pokemons = new MatTableDataSource<PokemonList>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, {static: false}) public sort: MatSort = Object.create(null);


  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  /**
   * Passes pokemon name as param and navigates to pokemon detail component
   */
  viewPokemonDetails(name: string): void {
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['pokemon/details/' + name]).then();
    });
  }

  /**
   * Returns pokemon list fetched from PokeAPI
   */
  getPokemons(): void {
    this.pokemonService.getPokemonList().subscribe((data: PokemonAPI) => {
      this.pokemonsResult = data.results;
      this.pokemons = new MatTableDataSource<PokemonList>(this.pokemonsResult);
      this.pokemons.sort = this.sort;
      this.pokemons.paginator = this.paginator;
    });
  }

  /**
   * Filters fetched pokemon list on passed FilteredValue param
   */
  applyFilter(FiltredValue: string) {
    this.pokemons.filter = FiltredValue.trim().toLocaleLowerCase();
  }
}
