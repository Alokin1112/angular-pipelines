import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import packageJson from '../../package.json';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'angular-template';
  version = (packageJson as { version: string }).version;
}
