import { Component, Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required:true}) name!: string;
}
