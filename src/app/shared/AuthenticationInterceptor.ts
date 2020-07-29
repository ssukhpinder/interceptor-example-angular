import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>, next: HttpHandler
    ): Observable<HttpEvent<any>> {
    
        const isUserLoggedIn = true;                            //Check user login logic here
        const authTokenValue = "jhdshjdhsjhjsdhjds";             //Add authotization header
        if (isUserLoggedIn) {
            request = request.clone({
                headers: request.headers.set(
                    'Authorization',
                    authTokenValue
                )
            });
        }
        return next.handle(request);
    }
}