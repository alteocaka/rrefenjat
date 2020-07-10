import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler){
         if (this.auth.isLoggedIn) {
             const authToken = this.auth.currentUser.accessToken;

             if (!!authToken) {
                 request = request.clone({
                     setHeaders: { Authorization: `Bearer ${authToken}` }
                 });
             }
         }
         return next.handle(request);

    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
