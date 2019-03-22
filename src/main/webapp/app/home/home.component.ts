import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import { NgxRenderHelper } from 'app/core/render/render.helper';

@Component({
    selector: 'ngx-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    account: Account;
    modalRef: NgbModalRef;

    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private ngxRenderHelper: NgxRenderHelper
    ) {
        // Inject style lib
        this.ngxRenderHelper.addStyleSheetPlugin('morris.js', 'morris.css');
        this.ngxRenderHelper.addStyleSheetPlugin('jvectormap', 'jquery-jvectormap.css');
        this.ngxRenderHelper.addStyleSheetPlugin('bootstrap-datepicker', 'dist/css/bootstrap-datepicker.min.css');
        this.ngxRenderHelper.addStyleSheetPlugin('bootstrap-daterangepicker', 'daterangepicker.css');
        this.ngxRenderHelper.addStyleSheetPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.min.css');
        // // Inject script lib
        this.ngxRenderHelper.addScriptPlugin('jquery-ui', 'jquery-ui.min.js');
        this.ngxRenderHelper.addScriptPlugin('bootstrap', 'dist/js/bootstrap.min.js');
        this.ngxRenderHelper.addScriptPlugin('raphael', 'raphael.min.js');
        this.ngxRenderHelper.addScriptPlugin('morris.js', 'morris.min.js');
        this.ngxRenderHelper.addScriptPlugin('jquery-sparkline', 'dist/jquery.sparkline.min.js');
        this.ngxRenderHelper.addScriptPlugin('jvectormap', 'jquery-jvectormap-1.2.2.min.js');
        this.ngxRenderHelper.addScriptPlugin('jvectormap', 'jquery-jvectormap-world-mill-en.js');
        this.ngxRenderHelper.addScriptPlugin('jquery-knob', 'dist/jquery.knob.min.js');
        this.ngxRenderHelper.addScriptPlugin('moment', 'min/moment.min.js');
        this.ngxRenderHelper.addScriptPlugin('bootstrap-daterangepicker', 'daterangepicker.js');
        this.ngxRenderHelper.addScriptPlugin('bootstrap-datepicker', 'dist/js/bootstrap-datepicker.min.js');
        this.ngxRenderHelper.addScriptPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.all.min.js');
        this.ngxRenderHelper.addScriptPlugin('jquery-slimscroll', 'jquery.slimscroll.min.js');
        this.ngxRenderHelper.addScriptPlugin('fastclick', 'lib/fastclick.js');
    }

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.ngxRenderHelper.addScriptContentToHead('dashboard.js');
        }, 0);
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.accountService.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    ngOnDestroy() {
        // Destroy style lib
        // this.ngxRenderHelper.removeStyleSheetPlugin('morris.js', 'morris.css');
        // this.ngxRenderHelper.removeStyleSheetPlugin('jvectormap', 'jquery-jvectormap.css');
        // this.ngxRenderHelper.removeStyleSheetPlugin('bootstrap-datepicker', 'dist/css/bootstrap-datepicker.min.css');
        // this.ngxRenderHelper.removeStyleSheetPlugin('bootstrap-daterangepicker', 'daterangepicker.css');
        // this.ngxRenderHelper.removeStyleSheetPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.min.css');
        // Destroy script lib
        // this.ngxRenderHelper.removeScriptPlugin('jquery-ui', 'jquery-ui.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('bootstrap', 'dist/js/bootstrap.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('raphael', 'raphael.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('morris.js', 'morris.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('jquery-sparkline', 'dist/jquery.sparkline.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('jvectormap', 'jquery-jvectormap-1.2.2.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('jvectormap', 'jquery-jvectormap-world-mill-en.js');
        // this.ngxRenderHelper.removeScriptPlugin('jquery-knob', 'dist/jquery.knob.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('moment', 'min/moment.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('bootstrap-daterangepicker', 'daterangepicker.js');
        // this.ngxRenderHelper.removeScriptPlugin('bootstrap-datepicker', 'dist/js/bootstrap-datepicker.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.all.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('jquery-slimscroll', 'jquery.slimscroll.min.js');
        // this.ngxRenderHelper.removeScriptPlugin('fastclick', 'lib/fastclick.js');
        this.ngxRenderHelper.removeScriptContent('dashboard.js');
    }
}
