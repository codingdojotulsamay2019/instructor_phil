import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksShowComponent } from './books-show.component';

describe('BooksShowComponent', () => {
  let component: BooksShowComponent;
  let fixture: ComponentFixture<BooksShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
