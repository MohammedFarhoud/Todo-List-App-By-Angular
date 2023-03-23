import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})

export class DeletedTodosComponent  implements OnInit {
  constructor(protected _todosService: TodosService) {
        
  }
  ngOnInit(): void {
  }
}