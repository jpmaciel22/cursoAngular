import { CurrencyPipe } from '@angular/common';
import { Component, input, inject, computed} from '@angular/core';
import { ResultadosModel } from '../user-input/input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<ResultadosModel[]>() // aqui é com signals sem service

  // private investmentService = inject(InvestmentService) // assim ou assim abaixo
constructor(private investmentService:InvestmentService){}
  results = computed(() => this.investmentService.resultadosMostrar())

}
