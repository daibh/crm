import { NgModule } from '@angular/core';

import { CrmSharedLibsModule, FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent } from './';

@NgModule({
    imports: [CrmSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent],
    exports: [CrmSharedLibsModule, FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent]
})
export class CrmSharedCommonModule {}
