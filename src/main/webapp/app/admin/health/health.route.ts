import { Route } from '@angular/router';

import { NgxHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'ngx-health',
    component: NgxHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
