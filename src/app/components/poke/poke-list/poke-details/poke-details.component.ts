import { Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../../services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonDetails} from '../../../../interfaces/pokemon';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'actions'];
  dataSource = new MatTableDataSource<PokemonDetails>();
  pokemonDetails: any;
  pokemonSpecies: any;
  name: string;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getPokmonDetails(this.name);
    this.getPokemonSpecies(this.name);
  }

  getPokmonDetails(name: string): void {
    this.pokemonService.getPokemonDetails(name).subscribe(data => {
      this.pokemonDetails = data;
      console.log(this.pokemonDetails, 'DETAILS');
    });
  }

  getPokemonSpecies(name: string): void {
    this.pokemonService.getPokemonSpecies(name).subscribe(data => {
      this.pokemonSpecies = data;
      console.log(this.pokemonSpecies, 'SPECIES');
    });
  }
}
