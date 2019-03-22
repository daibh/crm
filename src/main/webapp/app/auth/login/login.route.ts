import { Route } from '@angular/router';
import { LoginComponent } from 'app/auth/login/login.component';

export const loginRoute: Route = {
    path: 'login',
    component: LoginComponent,
    data: {
        pageTitle: 'login.title'
    }
};
