import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemontAPI} from 'src/app/interfaces/pokemonAPI';
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

  viewPokemonDetails(name: string): void {
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['pokemon/details/' + name]).then();
    });
  }


  getPokemons(): void {
    this.pokemonService.getPokemonList().subscribe((data: PokemontAPI) => {
      this.pokemonsResult = data.results;
      this.pokemons = new MatTableDataSource<PokemonList>(this.pokemonsResult);
      this.pokemons.sort = this.sort;
      this.pokemons.paginator = this.paginator;
      console.log(data.results, 'data results');
    });
  }

    applyFilter(FiltredValue: string) {
      this.pokemons.filter = FiltredValue.trim().toLocaleLowerCase();
    }
}
