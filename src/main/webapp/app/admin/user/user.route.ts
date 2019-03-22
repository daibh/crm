import { Route } from '@angular/router';

import { UserComponent } from './user.component';

export const userRoute: Route = {
    path: 'user',
    component: UserComponent,
    data: {
        pageTitle: 'user.home.title'
    }
};
