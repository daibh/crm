import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxHealthService } from './health.service';
import { NgxHealthModalComponent } from './health-modal.component';

@Component({
    selector: 'ngx-health',
    templateUrl: './health.component.html'
})
export class NgxHealthCheckComponent implements OnInit {
    healthData: any;
    updatingHealth: boolean;

    constructor(private modalService: NgbModal, private healthService: NgxHealthService) {}

    ngOnInit() {
        this.refresh();
    }

    baseName(name: string) {
        return this.healthService.getBaseName(name);
    }

    getBadgeClass(statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        } else {
            return 'badge-danger';
        }
    }

    refresh() {
        this.updatingHealth = true;

        this.healthService.checkHealth().subscribe(
            health => {
                this.healthData = this.healthService.transformHealthData(health);
                this.updatingHealth = false;
            },
            error => {
                if (error.status === 503) {
                    this.healthData = this.healthService.transformHealthData(error.error);
                    this.updatingHealth = false;
                }
            }
        );
    }

    showHealth(health: any) {
        const modalRef = this.modalService.open(NgxHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(
            result => {
                // Left blank intentionally, nothing to do here
            },
            reason => {
                // Left blank intentionally, nothing to do here
            }
        );
    }

    subSystemName(name: string) {
        return this.healthService.getSubSystemName(name);
    }
}
