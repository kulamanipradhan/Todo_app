import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(0, '', '', false); // Initialize with default values
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
    // Your component initialization code
  }

  onClick(todo:Todo) {
    // Emit the todoDelete event with the current todo as the payload
    this.todoDelete.emit(this.todo);
    console.log("deleted");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(this.todo);

  }
}
