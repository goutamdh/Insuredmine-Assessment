
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { HttpService } from './../Services/http.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AuthService } from '../Services/auth.service';

import 'hammerjs';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
// electron
// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth-interceptor.service';;
import { AuthGuard } from '../core/guards/auth-guard.module';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.module';

/**
 * Module responsible for managing core components
 * =============================================================================
 * Import all modules that you want to share between other modules here and then
 * export those module under the exports array.
 *
 * @export
 * @class CoreModule
 */
@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule,
        HttpClientModule,
    ],
    declarations: [
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        BsDropdownModule,
        AccordionModule,
    ],
    // Globally access the services when added here
    providers: [
        AuthGuard,
        CanDeactivateGuard,
        AuthService,
        HttpService,
        // Authentication interceptor registration.
        // Also allow to register multiple interceptors
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptor,
            multi: true 
        }
    ]
})
export class CoreModule { }
