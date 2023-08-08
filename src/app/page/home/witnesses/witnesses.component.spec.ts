import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WitnessesComponent} from './witnesses.component';

describe('WitnessesComponent', () =>
{
  let component: WitnessesComponent;
  let fixture: ComponentFixture<WitnessesComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [WitnessesComponent],
    });
    fixture = TestBed.createComponent(WitnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
