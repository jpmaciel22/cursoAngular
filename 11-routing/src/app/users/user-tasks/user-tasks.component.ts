import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>(); // ele consegue esse input a partir da variavel do route
  // ja que foi ativado a partir do app config.
  private usersService = inject(UsersService);

  userName = computed(() => this.usersService.users.find((user) => user.id === this.userId())?.name);

}
