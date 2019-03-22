import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { CrmSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import { loginState, LoginComponent, AuthRoutingModule, AuthComponent } from './';

const declareComponents = [AuthComponent, LoginComponent];

@NgModule({
    imports: [
        CrmSharedModule,
        AuthRoutingModule,
        RouterModule.forChild(loginState)
        /* jhipster-needle-add-auth-module - JHipster will add admin modules here */
    ],
    declarations: [...declareComponents],
    entryComponents: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmAuthModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
