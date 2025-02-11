import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]) // isso é feito de forma análoga às locals do
  // controller de JS, aq ele exporta as variaveis da userComponent como locals para serem usadas no seu
  // proprio html, que depois sera rodado no app component e por ai vai..

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    console.log('.')
  }
}
