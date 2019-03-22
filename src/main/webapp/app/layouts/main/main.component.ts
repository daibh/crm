import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

import { JhiLanguageHelper, AccountService } from 'app/core';
import { NgxRenderHelper } from 'app/core/render/render.helper';

@Component({
    selector: 'ngx-main',
    templateUrl: './main.component.html'
})
export class NgxMainComponent implements OnInit {
    isAuthenticated: boolean;
    isLoaded = false;
    constructor(
        private injector: Injector,
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router,
        private ngxRenderHelper: NgxRenderHelper
    ) {
        const accountService = this.injector.get(AccountService);
        this.injector
            .get(AccountService)
            .getAuthenticationState()
            .subscribe(identity => {
                this.isAuthenticated = accountService.isAuthenticated();
                if (this.isAuthenticated) {
                    this.isLoaded = true;
                    setTimeout(() => {
                        document.querySelector('body').classList.remove('login-page');
                        // this.ngxRenderHelper.addScriptContentToHead('admin-lte.js');
                        this.ngxRenderHelper.addScriptContentToHead('control-setting.js');
                    }, 0);
                }
            });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'crmApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (!this.router.navigated) {
                    if (this.isAuthenticated && !this.isLoaded) {
                        this.isLoaded = true;
                        setTimeout(() => {
                            // this.ngxRenderHelper.addScriptContentToHead('admin-lte.js');
                            this.ngxRenderHelper.addScriptContentToHead('control-setting.js');
                        }, 0);
                    }
                }
            }
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
                setTimeout(() => {
                    this.ngxRenderHelper.addScriptContentToHead('plugin.js');
                });
            }
            if (event instanceof NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });
    }
}
