import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCaseComponent } from './update-case.component';

describe('UpdateCaseComponent', () => {
  let component: UpdateCaseComponent;
  let fixture: ComponentFixture<UpdateCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCaseComponent]
    });
    fixture = TestBed.createComponent(UpdateCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
