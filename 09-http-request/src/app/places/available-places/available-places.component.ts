import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

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
  ngOnInit(): void {
    this.isFetching.set(true)
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places')
    .pipe(map((response) => response.places),
          catchError((error) => throwError(() => new Error(error.message))))
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
}
