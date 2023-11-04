import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
   constructor(){
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  if (savedTodos.length > 0) {
    this.todos = savedTodos;
  } else {
    this.todos = [];
  }
    
   
   }
   deleteTodo(todo:Todo)
   {
    console.log("deleted",todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
    

   }
   addNewTodo(newTodo: Todo) {
    // Assign a unique sno value (e.g., by incrementing the maximum sno in the array)
    newTodo.sno = this.todos.length + 1;

    this.todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  toggleTodo(newTodo: Todo) {
    // Assign a unique sno value (e.g., by incrementing the maximum sno in the array)
    const index = this.todos.indexOf(newTodo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
