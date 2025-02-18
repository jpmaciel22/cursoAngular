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

}
