import { Route } from '@angular/router';

import { NgxConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'ngx-configuration',
    component: NgxConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
