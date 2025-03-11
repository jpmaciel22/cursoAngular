import { Component, DestroyRef, inject, OnInit, signal, effect, computed } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0)
  clickCount$ = toObservable(this.clickCount)
  interval$ = interval(1000)
  intervalSignal = toSignal(this.interval$, { initialValue: 0})
  // interval = signal(0)
  // doubleInterval = computed(() => this.interval() * 2)
  private destroyRef = inject(DestroyRef)

  constructor(){
    // toObservable(this.clickCount);
  }

  ngOnInit():void{
    // setInterval(() => {
    //   this.clickCount.update((prevCount) => prevCount + 1);
    // },1000) // msm coisa praticamente porem com signals

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
      subscription.unsubscribe()
    })
  }

  onClick(){
    this.clickCount.update((prevCount) => prevCount + 1);
    // console.log('CLICKS: '+this.clickCount())
  }
}
