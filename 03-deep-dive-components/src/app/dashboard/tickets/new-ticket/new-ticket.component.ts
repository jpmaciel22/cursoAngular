import { Component, ViewChild, ElementRef, signal, viewChild, AfterViewInit, output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

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
  add = output<{title: string, text: string}>()

  enteredTitle = signal('')
  enteredText = signal('')

  // é bom de tratar os dados se necessario em ngAfterViewInit e nao em ngOnInit, pois no caso do ngOnInit
  // os dados ainda estariam undefined, ao contrário do que acontece com o afterview
  ngAfterViewInit(): void {
      console.log(this.form().nativeElement);
  }

  onSubmit(/*titleInput: HTMLInputElement, textInput: HTMLTextAreaElement*/){
    const title = this.enteredTitle() /*titleInput.value*/
    const texto = this.enteredText() /*textInput.value*/
    this.add.emit({title: title, text: texto})
    this.form().nativeElement.reset(); // nesse caso precisamos do .nativeElement pois o ElementRef
    // aponta para o form element que esta fazendo referencia ao elemento do DOM form, porem para acessar O FORM
    //  em si precisamos desse .nativeElement

    //podia se fazer também assim ja que agora usamos two way binding:
    // this.enteredText.set('')
    // this.enteredTitle.set('')

  }
}
