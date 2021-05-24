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
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'

  constructor(private http: HttpClient){}

  /**
   * Returns pokemon list
   */
  getPokemonList(): Observable <any> {
    return this.http.get(this.baseUrl).pipe(catchError(this._handleError))

 }

 getPokemonDetails(name): Observable<PokemonDetails> {
  return this.http
    .get<PokemonDetails>(`${this.baseUrl}/${name}`)
    .pipe(catchError(this._handleError));
}


   /**
   * Handles any request error
   */
    private _handleError(error: HttpErrorResponse) {
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

