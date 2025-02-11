import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {// isso é feito de forma análoga às locals do js nativo
  users = DUMMY_USERS
  @Input({required: true}) avatar!: string; // a exclamacao é para avisar o typescript que sabemos que este valor será settado
  // mesmo que agora ele ainda não tenha sido inicializado.
  @Input({required: true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  onSelectUser(){

  }
}
