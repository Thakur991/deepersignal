import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
    constructor(
    ) { }

    getHeaders(request) {
        let httpReq = request.clone();
        let token = sessionStorage.getItem('token')
        // const oAuth = JSON.parse(userData);
        httpReq = request.clone({
                headers: new HttpHeaders().set('X-token', `${token}`)
            });
        return httpReq;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const httpsReq = this.getHeaders(request);

        return next.handle(httpsReq)
            .pipe(
                catchError(err => {
                    if (err instanceof HttpErrorResponse && err.status === 401) {
                    }
                    const error = err;
                    return throwError(error);
                }), finalize(() => {
                })
            );
    }
}
