import { Route } from '@angular/router';

import { WidgetComponent } from './widget.component';

export const widgetRoute: Route = {
    path: 'widget',
    component: WidgetComponent,
    data: {
        pageTitle: 'widget.title'
    }
};
