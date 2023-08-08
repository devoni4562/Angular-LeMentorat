import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WhoThatForComponent} from './who-that-for.component';

describe('WhoThatForComponent', () =>
{
  let component: WhoThatForComponent;
  let fixture: ComponentFixture<WhoThatForComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [WhoThatForComponent]
    });
    fixture = TestBed.createComponent(WhoThatForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
