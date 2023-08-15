import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCaseComponent } from './delete-case.component';

describe('DeleteCaseComponent', () => {
  let component: DeleteCaseComponent;
  let fixture: ComponentFixture<DeleteCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCaseComponent]
    });
    fixture = TestBed.createComponent(DeleteCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
