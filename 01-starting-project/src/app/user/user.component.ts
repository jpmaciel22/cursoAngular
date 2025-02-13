import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {// isso é feito de forma análoga às locals do js nativo
  @Input({required: true}) user!: User;
  // a exclamacao é para deixar claro ao typescript que um valor será inserido

  // @Input({required: true}) name!: string;
  //ou com signals seria feito assim:
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // ou com signals seria feito assim:
  // select = output<string>();

  @Input({required: true}) selected!: boolean
  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  // neste caso com signals muda também e volta à como era antes.
  // imagePath = computed(() => 'assets/users/' + this.avatar())

  onSelectUser() {
    this.select.emit(this.user.id)
    //o que acontece aqui é o seguinte.. em app.component.html, quando inicializamos a pagina
    // o app espera acontecer um evento que será capturado pela funcao de output select.
    // o evento em questao é o de click, estabelecido no user.component.html, que roda a funcao
    // onSelectUser. esta função envia então o nome do usuário que foi clicado e passa para a função
    // inicial do app, que é a onSelectUserApp que inicialmente estava esperando esse parametro do
    // evento de select.
  }
}
