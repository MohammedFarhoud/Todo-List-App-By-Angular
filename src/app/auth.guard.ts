import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedIn = new BehaviorSubject(false);
  loggedIn$ = this.loggedIn.asObservable();
  constructor(private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.loggedIn);
    return this.loggedIn.value ? true : this._router.navigate(['/login']);
  }
  change() {
    this.loggedIn.next(! this.loggedIn.getValue());
  }
}
