import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodosInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request.clone({headers: request.headers
            .append('My-Todos-Header', 'Trying Interceptor')
            .append('Authorization', 'trialAuth')})
    console.log(modifiedRequest, 'success');
    
    return next.handle(modifiedRequest);
  }
}
