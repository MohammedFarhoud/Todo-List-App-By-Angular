import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { FavoriteTodosComponent } from './favorite-todos/favorite-todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { SignupComponent } from './signup/signup.component';
import { TodosInterceptor } from './todos.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    NavbarComponent,
    TodosComponent,
    FooterComponent,
    NotFoundComponent,
    UserComponent,
    DeletedTodosComponent,
    FavoriteTodosComponent,
    TodoDetailsComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TodosInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
