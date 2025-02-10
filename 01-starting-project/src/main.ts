import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// o ideal é que se chame a bootstrap application apenas uma vez, fazendo uma tree de components,
// onde o header rodaria no app.
