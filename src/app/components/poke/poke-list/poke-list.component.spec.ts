import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {PokeListComponent} from './poke-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PokemonService} from '../../../services/pokemon.service';
import {of} from 'rxjs';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
     TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PokeListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an array with table column values [\'name\', \'url\', actions\'];', () => {
    expect(component.displayedColumns).toEqual(['name', 'url', 'actions']);
  });

  it('should be an instance  of eMatTableDataSource', () => {
    expect(component.pokemons).toBeInstanceOf(MatTableDataSource);
  });

});
