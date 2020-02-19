import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthGuard } from '../../core/guards/auth-guard.module';
export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard',canActivate: [AuthGuard],pathMatch: 'full', },
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard] },
];
