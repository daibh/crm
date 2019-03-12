import { Route } from '@angular/router';

import { NgxMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'ngx-metrics',
    component: NgxMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
