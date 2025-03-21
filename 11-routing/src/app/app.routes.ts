import { Routes } from "@angular/router"
import { TasksComponent } from "./tasks/tasks.component"
import { NoTaskComponent } from "./tasks/no-task/no-task.component"

export const routes: Routes =
[
  {
    path: '', //localhost:4200
    component: NoTaskComponent
  },
  {
      path: 'tasks', //localhost:4200/tasks
      component: TasksComponent
    }
   ]
