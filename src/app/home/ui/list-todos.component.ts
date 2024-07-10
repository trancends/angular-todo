import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list-todo',
  template: `
    <div>
      <ul>
        @for (todo of todos; track todo.id) {
          <li>
            <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
          </li>
        }
      </ul>
    </div>
  `,
  imports: [RouterLink],
})
export class ListTodosComponent {
  @Input() todos: Todo[] = [];
}
