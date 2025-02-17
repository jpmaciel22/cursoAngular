import { Component, Output, Input, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModel } from './input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
enteredInitial = ''
enteredAnnual = ''
enteredReturn = ''
enteredDuration = ''
@Output() add = new EventEmitter<InputModel>

onSubmit(){
  this.add.emit({
    initial: this.enteredInitial,
    annual: this.enteredAnnual,
    return: this.enteredReturn,
    duration: this.enteredDuration
  })
}
}
