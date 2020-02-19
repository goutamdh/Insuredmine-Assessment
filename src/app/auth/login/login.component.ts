import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { AuthService } from "../../Services/auth.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
    isLoading = false;
    processing: Boolean = false;
    error: Boolean = false;
    loginForm2: FormGroup;
    // Search the tags in the DOM
     usersdb :any =   [
         {
        
            "userid":"abc@media.com",
            "password":"abc123",
            "username":"tom"
        },
          {
            "userid":"def@media.com",
            "password":"def123",
            "username":"dick"
            
          }    
     ]
    bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
    htmlTag: HTMLElement = document.getElementsByTagName('html')[0];
    user: any = { UserID: "", Password: "" };
    private apiUrl = '';
    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private http: HttpClient) { }
    ngOnInit() {
        // add the css-style to the html and body tags
        this.bodyTag.classList.remove('Signup-page');
        this.htmlTag.classList.remove('Signup-page');
        this.bodyTag.classList.add('login-page');
        this.htmlTag.classList.add('login-page');
    }
    ngOnDestroy() {
        // remove the the body classes
        this.bodyTag.classList.remove('login-page');
        this.htmlTag.classList.remove('login-page');
        document.body.style.background = "none";
    }
    /**
     * Login Button click function
     */
    public login() {
        this.processing = true;
        let userId = this.user.UserID;
        let Password = this.user.Password;
        for(let i=0 ; i< this.usersdb.length; i++)
        {
            console.log('username: '+this.usersdb[i].username);
            console.log('password: '+this.usersdb[i].password)
            if (this.usersdb[i].username === userId && this.usersdb[i].password === Password)
            {
                this.processing = false;
                console.log("User Found" , this.usersdb[i]);
                this.toastr.success('Login Sucessfully');
                this.authService.setUser(this.usersdb[i].userid);
                this.authService.setLoginStatus(1);
                this.router.navigate(['/dashboard']);
            }
        }    
    }
}
