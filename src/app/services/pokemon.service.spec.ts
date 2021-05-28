import {TestBed} from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
describe('PokemonService', () => {
  let service: PokemonService;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('PokemonService', ['getPokemonList']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService, {provide: PokemonService, useValue: spy}]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
