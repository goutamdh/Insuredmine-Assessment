import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';

/**
 * Component for managing authentication
 *
 * @export
 * @class AuthComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() displayType: string;

  /**
   * Creates an instance of AuthComponent.
   *
   * @param {AuthService} authService
   * @memberof AuthComponent
   */
  constructor(private authService: AuthService) { }

  ngOnInit() 
  {
  }

  /**
   * Function to get the user name
   *
   * @returns
   * @memberof AuthComponent
   */
  getUser() {
    return this.authService.getUser().UserId;
  }

}
