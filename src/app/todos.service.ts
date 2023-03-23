import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../../TodoInterface'
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: any = [];

  todo:string = '';
  deletedTodos: Todo[] = [];
  favoriteTodos: Todo[] = [];
  favouriteTodosNum: number = 0;
  selectedTodo: any;
  completedTodosNum: number = 0;
  completedTodosPercent: number = 0;

  constructor(private _router: Router, private _http: HttpClient) {
    this.getAllTodos().subscribe((res: any) => {
      this.todos = res.todos;
      this.completedTodosNum = this.todos.filter((todo: any) => todo.completed).length;
      this.completedTodosPercent = this.updateCompletedPercent(this.completedTodosNum);
    })
  }

  addTodo() {
    let idInc = this.todos.length > 0 ? this.todos[this.todos.length-1].id + 1: 0;
    if (this.todos) {
      const todo: Todo = {
        id: idInc,
        todo: this.todo,
        completed: false,
      }
    if (this.todo === '') {
      return;
    }
    this.todos.push(todo);
    this.completedTodosPercent = this.updateCompletedPercent(this.todos.filter((todo: any) => todo.completed).length);
    this.todo = '';          
    } else {
      alert('Enter a valid Todo!!')
    }
  }

  deleteTodo(todo: Todo) {
    console.log('from delete', todo);
    if (todo.favourite) {
      this.favoriteTodos.pop();
      this.favouriteTodosNum = this.favoriteTodos.length;
    }
    console.log(todo);
    this.deletedTodos.push(this.todos.splice(this.todos.indexOf(todo), 1)[0]);
  }

  completeTodo(todo: Todo) {
    todo.completed = !todo.completed;
    if (todo.completed) {
      this.completedTodosPercent = this.updateCompletedPercent(++ this.completedTodosNum)
    } else {
      this.completedTodosPercent = this.updateCompletedPercent(-- this.completedTodosNum)
    }
  }

  updateCompletedPercent(completedCount: number): number{
    return Math.round(( completedCount / this.todos.length) * 100);
  }

  addToFavorite(todo: Todo) {
    todo.favourite = !todo.favourite;
    if (todo.favourite) {
      this.favoriteTodos.push(todo);
    } else {
      this.favoriteTodos.pop();
    }
    this.favouriteTodosNum = this.favoriteTodos.length;
  }

  navigateToTodoDetails(todo: Todo) {
    this._router.navigate(['/todos', todo.id])
  }

  getSelectedTodo(todo: Todo): any {
    this.selectedTodo = todo;
  }

  getTodoById(id: string): Todo | undefined {    
      return this.todos.find((todo: any) => todo.id === parseInt(id, 10));
  }

  getAllTodos(): Observable<Object> {
    return this._http.get('https://dummyjson.com/todos');
  }
}