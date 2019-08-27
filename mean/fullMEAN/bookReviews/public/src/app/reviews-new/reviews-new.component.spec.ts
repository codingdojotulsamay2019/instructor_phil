import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsNewComponent } from './reviews-new.component';

describe('ReviewsNewComponent', () => {
  let component: ReviewsNewComponent;
  let fixture: ComponentFixture<ReviewsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
