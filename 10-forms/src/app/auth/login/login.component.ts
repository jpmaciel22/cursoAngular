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
