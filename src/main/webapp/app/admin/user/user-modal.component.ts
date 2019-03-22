import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/shared/services/user.service';
import { JhiEventManager } from 'ng-jhipster';
import { isDefined } from 'app/shared/util/common-util';

@Component({
    selector: 'ngx-user-modal',
    templateUrl: './user-modal.component.html',
    styles: []
})
export class UserModalComponent implements OnInit {
    currentUser: User;
    constructor(public activeModal: NgbActiveModal, private userService: UserService, private eventManager: JhiEventManager) {}

    ngOnInit() {}

    onSaveUser($event) {
        $event.preventDefault();
        this.userService.save(this.currentUser).subscribe(
            res => {
                this.eventManager.broadcast({
                    name: 'UserComponent',
                    content: isDefined(this.currentUser.Id) ? 'UPDATE_SUCCESS' : 'ADD_SUCCESS'
                });
                this.close();
            },
            err => {
                console.log('err', err);
            }
        );
    }

    close() {
        this.activeModal.dismiss('closed');
    }
}
