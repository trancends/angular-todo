import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { ListTodosComponent } from './ui/list-todos.component';
import { TodoService } from '../shared/services/todo.service';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h2 class="title">Todo</h2>
    <div class="container">
      <app-todo-form></app-todo-form>
      <app-list-todo [todos]="todos" />
    </div>
  `,
  imports: [TodoFormComponent, ListTodosComponent],
  styles: `
    .title {
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
})
export class HomeComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.getAllTodos();
}
