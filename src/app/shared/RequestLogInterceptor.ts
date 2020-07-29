import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestLogInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>, next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log(request.url);
        return next.handle(request);
    }
}
