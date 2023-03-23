import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../../../TodoInterface'

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  id: string;
  todo: Todo | undefined;
  constructor(private _todosService: TodosService, private _activatedRoute: ActivatedRoute) {
    this.id = this._activatedRoute.snapshot.params['id'];    
    this.todo = this._todosService.getTodoById(this.id);
    console.log(this.id);
  }
}
