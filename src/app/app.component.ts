import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <nav>
      <a routerLink="/home">Home</a>
    </nav>
    <router-outlet />
  `,
  styles: `
    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  `,
})
export class AppComponent {
  title = 'angular-todo';
}
