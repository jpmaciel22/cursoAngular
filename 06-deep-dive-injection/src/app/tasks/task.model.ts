import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';
export type TaskOptions = { value: 'open' | 'in-progress' | 'done',
taskStatus: TaskStatus,
text: string
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskOptions>('task-status-options')

export const TaskStatusOptions: TaskOptions
 = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'Working on it'
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed'
  }
]

export const TaskStatusOptionsProvider = {
  provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
