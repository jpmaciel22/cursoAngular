import { CurrencyPipe } from '@angular/common';
import { Component, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import { InputModel, ResultadosModel } from '../user-input/input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent /**implements OnChanges*/ {
  @Input() investimentosRaw!: InputModel
  // initialNumber: number = 0;
  // annualNumber: number = 0;
  // returnNumber: number = 0;
  // durationNumber: number = 0;

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['investimentosRaw']) {
  //     this.initialNumber = Number(this.investimentosRaw.initial);
  //     this.annualNumber = Number(this.investimentosRaw.annual);
  //     this.returnNumber = Number(this.investimentosRaw.return);
  //     this.durationNumber = Number(this.investimentosRaw.duration);
  //   }
  // }

  initialNumber = Number(this.investimentosRaw.initial)
  annualNumber = Number(this.investimentosRaw.annual)
  returnNumber = Number(this.investimentosRaw.return)
  durationNumber = Number(this.investimentosRaw.duration)
  resultadosMostraveis: ResultadosModel[] = this.calcularResultados()

  calcularResultados(){
    const resultados = []
    for (let i = 0; i < this.durationNumber; i++) {
      const year = i+1
      const interestEarnedInYear = this.initialNumber * (this.returnNumber / 100);
      this.initialNumber += interestEarnedInYear + this.annualNumber;
      const totalInterest = this.initialNumber - this.annualNumber * year - this.initialNumber;
      resultados.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: this.initialNumber,
        annualInvestment: this.annualNumber,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialNumber + this.annualNumber * year,
      });
  }
    return resultados
}
}
