import { Component, ViewChild, ElementRef, signal, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; // aqui é para poder o newTicketComponent 'enxergar' o #form do html
  private form = viewChild<ElementRef<HTMLFormElement>>('form') // msm coisa porem com signals


  onSubmit(titleInput: HTMLInputElement, textInput: HTMLTextAreaElement){
    const title = titleInput.value
    const texto = textInput.value
    console.log(title, texto)
    this.form()?.nativeElement.reset(); // nesse caso precisamos do .nativeElement pois o ElementRef
    // aponta para o form element que esta fazendo referencia ao elemento do DOM form, porem para acessar O FORM
    //  em si precisamos desse .nativeElement
  }
}
