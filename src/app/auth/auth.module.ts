import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

import { CoreModule } from '../core/core.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
// import { SignupComponent } from './signup/signup.component';

/**
 * Module Responsible to managing authentication
 *
 * @export
 * @class AuthModule
 */
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthModule { }
