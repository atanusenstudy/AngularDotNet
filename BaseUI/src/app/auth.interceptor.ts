import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            setHeaders: {
                Authorization: 'My_Auth_Header'
            }
        });
        
        return next.handle(modifiedRequest);
        //throw new Error('Method not implemented.');
    }
     
}