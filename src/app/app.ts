import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { AcademicBackground } from './academic-background/academic-background';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    AcademicBackground,
    Skills
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-thalia-ellen-dev');
}
