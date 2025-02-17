import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InputModel, ResultadosModel } from './user-input/input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent, CommonModule]
})
export class AppComponent {
  resultadosMostrar!: ResultadosModel[]
  calcularResultados(data: InputModel){
    let initialNumber = Number(data.initial)
    let annualNumber = Number(data.annual)
    let returnNumber = Number(data.return)
    let durationNumber = Number(data.duration)
      const resultados = []
      for (let i = 0; i < durationNumber; i++) {
        const year = i+1
        const interestEarnedInYear = initialNumber * (returnNumber / 100);
        initialNumber += interestEarnedInYear + annualNumber;
        const totalInterest = initialNumber - annualNumber * year - initialNumber;
        resultados.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: initialNumber,
          annualInvestment: annualNumber,
          totalInterest: totalInterest,
          totalAmountInvested: initialNumber + annualNumber * year,
        });
  }
        this.resultadosMostrar = resultados
}
}
