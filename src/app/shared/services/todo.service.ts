// this service is created to keep tracks of the todos id
// that can be provided to all components

import { Injectable } from '@angular/core';
import { CreateTodo, Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos: Todo[] = [];
  constructor() {}
  getTodos(todoId: string): Todo | undefined {
    const todo = this.#todos.filter((todo) => todo.id == todoId);
    return todo[0];
  }
  addTodo(todo: CreateTodo) {
    this.#todos.push({ ...todo, id: crypto.randomUUID() });
  }
  getAllTodos() {
    return this.#todos;
  }
}
