import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { CrmTestModule } from '../../../test.module';
import { NgxMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { NgxMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
    describe('NgxMetricsMonitoringComponent', () => {
        let comp: NgxMetricsMonitoringComponent;
        let fixture: ComponentFixture<NgxMetricsMonitoringComponent>;
        let service: NgxMetricsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [CrmTestModule],
                declarations: [NgxMetricsMonitoringComponent]
            })
                .overrideTemplate(NgxMetricsMonitoringComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(NgxMetricsMonitoringComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NgxMetricsService);
        });

        describe('refresh', () => {
            it('should call refresh on init', () => {
                // GIVEN
                const response = {
                    timers: {
                        service: 'test',
                        unrelatedKey: 'test'
                    },
                    gauges: {
                        'jcache.statistics': {
                            value: 2
                        },
                        unrelatedKey: 'test'
                    }
                };
                spyOn(service, 'getMetrics').and.returnValue(of(response));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.getMetrics).toHaveBeenCalled();
            });
        });
    });
});
