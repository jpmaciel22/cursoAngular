import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  NossoForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  onSubmit(){
    const inputEmail = this.NossoForm.value.email;
    const inputPassword = this.NossoForm.value.password
    this.NossoForm.reset();
  }

  get emailInvalid(){
    return(this.NossoForm.controls.email.touched && this.NossoForm.controls.email.dirty && !this.NossoForm.controls.email.valid)
  }
  get passwordInvalid(){
    return(this.NossoForm.controls.password.touched && this.NossoForm.controls.password.dirty && !this.NossoForm.controls.password.valid)
  }
}
