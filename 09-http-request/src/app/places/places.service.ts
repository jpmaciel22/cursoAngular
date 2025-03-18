import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';


@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient)
  private userPlaces = signal<Place[]>([]);
  private errorService = inject(ErrorService)

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places').pipe(tap({
      next: (userPlaces) => this.userPlaces.set(userPlaces)
    }))
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces()

    // this.userPlaces.update((array) => [...array, place]);
    //com set e verificacao de locais iguais.
    if(!prevPlaces.some((everyPlace) => everyPlace.id === place.id)){
    this.userPlaces.set([...prevPlaces,place])
    }

    return this.httpClient.put('http://localhost:3000/user-places', {id: place.id}).pipe(
      catchError(err => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError(err.message)
        return throwError(() => new Error(err.message))
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if(prevPlaces.some((everyPlace) => everyPlace.id === place.id)){
      this.userPlaces.set(prevPlaces.filter((array) => array.id !== place.id))
      }

    return this.httpClient.delete('http://localhost:3000/user-places/:' + place.id).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError(error.message);
        return throwError(() => new Error(error.message))
      })
    );
  }

  private fetchPlaces(url: string) {
    return this.httpClient.get<{places: Place[]}>(url)
    .pipe(map((response) => response.places),
    catchError((error) => throwError(() => new Error(error.message))))
  }
}
