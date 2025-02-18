import { Component, output, inject, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModel } from './input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
enteredInitial = signal('0')
enteredAnnual = signal('0')
enteredReturn = signal('5')
enteredDuration = signal('10')
// calculate = output<InputModel>()

constructor(private investmentService: InvestmentService){}
onSubmit(){
  this.investmentService.calcularResultados({
    initial: +this.enteredInitial(),
    annual: +this.enteredAnnual(),
    return: +this.enteredReturn(),
    duration: +this.enteredDuration()
})
//essa abordagem é em signals
  // this.calculate.emit({
  //   initial: +this.enteredInitial(),
  //   annual: +this.enteredAnnual(),
  //   return: +this.enteredReturn(),
  //   duration: +this.enteredDuration()
  // }) // o + atrás da variavel transforma em number, isso vem do Angular
  this.enteredInitial.set('0');
  this.enteredAnnual.set('0')
  this.enteredReturn.set('5')
  this.enteredDuration.set('10')
}
}
