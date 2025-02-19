import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // faz perder o escopo do css para que os elementos invocados com
  //ngContent recebam o css
})
export class ControlComponent {
  label = input.required<string>()
}
