import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(form:NgForm){
    if(!form.form.valid){
      return;
    }

    const emailInput = form.form.value.email
    const passInput = form.form.value.password
    console.log(passInput, emailInput)
  }
}
