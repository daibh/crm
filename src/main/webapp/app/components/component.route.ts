import { Routes } from '@angular/router';

import { widgetRoute } from './';

import { UserRouteAccessService } from 'app/core';

const COMPONENT_ROUTES = [widgetRoute];

export const componentState: Routes = [
    {
        path: '',
        data: {
            authorities: []
        },
        canActivate: [UserRouteAccessService],
        children: COMPONENT_ROUTES
    }
];
