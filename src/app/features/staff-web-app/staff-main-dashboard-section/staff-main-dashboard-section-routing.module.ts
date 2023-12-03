import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMainDashboardSectionComponent } from './staff-main-dashboard-section.component';

const routes: Routes = [{
  path : '',
  component : StaffMainDashboardSectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffMainDashboardSectionRoutingModule { }
