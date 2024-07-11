import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list-todo',
  template: `
    <div class="container">
      <ul>
        @for (todo of todos; track todo.id) {
          <li>
            <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
          </li>
        } @empty {
          <p>nothing todo</p>
        }
      </ul>
    </div>
  `,
  imports: [RouterLink],
  styles: `
    :host * {
      box-sizing: border-box;
    }

    .container {
      width: 620px;
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0;
    }
  `,
})
export class ListTodosComponent {
  @Input() todos: Todo[] = [];
}
