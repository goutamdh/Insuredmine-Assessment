import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from './../../environments/environment';
import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

/**
 * Service to manage authentication
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {
  /** Instantiate data when service is loaded **/
 static AUTH_USER = 'user';
  private apiUrl = + '';
  token :any =null;

  constructor(private httpService: HttpService) { }

  /**
   * Api call to make authenticate the user
   *
   * @param {any} authReq
   * @returns
   * @memberof AuthService
   */
  login(authReq) {
    return this.httpService.post(this.apiUrl + '/Users/User/Signin', authReq);
  }

  /**
   * Api call for loggin out user from the application
   *
   * @returns
   * @memberof AuthService
   */
  logout() {
    return this.httpService.post(this.apiUrl + '/Users/User/SignOut');
  }

  
 

  /**
   * Function to check if the user is logged in or not
   *
   * @returns {boolean}
   * @memberof AuthService
   */
  isLoggedIn(): boolean {
    if (localStorage.getItem(AuthService.AUTH_USER)) {
      return true;
    }
    return false;
  }

  /**
   * Use to store cokkies info of logged in state
   * TODO: Manage this section properly to save user data
   *
   * @param {any} userData
   * @memberof AuthService
   */
  setUser(token) {
    this.token = token;
    if (token !=null) {
      // localStorage.setItem(AuthService.AUTH_USER, JSON.stringify(user));
      localStorage.setItem( AuthService.AUTH_USER,JSON.stringify(this.token))
    }
  }

  /**
   * Get the details of the logged in user
   *
   * @memberof AuthService
   */
  getUser() {
    try {
      if ((this.token =!undefined || this.token!=null)) {
        this.token = JSON.parse(localStorage.getItem(AuthService.AUTH_USER));
      }
      return this.token;
    } catch (error) {
      console.log(error);
      this.token = null;
    }
  }

  /**
   * Remove any unwanted cookie information on logout
   *
   * @memberof AuthService
   */
  removeProfile(): void {
    // Remove the user and token details from the session
    this.setUser(null);
    localStorage.clear()
    // localStorage.removeItem(AuthService.AUTH_USER);
  }
  public loginStatus = 0; // 0 = not logged in, 1 = logged in

  setLoginStatus(status: number) {
    this.loginStatus = status;
  }
}
