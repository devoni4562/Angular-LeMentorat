import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BusinessOwnerCoffeeComponent} from './business-owner-coffee.component';

describe('BusinessOwnerCoffeeComponent', () =>
{
  let component: BusinessOwnerCoffeeComponent;
  let fixture: ComponentFixture<BusinessOwnerCoffeeComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [BusinessOwnerCoffeeComponent]
    });
    fixture = TestBed.createComponent(BusinessOwnerCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
