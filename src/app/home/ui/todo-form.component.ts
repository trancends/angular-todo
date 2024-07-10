import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-form',
  template: ``,
  imports: [],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);
}
