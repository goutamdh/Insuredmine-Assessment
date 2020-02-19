import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from "./login/login.component";
// import {SignupComponent} from './signup/signup.component';

/**
 * Manage all the routes in the auth module
 */
const appRoutes: Routes = [
  { path: 'auth', children: [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    // { path: 'register', component: SignupComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  // Allow export of the configured RouterModule with the routes
  exports: [RouterModule]
})
export class AuthRoutingModule { }
