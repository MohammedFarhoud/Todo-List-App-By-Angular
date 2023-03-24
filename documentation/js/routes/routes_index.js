var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"home","component":"TodosComponent","canActivate":["AuthGuard"]},{"path":"login","component":"LoginComponent"},{"path":"signup","component":"SignupComponent"},{"path":"user","component":"UserComponent","canActivate":["AuthGuard"]},{"path":"deleted","component":"DeletedTodosComponent","canActivate":["AuthGuard"]},{"path":"favorite","component":"FavoriteTodosComponent","canActivate":["AuthGuard"]},{"path":"todos/:id","component":"TodoDetailsComponent","canActivate":["AuthGuard"]},{"path":"about","component":"AboutComponent"},{"path":"**","component":"NotFoundComponent"}],"kind":"module"}]}