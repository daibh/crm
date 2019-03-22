import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { loginRoute } from './';

import { UserRouteAccessService } from 'app/core';
import { AuthComponent } from 'app/auth/auth.component';

const AUTH_ROUTES = [loginRoute];

export const loginState: Routes = [
    {
        path: '',
        component: AuthComponent,
        data: {
            authorities: []
        },
        children: AUTH_ROUTES
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginState)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
