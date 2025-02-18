import { Injectable, signal } from "@angular/core";
import { InputModel, ResultadosModel } from "./user-input/input.model";
@Injectable({providedIn: 'root'})
export class InvestmentService{
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
        this.resultadosMostrar.set(resultados) // com signals
}
}
