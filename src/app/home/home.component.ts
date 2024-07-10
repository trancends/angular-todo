import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { ListTodosComponent } from './ui/list-todos.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <app-todo-form (onAdd)="addTodo($event)"></app-todo-form>
    <app-list-todo [todos]="listTodos" />
  `,
  imports: [TodoFormComponent, ListTodosComponent],
})
export class HomeComponent {
  listTodos: Todo[] = [];

  addTodo(todo: Todo) {
    this.listTodos.push({ ...todo });
    console.log(todo);
  }
}
