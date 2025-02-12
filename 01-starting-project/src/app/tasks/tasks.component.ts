import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required: true}) userId!: string;
 @Input({required:true}) name!: string;
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
}
