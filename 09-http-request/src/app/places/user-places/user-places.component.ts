import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  isFetching = signal(false);
  error = signal('')
  // private httpClient = inject(HttpClient) // para fazer http requests com angular
  private destroyRef = inject(DestroyRef)
  private placesService = inject(PlacesService)
  places = this.placesService.loadedUserPlaces

  ngOnInit(): void {
      this.isFetching.set(true)
      const subscription = this.placesService.loadUserPlaces()
      .subscribe({
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
