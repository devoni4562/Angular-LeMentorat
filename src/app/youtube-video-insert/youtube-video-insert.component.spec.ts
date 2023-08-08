import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoInsertComponent } from './youtube-video-insert.component';

describe('YoutubeVideoInsertComponent', () => {
  let component: YoutubeVideoInsertComponent;
  let fixture: ComponentFixture<YoutubeVideoInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeVideoInsertComponent]
    });
    fixture = TestBed.createComponent(YoutubeVideoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
