import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffMainDashboardSectionRoutingModule } from './staff-main-dashboard-section-routing.module';
import { NavBarSectionComponent } from '../components/nav-bar-section/nav-bar-section.component';
import { StaffMainDashboardSectionComponent } from './staff-main-dashboard-section.component';
import { CruiseReservationSectionComponent } from '../components/cruise-reservation-section/cruise-reservation-section.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AllMovieListViewComponent } from '../components/all-movie-list-view/all-movie-list-view.component';

@NgModule({
  declarations: [StaffMainDashboardSectionComponent, NavBarSectionComponent,
  CruiseReservationSectionComponent, AllMovieListViewComponent
],
  imports: [
    CommonModule,
    StaffMainDashboardSectionRoutingModule,
    FormsModule,
    DataTablesModule,
    CanvasJSAngularChartsModule
  ]
})
export class StaffMainDashboardSectionModule { }
