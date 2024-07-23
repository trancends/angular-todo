import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onAdd.emit(myForm.getRawValue())">
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      <button type="submit" [disabled]="!myForm.valid">Add Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
  styles: `
    :host * {
      box-sizing: border-box;
    }

    form {
      display: flex;
      gap: 10px;
    }

    input {
      width: 200px;
      padding: 10px;
      border: 2px solid black;
      border-radius: 5px;
    }

    button {
      width: 200px;
      padding: 10px;
      background-color: black;
      color: white;
      border-radius: 5px;
      border: 2px solid black;
    }

    button:hover {
      background-color: white;
      color: black;
    }
    button[disabled] {
      background-color: grey;
      color: white;
    }
  `,
})
export class TodoFormComponent {
  @Output() onAdd = new EventEmitter<CreateTodo>();
  private fb = inject(FormBuilder);

  myForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: [false],
  });
}
