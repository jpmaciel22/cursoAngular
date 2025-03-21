import { Routes } from "@angular/router"
import { NoTaskComponent } from "./tasks/no-task/no-task.component"
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component"
import { TasksComponent } from "./tasks/tasks.component"
import { NewTaskComponent } from "./tasks/new-task/new-task.component"

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
        path: 'tasks', //localhost:4200/users/(o user id)/tasks/
        component: TasksComponent
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent
      }
    ]
  },
   ]
