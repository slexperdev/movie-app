import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseReservationSectionComponent } from './cruise-reservation-section.component';

describe('CruiseReservationSectionComponent', () => {
  let component: CruiseReservationSectionComponent;
  let fixture: ComponentFixture<CruiseReservationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruiseReservationSectionComponent]
    });
    fixture = TestBed.createComponent(CruiseReservationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
