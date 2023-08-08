import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LastNewsComponent} from './last-news.component';

describe('LastNewsComponent', () =>
{
  let component: LastNewsComponent;
  let fixture: ComponentFixture<LastNewsComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [LastNewsComponent],
    });
    fixture = TestBed.createComponent(LastNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
