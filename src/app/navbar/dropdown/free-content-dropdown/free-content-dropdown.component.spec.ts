import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FreeContentDropdownComponent} from './free-content-dropdown.component';

describe('FreeContentDropdownComponent', () =>
{
  let component: FreeContentDropdownComponent;
  let fixture: ComponentFixture<FreeContentDropdownComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [FreeContentDropdownComponent]
    });
    fixture = TestBed.createComponent(FreeContentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
