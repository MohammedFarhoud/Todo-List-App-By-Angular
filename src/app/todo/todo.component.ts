import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'TodoInterface';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent  implements OnInit {
  @Input() todo: any;
  constructor(protected _todosService: TodosService) {
  }
  ngOnInit(): void {
  }
  
  deleteTodo(selectedTodo: Todo): void {
    console.log(selectedTodo);
    this._todosService.deleteTodo(selectedTodo);
  }
}