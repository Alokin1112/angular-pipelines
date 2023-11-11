import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, CommonModule } from '@angular/common';
import { environment } from '@env/environment';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'angular-template';
  environment = environment;
}
