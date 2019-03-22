import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/core';
import { Menu } from 'app/shared/model/menu.model';
import { toDeepTree, showProperty } from 'app/shared/util/common-util';

@Component({
    selector: 'ngx-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    account: any;
    menus: Menu[];
    showProperty;

    constructor(private accountService: AccountService) {
        this.showProperty = showProperty;
        this.accountService.identity().then(account => {
            this.account = account;
        });
    }

    ngOnInit() {}
}
