import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InputModel } from './user-input/input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent, CommonModule]
})
export class AppComponent {
  investimentos: InputModel[] = []
  listenOnSubmit(data: InputModel){
    this.investimentos.push({
      initial: data.initial,
      annual: data.annual,
      return: data.return,
      duration: data.duration
    })
  }
  get investimento() {
    return this.investimentos[0]
  }
}
