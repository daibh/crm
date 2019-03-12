import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { CrmSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    LogsComponent,
    NgxMetricsMonitoringComponent,
    NgxHealthModalComponent,
    NgxHealthCheckComponent,
    NgxConfigurationComponent,
    NgxDocsComponent
} from './';

@NgModule({
    imports: [
        CrmSharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        LogsComponent,
        NgxConfigurationComponent,
        NgxHealthCheckComponent,
        NgxHealthModalComponent,
        NgxDocsComponent,
        NgxMetricsMonitoringComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    entryComponents: [NgxHealthModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
