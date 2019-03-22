import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal.component';
import { User, IUser } from 'app/shared/model/user.model';
import { UserService } from 'app/shared/services/user.service';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ngx-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
    users: IUser[];
    eventSubscriber: Subscription;
    constructor(
        private modalService: NgbModal,
        private userService: UserService,
        private eventManager: JhiEventManager,
        private alertService: JhiAlertService
    ) {}

    ngOnInit() {
        this.preparePresentScreen();
    }

    preparePresentScreen() {
        this.eventSubscriber = this.eventManager.subscribe('UserComponent', res => {
            if (res.content === 'ADD_SUCCESS') {
                this.alertService.success('user.created', null, null);
            } else if (res.content === 'UPDATE_SUCCESS') {
                this.alertService.success('user.updated', null, null);
            } else {
            }
            this.loadScreenData();
        });
        this.loadScreenData();
    }

    loadScreenData() {
        this.userService.get().subscribe(res => {
            this.users = res.body;
        });
    }

    onClickAddNew($event) {
        $event.preventDefault();
        const modalRef = this.modalService.open(UserModalComponent);
        modalRef.componentInstance.currentUser = new User();
        modalRef.result.then(res => {}, err => {});
    }

    onClickEdit($event, user: IUser) {
        $event.preventDefault();
        const modalRef = this.modalService.open(UserModalComponent);
        modalRef.componentInstance.currentUser = Object.assign({}, user);
        modalRef.result.then(res => {}, err => {});
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
}
