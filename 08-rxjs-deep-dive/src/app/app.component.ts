import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit():void{
    interval(1000).subscribe({ // o subscribe é importante para iniciar em si o observable, sem ele o interval não rodaria.
      next: (value) => {console.log(value)},
      complete: () => {} // executa quando completa..
    });
  }
}
