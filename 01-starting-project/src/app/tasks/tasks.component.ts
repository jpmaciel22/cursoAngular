import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required: true}) userId!: string;
 @Input({required:true}) name!: string;
isAddingTask = false
constructor(private tasksService: TasksService){// dependency injection
  // este private atrás é a mesma coisa que fazer this.tasksService = tasksService
}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }
  onCompleteTaskTasks(id: string){
    this.tasksService.deleteTask(id);
  }
  onStartAddTask(status: boolean){
    this.isAddingTask = status;
  }
  listenCancelAddTask(status: boolean){
    this.isAddingTask = status
  }
  onAddTask(data: NewTaskData, userId: string){
    this.tasksService.addTask(data,userId);
  }
}
