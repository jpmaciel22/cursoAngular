import { Injectable } from "@angular/core"
import { type NewTaskData } from "./task/task.model"
@Injectable({providedIn: 'root'})
export class TasksService {
 private tasks = [
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
];

constructor(){
  const tasks = localStorage.getItem('tasks');

  if(tasks){
    this.tasks = JSON.parse(tasks)
  }
}

getUserTasks(userId: string){
  return this.tasks.filter((task) => task.userId === userId)
}
addTask(task: NewTaskData, userId: string){
  this.tasks.push({
    id: new Date().getTime().toString(),
    title: task.title,
    summary: task.summary,
    dueDate: task.dueDate,
    userId: userId
  })
  this.saveTasks()
}
deleteTask(id: string){
  this.tasks = this.tasks.filter((task) => task.id !== id)
  this.saveTasks()
}

private saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks))
}
}
