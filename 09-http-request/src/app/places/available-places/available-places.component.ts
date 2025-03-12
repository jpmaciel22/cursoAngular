import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('')
  private httpClient = inject(HttpClient) // para fazer http requests com angular
  private destroyRef = inject(DestroyRef)
  private placesService = inject(PlacesService)
  ngOnInit(): void {
    this.isFetching.set(true)
    const subscription = this.placesService.loadAvailablePlaces()
    .subscribe({ // este pipe poderia ser ignorado, mas para termos mais exemplos estarei usando aqui.
      next: (places) => {
        // this.places.update((array) => array = places.places) // neste caso sem o pipe
        this.places.update((array) => array = places)
      },
      complete: () => {this.isFetching.set(false)},
      error: (error) => {
        this.error.set(error.message)
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }
  onSelectPlace(selectedPlace: Place){
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace)
    .subscribe({
      next: (resData) => console.log(resData)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
