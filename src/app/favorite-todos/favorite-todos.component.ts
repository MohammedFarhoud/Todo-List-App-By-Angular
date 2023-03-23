import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-favorite-todos',
  templateUrl: './favorite-todos.component.html',
  styleUrls: ['./favorite-todos.component.css']
})

export class FavoriteTodosComponent  implements OnInit {
  constructor(protected _todosService: TodosService) {
        
  }
  ngOnInit(): void {
  }
}