import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent{
  userId = input.required<string>(); // ele consegue esse input a partir da variavel do route
  // ja que foi ativado a partir do app config.
  private usersService = inject(UsersService);
  userName = computed(() => this.usersService.users.find((user) => user.id === this.userId())?.name);
  // private activatedRoute = inject(ActivatedRoute);
  // userName = ''


  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: paramMap => this.userName = this.usersService.users.find( u => u.id === paramMap.get('userId'))?.name || ''
  //   })
  // }
}
