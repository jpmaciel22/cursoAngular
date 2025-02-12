import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // poderia ser também styleUrls: ['./app.component.css'] para poder inserir vários estilos.
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserName?: string; // variavel tipo locals que sera exportada
  onSelectUserApp(selectedUserName: string){
    this.selectedUserName = selectedUserName
    // const selectedUser = this.users.find(user => user.id === selectedUserId)
    // if(selectedUser){
    // this.selectedUserName = selectedUserName
    // }
  }
}
