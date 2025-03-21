import { Routes } from "@angular/router"
import { NoTaskComponent } from "./tasks/no-task/no-task.component"
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component"

export const routes: Routes =
[
  {
    path: '', //localhost:4200
    component: NoTaskComponent
  },
  {
    path: 'users/:userId', // localhost:4200/users/(o user id)
    component: UserTasksComponent
  },
   ]
