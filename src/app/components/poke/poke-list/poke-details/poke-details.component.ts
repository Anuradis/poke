import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../../services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'actions'];
  pokemonDetails: any;
  pokemonSpecies: any;
  name: string;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.name = data.name;

    });
    this.getPokemonSpecies(this.name);
    this.getPokmonDetails(this.name);
  }


  /**
   * Returns pokemon details after passed param name;
   */
  getPokmonDetails(name: string): void {
    this.pokemonService.getPokemonDetails(name).subscribe(data => {
      this.pokemonDetails = data;
    });
  }

  /**
   * Returns pokemon species detail after passed param name;
   */
  getPokemonSpecies(name: string): void {
    this.pokemonService.getPokemonSpecies(name).subscribe(data => {
        this.pokemonSpecies = data;
    });
  }
}
