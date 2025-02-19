import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', // isso é para mostrar ao angular que qualquer botao que tem o
  // atributo appButton deve ser controlado por este component
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
