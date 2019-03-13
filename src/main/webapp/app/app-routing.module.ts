import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, headerRoute, sidebarRoute, footerRoute, controlRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [headerRoute, sidebarRoute, footerRoute, controlRoute, ...errorRoute];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#CrmAdminModule'
                },
                ...LAYOUT_ROUTES
            ],
            { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [RouterModule]
})
export class CrmAppRoutingModule {}
