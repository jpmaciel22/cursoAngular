import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function necessitaInterrogacao(control: AbstractControl){
  if(control.value.includes('?')){
    return null;
  }
  return { naoContemInterrogacao: true };
}

function emailUnico(control: AbstractControl){
  if(control.value !== 'testezudo@gmail.com'){
    return of(null)
  }
  return of({emailsIguais: true})
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{

ngOnInit(): void {
  const savedForm = window.localStorage.getItem('saved-login-form');
  if(savedForm){
    const loadedForm = JSON.parse(savedForm);
    this.NossoForm.setValue({email: loadedForm.email, password: loadedForm.password})
  }


  const subscription = this.NossoForm.valueChanges.pipe(debounceTime(100)).subscribe({
    next: value => {
      window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email, password: value.password}));
    }
  });
  this.destroyRef.onDestroy(() => {
    subscription.unsubscribe();
  })
}
  private destroyRef = inject(DestroyRef);
  NossoForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailUnico]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), necessitaInterrogacao]
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
