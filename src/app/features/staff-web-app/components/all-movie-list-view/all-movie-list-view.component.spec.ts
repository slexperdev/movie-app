import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovieListViewComponent } from './all-movie-list-view.component';

describe('AllMovieListViewComponent', () => {
  let component: AllMovieListViewComponent;
  let fixture: ComponentFixture<AllMovieListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMovieListViewComponent]
    });
    fixture = TestBed.createComponent(AllMovieListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
