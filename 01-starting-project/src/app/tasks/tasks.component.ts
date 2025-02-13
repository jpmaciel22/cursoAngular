import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';

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
 tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Aprender Angular',
    summary: 'Aprender todas as ferramentas básicas e avançadas do Angular, além de outros formatos de desenvolvimento de aplicativos.',
    dueDate: '2025-11-30'
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Aprender Angular',
    summary: 'Aprender todas as ferramentas básicas e avançadas do Angular, além de outros formatos de desenvolvimento de aplicativos.',
    dueDate: '2025-11-30'
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Aprender Angular',
    summary: 'Aprender todas as ferramentas básicas e avançadas do Angular, além de outros formatos de desenvolvimento de aplicativos.',
    dueDate: '2025-11-30'
  }
]

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  onCompleteTaskTasks(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  onStartAddTask(status: boolean){
    this.isAddingTask = status;
  }
  listenCancelAddTask(status: boolean){
    this.isAddingTask = status
  }
  onAddTask(data: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: data.title,
      summary: data.summary,
      dueDate: data.dueDate,
      userId: this.userId
    })
  }
}
