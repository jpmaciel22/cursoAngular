import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // poderia ser também styleUrls: ['./app.component.css'] para poder inserir vários estilos.
})
export class AppComponent {}
