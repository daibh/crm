import { Route } from '@angular/router';

import { NgxDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: NgxDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
