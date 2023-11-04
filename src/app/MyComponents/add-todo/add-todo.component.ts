import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    if (!this.title.trim() || !this.desc.trim()) {
      // At least one of the fields is empty, so don't add the todo
      return;
    }
    const todo: Todo = {
      sno: 0, // You can set an appropriate value for sno
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  
  }
  }  // Clear the form fields by setting them to empty strings
 
