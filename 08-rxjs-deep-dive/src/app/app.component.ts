import { Component, DestroyRef, inject, OnInit, signal, effect, computed } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0});
  // interval = signal(0)
  // doubleInterval = computed(() => this.interval() * 2)
  customInterval$ = new Observable((subscriber) => {
    subscriber.next(() => { // aqui neste next controlamos quando ele agirá e não o que ele fará.
      setInterval(() => {
        subscriber.next({message: 'New value'});
      },1000);
    })
  });
  private destroyRef = inject(DestroyRef);

  constructor(){
    // toObservable(this.clickCount);
  }

  ngOnInit():void{
    // setInterval(() => {
    //   this.clickCount.update((prevCount) => prevCount + 1);
    // },1000) // msm coisa praticamente porem com signals

    // apenas com observables abaixo

    // const subscription = interval(1000).pipe(
    //   map((val)=>val * 2),

    // ).subscribe({ // o subscribe é importante para iniciar em si o observable, sem ele o interval não rodaria.
    //   next: (value) => {console.log(value+1)},
    //   complete: () => {} // executa quando completa..
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe()
    // })

    // a metodologia abaixo é convertendo de signals para observables

    const subscription = this.clickCount$.subscribe({
      next: (value) => console.log('O botão foi clicado ' + this.clickCount() + ' vezes.')
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })

    //custom observable abaixo:
    this.customInterval$.subscribe({
      next: (value) => console.log(value)
    })
  }

  onClick(){
    this.clickCount.update((prevCount) => prevCount + 1);
    // console.log('CLICKS: '+this.clickCount())
  }
}
