import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToobarComponent } from "./toobar-component/toobar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToobarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Crud');
}
