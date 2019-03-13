import { Route } from '@angular/router';

import { ControlComponent } from './control.component';

export const controlRoute: Route = {
    path: '',
    component: ControlComponent,
    outlet: 'control'
};
