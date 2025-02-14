import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  //assim seria feito de forma moderna
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

  closeAddTask(){
    this.close.emit(false)
  }

  // onSubmit(){
  //   this.add.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     dueDate: this.enteredDate
  //   })
  // }
  // mais moderno com services seria assim:
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate},this.userId)
      this.close.emit(false)
  }
}

