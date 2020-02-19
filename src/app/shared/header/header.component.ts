import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
 /**
   * Function to logout the user from the application
   *
   * @memberof NavbarComponent
   */
  onLogout() {
   
        // Navigate to login
        this.authService.setLoginStatus(0);
        this.router.navigate(['/auth/login']);
        this.authService.removeProfile();
    
        // Remove any trailing notificaitons
    }
}
