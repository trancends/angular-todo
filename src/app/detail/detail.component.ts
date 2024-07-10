import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    <h2>Todo Deatil</h2>
    <p>{{ id }}</p>
  `,
})
export class DetailComponent {
  route = inject(ActivatedRoute);
  id = this.route.snapshot.params['id'];
}
