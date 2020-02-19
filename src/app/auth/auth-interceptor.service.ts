import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

/**
 * Authentication interceptor to add the http parameters as a global property
 *
 * @export
 * @class AuthInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
     * Creates an instance of AuthInterceptor.
     *
     * @param {SessionService} sessionService
     * @memberof AuthInterceptor
     */
  constructor(
    private router: Router,
    private injector: Injector,
    private authService: AuthService
  ) { }


  /**
   * Function to intecrcept all http request
   *
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the existing request header and attach custom properties
  //req.headers.append('Authorization', `Bearer ${this.authService.getUser()}`),
        // Append the token from the session and pass with every request
  // headers: req.headers.append('Content-Type', 'application/json'),
  const headers = new HttpHeaders({
    'Authorization': `${this.authService.getUser()}`,
    'Content-Type': 'application/json'
  });
    const clonedReq = req.clone({ 
    headers
    });
    return next.handle(clonedReq).do(
      event => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      },
      err => {
        // Dynamically inject this service to avoid cyclic dependencies
        this.authService = this.injector.get(AuthService);
        // Check for unauthorized status and navigate to login page
        // TODO: Need to get proper error code from the client for loggin out the user
        if (err instanceof HttpErrorResponse && err.status === 400) {
          // Remove all session data
          this.authService.removeProfile();
          // Navigate to login
          this.router.navigate(['/auth/login']);
        } else if (err instanceof HttpErrorResponse && err.status === 0) {
          // this.exceptionHandlerService.displayErrorOnServerUnavailable(err);
          // Remove all session data
          this.authService.removeProfile();
          // Navigate to login
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
