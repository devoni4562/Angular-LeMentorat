import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MentorsComponent} from './mentors.component';

describe('MentorsComponent', () =>
{
  let component: MentorsComponent;
  let fixture: ComponentFixture<MentorsComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [MentorsComponent],
    });
    fixture = TestBed.createComponent(MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
