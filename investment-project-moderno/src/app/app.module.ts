import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentService } from "./investment.service";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";

@NgModule({
  declarations: [AppComponent,HeaderComponent,UserInputComponent,InvestmentResultsComponent],
  imports:[FormsModule, CurrencyPipe,],
  bootstrap: [AppComponent]
})
export class AppModule{

}
