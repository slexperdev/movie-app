import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSectionComponent } from './nav-bar-section.component';

describe('NavBarSectionComponent', () => {
  let component: NavBarSectionComponent;
  let fixture: ComponentFixture<NavBarSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSectionComponent]
    });
    fixture = TestBed.createComponent(NavBarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
