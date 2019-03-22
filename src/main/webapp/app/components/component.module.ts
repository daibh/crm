import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { componentState } from './component.route';
import { CrmSharedModule } from 'app/shared';
import { JhiLanguageService } from 'ng-jhipster';

@NgModule({
    imports: [CrmSharedModule, RouterModule.forChild(componentState)],
    declarations: [WidgetComponent],
    entryComponents: [],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmComponentModule {}
