import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [AppComponent,
                 HeaderComponent,
                 UserComponent,
], // non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule] // standalone components

})
export class AppModule {

}
