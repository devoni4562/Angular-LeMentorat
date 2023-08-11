import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberComponent } from './update-member.component';

describe('UpdateMemberComponent', () => {
  let component: UpdateMemberComponent;
  let fixture: ComponentFixture<UpdateMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMemberComponent]
    });
    fixture = TestBed.createComponent(UpdateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
