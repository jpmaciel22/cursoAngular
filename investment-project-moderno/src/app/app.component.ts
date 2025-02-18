import { Component, Input, signal } from '@angular/core';
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
  resultadosMostrar = signal<ResultadosModel[] | undefined>(undefined)

  calcularResultados(data: InputModel){
    let initialNumber = data.initial
    let annualNumber = data.annual
    let returnNumber = data.return
    let durationNumber = data.duration
      const resultados = []
      let investimentoAoLongo = initialNumber
      for (let i = 0; i < durationNumber; i++) {
        const year = i+1
        const interestEarnedInYear = initialNumber * (returnNumber / 100);
        investimentoAoLongo += interestEarnedInYear + annualNumber;
        const totalInterest = investimentoAoLongo - annualNumber * year - initialNumber;
        resultados.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investimentoAoLongo,
          annualInvestment: annualNumber,
          totalInterest: totalInterest,
          totalAmountInvested: initialNumber + annualNumber * year,
        });
  }
        this.resultadosMostrar.set(resultados)
}
}
