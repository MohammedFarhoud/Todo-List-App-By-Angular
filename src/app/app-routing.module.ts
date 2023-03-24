import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { FavoriteTodosComponent } from './favorite-todos/favorite-todos.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: TodosComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'deleted', component: DeletedTodosComponent, canActivate: [AuthGuard]},
  {path: 'favorite', component: FavoriteTodosComponent, canActivate: [AuthGuard]},
  {path: 'todos/:id', component: TodoDetailsComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
