import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [{
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
}]

// abaixo colocarei o método se utilizando de route resolving, assim como fiz no user-tasks.

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'tasks',
//     pathMatch: 'full',
//   },
//   {
//     path: 'tasks', // <your-domain>/users/<uid>/tasks
//     component: TasksComponent,
//     runGuardsAndResolvers: 'paramsOrQueryParamsChange',
//     resolve: {
//       userTasks: resolveUserTasks,
//     },
//   },
//   {
//     path: 'tasks/new',
//     component: NewTaskComponent,
//   },
// ];
