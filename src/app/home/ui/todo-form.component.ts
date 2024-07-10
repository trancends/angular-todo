import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../shared/interfaces/todo';
import { IdCountService } from '../../shared/services/id-count.service';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="addTodo()">
      @if (warning) {
        <div class="warning">all field required</div>
      }
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
  styles: `
    :host * {
      box-sizing: border-box;
    }
    .warning {
      width: 200px;
      background-color: maroon;
      color: white;
      padding: 5px;
    }

    form {
      display: flex;
      flex-direction: column;
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
  `,
})
export class TodoFormComponent {
  warning = false;
  @Output() onAdd = new EventEmitter<Todo>();
  private id = inject(IdCountService);
  private fb = inject(FormBuilder);
  newTodo: Todo = {
    id: this.id.getId(),
    title: '',
    description: '',
  };

  myForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  addTodo() {
    if (this.myForm.valid) {
      this.newTodo.id = this.id.getId();
      this.newTodo.title = this.myForm.value.title;
      this.newTodo.description = this.myForm.value.description;
      this.onAdd.emit(this.newTodo);
      this.id.addId();
      this.warning = false;
      this.myForm.reset();
    } else {
      this.warning = true;
    }
  }
}
