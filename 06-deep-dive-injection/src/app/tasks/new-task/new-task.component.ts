import { Component, ElementRef, viewChild, inject, Inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // constructor(private tasksService: TasksService){} // uma forma de injetar o servico em angular
  constructor(@Inject(TasksServiceToken) private tasksService: TasksService){} // uma forma de injetar o servico em angular com custom token

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title: title, description: description})
    this.formEl()?.nativeElement.reset();
  }
}
