import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent{
  userId = input.required<string>(); // ele consegue esse input a partir da variavel do route
  // ja que foi ativado a partir do app config.
  private usersService = inject(UsersService);
  userName = computed(() => this.usersService.users.find((user) => user.id === this.userId())?.name);
  dataInputTeste = input.required<string>(); // a static data passada pelo approutes

  // userName = ''
  // private activatedRoute = inject(ActivatedRoute);
  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: paramMap => this.userName = this.usersService.users.find( u => u.id === paramMap.get('userId'))?.name || ''
  //   })
  // }

  // userName = input.required<string>() // no caso de utilizarmos o terceiro método escrito abaixo.
}

// aqui abaixo é caso quisessemos fazer com essa alternativa do observables de activated route,
// só que utilizando fora da classe, direto no app.routes.ts, e para isso devemos exportar daqui e importar lá em resolve.

// export const resolveUserName: ResolveFn<string> = (
//   activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
// ) =>{
//   const usersService = inject(UsersService);
//   const userName = usersService.users.find( u => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
//   return userName;
// }
