import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PokemonList } from '../interfaces/pokemonList';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PokemonDetails } from '../interfaces/pokemon';
import { PokemontAPI } from '../interfaces/pokemonAPI';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  baseSpeciesURL = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient){}

  /**
   * Returns pokemon list
   */
  getPokemonList(): Observable <any> {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError));

 }

  /**
   * Returns pokemon details after passed param name;
   */
 getPokemonDetails(name): Observable<PokemonDetails> {
  return this.http
    .get<PokemonDetails>(`${this.baseUrl}/${name}`)
    .pipe(catchError(this.handleError));
}


  /**
   * Returns pokemon species after passed param name;
   */
  getPokemonSpecies(name): Observable<any> {
    return this.http
      .get<any>(`${this.baseSpeciesURL}/${name}`)
      .pipe(catchError(this.handleError));
  }



   /**
   * Handles any request error
   */
   private handleError = (error: HttpErrorResponse) => {
     if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred. Handle it accordingly.
       console.error('An error occurred:', error.error.message);
     } else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.error(
         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
       );
     }
     // return an observable with a user-facing error message
     return throwError('Something bad happened; please try again later.');
   }
  }

