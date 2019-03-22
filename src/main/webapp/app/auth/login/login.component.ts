import { Component, OnInit, AfterViewInit, AfterViewChecked, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { LoginService } from 'app/core/login/login.service';
import { StateStorageService } from 'app/core/auth/state-storage.service';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
import { NgxRenderHelper } from 'app/core/render/render.helper';

@Component({
    selector: 'ngx-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, AfterViewChecked {
    authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    credentials: any;
    errors: any[];
    messages: any;
    showMessages: any;
    submitted: boolean;
    isLoaded = false;

    constructor(
        private eventManager: JhiEventManager,
        private loginService: LoginService,
        private stateStorageService: StateStorageService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
        private ngxRenderHelper: NgxRenderHelper
    ) {
        this.credentials = {};
        this.showMessages = {};
        this.errors = [];
        this.messages = [];
        this.submitted = false;
        document.querySelector('body').classList.add('login-page');
    }

    ngOnInit() {
        this.ngxRenderHelper.addStyleSheetPlugin('iCheck', 'square/blue.css');
        this.ngxRenderHelper.addScriptPlugin('icheck', 'icheck.min.js');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#input-username'), 'focus', []);
        }, 0);
    }

    ngAfterViewChecked() {
        if (!this.isLoaded) {
            setTimeout(() => {
                try {
                    $('input').iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue',
                        increaseArea: '20%' /* optional */
                    });
                    this.isLoaded = true;
                } catch (error) {}
            }, 0);
        }
    }

    login() {
        this.errors = [];
        this.loginService
            .login({
                username: this.username,
                password: this.password,
                rememberMe: this.rememberMe
            })
            .then(() => {
                this.authenticationError = false;
                this.showMessages.success = true;
                this.messages.push('login.messages.success.redirect');

                if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
                    this.router.navigate(['/']);
                }

                this.eventManager.broadcast({
                    name: 'authenticationSuccess',
                    content: 'Sending Authentication Success'
                });

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is succesful, go to stored previousState and clear previousState
                const redirect = this.stateStorageService.getUrl();
                if (redirect) {
                    this.stateStorageService.storeUrl(null);
                    this.router.navigate([redirect]);
                } else {
                    this.router.navigate(['/']);
                }
            })
            .catch(err => {
                this.authenticationError = true;
                this.errors.push('login.messages.error.authentication');
                this.showMessages.error = true;
            });
    }

    register() {
        this.router.navigate(['/register']);
    }

    requestResetPassword() {
        this.router.navigate(['/reset', 'request']);
    }
}
