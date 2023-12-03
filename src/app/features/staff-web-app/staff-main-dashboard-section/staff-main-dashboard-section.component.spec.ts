import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMainDashboardSectionComponent } from './staff-main-dashboard-section.component';

describe('StaffMainDashboardSectionComponent', () => {
  let component: StaffMainDashboardSectionComponent;
  let fixture: ComponentFixture<StaffMainDashboardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffMainDashboardSectionComponent]
    });
    fixture = TestBed.createComponent(StaffMainDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
