import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { TasksComponent } from './app/tasks/tasks.component';

bootstrapApplication(AppComponent,
   {providers: [provideRouter([
    {
      path: 'tasks',
      component: TasksComponent
    }
   ])],
}).catch((err) => console.error(err));
