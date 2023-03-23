import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TodosService } from '../todos.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  path="../../assets/Mo.png"
  constructor(private _authGuard: AuthGuard, protected _usersService: UsersService, protected _todosService: TodosService, private _router: Router) {
    this._authGuard.loggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  logout() {
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }
}