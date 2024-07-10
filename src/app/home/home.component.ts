import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<h2>Todo</h2>
    <app-todo-form (onAdd)="addTodo($event)"></app-todo-form> `,
  imports: [TodoFormComponent],
})
export class HomeComponent {
  todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
