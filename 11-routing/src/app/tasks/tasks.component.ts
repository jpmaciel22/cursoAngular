import { Component, computed, DestroyRef, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  // order = input<'asc' | 'desc'>();
  userId = input.required<string>();
  private tasksService = inject(TasksService)
  userTasks = computed(() => this.tasksService.allTasks().filter((task) => task.userId === this.userId()));

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)
  order?: 'asc'|'desc';
  ngOnInit(): void{
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: params => this.order = params['order'],
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
