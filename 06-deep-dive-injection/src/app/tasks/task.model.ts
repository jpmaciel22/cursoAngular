export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TaskStatusOptions = [
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

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
