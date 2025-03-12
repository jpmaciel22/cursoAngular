import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient) // para fazer http requests com angular
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places').subscribe({
      next: (resData) => {
        console.log(resData.places);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }
}
