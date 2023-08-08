import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WhiteSectionComponent} from './white-section.component';

describe('WhiteSectionComponent', () =>
{
  let component: WhiteSectionComponent;
  let fixture: ComponentFixture<WhiteSectionComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [WhiteSectionComponent]
    });
    fixture = TestBed.createComponent(WhiteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
