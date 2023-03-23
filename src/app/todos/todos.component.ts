import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../../../TodoInterface'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = this._todosService.todos;
  constructor(protected _todosService: TodosService, protected _usersService: UsersService, ) {
    
  }

  // getAllTodos() {
  //   this._todosService.getAllTodos().subscribe((res: any) => this.todos = res.todos);      
  // }
}
