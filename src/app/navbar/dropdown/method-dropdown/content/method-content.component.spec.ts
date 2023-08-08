import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MethodContentComponent} from './method-content.component';

describe('ContentComponent', () =>
{
    let component: MethodContentComponent;
    let fixture: ComponentFixture<MethodContentComponent>;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [MethodContentComponent]
        });
        fixture = TestBed.createComponent(MethodContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
