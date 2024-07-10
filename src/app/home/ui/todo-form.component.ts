import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'todo-form',
  template: `
    <form [formGroup]="myForm">
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      <button type="submit">Add Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
}
