import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CaseStudyComponent} from './case-study.component';

describe('CaseStudyComponent', () =>
{
  let component: CaseStudyComponent;
  let fixture: ComponentFixture<CaseStudyComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [CaseStudyComponent]
    });
    fixture = TestBed.createComponent(CaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
