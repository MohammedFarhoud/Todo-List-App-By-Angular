import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLoggedIn = false;
  userName: string ='';
  quote: string ='';
  constructor(private _authGuard: AuthGuard, private _router: Router, private _usersService: UsersService) {
  }

  getLogin = () => {
    if (this.userName === '' && this.quote !== '') {
      return;
    }
    this._router.navigate(['/home'])
    this._usersService.addUser(this.userName, this.quote);
    this._authGuard.change();
    this._authGuard.loggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  submit(form: NgForm) {
    console.log(form);
  }
}
