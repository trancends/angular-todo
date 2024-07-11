// this service is created to keep tracks of the todos id
// that can be provided to all components

import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  Todos: Todo[] = [];
  id = 0;
  constructor() {}
  getId() {
    return this.id;
  }
  addId() {
    this.id++;
  }
  getTodos(todoId: number): Todo | undefined {
    const todo = this.Todos.filter((todo) => todo.id == todoId);
    return todo[0];
  }
  addTodo(todo: Todo) {
    this.Todos.push(todo);
  }
  getAllTodos() {
    return this.Todos;
  }
}
