import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/services/todo.service';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    <h2>Todo Deatil</h2>
    @if (!todo) {
      <p>todo not found</p>
    } @else {
      <p>{{ id }}</p>
      <p>{{ todo.title }}</p>
      <p>{{ todo.description }}</p>
    }
  `,
})
export class DetailComponent {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  id = this.route.snapshot.params['id'];
  todo = this.todoService.getTodos(this.id);
}
