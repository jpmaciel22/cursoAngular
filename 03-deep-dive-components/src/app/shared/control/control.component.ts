import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
  inject,
  ElementRef,
  ContentChild,
  contentChild} from '@angular/core';

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
  private el = inject(ElementRef) // parecido com o target do js html dom nativo
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild.required<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input')
  // assim que se acha conteudos projetados, utilizando ng-content, no caso de serem
  //  inputs seria mais facil, mas para fazer referencia direta enxergando é assim.
  //  para checar viewChilds checar o new-ticket


  onclick(){
    console.log('Click')
    console.log(this.el)
    console.log(this.control())
  }

}
