import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArticleComponent } from './delete-article.component';

describe('DeleteArticleComponent', () => {
  let component: DeleteArticleComponent;
  let fixture: ComponentFixture<DeleteArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteArticleComponent]
    });
    fixture = TestBed.createComponent(DeleteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
