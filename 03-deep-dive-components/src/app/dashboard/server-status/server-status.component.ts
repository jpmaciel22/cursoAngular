import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus = signal<'online'|'offline'|'unknown'>('offline');


  private intervalID?: ReturnType<typeof setInterval> // o tipo de intervalID deveria ser NodeJS.Timeout
  // porém o angular nao está reocnhecendo, então utiliazmos o typescript para informar que
  // o seu type deve ser o tipo retornado pela funcao setInterval que é esse NodeJS.Timeout

  ngOnInit(){ // é melhor utilizar o ngOnInit do que o constructor em Angular.
    this.intervalID = setInterval(() => {
      const random = Math.random();
      if(random < 0.5){
        this.currentStatus.set('online')
      } else if(random < 0.9){
        this.currentStatus.set('offline')
      } else{
        this.currentStatus.set('unknown')
      }
    }, 5000)
  }

  ngOnDestroy(){
    clearTimeout(this.intervalID);
  }

}
