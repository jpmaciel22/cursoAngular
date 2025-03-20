import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {

  // senhasIguais(control: AbstractControl){
  //   if(control.value === this.NossoForm.controls.password){
  //     return null;
  //   }
  //   return { confirmaErrado: true };
  // }

  NossoForm = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmpass: new FormControl('',{
      validators: [Validators.required, Validators.minLength(6),],
    }),

  })
  onSubmit(){
    const emailInput = this.NossoForm.value.email;
    const passInput = this.NossoForm.value.password;
    console.log(emailInput, passInput)
  }
  get emailInvalid(){
    return(this.NossoForm.controls.email.touched && this.NossoForm.controls.email.dirty && !this.NossoForm.controls.email.valid)
  }
  get passwordInvalid(){
    return(this.NossoForm.controls.password.touched && this.NossoForm.controls.password.dirty && !this.NossoForm.controls.password.valid)
  }
  get confirmaPassInvalid(){
    return(this.NossoForm.controls.confirmpass.touched && this.NossoForm.controls.confirmpass.dirty && !this.NossoForm.controls.confirmpass.valid)
  }
  onReset(){
    this.NossoForm.reset()
  }
}
