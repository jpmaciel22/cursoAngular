import { Routes } from "@angular/router"
import { NoTaskComponent } from "./tasks/no-task/no-task.component"
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component"
import { NotFoundComponent } from "./not-found/not-found.component"
import { routes as userRoutes} from "./users/users.routes"

export const routes: Routes =
[
  {
    path: '', //localhost:4200/
    component: NoTaskComponent
  },
  {
    path: 'users/:userId', // localhost:4200/users/(o user id)/
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      dataInputTeste: 'Mensagem de teste.'
    },
//  resolve: {
  //  userName: resolveUserName
//  },
  },
  {
    path: '**',
    component: NotFoundComponent
  },
   ]
