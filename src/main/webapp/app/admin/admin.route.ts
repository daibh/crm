import { Routes } from '@angular/router';

import { auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, userRoute } from './';

import { UserRouteAccessService } from 'app/core';

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, userRoute];

export const adminState: Routes = [
    {
        path: '',
        data: {
            authorities: []
        },
        canActivate: [UserRouteAccessService],
        children: ADMIN_ROUTES
    }
];
