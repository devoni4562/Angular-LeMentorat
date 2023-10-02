import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCoffeeComponent } from './business-coffee.component';

describe('BusinessCoffeeComponent', () => {
  let component: BusinessCoffeeComponent;
  let fixture: ComponentFixture<BusinessCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessCoffeeComponent]
    });
    fixture = TestBed.createComponent(BusinessCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
