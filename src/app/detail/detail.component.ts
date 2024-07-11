import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/services/todo.service';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    <h2>Todo Deatil</h2>
    <p>{{ id }}</p>
    <p>{{ todo?.title ? todo?.title : 'todo not found' }}</p>
    <p>{{ todo?.description ? todo?.description : 'todo not found' }}</p>
  `,
})
export class DetailComponent {
  id = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.route.snapshot.params['id'];

    if (isNaN(+this.id)) {
      this.router.navigate(['/']);
    }
  }
  ts = inject(TodoService);
  // handle if id is a string of characters
  idNum = Number(this.id);
  todo = this.ts.getTodos(+this.id);
}
