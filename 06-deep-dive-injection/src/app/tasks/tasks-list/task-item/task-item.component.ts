import { Component, computed, input,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TaskStatus} from '../../task.model';
import { TasksService } from '../../tasks.service';
import { TasksServiceToken } from '../../../../main';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  private taskService = inject(TasksServiceToken)
  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        this.taskService.updateTaskStatus(taskId, 'OPEN')
        break;
      case 'in-progress':
        this.taskService.updateTaskStatus(taskId,'IN_PROGRESS');
        break;
      case 'done':
        this.taskService.updateTaskStatus(taskId,'DONE');
        break;
      default:
        break;
    }
  }
}
