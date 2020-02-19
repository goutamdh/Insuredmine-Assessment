import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../Services/auth.service';

/**
 * Guard to protect the routes that needs authentication
 *
 * @export
 * @class AuthGuard
 */
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    /**
     * Check if the user is allowed to activate the route without
     * authetication
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
     * @memberof AuthGuard
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         console.log('Authenticated: ', this.authService.isLoggedIn())
        // Continue accessing the route
        if (this.authService.isLoggedIn()) { 
          this.authService.setLoginStatus(1);
          return true; }
        // Navigate to login route
        this.router.navigate(['/auth/login']);
        return false;
    }
}
