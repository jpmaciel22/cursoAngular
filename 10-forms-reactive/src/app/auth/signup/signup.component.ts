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
    email: new FormControl('',{validators: [Validators.email, Validators.required],}),
    password: new FormControl('',{validators: [Validators.required, Validators.minLength(6)],}),
    confirmpass: new FormControl('',{validators: [Validators.required, Validators.minLength(6),],}),
    firstName: new FormControl('',{validators: [Validators.required,],}),
    lastName: new FormControl('',{validators: [Validators.required,],}),
    street: new FormControl('',{validators: [Validators.required,],}),
    houseNumber: new FormControl('',{validators: [Validators.required,],}),
    postalCode: new FormControl('',{validators: [Validators.required,],}),
    city: new FormControl('',{validators: [Validators.required,],}),
    dropdown: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student',
      {validators: [Validators.required]}
     ),
    agree: new FormControl<boolean>(false, {validators: [Validators.required]}),

  })
  onSubmit(){
    console.log(this.NossoForm.controls)
    this.onReset()
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
