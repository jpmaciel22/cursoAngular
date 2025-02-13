import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<{title: string,summary:string,dueDate: string;}>()
  //assim seria feito de forma moderna
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancelAddTask(){
    this.cancel.emit(false)
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
  }
}
