import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FreeCntContentComponent} from './free-cnt-content.component';

describe('ContentFreeCntComponent', () =>
{
    let component: FreeCntContentComponent;
    let fixture: ComponentFixture<FreeCntContentComponent>;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [FreeCntContentComponent]
        });
        fixture = TestBed.createComponent(FreeCntContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
