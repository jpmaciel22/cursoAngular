import { Routes } from "@angular/router"
import { NoTaskComponent } from "./tasks/no-task/no-task.component"
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component"
import { TasksComponent } from "./tasks/tasks.component"
import { NewTaskComponent } from "./tasks/new-task/new-task.component"
import { NotFoundComponent } from "./not-found/not-found.component"

export const routes: Routes =
[
  {
    path: '', //localhost:4200/
    component: NoTaskComponent
  },
  {
    path: 'users/:userId', // localhost:4200/users/(o user id)/
    component: UserTasksComponent,
    children: [
      {
        path: '', // aqui no caso é, se digitarmos diretamente o link do pai ao inves de clicar nos users,
        // digitarmos users/u2 por exemplo, irá redirecionar para a children de baixo tasks.
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks', //localhost:4200/users/(o user id)/tasks/
        component: TasksComponent
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
   ]
