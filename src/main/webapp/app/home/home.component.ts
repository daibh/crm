import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import { NgxRenderHelper } from 'app/core/render/render.helper';

@Component({
    selector: 'ngx-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    account: Account;
    modalRef: NgbModalRef;

    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private ngxRenderHelper: NgxRenderHelper
    ) {
        // Morris chart
        ngxRenderHelper.addStyleSheetPlugin('morris.js', 'morris.css');
        // jvectormap
        ngxRenderHelper.addStyleSheetPlugin('jvectormap', 'jquery-jvectormap.css');
        // Date Picker
        ngxRenderHelper.addStyleSheetPlugin('bootstrap-datepicker', 'dist/css/bootstrap-datepicker.min.css');
        // Daterange picker
        ngxRenderHelper.addStyleSheetPlugin('bootstrap-daterangepicker', 'daterangepicker.css');
        // bootstrap wysihtml5 - text editor
        ngxRenderHelper.addStyleSheetPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.min.css');

        ngxRenderHelper.addScriptPlugin('jquery-ui', 'jquery-ui.min.js');
        ngxRenderHelper.addScriptPlugin('bootstrap', 'dist/js/bootstrap.min.js');
        ngxRenderHelper.addScriptPlugin('raphael', 'raphael.min.js');
        ngxRenderHelper.addScriptPlugin('morris.js', 'morris.min.js');
        ngxRenderHelper.addScriptPlugin('jquery-sparkline', 'dist/jquery.sparkline.min.js');
        ngxRenderHelper.addScriptPlugin('jvectormap', 'jquery-jvectormap-1.2.2.min.js');
        ngxRenderHelper.addScriptPlugin('jvectormap', 'jquery-jvectormap-world-mill-en.js');
        ngxRenderHelper.addScriptPlugin('jquery-knob', 'dist/jquery.knob.min.js');
        ngxRenderHelper.addScriptPlugin('moment', 'min/moment.min.js');
        ngxRenderHelper.addScriptPlugin('bootstrap-daterangepicker', 'daterangepicker.js');
        ngxRenderHelper.addScriptPlugin('bootstrap-datepicker', 'dist/js/bootstrap-datepicker.min.js');
        ngxRenderHelper.addScriptPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.all.min.js');
        ngxRenderHelper.addScriptPlugin('jquery-slimscroll', 'jquery.slimscroll.min.js');
        ngxRenderHelper.addScriptPlugin('fastclick', 'lib/fastclick.js');
        ngxRenderHelper.addScriptContent('dashboard.js');
    }

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
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
        this.ngxRenderHelper.removeScriptPlugin('jquery-ui', 'jquery-ui.min.js');
        this.ngxRenderHelper.removeScriptPlugin('bootstrap', 'dist/js/bootstrap.min.js');
        this.ngxRenderHelper.removeScriptPlugin('raphael', 'raphael.min.js');
        this.ngxRenderHelper.removeScriptPlugin('morris.js', 'morris.min.js');
        this.ngxRenderHelper.removeScriptPlugin('jquery-sparkline', 'dist/jquery.sparkline.min.js');
        this.ngxRenderHelper.removeScriptPlugin('jvectormap', 'jquery-jvectormap-1.2.2.min.js');
        this.ngxRenderHelper.removeScriptPlugin('jvectormap', 'jquery-jvectormap-world-mill-en.js');
        this.ngxRenderHelper.removeScriptPlugin('jquery-knob', 'dist/jquery.knob.min.js');
        this.ngxRenderHelper.removeScriptPlugin('moment', 'min/moment.min.js');
        this.ngxRenderHelper.removeScriptPlugin('bootstrap-daterangepicker', 'daterangepicker.js');
        this.ngxRenderHelper.removeScriptPlugin('bootstrap-datepicker', 'dist/js/bootstrap-datepicker.min.js');
        this.ngxRenderHelper.removeScriptPlugin('bootstrap-wysihtml5', 'bootstrap3-wysihtml5.all.min.js');
        this.ngxRenderHelper.removeScriptPlugin('jquery-slimscroll', 'jquery.slimscroll.min.js');
        this.ngxRenderHelper.removeScriptPlugin('fastclick', 'lib/fastclick.js');
        this.ngxRenderHelper.removeScriptContent('dashboard.js');
    }
}
