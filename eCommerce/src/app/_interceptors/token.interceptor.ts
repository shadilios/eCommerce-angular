import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LocalStorageService } from '../_services/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private storage: LocalStorageService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token = this.storage.getData("token");

    const newRequest = request.clone(
      { headers: request.headers.append("Authorization", `Bearer ${token}`) }
    );

    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // If response is 401 Unauthorized, navigate to login screen
          this.router.navigateByUrl("/sign-in");
          // And delete token from local storage
          this.storage.removeData("token");
        }
        // else, rethrow the error
        return throwError(error);
      })
    );


  }
}
