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
 @Input({required:true}) name!: string;
 tasks = [
  {
    id: 't1',
    title: 'Aprender Angular',
    summary: 'Aprender todas as ferramentas básicas e avançadas do Angular, além de outros formatos de desenvolvimento de aplicativos.',
    dueDate: '2025-11-30'
  }
]
}
