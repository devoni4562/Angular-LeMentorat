import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveConferenceComponent} from './live-conference.component';

describe('LiveConferenceComponent', () =>
{
  let component: LiveConferenceComponent;
  let fixture: ComponentFixture<LiveConferenceComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [LiveConferenceComponent]
    });
    fixture = TestBed.createComponent(LiveConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
