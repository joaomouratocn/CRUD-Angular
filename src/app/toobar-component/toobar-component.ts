import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toobar-component',
  imports: [RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: './toobar-component.html',
  styleUrl: './toobar-component.css',
})
export class ToobarComponent {

}
