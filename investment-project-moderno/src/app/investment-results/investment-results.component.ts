import { CurrencyPipe } from '@angular/common';
import { Component, input} from '@angular/core';
import { InputModel, ResultadosModel } from '../user-input/input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent /**implements OnChanges*/ {
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
  results = input<ResultadosModel[]>()


}
