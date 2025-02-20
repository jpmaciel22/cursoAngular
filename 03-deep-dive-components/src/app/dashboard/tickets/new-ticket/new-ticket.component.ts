import { Component, ViewChild, ElementRef, signal, viewChild, AfterViewInit } from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit{
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; // aqui é para poder o newTicketComponent 'enxergar' o #form do html
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form') // msm coisa porem com signals

  // é bom de tratar os dados se necessario em ngAfterViewInit e nao em ngOnInit, pois no caso do ngOnInit
  // os dados ainda estariam undefined, ao contrário do que acontece com o afterview
  ngAfterViewInit(): void {
      console.log(this.form().nativeElement)
  }

  onSubmit(titleInput: HTMLInputElement, textInput: HTMLTextAreaElement){
    const title = titleInput.value
    const texto = textInput.value
    this.form().nativeElement.reset(); // nesse caso precisamos do .nativeElement pois o ElementRef
    // aponta para o form element que esta fazendo referencia ao elemento do DOM form, porem para acessar O FORM
    //  em si precisamos desse .nativeElement

  }
}
