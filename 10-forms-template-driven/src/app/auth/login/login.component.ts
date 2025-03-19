import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(){
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');
      if(savedForm){
        const loadedFormData = JSON.parse(savedForm)
        const savedEmail = loadedFormData.email;
        const savedPassword = loadedFormData.password;

        setTimeout(() => {
          this.form()!.controls['email'].setValue(savedEmail); // este controls funciona como o 'emails.touched'
          // do html, já que ele puxa os dados diretamente do #email='ngModel'
          this.form()!.controls['password'].setValue(savedPassword);
        },100);
      }

      const subscription = this.form()?.valueChanges?.subscribe({
        next: (value) => {
          window.localStorage.setItem('saved-login-form',JSON.stringify(
            {email: value.email, password: value.password}));
        }
      });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe())
    });

  }
  private destroyRef = inject(DestroyRef)
  private form = viewChild<NgForm>('form') // acessando o #form do template html, o mesmo form acessado na
  // funcao abaixo

  onSubmit(form:NgForm){
    if(!form.form.valid){
      return;
    }

    const emailInput = form.form.value.email
    const passInput = form.form.value.password
    console.log(passInput, emailInput)

    form.form.reset();
  }
}
