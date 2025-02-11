import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // poderia ser também styleUrls: ['./app.component.css'] para poder inserir vários estilos.
})
export class AppComponent {
  users = DUMMY_USERS
}
