import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MentoratMethodComponent} from './mentorat-method.component';

describe('MentoratMethodComponent', () =>
{
  let component: MentoratMethodComponent;
  let fixture: ComponentFixture<MentoratMethodComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [MentoratMethodComponent]
    });
    fixture = TestBed.createComponent(MentoratMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
