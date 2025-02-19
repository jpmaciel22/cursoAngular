import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // faz perder o escopo do css para que os elementos invocados com
  //ngContent recebam o css
  , host:{
    class:'control' ,// ao fazer isso toda vez que eu invocar o app control ele ja usara esta classe no host
    '(click)': 'onclick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control' // antigo e pior q mudar no component
  // @HostListener('click') onclick(){
  //   console.log('Click')
  // }

  label = input.required<string>()

  onclick(){
    console.log('Click')
  }

}
